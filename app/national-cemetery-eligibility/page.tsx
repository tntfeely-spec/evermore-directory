import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'National Cemetery Eligibility 2026: Who Qualifies for VA Burial',
  description: 'The VA operates 131 national cemeteries providing free burial to eligible veterans, spouses, and dependents. Learn who qualifies, discharge requirements, what is provided at no cost, and how national cemeteries differ from state veterans cemeteries and Arlington.',
  alternates: { canonical: 'https://funeralhomedirectories.com/national-cemetery-eligibility' },
  openGraph: {
    title: 'National Cemetery Eligibility 2026: Who Qualifies for VA Burial',
    description: 'Learn who qualifies for free burial in a VA national cemetery, including veterans, spouses, dependents, reservists, and National Guard members.',
    url: 'https://funeralhomedirectories.com/national-cemetery-eligibility',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Can a veteran&apos;s spouse be buried in a national cemetery even if the veteran is not buried there?',
    a: 'Yes. A surviving spouse of an eligible veteran can be buried in a VA national cemetery regardless of where the veteran was buried. The spouse must not have remarried, unless the remarriage ended by death or divorce. The VA does not require the veteran to be interred in the same cemetery or any national cemetery at all.',
  },
  {
    q: 'Does a veteran need to have served in combat to qualify for national cemetery burial?',
    a: 'No. Combat service is not required. Any veteran who served on active duty and was discharged under conditions other than dishonorable qualifies for burial in a national cemetery. Post-1980 enlistees and post-1981 officers must generally meet a minimum 24-month service requirement, but exceptions exist for service-connected disability separations and certain hardship discharges.',
  },
  {
    q: 'Are National Guard members eligible for national cemetery burial?',
    a: 'National Guard members are eligible only if they were activated under federal orders (Title 10) and completed the prescribed period of service, or if they died while on active duty or during authorized training. Purely state-activated Guard service under Title 32 does not establish eligibility for VA national cemetery burial, though some state veterans cemeteries accept these members.',
  },
  {
    q: 'What is the difference between a national cemetery and a state veterans cemetery?',
    a: 'VA national cemeteries are operated by the federal government across 40 states and Puerto Rico and have uniform eligibility rules. State veterans cemeteries are run by individual states, often with VA grants, and may impose residency requirements or accept a broader range of service members. There are 122 state veterans cemeteries across 46 states and 3 territories. Both provide burial at no cost or very low cost to eligible veterans.',
  },
  {
    q: 'How do I apply for burial in a national cemetery?',
    a: 'At the time of need, the funeral director or next of kin contacts the National Cemetery Scheduling Office at 1-800-535-1117. You will need the veteran&apos;s DD-214 discharge papers, death certificate, and proof of relationship for spouse or dependent burials. For advance planning, veterans can file VA Form 40-10007 for a pre-need eligibility determination, which speeds the process at the time of death.',
  },
];

