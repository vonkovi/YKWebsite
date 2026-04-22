---
# PLANNING — Phase 3, Task 3: Organizations Grid

**Status: Complete.**

---

## Target: `src/pages/index.astro`

Add the Founded Organizations section below the Projects section.

---

## Data Query (add to frontmatter alongside projects query)

```astro
---
const allOrgs = await getCollection('orgs');
const pinnedOrg = allOrgs.find(o => o.data.pinned);
const featuredOrgs = allOrgs
  .filter(o => o.data.featured && !o.data.pinned)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 5);
const orgGridItems = [pinnedOrg, ...featuredOrgs].filter(Boolean);
---
```

---

## Section Markup (add below Projects section)

```astro
<!-- Founded Organizations -->
<section class="px-8 py-12">
  <p class="font-sans text-xs tracking-widest uppercase text-yk-dark/50 mb-6">
    founded organizations
  </p>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {orgGridItems.map((org, i) => (
      <a
        href={`/orgs/${org.id}`}
        class={`border border-yk-dark p-6 aspect-square flex flex-col justify-between transition-colors
          ${i === 0
            ? 'bg-yk-dark text-yk-white hover:bg-yk-dark/90'
            : 'bg-yk-white text-yk-dark hover:bg-yk-beige'
          }`}
      >
        <span class="font-sans text-xs tracking-widest uppercase opacity-60">
          organization
        </span>
        <div>
          <h3 class="font-serif text-xl leading-snug">{org.data.title}</h3>
          <p class="font-sans text-sm mt-1 opacity-70 line-clamp-2">{org.data.mission}</p>
        </div>
      </a>
    ))}
    <!-- CTA slot -->
    <a
      href="/orgs"
      class="border border-yk-dark p-6 aspect-square flex items-end justify-end font-sans text-sm hover:bg-yk-dark hover:text-yk-white transition-colors"
    >
      more orgs →
    </a>
  </div>
</section>
```

---

## Notes

- Uses `org.data.mission` as the subtitle field instead of `description`
- Badge label is static `"organization"` — orgs have no `type` enum like projects
- All grid/tile/border/pinned logic is identical to the projects grid

---

## Checklist

- [x] `getCollection('orgs')` returns actual entries
- [x] Pinned org tile renders in top-left with inverted colors
- [x] Up to 5 featured (non-pinned) org tiles render in date order
- [x] "more orgs →" CTA in final slot
- [x] "founded organizations" label renders above grid
- [x] Both grids (projects + orgs) coexist on the page without visual conflict

## Outcome
Founded Organizations 2×3 grid live below the Projects grid. Landing page now shows both content sections.
