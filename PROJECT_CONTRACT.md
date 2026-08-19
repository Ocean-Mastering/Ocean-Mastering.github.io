# Ocean Mastering — Project Contract

## Mandatory instruction for every future Codex instance

**READ THIS FILE IN FULL BEFORE DESIGNING, CODING, REFACTORING, INSTALLING DEPENDENCIES, EDITING ASSETS, OR DEPLOYING.**

This is the authoritative creative and technical work order for the Ocean Mastering website. It must survive context compression, new sessions, and implementation handoffs.

Future Codex instances must:

- preserve the current approved narrative unless the user explicitly replaces it;
- never flatten the homepage into a conventional landing page with incidental entrance effects;
- keep all meaningful cinematic state continuously controlled by normalized scroll progress;
- update this file after major creative, architecture, deployment, asset, or completion decisions;
- keep **Current implementation state** accurate;
- never delete this contract.

## Supersession record

On **2026-08-18**, the user explicitly rejected and superseded the first Ocean Mastering homepage execution.

That version failed the intended experience because it behaved too much like authored website sections arranged around a visual effect. Although it contained a scroll-linked mesh, the camera did not physically carry the visitor through one continuous environment with a convincing waterline crossing, persistent surface anchor, full descent, turn, ascent, and return.

The former narrative, **“FROM SIGNAL TO SEA — THE WAVE BECOMES WHOLE,”** is no longer the authoritative homepage narrative. It remains recoverable in Git history only.

The current authoritative homepage narrative is:

# BELOW THE SURFACE

## Project identity

- Business: **Ocean Mastering**, boutique audio mastering house
- Location: Austin, Texas; projects worldwide
- Current public site used only as a factual/audio-content audit source: `https://www.ocean-mastering.com/`
- GitHub organization: `https://github.com/Ocean-Mastering`
- Deployment target: static GitHub Pages
- Local Git root: `/Users/JDub/Desktop/OceanMastering_website`
- Likely organization Pages repository: `Ocean-Mastering/Ocean-Mastering.github.io`
- Primary CTA: **START A MASTER**
- Contact baseline: `ocean.mastering@gmail.com`

## One-sentence north star

The visitor begins floating above a deceptively simple wave, scrolls physically beneath its surface into an enormous hidden architecture of shimmer, currents, pressure, and musical relationships, watches those relationships become naturally more coherent and supportive, and then rises back through the same water to discover that nothing new was added—the depth was inside the music all along.

## Central idea

There is far more inside a musical mix than what initially appears on the surface.

Mastering does not manufacture that depth. It listens into the music, reveals the relationships already present, supports them, and allows the music to inhabit its own depth.

Emotional character:

- luxurious
- mysterious
- restrained
- contemplative
- boutique
- cinematic
- organic
- tactile
- emotional

The experience is oceanic and less overtly technological than the superseded version. Audio concepts are felt through water behavior rather than explained with interface graphics.

## Absolute non-negotiables

1. The homepage is one continuous cinematic scene. It is not a normal stack of sections, a static ocean background under text, or an animated hero followed immediately by conventional content.
2. **The user’s scroll position is the playhead.** Camera, water, particles, light, current behavior, atmosphere, and transformations are derived continuously from normalized progress `0 → 1`.
3. The primary cinematic sequence occupies substantial physical scroll distance, initially targeted at approximately **700vh** and adjustable only after pacing tests.
4. Scrolling backward reconstructs and reverses the same journey naturally. Narrative state is deterministic and scrub-able.
5. The camera is the main storytelling device. It approaches the water, crosses the actual surface, descends, slows, turns, ascends through the same layers, crosses the surface again, and reveals the same ocean from above.
6. The entire story occurs in **one physical place**. Frequency regions are depth bands inside the same ocean, never separate section backgrounds.
7. The surface is the persistent spatial anchor. Once underwater, it remains visible overhead, receding during descent and approaching during ascent.
8. The water becomes waveform-like because of camera proximity and silhouette. It never crossfades into an unrelated SVG, graph, or “audio mode.”
9. Waterline crossings are spatial transitions, not blue overlays, cuts, fades to black, or new-section reveals.
10. Visible scene change occurs during virtually every meaningful scroll interval. There are no dead bands where only text moves.
11. Mastering changes relationships between existing currents. It never replaces them, erases complexity, or forces them into mechanical uniformity.
12. The mastered result remains complex, dynamic, dimensional, naturally varied, and alive. It is not merely larger or louder.
13. The visual story must remain legible with all marketing copy hidden.
14. All graphics are newly authored procedural WebGL, inline SVG, or CSS. Never reuse the legacy Ocean Mastering logo, cover art, Wix graphics, or studio photography.
15. The silent visual narrative is complete on its own. Audio never autoplays and is not required for the cinematic sequence.
16. Mobile retains the same descent, depth, currents, pressure, relationship, ascent, and reveal.
17. Reduced-motion, keyboard access, semantic content, fallback visuals, and performance are first-class requirements.
18. The result remains a reproducible static GitHub Pages site.

