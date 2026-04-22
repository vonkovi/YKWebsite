---
# PLANNING — Phase 3, Task 6: Tile Redesign

**Status: Complete.**

Covers issues #2 and #3 from UI review.

---

## Issue 2: Remove Type Badge from Project Tiles

**Problem:** Each project tile shows a small badge at the top (e.g. "fullstack", "hardware", "github"). This adds noise and doesn't serve the visitor.

**Fix:** Remove the badge `<span>` from the tile markup in `index.astro`:

```astro
<!-- Remove this entirely -->
<span class="font-sans text-xs tracking-widest uppercase opacity-60">
  {project.data.type}
</span>
```

Replace the `justify-between` flex layout on the tile with `justify-end` or `items-end` since the top element is gone — or restructure to put title at top and description below:

```astro
<a class="... flex flex-col justify-start gap-2">
  <h3 class="font-serif text-xl leading-snug">{project.data.title}</h3>
  <p class="font-sans text-sm opacity-70 line-clamp-2">{project.data.description}</p>
</a>
```

---

## Issue 3: Pinned Black Tile Review

**Problem:** Both SIM42 (pinned project) and Awebohack (pinned org) render with a black background. User is surprised by this.

**Explanation:** This is intentional per the ADR-009 design — `pinned: true` maps to the top-left black tile treatment. Both SIM42 and Awebohack have `pinned: true` in their frontmatter.

**Design decision to make:** Is the black tile still the right call?

Options:
- **Keep it** — one black tile per grid is the editorial signature. It's intentional. The surprise is because placeholder content has no image context.
- **Soften it** — use `bg-yk-beige` for all tiles, no inversion. Loses the editorial punch.
- **Keep it, but with image** — the black tile will look intentional once a real hero image is behind the title in Phase 4.

**Recommendation:** Keep the black tile. It will read correctly once real content (images/video) fills Phase 4. No code change needed for this issue — it is working as designed.

---

## Checklist

- [x] Type badge (`fullstack`, `hardware`, `github`) removed from all project tiles
- [x] Tile layout adjusted — `flex-col justify-start gap-2`, title + description only
- [x] Pinned black tile confirmed intentional (no code change needed)
- [x] `npx astro check` passes

## Outcome
Tiles are cleaner — no noisy type labels. Black pinned tile remains as editorial signature.
