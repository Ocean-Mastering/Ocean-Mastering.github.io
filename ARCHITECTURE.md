# BELOW THE SURFACE — Technical Architecture

Last updated: 2026-08-18 after prototype validation

## Purpose

This architecture exists to make scroll position the deterministic playhead for one continuous above-water, underwater, and return journey. It deliberately replaces the superseded line-to-mesh implementation.

## Runtime shape

```text
index.html
├── semantic persistent navigation
├── one 700vh cinematic scroll region
│   ├── sticky 100svh visual stage
│   ├── one WebGL canvas
│   ├── sparse semantic copy layer
│   └── progress/depth orientation affordance
├── concise post-cinematic business content
└── semantic contact/footer

scripts/
├── app.bundle.js              committed self-contained browser runtime
├── main.js                    lifecycle and capability boot
├── scroll-playhead.js         native scroll → exact normalized progress
├── storyboard.js              authoritative shot ranges and interpolated state
├── scene/
│   ├── below-surface-scene.js renderer, camera, fog, scene lifecycle
│   ├── water-surface.js       one double-sided displaced ocean surface
│   ├── particles.js           depth-aware procedural flow tracers
│   ├── currents.js            volumetric current-density fields
│   ├── pressure.js            slow deep-water displacement field
│   └── light-field.js         sun, caustics, beams, attenuation
└── copy-layer.js              one thought at a time from storyboard state
```

The exact split may evolve, but state, rendering systems, and DOM must remain separate.

## State contract

The renderer receives one immutable state object derived from progress:

```js
{
  progress,
  shot,
  storyTime,
  shot,
  shotIndex,
  camera: { x, y, z, targetX, targetY, targetZ, fov, submersion },
  surface: { amplitude, detail, reveal },
  particles: { density, speed, shimmer },
  currents: { visibility, turbulence, coherence },
  pressure,
  atmosphere: { caustic, beam, fogDensity, exposure, clarity }
}
```

`storyboard.js` is the single authority for shot ranges and transition curves. Render modules may interpret state but may not invent narrative timing.

## Scroll model

- Use native window scrolling.
- Calculate exact target progress from cinematic-region top and travel distance.
- Camera and all major physical state render directly from target progress so the scene stops and reverses with scroll.
- A very small critically damped presentation lag may soften wheel input, but it must never make the visitor feel disconnected from the playhead and must converge rapidly.
- Copy uses the same state and cannot drift on an independent timeline.
- `storyTime = progress × STORY_DURATION` drives all wave, current, particle, pressure, and caustic phases.
- Autonomous elapsed time is disabled throughout the journey; an optional negligible finale drift can blend in after `0.985`.

## Scene model

### Persistent surface

One large displaced plane at world `y = 0` is rendered double-sided. It is always the visible mix/surface anchor.

- From above, camera sees dark sky, reflection, and restrained crest highlights.
- At the threshold, the plane intersects the view and naturally divides air/depth.
- From below, the same geometry shows a refracted luminous underside.
- Vertex displacement is low-amplitude and broad at opening, increasingly legible as a signal profile near the waterline, and richer-but-natural at the finale.

### Camera path

The camera curve is vertically dominant:

```text
slightly above surface
→ inches above
→ surface intersection
→ near-surface depth
→ mid-water currents
→ deep pressure field
→ deepest hover
→ upward reversal
→ near-surface underside
→ surface intersection
→ elevated final reveal
```

Target and pitch change sparingly. Surface distance remains readable in every underwater shot.

### Waterline treatment

Use geometry and depth-aware shader state, not a fullscreen wipe:

- double-sided surface material;
- camera-height uniform;
- above/underwater fog and exposure interpolation around the threshold;
- underside refraction and caustic projection;
- optional clipping plane only where it strengthens half-submerged framing;
- subtle lens distortion constrained to the underwater portion.

### Particles

One GPU-friendly point field samples a deterministic flow function from position, progress-derived story time, depth, and current-coherence state. Particle buffers are initialized once; shader displacement avoids per-frame CPU allocations.

### Currents

Currents are volumetric density regions expressed by particle flow, faint translucent volumes, and refractive light bending. They must never read as hard ribbons. Existing fields change relationship during mastering; objects are not swapped.

### Pressure

Deep pressure is a very low-frequency world-space displacement applied across particles, current volumes, soft Fresnel pressure shells, and tiny camera offsets. It changes scale, not loudness.

## Progressive enhancement

- Cinematic copy and practical information exist in semantic HTML.
- Without WebGL, an original inline SVG depth section shows the same surface/descent/ascent structure as stable states.
- Reduced motion uses a small set of authored stable scene states with restrained transitions.
- A skip link bypasses the cinematic region.
- Navigation never depends on canvas.

## Quality tiers

### High

- capped DPR 1.75
- higher water subdivisions
- full particle budget
- multiple current volumes
- refined caustic pass

### Balanced

- capped DPR 1.4
- medium water subdivisions
- reduced particles/current volumes
- simplified caustics

### Mobile / low-power

- capped DPR 1.2–1.35
- low water subdivisions
- one efficient particle field
- fewer current volumes
- no expensive post-processing
- reduced lateral camera drift

Every tier retains the full story.

## Performance rules

- No allocations in the render loop.
- No video or image-sequence simulation.
- No external runtime CDN.
- Production HTML loads one committed classic bundle so local `file://`, static-server, and GitHub Pages startup do not depend on module-fetch behavior.
- Pause on `document.hidden` and when the cinematic stage is far outside the viewport.
- Defer non-cinematic audio and supporting content.
- Dispose GPU resources on genuine unload while supporting back-forward cache restore.

## Deployment

- Static root deployment from `main`.
- Target repository: `Ocean-Mastering/Ocean-Mastering.github.io`.
- Runtime assets use relative URLs.
- Custom domain is configured only after organization Pages works at its default URL.

## Prototype gate — passed locally

The text-hidden desktop and responsive-mobile review now shows:

1. calm ocean and downward surface approach;
2. water/profile ambiguity;
3. physical half-submerged threshold;
4. surface overhead throughout descent;
5. near-surface shimmer, mid-water current, and deep pressure as one connected space;
6. existing currents becoming more mutually supportive;
7. a clear deepest hover and upward reversal;
8. ascent through the same layers;
9. physical emergence;
10. the same ocean revealed with richer dimension.

The current visual test path is `/?visual-only=1`. Reverse-scrub capture returned the exact prior frame. Physical-device performance validation remains outstanding before deployment.
