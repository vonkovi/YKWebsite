---
# RESEARCH — Phase 2, Task 2: Global Layout Component

**Task:** Build the shell layout that wraps every page — providing consistent structure without implementing specific sections yet.

---

## Current State

`src/layouts/BaseLayout.astro` exists from Phase 0. It provides:
- Font imports (Playfair Display, DM Sans)
- Global CSS import
- Basic HTML shell (`<html>`, `<head>`, `<body>`, `<slot />`)

## What This Task Adds

Two layout files:

### PortfolioLayout.astro
Wraps all portfolio-zone pages (`/`, `/projects`, `/orgs`, detail pages).
- Extends BaseLayout
- Renders header + `<slot />` + footer
- Passes `zone="portfolio"` context to header for nav button logic

### BlogLayout.astro
Wraps all blog-zone pages (`/blog`, `/blog/[slug]`).
- Extends BaseLayout
- Renders header + `<slot />` + footer
- Passes `zone="blog"` context to header

## Why Two Layouts

From ARCHITECTURE.md: two hard navigation zones. Each has a different persistent nav button ("personal blog →" vs "← portfolio"). Encoding zone into the layout keeps pages clean — they declare their layout and the nav is automatic.

## Astro Layout Pattern

```astro
---
// src/layouts/PortfolioLayout.astro
import BaseLayout from './BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title: string;
  description?: string;
  pageName?: string;
}
---
<BaseLayout title={title} description={description}>
  <Header zone="portfolio" pageName={pageName} />
  <main>
    <slot />
  </main>
  <Footer />
</BaseLayout>
```

## Open Questions
- None.
