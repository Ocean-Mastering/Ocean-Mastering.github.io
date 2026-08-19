const formatTime = seconds => {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
};

export function createAudioPlayer(root) {
  const audio = root.querySelector("[data-audio]");
  const playButton = root.querySelector("[data-play]");
  const seek = root.querySelector("[data-seek]");
  const currentTime = root.querySelector("[data-current-time]");
  const duration = root.querySelector("[data-duration]");
  const title = root.querySelector("[data-track-title]");
  const artist = root.querySelector("[data-track-artist]");
  const number = root.querySelector("[data-track-number]");
  const spectrum = root.querySelector("[data-spectrum]");
  const tracks = [...root.querySelectorAll("[data-track]")];
  let activeIndex = 0;

  for (let index = 0; index < 64; index += 1) {
    const bar = document.createElement("i");
    const wave = Math.sin((index / 63) * Math.PI);
    bar.style.setProperty("--bar-height", `${18 + wave * 72 + (index % 5) * 3}%`);
    bar.style.setProperty("--bar-delay", `${-(index % 11) * 0.09}s`);
    bar.style.setProperty("--bar-speed", `${0.72 + (index % 7) * 0.08}s`);
    spectrum.append(bar);
  }

  function syncPlayState() {
    const playing = !audio.paused;
    root.classList.toggle("is-playing", playing);
    playButton.setAttribute("aria-pressed", String(playing));
    playButton.setAttribute("aria-label", `${playing ? "Pause" : "Play"} ${title.textContent}`);
  }

  function loadTrack(index, playWhenReady = false) {
    const track = tracks[index];
    if (!track) return;
    activeIndex = index;
    tracks.forEach((item, itemIndex) => {
      if (itemIndex === activeIndex) item.setAttribute("aria-current", "true");
      else item.removeAttribute("aria-current");
    });
    title.textContent = track.dataset.title;
    artist.textContent = track.dataset.artist;
    number.textContent = String(index + 1).padStart(2, "0");
    duration.textContent = track.dataset.duration;
    currentTime.textContent = "0:00";
    seek.value = "0";
    seek.style.setProperty("--played", "0%");
    audio.src = track.dataset.src;
    audio.load();
    playButton.setAttribute("aria-label", `Play ${track.dataset.title}`);
    if (playWhenReady) audio.play().catch(() => syncPlayState());
  }

  playButton.addEventListener("click", () => {
    if (!audio.src) loadTrack(activeIndex);
    if (audio.paused) audio.play().catch(() => syncPlayState());
    else audio.pause();
  });

  tracks.forEach((track, index) => {
    track.addEventListener("click", () => loadTrack(index, true));
  });

  seek.addEventListener("input", () => {
    if (!Number.isFinite(audio.duration)) return;
    audio.currentTime = (Number(seek.value) / 1000) * audio.duration;
  });

  audio.addEventListener("timeupdate", () => {
    const progress = Number.isFinite(audio.duration) ? audio.currentTime / audio.duration : 0;
    seek.value = String(Math.round(progress * 1000));
    seek.style.setProperty("--played", `${progress * 100}%`);
    currentTime.textContent = formatTime(audio.currentTime);
  });
  audio.addEventListener("loadedmetadata", () => { duration.textContent = formatTime(audio.duration); });
  audio.addEventListener("play", syncPlayState);
  audio.addEventListener("pause", syncPlayState);
  audio.addEventListener("ended", () => loadTrack((activeIndex + 1) % tracks.length, true));

  loadTrack(0);
}