export default function NationalCemeteryEligibilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "National Cemetery Eligibility 2026: Who Qualifies for VA Burial",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-18", "dateModified": "2026-05-18",
        "url": "https://funeralhomedirectories.com/national-cemetery-eligibility"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Veterans Funeral Benefits", "item": "https://funeralhomedirectories.com/veterans-funeral-benefits" },
          { "@type": "ListItem", "position": 3, "name": "National Cemetery Eligibility" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q.replace(/&apos;/g, "'"), "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/&apos;/g, "'") } }))
      }) }} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/veterans-funeral-benefits" className="text-slate-600 hover:text-slate-800">Veterans Funeral Benefits</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">National Cemetery Eligibility</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            National Cemetery Eligibility: Who Qualifies for VA Burial
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The VA operates 131 national cemeteries across 40 states and Puerto Rico, providing free burial to eligible veterans, their spouses, and certain dependents. Of these, 72 are open for new casketed interments, 18 accept cremated remains only, and 94 percent of U.S. veterans live within 75 miles of a veterans cemetery.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Eligibility for national cemetery burial is not automatic. It depends on the veteran&apos;s discharge status, length of service, and branch. Spouses and dependents qualify through the veteran&apos;s eligibility, but the rules vary depending on marital status, age, and disability. This guide breaks down every eligibility category so you know exactly who qualifies, what is provided at no cost, and how national cemeteries differ from state veterans cemeteries and Arlington National Cemetery.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you are a family planning a veteran&apos;s burial, or a veteran making pre-need arrangements, understanding these eligibility rules can save thousands of dollars and prevent delays at a difficult time. Families who discover their veteran qualifies for national cemetery burial often find that the gravesite, headstone, opening and closing of the grave, and perpetual care are all provided at no charge. That benefit alone can reduce total funeral costs by $3,000 to $7,000 depending on the region.
            </p>
          </section>

          {/* Veteran Eligibility */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Veteran Eligibility</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The broadest category of eligibility covers veterans who served on active duty in the Armed Forces and were discharged under conditions other than dishonorable. This includes service in the Army, Navy, Air Force, Marine Corps, Coast Guard, and Space Force. The discharge must be honorable or general under honorable conditions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              For enlistees who entered service after September 7, 1980, and officers who entered after October 16, 1981, there is a minimum active duty service requirement. These veterans must have completed at least 24 continuous months of active duty or the full period for which they were called to active duty. There are exceptions: veterans who were discharged for a service-connected disability, veterans who were discharged for hardship, and veterans who served prior to these dates are not subject to the 24-month minimum.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Veterans who were discharged early under the early-out program, those who served on active duty during a period of war (even briefly), and those who received a Purple Heart also meet the active duty service threshold regardless of total time served. The key document for proving eligibility is the DD-214 (Certificate of Release or Discharge from Active Duty), which lists the veteran&apos;s dates of service, branch, and character of discharge.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Certain civilians and public service members are also eligible by law. This includes members of the commissioned corps of the Public Health Service and the National Oceanic and Atmospheric Administration who served on active duty. Philippine veterans who served under U.S. command during World War II also qualify under specific provisions. If you are unsure whether a veteran&apos;s service qualifies, the National Cemetery Scheduling Office can make an eligibility determination before the time of need.
            </p>
          </section>

          {/* Spouse and Dependent Eligibility */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Spouse and Dependent Eligibility</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The spouse or surviving spouse of an eligible veteran qualifies for burial in a national cemetery. This is true even if the veteran is buried elsewhere, including in a private cemetery, a state veterans cemetery, or overseas. The surviving spouse does not need to file a separate eligibility application. At the time of death, the funeral director contacts the National Cemetery Scheduling Office and provides proof of the veteran&apos;s eligible service and proof of marriage.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A surviving spouse who remarries loses eligibility for national cemetery burial unless the remarriage ends by death or divorce. At that point, eligibility is restored. A spouse who is divorced from the veteran at the time of the veteran&apos;s death does not qualify, regardless of the length of the marriage. These rules are strict, and there are no waiver provisions for divorced spouses.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Minor children of eligible veterans qualify for burial in a national cemetery. A minor child is defined as unmarried and under the age of 21. Unmarried adult children who became permanently physically or mentally disabled before reaching the age of 21 are also eligible, provided they are dependent on the veteran for support. The VA requires documentation of the disability and dependency, which can include medical records and financial support evidence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              When a spouse or dependent is buried in a national cemetery, the headstone or marker can include the dependent&apos;s information alongside the veteran&apos;s. If the veteran is already interred, the dependent can be buried in the same gravesite. If the veteran is buried elsewhere, the dependent can still receive a separate gravesite in a national cemetery, though availability depends on the specific cemetery&apos;s capacity. Families in states like <Link href="/funeral-homes/tx" className="text-blue-700 hover:text-blue-900 underline">Texas</Link>, <Link href="/funeral-homes/fl" className="text-blue-700 hover:text-blue-900 underline">Florida</Link>, and <Link href="/funeral-homes/ca" className="text-blue-700 hover:text-blue-900 underline">California</Link> have multiple national cemeteries to choose from based on location and availability.
            </p>
          </section>

          {/* Reservist and National Guard */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reservist and National Guard Eligibility</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Members of the Reserve and National Guard do not automatically qualify for national cemetery burial based on reserve service alone. Eligibility requires that the member was activated under federal orders (Title 10 of the U.S. Code) and completed the prescribed period of service. This means that a reservist who was called to active duty for Operation Iraqi Freedom, Operation Enduring Freedom, or any other federal activation and served the full activation period qualifies in the same way as any other active duty veteran.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Reservists and Guard members who died while on active duty or during authorized training also qualify, regardless of the length of their active service. This includes deaths during annual training, inactive duty training, and full-time National Guard duty under federal authority. However, purely state-activated National Guard service under Title 32 does not establish eligibility for VA national cemetery burial.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Guard and Reserve members who completed 20 or more years of qualifying service and are entitled to retired pay (even if not yet receiving it) are also eligible. This covers the so-called &quot;gray area&quot; retirees who have reached 20 years of creditable service but have not yet turned 60 and begun drawing retired pay. The key proof document for reservists is the NGB Form 22 (Report of Separation and Record of Service) for National Guard members, or the DD-214 if they were activated under federal orders.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you are unsure whether a Guard or Reserve member&apos;s service qualifies, start by locating the member&apos;s discharge paperwork and contacting the National Cemetery Scheduling Office. Many funeral homes that serve military families in states like <Link href="/funeral-homes/va" className="text-blue-700 hover:text-blue-900 underline">Virginia</Link>, <Link href="/funeral-homes/nc" className="text-blue-700 hover:text-blue-900 underline">North Carolina</Link>, and <Link href="/funeral-homes/ga" className="text-blue-700 hover:text-blue-900 underline">Georgia</Link> are experienced with verifying Guard and Reserve eligibility and can help navigate the process.
            </p>
          </section>

          {/* Discharge Status Requirements */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discharge Status Requirements</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The character of a veteran&apos;s discharge is the single most important factor in determining national cemetery eligibility. There are five categories of military discharge, and not all of them qualify a veteran for burial benefits.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Honorable Discharge:</strong> This is the highest category of discharge and fully qualifies a veteran for national cemetery burial and all VA burial benefits. Most veterans who complete their service obligations and meet conduct standards receive an honorable discharge.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>General Discharge Under Honorable Conditions:</strong> This discharge is issued to service members whose performance was satisfactory but who did not meet all the standards required for an honorable discharge. Veterans with a general discharge under honorable conditions are fully eligible for national cemetery burial. This is an important distinction because many families assume that only an honorable discharge qualifies.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Other Than Honorable (OTH) Discharge:</strong> This is where eligibility becomes complicated. An OTH discharge does not automatically disqualify a veteran from national cemetery burial. The VA makes a character of service determination on a case-by-case basis. If the VA determines the service was &quot;under other than dishonorable conditions,&quot; the veteran may still qualify. Families should request a character of service determination through the VA before assuming the veteran is ineligible.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Bad Conduct Discharge (BCD) from General Court-Martial:</strong> A bad conduct discharge issued by a general court-martial disqualifies a veteran from national cemetery burial. However, a BCD from a special court-martial may still allow eligibility after a VA character of service review. The distinction between general and special court-martial BCDs is critical and often misunderstood.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Dishonorable Discharge:</strong> A dishonorable discharge is an absolute bar to national cemetery burial and all VA burial benefits. There are no waivers or exceptions. Veterans with a dishonorable discharge cannot be buried in a national cemetery, state veterans cemetery, or receive a government headstone or marker.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              If a veteran&apos;s discharge status is unclear or if the family believes the discharge characterization was unjust, the veteran or surviving family can apply to the Discharge Review Board or Board for Correction of Military Records to have the discharge upgraded. Upgraded discharges can restore national cemetery eligibility retroactively.
            </p>
          </section>

          {/* What Is Provided at No Cost */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Provided at No Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When a veteran is buried in a VA national cemetery, the following items and services are provided at no cost to the family. These benefits represent a significant financial value, typically saving families between $3,000 and $7,000 compared to purchasing a private cemetery plot and headstone.
            </p>
            <div className="bg-slate-50 rounded-lg p-6 mb-4">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-1 font-bold">1.</span>
                  <span><strong>Gravesite:</strong> A burial plot in the national cemetery at no charge. For casketed <Link href="/what-is-interment" className="text-blue-700 hover:text-blue-900 underline">interments</Link>, this includes a standard gravesite. For cremated remains, this may include a columbarium niche or an in-ground burial site depending on the cemetery.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-1 font-bold">2.</span>
                  <span><strong>Opening and Closing of the Grave:</strong> The cemetery handles all excavation and backfilling at no charge. This service alone costs $800 to $1,500 at most private cemeteries.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-1 font-bold">3.</span>
                  <span><strong>Perpetual Care:</strong> The VA maintains the gravesite, grounds, and headstone in perpetuity. There are no annual maintenance fees, endowment charges, or upkeep assessments. The cemetery groundskeeping is funded by federal appropriations indefinitely.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-1 font-bold">4.</span>
                  <span><strong>Government Headstone or Marker:</strong> The VA provides a flat granite or marble marker, an upright granite or marble headstone, or a bronze niche marker at no cost. The inscription includes the veteran&apos;s name, branch of service, dates of birth and death, and any authorized emblems of belief. The headstone can also include the spouse&apos;s information if applicable.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-1 font-bold">5.</span>
                  <span><strong>Burial Flag:</strong> A United States flag is provided to drape the casket or accompany the urn. After the service, the flag is folded and presented to the next of kin. Only one flag is issued per veteran.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-1 font-bold">6.</span>
                  <span><strong>Presidential Memorial Certificate:</strong> A certificate signed by the current President, honoring the veteran&apos;s service. Multiple certificates can be requested for family members. There is no limit on the number of certificates issued.</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Items <strong>not</strong> covered by the VA include transportation of the remains to the national cemetery, funeral home preparation charges, the funeral service itself, and any private merchandise such as caskets or urns. Families are responsible for selecting and paying a funeral home for these services. To find funeral homes experienced with veteran burials in your area, browse our <Link href="/funeral-homes/tx" className="text-blue-700 hover:text-blue-900 underline">Texas</Link>, <Link href="/funeral-homes/oh" className="text-blue-700 hover:text-blue-900 underline">Ohio</Link>, <Link href="/funeral-homes/pa" className="text-blue-700 hover:text-blue-900 underline">Pennsylvania</Link>, or <Link href="/funeral-homes/ny" className="text-blue-700 hover:text-blue-900 underline">New York</Link> funeral home directories, or search any state on our <Link href="/states" className="text-blue-700 hover:text-blue-900 underline">state directory page</Link>.
            </p>
          </section>

          {/* National vs State vs Arlington */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">National vs. State vs. Arlington: Key Differences</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Veterans and their families often assume that all veterans cemeteries operate the same way. In reality, there are three distinct systems with different eligibility rules, available services, and application processes. Understanding these differences helps families choose the right option.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">VA National Cemeteries</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The 131 VA national cemeteries are operated by the National Cemetery Administration, a division of the U.S. Department of Veterans Affairs. Eligibility is uniform across all locations and is determined by federal law (Title 38 of the U.S. Code). There are no residency requirements. A veteran from <Link href="/funeral-homes/wa" className="text-blue-700 hover:text-blue-900 underline">Washington</Link> state can be buried in a national cemetery in <Link href="/funeral-homes/fl" className="text-blue-700 hover:text-blue-900 underline">Florida</Link> with no restrictions. Of the 131 cemeteries, 72 are currently accepting new casketed interments, 18 accept only cremated remains, and the remainder are closed to new burials but continue to provide services for veterans with reserved gravesites or family members joining an existing burial.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">State Veterans Cemeteries</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              There are 122 state veterans cemeteries across 46 states and 3 U.S. territories. These cemeteries are operated by individual state governments, often with construction and maintenance grants from the VA. While many state veterans cemeteries follow the same eligibility standards as national cemeteries, some impose additional requirements. The most common additional requirement is state residency, meaning the veteran must have been a resident of that state at the time of death or at the time of application. Some state cemeteries also accept Guard members with only state (Title 32) service, which is a broader eligibility standard than national cemeteries allow.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              State veterans cemeteries may charge small fees for services that are free at national cemeteries, such as a grave liner or recording fee. These fees vary by state and are typically modest, ranging from $50 to $500. Despite these small charges, state veterans cemeteries remain far less expensive than private cemeteries and are an excellent option for veterans who live far from a national cemetery or whose preferred national cemetery is at capacity.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Arlington National Cemetery</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Arlington National Cemetery is operated by the U.S. Army, not the VA, and has the strictest eligibility requirements of any veterans cemetery in the country. Burial (in-ground interment) at Arlington is limited to veterans who died on active duty, retired military members (those receiving retired pay), recipients of the Medal of Honor, former prisoners of war, and veterans with specific high-level decorations including the Silver Star, Distinguished Service Cross, Distinguished Service Medal, and Purple Heart.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Above-ground inurnment (placement of cremated remains in the columbarium) at Arlington has broader eligibility and is available to any veteran with an honorable discharge who served on active duty. However, even columbarium space at Arlington is limited and subject to availability. Families considering Arlington should contact the cemetery directly, as eligibility rules have been updated multiple times in recent years and may change again. Arlington operates independently from the VA national cemetery system, and the National Cemetery Scheduling Office cannot make reservations at Arlington.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2" dangerouslySetInnerHTML={{ __html: faq.q }} />
                  <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
                </div>
              ))}
            </div>
          </section>

          {/* Related Reading */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Reading</h2>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/veterans-funeral-benefits" className="text-blue-700 hover:text-blue-900 underline">Veterans Funeral Benefits 2026: Complete Guide</Link> - Full overview of VA burial allowances, military honors, headstones, and burial flags.
              </li>
              <li>
                <Link href="/va-burial-allowance-2026" className="text-blue-700 hover:text-blue-900 underline">VA Burial Allowance 2026: Current Amounts and How to Apply</Link> - Detailed breakdown of VA burial allowance dollar amounts for service-connected and non-service-connected deaths.
              </li>
              <li>
                <Link href="/what-is-interment" className="text-blue-700 hover:text-blue-900 underline">What Is Interment? Types, Costs, and What to Expect</Link> - Explanation of interment types including ground burial, entombment, and columbarium placement.
              </li>
              <li>
                <Link href="/glossary" className="text-blue-700 hover:text-blue-900 underline">Funeral and Cremation Glossary</Link> - Definitions of funeral industry terms including perpetual care, columbarium, inurnment, and more.
              </li>
            </ul>
          </section>

          {/* Closing */}
          <section className="mb-10">
            <p className="text-gray-600 leading-relaxed mb-4">
              National cemetery eligibility is broader than most families realize. If you are planning a veteran&apos;s funeral or making pre-need arrangements, start by locating the veteran&apos;s DD-214 and contacting the National Cemetery Scheduling Office at 1-800-535-1117. A pre-need eligibility determination (VA Form 40-10007) takes the guesswork out of the process and gives your family a documented decision they can present at the time of need.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For help finding a funeral home near you that serves military families, use our <Link href="/" className="text-blue-700 hover:text-blue-900 underline">homepage search</Link> or browse funeral homes by state. Every listing in our directory includes phone numbers and service details to help you connect with a provider who can assist with VA paperwork, military honors coordination, and national cemetery arrangements.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
