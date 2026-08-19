import { clamp, getReducedMotionProgress, getStoryState } from "./storyboard.js";
import { ScrollPlayhead } from "./scroll-playhead.js";
import { createCopyLayer } from "./copy-layer.js";
import { createBelowSurfaceScene } from "./scene/below-surface-scene.js";
import { createSiteInteractions } from "./site-interactions.js";

const STORY_SCROLL_END = 0.86;

const root = document.querySelector("[data-cinematic]");
const canvas = document.querySelector("[data-ocean-canvas]");
const searchParams = new URLSearchParams(location.search);
const reducedMotion = searchParams.has("reduced-motion") || matchMedia("(prefers-reduced-motion: reduce)").matches;
const visualOnly = searchParams.has("visual-only");
const copyLayer = createCopyLayer(root);
const ocean = createBelowSurfaceScene(canvas, reducedMotion);
const siteInteractions = createSiteInteractions();

document.documentElement.classList.toggle("visual-only", visualOnly);
document.documentElement.classList.toggle("has-webgl", ocean.available);
document.documentElement.dataset.quality = ocean.quality;
document.querySelector("[data-year]").textContent = String(new Date().getFullYear());

let currentState = getStoryState(0);
let initialAnchorTarget = null;
try {
  initialAnchorTarget = location.hash ? document.querySelector(location.hash) : null;
} catch {
  initialAnchorTarget = null;
}
let storyBypassed = Boolean(initialAnchorTarget?.closest(".after-story"));

const playhead = new ScrollPlayhead(root, (progress, active, motion) => {
  const authoredProgress = clamp(progress / STORY_SCROLL_END);
  const sceneProgress = reducedMotion ? getReducedMotionProgress(authoredProgress) : authoredProgress;
  currentState = getStoryState(sceneProgress);
  const afterStoryTop = root.offsetTop + root.offsetHeight;
  const handoffBoundary = afterStoryTop - innerHeight;
  const storyComplete = storyBypassed || authoredProgress >= 0.9992;
  document.documentElement.classList.toggle("story-complete", storyComplete);
  if (!storyComplete && scrollY > handoffBoundary) scrollTo({ top: handoffBoundary, behavior: "instant" });
  document.querySelector("[data-site-header]")?.classList.toggle("is-light", scrollY >= afterStoryTop - 1);
  copyLayer.update(currentState);
  if (active) ocean.render(currentState, reducedMotion ? 0 : motion.elapsed);
}, { continuous: !reducedMotion, spring: 4 });

document.documentElement.classList.add("app-ready");
playhead.start();
if (storyBypassed) {
  document.documentElement.classList.add("story-complete");
  playhead.finish();
  requestAnimationFrame(() => initialAnchorTarget.scrollIntoView());
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target?.closest(".after-story")) return;
    storyBypassed = true;
    document.documentElement.classList.add("story-complete");
    playhead.finish();
  });
});

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
  if (!event.persisted) {
    siteInteractions.dispose();
    ocean.dispose();
  }
});

addEventListener("pageshow", event => {
  if (!event.persisted) return;
  ocean.resize();
  playhead.start();
});
