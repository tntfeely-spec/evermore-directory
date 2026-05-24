import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Funeral Poems for Mothers: 18 Pieces Families Read at Services',
  description: 'Find 18 funeral poems for mothers including short, traditional, modern, and poems from daughters and sons. Public domain and original poems for memorial services.',
  keywords: 'funeral poems for mother, funeral poems for mom, poems for mothers funeral, memorial poems for mother, funeral reading for mother',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/funeral-poems-for-mothers' },
  openGraph: { title: 'Funeral Poems for Mothers: 18 Pieces for Services', url: 'https://funeralhomedirectories.com/blog/funeral-poems-for-mothers', type: 'article' },
};

const faqs = [
  { q: 'How do I choose the right funeral poem for my mother?', a: 'Choose a poem that reflects your mother as a person. If she was warm and nurturing, a tender poem about a mother\'s hands or voice works well. If she was strong and independent, choose something that honors that strength. Read the poem aloud before the service to make sure you can get through it. The right poem is the one that makes you think of her.' },
  { q: 'How long should a funeral poem be?', a: 'Most funeral poems read at services are 8 to 20 lines, which takes about 30 seconds to 2 minutes to read aloud. Shorter poems are easier to deliver when emotions are high. If you want a longer reading, consider asking someone else to read it on your behalf.' },
  { q: 'Can I write my own poem for my mother\'s funeral?', a: 'Yes. A personal poem written by a family member is one of the most meaningful readings possible. It does not need to rhyme or follow any particular structure. Speak from the heart about what your mother meant to you, a specific memory, or what you want to say to her now.' },
  { q: 'When during the service should the poem be read?', a: 'Funeral poems are typically read after the opening remarks and before or after the eulogy. Some families place a poem at the very end as a closing reflection. Others include one at the graveside or during a scattering ceremony. Ask the officiant to suggest the best placement for your service.' },
  { q: 'Is it okay to use a religious poem at a secular funeral?', a: 'Yes. Many families use religious or spiritual poems even at secular services because the language of comfort, peace, and hope transcends specific beliefs. Choose based on what your mother would have appreciated, not on the format of the service.' },
];

export default function FuneralPoemsForMothersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Funeral Poems for Mothers: 18 Pieces Families Have Read at Services", author: { "@type": "Person", name: "Terry Feely", url: "https://funeralhomedirectories.com/about" }, publisher: { "@type": "Organization", name: "Evermore Directory", url: "https://funeralhomedirectories.com" }, datePublished: "2026-05-12", dateModified: "2026-05-12", url: "https://funeralhomedirectories.com/blog/funeral-poems-for-mothers" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://funeralhomedirectories.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://funeralhomedirectories.com/blog" }, { "@type": "ListItem", position: 3, name: "Funeral Poems for Mothers" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Poems for Mothers: 18 Pieces Families Have Read at Services</h1>
              <p className="text-sm text-gray-500 mb-3">By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026</p>
              <p className="text-xl text-gray-600">A curated collection of poems that honor a mother&apos;s memory, organized by length and tone so you can find the right one for your service.</p>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Poetry gives families a way to express grief that ordinary conversation cannot reach. The right poem at a mother&apos;s funeral captures something true about who she was, what she gave, and what her absence means. The poems below are organized by length, tone, and perspective so you can find one that fits your service and your family.
              </p>
              <p className="text-gray-600 mb-4">
                As a former first responder, I have sat with families in the hours after losing a mother. The question of what to say at the service comes up almost immediately. These poems are here so you do not have to search when you are already carrying more than enough.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Short Funeral Poems for Mother</h2>
              <p className="text-gray-600 mb-6">These short poems are ideal when emotions are running high and brevity is a kindness. Each takes less than 30 seconds to read aloud.</p>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">1. &quot;Remember&quot; by Christina Rossetti (1862, public domain)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">Remember me when I am gone away,
