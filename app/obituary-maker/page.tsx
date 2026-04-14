import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ObituaryMakerTool from '@/components/ObituaryMakerTool';

export const metadata: Metadata = {
  title: 'Free AI Obituary Maker | Generate an Obituary in Minutes',
  description: 'Free AI obituary maker that generates a complete, personalized obituary in minutes. Fill in the details about your loved one and our AI writes a meaningful tribute you can edit and use.',
  alternates: { canonical: 'https://funeralhomedirectories.com/obituary-maker' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is this obituary maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free with no account required. You can generate as many obituaries as you need without signing up or paying anything.' } },
    { '@type': 'Question', name: 'How long does it take to generate an obituary?', acceptedAnswer: { '@type': 'Answer', text: 'Under 2 minutes once you fill in the details about your loved one. The AI generates a complete draft that you can then edit and personalize.' } },
    { '@type': 'Question', name: 'Can I edit the generated obituary?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Copy the text and edit it however you like before publishing. The generated obituary is a starting point that you should review and adjust to make sure every detail is accurate and every word feels right.' } },
    { '@type': 'Question', name: 'What information do I need to write an obituary?', acceptedAnswer: { '@type': 'Answer', text: 'The basics are full name, dates, survivors, and service details. The more personality details you add such as hobbies, career, and a favorite memory, the more personalized and meaningful the obituary will be.' } },
    { '@type': 'Question', name: 'How long should an obituary be?', acceptedAnswer: { '@type': 'Answer', text: 'Most newspaper obituaries are 150 to 250 words. Online obituaries can be longer with no additional cost. Our tool generates obituaries in the 200 to 400 word range which works for both formats.' } },
    { '@type': 'Question', name: 'Can I use this for a father, mother, or spouse?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The tool works for any relationship. Adjust the tone and add specific memories to personalize the obituary for your mother, father, spouse, grandparent, sibling, friend, or anyone you have lost.' } },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Use the AI Obituary Maker',
  description: 'Generate a personalized obituary in 5 simple steps.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Enter your loved one\'s details', text: 'Fill in the form with their name, age, city, career, personality, survivors, and hobbies. The more details you provide, the more personal the obituary will be.' },
    { '@type': 'HowToStep', position: 2, name: 'Choose your preferred tone', text: 'Select from Warm and Personal, Traditional and Formal, Celebration of Life, or Brief and Simple.' },
    { '@type': 'HowToStep', position: 3, name: 'Click Generate Obituary', text: 'The AI generates a complete obituary draft in under 2 minutes based on the details you provided.' },
    { '@type': 'HowToStep', position: 4, name: 'Read and personalize the output', text: 'Review the draft carefully. Edit names, dates, and details for accuracy. Add any memories or stories that make it uniquely theirs.' },
    { '@type': 'HowToStep', position: 5, name: 'Copy and publish', text: 'Copy the finished obituary and submit it to your local newspaper, funeral home, legacy.com, or social media.' },
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Evermore AI Obituary Maker',
  applicationCategory: 'UtilitiesApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  operatingSystem: 'Web',
  description: 'Free AI obituary maker that generates a complete personalized obituary in minutes based on details you provide about your loved one.',
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free AI Obituary Maker',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['article > section:first-of-type'] },
};

