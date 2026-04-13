import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Scripture Readings for Funerals: New Testament and Old Testament Passages',
  description: 'Choosing a scripture reading for a funeral service brings comfort and meaning to the ceremony. Here is a collection of New Testament and Old Testament passages for any service.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/scripture-readings-for-funerals' },
};

const faqs = [
  { q: 'What are the most popular scripture readings for funerals?', a: 'The most popular scripture readings for funerals include Psalm 23 ("The Lord is my shepherd"), John 14:1-3 ("In my Father\'s house are many rooms"), Romans 8:38-39 ("Neither death nor life...can separate us from the love of God"), and Revelation 21:4 ("He will wipe every tear from their eyes"). These passages are chosen because they offer comfort, hope, and reassurance about eternal life.' },
  { q: 'What New Testament passage is most used at funerals?', a: 'John 14:1-3 is one of the most frequently read New Testament passages at funerals. In this passage, Jesus tells his disciples, "Do not let your hearts be troubled. In my Father\'s house are many rooms." It is comforting because it speaks directly to the promise of life after death and a place prepared for those who have passed.' },
  { q: 'Can you use scripture readings at a non-religious funeral?', a: 'Yes. If the deceased found meaning in certain scriptures, those passages can be included in a non-religious or secular service. Context matters more than setting. A brief introduction explaining why the passage was meaningful to the person who passed helps guests understand the choice. Scripture can stand alongside poetry, personal readings, and secular reflections.' },
  { q: 'How long should a scripture reading be at a funeral?', a: 'Most scripture readings at funerals are 3 to 8 verses long and take about 1 to 3 minutes to read aloud. Shorter passages tend to land with more impact because the audience can absorb every word. If you want to include multiple readings, space them throughout the service rather than reading them back to back.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function ScriptureReadingsForFuneralsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Scripture Readings for Funerals: New Testament and Old Testament Passages</h1>
              <p className="text-xl text-gray-600 mb-4">A curated collection of Bible passages that bring comfort, hope, and peace to funeral services.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Scripture readings are among the most meaningful elements of a funeral service, offering words of comfort that have sustained grieving families for thousands of years. Whether you are planning a church funeral, a graveside service, or a memorial gathering, the right passage can set the tone for the entire ceremony.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Choose a Scripture Reading for a Funeral</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Start by considering what mattered most to the person who passed. Did they have a favorite verse? Did they underline passages in their Bible? Did they reference a particular scripture in conversation or in letters? A reading that the deceased loved will feel personal and authentic in a way that a generic selection cannot.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If you do not know the deceased&apos;s preferences, consider the tone you want for the service. Some families want a message of hope and resurrection. Others want acknowledgment of grief and the reality of loss. Still others want a passage that celebrates a life well lived. There is no wrong choice, as long as the reading resonates with the family and the spirit of the service.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Most funeral services include one to three scripture readings. If you are working with a pastor or officiant, they can help you choose passages that complement the overall structure of the service. They may also suggest readings you had not considered.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">New Testament Readings</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The New Testament contains some of the most frequently chosen funeral readings because of its direct messages about eternal life, hope, and the promise of reunion.</p>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">John 14:1 to 3</h3>
                  <p className="text-gray-600 leading-relaxed">This passage is perhaps the single most read scripture at funerals. Jesus speaks directly to his disciples about the home prepared for them in heaven. The words &quot;Do not let your hearts be troubled&quot; land with particular power at a funeral, where troubled hearts fill every pew. It offers a direct promise that death is not the end.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Romans 8:38 to 39</h3>
                  <p className="text-gray-600 leading-relaxed">Paul writes that neither death nor life, neither angels nor rulers, neither the present nor the future can separate us from the love of God. This reading resonates at funerals because it addresses the fear that death creates a permanent separation. It insists that love, especially God&apos;s love, cannot be broken by death.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">1 Thessalonians 4:13 to 14</h3>
                  <p className="text-gray-600 leading-relaxed">Paul speaks to the Thessalonians about those who have &quot;fallen asleep&quot; in death, encouraging them not to grieve like those who have no hope. This passage is often chosen because it acknowledges grief while pointing toward the hope of resurrection. It does not deny the pain of loss but sets it in a larger context.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Revelation 21:4</h3>
                  <p className="text-gray-600 leading-relaxed">This brief but powerful verse describes a future in which God will wipe every tear from every eye, and there will be no more death, mourning, crying, or pain. It is one of the most comforting verses in the Bible for a funeral setting because it speaks directly to the suffering in the room and promises that it will end.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">1 Corinthians 15:51 to 57</h3>
                  <p className="text-gray-600 leading-relaxed">Paul writes about the mystery of resurrection and the transformation from mortal to immortal. The passage reaches its climax with the triumphant declaration, &quot;Where, O death, is your victory? Where, O death, is your sting?&quot; This reading is especially fitting for services that emphasize triumph over death and the victory of faith.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Old Testament Readings</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The Old Testament offers readings that speak to the rhythms of life and death, the faithfulness of God, and the endurance of hope even in the darkest moments.</p>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Ecclesiastes 3:1 to 4</h3>
                  <p className="text-gray-600 leading-relaxed">This well known passage reminds us that there is a time for everything: a time to be born and a time to die, a time to weep and a time to laugh, a time to mourn and a time to dance. It acknowledges death as a natural part of life&apos;s rhythm rather than an aberration. Many families find comfort in its honesty and its reassurance that grief has its season.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Isaiah 25:8</h3>
                  <p className="text-gray-600 leading-relaxed">Isaiah prophesies that the Lord will swallow up death forever and wipe away the tears from all faces. This verse is brief but carries enormous weight. It connects the Old Testament promise of God&apos;s ultimate victory over death to the comfort families seek at a funeral. It is often paired with Revelation 21:4 for a reading that spans both testaments.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Psalm 46:1 to 3</h3>
                  <p className="text-gray-600 leading-relaxed">The psalmist declares that God is our refuge and strength, a very present help in trouble. Therefore we will not fear, though the earth gives way and the mountains fall into the sea. This passage is powerful at funerals because it does not pretend the world is not falling apart. It acknowledges the upheaval and declares that God is present in the middle of it.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Lamentations 3:22 to 23</h3>
                  <p className="text-gray-600 leading-relaxed">In the middle of a book defined by grief, the author pauses to declare that the steadfast love of the Lord never ceases and his mercies are new every morning. This passage is remarkable because it comes from a place of deep suffering, not comfort. It is an assertion of faith in the middle of pain, which makes it especially resonant for those who are grieving.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Psalms for Funerals</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The Psalms are the prayer book of the Bible, and many of them speak directly to grief, hope, and the presence of God in suffering. They are among the most accessible and universally recognized scripture readings for funeral services.</p>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Psalm 23</h3>
                  <p className="text-gray-600 leading-relaxed">The most recognized psalm in the world. &quot;The Lord is my shepherd, I shall not want.&quot; Its imagery of green pastures, still waters, and walking through the valley of the shadow of death has comforted the bereaved for centuries. Even people who are not religious often find this psalm deeply moving at a funeral.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Psalm 121</h3>
                  <p className="text-gray-600 leading-relaxed">This psalm of ascent begins with the question, &quot;I lift up my eyes to the mountains. Where does my help come from?&quot; and answers it with certainty: help comes from the Lord, who will neither slumber nor sleep. It is a psalm about watchfulness and protection, and it reassures mourners that God has not looked away.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Psalm 116:15</h3>
                  <p className="text-gray-600 leading-relaxed">A single, brief verse: &quot;Precious in the sight of the Lord is the death of his faithful servants.&quot; This reading is often used at the funerals of people who lived lives of deep faith. It reframes death from a loss to a homecoming, suggesting that God values and honors the moment of a believer&apos;s passing.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Psalm 34:18</h3>
                  <p className="text-gray-600 leading-relaxed">&quot;The Lord is close to the brokenhearted and saves those who are crushed in spirit.&quot; This verse speaks directly to the condition of everyone in the room at a funeral. It does not promise that the pain will go away. It promises that God is near to those who are suffering, which is sometimes exactly what a grieving person needs to hear.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Readings for Graveside Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Graveside services are typically shorter than church funerals, so brief, impactful readings work best. Psalm 23 is the most common graveside reading, and its familiar words can be recited from memory by many attendees. Revelation 21:4 is another strong choice for its brevity and its direct message of comfort.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Ecclesiastes 3:1 to 4 works well at a graveside because its imagery of seasons and times resonates with the outdoor setting. Psalm 34:18 is ideal for intimate graveside gatherings where the grief is raw and the group is small. A single, well chosen verse can carry more weight outdoors than a longer passage read indoors.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If you are reading at a graveside service, speak slowly and clearly. Outdoor acoustics can make it difficult for attendees to hear, especially if there is wind or traffic noise nearby. Consider providing printed copies of the reading so everyone can follow along.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Incorporate Readings Into the Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Work with your pastor, priest, or officiant to decide where scripture readings will fall in the order of service. In a traditional church funeral, readings typically occur after the opening prayer and before the homily or eulogy. In a less formal memorial service, readings can be placed wherever they feel natural.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Family members or close friends often read the scripture passages. This adds a personal touch and gives loved ones a way to participate in the service. If the reader is nervous, encourage them to practice beforehand and remind them that it is okay to pause or show emotion. Having a printed copy in a large, readable font helps enormously.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Some families choose to print the scripture readings in the funeral program so that attendees can read along. This is especially helpful for well known passages like Psalm 23, where the congregation may want to read or recite the words together.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <div key={i} className={i < faqs.length - 1 ? 'mb-6 pb-6 border-b border-gray-100' : ''}>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/bible-verses-for-funerals" className="text-blue-700 hover:underline">Bible Verses for Funerals: Comfort in Scripture</Link></li>
                <li><Link href="/blog/catholic-funeral-traditions" className="text-blue-700 hover:underline">Catholic Funeral Traditions: What to Expect</Link></li>
              </ul>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Browse Funeral Homes Near You</h2>
              <p className="text-gray-600 mb-6">Find funeral homes in your area that can help plan a meaningful service.</p>
              <Link href="/states" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
