import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getAllRealStatePricing, formatCurrency, formatRange, getStateRanking, type RealStatePricing } from '@/lib/server/state-pricing-real';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Direct Cremation: Complete Guide and Cost by State (2026)',
  description: 'Direct cremation costs $1,500 to $3,500 nationally. Compare real pricing across all 50 states from 5,100+ providers. Updated 2026.',
  alternates: { canonical: 'https://funeralhomedirectories.com/direct-cremation' },
  openGraph: {
    title: 'Direct Cremation: Complete Guide and Cost by State (2026)',
    description: 'Direct cremation costs $1,500 to $3,500 nationally. Compare real pricing across all 50 states.',
    url: 'https://funeralhomedirectories.com/direct-cremation',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const STATE_ABBR_TO_SLUG: Record<string, string> = {
  AL: 'al', AK: 'ak', AZ: 'az', AR: 'ar', CA: 'ca', CO: 'co', CT: 'ct', DC: 'dc', DE: 'de',
  FL: 'fl', GA: 'ga', HI: 'hi', ID: 'id', IL: 'il', IN: 'in', IA: 'ia', KS: 'ks', KY: 'ky',
  LA: 'la', ME: 'me', MD: 'md', MA: 'ma', MI: 'mi', MN: 'mn', MS: 'ms', MO: 'mo', MT: 'mt',
  NE: 'ne', NV: 'nv', NH: 'nh', NJ: 'nj', NM: 'nm', NY: 'ny', NC: 'nc', ND: 'nd', OH: 'oh',
  OK: 'ok', OR: 'or', PA: 'pa', RI: 'ri', SC: 'sc', SD: 'sd', TN: 'tn', TX: 'tx', UT: 'ut',
  VT: 'vt', VA: 'va', WA: 'wa', WV: 'wv', WI: 'wi', WY: 'wy',
};

export default async function DirectCremationHubPage() {
  const allPricing = await getAllRealStatePricing();
  const sortedByName = [...allPricing].sort((a, b) => a.name.localeCompare(b.name));
  const cheapest5 = [...allPricing].sort((a, b) => a.cremationLow - b.cremationLow).slice(0, 5);
  const expensive5 = [...allPricing].sort((a, b) => b.cremationLow - a.cremationLow).slice(0, 5);
  const totalProviders = allPricing.reduce((sum, s) => sum + s.listingCount, 0);

  const faqs = [
    { q: 'What is direct cremation?', a: "Direct cremation is the cremation of a person's remains without a formal funeral service. It includes transportation of the deceased, the cremation process, and return of the ashes. No embalming, viewing, or casket is required. It is the most affordable cremation option available." },
    { q: 'How much does direct cremation cost?', a: `Direct cremation in the United States costs between $1,500 and $3,500 in most states. The cheapest state is ${cheapest5[0]?.name} at around ${formatCurrency(cheapest5[0]?.cremationLow || 1200)}. The most expensive is ${expensive5[0]?.name} at around ${formatCurrency(expensive5[0]?.cremationLow || 3000)}.` },
    { q: 'What is included in direct cremation?', a: 'A standard direct cremation package includes transportation of the deceased from the place of death, a basic cremation container, the cremation process, required permits and paperwork, and return of cremated remains. It does not include embalming, a viewing, a casket, or a formal ceremony.' },
    { q: 'Can I have a memorial service after direct cremation?', a: 'Yes. Many families choose direct cremation specifically because it gives them the flexibility to hold a memorial service, celebration of life, or scattering ceremony on their own timeline. There is no requirement to hold a memorial immediately.' },
    { q: 'How long does direct cremation take?', a: 'The entire process from death to return of ashes typically takes 5 to 10 business days. The cremation itself takes 2 to 3 hours. Additional time is needed for transportation, mandatory waiting periods, permits, and processing.' },
    { q: 'Is direct cremation disrespectful?', a: 'No. Direct cremation is chosen by millions of American families each year. It is a dignified option that simply skips the formal ceremony before cremation. Families are free to honor their person through a memorial, celebration of life, or private remembrance at any time afterward.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "Direct Cremation: Complete Guide and Cost by State (2026)",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-12", "dateModified": "2026-05-12",
        "url": "https://funeralhomedirectories.com/direct-cremation"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Direct Cremation" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      }) }} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Direct Cremation</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Direct Cremation: Complete Guide and Cost by State (2026)
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          {/* AI-citable opening */}
          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Direct cremation is the cremation of a person&apos;s remains without a formal funeral service, typically including transportation, cremation, and return of the remains. National direct cremation prices range from $1,500 to $3,500 with significant variation by state. Based on real pricing from {totalProviders.toLocaleString()} plus funeral homes listed on Evermore Directory.
            </p>
          </section>

          {/* What is direct cremation */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Direct Cremation?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Direct cremation is the simplest form of cremation available. After death, the body is transported to a crematory, cremated in a basic container, and the ashes are returned to the family. There is no embalming, no viewing, no visitation, and no formal ceremony before the cremation takes place. This makes it the most affordable option for families who want cremation without the cost of a traditional funeral service.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              More than 60 percent of Americans now choose cremation, and direct cremation is the fastest growing segment. Families choose it for three reasons: cost savings (typically $4,000 to $8,000 less than a traditional funeral), simplicity (the provider handles everything), and flexibility (families can hold a memorial or celebration of life on their own schedule, weeks or months later, rather than within days of the death). As a former firefighter and paramedic, I have been with families in the hours after a death. The pressure to arrange a funeral within 48 hours adds stress to an already overwhelming situation. Direct cremation removes that pressure entirely.
            </p>
          </section>

          {/* National pricing overview */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Direct Cremation Cost: Cheapest and Most Expensive States</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-3">5 Cheapest States</h3>
                <div className="bg-green-50 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-green-200"><th className="text-left px-4 py-2 font-semibold text-gray-700">State</th><th className="text-left px-4 py-2 font-semibold text-gray-700">Starting From</th></tr></thead>
                    <tbody>
                      {cheapest5.map((s, i) => (
                        <tr key={s.abbr} className={i % 2 === 0 ? '' : 'bg-green-100/30'}>
                          <td className="px-4 py-2"><Link href={`/direct-cremation/${STATE_ABBR_TO_SLUG[s.abbr] || s.abbr.toLowerCase()}`} className="text-slate-600 hover:text-slate-800 font-medium">{s.name}</Link></td>
                          <td className="px-4 py-2 font-mono">{formatCurrency(s.cremationLow)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-3">5 Most Expensive States</h3>
                <div className="bg-red-50 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-red-200"><th className="text-left px-4 py-2 font-semibold text-gray-700">State</th><th className="text-left px-4 py-2 font-semibold text-gray-700">Starting From</th></tr></thead>
                    <tbody>
                      {expensive5.map((s, i) => (
                        <tr key={s.abbr} className={i % 2 === 0 ? '' : 'bg-red-100/30'}>
                          <td className="px-4 py-2"><Link href={`/direct-cremation/${STATE_ABBR_TO_SLUG[s.abbr] || s.abbr.toLowerCase()}`} className="text-slate-600 hover:text-slate-800 font-medium">{s.name}</Link></td>
                          <td className="px-4 py-2 font-mono">{formatCurrency(s.cremationLow)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* What's included */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Direct Cremation Includes (and What It Does Not)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">Typically included</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Transportation from place of death to crematory</li>
                  <li>Basic cremation container (cardboard or pressed wood)</li>
                  <li>The cremation process</li>
                  <li>Required permits and death certificate filing</li>
                  <li>Return of cremated remains in a temporary container</li>
                  <li>1 to 2 certified death certificates (varies by provider)</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">Not included</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Embalming</li>
                  <li>Viewing or visitation</li>
                  <li>Casket</li>
                  <li>Funeral ceremony or chapel use</li>
                  <li>Flowers, programs, or obituary placement</li>
                  <li>Decorative urn (temporary container provided)</li>
                  <li>Additional death certificates beyond what is included</li>
                </ul>
              </div>
            </div>
          </section>

          {/* State-by-state browser */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Direct Cremation Providers by State</h2>
            <p className="text-gray-600 mb-6">Select your state to see direct cremation providers, pricing, and city-level comparisons.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {sortedByName.map((s) => (
                <Link
                  key={s.abbr}
                  href={`/direct-cremation/${STATE_ABBR_TO_SLUG[s.abbr] || s.abbr.toLowerCase()}`}
                  className="bg-white rounded-lg border border-gray-200 px-3 py-2.5 text-center text-gray-700 hover:text-slate-700 hover:border-slate-400 hover:shadow-sm transition-all text-sm font-medium"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Choose a Direct Cremation Provider</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Start by requesting the General Price List from at least three providers in your area. Under the FTC Funeral Rule, every cremation provider must give you this document on request, free of charge. Compare the total price, not just the headline number. Some providers bundle everything into one price while others charge separately for transportation, permits, and death certificates. Make sure you know exactly what is included before signing anything.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Verify that the provider is licensed in your state. Most states require cremation providers to hold a funeral establishment license. Check your state&apos;s funeral board website for license verification. Look at online reviews, but focus on patterns rather than individual complaints. Every funeral home has a few negative reviews. What matters is whether the same issues (hidden fees, poor communication, delays) appear repeatedly.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ask about chain of custody procedures. A reputable provider will explain how they track and identify remains throughout the process. Ask about timeline expectations. Most direct cremations are completed within 5 to 10 business days from death to return of ashes. If a provider cannot give you a clear timeline, consider that a red flag.
            </p>
          </section>

          {/* FTC Funeral Rule */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights Under the FTC Funeral Rule</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Federal Trade Commission&apos;s Funeral Rule protects every consumer purchasing funeral or cremation services in the United States. The rule requires providers to give you an itemized General Price List, allows you to choose only the services you want (you cannot be forced to purchase a package), and prohibits providers from requiring you to purchase a casket for cremation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              If a cremation provider refuses to give you a price list, charges you for services you did not request, or requires a casket for direct cremation, they are violating federal law. You can file a complaint with the FTC at ftc.gov/complaint. For more detail, see our guide to <Link href="/blog/ftc-funeral-rule-explained" className="text-slate-600 hover:text-slate-800 font-medium">the FTC Funeral Rule explained</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10 bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Reading */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Direct Cremation? Complete 2026 Guide</h3>
                <p className="text-sm text-gray-600">Everything you need to know about direct cremation.</p>
              </Link>
              <Link href="/funeral-costs" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs by State</h3>
                <p className="text-sm text-gray-600">Compare funeral and cremation costs across all 50 states.</p>
              </Link>
              <Link href="/blog/how-to-choose-direct-cremation-provider" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">How to Choose a Direct Cremation Provider</h3>
                <p className="text-sm text-gray-600">7 point checklist for finding a trustworthy provider.</p>
              </Link>
              <Link href="/states" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Browse All Funeral Homes</h3>
                <p className="text-sm text-gray-600">5,100+ funeral homes and cremation providers across all 50 states.</p>
              </Link>
            </div>
          </section>

          {/* Related Topics */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Topics</h2>
            <div className="grid md:grid-cols-3 gap-3">
              <Link href="/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-600 mb-1">What Is Direct Cremation?</h3>
                <p className="text-xs text-gray-500">Definition, process, and legal requirements.</p>
              </Link>
              <Link href="/vs/direct-cremation-vs-traditional-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-600 mb-1">Direct Cremation vs Traditional Funeral</h3>
                <p className="text-xs text-gray-500">Side-by-side cost and service comparison.</p>
              </Link>
              <Link href="/vs/burial-vs-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-600 mb-1">Burial vs Cremation</h3>
                <p className="text-xs text-gray-500">Complete comparison of cost and process.</p>
              </Link>
              <Link href="/what-is-aquamation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-600 mb-1">What Is Aquamation?</h3>
                <p className="text-xs text-gray-500">Water-based cremation alternative explained.</p>
              </Link>
              <Link href="/what-is-the-ftc-funeral-rule" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-600 mb-1">What Is the FTC Funeral Rule?</h3>
                <p className="text-xs text-gray-500">Your rights when purchasing funeral services.</p>
              </Link>
              <Link href="/glossary" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-600 mb-1">Funeral Industry Glossary</h3>
                <p className="text-xs text-gray-500">115 terms explained in plain language.</p>
              </Link>
              <Link href="/vs/cremation-vs-aquamation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-600 mb-1">Cremation vs Aquamation</h3>
                <p className="text-xs text-gray-500">Environmental and cost comparison.</p>
              </Link>
              <Link href="/what-is-a-general-price-list" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-600 mb-1">What Is a General Price List?</h3>
                <p className="text-xs text-gray-500">The document every funeral home must provide.</p>
              </Link>
              <Link href="/what-is-pre-need-planning" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-600 mb-1">What Is Pre-Need Planning?</h3>
                <p className="text-xs text-gray-500">How to plan and save before you need to.</p>
              </Link>
            </div>
          </section>

          <div className="text-center text-sm text-gray-400">
            <p>Written by <strong className="text-gray-500">Terry Feely</strong>, former firefighter and paramedic with firsthand experience helping families navigate end of life decisions.</p>
          </div>
        </div>
      </main>
    </>
  );
}
