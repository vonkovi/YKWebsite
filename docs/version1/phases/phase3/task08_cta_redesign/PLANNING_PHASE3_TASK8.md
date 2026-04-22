---
# PLANNING — Phase 3, Task 8: CTA Redesign

**Status: Pending.**

Covers issue #5 from UI review.

---

## Problem

The "more projects →" link is currently a 7th grid cell — same `aspect-square` size as every other tile. It reads like a content tile rather than a navigation action. The user wants it positioned at the horizontal divider between the projects and orgs sections, as a small right-aligned text link.

---

## New Design

Remove the CTA from inside the grid entirely. Place it as a small right-aligned link in a dedicated row between sections:

```astro
<!-- Projects grid (6 tiles, no CTA cell) -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {projectGridItems.map(...)}
</div>

<!-- Divider row with CTA -->
<div class="border-t border-yk-dark flex justify-end px-4 md:px-8 py-3">
  <a href="/projects" class="font-sans text-sm border border-yk-dark px-3 py-1 hover:bg-yk-dark hover:text-yk-white transition-colors">
    more projects →
  </a>
</div>
```

The divider row sits:
- Below the projects grid (its `border-t` is the visual separator)
- Above the orgs section heading
- "more projects →" is right-aligned, same style as the header nav button

Same pattern for orgs:
```astro
<!-- Orgs grid -->
<div class="grid ...">...</div>

<!-- Divider row with CTA -->
<div class="border-t border-yk-dark flex justify-end px-4 md:px-8 py-3">
  <a href="/orgs" class="font-sans text-sm border border-yk-dark px-3 py-1 hover:bg-yk-dark hover:text-yk-white transition-colors">
    more orgs →
  </a>
</div>
```

---

## Grid Count Change

With the CTA moved out of the grid, the grid now holds exactly 6 project tiles (pinned + up to 5 featured) and up to 3 org tiles. Update the `slice()` call accordingly — see task09.

---

## Checklist

- [ ] "more projects →" removed from grid cells
- [ ] "more projects →" placed as right-aligned link in `border-t` divider row below projects grid
- [ ] "more orgs →" placed as right-aligned link in `border-t` divider row below orgs grid
- [ ] CTA button style matches header nav button (`border border-yk-dark px-3 py-1`)
- [ ] Divider row sits between projects section and orgs section heading
- [ ] `npx astro check` passes

## Outcome
CTAs feel like navigation, not content. Clean divider between sections. Consistent button style with header.
