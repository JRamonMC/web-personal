import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    time: z.string(),
    serves: z.number(),
    tag: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const reading = defineCollection({
  loader: file('./src/content/reading.json'),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    kind: z.enum(['book', 'article']),
    url: z.string().url().optional(),
    // Nota en cada idioma.
    note: z.object({ en: z.string(), es: z.string(), mur: z.string() }),
    current: z.boolean().default(false),
  }),
});

export const collections = { recipes, reading };
