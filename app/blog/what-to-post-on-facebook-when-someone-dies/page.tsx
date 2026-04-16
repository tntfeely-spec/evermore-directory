import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What to Post on Facebook When Someone Dies: Examples and What to Avoid',
  description: 'How to announce a death on Facebook with sensitivity. Examples for parents, spouses, friends, plus what to never post.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/what-to-post-on-facebook-when-someone-dies' },
};

const faqs = [
  { q: 'How do you announce a death on Facebook?', a: 'Keep it short and sincere. Include the person&apos;s full name, your relationship to them, the date they died, and a note about service details if you have them. If you do not have service information yet, say that it will be shared later.' },
  { q: 'Should you post about a death on Facebook before telling family?', a: 'No. Immediate family, close friends, and anyone who deserves a personal call should be notified by phone or in person before anything goes public. A Facebook post is not the right way for a son, daughter, sibling, or best friend to learn the news.' },
  { q: 'Is it okay to share an obituary on Facebook?', a: 'Yes. Sharing a link to the obituary is one of the most helpful things you can do. It gives people the full story, service details, and a place to leave a message for the family. Many funeral homes publish obituaries that are designed to be shared.' },
  { q: 'How do you memorialize a Facebook account?', a: 'A family member or designated legacy contact can request memorialization through Facebook&apos;s Help Center by submitting proof of death, such as an obituary link or death certificate. Once memorialized, the word Remembering appears next to the person&apos;s name and no one can log into the account.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Write a Facebook Death Announcement',
  description: 'A step by step guide for writing a respectful Facebook post announcing that someone has died.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Notify immediate family first', text: 'Call or visit close family members before anything goes online. No one who loved this person should learn the news from a social media feed.' },
    { '@type': 'HowToStep', position: 2, name: 'Decide who will write and post', text: 'Agree as a family on who is posting first. Usually a spouse, adult child, or sibling. Others can share once the first post is up.' },
    { '@type': 'HowToStep', position: 3, name: 'Include the essential facts', text: 'Write the person&apos;s full name, your relationship to them, and the date they died. Keep the tone simple and sincere.' },
    { '@type': 'HowToStep', position: 4, name: 'Add service information if known', text: 'If the funeral or memorial details are set, include date, time, and location. If not, write that arrangements will be shared soon.' },
    { '@type': 'HowToStep', position: 5, name: 'Adjust privacy settings before posting', text: 'Choose friends only or a custom audience if you do not want the post publicly visible. Turn off comments if you are not ready to respond.' },
    { '@type': 'HowToStep', position: 6, name: 'Be ready to respond to comments and messages', text: 'Expect an influx of replies and private messages. Ask a friend or family member to help manage responses if it becomes overwhelming.' },
  ],
};

const speakableSchema = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'What to Post on Facebook When Someone Dies: Examples and What to Avoid', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['article > section:first-of-type'] } };

