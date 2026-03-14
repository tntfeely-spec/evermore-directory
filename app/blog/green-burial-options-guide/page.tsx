import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Green Burial Options: What It Is, How Much It Costs, and Where to Find Providers | Evermore Directory',
  description: 'A complete guide to green burial -- what it involves, how much it costs compared to conventional burial, what aquamation is, and how to find a certified provider.',
  keywords: 'green burial, natural burial, eco-friendly burial, green burial cost, conservation burial, aquamation, water cremation',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/green-burial-options-guide',
  },
};

export default function GreenBurialOptionsGuidePage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Green Burial Options: What It Is, How Much It Costs, and Where to Find Providers
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                What green burial actually involves, how much it costs, and how to find a certified provider.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span>
                <span>|</span>
                <span>Former Firefighter and Paramedic</span>
                <span>|</span>
                <span>March 2026</span>
              </div>
            </header>

      <section className="mb-10">
        <p className="text-gray-600 mb-4">Green burial has moved from a fringe conversation to a mainstream option in the last decade. More families are asking about it, more cemeteries are offering it, and the costs are often significantly lower than traditional burial. Here is what it actually involves.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is Green Burial?</h2>
        <p className="text-gray-600 mb-4">Green burial is the practice of returning the body to the earth without embalming, without a metal or hardwood casket, and without a concrete vault. The body is typically wrapped in a shroud or placed in a biodegradable container and buried at a depth that allows natural decomposition.</p>
      </section>
      <section className="mb-10 bg-slate-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Makes a Cemetery Green?</h2>
        <p className="text-gray-600 mb-4">The Green Burial Council certifies cemeteries at three levels. A hybrid green cemetery allows green burials in a designated section of a conventional cemetery. A natural burial ground prohibits vaults and embalming throughout the entire property. A conservation burial ground is permanently protected land where burials help fund ecological preservation.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Is Embalming Required?</h2>
        <p className="text-gray-600 mb-4">No. Embalming is not required by law in any U.S. state for a standard burial. A funeral home may suggest it as a matter of course, but you have the right to decline. Refrigeration is the alternative and is entirely adequate for a funeral held within a few days of death.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Much Does Green Burial Cost?</h2>
        <p className="text-gray-600 mb-4">Green burial is almost always less expensive than conventional burial. Typical cost: $1,000 to $4,000 for the burial itself. There is no embalming fee (saving $400 to $800), no concrete vault (saving $1,000 to $1,500), and a shroud or simple casket costs far less than a conventional casket ($200 to $1,500 vs $2,000 to $10,000).</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Aquamation and Other Alternatives</h2>
        <p className="text-gray-600 mb-4">Aquamation, also known as alkaline hydrolysis or water cremation, uses water and an alkaline solution rather than flame. It produces no direct air emissions and is legal in about 25 states including California, Colorado, and Florida. Cost is comparable to conventional cremation: $1,500 to $3,500.</p>
      </section>
      <section className="mb-10 bg-slate-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Find a Green Burial Provider</h2>
        <p className="text-gray-600 mb-4">The Green Burial Council maintains a searchable directory at greenburialcouncil.org. Ask funeral homes specifically about their practices -- do they use refrigeration instead of embalming, what container options do they offer, and do they work with natural burial cemeteries in the area.</p>
      <p className="text-gray-600 mb-4"><Link href="/states" className="text-slate-600 hover:underline">Find funeral homes near you at funeralhomedirectories.com.</Link></p>
      </section>
            <section className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">

              <Link href="/blog/burial-vs-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Burial vs Cremation: Costs, Process and How to Decide</h3>
                <p className="text-sm text-gray-600">A complete side-by-side comparison.</p>
              </Link>
              <Link href="/blog/direct-cremation-vs-traditional-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation vs Traditional Funeral</h3>
                <p className="text-sm text-gray-600">Compare costs, timelines, and services.</p>
              </Link>
              <Link href="/blog/funeral-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">How Much Does a Funeral Cost in 2026?</h3>
                <p className="text-sm text-gray-600">National average costs by service type.</p>
              </Link>
              <Link href="/blog/pre-planning-a-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Pre-Planning a Funeral</h3>
                <p className="text-sm text-gray-600">Why it matters and how to do it.</p>
              </Link>
              </div>
            </section>

            <section className="mt-12 bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Find Funeral Homes Near You</h2>
              <p className="text-gray-600 mb-4">Compare funeral homes offering burial and cremation services across all 50 states.</p>
              <Link href="/states" className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Browse by State
              </Link>
            </section>

            <p className="text-sm text-gray-400 mt-8">Last updated: March 2026</p>
          </article>
        </div>
      </main>
    </>
  );
}
