import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

const stateAbbreviations = [
    'al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga',
    'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'md',
    'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj',
    'nm', 'ny', 'nc', 'nd', 'oh', 'ok', 'or', 'pa', 'ri', 'sc',
    'sd', 'tn', 'tx', 'ut', 'vt', 'va', 'wa', 'wv', 'wi', 'wy'
  ];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://funeralhomedirectories.com';

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/states`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
      ];

  // State pages
  const statePages = stateAbbreviations.map((state) => ({
        url: `${baseUrl}/funeral-homes/${state}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
  }));

  // Get all cities from database
  const { data: homes } = await supabase
      .from('funeral_homes')
      .select('city, state')
      .range(0, 10000);

  const citySet = new Set<string>();
    homes?.forEach((home) => {
          if (home.city && home.state) {
                  const citySlug = home.city.toLowerCase().replace(/\s+/g, '-');
                  const stateSlug = home.state.toLowerCase();
                  citySet.add(`${stateSlug}/${citySlug}`);
          }
    });

  const cityPages = Array.from(citySet).map((cityState) => ({
        url: `${baseUrl}/funeral-homes/${cityState}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
  }));

  return [...staticPages, ...statePages, ...cityPages];
}
