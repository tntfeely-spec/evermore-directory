import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is a Memorial Service? Planning, Cost, and Format (2026)',
  description: 'A memorial service is a ceremony honoring the deceased held without the body present. It can take place days, weeks, or months after death. Complete guide.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-a-memorial-service' },
  openGraph: {
    title: 'What Is a Memorial Service? Planning, Cost, and Format (2026)',
    description: 'A memorial service is a ceremony honoring the deceased held without the body present.',
    url: 'https://funeralhomedirectories.com/what-is-a-memorial-service',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'What is the difference between a memorial service and a funeral?', a: 'The key difference is the presence of the body. A funeral is held with the body present (in a casket, open or closed). A memorial service is held without the body, either because cremation has already taken place or the body has been buried. Memorial services offer more flexibility in timing and location.' },
  { q: 'How long after death can you have a memorial service?', a: 'There is no time limit. Memorial services can be held days, weeks, months, or even years after death. Many families hold them two to four weeks after death to allow time for planning and travel arrangements.' },
  { q: 'How much does a memorial service cost?', a: 'A memorial service at a funeral home typically costs $1,000 to $3,000 for the facility and staff. Services at a house of worship, community center, or private home may be free or involve minimal rental fees. Total cost depends on the venue, catering, flowers, and programs.' },
  { q: 'What is the order of a memorial service?', a: 'A typical memorial service includes a processional or gathering, opening remarks by the officiant, readings or scripture, a eulogy or multiple tributes, music, a closing prayer or reflection, and a recessional. The format can be customized by the family.' },
  { q: 'Can cremated remains be present at a memorial service?', a: 'Yes. Many families display the cremation urn at the memorial service along with photographs and personal mementos. This is entirely optional and a matter of personal preference.' },
];

export default function WhatIsMemorialServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is a Memorial Service? Planning, Cost, and Format",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-a-memorial-service"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is a Memorial Service?" }
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
            <span className="text-gray-600">What Is a Memorial Service?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is a Memorial Service?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A memorial service is a ceremony honoring a deceased person that takes place without the body present. Memorial services offer significantly more flexibility than traditional funerals because they are not constrained by the timeline of burial or the logistics of transporting a body. They can be held days, weeks, or months after death at any venue the family chooses. Memorial services are the most common type of ceremony following cremation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A memorial service is a structured ceremony that follows a planned order of events including readings, music, eulogies, and prayers or reflections. It differs from a funeral in one critical way: the body is not present. This is usually because cremation has already taken place, the body has been buried, or the body was donated to science. The cremation urn may be displayed at the service, but this is optional.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Memorial services are more formal and structured than <Link href="/what-is-a-celebration-of-life" className="text-slate-600 hover:text-slate-800 font-medium">celebrations of life</Link>, which tend to be informal and loosely organized. A memorial service typically has a clear beginning and end, a designated officiant, and a printed program. However, the terms are sometimes used interchangeably in casual conversation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Memorial service costs depend primarily on the venue and the level of formality. A memorial service at a funeral home chapel typically costs $1,000 to $3,000 for use of facilities and staff coordination. A service at a house of worship may require only a stipend to the officiant ($100 to $300). A service at a community center, park pavilion, or private home may have minimal venue costs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Additional costs may include flowers ($200 to $1,000), printed programs ($100 to $300), a musician or audio equipment ($200 to $500), and a reception or repast after the service ($500 to $5,000 depending on catering). Because the memorial service is separate from the disposition cost, families often pair it with <Link href="/what-is-direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">direct cremation</Link> to keep total costs well below a traditional funeral.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Typical Format</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Gathering or processional.</strong> Guests arrive and are seated. Soft music may play. A memory table with photographs and personal items is often displayed near the entrance.</li>
                <li><strong>2. Opening remarks.</strong> The officiant welcomes guests, acknowledges the purpose of the gathering, and may offer a brief prayer or moment of silence.</li>
                <li><strong>3. Readings.</strong> Selected poems, scripture, or literary passages chosen by the family. Readings may be delivered by the officiant, family members, or friends.</li>
                <li><strong>4. Eulogy and tributes.</strong> One or more people share memories, stories, and reflections about the deceased. This is typically the emotional center of the service.</li>
                <li><strong>5. Music.</strong> Hymns, songs, or instrumental pieces chosen by the family. Music may be performed live or played from a recording.</li>
                <li><strong>6. Closing remarks.</strong> The officiant offers final words, a closing prayer, or an invitation to the reception. Information about the reception location and logistics is shared.</li>
                <li><strong>7. Recessional and reception.</strong> Guests exit and gather for a meal or social time. This may take place at the same venue or at a separate location.</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Choose a Memorial Service</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A memorial service is appropriate when the body is not available (due to cremation, body donation, or prior burial), when the family wants more time to plan a meaningful ceremony, or when the family needs to accommodate guests traveling from distant locations. It is also a good choice when the family wants a formal, structured ceremony but does not want the time pressure of arranging a funeral within days of death.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A memorial service may not be the right choice if the family wants the body present for the service, if religious tradition requires a funeral in the presence of the body, or if the family prefers a very casual, unstructured gathering (in which case a <Link href="/what-is-a-celebration-of-life" className="text-slate-600 hover:text-slate-800 font-medium">celebration of life</Link> is a better fit).
            </p>
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
              <Link href="/vs/funeral-service-vs-memorial-service" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Service vs Memorial Service</h3>
                <p className="text-sm text-gray-600">Key differences explained.</p>
              </Link>
              <Link href="/vs/memorial-service-vs-celebration-of-life" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Memorial Service vs Celebration of Life</h3>
                <p className="text-sm text-gray-600">Comparing format, cost, and tone.</p>
              </Link>
              <Link href="/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Direct Cremation?</h3>
                <p className="text-sm text-gray-600">The most common disposition before a memorial service.</p>
              </Link>
              <Link href="/glossary#memorial-service" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
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
