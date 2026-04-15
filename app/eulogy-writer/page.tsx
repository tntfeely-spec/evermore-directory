import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import EulogyWriterTool from '@/components/EulogyWriterTool';

export const metadata: Metadata = {
  title: 'Free AI Eulogy Writer | Generate a Eulogy in Minutes',
  description: 'Free AI eulogy writer that generates a complete, personalized eulogy in minutes. Enter details about your loved one and the AI writes a meaningful tribute you can deliver.',
  alternates: { canonical: 'https://funeralhomedirectories.com/eulogy-writer' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is this eulogy writer free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free with no account required. You can generate as many eulogies as you need without signing up or paying anything.' } },
    { '@type': 'Question', name: 'How long does it take to generate a eulogy?', acceptedAnswer: { '@type': 'Answer', text: 'Under 2 minutes once you fill in the details about your loved one. The AI generates a complete draft that you can then personalize and practice.' } },
    { '@type': 'Question', name: 'Can I edit the generated eulogy?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Copy the text and edit it however you like. The generated eulogy is a starting point. Replace details, add your own memories, and make it yours before delivering.' } },
    { '@type': 'Question', name: 'How long should a eulogy be?', acceptedAnswer: { '@type': 'Answer', text: 'Most eulogies run 3 to 5 minutes, which is 400 to 600 words. Shorter is often more powerful. You can select your desired length in the form.' } },
    { '@type': 'Question', name: 'What if I get emotional while delivering it?', acceptedAnswer: { '@type': 'Answer', text: 'Pause, take a breath, and continue. Everyone in the room understands. It is not a flaw, it is love. Have a backup reader standing nearby if you need one.' } },
    { '@type': 'Question', name: 'Can I use this for any relationship?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The tool adjusts tone and language based on your relationship to the person. It works for parents, spouses, grandparents, siblings, friends, and colleagues.' } },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Deliver a Eulogy',
  description: 'Practical steps for delivering a eulogy at a funeral or memorial service.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Print in large font double spaced', text: 'Print your eulogy in at least 14 point font with double spacing. This makes it easy to read through tears or shaking hands.' },
    { '@type': 'HowToStep', position: 2, name: 'Practice out loud at least 3 times', text: 'Reading silently is not the same as speaking. Practice the full eulogy out loud to hear how it sounds and feel where the emotional moments are.' },
    { '@type': 'HowToStep', position: 3, name: 'Mark emotional spots with a pause note', text: 'Put a small mark in the margin where you know you might get emotional. When you reach those spots, pause, take a breath, and continue when ready.' },
    { '@type': 'HowToStep', position: 4, name: 'Aim for 3 to 5 minutes', text: 'If your eulogy runs longer than 7 minutes, cut the weakest section. A focused short eulogy is always more powerful than a long one.' },
    { '@type': 'HowToStep', position: 5, name: 'Have a backup reader nearby', text: 'Ask a trusted person to stand beside you with a copy. If you cannot continue, they can finish reading for you. This removes the pressure of having to get through it alone.' },
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Evermore AI Eulogy Writer',
  applicationCategory: 'UtilitiesApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  operatingSystem: 'Web',
  description: 'Free AI eulogy writer that generates a complete personalized eulogy in minutes based on details you provide about your loved one.',
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free AI Eulogy Writer',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['article > section:first-of-type'] },
};

export default function EulogyWriterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, howToSchema, softwareSchema, speakableSchema]) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Free AI Eulogy Writer</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Generate a complete, personalized eulogy in minutes. No writing experience needed.</p>
            </header>

            <section className="mb-12">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">Our free AI eulogy writer generates a complete personalized eulogy in minutes. Enter your loved one&apos;s name, your relationship, and a few memories, and the AI writes a heartfelt tribute you can deliver at the funeral or memorial service. No writing experience needed.</p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
                <EulogyWriterTool />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Delivering a Eulogy</h2>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li><strong>Print in large font double spaced.</strong> At least 14 point font. Your hands may shake and your eyes may blur. Large text helps.</li>
                <li><strong>Practice out loud at least 3 times.</strong> Reading silently is not the same as speaking. You need to hear how the words feel in your mouth.</li>
                <li><strong>Mark emotional spots with a pause note.</strong> Put a small mark where you know you will get emotional. When you reach that spot, pause, breathe, and continue.</li>
                <li><strong>It is okay to cry.</strong> Pause, take a breath, and continue when ready. Everyone in the room understands. Tears are not weakness. They are love.</li>
                <li><strong>Aim for 3 to 5 minutes.</strong> A focused 3 minute eulogy is more powerful than a rambling 10 minute one.</li>
                <li><strong>Make brief eye contact occasionally.</strong> Look up from your notes during lines you have practiced. Brief eye contact connects the words to the room.</li>
              </ul>
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
                <li><Link href="/blog/eulogy-examples" className="text-slate-600 hover:text-slate-800 font-medium">Eulogy Examples: Real Samples for Any Relationship</Link></li>
                <li><Link href="/blog/eulogy-template" className="text-slate-600 hover:text-slate-800 font-medium">Free Eulogy Template: Fill in the Blank</Link></li>
                <li><Link href="/blog/how-to-write-a-eulogy" className="text-slate-600 hover:text-slate-800 font-medium">How to Write a Eulogy: A Step by Step Guide</Link></li>
                <li><Link href="/blog/short-eulogy-examples" className="text-slate-600 hover:text-slate-800 font-medium">Short Eulogy Examples: Brief Tributes Under 3 Minutes</Link></li>
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
