---
# PLANNING — Phase 2, Task 2: Global Layout Component

**Status: Pending.**

---

## Files to Create

- `src/layouts/PortfolioLayout.astro`
- `src/layouts/BlogLayout.astro`
- `src/components/Header.astro` (stub — detailed in task03)
- `src/components/Footer.astro` (stub — detailed in task07)

---

## PortfolioLayout.astro

```astro
---
import BaseLayout from './BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title: string;
  description?: string;
  pageName?: string;
}

const { title, description, pageName = 'PORTFOLIO' } = Astro.props;
---

<BaseLayout title={title} description={description}>
  <div class="min-h-screen flex flex-col border border-yk-dark mx-4 my-4">
    <Header zone="portfolio" pageName={pageName} />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</BaseLayout>
```

---

## BlogLayout.astro

```astro
---
import BaseLayout from './BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title: string;
  description?: string;
  pageName?: string;
}

const { title, description, pageName = 'BLOG' } = Astro.props;
---

<BaseLayout title={title} description={description}>
  <div class="min-h-screen flex flex-col border border-yk-dark mx-4 my-4">
    <Header zone="blog" pageName={pageName} />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</BaseLayout>
```

---

## Stub Components (to be filled in task03 and task07)

**`src/components/Header.astro`** — minimal stub:
```astro
---
interface Props {
  zone: 'portfolio' | 'blog';
  pageName: string;
}
const { zone, pageName } = Astro.props;
---
<header class="border-b border-yk-dark px-6 py-4">
  <span>YVONKIM — {pageName} — {zone}</span>
</header>
```

**`src/components/Footer.astro`** — minimal stub:
```astro
<footer class="border-t border-yk-dark px-6 py-4">
  <p>Footer</p>
</footer>
```

---

## Update index.astro to Use PortfolioLayout

```astro
---
import PortfolioLayout from '../layouts/PortfolioLayout.astro';
---
<PortfolioLayout title="Home">
  <p>Hello</p>
</PortfolioLayout>
```

---

## Checklist

- [ ] `PortfolioLayout.astro` created
- [ ] `BlogLayout.astro` created
- [ ] `Header.astro` stub created
- [ ] `Footer.astro` stub created
- [ ] `index.astro` updated to use PortfolioLayout
- [ ] `npx astro check` passes

## Outcome
Layout shell in place. Every page now has a consistent outer frame with header and footer slots.
