import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Wake vs Visitation: Key Differences in Format, Cost, and Tradition (2026)',
  description: 'A wake is a social gathering rooted in Catholic and Irish tradition, while a visitation is a scheduled viewing period at a funeral home. Compare format, cost, duration, and etiquette.',
  alternates: { canonical: 'https://funeralhomedirectories.com/vs/wake-vs-visitation' },
  openGraph: {
    title: 'Wake vs Visitation: Key Differences in Format, Cost, and Tradition (2026)',
    description: 'A wake is a social gathering rooted in Catholic and Irish tradition, while a visitation is a scheduled viewing period at a funeral home.',
    url: 'https://funeralhomedirectories.com/vs/wake-vs-visitation',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'Is a wake the same thing as a visitation?', a: 'In modern American usage, the terms are often used interchangeably. However, a traditional wake has roots in Catholic and Irish culture and tends to be a longer, more social gathering with prayers, food, and drink. A visitation is typically a scheduled two to four hour window at a funeral home focused on paying respects and greeting the family.' },
  { q: 'How long does a wake last compared to a visitation?', a: 'A wake can last anywhere from four hours to an entire evening, and in some traditions it extends overnight. A visitation is usually two to four hours, with set start and end times published in the obituary.' },
  { q: 'Do you need to be Catholic to have a wake?', a: 'No. While wakes have deep roots in Catholic and Irish tradition, anyone can hold a wake regardless of religious affiliation. Many non-religious families choose a wake-style gathering because they prefer the extended, social format over a brief visitation.' },
  { q: 'Is the casket open at a wake or visitation?', a: 'The casket may be open or closed at either event. Open casket is common at both wakes and visitations when the family chooses it. The decision depends on the family&apos;s preference, the condition of the deceased, and cultural or religious customs.' },
  { q: 'How much does a wake or visitation cost?', a: 'Funeral homes typically charge $300 to $1,000 for use of viewing facilities during a visitation. A wake held at the family home has no venue cost, though food and beverages may run $200 to $800. A wake held at a funeral home costs roughly the same as a visitation in facility fees.' },
];

