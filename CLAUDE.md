# CLAUDE.md

This file guides Claude Code when working in the Evermore Directory repository. Keep it current. When a build changes routing, schema, or a sitewide pattern, update the relevant section here.

## Project Overview

Evermore Directory (funeralhomedirectories.com) is a Next.js directory site that helps families find funeral homes, cremation services, funeral cost information, and veterans benefits across all 50 US states. Data is stored in Supabase. This is YMYL content (your money or your life): accuracy, depth, and trust matter more here than in a typical niche.

Brand: "Evermore Directory". Built by Terry Feely under Colbridges Digital LLC.

## Commands

- `npm run dev` runs the dev server (localhost:3000). This is the primary way to check work: render the page and look at it.
- `npm run build` runs a production build.
- `npm run lint` runs ESLint.

No test suite exists in this repo. Verify changes by running the dev server and checking the rendered page, not by writing or running tests, unless asked to add a test setup.

## Tech Stack (labeled nomenclature, use these terms)

- Repo (GitHub): tntfeely-spec/evermore-directory
- Host (Vercel): auto-deploys on push to main, scope "terry-feelys-projects"
- Framework (Next.js): 16.0.7, App Router, React 19.2.0, TypeScript
- Styling (Tailwind): v4 (imported via `@import "tailwindcss"` in globals.css)
- Database (Supabase): project ID yyvbsclpblhanyncnmgc
- Payments (Stripe), CRM (GoHighLevel), Domain (Hostinger)
- `zipcodes` package for ZIP lookups; `@vercel/analytics` for tracking
- Path alias: `@/*` maps to project root

## Environment Workflow

Environment variables live in Vercel only. They are never stored in a committed local `.env` file. Before running any local script that needs env vars, pull them:

```
npx vercel link --scope terry-feelys-projects --project evermore-directory --cwd ~/Desktop/BUSINESS/evermore-directory --yes
npx vercel env pull
```

Local repo path: `~/Desktop/BUSINESS/evermore-directory`. Scraper and tooling scripts live at `~/Desktop/BUSINESS/`, outside the repo folder.

## Data Layer

Primary Supabase tables:

- `funeral_homes`: id (uuid), business_name, address, city, state (2-letter code), zip, phone, website, services_offered, price_range_cremation, price_range_burial, special_features, email, image, is_featured (boolean), featured_until (timestamp), latitude, longitude, created_at, updated_at.
  - Unique constraint: (business_name, city). Always dedupe against this before any import.
- `state_descriptions`: custom meta descriptions per state (state_code, meta_description).