Gone far away into the silent land;
When you can no more hold me by the hand,
Nor I half turn to go yet turning stay.
Remember me when no more day by day
You tell me of our future that you plann&apos;d:
Only remember me; you understand
It will be late to counsel then or pray.
Yet if you should forget me for a while
And afterwards remember, do not grieve:
For if the darkness and corruption leave
A vestige of the thoughts that once I had,
Better by far you should forget and smile
Than that you should remember and be sad.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">2. From &quot;Song&quot; by Christina Rossetti (1862, public domain)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">When I am dead, my dearest,
Sing no sad songs for me;
Plant thou no roses at my head,
Nor shady cypress tree:
Be the green grass above me
With showers and dewdrops wet;
And if thou wilt, remember,
And if thou wilt, forget.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">3. &quot;The Recipe Card&quot; (Original poem written for Evermore Directory)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">I found her recipe card in the drawer,
handwriting faded, edges soft with flour.
Chicken soup, it said. Two cups of broth.
One bay leaf. Salt to taste.
She never wrote down the last ingredient,
the one that made it hers:
standing at the stove on a Tuesday night,
humming something none of us could name.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">4. &quot;Her Hands&quot; (Original poem written for Evermore Directory)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">Her hands made bread and braided hair,
wiped tears and pointed out the stars.
Her hands held mine the day I started school,
and held mine again the day I said goodbye.
I did not know a pair of hands could hold
so much of what it means to be alive.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">5. &quot;If I Should Go&quot; (Original poem written for Evermore Directory)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">If I should go before you,
do not follow me into the dark.
Stand in the kitchen where I stood,
make the recipe I made,
and know that every dish I cooked
was seasoned with a quiet prayer
that you would always have enough.</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Traditional Funeral Poems for Mother</h2>
              <p className="text-gray-600 mb-6">These longer, more formal poems carry a traditional tone appropriate for church services and formal memorials.</p>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">6. From &quot;Crossing the Bar&quot; by Alfred, Lord Tennyson (1889, public domain)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">Sunset and evening star,
And one clear call for me!
And may there be no moaning of the bar,
When I put out to sea,
But such a tide as moving seems asleep,
Too full for sound and foam,
When that which drew from out the boundless deep
Turns again home.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">7. &quot;Because I could not stop for Death&quot; by Emily Dickinson (1890, public domain), excerpt</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">Because I could not stop for Death,
He kindly stopped for me;
The Carriage held but just Ourselves
And Immortality.
We slowly drove, He knew no haste,
And I had put away
My labor and my leisure too,
For His Civility.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">8. From &quot;Requiescat&quot; by Oscar Wilde (1881, public domain)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">Tread lightly, she is near
Under the snow,
Speak gently, she can hear
The daisies grow.
All her bright golden hair
Tarnished with rust,
She that was young and fair
Fallen to dust.
Peace, peace, she cannot hear
Lyre or sonnet,
All my life&apos;s buried here,
Heap earth upon it.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">9. From &quot;We Are Seven&quot; by William Wordsworth (1798, public domain), adapted excerpt</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">A simple child,
That lightly draws its breath,
And feels its life in every limb,
What should it know of death?</p>
                <p className="text-gray-600 text-sm mt-2">This short verse from Wordsworth is often read at a mother&apos;s funeral when she was taken too soon, or when children are present and the family wants to acknowledge the mystery of loss.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">10. &quot;Death is Nothing at All&quot; by Henry Scott Holland (1910, public domain)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">Death is nothing at all.
I have only slipped away to the next room.
I am I and you are you.
Whatever we were to each other,
That, we still are.
Call me by my old familiar name.
Speak to me in the easy way
which you always used.
Laugh as we always laughed
at the little jokes we enjoyed together.
Play, smile, think of me. Pray for me.
Let my name be ever the household word
that it always was.
Let it be spoken without effect.
Life means all that it ever meant.
It is the same that it ever was.
There is absolute unbroken continuity.
Why should I be out of mind
because I am out of sight?</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Modern Funeral Poems for Mother</h2>
              <p className="text-gray-600 mb-6">These original poems carry a contemporary voice for families who want something that feels current and personal.</p>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">11. &quot;The Last Ordinary Day&quot; (Original poem written for Evermore Directory)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">There was a last time she called my name
