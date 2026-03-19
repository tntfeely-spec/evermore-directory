# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Evermore Directory (funeralhomedirectories.com) is a Next.js 16 directory site that helps families find funeral homes and cremation services across all 50 US states. Data is stored in Supabase.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — run ESLint

## Tech Stack

- **Next.js 16** with App Router, React 19, TypeScript
- **Supabase** for data storage
- **Tailwind CSS v4** (imported via `@import "tailwindcss"` in globals.css)
- **zipcodes** package for ZIP code lookups and city geo-resolution
- **@vercel/analytics** for tracking
- Path alias: `@/*` maps to project root

## Architecture

### Data Layer
Primary Supabase tables:
- `funeral_homes` — main listing data with columns: id, business_name, address, city, state, zip, phone, website, services_offered, price_range_cremation, price_range_burial, special_features, is_featured, latitude, longitude
- `state_descriptions` — custom meta descriptions per state (state_code, meta_description)

The Supabase client (`lib/supabase.ts`) uses `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` env vars.

A Supabase RPC function `search_nearby(center_lat, center_lng, radius_deg)` handles geo-radius queries for the search API.

### Routing Structure
Single care-type route with dynamic segments:
- `/funeral-homes/[state]` — lists cities with funeral homes in a state
- `/funeral-homes/[state]/[city]` — lists individual funeral homes in a city

State params are lowercase abbreviations (e.g., `ca`). City params are slugified (e.g., `san-diego`). State-level pages fetch custom meta descriptions from the `state_descriptions` table.

### Search
Two search interfaces:
- **`/api/search`** — GET endpoint (`?q=` param) with three resolution paths:
  1. ZIP code → zipcodes lookup → `search_nearby` RPC geo-radius query
  2. City/suburb name → zipcodes geo-resolution → `search_nearby` RPC
  3. Fallback → ilike city name match directly in `funeral_homes` table
- **`/search`** — client-side search page that queries Supabase directly with state/city filters

The `SearchAutocomplete` component on the homepage consumes the `/api/search` endpoint with debounced input.

### Blog
Blog posts are individual page files under `app/blog/[slug]/` (one directory per post, not dynamic routing from a CMS). Blog slugs are hardcoded in `sitemap.ts`.

### Static Pages
`/about`, `/contact`, `/resources`, `/how-it-works`, `/featured-listing`, `/privacy`, `/terms`, `/states`

### Components
- `Navigation` — site header/nav
- `Footer` — site footer
- `PremiumBanner` — dismissible CTA banner for funeral home owners to get featured listings
- `SearchAutocomplete` — debounced search with city/ZIP autocomplete

### SEO
- `sitemap.ts` generates URLs for static pages, blog posts, state pages, and city pages (queries `funeral_homes` for city list)
- `robots.ts` allows all crawlers
- Each page sets metadata with canonical URLs pointing to funeralhomedirectories.com
- The brand is "Evermore Directory" (domain: funeralhomedirectories.com)

## Key Patterns
- State abbreviation ↔ full name mapping (`stateNames` object) is duplicated in each page file that needs it
- Featured listings (`is_featured` flag) get visual priority in city pages
- City name matching handles both spaces and hyphens (e.g., "Sedro Woolley" vs "Sedro-Woolley")
