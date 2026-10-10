# Ankit Tripathi QA Consulting – Website

Static website for QA consulting services, blog, QA news and courses.
Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), hosted on [Vercel](https://vercel.com) (free).

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
```

## Where things live

| What | Where |
|---|---|
| Profile, services, experience, certs | `src/data/site.ts` (edit here, all pages update) |
| Blog posts | `src/content/blog/*.md` |
| QA news | `src/content/news/*.md` |
| Courses | `src/content/courses/*.md` |
| Pages | `src/pages/` |
| Photo | `src/assets/ankit.webp` |
| Colors / fonts | `src/styles/global.css` |

## Publish a blog post or news item

Create a Markdown file, commit and push. Vercel redeploys automatically.

```md
---
title: "My post title"
description: "One-sentence summary shown on cards and in search results."
pubDate: 2026-10-10
tags: ["Playwright", "AI in Testing"]
draft: false
# News only (optional):
sourceUrl: "https://example.com/original-article"
sourceName: "Example"
---

Post content in Markdown…
```

The file name becomes the URL: `src/content/blog/my-post.md` → `/blog/my-post`.

## Contact form

Uses [Web3Forms](https://web3forms.com) (free). Get an access key with your email, then set
`PUBLIC_WEB3FORMS_KEY` in `.env` (local) and in Vercel → Settings → Environment Variables.
Without a key the Contact page shows an email button instead.

## Comments & likes (Firebase)

Blog and news posts have Google sign-in comments and likes, stored in Firestore
(project `ankit-qa-consulting`, free Spark plan).

- Config: `src/data/firebase.ts` · shared auth helper: `src/lib/firebase.ts` (reuse for course access)
- Security rules: `firestore.rules` → paste into Firebase console → Firestore → Rules → Publish after any change
- Moderation: sign in with the admin email and use **Delete** on any comment, or delete in the Firestore console
- New hosting domain? Add it in Firebase → Authentication → Settings → Authorized domains

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo. Framework preset: Astro (auto-detected).
3. Add `PUBLIC_WEB3FORMS_KEY` (and `SITE_URL` once you have a custom domain).
4. Deploy. Every push to `main` redeploys.

See [docs/ROADMAP.md](docs/ROADMAP.md) for Phase 2 (payments) and Phase 3 (automated content).
