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
| `src/layouts/BaseLayout.astro` | HTML shell — fonts, global.css, meta tags |
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
YVONKIM  [GH] [LI] [EMAIL] [CV] [DISCORD]  [PAGE NAME]  [nav button →]
```
- **GitHub** — external link
- **LinkedIn** — external link
- **Email** — copies `ykim336@ucr.edu` to clipboard on click
- **CV** — downloads `public/resume.pdf`
- **Discord** — external link
- **[PAGE NAME]** — current section label (PORTFOLIO, BLOG, PROJECTS/ALL, etc.)
- **[nav button]** — toggles between portfolio zone and blog zone

### Landing Page (`/`)
1. Header (PAGE NAME: PORTFOLIO, nav: "personal blog →")
2. **Ambitious Projects** — 2×3 grid. Top-left = pinned black tile (`bg-yk-dark text-yk-white`). Remaining 5 slots = `featured: true && !pinned`, sorted by date desc. 6th slot = "more projects →" CTA.
3. **Founded Organizations** — same grid pattern. 6th slot = "more orgs →" CTA.
4. **North Star footer** — "To improve the quality of living for the average citizen by 2x."

#### Grid Data Query Pattern
```ts
const pinned = items.find(i => i.data.pinned);
const featured = items
  .filter(i => i.data.featured && !i.data.pinned)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 5);
const gridItems = [pinned, ...featured].filter(Boolean);
```

#### Grid Responsive Behaviour
| Breakpoint | Columns |
|------------|---------|
| `< 640px` (mobile) | 1 |
| `640px–1023px` (tablet) | 2 |
| `≥ 1024px` (desktop) | 3 |

#### Responsive Adjustments (Phase 3)
- Header `pageName` span: `hidden md:inline` — hidden on mobile to prevent overflow
- Footer quote box inner padding: `p-6 md:p-10`
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
featured: boolean   // appears in landing 2×3 grid and /projects archive
pinned: boolean     // top-left black tile (only one should be true at a time)
heroImage: string
tags: string[]
githubUrl?: string
liveUrl?: string
type: 'github' | 'hardware' | 'fullstack'
```

### Org frontmatter
```ts
title: string
description: string
date: Date
featured: boolean   // appears in landing 2×3 grid and /orgs archive
pinned: boolean     // top-left black tile (only one should be true at a time)
heroImage: string
mission: string
url?: string
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
