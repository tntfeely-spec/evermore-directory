import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Pallbearer Guide: What to Wear, What to Do, and What to Expect',
  description: 'Being asked to serve as a pallbearer is an honor. Here is everything you need to know about what to wear, your role, and how to prepare.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/pallbearer-guide' },
};

const faqs = [
  { q: 'What does a pallbearer wear?', a: 'Pallbearers typically wear dark, conservative clothing. A dark suit with a white or muted shirt and a solid tie is standard for men. Women should wear a dark dress, skirt, or pantsuit. Avoid bright colors, bold patterns, and casual footwear. Wear flat or low-heeled shoes with good grip, since you will be carrying weight on potentially uneven ground.' },
  { q: 'How many pallbearers does a funeral need?', a: 'Most funerals have six pallbearers, three on each side of the casket. Some larger or heavier caskets may require eight. The funeral director will advise the family on the appropriate number based on the weight of the casket and the layout of the venue.' },
  { q: 'Can a woman be a pallbearer?', a: 'Absolutely. Women serve as pallbearers regularly. There is no rule that limits the role to men. Families choose pallbearers based on their relationship to the deceased, and anyone who is physically able and willing can serve.' },
  { q: 'What is the difference between a pallbearer and an honorary pallbearer?', a: 'Active pallbearers physically carry or guide the casket. Honorary pallbearers are recognized for their close relationship to the deceased but do not carry the casket. They may walk alongside it, sit in a designated section, or simply be listed in the program. The honorary role is often given to elderly family members, close friends who are unable to carry weight, or children.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function PallbearerGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Pallbearer Guide: What to Wear, What to Do, and What to Expect</h1>
              <p className="text-xl text-gray-600 mb-4">Everything you need to know about serving as a pallbearer, from clothing and logistics to the emotional weight of the role.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Being asked to serve as a pallbearer is one of the highest honors a family can offer. It means you were important enough in the life of the deceased to carry them on their final journey. If you have never done it before, it is natural to feel uncertain about what is expected.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is a Pallbearer</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A pallbearer is a person chosen by the family to carry or escort the casket during a funeral. The word comes from &quot;pall,&quot; the cloth that covers a casket, and &quot;bearer,&quot; meaning one who carries. Traditionally, pallbearers are close friends, family members, or colleagues of the deceased.</p>
              <p className="text-gray-600 leading-relaxed">The role is both physical and symbolic. You are literally bearing the weight of someone&apos;s loved one, and the act itself carries deep meaning for the family. Most families choose people who had a significant relationship with the person who died.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Pallbearers Do</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The funeral director will walk you through everything before the service begins. Here is what the process typically looks like, step by step:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Arrive early:</strong> Plan to arrive at the funeral home or venue at least 30 minutes before the service. The funeral director needs time to position everyone and explain the logistics.</li>
                <li><strong>Receive instructions:</strong> The funeral director will show you where to stand, which side of the casket to take, and how to lift and carry. Listen carefully and ask questions if anything is unclear.</li>
                <li><strong>Carry the casket in:</strong> You will carry or roll the casket from the hearse into the service venue. Walk slowly and steadily, matching the pace of the person at the front.</li>
                <li><strong>Sit in a designated area:</strong> During the service, pallbearers usually sit in a reserved section near the front.</li>
                <li><strong>Carry the casket out:</strong> After the service, you will carry the casket back to the hearse. This is often the most emotional moment.</li>
                <li><strong>At the cemetery:</strong> You will carry the casket from the hearse to the graveside and place it on the lowering device. The funeral director will guide every step.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Wear as a Pallbearer</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Dark, conservative clothing is the standard. For men, a dark suit (black, charcoal, or navy) with a white or light-colored shirt and a solid, muted tie. For women, a dark dress, pantsuit, or skirt and blouse combination. Avoid bright colors, loud patterns, and anything overly casual.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Footwear matters more than you might think. You will be carrying significant weight, potentially on uneven ground, grass, or gravel. Wear sturdy, flat or low-heeled shoes with good traction. This is not the day for dress shoes with slick soles or high heels.</p>
              <p className="text-gray-600 leading-relaxed">If the family has requested specific attire, such as a particular color or a more casual dress code, follow their wishes. Some families ask pallbearers to wear something that reflects the personality of the deceased, and that request should always be honored.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Prepare</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Mentally, understand that this is an emotional role. You may feel a surge of grief when you first lift the casket. That is normal. Focus on the task, take slow breaths, and lean on the other pallbearers for support, both physically and emotionally.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Physically, a casket with the deceased can weigh between 300 and 600 pounds, distributed among six to eight people. That means each person carries roughly 50 to 100 pounds. If you have a back injury or physical limitation, let the family know as early as possible so they can adjust. There is no shame in stepping into an honorary role instead.</p>
              <p className="text-gray-600 leading-relaxed">Keep your phone on silent. Do not chew gum. Avoid wearing sunglasses during the service if possible. Small details matter on a day like this.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Honorary Pallbearers vs. Active Pallbearers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Active pallbearers carry the casket. This is the physical role, and it requires the ability to lift and walk steadily with a heavy load. Most funerals have six active pallbearers, though eight is common for larger caskets.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Honorary pallbearers do not carry the casket but are recognized for their close relationship with the deceased. They may walk beside the casket, sit in a special section, or simply be named in the funeral program. This role is often offered to elderly relatives, close friends who cannot carry weight, or young family members.</p>
              <p className="text-gray-600 leading-relaxed">Both roles are meaningful. Being named as an honorary pallbearer is not a lesser honor. It is the family&apos;s way of saying you mattered deeply to the person who died.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step-by-Step</Link></li>
                <li><Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">What to Do When Someone Dies</Link></li>
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
