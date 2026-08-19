import * as THREE from "../assets/vendor/three.module.min.js";

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const mix = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, value) => {
  const x = clamp((value - a) / (b - a));
  return x * x * (3 - 2 * x);
};

const vertexShader = /* glsl */`
  uniform float uProgress;
  uniform float uTime;
  uniform float uAspect;
  varying vec3 vWorldPosition;
  varying float vSignal;
  varying float vDepth;

  float ease(float a, float b, float value) {
    float x = clamp((value - a) / (b - a), 0.0, 1.0);
    return x * x * (3.0 - 2.0 * x);
  }

  float signal(float x, float time) {
    float fragile = sin(x * 1.18 + time * 0.23) * 0.10;
    fragile += sin(x * 2.74 - time * 0.15) * 0.045;
    fragile += sin(x * 6.4 + time * 0.31) * 0.012;
    float transient = exp(-pow(x - 0.8, 2.0) * 4.2) * sin(x * 9.0 - time * 0.22) * 0.075;
    return fragile + transient;
  }

  void main() {
    float listen = ease(0.18, 0.38, uProgress);
    float weave = ease(0.34, 0.55, uProgress);
    float volume = ease(0.49, 0.69, uProgress);
    float whole = ease(0.63, 0.82, uProgress);
    float release = ease(0.86, 1.0, uProgress);

    float x = position.x;
    float baseSignal = signal(x, uTime);
    float depthSpread = mix(0.0007, position.z, volume);
    float bassPressure = sin(x * 0.72 - uTime * 0.10 + position.z * 0.42) * 0.16 * listen;
    float current = sin(position.z * 1.18 + x * 0.44 + uTime * 0.16) * 0.12 * listen;
    float interference = sin(position.z * 2.1 - x * 1.27 - uTime * 0.14) * 0.075 * weave;
    float coherentSwell = sin(x * 1.05 + position.z * 0.38 - uTime * 0.18) * (0.18 + whole * 0.28);
    float surface = mix(baseSignal * (0.55 + listen * 0.55), coherentSwell + current + interference, volume);
    surface *= mix(1.0, 1.22, whole);
    surface += sin(x * 0.55 + position.z * 0.24 - uTime * 0.08) * release * 0.24;

    vec3 transformed = vec3(x, surface, depthSpread * mix(1.0, 1.65, release));
    vSignal = baseSignal;
    vDepth = volume;
    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const surfaceFragment = /* glsl */`
  uniform float uProgress;
  uniform float uTime;
  varying vec3 vWorldPosition;
  varying float vSignal;
  varying float vDepth;

  void main() {
    vec3 dx = dFdx(vWorldPosition);
    vec3 dy = dFdy(vWorldPosition);
    vec3 normal = normalize(cross(dx, dy));
    if (!gl_FrontFacing) normal *= -1.0;
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float fresnel = pow(1.0 - abs(dot(normal, viewDirection)), 2.1);
    float light = max(0.0, dot(normal, normalize(vec3(-0.5, 0.85, 0.3))));
    float shimmer = sin(vWorldPosition.x * 5.0 - vWorldPosition.z * 1.7 + uTime * 0.34) * 0.5 + 0.5;
    vec3 abyss = vec3(0.008, 0.045, 0.075);
    vec3 blue = vec3(0.035, 0.30, 0.39);
    vec3 foam = vec3(0.47, 0.91, 0.83);
    vec3 color = mix(abyss, blue, light * 0.72 + fresnel * 0.34);
    color = mix(color, foam, pow(fresnel, 2.0) * (0.3 + shimmer * 0.35));
    color += vec3(0.02, 0.12, 0.13) * max(vWorldPosition.y, 0.0);
    float opacity = mix(0.0, 0.72, smoothstep(0.45, 0.67, uProgress));
    opacity *= 0.52 + fresnel * 0.5;
    gl_FragColor = vec4(color, opacity);
  }
`;

const wireFragment = /* glsl */`
  uniform float uProgress;
  varying vec3 vWorldPosition;
  varying float vSignal;

  void main() {
    float volume = smoothstep(0.49, 0.7, uProgress);
    float release = smoothstep(0.84, 1.0, uProgress);
    vec3 lineColor = mix(vec3(0.29, 0.86, 0.82), vec3(0.42, 0.66, 0.76), volume);
    lineColor = mix(lineColor, vec3(0.65, 0.94, 0.89), max(vSignal, 0.0) * 2.4);
    float edgeFade = 1.0 - smoothstep(4.2, 6.0, abs(vWorldPosition.x));
    float opacity = mix(0.82, 0.16, volume) * edgeFade * mix(1.0, 0.52, release);
    gl_FragColor = vec4(lineColor, opacity);
  }
