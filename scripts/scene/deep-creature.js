import * as THREE from "../../assets/vendor/three.module.min.js";
import { smooth } from "../storyboard.js";

const CREATURE_ENTER = 0.58;
const CREATURE_FULL = 0.65;
const CREATURE_LEAVE = 0.79;
const CREATURE_GONE = 0.845;

export function createDeepCreature() {
  const group = new THREE.Group();
  const texture = new THREE.TextureLoader().load("assets/creatures/deep-jellyfish.png");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const material = new THREE.SpriteMaterial({
    map: texture,
    color: 0xa8d4fb,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    depthTest: true,
    fog: true,
    toneMapped: true
  });
  const jellyfish = new THREE.Sprite(material);
  jellyfish.position.set(-14, -42, -38);
  jellyfish.scale.set(6, 9, 1);
  group.add(jellyfish);
  group.visible = false;

  function update(state, ambientTime = 0) {
    const arrival = smooth((state.progress - CREATURE_ENTER) / (CREATURE_FULL - CREATURE_ENTER));
    const departure = 1 - smooth((state.progress - CREATURE_LEAVE) / (CREATURE_GONE - CREATURE_LEAVE));
    const presence = arrival * departure * state.camera.submersion;
    group.visible = presence > 0.002;
    if (!group.visible) return;

    const driftTime = state.storyTime * 0.018 + ambientTime * 0.19;
    const pulse = Math.sin(driftTime * 0.72) * 0.5 + 0.5;
    material.opacity = presence * (0.4 + pulse * 0.045);
    material.rotation = -0.075 + Math.sin(driftTime * 0.41) * 0.018;
    jellyfish.position.x = -14 + Math.sin(driftTime * 0.31) * 0.55;
    jellyfish.position.y = -42 + Math.sin(driftTime * 0.47) * 0.38;
    jellyfish.position.z = -38 + Math.cos(driftTime * 0.27) * 0.32;
    jellyfish.scale.set(6 * (0.985 + pulse * 0.015), 9 * (1.012 - pulse * 0.012), 1);
  }

  function dispose() {
    texture.dispose();
    material.dispose();
  }

  return { group, update, dispose };
}
