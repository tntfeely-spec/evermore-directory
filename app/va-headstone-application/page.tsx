import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'VA Headstone Application 2026: Form 40-1330, Options, and Inscriptions',
  description: 'How to apply for a free VA headstone, marker, or medallion using Form 40-1330. Covers headstone options, inscriptions, belief symbols, shipping timelines, and setting fees for 2026.',
  alternates: { canonical: 'https://funeralhomedirectories.com/va-headstone-application' },
  openGraph: {
    title: 'VA Headstone Application 2026: Form 40-1330, Options, and Inscriptions',
    description: 'How to apply for a free VA headstone, marker, or medallion using Form 40-1330. Covers headstone options, inscriptions, belief symbols, and setting fees.',
    url: 'https://funeralhomedirectories.com/va-headstone-application',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'How much does a VA headstone cost?', a: 'The VA provides government headstones, markers, and niche markers at no cost to eligible veterans. The VA also pays for shipping to the cemetery or funeral home. The only cost the family may need to cover is the setting fee, which is the charge for physically installing the headstone at the gravesite. Setting fees typically range from $200 to $500 depending on the cemetery and region.' },
  { q: 'How long does it take to receive a VA headstone?', a: 'After the VA approves the application, headstones and markers are typically shipped within 60 to 90 days. Flat markers tend to arrive faster than upright headstones. Bronze niche markers may take slightly longer depending on the manufacturer backlog. The VA ships directly to the cemetery or funeral home listed on the application.' },
  { q: 'Can I get a VA headstone for a veteran buried in a private cemetery?', a: 'Yes. The VA provides headstones and markers for eligible veterans buried in any cemetery, whether it is a national cemetery, state veterans cemetery, or private cemetery. If the veteran already has a privately purchased headstone, the family can apply for a bronze medallion to be affixed to the existing stone, or they may be eligible for a headstone allowance of up to $441.' },
  { q: 'What information is inscribed on a VA headstone?', a: 'Standard VA headstone inscriptions include the veteran&apos;s legal name, branch of service, war service if applicable, and dates of birth and death. Optional inscriptions include rank, awards, and a term of service line. Families may also select one of more than 70 approved belief symbols, including Christian Cross, Star of David, Islamic Crescent, Buddhist Wheel, and others.' },
  { q: 'Can a spouse&apos;s name be added to a VA headstone?', a: 'Yes. A spouse or dependent who is buried in a national cemetery can have their name and dates inscribed on the reverse side of the veteran&apos;s upright headstone. For flat markers, a separate marker is typically provided for the spouse. The family must submit a new request through the cemetery once the spouse or dependent has passed.' },
];

