import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Military Funeral Honors: What Veterans Are Entitled To',
  description: 'All honorably discharged veterans are entitled to military funeral honors including a flag ceremony and the playing of Taps. Here is what families need to know.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/military-funeral-honors' },
};

const faqs = [
  { q: 'Are all veterans entitled to military funeral honors?', a: 'Yes, all veterans who were honorably discharged or who received a general discharge under honorable conditions are entitled to basic military funeral honors. This includes at minimum two uniformed service members to fold and present the American flag and a bugler to play Taps. Eligibility extends to members of the active duty military, veterans, and certain reservists and National Guard members.' },
  { q: 'How do I request military funeral honors?', a: 'Military funeral honors are requested through the funeral home handling the arrangements. The funeral director will coordinate with the appropriate military branch on the family&apos;s behalf. You will need to provide a copy of the veteran&apos;s DD Form 214 (Certificate of Release or Discharge from Active Duty). If the DD-214 is not available, the funeral director can help request one from the National Personnel Records Center.' },
  { q: 'What does the military funeral flag ceremony involve?', a: 'The flag ceremony is the centerpiece of military funeral honors. Two or more uniformed service members carefully fold the American flag that has been draped over the casket into a tight triangle. The folded flag is then presented to the next of kin with the words, "On behalf of the President of the United States, the United States (branch of service), and a grateful nation, please accept this flag as a symbol of our appreciation for your loved one&apos;s honorable and faithful service."' },
  { q: 'Can a veteran be buried at Arlington National Cemetery?', a: 'Eligibility for burial at Arlington National Cemetery is more restricted than general veteran burial benefits. Currently, in-ground burial is generally limited to veterans who died on active duty, retired military personnel, former prisoners of war, and recipients of certain high military decorations such as the Medal of Honor, Distinguished Service Cross, or Purple Heart. Columbarium niche inurnment is available to any veteran with an honorable discharge.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function MilitaryFuneralHonorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Military Funeral Honors: What Veterans Are Entitled To</h1>
              <p className="text-xl text-gray-600 mb-4">A complete guide to military funeral honors, from eligibility and how to request them to what happens during the ceremony.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 leading-relaxed mb-4">Every veteran who served honorably in the United States military is entitled to receive military funeral honors at no cost to the family. These honors are a final tribute to the veteran&apos;s service and sacrifice, and they are guaranteed by federal law under Section 1491 of Title 10, United States Code.</p>
              <p className="text-gray-600 leading-relaxed">Despite this entitlement, many families are unaware of what military funeral honors include, how to request them, or what additional honors may be available. This guide covers everything families need to know to ensure their veteran receives the dignified farewell they earned.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Military Funeral Honors Include</h2>
              <p className="text-gray-600 leading-relaxed mb-4">At minimum, military funeral honors include the ceremonial folding and presentation of the American flag and the playing of Taps. These basic honors are provided by at least two uniformed members of the armed forces, with at least one from the veteran&apos;s branch of service. The flag is folded into a tight triangle and presented to the next of kin with a statement of gratitude from the President and the nation.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Full military honors, which are provided for higher ranking service members or upon request when resources allow, may include a casket team (pallbearers), a firing party that performs a three volley salute, a bugler playing Taps live rather than a recording, a color guard carrying the national and service flags, and a military chaplain.</p>
              <p className="text-gray-600 leading-relaxed">The specific elements available depend on the veteran&apos;s rank, the branch of service, and the availability of personnel. Your funeral director can help determine what level of honors your veteran qualifies for and coordinate the arrangements with the military.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Is Eligible</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Military funeral honors are available to any veteran who served in the active duty military and was discharged under conditions other than dishonorable. This includes veterans who received an honorable discharge, a general discharge under honorable conditions, and in some cases, other than honorable discharges depending on the circumstances.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Members of the Selected Reserve who served their full term of enlistment are also eligible, as are National Guard members who completed at least one term of enlistment or period of initial obligated service. Former military members who were discharged for disability incurred or aggravated in the line of duty are eligible regardless of the length of their service.</p>
              <p className="text-gray-600 leading-relaxed">To establish eligibility, the family will typically need the veteran&apos;s DD Form 214, which documents their military service and discharge status. If this document has been lost, the National Personnel Records Center in St. Louis can provide a replacement, though processing times vary.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Request Military Funeral Honors</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The easiest way to request military funeral honors is through the funeral home. Most funeral directors are familiar with the process and will contact the appropriate military installation or Veterans Service Organization on the family&apos;s behalf. The funeral home will need a copy of the DD-214 and the details of the funeral service including date, time, and location.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If you prefer to make the request directly, you can contact the casualty assistance office of the veteran&apos;s branch of service. Each branch maintains a network of honor guard units and volunteer organizations that perform funeral honors. Requests should be made as far in advance as possible, ideally at least 48 hours before the service.</p>
              <p className="text-gray-600 leading-relaxed">In areas where military personnel are not readily available, Veterans Service Organizations such as the American Legion, the VFW, and local veteran volunteer groups often step in to provide honors. These volunteers are trained in the proper protocols and perform the ceremonies with the same reverence as active duty personnel.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Flag Folding Ceremony</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The flag folding ceremony is one of the most solemn and recognizable elements of a military funeral. The American flag is draped over the casket before the service, with the blue union field positioned over the left shoulder of the deceased. At the conclusion of the service, the honor guard carefully folds the flag into a tight triangular shape through a series of thirteen precise folds.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Once folded, the flag is inspected to ensure it is taut and properly formed. A service member then presents the flag to the next of kin, typically the surviving spouse, with a formal statement of gratitude. This moment is often the most emotional part of the ceremony and serves as a powerful symbol of the nation&apos;s thanks for the veteran&apos;s service.</p>
              <p className="text-gray-600 leading-relaxed">The burial flag is provided at no cost by the Department of Veterans Affairs. Families may also purchase additional flags or display cases to preserve the flag after the ceremony. The flag can be obtained through the funeral home or by filing VA Form 27-2008 with the local VA regional office.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Burial at Arlington National Cemetery</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Arlington National Cemetery is the most prestigious military burial ground in the United States, and eligibility for burial there is more limited than for general veteran burial benefits. In-ground burial at Arlington is currently available to veterans who died on active duty, retired military personnel, former prisoners of war, and recipients of certain distinguished military decorations.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Columbarium niche inurnment, which holds cremated remains, is available to any veteran who received an honorable discharge and any reservist or National Guard member who served a full term. This option allows many more veterans to be laid to rest at Arlington, even if they do not qualify for in-ground burial.</p>
              <p className="text-gray-600 leading-relaxed">Scheduling a burial at Arlington requires advance coordination and can take several weeks. Families should contact the cemetery&apos;s scheduling office at (877) 907-8585 and have the veteran&apos;s DD-214 and death certificate ready. The cemetery provides full military honors for all services held on its grounds.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Veteran Benefits at Death</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Beyond funeral honors, the Department of Veterans Affairs provides several additional benefits to eligible veterans and their families. These include a burial allowance to help offset funeral costs, a free headstone or grave marker for any veteran buried in a national, state, or private cemetery, and a Presidential Memorial Certificate signed by the current president.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Veterans may also be eligible for burial in one of the 155 national cemeteries operated by the VA, where burial plots, grave liners, and perpetual care are provided at no cost. State veteran cemeteries, which operate with VA support, offer similar benefits and are often located closer to the veteran&apos;s home community.</p>
              <p className="text-gray-600 leading-relaxed">Surviving spouses may be eligible for Dependency and Indemnity Compensation if the veteran&apos;s death was service related, or for survivor pension benefits if the veteran served during wartime. These benefits can provide critical financial support during an already difficult time. Contact the VA at 1-800-827-1000 or visit va.gov to learn more about eligibility.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/veteran-burial-benefits" className="text-slate-600 hover:text-slate-800 font-medium">Veteran Burial Benefits</Link></li>
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step-by-Step Guide</Link></li>
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
