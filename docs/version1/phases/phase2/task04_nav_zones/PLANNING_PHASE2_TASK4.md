---
# PLANNING — Phase 2, Task 4: Navigation Zone Switching

**Status: Complete.**

---

## Create Page Files

The routing structure requires these page files to exist so the nav zones work end-to-end.

### Pages to create

```
src/pages/
  index.astro              ← portfolio zone (exists, update layout)
  projects/
    index.astro            ← portfolio zone
    [slug].astro           ← portfolio zone
  orgs/
    index.astro            ← portfolio zone
    [slug].astro           ← portfolio zone
  blog/
    index.astro            ← blog zone
    [slug].astro           ← blog zone
```

---

## Page Templates (stubs — content added in Phase 3–5)

### `src/pages/projects/index.astro`
```astro
---
import PortfolioLayout from '../../layouts/PortfolioLayout.astro';
---
<PortfolioLayout title="Projects" pageName="PROJECTS/ALL">
  <p>Projects archive coming soon.</p>
</PortfolioLayout>
```

### `src/pages/projects/[slug].astro`
```astro
---
import PortfolioLayout from '../../layouts/PortfolioLayout.astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map(p => ({ params: { slug: p.id }, props: { project: p } }));
}

const { project } = Astro.props;
---
<PortfolioLayout title={project.data.title} pageName={`PROJECTS/${project.id.toUpperCase()}`}>
  <p>{project.data.title}</p>
</PortfolioLayout>
```

### `src/pages/orgs/index.astro`
```astro
---
import PortfolioLayout from '../../layouts/PortfolioLayout.astro';
---
<PortfolioLayout title="Organizations" pageName="ORGS/ALL">
  <p>Orgs archive coming soon.</p>
</PortfolioLayout>
```

### `src/pages/orgs/[slug].astro`
```astro
---
import PortfolioLayout from '../../layouts/PortfolioLayout.astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const orgs = await getCollection('orgs');
  return orgs.map(o => ({ params: { slug: o.id }, props: { org: o } }));
}

const { org } = Astro.props;
---
<PortfolioLayout title={org.data.title} pageName={`ORGS/${org.id.toUpperCase()}`}>
  <p>{org.data.title}</p>
</PortfolioLayout>
```

### `src/pages/blog/index.astro`
```astro
---
import BlogLayout from '../../layouts/BlogLayout.astro';
---
<BlogLayout title="Blog" pageName="BLOG">
  <p>Blog index coming soon.</p>
</BlogLayout>
```

### `src/pages/blog/[slug].astro`
```astro
---
import BlogLayout from '../../layouts/BlogLayout.astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(p => ({ params: { slug: p.id }, props: { post: p } }));
}

const { post } = Astro.props;
---
<BlogLayout title={post.data.title} pageName={`BLOG/${post.id.toUpperCase()}`}>
  <p>{post.data.title}</p>
</BlogLayout>
```

---

## Checklist

- [x] `src/pages/projects/index.astro` created
- [x] `src/pages/projects/[slug].astro` created
- [x] `src/pages/orgs/index.astro` created
- [x] `src/pages/orgs/[slug].astro` created
- [x] `src/pages/blog/index.astro` created
- [x] `src/pages/blog/[slug].astro` created
- [x] `npm run build` passes (all routes generated)
- [x] Nav buttons switch correctly between zones (wired via zone prop)

## Outcome
All routes exist. Nav zones function correctly. Pages are stubs ready for Phase 3–5 content.
