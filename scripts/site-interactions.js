const TRACKS = [
  { title: "City of the Violet Crown", artist: "JFI", duration: "3:57", file: "assets/audio/01-city-of-the-violet-crown.mp3" },
  { title: "AC Current", artist: "Randomonium Studios", duration: "2:54", file: "assets/audio/02-ac-current.mp3" },
  { title: "Flat Top Mash", artist: "Origami Pigeon", duration: "2:33", file: "assets/audio/03-flat-top-mash.mp3" },
  { title: "You Keep Going", artist: "Mood Craft", duration: "2:29", file: "assets/audio/04-you-keep-going.mp3" },
  { title: "Perfect", artist: "JFI", duration: "4:05", file: "assets/audio/05-perfect.mp3" },
  { title: "Set the World On Fire", artist: "Ferrairi Tzar", duration: "3:02", file: "assets/audio/06-set-the-world-on-fire.mp3" },
  { title: "Jazzify", artist: "Jonathan Boyle", duration: "2:36", file: "assets/audio/07-jazzify.mp3" },
  { title: "Chris Phaze", artist: "The Game On", duration: "2:21", file: "assets/audio/08-chris-phaze.mp3" },
  { title: "Zincon", artist: "HVB Music Group", duration: "2:24", file: "assets/audio/09-zincon.mp3" },
  { title: "Like Bubble Gum", artist: "Where Is Lulu", duration: "2:22", file: "assets/audio/10-like-bubble-gum.mp3" }
];

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
}

