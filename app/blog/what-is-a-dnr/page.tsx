import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is a DNR? Do Not Resuscitate Orders Explained',
  description: 'A DNR is a medical order that instructs healthcare providers not to perform CPR if your heart stops. Here is what it means, how to get one, and how it fits into advance care planning.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/what-is-a-dnr' },
};

const faqs = [
  { q: 'What is a do not resuscitate order?', a: 'A do not resuscitate order, commonly called a DNR, is a medical order signed by a physician that instructs healthcare providers not to perform cardiopulmonary resuscitation (CPR) if your heart stops beating or you stop breathing. It is a legally binding document that applies in hospitals, nursing facilities, and in some states, at home or in the field when emergency medical services are called. A DNR does not affect any other aspect of your medical care. You will still receive pain management, medications, and other treatments appropriate to your condition.' },
  { q: 'How do I get a DNR?', a: 'To get a DNR, you need to have a conversation with your physician about your medical condition, your prognosis, and your wishes regarding resuscitation. If you and your doctor agree that a DNR is appropriate, the doctor will write the order, and you or your healthcare proxy will sign it. The order then becomes part of your medical record. If you want the DNR to apply outside a hospital setting, ask your doctor about an out of hospital DNR form, which emergency medical personnel can honor in the field.' },
  { q: 'What is the difference between a DNR and a living will?', a: 'A DNR is a specific medical order written by a physician that addresses only one scenario: whether CPR should be performed if your heart stops or you stop breathing. A living will is a broader legal document that outlines your wishes regarding multiple types of medical treatment, such as ventilators, feeding tubes, dialysis, and other life sustaining measures. A living will may include a statement about CPR, but it is not a medical order and must be interpreted by your healthcare team. A DNR is immediately actionable by medical providers without interpretation.' },
  { q: 'Does a DNR mean no treatment at all?', a: 'No. A DNR only addresses CPR, which includes chest compressions, defibrillation, and intubation. It does not mean that you will not receive other medical treatments. You will still receive medications, pain management, antibiotics, IV fluids, oxygen, and any other treatments appropriate for your condition. A DNR simply means that if your heart stops or you stop breathing, medical providers will not attempt to restart your heart or breathing through CPR. All other care continues as normal.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function WhatIsADnrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">What Is a DNR? Do Not Resuscitate Orders Explained</h1>
              <p className="text-xl text-gray-600 mb-4">A DNR is one of the most misunderstood documents in healthcare. Here is what it actually means, who should consider one, and how it fits into your larger advance care plan.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is a DNR</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A DNR, or do not resuscitate order, is a medical order signed by a physician that instructs healthcare providers not to perform cardiopulmonary resuscitation if your heart stops beating or if you stop breathing. Unlike a living will or advance directive, which are legal documents you create yourself, a DNR is a physician order that becomes part of your medical record. It carries the same weight as any other medical order in a hospital or care facility.</p>
              <p className="text-gray-600 leading-relaxed mb-4">The DNR only applies to the specific event of cardiac or respiratory arrest. It does not affect any other aspect of your medical care, and it does not mean that your medical team will stop treating you or providing comfort measures. The order is narrowly focused on one question: if your heart stops, should medical providers attempt to restart it through CPR.</p>
              <p className="text-gray-600 leading-relaxed">A DNR can be established in a hospital, a nursing home, or through an out of hospital DNR form that applies in your home or in the field when emergency medical services respond. The specifics vary by state, but the core purpose is the same everywhere: to ensure that your wishes regarding resuscitation are clearly documented and legally enforceable.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What It Means in Practice</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When a DNR is in place and a patient goes into cardiac or respiratory arrest, the medical team will not perform chest compressions, will not use a defibrillator to deliver electrical shocks, and will not place a breathing tube for mechanical ventilation. These are the core components of CPR, and a DNR instructs providers to withhold all of them.</p>
              <p className="text-gray-600 leading-relaxed mb-4">It is critically important to understand what a DNR does not do. A DNR does not mean no treatment at all. Patients with a DNR still receive all other appropriate medical care, including medications, IV fluids, oxygen therapy, pain management, antibiotics, and surgical procedures. A DNR does not instruct providers to withdraw care or to stop treating the patient&apos;s underlying condition.</p>
              <p className="text-gray-600 leading-relaxed">In practice, a DNR allows a patient to receive full medical treatment for their condition while ensuring that if their heart stops as a natural consequence of their illness, the medical team will allow the process to proceed naturally rather than attempting aggressive resuscitation that is unlikely to restore meaningful life.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Should Consider a DNR</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A DNR is most commonly considered by people with terminal illnesses where the likelihood of successful resuscitation is very low and the quality of life after resuscitation would be severely diminished. Patients with advanced cancer, end stage heart failure, severe chronic obstructive pulmonary disease, and advanced dementia are among those who most frequently discuss DNR orders with their physicians.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Older adults in general may want to discuss a DNR with their doctor, particularly if they have multiple chronic conditions. The success rate of CPR in elderly patients with serious comorbidities is significantly lower than what most people expect, and the physical trauma of CPR itself, including broken ribs and potential brain damage from oxygen deprivation, can be substantial.</p>
              <p className="text-gray-600 leading-relaxed">Anyone who values quality of life over quantity of life may find that a DNR aligns with their values. The decision is deeply personal, and there is no right or wrong answer. What matters is that the decision is informed, voluntary, and clearly communicated to your medical team and your family.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Get a DNR</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Getting a DNR starts with a conversation with your physician. You do not need to be terminally ill to request one, but your doctor will want to discuss your medical condition, your prognosis, and your understanding of what CPR involves and how likely it is to be successful in your situation. This conversation is an important part of the process because it ensures that your decision is fully informed.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If you and your doctor agree that a DNR is appropriate, the doctor will write the order. In most states, you or your legally authorized healthcare representative will sign the order, and it will be added to your medical chart. If you are in a hospital or nursing facility, the staff will be made aware of the order so they can honor it if the situation arises.</p>
              <p className="text-gray-600 leading-relaxed">If you want the DNR to apply outside of a healthcare facility, you will need an out of hospital DNR, sometimes called a portable DNR or a prehospital DNR. This is a separate form that emergency medical personnel are trained to recognize and honor. Keep the form in an accessible location in your home, and consider wearing a medical alert bracelet that identifies your DNR status.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">DNR vs Advance Directive vs Living Will</h2>
              <p className="text-gray-600 leading-relaxed mb-4">These three documents are related but serve different purposes. A DNR is a specific medical order that addresses one scenario: whether CPR should be performed. It is written by a physician and is immediately actionable by medical providers. There is no interpretation required. When medical staff see a valid DNR, they know exactly what to do.</p>
              <p className="text-gray-600 leading-relaxed mb-4">An advance directive is a broader legal document that encompasses your wishes for future medical care. It typically includes a living will, which specifies the treatments you do or do not want in various scenarios, and a healthcare power of attorney, which designates someone to make medical decisions on your behalf. An advance directive covers a wide range of medical situations, not just cardiac arrest.</p>
              <p className="text-gray-600 leading-relaxed">A living will is a component of an advance directive that specifically addresses your treatment preferences. It might state, for example, that you do not want mechanical ventilation, feeding tubes, or dialysis if you are in a persistent vegetative state. While a living will can express your wishes about CPR, it is not a medical order and must be interpreted by your healthcare team. For maximum clarity, having both a DNR and a living will ensures that your wishes about resuscitation are documented as a direct medical order and that your broader treatment preferences are also on record.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">DNR vs POLST</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A POLST, which stands for Physician Orders for Life Sustaining Treatment, is a medical order form that covers a wider range of interventions than a DNR. While a DNR addresses only CPR, a POLST includes orders about CPR, mechanical ventilation, hospitalization preferences, antibiotic use, and artificial nutrition. It is a more comprehensive medical order that translates a patient&apos;s wishes into actionable physician orders across multiple categories of care.</p>
              <p className="text-gray-600 leading-relaxed mb-4">POLST forms go by different names in different states. Some states call them MOLST (Medical Orders for Life Sustaining Treatment), others use MOST (Medical Orders for Scope of Treatment), and some use other variations. Regardless of the name, the concept is the same: a portable set of physician orders that travel with the patient and are honored across care settings.</p>
              <p className="text-gray-600 leading-relaxed">A POLST is generally recommended for people with serious advanced illness or frailty. If you only want to address CPR, a DNR may be sufficient. If you want to document preferences about a wider range of medical interventions, a POLST may be more appropriate. Your physician can help you determine which form best fits your situation and your goals of care.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Happens Without a DNR</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Without a DNR on file, the default in every healthcare setting is full resuscitation. If your heart stops or you stop breathing, medical providers are legally and professionally obligated to perform CPR, which includes chest compressions, defibrillation, intubation, and administration of cardiac drugs. This applies regardless of your age, your diagnosis, or your prognosis.</p>
              <p className="text-gray-600 leading-relaxed mb-4">For patients with terminal illness or advanced age, full CPR is often unsuccessful and can result in significant physical trauma. Broken ribs, punctured lungs, and brain damage from prolonged oxygen deprivation are common complications. Even when CPR restores a heartbeat, many patients in this population do not survive to discharge, and those who do often experience a significant decline in function and quality of life.</p>
              <p className="text-gray-600 leading-relaxed">If emergency medical services respond to a call at your home and you do not have an out of hospital DNR form available, they are required to begin CPR immediately. Family members cannot verbally instruct paramedics to withhold CPR. The only way to prevent unwanted resuscitation is to have a valid DNR order in place and physically accessible at the time of the emergency.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Talk to Family About a DNR</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Talking to your family about a DNR can be difficult, but it is one of the most important conversations you can have. Start by explaining what a DNR is and what it is not. Many people mistakenly believe that a DNR means giving up or refusing all treatment. Clarifying that a DNR only addresses CPR and that all other medical care continues as normal can help ease those fears.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Share your reasons for considering a DNR. Whether your decision is based on your medical condition, your values, or your understanding of CPR outcomes, giving your family context helps them understand and respect your choice. Be direct and clear about what you want, and invite them to ask questions. This is not a one time conversation but an ongoing dialogue that may evolve as your health changes.</p>
              <p className="text-gray-600 leading-relaxed">Make sure your healthcare proxy and your closest family members know where your DNR is located and understand their role in honoring your wishes. If you have an out of hospital DNR, show your family where the form is kept so they can present it to emergency medical services if needed. The more prepared your family is, the less likely it is that your wishes will be overridden in a moment of crisis.</p>
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
                <li><Link href="/blog/living-will-vs-advance-directive" className="text-blue-600 hover:underline">Living Will vs. Advance Directive: What Is the Difference?</Link></li>
                <li><Link href="/blog/end-of-life-planning-checklist" className="text-blue-600 hover:underline">End of Life Planning Checklist: Everything You Need to Prepare</Link></li>
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
