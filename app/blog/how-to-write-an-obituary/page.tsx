import Link from 'next/link';
import { Metadata } from 'next';
import BlogFooterLinks from '@/components/BlogFooterLinks';
import Navigation from '@/components/Navigation';
import ObituaryGenerator from '@/components/ObituaryGenerator';

export const metadata: Metadata = {
  title: 'How to Write an Obituary (2026) | Free AI Obituary Generator',
  description: 'Learn how to write a meaningful obituary step by step. Use our free AI obituary writer to create a personalized tribute in minutes.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/how-to-write-an-obituary' },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Write an Obituary',
    description: 'A step-by-step guide to writing a meaningful obituary, with examples and a free AI obituary generator.',
    step: [
      { '@type': 'HowToStep', name: 'Gather essential information', text: 'Collect the full name, age, date and place of death, date of birth, and surviving family members.' },
      { '@type': 'HowToStep', name: 'Write the life summary', text: 'Cover where the person grew up, their education, career, and what they were known for.' },
      { '@type': 'HowToStep', name: 'List the survivors', text: 'List family members who survive the deceased, starting with spouse, then children, grandchildren, and siblings.' },
      { '@type': 'HowToStep', name: 'Add service information', text: 'Include the date, time, and location of the funeral or memorial service, and any donation requests.' },
      { '@type': 'HowToStep', name: 'Choose a closing', text: 'Optionally end with a meaningful quote, a favorite saying, or a line that captures who the person was.' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Free AI Obituary Writer',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Generate a heartfelt, personalized obituary draft in seconds. Free, no signup required.',
  },
];

export default function HowToWriteAnObituaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Write an Obituary","description":"Step by step guide to writing an obituary that honors a loved one.","step":[{"@type":"HowToStep","position":1,"name":"Gather the essential facts","text":"Collect full name, age, date and place of birth, date and place of death, and names of surviving family members."},{"@type":"HowToStep","position":2,"name":"Write a strong opening sentence","text":"Lead with the person's name, age, and a defining characteristic. Example: John Smith, 78, a lifelong teacher and devoted grandfather, passed away peacefully on April 10, 2026."},{"@type":"HowToStep","position":3,"name":"Share their life story in 2 to 3 paragraphs","text":"Include career highlights, hobbies, passions, achievements, and what they meant to the people around them. Write in third person past tense."},{"@type":"HowToStep","position":4,"name":"List survivors and predeceased family","text":"Name surviving spouse, children, grandchildren, and siblings. Mention those who preceded them in death."},{"@type":"HowToStep","position":5,"name":"Include service details","text":"Add the date, time, and location of the funeral or memorial service. Include visitation hours and burial location if applicable."},{"@type":"HowToStep","position":6,"name":"Add a closing statement","text":"Close with a memorial donation request, a favorite quote, or a simple sentence that captures who they were."}]}) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Write an Obituary: A Complete Guide + Free AI Obituary Writer</h1>
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
            <div className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-gray-700">Want to skip the blank page? Use our <Link href="/obituary-maker" className="text-slate-700 font-semibold hover:text-slate-900 underline">Free AI Obituary Maker</Link> to generate a complete draft in minutes, then personalize it with your own words.</p>
            </div>
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
            <section className="mb-12">
              <ObituaryGenerator />
            </section>

            <div className="mb-6 bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">Need to write an obituary?</p>
              <p className="text-sm text-gray-600 mb-5">Our free AI Obituary Maker generates a complete personalized tribute in minutes.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/obituary-maker" className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">Use the Free AI Obituary Maker</Link>
                <Link href="/blog/obituary-template" className="inline-block bg-white hover:bg-gray-50 text-slate-700 font-semibold px-5 py-2.5 rounded-lg text-sm border border-slate-300 transition-colors">Browse Free Templates</Link>
              </div>
            </div>

            <div className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">Need to write a eulogy?</p>
              <p className="text-sm text-gray-600 mb-5">Our free AI Eulogy Writer helps you honor your loved one with the right words.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/eulogy-writer" className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">Use the Free AI Eulogy Writer</Link>
                <Link href="/blog/eulogy-examples" className="inline-block bg-white hover:bg-gray-50 text-slate-700 font-semibold px-5 py-2.5 rounded-lg text-sm border border-slate-300 transition-colors">Browse Eulogy Examples</Link>
              </div>
            </div>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: A Step-by-Step Guide &rarr;</Link></li>
                <li><Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">What to Do When Someone Dies &rarr;</Link></li>
                <li><Link href="/blog/pre-planning-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">Pre-Planning a Funeral: Why It Matters &rarr;</Link></li>
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
