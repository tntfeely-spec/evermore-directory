import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Legitimate crawlers we WANT to index our content
const ALLOWED_BOTS = [
  'googlebot',
  'bingbot',
  'msnbot',
  'gptbot',
  'chatgpt-user',
  'perplexitybot',
  'claudebot',
  'anthropic-ai',
  'google-extended',
  'applebot',
  'duckduckbot',
  'yandexbot',
  'facebookexternalhit',
  'facebot',
  'twitterbot',
  'linkedinbot',
  'slackbot',
  'whatsapp',
  'telegrambot',
  'pinterestbot',
  'discordbot',
  'redditbot',
  'google-inspectiontool',
  'chrome-lighthouse',
  'pagespeed',
  'gtmetrix',
  'uptimerobot',
  'vercel',
  'ahrefsbot',
  'ahrefssiteaudit',
];

// Known bad bots and scrapers to block
const BLOCKED_BOTS = [
  'semrushbot',
  'mj12bot',
  'dotbot',
  'blexbot',
  'rogerbot',
  'sogou',
  'exabot',
  'majestic',
  'megaindex',
  'serpstatbot',
  'seokicks',
  'seekport',
  'zoominfobot',
  'bomborabot',
  'buck/2',
  'dataprovider',
  'censysinspect',
  'neevabot',
  'bytespider',
  'petalbot',
  'ccbot',
  'gptbot-pre', // pre-training scraper variant, not the real GPTBot
  'claudebot-pre',
  'scrapy',
  'python-requests',
  'go-http-client',
  'java/',
  'wget/',
  'curl/',
  'libwww-perl',
  'httpclient',
  'phantomjs',
  'headlesschrome',
  'puppeteer',
  'selenium',
  'webdriver',
];

// Countries with high bot traffic and zero real audience
const SUSPICIOUS_COUNTRIES = new Set([
  'SG', // Singapore (confirmed bot source from GA4)
  'RU', // Russia
  'CN', // China
]);

// Static assets and files that should never be filtered
const SKIP_PATHS = [
  '/_next/',
  '/favicon',
  '/robots.txt',
  '/sitemap.xml',
  '/IndexNow',
  '/api/',
  '/pro/',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets and API routes
  if (SKIP_PATHS.some(p => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Skip image/font/css requests
  if (/\.(png|jpg|jpeg|gif|webp|svg|ico|css|js|woff|woff2|ttf|map)$/i.test(pathname)) {
    return NextResponse.next();
  }

  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
  const country = request.geo?.country || '';

  // 1. Allow legitimate bots regardless of country
  if (ALLOWED_BOTS.some(bot => userAgent.includes(bot))) {
    return NextResponse.next();
  }

  // 2. Block known bad bots
  if (BLOCKED_BOTS.some(bot => userAgent.includes(bot))) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // 3. Block empty or suspiciously short user agents (likely bots)
  if (userAgent.length < 15 && userAgent.length > 0) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // 4. Block empty user agent entirely
  if (!userAgent || userAgent.trim() === '') {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // 5. Block traffic from high-bot countries (non-bot user agents from these regions)
  //    Real users from these countries are extremely unlikely for a US funeral home directory
  if (SUSPICIOUS_COUNTRIES.has(country)) {
    // Add a header so GA4 can also filter if the request somehow gets through
    const response = new NextResponse('Forbidden', { status: 403 });
    return response;
  }

  // 6. Let everything else through
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public files with extensions
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf)$).*)',
  ],
};
