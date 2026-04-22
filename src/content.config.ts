import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    featured: z.boolean(),
    pinned: z.boolean().default(false),
    heroImage: z.string(),
    tags: z.array(z.string()),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    videoUrl: z.string().optional(),
    type: z.enum(['github', 'hardware', 'fullstack']),
  }),
});

const orgs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/orgs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    featured: z.boolean(),
    pinned: z.boolean().default(false),
    heroImage: z.string(),
    mission: z.string(),
    url: z.string().optional(),
    videoUrl: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['opinions', 'technical', 'startup']),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects, orgs, blog };
