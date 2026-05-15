import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is a Pallbearer? Duties, Selection, and Etiquette (2026)',
  description: 'A pallbearer is a person selected by the family to carry or escort the casket during a funeral. Typically 6 pallbearers are chosen. Complete guide to duties and etiquette.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-a-pallbearer' },
  openGraph: {
    title: 'What Is a Pallbearer? Duties, Selection, and Etiquette (2026)',
    description: 'A pallbearer is a person selected by the family to carry the casket during a funeral. Complete guide.',
    url: 'https://funeralhomedirectories.com/what-is-a-pallbearer',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'How many pallbearers do you need?', a: 'The standard number is six, with three on each side of the casket. Some caskets require eight pallbearers. The funeral director will advise based on the casket size and weight. Pallbearers should be physically capable of supporting their share of the weight, which is typically 30 to 50 pounds per person.' },
  { q: 'Can women be pallbearers?', a: 'Absolutely. There is no gender restriction on serving as a pallbearer. Women serve as pallbearers regularly, and mixed-gender groups are common. The only consideration is the physical ability to carry the weight.' },
  { q: 'What do pallbearers wear?', a: 'Pallbearers typically wear the same attire as other funeral attendees: dark suits, dress shirts, and conservative ties for men; dark dresses or pantsuits for women. Some families request specific colors or uniforms. Wear flat, sturdy shoes with good grip for carrying the casket.' },
  { q: 'Is it an honor to be a pallbearer?', a: 'Yes. Being asked to serve as a pallbearer is considered a significant honor, reflecting the family&apos;s trust and the individual&apos;s close relationship with the deceased. It is generally considered inappropriate to decline unless there is a genuine physical limitation.' },
  { q: 'What is an honorary pallbearer?', a: 'An honorary pallbearer is someone recognized at the funeral but who does not physically carry the casket. They may walk alongside it, sit in a reserved section, or be listed in the program. This designation is often given to elderly persons, close friends who cannot carry the weight, or when the family wants to honor more than six people.' },
];

export default function WhatIsAPallbearerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is a Pallbearer? Duties, Selection, and Etiquette",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-a-pallbearer"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is a Pallbearer?" }
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
            <span className="text-gray-600">What Is a Pallbearer?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is a Pallbearer?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A pallbearer is a person selected by the bereaved family to carry or escort the casket during a funeral service and from the hearse to the gravesite. Traditionally, six pallbearers carry the casket, with three on each side. Being asked to serve as a pallbearer is considered one of the highest honors at a funeral, signifying the person&apos;s close relationship with the deceased and the family&apos;s trust.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The word "pallbearer" comes from "pall" (a cloth draped over a casket) and "bearer" (one who carries). Historically, pallbearers held the corners of the cloth while the casket was carried by others, but in modern practice, pallbearers are the people who physically carry the casket. Pallbearers serve at three key moments during a funeral: carrying the casket from the funeral home or hearse into the service venue, carrying it back to the hearse after the service, and carrying it from the hearse to the grave at the cemetery.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The funeral director coordinates pallbearer duties and provides instruction before each carry. Most people have never been a pallbearer before, so the funeral director ensures everyone knows what to do, where to stand, and how to lift and carry safely.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Duties</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Arrive early.</strong> Pallbearers should arrive 30 to 45 minutes before the funeral service to receive instructions from the funeral director. This is when you will learn the specific carrying procedure, route, and timing.</li>
                <li><strong>2. Carry the casket into the venue.</strong> On the funeral director&apos;s cue, pallbearers lift the casket from the hearse or preparation area and carry it into the service venue. The casket is placed on the bier (the stand at the front of the room).</li>
                <li><strong>3. Sit together during the service.</strong> Pallbearers are typically seated in a reserved section, usually the front rows on the opposite side from the immediate family.</li>
                <li><strong>4. Carry the casket to the hearse.</strong> After the service, pallbearers carry the casket back to the hearse for the procession to the cemetery.</li>
                <li><strong>5. Carry the casket to the graveside.</strong> At the cemetery, pallbearers carry the casket from the hearse to the grave and place it on the lowering device.</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Pallbearers Are Selected</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pallbearers are chosen by the immediate family of the deceased, usually the surviving spouse or adult children. Common choices include close friends, brothers, sons, nephews, grandsons, colleagues, or members of organizations important to the deceased (military buddies, fraternity brothers, fellow firefighters). There is no gender restriction. Both men and women regularly serve as pallbearers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When selecting pallbearers, consider physical capability (the casket with body typically weighs 300 to 500 pounds, divided among six carriers), reliability (the person must commit to arriving early and being present throughout), and relationship (choose people who had a meaningful connection with the deceased). If the family wants to honor more people than the six carrying positions allow, additional individuals can be named as honorary pallbearers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Etiquette</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If asked to be a pallbearer, accept unless you have a genuine physical limitation that would prevent you from carrying the weight safely. Declining for any other reason may be perceived as disrespectful to the family. Dress conservatively and appropriately. Wear sturdy, flat-soled shoes (no heels or slippery soles). Turn off your phone. Follow the funeral director&apos;s instructions precisely. Walk at a slow, steady pace. Stay composed and focused during the carry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you have a physical limitation (back problems, recent surgery, injury), it is appropriate to let the family know privately when asked. They can designate you as an honorary pallbearer instead, which carries the same recognition without the physical requirement.
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
              <Link href="/what-is-a-graveside-service" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Graveside Service?</h3>
                <p className="text-sm text-gray-600">The ceremony where pallbearers place the casket at the grave.</p>
              </Link>
              <Link href="/what-is-a-funeral-procession" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Funeral Procession?</h3>
                <p className="text-sm text-gray-600">The drive from the funeral service to the cemetery.</p>
              </Link>
              <Link href="/glossary#pallbearer" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Glossary</h3>
                <p className="text-sm text-gray-600">115 funeral terms explained in plain language.</p>
              </Link>
              <Link href="/funeral-costs" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs by State</h3>
                <p className="text-sm text-gray-600">Complete cost breakdown for all 50 states.</p>
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
