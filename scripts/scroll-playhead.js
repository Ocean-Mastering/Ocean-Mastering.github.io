import { clamp } from "./storyboard.js";

export class ScrollPlayhead {
  constructor(section, onProgress, options = {}) {
    this.section = section;
    this.onProgress = onProgress;
    this.progress = 0;
    this.targetProgress = 0;
    this.velocity = 0;
    this.active = true;
    this.frame = 0;
    this.lastTime = 0;
    this.elapsed = 0;
    this.continuous = options.continuous ?? true;
    this.spring = options.spring ?? 4;
    this.boundSample = this.sample.bind(this);
    this.boundTick = this.tick.bind(this);
  }

  read() {
    const rect = this.section.getBoundingClientRect();
    const pageTop = window.scrollY + rect.top;
    const travel = Math.max(1, this.section.offsetHeight - window.innerHeight);
    const progress = clamp((window.scrollY - pageTop) / travel);
    const active = rect.bottom > -window.innerHeight && rect.top < window.innerHeight * 2;
    return { progress, active };
  }

  sample() {
    const next = this.read();
    this.targetProgress = next.progress;
    this.active = next.active;
    this.ensureFrame();
  }

  ensureFrame() {
    if (this.frame || document.hidden) return;
    this.frame = requestAnimationFrame(this.boundTick);
  }

  tick(time) {
    this.frame = 0;
    const delta = this.lastTime ? Math.min(0.05, (time - this.lastTime) / 1000) : 1 / 60;
    this.lastTime = time;
    if (this.continuous) this.elapsed += delta;

    if (this.continuous) {
      const displacement = this.targetProgress - this.progress;
      const acceleration = displacement * this.spring ** 2 - this.velocity * this.spring * 2;
      this.velocity += acceleration * delta;
      this.progress = clamp(this.progress + this.velocity * delta);

      if (Math.abs(displacement) < 0.000015 && Math.abs(this.velocity) < 0.000015) {
        this.progress = this.targetProgress;
        this.velocity = 0;
      }
    } else {
      this.progress = this.targetProgress;
      this.velocity = 0;
    }

    this.onProgress(this.progress, this.active, {
      elapsed: this.elapsed,
      velocity: this.velocity,
      targetProgress: this.targetProgress,
      settled: this.progress === this.targetProgress && this.velocity === 0
    });

    if (this.active && this.continuous) this.ensureFrame();
  }

  start() {
    const initial = this.read();
    this.progress = initial.progress;
    this.targetProgress = initial.progress;
    this.active = initial.active;
    addEventListener("scroll", this.boundSample, { passive: true });
    addEventListener("resize", this.boundSample, { passive: true });
    addEventListener("visibilitychange", this.boundSample, { passive: true });
    this.ensureFrame();
  }

  finish() {
    this.progress = 1;
    this.targetProgress = 1;
    this.velocity = 0;
    this.ensureFrame();
  }

  stop() {
    removeEventListener("scroll", this.boundSample);
    removeEventListener("resize", this.boundSample);
    removeEventListener("visibilitychange", this.boundSample);
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.lastTime = 0;
  }
}
