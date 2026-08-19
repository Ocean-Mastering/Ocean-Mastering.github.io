# Ocean Mastering — Below the Surface

A static, procedural WebGL website for Ocean Mastering. The homepage is one continuous scroll-driven descent beneath an ocean surface and return through the same water.

## Local preview

There is no build step and no runtime CDN. Serve the Git root so browser ES modules load correctly:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## QA views

- `/?visual-only=1` hides copy and interface chrome for the silent visual-story test.
- `/?reduced-motion=1` forces the stable-state reduced-motion mode.
- The two parameters can be combined.

## Structure

- `index.html` — semantic page, fallback visual, sparse story copy, practical content
- `styles/site.css` — responsive editorial presentation and accessibility states
- `scripts/storyboard.js` — authoritative normalized eleven-shot choreography
- `scripts/scene/` — water, particles, currents, pressure, light, and camera renderer
- `assets/vendor/` — locally pinned Three.js runtime and license
- `PROJECT_CONTRACT.md` — authoritative creative and technical contract
- `ARCHITECTURE.md` — implementation model and deployment target

## Deployment target

The planned organization Pages repository is `Ocean-Mastering/Ocean-Mastering.github.io`, served from `main`. The remote repository has not yet been created.
