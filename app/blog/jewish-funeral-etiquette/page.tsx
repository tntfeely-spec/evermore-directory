import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Jewish Funeral Etiquette for Non-Jews: A Respectful Guide',
  description: 'Attending a Jewish funeral as a non-Jew can feel unfamiliar. Here is what to expect, what to wear, and how to show respect.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/jewish-funeral-etiquette' },
};

const faqs = [
  { q: 'Can non-Jews attend a Jewish funeral?', a: 'Yes. Non-Jews are welcome at Jewish funerals. Your presence is a sign of respect and support for the grieving family. There are no restrictions on attendance based on religion. Simply follow the customs of the service and be respectful of the traditions.' },
  { q: 'What do you say to a Jewish family at a funeral?', a: 'The traditional phrase is "May their memory be a blessing." You can also simply say "I am sorry for your loss" or "I am here for you." Avoid saying things like "they are in a better place" or "everything happens for a reason," as these phrases may not align with Jewish beliefs about death and mourning.' },
  { q: 'What should a non-Jew wear to a Jewish funeral?', a: 'Wear dark, conservative clothing. Men should wear a suit or dress pants with a collared shirt. Women should wear a modest dress or skirt and blouse, with shoulders and knees covered. Men will be offered a kippah (skullcap) at the door and should wear it during the service as a sign of respect.' },
  { q: 'What is shiva and how long does it last?', a: 'Shiva is the seven day mourning period that begins immediately after the burial. The family stays home and receives visitors who come to offer comfort. Traditionally, mirrors are covered and the family sits on low chairs. Visitors bring food and share memories of the deceased. You do not need to stay long. Even a brief visit is meaningful.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function JewishFuneralEtiquettePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Jewish Funeral Etiquette for Non-Jews: A Respectful Guide</h1>
              <p className="text-xl text-gray-600 mb-4">What to expect, what to wear, and how to show respect at a Jewish funeral.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">If you have been invited to a Jewish funeral and you are not Jewish, it is natural to feel uncertain about what to expect and how to behave. The most important thing to know is that your presence matters. Showing up is itself an act of respect and kindness in Jewish tradition.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Expect at a Jewish Funeral</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Jewish funerals are typically held within 24 to 48 hours of death, though modern circumstances sometimes extend this timeline. The service is usually held at a funeral home, synagogue, or graveside. It is generally shorter than many Christian funerals, lasting about 30 to 60 minutes.</p>
              <p className="text-gray-600 leading-relaxed mb-4">The service centers on honoring the deceased through eulogies and the recitation of psalms. The rabbi or officiant will lead the service, and there may be readings in both Hebrew and English. You are not expected to read or recite anything in Hebrew. Simply stand when others stand and sit when others sit.</p>
              <p className="text-gray-600 leading-relaxed">Flowers are generally not sent to a Jewish funeral. Instead of flowers, it is customary to make a charitable donation in the name of the deceased. The family may suggest a specific charity or cause. If no charity is mentioned, a donation to any meaningful organization is appropriate.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Wear</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Dress conservatively in dark, muted colors. Men should wear a suit or dress pants with a collared shirt and a tie. Women should wear a modest dress, skirt, or pantsuit with shoulders covered and hemlines at or below the knee. Avoid bright colors, flashy jewelry, or casual clothing.</p>
              <p className="text-gray-600 leading-relaxed">Men who are not Jewish will be offered a kippah, a small skullcap, at the entrance to the service. It is respectful to wear it for the duration of the service. You do not need to bring your own. They are provided at the door and you can return it or keep it afterward.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Say and What to Avoid</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The most appropriate thing to say to a grieving Jewish family is &quot;May their memory be a blessing.&quot; In Hebrew, this is &quot;Zichrono livracha&quot; (for a man) or &quot;Zichrona livracha&quot; (for a woman). You can also simply say &quot;I am so sorry for your loss&quot; or &quot;I am here for you.&quot;</p>
              <p className="text-gray-600 leading-relaxed mb-4">Avoid phrases that may feel dismissive of grief or impose a theological framework that does not align with Jewish belief. Phrases like &quot;they are in a better place,&quot; &quot;God needed another angel,&quot; or &quot;everything happens for a reason&quot; are best avoided. Jewish mourning tradition values sitting with grief rather than explaining it away.</p>
              <p className="text-gray-600 leading-relaxed">During shiva, you do not need to fill silence with words. Your presence alone is comforting. Let the mourner lead the conversation. If they want to talk about their loved one, listen. If they want to sit quietly, sit with them.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shiva: The Mourning Period After the Funeral</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Shiva is the seven day mourning period observed by the immediate family after the burial. The word shiva comes from the Hebrew word for seven. During this time, the family stays home and receives visitors. It is one of the most important rituals in Jewish mourning, and visiting the family during shiva is considered a mitzvah, a good deed.</p>
              <p className="text-gray-600 leading-relaxed mb-4">When visiting a shiva home, it is customary to bring food. Prepared dishes, baked goods, fruit baskets, or deli platters are all appropriate. Do not bring flowers. The family will often have the front door unlocked so visitors can enter without ringing the bell, allowing the mourners to remain seated.</p>
              <p className="text-gray-600 leading-relaxed">You do not need to stay for a long time. A visit of 15 to 30 minutes is appropriate. Greet the mourners, express your condolences, share a memory if you have one, and listen. There may be a brief prayer service in the evening called a minyan, and you are welcome to stay for it if you wish.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Differences from Other Funeral Traditions</h2>
              <div className="space-y-3">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Timing</h3>
                  <p className="text-gray-600 text-sm">Jewish funerals happen quickly, often within one to two days. This is in contrast to many Christian traditions where services may be held a week or more after death.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Casket</h3>
                  <p className="text-gray-600 text-sm">Traditional Jewish burials use a simple, plain wooden casket with no metal hardware. This reflects the belief in equality in death and the return of the body to the earth.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">No Viewing</h3>
                  <p className="text-gray-600 text-sm">Jewish tradition does not include an open casket viewing. The casket is kept closed during the service. This is a sign of respect for the dignity of the deceased.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Burial Over Cremation</h3>
                  <p className="text-gray-600 text-sm">Orthodox and Conservative Judaism require burial. Reform Judaism is more flexible, but burial remains the traditional and preferred practice across denominations.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Shoveling Earth</h3>
                  <p className="text-gray-600 text-sm">At the graveside, mourners take turns shoveling earth onto the casket. This is considered the greatest act of kindness because it is one that can never be repaid. If offered the shovel, it is respectful to participate.</p>
                </div>
              </div>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step by Step</Link></li>
                <li><Link href="/blog/what-to-do-after-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">What to Do After a Funeral</Link></li>
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
