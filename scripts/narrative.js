import { clamp } from "./scroll-controller.js";

const smoother = value => {
  const x = clamp(value);
  return x * x * x * (x * (x * 6 - 15) + 10);
};

const range = (progress, start, end) => smoother((progress - start) / (end - start));

export function createNarrativeUI(root) {
  const chapters = [...root.querySelectorAll("[data-chapter]")].map(element => ({
    element,
    copy: element.querySelector(".chapter-copy"),
    index: Number(element.dataset.chapter),
    start: Number(element.dataset.start),
    end: Number(element.dataset.end)
  }));
  const bar = root.querySelector("[data-progress-bar]");
  const count = root.querySelector("[data-chapter-count]");
  const depthLabel = root.querySelector("[data-depth-label]");
  const depthValue = root.querySelector("[data-depth-value]");
  const header = document.querySelector("[data-site-header]");
  let activeChapter = -1;

  function update(progress) {
    root.style.setProperty("--story-progress", progress.toFixed(4));
    if (bar) bar.style.setProperty("--story-progress", progress.toFixed(4));

    for (const chapter of chapters) {
      const fadeSpan = Math.min(0.05, (chapter.end - chapter.start) * 0.3);
      const enter = chapter.index === 0 ? 1 : range(progress, chapter.start, chapter.start + fadeSpan);
      const exit = chapter.index === chapters.length - 1 ? 1 : 1 - range(progress, chapter.end - fadeSpan, chapter.end);
      const presence = Math.min(enter, exit);
      chapter.copy?.style.setProperty("--presence", presence.toFixed(3));
    }

    const nearest = chapters.reduce((best, chapter) => {
      const center = (chapter.start + chapter.end) * 0.5;
      return Math.abs(progress - center) < Math.abs(progress - best.center) ? { index: chapter.index, center } : best;
    }, { index: 0, center: 0.05 }).index;

    if (nearest !== activeChapter) {
      activeChapter = nearest;
      root.dataset.activeChapter = String(activeChapter);
      if (count) count.textContent = String(activeChapter).padStart(2, "0");
    }

    const descent = range(progress, 0.22, 0.4);
    const ascent = range(progress, 0.47, 0.7);
    const depth = Math.max(0, descent * (1 - ascent)) * 32.6;
    if (depthValue) depthValue.textContent = depth.toFixed(1).padStart(4, "0");
    if (depthLabel) {
      depthLabel.textContent = depth > 1
        ? "Below surface"
        : progress > 0.88
          ? "Open water"
          : progress > 0.62
            ? "Coherent field"
            : "Surface";
    }
    header?.classList.toggle("is-condensed", progress > 0.025 || window.scrollY > 40);
  }

  return { update };
}
