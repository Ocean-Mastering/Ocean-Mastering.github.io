export const STORY_DURATION = 96;

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const mix = (a, b, t) => a + (b - a) * t;
const smooth = value => {
  const x = clamp(value);
  return x * x * (3 - 2 * x);
};

export const SHOTS = [
  { id: "above", label: "Above the water", start: 0, end: 0.08 },
  { id: "signal", label: "Surface / signal", start: 0.08, end: 0.16 },
  { id: "crossing", label: "Crossing the waterline", start: 0.16, end: 0.25 },
  { id: "light", label: "Light", start: 0.25, end: 0.38 },
  { id: "current", label: "Current", start: 0.38, end: 0.52 },
  { id: "pressure", label: "Pressure", start: 0.52, end: 0.65 },
  { id: "relationship", label: "Relationship", start: 0.65, end: 0.76 },
  { id: "turn", label: "The turn", start: 0.76, end: 0.84 },
  { id: "ascent", label: "Ascent", start: 0.84, end: 0.91 },
  { id: "emergence", label: "Breaking the surface", start: 0.91, end: 0.96 },
  { id: "revelation", label: "Revelation", start: 0.96, end: 1 }
];

const REDUCED_MOTION_STATES = [0.03, 0.12, 0.21, 0.31, 0.45, 0.59, 0.71, 0.8, 0.875, 0.935, 0.985];

export const COPY_CUES = [
  { id: "opening", start: 0, holdStart: 0, holdEnd: 0.055, end: 0.105 },
  { id: "submerge", start: 0.145, holdStart: 0.18, holdEnd: 0.26, end: 0.315 },
  { id: "currents", start: 0.37, holdStart: 0.405, holdEnd: 0.485, end: 0.54 },
  { id: "relationship", start: 0.625, holdStart: 0.67, holdEnd: 0.755, end: 0.805 },
  { id: "ascent", start: 0.825, holdStart: 0.855, holdEnd: 0.91, end: 0.945 },
  { id: "finale", start: 0.955, holdStart: 0.975, holdEnd: 1, end: 1 }
];