export default function WhatToPostOnFacebookWhenSomeoneDiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">What to Post on Facebook When Someone Dies: Examples and What to Avoid</h1>
              <p className="text-xl text-gray-600 mb-4">Examples for parents, spouses, siblings, friends, and grandparents, plus what to never post.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Facebook has quietly become the way most people learn that someone they knew has died. An old classmate, a neighbor from three houses ago, a cousin who moved across the country. The feed tells them before a phone call can. That is a real responsibility for whoever writes the first post, and it deserves a little care. The goal is to share the news clearly, protect the people who loved the person most, and give friends a way to show up.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Before You Post: Tell Immediate Family First</h2>
              <p className="text-gray-600 leading-relaxed mb-4">This is the single most important rule. No one in the immediate family circle should find out that their father, brother, wife, or best friend died by scrolling through Facebook on their lunch break.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Before anything goes online, make a list of the people who deserve a personal phone call. That usually includes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>The spouse, partner, children, parents, and siblings of the person who died</li>
                <li>Grandchildren old enough to understand</li>
                <li>Best friends and anyone the person spoke to weekly</li>
                <li>Employers, close coworkers, and longtime neighbors</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">Give those calls time to happen. A few hours is usually enough. Only after that should anyone in the family post publicly. If you are not sure whether someone has been told, assume they have not and call them yourself.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Include in a Facebook Death Announcement</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A good post is short. It answers the questions people will have without forcing them to ask. Include:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>The person&apos;s full name, and the name most people knew them by if different</li>
                <li>Your relationship to them, so readers know who is writing</li>
                <li>The date they died, and the city or state if that helps context</li>
                <li>A single line about who they were, not a full obituary, just a sentence</li>
                <li>Service information if you have it, or a note that details will follow</li>
                <li>How the family prefers to be contacted, or a request for privacy</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">You do not need to explain how they died. You do not need to include medical details. Friends who want to know more will reach out privately.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Posts by Relationship</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Use these as starting points. Change the names and details to fit your family.</p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">For a parent</h3>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p>It is with a heavy heart that I share my father, James Patrick Doyle, passed away peacefully on April 12, 2026, surrounded by his family. He was 78. Dad was a steady, funny, generous man, and we are devastated. Service details will be shared in the next few days. Please hold our family in your thoughts.</p>
              </blockquote>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">For a spouse</h3>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p>My husband, David Alan Morris, died on April 10, 2026, after a short illness. We were married for 34 years. I am not ready to say much more yet. A memorial service is being planned and I will share the details soon. Thank you for loving him too.</p>
              </blockquote>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">For a sibling</h3>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p>My brother, Michael Joseph Reyes, passed away on April 9, 2026, at the age of 46. Mike was the best brother I could have asked for and the funniest person in any room. Our family is heartbroken. We will share service information once it is finalized. Please keep his wife and kids in your prayers.</p>
              </blockquote>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">For a friend</h3>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p>I lost one of my best friends today. Karen Whitmore died on April 11, 2026. We met in college and stayed close for 25 years. If you knew Karen, you know exactly how rare she was. I am sharing this with her family&apos;s blessing. Service details will come from her sister in the coming days.</p>
              </blockquote>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">For a grandparent</h3>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p>My grandmother, Lucille Ferraro, passed away on April 13, 2026, at the age of 91. She was the heart of our family and the best cook any of us will ever know. We are sad, but we are also grateful for every Sunday dinner she ever made us sit through. A celebration of her life will be held next week. Details to follow.</p>
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Post for the Funeral or Memorial Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Service information usually belongs in a second post a day or two after the announcement. That way friends who missed the first post still see it, and you have time to finalize arrangements. Include:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Date and start time, with time zone if friends are traveling</li>
                <li>Full address of the funeral home, church, or gathering location</li>
                <li>Any dress code the family has requested</li>
                <li>Whether flowers are welcome, or where donations should be sent</li>
                <li>A livestream link if the service will be broadcast online</li>
                <li>A reception or gathering afterward, if family members are open to it</li>
              </ul>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p>A memorial service for James Patrick Doyle will be held on Saturday, April 20, at 11:00 AM Eastern at St. Mary&apos;s Catholic Church, 412 Main Street, Springfield. A reception will follow in the parish hall. For those who cannot attend in person, a livestream will be available at the link in the comments. In lieu of flowers, the family asks that donations be made to the American Heart Association.</p>
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Post in the Days After</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The days after the service are often when families feel the quiet the most. A few kinds of posts can help:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>A short thank you post for everyone who sent flowers, cards, food, or messages</li>
                <li>A photo memory with a sentence or two about what that moment meant</li>
                <li>A link to the obituary so friends who missed the service can still read it</li>
                <li>A note about a charity, scholarship, or tribute fund established in their name</li>
                <li>An update on how to stay in touch with the family going forward</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">You do not have to post on any schedule. Some families go quiet for weeks. Some post a memory every Sunday for a year. There is no wrong pace.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Never to Post</h2>
              <p className="text-gray-600 leading-relaxed mb-4">This is the part that matters most, because the damage from a wrong post is hard to undo. Do not post:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Graphic details about how the person died, especially in the case of accident, suicide, or overdose</li>
                <li>Family conflict, arguments over the estate, or grievances about relatives who did not show up</li>
                <li>Photos of the person in the hospital, in hospice, or in a state they would not want remembered</li>
                <li>Anything that would embarrass them, including old stories that sounded funny in person but read differently online</li>
                <li>A live location pin of the funeral address if the family has safety or privacy concerns</li>
                <li>Cause of death speculation before the family has said anything publicly</li>
                <li>Your own emotional reaction if it centers you rather than the person who died</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">If you are unsure whether a post is appropriate, wait. You can always post later. You cannot un-post.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Settings to Consider</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Facebook gives you more control than most people realize. Before you publish, take 30 seconds to think about who needs to see this.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li><strong>Friends only</strong> keeps the post out of public feeds and search results. This is usually the right choice for a first announcement.</li>
                <li><strong>Custom audience</strong> lets you share with specific people or exclude certain ones, which can help if there is family conflict or an estranged relationship.</li>
                <li><strong>Turn off comments</strong> if you are not ready to field hundreds of replies. You can turn them back on later.</li>
                <li><strong>Limit sharing</strong> by turning off the reshare option so the post does not spread beyond your circle.</li>
                <li><strong>Delete or archive the post</strong> later if you want. You can remove it anytime without notifying anyone.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">If this is a public figure or a death with unusual circumstances, the family may want to keep everything friends only for the first week. You can always make it public later.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do With Their Account</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Once the initial posts are done, the family has to decide what happens to the account itself. Facebook offers two options.</p>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Memorialize the account.</strong> This turns the profile into a tribute page. The word Remembering appears next to the person&apos;s name, no one can log in, and the account is no longer suggested in friend recommendations or birthday reminders. Friends can still post on the timeline, which many families find comforting. Memorialization is the default choice for most families.</p>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Request removal of the account.</strong> This permanently deletes the profile and all its content. Close family members can request this through Facebook&apos;s Help Center by submitting proof of death and proof of their relationship.</p>
              <p className="text-gray-600 leading-relaxed mb-4">To request either option, go to the Facebook Help Center and search for memorialization. You will need a link to an obituary or a copy of the death certificate. If the person set up a legacy contact before they died, that person has additional access to manage the memorialized profile.</p>
              <p className="text-gray-600 leading-relaxed">There is no deadline. Some families wait months before making the change, and that is fine. The account does not have to be touched right away.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/announcing-death-on-social-media" className="text-slate-600 hover:text-slate-800 font-medium">Announcing a Death on Social Media: A Gentle Guide</Link></li>
                <li><Link href="/blog/condolence-text-message" className="text-slate-600 hover:text-slate-800 font-medium">Condolence Text Message Examples That Actually Help</Link></li>
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary: A Complete Guide</Link></li>
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
