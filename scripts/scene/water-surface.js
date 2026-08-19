import * as THREE from "../../assets/vendor/three.module.min.js";

const vertexShader = /* glsl */`
  uniform float uStoryTime;
  uniform float uAmplitude;
  uniform float uDetail;
  uniform float uReveal;
  varying vec3 vWorldPosition;
  varying float vHeight;
  varying float vCrest;

  float waveField(vec2 point) {
    float broad = sin(point.x * 0.105 + point.y * 0.046 - uStoryTime * 0.075) * 0.56;
    broad += sin(point.x * 0.052 - point.y * 0.081 + uStoryTime * 0.042) * 0.31;
    float signal = sin(point.x * 0.43 + point.y * 0.018 - uStoryTime * 0.22) * 0.16;
    signal += sin(point.x * 0.91 - point.y * 0.026 + uStoryTime * 0.31) * 0.055;
    float detail = sin(point.x * 1.72 + point.y * 0.42 - uStoryTime * 0.52) * 0.022;
    float travelingSwell = exp(-pow((point.y + 10.0 - uStoryTime * 0.28) / 24.0, 2.0));
    travelingSwell *= sin(point.x * 0.12 - uStoryTime * 0.055) * 0.36;
    float opening = broad + travelingSwell;
    float revealed = broad * 0.92 + signal * mix(0.65, 1.0, uDetail) + detail * uDetail + travelingSwell;
    return mix(opening, revealed, uReveal);
  }

  void main() {
    vec3 transformed = position;
    vec2 normalizedPosition = position.xz;
    transformed.x = sign(normalizedPosition.x) * pow(abs(normalizedPosition.x), 1.85) * 3000.0;
    transformed.z = sign(normalizedPosition.y) * pow(abs(normalizedPosition.y), 1.85) * 3000.0;
    float field = waveField(transformed.xz);
    transformed.y += field * uAmplitude * 3.1;
    vHeight = transformed.y;
    vCrest = smoothstep(0.18, 0.9, field);
    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const fragmentShader = /* glsl */`
  uniform float uSubmersion;
  uniform float uCaustic;
  uniform float uReveal;
  uniform float uClarity;
  uniform float uStoryTime;
  uniform float uDepth;
  varying vec3 vWorldPosition;
  varying float vHeight;
  varying float vCrest;

  void main() {
    vec3 tangentX = dFdx(vWorldPosition);
    vec3 tangentY = dFdy(vWorldPosition);
    vec3 normal = normalize(cross(tangentX, tangentY));
    if (!gl_FrontFacing) normal *= -1.0;
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float facing = abs(dot(normal, viewDirection));
    float fresnel = pow(1.0 - facing, 2.25);
    vec3 lightDirection = normalize(vec3(-0.42, 0.88, 0.2));
    float diffuse = max(0.0, dot(normal, lightDirection));
    float sparkle = pow(max(0.0, dot(reflect(-lightDirection, normal), viewDirection)), 42.0);
    float caustic = sin(vWorldPosition.x * 0.58 + vWorldPosition.z * 0.21 - uStoryTime * 0.44);
    caustic *= sin(vWorldPosition.z * 0.47 - vWorldPosition.x * 0.16 + uStoryTime * 0.31);
    caustic = pow(abs(caustic), 7.0) * uCaustic;

    vec3 aboveDeep = mix(vec3(0.01, 0.14, 0.36), vec3(0.025, 0.30, 0.60), uReveal);
    vec3 aboveLight = mix(vec3(0.05, 0.42, 0.82), vec3(0.24, 0.76, 1.0), uReveal);
    vec3 above = mix(aboveDeep, aboveLight, diffuse * 0.58 + fresnel * 0.64);
    above += vec3(0.70, 0.90, 1.0) * (sparkle * (0.36 + uReveal * 0.52) + vCrest * 0.045);

    float abyss = smoothstep(0.12, 0.9, uDepth);
    vec3 belowDeep = mix(vec3(0.006, 0.13, 0.34), vec3(0.001, 0.005, 0.026), abyss);
    vec3 belowLight = mix(vec3(0.025, 0.46, 0.86), vec3(0.008, 0.075, 0.24), abyss);
    belowLight = mix(belowLight * 0.72, belowLight, uClarity);
    vec3 below = mix(belowDeep, belowLight, fresnel * 0.54 + diffuse * 0.26);
    below += vec3(0.16, 0.55, 1.0) * caustic * mix(0.24, 0.08, abyss);
    below += vec3(0.46, 0.78, 1.0) * sparkle * 0.22;
    float abyssDepth = smoothstep(12.0, 58.0, -cameraPosition.y);
    float deepTrace = sin(vWorldPosition.x * 0.11 + vWorldPosition.z * 0.045 - uStoryTime * 0.07);
    deepTrace *= sin(vWorldPosition.z * 0.09 - vWorldPosition.x * 0.035 + uStoryTime * 0.04);
    deepTrace = smoothstep(0.42, 0.92, deepTrace) * abyssDepth;
    below += vec3(0.015, 0.065, 0.20) * abyssDepth * (0.42 + fresnel * 0.58);
    below += vec3(0.07, 0.24, 0.62) * deepTrace * 0.14;

    float cameraSide = smoothstep(-0.22, 0.22, cameraPosition.y);
    vec3 color = mix(below, above, cameraSide);
    float distanceHaze = clamp(length(cameraPosition - vWorldPosition) / 125.0, 0.0, 1.0);
    vec3 hazeColor = mix(vec3(0.001, 0.009, 0.04), vec3(0.04, 0.34, 0.68), (1.0 - uSubmersion) * (1.0 - abyss));
    color = mix(color, hazeColor, distanceHaze * mix(0.72, 0.28, uClarity));
    gl_FragColor = vec4(color, 1.0);
  }
`;

export function createWaterSurface(quality) {
  const geometry = new THREE.PlaneGeometry(2, 2, quality.waterX, quality.waterZ);
  geometry.rotateX(-Math.PI / 2);
  const uniforms = {
    uStoryTime: { value: 0 },
    uAmplitude: { value: 0.2 },
    uDetail: { value: 0 },
    uReveal: { value: 0 },
    uSubmersion: { value: 0 },
    uCaustic: { value: 0 },
    uClarity: { value: 0.2 },
    uDepth: { value: 0 }
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide,
    extensions: { derivatives: true }
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.z = -34;
  mesh.frustumCulled = false;

  function update(state, ambientTime = 0) {
    uniforms.uStoryTime.value = state.storyTime + ambientTime * 0.72;
    uniforms.uAmplitude.value = state.surface.amplitude;
    uniforms.uDetail.value = state.surface.detail;
    uniforms.uReveal.value = state.surface.reveal;
    uniforms.uSubmersion.value = state.camera.submersion;
    uniforms.uCaustic.value = state.atmosphere.caustic;
    uniforms.uClarity.value = state.atmosphere.clarity;
    uniforms.uDepth.value = Math.min(1, Math.max(0, -state.camera.y / 64));
  }

  function dispose() {
    geometry.dispose();
    material.dispose();
  }

  return { mesh, update, dispose };
}
