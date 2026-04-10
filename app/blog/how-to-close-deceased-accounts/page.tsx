import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'How to Close a Deceased Person&apos;s Accounts: A Step-by-Step Guide',
  description: 'Closing a deceased person\'s accounts is one of the most time-consuming tasks after a death. Here is a step-by-step guide covering banks, utilities, subscriptions, and government accounts.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/how-to-close-deceased-accounts' },
};

const faqs = [
  { q: 'How do you close a deceased person\'s bank account?', a: 'To close a deceased person\'s bank account, the executor or administrator of the estate should visit the bank with a certified copy of the death certificate, a copy of the letters testamentary or letters of administration from the probate court, and valid photo identification. The bank will verify the documents, freeze the account, and work with the executor to distribute the remaining funds according to the will or state law. Joint accounts with a surviving co-owner typically pass automatically to the surviving owner without requiring probate.' },
  { q: 'What happens to subscriptions when someone dies?', a: 'Subscriptions do not automatically cancel when someone dies. Streaming services, gym memberships, magazine subscriptions, and other recurring charges will continue to be billed to the deceased person\'s credit card or bank account until they are manually canceled. The executor or a family member should review the deceased person\'s bank and credit card statements to identify all active subscriptions and contact each provider to cancel. Most companies will process the cancellation with a copy of the death certificate.' },
  { q: 'How do you cancel a deceased person\'s Social Security?', a: 'Social Security should be notified as soon as possible after a death. In most cases, the funeral home will report the death to Social Security on behalf of the family. If not, you can call the Social Security Administration at 1-800-772-1213 to report the death. Any Social Security payments received after the date of death must be returned. If the deceased was receiving benefits via direct deposit, the bank will typically return any post death payments to the government automatically.' },
  { q: 'What accounts need to be closed after a death?', a: 'The full list of accounts that may need to be closed or transferred after a death includes bank accounts, credit cards, investment and retirement accounts, insurance policies, utility accounts, phone and internet service, email accounts, social media profiles, streaming services, gym memberships, magazine and newspaper subscriptions, store loyalty programs, and any other accounts tied to the deceased person\'s name. Government accounts such as Social Security, Medicare, the DMV, and voter registration also need to be addressed.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function HowToCloseDeceasedAccountsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Close a Deceased Person&apos;s Accounts: A Step by Step Guide</h1>
              <p className="text-xl text-gray-600 mb-4">After someone dies, their bank accounts, credit cards, subscriptions, and government registrations all need to be addressed. Here is a practical, step by step guide to help you work through the process without missing anything important.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do First Before Closing Accounts</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Before you begin contacting banks, utility companies, and government agencies, you need to gather several key documents. The most important is the death certificate. Order at least 10 to 15 certified copies through the funeral home, as nearly every institution will require one. You will also need the deceased person&apos;s Social Security number, their most recent bank and credit card statements, and any estate planning documents such as a will or trust.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If the deceased had a will, the executor named in the will is the person authorized to manage the estate and close accounts. If there is no will, the probate court will appoint an administrator. Either way, you will need letters testamentary or letters of administration from the probate court, which serve as legal proof that you have the authority to act on behalf of the estate.</p>
              <p className="text-gray-600 leading-relaxed">Take stock of all the accounts you are aware of by reviewing mail, email, bank statements, and the deceased person&apos;s phone for app subscriptions. Create a master list that you can work through systematically. This process will take weeks or months, so staying organized from the start will save you significant stress.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Close Bank Accounts</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Contact each bank where the deceased held an account and notify them of the death. Most banks will require the executor or administrator to visit a branch in person with a certified death certificate, letters testamentary, and valid photo identification. The bank will freeze the account to prevent unauthorized transactions and work with the executor to distribute the remaining funds.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If the account was jointly held with a surviving co-owner, it typically passes to the surviving owner automatically through the right of survivorship. The surviving owner should still notify the bank and remove the deceased person&apos;s name from the account. If the account had a payable on death (POD) designation, the named beneficiary can claim the funds by presenting the death certificate and their identification.</p>
              <p className="text-gray-600 leading-relaxed">Be aware that any outstanding checks, automatic payments, or direct deposits tied to the account may need to be redirected or canceled. The bank can help you identify recurring transactions. Do not close the account immediately if there are still incoming payments, such as a final paycheck or pension payment, that need to be deposited.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Cancel Credit Cards</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Contact each credit card company to report the death and request that the account be closed. You will typically need to provide a certified death certificate and the account number. The credit card company will close the account and issue a final statement. Any remaining balance becomes a debt of the estate, not the responsibility of the surviving family members, unless they were joint account holders.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Authorized users on the account are not responsible for the balance, but they should stop using the card immediately. The executor should review the final statement carefully to identify any fraudulent charges and to ensure all recurring subscriptions have been canceled before the card is closed.</p>
              <p className="text-gray-600 leading-relaxed">If the deceased had rewards points, miles, or cash back accumulated on the card, ask the credit card company about their policy for redeeming these. Some companies will allow the executor to redeem rewards on behalf of the estate, while others forfeit them upon the account holder&apos;s death.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Handle Utilities and Subscriptions</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Utility accounts, including electricity, gas, water, internet, and phone service, should be canceled or transferred to a surviving household member. If the deceased lived alone, these accounts will need to be kept active long enough to maintain the property until it is sold or transferred, and then canceled. Contact each utility provider with a death certificate and request either cancellation or a name change on the account.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Subscriptions are easy to overlook because many are set up as automatic recurring charges. Review the deceased person&apos;s bank and credit card statements for the past three months to identify all subscriptions. Common ones include streaming services, gym memberships, newspaper and magazine subscriptions, cloud storage, and meal delivery services.</p>
              <p className="text-gray-600 leading-relaxed">Contact each subscription provider to cancel. Most will process the cancellation once they receive a death certificate, though some may require additional verification. If you are unable to reach a provider or they refuse to cancel, closing the credit card or bank account that funds the subscription will eventually stop the charges.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Notify Government Agencies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Several government agencies need to be notified after a death. Social Security is typically notified by the funeral home, but if not, call 1-800-772-1213 to report the death. Any benefits received after the date of death must be returned. If the deceased was a veteran, contact the VA at 1-800-827-1000 to stop any disability or pension payments and to inquire about burial benefits.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Contact the state Department of Motor Vehicles to cancel the deceased person&apos;s driver&apos;s license and to prevent identity theft. Notify the local voter registration office to remove the deceased from the voter rolls. If the deceased held a passport, you can return it to the U.S. Department of State, though this is not legally required.</p>
              <p className="text-gray-600 leading-relaxed">The IRS should be notified when the final tax return is filed. The executor is responsible for filing the deceased person&apos;s final federal and state income tax returns, which are due by the regular filing deadline for the year in which the death occurred. If the estate generates income, a separate estate tax return may also be required.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Handle Digital Accounts and Social Media</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Digital accounts present unique challenges because many platforms have their own policies regarding deceased users. Facebook allows accounts to be memorialized or deleted upon request. Google offers an Inactive Account Manager that lets users designate someone to access their data after a period of inactivity. Apple has a Digital Legacy program that allows designated contacts to access a deceased person&apos;s data.</p>
              <p className="text-gray-600 leading-relaxed mb-4">For email accounts, gaining access can be difficult without the password or a legal order. If the deceased used a password manager, locating the master password will give you access to all stored accounts. If not, you may need to contact each email provider individually with a death certificate and legal documentation to request account closure or data access.</p>
              <p className="text-gray-600 leading-relaxed">Consider whether the deceased had any online accounts with financial value, such as cryptocurrency wallets, domain names, or digital marketplaces. These assets are part of the estate and may need to be transferred or liquidated. If you are unsure how to handle digital assets, consult an attorney who specializes in estate planning or digital asset management.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><Link href="/blog/what-to-do-when-someone-dies" className="text-blue-600 hover:underline">What to Do When Someone Dies: A Complete Guide</Link></li>
                <li><Link href="/blog/death-certificate-guide" className="text-blue-600 hover:underline">Death Certificate Guide: How to Get Copies and Why You Need Them</Link></li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Find Funeral Homes in Your Area</h2>
              <p className="text-gray-600 mb-6">Browse trusted funeral homes and cremation providers in your state to find compassionate, affordable care during a difficult time.</p>
              <Link href="/states" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">Browse All States</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
