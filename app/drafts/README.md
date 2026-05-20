# Drafts Directory

Article drafts live here until ready to publish.

## How drafts work

- Each draft is a complete `page.tsx` file at `app/drafts/[slug]/page.tsx`
- Drafts are NOT in the sitemap, NOT linked from anywhere on the site, and NOT indexed by search engines
- `/drafts` is blocked in `robots.txt` via `Disallow: /drafts`
- Drafts are accessible by direct URL only (for review purposes)

## To publish a draft

1. Move `app/drafts/[slug]/page.tsx` to `app/blog/[slug]/page.tsx`
2. Update `alternates.canonical` in the metadata from `/drafts/[slug]` to `/blog/[slug]`
3. Add the slug to the `blogPosts` array in `app/sitemap.ts`
4. Append the full URL to `~/Desktop/BUSINESS/evermore_indexing_api/slug_urls.txt`
5. Commit, push, verify deployment
6. Submit URL to Google Indexing API and IndexNow

## Affiliate links in drafts

Use the `AffiliateLink` component with `placeholder={true}` for links that need real affiliate URLs filled in before publishing. Placeholder links render as yellow-highlighted text in development and as plain text (no link) in production, preventing broken affiliate links from going live.
