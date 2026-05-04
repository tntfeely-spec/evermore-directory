import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { allStateSlugs } from '@/lib/state-pricing';

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
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/funeral-costs`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/veteran-burial-benefits`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/obituary-maker`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/eulogy-writer`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/how-it-works`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/featured-listing`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/direct-cremation`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/search`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
      ];

  const funeralCostStatePages = allStateSlugs.map((slug) => ({
    url: `${baseUrl}/funeral-costs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog posts
  const blogPosts = [
    'cremation-costs-2026',
    'cremation-near-me',
    'cremation-cost-san-jose',
    'direct-cremation-vs-traditional-funeral',
    'funeral-homes-los-angeles',
    'best-funeral-homes-nashville-tn',
    'funeral-homes-atlanta-ga',
    'funeral-homes-houston-tx',
    'funeral-homes-memphis-tn',
    'funeral-homes-chicago-il',
    'how-to-write-an-obituary',
    'how-long-can-a-funeral-home-hold-a-body',
    'what-is-a-celebration-of-life',
    'best-prepaid-funeral-plans',
    'what-to-do-after-a-funeral',
    'end-of-life-planning-checklist',
    'what-happens-if-you-cant-afford-a-funeral',
    'questions-to-ask-a-funeral-director',
    'eulogy-for-friend-samples',
    'what-to-do-with-ashes-after-cremation',
    'bible-verses-for-funerals',
    'what-happens-to-the-body-during-cremation',
    'how-to-choose-a-funeral-home',
    'what-is-a-graveside-service',
    'memorial-service-bulletins',
    'jewish-funeral-etiquette',
    'what-is-a-funeral-celebrant',
    'obituary-examples',
    'christian-funeral-songs',
    'thank-you-notes-after-funeral',
    'green-burial-options',
    'pallbearer-guide',
    'words-of-comfort-for-grieving-family',
    'pet-loss-grief',
    'what-happens-to-hsa-when-you-die',
    'average-burial-cost',
    'free-funeral-planning-guide',
    'what-to-wear-to-a-funeral',
    'how-long-does-a-funeral-last',
    'funeral-flowers-guide',
    'grief-stages-explained',
    'how-to-support-a-grieving-friend',
    'military-funeral-honors',
    'catholic-funeral-traditions',
    'muslim-funeral-traditions',
    'death-certificate-guide',
    'cremation-jewelry',
    'scattering-ashes-guide',
    'funeral-etiquette-guide',
    'obituary-vs-death-notice',
    'how-to-write-a-eulogy',
    'funeral-pre-planning-checklist',
    'what-is-a-viewing-vs-visitation',
    'how-long-after-death-is-a-funeral',
    'home-funerals-guide',
    'body-donation-to-science',
    'average-cemetery-plot-cost',
    'funeral-insurance-guide',
    'social-security-death-benefit',
    'what-happens-to-debt-when-you-die',
    'embalming-explained',
    'how-to-read-a-funeral-home-general-price-list',
    'ftc-funeral-rule-explained',
    'urns-guide',
    'aquamation-guide',
    'natural-organic-reduction',
    'columbarium-guide',
    'how-to-write-a-condolence-card',
    'funeral-readings-and-poems',
    'what-to-say-at-a-funeral',
    'mausoleum-burial-guide',
    'non-religious-funeral-options',
    'grief-counseling-guide',
    'children-and-grief',
    'loss-of-spouse-guide',
    'loss-of-parent-guide',
    'grief-after-sudden-death',
    'hindu-funeral-traditions',
    'buddhist-funeral-traditions',
    'veteran-headstones-and-markers',
    'national-cemetery-guide',
    'how-to-close-deceased-accounts',
    'digital-estate-planning',
    'living-will-vs-advance-directive',
    'medicaid-funeral-assistance',
    'notifying-agencies-after-death',
    'food-for-funeral-reception',
    'sample-eulogy-for-mother-from-daughter',
    'donations-at-a-funeral',
    'funeral-homes-that-offer-payment-plans',
    'scripture-readings-for-funerals',
    'poems-for-loss-of-father',
    'prayer-of-the-faithful-funeral',
    'funeral-hymns',
    'what-is-a-funeral-service',
    'amazing-grace-hymn',
    'classical-music-for-funerals',
    'condolence-text-message',
    'funeral-home-payment-plans',
    'hidden-funeral-costs-tennessee',
    'what-affects-funeral-costs-tennessee',
    'cremation-vs-burial-cost-tennessee',
    'low-cost-funeral-options-nashville',
    'funeral-financial-assistance-tennessee',
    'wichita-obituaries',
    'milwaukee-obituaries',
    'huntsville-obituaries',
    'missoula-obituaries',
    'greensboro-obituaries',
    'tucson-obituaries',
    'san-diego-obituaries',
    'spokane-obituaries',
    'phoenix-obituaries',
    'chicago-obituaries',
    'baltimore-obituaries',
    'atlanta-obituaries',
    'denver-obituaries',
    'lincoln-ne-obituaries',
    'san-francisco-obituaries',
    'boise-obituaries',
    'orlando-obituaries',
    'virginia-beach-obituaries',
    'norfolk-obituaries',
    'raleigh-obituaries',
    'tacoma-obituaries',
    'oklahoma-city-obituaries',
    'tulsa-obituaries',
    'peoria-il-obituaries',
    'bowling-green-ky-obituaries',
    'anchorage-obituaries',
    'winston-salem-obituaries',
    'columbus-ohio-obituaries',
    'st-louis-obituaries',
    'indianapolis-obituaries',
    'detroit-obituaries',
    'tampa-obituaries',
    'fresno-obituaries',
    'miami-obituaries',
    'funeral-flowers-delivery',
    'sympathy-card-messages',
    'condolence-messages',
    'anticipatory-grief',
    'disenfranchised-grief',
    'grief-support-groups',
    'celebration-of-life-ideas',
    'sympathy-gift-ideas',
    'eulogy-for-mother',
    'eulogy-for-father',
    'eulogy-for-grandmother',
    'eulogy-for-brother',
    'memorial-service-ideas',
    'memorial-table-ideas',
    'memorial-garden-ideas',
    'memory-jar-ideas',
    'funeral-program-ideas',
    'how-long-does-grief-last',
    'what-to-say-when-someone-loses-a-parent',
    'grief-journal-prompts',
    'celebration-of-life-food-ideas',
    'memory-book-for-funeral',
    'headstone-cost',
    'headstone-wording-examples',
    'grief-vs-depression',
    'how-to-find-a-grave',
    'death-anniversary',
    'small-estate-affidavit',
    'probate-guide',
    'life-insurance-after-death',
    'estate-executor-duties',
    'cemetery-plot-cost',
    'complicated-grief',
    'grief-exhaustion',
    'accessing-deceased-accounts',
    'funeral-financial-assistance',
    'eulogy-for-grandfather',
    'eulogy-for-sister',
    'eulogy-for-spouse',
    'eulogy-for-aunt-or-uncle',
    'how-to-write-a-will',
    'power-of-attorney-guide',
    'hospice-guide',
    'palliative-care-vs-hospice',
    'signs-of-dying',
    'what-to-say-to-someone-who-is-dying',
    'what-is-a-dnr',
    'organ-donation-guide',
    'miscarriage-grief',
    'suicide-loss-grief',
    'caregiver-grief',
    'alternative-burial-methods',
    'traveling-with-ashes',
    'obituary-templates',
    'cheapest-cremation-near-me',
    'funeral-songs-guide',
    'death-doula-guide',
    'memorial-keepsakes',
    'explaining-death-to-children',
    'losing-a-child',
    'grief-books',
    'grief-after-divorce',
    'birthday-of-deceased-loved-one',
    'grief-therapy-guide',
    'funeral-outfit-ideas',
    'dating-after-loss',
    'announcing-death-on-social-media',
    'ambiguous-loss',
    'grief-brain-fog',
    'holidays-after-loss',
    'victorian-mourning-customs',
    'are-funeral-expenses-tax-deductible',
    'what-to-write-at-a-funeral',
    'what-is-a-wake',
    'casket-guide',
    'what-is-a-repast',
    'african-american-funeral-traditions',
    'asian-funeral-traditions',
    'european-funeral-traditions',
    'memorial-tattoo-ideas',
    'funeral-procession-guide',
    'funeral-director-career',
    'types-of-grief',
    'bellingham-wa-funeral-homes',
    'alameda-county-funeral-homes',
    'obituary-template',
    'eulogy-examples',
    'eulogy-template',
    'short-eulogy-examples',
    'when-cardinals-appear-angels-are-near',
    'sympathy-gifts-that-last',
    'what-to-plant-in-memory-of-someone',
    'what-to-post-on-facebook-when-someone-dies',
    'memorial-stepping-stones',
    'plants-instead-of-flowers-funeral',
    'seeing-a-cardinal-after-someone-dies',
    'cardinal-sign-from-heaven',
    'memorial-wind-chimes',
    'gifts-for-grieving-friends',
    'personalized-sympathy-gifts',
    'funeral-cost-calculator',
    'what-is-direct-cremation',
    'direct-cremation-cost-by-state',
    'why-direct-cremation-is-affordable',
    'what-is-a-cremation-society',
    'how-to-choose-direct-cremation-provider',
    'how-long-does-cremation-take',
    'cremation-and-religion',
    'funeral-costs-and-estate-planning',
    'funeral-homes-denver-co',
    'funeral-homes-indianapolis-in',
    'funeral-homes-san-diego-ca',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // State pages
  const statePages = stateAbbreviations.map((state) => ({
        url: `${baseUrl}/funeral-homes/${state}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
  }));

  // Helper: slugify business name (matches listing page logic)
  function slugify(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-');
  }

  // Fetch all funeral homes (paginate through Supabase 1000-row limit)
  const allHomes: { business_name: string; city: string; state: string }[] = [];
  let offset = 0;
  const pageSize = 1000;
  while (true) {
    const { data: batch } = await supabase
      .from('funeral_homes')
      .select('business_name, city, state')
      .range(offset, offset + pageSize - 1);
    if (!batch || batch.length === 0) break;
    allHomes.push(...batch);
    if (batch.length < pageSize) break;
    offset += pageSize;
  }

  // City pages (unique city/state combos)
  const citySet = new Set<string>();
  allHomes.forEach((home) => {
    if (home.city && home.state) {
      const cs = home.city.toLowerCase().replace(/\s+/g, '-');
      const ss = home.state.toLowerCase();
      citySet.add(`${ss}/${cs}`);
    }
  });

  const cityPages = Array.from(citySet).map((cityState) => ({
    url: `${baseUrl}/funeral-homes/${cityState}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Individual listing pages
  const listingPages = allHomes
    .filter((home) => home.business_name && home.city && home.state)
    .map((home) => {
      const ss = home.state.toLowerCase();
      const cs = home.city.toLowerCase().replace(/\s+/g, '-');
      const bs = slugify(home.business_name);
      return {
        url: `${baseUrl}/funeral-homes/${ss}/${cs}/${bs}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      };
    });

  // Direct cremation state pages
  const { data: dcHomes } = await supabase
      .from('funeral_homes')
      .select('state')
      .eq('provider_type', 'direct_cremation');

  const dcStateSet = new Set<string>();
  dcHomes?.forEach((home) => {
    if (home.state) dcStateSet.add(home.state.toLowerCase());
  });

  const dcStatePages = Array.from(dcStateSet).map((state) => ({
    url: `${baseUrl}/direct-cremation/${state}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Direct cremation city pages
  const { data: dcCityHomes } = await supabase
      .from('funeral_homes')
      .select('city, state')
      .eq('provider_type', 'direct_cremation');

  const dcCitySet = new Set<string>();
  dcCityHomes?.forEach((home) => {
    if (home.city && home.state) {
      const citySlug = home.city.toLowerCase().replace(/\s+/g, '-');
      const stateSlug = home.state.toLowerCase();
      dcCitySet.add(`${stateSlug}/${citySlug}`);
    }
  });

  const dcCityPages = Array.from(dcCitySet).map((cityState) => ({
    url: `${baseUrl}/direct-cremation/${cityState}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts, ...statePages, ...funeralCostStatePages, ...cityPages, ...listingPages, ...dcStatePages, ...dcCityPages];
}
