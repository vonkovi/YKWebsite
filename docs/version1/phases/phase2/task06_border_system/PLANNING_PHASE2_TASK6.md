---
# PLANNING — Phase 2, Task 6: Thin-Line Border System

**Status: Pending.** Applied during task02, task03, and task07 — this task documents the system and verifies consistent application.

---

## The Rule

All structural borders use: `border border-yk-dark` (1px solid #2b2b2b).

No box shadows. No rounded corners. No thick borders.

## Where Applied

| Element | Class |
|---------|-------|
| Page outer wrapper | `border border-yk-dark mx-4 my-4` |
| Header bottom | `border-b border-yk-dark` |
| Footer top | `border-t border-yk-dark` |
| Icon buttons | `border border-yk-dark` |
| Nav button | `border border-yk-dark` |
| Grid tiles (Phase 3) | `border border-yk-dark` |
| Quote box (footer) | `border border-yk-dark` |

## Step 1: Audit Components After task02/03/07

After those tasks complete, verify every structural element uses the correct border class — no deviations.

## Step 2: Add Cross-Hatch CSS for Footer Quote Box

```css
/* Add to global.css @layer utilities */
.hatch {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 4px,
    rgba(43, 43, 43, 0.06) 4px,
    rgba(43, 43, 43, 0.06) 5px
  );
}
```

---

## Checklist

- [ ] Page outer wrapper has `border border-yk-dark mx-4 my-4`
- [ ] Header has `border-b border-yk-dark`
- [ ] Footer has `border-t border-yk-dark`
- [ ] All icon buttons have `border border-yk-dark`
- [ ] `.hatch` utility added to `global.css`
- [ ] No box-shadows or rounded corners on structural elements

## Outcome
Consistent editorial border language across the entire site.
