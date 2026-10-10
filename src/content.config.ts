import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog and news posts are plain Markdown files. Future automation (Phase 3)
// only needs to commit a new .md file with this frontmatter.
const post = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  author: z.string().default('Ankit Tripathi'),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: post,
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: post.extend({
    // Original article being summarized, if any.
    sourceUrl: z.string().url().optional(),
    sourceName: z.string().optional(),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    duration: z.string(),
    status: z.enum(['available', 'coming-soon']).default('coming-soon'),
    // Phase 2: price + checkout link (Razorpay / Stripe / Lemon Squeezy).
    price: z.string().optional(),
    checkoutUrl: z.string().url().optional(),
    // Internal page for free resources (e.g. /courses/qa-roadmap-2026).
    href: z.string().optional(),
    order: z.number().default(0),
    topics: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, news, courses };
