import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is a Graveside Service? Format, Etiquette, and What to Expect (2026)',
  description: 'A graveside service is a funeral ceremony held at the cemetery beside the open grave, typically lasting 15 to 30 minutes. Complete guide to format and etiquette.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-a-graveside-service' },
  openGraph: {
    title: 'What Is a Graveside Service? Format, Etiquette, and What to Expect (2026)',
    description: 'A graveside service is a funeral ceremony held at the cemetery beside the open grave.',
    url: 'https://funeralhomedirectories.com/what-is-a-graveside-service',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'How long does a graveside service last?', a: 'A graveside service typically lasts 15 to 30 minutes. It is shorter than a chapel funeral service, which usually lasts 45 minutes to an hour. Some families choose a graveside-only service, while others hold a longer service at a chapel or church followed by a brief committal at the grave.' },
  { q: 'What do you wear to a graveside service?', a: 'Dress codes vary by family and culture. Conservative, dark-colored clothing is traditional. However, some families request casual attire or specific colors. Wear comfortable shoes suitable for walking on grass or uneven ground. In outdoor weather, dress for sun, rain, or cold as appropriate.' },
  { q: 'Can you have a graveside service for cremated remains?', a: 'Yes. Graveside services can be held when burying a cremation urn in a cemetery plot or niche. The format is similar to a casket burial service but shorter. An urn burial service is sometimes called a committal of ashes.' },
  { q: 'What happens at a graveside service?', a: 'The officiant leads prayers or readings, a brief eulogy or tribute is given, and the casket is lowered into the grave (or the urn is placed). Some families stay to watch the grave being filled, while others depart after the formal ceremony. Military honors, if applicable, take place at the graveside.' },
  { q: 'Do you need to go to the graveside service?', a: 'Attendance at the graveside portion is optional for guests. Some families designate the graveside committal as a private family event following a public funeral service. If the graveside service is the only ceremony, it is typically open to all who wish to attend.' },
];

export default function WhatIsGravesideServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is a Graveside Service? Format, Etiquette, and What to Expect",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-a-graveside-service"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is a Graveside Service?" }
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
            <span className="text-gray-600">What Is a Graveside Service?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is a Graveside Service?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A graveside service is a funeral or committal ceremony held outdoors at the cemetery beside the open grave. It typically lasts 15 to 30 minutes and may serve as the only funeral ceremony or as the final portion of a longer service that began at a chapel or house of worship. Graveside services are common in Jewish tradition, military funerals, and families who prefer a simpler, more intimate farewell.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A graveside service is a ceremony conducted at the place of burial. The casket is typically present on a lowering device above the open grave, covered by a pall or floral arrangement. Chairs are set up for immediate family under a canopy or tent, with other attendees standing nearby. The officiant leads a brief service that includes prayers, readings, and final words of committal before the casket is lowered.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When a graveside service is the only ceremony (no preceding chapel service), it is sometimes called a graveside-only funeral. This is a more affordable option because it eliminates chapel use fees and reduces the overall timeline. When it follows a separate service, it is called a committal service and represents the formal conclusion of the funeral proceedings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost</h2>
            <p className="text-gray-600 leading-relaxed">
              A graveside-only service is typically less expensive than a full funeral service because there are no chapel or facility use fees. The funeral home still charges for transportation, coordination, and staff services. Cemetery fees for opening and closing the grave range from $300 to $1,500. A tent and chair setup (if not included by the cemetery) may cost $200 to $500. The officiant&apos;s fee is typically $100 to $300. Total cost for a graveside-only funeral (excluding the casket and burial plot) is generally $3,000 to $6,000, compared to $7,000 to $15,000 for a full traditional funeral with chapel service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Typical Format</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Arrival.</strong> The funeral procession arrives at the cemetery. The casket is carried from the hearse to the gravesite by pallbearers and placed on the lowering device.</li>
                <li><strong>2. Seating.</strong> Immediate family is seated under the canopy. Other attendees gather around the grave.</li>
                <li><strong>3. Opening words.</strong> The officiant offers a greeting, prayer, or moment of reflection.</li>
                <li><strong>4. Readings and tribute.</strong> One or two brief readings, a short eulogy, or personal remarks. This is typically shorter than a full chapel eulogy.</li>
                <li><strong>5. Committal.</strong> The officiant speaks the words of committal ("earth to earth, ashes to ashes, dust to dust" in Christian tradition, or equivalent). Some families place a flower, handful of soil, or stone on the casket.</li>
                <li><strong>6. Military honors (if applicable).</strong> A rifle volley, the playing of Taps, flag folding, and flag presentation to the next of kin.</li>
                <li><strong>7. Closing.</strong> Final prayer or remarks. The family may remain to watch the casket lowered, or they may depart before the grave is filled.</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Etiquette for Attendees</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Arrive 5 to 10 minutes before the scheduled time. Follow the funeral procession if traveling from a chapel service. Dress conservatively and wear shoes appropriate for walking on grass or uneven ground. Silence your phone. Stand respectfully during the ceremony unless chairs are available. Wait for the family to depart before leaving. Offer brief condolences to the family if a receiving line forms. If unsure whether the graveside portion is private, check the obituary or contact the funeral home.
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
              <Link href="/what-is-interment" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Interment?</h3>
                <p className="text-sm text-gray-600">The formal act of placing remains in a final resting place.</p>
              </Link>
              <Link href="/what-is-a-pallbearer" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Pallbearer?</h3>
                <p className="text-sm text-gray-600">Duties, selection, and etiquette for casket carriers.</p>
              </Link>
              <Link href="/funeral-costs" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs by State</h3>
                <p className="text-sm text-gray-600">Compare costs across all 50 states.</p>
              </Link>
              <Link href="/glossary#graveside-service" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
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