The Supabase client is in `lib/supabase.ts` and uses `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

Geo search RPC: `search_nearby(center_lat numeric, center_lng numeric, radius_deg numeric DEFAULT 0.45)`. Bounding-box filter, then Euclidean distance sort, featured listings first (is_featured DESC) then by distance, max 50 results.

IMPORTANT gotcha: latitude and longitude are stored as numeric in Postgres, but the app layer treats them as strings. The listings builder inserts them as strings, the search API uses parseFloat, and the listing page types them as `string | null`. The RPC does the geo math on the native numeric type, so it works correctly. Do not "fix" this by normalizing the types to numeric in the app code: it will break the parse logic.

`get_state_counts()` RPC returns home_count and city_count per state. The /states page needs it to avoid Supabase's 1000-row default limit.

Listing pages use `revalidate = 0` plus `dynamicParams = true`, so new Supabase rows go live instantly with no deploy.

## Routing Structure

Slug convention: state and city slugs are lowercase. State is the 2-letter abbreviation (e.g. `ca`, `tn`) EVERYWHERE EXCEPT veterans pages, which use the full state name (e.g. `tennessee`). City slugs are slugified and must handle both spaces and hyphens (e.g. "Sedro Woolley" vs "sedro-woolley"). When adding any new page type, match the existing slug convention exactly.

Live route families:

- Funeral homes: `/funeral-homes/[state]`, `/funeral-homes/[state]/[city]`, `/funeral-homes/[state]/[city]/[slug]`
- Direct cremation: `/direct-cremation`, `/direct-cremation/[state]`, `/direct-cremation/[state]/[city]`
- Funeral costs: `/funeral-costs`, `/funeral-costs/[state]`, `/funeral-costs/[state]/[city]`
- Veterans: `/veterans-funeral-benefits`, `/veterans-funeral-benefits/[state]` (full-name state slugs)
- VS pages: 10 static routes under `/vs/` (burial-vs-cremation through wake-vs-visitation)
- What-is pages: 15 static routes at root (what-is-a-celebration-of-life through what-is-the-ftc-funeral-rule)
- Portal: `/portal` plus login, dashboard, leads, calls, commission, documents, faq, onboarding, profile, sales, and training (training, training/manual, training/quick-reference)
- Admin: `/admin/sales`
- Static: about, contact, states, glossary, privacy, terms, search, featured-listing, obituary-maker, eulogy-writer, how-it-works, upgrade
- Blog: individual page files under `app/blog/[slug]/` (one directory per post, not CMS-driven). Slugs are hardcoded in `sitemap.ts`.
- API routes: search, contact, eulogy, obituary, portal, sales, indexnow, outrank-webhook, check-city

## Components

Around 20 components live in `components/`. The load-bearing ones: `Navigation` (site header), `Footer`, `PremiumBanner` (dismissible CTA banner for funeral home owners to get featured), and `SearchAutocomplete` (debounced city/ZIP search that consumes `/api/search`). Check the directory for the rest rather than assuming.

## Bot Filtering

Bot blocking happens in `middleware.ts`, not in robots.ts (robots.ts allows crawlers). See `BOT_FILTERING_README.md` for the filtering logic before changing anything bot-related.

## Public-Facing Constants (mirroring rules)

These keep the site consistent. When creating a new page within an existing family, copy the established pattern rather than inventing a new one.

- JSON-LD: LocalBusiness schema (with areaServed and descriptions), FAQPage schema on city pages, BreadcrumbList schema. New page types must reuse the existing schema shapes from comparable pages.
- Canonical URLs point to funeralhomedirectories.com on every page.
- Open Graph tags on all pages.
- Internal linking and nearby-cities interlinking follow the existing cluster rules (see Blog section).
- `sitemap.ts` and `robots.ts`: when adding a new route type, make sure it is represented in the sitemap.

## Blog: Structure vs Prose

Structure is templated and constant. Prose must never be templated. Two posts on different cities should share layout and schema but read as genuinely different articles.

### Post types

Editorial posts (guides, how-tos, explainers): hero image is appropriate. Layout: H1, byline, hero image, then content.

Shopping / affiliate posts (product roundups, "best of"): NO hero image. Layout jumps straight to value: H1, byline, intro paragraph, FTC affiliate disclosure, then the first product. Use the `AffiliateLink` component with `rel="sponsored"`.

Current shopping posts (maintained list, update when you add one): best-memorial-wind-chimes, best-memorial-gifts, personalized-sympathy-gifts, funeral-flowers-delivery, plants-instead-of-flowers-funeral. These use the shopping layout. All other blog posts are editorial.

### Internal linking clusters

- Shopping posts link to other shopping posts ("You Might Also Like").
- Editorial posts link to topically related editorial posts ("You Might Also Find Helpful").
- Grief links to grief, cremation to cremation, traditions to traditions.
- Do not link city or directory pages into editorial content sections.

### Content quality (this is a YMYL site)

Thin, generic, uniform copy both reads as machine-generated to detectors and fails to hold rankings. Avoid it:

- Every post needs concrete specifics a generic article would not have: real price ranges, state or local rules, named processes, FTC Funeral Rule details where relevant. A state or city post with no state or city specifics is not finished.
- Vary sentence length and structure. Do not open with formulaic phrases ("In today's world", "When it comes to", "Losing a loved one is never easy").
- No padding or restating the H1 several ways. Say the useful thing directly.
- Structure may match siblings; the prose, examples, and specifics must differ.

## Copy and Brand Rules (apply to all generated copy, code comments, and content)

- Never use dashes or em dashes anywhere. Use commas, periods, or reworded sentences.
- Never use emoji or icons in copy, links, buttons, navigation, or content. This includes flame icons on cremation content.
- Never use "No ads" or "No ads. No popups." It is retired. The sitewide tagline is: "No popups. No pressure. Built for families."
- Email signoff: Terry / Colbridges Digital LLC / [domain].

## Never-Skip Rules

- After any build that adds new pages or posts, append the new URLs to `~/Desktop/BUSINESS/evermore_indexing_api/slug_urls.txt`. Never skip this.
- Before any database import, dedupe against the (business_name, city) unique constraint.
- If a task would require more than about 5 manual repetitions, propose a scriptable or automated approach first.

## Safety Rails (do not modify without explicit approval)

- Stripe products and live payment configuration.
- Portal payment-link generation: reps generate their own Stripe payment links via the portal and never route through Terry. Do not change this flow.
- Featured-listing pricing tiers and any founding-member pricing.

Treat these as irreversible-risk zones. Flag and ask before touching them.

## Definition of Done

Before calling a build finished, confirm:

1. Slug convention matches the family (2-letter state, except veterans full-name).
2. JSON-LD and canonical match comparable existing pages.
3. Copy rules honored (no dashes, no emoji, correct tagline).
4. New URLs appended to slug_urls.txt if pages were added.
5. No payment or portal config touched without approval.
6. Page renders correctly in the dev server.

## Pointers (live-changing detail lives elsewhere, not in this file)

- Bot filtering and listings-builder logic: see `BOT_FILTERING_README.md`.
- Current status, known issues, and in-flight work: see the latest handoff doc rather than this file. Ask if you cannot find it.

## Known Patterns and Gotchas

- The state abbreviation to full-name mapping (`stateNames` object) is duplicated across page files that need it.
- Featured listings (`is_featured`) get visual priority on city pages.
- Search flow: ZIP to Nominatim geocode to search_nearby; city name to ilike prefix match; business name to ilike contains match; fallback to Nominatim geocode then search_nearby.
