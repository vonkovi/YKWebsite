---
# RESEARCH — Phase 2, Task 6: Thin-Line Border System

**Task:** Establish the editorial border system used across the site.

---

## Wireframe Observation

Every page in the wireframe has a consistent thin-line border. Used on:
- Page outer frame (wraps entire content)
- Header bottom border (separates header from content)
- Grid tile borders (project/org cards)
- Section dividers

## Design Principle

The borders are the structure. They replace heavy backgrounds or shadows — editorial style uses thin lines to define space.

## Implementation

A single CSS utility pattern built on the existing `--color-yk-dark` token.

### Global border style
```css
/* in global.css @layer base */
* {
  box-sizing: border-box;
}

.border-yk {
  border: 1px solid var(--color-yk-dark);
}

.border-b-yk {
  border-bottom: 1px solid var(--color-yk-dark);
}
```

Or purely via Tailwind utilities — `border border-yk-dark` on components directly.

## Recommendation

Use Tailwind utilities directly (`border border-yk-dark`) rather than custom classes — keeps styling co-located with components and avoids a separate class system.

The `border-yk-dark` utility is auto-generated from the `--color-yk-dark` token in `@theme {}`.

## Where Applied in Phase 2

- Header: `border-b border-yk-dark` (bottom border separating from page content)
- Footer: `border-t border-yk-dark` (top border)
- Page wrapper: outer border (thin frame around all content — matches wireframe)

## Open Questions
- None.