## Things this must never resemble

- an equalizer or frequency graph
- a giant plugin interface
- a neon DAW or cyberpunk audio tool
- glowing circuit boards
- literal EQ curves or Hertz labels
- floating music notes
- a stock-photo studio site
- a generic blue-gradient SaaS page
- headlines fading over an unrelated ocean image
- eleven separate “frequency sections”
- a theme-park camera ride or constant orbit
- decorative particle snow

## Authoritative normalized storyboard

All ranges below describe one pinned scene. Exact curve values may be tuned; range order and physical meaning may not be changed without user approval.

### 0.00–0.08 — Shot 1: Above the water / Almost nothing

- Camera begins slightly above an almost perfectly calm Caribbean-blue ocean in full daylight.
- Distant horizon, bright blue sky, subtle reflection, one restrained swell. The opening must never read as ocean floating in outer space.
- Scroll moves the camera primarily **downward**, not toward the horizon.
- Horizon rises in frame; water detail increases; camera ends inches above the surface.
- Water phase and the passing swell are scrubbed by progress.
- Copy: “There is more in your mix than you can hear.”

### 0.08–0.16 — Shot 2: The surface becomes a signal

- Camera lowers until the surface profile occupies the horizontal composition.
- The same water geometry begins to read as both ocean and audio waveform.
- Horizon disappears; reflections stretch; crest highlights articulate the profile.
- Near `0.13–0.14`, camera reaches the waterline and the frame becomes roughly half air / half depth.
- No graphic substitution or crossfade.

### 0.16–0.25 — Shot 3: Crossing the waterline

- Camera physically passes through the surface.
- Waterline moves upward through the viewport: approximately 20%, 50%, 80%, then 100% underwater.
- Underwater fog, refraction, particle visibility, surface underside, caustics, and light attenuation change continuously with camera depth.
- The surface wave remains visible overhead after submersion.
- Copy: “Listen beneath the surface.”

### 0.25–0.38 — Shot 4: Near-surface detail / Light

- Camera continues descending but remains relatively near the surface.
- Small luminous particles shimmer quickly and reveal fine flow.
- Caustics and small surface disturbances produce rapid, delicate movement.
- High-frequency character is communicated by scale, speed, and light—not labels.
- The bright surface slowly retreats upward; larger, slower structures emerge below.

### 0.38–0.52 — Shot 5: Mid-water / Current

- Broad, transparent, river-like currents emerge as refractive density and particle flow—not neon ribbons.
- Several currents remain distinct, cross, bend, accelerate, and create pockets of pressure.
- Camera moves down and subtly between them.
- Scroll controls current reveal, spacing, redirection, velocity, camera drift, and light.
- Copy: “Every element changes everything around it.”

### 0.52–0.65 — Shot 6: Deep water / Pressure

- Environment darkens; surface remains faintly visible far overhead.
- Particle movement becomes slower and more widely spaced.
- Enormous low-frequency pressure waves displace particles, bend distant currents, alter light density, and subtly move the camera.
- One pulse may occupy most of the viewport.
- Bass is the ocean breathing, never a waveform graphic.

### 0.65–0.76 — Shot 7: Mastering intervention / Relationship

- No engineer avatar, equipment, virtual hands, plugins, or controls appear.
- Existing currents redirect, gain room, support one another, and reinforce instead of fight.
- Turbulence becomes increasingly coherent while complexity and individuality remain.
- Particle paths become elegant and coordinated, never mechanically uniform.
- Transformation is from **complexity to coherence**, not complexity to simplicity.
- Copy: “Nothing is isolated.” or “Support changes everything.”

### 0.76–0.84 — Shot 8: The turn

