# Bot Traffic Filtering for funeralhomedirectories.com

## Overview
Implemented May 2026 to filter bot traffic that was distorting GA4 analytics and consuming Vercel resources. GA4 showed 115 active users from Singapore (41% of total) over 7 days, all suspected bots from datacenter IPs.

## Layer 1: Vercel Edge Middleware (middleware.ts)

### What it blocks
- Known scraper bots: AhrefsBot, SemrushBot, MJ12bot, DotBot, and 25+ others
- Headless browsers: PhantomJS, HeadlessChrome, Puppeteer, Selenium
- Script libraries: python-requests, go-http-client, wget, curl, libwww-perl
- Empty or short user agents (under 15 characters)
- All traffic from Singapore (SG), Russia (RU), and China (CN) that is not from a whitelisted bot

### What it allows (do NOT block these)
- Googlebot, Bingbot, Google-Extended
- GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Anthropic-AI
- Applebot, DuckDuckBot, YandexBot
- Social platform bots: Facebook, Twitter, LinkedIn, Slack, WhatsApp, Pinterest, Discord, Reddit
- Monitoring tools: UptimeRobot, Chrome Lighthouse, PageSpeed, GTmetrix
- Vercel internal requests

### How it works
1. Request hits Vercel edge
2. Middleware checks user-agent against allow-list first (legitimate bots always pass)
3. Then checks against block-list (known bad bots get 403)
4. Then checks user-agent length (under 15 chars = 403)
5. Then checks country code (SG, RU, CN without allowed bot UA = 403)
6. Everything else passes through

### Paths excluded from filtering
- /_next/ (static assets)
- /api/ (API routes)
- /pro/ (Evermore Pro proxy)
- /robots.txt, /sitemap.xml
- All image, font, and CSS files

## Layer 2: GA4 Filter (Manual Setup)

### Steps to configure in Google Analytics
1. Go to Admin > Data Streams > Web stream for funeralhomedirectories.com
2. Click "Configure tag settings"
3. Click "Show all" then "Define internal traffic"
4. Create rule:
   - Rule name: "Bot traffic from Singapore"
   - traffic_type value: "internal"
   - Match type: IP address begins with (not applicable for geo)
   - Note: GA4 does not support country-based internal traffic rules natively.
     The middleware layer is the primary defense. GA4 filtering is supplementary
     via the "Exclude referral traffic" or custom dimensions approach.

### Alternative GA4 approach
Create a custom dimension "is_bot" and set it via GTM based on the user agent.
Or rely on GA4's built-in bot filtering (Admin > Data Streams > More Tagging Settings > Filter out known bots).

## Verification

### Test commands
```bash
# Should return 403 (blocked bot)
curl -s -o /dev/null -w "%{http_code}" -A "AhrefsBot/7.0" https://funeralhomedirectories.com/

# Should return 403 (blocked bot)
curl -s -o /dev/null -w "%{http_code}" -A "SemrushBot" https://funeralhomedirectories.com/

# Should return 200 (allowed bot)
curl -s -o /dev/null -w "%{http_code}" -A "Googlebot/2.1" https://funeralhomedirectories.com/

# Should return 200 (allowed bot)
curl -s -o /dev/null -w "%{http_code}" -A "GPTBot/1.0" https://funeralhomedirectories.com/

# Should return 200 (normal browser)
curl -s -o /dev/null -w "%{http_code}" -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" https://funeralhomedirectories.com/
```

## Monitoring
- Check Vercel Analytics for 403 response rate
- Check GA4 for Singapore user count (should drop to near zero)
- Review blocked traffic patterns monthly and adjust lists as needed

## Files
- `middleware.ts` - Edge middleware with bot filtering logic
- `BOT_FILTERING_README.md` - This file
- `next.config.ts` - Existing redirects and rewrites (not modified)

## Date implemented
May 9, 2026

## Contact
Terry Feely, listings@funeralhomedirectories.com
