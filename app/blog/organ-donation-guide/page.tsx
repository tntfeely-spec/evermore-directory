import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Organ Donation: How It Works, Who Can Donate, and What to Know',
  description: 'Organ donation saves lives and is one of the most meaningful decisions a person can make. Here is how organ donation works, what organs can be donated, and what disqualifies a donor.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/organ-donation-guide' },
};

const faqs = [
  { q: 'What organs can be donated?', a: 'A single organ donor can potentially save up to eight lives by donating the heart, both lungs, the liver, both kidneys, the pancreas, and the intestines. In addition to organs, donors can give tissue including corneas, skin, bone, tendons, heart valves, and blood vessels. Tissue donation can help as many as 75 additional people. Both organ and tissue donation are evaluated at the time of death to determine which organs and tissues are viable for transplant based on the donor&apos;s medical condition.' },
  { q: 'What disqualifies you from being an organ donor?', a: 'Very few conditions absolutely disqualify someone from being an organ donor. Active cancer that has spread to multiple organs, certain active infections, and a small number of rare conditions may prevent organ donation, but most medical conditions are evaluated on a case by case basis at the time of death. Age is not a disqualifying factor. People in their 70s, 80s, and beyond have successfully donated organs and tissue. The best approach is to register as a donor and let the medical team determine what can be used at the time of death.' },
  { q: 'Can cancer patients donate organs?', a: 'It depends on the type and stage of cancer. Active cancer that has metastasized to multiple organs generally disqualifies a person from donating those organs, but some cancers do not spread to every organ, and unaffected organs may still be viable. Tissue donation, such as corneas, may still be possible even when organ donation is not. People with a history of cancer that has been treated and is in remission may also be eligible to donate. Every case is evaluated individually by the organ procurement organization at the time of death.' },
  { q: 'Does organ donation affect funeral arrangements?', a: 'Organ donation does not prevent or significantly alter funeral arrangements. The organ recovery process is performed in a hospital operating room with the same care and respect given to any surgical procedure. The donor&apos;s body is surgically closed and returned to the family, and an open casket funeral is still possible. The recovery process typically takes 12 to 24 hours, which may cause a slight delay in funeral arrangements, but funeral homes are experienced in coordinating with organ procurement organizations.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function OrganDonationGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Organ Donation: How It Works, Who Can Donate, and What to Know</h1>
              <p className="text-xl text-gray-600 mb-4">Organ donation is one of the most generous acts a person can choose. Here is how the process works, what can be donated, and how to make sure your wishes are honored.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Organ Donation Works</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Organ donation occurs after a person has been declared dead, either through brain death or cardiac death. Brain death means all brain function, including the brainstem, has permanently ceased, even though the body may still be maintained on a ventilator. Cardiac death means the heart has stopped beating and cannot be restarted. In both cases, the person is legally and medically dead before any organs are recovered.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Once death is declared and the patient is identified as a potential donor, the local organ procurement organization is contacted. A transplant coordinator evaluates the donor&apos;s medical history and the condition of each organ to determine which organs and tissues are viable for transplant. The coordinator then works with the United Network for Organ Sharing (UNOS) to match available organs with recipients on the national waiting list based on factors including blood type, body size, medical urgency, time on the waiting list, and geographic distance.</p>
              <p className="text-gray-600 leading-relaxed">The recovery surgery is performed in a hospital operating room by a specialized surgical team. Each organ is carefully removed, preserved, and transported to the recipient&apos;s hospital for transplant. The entire process is conducted with the same level of professionalism and respect given to any surgical procedure. After recovery, the donor&apos;s body is closed and returned to the family for funeral arrangements.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Organs and Tissues Can Be Donated</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A single organ donor can save up to eight lives. The organs that can be transplanted include the heart, both lungs, the liver, both kidneys, the pancreas, and the intestines. Each of these organs can be the difference between life and death for a person on the transplant waiting list. As of 2026, more than 100,000 people in the United States are waiting for an organ transplant, and a new name is added to the list every eight minutes.</p>
              <p className="text-gray-600 leading-relaxed mb-4">In addition to organs, a donor can give tissue that helps dozens of additional people. Corneas can restore sight. Skin grafts help burn victims heal. Bone and tendon donations are used in orthopedic surgeries and reconstructive procedures. Heart valves can be transplanted into patients with valve disease. Blood vessels are used in bypass surgeries. Tissue donation is possible in a wider range of circumstances than organ donation, because tissue can be recovered up to 24 hours after death.</p>
              <p className="text-gray-600 leading-relaxed">Not every donor will be able to give every organ and tissue. The viability of each donation depends on the donor&apos;s age, medical history, cause of death, and the condition of individual organs at the time of death. The organ procurement organization makes these determinations at the time of death, which is why registering as a donor and letting the medical team decide what can be used is the best approach.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Register as an Organ Donor</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The easiest way to register as an organ donor is through your state&apos;s Department of Motor Vehicles when you obtain or renew your driver&apos;s license or state ID. Most states include a donor registration option as part of the application process, and your donor status is indicated on your license. You can also register online at organdonor.gov, which links to every state&apos;s donor registry.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Registering is important, but it is equally important to tell your family about your decision. In some situations, especially when a registered donor&apos;s status cannot be immediately verified, the hospital may consult the next of kin. If your family knows your wishes and supports your decision, the process moves more smoothly and with less stress for everyone involved.</p>
              <p className="text-gray-600 leading-relaxed">You can also include your organ donation wishes in your advance directive or living will. While registration in the state donor registry is the most direct and reliable method, documenting your wishes in multiple places provides additional assurance that your decision will be honored.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Disqualifies a Donor</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Very few medical conditions are absolute disqualifications for organ donation. Active cancer that has spread to multiple organs, active HIV with AIDS complications (in some cases), and certain severe systemic infections may prevent organ donation. However, the vast majority of conditions are evaluated on a case by case basis at the time of death, and many people who assume they cannot donate are actually eligible.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Age is not a disqualifying factor. The oldest organ donor in the United States was over 90 years old. Conditions like diabetes, high blood pressure, and hepatitis do not automatically disqualify someone from donating. People who are HIV positive can now donate organs to HIV positive recipients under the HIV Organ Policy Equity Act. The key is to register and let the medical professionals make the determination at the appropriate time.</p>
              <p className="text-gray-600 leading-relaxed">The only way to truly know whether your organs and tissues can help someone is to register as a donor and allow the organ procurement organization to evaluate your specific circumstances at the time of death. Do not self select out of donation based on assumptions about your medical history. Register, and let the experts decide what can be used.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cancer and Organ Donation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Cancer is one of the most common reasons people assume they cannot be organ donors, but the reality is more nuanced. Active metastatic cancer, where the cancer has spread widely through the body, generally does disqualify organ donation because of the risk of transmitting cancer cells to the recipient. However, some localized cancers that have not spread may not affect organs in other parts of the body, and those organs may still be viable for transplant.</p>
              <p className="text-gray-600 leading-relaxed mb-4">People with a history of cancer that was treated and is now in remission may be fully eligible to donate. The organ procurement organization will review the donor&apos;s complete cancer history, the type and stage of the original cancer, and how long the donor has been in remission. Each case is evaluated individually to determine the safety of transplanting specific organs.</p>
              <p className="text-gray-600 leading-relaxed">Even when organ donation is not possible, tissue donation may still be an option. Corneas, for example, are rarely affected by cancer and can often be donated. If you have a cancer history and want to be a donor, the best approach is to register and let the medical professionals make the final determination at the time of death.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Happens to the Body After Donation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The organ recovery process is performed in a sterile hospital operating room by a team of trained surgeons. The body is treated with the same dignity and respect as in any surgical procedure. After the organs and tissues have been recovered, the surgical incisions are carefully closed, and the body is prepared for return to the family.</p>
              <p className="text-gray-600 leading-relaxed mb-4">An open casket funeral is absolutely still possible after organ and tissue donation. Funeral directors are experienced in working with donor families and can prepare the body for viewing without any visible signs of the donation. Clothing covers any surgical incisions, and tissue donation sites such as bone and skin are restored with prosthetic materials so that the body&apos;s appearance is preserved.</p>
              <p className="text-gray-600 leading-relaxed">The organ recovery process typically adds 12 to 24 hours before the body is released to the funeral home, which may cause a slight delay in funeral arrangements. Families should communicate with both the organ procurement organization and the funeral home to coordinate timing. This brief delay is a small consideration given the number of lives that can be saved or improved through donation.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Religious Perspectives on Organ Donation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Most major religions in the world support organ donation as an act of generosity, compassion, and love for others. Christianity, Islam, Judaism, Hinduism, Buddhism, and Sikhism all have mainstream teachings that either explicitly support organ donation or leave the decision to the individual. Many religious leaders have publicly encouraged their followers to consider organ donation as a way to honor the sanctity of life by saving the lives of others.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Some religious traditions have specific considerations that may affect the timing or process of donation. For example, some Jewish and Islamic scholars emphasize the importance of treating the body with respect and burying it promptly, but most agree that saving a life takes precedence and that organ donation is permissible. If you have concerns about how organ donation intersects with your faith, speak with your religious leader for guidance specific to your tradition.</p>
              <p className="text-gray-600 leading-relaxed">No major religion in the United States formally prohibits organ donation. The decision is deeply personal and should be made based on your own values, your understanding of your faith, and your desire to help others. Registering as a donor does not commit you to anything that conflicts with your religious beliefs, and your family can always discuss specific concerns with the organ procurement organization at the appropriate time.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Living Donation vs After Death Donation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Most people think of organ donation as something that happens after death, but living donation is an increasingly important part of the transplant system. A living donor can give one kidney, a portion of the liver, a lobe of a lung, a portion of the pancreas, or a portion of the intestine while still alive. The most common living donation is a kidney, because people can live healthy lives with one functioning kidney.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Living donors undergo a thorough medical and psychological evaluation to ensure that the donation is safe for both the donor and the recipient. The surgery is performed laparoscopically in most cases, and recovery time is typically two to six weeks. Living donors do not pay for the surgery or related medical costs, which are covered by the recipient&apos;s insurance.</p>
              <p className="text-gray-600 leading-relaxed">After death donation involves the recovery of organs and tissues from a deceased donor. This type of donation allows for a greater number of organs to be recovered, including the heart and both lungs, which cannot be donated by a living donor. Both forms of donation are critically needed, and choosing to register as an after death donor ensures that your organs can help as many people as possible when the time comes.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Talking to Your Family About Organ Donation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The most important thing you can do after registering as an organ donor is to tell your family. In the overwhelming emotional moment after a loved one&apos;s death, families may be asked to confirm the donor&apos;s wishes or provide consent. If your family already knows and supports your decision, the process is far less stressful for everyone involved.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Start the conversation by explaining why organ donation matters to you. Share that one donor can save up to eight lives and help as many as 75 more through tissue donation. Address any concerns they might have, including the common misconceptions that donors receive less medical care, that donation disfigures the body, or that it conflicts with religious beliefs. Being open and informative helps family members feel comfortable with your decision.</p>
              <p className="text-gray-600 leading-relaxed">Ask your family members about their own wishes as well. Making organ donation a family conversation rather than a one sided announcement creates space for everyone to think about their values and make informed decisions. Include your donation wishes in your advance directive and let your healthcare proxy know your position so that your choice is documented in multiple places.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><Link href="/blog/end-of-life-planning-checklist" className="text-blue-600 hover:underline">End of Life Planning Checklist: Everything You Need to Prepare</Link></li>
                <li><Link href="/blog/body-donation-to-science" className="text-blue-600 hover:underline">Body Donation to Science: How It Works and What to Know</Link></li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Find Funeral Homes in Your Area</h2>
              <p className="text-gray-600 mb-6">Browse trusted funeral homes and cremation providers in your state to find compassionate, affordable care during a difficult time.</p>
              <Link href="/states" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">Browse All States</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
