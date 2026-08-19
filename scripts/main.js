import { ScrollController } from "./scroll-controller.js";
import { createNarrativeUI } from "./narrative.js";
import { createSignalSea } from "./signal-sea.js";
import { createAudioPlayer } from "./audio-player.js";

document.body.classList.add("has-js");

const narrativeRoot = document.querySelector("[data-narrative]");
const canvas = document.querySelector("[data-signal-canvas]");
const reducedQuery = matchMedia("(prefers-reduced-motion: reduce)");
const reducedMotion = reducedQuery.matches;
const narrativeUI = createNarrativeUI(narrativeRoot);
const signalSea = createSignalSea(canvas, reducedMotion);
const audioPlayerRoot = document.querySelector("[data-audio-player]");

document.body.classList.toggle("has-webgl", signalSea.available);
document.querySelector("[data-motion-note]")?.toggleAttribute("hidden", !reducedMotion);
document.querySelector("[data-current-year]").textContent = String(new Date().getFullYear());
if (audioPlayerRoot) createAudioPlayer(audioPlayerRoot);

const controller = new ScrollController(narrativeRoot, (progress, elapsed, active) => {
  narrativeUI.update(progress);
  signalSea.render(progress, elapsed, active);
}, reducedMotion);

controller.start();

let resizeFrame = 0;
window.addEventListener("resize", () => {
  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(signalSea.resize);
}, { passive: true });

window.addEventListener("pagehide", event => {
  controller.stop();
  if (!event.persisted) signalSea.destroy();
});

window.addEventListener("pageshow", event => {
  if (!event.persisted) return;
  signalSea.resize();
  controller.start();
});
