import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

// Projects — name-led rows on the Projects tab; each links to its own
// case-study page (projects/[slug]) whose prose comes from the MDX body.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    order: z.number(),
    image: z.string().optional(),
    // Optional hover-preview video — plays (no controls) when the image is hovered.
    // Falls back to just the image when absent. See components/ProjectMedia.astro.
    video: z.string().optional(),
    // Case-study detail-page fields (all optional; meta items are omitted when absent).
    lede: z.string().optional(),
    year: z.number().optional(),
    stack: z.array(z.string()).optional(),
    source: z.string().url().optional(),
  }),
});

// Blog — essays rendered inline on the Writing tab. Body renders.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = { projects, blog };