and I did not know it was the last.
A last time she laughed at something on TV.
A last time she stirred her coffee
with that spoon she always used.
If I had known, I would have listened longer.
I would have sat down.
I would have said: tell me that story again.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">12. &quot;What She Left&quot; (Original poem written for Evermore Directory)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">She left the garden half planted,
a sweater on the back of a chair,
a note on the counter that says
&quot;don&apos;t forget milk.&quot;
She left her voice in my head
saying be careful, be kind, be brave.
She left more than she knew.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">13. &quot;Still Here&quot; (Original poem written for Evermore Directory)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">I find her in the strangest places now:
the way the light falls through the kitchen window,
the smell of laundry fresh from the dryer,
a song on the radio she used to sing along to
badly, and with all her heart.
She is not gone.
She is just everywhere now instead of somewhere.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">14. &quot;Permission&quot; (Original poem written for Evermore Directory)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">You have permission to cry at the grocery store.
You have permission to laugh at her funeral.
You have permission to be angry at the sky,
to eat cereal for dinner,
to call her phone just to hear her voicemail.
Grief does not follow rules.
She would not want you to follow them either.</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Funeral Poems for Mother from a Daughter</h2>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">15. &quot;Like Her&quot; (Original poem written for Evermore Directory)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">I catch myself standing the way she stood,
hands on hips, head tilted,
looking at a problem like it is already solved.
I open my mouth and her words come out.
I look in the mirror and see her face
slowly becoming mine.
She is not gone.
She is becoming me.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">16. &quot;The Things She Taught Me&quot; (Original poem written for Evermore Directory)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">She taught me to tie my shoes and face the hard days.
She taught me to say thank you and mean it.
She taught me that showing up matters
more than being perfect.
She taught me everything I know about being brave,
and the last thing she taught me
was how to say goodbye.</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Funeral Poems for Mother from a Son</h2>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">17. &quot;What I Owe Her&quot; (Original poem written for Evermore Directory)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">She drove me to practice in the rain.
She sat through every game.
She stayed up when I missed curfew
and never once said I told you so.
Every good thing I have done since then
started in that kitchen,
with her voice saying:
you can do this.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">18. &quot;The Strongest Person I Knew&quot; (Original poem written for Evermore Directory)</p>
                <p className="text-gray-700 leading-relaxed italic whitespace-pre-line">She carried groceries in one arm and a baby in the other.
She worked two jobs and still made dinner.
She never complained about what she did not have.
She just kept going.
I spent my whole life thinking I was tough,
but she was the strongest person in every room
and never once needed anyone to know it.</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Choose a Funeral Poem for Your Mother</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>Match her personality.</strong> A formal, reserved mother deserves a dignified poem. A warm, funny mother deserves something that captures her spirit.</span></li>
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>Consider who will read it.</strong> If you plan to read it yourself, choose something short enough that you can get through it. If someone else will read, you can choose something longer.</span></li>
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>Religious or secular.</strong> Match the tone of the service. A church funeral may call for a hymn-like poem. A celebration of life may call for something more personal.</span></li>
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>Read it aloud first.</strong> Poems that look right on paper can feel different when spoken. Read your choice out loud at least once before the service.</span></li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Read the Poem During the Service</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>After the opening remarks:</strong> Sets an emotional tone for the service. Best for shorter, reflective poems.</span></li>
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>Before the eulogy:</strong> Transitions from ceremony into personal remembrance. Works well for traditional poems.</span></li>
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>After the eulogy:</strong> Provides a moment of reflection after personal stories have been shared. Good for modern or original poems.</span></li>
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>As the closing:</strong> The last words the gathering hears. Choose something hopeful or peaceful.</span></li>
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>At the graveside or scattering:</strong> An intimate moment for a short, powerful poem. Four to eight lines is ideal.</span></li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/how-to-write-a-eulogy" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">How to Write a Eulogy</h3><p className="text-sm text-gray-600">Step by step guide to writing a eulogy for a funeral.</p></Link>
                <Link href="/blog/eulogy-for-mother" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">Eulogy for Mother</h3><p className="text-sm text-gray-600">Examples and templates for eulogizing your mother.</p></Link>
                <Link href="/blog/celebration-of-life-ideas" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">Celebration of Life Ideas</h3><p className="text-sm text-gray-600">Creative ways to honor someone who has passed.</p></Link>
                <Link href="/blog/funeral-songs-guide" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Songs Guide</h3><p className="text-sm text-gray-600">Music selections for funeral and memorial services.</p></Link>
              </div>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 7,395+ funeral homes and cremation providers across all 50 states. Compare prices, services, and locations. Free for families.</p>
            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">You Might Also Find Helpful</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/eulogy-for-mother" className="text-slate-600 hover:text-slate-800 font-medium">Eulogy for a Mother: Examples, Tips, and How to Write O &rarr;</Link></li>
                <li><Link href="/blog/scripture-readings-for-funerals" className="text-slate-600 hover:text-slate-800 font-medium">Scripture Readings for Funerals: New Testament and Old  &rarr;</Link></li>
                <li><Link href="/blog/bible-verses-for-funerals" className="text-slate-600 hover:text-slate-800 font-medium">Bible Verses for Funerals: Comfort, Hope, and Remembran &rarr;</Link></li>
                <li><Link href="/blog/funeral-readings-and-poems" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Readings and Poems: A Collection for Any Servic &rarr;</Link></li>
              </ul>
            </section>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
