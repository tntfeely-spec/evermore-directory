import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Denver Obituaries and Funeral Homes: Local Resources (2026)',
  description: 'Find obituaries and funeral homes in Denver. Local newspaper obituary sources, funeral home listings, and resources for families.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/denver-obituaries' },
};

const faqs = [
  { q: 'Where can I find Denver obituaries?', a: 'The most common source for Denver obituaries is the Denver Post, which publishes obituaries daily both in print and online at denverpost.com. You can also find obituaries on Legacy.com and on individual funeral home websites throughout the Denver area.' },
  { q: 'How many funeral homes are in Denver Colorado?', a: 'Denver is home to numerous funeral homes serving communities across the city and surrounding metro area. You can browse a complete list of Denver funeral homes with contact information and services on Evermore Directory.' },
  { q: 'How much does a funeral cost in Denver?', a: 'The national average funeral cost in 2024 was $7,848 according to the NFDA. Costs in Denver may be slightly higher due to the cost of living along the Front Range. Direct cremation typically starts around $1,500 to $3,000, while a full traditional burial service can range from $7,500 to $14,000 or more.' },
  { q: 'Does the Denver Post publish obituaries?', a: 'Yes. The Denver Post publishes obituaries online at denverpost.com. Families can submit paid obituaries through the newspaper or through their funeral home. The Denver Post is the largest newspaper in Colorado and the most widely used source for obituaries in the Denver metro area.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function DenverObituariesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Homes in Denver, Colorado: Obituaries and Local Resources</h1>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Where to Find Denver Obituaries</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The primary source for Denver obituaries is the <strong>Denver Post</strong>, which publishes obituaries daily in print and online at <a href="https://www.denverpost.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">denverpost.com</a>. The Denver Post is the largest newspaper in Colorado and the most widely read source for obituaries in the Denver metropolitan area.</p>
              <p className="text-gray-600 leading-relaxed">You can also find obituaries through Legacy.com, individual funeral home websites, and community newspapers serving Denver&apos;s neighborhoods. Many funeral homes in Denver post obituaries on their own websites shortly after receiving the information from the family.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funeral Homes in Denver</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Denver has a wide range of funeral homes serving families across every neighborhood and community. Whether you are looking for a traditional burial, cremation, or a green burial option, you can find providers throughout the city and along the Front Range.</p>
              <p className="text-gray-600 leading-relaxed">Browse our complete directory of <Link href="/funeral-homes/co/denver" className="text-slate-600 hover:text-slate-800 underline">funeral homes in Denver</Link> to compare services, pricing, and contact information.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Average Funeral Costs in Colorado</h2>
              <p className="text-gray-600 leading-relaxed mb-4">According to the National Funeral Directors Association, the national average cost of a funeral with viewing and burial in 2024 was $7,848. Costs in Colorado and the Denver metro area may be slightly higher due to the cost of living along the Front Range.</p>
              <p className="text-gray-600 leading-relaxed">Direct cremation in Denver typically costs between $1,500 and $3,000, while a traditional funeral with burial can range from $7,500 to $14,000 or more. Always request a General Price List from any funeral home you are considering so you can compare costs accurately.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do After a Loss in Denver</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Losing a loved one is overwhelming, and knowing the next steps can help during a difficult time. If a death occurs at home, call 911. If the death occurs in a hospital or care facility, staff will guide you through the immediate process.</p>
              <p className="text-gray-600 leading-relaxed">For a complete step by step guide on what to do in the hours and days following a death, read our guide on <Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 underline">what to do when someone dies</Link>.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Grief Support Resources</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Grief affects everyone differently, and there is no right or wrong way to process a loss. If you or someone you know is struggling, free support is available 24 hours a day through the <strong>988 Suicide and Crisis Lifeline</strong>. Call or text <strong>988</strong> to speak with a trained counselor.</p>
              <p className="text-gray-600 leading-relaxed">Local grief support groups, hospice bereavement programs, and counseling services are also available throughout the Denver area. Many funeral homes can provide referrals to local resources.</p>
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
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in Denver</p>
              <p className="text-slate-600 text-sm mb-5">Compare prices, services, and contact information for funeral homes in Denver, Colorado.</p>
              <Link href="/funeral-homes/co/denver" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Denver Funeral Homes</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
