import { clamp } from "./storyboard.js";

export class ScrollPlayhead {
  constructor(section, onProgress) {
    this.section = section;
    this.onProgress = onProgress;
    this.progress = 0;
    this.scheduled = false;
    this.boundSchedule = this.schedule.bind(this);
    this.boundUpdate = this.update.bind(this);
  }

  read() {
    const rect = this.section.getBoundingClientRect();
    const pageTop = window.scrollY + rect.top;
    const travel = Math.max(1, this.section.offsetHeight - window.innerHeight);
    const progress = clamp((window.scrollY - pageTop) / travel);
    const active = rect.bottom > -window.innerHeight && rect.top < window.innerHeight * 2;
    return { progress, active };
  }

  update() {
    this.scheduled = false;
    const next = this.read();
    this.progress = next.progress;
    this.onProgress(next.progress, next.active);
  }

  schedule() {
    if (this.scheduled) return;
    this.scheduled = true;
    requestAnimationFrame(this.boundUpdate);
  }

  start() {
    addEventListener("scroll", this.boundSchedule, { passive: true });
    addEventListener("resize", this.boundSchedule, { passive: true });
    this.update();
  }

  stop() {
    removeEventListener("scroll", this.boundSchedule);
    removeEventListener("resize", this.boundSchedule);
  }
}
