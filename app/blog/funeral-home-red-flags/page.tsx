import Link from 'next/link';
import { Metadata } from 'next';
import BlogFooterLinks from '@/components/BlogFooterLinks';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Funeral Home Red Flags: What to Watch Out For When Grieving | Evermore Directory',
  description: '',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/funeral-home-red-flags' },
};

export default function FuneralHomeRedFlagsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Home Red Flags: What to Watch Out For When Grieving</h1>
              <p className="text-xl text-gray-600 mb-4">The warning signs that matter most -- from a former paramedic who has seen what happens when families are not protected.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span>
                <span>|</span>
                <span>Former Firefighter and Paramedic</span>
                <span>|</span>
                <span>March 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 mb-4">The funeral industry is regulated by the FTC Funeral Rule, which gives families significant protections. Most funeral homes operate with genuine respect for families and follow the law. But not all of them do. And the people most vulnerable to bad practices are grieving, have never done this before, and are making decisions under time pressure they have never experienced.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">They Refuse to Give You a Price List</h2>
              <p className="text-gray-600 mb-4">The FTC Funeral Rule requires every licensed funeral home to provide an itemized General Price List on request. If they tell you prices depend on the situation or try to get you to come in first, that is a red flag. A reputable funeral home will email or read you their price list over the phone without hesitation.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">They Tell You Embalming Is Required</h2>
              <p className="text-gray-600 mb-4">Embalming is not required by law in any state for a standard burial or cremation. It may be required in specific circumstances -- if the body is being transported across state lines or if there is a significant delay. A funeral home that tells you embalming is required without explaining the specific legal reason is adding an unnecessary charge.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">They Pressure You to Decide Immediately</h2>
              <p className="text-gray-600 mb-4">You do not have to select a casket, confirm a service format, or make any major decisions the day someone dies. A reputable funeral home will take custody of the body and give you time. Pressure to make decisions before you are ready -- especially financial decisions -- is a warning sign.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Contract Is Unclear or Changes at Signing</h2>
              <p className="text-gray-600 mb-4">Every charge should be itemized before you sign. If fees appear in the contract that were not discussed, ask for a written explanation before signing. The Funeral Rule gives you the right to select only the services you want. A package that bundles services you did not request is not compliant with FTC regulations.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">They Discourage Comparison Shopping</h2>
              <p className="text-gray-600 mb-4">You are entitled to call more than one funeral home. A funeral home that makes you feel guilty for asking -- implying it is disrespectful to your loved one -- is not acting in good faith. A funeral home confident in their service and pricing welcomes comparison.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What To Do If Something Feels Wrong</h2>
              <p className="text-gray-600 mb-4">Trust your instincts. You can move the body to a different funeral home if no contract has been signed. File a complaint with your state&#39;s funeral regulatory board if you believe a violation occurred. The FTC also accepts complaints at ftc.gov.</p>
              <p className="text-gray-600 mb-4"><Link href="/states" className="text-slate-600 hover:underline">Browse and compare funeral homes in your city at funeralhomedirectories.com.</Link></p>
            </section>
            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: A Step-by-Step Guide &rarr;</Link></li>
                <li><Link href="/blog/funeral-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">How Much Does a Funeral Cost in 2026? &rarr;</Link></li>
                <li><Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">What to Do When Someone Dies &rarr;</Link></li>
              </ul>
            </section>

            <BlogFooterLinks />

            <section className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">

                <Link href="/blog/what-to-do-when-someone-dies" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">What to Do When Someone Dies</h3>
                  <p className="text-sm text-gray-600">A step-by-step guide for the first 72 hours.</p>
                </Link>
                <Link href="/blog/funeral-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">How Much Does a Funeral Cost in 2026?</h3>
                  <p className="text-sm text-gray-600">Know what fair pricing looks like before you call.</p>
                </Link>
                <Link href="/blog/direct-cremation-vs-traditional-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation vs Traditional Funeral</h3>
                  <p className="text-sm text-gray-600">Compare your options before you choose.</p>
                </Link>
                <Link href="/blog/pre-planning-a-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Pre-Planning a Funeral</h3>
                  <p className="text-sm text-gray-600">Remove the pressure from your family's worst day.</p>
                </Link>
              </div>
            </section>
            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes near you</p>
            <p className="text-slate-600 text-sm mb-5">Search 5,100+ funeral homes and cremation providers across all 50 states. Compare prices, services, and locations. Free for families. No referral fees.</p>
            <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">
              Browse Funeral Homes Near You
            </Link>
          </section>
            <p className="text-sm text-gray-400 mt-8">Last updated: March 2026</p>
          </article>
        </div>
      </main>
    </>
  );
}
