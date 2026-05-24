import Link from 'next/link';
import { Metadata } from 'next';
import BlogFooterLinks from '@/components/BlogFooterLinks';
import Navigation from '@/components/Navigation';
import ObituaryGenerator from '@/components/ObituaryGenerator';

export const metadata: Metadata = {
  title: 'How to Write an Obituary (2026) | Free AI Obituary Generator',
  description: 'Learn how to write a meaningful obituary step by step. Includes 3 complete examples, common mistakes, pricing guide, and a free AI obituary writer.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/how-to-write-an-obituary' },
  openGraph: {
    title: 'How to Write an Obituary: Complete Guide + Free AI Writer',
    description: 'Step-by-step obituary writing guide with 3 examples, common mistakes to avoid, and a free AI obituary generator.',
    url: 'https://funeralhomedirectories.com/blog/how-to-write-an-obituary',
    type: 'article',
    modifiedTime: '2026-05-23T00:00:00.000Z',
  },
};

const faqs = [
  { q: 'How long should an obituary be?', a: 'Most obituaries range from 150 to 400 words. Newspapers charge by the word or line, so shorter is cheaper. Online obituaries on funeral home websites or legacy sites have no word limit, so families often write longer versions for the web and a shorter version for the newspaper.' },
  { q: 'Should I include the cause of death?', a: 'This is completely the family\'s choice. There is no rule requiring it. Common alternatives include "after a long illness," "unexpectedly," "after a courageous battle," or simply omitting it entirely. Many families prefer privacy on this point and regret over-sharing later.' },
  { q: 'How quickly do I need to write an obituary?', a: 'Newspapers usually need the obituary submitted 24 to 48 hours before the desired publication date. Funeral homes typically need the text 1 to 3 days before the service so they can print programs. Online obituaries can be published at any time.' },
  { q: 'Who should write the obituary?', a: 'Usually a close family member writes the first draft. In larger families, one person typically takes the lead and circulates drafts by email or text for input. Some families ask a friend who writes well. Funeral home staff can also help with structure and phrasing.' },
  { q: "What's the difference between an obituary and a death notice?", a: 'A death notice is brief and factual: name, age, date of death, and service information in 50 to 100 words. An obituary is longer and tells the person\'s story: 150 to 400 words covering their life, family, career, and personality. Newspapers charge for both, but death notices cost less.' },
  { q: 'Can I include a photograph?', a: 'Yes. Most newspapers and all online obituary sites support photos. Newspapers usually charge an extra fee ($25 to $100) for photo inclusion. Choose a clear, recent photo where the person looks like themselves. Many families use a photo from a happy occasion.' },
  { q: "What if I can't bring myself to write it?", a: 'You have several options. Ask a close friend or family member who writes comfortably. The funeral home staff can help draft one from facts you provide. Or use a free AI tool like our Obituary Maker, which generates a complete draft from a few details in about 60 seconds. You can then edit it to add your own words.' },
  { q: 'Do I need permission to publish an obituary?', a: 'No formal permission is required, but coordinate with immediate family members on content and timing. Disagreements about what to include (especially around sensitive topics like estranged family members or cause of death) are best resolved before publication. The newspaper will publish whatever the paying party submits.' },
];