- Descent visibly slows and nearly stops at the deepest conceptual point.
- Pressure, currents, particles, distant surface, and depth coexist in one held composition.
- A brief suspended moment gives way to upward camera movement while scroll continues downward.
- The reversal is physical and perceptible.

### 0.84–0.91 — Shot 9: Ascent / Seeing the whole

- Downward page scroll now moves the camera upward through the same currents.
- Bass pressure remains beneath; broad currents stack through the middle; shimmer approaches above.
- The same layers feel more coordinated and intelligible.
- Lighting brightens, color richness increases, water clears, and ascent has elegant momentum.
- Copy: “Same music. Greater revelation.”

### 0.90–0.95 — Shot 10: Breaking the surface

- Camera approaches the luminous underside of the waveform-like surface.
- Refraction intensifies and the actual waterline moves down through the viewport.
- The frame passes from mostly underwater to half-submerged to fully above water.
- This mirrors the first crossing but carries greater clarity and emotional weight.

### 0.95–1.00 — Shot 11: Revelation / The ocean without an edge

- Camera continues the existing rising jib move and pulls rapidly backward while remaining focally locked on the same distant patch of ocean.
- Increasing altitude, downward pitch, and field of view reveal more and more of the same water without exposing the edge of a finite plane.
- The camera physically crosses three thin transparent raster cloud layers, including a purpose-built cirrus PNG, before reaching a high aerial view.
- The opening swell now has beautifully defined shape, body, internal movement, highlights, and preserved natural variation.
- It does not become a storm, an absurd wall, or a “louder” cartoon.
- The lone wave is understood as part of a vast coherent body of water.
- Final copy: “Mastering doesn’t add the ocean. It reveals the depth that was already there.”
- Supporting thought: “Your music. Fully revealed.”
- CTA: **START A MASTER**
- Restrained ambient ocean and cloud drift may continue without new scroll input; the camera and copy remain settled.

## Centralized choreography model

Narrative state must live in one explicit configuration module. Every shot defines:

1. normalized start/end progress;
2. camera position;
3. camera target/orientation;
4. surface distance and waterline state;
5. particle density, size, speed, and flow mode;
6. current visibility, spacing, turbulence, and coherence;
7. pressure-wave amplitude and phase;
8. lighting, caustics, fog, and atmosphere;
9. copy visibility and spatial position;
10. quality-dependent overrides.

Avoid unexplained magic numbers scattered across render modules. A pure function should be able to derive the complete scene state from `progress`, viewport, quality tier, and reduced-motion preference.

Major narrative phase uses a scrubbed clock such as `storyTime = progress × duration`, so reversing scroll reverses the physical story. Presentation follows exact scroll position through a critically damped response that visibly eases to rest over roughly 1.5–2 seconds. A separate, restrained ambient clock keeps waves, suspended matter, currents, light, and pressure alive after narrative travel settles; the ocean must never look paused.

## Camera principles

- Primary motion is calm vertical descent followed by ascent.
- Secondary pitch, drift, and lateral travel are subtle and purposeful.
- No constant orbiting or aggressive roll.
- Avoid motion-sickness-inducing acceleration.
- Camera depth must be visually measurable through surface distance, parallax, particle scale, fog, and light.
- Pacing: slow opening, anticipatory crossing, steady descent, exploratory currents, heavy spacious depth, gradual coherence, suspended turn, quicker elegant ascent, dramatic-but-controlled breakthrough, slow reveal.

## Water surface and waterline

- Use one double-sided displaced surface visible from above and below.
- Above-water, half-submerged, and underwater states must be convincingly distinct.
- Prefer true geometry, double-sided materials, depth/fog changes, clipping where useful, and shader-based refraction over a full-screen color wipe.
- The underside must catch refracted highlights and remain recognizable as the same surface.
- Water silhouette becomes waveform-like through viewpoint, lighting, and geometry.

## Particles and currents

Particles are flow tracers, not decoration.

- Near surface: small, quick, shimmering, high-detail paths.
- Mid-water: particles visibly follow multiple current fields.
- Deep: slower motion, greater spacing, larger-scale displacement.
- Mastering: paths become mutually coherent without converging into identical motion.
- Ascent: the same particles reveal how depth layers connect.

Currents should be perceived through density, refraction, particles, and light bending. Hard lines and neon ribbons are prohibited.

## Light

