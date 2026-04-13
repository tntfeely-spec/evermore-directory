import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'San Diego Obituaries and Funeral Homes: Local Resources (2026)',
  description: 'Find obituaries and funeral homes in San Diego. Local newspaper obituary sources, funeral home listings, and resources for families.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/san-diego-obituaries' },
  openGraph: {
    title: 'San Diego Obituaries and Funeral Homes: Local Resources (2026)',
    description: 'Find obituaries and funeral homes in San Diego. Local newspaper obituary sources, funeral home listings, and resources for families.',
    url: 'https://funeralhomedirectories.com/blog/san-diego-obituaries',
    type: 'article',
  },
};

const faqs = [
  {
    q: 'Where can I find San Diego obituaries?',
    a: 'The most comprehensive source for San Diego obituaries is the San Diego Union-Tribune, available online at sandiegouniontribune.com. You can also find obituaries through local funeral home websites and national obituary aggregators like Legacy.com. Many San Diego funeral homes publish obituaries directly on their own websites as well.',
  },
  {
    q: 'How many funeral homes are in San Diego?',
    a: 'San Diego has numerous funeral homes serving the community. You can browse the full list of San Diego funeral homes with contact information and services on our directory page at funeralhomedirectories.com.',
  },
  {
    q: 'How much does a funeral cost in San Diego California?',
    a: 'The national average cost of a funeral in 2024 is $7,848, according to the National Funeral Directors Association. Costs in San Diego tend to be higher than the national average due to the higher cost of living in Southern California. Actual prices depend on the funeral home, type of service, and any additional options such as flowers, a casket, or cemetery fees.',
  },
  {
    q: 'Does the San Diego Union-Tribune publish obituaries?',
    a: 'Yes, the San Diego Union-Tribune publishes obituaries online at sandiegouniontribune.com. Families can search recent and archived obituaries through the website. Many obituaries are also shared on Legacy.com through the Union-Tribune partnership.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function SanDiegoObituariesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Homes in San Diego, California: Obituaries and Local Resources</h1>
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Where to Find San Diego Obituaries</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The primary source for obituaries in San Diego is the San Diego Union-Tribune, the region&apos;s major daily newspaper. You can read and search obituaries online at <a href="https://www.sandiegouniontribune.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">sandiegouniontribune.com</a>. The Union-Tribune has served the San Diego community for over 150 years and remains the most widely used publication for death notices and obituaries in the area.</p>
              <p className="text-gray-600 leading-relaxed">In addition to the newspaper, many local funeral homes in San Diego publish obituaries directly on their websites. National aggregators such as Legacy.com also collect and display San Diego obituaries from multiple sources.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funeral Homes in San Diego</h2>
              <p className="text-gray-600 leading-relaxed mb-4">San Diego is home to a wide range of funeral homes offering traditional burial, cremation, memorial services, and pre-planning options. With its large military community and diverse population, San Diego funeral homes offer services ranging from military honors to culturally specific ceremonies. You can browse our complete directory of San Diego funeral homes with contact details and service information.</p>
              <Link href="/funeral-homes/ca/san-diego" className="inline-block text-slate-600 font-medium hover:text-slate-800 underline">Browse San Diego Funeral Homes on Evermore Directory</Link>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Average Funeral Costs in California</h2>
              <p className="text-gray-600 leading-relaxed mb-4">According to the National Funeral Directors Association, the national average cost of a funeral with viewing and burial in 2024 is $7,848. Costs in California, and particularly in San Diego, tend to be higher than the national average due to the higher cost of living. Additional expenses such as a casket, cemetery plot, flowers, and obituary placement fees can increase the total cost further.</p>
              <p className="text-gray-600 leading-relaxed">Cremation typically costs less than traditional burial. Direct cremation without a memorial service is the most affordable option, while a full funeral followed by cremation will be closer to or above the national average in San Diego. Always request a General Price List from any funeral home you are considering so you can compare costs accurately.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do After a Loss in San Diego</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Losing someone is overwhelming, and knowing what steps to take can make a difficult time slightly more manageable. Here are some practical steps to consider after a death in San Diego:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Contact a local funeral home to arrange for the care of your loved one.</li>
                <li>Obtain certified copies of the death certificate through the funeral home or the San Diego County Assessor/Recorder/County Clerk office.</li>
                <li>Notify immediate family members and close friends.</li>
                <li>Review any pre-arranged funeral plans or life insurance policies.</li>
                <li>Begin planning the service, whether it is a traditional funeral, memorial, or direct cremation.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">For a complete walkthrough of what to do when someone passes away, read our guide: <Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 underline">What to Do When Someone Dies</Link>.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Grief Support Resources</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Grief affects everyone differently, and seeking support is an important part of the process. If you or someone you know is struggling after a loss, these resources are available:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>988 Suicide and Crisis Lifeline:</strong> Call or text 988 for free, confidential support available 24 hours a day, 7 days a week.</li>
                <li><strong>Local hospice organizations:</strong> Many hospice providers in the San Diego area offer bereavement support groups and counseling services to community members, even if your loved one was not a hospice patient.</li>
                <li><strong>Community grief support groups:</strong> Churches, hospitals, and nonprofit organizations throughout San Diego frequently host grief support groups open to the public.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
              {faqs.map(f => (
                <div key={f.q} className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{f.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">What to Do When Someone Dies: A Step-by-Step Guide</Link></li>
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary: A Complete Guide</Link></li>
              </ul>
            </section>

            <section className="text-center mt-12">
              <Link
                href="/funeral-homes/ca/san-diego"
                className="inline-block bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Find Funeral Homes in San Diego
              </Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
