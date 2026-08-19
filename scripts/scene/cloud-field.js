import * as THREE from "../../assets/vendor/three.module.min.js";
import { smooth } from "../storyboard.js";

const LAYERS = [
  { file: "assets/clouds/cc0-cloud-layer-05.png", y: 48, x: -14, z: 60, width: 250, depth: 190, rotation: -0.12, opacity: 0.58, drift: 0.42 },
  { file: "assets/clouds/generated-cirrus-layer.png", y: 91, x: 24, z: 95, width: 350, depth: 260, rotation: 0.2, opacity: 0.72, drift: -0.3 },
  { file: "assets/clouds/cc0-cloud-layer-07.png", y: 132, x: -8, z: 125, width: 430, depth: 315, rotation: -0.06, opacity: 0.44, drift: 0.2 }
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
    const arrival = smooth((state.progress - 0.978) / 0.012);
    group.visible = arrival > 0.001;
    layers.forEach(({ mesh, material, settings }, index) => {
      const layerArrival = smooth((arrival - index * 0.16) / Math.max(0.001, 1 - index * 0.16));
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
