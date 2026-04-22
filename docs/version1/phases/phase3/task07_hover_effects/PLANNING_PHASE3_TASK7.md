---
# PLANNING — Phase 3, Task 7: Hover Effects

**Status: Complete.**

Covers issue #4 from UI review.

---

## Desired Behaviour

When hovering over a grid tile:
- The hovered tile plays its video (if `videoUrl` exists in frontmatter) or shows its hero image
- All other tiles grey out (reduce opacity / desaturate)

---

## Frontmatter Change Required

Projects and orgs schemas need a `videoUrl` field (optional):

In `content.config.ts`, add to projects and orgs schemas:
```ts
videoUrl: z.string().optional(),
```

Placeholder MDX files can leave `videoUrl` omitted — fallback to `heroImage`.

---

## Implementation Approach

### CSS-only greying (sibling desaturation)

Use a CSS group hover pattern: when the grid container is hovered, all tiles reduce opacity. The hovered tile restores to full opacity.

```astro
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 group">
  {gridItems.map((item, i) => (
    <a class="... group-hover:opacity-40 hover:!opacity-100 transition-opacity duration-300">
      <!-- content -->
    </a>
  ))}
</div>
```

- `group-hover:opacity-40` — all tiles dim when any sibling is hovered
- `hover:!opacity-100` — the hovered tile stays full opacity (! overrides)
- `transition-opacity duration-300` — smooth fade

### Video / Image on Hover

Each tile has a media layer behind the text content:

```astro
<a class="relative overflow-hidden ...">
  <!-- Media layer (hidden by default, shown on hover) -->
  {item.data.videoUrl
    ? <video
        src={item.data.videoUrl}
        class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
        autoplay loop muted playsinline
      />
    : <img
        src={item.data.heroImage}
        alt={item.data.title}
        class="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-30 transition-opacity"
      />
  }
  <!-- Text content on top -->
  <div class="relative z-10 flex flex-col justify-between h-full">
    <h3>...</h3>
    <p>...</p>
  </div>
</a>
```

Note: The `group` class on each individual tile `<a>` (not the grid) triggers the video on that tile's own hover. The outer grid uses a separate group for dimming siblings.

---

## Tailwind v4 Note

Tailwind v4 supports arbitrary variants and `!` important modifier natively. `group-hover:opacity-40` and `hover:!opacity-100` both work without config.

---

## Checklist

- [x] `videoUrl` optional field added to projects schema in `content.config.ts`
- [x] `videoUrl` optional field added to orgs schema in `content.config.ts`
- [x] Grid container uses named group `group/grid` for sibling dimming
- [x] Non-hovered tiles dim to `opacity-40` via `group-hover/grid:opacity-40`
- [x] Hovered tile stays at full opacity via `hover:!opacity-100`
- [x] Video autoplays muted on tile hover if `videoUrl` present (`group-hover/tile:opacity-20`)
- [x] Hero image shown on tile hover if no `videoUrl` (same opacity reveal)
- [x] Media layer is `absolute inset-0 pointer-events-none` behind text (`z-10` on text)
- [x] `npx astro check` passes

## Outcome
Hovering a tile dims all others and reveals media — video or photo. Tactile and editorial.
