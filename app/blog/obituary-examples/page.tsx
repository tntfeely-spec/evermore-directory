import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Obituary Examples: Good, Simple, and Meaningful Templates (2026)',
  description: 'Looking for obituary examples to help you write one? Here are sample obituaries in different styles including short, traditional, and celebration of life.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/obituary-examples' },
};

const faqs = [
  { q: 'What is a good opening line for an obituary?', a: 'A good opening line states the person&apos;s full name, age, and the city where they lived, followed by the date of death. For example: "John Michael Carter, 74, of Austin, Texas, passed away peacefully on March 12, 2026." Some families prefer a warmer opening like "With heavy hearts, the family of John Carter announces his passing." Choose whichever feels right for the person and the family.' },
  { q: 'How long should an obituary be?', a: 'A short obituary is 100 to 200 words. A standard obituary is 200 to 500 words. A longer tribute or celebration of life obituary may run 500 to 1,000 words. Most newspapers charge by the word or line, so length may also be influenced by cost. Online obituaries have no length restrictions.' },
  { q: 'What should you not include in an obituary?', a: 'Avoid including the cause of death unless the family specifically wants to share it. Do not include details about family conflicts, financial information, or the home address of surviving family members. Also avoid overly generic language that could describe anyone. The best obituaries are specific and personal.' },
  { q: 'Can you write your own obituary in advance?', a: 'Yes, and many people do. Writing your own obituary ensures it reflects your voice, includes the details you consider most important, and spares your family from having to write one during a difficult time. Store it with your other end of life documents and let your family know where to find it.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function ObituaryExamplesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Obituary Examples: Good, Simple, and Meaningful Templates</h1>
              <p className="text-xl text-gray-600 mb-4">Sample obituaries in different styles to help you write one that truly honors your loved one.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Writing an obituary for someone you love is one of the most difficult writing tasks you will ever face. It helps to see examples. Below are three complete sample obituaries in different styles, along with guidance on what makes each one work.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Makes a Good Obituary</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A good obituary does more than list facts. It captures something true about the person. The best obituaries include specific details that bring the person to life on the page: a hobby they loved, a phrase they always said, the way they made people feel. These details are what readers remember.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Structure helps too. Most obituaries follow a familiar pattern: full name and age, date and place of death, a summary of their life, surviving family members, and service details. Within that structure, you have room to make it personal. The examples below show how different families approached the same basic format in their own way.</p>
              <p className="text-gray-600 leading-relaxed">There is no wrong way to write an obituary as long as it is honest and respectful. A short, simple obituary can be just as meaningful as a long, detailed one. What matters is that it sounds like the person it describes.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Obituary Example</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 border-l-4 border-slate-400 text-gray-700 leading-relaxed italic">
                <p className="mb-4">&quot;Margaret Ann Sullivan, 82, of Portland, Oregon, passed away on February 18, 2026, surrounded by her family. Born in Spokane, Washington, Margaret was a retired schoolteacher who spent 35 years shaping young minds at Lincoln Elementary.&quot;</p>
                <p className="mb-4">&quot;She loved crossword puzzles, hummingbirds, and her legendary banana bread, which she baked for every neighbor who moved onto her street. She is survived by her daughter, Karen Sullivan of Portland; her son, Michael Sullivan of Boise; and four grandchildren. She was preceded in death by her husband, Robert, in 2019.&quot;</p>
                <p>&quot;A private family service will be held. In lieu of flowers, donations may be made to the Portland Public Library.&quot;</p>
              </blockquote>
              <p className="text-gray-500 text-sm mt-3">This obituary is approximately 130 words. It is concise but includes personal details (crossword puzzles, banana bread) that make Margaret feel real to anyone reading it.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Traditional Full Obituary Example</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 border-l-4 border-slate-400 text-gray-700 leading-relaxed italic">
                <p className="mb-4">&quot;James Edward Carter, 71, of Nashville, Tennessee, died on March 3, 2026, after a courageous battle with pancreatic cancer. Born on June 14, 1954, in Memphis, Tennessee, to Edward and Dorothy Carter, James grew up on his family&apos;s farm in Shelby County before attending the University of Tennessee, where he earned a degree in civil engineering.&quot;</p>
                <p className="mb-4">&quot;James spent his career building bridges, both literally and figuratively. He worked for 38 years with the Tennessee Department of Transportation, overseeing the construction and maintenance of dozens of bridges and highways across the state. His colleagues knew him as a man who showed up early, left late, and never asked anyone to do something he was not willing to do himself.&quot;</p>
                <p className="mb-4">&quot;Outside of work, James was a devoted husband, father, and grandfather. He coached Little League for 12 years, served as a deacon at First Baptist Church, and could be found most Saturday mornings at his workbench in the garage, building something for someone. He made rocking chairs for each of his grandchildren and a porch swing for every neighbor who asked.&quot;</p>
                <p className="mb-4">&quot;He is survived by his wife of 46 years, Linda Carter; his children, Sarah Carter Thompson (David) of Knoxville and James Carter Jr. (Emily) of Nashville; and five grandchildren: Lily, Owen, Grace, Ethan, and Sophie. He was preceded in death by his parents and his brother, William Carter.&quot;</p>
                <p>&quot;A celebration of life service will be held on March 8, 2026, at 11:00 AM at First Baptist Church, 108 Main Street, Nashville. In lieu of flowers, the family requests donations to the Pancreatic Cancer Action Network.&quot;</p>
              </blockquote>
              <p className="text-gray-500 text-sm mt-3">This obituary is approximately 280 words. It follows a traditional structure while including personal details that make James memorable: the bridges, the rocking chairs, the early mornings.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Celebration of Life Obituary Example</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 border-l-4 border-slate-400 text-gray-700 leading-relaxed italic">
                <p className="mb-4">&quot;If you knew Diane Reeves, you knew her laugh. It was the kind that started in her belly and filled every room she walked into. Diane, 64, of San Diego, California, died on January 22, 2026, doing what she always did best: making plans. She had just booked a trip to Portugal with her best friend when she suffered a sudden cardiac event at home.&quot;</p>
                <p className="mb-4">&quot;Diane was born on August 3, 1961, in Chicago, Illinois. She moved to California in 1985 and never looked back, though she never stopped talking about deep dish pizza. She worked in real estate for 30 years, not because she loved houses but because she loved people and their stories. Every open house was a chance to meet someone new.&quot;</p>
                <p className="mb-4">&quot;She was a terrible cook and a great dancer. She read three books a week. She called her mother every single day until her mother passed in 2020. She believed that dessert should always come first and that there was no problem that could not be improved by a walk on the beach.&quot;</p>
                <p className="mb-4">&quot;She is survived by her daughter, Emma Reeves; her son, Jack Reeves; her sister, Laura Reeves Finch; and a wide circle of friends who all believed they were her best friend, because she made every person feel that way.&quot;</p>
                <p>&quot;A celebration of life will be held on February 1, 2026, at Sunset Cliffs in San Diego. Wear something colorful. Bring a story. No black allowed.&quot;</p>
              </blockquote>
              <p className="text-gray-500 text-sm mt-3">This obituary is approximately 260 words. It breaks from the traditional format by leading with personality rather than facts, which is appropriate for a celebration of life style tribute.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Personalizing Any Obituary</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Start with a specific detail or story rather than a generic statement. &quot;Margaret loved crossword puzzles&quot; is better than &quot;Margaret was a wonderful person.&quot;</li>
                <li>Include at least one thing the person was known for, whether it was a skill, a habit, a phrase, or a quality</li>
                <li>Mention relationships by name when possible, as it personalizes the obituary and acknowledges specific people who mattered</li>
                <li>Read it out loud before publishing. If it sounds like it could describe anyone, add more specific details</li>
                <li>Do not feel pressured to include the cause of death. That is the family&apos;s choice and either approach is appropriate</li>
                <li>If the person had a sense of humor, let that come through. A warm, funny obituary can be a beautiful tribute</li>
              </ul>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary</Link></li>
                <li><Link href="/blog/eulogy-for-friend-samples" className="text-slate-600 hover:text-slate-800 font-medium">Eulogy for a Friend: Samples and Tips</Link></li>
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
