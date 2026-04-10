import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Funeral Etiquette: What to Do, Say, and Avoid',
  description: 'Attending a funeral can feel uncomfortable if you are unsure of the customs. Here is a practical guide to funeral etiquette covering what to do, say, and avoid.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/funeral-etiquette-guide' },
};

const faqs = [
  { q: 'Is it rude to be late to a funeral?', a: 'Arriving late to a funeral is not ideal, but it is far better than not attending at all. If you arrive after the service has started, enter quietly through the back and take a seat near the door without drawing attention to yourself. Do not walk to the front or try to greet the family until afterward. Most families will simply be grateful that you came.' },
  { q: 'Should you hug someone at a funeral?', a: 'Follow the lead of the person you are approaching. If they open their arms, a hug is welcome. If they extend a hand, shake it. Some people find physical contact comforting during grief, while others prefer more space. A brief, sincere statement of condolence is always appropriate whether or not a hug is involved.' },
  { q: 'Is it okay to take photos at a funeral?', a: 'In general, do not take photos during the service unless the family has specifically indicated that photography is welcome. Some families hire a photographer or designate someone to take pictures, and in those cases, it is fine to participate. Taking selfies at a funeral is widely considered disrespectful. When in doubt, put your phone away.' },
  { q: 'How long should you stay at a funeral reception?', a: 'There is no minimum or maximum time requirement. Staying for 30 to 60 minutes is typical. The most important thing is to make your way to the family, offer your condolences, and spend a few minutes being present. If you need to leave early, do so quietly. The family will not be tracking how long each guest stays.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function FuneralEtiquetteGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Etiquette: What to Do, Say, and Avoid</h1>
              <p className="text-xl text-gray-600 mb-4">A straightforward guide to navigating a funeral with respect and confidence, even if you have never attended one before.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Attending a funeral can feel uncomfortable, especially if you are not sure what to expect. The good news is that funeral etiquette is mostly common sense: show up, be respectful, and let the family know you care. This guide covers what to do before, during, and after the service so you can be present without worrying about making a mistake.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Before the Funeral</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When you learn that someone has died, reach out to the family right away. A brief phone call, text message, or handwritten note expressing your sympathy is appropriate. You do not need to have the perfect words. Something simple like &quot;I am so sorry for your loss. I am thinking of you&quot; is enough. Avoid cliches like &quot;they are in a better place&quot; or &quot;everything happens for a reason,&quot; which can feel dismissive to a grieving person.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Check the obituary or funeral announcement for details about the service, including the time, location, and any requests the family has made. Some families specify &quot;in lieu of flowers, donations to&quot; a particular charity. Others request specific attire or invite attendees to wear the deceased&apos;s favorite color. Follow whatever guidance the family provides.</p>
              <p className="text-gray-600 leading-relaxed">If you plan to send flowers, have them delivered to the funeral home before the service. If you are bringing food to the family&apos;s home, label the container with your name and any reheating instructions. Practical gestures like dropping off a meal, offering to pick someone up from the airport, or watching the family&apos;s children during the service are often more helpful than flowers.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Arriving at the Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Arrive 10 to 15 minutes early. This gives you time to sign the guest book, find a seat, and settle in before the service begins. The front rows are typically reserved for immediate family, so choose a seat toward the middle or back unless you are directed otherwise.</p>
              <p className="text-gray-600 leading-relaxed">Silence your phone completely before entering the building. Even vibration mode can be audible in a quiet room. If you brought young children, sit near an exit so you can step out easily if they become restless. Greet the family briefly if there is a receiving line, but keep your comments short. A long line of mourners is waiting, and the family will have a chance to talk with you at the reception.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">During the Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Follow the lead of the people around you. Stand when others stand, sit when others sit, and participate in prayers, hymns, or readings to the degree that feels comfortable. You do not need to share the same religious beliefs as the family to be respectful. Listening attentively and being present is enough.</p>
              <p className="text-gray-600 leading-relaxed">It is perfectly normal to cry during a funeral. It is also perfectly normal not to cry. People grieve in different ways, and there is no correct emotional response. Do not judge yourself or others based on how they react during the service. Keep tissues handy, stay quiet during eulogies and readings, and avoid side conversations with the person next to you.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">At the Graveside</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If a graveside service follows the funeral, you are generally welcome to attend unless the family has indicated that the burial is private. Stand where directed by the funeral home staff. The area closest to the grave is reserved for the immediate family.</p>
              <p className="text-gray-600 leading-relaxed">Graveside services are usually brief, lasting 10 to 20 minutes. The officiant may say a few words, a prayer may be offered, and the casket is lowered into the ground. In some traditions, attendees are invited to place a handful of dirt or a flower on the casket. If offered, participate. If not offered, do not approach the grave until invited. After the service, you may offer a final word to the family before heading to the reception.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Reception Afterward</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Many funerals are followed by a reception or repast, which is a gathering with food and conversation. This is usually held at the family&apos;s home, a community hall, or the funeral home itself. The reception is a time for sharing memories, offering comfort, and simply being with the family in a less formal setting.</p>
              <p className="text-gray-600 leading-relaxed">Make a point of speaking directly with the closest family members, even if it is just for a moment. Share a brief memory of the deceased if you have one. Avoid dominating the conversation or steering it toward your own experiences with grief. This is about the family and the person they lost. Stay for at least 30 minutes if your schedule allows, and leave quietly when you are ready.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Common Funeral Etiquette Mistakes to Avoid</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Do not compare the family&apos;s loss to your own. Saying &quot;I know how you feel&quot; rarely lands the way you intend.</li>
                <li>Do not ask how the person died if you do not already know. If the family wants to share that information, they will.</li>
                <li>Do not take photos or videos during the service unless the family has explicitly welcomed it.</li>
                <li>Do not bring up the will, inheritance, or the deceased&apos;s belongings at the funeral or reception.</li>
                <li>Do not tell the grieving family to &quot;stay strong&quot; or &quot;be brave.&quot; Let them feel whatever they are feeling.</li>
                <li>Do not skip the funeral because you feel awkward. Your presence matters more than your words.</li>
                <li>Do not post about the death on social media before the family has made a public announcement.</li>
              </ul>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/what-to-wear-to-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">What to Wear to a Funeral</Link></li>
                <li><Link href="/blog/words-of-comfort-for-grieving-family" className="text-slate-600 hover:text-slate-800 font-medium">Words of Comfort for a Grieving Family</Link></li>
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