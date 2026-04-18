import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is Direct Cremation? The Complete 2026 Guide | Evermore Directory',
  description: 'Direct cremation is cremation without a funeral service. Learn how it works, what it costs, what is included, and how to find a provider near you.',
  keywords: 'what is direct cremation, direct cremation definition, direct cremation cost, direct cremation process, cremation without funeral service',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/what-is-direct-cremation',
  },
  openGraph: {
    title: 'What Is Direct Cremation? The Complete 2026 Guide',
    description: 'Direct cremation is cremation without a funeral service. Learn how it works, what it costs, what is included, and how to find a provider near you.',
    url: 'https://funeralhomedirectories.com/blog/what-is-direct-cremation',
    type: 'article',
  },
};

const faqs = [
  {
    q: 'What is direct cremation?',
    a: 'Direct cremation is the cremation of a deceased person without a prior funeral service, viewing, or visitation. The body is transported from the place of death to the crematory, cremated in a simple container, and the ashes are returned to the family. It is the most affordable form of cremation available in the United States.',
  },
  {
    q: 'How much does direct cremation cost?',
    a: 'Direct cremation typically costs between $1,000 and $3,500 in the United States, depending on the provider and location. The national average is approximately $2,000. This is significantly less than a traditional funeral with burial, which averages $7,848 according to the National Funeral Directors Association.',
  },
  {
    q: 'What is included in direct cremation?',
    a: 'A standard direct cremation package includes transportation of the deceased, a basic cremation container (sometimes called an alternative container), the cremation process itself, required permits and paperwork, and return of cremated remains. It does not include embalming, a viewing, a casket, or a formal funeral ceremony.',
  },
  {
    q: 'How long does direct cremation take?',
    a: 'The entire process from death to return of ashes typically takes 5 to 10 business days. The cremation itself takes 2 to 3 hours. Additional time is needed for transportation, permits, and processing. Weekends, holidays, and medical examiner cases can add delays.',
  },
  {
    q: 'Can you have a memorial service after direct cremation?',
    a: 'Yes. Many families choose direct cremation specifically because it allows them to hold a memorial service, celebration of life, or scattering ceremony on their own timeline. There is no requirement to hold the memorial immediately. Families can plan it for weeks, months, or even a year after the cremation.',
  },
  {
    q: 'Is direct cremation disrespectful?',
    a: 'No. Direct cremation is a dignified option chosen by millions of American families each year. It simply means the cremation happens without a formal ceremony beforehand. Families are free to honor their loved one through a memorial service, celebration of life, scattering ceremony, or private remembrance at any time afterward.',
  },
  {
    q: 'What is the difference between direct cremation and regular cremation?',
    a: 'Direct cremation does not include a viewing, visitation, or funeral service before the cremation. Regular or traditional cremation often includes embalming, a visitation or viewing period, a funeral service, and then cremation. Direct cremation is simpler and typically costs $3,000 to $5,000 less than cremation with a full service.',
  },
  {
    q: 'Do I need to buy a casket for direct cremation?',
    a: 'No. Direct cremation uses a basic cremation container, sometimes called an alternative container, which is typically made of cardboard or pressed wood. Federal law (the FTC Funeral Rule) prohibits cremation providers from requiring you to purchase a casket for direct cremation.',
  },
];

