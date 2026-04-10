import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Happens to the Body During Cremation? A Clear Explanation',
  description: 'Cremation is chosen by over 60% of Americans but few understand what actually happens. Here is a clear, respectful explanation of the cremation process.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/what-happens-to-the-body-during-cremation' },
};

const faqs = [
  { q: 'What temperature is used in cremation?', a: 'Cremation chambers operate at temperatures between 1,400 and 1,800 degrees Fahrenheit. This intense heat is necessary to reduce the body to bone fragments. The exact temperature may vary depending on the equipment and the crematory.' },
  { q: 'How long does the cremation process take?', a: 'The actual cremation takes approximately 2 to 3 hours for an average sized adult. Additional time is needed afterward for cooling and processing the remains, so the entire process from start to finish may take 4 to 5 hours.' },
  { q: 'Are the ashes really the person&apos;s remains?', a: 'Yes. What families receive are processed bone fragments. After cremation, the remaining bone material is placed in a machine called a cremulator, which grinds the fragments into a fine, consistent powder. This is what most people refer to as ashes.' },
  { q: 'Can you witness a cremation?', a: 'Yes, many crematories allow family members to be present at the start of the cremation. Some faith traditions, including Hinduism, consider witnessing the cremation an important part of the farewell. Ask your funeral director about witness cremation options in your area.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function WhatHappensToTheBodyDuringCremationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">What Happens to the Body During Cremation? A Clear Explanation</h1>
              <p className="text-xl text-gray-600 mb-4">A respectful, straightforward look at the cremation process from start to finish.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Cremation is now chosen by over 60% of Americans, yet most people have little understanding of what the process actually involves. Here is a clear, respectful explanation of what happens during cremation so you can feel informed and at ease with your family&apos;s decision.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Cremation Process Step by Step</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Identification and Authorization</h3>
                    <p className="text-gray-600 text-sm">Before anything begins, the crematory verifies the identity of the deceased using documentation and an identification tag that stays with the body throughout the entire process. The family or legal next of kin must sign an authorization form, and any required waiting periods mandated by the state must be observed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Preparation of the Body</h3>
                    <p className="text-gray-600 text-sm">The body is prepared by removing any medical devices that could be hazardous during cremation, such as pacemakers or battery powered implants. Jewelry and personal items are returned to the family unless the family requests otherwise. The body is then placed in a combustible container, typically a simple wood or cardboard enclosure.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">The Cremation Chamber</h3>
                    <p className="text-gray-600 text-sm">The container holding the body is placed into the cremation chamber, also called a retort. The chamber is preheated to between 1,400 and 1,800 degrees Fahrenheit. At these temperatures, the body is reduced through a combination of intense heat and evaporation. Only bone fragments remain at the end of the process.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Processing the Remains</h3>
                    <p className="text-gray-600 text-sm">After the chamber cools, the remaining bone fragments are carefully removed. Any metal from dental work, surgical implants, or the container is separated using magnets or by hand. The bone fragments are then placed in a cremulator, which processes them into the fine, uniform powder that families receive.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Return to the Family</h3>
                    <p className="text-gray-600 text-sm">The processed remains are placed in a temporary container or the urn selected by the family. The identification tag is included to confirm the remains. Most crematories return ashes to the family within a few days of the cremation, though timelines vary by provider.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Long Does Cremation Take?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The cremation itself typically takes 2 to 3 hours for an average sized adult. Factors that affect the duration include the size of the body, the type of container used, and the temperature of the cremation chamber. After the cremation is complete, additional time is needed for the chamber to cool and for the remains to be processed.</p>
              <p className="text-gray-600 leading-relaxed">From the time a family authorizes cremation to the time they receive the ashes, the total timeline is usually 3 to 7 days. This accounts for any state mandated waiting periods, scheduling at the crematory, and the processing and packaging of the remains.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Are the Remains?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The remains that families receive are not ash in the way most people imagine. They are processed bone fragments ground into a fine, pale gray powder. The powder is typically gritty in texture and weighs between 3 and 9 pounds for an adult, depending on the person&apos;s bone structure and size.</p>
              <p className="text-gray-600 leading-relaxed">It is worth knowing that nothing from the soft tissue remains. The intense heat of the cremation chamber reduces everything except bone to gases and water vapor. What you receive is entirely mineral in composition, primarily calcium phosphate. This is why the remains are safe to scatter, bury, or keep at home.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions Families Often Ask</h2>
              <p className="text-gray-600 leading-relaxed mb-4">It is completely normal to have questions about what happens during cremation. Many families worry about whether the process is dignified, whether the correct remains are returned, or whether their loved one experiences anything. Crematories are regulated by state and local authorities, and strict identification protocols are followed at every stage.</p>
              <p className="text-gray-600 leading-relaxed">The body does not feel anything during cremation. The process takes place after death, and the person has no awareness or sensation. If you are concerned about the details, most funeral homes and crematories are willing to walk you through their procedures and answer questions directly.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/burial-vs-cremation" className="text-slate-600 hover:text-slate-800 font-medium">Burial vs Cremation: Costs, Process and How to Decide</Link></li>
                <li><Link href="/blog/what-to-do-with-ashes-after-cremation" className="text-slate-600 hover:text-slate-800 font-medium">What to Do with Ashes After Cremation</Link></li>
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