export default function ObituaryMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, howToSchema, softwareSchema, speakableSchema]) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Free AI Obituary Maker</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Generate a complete, personalized obituary in minutes. No writing experience needed.</p>
            </header>

            <section className="mb-12">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">Our free AI obituary maker generates a complete, personalized obituary in minutes. Enter your loved one&apos;s name, life details, and service information, and the AI writes a meaningful tribute you can edit, download, and publish. No writing experience needed.</p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
                <ObituaryMakerTool />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Free Obituary Templates You Can Use Right Now</h2>
              <p className="text-gray-600 mb-6">If you prefer to write the obituary yourself, here are four templates you can copy and fill in. Replace everything in [brackets] with the real details.</p>

              <div className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Template 1: Short (50 to 75 words)</h3>
                  <p className="text-gray-700 leading-relaxed italic">[Full Name], [age], of [City, State], passed away on [date]. [He/She] was born on [birth date] in [birthplace] and spent [his/her] life [brief description of career or character]. [He/She] is survived by [family members]. A [service type] will be held on [date] at [location].</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Template 2: Standard (150 to 200 words)</h3>
                  <p className="text-gray-700 leading-relaxed italic">[Full Name], [age], of [City, State], passed away [peacefully/unexpectedly] on [date] at [location of death]. Born on [birth date] in [birthplace] to [parents&apos; names], [he/she] grew up in [hometown] and graduated from [school].</p>
                  <p className="text-gray-700 leading-relaxed italic mt-2">[He/She] spent [his/her] career as a [occupation] at [employer/organization], where [he/she] was known for [professional quality]. Outside of work, [he/she] loved [hobbies and passions]. [He/She] was a devoted [spouse/parent/grandparent] who [personal quality or habit].</p>
                  <p className="text-gray-700 leading-relaxed italic mt-2">[He/She] is survived by [spouse], [children], [grandchildren], and [siblings]. [He/She] was preceded in death by [names]. A [service type] will be held on [date] at [time] at [location]. In lieu of flowers, the family requests donations to [charity].</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Template 3: Celebration of Life Style</h3>
                  <p className="text-gray-700 leading-relaxed italic">If you ever [characteristic action or habit], you knew [Full Name]. [He/She] was the kind of person who [defining personality trait], and everyone who met [him/her] remembers [specific quality].</p>
                  <p className="text-gray-700 leading-relaxed italic mt-2">[First Name] lived [his/her] [age] years with [quality: generosity, humor, courage, kindness]. Born in [birthplace] on [date], [he/she] built a life in [City] centered around [family, career, passions]. [He/She] worked as a [occupation] and loved [hobbies].</p>
                  <p className="text-gray-700 leading-relaxed italic mt-2">[He/She] leaves behind [family members] and a community of friends who will carry [his/her] [legacy quality] forward. A celebration of [his/her] life will be held on [date] at [location].</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Template 4: Veteran Obituary</h3>
                  <p className="text-gray-700 leading-relaxed italic">[Full Name], [age], [rank] [branch of service] (Ret.), of [City, State], passed away on [date]. Born on [birth date] in [birthplace], [he/she] served in the [branch] from [year] to [year], including [deployment or service details].</p>
                  <p className="text-gray-700 leading-relaxed italic mt-2">After [his/her] military career, [he/she] [post-military career or activities]. [He/She] was a proud veteran who [quality or involvement with veterans organizations].</p>
                  <p className="text-gray-700 leading-relaxed italic mt-2">[He/She] is survived by [family]. A funeral with military honors will be held on [date] at [location]. Burial will follow at [cemetery, including national cemetery if applicable]. In lieu of flowers, donations may be made to [veterans organization].</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use This Obituary Maker</h2>
              <ol className="space-y-4">
                <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span><div><strong className="text-gray-900">Enter your loved one&apos;s details</strong><p className="text-gray-600 text-sm mt-1">Fill in the form with their name, age, city, career, personality, survivors, and hobbies. The more details you provide, the more personal the obituary will be.</p></div></li>
                <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span><div><strong className="text-gray-900">Choose your preferred tone</strong><p className="text-gray-600 text-sm mt-1">Select Warm and Personal, Traditional and Formal, Celebration of Life, or Brief and Simple.</p></div></li>
                <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span><div><strong className="text-gray-900">Click Generate Obituary</strong><p className="text-gray-600 text-sm mt-1">The AI generates a complete draft in under 2 minutes.</p></div></li>
                <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span><div><strong className="text-gray-900">Read and personalize</strong><p className="text-gray-600 text-sm mt-1">Review for accuracy. Edit names, dates, and details. Add memories or stories that make it uniquely theirs.</p></div></li>
                <li className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span><div><strong className="text-gray-900">Copy and publish</strong><p className="text-gray-600 text-sm mt-1">Copy the finished obituary and submit it to your newspaper, funeral home, legacy.com, or social media.</p></div></li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Where to Publish Your Obituary</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p><strong className="text-gray-900">Local newspapers:</strong> Call the obituary desk or submit online through the newspaper&apos;s website. Most papers charge by the line or by the word. Expect to pay $200 to $1,500 depending on length and publication.</p>
                <p><strong className="text-gray-900">Legacy.com and online memorial sites:</strong> You can publish an obituary on legacy.com for free (basic listing) or for a fee (enhanced with photos and guest book). Other sites like everplans.com and echovita.com also accept submissions.</p>
                <p><strong className="text-gray-900">Funeral home website:</strong> Most funeral homes will publish the obituary on their website as part of their services at no extra charge. Ask your funeral director.</p>
                <p><strong className="text-gray-900">Social media:</strong> Many families share the obituary on Facebook, Instagram, or CaringBridge. Wait until close family has been notified privately before posting publicly.</p>
              </div>
            </section>

            <section className="mb-12 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqSchema.mainEntity.map((q) => (
                  <div key={q.name}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{q.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{q.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Resources</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary: A Complete Guide</Link></li>
                <li><Link href="/blog/obituary-template" className="text-slate-600 hover:text-slate-800 font-medium">Free Obituary Templates</Link></li>
                <li><Link href="/blog/obituary-examples" className="text-slate-600 hover:text-slate-800 font-medium">Obituary Examples: Good, Simple, and Meaningful</Link></li>
                <li><Link href="/blog/obituary-vs-death-notice" className="text-slate-600 hover:text-slate-800 font-medium">Obituary vs Death Notice: What Is the Difference</Link></li>
                <li><Link href="/blog/how-to-write-a-eulogy" className="text-slate-600 hover:text-slate-800 font-medium">How to Write a Eulogy</Link></li>
                <li><Link href="/blog/sample-eulogy-for-mother-from-daughter" className="text-slate-600 hover:text-slate-800 font-medium">Sample Eulogy for a Mother from a Daughter</Link></li>
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
