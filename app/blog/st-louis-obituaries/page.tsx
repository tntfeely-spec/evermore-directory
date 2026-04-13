import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'St. Louis Obituaries and Funeral Homes: Local Resources (2026)',
  description: 'Find obituaries and funeral homes in St. Louis Missouri. Local newspaper sources, directory listings, and resources for St. Louis County families.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/st-louis-obituaries' },
};

const faqs = [
  { q: 'Where can I find St. Louis obituaries?', a: 'The most common source for St. Louis obituaries is the St. Louis Post-Dispatch, which publishes obituaries daily both in print and online at stltoday.com. You can also find obituaries on Legacy.com and on individual funeral home websites throughout the St. Louis area.' },
  { q: 'How many funeral homes are in St. Louis Missouri?', a: 'St. Louis is home to numerous funeral homes serving communities across the city and surrounding St. Louis County area. You can browse a complete list of St. Louis funeral homes with contact information and services on Evermore Directory.' },
  { q: 'How much does a funeral cost in St. Louis?', a: 'The national average funeral cost in 2024 was $7,848 according to the NFDA. Costs in St. Louis vary depending on the type of service and funeral home selected. Direct cremation typically starts around $1,500 to $3,000, while a full traditional burial service can range from $7,000 to $14,000 or more.' },
  { q: 'Does the St. Louis Post-Dispatch publish obituaries online?', a: 'Yes. The St. Louis Post-Dispatch publishes obituaries online at stltoday.com. Families can submit paid obituaries through the newspaper or through their funeral home. The Post-Dispatch has been the paper of record for the St. Louis metro area for generations.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function StLouisObituariesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Homes in St. Louis, MO: Obituaries and Local Resources</h1>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <p className="text-gray-600 leading-relaxed mb-10">Finding obituaries and funeral homes in St. Louis, Missouri can feel overwhelming during a difficult time. This guide covers local obituary sources, funeral home listings, costs, and support resources for St. Louis County families.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Where to Find St. Louis Obituaries</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The primary source for St. Louis obituaries is the <strong>St. Louis Post-Dispatch</strong>, which publishes obituaries daily in print and online at <a href="https://www.stltoday.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">stltoday.com</a>. The Post-Dispatch is the largest newspaper in the region and the most widely read source for obituaries in the St. Louis metropolitan area.</p>
              <p className="text-gray-600 leading-relaxed">You can also find obituaries through Legacy.com, individual funeral home websites, and community newspapers serving St. Louis&apos;s neighborhoods. Many funeral homes in St. Louis post obituaries on their own websites shortly after receiving the information from the family.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funeral Homes in St. Louis</h2>
              <p className="text-gray-600 leading-relaxed mb-4">St. Louis has a wide range of funeral homes serving families across every neighborhood and community. Whether you are looking for a traditional burial, cremation, or a culturally specific service, you can find options throughout the city and St. Louis County.</p>
              <p className="text-gray-600 leading-relaxed">Browse our complete directory of <Link href="/funeral-homes/mo/st-louis" className="text-slate-600 hover:text-slate-800 underline">funeral homes in St. Louis</Link> to compare services, pricing, and contact information.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Average Funeral Costs in Missouri</h2>
              <p className="text-gray-600 leading-relaxed mb-4">According to the National Funeral Directors Association, the national average cost of a funeral with viewing and burial in 2024 was $7,848. Costs in Missouri and the St. Louis metro area may vary based on the funeral home and services selected.</p>
              <p className="text-gray-600 leading-relaxed">Direct cremation in St. Louis typically costs between $1,500 and $3,000, while a traditional funeral with burial can range from $7,000 to $14,000 or more. Always request a General Price List from any funeral home you are considering so you can compare costs accurately.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do After a Loss in St. Louis</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Losing a loved one is overwhelming, and knowing the next steps can help during a difficult time. If a death occurs at home, call 911. If the death occurs in a hospital or care facility, staff will guide you through the immediate process.</p>
              <p className="text-gray-600 leading-relaxed">For a complete step by step guide on what to do in the hours and days following a death, read our guide on <Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 underline">what to do when someone dies</Link>.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Grief Support Resources</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Grief affects everyone differently, and there is no right or wrong way to process a loss. If you or someone you know is struggling, free support is available 24 hours a day through the <strong>988 Suicide and Crisis Lifeline</strong>. Call or text <strong>988</strong> to speak with a trained counselor.</p>
              <p className="text-gray-600 leading-relaxed">Local grief support groups, hospice bereavement programs, and counseling services are also available throughout the St. Louis area. Many funeral homes can provide referrals to local resources.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqs.map(f => (
                  <div key={f.q}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">What to Do When Someone Dies: A Step by Step Guide</Link></li>
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary</Link></li>
              </ul>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in St. Louis</p>
              <p className="text-slate-600 text-sm mb-5">Compare prices, services, and contact information for funeral homes in St. Louis, Missouri.</p>
              <Link href="/funeral-homes/mo/st-louis" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse St. Louis Funeral Homes</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
