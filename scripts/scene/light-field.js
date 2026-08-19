import * as THREE from "../../assets/vendor/three.module.min.js";

export function createLightField() {
  const group = new THREE.Group();
  const geometry = new THREE.ConeGeometry(9, 72, 24, 1, true);
  const beams = [];
  const positions = [
    [-19, -36, -34, -0.08],
    [-6, -35, -19, 0.05],
    [9, -37, -29, -0.04],
    [21, -35, -12, 0.07]
  ];
  positions.forEach(([x, y, z, rotation], index) => {
    const material = new THREE.MeshBasicMaterial({
      color: index % 2 ? 0x65c5c0 : 0x4d9fa6,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const beam = new THREE.Mesh(geometry, material);
    beam.position.set(x, y, z);
    beam.rotation.z = rotation;
    beam.scale.x = 0.7 + index * 0.12;
    group.add(beam);
    beams.push(beam);
  });

  function update(state) {
    beams.forEach((beam, index) => {
      beam.material.opacity = state.atmosphere.beam * (0.017 + index * 0.004) * state.atmosphere.clarity;
      beam.rotation.y = state.storyTime * 0.0025 + index * 0.6;
    });
  }

  function dispose() {
    geometry.dispose();
    beams.forEach(beam => beam.material.dispose());
  }

  return { group, update, dispose };
}
