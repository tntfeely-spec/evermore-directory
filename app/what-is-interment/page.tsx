import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is Interment? Burial Types, Cost, and Process Explained (2026)',
  description: 'Interment is the formal act of placing a body or cremated remains in a final resting place. Cemetery interment fees range from $300 to $1,500.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-interment' },
  openGraph: {
    title: 'What Is Interment? Burial Types, Cost, and Process Explained (2026)',
    description: 'Interment is the formal act of placing a body or cremated remains in a final resting place.',
    url: 'https://funeralhomedirectories.com/what-is-interment',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'What is the difference between interment and burial?', a: 'Interment is the broader term that includes any placement of remains in a final resting place, whether in-ground burial, placement in a mausoleum crypt, or placement of a cremation urn in a columbarium niche. Burial specifically refers to placing remains in the ground. All burials are interments, but not all interments are burials.' },
  { q: 'How much does interment cost?', a: 'The interment fee (for opening and closing the grave) typically ranges from $300 to $1,500 for a casket burial and $200 to $800 for a cremation urn burial. This fee is charged by the cemetery and is separate from the cost of the plot, vault, and funeral services.' },
  { q: 'What is the interment fee?', a: 'The interment fee covers the cost of opening the grave (excavation), placing the casket or urn, and closing the grave (backfilling and re-sodding). It also includes the cemetery staff time for coordinating the committal service. Weekend and holiday interments often carry a surcharge of $200 to $500.' },
  { q: 'Can cremated remains be interred?', a: 'Yes. Cremated remains can be interred in a cemetery plot (buried in the ground in an urn), placed in a columbarium niche, or entombed in a mausoleum crypt. Many cemetery plots can accommodate multiple cremation urns in the same space.' },
  { q: 'What happens at an interment ceremony?', a: 'An interment ceremony (also called a committal service) is a brief gathering at the grave, crypt, or niche. The officiant offers final words, the remains are lowered or placed, and family members may place flowers, soil, or stones. The ceremony typically lasts 15 to 30 minutes.' },
];

export default function WhatIsIntermentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is Interment? Burial Types, Cost, and Process Explained",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-interment"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is Interment?" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      }) }} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">What Is Interment?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is Interment?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Interment is the formal act of placing a deceased person&apos;s body or cremated remains in a final resting place. The term encompasses burial in the ground, entombment in a mausoleum, and placement of a cremation urn in a columbarium niche. Cemetery interment fees (for opening and closing the grave) typically range from $300 to $1,500, and this charge is separate from the cost of the cemetery plot, burial vault, and funeral services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Interment comes from the Latin "interrare," meaning to place in the earth. In modern funeral industry usage, the term has expanded beyond in-ground burial to include any permanent placement of remains. The three primary forms of interment are ground burial (casket or urn placed in a grave), entombment (casket or urn placed in a mausoleum crypt), and inurnment (cremation urn placed in a columbarium niche).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Interment is typically the final step in the funeral process. It follows the funeral or memorial service, the funeral procession (if applicable), and the <Link href="/what-is-a-graveside-service" className="text-slate-600 hover:text-slate-800 font-medium">graveside committal service</Link>. After interment, the cemetery maintains the site according to its perpetual care agreement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The interment fee is charged by the cemetery for the labor and equipment needed to open and close the grave or niche. Typical costs include casket interment (opening and closing the grave) at $300 to $1,500, cremation urn interment (in ground) at $200 to $800, columbarium niche placement at $200 to $500, and mausoleum entombment at $500 to $2,000.
            </p>
            <p className="text-gray-600 leading-relaxed">
              These fees are in addition to the cost of the plot ($500 to $10,000), the burial vault or grave liner ($700 to $10,000), and the grave marker or headstone ($500 to $5,000). Weekend, holiday, and after-hours interments typically incur a surcharge of $200 to $500. The total cemetery cost (plot plus interment plus vault plus marker) can range from $2,000 to $25,000 depending on location and choices.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Interment</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-2">Ground Burial</h3>
                <p className="text-gray-600 text-sm">The most traditional form: a casket is lowered into an excavated grave, typically within a burial vault or grave liner. The grave is backfilled, leveled, and re-sodded. Standard grave depth is approximately 6 feet for a casket burial, 3.5 to 4 feet for a <Link href="/what-is-a-green-burial" className="text-slate-600 hover:text-slate-800 font-medium">green burial</Link>.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-2">Mausoleum Entombment</h3>
                <p className="text-gray-600 text-sm">The casket is placed in an above-ground chamber (crypt) within a mausoleum. The crypt is sealed after placement. Mausoleum spaces are more expensive than ground burial plots but offer a sheltered, weather-protected setting for visitation.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-2">Columbarium Inurnment</h3>
                <p className="text-gray-600 text-sm">A cremation urn is placed in a niche within a columbarium wall. Niches are typically 12 inches by 12 inches and can hold one or two standard-sized urns. A glass or stone front allows the family to place a nameplate and sometimes a small photo.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-2">Cremation Urn Ground Burial</h3>
                <p className="text-gray-600 text-sm">A cremation urn is buried in a cemetery plot, either in a dedicated cremation garden or in a standard plot. Multiple urns can share a single plot. An urn vault (similar to a burial vault but smaller) may be required by the cemetery.</p>
              </div>
            </div>
          </section>

          <section className="mb-10 bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map(faq => (
                <div key={faq.q}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/what-is-a-graveside-service" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Graveside Service?</h3>
                <p className="text-sm text-gray-600">The ceremony that typically accompanies interment.</p>
              </Link>
              <Link href="/vs/burial-vs-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Burial vs Cremation</h3>
                <p className="text-sm text-gray-600">Complete comparison of the two most common dispositions.</p>
              </Link>
              <Link href="/funeral-costs" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs by State</h3>
                <p className="text-sm text-gray-600">Compare costs across all 50 states.</p>
              </Link>
              <Link href="/glossary#interment" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Glossary</h3>
                <p className="text-sm text-gray-600">115 funeral terms explained in plain language.</p>
              </Link>
            </div>
          </section>

          <div className="text-center text-sm text-gray-400">
            <p>No popups. No pressure. Built for families.</p>
          </div>
        </div>
      </main>
    </>
  );
}