export default function WhatIsDirectCremationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "What Is Direct Cremation? The Complete 2026 Guide",
          "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
          "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
          "datePublished": "2026-04-18",
          "dateModified": "2026-04-18",
          "description": "Direct cremation is cremation without a funeral service. Learn how it works, what it costs, what is included, and how to find a provider near you.",
          "url": "https://funeralhomedirectories.com/blog/what-is-direct-cremation",
          "mainEntityOfPage": "https://funeralhomedirectories.com/blog/what-is-direct-cremation"
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://funeralhomedirectories.com/blog" },
            { "@type": "ListItem", "position": 3, "name": "What Is Direct Cremation?" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        }) }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                What Is Direct Cremation? The Complete 2026 Guide
              </h1>
              <p className="text-sm text-gray-500 mb-3">
                By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic | Evermore Directory &middot; Last updated: April 2026
              </p>
              <p className="text-xl text-gray-600">
                Everything you need to know about direct cremation: how it works, what it costs, what is included, and how to find a provider near you.
              </p>
            </header>

            {/* AI-citable definition */}
            <section className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Direct cremation is the cremation of a deceased person without a funeral service, viewing, or visitation beforehand. The body is transported directly from the place of death to the crematory, cremated in a simple container, and the ashes are returned to the family. No embalming, casket, or ceremony is required. It is the most affordable cremation option in the United States, typically costing between $1,000 and $3,500.
              </p>
              <p className="text-gray-600 mb-4">
                More than 60% of Americans now choose cremation over burial, and direct cremation is the fastest growing segment. Families choose it for its simplicity, its affordability, and the flexibility it offers to plan a memorial or celebration of life on their own timeline rather than within days of the death.
              </p>
              <p className="text-gray-600 mb-4">
                As a former firefighter and paramedic, I have been with families in some of the most difficult moments of their lives. I have seen firsthand how the pressure of arranging a funeral within 48 hours adds stress to an already overwhelming situation. Direct cremation removes that pressure. It gives families time to grieve, to gather, and to plan something meaningful when they are ready.
              </p>
            </section>

            {/* How direct cremation differs from traditional */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Direct Cremation Differs from a Traditional Funeral
              </h2>
              <p className="text-gray-600 mb-4">
                A traditional funeral typically includes embalming, a viewing or visitation, a formal ceremony (often at a funeral home or place of worship), and then either burial or cremation. The total cost averages $7,848 for burial and $6,971 for cremation with a service, according to the National Funeral Directors Association.
              </p>
              <p className="text-gray-600 mb-6">
                Direct cremation skips every step except the cremation itself. There is no embalming, no viewing, no formal service, and no casket. This is why the cost difference is so significant.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Feature</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Direct Cremation</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Traditional Funeral</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Typical cost</td><td className="px-4 py-3 text-gray-700">$1,000 to $3,500</td><td className="px-4 py-3 text-gray-700">$7,000 to $12,000+</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Embalming</td><td className="px-4 py-3 text-gray-700">Not required</td><td className="px-4 py-3 text-gray-700">Usually required</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Viewing/Visitation</td><td className="px-4 py-3 text-gray-700">None</td><td className="px-4 py-3 text-gray-700">Typically 1 to 2 days</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Casket</td><td className="px-4 py-3 text-gray-700">Not needed (basic container used)</td><td className="px-4 py-3 text-gray-700">Required ($2,000 to $10,000)</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Formal ceremony</td><td className="px-4 py-3 text-gray-700">None (memorial optional later)</td><td className="px-4 py-3 text-gray-700">Yes, at funeral home or church</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Timeline</td><td className="px-4 py-3 text-gray-700">3 to 7 days total</td><td className="px-4 py-3 text-gray-700">Arrangements within 24 to 48 hours</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Memorial flexibility</td><td className="px-4 py-3 text-gray-700">Any time, any place</td><td className="px-4 py-3 text-gray-700">Usually within days of death</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600">
                For a detailed side-by-side comparison, see our guide to <Link href="/blog/direct-cremation-vs-traditional-funeral" className="text-slate-600 hover:text-slate-800 font-medium">direct cremation vs traditional funeral</Link>.
              </p>
            </section>

            {/* The 5-step process */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The 5 Steps of Direct Cremation
              </h2>
              <p className="text-gray-600 mb-6">
                The direct cremation process is straightforward. Here is exactly what happens from the moment you make the call to the moment you receive your loved one&apos;s ashes.
              </p>

              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Transportation into care</h3>
                  <p className="text-gray-600">The cremation provider sends a team to transport the deceased from the place of death (hospital, home, nursing facility) to their facility. This can happen at any hour. Most providers respond within 1 to 4 hours of the initial call.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Paperwork and permits</h3>
                  <p className="text-gray-600">The provider files the death certificate, obtains the required cremation permit, and handles all legal paperwork. In most states, a waiting period of 24 to 48 hours is required between death and cremation. The provider manages this timeline.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 3: The cremation</h3>
                  <p className="text-gray-600">The body is placed in a basic cremation container (typically cardboard or pressed wood, not a casket) and cremated in a specialized chamber called a retort at approximately 1,400 to 1,800 degrees Fahrenheit. The process takes 2 to 3 hours.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 4: Return of ashes</h3>
                  <p className="text-gray-600">After cremation, the remains are processed into a fine, uniform powder and placed in a temporary urn or container. The ashes are returned to the family, typically within 5 to 10 business days of the death. Most providers offer pickup or shipping.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 5: What comes next</h3>
                  <p className="text-gray-600">Once you receive the ashes, you decide what to do. Options include keeping them in an urn at home, placing them in a columbarium niche, scattering at a meaningful location, dividing among family members, or incorporating them into memorial jewelry, glass art, or a living memorial like a tree planting.</p>
                </div>
              </div>
            </section>

            {/* What's included vs not */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Is Included in Direct Cremation (and What Is Not)
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Typically included</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-green-600 font-bold mr-2">+</span>Transportation from place of death</li>
                    <li className="flex items-start"><span className="text-green-600 font-bold mr-2">+</span>Basic cremation container</li>
                    <li className="flex items-start"><span className="text-green-600 font-bold mr-2">+</span>Cremation process</li>
                    <li className="flex items-start"><span className="text-green-600 font-bold mr-2">+</span>Required permits and filings</li>
                    <li className="flex items-start"><span className="text-green-600 font-bold mr-2">+</span>Return of cremated remains</li>
                    <li className="flex items-start"><span className="text-green-600 font-bold mr-2">+</span>1 to 2 certified death certificates</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Not included</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-red-500 font-bold mr-2">&times;</span>Embalming</li>
                    <li className="flex items-start"><span className="text-red-500 font-bold mr-2">&times;</span>Viewing or visitation</li>
                    <li className="flex items-start"><span className="text-red-500 font-bold mr-2">&times;</span>Casket</li>
                    <li className="flex items-start"><span className="text-red-500 font-bold mr-2">&times;</span>Funeral ceremony or chapel use</li>
                    <li className="flex items-start"><span className="text-red-500 font-bold mr-2">&times;</span>Flowers, programs, or obituary placement</li>
                    <li className="flex items-start"><span className="text-red-500 font-bold mr-2">&times;</span>Decorative urn (temporary container provided)</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600">
                Some providers include additional death certificates or a basic urn in their package price. Others charge separately for each item. Always request an itemized price list before making arrangements.
              </p>
            </section>

            {/* National cost range */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Much Does Direct Cremation Cost?
              </h2>
              <p className="text-gray-600 mb-6">
                Costs vary by state and provider. Here is the general range across the United States.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Service</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Typical Cost Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Direct cremation (all inclusive)</td><td className="px-4 py-3 text-gray-700">$1,000 to $3,500</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">National average</td><td className="px-4 py-3 text-gray-700 font-semibold">Approximately $2,000</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Low cost states (rural South, Midwest)</td><td className="px-4 py-3 text-gray-700">$800 to $1,500</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">High cost states (California, New York, Hawaii)</td><td className="px-4 py-3 text-gray-700">$2,500 to $4,000+</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Additional death certificates</td><td className="px-4 py-3 text-gray-700">$5 to $25 each (varies by state)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Decorative urn (optional)</td><td className="px-4 py-3 text-gray-700">$50 to $500</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 mb-4">
                For a full state-by-state breakdown with actual provider pricing data, see our <Link href="/blog/direct-cremation-cost-by-state" className="text-slate-600 hover:text-slate-800 font-medium">direct cremation cost by state guide</Link>. For general cremation pricing across all types, see <Link href="/blog/cremation-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">cremation costs in 2026</Link>.
              </p>
            </section>

            {/* Who it's right for */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Who Is Direct Cremation Right For?
              </h2>
              <p className="text-gray-600 mb-4">
                Direct cremation is a good fit for families who:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">1.</span>Want the most affordable option available</li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">2.</span>Prefer simplicity and minimal arrangements</li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">3.</span>Plan to hold a memorial or celebration of life at a later date</li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">4.</span>Have a loved one who specifically requested no funeral</li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">5.</span>Need to coordinate with family spread across the country and want time to plan</li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">6.</span>Are environmentally conscious and want a lower impact option</li>
              </ul>
            </section>

            {/* Who it's not right for */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                When Direct Cremation May Not Be the Right Choice
              </h2>
              <p className="text-gray-600 mb-4">
                Direct cremation is not for every family. Consider other options if:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">1.</span>Your family or faith tradition requires a viewing of the body before cremation or burial</li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">2.</span>You want a formal funeral service with the body present</li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">3.</span>Your religion prohibits cremation (some Orthodox Jewish, Islamic, and Eastern Orthodox Christian traditions)</li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">4.</span>The deceased specifically requested a traditional burial</li>
              </ul>
              <p className="text-gray-600">
                For more on how different faiths view cremation, see our guide to <Link href="/blog/cremation-and-religion" className="text-slate-600 hover:text-slate-800 font-medium">cremation and religion</Link>.
              </p>
            </section>

            {/* How to find a provider */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Find a Direct Cremation Provider Near You
              </h2>
              <p className="text-gray-600 mb-4">
                The Evermore Directory lists more than 500 verified direct cremation providers across the United States. You can browse by state and city to compare pricing and contact local providers directly.
              </p>
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 font-semibold mb-3">Start here:</p>
                <ul className="space-y-2">
                  <li>
                    <Link href="/direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">
                      Browse all direct cremation providers by state
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/how-to-choose-direct-cremation-provider" className="text-slate-600 hover:text-slate-800 font-medium">
                      How to choose a direct cremation provider (7 point checklist)
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/what-is-a-cremation-society" className="text-slate-600 hover:text-slate-800 font-medium">
                      What is a cremation society?
                    </Link>
                  </li>
                </ul>
              </div>
              <p className="text-gray-600">
                When comparing providers, request an itemized price list from each one. Under federal law (the FTC Funeral Rule), every cremation provider must give you a General Price List on request. Compare the total cost, ask what is included, and confirm the provider is licensed in your state.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions About Direct Cremation
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Reading */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/direct-cremation-cost-by-state" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Cost by State: 2026 Guide</h3>
                  <p className="text-sm text-gray-600">State-by-state pricing with provider counts and actual cost data.</p>
                </Link>
                <Link href="/blog/direct-cremation-vs-traditional-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation vs Traditional Funeral</h3>
                  <p className="text-sm text-gray-600">A detailed side-by-side comparison of cost, process, and timeline.</p>
                </Link>
                <Link href="/blog/cremation-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Cremation Costs in 2026</h3>
                  <p className="text-sm text-gray-600">Comprehensive pricing guide covering all types of cremation services.</p>
                </Link>
                <Link href="/blog/how-to-choose-direct-cremation-provider" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">How to Choose a Direct Cremation Provider</h3>
                  <p className="text-sm text-gray-600">The 7-point checklist for finding a trustworthy cremation provider.</p>
                </Link>
                <Link href="/blog/how-direct-cremation-works" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">How Direct Cremation Works: The 5 Step Process</h3>
                  <p className="text-sm text-gray-600">A step-by-step walkthrough of what happens from the first call to receiving ashes.</p>
                </Link>
                <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Browse Direct Cremation Providers</h3>
                  <p className="text-sm text-gray-600">Find and compare direct cremation providers in your state and city.</p>
                </Link>
              </div>
            </section>

            <div className="text-center text-sm text-gray-400 mt-12">
              <p>Written by <strong className="text-gray-500">Terry Feely</strong>, former firefighter and paramedic. Terry has firsthand experience helping families navigate end of life decisions and founded Evermore Directory to make funeral planning more transparent.</p>
            </div>

          </article>
        </div>
      </main>
    </>
  );
}
