import { COPY_CUES, cuePresence, smooth } from "./storyboard.js";

const FIRST_VISIBLE_CLOUD = 0.9685;
const CLOUD_COPY_TRANSITION = 0.006;

export function createCopyLayer(root) {
  const elements = new Map([...root.querySelectorAll("[data-copy]")].map(element => [element.dataset.copy, element]));
  const progressLine = root.querySelector("[data-progress-line]");
  const shotIndex = root.querySelector("[data-shot-index]");
  const shotLabel = root.querySelector("[data-shot-label]");
  const depthValue = root.querySelector("[data-depth-value]");
  const header = document.querySelector("[data-site-header]");
  const finale = elements.get("finale");
  const finaleTitleBefore = root.querySelector("[data-finale-title-before]");
  const finaleTitleAfter = root.querySelector("[data-finale-title-after]");

  function update(state) {
    root.style.setProperty("--progress", state.progress.toFixed(5));
    if (progressLine) progressLine.style.transform = `scaleX(${state.progress})`;
    for (const cue of COPY_CUES) {
      elements.get(cue.id)?.style.setProperty("--presence", cuePresence(state.progress, cue).toFixed(3));
    }
    const cloudCopySwap = smooth((state.progress - FIRST_VISIBLE_CLOUD) / CLOUD_COPY_TRANSITION);
    finale?.style.setProperty("--cloud-copy-swap", cloudCopySwap.toFixed(4));
    const showingCloudTitle = cloudCopySwap >= 0.5;
    finaleTitleBefore?.setAttribute("aria-hidden", String(showingCloudTitle));
    finaleTitleAfter?.setAttribute("aria-hidden", String(!showingCloudTitle));
    if (shotIndex) shotIndex.textContent = String(state.shotIndex + 1).padStart(2, "0");
    if (shotLabel) shotLabel.textContent = state.shot.label;
    if (depthValue) {
      const depth = state.camera.y;
      depthValue.textContent = `${depth >= 0 ? "+" : "−"}${Math.abs(depth).toFixed(1).padStart(4, "0")}m`;
    }
    header?.classList.toggle("is-underwater", state.camera.submersion > 0.55);
  }

  return { update };
}
