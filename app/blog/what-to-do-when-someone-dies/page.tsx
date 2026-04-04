import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What to Do When Someone Dies: A Step-by-Step Guide for the First 72 Hours | Evermore Directory',
  description: '',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/what-to-do-when-someone-dies' },
};

export default function WhatToDoWhenSomeoneDiesPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">What to Do When Someone Dies: A Step-by-Step Guide for the First 72 Hours</h1>
              <p className="text-xl text-gray-600 mb-4">In order, without overwhelm. From someone who has been in that room hundreds of times.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span>
                <span>|</span>
                <span>Former Firefighter and Paramedic</span>
                <span>|</span>
                <span>March 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 mb-4">I responded to hundreds of deaths as a firefighter and paramedic. The moment a family realizes what has happened, everything stops. And then someone has to start making calls they do not want to make.</p>
              <p className="text-gray-600 mb-4">This guide covers what needs to happen in the first 72 hours -- in a workable order.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">In the First Hour</h2>
              <p className="text-gray-600 mb-4">If the death was unexpected, call 911. If the death was expected -- a hospice patient at home -- call the hospice nurse first. They will guide you through the process and notify the appropriate parties. Do not call 911 for an expected death under hospice care unless the hospice directs you to.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">In the First Few Hours</h2>
              <p className="text-gray-600 mb-4">Notify close family and close friends. Then contact a funeral home. You do not need to have everything figured out first -- a funeral home can take custody of the body and give you time to make decisions. <Link href="/states" className="text-slate-600 hover:underline">Browse funeral homes by city at funeralhomedirectories.com.</Link> Most have a 24-hour line for exactly this reason.</p>
              <p className="text-gray-600 mb-4">If the deceased was a veteran, tell the funeral home immediately. This affects options and benefits available to the family.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">In the First 24 Hours</h2>
              <p className="text-gray-600 mb-4">Locate important documents: will, trust documents, life insurance policies, military discharge papers if applicable, Social Security card, and birth certificate. Do not rush major decisions. The funeral home can keep the body in their care while you take a day to think through options.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">In the First 48 to 72 Hours</h2>
              <p className="text-gray-600 mb-4">Work with the funeral home to finalize the service. Choose burial or cremation, select a casket or urn, decide on a service format, and confirm a date and location.</p>
              <p className="text-gray-600 mb-4">Order death certificates. Most estates, insurance claims, and financial accounts require an original certified copy. Order at least 10 to 12. Cost is typically $10 to $20 per certificate.</p>
              <p className="text-gray-600 mb-4">Notify the Social Security Administration at 1-800-772-1213. If the deceased was receiving benefits, payments must stop. A surviving spouse may be eligible for an increased benefit.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Can Wait</h2>
              <p className="text-gray-600 mb-4">Settling the estate, closing accounts, and notifying creditors can wait until after the service. Give yourself and your family permission to grieve first.</p>
              <p className="text-gray-600 mb-4">If you are reading this in the middle of it right now -- call the funeral home. Make that one call. Everything else can follow.</p>
            </section>
            <section className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">

                <Link href="/blog/how-to-plan-a-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">How to Plan a Funeral: Step-by-Step</h3>
                  <p className="text-sm text-gray-600">A practical guide from start to finish.</p>
                </Link>
                <Link href="/blog/funeral-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">How Much Does a Funeral Cost?</h3>
                  <p className="text-sm text-gray-600">What families pay for burial and cremation in 2026.</p>
                </Link>
                <Link href="/blog/pre-planning-a-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Pre-Planning a Funeral</h3>
                  <p className="text-sm text-gray-600">The most generous thing you can do for people who will grieve you.</p>
                </Link>
                <Link href="/blog/va-burial-benefits-veterans-guide" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">VA Burial Benefits Guide</h3>
                  <p className="text-sm text-gray-600">If the deceased was a veteran, read this next.</p>
                </Link>
              </div>
            </section>
            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                You Might Also Find Helpful
              </h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: A Step-by-Step Guide &rarr;</Link></li>
                <li><Link href="/blog/funeral-home-red-flags" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Home Red Flags: What to Watch Out For When Grieving &rarr;</Link></li>
                <li><Link href="/blog/burial-vs-cremation" className="text-slate-600 hover:text-slate-800 font-medium">Burial vs Cremation: Costs, Process &amp; How to Decide &rarr;</Link></li>
              </ul>
            </section>
            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes near you</p>
            <p className="text-slate-600 text-sm mb-5">Search 4,800+ funeral homes across all 50 states. Compare prices, services, and locations. Free for families. No referral fees.</p>
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