- Opening: minimal surface reflection.
- Just underwater: clear but restrained caustics.
- Mid-depth: long beams and softer illumination.
- Deep: blue-black gradients with scarce, enormous light structure.
- Coherence: light travels more intelligibly; do not simply add more lights.
- Ascent: clarity and richness return.
- Finale: natural illumination reveals form. The emotional mode is **revelation**, not special effect.

## Copy sequence

No more than one primary thought is visible at a time. Text supplements the visual story and never substitutes for it.

- Opening: “There is more in your mix than you can hear.”
- Submergence: “Listen beneath the surface.”
- Currents: “Every element changes everything around it.”
- Mastering: “Nothing is isolated.”
- Ascent: “Same music. Greater revelation.”
- Finale: “Mastering doesn’t add the ocean. It reveals the depth that was already there.”

Typography is editorial, restrained, and physically integrated into the composition.

## Practical website content

Persistent restrained navigation provides direct access to:

- Services
- Work / Credits
- About
- Start a Master

Do not interrupt the cinematic sequence with ordinary business sections. Detailed services, process, credits, listening examples, founder information, and contact content may appear after the sequence or in supporting pages/drawers.

Preserve verified factual content from the current site, including the founder story, service purpose, real audio examples when useful, credits, testimonials, Austin address, and email. Do not preserve the inaccurate “ISO 12845:2018” claim.

## Visual language

- bright Caribbean and tropical-sky blues above the opening water; no nocturnal or outer-space sky
- near-black, midnight, Atlantic blue, and blue-black water at increasing depth
- shallow water may lean toward a luminous Pacific blue, while increasing depth must progressively absorb light into saturated navy and near-black abyssal blue
- sparse luminous ice-blue and silver-blue highlights
- subtle silver reflection
- selective richer color during ascent and reveal
- stylized-real, tactile water rather than photorealism at any cost
- no legacy graphic assets
- no remote stock or Wix imagery

## Technical architecture requirements

- Static semantic HTML, authored CSS, and modular JavaScript suitable for GitHub Pages.
- A locally vendored, version-pinned WebGL library is acceptable when it materially serves the waterline and depth story.
- One persistent renderer and scene for the primary sequence.
- Rendering logic separated from narrative state and DOM copy.
- Native document scrolling; no scroll-jacking.
- Deterministic, normalized, reversible scene state.
- Texture-light procedural shaders and instanced/point-based particles.
- Capped device pixel ratio and adaptive geometry/particle quality tiers.
- Pause rendering when hidden or far outside the cinematic sequence.
- No prerendered frame sequence and no always-running backend.

## Mobile

Mobile keeps the full story. It may reduce geometry, particles, caustics, current count, and lateral camera movement, but may not replace the narrative with cards or static sections. Touch scrolling must remain native and smooth.

## Reduced motion

`prefers-reduced-motion` replaces continuous travel with a sequence of stable authored depth states and restrained transitions. Narrative order, content, navigation, and spatial logic remain understandable.

## Accessibility

- Semantic HTML copy in logical reading order
- Skip link past the cinematic sequence
- Conventional persistent navigation
- Visible keyboard focus
- WCAG-conscious contrast in every depth/light state
- Canvas marked decorative with a complete text alternative nearby
- No autoplay audio
- Important information available without WebGL or JavaScript

## Performance

- Smoothness is a premium feature; a beautiful 12 FPS result fails.
- No giant videos or hundreds of prerendered images.
- Avoid render-loop allocations.
- Use procedural geometry/shaders and efficient particle buffers.
- Cap device pixel ratio.
- Adapt mesh and particle density to viewport and capability.
- Lazy-load secondary content and audio.
- Pause work on hidden pages.
- Test desktop and real mobile hardware before deployment.

## Success test

Hide all marketing copy, mute the browser, and steadily scrub from top to bottom. A viewer must unmistakably see:

**sunlit Caribbean ocean → surface approach → water becomes signal → physical submergence → surface overhead → shimmer → currents → pressure → relationships become coherent → camera turns → ascent through the same layers → physical emergence → focal-locked aerial pullout → rapid cirrus crossing → the same ocean revealed as deeper, clearer, and more alive**

If instead the recording reads as headline, fade, paragraph, ocean image, headline, effect, stop and redesign.

## Implementation decisions