export default function WakeVsVisitationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "Wake vs Visitation: Complete Comparison",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/vs/wake-vs-visitation"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": "https://funeralhomedirectories.com/vs" },
          { "@type": "ListItem", "position": 3, "name": "Wake vs Visitation" }
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
            <Link href="/glossary" className="text-slate-600 hover:text-slate-800">Resources</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Wake vs Visitation</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Wake vs Visitation: Complete Comparison</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A wake is a pre-funeral gathering with roots in Catholic and Irish tradition that includes prayers and extended social gathering, while a visitation is a scheduled two to four hour period at a funeral home for paying respects. Both events take place in the presence of the deceased, and in modern American usage the terms are often used interchangeably.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Comparison Table</h2>
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
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Origin and tradition</td><td className="px-4 py-3">Catholic, Irish, and Eastern European roots</td><td className="px-4 py-3">Broadly American, no specific cultural origin</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Religious element</td><td className="px-4 py-3">Often includes prayers, rosary, or scripture readings</td><td className="px-4 py-3">Typically secular, though prayers may be offered</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Duration</td><td className="px-4 py-3">4 to 8 hours, sometimes overnight</td><td className="px-4 py-3">2 to 4 hours with set start and end times</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Location</td><td className="px-4 py-3">Family home, funeral home, or parish hall</td><td className="px-4 py-3">Funeral home viewing room</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Atmosphere</td><td className="px-4 py-3">Social, storytelling, laughter and tears</td><td className="px-4 py-3">Quiet, formal, respectful</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Food and drink</td><td className="px-4 py-3">Full food spread, often alcoholic beverages</td><td className="px-4 py-3">Light refreshments or none</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Casket</td><td className="px-4 py-3">Open or closed, body present</td><td className="px-4 py-3">Open or closed, body present</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Typical cost</td><td className="px-4 py-3">$200 to $1,500 (varies by venue and food)</td><td className="px-4 py-3">$300 to $1,000 (funeral home facility fee)</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Modern usage</td><td className="px-4 py-3">Common in Catholic, Irish, and Italian communities</td><td className="px-4 py-3">Standard option offered by most funeral homes nationwide</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wake Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The word &apos;wake&apos; comes from the Old English practice of keeping watch, or &apos;waking,&apos; over the deceased through the night before burial. In Irish and Catholic tradition, the wake is one of the most important elements of the funeral process. It serves as a communal gathering where family, friends, and neighbors come together to share stories, offer prayers, and support one another.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A traditional wake takes place in the family home, though many modern wakes are held at funeral homes or parish halls. The body of the deceased is present, usually in an open casket, and the gathering often lasts well into the evening. Food and drink are central to the wake tradition. In many Irish and Italian families, a full meal is served alongside beer, wine, or spirits. The atmosphere blends grief with celebration of the person&apos;s life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Prayers are a key part of many wakes. In Catholic tradition, a rosary may be led by a priest or family member. Scripture readings, eulogies, and spontaneous storytelling are all common. The wake gives mourners time and space to process their loss at their own pace, without the time constraints of a formal visitation. For families with deep cultural or religious ties, the wake carries meaning that a standard visitation cannot replicate.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visitation Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A visitation, sometimes called calling hours or viewing hours, is a scheduled period at a funeral home during which friends and community members can pay their respects to the deceased and express condolences to the family. The visitation is the most common pre-funeral gathering format in the United States and is offered as a standard service by nearly every funeral home in the country.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Visitations typically run two to four hours and are held one to two days before the funeral service. The times are published in the obituary so guests know exactly when to arrive. The body is present, usually in the casket selected by the family, and the casket may be open or closed. The family often stands near the casket to receive visitors in a receiving line, while a guest book sits at the entrance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The tone of a visitation is generally quiet and respectful. Conversations happen in low voices, and physical comfort items like tissues, water, and simple refreshments may be available. Some families display photo boards, memory tables, or video slideshows. The visitation provides a structured opportunity for the broader community to show support without the longer time commitment of a wake. For families who want a brief, organized event before the funeral, a visitation is the standard choice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost Comparison</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Wake Costs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Venue (if not at home): $0 to $500</li>
                    <li>Food and beverages: $200 to $800</li>
                    <li>Funeral home facility fee (if applicable): $300 to $1,000</li>
                    <li>Prayer cards or programs: $50 to $150</li>
                    <li className="font-bold pt-2 border-t">Total: $200 to $1,500</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Visitation Costs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Funeral home facility fee: $300 to $1,000</li>
                    <li>Staff and setup: included in facility fee</li>
                    <li>Light refreshments (optional): $50 to $200</li>
                    <li>Guest book and memorial items: $25 to $100</li>
                    <li className="font-bold pt-2 border-t">Total: $300 to $1,000</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Note: these costs are separate from the funeral service, casket, embalming, and other funeral home charges. Both a wake and a visitation are typically one component of the overall funeral arrangement.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Choose a Wake</h2>
            <p className="text-gray-600 leading-relaxed">
              A wake is the right choice when the family has Catholic, Irish, Italian, or Eastern European heritage and wants to honor that tradition. It is also a good fit when the family prefers a longer, more social gathering where guests can come and go over several hours. Families who want to serve a full meal, share drinks, tell stories, and create an atmosphere that celebrates the person&apos;s life will find the wake format natural. If prayer and religious observance are important to the family, the wake provides a built-in framework for those elements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Choose a Visitation</h2>
            <p className="text-gray-600 leading-relaxed">
              A visitation is the right choice when the family wants a brief, structured event with clear start and end times. It works well for families without a specific cultural or religious tradition that calls for a wake. The visitation is also practical when the family prefers to let the funeral home handle all logistics, from setup to teardown. For large communities where many people want to pay respects, the defined hours help manage the flow of guests and keep the event organized.
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
              <Link href="/what-is-a-wake-vs-visitation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Wake vs Visitation?</h3>
                <p className="text-sm text-gray-600">In-depth guide to both gatherings and what to expect.</p>
              </Link>
              <Link href="/what-is-embalming" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Embalming?</h3>
                <p className="text-sm text-gray-600">Process, cost, and when embalming is required or optional.</p>
              </Link>
              <Link href="/what-is-a-memorial-service" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Memorial Service?</h3>
                <p className="text-sm text-gray-600">How memorial services differ from funerals and viewings.</p>
              </Link>
              <Link href="/glossary" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Glossary</h3>
                <p className="text-sm text-gray-600">115 terms explained in plain language.</p>
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
