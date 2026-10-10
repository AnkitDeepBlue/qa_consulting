# Roadmap

## Phase 1 – Website (done)
- Home, Services, About, Blog, QA News, Courses, Contact pages
- Markdown content collections for blog/news/courses
- Contact form (Web3Forms), RSS feeds, sitemap, Open Graph tags, dark mode, mobile layout
- Hosting on Vercel free tier

**Remaining manual steps:** create GitHub repo, import into Vercel, add Web3Forms key, optionally buy a domain.

## Phase 2 – Course payments
- Option A (simplest): hosted checkout links (Razorpay Payment Pages / Stripe Payment Links / Lemon Squeezy).
  Put the link in a course's `checkoutUrl`, set `status: available` and `price`. The site already renders an **Enroll** button.
- Option B (full): Vercel serverless functions + Razorpay/Stripe webhooks + gated course content (auth via Clerk/Supabase).
  Adds per-transaction fees only (~2% Razorpay India).

## Phase 3 – Automated blog & news
Because posts are just Markdown files, automation only has to commit a new file:

1. **GitHub Actions** cron (daily) runs a Python script.
2. Script gathers topics (RSS of testing blogs/tool release notes, search API).
3. Claude API summarizes and drafts the post in the frontmatter format from README.
4. Script commits to a branch and opens a PR (human review), or commits to `main` with `draft: true` for review.
5. Vercel redeploys on merge.

Keep a human review step at first: auto-published AI content with factual errors would hurt credibility.
