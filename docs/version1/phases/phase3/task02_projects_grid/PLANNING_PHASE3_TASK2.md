---
# PLANNING — Phase 3, Task 2: Projects Grid

**Status: Complete.**

---

## Target: `src/pages/index.astro`

Replace placeholder `<p>Hello</p>` with the Ambitious Projects section.

---

## Full Implementation

```astro
---
import PortfolioLayout from '../layouts/PortfolioLayout.astro';
import { getCollection } from 'astro:content';

const allProjects = await getCollection('projects');
const pinned = allProjects.find(p => p.data.pinned);
const featured = allProjects
  .filter(p => p.data.featured && !p.data.pinned)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 5);
const gridItems = [pinned, ...featured].filter(Boolean);
---

<PortfolioLayout title="Home" pageName="PORTFOLIO">
  <!-- Ambitious Projects -->
  <section class="px-8 py-12">
    <p class="font-sans text-xs tracking-widest uppercase text-yk-dark/50 mb-6">
      ambitious projects
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {gridItems.map((project, i) => (
        <a
          href={`/projects/${project.id}`}
          class={`border border-yk-dark p-6 aspect-square flex flex-col justify-between transition-colors
            ${i === 0
              ? 'bg-yk-dark text-yk-white hover:bg-yk-dark/90'
              : 'bg-yk-white text-yk-dark hover:bg-yk-beige'
            }`}
        >
          <span class="font-sans text-xs tracking-widest uppercase opacity-60">
            {project.data.type}
          </span>
          <div>
            <h3 class="font-serif text-xl leading-snug">{project.data.title}</h3>
            <p class="font-sans text-sm mt-1 opacity-70 line-clamp-2">{project.data.description}</p>
          </div>
        </a>
      ))}
      <!-- CTA slot -->
      <a
        href="/projects"
        class="border border-yk-dark p-6 aspect-square flex items-end justify-end font-sans text-sm hover:bg-yk-dark hover:text-yk-white transition-colors"
      >
        more projects →
      </a>
    </div>
  </section>
</PortfolioLayout>
```

---

## Notes

- `aspect-square` keeps tiles uniform — no fixed heights that break at different content lengths
- `line-clamp-2` requires Tailwind's built-in line-clamp utilities (available in Tailwind v4)
- Pinned tile (`i === 0`) uses `bg-yk-dark text-yk-white` inversion
- The CTA slot is always rendered last, after `gridItems` — becomes the 6th or (5+1)th cell
- If fewer than 5 featured projects exist, grid will have fewer than 6 cells total (CTA still renders)

---

## Checklist

- [x] `getCollection('projects')` returns actual entries (task01 prerequisite)
- [x] Pinned tile renders in top-left with inverted colors
- [x] Up to 5 featured (non-pinned) tiles render in date order
- [x] "more projects →" CTA in final slot
- [x] "ambitious projects" label renders above grid
- [x] Grid is 3 columns on desktop

## Outcome
Ambitious Projects 2×3 grid live on landing page. Pinned project in black tile. CTA links to archive.
