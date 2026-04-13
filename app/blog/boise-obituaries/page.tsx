import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Boise Obituaries and Funeral Homes: Local Resources (2026)',
  description: 'Find obituaries and funeral homes in Boise. Local newspaper obituary sources, funeral home listings, and resources for families.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/boise-obituaries' },
};

const faqs = [
  { q: 'Where can I find Boise Idaho obituaries?', a: 'The most common source for Boise obituaries is the Idaho Statesman, which publishes obituaries daily both in print and online at idahostatesman.com. You can also find obituaries on Legacy.com and on individual funeral home websites throughout the Boise area.' },
  { q: 'How many funeral homes are in Boise?', a: 'Boise is home to several funeral homes serving families across the city and the surrounding Treasure Valley. You can browse a complete list of Boise funeral homes with contact information and services on Evermore Directory.' },
  { q: 'How much does a funeral cost in Boise Idaho?', a: 'The national average funeral cost in 2024 was $7,848 according to the NFDA. Costs in Boise are generally close to the national average. Direct cremation typically starts around $1,200 to $2,500, while a full traditional burial service can range from $6,500 to $12,000 or more.' },
  { q: 'Does the Idaho Statesman publish Boise obituaries?', a: 'Yes. The Idaho Statesman publishes obituaries online at idahostatesman.com. Families can submit paid obituaries through the newspaper or through their funeral home. The Idaho Statesman is the largest newspaper in Idaho and the primary source for obituaries in the Boise metro area.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function BoiseObituariesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Homes in Boise, Idaho: Obituaries and Local Resources</h1>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Where to Find Boise Obituaries</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The primary source for Boise obituaries is the <strong>Idaho Statesman</strong>, which publishes obituaries daily in print and online at <a href="https://www.idahostatesman.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">idahostatesman.com</a>. The Idaho Statesman is the largest newspaper in Idaho and the most widely read source for obituaries in the Boise metropolitan area and the Treasure Valley.</p>
              <p className="text-gray-600 leading-relaxed">You can also find obituaries through Legacy.com, individual funeral home websites, and community publications serving the Boise area. Many funeral homes in Boise post obituaries on their own websites shortly after receiving the information from the family.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funeral Homes in Boise</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Boise has several well established funeral homes serving families across the city and the Treasure Valley. Whether you are looking for a traditional burial, cremation, or memorial service, you can find providers throughout the Boise area.</p>
              <p className="text-gray-600 leading-relaxed">Browse our complete directory of <Link href="/funeral-homes/id/boise" className="text-slate-600 hover:text-slate-800 underline">funeral homes in Boise</Link> to compare services, pricing, and contact information.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Average Funeral Costs in Idaho</h2>
              <p className="text-gray-600 leading-relaxed mb-4">According to the National Funeral Directors Association, the national average cost of a funeral with viewing and burial in 2024 was $7,848. Costs in Idaho and the Boise area are generally close to the national average.</p>
              <p className="text-gray-600 leading-relaxed">Direct cremation in Boise typically costs between $1,200 and $2,500, while a traditional funeral with burial can range from $6,500 to $12,000 or more. Always request a General Price List from any funeral home you are considering so you can compare costs accurately.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do After a Loss in Boise</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Losing a loved one is overwhelming, and knowing the next steps can help during a difficult time. If a death occurs at home, call 911. If the death occurs in a hospital or care facility, staff will guide you through the immediate process.</p>
              <p className="text-gray-600 leading-relaxed">For a complete step by step guide on what to do in the hours and days following a death, read our guide on <Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 underline">what to do when someone dies</Link>.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Grief Support Resources</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Grief affects everyone differently, and there is no right or wrong way to process a loss. If you or someone you know is struggling, free support is available 24 hours a day through the <strong>988 Suicide and Crisis Lifeline</strong>. Call or text <strong>988</strong> to speak with a trained counselor.</p>
              <p className="text-gray-600 leading-relaxed">Local grief support groups, hospice bereavement programs, and counseling services are also available throughout the Boise area. Many funeral homes can provide referrals to local resources.</p>
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
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in Boise</p>
              <p className="text-slate-600 text-sm mb-5">Compare prices, services, and contact information for funeral homes in Boise, Idaho.</p>
              <Link href="/funeral-homes/id/boise" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Boise Funeral Homes</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
