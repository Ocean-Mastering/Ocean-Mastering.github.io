# Ocean Mastering Technical Architecture

Last updated: 2026-08-18

## Decision

Build a static, progressive-enhancement website with semantic HTML, authored CSS, and small native JavaScript modules. Use a locally vendored, version-pinned Three.js module only for the continuous signal-to-water scene. Do not use a component framework, page-builder runtime, animation framework, or remote CDN.

This gives the signature visual a real 3D geometry and camera while preserving a fast, understandable GitHub Pages deployment.

## Runtime shape

```text
index.html
├── semantic navigation and chapter copy
├── pinned visual stage
│   ├── WebGL canvas (enhancement)
│   └── CSS/SVG still-life fallback
├── listening/work section
├── process/about section
└── contact/footer

assets/
├── brand/
├── images/
├── audio/
└── vendor/three.module.min.js

scripts/
├── main.js                 boot, capabilities, lifecycle
├── scroll-controller.js    normalized progress and damping
├── narrative.js            chapter ranges and DOM state
└── signal-sea.js           WebGL scene and morph geometry

styles/
├── base.css                tokens, reset, typography, accessibility
├── narrative.css           pinned chapters and transitions
└── content.css             business sections and responsive layout
```

The final file split may evolve, but responsibilities must remain this explicit.

## The persistent object

The signal and sea are one mesh.

- Begin with a ribbon-like grid whose depth rows are collapsed toward the same plane.
- Its centerline is a fragile audio waveform generated from a deterministic harmonic function.
- As scroll progress advances, spread those same vertices in depth, introduce low-frequency displacement across the grid, and rotate the camera downward.
- The centerline never disappears; it becomes the ridge and energy path of the water surface.
- Surface normals, light, opacity, and color evolve with the geometry. No replacement mesh and no opacity crossfade may perform the transformation.
- The mastered state stays dynamic and breathable. It gains coherence and depth, not brick-wall uniformity.

## Scroll model

- Use native document scrolling for accessibility, history, touch, and browser ergonomics.
- Each narrative chapter owns an explicit scroll range expressed as normalized page progress.
- A critically damped interpolation loop follows actual scroll progress so wheel and touch input produce fluid visual motion without hijacking scrolling.
- DOM copy uses the same chapter progress as the WebGL scene; no independent animation timelines drift out of sync.
- Scene state must be derivable from a single progress value, which makes back-scrolling deterministic.
- The controller pauses rendering when the page is hidden and when the visual stage is far offscreen.

## Progressive enhancement

- The core proposition, services, work, about material, and contact information are present in HTML before JavaScript runs.
- If WebGL is unavailable, a lightweight SVG/CSS waveform-to-wave illustration remains visible.
- `prefers-reduced-motion: reduce` switches to representative still states, removes continuous drift, and avoids long pinned travel.
- A skip link and conventional navigation provide direct escape from the cinematic sequence.

## Performance budgets

- No runtime requests to package CDNs.
- Keep the initial HTML/CSS/JS payload lean; defer portfolio images and audio metadata below the narrative.
- Cap WebGL device pixel ratio, adapt mesh resolution to viewport capability, and avoid allocations in the render loop.
- Use texture-free procedural material in the core scene.
- Pause audio and animation work when not needed.
- Optimize images to modern formats with explicit dimensions and responsive sources.

## Accessibility model

- Motion never carries the only copy of information.
- Chapter copy remains real HTML with a logical reading order.
- Canvas is decorative and excluded from the accessibility tree; a concise textual explanation accompanies it.
- All interactive controls have visible focus states and minimum touch targets.
- Audio never autoplays and always exposes play/pause, timeline, current time, duration, and track information.
- Color contrast is tested in every background state.

## Deployment

- Repository: `Ocean-Mastering/Ocean-Mastering.github.io`
- Default branch: `main`
- Pages source: branch deployment from `/ (root)`
- Local Git root: `/Users/JDub/Desktop/OceanMastering_website`
- No generated build directory is required.
- Add a custom domain only after the organization Pages URL is verified and DNS ownership is confirmed.

## Prototype gate

Before substantial secondary content work, the prototype must prove:

1. the line feels fragile and alive;
2. the underwater reveal adds perceptible depth;
3. harmonic strands visibly interweave without becoming chaotic;
4. the exact same mesh becomes a volumetric water surface under camera rotation;
5. reverse scrolling reconstructs every state cleanly;
6. mobile maintains legibility and stable frame pacing;
7. reduced motion communicates the same narrative without continuous animation.
