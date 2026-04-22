---
# ARCHITECTURE

## Stack
- **Framework:** Astro 6.x (static output)
- **Language:** TypeScript 5.x (strict)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **UI Components:** DaisyUI v5 (`@plugin "daisyui"` in global.css)
- **Fonts:** fontsource-variable (Playfair Display + DM Sans — self-hosted)
- **Content:** Astro Content Collections v2 (`src/content.config.ts` + `glob` loader) + `@astrojs/mdx`
- **Deployment:** Vercel

### `astro.config.mjs`
```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  vite: { plugins: [tailwindcss()] }
});
```

## Layout Components (Phase 2)

| File | Purpose |
|------|---------|
| `src/layouts/BaseLayout.astro` | HTML shell — fonts, global.css, meta tags. `<html data-theme="light">` forces DaisyUI light theme. |
| `src/layouts/PortfolioLayout.astro` | Portfolio zone wrapper — border box, Header (zone=portfolio), Footer |
| `src/layouts/BlogLayout.astro` | Blog zone wrapper — border box, Header (zone=blog), Footer |
| `src/components/Header.astro` | Universal header — branding, 5 icons, pageName, zone nav button |
| `src/components/Footer.astro` | North Star footer — mission statement in Playfair + hatch box |

### Tailwind Theme Tokens (`src/styles/global.css`)
| Token | Value |
|-------|-------|
| `--font-sans` | DM Sans Variable |
| `--font-serif` | Playfair Display Variable |
| `--color-yk-dark` | `#2b2b2b` |
| `--color-yk-beige` | `#f5f0e8` |
| `--color-yk-white` | `#ffffff` |
| `--color-yk-dark-muted` | `rgba(43,43,43,0.4)` |
| `--tracking-editorial` | `0.15em` |

### CSS Utilities
- `.hatch` — diagonal repeating-linear-gradient for quote box background (in `@layer utilities`)

---

## Site Map

```
/                          ← Portfolio landing (home)
/projects                  ← Projects archive — 3×4 grid
/projects/[slug]           ← Individual project deep-dive
/orgs                      ← Organizations archive — 3×4 grid
/orgs/[slug]               ← Individual org deep-dive
/blog                      ← Blog index — list with category filters
/blog/[slug]               ← Individual article
```

No standalone About or Contact page.

---

## Page Anatomy

### Universal Header
Every page shares the same header structure:
```
[ YVONKIM  [GH] [LI] [EMAIL] [CV] [DISCORD] ]     [ PAGE NAME  nav button → ]
```
Two flex groups separated by `justify-between`:
- **Left group** (`gap-8`): YVONKIM branding + icon row (`gap-3`)
- **Right group** (`gap-4`): PAGE NAME (`hidden md:inline`) + nav button

Icons: GitHub, LinkedIn, Email (copies `ykim336@ucr.edu`), CV (downloads `/resume.pdf`), Discord.
Nav button: "personal blog →" on portfolio zone, "← portfolio" on blog zone.

### Landing Page (`/`)
1. Header (PAGE NAME: PORTFOLIO, nav: "personal blog →")
2. **Ambitious Projects** — 2×3 grid (6 tiles). Top-left = pinned black tile. 5 remaining = `featured: true && !pinned`, sorted by date desc. Below grid: `border-t` divider row with right-aligned "more projects →" button.
3. **Founded Organizations** — 1×3 grid (3 tiles). Same pattern. Below grid: "more orgs →" divider row.
4. **North Star footer** — "To improve the quality of living for the average citizen by 2x."

#### Grid Data Query Pattern
```ts
// Projects: pinned + up to 5 featured = 6 tiles
const pinned = items.find(i => i.data.pinned);
const featured = items
  .filter(i => i.data.featured && !i.data.pinned)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 5);  // orgs uses slice(0, 2) for 3 total
const gridItems = [pinned, ...featured].filter(Boolean);
```

#### Grid Tile Behaviour
- No type badge — title + description only
- Tiles are `relative overflow-hidden aspect-square`
- On hover: all sibling tiles dim to `opacity-40` (Tailwind named group `group/grid` + `group-hover/grid:opacity-40`)
- Hovered tile stays at full opacity (`hover:!opacity-100`)
- Media layer (`absolute inset-0`) fades in to `opacity-20` on tile hover (`group/tile` + `group-hover/tile:opacity-20`)
- Video autoplays muted if `videoUrl` set; falls back to `heroImage`
- Text sits above media on `relative z-10`