export default function HowToWriteAnObituaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "How to Write an Obituary: A Complete Guide + Free AI Obituary Writer",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-03-14", "dateModified": "2026-05-23",
        "url": "https://funeralhomedirectories.com/blog/how-to-write-an-obituary"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "HowTo",
        "name": "How to Write an Obituary",
        "description": "A step-by-step guide to writing a meaningful obituary.",
        "step": [
          { "@type": "HowToStep", "name": "Gather the essential information", "text": "Collect full name, age, dates and locations of birth and death, parents' names, and surviving family members." },
          { "@type": "HowToStep", "name": "Write the life summary", "text": "Cover education, marriage, career, and what the person was known for. Use specific details over generic descriptions." },
          { "@type": "HowToStep", "name": "List the survivors", "text": "Spouse first, then children in birth order with spouses, then grandchildren, then siblings." },
          { "@type": "HowToStep", "name": "Add service information", "text": "Include date, time, and location of visitation and funeral or memorial service. Include cemetery if applicable." },
          { "@type": "HowToStep", "name": "Close with optional details", "text": "Add memorial donation requests, acknowledgments, or a favorite quote if desired." },
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      }) }} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Write an Obituary: A Complete Guide + Free AI Obituary Writer</h1>
              <p className="text-xl text-gray-600 mb-4">What to include, how to structure it, and example opening lines that actually work.</p>
              <p className="text-sm text-gray-500">
                By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
              </p>
            </header>

            {/* Lede (preserved from original) */}
            <section className="mb-10">
              <p className="text-gray-600 mb-4">Writing an obituary for someone you cared about is one of the harder writing tasks you will ever face. You are trying to fit a whole person into a few paragraphs, often within days of losing them, often while running on no sleep. Here is a simple structure that works.</p>
            </section>

            {/* AI tool CTA (preserved) */}
            <div className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-gray-700">Want to skip the blank page? Use our <Link href="/obituary-maker" className="text-slate-700 font-semibold hover:text-slate-900 underline">Free AI Obituary Maker</Link> to generate a complete draft in minutes, then personalize it with your own words.</p>
            </div>

            {/* Section 1: Essential Information (expanded) */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Essential Information</h2>
              <p className="text-gray-600 mb-4">Every obituary opens with the same core facts. The standard formula for the first sentence is: &quot;[Full Legal Name], [age], of [City, State], passed away [day of week or date] at [location or circumstances].&quot; This single sentence tells the reader who died, how old they were, where they lived, and when it happened.</p>
              <p className="text-gray-600 mb-4">Include the date and place of birth in the first or second sentence. If the person used a maiden name, include it in parentheses after the first name: &quot;Margaret Ellen (Sullivan) Thompson.&quot; Nicknames go in quotation marks after the first name: &quot;James &apos;Jimmy&apos; Robert Mitchell.&quot; For veterans, military rank precedes the name: &quot;Staff Sergeant William J. Carter, U.S. Army (Ret.).&quot;</p>
              <p className="text-gray-600 mb-4">Whether to include the cause of death is entirely the family&apos;s decision. There is no requirement. Many families use phrases like &quot;after a long illness,&quot; &quot;unexpectedly,&quot; or &quot;surrounded by family&quot; to communicate context without specifics. Religious families sometimes write &quot;went to be with the Lord&quot; or &quot;returned to Heavenly Father.&quot; All of these are appropriate.</p>
              <div className="bg-gray-50 rounded-lg p-5 mb-4">
                <p className="text-gray-700 italic">&quot;Margaret Ellen (Sullivan) Thompson, 82, of Brentwood, Tennessee, passed away peacefully on Thursday, May 15, 2026, at Williamson Medical Center, surrounded by her family.&quot;</p>
                <p className="text-gray-500 text-sm mt-2">Full name with maiden name, age, city, date, location, and context in one sentence.</p>
              </div>
            </section>

            {/* Section 2: Life Summary (expanded) */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Life Summary</h2>
              <p className="text-gray-600 mb-4">This is the heart of the obituary. Follow a loose chronological structure: birthplace and parents, childhood and education, marriage, career, community involvement, hobbies and passions. For a newspaper obituary, aim for 100 to 150 words in this section. For an online obituary, you have room to go longer.</p>
              <p className="text-gray-600 mb-4">The most common mistake in this section is writing in generalities. &quot;She enjoyed gardening&quot; tells the reader nothing distinctive. &quot;She had the only rose garden in Brentwood that bloomed into November&quot; creates a picture. Specific details are what people remember. Instead of &quot;he was a devoted teacher,&quot; write &quot;he taught ninth-grade algebra at Franklin High School for 28 years and coached the girls&apos; basketball team to three regional titles.&quot;</p>
              <p className="text-gray-600 mb-4">One strong paragraph can capture a life. Here is an example:</p>
              <div className="bg-gray-50 rounded-lg p-5 mb-4">
                <p className="text-gray-700 italic">&quot;Born on June 3, 1943, in Knoxville, Tennessee, to Robert and Dorothy Sullivan, Margaret grew up on a small dairy farm in Knox County. She graduated from Farragut High School in 1961 and earned a nursing degree from the University of Tennessee. She married Thomas R. Thompson on September 14, 1965, at St. Mary&apos;s Catholic Church. Together they raised four children in Brentwood, where Margaret worked as a pediatric nurse at Vanderbilt Children&apos;s Hospital for 30 years. She was known among colleagues for bringing homemade banana bread to every floor on Friday mornings.&quot;</p>
                <p className="text-gray-500 text-sm mt-2">89 words. Birth, education, marriage, career, and one vivid personal detail.</p>
              </div>
            </section>

            {/* Section 3: Survivors (expanded) */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Survivors</h2>
              <p className="text-gray-600 mb-4">The survivors section follows a strict traditional order: surviving spouse first, then children listed in birth order (with their spouses), then grandchildren, then great-grandchildren, then surviving parents (if applicable), then siblings. Each person is typically listed with their city and state.</p>
              <p className="text-gray-600 mb-4">The standard phrasing is: &quot;She is survived by her husband, Thomas R. Thompson of Brentwood, TN; children, Elizabeth (Michael) Davis of Nashville, TN, Robert (Sarah) Thompson of Atlanta, GA, and Catherine Thompson of Austin, TX; six grandchildren; and one great-grandchild.&quot;</p>
              <p className="text-gray-600 mb-4">Step-children, in-laws, and close nieces and nephews are included at the family&apos;s discretion. Ex-spouses are typically omitted unless the family specifically requests inclusion. A separate line covers those who preceded the deceased in death: &quot;She was preceded in death by her parents, Robert and Dorothy Sullivan, and her brother, James R. Sullivan.&quot;</p>
              <p className="text-gray-600 mb-4">Including pets in obituaries is a modern trend. It is increasingly common in online obituaries and celebration-of-life announcements, though less common in traditional newspaper obituaries. If the deceased had a beloved companion animal, a brief mention at the end of the survivors list is acceptable.</p>
            </section>

            {/* Section 4: Service Information (expanded) */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Service Information</h2>
              <p className="text-gray-600 mb-4">Include the specific date, time, and location for each event: visitation (sometimes called calling hours), funeral service or memorial service, graveside committal, and any reception afterward. Use the full address of the funeral home and cemetery so readers can navigate there directly.</p>
              <p className="text-gray-600 mb-4">Example format: &quot;Visitation will be held Friday, May 17, from 4:00 to 7:00 PM at Williamson Memorial Funeral Home, 3009 Columbia Avenue, Franklin, TN 37064. A funeral Mass will be celebrated Saturday, May 18, at 10:00 AM at St. Philip Catholic Church, 113 2nd Avenue South, Franklin, TN. Burial will follow at Williamson Memorial Gardens.&quot;</p>
              <p className="text-gray-600 mb-4">For private services, write: &quot;A private family service will be held. A celebration of life for friends and community will be announced at a later date.&quot; If a livestream is available, include the URL or note that it will be available through the funeral home&apos;s website.</p>
            </section>

            {/* Section 5: Optional Closing (expanded) */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">An Optional Closing</h2>
              <p className="text-gray-600 mb-4">The closing is where the obituary becomes personal. The most common element is a memorial donation request: &quot;In lieu of flowers, memorial contributions may be made to the American Cancer Society&quot; or &quot;Donations in Margaret&apos;s memory may be made to Vanderbilt Children&apos;s Hospital.&quot; Choose an organization that meant something to the deceased.</p>
              <p className="text-gray-600 mb-4">Many families add acknowledgments: &quot;The family wishes to thank the nurses and staff of Alive Hospice for their compassionate care during Margaret&apos;s final weeks.&quot; Others close with a favorite quote, saying, or Bible verse the deceased lived by. Christian closings often include &quot;In God&apos;s care&quot; or a scripture reference. Jewish obituaries may close with &quot;May her memory be a blessing.&quot; Muslim obituaries often include &quot;Inna lillahi wa inna ilayhi raji&apos;un&quot; (To God we belong and to Him we return).</p>
              <p className="text-gray-600 mb-4">If the deceased had a saying they repeated often, a line they were known for, or a philosophy they lived by, this is where it goes. It should feel like the last word belongs to them, not to you.</p>
            </section>

            {/* Section 6: Example Opening Lines (preserved and expanded) */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Example Opening Lines</h2>
              <div className="bg-gray-50 rounded-lg p-5 mb-4">
                <p className="text-gray-700 italic mb-2">&quot;James Earl Mitchell, 78, of Nashville, Tennessee, passed away peacefully at home on March 8, 2026, surrounded by his family. Born in Knoxville on April 12, 1947, Jim spent 32 years as a letter carrier for the U.S. Postal Service and was known to every neighbor on his route by name.&quot;</p>
                <p className="text-gray-500 text-sm">57 words. Full name, age, location, date of death, birthplace, career, and one specific detail about who he was. That is all a first paragraph needs to do.</p>
              </div>
            </section>

            {/* NEW Section: Three Complete Examples */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Three Complete Obituary Examples</h2>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Example 1: Short Newspaper-Style Obituary (~75 words)</h3>
              <div className="bg-gray-50 rounded-lg p-5 mb-4">
                <p className="text-gray-700 italic">&quot;Margaret Ellen (Sullivan) Thompson, 82, of Brentwood, Tennessee, passed away May 15, 2026, at Williamson Medical Center. Born June 3, 1943, in Knoxville to Robert and Dorothy Sullivan. Survived by her husband Thomas; children Elizabeth Davis, Robert Thompson, and Catherine Thompson; six grandchildren. Preceded in death by her brother James Sullivan. Visitation Friday 4 to 7 PM at Williamson Memorial. Funeral Mass Saturday 10 AM at St. Philip Catholic Church. In lieu of flowers, donations to Vanderbilt Children&apos;s Hospital.&quot;</p>
                <p className="text-gray-500 text-sm mt-2">This is the most formal, most economical newspaper format. It conveys all essential facts in roughly 80 words. Many families publish this version in the newspaper and a longer version online.</p>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Example 2: Traditional Newspaper Obituary (~200 words)</h3>
              <div className="bg-gray-50 rounded-lg p-5 mb-4">
                <p className="text-gray-700 italic">&quot;Robert Alan Carter, 71, of Franklin, Tennessee, died unexpectedly on May 10, 2026. Born February 22, 1955, in Memphis, Tennessee, to William and Frances Carter, Robert grew up in the Whitehaven neighborhood and graduated from Whitehaven High School in 1973.</p>
                <p className="text-gray-700 italic mt-2">Robert served four years in the United States Navy before earning a degree in mechanical engineering from Memphis State University. He spent 35 years at General Motors, retiring in 2015 as a plant manager. After retirement, he volunteered weekly at the Williamson County Senior Center and could be found most Saturday mornings at the Franklin Farmers Market.</p>
                <p className="text-gray-700 italic mt-2">He is survived by his wife of 44 years, Sandra (Wilson) Carter; children, Michael (Jennifer) Carter of Nashville and Amanda Carter of Denver, CO; four grandchildren; and his sister, Patricia Owens of Memphis.</p>
                <p className="text-gray-700 italic mt-2">Visitation will be held Tuesday, May 13, from 5:00 to 8:00 PM at Heritage Funeral Home. A celebration of life will be Wednesday, May 14, at 11:00 AM at Grace Community Church. In lieu of flowers, memorial donations may be made to the Williamson County Senior Center.&quot;</p>
                <p className="text-gray-500 text-sm mt-2">This traditional format covers all five sections: essential information, life summary, survivors, service details, and a closing donation request. It works for both newspaper and online publication.</p>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Example 3: Modern Celebration-of-Life Style (~250 words)</h3>
              <div className="bg-gray-50 rounded-lg p-5 mb-4">
                <p className="text-gray-700 italic">&quot;If you ever ate at Linda&apos;s table, you left with a full stomach and a container for the road. Linda Marie Nakamura, 66, of Portland, Oregon, died May 8, 2026, after a long illness, with her daughters beside her.</p>
                <p className="text-gray-700 italic mt-2">Linda was born December 19, 1959, in Honolulu, Hawaii, to George and Yuki Tanaka. She moved to Portland in 1982 and never stopped missing the ocean, though she made up for it by turning her backyard into the most overplanted garden in the Hawthorne neighborhood. She worked as a dental hygienist for 28 years and could talk anyone out of being afraid of the dentist.</p>
                <p className="text-gray-700 italic mt-2">She married David Nakamura in 1985. They raised two daughters who inherited her stubbornness and her laugh. She coached girls&apos; softball for eight seasons, ran the Hawthorne Street Fair bake sale table every year, and was the person her entire block called when they locked themselves out.</p>
                <p className="text-gray-700 italic mt-2">Linda is survived by her husband David; daughters Amy (Brian) Foster and Kayla Nakamura; three grandchildren; and her sister, Diane Tanaka of Honolulu.</p>
                <p className="text-gray-700 italic mt-2">A celebration of life will be held Saturday, May 17, at 2:00 PM at their home. Bring a dish if you want. She would have insisted.&quot;</p>
                <p className="text-gray-500 text-sm mt-2">This modern style leads with personality rather than facts. It works well for online obituaries and celebrations of life where the tone is warm rather than formal.</p>
              </div>
            </section>

            {/* NEW Section: Common Mistakes */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Common Mistakes to Avoid</h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-slate-50 rounded-lg p-4">
                  <p><strong className="text-gray-800">1. Including too much detail about cause of death.</strong> This is optional, and many families regret over-sharing later. &quot;After a long illness&quot; or &quot;unexpectedly&quot; communicates enough.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p><strong className="text-gray-800">2. Forgetting people who should be listed.</strong> Make a complete family tree before writing. Missing a grandchild or sibling causes real hurt. Have at least two family members review the survivors list before submission.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p><strong className="text-gray-800">3. Listing family members in confusing order.</strong> The traditional order is spouse, children (in birth order), grandchildren, siblings, then parents if surviving. Breaking this order without reason creates confusion.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p><strong className="text-gray-800">4. Writing in inconsistent tense.</strong> The biographical narrative should be in past tense throughout. Do not switch between &quot;she was&quot; and &quot;she is&quot; within the same section.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p><strong className="text-gray-800">5. Misspelling names or getting dates wrong.</strong> This sounds obvious, but it happens frequently when families are exhausted and grieving. Have two people independently proofread before submitting to the newspaper.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p><strong className="text-gray-800">6. Submitting too late for the newspaper deadline.</strong> Most papers need 24 to 48 hours notice. Call the newspaper&apos;s obituary desk early to confirm their deadline, even before you finish writing.</p>
                </div>
              </div>
            </section>

            {/* NEW Section: Cost to Publish */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Much Does It Cost to Publish an Obituary?</h2>
              <p className="text-gray-600 mb-4">Newspaper obituary costs vary widely by market. In smaller cities, expect $200 to $500. In major metropolitan papers (New York Times, Los Angeles Times, Chicago Tribune), costs can reach $1,000 to $1,500 or more. Most newspapers charge by the word or by the line, with photos adding $25 to $100 extra.</p>
              <p className="text-gray-600 mb-4">Funeral home websites typically publish obituaries at no additional charge as part of their services. Legacy.com, the largest online obituary aggregator, publishes obituaries submitted by partner funeral homes. Many families publish a shorter version in the newspaper to manage cost and a longer, more personal version online for free.</p>
              <p className="text-gray-600 mb-4">What drives cost: total word count (the biggest factor), photo inclusion, the specific newspaper, day of week (Sunday editions cost more in some markets), and geographic market size. If budget is a concern, write the online version first at whatever length you want, then edit it down for the newspaper.</p>
            </section>

            {/* AI Tool Embed (preserved) */}
            <section className="mb-12">
              <ObituaryGenerator />
            </section>

            {/* FAQ Section */}
            <section className="mb-10 bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map(faq => (
                  <div key={faq.q}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA boxes (preserved) */}
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
              <p className="text-sm text-gray-600 mb-5">Our free AI Eulogy Writer helps you honor your person with the right words.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/eulogy-writer" className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">Use the Free AI Eulogy Writer</Link>
                <Link href="/blog/eulogy-examples" className="inline-block bg-white hover:bg-gray-50 text-slate-700 font-semibold px-5 py-2.5 rounded-lg text-sm border border-slate-300 transition-colors">Browse Eulogy Examples</Link>
              </div>
            </div>

            {/* Related Reading (preserved) */}
            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/obituary-template" className="text-slate-600 hover:text-slate-800 font-medium">Free Obituary Templates: Fill-in-the-Blank Formats &rarr;</Link></li>
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: A Step-by-Step Guide &rarr;</Link></li>
                <li><Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">What to Do When Someone Dies &rarr;</Link></li>
                <li><Link href="/glossary" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Industry Glossary: 115 Terms Explained &rarr;</Link></li>
              </ul>
            </section>

            <BlogFooterLinks />

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes near you</p>
              <p className="text-slate-600 text-sm mb-5">Search 7,395+ funeral homes and cremation providers across all 50 states. Compare prices, services, and locations. Free for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">
                Browse Funeral Homes Near You
              </Link>
            </section>
            <p className="text-sm text-gray-400 mt-8">Last updated: May 2026</p>
          </article>
        </div>
      </main>
    </>
  );
}
