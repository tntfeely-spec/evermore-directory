import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import InlineLeadSection from '@/components/InlineLeadSection';
import ScrollModal from '@/components/ScrollModal';

export const metadata: Metadata = {
  title: 'Veterans Funeral Benefits 2026: Complete Guide to VA Burial Allowance, National Cemeteries, and Military Honors',
  description: 'VA burial benefits for veterans include up to $2,000 for service-connected deaths, free burial in 131 national cemeteries, military funeral honors, headstones, and burial flags. Complete 2026 guide.',
  alternates: { canonical: 'https://funeralhomedirectories.com/veterans-funeral-benefits' },
  openGraph: {
    title: 'Veterans Funeral Benefits 2026: Complete Guide to VA Burial, Cemeteries, and Military Honors',
    description: 'VA burial benefits for veterans include up to $2,000 for service-connected deaths, free burial in 131 national cemeteries, and military funeral honors.',
    url: 'https://funeralhomedirectories.com/veterans-funeral-benefits',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const stateList = [
  { abbr: 'AL', name: 'Alabama', slug: 'alabama' }, { abbr: 'AK', name: 'Alaska', slug: 'alaska' },
  { abbr: 'AZ', name: 'Arizona', slug: 'arizona' }, { abbr: 'AR', name: 'Arkansas', slug: 'arkansas' },
  { abbr: 'CA', name: 'California', slug: 'california' }, { abbr: 'CO', name: 'Colorado', slug: 'colorado' },
  { abbr: 'CT', name: 'Connecticut', slug: 'connecticut' }, { abbr: 'DE', name: 'Delaware', slug: 'delaware' },
  { abbr: 'FL', name: 'Florida', slug: 'florida' }, { abbr: 'GA', name: 'Georgia', slug: 'georgia' },
  { abbr: 'HI', name: 'Hawaii', slug: 'hawaii' }, { abbr: 'ID', name: 'Idaho', slug: 'idaho' },
  { abbr: 'IL', name: 'Illinois', slug: 'illinois' }, { abbr: 'IN', name: 'Indiana', slug: 'indiana' },
  { abbr: 'IA', name: 'Iowa', slug: 'iowa' }, { abbr: 'KS', name: 'Kansas', slug: 'kansas' },
  { abbr: 'KY', name: 'Kentucky', slug: 'kentucky' }, { abbr: 'LA', name: 'Louisiana', slug: 'louisiana' },
  { abbr: 'ME', name: 'Maine', slug: 'maine' }, { abbr: 'MD', name: 'Maryland', slug: 'maryland' },
  { abbr: 'MA', name: 'Massachusetts', slug: 'massachusetts' }, { abbr: 'MI', name: 'Michigan', slug: 'michigan' },
  { abbr: 'MN', name: 'Minnesota', slug: 'minnesota' }, { abbr: 'MS', name: 'Mississippi', slug: 'mississippi' },
  { abbr: 'MO', name: 'Missouri', slug: 'missouri' }, { abbr: 'MT', name: 'Montana', slug: 'montana' },
  { abbr: 'NE', name: 'Nebraska', slug: 'nebraska' }, { abbr: 'NV', name: 'Nevada', slug: 'nevada' },
  { abbr: 'NH', name: 'New Hampshire', slug: 'new-hampshire' }, { abbr: 'NJ', name: 'New Jersey', slug: 'new-jersey' },
  { abbr: 'NM', name: 'New Mexico', slug: 'new-mexico' }, { abbr: 'NY', name: 'New York', slug: 'new-york' },
  { abbr: 'NC', name: 'North Carolina', slug: 'north-carolina' }, { abbr: 'ND', name: 'North Dakota', slug: 'north-dakota' },
  { abbr: 'OH', name: 'Ohio', slug: 'ohio' }, { abbr: 'OK', name: 'Oklahoma', slug: 'oklahoma' },
  { abbr: 'OR', name: 'Oregon', slug: 'oregon' }, { abbr: 'PA', name: 'Pennsylvania', slug: 'pennsylvania' },
  { abbr: 'RI', name: 'Rhode Island', slug: 'rhode-island' }, { abbr: 'SC', name: 'South Carolina', slug: 'south-carolina' },
  { abbr: 'SD', name: 'South Dakota', slug: 'south-dakota' }, { abbr: 'TN', name: 'Tennessee', slug: 'tennessee' },
  { abbr: 'TX', name: 'Texas', slug: 'texas' }, { abbr: 'UT', name: 'Utah', slug: 'utah' },
  { abbr: 'VT', name: 'Vermont', slug: 'vermont' }, { abbr: 'VA', name: 'Virginia', slug: 'virginia' },
  { abbr: 'WA', name: 'Washington', slug: 'washington' }, { abbr: 'WV', name: 'West Virginia', slug: 'west-virginia' },
  { abbr: 'WI', name: 'Wisconsin', slug: 'wisconsin' }, { abbr: 'WY', name: 'Wyoming', slug: 'wyoming' },
];

const faqs = [
  { q: 'What VA burial benefits are available for veterans?', a: 'Veterans may qualify for a burial allowance (up to $2,000 for service-connected deaths), free burial in a VA national cemetery, a government headstone or marker, a burial flag, military funeral honors, and a Presidential Memorial Certificate. Spouses and eligible dependents may also qualify for burial in a national cemetery.' },
  { q: 'How much does the VA pay for veteran burial?', a: 'For fiscal year 2026, the VA pays up to $2,000 for service-connected deaths, $1,002 for non-service-connected deaths where the veteran was hospitalized by the VA at the time of death, and $300 for non-service-connected deaths without VA hospitalization. A separate plot or interment allowance of $1,002 is available when burial is not in a national cemetery.' },
  { q: 'Is burial in a VA national cemetery free?', a: 'Yes. Eligible veterans receive a gravesite, opening and closing of the grave, perpetual care, a government headstone or marker, and a burial flag at no cost. The family is responsible for transportation of remains to the cemetery and any private funeral home charges.' },
  { q: 'How do I apply for VA burial benefits?', a: 'File VA Form 21P-530EZ (Application for Burial Benefits) online at va.gov, by mail, or through a Veterans Service Organization. You will need the veteran\'s DD-214 discharge papers, death certificate, and burial receipts. For service-connected deaths, there is no time limit to file. For non-service-connected deaths, the claim must be filed within 2 years of burial.' },
  { q: 'Do all veterans qualify for military funeral honors?', a: 'All veterans who served on active duty and were discharged under conditions other than dishonorable are eligible for military funeral honors. At minimum, honors include the folding and presentation of the American flag and the playing of Taps. Full honors with a rifle volley are available for some veterans based on rank and service.' },
  { q: 'Can a veteran\'s spouse be buried in a national cemetery?', a: 'Yes. The spouse or surviving spouse of an eligible veteran can be buried in a VA national cemetery, even if the veteran is not buried there. Minor children and, in some cases, unmarried adult children with disabilities also qualify. There is no separate eligibility application for spouses.' },
  { q: 'What is needed to get a VA headstone or marker?', a: 'File VA Form 40-1330 (Claim for Standard Government Headstone or Marker). The VA provides flat markers, upright headstones, and bronze niche markers at no cost for eligible veterans. The VA also offers a medallion that can be affixed to a privately purchased headstone. Setting fees (installing the headstone at the cemetery) are not covered by the VA.' },
  { q: 'Can I pre-plan VA burial benefits?', a: 'Yes. Veterans can apply for a pre-need burial eligibility determination using VA Form 40-10007. This does not guarantee burial at a specific cemetery but gives the family a documented eligibility decision that speeds the process at the time of death. Many funeral homes that serve military families can assist with pre-need VA paperwork.' },
  { q: 'What if I lost the veteran\'s DD-214?', a: 'You can request a replacement DD-214 from the National Personnel Records Center (NPRC) using Standard Form 180 or through eVetRecs online. Processing takes 10 to 90 days depending on the era of service. A funeral director experienced with veteran burials can sometimes expedite the process through emergency channels.' },
  { q: 'Do VA burial benefits cover cremation?', a: 'Yes. VA burial benefits apply equally to cremation and traditional burial. Cremated remains can be buried in a national cemetery, placed in a columbarium niche, or scattered in a designated area. The burial allowance is the same regardless of whether the veteran chooses cremation or burial.' },
];

export default function VeteransFuneralBenefitsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "Veterans Funeral Benefits 2026: Complete Guide to VA Burial Allowance, National Cemeteries, and Military Honors",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-18", "dateModified": "2026-05-18",
        "url": "https://funeralhomedirectories.com/veterans-funeral-benefits"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Veterans Funeral Benefits" }
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
            <span className="text-gray-600">Veterans Funeral Benefits</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Veterans Funeral Benefits 2026: Complete Guide
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The U.S. Department of Veterans Affairs provides burial benefits to eligible veterans that can cover up to $2,000 of funeral and burial costs for service-connected deaths, free burial in any of 131 VA national cemeteries, a government headstone or marker, a burial flag, and military funeral honors. VA paid burial benefits to more than 84,000 veteran families in 2024, yet thousands of eligible families never file a claim because they do not know these benefits exist.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              As a former firefighter and paramedic, I responded to veteran deaths where the family had no idea the VA would cover burial costs. This guide covers every benefit available in 2026, with current dollar amounts, eligibility rules, application instructions, and links to the actual VA forms. If you are planning a funeral for a veteran, or if you are a veteran pre-planning your own arrangements, this page covers what you need to know.
            </p>
          </section>

          <InlineLeadSection source="general" />

          {/* VA Burial Allowance */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">VA Burial Allowance: 2026 Amounts</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The VA burial allowance is a flat-rate payment to help offset funeral, burial, and transportation costs. The amount depends on the cause of death and whether the veteran was receiving VA care. These rates are effective October 1, 2025 through September 30, 2026.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Benefit Category</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">2026 Amount</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Service-connected death</td><td className="px-4 py-3">$2,000</td><td className="px-4 py-3">No time limit to file</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Non-service-connected (VA hospitalized)</td><td className="px-4 py-3">$1,002</td><td className="px-4 py-3">Must file within 2 years of burial</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Non-service-connected (not hospitalized)</td><td className="px-4 py-3">$300</td><td className="px-4 py-3">Must file within 2 years of burial</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Plot or interment allowance</td><td className="px-4 py-3">$1,002</td><td className="px-4 py-3">When not buried in a national cemetery</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Headstone or marker allowance</td><td className="px-4 py-3">Up to $441</td><td className="px-4 py-3">For already-purchased private headstone</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed">
              For a detailed breakdown of what costs are and are not reimbursed, see our <Link href="/va-burial-allowance-2026" className="text-slate-600 hover:text-slate-800 font-medium">VA Burial Allowance 2026 guide</Link>.
            </p>
          </section>

          {/* Eligibility */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Requirements</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              VA burial benefits are available to veterans who meet the following criteria: they served on active duty, active duty for training, or inactive duty training; they were discharged under conditions other than dishonorable; and they meet minimum service requirements. For veterans who enlisted after September 7, 1980, or officers who entered service after October 16, 1981, the minimum is 24 consecutive months of active duty or the full period for which they were called to active duty.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Reservists and National Guard members who were activated under federal orders and completed their service period are also eligible. Those who died while on active duty, during training, or from a service-connected disability are eligible regardless of length of service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For complete eligibility details including spouse and dependent rules, see our <Link href="/national-cemetery-eligibility" className="text-slate-600 hover:text-slate-800 font-medium">National Cemetery Eligibility guide</Link>.
            </p>
          </section>

          {/* National Cemeteries */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">VA National Cemeteries</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The VA operates 131 national cemeteries across 40 states and Puerto Rico. Of these, 72 are open for new casketed <Link href="/what-is-interment" className="text-slate-600 hover:text-slate-800 font-medium">interments</Link>, 18 accept cremated remains only, and the remainder are closed for new burials but continue to accept subsequent interments for veterans already buried there.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              In addition to VA national cemeteries, 122 state, territorial, and tribal veterans cemeteries operate across 46 states and 3 territories. Between national and state cemeteries, 94 percent of U.S. veterans live within 75 miles of a veterans cemetery.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Burial in a national cemetery is provided at no cost to the veteran. Benefits include the gravesite, opening and closing of the grave, perpetual care, a government headstone or marker, and a burial flag. The family is responsible for funeral home charges and transportation of the remains to the cemetery.
            </p>
            <p className="text-gray-600 leading-relaxed">
              To find cemeteries in your state, select your state below or see our <Link href="/state-veterans-cemeteries" className="text-slate-600 hover:text-slate-800 font-medium">state veterans cemetery guide</Link>.
            </p>
          </section>

          {/* Military Funeral Honors */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Military Funeral Honors</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every eligible veteran is entitled to military funeral honors at no cost. Standard honors include a minimum of two uniformed service members who fold and present the American flag to the next of kin and play Taps (either live or via a high-quality recording). Full honors, available for some veterans based on rank and circumstances, may include a rifle volley, a color guard, a military chaplain, and a caisson-drawn casket.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Honors are coordinated through the funeral home, which contacts the appropriate military branch. Families can also request honors directly by calling the Department of Defense toll-free line at 1-877-MIL-HONR (1-877-645-4667).
            </p>
            <p className="text-gray-600 leading-relaxed">
              For a complete breakdown of what each branch provides, see our <Link href="/military-funeral-honors" className="text-slate-600 hover:text-slate-800 font-medium">Military Funeral Honors guide</Link>.
            </p>
          </section>

          {/* Burial Flag */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Burial Flag</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The VA provides a United States flag at no cost to drape the casket or accompany the urn of an eligible veteran. The flag is presented to the next of kin at the conclusion of the funeral service. Most funeral homes keep burial flags in stock and can provide one immediately, or the family can request one at any VA regional office or U.S. Post Office using VA Form 27-2008.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For details on eligibility, how to request, and proper handling, see our <Link href="/burial-flag-how-to-request" className="text-slate-600 hover:text-slate-800 font-medium">Burial Flag guide</Link>.
            </p>
          </section>

          {/* Headstone and Marker */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Headstone, Marker, or Medallion</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The VA provides headstones, markers, and medallions for eligible veterans at no cost. Options include flat granite or bronze markers, upright marble or granite headstones, and bronze niche markers for <Link href="/glossary#columbarium" className="text-slate-600 hover:text-slate-800 font-medium">columbarium</Link> placement. For veterans buried in private cemeteries with a privately purchased headstone, the VA offers a medallion that can be affixed to the existing stone. The VA also provides a headstone or marker allowance of up to $441 for headstones already purchased privately.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Application is made using VA Form 40-1330. For a complete walkthrough, see our <Link href="/va-headstone-application" className="text-slate-600 hover:text-slate-800 font-medium">VA Headstone Application guide</Link>.
            </p>
          </section>

          {/* Presidential Memorial Certificate */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Presidential Memorial Certificate</h2>
            <p className="text-gray-600 leading-relaxed">
              The VA issues a Presidential Memorial Certificate (PMC) bearing the signature of the current President to honor the memory of eligible deceased veterans. The certificate is available at no cost and there is no limit on the number of copies. Family members, friends, and authorized representatives may apply using VA Form 40-0247 or by contacting the PMC Service at the National Cemetery Administration. Processing typically takes 8 to 12 weeks.
            </p>
          </section>

          {/* Survivor Benefits */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Survivor Benefits Beyond Burial</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In addition to burial benefits, surviving spouses and dependents of veterans may qualify for Dependency and Indemnity Compensation (DIC) if the veteran died from a service-connected condition. DIC pays a monthly benefit to the surviving spouse. Survivors may also qualify for Survivors Pension (for wartime veterans), CHAMPVA health insurance, education benefits, and home loan guaranty benefits.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Social Security Administration also provides a one-time <Link href="/glossary#social-security-death-benefit" className="text-slate-600 hover:text-slate-800 font-medium">death benefit</Link> of $255 to the surviving spouse, which is separate from VA benefits.
            </p>
          </section>

          {/* How to Apply */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Apply for VA Burial Benefits</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Gather documents.</strong> You will need the veteran&apos;s DD-214 (discharge papers), death certificate, proof of burial expenses (receipts from the funeral home and cemetery), and evidence of the veteran&apos;s service-connected disabilities if claiming a service-connected burial allowance.</li>
                <li><strong>2. Complete VA Form 21P-530EZ.</strong> This is the Application for Burial Benefits. You can file online at va.gov, by mail to the VA Pension Management Center, or in person at a VA regional office. A Veterans Service Organization (VSO) such as the VFW, American Legion, or DAV can help you complete the form at no cost.</li>
                <li><strong>3. Submit the claim.</strong> Online filing is fastest. Mail claims should be sent to the VA Pension Management Center in Milwaukee, WI (address on the form). Keep copies of everything you submit.</li>
                <li><strong>4. Wait for a decision.</strong> Processing times vary from 30 to 120 days depending on the type of claim and the completeness of the documentation. Service-connected death claims are typically processed faster.</li>
                <li><strong>5. For national cemetery burial.</strong> Contact the specific national cemetery directly or call the National Cemetery Scheduling Office at 1-800-535-1117. The funeral home can also make this call on the family&apos;s behalf.</li>
              </ol>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-1">Missing the 2-year filing deadline</h3>
                <p className="text-gray-600 text-sm">For non-service-connected deaths, the burial allowance claim must be filed within 2 years of the date of burial. There is no exception. Service-connected claims have no deadline.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-1">Not requesting the plot allowance separately</h3>
                <p className="text-gray-600 text-sm">The $1,002 plot or interment allowance is a separate benefit from the burial allowance. Many families claim only the burial allowance and miss the plot allowance entirely. Both can be claimed on the same form.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-1">Assuming the funeral home handles everything</h3>
                <p className="text-gray-600 text-sm">Funeral homes can help arrange military honors, a burial flag, and a headstone, but the burial allowance claim must be filed by the family or their representative. Most funeral homes do not file this on your behalf.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-1">Not having the DD-214 available</h3>
                <p className="text-gray-600 text-sm">The DD-214 is required for nearly all VA burial benefits. If the family cannot locate it, a replacement can be requested from the National Personnel Records Center, but this takes 10 to 90 days. Pre-planning avoids this delay.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-1">Choosing a funeral home unfamiliar with VA benefits</h3>
                <p className="text-gray-600 text-sm">Not all funeral homes have experience coordinating military honors, VA cemetery logistics, or benefit paperwork. Ask specifically whether they have handled veteran funerals. Browse <Link href="/states" className="text-slate-600 hover:text-slate-800 font-medium">funeral homes in your state</Link> to find experienced providers.</p>
              </div>
            </div>
          </section>

          {/* Deep Dive Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/va-burial-allowance-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">VA Burial Allowance 2026</h3>
                <p className="text-sm text-gray-600">Exact amounts, eligibility, and how to file Form 21P-530EZ.</p>
              </Link>
              <Link href="/national-cemetery-eligibility" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">National Cemetery Eligibility</h3>
                <p className="text-sm text-gray-600">Who qualifies, spouse rules, and what is provided at no cost.</p>
              </Link>
              <Link href="/military-funeral-honors" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Military Funeral Honors</h3>
                <p className="text-sm text-gray-600">What honors include, how to request, and differences by branch.</p>
              </Link>
              <Link href="/burial-flag-how-to-request" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Burial Flag: How to Request</h3>
                <p className="text-sm text-gray-600">Eligibility, where to get the form, and proper handling.</p>
              </Link>
              <Link href="/va-headstone-application" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">VA Headstone Application</h3>
                <p className="text-sm text-gray-600">Options, Form 40-1330 walkthrough, and inscriptions.</p>
              </Link>
              <Link href="/glossary" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Industry Glossary</h3>
                <p className="text-sm text-gray-600">115 funeral terms explained in plain language.</p>
              </Link>
            </div>
          </section>

          {/* State Pages */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Veterans Funeral Benefits by State</h2>
            <p className="text-gray-600 mb-6">Select your state to find VA national cemeteries, state veterans cemeteries, and military-friendly funeral homes near you.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {stateList.map((s) => (
                <Link
                  key={s.slug}
                  href={`/veterans-funeral-benefits/${s.slug}`}
                  className="bg-white rounded-lg border border-gray-200 px-3 py-2.5 text-center text-gray-700 hover:text-slate-700 hover:border-slate-400 hover:shadow-sm transition-all text-sm font-medium"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Find Funeral Homes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Find a Military-Friendly Funeral Home</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Many funeral homes have experience coordinating VA cemetery burials, military honors, and benefit paperwork. When choosing a provider for a veteran, ask whether they routinely handle military funerals and whether they can assist with the DD-214, honors requests, and burial flag. Browse funeral homes in your area through our directory.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/funeral-homes/tn/nashville" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center">
                <h3 className="font-semibold text-slate-600">Nashville, TN</h3>
                <p className="text-xs text-gray-500">Funeral homes near Nashville National Cemetery</p>
              </Link>
              <Link href="/funeral-homes/va/richmond" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center">
                <h3 className="font-semibold text-slate-600">Richmond, VA</h3>
                <p className="text-xs text-gray-500">Funeral homes near Richmond National Cemetery</p>
              </Link>
              <Link href="/funeral-homes/tx/houston" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center">
                <h3 className="font-semibold text-slate-600">Houston, TX</h3>
                <p className="text-xs text-gray-500">Funeral homes near Houston National Cemetery</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10 bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map(faq => (
                <div key={faq.q}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Cost by State</h3>
                <p className="text-sm text-gray-600">VA benefits apply to cremation. Compare pricing from 7,395+ providers.</p>
              </Link>
              <Link href="/what-is-a-graveside-service" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Graveside Service?</h3>
                <p className="text-sm text-gray-600">Common at military funerals, with flag folding and Taps.</p>
              </Link>
              <Link href="/what-is-pre-need-planning" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Pre-Need Planning?</h3>
                <p className="text-sm text-gray-600">Veterans can pre-plan VA burial to reduce family burden.</p>
              </Link>
              <Link href="/funeral-costs" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs by State</h3>
                <p className="text-sm text-gray-600">Understand what the VA allowance covers relative to total costs.</p>
              </Link>
            </div>
          </section>

          <div className="text-center text-sm text-gray-400">
            <p>No popups. No pressure. Built for families.</p>
          </div>
        </div>
      </main>
      <ScrollModal threshold={0.30} delayMs={20000} />
    </>
  );
}
