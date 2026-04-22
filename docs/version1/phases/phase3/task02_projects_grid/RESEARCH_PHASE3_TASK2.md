---
# RESEARCH — Phase 3, Task 2: Projects Grid

---

## Goal

Build the "Ambitious Projects" section on the landing page (`/`):
- 2×3 grid (2 rows, 3 columns)
- Top-left tile = pinned project (`pinned: true`) — black tile, white text
- Remaining 5 tiles = `featured: true` projects, ordered by date descending
- Bottom-right: "more projects →" link to `/projects`

---

## Data Query

```ts
import { getCollection } from 'astro:content';

const allProjects = await getCollection('projects');

const pinned = allProjects.find(p => p.data.pinned);
const featured = allProjects
  .filter(p => p.data.featured && !p.data.pinned)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 5);

const gridItems = [pinned, ...featured].filter(Boolean);
```

This guarantees: pinned item always occupies slot 0 (top-left), featured items fill the rest chronologically.

---

## Grid Layout

6 cells in a fixed 3-column grid:

```html
<div class="grid grid-cols-3">
  <!-- slot 0: pinned tile (black) -->
  <!-- slots 1–4: featured tiles -->
  <!-- slot 5: "more projects →" -->
</div>
```

Tailwind grid approach:
- `grid grid-cols-3` — 3 equal columns
- Each cell: `aspect-square` or fixed height to keep tiles uniform
- Pinned tile: `bg-yk-dark text-yk-white`
- Standard tiles: `bg-yk-white border border-yk-dark`
- "more projects →" slot: `border border-yk-dark flex items-end justify-end p-4`

---

## Tile Content

Each project tile shows:
- Project title (Playfair Display)
- Short description or tag
- Link wraps entire tile (`<a href={/projects/${entry.id}}>`)

Pinned tile additionally:
- Inverted colors: white text on dark background
- May show `type` badge or hero image as background (Phase 4 detail)

---

## "more projects →" Slot

The 6th cell (bottom-right) is always the CTA:

```astro
<a href="/projects" class="border border-yk-dark flex items-end justify-end p-4 font-sans text-sm hover:bg-yk-dark hover:text-yk-white transition-colors">
  more projects →
</a>
```

---

## Edge Cases

| Scenario | Behavior |
|----------|----------|
| No `pinned: true` project | Top-left slot is empty or uses most-recent featured item |
| Fewer than 5 featured (non-pinned) projects | Grid has fewer tiles — no empty placeholders |
| More than 5 featured (non-pinned) projects | Only top 5 by date shown — rest visible at `/projects` |

---

## Section Heading

Above the grid, a label in DM Sans small caps:

```astro
<p class="font-sans text-xs tracking-widest uppercase text-yk-dark/50 mb-4">
  ambitious projects
</p>
```

Consistent with the footer "my north star..." label style.

---

## Deviation Log

_(none yet — to be updated if implementation deviates)_
