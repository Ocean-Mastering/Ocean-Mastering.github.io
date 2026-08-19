import * as THREE from "../../assets/vendor/three.module.min.js";
import { smooth } from "../storyboard.js";
import { createWaterSurface } from "./water-surface.js";
import { createParticles } from "./particles.js";
import { createCurrents } from "./currents.js";
import { createLightField } from "./light-field.js";
import { createPressureField } from "./pressure.js";

const skyVertexShader = /* glsl */`
  varying vec3 vDirection;
  void main() {
    vDirection = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const skyFragmentShader = /* glsl */`
  uniform float uSubmersion;
  uniform float uReveal;
  uniform float uClarity;
  varying vec3 vDirection;
  void main() {
    float vertical = clamp(vDirection.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 airZenith = vec3(0.002, 0.007, 0.012);
    vec3 airHorizon = mix(vec3(0.015, 0.04, 0.052), vec3(0.045, 0.13, 0.15), uReveal);
    vec3 air = mix(airHorizon, airZenith, smoothstep(0.45, 0.88, vertical));
    float upGlow = pow(vertical, 3.2);
    vec3 deep = mix(vec3(0.002, 0.017, 0.032), vec3(0.003, 0.036, 0.055), uClarity);
    vec3 shallow = mix(vec3(0.018, 0.18, 0.22), vec3(0.055, 0.34, 0.34), uClarity);
    vec3 underwater = mix(deep, shallow, upGlow * 0.9);
    underwater += vec3(0.01, 0.075, 0.085) * smoothstep(0.55, 1.0, vertical);
    gl_FragColor = vec4(mix(air, underwater, uSubmersion), 1.0);
  }
`;

function chooseQuality() {
  const mobile = matchMedia("(max-width: 760px)").matches;
  const constrained = (navigator.deviceMemory && navigator.deviceMemory <= 4) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
  if (mobile || constrained) return { tier: "mobile", dpr: 1.25, waterX: 86, waterZ: 110, particles: 1100, currentLanes: 3, currentParticles: 220 };
  if (innerWidth < 1300 || devicePixelRatio > 2) return { tier: "balanced", dpr: 1.45, waterX: 138, waterZ: 164, particles: 2200, currentLanes: 4, currentParticles: 330 };
  return { tier: "high", dpr: 1.75, waterX: 180, waterZ: 210, particles: 3400, currentLanes: 5, currentParticles: 460 };
}

export function createBelowSurfaceScene(canvas, reducedMotion = false) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: devicePixelRatio < 2, powerPreference: "high-performance" });
  } catch (error) {
    return { available: false, quality: "fallback", render() {}, resize() {}, dispose() {} };
  }

  const quality = chooseQuality();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.08, 420);
  const skyGeometry = new THREE.SphereGeometry(210, 36, 20);
  const skyUniforms = {
    uSubmersion: { value: 0 },
    uReveal: { value: 0 },
    uClarity: { value: 0.2 }
  };
  const skyMaterial = new THREE.ShaderMaterial({
    uniforms: skyUniforms,
    vertexShader: skyVertexShader,
    fragmentShader: skyFragmentShader,
    side: THREE.BackSide,
    depthWrite: false
  });
  const sky = new THREE.Mesh(skyGeometry, skyMaterial);
  sky.renderOrder = -10;
  scene.add(sky);

  const water = createWaterSurface(quality);
  const particles = createParticles(quality);
  const currents = createCurrents(quality);
  const light = createLightField();
  const pressure = createPressureField();
  scene.add(light.group, pressure.group, particles.points, currents.group, water.mesh);

  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.setClearColor(0x02080d, 1);

  let pixelRatio = 1;
  const target = new THREE.Vector3();

  function resize() {
    const width = canvas.clientWidth || innerWidth;
    const height = canvas.clientHeight || innerHeight;
    pixelRatio = Math.min(devicePixelRatio || 1, quality.dpr);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(1, height);
    camera.updateProjectionMatrix();
  }

  function render(state, idleSeconds = 0) {
    const finaleBlend = smooth((state.progress - 0.985) / 0.015);
    const finaleTime = reducedMotion ? 0 : idleSeconds * 0.08 * finaleBlend;
    const pressureDrift = Math.sin(state.storyTime * 0.075) * state.pressure;
    camera.position.set(
      state.camera.x + pressureDrift * 0.18,
      state.camera.y + pressureDrift * 0.32,
      state.camera.z
    );
    target.set(state.camera.targetX, state.camera.targetY, state.camera.targetZ);
    camera.fov = state.camera.fov;
    camera.updateProjectionMatrix();
    camera.lookAt(target);
    sky.position.copy(camera.position);
    skyUniforms.uSubmersion.value = state.camera.submersion;
    skyUniforms.uReveal.value = state.surface.reveal;
    skyUniforms.uClarity.value = state.atmosphere.clarity;
    renderer.toneMappingExposure = state.atmosphere.exposure;
    water.update(state, finaleTime);
    particles.update(state, pixelRatio);
    currents.update(state, pixelRatio);
    light.update(state);
    pressure.update(state);
    renderer.render(scene, camera);
  }

  function dispose() {
    water.dispose();
    particles.dispose();
    currents.dispose();
    light.dispose();
    pressure.dispose();
    skyGeometry.dispose();
    skyMaterial.dispose();
    renderer.dispose();
  }

  resize();
  return { available: true, quality: quality.tier, render, resize, dispose };
}
