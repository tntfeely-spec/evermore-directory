import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Wichita Obituaries and Funeral Homes: Local Resources (2026)',
  description: 'Find obituaries and funeral homes in Wichita. Local newspaper obituary sources, funeral home listings, and resources for families.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/wichita-obituaries' },
  openGraph: {
    title: 'Wichita Obituaries and Funeral Homes: Local Resources (2026)',
    description: 'Find obituaries and funeral homes in Wichita. Local newspaper obituary sources, funeral home listings, and resources for families.',
    url: 'https://funeralhomedirectories.com/blog/wichita-obituaries',
    type: 'article',
  },
};

const faqs = [
  {
    q: 'Where can I find Wichita obituaries?',
    a: 'The most comprehensive source for Wichita obituaries is the Wichita Eagle, available online at kansas.com. You can also find obituaries through local funeral home websites and national obituary aggregators like Legacy.com. Many Wichita funeral homes publish obituaries directly on their own websites as well.',
  },
  {
    q: 'How many funeral homes are in Wichita KS?',
    a: 'Wichita has numerous funeral homes serving the community. You can browse the full list of Wichita funeral homes with contact information and services on our directory page at funeralhomedirectories.com.',
  },
  {
    q: 'How much does a funeral cost in Wichita?',
    a: 'The national average cost of a funeral in 2024 is $7,848, according to the National Funeral Directors Association. Costs in Wichita may be slightly below the national average due to the lower cost of living in Kansas. Actual prices depend on the funeral home, type of service, and any additional options such as flowers, a casket, or cemetery fees.',
  },
  {
    q: 'Does the Wichita Eagle publish obituaries online?',
    a: 'Yes, the Wichita Eagle publishes obituaries online at kansas.com. Families can search recent and archived obituaries through the website. Many obituaries are also shared on Legacy.com through the Wichita Eagle partnership.',
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

export default function WichitaObituariesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Homes in Wichita, Kansas: Obituaries and Local Resources</h1>
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Where to Find Wichita Obituaries</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The primary source for obituaries in Wichita is the Wichita Eagle, the city&apos;s major daily newspaper. You can read and search obituaries online at <a href="https://www.kansas.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">kansas.com</a>. The Wichita Eagle has served the community for over a century and remains the most widely used publication for death notices and obituaries in the Wichita area.</p>
              <p className="text-gray-600 leading-relaxed">In addition to the newspaper, many local funeral homes in Wichita publish obituaries directly on their websites. National aggregators such as Legacy.com also collect and display Wichita obituaries from multiple sources.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funeral Homes in Wichita</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Wichita is home to a variety of funeral homes offering traditional burial, cremation, memorial services, and pre-planning options. Whether your family needs a full service funeral or a simple cremation, there are providers throughout the city to meet your needs. You can browse our complete directory of Wichita funeral homes with contact details and service information.</p>
              <Link href="/funeral-homes/ks/wichita" className="inline-block text-slate-600 font-medium hover:text-slate-800 underline">Browse Wichita Funeral Homes on Evermore Directory</Link>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Average Funeral Costs in Kansas</h2>
              <p className="text-gray-600 leading-relaxed mb-4">According to the National Funeral Directors Association, the national average cost of a funeral with viewing and burial in 2024 is $7,848. Costs in Kansas may vary from this baseline depending on the funeral home, type of service selected, and additional expenses such as a casket, cemetery plot, flowers, and obituary placement fees.</p>
              <p className="text-gray-600 leading-relaxed">Cremation typically costs less than traditional burial. Direct cremation without a memorial service is the most affordable option, while a full funeral followed by cremation will be closer to the national average. Always request a General Price List from any funeral home you are considering so you can compare costs accurately.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do After a Loss in Wichita</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Losing someone is overwhelming, and knowing what steps to take can make a difficult time slightly more manageable. Here are some practical steps to consider after a death in Wichita:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Contact a local funeral home to arrange for the care of your loved one.</li>
                <li>Obtain certified copies of the death certificate through the funeral home or the Kansas Department of Health and Environment.</li>
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
                <li><strong>Local hospice organizations:</strong> Many hospice providers in the Wichita area offer bereavement support groups and counseling services to community members, even if your loved one was not a hospice patient.</li>
                <li><strong>Community grief support groups:</strong> Churches, hospitals, and nonprofit organizations throughout Wichita frequently host grief support groups open to the public.</li>
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
                href="/funeral-homes/ks/wichita"
                className="inline-block bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Find Funeral Homes in Wichita
              </Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