- **2026-08-18:** The user superseded the first implementation and made **BELOW THE SURFACE** authoritative.
- **2026-08-18:** Preserve the rejected version only in Git history; do not reuse its page composition, portfolio graphics, equipment diagrams, custom player, or surface-to-mesh reveal.
- **2026-08-18:** Continue to use a static progressive-enhancement architecture and organization Pages repository plan unless testing proves a change necessary.
- **2026-08-18:** Build the new scene from a true above/below ocean camera model with one persistent double-sided water surface, procedural depth layers, and scroll-derived particle/current fields.
- **2026-08-18:** Major narrative phase uses a damped scroll playhead, while a separate restrained ambient clock keeps the ocean alive without moving camera or copy.
- **2026-08-18:** The opening sky is full Caribbean daylight. The finale continues the focal-locked jib into a high aerial pullout and physically crosses transparent raster cirrus layers; cloud SVGs are prohibited.
- **2026-08-18:** Do not migrate legacy visual assets or the inaccurate standards claim.
- **2026-08-18:** Three.js `0.185.1` is vendored locally with its license; there is no runtime CDN or package build step.
- **2026-08-18:** The replacement uses one displaced double-sided water plane, deterministic depth particles, soft particulate current volumes, deep pressure shells, procedural light fields, and a vertically dominant camera path.
- **2026-08-18:** The visual QA query `?visual-only=1` hides all interface and marketing copy for the silent-story test. `?reduced-motion=1` exposes the stable-state accessibility mode for deterministic testing.
- **2026-08-18:** After Chrome exposed a module-chain boot failure that left the tall static fallback visible, the runtime was consolidated into a committed classic browser bundle. If initialization ever fails, the cinematic collapses to a readable one-screen hero followed by the practical content instead of leaving several blank wave screens.

## Current implementation state

Last updated: **2026-08-18, after Caribbean-daylight and aerial-cloud validation**

### Complete and still valid

- Local folder is the Git root on `main`.
- Git identity is configured for `jonny-dub`.
- Current-site factual/audio audit and conceptual-reference audit exist.
- `Ocean-Mastering` organization access is verified and the organization has no repositories.
- Static organization Pages repository target is `Ocean-Mastering/Ocean-Mastering.github.io`.
- The rejected version is recoverable at commit `d90b5fa`.
- This contract now records **BELOW THE SURFACE** as authoritative.
- The superseded homepage implementation and its media/dependency assets have been removed from the working tree.
- `ARCHITECTURE.md` now defines the replacement continuous above/below-water scene.
- The replacement homepage is implemented from scratch as one `820svh` cinematic region with one sticky WebGL scene.
- All eleven normalized story shots are centralized in `scripts/storyboard.js`.
- The camera physically crosses the same displaced water surface during descent and emergence.
- Near-surface shimmer, volumetric particulate currents, deep pressure, coherence, physical turn, ascent, and final reveal are implemented as one connected space.
- Sparse copy, restrained navigation, semantic transcript, non-WebGL inline-SVG fallback, skip link, services/about/contact handoff, and light-background header mode are implemented.
- Adaptive high, balanced, and mobile GPU quality tiers are implemented.
- Reduced motion selects stable authored depth states rather than continuously moving the camera.
- Chrome startup no longer depends on a chain of ES-module requests; `scripts/app.bundle.js` contains the locally vendored renderer and authored scene code in one deferred entry.
- The final camera remains locked on one ocean target while rising to `+190m`, pitching downward, widening, and crossing a generated transparent cirrus texture plus two supporting CC0 alpha layers.
- A no-startup fallback now keeps the opening message and all practical content visible without the multi-screen pinned state.
- Desktop `1280×720` and responsive mobile `390×844` browser passes retained the full story and rendered WebGL successfully.
- The text-hidden sequence was inspected across the full storyboard. Reverse scrubbing reconstructed the exact prior captured frame, and stopped reduced-motion states remained pixel-stable within their shot.

### Superseded

- The previous signal-to-sea mesh homepage, inline portfolio graphics, studio diagrams, and section-based business content are rejected and must not be carried into the replacement build.

### Remaining

1. Validate performance and touch behavior on at least one physical iPhone and one physical Android device.
2. Replace the temporary Work / Credits note with verified real credits and optional listening examples after user review.
3. Create `Ocean-Mastering/Ocean-Mastering.github.io`, push `main`, enable/verify organization Pages, and only then configure any custom domain.
4. Perform final public-URL smoke tests, metadata/share-card work, and launch QA.

## Final instruction

Implement toward the camera journey—not toward a normal website decorated with ocean animation.
