import * as THREE from "../../assets/vendor/three.module.min.js";

const vertexShader = /* glsl */`
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const fragmentShader = /* glsl */`
  uniform float uOpacity;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  void main() {
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float edge = pow(1.0 - abs(dot(normalize(vNormal), viewDirection)), 4.2);
    float alpha = smoothstep(0.02, 0.92, edge) * uOpacity;
    gl_FragColor = vec4(vec3(0.38, 0.92, 0.86), alpha);
  }
`;

export function createPressureField() {
  const group = new THREE.Group();
  const geometry = new THREE.SphereGeometry(1, 34, 20);
  const shells = [];

  for (let index = 0; index < 4; index += 1) {
    const material = new THREE.ShaderMaterial({
      uniforms: { uOpacity: { value: 0 } },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      toneMapped: false
    });
    const shell = new THREE.Mesh(geometry, material);
    shell.position.set((index - 1.5) * 3.2, -47 + index * 2.3, -29 - index * 3.2);
    group.add(shell);
    shells.push(shell);
  }

  function update(state) {
    shells.forEach((shell, index) => {
      const pulse = Math.sin(state.storyTime * 0.075 + index * 1.2) * 0.5 + 0.5;
      const scale = 8 + pulse * 25 + index * 4.5;
      shell.scale.setScalar(scale);
      shell.material.uniforms.uOpacity.value = state.pressure * (0.016 + index * 0.0035);
    });
  }

  function dispose() {
    geometry.dispose();
    shells.forEach(shell => shell.material.dispose());
  }

  return { group, update, dispose };
}