const KEYFRAMES = [
  { p: 0, cameraX: 0, cameraY: 3.8, cameraZ: 13, targetX: 0, targetY: 0.2, targetZ: -20, fov: 43, submersion: 0, surfaceAmplitude: 0.18, surfaceDetail: 0.12, surfaceReveal: 0, particleDensity: 0, particleSpeed: 0.25, shimmer: 0, currentVisibility: 0, turbulence: 1, coherence: 0, pressure: 0, caustic: 0, beam: 0, fogDensity: 0.005, exposure: 0.63, clarity: 0.2 },
  { p: 0.08, cameraX: 0, cameraY: 1.15, cameraZ: 10.5, targetX: 0, targetY: 0.05, targetZ: -17, fov: 44, submersion: 0, surfaceAmplitude: 0.23, surfaceDetail: 0.27, surfaceReveal: 0.05, particleDensity: 0, particleSpeed: 0.3, shimmer: 0, currentVisibility: 0, turbulence: 1, coherence: 0, pressure: 0, caustic: 0, beam: 0, fogDensity: 0.006, exposure: 0.68, clarity: 0.25 },
  { p: 0.14, cameraX: 0, cameraY: 0.22, cameraZ: 8.5, targetX: 0, targetY: 0, targetZ: -15, fov: 46, submersion: 0.18, surfaceAmplitude: 0.28, surfaceDetail: 0.52, surfaceReveal: 0.08, particleDensity: 0.08, particleSpeed: 0.5, shimmer: 0.2, currentVisibility: 0, turbulence: 1, coherence: 0, pressure: 0, caustic: 0.12, beam: 0.05, fogDensity: 0.008, exposure: 0.72, clarity: 0.3 },
  { p: 0.16, cameraX: 0, cameraY: 0.07, cameraZ: 7.6, targetX: 0, targetY: -0.05, targetZ: -14, fov: 47, submersion: 0.42, surfaceAmplitude: 0.31, surfaceDetail: 0.62, surfaceReveal: 0.1, particleDensity: 0.18, particleSpeed: 0.7, shimmer: 0.5, currentVisibility: 0.04, turbulence: 1, coherence: 0, pressure: 0, caustic: 0.28, beam: 0.12, fogDensity: 0.011, exposure: 0.76, clarity: 0.35 },
  { p: 0.25, cameraX: 0.6, cameraY: -5.2, cameraZ: 5, targetX: 0, targetY: -0.7, targetZ: -16, fov: 49, submersion: 1, surfaceAmplitude: 0.32, surfaceDetail: 0.68, surfaceReveal: 0.12, particleDensity: 0.82, particleSpeed: 1, shimmer: 1, currentVisibility: 0.12, turbulence: 0.95, coherence: 0, pressure: 0.02, caustic: 1, beam: 0.72, fogDensity: 0.018, exposure: 0.82, clarity: 0.55 },
  { p: 0.38, cameraX: -1.4, cameraY: -15, cameraZ: 1, targetX: 1.5, targetY: -8, targetZ: -19, fov: 51, submersion: 1, surfaceAmplitude: 0.32, surfaceDetail: 0.7, surfaceReveal: 0.14, particleDensity: 0.82, particleSpeed: 0.82, shimmer: 0.62, currentVisibility: 0.55, turbulence: 0.9, coherence: 0, pressure: 0.08, caustic: 0.62, beam: 0.7, fogDensity: 0.021, exposure: 0.7, clarity: 0.48 },
  { p: 0.52, cameraX: 2.2, cameraY: -31, cameraZ: -5, targetX: -1, targetY: -25, targetZ: -24, fov: 52, submersion: 1, surfaceAmplitude: 0.33, surfaceDetail: 0.72, surfaceReveal: 0.16, particleDensity: 0.58, particleSpeed: 0.62, shimmer: 0.25, currentVisibility: 1, turbulence: 1, coherence: 0.05, pressure: 0.22, caustic: 0.25, beam: 0.42, fogDensity: 0.026, exposure: 0.58, clarity: 0.38 },
  { p: 0.65, cameraX: -1.1, cameraY: -51, cameraZ: -10, targetX: 0, targetY: -30, targetZ: -29, fov: 52, submersion: 1, surfaceAmplitude: 0.34, surfaceDetail: 0.74, surfaceReveal: 0.18, particleDensity: 0.45, particleSpeed: 0.28, shimmer: 0.05, currentVisibility: 0.9, turbulence: 0.92, coherence: 0.12, pressure: 1, caustic: 0.08, beam: 0.16, fogDensity: 0.034, exposure: 0.43, clarity: 0.24 },
  { p: 0.76, cameraX: 0, cameraY: -61.5, cameraZ: -12, targetX: 0, targetY: -50, targetZ: -31, fov: 53, submersion: 1, surfaceAmplitude: 0.35, surfaceDetail: 0.76, surfaceReveal: 0.2, particleDensity: 0.54, particleSpeed: 0.32, shimmer: 0.06, currentVisibility: 1, turbulence: 0.45, coherence: 1, pressure: 0.82, caustic: 0.1, beam: 0.22, fogDensity: 0.031, exposure: 0.5, clarity: 0.5 },
  { p: 0.8, cameraX: 0, cameraY: -63, cameraZ: -12, targetX: 0, targetY: -66, targetZ: -31, fov: 53, submersion: 1, surfaceAmplitude: 0.35, surfaceDetail: 0.76, surfaceReveal: 0.22, particleDensity: 0.56, particleSpeed: 0.34, shimmer: 0.08, currentVisibility: 1, turbulence: 0.4, coherence: 1, pressure: 0.7, caustic: 0.12, beam: 0.25, fogDensity: 0.029, exposure: 0.52, clarity: 0.56 },
  { p: 0.84, cameraX: 0.5, cameraY: -59, cameraZ: -11, targetX: 0, targetY: -25, targetZ: -29, fov: 52, submersion: 1, surfaceAmplitude: 0.36, surfaceDetail: 0.78, surfaceReveal: 0.28, particleDensity: 0.62, particleSpeed: 0.4, shimmer: 0.14, currentVisibility: 1, turbulence: 0.38, coherence: 1, pressure: 0.58, caustic: 0.18, beam: 0.3, fogDensity: 0.027, exposure: 0.58, clarity: 0.62 },
  { p: 0.91, cameraX: -0.7, cameraY: -10, cameraZ: -2, targetX: 0, targetY: -3.5, targetZ: -18, fov: 49, submersion: 1, surfaceAmplitude: 0.38, surfaceDetail: 0.82, surfaceReveal: 0.52, particleDensity: 0.9, particleSpeed: 0.78, shimmer: 0.8, currentVisibility: 0.78, turbulence: 0.36, coherence: 1, pressure: 0.22, caustic: 0.82, beam: 0.75, fogDensity: 0.017, exposure: 0.78, clarity: 0.85 },
  { p: 0.94, cameraX: 0, cameraY: -0.55, cameraZ: 4.2, targetX: 0, targetY: 0, targetZ: -15, fov: 47, submersion: 0.82, surfaceAmplitude: 0.4, surfaceDetail: 0.86, surfaceReveal: 0.7, particleDensity: 0.58, particleSpeed: 0.9, shimmer: 1, currentVisibility: 0.35, turbulence: 0.3, coherence: 1, pressure: 0.08, caustic: 1, beam: 0.8, fogDensity: 0.012, exposure: 0.92, clarity: 0.95 },
  { p: 0.96, cameraX: 0, cameraY: 1.3, cameraZ: 8, targetX: 0, targetY: 0, targetZ: -19, fov: 46, submersion: 0.05, surfaceAmplitude: 0.43, surfaceDetail: 0.9, surfaceReveal: 0.86, particleDensity: 0.06, particleSpeed: 0.5, shimmer: 0.15, currentVisibility: 0.05, turbulence: 0.3, coherence: 1, pressure: 0, caustic: 0.1, beam: 0.05, fogDensity: 0.006, exposure: 1, clarity: 1 },
  { p: 1, cameraX: 0, cameraY: 7.5, cameraZ: 15, targetX: 0, targetY: 0, targetZ: -30, fov: 49, submersion: 0, surfaceAmplitude: 0.54, surfaceDetail: 1, surfaceReveal: 1, particleDensity: 0, particleSpeed: 0.3, shimmer: 0, currentVisibility: 0, turbulence: 0.3, coherence: 1, pressure: 0, caustic: 0, beam: 0, fogDensity: 0.005, exposure: 1.08, clarity: 1 }
];

