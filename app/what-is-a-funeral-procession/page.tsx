import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is a Funeral Procession? Protocol, Laws, and Etiquette (2026)',
  description: 'A funeral procession is an organized movement of vehicles from the funeral service to the cemetery. In most states, procession vehicles have the legal right of way.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-a-funeral-procession' },
  openGraph: {
    title: 'What Is a Funeral Procession? Protocol, Laws, and Etiquette (2026)',
    description: 'A funeral procession is an organized movement of vehicles from the funeral to the cemetery.',
    url: 'https://funeralhomedirectories.com/what-is-a-funeral-procession',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'Do funeral processions have the right of way?', a: 'In most US states, yes. Vehicles in a funeral procession have the legal right to proceed through intersections, including red lights and stop signs, as long as the lead vehicle entered legally. Other drivers must yield. However, laws vary by state, and a few states do not grant automatic right of way.' },
  { q: 'How do you identify a funeral procession?', a: 'Procession vehicles typically display small flags, magnetic signs, or have their headlights and hazard lights on. The procession is led by the hearse and may include a lead car from the funeral home. A police escort may be present in some jurisdictions.' },
  { q: 'What should you do if you encounter a funeral procession?', a: 'Pull over and wait for the procession to pass, or remain stopped at the intersection until all procession vehicles have cleared. Do not cut into or pass through the procession. Do not honk your horn. In most states, these are legal requirements, not just courtesies.' },
  { q: 'Do you have to be in a funeral procession?', a: 'No. Participation in the procession is optional for funeral attendees. Family members and close friends typically join the procession, while other guests may drive directly to the cemetery. The funeral home will provide directions or a map for those not in the procession.' },
  { q: 'How much does a police escort for a funeral cost?', a: 'Police escort fees vary by jurisdiction. Some municipalities provide escorts free of charge, while others charge $100 to $500 for the service. Private escort services (off-duty officers or private companies) typically charge $200 to $600. The funeral home can arrange this.' },
];

export default function WhatIsFuneralProcessionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is a Funeral Procession? Protocol, Laws, and Etiquette",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-a-funeral-procession"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is a Funeral Procession?" }
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
            <span className="text-gray-600">What Is a Funeral Procession?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is a Funeral Procession?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A funeral procession is a formal, organized movement of vehicles from the location of a funeral service to the cemetery or other place of final disposition. In most US states, vehicles in a funeral procession have the legal right of way at intersections, including the right to proceed through red lights and stop signs as a group. Funeral processions are one of the oldest funeral traditions, dating back thousands of years, and remain a common element of burial funerals in the United States.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A funeral procession (also called a cortege) is the formal transit of the casket and mourners from one location to another, most commonly from the funeral service venue to the cemetery. The procession is led by the hearse carrying the casket, followed by vehicles carrying immediate family, and then other mourners. A funeral home lead car often drives ahead of the hearse to navigate the route, and a police escort may accompany the procession in some jurisdictions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Funeral processions serve both a practical and symbolic purpose. Practically, they ensure that mourners arrive at the cemetery together and on time. Symbolically, they represent a community accompanying the deceased on their final journey and paying visible respect to the person who died.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Protocol and Order</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Police escort (if arranged).</strong> A police vehicle leads the procession, clearing intersections and controlling traffic. Not all processions have police escorts.</li>
                <li><strong>2. Funeral home lead car.</strong> A staff member in a marked vehicle drives the planned route, ensuring the procession stays on course.</li>
                <li><strong>3. Hearse.</strong> The vehicle carrying the casket immediately follows the lead car. The hearse is the visual center of the procession.</li>
                <li><strong>4. Family vehicles.</strong> Cars carrying the immediate family follow the hearse. A funeral home limousine may be provided, or families may drive their own vehicles.</li>
                <li><strong>5. Other mourners.</strong> Friends, colleagues, and extended family follow in their personal vehicles. Each vehicle in the procession turns on headlights and may display a magnetic funeral flag or sign.</li>
                <li><strong>6. Rear escort (if applicable).</strong> A police vehicle or funeral home car may bring up the rear to signal the end of the procession to other drivers.</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Laws and Right of Way</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Most US states have funeral procession laws that grant the procession right of way at intersections. The general rule is that once the lead vehicle (hearse or escort) enters an intersection legally (on a green light), all following vehicles in the procession may proceed through that intersection, even if the light changes to red. Other drivers must yield to the procession and must not cut between vehicles, pass the procession, or enter the procession line.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Laws vary by state. Some states require procession vehicles to have headlights on and display identification (flags or signs). A few states, including Hawaii and some others, do not have specific funeral procession statutes, though common courtesy and traffic safety still apply. Drivers who violate funeral procession laws may face traffic citations and fines.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Etiquette for Drivers</h2>
            <p className="text-gray-600 leading-relaxed">
              If you encounter a funeral procession while driving, pull over to the side of the road or remain stopped at the intersection until all vehicles have passed. Do not cut into the procession, honk your horn, or attempt to pass. If you are on a highway and the procession is in another lane, you do not need to stop, but do not weave between procession vehicles. Showing respect for a funeral procession is both a legal obligation in most states and a longstanding social courtesy.
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
                <p className="text-sm text-gray-600">What happens when the procession arrives at the cemetery.</p>
              </Link>
              <Link href="/what-is-a-pallbearer" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Pallbearer?</h3>
                <p className="text-sm text-gray-600">The role of casket carriers in the funeral process.</p>
              </Link>
              <Link href="/glossary#funeral-procession" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
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
