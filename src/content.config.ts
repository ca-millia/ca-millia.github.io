import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    slug: z.string(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
  }),
});
export const collections = { posts };
