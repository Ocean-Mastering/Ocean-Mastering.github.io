# Ocean Mastering Discovery Audit

Last updated: 2026-08-18

This document records the evidence gathered before implementation. It is descriptive, not a replacement for `PROJECT_CONTRACT.md`.

## Current-site audit

Source: `https://www.ocean-mastering.com/`

The current Wix site is a compact brochure site with three routes: Home, About Us, and Testimonials Submission. It is a factual and audio-content source only. The new experience preserves the real listening examples, founder story, service language, testimonials, contact details, and project names while deliberately replacing the entire legacy graphic system.

### Brand and positioning

- Ocean Mastering is a boutique mastering house founded by J Fi in 2009.
- Core promise: “The sound in your head, delivered.”
- Repeated values: precision, fidelity, translation, emotional impact, and record completion.
- Existing visual identity: blue-to-green waveform mark, dark blue/teal field, technical display typography, and saturated cover artwork.

### Home-page content worth carrying forward

- Hero: “The Final Step in Record Completion.”
- Positioning: mastering as the bridge between a raw recording and a finished record that translates.
- Primary calls to action: start a project and understand the process.
- Services:
  - Final Record Completion
  - System Translation
  - Technical Audio Engineering
- Process language:
  - dynamic-range control
  - tonal balance
  - translation across high-end monitors, consumer speakers, earbuds, and streaming platforms
  - intentional expansion as well as compression
- Testimonials:
  - Julian K — depth and clarity; the final artistic piece
  - Sarat Vance — club scale and earbud warmth; translation
  - Marcus Thorne — preserved emotional impact
- Contact:
  - `ocean.mastering@gmail.com`
  - 2906 E MLK Jr Blvd Ste 3311, Austin, TX 78702

### Listening examples

The current audio playlist contains ten examples that may be migrated after the corresponding media and rights are confirmed:

1. City of the Violet Crown — JFI — 3:57
2. AC Current — Randomonium Studios — 2:54
3. Flat Top Mash — Origami Pigeon — 2:33
4. You Keep Going — Mood Craft — 2:29
5. Perfect — JFI — 4:05
6. Set the World On Fire — Ferrairi Tzar — 3:02
7. Jazzify — Jonathan Boyle — 2:36
8. Chris Phaze — The Game On — 2:21
9. Zincon — HVB Music Group — 2:24
10. Like Bubble Gum — Where Is Lulu — 2:22

The current third-party player exposes direct MP3 assets. The new implementation will use an accessible first-party player and locally hosted project media where appropriate rather than depend on the current embed.

### Founder and studio material

- Founder photograph of J Fi is available on the current site.
- About copy states that Ocean Mastering has delivered hundreds of projects over fifteen years.
- Existing gear imagery covers a precision console, tube compression, reference monitors, digital workstations, acoustics, and A/D conversion.
- Useful capability language includes high-resolution workflow, dynamic control, spatial imaging, equalization, streaming optimization, and sample-rate/bit-depth management.

### Portfolio material

The current site includes sixteen pieces of cover art and thirteen named releases. Named work includes releases by The Path of Decoherence, Heal, The World is Quiet Here, Exploring Birdsong, Sermon of Golden Verse, Omnerod, Nospun, Horrendous, Alkaloid, Haralabos Harry Stafylakis, Feather, Stortregn, and Ions.

### Accuracy correction

The current page claims “ISO 12845:2018 compliance.” This must not be migrated. The ISO catalogue identifies ISO/TR 12845:2010 as a technical report about fractional factorial screening experiments, not an audio-mastering standard, and does not list the claimed 2018 audio standard. Any future standards or delivery-format claim must be specific, relevant, and verifiable.

### Asset policy

- Do not migrate the current logo, cover artwork, founder/studio photography, Wix imagery, or any other legacy visual asset.
- Author new graphics inline using procedural WebGL, SVG, and CSS so the visual system is native to this narrative.
- Preserve the ten real audio examples as locally hosted content in an accessible first-party player.
- Project names and factual business information may identify the body of work, but their site graphics must be original Ocean Mastering interface art rather than substitute album covers.
- Do not reproduce Wix scaffolding, template markup, or third-party player code.

## Concept-reference audit

Source: `https://unitedcarriers.com/`

The reference is useful for interaction grammar only. Its branding, freight subject matter, assets, layouts, wording, and exact sequences are out of scope.

### Mechanics worth learning from

- A long page behaves as one visual state machine rather than a stack of unrelated entrance effects.
- A persistent object moves through distinct environments, which makes the scroll feel like one journey.
- Long pinned scenes create room for a physical action to complete before the next argument appears.
- Scroll progress drives deterministic transforms; it does not simply trigger autoplay timelines.
- Sparse cinematic stages are followed by calmer, information-dense business sections.
- High-contrast background transitions signal chapter changes.
- Oversized typography can act as an environmental layer while small technical labels establish orientation.
- Practical navigation remains available despite the cinematic treatment.

### What Ocean Mastering will do differently

- Keep one authored signal/wave object at the center of the entire story.
- Use an editorial, oceanic, dark-field visual language rather than isolated product cutouts on white.
- Make the key transformation continuous in geometry and camera perspective—not a scene swap or crossfade.
- Use fluid current, harmonic filaments, interference, spectral color, and depth as the physical vocabulary.
- Let content and motion communicate mastering benefits without pretending that louder or flatter always means better.

## GitHub organization audit

Source: `https://github.com/Ocean-Mastering`

- Authenticated account: `jonny-dub`
- Organization slug: `Ocean-Mastering`
- Organization display name: Ocean Mastering
- Existing repositories: none
- Collision risk: none
- Recommended Pages repository: `Ocean-Mastering.github.io`
- Expected organization Pages URL: `https://ocean-mastering.github.io/`
- Recommended deployment source: the root of the `main` branch, because the project is intentionally static and dependency-free at runtime.

## Migration decisions

- The new homepage will be the narrative experience described in the contract.
- About, work/listening, process/services, and contact information will remain reachable through semantic sections and a persistent navigation layer; separate detail routes can be added after the core story proves itself.
- The direct email CTA remains the reliable baseline. A static-site contact form requires a deliberate third-party endpoint and will not be silently simulated.
- The entire visual system—not only the first prototype—will remain newly authored inline. There is no legacy graphic-asset migration phase.
