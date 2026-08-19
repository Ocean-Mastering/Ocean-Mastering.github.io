# Ocean Mastering — Below the Surface

A static, procedural WebGL website for Ocean Mastering. The homepage is one continuous scroll-driven descent beneath an ocean surface and return through the same water. A damped playhead softens wheel input while an independent ambient clock keeps the ocean alive at rest.

## Local preview

There is no runtime CDN. The committed browser bundle can be served directly from the Git root:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

The committed bundle also allows `index.html` to be opened directly from Finder for quick review. A real local server remains the preferred test because it matches GitHub Pages.

After changing source files in `scripts/`, regenerate the browser bundle with:

```bash
pnpm dlx esbuild@0.25.9 scripts/main.js --bundle --format=iife --target=chrome100,safari15,firefox100 --minify --legal-comments=inline --outfile=scripts/app.bundle.js
```

## QA views

- `/?visual-only=1` hides copy and interface chrome for the silent visual-story test.
- `/?reduced-motion=1` forces the stable-state reduced-motion mode.
- The two parameters can be combined.

## Structure

- `index.html` — semantic page, fallback visual, sparse story copy, practical content
- `styles/site.css` — responsive editorial presentation and accessibility states
- `scripts/storyboard.js` — authoritative normalized eleven-shot choreography
- `scripts/scene/` — depth-responsive Atlantic-blue water, particles, currents, pressure, light, and camera renderer
- `scripts/scene/cloud-field.js` — three scroll-revealed transparent raster cloud layers for the final aerial crossing
- `scripts/scroll-playhead.js` — approximately two-second critically damped convergence around native scroll input
- `scripts/app.bundle.js` — self-contained browser entry used by `index.html`
- `assets/vendor/` — locally pinned Three.js runtime and license
- `assets/clouds/` — generated cirrus texture, supporting CC0 alpha textures, and provenance
- `PROJECT_CONTRACT.md` — authoritative creative and technical contract
- `ARCHITECTURE.md` — implementation model and deployment target

## Deployment target

The planned organization Pages repository is `Ocean-Mastering/Ocean-Mastering.github.io`, served from `main`. The remote repository has not yet been created.