`;

function makeCurrent(color, phase, narrow = false) {
  const count = 180;
  const positions = new Float32Array(count * 3);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  const line = new THREE.Line(geometry, material);
  line.userData = { phase, narrow, count };
  return line;
}

function makeParticles(count) {
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  for (let i = 0; i < count; i += 1) {
    const seed = (i * 16807 % 2147483647) / 2147483647;
    const seedB = (i * 48271 % 2147483647) / 2147483647;
    const seedC = (i * 69621 % 2147483647) / 2147483647;
    positions[i * 3] = (seed - 0.5) * 12;
    positions[i * 3 + 1] = (seedB - 0.5) * 5;
    positions[i * 3 + 2] = (seedC - 0.5) * 8;
    phases[i] = seed * Math.PI * 2;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("phase", new THREE.BufferAttribute(phases, 1));
  const material = new THREE.PointsMaterial({ color: 0x86d9d2, size: 0.025, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true });
  return new THREE.Points(geometry, material);
}

export function createSignalSea(canvas, reducedMotion = false) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: window.devicePixelRatio < 2, alpha: false, powerPreference: "high-performance" });
  } catch (error) {
    return { available: false, resize() {}, render() {}, destroy() {} };
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x02080d);
  scene.fog = new THREE.FogExp2(0x02080d, 0.052);
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60);
  const isMobile = matchMedia("(max-width: 760px)").matches;
  const geometry = new THREE.PlaneGeometry(12, 8, isMobile ? 92 : 160, isMobile ? 24 : 46);
  geometry.rotateX(-Math.PI / 2);

  const uniforms = {
    uProgress: { value: 0 },
    uTime: { value: 0 },
    uAspect: { value: 1 }
  };

  const surfaceMaterial = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader: surfaceFragment,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    extensions: { derivatives: true }
  });
  const wireMaterial = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader: wireFragment,
    transparent: true,
    wireframe: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  const surface = new THREE.Mesh(geometry, surfaceMaterial);
  const wire = new THREE.Mesh(geometry, wireMaterial);
  surface.renderOrder = 1;
  wire.renderOrder = 2;
  scene.add(surface, wire);

  const currents = [
    makeCurrent(0x39d0c9, 0.0),
    makeCurrent(0x6b8fc6, 1.25),
    makeCurrent(0xb8f1da, 2.4, true),
    makeCurrent(0x336f89, 3.6),
    makeCurrent(0x86c6b7, 4.75, true)
  ];
  currents.forEach(current => scene.add(current));

  const particles = makeParticles(isMobile ? 180 : 360);
  scene.add(particles);

  function resize() {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, isMobile ? 1.45 : 1.8);
    renderer.setPixelRatio(ratio);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    uniforms.uAspect.value = camera.aspect;
  }

  function updateCurrents(progress, time) {
    const reveal = smooth(0.26, 0.38, progress) * (1 - smooth(0.55, 0.68, progress));
    const weave = smooth(0.34, 0.54, progress);
    currents.forEach((currentLine, lineIndex) => {
      const { phase, narrow, count } = currentLine.userData;
      const positions = currentLine.geometry.attributes.position.array;
      for (let i = 0; i < count; i += 1) {
        const unit = i / (count - 1);
        const x = mix(-6, 6, unit);
        const individuality = Math.sin(x * (0.88 + lineIndex * 0.09) + phase + time * (0.08 + lineIndex * 0.012));
        const harmony = Math.sin(x * 1.03 + time * 0.12) * 0.34;
        positions[i * 3] = x;
        positions[i * 3 + 1] = mix(individuality * 0.28 + (lineIndex - 2) * 0.34, harmony + (lineIndex - 2) * 0.09, weave);
        positions[i * 3 + 2] = (narrow ? 0.32 : 0.7) * Math.sin(x * 0.38 + phase) * reveal;
      }
      currentLine.geometry.attributes.position.needsUpdate = true;
      currentLine.material.opacity = reveal * (lineIndex === 2 ? 0.7 : 0.42);
    });
  }

  function render(progress, elapsed, active = true) {
    if (!active) return;
    const time = reducedMotion ? 0.5 : elapsed;
    uniforms.uProgress.value = progress;
    uniforms.uTime.value = time;
    updateCurrents(progress, time);

    const descent = smooth(0.2, 0.36, progress) * (1 - smooth(0.42, 0.58, progress));
    const perspective = smooth(0.47, 0.7, progress);
    const release = smooth(0.84, 1.0, progress);
    camera.position.x = Math.sin(progress * Math.PI * 1.3) * perspective * 0.4;
    camera.position.y = mix(0.28, -1.85, descent);
    camera.position.y = mix(camera.position.y, 4.35, perspective);
    camera.position.y = mix(camera.position.y, 5.8, release);
    camera.position.z = mix(9.2, 7.1, perspective);
    camera.position.z = mix(camera.position.z, 10.8, release);
    camera.fov = mix(42, 49, release);
    camera.updateProjectionMatrix();
    camera.lookAt(0, mix(0.05, -0.22, perspective), mix(0, -0.8, perspective));

    particles.material.opacity = smooth(0.2, 0.34, progress) * (1 - smooth(0.76, 0.92, progress)) * 0.38;
    particles.rotation.y = time * 0.012;
    particles.position.y = mix(-0.7, -1.4, descent);
    scene.fog.density = mix(0.052, 0.025, release);

    const hue = mix(0.55, 0.51, release);
    scene.background.setHSL(hue, 0.62, mix(0.025, 0.07, release));
    renderer.render(scene, camera);
  }

  function destroy() {
    geometry.dispose();
    surfaceMaterial.dispose();
    wireMaterial.dispose();
    currents.forEach(current => { current.geometry.dispose(); current.material.dispose(); });
    particles.geometry.dispose();
    particles.material.dispose();
    renderer.dispose();
  }

  resize();
  return { available: true, resize, render, destroy };
}
