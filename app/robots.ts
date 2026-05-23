import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
          rules: [
            {
                      userAgent: '*',
                      allow: '/',
                      disallow: ['/api/', '/drafts/', '/_next/static/', '/_next/data/'],
            },
                ],
          sitemap: 'https://funeralhomedirectories.com/sitemap.xml',
    };
}
