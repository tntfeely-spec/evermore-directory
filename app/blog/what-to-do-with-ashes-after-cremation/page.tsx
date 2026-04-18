import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What to Do with Ashes After Cremation: 10 Options for Families',
  description: 'After cremation, families have many choices for what to do with the remains. Here are 10 meaningful options from scattering to keepsakes.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/what-to-do-with-ashes-after-cremation' },
};

const faqs = [
  { q: "Can you keep a loved one's ashes at home?", a: 'Yes. There is no law in any US state that prohibits keeping cremated remains at home. Many families display the urn in a meaningful location, a mantel, a bookshelf, or a private area of the home.' },
  { q: 'Is it legal to scatter ashes anywhere?', a: 'It depends on the location. Federal law allows scattering at sea at least 3 nautical miles from shore. National parks require a permit. Private property requires the owner\'s permission. State and local rules vary, so check before scattering in a public area.' },
  { q: 'How long can you keep ashes before deciding?', a: 'There is no expiration date. Cremated remains are stable and can be kept indefinitely. Take as much time as you need to decide. The funeral home will typically hold unclaimed remains for a period before contacting the family.' },
  { q: 'Can you split ashes among family members?', a: 'Yes. It is common and perfectly legal to divide cremated remains among family members. The funeral home or a family member can portion the ashes into smaller urns, keepsake containers, or jewelry pieces.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function WhatToDoWithAshesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Decide What to Do with Ashes After Cremation","description":"How to choose the right option for cremated remains based on your family's wishes and budget.","step":[{"@type":"HowToStep","position":1,"name":"Check if the deceased left instructions","text":"Before making any decisions check whether the deceased left written instructions, a pre-planning document, or verbal wishes about what they wanted done with their ashes."},{"@type":"HowToStep","position":2,"name":"Choose a primary option","text":"The main options are keeping ashes in an urn at home, burial in a cemetery, scattering in a meaningful location, placing in a columbarium niche, or incorporating into memorial jewelry or objects."},{"@type":"HowToStep","position":3,"name":"Consider dividing ashes among family members","text":"It is legal to divide cremated remains among multiple family members. Each person can receive a small portion in a keepsake urn or memorial jewelry."},{"@type":"HowToStep","position":4,"name":"Handle the legal requirements","text":"If scattering check local regulations. If burying obtain the necessary permit. If traveling with ashes across state lines or internationally check the rules in advance."},{"@type":"HowToStep","position":5,"name":"Take your time","text":"There is no legal time limit on when you must decide what to do with cremated remains. Many families keep ashes at home for months or years before deciding. Do not rush the decision."}]}) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">What to Do with Ashes After Cremation: 10 Options for Families</h1>
              <p className="text-xl text-gray-600 mb-4">Meaningful ways to honor your loved one after cremation.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">After cremation, there is no rush to decide what to do with the ashes. Some families know right away. Others take weeks, months, or even years. There are many options, and choosing more than one is common. Here are 10 meaningful ways families honor their loved ones.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Keeping Ashes at Home</h2>
              <p className="text-gray-600 leading-relaxed">Keeping the urn at home is the most common choice. There is no law against it in any US state. Many families choose a decorative urn and display it on a mantel, bookshelf, or in a dedicated space. Others prefer a simple container kept privately. The ashes are yours to keep for as long as you wish.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scattering Ashes</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Scattering is popular for families who want to return their loved one to a place that was meaningful to them. Common locations include the ocean, a mountain trail, a garden, or a family property.</p>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Legal considerations:</strong> Federal law allows scattering at sea at least 3 nautical miles from shore. National parks generally require a written permit. Many state and local parks allow scattering but may have rules about notification or location. Private property requires the landowner&apos;s permission. Always check local regulations first.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Burial Options for Cremated Remains</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Cemetery burial:</strong> Many cemeteries offer urn plots or columbarium niches specifically for cremated remains, often at a fraction of the cost of a traditional burial plot.</li>
                <li><strong>Green burial:</strong> Cremated remains can be buried in a biodegradable urn in a green cemetery or natural burial ground.</li>
                <li><strong>Companion burial:</strong> Some families choose to bury the urn in an existing family plot alongside a previously buried loved one.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Memorial Keepsakes</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Cremation jewelry:</strong> Small pendants or rings that hold a tiny portion of ashes, allowing family members to carry their loved one with them.</li>
                <li><strong>Memorial diamonds:</strong> Companies can compress carbon from cremated remains into a lab grown diamond.</li>
                <li><strong>Glass art:</strong> Artists incorporate ashes into blown glass sculptures, paperweights, or ornaments.</li>
                <li><strong>Memorial reef:</strong> Cremated remains are mixed into an environmentally safe concrete reef ball and placed in the ocean to support marine life.</li>
                <li><strong>Tree planting:</strong> Biodegradable urns designed to grow into a tree using the ashes as part of the soil mix.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do If You Are Unsure</h2>
              <p className="text-gray-600 leading-relaxed">There is no deadline. Cremated remains are chemically stable and will not change over time. If you are not ready to decide, keep the urn at home and take the time you need. Many families wait months or longer and make a decision when it feels right. You can also split the ashes, keeping some at home and scattering or burying the rest later.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/burial-vs-cremation" className="text-slate-600 hover:text-slate-800 font-medium">Burial vs. Cremation: Pros and Cons</Link></li>
                <li><Link href="/blog/cremation-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">Cremation Costs in 2026</Link></li>
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step by Step</Link></li>
              </ul>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 5,100+ funeral homes and cremation providers across all 50 states. Compare prices, services, and locations. Free for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
