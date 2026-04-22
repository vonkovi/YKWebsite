---
# RESEARCH — Phase 2, Task 7: North Star Footer

**Task:** Implement the footer with the mission statement.

---

## Wireframe

```
┌──────────────────────────────────────────────────────┐
│  my north star...                                    │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  "To improve the quality of living for the    │  │
│  │   average citizen by 2x."                     │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

The footer box is cross-hatched/dotted in the wireframe — a decorative background on the quote container.

## Content

- Section label: `my north star...`
- Quote: `"To improve the quality of living for the average citizen by 2x."`

## Design

- Label: small, DM Sans, muted
- Quote box: large, Playfair Display, centered or left-aligned
- Cross-hatch or dot pattern on the quote box background — achievable with CSS `background-image` repeating pattern or a simple `bg-yk-beige` block
- Top border: `border-t border-yk-dark` separating from page content

## Cross-hatch Pattern (CSS)

```css
background-image: repeating-linear-gradient(
  45deg,
  transparent,
  transparent 4px,
  rgba(43, 43, 43, 0.08) 4px,
  rgba(43, 43, 43, 0.08) 5px
);
```

Applied as an inline style or a utility class on the quote container.

## Component

```astro
<!-- src/components/Footer.astro -->
<footer class="border-t border-yk-dark px-6 py-12">
  <p class="font-sans text-sm text-yk-dark/60 mb-4">my north star...</p>
  <div class="border border-yk-dark p-8 [background-image:repeating-linear-gradient(...)]">
    <blockquote class="font-serif text-2xl">
      "To improve the quality of living for the average citizen by 2x."
    </blockquote>
  </div>
</footer>
```

## Open Questions
- None.
