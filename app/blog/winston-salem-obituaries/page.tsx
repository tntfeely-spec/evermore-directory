import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Winston-Salem Obituaries and Funeral Homes: Local Resources (2026)',
  description: 'Find obituaries and funeral homes in Winston-Salem. Local newspaper obituary sources, funeral home listings, and resources for families.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/winston-salem-obituaries' },
};

const faqs = [
  {
    q: 'Where can I find Winston-Salem obituaries?',
    a: 'Winston-Salem obituaries are published in the Winston-Salem Journal newspaper and on their website at journalnow.com. You can also find Winston-Salem obituaries through local funeral home websites, Legacy.com, and the Evermore Directory listing of Winston-Salem funeral homes.'
  },
  {
    q: 'How many funeral homes are in Winston-Salem NC?',
    a: 'Winston-Salem, North Carolina has several funeral homes serving the local community. You can browse the full list of Winston-Salem funeral homes, compare services, and find contact information on the Evermore Directory Winston-Salem page.'
  },
  {
    q: 'How much does a funeral cost in Winston-Salem?',
    a: 'The national average funeral cost in 2024 is $7,848 according to the NFDA. Costs in Winston-Salem may vary depending on the funeral home, type of service, and additional options selected. Contact local Winston-Salem funeral homes directly and request a General Price List to compare pricing.'
  },
  {
    q: 'Does the Winston-Salem Journal publish obituaries?',
    a: 'Yes. The Winston-Salem Journal is the primary newspaper for the Winston-Salem area and publishes obituaries both in print and online at journalnow.com. Families can submit obituaries through the newspaper or through their funeral home, which typically handles the submission on the family&apos;s behalf.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
};

export default function WinstonSalemObituariesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Homes in Winston-Salem, North Carolina: Obituaries and Local Resources</h1>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span>
                <span>|</span>
                <span>Former Firefighter and Paramedic</span>
                <span>|</span>
                <span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Where to Find Winston-Salem Obituaries</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">The primary source for Winston-Salem obituaries is the Winston-Salem Journal, the daily newspaper serving Winston-Salem and the Piedmont Triad region of North Carolina. Obituaries are published in the print edition and are also available online at journalnow.com. The Winston-Salem Journal maintains a searchable obituary archive that allows families to look up recent and past death notices.</p>
              <p className="text-gray-700 leading-relaxed text-lg">In addition to the Winston-Salem Journal, Winston-Salem obituaries can be found on Legacy.com, through individual funeral home websites, and on community memorial pages. Many Winston-Salem funeral homes post obituaries directly on their own sites within hours of receiving the information from the family, making funeral home websites one of the fastest ways to find a recent obituary.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funeral Homes in Winston-Salem</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">Winston-Salem is home to several funeral homes offering a range of services including traditional burial, cremation, memorial services, and pre-planning. Whether you are searching for obituary information or need to arrange funeral services, the Evermore Directory provides a complete listing of Winston-Salem funeral homes with contact details, services offered, and pricing information.</p>
              <p className="text-gray-700 leading-relaxed text-lg">
                <Link href="/funeral-homes/nc/winston-salem" className="text-slate-600 hover:text-slate-800 font-medium">Browse all Winston-Salem, North Carolina funeral homes on Evermore Directory</Link> to compare options and find the right provider for your family&apos;s needs.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Average Funeral Costs in North Carolina</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">According to the National Funeral Directors Association, the national average cost of a funeral with viewing and burial in 2024 is $7,848. Costs in North Carolina and the Winston-Salem area may vary based on the funeral home, the type of service chosen, and additional expenses such as cemetery fees, flowers, and obituary publication charges.</p>
              <p className="text-gray-700 leading-relaxed text-lg">To get accurate pricing for Winston-Salem funeral services, contact funeral homes directly and request a General Price List. Under the FTC Funeral Rule, every funeral home is required to provide this document to anyone who asks, whether in person or over the phone.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do After a Loss in Winston-Salem</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">Losing a loved one is overwhelming, and knowing the next steps can help during a difficult time. If a death has occurred in Winston-Salem, the first step is to contact a funeral home to arrange for the care of your loved one. The funeral home will guide you through decisions about services, handle required paperwork including the death certificate, and coordinate with cemeteries or cremation facilities.</p>
              <p className="text-gray-700 leading-relaxed text-lg">
                For a complete step-by-step guide, read our resource on <Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">what to do when someone dies</Link>, which covers everything from the first phone call to filing necessary documents.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Grief Support Resources</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">Grieving the loss of a loved one is a deeply personal experience, and professional support can make a meaningful difference. If you or someone you know is struggling with grief or emotional distress, the 988 Suicide and Crisis Lifeline is available 24 hours a day, 7 days a week. Call or text 988 to speak with a trained counselor.</p>
              <p className="text-gray-700 leading-relaxed text-lg">Winston-Salem also has local grief counseling services, hospice bereavement programs, and faith-based support groups that can provide ongoing help. Many Winston-Salem funeral homes offer aftercare programs or can connect families with local grief support resources.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Reading</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/what-to-do-when-someone-dies" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">What to Do When Someone Dies</h3>
                  <p className="text-sm text-gray-600">A step-by-step guide for the first 24 hours and beyond.</p>
                </Link>
                <Link href="/blog/how-to-write-an-obituary" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">How to Write an Obituary</h3>
                  <p className="text-sm text-gray-600">Tips and examples for writing a meaningful obituary.</p>
                </Link>
              </div>
            </section>

            <section className="mt-12 bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Find Funeral Homes in Winston-Salem, North Carolina</h2>
              <p className="text-gray-700 mb-6">Browse Winston-Salem funeral homes, compare services, and find the right provider for your family.</p>
              <Link href="/funeral-homes/nc/winston-salem" className="inline-block bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                View Winston-Salem Funeral Homes
              </Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