function findKeyframes(progress) {
  for (let index = 0; index < KEYFRAMES.length - 1; index += 1) {
    const left = KEYFRAMES[index];
    const right = KEYFRAMES[index + 1];
    if (progress <= right.p) return { left, right, t: smooth((progress - left.p) / (right.p - left.p)) };
  }
  return { left: KEYFRAMES.at(-1), right: KEYFRAMES.at(-1), t: 1 };
}

export function cuePresence(progress, cue) {
  if (progress < cue.start || progress > cue.end) return 0;
  if (progress <= cue.holdStart) {
    if (cue.holdStart === cue.start) return 1;
    return smooth((progress - cue.start) / Math.max(0.0001, cue.holdStart - cue.start));
  }
  if (progress <= cue.holdEnd) return 1;
  if (cue.end === cue.holdEnd) return 1;
  return 1 - smooth((progress - cue.holdEnd) / Math.max(0.0001, cue.end - cue.holdEnd));
}

export function getReducedMotionProgress(rawProgress) {
  const progress = clamp(rawProgress);
  const shotIndex = SHOTS.findIndex(shot => progress >= shot.start && progress <= shot.end);
  return REDUCED_MOTION_STATES[Math.max(0, shotIndex)] ?? REDUCED_MOTION_STATES.at(-1);
}

export function getStoryState(rawProgress) {
  const progress = clamp(rawProgress);
  const { left, right, t } = findKeyframes(progress);
  const interpolated = {};

  for (const [key, value] of Object.entries(left)) {
    if (key === "p") continue;
    interpolated[key] = mix(value, right[key], t);
  }

  const shotIndex = Math.min(SHOTS.length - 1, SHOTS.findIndex(shot => progress >= shot.start && progress <= shot.end));
  const resolvedShotIndex = shotIndex < 0 ? SHOTS.length - 1 : shotIndex;

  return {
    progress,
    storyTime: progress * STORY_DURATION,
    shot: SHOTS[resolvedShotIndex],
    shotIndex: resolvedShotIndex,
    camera: {
      x: interpolated.cameraX,
      y: interpolated.cameraY,
      z: interpolated.cameraZ,
      targetX: interpolated.targetX,
      targetY: interpolated.targetY,
      targetZ: interpolated.targetZ,
      fov: interpolated.fov,
      submersion: interpolated.submersion
    },
    surface: {
      amplitude: interpolated.surfaceAmplitude,
      detail: interpolated.surfaceDetail,
      reveal: interpolated.surfaceReveal
    },
    particles: {
      density: interpolated.particleDensity,
      speed: interpolated.particleSpeed,
      shimmer: interpolated.shimmer
    },
    currents: {
      visibility: interpolated.currentVisibility,
      turbulence: interpolated.turbulence,
      coherence: interpolated.coherence
    },
    pressure: interpolated.pressure,
    atmosphere: {
      caustic: interpolated.caustic,
      beam: interpolated.beam,
      fogDensity: interpolated.fogDensity,
      exposure: interpolated.exposure,
      clarity: interpolated.clarity
    }
  };
}

export { clamp, smooth };
