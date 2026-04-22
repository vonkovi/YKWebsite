---
# RESEARCH — Phase 2, Task 4: Navigation Zone Switching

**Task:** Implement the persistent nav button that switches between portfolio zone and blog zone.

---

## Two Zones (from ARCHITECTURE.md + ADR-007)

| Zone | Pages | Nav button shows |
|------|-------|-----------------|
| Portfolio | `/`, `/projects`, `/projects/[slug]`, `/orgs`, `/orgs/[slug]` | "personal blog →" → `/blog` |
| Blog | `/blog`, `/blog/[slug]` | "← portfolio" → `/` |

## Implementation

The nav button lives in the Header component. The `zone` prop controls which button renders:

```astro
---
interface Props {
  zone: 'portfolio' | 'blog';
  pageName: string;
}
const { zone } = Astro.props;
---

{zone === 'portfolio'
  ? <a href="/blog">personal blog →</a>
  : <a href="/">← portfolio</a>
}
```

## No JavaScript Required

This is purely prop-driven at build time. Static — no client-side routing logic needed.

## Page Routing Map

| Page file | Layout | zone prop | pageName prop |
|-----------|--------|-----------|---------------|
| `pages/index.astro` | PortfolioLayout | portfolio | PORTFOLIO |
| `pages/projects/index.astro` | PortfolioLayout | portfolio | PROJECTS/ALL |
| `pages/projects/[slug].astro` | PortfolioLayout | portfolio | PROJECTS/[SLUG] |
| `pages/orgs/index.astro` | PortfolioLayout | portfolio | ORGS/ALL |
| `pages/orgs/[slug].astro` | PortfolioLayout | portfolio | ORGS/[SLUG] |
| `pages/blog/index.astro` | BlogLayout | blog | BLOG |
| `pages/blog/[slug].astro` | BlogLayout | blog | BLOG/[SLUG] |

## Open Questions
- None.
