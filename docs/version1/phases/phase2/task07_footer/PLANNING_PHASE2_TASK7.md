---
# PLANNING — Phase 2, Task 7: North Star Footer

**Status: Complete.**

---

## Replace Footer Stub

Fill in `src/components/Footer.astro` with the full implementation.

---

## Full Footer Component

```astro
<footer class="border-t border-yk-dark px-8 py-16">
  <p class="font-sans text-xs tracking-widest uppercase text-yk-dark/50 mb-6">
    my north star...
  </p>
  <div class="border border-yk-dark p-10 hatch">
    <blockquote class="font-serif text-3xl leading-snug text-yk-dark">
      "To improve the quality of living for the average citizen by 2x."
    </blockquote>
  </div>
</footer>
```

---

## Notes

- `hatch` utility class defined in task06 (`.hatch` in `global.css`)
- `text-yk-dark/50` uses Tailwind v4 opacity modifier — requires the `--color-yk-dark` token to be defined as an RGB-compatible value. If opacity modifier doesn't work, fall back to `--color-yk-dark-muted` token from task05.
- Font size `text-3xl` may be adjusted during visual QA

---

## Checklist

- [x] Footer stub replaced with full implementation
- [x] "my north star..." label renders in small caps (tracking-widest uppercase text-xs)
- [x] Quote box renders with hatch background (`.hatch` class applied)
- [x] Quote text in Playfair Display (`font-serif`)
- [x] Visually matches wireframe intent
- [x] `npx astro check` passes

## Outcome
North Star footer complete. Mission statement visible on every page.
