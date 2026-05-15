import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is a Wake vs Visitation? Key Differences Explained (2026)',
  description: 'A wake is a pre-funeral gathering with roots in Catholic and Irish tradition, while a visitation is a scheduled time for paying respects. Both involve viewing the deceased.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-a-wake-vs-visitation' },
  openGraph: {
    title: 'What Is a Wake vs Visitation? Key Differences Explained (2026)',
    description: 'A wake is a pre-funeral gathering with roots in Catholic tradition, while a visitation is a scheduled time for paying respects.',
    url: 'https://funeralhomedirectories.com/what-is-a-wake-vs-visitation',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'What is the difference between a wake and a visitation?', a: 'A wake is a gathering with cultural or religious roots (often Catholic or Irish) that includes prayers, storytelling, and social gathering in the presence of the deceased. A visitation is a more general term for a scheduled time when visitors can view the body and offer condolences. In modern usage, the terms are often used interchangeably.' },
  { q: 'How long does a wake or visitation last?', a: 'A visitation typically lasts two to four hours. A traditional wake may last several hours or, in some traditions, through the night. Most modern wakes at funeral homes follow a similar two to four hour format as visitations.' },
  { q: 'Is a viewing the same as a visitation?', a: 'A viewing specifically refers to seeing the body in an open casket. A visitation is the broader event during which viewing may take place, but it also encompasses the social gathering, signing the guest book, and offering condolences. A visitation can have a closed casket.' },
  { q: 'Do you have to view the body at a visitation?', a: 'No. Approaching the casket is a personal choice, and it is completely acceptable to attend a visitation without viewing the body. You can offer your condolences to the family, sign the guest book, and spend time with others without approaching the casket.' },
  { q: 'What do you say at a wake or visitation?', a: 'Simple, genuine condolences are appropriate: "I am sorry for your loss," "Your mother was a wonderful person," or "Our family is thinking of you." Share a brief memory if you have one. Avoid cliches like "they are in a better place" unless you know the family shares that belief.' },
  { q: 'Is embalming required for a wake or visitation?', a: 'Embalming is not legally required for a viewing or visitation in most states. However, many funeral homes have a business policy requiring embalming for open-casket events. If the family does not want embalming, the body can be refrigerated and a private viewing held within 24 to 48 hours of death.' },
];

export default function WhatIsWakeVsVisitationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is a Wake vs Visitation? Key Differences Explained",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-a-wake-vs-visitation"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Wake vs Visitation" }
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
            <span className="text-gray-600">Wake vs Visitation</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is a Wake vs Visitation?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A wake and a visitation are both pre-funeral gatherings where family and friends come together in the presence of the deceased, but they differ in origin, format, and cultural context. A wake has roots in Catholic and Irish tradition and often includes prayers, storytelling, and extended social gathering. A visitation is a broader, non-denominational term for a scheduled time at a funeral home when visitors can view the body and offer condolences. In modern American usage, the two terms are frequently used interchangeably.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wake: Definition and Tradition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A wake is a social gathering held in the presence of the deceased, traditionally the evening before a funeral. The word comes from the Old English "wacu," meaning to watch or keep vigil. Historically, family members stayed awake through the night to watch over the body before burial. In Irish Catholic tradition, wakes were held in the family home and included prayers (often the rosary), storytelling about the deceased, food, drink, and communal mourning.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Modern wakes in the United States are most commonly held at funeral homes rather than in private residences, though home wakes continue in some communities. A Catholic wake typically includes the recitation of the rosary led by a deacon or lay minister. The atmosphere blends solemnity with warmth, as attendees share memories and support the family. Wakes are most common in Catholic, Irish-American, Italian-American, and some African-American communities.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visitation: Definition and Format</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A visitation (also called calling hours or viewing hours) is a scheduled period, typically two to four hours, during which the deceased is displayed at a funeral home and visitors can pay their respects. The format is less structured than a wake. Visitors arrive, sign a guest book, view the body (if the casket is open), offer condolences to the family, and may spend time talking with other attendees. There is usually no formal program, prayers, or officiant.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Visitations are the most common pre-funeral gathering format in the United States, used across religious and secular traditions. They may be held the evening before the funeral, the morning of the funeral, or both. Some families schedule two separate visitation periods to accommodate more visitors.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Differences</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Factor</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Wake</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Visitation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Origin</td><td className="px-4 py-3">Catholic/Irish tradition</td><td className="px-4 py-3">General American practice</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Prayer/religious element</td><td className="px-4 py-3">Often includes rosary or prayers</td><td className="px-4 py-3">Typically no formal prayers</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Social atmosphere</td><td className="px-4 py-3">More social, storytelling common</td><td className="px-4 py-3">More formal, come-and-go</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Duration</td><td className="px-4 py-3">Several hours, sometimes overnight</td><td className="px-4 py-3">2 to 4 hours</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Location</td><td className="px-4 py-3">Funeral home or family home</td><td className="px-4 py-3">Almost always at funeral home</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Casket</td><td className="px-4 py-3">Typically open</td><td className="px-4 py-3">Open or closed</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Food and drink</td><td className="px-4 py-3">Often provided</td><td className="px-4 py-3">Sometimes, varies</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost</h2>
            <p className="text-gray-600 leading-relaxed">
              The funeral home typically charges a "use of facilities for visitation or viewing" fee, which ranges from $300 to $1,000. This fee covers the use of the visitation room, setup, and staff presence. If the event includes food, flowers, or printed programs, those are additional costs. Embalming ($500 to $800) is commonly associated with visitations and wakes, particularly when an open casket is involved, though it is not legally required in most states.
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
              <Link href="/vs/wake-vs-visitation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Wake vs Visitation: Full Comparison</h3>
                <p className="text-sm text-gray-600">Detailed side-by-side comparison with cost breakdown.</p>
              </Link>
              <Link href="/what-is-embalming" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Embalming?</h3>
                <p className="text-sm text-gray-600">When embalming is needed and when it is not.</p>
              </Link>
              <Link href="/what-is-a-memorial-service" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Memorial Service?</h3>
                <p className="text-sm text-gray-600">A ceremony held without the body present.</p>
              </Link>
              <Link href="/glossary#wake" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
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
