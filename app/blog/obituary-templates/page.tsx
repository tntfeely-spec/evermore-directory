import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Obituary Templates: Examples for Every Relationship and Situation',
  description: 'A good obituary template gives you a structure to start with and fill in the details that made your loved one unique. Here are templates for parents, spouses, young people, and more.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/obituary-templates' },
};

const faqs = [
  { q: 'What is a good obituary template?', a: 'A good obituary template provides a clear structure that covers the essential elements while leaving room for personalization. It should include the full name of the deceased, their age, the date and place of death, a brief life story, surviving family members, and service details. The best templates guide you through each section with prompts or blanks to fill in rather than giving you generic text to copy. A template saves time during a difficult moment and ensures you do not accidentally leave out important information.' },
  { q: 'How long should an obituary be?', a: 'For a newspaper obituary, 200 to 400 words is typical and often necessary to keep costs manageable, since most newspapers charge by the word or line. For an online obituary or memorial page, 500 to 800 words gives you more room to share stories, accomplishments, and personality details that bring the person to life. There is no hard rule, and some families write much longer tributes for online platforms where space is unlimited. Write what feels right and then edit for length based on where it will be published.' },
  { q: 'What do you write in an obituary for someone with no family?', a: 'An obituary for someone with no surviving family should focus on the person themselves, their life story, their interests, their career, and the communities they were part of. Instead of listing survivors, you can mention friends, neighbors, coworkers, organizations, or causes that were important to them. Phrases like "will be remembered by the many friends and colleagues who knew them" or "leaves behind a legacy of service to their community" acknowledge connections without requiring a list of family names. Every person has a story worth telling, regardless of their family situation.' },
  { q: 'Can an obituary be funny?', a: 'Absolutely. A funny or lighthearted obituary can be a beautiful reflection of the person who died, especially if they were known for their humor, wit, or irreverence. Some of the most widely shared and beloved obituaries in recent years have been humorous ones that captured the personality of the deceased in a way that made readers laugh and feel connected. The key is that the humor should be authentic to who the person was. If they would have appreciated a joke in their obituary, there is no reason not to include one.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function ObituaryTemplatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Obituary Templates: Examples for Every Relationship and Situation</h1>
              <p className="text-xl text-gray-600 mb-4">A good obituary template gives you a structure to start with and fill in the details that made your loved one unique. Here are templates for parents, spouses, young people, and more.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Use a Template</h2>
              <p className="text-gray-600 leading-relaxed mb-4">An obituary template is not meant to be copied word for word. It is a framework that gives you a starting point when you are sitting down to write something meaningful during one of the most difficult times in your life. The brackets and blanks show you where to insert the specific details that made your person who they were. Once you fill in those details, the obituary becomes entirely your own.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Start by reading through the template that best matches your situation. Then set it aside and jot down a few notes about the person: their personality, a favorite story, what mattered to them, what they would want people to remember. When you come back to the template, weave those personal details into the structure. That combination of structure and personal touch is what makes a good obituary.</p>
              <p className="text-gray-600 leading-relaxed">You do not need to use every element in the template. If a section does not apply or does not feel right, skip it. The templates below are guides, not rules. The most important thing is that the finished piece sounds like it was written by someone who knew and loved the person it describes.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Long Should an Obituary Be</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The length of an obituary depends on where it will be published. Newspaper obituaries are typically 200 to 400 words because most papers charge by the word or by the line, and costs can add up quickly. At $50 to $1,000 or more for a print obituary, brevity has a practical financial incentive. For newspapers, focus on the essentials: name, age, date of passing, a brief summary of their life, survivors, and service information.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Online obituaries and memorial pages offer much more flexibility. A length of 500 to 800 words gives you room to include stories, personality details, career highlights, and the kind of specifics that help people feel like they truly knew the person. Many funeral home websites, memorial platforms, and social media pages allow unlimited length at no additional cost.</p>
              <p className="text-gray-600 leading-relaxed">If you are writing for both print and online, consider creating a short version for the newspaper and a longer, more detailed version for the online memorial. This gives you the best of both worlds without spending a fortune on newspaper space.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Template for a Mother</h2>
              <blockquote className="border-l-4 border-blue-300 pl-6 py-4 bg-gray-50 rounded-r-lg text-gray-600 leading-relaxed mb-4">
                <p className="mb-4">[Full Name], [age], of [City, State], passed away [peacefully/suddenly/after a courageous battle with illness] on [date]. Born on [birth date] in [birthplace] to [parents&apos; names], she grew up in [location] and [brief childhood or education detail].</p>
                <p className="mb-4">[First name] was a devoted mother to [children&apos;s names] and a loving [grandmother/great-grandmother] to [grandchildren&apos;s names or number]. She spent her career as a [occupation] and was known for [a defining quality or contribution]. Her home was always [a detail about her home life, hospitality, cooking, or warmth].</p>
                <p className="mb-4">She is survived by [list of survivors]. She was preceded in death by [names].</p>
                <p>[Service type] will be held at [time] on [date] at [location]. In lieu of flowers, the family requests donations to [organization or cause].</p>
              </blockquote>
              <p className="text-gray-600 leading-relaxed">This template works for mothers of any age and background. Replace the bracketed items with specific details, and add a sentence or two about her personality, hobbies, or the way she made people feel. Those personal touches are what transform a template into a tribute.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Template for a Father</h2>
              <blockquote className="border-l-4 border-blue-300 pl-6 py-4 bg-gray-50 rounded-r-lg text-gray-600 leading-relaxed mb-4">
                <p className="mb-4">[Full Name], [age], of [City, State], passed away on [date]. Born [birth date] in [birthplace], he was the son of [parents&apos; names]. He graduated from [school] and went on to [career or military service summary].</p>
                <p className="mb-4">[First name] married [spouse&apos;s name] on [date], and together they built a life in [location]. He was a proud father to [children&apos;s names] and [grandfather] to [grandchildren]. He was known for [a defining characteristic, hobby, or passion], and anyone who knew him would tell you [a brief personal detail or anecdote].</p>
                <p className="mb-4">He is survived by [list of survivors]. He was preceded in death by [names].</p>
                <p>Services will be held at [location] on [date] at [time]. The family welcomes [flowers, donations to a specific cause, or other requests].</p>
              </blockquote>
              <p className="text-gray-600 leading-relaxed">For fathers, consider including details about their work ethic, their role in the community, or the way they showed up for their family. Even a single specific sentence about how he spent his weekends or what he loved to talk about can make the obituary feel deeply personal.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Template for a Husband</h2>
              <blockquote className="border-l-4 border-blue-300 pl-6 py-4 bg-gray-50 rounded-r-lg text-gray-600 leading-relaxed mb-4">
                <p className="mb-4">[Full Name], [age], beloved husband of [spouse&apos;s name], passed away on [date] in [City, State]. Born on [birth date] in [birthplace], he [brief early life or education detail].</p>
                <p className="mb-4">[First name] and [spouse&apos;s first name] were married for [number] years and shared a life filled with [a detail about their life together, such as travel, family, shared interests, or a home they built]. He was a [occupation] who [career highlight or quality]. Beyond his work, he loved [hobbies or passions].</p>
                <p className="mb-4">In addition to his wife, he is survived by [children, grandchildren, siblings, and other family]. He was preceded in death by [names].</p>
                <p>A [service type] will take place on [date] at [location]. Memorial contributions may be made to [organization].</p>
              </blockquote>
              <p className="text-gray-600 leading-relaxed">When writing about a husband, the relationship with the surviving spouse often takes center stage. Including a line about how they met, what their marriage was like, or a quality the spouse most admired adds emotional depth that readers connect with.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Template for a Wife</h2>
              <blockquote className="border-l-4 border-blue-300 pl-6 py-4 bg-gray-50 rounded-r-lg text-gray-600 leading-relaxed mb-4">
                <p className="mb-4">[Full Name] ([Maiden Name]), [age], of [City, State], passed away [peacefully/surrounded by family] on [date]. She was born on [birth date] in [birthplace] and was the daughter of [parents&apos; names].</p>
                <p className="mb-4">She married [spouse&apos;s name] on [date], and together they [a shared accomplishment or life detail]. [First name] was known for her [a defining quality], her [another quality], and her [another quality or talent]. She worked as a [occupation] and was active in [community, church, or organizational involvement].</p>
                <p className="mb-4">She is survived by her husband [name], [children, grandchildren, siblings]. She was preceded in death by [names].</p>
                <p>[Service details]. The family asks that in lieu of flowers, donations be made to [cause or organization close to her heart].</p>
              </blockquote>
              <p className="text-gray-600 leading-relaxed">Including a maiden name is traditional and helps friends or former classmates who may have known her before marriage recognize the obituary. If she had a career, volunteer work, or community involvement that defined her, give those details the space they deserve alongside family information.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Template for a Young Person</h2>
              <blockquote className="border-l-4 border-blue-300 pl-6 py-4 bg-gray-50 rounded-r-lg text-gray-600 leading-relaxed mb-4">
                <p className="mb-4">[Full Name], [age], of [City, State], passed away on [date]. [First name] was born on [birth date] to [parents&apos; names] and [grew up in / attended school at] [location or school name].</p>
                <p className="mb-4">[First name] was [a description of their personality, energy, or spirit]. [He/She/They] loved [interests, hobbies, sports, music, or other passions] and had a talent for [a specific talent or quality]. [He/She/They] [a brief story, accomplishment, or detail that captures who they were]. Those who knew [first name] will remember [a quality, habit, or characteristic].</p>
                <p className="mb-4">[First name] is survived by [parents, siblings, grandparents, and other close family or friends].</p>
                <p>A celebration of [first name]&apos;s life will be held on [date] at [location]. The family requests [donations, scholarship fund, or other tribute] in [first name]&apos;s memory.</p>
              </blockquote>
              <p className="text-gray-600 leading-relaxed">Writing an obituary for a young person is one of the hardest things a family can do. Focus on who they were, what brought them joy, and the impact they had on the people around them. There is no need to dwell on the circumstances of their death. Let the obituary be about their life, not the end of it.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funny and Lighthearted Examples</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Humor in an obituary is not disrespectful. When it reflects the personality of the person who died, it can be one of the most authentic and memorable tributes possible. Some of the most widely read obituaries in recent years have been the ones that made people laugh, often written by the deceased themselves or by family members who knew exactly what tone their loved one would have wanted.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If the person was known for their sense of humor, consider weaving in a joke they loved, a funny habit, or a self deprecating line they would have appreciated. Phrases like "finally lost his long argument with [something humorous]" or "left this world the same way she entered it: on her own terms and without asking permission" capture personality in ways that standard obituary language cannot.</p>
              <p className="text-gray-600 leading-relaxed">The key is authenticity. A funny obituary should sound like the person it describes. If humor was a core part of who they were, leaning into that in the obituary honors them far more than a generic, solemn template ever could. Just make sure that all family members are comfortable with the tone before it is published.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Obituary for Someone With No Family</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Not everyone has surviving family members, but every person deserves to have their life acknowledged. When writing an obituary for someone with no family, shift the focus entirely to the person themselves: their life story, their work, their interests, and the communities they were part of. Friends, neighbors, coworkers, fellow veterans, church members, or other community connections can take the place that family names would normally occupy.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Use language that acknowledges their connections without implying loneliness. Phrases like "will be remembered by the many friends and colleagues who valued their kindness" or "leaves behind a legacy of decades of service to the [organization or community]" honor the person while being truthful about their situation. You do not need to mention the absence of family explicitly.</p>
              <p className="text-gray-600 leading-relaxed">If you are writing the obituary as a friend, neighbor, or social worker, your willingness to do so is itself a testament to the person&apos;s impact. Include your contact information or the funeral home&apos;s information so that anyone who sees the obituary and wants to pay respects knows where to go.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Publish an Obituary</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Publishing an obituary in a newspaper typically costs between $50 and $1,000 or more depending on the publication and the length of the obituary. Major metropolitan newspapers tend to be the most expensive, while smaller community papers are more affordable. Most newspapers charge by the word, by the line, or by the column inch. Adding a photo usually costs extra, typically $25 to $200.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Many funeral homes will handle the submission process for you as part of their services. They can help you draft the obituary, format it to the newspaper&apos;s specifications, and submit it on your behalf. If you prefer to handle it yourself, contact the newspaper&apos;s obituary department directly for their submission guidelines and pricing.</p>
              <p className="text-gray-600 leading-relaxed">Free online options are also widely available. Many funeral homes post obituaries on their websites at no charge. Dedicated memorial websites allow you to create a full tribute page with photos, stories, and a guestbook for condolences. Social media is another option for sharing an obituary quickly and widely. A combination of a brief paid newspaper notice and a longer free online obituary often gives families the best reach without excessive cost.</p>
            </section>

            <section className="mb-10 bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
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

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/obituary-examples" className="text-blue-600 hover:underline">Obituary Examples: Real Samples to Help You Write One</Link></li>
                <li><Link href="/blog/how-to-write-an-obituary" className="text-blue-600 hover:underline">How to Write an Obituary</Link></li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Find a Funeral Home or Cremation Provider Near You</h2>
              <p className="text-gray-600 mb-6">Browse our directory to compare providers in your area and make an informed decision for your family.</p>
              <Link href="/states" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Browse All States</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
