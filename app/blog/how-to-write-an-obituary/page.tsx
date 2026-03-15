import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Write an Obituary: A Simple Guide With Examples | Evermore Directory',
  description: '',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/how-to-write-an-obituary' },
};

export default function HowToWriteAnObituaryPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Write an Obituary: A Simple Guide With Examples</h1>
              <p className="text-xl text-gray-600 mb-4">What to include, how to structure it, and example opening lines that actually work.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span>
                <span>|</span>
                <span>Former Firefighter and Paramedic</span>
                <span>|</span>
                <span>March 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 mb-4">Writing an obituary for someone you loved is one of the harder writing tasks you will ever face. You are trying to fit a whole person into a few paragraphs, often within days of losing them, often while running on no sleep. Here is a simple structure that works.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Essential Information</h2>
              <p className="text-gray-600 mb-4">Every obituary should include the full name of the deceased, age at death, date and place of death, and date and place of birth. This information appears in the first sentence or two. It is the anchor that tells the reader who this is and when.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Life Summary</h2>
              <p className="text-gray-600 mb-4">This is the core of the obituary. Cover where the person grew up, their education if relevant, their career, the things they were known for, and any organizations or communities they were part of. Use specific details over general descriptions. Specifics are what people remember.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Survivors</h2>
              <p className="text-gray-600 mb-4">List the people who survive the deceased, starting with spouse or partner, then children, then grandchildren, then siblings. You may also note who preceded the deceased in death.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Service Information</h2>
              <p className="text-gray-600 mb-4">Include the date, time, and location of visitation and the funeral or memorial service. If there will be a graveside service, include the cemetery name and address. If the family prefers a private service, simply note that.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">An Optional Closing</h2>
              <p className="text-gray-600 mb-4">Some families add a line about memorial donations in lieu of flowers, a favorite quote, or a closing sentence that captures something about who the person was. If there is something the deceased said often, something they believed, or something that made them unmistakably themselves -- this is where it goes.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Example Opening Lines</h2>
              <div className="bg-gray-50 rounded-lg p-5 mb-4">
                <p className="text-gray-700 italic mb-2">&quot;James Earl Mitchell, 78, of Nashville, Tennessee, passed away peacefully at home on March 8, 2026, surrounded by his family. Born in Knoxville on April 12, 1947, Jim spent 32 years as a letter carrier for the U.S. Postal Service and was known to every neighbor on his route by name.&quot;</p>
                <p className="text-gray-500 text-sm">57 words. Full name, age, location, date of death, birthplace, career, and one specific detail about who he was. That is all a first paragraph needs to do.</p>
              </div>
            </section>
            <section className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">

                <Link href="/blog/what-to-do-when-someone-dies" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">What to Do When Someone Dies</h3>
                  <p className="text-sm text-gray-600">A step-by-step guide for the first 72 hours.</p>
                </Link>
                <Link href="/blog/traditional-vs-celebration-of-life" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Traditional Funeral vs. Celebration of Life</h3>
                  <p className="text-sm text-gray-600">How to choose the right service for your family.</p>
                </Link>
                <Link href="/blog/how-to-plan-a-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">How to Plan a Funeral: Step-by-Step</h3>
                  <p className="text-sm text-gray-600">A practical guide from notification to final arrangements.</p>
                </Link>
                <Link href="/blog/pre-planning-a-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Pre-Planning a Funeral</h3>
                  <p className="text-sm text-gray-600">How to record your wishes before they are needed.</p>
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
