import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    draft: z.boolean().default(false),
    author: z.string().default('에디터'),
  }),
});

export const collections = { blog };
