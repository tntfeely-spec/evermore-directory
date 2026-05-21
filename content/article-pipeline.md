# Article Pipeline: Affiliate Content Batch

| # | Slug | KD | TP | Research Done | Draft Built | Affiliates Filled | Live URL | Status |
|---|------|----|----|---------------|-------------|-------------------|----------|--------|
| 1 | best-memorial-wind-chimes | 0 | 2.7K | Yes | Yes | Yes | https://funeralhomedirectories.com/blog/best-memorial-wind-chimes | LIVE, Amazon tag evermorefuner-20 active |
| 2 | best-prepaid-funeral-plans | - | - | No | No | No | - | Queued |
| 2 | funeral-insurance-guide | - | - | No | No | No | - | Queued |
| 3 | cremation-jewelry | - | - | No | No | No | - | Queued |
| 4 | urns-guide | - | - | No | No | No | - | Queued |
| 5 | casket-guide | - | - | No | No | No | - | Queued |
| 6 | headstone-cost | - | - | No | No | No | - | Queued |
| 7 | sympathy-gift-ideas | - | - | No | No | No | - | Queued |
| 8 | memorial-keepsakes | - | - | No | No | No | - | Queued |
| 9 | cremation-cost-calculator | - | - | No | No | No | - | Queued |
| 10 | green-burial-options | - | - | No | No | No | - | Queued |

## Workflow

1. Research: fill in KD (keyword difficulty) and TP (traffic potential) from Ahrefs
2. Draft: build page.tsx in app/drafts/[slug]/
3. Affiliates: replace all AffiliateLink placeholder={true} with real URLs
4. Publish: move to app/blog/[slug]/, update sitemap, submit to indexing
5. Track: update Live URL and Status columns
