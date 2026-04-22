---
# RESEARCH — Phase 2, Task 3: YVONKIM Header

**Task:** Implement the universal header that appears on every page.

---

## Header Structure (from ARCHITECTURE.md)

```
YVONKIM  [GH] [LI] [EMAIL] [CV] [DISCORD]  [PAGE NAME]  [nav button →]
```

Every page. No exceptions.

## Elements

### Branding
- Text: `YVONKIM`
- Font: Playfair Display (serif)
- Links to `/` (portfolio home)

### Social Icons (5)
| Icon | Action |
|------|--------|
| GitHub | External link |
| LinkedIn | External link |
| Email | Copies `ykim336@ucr.edu` to clipboard via JS |
| CV | Downloads `public/resume.pdf` |
| Discord | External link |

### Page Name
- Displays current page identifier: `PORTFOLIO`, `BLOG`, `PROJECTS/ALL`, `BLOG/SLUG`, etc.
- Passed as a prop from the layout

### Nav Button
- Portfolio zone → "personal blog →" links to `/blog`
- Blog zone → "← portfolio" links to `/`
- Determined by `zone` prop passed from layout

## Email Copy — JavaScript

The email icon is a `<button>` (not `<a>`). On click, uses `navigator.clipboard.writeText()`:

```js
document.getElementById('email-btn').addEventListener('click', () => {
  navigator.clipboard.writeText('ykim336@ucr.edu');
});
```

`navigator.clipboard` requires HTTPS or localhost — works fine in production (Vercel) and dev server.

## CV Download

```html
<a href="/public/resume.pdf" download>CV</a>
```

`resume.pdf` placed in `public/` — Astro serves `public/` contents at root.

## Icons

Use SVG icons inline or via a library. Options:
- **Inline SVG** — zero dependency, full control
- **astro-icon** — Astro icon integration, supports Iconify sets

Recommendation: inline SVG for the 5 specific icons — no library overhead needed for 5 fixed icons.

## Design

From wireframe: icons appear as small squares. Clean, thin-bordered. Consistent with editorial minimalism.

## Open Questions
- None.
