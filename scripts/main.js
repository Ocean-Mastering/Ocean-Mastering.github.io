import { getReducedMotionProgress, getStoryState } from "./storyboard.js";
import { ScrollPlayhead } from "./scroll-playhead.js";
import { createCopyLayer } from "./copy-layer.js";
import { createBelowSurfaceScene } from "./scene/below-surface-scene.js";

const root = document.querySelector("[data-cinematic]");
const canvas = document.querySelector("[data-ocean-canvas]");
const searchParams = new URLSearchParams(location.search);
const reducedMotion = searchParams.has("reduced-motion") || matchMedia("(prefers-reduced-motion: reduce)").matches;
const visualOnly = searchParams.has("visual-only");
const copyLayer = createCopyLayer(root);
const ocean = createBelowSurfaceScene(canvas, reducedMotion);

document.documentElement.classList.toggle("visual-only", visualOnly);
document.documentElement.classList.toggle("has-webgl", ocean.available);
document.documentElement.dataset.quality = ocean.quality;
document.querySelector("[data-year]").textContent = String(new Date().getFullYear());

let currentState = getStoryState(0);
let currentActive = true;
let finaleFrame = 0;
let finaleStart = 0;

function stopFinale() {
  cancelAnimationFrame(finaleFrame);
  finaleFrame = 0;
  finaleStart = 0;
}

function finaleLoop(time) {
  if (!currentActive || currentState.progress < 0.985 || document.hidden) {
    stopFinale();
    return;
  }
  if (!finaleStart) finaleStart = time;
  ocean.render(currentState, (time - finaleStart) / 1000);
  finaleFrame = requestAnimationFrame(finaleLoop);
}

function ensureFinale() {
  if (finaleFrame || currentState.progress < 0.985 || !currentActive) return;
  finaleFrame = requestAnimationFrame(finaleLoop);
}

const playhead = new ScrollPlayhead(root, (progress, active) => {
  const sceneProgress = reducedMotion ? getReducedMotionProgress(progress) : progress;
  currentState = getStoryState(sceneProgress);
  currentActive = active;
  const afterStoryTop = root.offsetTop + root.offsetHeight;
  document.querySelector("[data-site-header]")?.classList.toggle("is-light", scrollY >= afterStoryTop - 1);
  copyLayer.update(currentState);
  ocean.render(currentState, 0);
  if (!reducedMotion && progress >= 0.985) ensureFinale();
  else stopFinale();
});

document.documentElement.classList.add("app-ready");
playhead.start();

let resizeFrame = 0;
addEventListener("resize", () => {
  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(() => {
    ocean.resize();
    ocean.render(currentState, 0);
  });
}, { passive: true });

addEventListener("pagehide", event => {
  playhead.stop();
  stopFinale();
  if (!event.persisted) ocean.dispose();
});

addEventListener("pageshow", event => {
  if (!event.persisted) return;
  ocean.resize();
  playhead.start();
});
