import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Military Funeral Honors: Color Guard, Rifle Salute, and Flag Folding Explained | Evermore Directory',
  description: 'A former paramedic explains what military funeral honors involve -- color guard, rifle salute, Taps, and flag presentation -- and exactly how to request them for a veteran.',
  keywords: 'military funeral honors, color guard funeral, rifle salute funeral, flag folding ceremony, veterans funeral honors, how to request military funeral honors',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/military-funeral-honors-color-guard-explained',
  },
};

export default function MilitaryFuneralHonorsColorGuardExplainedPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Military Funeral Honors: Color Guard, Rifle Salute, and Flag Folding Explained
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                What military funeral honors involve and how to request them for a veteran.
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
        <p className="text-gray-600 mb-4">I have stood at the edge of more than a few funeral services over the years. The ones involving military honors are different. There is a precision and a weight to them that I have never seen replicated anywhere else. If you are planning a service for a veteran, here is everything you need to know.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Are Military Funeral Honors?</h2>
        <p className="text-gray-600 mb-4">Military funeral honors are a ceremony provided by the Department of Defense to honor veterans at their burial. By law, any veteran with an honorable or general discharge is entitled to a minimum ceremony at no cost to the family.</p>
      </section>
      <section className="mb-10 bg-slate-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Minimum Standard</h2>
        <p className="text-gray-600 mb-4">Federal law requires that every eligible veteran receive at minimum two uniformed military members and the folding and presentation of an American flag to the next of kin. One of the two members must be from the veteran's own branch of service. A recorded version of Taps may be used if a live bugler is not available.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Full Military Honors</h2>
        <p className="text-gray-600 mb-4">Full military honors include a color guard carrying the national and branch flags, pallbearers in dress uniform, a rifle salute (three volleys fired by a firing party), a live bugler playing Taps, and an officer to present the flag. Full honors are most commonly provided for officers and senior NCOs, but families of any eligible veteran can request them.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Flag Folding and Presentation</h2>
        <p className="text-gray-600 mb-4">The flag is folded 13 times into a tight triangle, with only the blue field and stars visible. It is then presented to the next of kin with the words: "On behalf of the President of the United States, the United States [branch of service], and a grateful nation, please accept this flag as a symbol of our appreciation for your loved one's honorable and faithful service."</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Request Military Funeral Honors</h2>
        <p className="text-gray-600 mb-4">Contact your funeral home director as soon as possible and let them know military honors are requested. The funeral home is responsible for submitting the request to the appropriate military branch. You will need the veteran's DD-214 to confirm eligibility. Requests should be submitted at least 48 hours in advance when possible.</p>
      </section>
      <section className="mb-10 bg-slate-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Honor Guard Organizations</h2>
        <p className="text-gray-600 mb-4">Many veterans service organizations -- the VFW, American Legion, and others -- maintain their own honor guard units that supplement official military honors. Ask your local VFW or American Legion post if they have an honor guard available.</p>
      </section>
            <section className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">

              <Link href="/blog/va-burial-benefits-veterans-guide" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">VA Burial Benefits Guide</h3>
                <p className="text-sm text-gray-600">Every burial benefit available to veterans' families and how to claim them.</p>
              </Link>
              <Link href="/blog/national-cemetery-burial-veterans-free" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">National Cemetery Burial: Free for Veterans</h3>
                <p className="text-sm text-gray-600">How to schedule burial in a national cemetery and what is included.</p>
              </Link>
              <Link href="/blog/va-pre-need-burial-eligibility" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">VA Pre-Need Burial Eligibility</h3>
                <p className="text-sm text-gray-600">Apply for burial eligibility before it is needed.</p>
              </Link>
              <Link href="/blog/what-to-do-when-someone-dies" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What to Do When Someone Dies</h3>
                <p className="text-sm text-gray-600">A step-by-step guide for the first 72 hours.</p>
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
