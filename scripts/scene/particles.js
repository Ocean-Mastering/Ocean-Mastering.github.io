import * as THREE from "../../assets/vendor/three.module.min.js";

function seeded(index, salt) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

const vertexShader = /* glsl */`
  uniform float uStoryTime;
  uniform float uDensity;
  uniform float uSpeed;
  uniform float uShimmer;
  uniform float uCurrents;
  uniform float uTurbulence;
  uniform float uCoherence;
  uniform float uPressure;
  uniform float uPixelRatio;
  attribute float aSeed;
  varying float vOpacity;
  varying float vGlow;

  void main() {
    vec3 transformed = position;
    float phase = aSeed * 6.28318;
    float time = uStoryTime * uSpeed;
    float depth = clamp(-position.y / 64.0, 0.0, 1.0);
    float currentPhase = position.y * 0.105 + position.z * 0.056 + time * 0.22 + phase;
    float wanderingX = sin(currentPhase) * (1.2 + uTurbulence * 2.4);
    float wanderingZ = cos(position.y * 0.082 - time * 0.17 + phase) * (0.8 + uTurbulence * 1.8);
    float coherentX = sin(position.y * 0.085 + time * 0.12 + phase * 0.18) * 2.6;
    transformed.x += mix(wanderingX, coherentX, uCoherence) * uCurrents;
    transformed.z += mix(wanderingZ, coherentX * 0.42, uCoherence) * uCurrents;
    float pressurePulse = sin(depth * 8.0 - uStoryTime * 0.09 + phase * 0.12);
    transformed.y += pressurePulse * uPressure * 2.8;
    transformed.x += pressurePulse * uPressure * 0.9;
    float nearSurface = 1.0 - smoothstep(0.0, 0.24, depth);
    float flicker = 0.52 + 0.48 * sin(time * 1.7 + phase * 4.0);
    vGlow = mix(0.25, flicker, nearSurface * uShimmer);
    vOpacity = uDensity * mix(0.46, 0.19, depth) * mix(0.72, 1.0, uShimmer * nearSurface);
    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    float size = mix(1.7, 4.2, nearSurface * uShimmer) * mix(1.0, 0.62, depth);
    gl_PointSize = clamp(size * uPixelRatio * (240.0 / max(1.0, -viewPosition.z)), 1.0, 10.0);
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const fragmentShader = /* glsl */`
  varying float vOpacity;
  varying float vGlow;
  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float distanceToCenter = length(point);
    float alpha = smoothstep(0.5, 0.05, distanceToCenter) * vOpacity;
    vec3 color = mix(vec3(0.29, 0.63, 0.64), vec3(0.78, 0.98, 0.91), vGlow);
    gl_FragColor = vec4(color, alpha);
  }
`;

export function createParticles(quality) {
  const count = quality.particles;
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count);
  for (let index = 0; index < count; index += 1) {
    positions[index * 3] = (seeded(index, 1) - 0.5) * 72;
    positions[index * 3 + 1] = -0.7 - seeded(index, 2) * 66;
    positions[index * 3 + 2] = 18 - seeded(index, 3) * 92;
    seeds[index] = seeded(index, 4);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
  const uniforms = {
    uStoryTime: { value: 0 },
    uDensity: { value: 0 },
    uSpeed: { value: 0 },
    uShimmer: { value: 0 },
    uCurrents: { value: 0 },
    uTurbulence: { value: 1 },
    uCoherence: { value: 0 },
    uPressure: { value: 0 },
    uPixelRatio: { value: 1 }
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;

  function update(state, pixelRatio) {
    uniforms.uStoryTime.value = state.storyTime;
    uniforms.uDensity.value = state.particles.density;
    uniforms.uSpeed.value = state.particles.speed;
    uniforms.uShimmer.value = state.particles.shimmer;
    uniforms.uCurrents.value = state.currents.visibility;
    uniforms.uTurbulence.value = state.currents.turbulence;
    uniforms.uCoherence.value = state.currents.coherence;
    uniforms.uPressure.value = state.pressure;
    uniforms.uPixelRatio.value = pixelRatio;
  }

  function dispose() {
    geometry.dispose();
    material.dispose();
  }

  return { points, update, dispose };
}
