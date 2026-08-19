const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export class ScrollController {
  constructor(element, onFrame, reducedMotion = false) {
    this.element = element;
    this.onFrame = onFrame;
    this.reducedMotion = reducedMotion;
    this.current = 0;
    this.target = 0;
    this.lastTime = performance.now();
    this.frame = 0;
    this.running = false;
    this.listening = false;
    this.measure = this.measure.bind(this);
    this.tick = this.tick.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  measure() {
    const rect = this.element.getBoundingClientRect();
    const pageTop = window.scrollY + rect.top;
    const travel = Math.max(1, this.element.offsetHeight - window.innerHeight);
    this.target = clamp((window.scrollY - pageTop) / travel);
    if (this.reducedMotion) this.current = this.target;
  }

  tick(time) {
    if (!this.running) return;
    const dt = Math.min(0.05, Math.max(0.001, (time - this.lastTime) / 1000));
    this.lastTime = time;
    this.measure();

    const follow = this.reducedMotion ? 1 : 1 - Math.exp(-dt / 0.17);
    this.current += (this.target - this.current) * follow;
    if (Math.abs(this.target - this.current) < 0.00005) this.current = this.target;

    const rect = this.element.getBoundingClientRect();
    const active = rect.bottom > -window.innerHeight && rect.top < window.innerHeight * 2;
    this.onFrame(this.current, time / 1000, active);
    this.frame = requestAnimationFrame(this.tick);
  }

  handleVisibility() {
    if (document.hidden) {
      cancelAnimationFrame(this.frame);
      this.running = false;
      return;
    }
    this.start();
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    this.measure();
    this.current = this.target;
    this.frame = requestAnimationFrame(this.tick);
    if (!this.listening) {
      window.addEventListener("resize", this.measure, { passive: true });
      document.addEventListener("visibilitychange", this.handleVisibility);
      this.listening = true;
    }
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.frame);
    window.removeEventListener("resize", this.measure);
    document.removeEventListener("visibilitychange", this.handleVisibility);
    this.listening = false;
  }
}

export { clamp };