#### CTA Buttons
"more projects →" and "more orgs →" are **not** grid cells. Each sits in its own `border-t border-yk-dark` divider row, right-aligned, styled as `border border-yk-dark px-3 py-1` — same as header nav button.

#### Grid Responsive Behaviour
| Breakpoint | Columns |
|------------|---------|
| `< 640px` (mobile) | 1 |
| `640px–1023px` (tablet) | 2 |
| `≥ 1024px` (desktop) | 3 |

#### Responsive Adjustments
- Header `pageName`: `hidden md:inline` — hidden on mobile
- Footer quote box padding: `p-6 md:p-10`
- Section padding: `px-4 md:px-8`

### Projects Archive (`/projects`)
1. Header (PAGE NAME: PROJECTS/ALL, nav: "blog →")
2. "ambitious projects" heading
3. 3×4 grid — top-left = pinned black tile, rest ordered by date

### Project Detail (`/projects/[slug]`)
1. Header (PAGE NAME: PROJECTS/[SLUG], nav: "blog →")
2. Hero media area (image or video)
3. Overview section
4. Inspirations section
5. Figure / video section

### Orgs Archive (`/orgs`)
1. Header (PAGE NAME: ORGS/ALL, nav: "blog →")
2. "founded organizations" heading
3. 3×4 grid — top-left = pinned black tile, rest ordered by date

### Org Detail (`/orgs/[slug]`)
1. Header (PAGE NAME: ORGS/[SLUG], nav: "blog →")
2. Mission section
3. "Like what you see?" CTA
4. Figure / video section

### Blog Index (`/blog`)
1. Header (PAGE NAME: BLOG, nav: "portfolio →")
2. Category filters: all / opinions / technical / startup
3. List view — title, date, category

### Article (`/blog/[slug]`)
1. Header (PAGE NAME: BLOG/[SLUG], nav: "portfolio →")
2. Mission section
3. "Why the opinion" section
4. Figure / video
5. Conclusion

---

## Content Collections

```
src/content/
  projects/     ← MDX — one file per project
  orgs/         ← MDX — one file per org
  blog/         ← MDX — one file per post
```

### Project frontmatter
```ts
title: string
description: string
date: Date
featured: boolean   // appears in landing grid and /projects archive
pinned: boolean     // top-left black tile (only one should be true at a time)
heroImage: string
tags: string[]
githubUrl?: string
liveUrl?: string
videoUrl?: string   // if set, autoplays on tile hover instead of heroImage
type: 'github' | 'hardware' | 'fullstack'
```

### Org frontmatter
```ts
title: string
description: string
date: Date
featured: boolean   // appears in landing grid and /orgs archive
pinned: boolean     // top-left black tile (only one should be true at a time)
heroImage: string
mission: string
url?: string
videoUrl?: string   // if set, autoplays on tile hover instead of heroImage
```

### Blog frontmatter
```ts
title: string
description: string
date: Date
category: 'opinions' | 'technical' | 'startup'
tags: string[]
```

---

## Design System

- **Palette:** Dark grey, white, beige
- **Mode:** Light only
- **Aesthetic:** Editorial × Paul Graham (sparse, undesigned intentionally) × Japanese minimalism
- **Layout:** Thin-line borders, generous whitespace, consistent header placement on every page
- **Typography:** Playfair Display (headings) + DM Sans (body)

### Border Rule
All structural borders use exactly: `border border-yk-dark` (1px solid #2b2b2b). No box-shadows. No rounded corners. No thick borders.

| Element | Class applied |
|---------|--------------|
| Page outer wrapper | `border border-yk-dark mx-4 my-4` |
| Header bottom | `border-b border-yk-dark` |
| Footer top | `border-t border-yk-dark` |
| Icon buttons | `border border-yk-dark` |
| Nav button | `border border-yk-dark` |
| Quote box (footer) | `border border-yk-dark` |
| Grid tiles (Phase 3) | `border border-yk-dark` |

---

## Key Invariants
- Static output only — no server runtime, no database
- All content lives in `src/content/` as MDX flat files
- `featured: true` → item appears in the 2×3 landing grid and the full archive grid
- `pinned: true` → item gets top-left black tile treatment (exactly one per content type)
- No filtering on `/projects` or `/orgs` — only `/blog` has category filters
- Two hard navigation zones: Portfolio zone and Blog zone, linked via persistent header nav button
- Email icon copies `ykim336@ucr.edu` to clipboard — no mailto, no contact page
- CV icon downloads `public/resume.pdf` directly
