import * as THREE from "../../assets/vendor/three.module.min.js";
import { smooth } from "../storyboard.js";

const LAYERS = [
  { file: "assets/clouds/cc0-cloud-layer-05.png", reveal: 0.925, y: 34, x: -14, z: 50, width: 250, depth: 190, rotation: -0.12, opacity: 0.56, drift: 0.42 },
  { file: "assets/clouds/generated-cirrus-layer.png", reveal: 0.942, y: 74, x: 24, z: 84, width: 350, depth: 260, rotation: 0.2, opacity: 0.7, drift: -0.3 },
  { file: "assets/clouds/cc0-cloud-layer-07.png", reveal: 0.956, y: 118, x: -8, z: 122, width: 440, depth: 325, rotation: -0.06, opacity: 0.43, drift: 0.2 },
  { file: "assets/clouds/generated-cirrus-layer.png", reveal: 0.971, y: 190, x: 45, z: 182, width: 590, depth: 430, rotation: 0.34, opacity: 0.36, drift: -0.24 },
  { file: "assets/clouds/cc0-cloud-layer-05.png", reveal: 0.983, y: 258, x: -55, z: 235, width: 760, depth: 545, rotation: -0.22, opacity: 0.29, drift: 0.16 }
];

export function createCloudField() {
  const group = new THREE.Group();
  const geometry = new THREE.PlaneGeometry(1, 1);
  geometry.rotateX(-Math.PI / 2);
  const loader = new THREE.TextureLoader();
  const layers = LAYERS.map((settings, index) => {
    const texture = loader.load(settings.file);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      color: index === 0 ? 0xf2fbff : 0xe4f5ff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.FrontSide,
      toneMapped: false
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(settings.x, settings.y, settings.z);
    mesh.scale.set(settings.width, 1, settings.depth);
    mesh.rotation.y = settings.rotation;
    mesh.renderOrder = 20 + index;
    mesh.frustumCulled = false;
    group.add(mesh);
    return { mesh, material, texture, settings };
  });
  group.visible = false;

  function update(state, ambientTime = 0) {
    group.visible = state.progress > 0.922;
    layers.forEach(({ mesh, material, settings }, index) => {
      const layerArrival = smooth((state.progress - settings.reveal) / 0.014);
      material.opacity = settings.opacity * layerArrival;
      mesh.position.x = settings.x + Math.sin(ambientTime * 0.028 + index * 1.9) * settings.drift;
      mesh.position.z = settings.z + Math.cos(ambientTime * 0.021 + index) * Math.abs(settings.drift) * 0.7;
    });
  }

  function dispose() {
    geometry.dispose();
    layers.forEach(({ material, texture }) => {
      material.dispose();
      texture.dispose();
    });
  }

  return { group, update, dispose };
}
