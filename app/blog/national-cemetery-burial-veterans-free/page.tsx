import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'National Cemetery Burial: How to Bury a Veteran in a Federal Cemetery for Free | Evermore Directory',
  description: 'A complete guide to free burial in a national cemetery for veterans -- who qualifies, what is included at no cost, how to find a cemetery, and how to schedule.',
  keywords: 'national cemetery burial, veterans free burial, national cemetery eligibility, how to bury a veteran free, VA national cemetery',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/national-cemetery-burial-veterans-free',
  },
};

export default function NationalCemeteryBurialVeteransFreePage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                National Cemetery Burial: How to Bury a Veteran in a Federal Cemetery for Free
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Who qualifies, what is covered at no cost, and how to schedule burial in one of 155 national cemeteries.
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
        <p className="text-gray-600 mb-4">One of the most overlooked benefits available to veterans&#39; families is the right to burial in a national cemetery at no cost. No opening fee, no closing fee, no liner cost, no perpetual care fee. For families facing a funeral bill of $8,000 or more, this benefit can change everything.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Is Eligible?</h2>
        <p className="text-gray-600 mb-4">Any veteran discharged under conditions other than dishonorable is eligible. This includes veterans from every branch and every era. Spouses and dependent children of eligible veterans are also eligible for burial in a national cemetery, even if they predecease the veteran.</p>
      </section>
      <section className="mb-10 bg-slate-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is Included at No Cost?</h2>
        <p className="text-gray-600 mb-4">The following are provided at no charge: opening and closing of the grave, a burial liner or vault, a government-provided headstone or grave marker, perpetual care of the gravesite, and scheduling and coordination services. The family is responsible for the cost of the funeral service itself and transportation to the cemetery.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Finding a National Cemetery</h2>
        <p className="text-gray-600 mb-4">There are 155 national cemeteries across 42 states and Puerto Rico. You can search by state or zip code at va.gov/burials-memorials/find-a-cemetery or call the National Cemetery Scheduling Office at 1-800-535-1117.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">State Veterans Cemeteries</h2>
        <p className="text-gray-600 mb-4">Most states operate their own veterans cemeteries, also at little or no cost. Check your state&#39;s Department of Veterans Affairs website for locations and eligibility requirements.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Schedule a Burial</h2>
        <p className="text-gray-600 mb-4">Contact the National Cemetery Scheduling Office at 1-800-535-1117 as soon as possible after the veteran&#39;s death. You will need the veteran&#39;s full name, dates of birth and death, Social Security number, and DD-214. Most national cemeteries can accommodate scheduling within a few days to two weeks.</p>
      </section>
      <section className="mb-10 bg-slate-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Pre-Need Program</h2>
        <p className="text-gray-600 mb-4">The VA Pre-Need Eligibility program allows veterans and spouses to apply for burial eligibility before death occurs. An advance determination means the family does not have to prove eligibility during a time of grief. Apply by submitting VA Form 40-10007 at va.gov or by mail.</p>
      </section>
            <section className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">

              <Link href="/blog/va-burial-benefits-veterans-guide" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">VA Burial Benefits Guide</h3>
                <p className="text-sm text-gray-600">Every burial benefit available to veterans' families.</p>
              </Link>
              <Link href="/blog/military-funeral-honors-color-guard-explained" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Military Funeral Honors Explained</h3>
                <p className="text-sm text-gray-600">Color guard, rifle salute, and flag presentation.</p>
              </Link>
              <Link href="/blog/va-pre-need-burial-eligibility" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">VA Pre-Need Burial Eligibility</h3>
                <p className="text-sm text-gray-600">Apply for burial eligibility in advance.</p>
              </Link>
              <Link href="/blog/funeral-cost-tennessee-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs in Tennessee 2026</h3>
                <p className="text-sm text-gray-600">What Tennessee families pay for burial and cremation.</p>
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
