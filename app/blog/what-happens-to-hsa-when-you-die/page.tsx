import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Happens to Your HSA When You Die? A Guide for Families',
  description: 'An HSA has specific rules when the account holder dies. Here is what happens to the funds, how beneficiaries are affected, and what families need to know.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/what-happens-to-hsa-when-you-die' },
};

const faqs = [
  { q: 'What happens to HSA funds when you die?', a: 'It depends on who is named as the beneficiary. If your spouse is the beneficiary, the HSA becomes their HSA and they can continue using it tax-free for qualified medical expenses. If a non-spouse is the beneficiary, the account closes and the fair market value of the funds becomes taxable income to that person in the year of your death.' },
  { q: 'Can my spouse inherit my HSA?', a: 'Yes. If your spouse is the designated beneficiary, the HSA transfers directly to them and becomes their own HSA. They can continue to use the funds for qualified medical expenses without paying taxes. This is the most tax-advantaged outcome for an inherited HSA.' },
  { q: 'Is HSA money taxable when inherited?', a: 'It depends on the beneficiary. A surviving spouse who inherits the HSA pays no taxes because the account becomes theirs. A non-spouse beneficiary must include the fair market value of the HSA as taxable income on their tax return for the year the account holder died. The account ceases to be an HSA on the date of death for non-spouse beneficiaries.' },
  { q: 'Should I name a beneficiary for my HSA?', a: 'Yes. Naming a beneficiary ensures the funds go to the person you choose without going through probate. If you do not name a beneficiary, the HSA becomes part of your estate, which can delay distribution and create additional tax complications. Review your beneficiary designation periodically, especially after major life events like marriage, divorce, or the birth of a child.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function WhatHappensToHSAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">What Happens to Your HSA When You Die? A Guide for Families</h1>
              <p className="text-xl text-gray-600 mb-4">How Health Savings Account funds are handled after death, what beneficiaries should expect, and how to plan ahead.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">When someone dies, their Health Savings Account does not simply disappear. What happens to the money depends entirely on who is named as the beneficiary and whether that person is a spouse or a non-spouse. Understanding these rules now can save families from unexpected tax bills and administrative headaches later.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is an HSA</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A Health Savings Account (HSA) is a tax-advantaged savings account available to people enrolled in a high-deductible health plan (HDHP). Contributions are tax-deductible, the money grows tax-free, and withdrawals for qualified medical expenses are not taxed. It is one of the most powerful savings vehicles in the tax code.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Unlike a Flexible Spending Account (FSA), an HSA has no &quot;use it or lose it&quot; rule. Funds roll over every year and can accumulate over a lifetime. Many people use their HSA as a long-term savings tool, letting the balance grow for decades and paying current medical expenses out of pocket.</p>
              <p className="text-gray-600 leading-relaxed">Because of this accumulation potential, HSA balances can be substantial at the time of death. Accounts with $50,000, $100,000, or more are not uncommon among people who have contributed consistently and invested the funds over many years.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Happens If Your Spouse Inherits the HSA</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If the account holder names their spouse as the HSA beneficiary, the transfer is seamless. The HSA becomes the surviving spouse&apos;s own HSA on the date of death. There is no taxable event. The spouse can continue using the funds for qualified medical expenses, contribute to it if they have their own HDHP coverage, and let the balance continue to grow tax-free.</p>
              <p className="text-gray-600 leading-relaxed mb-4">The surviving spouse can also use the inherited HSA funds to pay for the deceased&apos;s qualified medical expenses incurred before death, as long as the expenses are paid within one year of the date of death. This includes any final medical bills, hospice charges, or other healthcare costs.</p>
              <p className="text-gray-600 leading-relaxed">This spousal transfer is the most favorable outcome from a tax perspective. If you are married, naming your spouse as your HSA beneficiary is almost always the right move.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Happens If a Non-Spouse Inherits the HSA</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When a non-spouse beneficiary inherits an HSA, the account stops being an HSA as of the date of death. The fair market value of the account on that date becomes taxable income for the beneficiary. They must report it on their tax return for the year the account holder died.</p>
              <p className="text-gray-600 leading-relaxed mb-4">The beneficiary can reduce the taxable amount by any qualified medical expenses of the deceased that they pay within one year of the death. For example, if the HSA had $30,000 and the beneficiary pays $5,000 in the deceased&apos;s final medical bills, they would report $25,000 as taxable income.</p>
              <p className="text-gray-600 leading-relaxed">This tax hit can be substantial, especially for beneficiaries in higher tax brackets. It is one of the reasons financial planners recommend naming a spouse as the primary beneficiary whenever possible, and considering the tax implications carefully when naming a non-spouse.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Name a Beneficiary</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Naming a beneficiary for your HSA is done through your HSA custodian (the bank or financial institution that holds your account). Most custodians provide a beneficiary designation form that you can complete online or by mail. It is separate from your will.</p>
              <p className="text-gray-600 leading-relaxed mb-4">You can name a primary beneficiary and a contingent (backup) beneficiary. If the primary beneficiary predeceases you, the contingent beneficiary receives the funds. If you name no beneficiary at all, the HSA becomes part of your estate and is distributed according to your will or state law, which can trigger probate and additional delays.</p>
              <p className="text-gray-600 leading-relaxed">Review your beneficiary designations regularly. Marriage, divorce, the birth of a child, or the death of a named beneficiary are all events that should prompt a review. Beneficiary designations override your will, so keeping them current is essential.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Including HSA in Estate Planning</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Your HSA should be part of your broader estate plan, not an afterthought. Here are practical steps to ensure your HSA funds are handled the way you intend:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Name your spouse as beneficiary:</strong> This is the most tax-efficient option and allows the funds to continue growing tax-free.</li>
                <li><strong>Keep records of medical expenses:</strong> Even if you do not reimburse yourself now, keeping receipts allows your spouse or estate to claim reimbursement later.</li>
                <li><strong>Coordinate with your financial advisor:</strong> Your HSA should be considered alongside your 401(k), IRA, and other accounts when planning beneficiary designations.</li>
                <li><strong>Inform your family:</strong> Make sure your spouse or executor knows the HSA exists, who the custodian is, and where to find the account information.</li>
                <li><strong>Review annually:</strong> Life changes, and your beneficiary designations should change with it.</li>
              </ul>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/end-of-life-planning-checklist" className="text-slate-600 hover:text-slate-800 font-medium">End of Life Planning Checklist</Link></li>
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step-by-Step</Link></li>
              </ul>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 4,800+ funeral homes across all 50 states. Compare prices, services, and locations. Free for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
