import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is a Celebration of Life? Planning Guide and Ideas (2026)',
  description: 'A celebration of life is an informal, personalized gathering that honors the deceased by focusing on memories and milestones rather than mourning. Complete planning guide.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-a-celebration-of-life' },
  openGraph: {
    title: 'What Is a Celebration of Life? Planning Guide and Ideas (2026)',
    description: 'A celebration of life is an informal gathering that honors the deceased by focusing on memories and milestones.',
    url: 'https://funeralhomedirectories.com/what-is-a-celebration-of-life',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'What is the difference between a celebration of life and a funeral?', a: 'A funeral is a formal ceremony held in the presence of the body, typically following religious or cultural traditions. A celebration of life is informal, usually held without the body present, and focuses on sharing memories and honoring the person who died rather than following a prescribed format.' },
  { q: 'When should you hold a celebration of life?', a: 'A celebration of life can be held at any time. Many families hold one within a few weeks of the death, but others wait months to allow distant family and friends to attend. There is no time limit or requirement.' },
  { q: 'Where are celebrations of life held?', a: 'Celebrations of life can be held anywhere meaningful to the family: a home, park, restaurant, beach, community center, brewery, golf course, or any venue that reflects the personality of the deceased. They are not limited to funeral homes or houses of worship.' },
  { q: 'How much does a celebration of life cost?', a: 'Costs vary widely depending on the venue, food, and scale. A simple gathering at home may cost under $500. A catered event at a rented venue could cost $2,000 to $10,000. There is no set formula, and families have full control over the budget.' },
  { q: 'Do you need a funeral director for a celebration of life?', a: 'No. A celebration of life does not require a funeral director, and many families plan and host the event themselves. However, a funeral home or event planner can help with logistics if desired.' },
];

export default function WhatIsCelebrationOfLifePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is a Celebration of Life? Planning Guide and Ideas",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-a-celebration-of-life"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is a Celebration of Life?" }
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
            <span className="text-gray-600">What Is a Celebration of Life?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is a Celebration of Life?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A celebration of life is an informal, personalized gathering that honors a deceased person by focusing on their life, personality, and accomplishments rather than following a traditional funeral format. Unlike a funeral service, which takes place in the presence of the body and typically follows religious or cultural protocols, a celebration of life has no required format, no religious obligation, and can be held at any time and any location chosen by the family.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A celebration of life is a memorial event designed to reflect the unique personality, interests, and values of the person who died. It may include storytelling, shared meals, music, photo slideshows, video tributes, and activities that were meaningful to the deceased. Some celebrations are small and intimate, held in a living room with close family. Others are large community events with catered food, live music, and hundreds of attendees.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The celebration of life format has grown significantly in popularity over the past decade, driven in part by the rise of cremation (which separates disposition from the memorial event) and by a cultural shift toward more personalized, less formal approaches to honoring the dead. According to industry surveys, roughly one in three American families now chooses some form of celebration of life over a traditional funeral service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The cost of a celebration of life depends entirely on the family&apos;s choices. A home gathering with potluck food and personal decorations may cost under $500. A catered event at a rented venue with flowers, printed programs, and professional audio equipment could range from $2,000 to $10,000 or more.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Because a celebration of life is separate from the disposition (cremation or burial), its cost is in addition to the <Link href="/what-is-direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">direct cremation</Link> or burial cost. Many families choose direct cremation ($695 to $3,500) followed by a celebration of life, keeping the total cost significantly below a traditional funeral ($7,000 to $15,000).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Plan a Celebration of Life</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Choose a date and time.</strong> There is no rush. Many families wait two to four weeks to allow time for planning and for out-of-town guests to make arrangements. Some hold the event on a date meaningful to the deceased, such as a birthday or anniversary.</li>
                <li><strong>2. Select a venue.</strong> Choose a location that reflects the person&apos;s personality. Popular choices include the family home, a favorite restaurant, a park or garden, a community center, a brewery or winery, or a beach. Funeral home reception rooms are also an option.</li>
                <li><strong>3. Set the tone.</strong> Decide whether the event will be casual or semi-formal. Many celebrations of life have a relaxed, come-and-go atmosphere rather than a structured program.</li>
                <li><strong>4. Plan the content.</strong> Common elements include a welcome and brief remarks, an open microphone for stories and memories, a photo display or slideshow, music (live or recorded), a favorite meal or signature dish of the deceased, and a memory table with personal items.</li>
                <li><strong>5. Send invitations.</strong> Use whatever method fits the group: email, text, social media event, printed cards, or word of mouth. Include the date, time, location, dress code (if any), and any parking or accessibility notes.</li>
                <li><strong>6. Consider a keepsake.</strong> Some families create small keepsakes for attendees, such as a printed card with a favorite quote, a seed packet for planting, or a small photo print.</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Choose a Celebration of Life</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A celebration of life is a good fit when the deceased preferred an informal approach, when the family wants to personalize the event beyond what a traditional funeral allows, or when cremation has already taken place and the family wants a gathering without the time pressure of arranging a funeral within days of death.
            </p>
            <p className="text-gray-600 leading-relaxed">
              It may not be the right choice if the family&apos;s religious tradition calls for a formal funeral service, if the community expects a structured ceremony, or if family members need the closure of a traditional format with the body present. In those cases, a <Link href="/what-is-a-memorial-service" className="text-slate-600 hover:text-slate-800 font-medium">memorial service</Link> (more structured but still without the body) or a traditional funeral may be more appropriate.
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
              <Link href="/vs/memorial-service-vs-celebration-of-life" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Memorial Service vs Celebration of Life</h3>
                <p className="text-sm text-gray-600">Key differences in format, cost, and tone.</p>
              </Link>
              <Link href="/what-is-a-memorial-service" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Memorial Service?</h3>
                <p className="text-sm text-gray-600">A more structured alternative without the body present.</p>
              </Link>
              <Link href="/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Direct Cremation?</h3>
                <p className="text-sm text-gray-600">The most common disposition choice before a celebration of life.</p>
              </Link>
              <Link href="/glossary#celebration-of-life" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
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
