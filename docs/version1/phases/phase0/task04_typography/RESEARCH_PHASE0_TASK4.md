---
# RESEARCH — Phase 0, Task 4: Typography & Fonts

**Task:** Select and document the type system for YvonKim.com.

---

## Decision

**Playfair Display** (headings) + **DM Sans** (body).

## Why This Pairing

- **Playfair Display** — high-contrast serif with editorial weight. Matches the "editorial design" reference. Pulls toward literary/publication feel without being heavy.
- **DM Sans** — geometric, low-contrast sans-serif. Clean, restrained, modern. Matches the Japanese minimalism reference. Highly readable at small sizes.
- Together: editorial headings anchored by a neutral body — the same pairing used across editorial publications and clean portfolios.

## Reference Sites

- paulgraham.com — plain system serif, intentionally undesigned
- claude.ai — clean sans, restrained
- Japanese minimalism — whitespace-first, type as structure

## Loading Method: Fontsource (self-hosted)

No official Astro Google Fonts integration exists.

**Decision: `fontsource` variable fonts.**

```bash
npm install @fontsource-variable/playfair-display @fontsource-variable/dm-sans
```

**Why fontsource over Google Fonts `<link>`:**
- No external DNS request — faster TTFB.
- Works offline.
- Variable font files cover all weights/styles in one file.
- Fonts served from our own Vercel CDN — same performance tier as Google's CDN.

## Tailwind Integration

```js
// tailwind.config.mjs
theme: {
  extend: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
  },
},
```

## Usage Rules

- `font-serif` (Playfair Display): h1, h2, h3, display text, project/org titles
- `font-sans` (DM Sans): body copy, nav, labels, metadata, captions
- Never use Playfair Display below 18px — contrast ratio breaks at small sizes.

## Open Questions at Time of Research
- None.
