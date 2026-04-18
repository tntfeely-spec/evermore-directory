import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Social Security Death Benefit: What Families Can Claim',
  description: 'Social Security pays a one-time death benefit of $255 to eligible surviving spouses or children. Here is who qualifies, how to apply, and what else survivors may be entitled to.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/social-security-death-benefit' },
};

const faqs = [
  { q: 'How much is the Social Security death benefit?', a: 'The Social Security lump sum death payment is $255. This amount has not changed since 1954. It is a one-time payment and is separate from any ongoing survivor benefits that eligible family members may receive. The $255 payment is intended to help with funeral expenses, though it covers only a small fraction of actual funeral costs today.' },
  { q: 'Who can claim the Social Security death benefit?', a: 'The $255 death benefit can only be claimed by a surviving spouse who was living with the deceased at the time of death, or a surviving spouse who was eligible for Social Security benefits on the deceased&apos;s record in the month of death. If there is no eligible surviving spouse, the payment can be made to a child who was eligible for benefits on the deceased&apos;s record. It cannot be paid to funeral homes, friends, siblings, parents, or the estate.' },
  { q: 'How do I apply for the Social Security death benefit?', a: 'You can apply by calling the Social Security Administration at 1-800-772-1213 or by visiting your local Social Security office in person. The application must be filed within two years of the date of death. You will need the deceased&apos;s Social Security number, proof of death (such as a death certificate), and documentation of your relationship to the deceased. You cannot apply online for this specific benefit.' },
  { q: 'Does Social Security pay anything to the estate?', a: 'No. The $255 lump sum death payment is not paid to the deceased&apos;s estate. It can only be paid to an eligible surviving spouse or eligible dependent child. If no one meets the eligibility requirements, the payment is simply not made. This is one of the most commonly misunderstood aspects of the Social Security death benefit.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function SocialSecurityDeathBenefitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Social Security Death Benefit: What Families Can Claim</h1>
              <p className="text-xl text-gray-600 mb-4">Understanding the $255 lump sum death payment, who qualifies for it, and the ongoing survivor benefits that may be available to your family.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">When someone dies, their surviving family members may be entitled to benefits from the Social Security Administration. The most well known is the one-time lump sum death payment of $255, but there are also ongoing monthly survivor benefits that can provide meaningful financial support. Understanding what is available and how to apply can help families access money they are entitled to during a difficult time.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is the Social Security Death Benefit</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The Social Security lump sum death payment (LSDP) is a one-time payment of $255 made to eligible survivors of a deceased worker who paid into Social Security. The payment has been $255 since 1954 and has never been adjusted for inflation. While it was originally intended to help cover funeral costs, it now covers only a tiny fraction of the average funeral expense.</p>
              <p className="text-gray-600 leading-relaxed mb-4">To be eligible, the deceased must have earned enough Social Security credits during their working life. Most workers earn the required credits through regular employment. If the deceased was receiving Social Security benefits at the time of death or had earned at least 40 work credits (approximately 10 years of work), their survivors are likely eligible.</p>
              <p className="text-gray-600 leading-relaxed">The $255 payment is separate from any ongoing monthly survivor benefits. It is a single payment that is applied for and paid once. Many families miss this benefit simply because they do not know it exists or do not realize they need to apply for it separately.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Is Eligible for the $255 Payment</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Eligibility for the $255 lump sum death payment is more restricted than many people expect. The payment can only be made to a surviving spouse who was living with the deceased at the time of death. If the spouse was not living with the deceased, they may still qualify if they were receiving Social Security benefits on the deceased&apos;s record.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If there is no eligible surviving spouse, the payment can go to a child of the deceased who was already receiving Social Security benefits on the deceased&apos;s record in the month of death. This typically means a dependent child under 18, or a child between 18 and 19 who is still in school full time.</p>
              <p className="text-gray-600 leading-relaxed">The payment cannot be made to adult children, parents, siblings, friends, funeral homes, or the estate of the deceased. If no one meets the strict eligibility criteria, the $255 is simply not paid. This surprises many families who assume the money will be available to help with funeral costs regardless of their specific circumstances.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Apply for the Death Benefit</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You must apply for the $255 death payment. It is not issued automatically when someone dies. To apply, call the Social Security Administration at 1-800-772-1213 or visit your local Social Security office in person. The application must be filed within two years of the date of death.</p>
              <p className="text-gray-600 leading-relaxed mb-4">You will need several pieces of information when you apply: the deceased&apos;s Social Security number, the date of death, and a certified copy of the death certificate. You will also need to provide your own Social Security number and documentation of your relationship to the deceased, such as a marriage certificate for a surviving spouse.</p>
              <p className="text-gray-600 leading-relaxed">If the funeral home has already reported the death to Social Security (which is common), the administration may already have the death on file. However, you still need to actively apply for the $255 payment. It will not be sent to you automatically, even if Social Security is aware of the death.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Survivor Benefits Beyond the $255</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The $255 death payment gets the most attention, but the ongoing monthly survivor benefits are far more valuable for most families. A surviving spouse aged 60 or older can receive a percentage of the deceased&apos;s Social Security benefit, ranging from about 71 percent at age 60 to 100 percent at full retirement age. A surviving spouse at any age who is caring for a child under 16 can also receive benefits.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Dependent children under 18 (or up to 19 if still in high school) are eligible for monthly survivor benefits equal to about 75 percent of the deceased parent&apos;s benefit amount. Disabled children may continue to receive benefits into adulthood if the disability began before age 22.</p>
              <p className="text-gray-600 leading-relaxed">In some cases, dependent parents aged 62 or older may also qualify for survivor benefits. The total amount paid to a family is subject to a family maximum, which is typically between 150 and 180 percent of the deceased&apos;s benefit amount. A Social Security representative can calculate the specific amounts your family is entitled to.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Notify Social Security After a Death</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Social Security should be notified of the death as soon as possible. In most cases, the funeral home will report the death to Social Security on your behalf as part of their standard process. However, it is a good idea to confirm that this has been done. If it has not, you can report the death yourself by calling 1-800-772-1213.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Once notified, Social Security will stop the deceased&apos;s monthly benefits. If a benefit payment was made for the month of death or after, it may need to be returned. Social Security benefits are not payable for the month of death, even if the person died on the last day of the month. This catches many families off guard.</p>
              <p className="text-gray-600 leading-relaxed">If the deceased was receiving benefits by direct deposit, contact the bank to notify them of the death as well. Any payments received after the date of death will need to be returned to Social Security. Failing to return these payments can result in an overpayment notice and collection action.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Common Mistakes to Avoid</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The most common mistake is failing to apply for the $255 death payment at all. Many eligible survivors do not know the benefit exists or assume it will be paid automatically. It will not. You must apply, and you must do so within two years of the date of death.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Another mistake is not applying for monthly survivor benefits. Some surviving spouses wait until their own retirement age to file, not realizing they could have been receiving survivor benefits years earlier. If you are a surviving spouse aged 60 or older, or a surviving spouse of any age with a child under 16, contact Social Security to find out what you are entitled to.</p>
              <p className="text-gray-600 leading-relaxed">Finally, be careful about spending or depositing any Social Security payments received after the month of death. These payments must be returned. If the deceased received a payment by direct deposit for the month they died, do not spend that money. Contact Social Security and the bank to arrange for the return of those funds.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">What to Do When Someone Dies</Link></li>
                <li><Link href="/blog/death-certificate-guide" className="text-slate-600 hover:text-slate-800 font-medium">Death Certificate Guide</Link></li>
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