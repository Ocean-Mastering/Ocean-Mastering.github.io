import * as THREE from "../../assets/vendor/three.module.min.js";

function seeded(index, salt) {
  const value = Math.sin(index * 91.137 + salt * 17.713) * 16384.491;
  return value - Math.floor(value);
}

const vertexShader = /* glsl */`
  uniform float uStoryTime;
  uniform float uVisibility;
  uniform float uTurbulence;
  uniform float uCoherence;
  uniform float uPressure;
  uniform float uPixelRatio;
  uniform float uVolumeScale;
  attribute float aT;
  attribute float aLane;
  attribute vec3 aJitter;
  varying float vOpacity;
  varying float vLane;

  void main() {
    float laneCentered = aLane - 2.0;
    float phase = aLane * 1.37;
    float x = (aT - 0.5) * 88.0;
    float baseY = -13.0 - aLane * 10.0;
    float independentY = sin(aT * (7.0 + aLane * 0.45) + phase + uStoryTime * (0.06 + aLane * 0.008));
    independentY *= 3.0 + uTurbulence * 2.7;
    float independentZ = cos(aT * 5.4 - phase + uStoryTime * 0.045) * (4.0 + uTurbulence * 3.2);
    float sharedArc = sin(aT * 6.4 + uStoryTime * 0.055) * 3.8;
    float supportedY = sharedArc + laneCentered * 6.2;
    float supportedZ = cos(aT * 4.8 + uStoryTime * 0.04) * 4.2 + laneCentered * 1.9;
    vec3 transformed;
    transformed.x = x + aJitter.x * mix(5.2, 3.6, uCoherence);
    transformed.y = mix(baseY + independentY, -50.0 + supportedY, uCoherence) + aJitter.y * mix(4.2, 2.6, uCoherence);
    transformed.z = -24.0 + mix(independentZ + laneCentered * 4.0, supportedZ, uCoherence) + aJitter.z * 8.0;
    float pressurePulse = sin(aT * 2.8 - uStoryTime * 0.075 + phase) * uPressure;
    transformed.y += pressurePulse * 3.6;
    transformed.z += pressurePulse * 1.8;
    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    float centerWeight = 1.0 - abs(aT - 0.5) * 1.55;
    vOpacity = uVisibility * max(0.16, centerWeight) * mix(0.56, 0.78, uCoherence);
    vLane = aLane / 4.0;
    float pointSize = (8.0 + aJitter.z * 2.5) * uPixelRatio * (82.0 / max(6.0, -viewPosition.z));
    gl_PointSize = clamp(pointSize * uVolumeScale, 1.4, mix(14.0, 56.0, step(1.01, uVolumeScale)));
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const fragmentShader = /* glsl */`
  uniform float uVolumeOpacity;
  varying float vOpacity;
  varying float vLane;
  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float radius = length(point);
    float alpha = smoothstep(0.5, 0.0, radius) * vOpacity * uVolumeOpacity;
    vec3 low = vec3(0.10, 0.36, 0.78);
    vec3 high = vec3(0.38, 0.76, 1.0);
    gl_FragColor = vec4(mix(low, high, vLane), alpha);
  }
`;

function makeUniforms(volumeScale, volumeOpacity) {
  return {
    uStoryTime: { value: 0 },
    uVisibility: { value: 0 },
    uTurbulence: { value: 1 },
    uCoherence: { value: 0 },
    uPressure: { value: 0 },
    uPixelRatio: { value: 1 },
    uVolumeScale: { value: volumeScale },
    uVolumeOpacity: { value: volumeOpacity }
  };
}

export function createCurrents(quality) {
  const lanes = quality.currentLanes;
  const perLane = quality.currentParticles;
  const count = lanes * perLane;
  const positions = new Float32Array(count * 3);
  const tValues = new Float32Array(count);
  const laneValues = new Float32Array(count);
  const jitter = new Float32Array(count * 3);

  for (let lane = 0; lane < lanes; lane += 1) {
    for (let index = 0; index < perLane; index += 1) {
      const cursor = lane * perLane + index;
      tValues[cursor] = index / (perLane - 1);
      laneValues[cursor] = lanes === 1 ? 2 : (lane / (lanes - 1)) * 4;
      jitter[cursor * 3] = seeded(cursor, 1) - 0.5;
      jitter[cursor * 3 + 1] = seeded(cursor, 2) - 0.5;
      jitter[cursor * 3 + 2] = seeded(cursor, 3) - 0.5;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aT", new THREE.BufferAttribute(tValues, 1));
  geometry.setAttribute("aLane", new THREE.BufferAttribute(laneValues, 1));
  geometry.setAttribute("aJitter", new THREE.BufferAttribute(jitter, 3));
  const detailUniforms = makeUniforms(1, 0.66);
  const volumeUniforms = makeUniforms(4.2, 0.052);
  const createMaterial = uniforms => new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const volumeMaterial = createMaterial(volumeUniforms);
  const detailMaterial = createMaterial(detailUniforms);
  const volume = new THREE.Points(geometry, volumeMaterial);
  const detail = new THREE.Points(geometry, detailMaterial);
  volume.frustumCulled = false;
  detail.frustumCulled = false;
  const group = new THREE.Group();
  group.add(volume, detail);

  function update(state, pixelRatio, ambientTime = 0) {
    for (const uniforms of [volumeUniforms, detailUniforms]) {
      uniforms.uStoryTime.value = state.storyTime + ambientTime * 0.38;
      uniforms.uVisibility.value = state.currents.visibility;
      uniforms.uTurbulence.value = state.currents.turbulence;
      uniforms.uCoherence.value = state.currents.coherence;
      uniforms.uPressure.value = state.pressure;
      uniforms.uPixelRatio.value = pixelRatio;
    }
  }

  function dispose() {
    geometry.dispose();
    volumeMaterial.dispose();
    detailMaterial.dispose();
  }

  return { group, update, dispose };
}