function createVisualizer(canvas, audio) {
  if (!canvas) return { start() {}, draw() {}, dispose() {} };
  const context = canvas.getContext("2d");
  let audioContext;
  let analyser;
  let source;
  let frame = 0;
  let phase = 0;
  let samples;

  function resize() {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width * ratio));
    const height = Math.max(1, Math.round(rect.height * ratio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
  }

  function connect() {
    if (audioContext) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = .82;
    source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    samples = new Uint8Array(analyser.frequencyBinCount);
  }

  function render() {
    frame = 0;
    resize();
    const width = canvas.width;
    const height = canvas.height;
    context.clearRect(0, 0, width, height);
    phase += audio.paused ? .006 : .024;

    if (analyser && !audio.paused) analyser.getByteTimeDomainData(samples);
    const gradient = context.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, "rgba(78, 184, 241, 0)");
    gradient.addColorStop(.28, "rgba(111, 211, 255, .62)");
    gradient.addColorStop(.72, "rgba(206, 242, 255, .9)");
    gradient.addColorStop(1, "rgba(78, 184, 241, 0)");

    for (let layer = 0; layer < 3; layer += 1) {
      context.beginPath();
      const center = height * (.52 + layer * .075);
      const amplitude = height * (.035 + layer * .012);
      for (let x = 0; x <= width; x += Math.max(3, width / 180)) {
        const normalized = x / width;
        const sampleIndex = samples ? Math.min(samples.length - 1, Math.floor(normalized * samples.length)) : 0;
        const audioWave = samples && !audio.paused ? (samples[sampleIndex] - 128) / 128 : 0;
        const tide = Math.sin(normalized * Math.PI * (5 + layer) + phase + layer * 1.7);
        const y = center + (tide * .34 + audioWave * .88) * amplitude;
        if (x === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.strokeStyle = gradient;
      context.globalAlpha = .72 - layer * .18;
      context.lineWidth = Math.max(1, canvas.width / 680);
      context.stroke();
    }
    context.globalAlpha = 1;
    if (!audio.paused) frame = requestAnimationFrame(render);
  }

  function start() {
    connect();
    audioContext?.resume();
    if (!frame) frame = requestAnimationFrame(render);
  }

  function draw() {
    if (!frame) frame = requestAnimationFrame(render);
  }

  const resizeObserver = new ResizeObserver(draw);
  resizeObserver.observe(canvas);
  draw();

  function dispose() {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    source?.disconnect();
    analyser?.disconnect();
    audioContext?.close();
  }

  return { start, draw, dispose };
}

function createOceanPlayer() {
  const player = document.querySelector("[data-ocean-player]");
  if (!player) return { dispose() {} };
  const audio = player.querySelector("[data-player-audio]");
  const title = player.querySelector("[data-player-title]");
  const artist = player.querySelector("[data-player-artist]");
  const indexLabel = player.querySelector("[data-player-index]");
  const currentTime = player.querySelector("[data-player-current]");
  const duration = player.querySelector("[data-player-duration]");
  const seek = player.querySelector("[data-player-seek]");
  const volume = player.querySelector("[data-player-volume]");
  const playButton = player.querySelector('[data-player-action="play"]');
  const playIcon = player.querySelector("[data-player-icon]");
  const trackButtons = [...player.querySelectorAll("[data-track-index]")];
  const visualizer = createVisualizer(player.querySelector("[data-player-visualizer]"), audio);
  let currentIndex = 0;

  function updateProgress() {
    const ratio = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.currentTime / audio.duration : 0;
    seek.value = String(Math.round(ratio * 1000));
    seek.style.setProperty("--range-progress", `${ratio * 100}%`);
    currentTime.textContent = formatTime(audio.currentTime);
  }

  function updatePlayState() {
    const playing = !audio.paused;
    player.classList.toggle("is-playing", playing);
    playIcon.textContent = playing ? "Ⅱ" : "▶";
    playButton.setAttribute("aria-label", `${playing ? "Pause" : "Play"} ${TRACKS[currentIndex].title}`);
    if (playing) visualizer.start();
    else visualizer.draw();
  }

  function loadTrack(nextIndex, shouldPlay = false) {
    currentIndex = (nextIndex + TRACKS.length) % TRACKS.length;
    const track = TRACKS[currentIndex];
    audio.src = track.file;
    audio.load();
    title.textContent = track.title;
    artist.textContent = track.artist;
    indexLabel.textContent = String(currentIndex + 1).padStart(2, "0");
    duration.textContent = track.duration;
    currentTime.textContent = "0:00";
    seek.value = "0";
    seek.style.setProperty("--range-progress", "0%");
    trackButtons.forEach((button, index) => {
      const current = index === currentIndex;
      button.classList.toggle("is-current", current);
      if (current) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
    if (shouldPlay) audio.play().catch(() => updatePlayState());
  }

  playButton.addEventListener("click", () => {
    if (audio.paused) audio.play().catch(() => updatePlayState());
    else audio.pause();
  });
  player.querySelector('[data-player-action="previous"]').addEventListener("click", () => loadTrack(currentIndex - 1, !audio.paused));
  player.querySelector('[data-player-action="next"]').addEventListener("click", () => loadTrack(currentIndex + 1, !audio.paused));
  trackButtons.forEach(button => button.addEventListener("click", () => loadTrack(Number(button.dataset.trackIndex), true)));
  seek.addEventListener("input", () => {
    if (!Number.isFinite(audio.duration)) return;
    audio.currentTime = Number(seek.value) / 1000 * audio.duration;
    updateProgress();
  });
  volume.addEventListener("input", () => { audio.volume = Number(volume.value); });
  audio.addEventListener("play", updatePlayState);
  audio.addEventListener("pause", updatePlayState);
  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("loadedmetadata", () => { duration.textContent = formatTime(audio.duration); updateProgress(); });
  audio.addEventListener("ended", () => loadTrack(currentIndex + 1, true));
  audio.volume = Number(volume.value);

  return { dispose() { audio.pause(); visualizer.dispose(); } };
}

function createCreditDialog() {
  const dialog = document.querySelector("[data-credit-dialog]");
  if (!dialog) return;
  const image = dialog.querySelector("[data-credit-image]");
  const title = dialog.querySelector("[data-credit-dialog-title]");
  const artist = dialog.querySelector("[data-credit-dialog-artist]");

  document.querySelectorAll("[data-credit-src]").forEach(card => {
    card.addEventListener("click", () => {
      image.src = card.dataset.creditSrc;
      image.alt = `${card.dataset.creditTitle} by ${card.dataset.creditArtist} cover`;
      title.textContent = card.dataset.creditTitle;
      artist.textContent = card.dataset.creditArtist;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    });
  });

  dialog.querySelector("[data-credit-close]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
}

function createMailtoForms() {
  document.querySelectorAll("[data-mailto-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const fields = [...new FormData(form).entries()].map(([name, value]) => `${name}: ${value}`);
      const subject = form.dataset.mailtoSubject || "Ocean Mastering inquiry";
      location.href = `mailto:ocean.mastering@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fields.join("\n\n"))}`;
    });
  });
}

function createSectionReveals() {
  const elements = [...document.querySelectorAll("[data-reveal]")];
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("is-revealed"));
    return;
  }
  document.documentElement.classList.add("has-interactions");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10%", threshold: .08 });
  elements.forEach(element => observer.observe(element));
}

export function createSiteInteractions() {
  const player = createOceanPlayer();
  createCreditDialog();
  createMailtoForms();
  createSectionReveals();
  return { dispose() { player.dispose(); } };
}
