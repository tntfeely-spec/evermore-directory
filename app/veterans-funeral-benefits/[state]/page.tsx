import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import { stateData } from '@/data/veterans-state-data';

type Props = { params: Promise<{ state: string }> };

export async function generateStaticParams() {
  return Object.keys(stateData).map((state) => ({ state }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const data = stateData[stateSlug];
  if (!data) return {};

  return {
    title: `Veteran Funeral Benefits in ${data.name} (2026 Guide)`,
    description: `Veterans in ${data.name} qualify for up to $2,000 in VA burial benefits, free burial in ${data.nationalCemeteries.length} national cemeteries, military funeral honors, and a government headstone. Complete ${data.name} guide.`,
    alternates: { canonical: `https://funeralhomedirectories.com/veterans-funeral-benefits/${stateSlug}` },
    openGraph: {
      title: `Veteran Funeral Benefits in ${data.name} (2026 Guide)`,
      description: `Complete guide to VA burial benefits for veterans in ${data.name}. National cemeteries, burial allowance, military honors, and how to apply.`,
      url: `https://funeralhomedirectories.com/veterans-funeral-benefits/${stateSlug}`,
      siteName: 'Evermore Directory',
      type: 'website',
    },
  };
}

export default async function VeteransStatePage({ params }: Props) {
  const { state: stateSlug } = await params;
  const data = stateData[stateSlug];
  if (!data) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Veteran Funeral Benefits in ${data.name} (2026 Guide)`,
    "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
    "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
    "datePublished": "2026-05-19",
    "dateModified": "2026-05-19",
    "url": `https://funeralhomedirectories.com/veterans-funeral-benefits/${stateSlug}`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
      { "@type": "ListItem", "position": 2, "name": "Veterans Funeral Benefits", "item": "https://funeralhomedirectories.com/veterans-funeral-benefits" },
      { "@type": "ListItem", "position": 3, "name": data.name }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((f: { q: string; a: string }) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/veterans-funeral-benefits" className="text-slate-600 hover:text-slate-800">Veterans Funeral Benefits</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{data.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Veteran Funeral Benefits in {data.name} (2026 Guide)
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          {/* State-specific intro */}
          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed">{data.stateIntro}</p>
          </section>

          {/* 2026 VA Burial Benefit Amounts */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2026 VA Burial Benefit Amounts</h2>
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
            <p className="text-gray-600 text-sm leading-relaxed">
              These are federal benefits available to all eligible veterans regardless of state. For a detailed breakdown of what costs are and are not reimbursed, see our <Link href="/va-burial-allowance-2026" className="text-slate-600 hover:text-slate-800 font-medium">VA Burial Allowance 2026 guide</Link>.
            </p>
          </section>

          {/* VA National Cemeteries */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">VA National Cemeteries in {data.name}</h2>
            {data.nationalCemeteries.length > 0 ? (
              <>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Name</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">City</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.nationalCemeteries.map((cem: { name: string; city: string; status: string }, i: number) => (
                        <tr key={cem.name} className={i % 2 === 1 ? 'bg-gray-50 border-b' : 'border-b'}>
                          <td className="px-4 py-3 font-medium">{cem.name}</td>
                          <td className="px-4 py-3">{cem.city}</td>
                          <td className="px-4 py-3">{cem.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  For full eligibility details, see our <Link href="/national-cemetery-eligibility" className="text-slate-600 hover:text-slate-800 font-medium">National Cemetery Eligibility guide</Link>.
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  There are no VA national cemeteries located in {data.name}. Veterans in {data.name} may use any VA national cemetery in any state. The closest options are typically in neighboring states. Contact the National Cemetery Scheduling Office at 1-800-535-1117 for assistance.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  For full eligibility details, see our <Link href="/national-cemetery-eligibility" className="text-slate-600 hover:text-slate-800 font-medium">National Cemetery Eligibility guide</Link>.
                </p>
              </>
            )}
          </section>

          {/* State Veterans Cemeteries */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">State Veterans Cemeteries in {data.name}</h2>
            {data.stateCemeteries.length > 0 ? (
              <>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Name</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">City</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.stateCemeteries.map((cem: { name: string; city: string }, i: number) => (
                        <tr key={cem.name} className={i % 2 === 1 ? 'bg-gray-50 border-b' : 'border-b'}>
                          <td className="px-4 py-3 font-medium">{cem.name}</td>
                          <td className="px-4 py-3">{cem.city}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Note: State veterans cemeteries may have residency requirements. Contact the cemetery directly to confirm eligibility before making arrangements.
                </p>
              </>
            ) : (
              <p className="text-gray-600 leading-relaxed">
                {data.name} does not currently operate a state veterans cemetery. Veterans in {data.name} are eligible for burial in any VA national cemetery at no cost.
              </p>
            )}
          </section>

          {/* State Veterans Benefits */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.name} Veterans Benefits</h2>
            <p className="text-gray-600 leading-relaxed">{data.stateBenefits}</p>
          </section>

          {/* Eligibility Requirements */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Requirements</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              VA burial benefits are available to veterans who meet the following criteria:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mb-4">
              <li>Served on active duty, active duty for training, or inactive duty training with a discharge under conditions other than dishonorable.</li>
              <li>For veterans who enlisted after September 7, 1980, or officers who entered service after October 16, 1981, a minimum of 24 consecutive months of active duty is required (or the full period for which they were called to active duty).</li>
              <li>Reservists and National Guard members who were activated under federal orders and completed their service period are eligible.</li>
              <li>Spouses, surviving spouses, and minor children of eligible veterans also qualify for burial in a national cemetery.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              For full eligibility details including dependent rules, see our <Link href="/national-cemetery-eligibility" className="text-slate-600 hover:text-slate-800 font-medium">National Cemetery Eligibility guide</Link>.
            </p>
          </section>

          {/* How to Apply */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Apply for VA Burial Benefits in {data.name}</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Gather documents.</strong> You will need the veteran&apos;s DD-214 (discharge papers), death certificate, and burial receipts from the funeral home and cemetery.</li>
                <li><strong>2. File VA Form 21P-530EZ.</strong> This is the Application for Burial Benefits. You can file online at va.gov, by mail to the VA Pension Management Center, or through a Veterans Service Organization (VSO) such as the VFW, American Legion, or DAV.</li>
                <li><strong>3. For national cemetery burial.</strong> Contact the National Cemetery Scheduling Office at 1-800-535-1117. The funeral home can also make this call on the family&apos;s behalf.</li>
                <li><strong>4. Get local assistance.</strong> Contact {data.vaRegionalOffice.name} at {data.vaRegionalOffice.phone} for help with your claim or to connect with a local VSO.</li>
              </ol>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              For a complete walkthrough of the application process, see our <Link href="/va-burial-allowance-2026" className="text-slate-600 hover:text-slate-800 font-medium">VA Burial Allowance 2026 guide</Link>.
            </p>
          </section>

          {/* Military Funeral Honors */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Military Funeral Honors in {data.name}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every eligible veteran in {data.name} is entitled to military funeral honors at no cost. Standard honors include a minimum of two uniformed service members who fold and present the American flag to the next of kin and play Taps. Full honors, available for some veterans based on rank and service, may include a rifle volley, a color guard, and a military chaplain.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Honors are typically requested through the funeral home, which contacts the appropriate military branch. Families can also request honors directly by calling the Department of Defense at 1-877-MIL-HONR (1-877-645-4667).
            </p>
            <p className="text-gray-600 leading-relaxed">
              For details on what each branch provides, see our <Link href="/military-funeral-honors" className="text-slate-600 hover:text-slate-800 font-medium">Military Funeral Honors guide</Link>.
            </p>
          </section>

          {/* Find Funeral Homes */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Funeral Homes in {data.name}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When choosing a funeral home for a veteran, ask whether they routinely handle military funerals and whether they can assist with the DD-214, military honors requests, VA cemetery coordination, and burial flag. Many funeral homes in {data.name} have experience serving military families.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href={`/funeral-homes/${data.abbr.toLowerCase()}`} className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center">
                <h3 className="font-semibold text-slate-600">Browse Funeral Homes in {data.name}</h3>
                <p className="text-xs text-gray-500">View all cities with funeral homes</p>
              </Link>
              <Link href="/states" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center">
                <h3 className="font-semibold text-slate-600">Full Directory by State</h3>
                <p className="text-xs text-gray-500">Browse funeral homes in all 50 states</p>
              </Link>
            </div>
          </section>

          {/* Callout box */}
          <div className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong className="text-gray-900">Looking for the complete guide?</strong> See our <Link href="/veterans-funeral-benefits" className="text-slate-600 hover:text-slate-800 font-medium">Veterans Funeral Benefits 2026: Complete Guide</Link> for detailed information about burial allowances, headstone applications, burial flags, and survivor benefits.
            </p>
          </div>

          {/* FAQ */}
          <section className="mb-10 bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {data.faqs.map((faq: { q: string; a: string }) => (
                <div key={faq.q}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Reading */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/veterans-funeral-benefits" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Veterans Funeral Benefits 2026: Complete Guide</h3>
                <p className="text-sm text-gray-600">Full overview of every VA burial benefit available to veterans and families.</p>
              </Link>
              <Link href="/va-burial-allowance-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">VA Burial Allowance 2026</h3>
                <p className="text-sm text-gray-600">Exact amounts, eligibility, and how to file Form 21P-530EZ.</p>
              </Link>
              <Link href="/military-funeral-honors" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Military Funeral Honors</h3>
                <p className="text-sm text-gray-600">What honors include, how to request, and differences by branch.</p>
              </Link>
              <Link href="/glossary" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Industry Glossary</h3>
                <p className="text-sm text-gray-600">115 funeral terms explained in plain language.</p>
              </Link>
            </div>
          </section>

          <div className="text-center text-sm text-gray-400">
            <p>No popups. No pressure. Built for families.</p>
          </div>
        </div>
      </main>
    </>
  );
}
