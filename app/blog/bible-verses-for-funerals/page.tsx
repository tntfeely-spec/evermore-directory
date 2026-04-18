import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Bible Verses for Funerals: Comfort, Hope, and Remembrance (2026)',
  description: 'A collection of Bible verses for funerals and memorial services covering comfort, hope, eternal life, and remembrance. Suitable for any Christian service.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/bible-verses-for-funerals' },
};

const faqs = [
  { q: 'What is the most comforting Bible verse for a funeral?', a: 'Psalm 23 is widely considered the most comforting Bible verse for a funeral. Its opening line, "The Lord is my shepherd, I shall not want," has brought peace to grieving families for centuries. John 14:1-3, where Jesus says "Do not let your hearts be troubled," is also among the most frequently chosen.' },
  { q: 'What Bible verse is read at most funerals?', a: 'Psalm 23 ("The Lord is my shepherd") is the most commonly read passage at funerals across denominations. Other frequently read passages include John 14:1-3, Romans 8:38-39, and Revelation 21:4.' },
  { q: 'Can non-religious people use Bible verses at a funeral?', a: 'Yes. Many families who are not actively religious still find comfort in familiar Bible passages at a funeral. There is no requirement that you attend church or hold a specific faith to include scripture in a service. Choose verses that feel meaningful to your family.' },
  { q: 'What Psalms are appropriate for a funeral?', a: 'Psalm 23 (The Lord is my shepherd), Psalm 46:1 (God is our refuge and strength), Psalm 121 (I lift up my eyes to the mountains), and Psalm 116:15 (Precious in the sight of the Lord is the death of his faithful servants) are all commonly used at funerals.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function BibleVersesForFuneralsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Bible Verses for Funerals: Comfort, Hope, and Remembrance</h1>
              <p className="text-xl text-gray-600 mb-4">Scripture passages to bring peace and meaning to a funeral or memorial service.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Choosing a Bible verse for a funeral is deeply personal. The right passage can bring comfort to a grieving family, set the tone for a service, and honor the faith or values of the person being remembered. Below are some of the most meaningful verses organized by theme.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Verses About Comfort</h2>
              <div className="space-y-4">
                <blockquote className="bg-gray-50 rounded-lg p-5 border-l-4 border-slate-400"><p className="text-gray-700 italic mb-2">&quot;The Lord is my shepherd, I shall not want. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.&quot;</p><p className="text-sm text-gray-500">Psalm 23:1-3</p></blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-5 border-l-4 border-slate-400"><p className="text-gray-700 italic mb-2">&quot;Blessed are those who mourn, for they will be comforted.&quot;</p><p className="text-sm text-gray-500">Matthew 5:4</p></blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-5 border-l-4 border-slate-400"><p className="text-gray-700 italic mb-2">&quot;He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.&quot;</p><p className="text-sm text-gray-500">Revelation 21:4</p></blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-5 border-l-4 border-slate-400"><p className="text-gray-700 italic mb-2">&quot;Come to me, all you who are weary and burdened, and I will give you rest.&quot;</p><p className="text-sm text-gray-500">Matthew 11:28</p></blockquote>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Verses About Hope and Eternal Life</h2>
              <div className="space-y-4">
                <blockquote className="bg-gray-50 rounded-lg p-5 border-l-4 border-slate-400"><p className="text-gray-700 italic mb-2">&quot;Do not let your hearts be troubled. You believe in God; believe also in me. My Father&apos;s house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you?&quot;</p><p className="text-sm text-gray-500">John 14:1-2</p></blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-5 border-l-4 border-slate-400"><p className="text-gray-700 italic mb-2">&quot;For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God.&quot;</p><p className="text-sm text-gray-500">Romans 8:38-39</p></blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-5 border-l-4 border-slate-400"><p className="text-gray-700 italic mb-2">&quot;I am the resurrection and the life. The one who believes in me will live, even though they die.&quot;</p><p className="text-sm text-gray-500">John 11:25</p></blockquote>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Verses About Remembrance</h2>
              <div className="space-y-4">
                <blockquote className="bg-gray-50 rounded-lg p-5 border-l-4 border-slate-400"><p className="text-gray-700 italic mb-2">&quot;The righteous will be in everlasting remembrance.&quot;</p><p className="text-sm text-gray-500">Psalm 112:6</p></blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-5 border-l-4 border-slate-400"><p className="text-gray-700 italic mb-2">&quot;Precious in the sight of the Lord is the death of his faithful servants.&quot;</p><p className="text-sm text-gray-500">Psalm 116:15</p></blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-5 border-l-4 border-slate-400"><p className="text-gray-700 italic mb-2">&quot;I have fought the good fight, I have finished the race, I have kept the faith.&quot;</p><p className="text-sm text-gray-500">2 Timothy 4:7</p></blockquote>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Choose the Right Verse for the Service</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Consider the faith and personality of the person being honored. A lifelong churchgoer may have had a favorite passage. Ask family members.</li>
                <li>Match the verse to the tone of the service. Psalm 23 works for nearly any service. Romans 8:38-39 is powerful for someone whose faith was central to their identity.</li>
                <li>Shorter verses are easier for an audience to absorb during a service. If using a longer passage, consider printing it in the program.</li>
                <li>You do not have to choose just one. Many services include two or three passages at different points in the ceremony.</li>
              </ul>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step by Step</Link></li>
                <li><Link href="/blog/eulogy-for-friend-samples" className="text-slate-600 hover:text-slate-800 font-medium">Eulogy for a Friend: Samples and Tips</Link></li>
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary</Link></li>
              </ul>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 5,100+ funeral homes and cremation providers across all 50 states. Compare prices, services, and locations. Free for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
