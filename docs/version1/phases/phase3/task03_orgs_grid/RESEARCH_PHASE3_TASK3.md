---
# RESEARCH — Phase 3, Task 3: Organizations Grid

---

## Goal

Build the "Founded Organizations" section on the landing page (`/`), directly below the Projects grid:
- 2×3 grid (2 rows, 3 columns)
- Top-left tile = pinned org (`pinned: true`) — black tile, white text
- Remaining 5 tiles = `featured: true` orgs, ordered by date descending
- Bottom-right: "more orgs →" link to `/orgs`

---

## Data Query

```ts
import { getCollection } from 'astro:content';

const allOrgs = await getCollection('orgs');

const pinned = allOrgs.find(o => o.data.pinned);
const featured = allOrgs
  .filter(o => o.data.featured && !o.data.pinned)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 5);

const gridItems = [pinned, ...featured].filter(Boolean);
```

Same query pattern as projects — pinned slot 0, featured fill remaining slots.

---

## Grid Layout

Identical structure to the projects grid:

```html
<div class="grid grid-cols-3">
  <!-- slot 0: pinned tile (black) -->
  <!-- slots 1–4: featured tiles -->
  <!-- slot 5: "more orgs →" -->
</div>
```

Visual treatment is the same: `border border-yk-dark`, pinned tile inverted.

---

## Tile Content

Each org tile shows:
- Org title (Playfair Display)
- `mission` field (short — 1 line)
- Link wraps entire tile (`<a href={/orgs/${entry.id}}>`)

Pinned tile: white text on `bg-yk-dark`, same inversion as pinned project tile.

---

## "more orgs →" Slot

```astro
<a href="/orgs" class="border border-yk-dark flex items-end justify-end p-4 font-sans text-sm hover:bg-yk-dark hover:text-yk-white transition-colors">
  more orgs →
</a>
```

---

## Section Heading

```astro
<p class="font-sans text-xs tracking-widest uppercase text-yk-dark/50 mb-4">
  founded organizations
</p>
```

---

## Difference vs Projects Grid

| Property | Projects | Orgs |
|----------|----------|------|
| Collection | `projects` | `orgs` |
| Subtitle field | `description` or `tags` | `mission` |
| CTA link | `/projects` | `/orgs` |
| CTA text | `more projects →` | `more orgs →` |
| Heading label | `ambitious projects` | `founded organizations` |

All layout, border, color, and pinned-tile logic is identical.

---

## Component Reuse Consideration

Projects and Orgs grids are structurally identical. A shared `<Grid>` component could accept items + CTA props. However, this is a premature abstraction at this stage — implement both as inline markup on `index.astro` first. Extract to a component only if a third grid appears.

---

## Deviation Log

_(none yet — to be updated if implementation deviates)_
