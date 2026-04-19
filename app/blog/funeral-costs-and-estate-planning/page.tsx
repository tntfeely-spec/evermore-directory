import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Funeral Costs and Estate Planning: What Families Need to Know (2026) | Evermore Directory',
  description: 'Funeral costs are typically the first expense paid from an estate during probate. Learn who pays, how reimbursement works, and how pre-planning protects your family.',
  keywords: 'funeral costs estate planning, who pays for funeral, funeral expenses probate, estate pays for funeral, funeral reimbursement from estate',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/funeral-costs-and-estate-planning',
  },
  openGraph: {
    title: 'Funeral Costs and Estate Planning: What Families Need to Know (2026)',
    description: 'Funeral costs are typically the first expense paid from an estate during probate. Learn who pays, how reimbursement works, and how pre-planning protects your family.',
    url: 'https://funeralhomedirectories.com/blog/funeral-costs-and-estate-planning',
    type: 'article',
  },
};

const faqs = [
  {
    q: 'Who is legally responsible for paying funeral costs?',
    a: 'The person who signs the funeral home contract is legally responsible for payment. In most cases, that person is a spouse, adult child, or executor of the estate. The estate can reimburse the person who paid, but the funeral home looks to the contract signer for payment, not the estate directly.',
  },
  {
    q: 'Are funeral expenses paid before other debts in probate?',
    a: 'Yes, in most states. Funeral and burial expenses are typically given the highest or second highest priority in probate, meaning they are paid from the estate before credit card debt, medical bills, and other unsecured obligations. The exact priority ranking varies by state.',
  },
  {
    q: 'How long does it take to get reimbursed for funeral costs from an estate?',
    a: 'Reimbursement typically takes 3 to 12 months, depending on the complexity of the estate and the state probate process. Simple estates with a will and clear assets may settle in 3 to 6 months. Complex estates with disputes, multiple creditors, or real estate can take 12 months or longer.',
  },
  {
    q: 'What happens if the estate cannot cover funeral costs?',
    a: 'If the estate has insufficient funds to cover funeral costs, the person who signed the funeral home contract remains responsible for payment. Options include negotiating a payment plan with the funeral home, applying for state or county indigent burial assistance, veterans burial benefits (if applicable), crowdfunding, or choosing a lower cost option like direct cremation.',
  },
  {
    q: 'Can you use a deceased person\'s bank account to pay for their funeral?',
    a: 'In most states, banks freeze accounts upon notification of death. However, many states have provisions that allow a surviving spouse or executor to access limited funds for funeral expenses before full probate is granted. Some states allow up to $5,000 to $15,000 to be released for funeral costs with a death certificate and proof of relationship. Check your state\'s small estate or summary administration rules.',
  },
  {
    q: 'Does life insurance cover funeral costs?',
    a: 'Life insurance proceeds go directly to the named beneficiary and are not part of the probate estate. The beneficiary can use the funds for any purpose, including funeral costs. However, life insurance payouts typically take 2 to 6 weeks, so someone usually needs to pay for the funeral upfront and be reimbursed from the insurance proceeds later.',
  },
  {
    q: 'How does pre-planning a funeral protect the estate?',
    a: 'A pre-paid funeral plan removes funeral costs from the estate entirely because the services have already been purchased. This means the estate assets are preserved for heirs, the family avoids the stress of financial decisions during grief, and the funeral costs are locked in at today\'s prices rather than inflated future prices.',
  },
  {
    q: 'Are funeral costs tax deductible?',
    a: 'Funeral costs are generally not deductible on a personal income tax return. However, if the estate pays the funeral costs and files an estate tax return (IRS Form 706), the funeral expenses can be deducted from the gross estate. This only applies to estates large enough to require an estate tax filing, which in 2026 means estates exceeding $13.61 million for individuals.',
  },
];

export default function FuneralCostsAndEstatePlanningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Funeral Costs and Estate Planning: What Families Need to Know in 2026",
          "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
          "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
          "datePublished": "2026-04-19",
          "dateModified": "2026-04-19",
          "description": "Funeral costs are typically the first expense paid from an estate during probate. Learn who pays, how reimbursement works, and how pre-planning protects your family.",
          "url": "https://funeralhomedirectories.com/blog/funeral-costs-and-estate-planning",
          "mainEntityOfPage": "https://funeralhomedirectories.com/blog/funeral-costs-and-estate-planning"
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
            { "@type": "ListItem", "position": 3, "name": "Funeral Costs and Estate Planning" }
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
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        }) }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Funeral Costs and Estate Planning: What Families Need to Know in 2026
              </h1>
              <p className="text-sm text-gray-500 mb-3">
                By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic | Evermore Directory &middot; Last updated: April 2026
              </p>
              <p className="text-xl text-gray-600">
                How funeral costs interact with estates, probate, and family finances, and what you can do now to protect your family from financial stress after a death.
              </p>
            </header>

            {/* AI-citable opening */}
            <section className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Funeral costs in the United States are typically the first expense paid from a deceased person&apos;s estate during probate. In most states, funeral and burial expenses hold the highest or second highest priority among estate claims, meaning they are paid before credit card debt, medical bills, and other unsecured obligations. The average funeral costs $7,848 for burial and $6,971 for cremation with a service, according to the National Funeral Directors Association. When a family member pays these costs out of pocket, the estate can reimburse them, but the process typically takes 3 to 12 months depending on the complexity of probate.
              </p>
              <p className="text-gray-600 mb-4">
                As a former firefighter and paramedic, I have been with families in the immediate aftermath of a death. The financial questions come fast: Who pays for the funeral? Can we access the bank account? Will the estate cover this? This guide answers those questions clearly so you can make informed decisions during a difficult time.
              </p>
            </section>

            {/* Who pays legally */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Who Pays for the Funeral, Legally?
              </h2>
              <p className="text-gray-600 mb-4">
                The person who signs the funeral home contract is legally obligated to pay. This is a critical distinction that many families miss. The funeral home does not bill the estate directly. It bills the individual who authorized the services.
              </p>
              <p className="text-gray-600 mb-4">
                In practice, this means a spouse, adult child, or other family member signs a contract with the funeral home, pays for services (or arranges payment), and then seeks reimbursement from the estate if one exists. If there is no estate, or the estate has insufficient assets, the contract signer remains responsible.
              </p>
              <p className="text-gray-600 mb-4">
                The executor or personal representative of the estate has a fiduciary duty to pay legitimate estate debts, including funeral expenses. But the executor must first be appointed by the probate court, which can take weeks. During that gap, someone in the family typically covers the cost upfront.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Important distinction</h3>
                <p className="text-gray-600 text-sm">This guide provides general reference information about funeral costs and estate administration. It is not legal advice. Estate and probate laws vary significantly by state. Consult an estate attorney in your state for guidance on your specific situation.</p>
              </div>
            </section>

            {/* Priority in probate */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Priority of Funeral Expenses in Probate
              </h2>
              <p className="text-gray-600 mb-4">
                Every state has a statutory priority list that determines the order in which an estate&apos;s debts are paid. Funeral and burial expenses are almost always at or near the top of this list. This means that even if the estate owes money to credit card companies, hospitals, or other creditors, the funeral bill gets paid first.
              </p>
              <p className="text-gray-600 mb-4">
                The typical probate priority order in most states is:
              </p>
              <ol className="space-y-2 text-gray-700 mb-6 list-decimal list-inside">
                <li>Estate administration costs (court fees, attorney fees, executor compensation)</li>
                <li>Funeral and burial expenses</li>
                <li>Federal tax obligations</li>
                <li>Last illness medical expenses</li>
                <li>State and local tax obligations</li>
                <li>Secured debts (mortgages, car loans)</li>
                <li>Unsecured debts (credit cards, personal loans, medical bills)</li>
              </ol>
              <p className="text-gray-600 mb-4">
                In some states, funeral expenses share the top priority position with administration costs. In others, funeral costs are explicitly ranked first. The practical effect is the same: the funeral gets paid before unsecured creditors.
              </p>
              <p className="text-gray-600">
                However, there is usually a cap on the amount the estate will prioritize for funeral expenses. Many states set a &quot;reasonable&quot; funeral cost threshold, which can range from $5,000 to $15,000 depending on the jurisdiction. Expenses above that threshold may be treated as a general estate claim with lower priority.
              </p>
            </section>

            {/* Reimbursement process */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Reimbursement from the Estate Works
              </h2>
              <p className="text-gray-600 mb-4">
                If you paid for a funeral out of pocket, you can file a claim against the estate for reimbursement. Here is how the process typically works.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">Step 1: Gather documentation</h3>
                  <p className="text-gray-600 text-sm">Keep the funeral home invoice, proof of payment (bank statement, credit card receipt, check image), and the death certificate. You will need all of these to file your claim.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">Step 2: File a creditor claim with the probate court</h3>
                  <p className="text-gray-600 text-sm">Submit a formal claim to the probate court or directly to the executor/personal representative. Include your documentation and the total amount paid. Most states have a deadline for filing claims, typically 3 to 12 months after the executor is appointed.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">Step 3: Wait for the executor to process the claim</h3>
                  <p className="text-gray-600 text-sm">The executor reviews all claims, verifies them, and pays them in priority order from estate assets. Funeral expenses are at or near the top, so they are typically among the first claims paid.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">Step 4: Receive payment</h3>
                  <p className="text-gray-600 text-sm">The executor issues payment from the estate account. Timeline varies: simple estates may pay within 3 to 6 months, while complex estates with disputes or real estate sales can take 12 months or longer.</p>
                </div>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b-2 border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Funeral Type</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Typical Cost Range</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Typical Reimbursement Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Direct cremation</td><td className="px-4 py-3 text-gray-700">$1,000 to $3,500</td><td className="px-4 py-3 text-gray-700">3 to 6 months</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Cremation with memorial service</td><td className="px-4 py-3 text-gray-700">$3,500 to $7,000</td><td className="px-4 py-3 text-gray-700">3 to 9 months</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Traditional burial</td><td className="px-4 py-3 text-gray-700">$7,000 to $12,000</td><td className="px-4 py-3 text-gray-700">6 to 12 months</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Full funeral with burial and cemetery</td><td className="px-4 py-3 text-gray-700">$10,000 to $20,000+</td><td className="px-4 py-3 text-gray-700">6 to 18 months</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic">
                Reimbursement timelines are estimates based on typical probate durations. Actual timelines depend on estate complexity, state law, and whether the will is contested.
              </p>
            </section>

            {/* State-by-state variations */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                State-by-State Variations: What You Need to Know
              </h2>
              <p className="text-gray-600 mb-6">
                Probate rules and funeral expense priority vary by state. Here is a summary for the five most populous states.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">Texas</h3>
                  <p className="text-gray-600 text-sm">Texas ranks funeral expenses as the first priority in probate (Texas Estates Code Section 355.102). The state also allows a small estate affidavit for estates under $75,000, which can speed up access to funds. Community property rules mean a surviving spouse may have immediate access to joint accounts.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">California</h3>
                  <p className="text-gray-600 text-sm">California gives funeral expenses priority after administrative costs (California Probate Code Section 11420). The state allows banks to release up to $5,000 for funeral costs with a small estate affidavit (form DE-310) if the total estate is under $184,500. Independent administration (IAEA) can also speed the process.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">Florida</h3>
                  <p className="text-gray-600 text-sm">Florida prioritizes funeral expenses after administrative costs and any amounts due to the surviving spouse or children under the homestead exemption (Florida Statutes Section 733.707). Florida does not have a state income tax, which simplifies some estate administration, but probate can still take 6 to 12 months.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">New York</h3>
                  <p className="text-gray-600 text-sm">New York gives funeral expenses top priority up to a &quot;reasonable&quot; amount (New York Surrogate&apos;s Court Procedure Act Section 1811). The state allows a voluntary administrator process for small estates under $50,000, and banks may release funds for funeral costs with proper documentation.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">Illinois</h3>
                  <p className="text-gray-600 text-sm">Illinois ranks funeral expenses as the second priority after administrative costs (755 ILCS 5/18-10). The state has a small estate affidavit process for estates under $100,000, which can bypass formal probate entirely and provide faster access to estate funds for funeral reimbursement.</p>
                </div>
              </div>
            </section>

            {/* When costs exceed estate value */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                When Funeral Costs Exceed the Estate Value
              </h2>
              <p className="text-gray-600 mb-4">
                If the deceased had little or no assets, the estate cannot cover the funeral. In these cases, the person who signed the funeral home contract is responsible for the full amount. This is a common situation, and there are several paths forward.
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">1.</span><span>Negotiate a payment plan with the funeral home. Most funeral directors will work with families on monthly payments.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">2.</span><span>Choose a lower cost option. <Link href="/blog/what-is-direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">Direct cremation</Link> costs $1,000 to $3,500, compared to $7,000 to $12,000 for a traditional funeral.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">3.</span><span>Apply for state or county indigent burial assistance. Every state has a program, though funding and eligibility vary.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">4.</span><span>Check for veterans benefits. The VA provides a burial allowance of $2,000 to $3,000+ for eligible veterans.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">5.</span><span>Use crowdfunding platforms like GoFundMe. Funeral campaigns are among the most successful categories on these platforms.</span></li>
              </ul>
              <p className="text-gray-600">
                For a full guide to financial assistance options, see our post on <Link href="/blog/what-happens-to-debt-when-you-die" className="text-slate-600 hover:text-slate-800 font-medium">what happens to debt when you die</Link>.
              </p>
            </section>

            {/* Pre-planning protects the estate */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Pre-Planning Protects the Estate and the Family
              </h2>
              <p className="text-gray-600 mb-4">
                A pre-paid funeral plan removes funeral costs from the estate equation entirely. The services are purchased in advance at today&apos;s prices, so no one needs to file a claim, wait for probate, or worry about whether the estate can cover the cost.
              </p>
              <p className="text-gray-600 mb-4">
                Pre-planning also protects Medicaid eligibility. In most states, pre-paid funeral plans are exempt from Medicaid spend-down requirements, meaning the funds set aside for funeral costs are not counted as assets when determining eligibility for long-term care benefits.
              </p>
              <p className="text-gray-600 mb-4">
                There are three common ways to pre-plan:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">1.</span><span><strong>Pre-paid funeral contract.</strong> You pay the funeral home directly and lock in today&apos;s prices. Funds are held in a state-regulated trust or insurance-backed account until needed.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">2.</span><span><strong>Funeral insurance (final expense insurance).</strong> A small whole life insurance policy ($5,000 to $25,000) with the funeral home named as beneficiary. Premiums are fixed and the policy cannot be cancelled for nonpayment after a certain period.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">3.</span><span><strong>Payable-on-death (POD) bank account.</strong> A dedicated savings account with the funeral home or a family member named as the POD beneficiary. The funds transfer immediately upon death without going through probate.</span></li>
              </ul>
              <p className="text-gray-600">
                For more on pre-planning options, see our guides to <Link href="/blog/pre-planning-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">pre-planning a funeral</Link> and <Link href="/blog/best-prepaid-funeral-plans" className="text-slate-600 hover:text-slate-800 font-medium">the best prepaid funeral plans</Link>.
              </p>
            </section>

            {/* What to do if you can't afford it during probate */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What to Do If You Cannot Afford a Funeral While Probate Is Pending
              </h2>
              <p className="text-gray-600 mb-4">
                Probate can take months. The funeral needs to happen within days. This creates a real financial gap for many families. Here are the practical options.
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">1.</span><span><strong>Check for a payable-on-death account or life insurance.</strong> These bypass probate entirely and can provide funds within days to weeks.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">2.</span><span><strong>Request early release of estate funds.</strong> Many states allow the executor to petition the court for emergency release of funds to cover funeral costs before the full probate process is complete.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">3.</span><span><strong>Use the small estate affidavit process.</strong> If the estate qualifies (thresholds range from $50,000 to $184,500 depending on the state), you may be able to access funds without formal probate.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">4.</span><span><strong>Choose <Link href="/blog/what-is-direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">direct cremation</Link>.</strong> At $1,000 to $3,500, this is the most affordable option and gives families time to plan a memorial later when finances are clearer.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">5.</span><span><strong>Ask the funeral home about deferred payment.</strong> Some funeral homes will accept a signed agreement to pay from estate proceeds once probate is complete, particularly if you can provide documentation of estate assets.</span></li>
              </ul>
            </section>

            {/* The paperwork */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Paperwork: What You Need for Estate Reimbursement
              </h2>
              <p className="text-gray-600 mb-4">
                To successfully claim funeral expense reimbursement from an estate, you will need the following documents.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b-2 border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Document</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">What It Is</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Where to Get It</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Certified death certificate</td><td className="px-4 py-3 text-gray-600">Official record of death issued by the state</td><td className="px-4 py-3 text-gray-600">Funeral home orders on your behalf, or from state vital records office</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Letters testamentary / letters of administration</td><td className="px-4 py-3 text-gray-600">Court document authorizing the executor to act on behalf of the estate</td><td className="px-4 py-3 text-gray-600">Probate court in the county where the deceased lived</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Funeral home invoice</td><td className="px-4 py-3 text-gray-600">Itemized bill showing all charges, including the General Price List items</td><td className="px-4 py-3 text-gray-600">The funeral home that provided services</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Proof of payment</td><td className="px-4 py-3 text-gray-600">Bank statement, credit card receipt, or cancelled check showing you paid</td><td className="px-4 py-3 text-gray-600">Your bank or credit card company</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Creditor claim form</td><td className="px-4 py-3 text-gray-600">Official form to submit your reimbursement request to the estate</td><td className="px-4 py-3 text-gray-600">Probate court clerk or the estate attorney</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600">
                Order at least 10 certified death certificates. You will need them for the bank, insurance companies, Social Security, the DMV, and other institutions. Most states charge $5 to $25 per copy. For a complete checklist, see our guide to <Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">what to do when someone dies</Link>.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions: Funeral Costs and Estate Planning
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
                <Link href="/blog/what-to-do-when-someone-dies" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">What to Do When Someone Dies: Complete Checklist</h3>
                  <p className="text-sm text-gray-600">Step-by-step guide covering the first 48 hours through estate settlement.</p>
                </Link>
                <Link href="/blog/funeral-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs in 2026: What to Expect</h3>
                  <p className="text-sm text-gray-600">Average funeral prices by type, with cost breakdowns and money-saving tips.</p>
                </Link>
                <Link href="/blog/pre-planning-a-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Pre-Planning a Funeral: A Complete Guide</h3>
                  <p className="text-sm text-gray-600">How to pre-plan, pre-pay, and lock in funeral costs to protect your family.</p>
                </Link>
                <Link href="/blog/best-prepaid-funeral-plans" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Best Prepaid Funeral Plans</h3>
                  <p className="text-sm text-gray-600">Compare the top prepaid funeral plan providers and how each one works.</p>
                </Link>
                <Link href="/blog/what-happens-to-debt-when-you-die" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">What Happens to Debt When You Die?</h3>
                  <p className="text-sm text-gray-600">How debts are handled in probate, what heirs are responsible for, and what creditors can claim.</p>
                </Link>
                <Link href="/blog/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Direct Cremation? The Complete 2026 Guide</h3>
                  <p className="text-sm text-gray-600">The most affordable funeral option, from process to pricing.</p>
                </Link>
                <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Browse Direct Cremation Providers</h3>
                  <p className="text-sm text-gray-600">Compare direct cremation providers by state and city.</p>
                </Link>
              </div>
            </section>

            <div className="text-center text-sm text-gray-400 mt-12">
              <p>Written by <strong className="text-gray-500">Terry Feely</strong>, former firefighter and paramedic. This guide provides general information about funeral costs and estate administration. It is not legal advice. Consult an estate attorney for guidance specific to your state and situation.</p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