export default function VAHeadstoneApplicationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "VA Headstone Application 2026: Form 40-1330, Options, and Inscriptions",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-18", "dateModified": "2026-05-18",
        "url": "https://funeralhomedirectories.com/va-headstone-application"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Veterans Funeral Benefits", "item": "https://funeralhomedirectories.com/veterans-funeral-benefits" },
          { "@type": "ListItem", "position": 3, "name": "VA Headstone Application" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      }) }} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/veterans-funeral-benefits" className="text-slate-600 hover:text-slate-800">Veterans Funeral Benefits</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">VA Headstone Application</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            VA Headstone Application: Options, Inscriptions, and How to Apply
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The VA provides government headstones, markers, and medallions at no cost for eligible veterans. Options include flat granite or bronze markers, upright marble or granite headstones, and bronze niche markers for columbarium placement. For veterans already buried with a private headstone, the VA offers a bronze medallion and a headstone allowance of up to $441. Application is made using VA Form 40-1330.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              As a former first responder, I have helped families navigate this process after losing a veteran loved one. The VA headstone program is one of the most straightforward veteran burial benefits available, but many families do not know what their options are or how to get started. This guide walks through every headstone and marker type the VA offers, explains the inscription and emblem choices, and provides a step-by-step breakdown of the Form 40-1330 application. Whether you are working with a <Link href="/funeral-homes/tx" className="text-slate-600 hover:text-slate-800 font-medium">funeral home in Texas</Link>, a <Link href="/funeral-homes/va" className="text-slate-600 hover:text-slate-800 font-medium">funeral home in Virginia</Link>, or any provider in any state, this information applies nationwide.
            </p>
          </section>

          {/* Headstone and Marker Options */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Headstone and Marker Options</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The VA offers five types of headstones and markers for eligible veterans. Each type is provided at no cost to the family. The choice depends on the cemetery&apos;s regulations, the burial type (ground burial, cremation niche, mausoleum), and family preference. Below is a detailed breakdown of each option.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Flat Granite Marker</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The flat granite marker is the most commonly requested option. It is installed flush with the ground and is accepted at virtually all private and public cemeteries. Standard dimensions are approximately 24 inches long, 12 inches wide, and 4 inches thick. Flat granite markers are available in light gray granite. Inscriptions are sandblasted into the stone, producing clean, durable lettering that withstands decades of weathering. Many families choose this option because it meets the requirements of cemeteries that mandate flush-mount markers for ease of grounds maintenance. If your veteran is buried in a private cemetery, check with the cemetery office to confirm whether flat markers are permitted before submitting the application.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Flat Bronze Marker</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The flat bronze marker is mounted on a granite base and is also installed flush with the ground. The bronze plaque measures approximately 24 inches long and 12 inches wide. The granite base beneath it adds about 3 inches of thickness. This option is often preferred for its traditional military appearance. The raised lettering on the bronze plate gives it a more formal look compared to the sandblasted granite marker. Some cemeteries specifically require bronze markers, particularly memorial gardens and sections with uniform appearance standards. Bronze markers are durable and resistant to weathering, though families should be aware that bronze develops a natural patina over time. Regular cleaning with mild soap and water keeps the marker looking sharp.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Upright Marble Headstone</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The upright marble headstone is the style most people associate with national cemeteries like <Link href="/national-cemetery-eligibility" className="text-slate-600 hover:text-slate-800 font-medium">Arlington National Cemetery</Link> and other VA national cemeteries. It stands approximately 42 inches tall, 13 inches wide, and 4 inches thick. The white marble creates a striking, uniform appearance. This is the default marker used in most VA national cemeteries and state veterans cemeteries. While families can request upright marble headstones for private cemeteries as well, they should confirm that the cemetery allows upright markers. The inscription is carved into the marble face. Upright marble headstones are heavy, weighing approximately 230 pounds, which is important to consider when planning installation and setting fees.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Upright Granite Headstone</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The upright granite headstone is similar in size to the marble version, standing approximately 42 inches tall, 13 inches wide, and 4 inches thick. It is available in light gray granite. Granite is somewhat more durable than marble in harsh climates and resists staining and erosion better over long periods. Families in northern states like <Link href="/funeral-homes/mn" className="text-slate-600 hover:text-slate-800 font-medium">Minnesota</Link>, <Link href="/funeral-homes/wi" className="text-slate-600 hover:text-slate-800 font-medium">Wisconsin</Link>, and <Link href="/funeral-homes/mi" className="text-slate-600 hover:text-slate-800 font-medium">Michigan</Link> sometimes prefer granite for its resistance to freeze-thaw cycles. Like marble, the inscription is sandblasted into the face of the stone. The upright granite headstone is accepted at most private cemeteries that allow upright markers.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Bronze Niche Marker</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The bronze niche marker is designed for cremated remains placed in a columbarium niche. It is significantly smaller than the other options, measuring approximately 8.5 inches long and 5.5 inches wide. The marker is mounted on the front of the niche and includes the same inscription elements available on full-size markers. This option is becoming more common as cremation rates continue to rise. The VA provides the niche marker at no cost, but the columbarium facility may charge a separate fee for installation. Families choosing <Link href="/what-is-interment" className="text-slate-600 hover:text-slate-800 font-medium">interment</Link> of cremated remains in a columbarium should request this marker type on Form 40-1330.
            </p>
          </section>

          {/* VA Medallion */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">VA Medallion</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For veterans who are already buried with a privately purchased headstone or marker, the VA offers a bronze medallion as an alternative to a government-issued headstone. The medallion is designed to be affixed to the existing private headstone, providing an official recognition of the veteran&apos;s military service without requiring the family to replace a headstone they have already purchased.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The medallion is available in three sizes. The large medallion is approximately 6.25 inches wide and 4.75 inches tall. The medium medallion is approximately 3.5 inches wide and 2.75 inches tall. The small medallion is approximately 2 inches wide and 1.5 inches tall. All three sizes feature the same design: the word &quot;VETERAN&quot; across the top, the branch of service seal in the center, and a laurel wreath border. The large size is the most commonly requested because it is visible from a standing position at the gravesite.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The medallion is applied using a strong adhesive or by a professional monument company that can recess it into the existing stone. The VA does not cover the cost of affixing the medallion to the headstone. Families should budget $50 to $200 for professional installation depending on the method and location. In addition to the medallion, families may also be eligible for a headstone allowance of up to $441 to partially reimburse the cost of the privately purchased headstone. This allowance is filed separately using VA Form 21P-530EZ.
            </p>
          </section>

          {/* How to Apply */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Apply: VA Form 40-1330</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The application for a VA headstone, marker, or medallion is made using VA Form 40-1330, officially titled &quot;Claim for Standard Government Headstone or Marker.&quot; The form can be submitted online through the VA&apos;s memorial benefits portal, by fax, or by mail. Many funeral directors and Veterans Service Organizations (VSOs) will complete and submit this form on behalf of the family at no charge.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Who Can Apply</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The application can be submitted by the next of kin, a funeral director, a cemetery official, a Veterans Service Organization representative, or any other authorized representative. The veteran does not need to have been buried in a national cemetery. The form can be submitted for veterans buried in any public or private cemetery, as well as for veterans whose remains were cremated and placed in a columbarium or scattered. There is no time limit for filing Form 40-1330. Families can request a headstone or marker for a veteran who passed away decades ago, provided they have the necessary service documentation.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Required Information</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The application requires the following information about the veteran: full legal name (including any name changes during service), branch of service, dates of active duty service (entry and separation dates), highest rank held, war or conflict service (such as World War II, Korea, Vietnam, Gulf War, Iraq, or Afghanistan), date of birth, date of death, and character of discharge. The discharge must be under conditions other than dishonorable. A copy of the veteran&apos;s DD-214 or other discharge documentation is strongly recommended to prevent processing delays, though it is not always required.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cemetery Information</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The form also requires the name, address, and contact information of the cemetery where the headstone or marker will be delivered. For national cemeteries, the VA coordinates delivery directly with the cemetery. For private cemeteries, the VA ships the headstone to the cemetery address provided on the form, or to a funeral home if one is listed as the delivery point. Make sure the cemetery or funeral home is aware that a VA headstone shipment is incoming, as someone at the receiving location will need to sign for the delivery.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Selecting the Marker Type</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              On the form, you will select which type of headstone or marker you want: flat granite, flat bronze, upright marble, upright granite, bronze niche marker, or medallion. Before making this selection, contact the cemetery to confirm which types they accept. Many private cemeteries only allow flat markers. National cemeteries and state veterans cemeteries will typically install the standard upright headstone unless the family requests otherwise. If you are unsure, ask your <Link href="/funeral-homes/ca" className="text-slate-600 hover:text-slate-800 font-medium">funeral home</Link> or cemetery director for guidance on what is permitted and appropriate for the burial section.
            </p>
          </section>

          {/* Inscriptions and Emblems */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Inscriptions and Emblems</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every VA headstone and marker includes a standard inscription at no additional cost. The standard inscription elements include the veteran&apos;s legal name, branch of service (such as US Army, US Navy, US Air Force, US Marine Corps, US Coast Guard, or US Space Force), war or conflict service (such as &quot;World War II&quot; or &quot;Vietnam&quot;), date of birth, and date of death. These elements are mandatory on all government headstones and markers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              In addition to the required elements, families may request optional inscription lines. These can include the veteran&apos;s rank at time of discharge, military awards and decorations (such as Purple Heart, Bronze Star, or Silver Star), a term of service line showing the complete date range of active duty, and a brief personal inscription or endearment such as &quot;Beloved Husband and Father.&quot; The VA allows a limited number of characters for personal inscriptions, and the wording must be approved before engraving.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Belief Symbols (Emblems of Belief)</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The VA maintains a list of more than 70 approved emblems of belief that can be engraved on the headstone. These symbols appear at the top of upright headstones or on the left side of flat markers. The selection represents a wide range of religious and philosophical traditions. Commonly requested emblems include the Christian Cross, the Star of David, the Islamic Crescent and Star, the Buddhist Wheel of Righteousness, the Hindu Om symbol, the Wiccan Pentacle, and the Atheist/Humanist emblem (the stylized letter A).
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Other approved emblems include the Sikh Khanda, the Baha&apos;i Nine-Pointed Star, the Unitarian Universalist Flaming Chalice, the Presbyterian Cross, the United Methodist Church Cross and Flame, the Latter-day Saints Angel Moroni, the Seventh-Day Adventist symbol, the Soka Gakkai International symbol, the Eckankar symbol, the Sufism Reoriented Winged Heart, and many others. The family selects the desired emblem on Form 40-1330. If the veteran&apos;s belief system is not represented in the current list, the family or an authorized representative may petition the VA to add a new emblem. The petition process typically takes several months and requires documentation of the belief system. If no emblem is desired, the family can request that the emblem space be left blank.
            </p>
          </section>

          {/* Spouse and Dependent Inscriptions */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Spouse and Dependent Inscriptions</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When a veteran&apos;s spouse or eligible dependent is buried alongside the veteran in a national cemetery, the spouse&apos;s or dependent&apos;s name and dates of birth and death can be inscribed on the reverse side of an upright headstone. This is handled by the national cemetery administration at the time of the spouse&apos;s or dependent&apos;s burial. There is no separate form required for this inscription. The cemetery will coordinate the inscription work when the second burial takes place.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              For flat markers, there is not enough space on the reverse side for a second inscription. In these cases, the VA provides a separate flat marker for the spouse or dependent. The spouse or dependent marker includes their name, the word &quot;Wife,&quot; &quot;Husband,&quot; or the applicable relationship, and dates of birth and death. This separate marker is also provided at no cost for burials in national and state veterans cemeteries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              For veterans buried in private cemeteries, the VA does not cover adding a spouse&apos;s inscription to the government headstone. The family would need to arrange and pay for the additional inscription through a private monument company. Some families choose to purchase a separate private headstone for the spouse and use the VA medallion on the veteran&apos;s private headstone to maintain a uniform appearance at the gravesite.
            </p>
          </section>

          {/* Shipping and Delivery */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping and Delivery</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The VA pays all shipping costs for headstones, markers, and medallions. After Form 40-1330 is approved, the headstone or marker is manufactured and shipped directly to the cemetery or funeral home listed on the application. The family does not need to arrange or pay for transportation. Shipments within the continental United States are delivered by commercial freight carrier for upright headstones (due to their weight) and by standard parcel carrier for flat markers and medallions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Delivery timelines vary based on the type of marker ordered and the current production volume. In general, families should expect delivery within 60 to 90 days of the VA approving the application. Flat markers tend to arrive within 45 to 60 days. Upright headstones take longer because of the manufacturing and shipping logistics involved with heavier stone. Bronze niche markers and medallions may take 60 to 75 days. During peak periods following major conflicts or when production facilities are at capacity, delivery times may extend beyond 90 days. The VA provides a tracking number once the shipment is dispatched, and families can check the status through the VA&apos;s memorial benefits portal.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              When the shipment arrives, someone at the receiving location (cemetery office or funeral home) must be available to accept delivery and sign for the package. Upright marble and granite headstones are delivered on pallets and require equipment to move them. Flat markers arrive in crates that can typically be handled by two people. Families working with a <Link href="/funeral-homes/fl" className="text-slate-600 hover:text-slate-800 font-medium">funeral home in Florida</Link>, <Link href="/funeral-homes/pa" className="text-slate-600 hover:text-slate-800 font-medium">Pennsylvania</Link>, <Link href="/funeral-homes/oh" className="text-slate-600 hover:text-slate-800 font-medium">Ohio</Link>, or any other state should coordinate with the receiving location to ensure someone is available for the delivery.
            </p>
          </section>

          {/* Setting Fees */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Setting Fees</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              One important detail that surprises many families: the VA does not cover the cost of installing the headstone at the gravesite. This installation charge is called the &quot;setting fee.&quot; The setting fee covers the labor and materials required to prepare the foundation, set the headstone or marker in place, and ensure it is level and secure. This work is performed by the cemetery grounds crew or by a private monument contractor.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Setting fees for flat markers typically range from $200 to $350. The process involves digging a shallow bed, pouring a small concrete foundation, and placing the marker flush with the ground. For upright headstones, setting fees are higher, typically $300 to $500, because the foundation must be deeper and more substantial to support a stone weighing over 200 pounds. The exact cost depends on your geographic region, the cemetery&apos;s rates, and whether the cemetery performs the work in-house or subcontracts it to a monument company.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The good news is that many state veterans cemeteries waive the setting fee entirely for government-issued headstones and markers. If the veteran is buried in a state veterans cemetery in <Link href="/funeral-homes/ny" className="text-slate-600 hover:text-slate-800 font-medium">New York</Link>, <Link href="/funeral-homes/il" className="text-slate-600 hover:text-slate-800 font-medium">Illinois</Link>, <Link href="/funeral-homes/ga" className="text-slate-600 hover:text-slate-800 font-medium">Georgia</Link>, or another state with a veterans cemetery, contact the cemetery to ask whether they charge a setting fee for VA headstones. National cemeteries operated by the VA always handle setting at no cost to the family. The setting fee issue only affects veterans buried in private cemeteries and some state-run cemeteries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              To minimize out-of-pocket costs, ask the funeral director or cemetery office for a written quote on setting fees before the headstone arrives. Some monument companies offer discounts for veterans, and some local veterans organizations (such as the VFW or American Legion) may assist with covering the setting fee for families experiencing financial hardship.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Reading */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Reading</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <Link href="/veterans-funeral-benefits" className="text-slate-600 hover:text-slate-800 font-medium">Veterans Funeral Benefits 2026: Complete Guide</Link> &ndash; burial allowance, national cemetery burial, military honors, and all other VA benefits for veteran families.
              </li>
              <li>
                <Link href="/national-cemetery-eligibility" className="text-slate-600 hover:text-slate-800 font-medium">National Cemetery Eligibility</Link> &ndash; who qualifies for burial in a VA national cemetery, including spouses and dependents.
              </li>
              <li>
                <Link href="/what-is-interment" className="text-slate-600 hover:text-slate-800 font-medium">What Is Interment?</Link> &ndash; a plain-language explanation of interment, entombment, and inurnment.
              </li>
              <li>
                <Link href="/glossary" className="text-slate-600 hover:text-slate-800 font-medium">Funeral and Cremation Glossary</Link> &ndash; definitions of key terms used in the funeral industry.
              </li>
            </ul>
          </section>

        </div>
      </main>
    </>
  );
}
