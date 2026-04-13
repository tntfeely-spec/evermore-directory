import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'How to Write a Eulogy: A Step-by-Step Guide With Examples',
  description: 'Writing a eulogy is one of the hardest tasks you will face. Here is a simple step-by-step guide with examples to help you honor your loved one with confidence.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/how-to-write-a-eulogy' },
};

const faqs = [
  { q: 'How long should a eulogy be?', a: 'Most eulogies should be 3 to 7 minutes long, which translates to roughly 500 to 1,000 words. A 5 minute eulogy is a comfortable length for both the speaker and the audience. Going longer than 10 minutes risks losing the room. It is almost always better to be too short than too long. Focus on one or two meaningful stories rather than trying to cover everything.' },
  { q: 'What do you say at the beginning of a eulogy?', a: 'Start by introducing yourself and explaining your relationship to the deceased. A simple opening like \"My name is Sarah, and I was David\'s sister\" grounds the audience immediately. From there, you can move into a brief statement about what the person meant to you or open with a short story that captures who they were. Avoid starting with \"Webster\'s dictionary defines...\" or any similarly overused opening.' },
  { q: 'Is it okay to use notes when delivering a eulogy?', a: 'Absolutely. In fact, it is strongly recommended. The vast majority of people who deliver eulogies use printed notes or read directly from a written copy. Grief, nerves, and emotion can make it very difficult to remember what you planned to say. Having the full text printed in a large, easy to read font ensures you will not lose your place if you need to pause and collect yourself.' },
  { q: 'What should you never say in a eulogy?', a: 'Avoid airing grievances, sharing embarrassing secrets, or mentioning conflicts the deceased had with family members. Do not speak negatively about anyone in the room. Avoid inside jokes that only a few people will understand. Steer clear of cliches like \"they are in a better place\" unless you know the family shares that belief. The eulogy should honor the person and comfort the mourners, not create discomfort.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function HowToWriteAEulogyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Write a Eulogy","description":"A step by step guide to writing and delivering a meaningful eulogy.","step":[{"@type":"HowToStep","position":1,"name":"Gather stories and memories","text":"Talk to family and close friends. Collect 3 to 5 specific memories or stories that capture who the person was. Specific stories are always more powerful than general statements."},{"@type":"HowToStep","position":2,"name":"Choose a central theme","text":"Pick one quality or value that defined the person. Build your eulogy around that theme so it has a clear through-line."},{"@type":"HowToStep","position":3,"name":"Write a strong opening","text":"Open with the person's name and one defining characteristic. You can also open with a brief story that captures who they were in a single moment."},{"@type":"HowToStep","position":4,"name":"Write the body in three parts","text":"Cover their life story briefly, share 2 to 3 specific stories or memories, and describe what they meant to the people in the room."},{"@type":"HowToStep","position":5,"name":"Write a closing that offers comfort","text":"End with a forward-looking statement, a favorite quote, or a simple sentence that captures their legacy. Avoid ending abruptly."},{"@type":"HowToStep","position":6,"name":"Practice out loud before delivering","text":"Read the eulogy out loud at least three times. Time yourself. Aim for 3 to 5 minutes. Mark places where you might get emotional and practice pausing through them."}]}) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Write a Eulogy: A Step by Step Guide With Examples</h1>
              <p className="text-xl text-gray-600 mb-4">A clear, practical guide to writing and delivering a eulogy that honors someone you love.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Writing a eulogy is one of the most personal and emotional tasks you may ever be asked to take on. You do not need to be a writer, a public speaker, or someone who has done this before. You just need to be willing to stand up and say something honest about the person you lost, and this guide will show you exactly how to do that.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Long Should a Eulogy Be</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A good eulogy is typically 3 to 7 minutes long, which works out to about 500 to 1,000 words. If you are speaking at a funeral with multiple eulogists, aim for the shorter end of that range. If you are the only person speaking, you have more room, but even then, 7 minutes is a comfortable upper limit.</p>
              <p className="text-gray-600 leading-relaxed">The most common mistake people make is trying to cover too much. A focused 5 minute eulogy built around one or two good stories will be more memorable and more moving than a 15 minute speech that tries to summarize an entire life. Think of it this way: you are not writing a biography. You are giving the room a window into who this person was.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Include in a Eulogy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A eulogy should include a few core elements that help the audience feel connected to the person being honored. Start with who you are and how you knew the deceased. Include at least one specific story or memory that illustrates their character. Mention what they meant to you and to others. And close with a thought, a farewell, or a line that feels true to who they were.</p>
              <p className="text-gray-600 leading-relaxed">You do not need to include every fact about the person&apos;s life. The obituary handles the biographical details. The eulogy is about personality, character, and the impression this person left on the people around them. Focus on what made them uniquely themselves: their humor, their generosity, their stubbornness, their laugh, whatever it was that you will miss the most.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Step by Step Structure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">This four part structure works for almost any eulogy:</p>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li><strong>Opening:</strong> Introduce yourself and your relationship to the deceased. Set the tone. If they were a person who loved humor, it is okay to start with something light. If the mood calls for something more reflective, start there.</li>
                <li><strong>Life summary:</strong> Briefly touch on the key chapters of their life: where they grew up, their career, their family, and the things they cared about most. Keep this section short. You are providing context, not a biography.</li>
                <li><strong>Personal story:</strong> This is the heart of the eulogy. Share one or two specific stories that show who this person really was. Choose moments that are vivid, specific, and true. The best eulogy stories are the ones that make people in the room nod because they recognize the person in the details.</li>
                <li><strong>Closing:</strong> End with what this person meant to you and what you hope others will remember about them. A final sentence that captures their spirit is a powerful way to finish. You can also close with a quote, a song lyric, or something the deceased used to say.</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Example Eulogy Opening Lines</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Here are three examples of strong opening lines to give you a starting point:</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-600 italic mb-4">&quot;My father was not a man who gave speeches, so I think he would find it fitting that I am up here struggling to give one for him.&quot;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-600 italic mb-4">&quot;I met Linda on the first day of nursing school in 1987. She was the only person in the room who looked as terrified as I felt, and we have been inseparable ever since. Until now.&quot;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-600 italic mb-4">&quot;If my brother were here right now, he would tell me I am overthinking this. He would say just tell them a good story and sit down. So that is what I am going to try to do.&quot;</blockquote>
              <p className="text-gray-600 leading-relaxed">Notice that each of these openings is personal, specific, and gives the audience an immediate sense of both the speaker and the person being honored. None of them start with a dictionary definition or a generic statement about loss.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Delivering the Eulogy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Print your eulogy in a large font, at least 14 or 16 point, so you can read it easily even if your hands are shaking or your eyes are blurry from tears. Do not rely on your phone. A printed page is easier to hold, does not go dark, and does not require scrolling.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Practice reading the eulogy out loud at least two or three times before the service. This helps you identify the spots where you are most likely to get emotional, so they will not catch you off guard. It also gives you a feel for the pacing and lets you adjust anything that does not sound natural when spoken aloud.</p>
              <p className="text-gray-600 leading-relaxed">Speak slowly. Nerves and adrenaline will naturally speed you up, so consciously slow down. Make eye contact with the audience when you can, but do not force it. It is perfectly fine to read directly from the page for the entire eulogy. The audience cares about what you are saying, not whether you have it memorized.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do If You Start to Cry</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You probably will cry, and that is completely okay. When it happens, pause. Take a slow breath. Take a sip of water if there is a glass nearby. The room will wait for you. No one is judging you or timing you. Crying during a eulogy is one of the most human things you can do, and it shows the audience how much this person meant to you.</p>
              <p className="text-gray-600 leading-relaxed">If you are worried about being unable to continue, ask a trusted friend or family member to stand near the podium as a backup reader. Give them a printed copy of the eulogy in advance. If you reach a point where you cannot go on, hand them the page and they can finish for you. Knowing you have a safety net makes it much easier to get through it.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/eulogy-for-friend-samples" className="text-slate-600 hover:text-slate-800 font-medium">Eulogy for a Friend: Samples, Tips, and How to Write One</Link></li>
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary</Link></li>
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