'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ResourcesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0" style={{ backgroundImage: 'url(/Ocean_Image.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.4 }} />
      <div className="relative z-10">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Funeral Planning Resources</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helpful guides and information to assist you during difficult times
            </p>
          </div>

          {/* Funeral Planning Checklist */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Funeral Planning Checklist</h2>
            <p className="text-gray-700 mb-6">
              Planning a funeral can feel overwhelming. Use this checklist to help guide you through the essential steps:
            </p>

            <div className="space-y-4">
              <div className="flex items-start p-4 bg-teal-50 rounded-lg">
                <div className="flex-shrink-0 h-6 w-6 rounded bg-teal-600 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Immediate Steps (First 24-48 Hours)</h3>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Contact a funeral home to arrange for care of the deceased</li>
                    <li>• Notify close family members and friends</li>
                    <li>• Obtain multiple copies of the death certificate</li>
                    <li>• Locate important documents (will, insurance policies, etc.)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                <div className="flex-shrink-0 h-6 w-6 rounded bg-blue-600 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Service Planning (First Week)</h3>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Decide on burial or cremation</li>
                    <li>• Choose between traditional funeral, memorial service, or celebration of life</li>
                    <li>• Select casket, urn, or other memorial products</li>
                    <li>• Plan the service details (music, readings, speakers)</li>
                    <li>• Write or approve the obituary</li>
                    <li>• Arrange for flowers and reception</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start p-4 bg-green-50 rounded-lg">
                <div className="flex-shrink-0 h-6 w-6 rounded bg-green-600 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Administrative Tasks (First Month)</h3>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Notify Social Security Administration</li>
                    <li>• Contact insurance companies and employers</li>
                    <li>• Close or transfer accounts and utilities</li>
                    <li>• File life insurance claims</li>
                    <li>• Arrange for probate if necessary</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Understanding Costs */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Funeral Costs</h2>
            <p className="text-gray-700 mb-6">
              Funeral costs can vary significantly based on location and services chosen. Here is what to expect:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Basic Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Professional service fees: $2,000 - $3,000</li>
                  <li>• Transportation: $300 - $500</li>
                  <li>• Embalming: $700 - $1,000</li>
                  <li>• Viewing/visitation: $400 - $600</li>
                  <li>• Funeral ceremony: $400 - $600</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Costs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Casket: $2,000 - $10,000+</li>
                  <li>• Burial plot: $1,000 - $4,000</li>
                  <li>• Vault: $1,000 - $3,000</li>
                  <li>• Headstone: $1,000 - $3,000</li>
                  <li>• Cremation: $1,000 - $3,000</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-gray-700">
                <strong>Important:</strong> Funeral homes are required by law to provide a General Price List (GPL). Always request this to compare costs and make informed decisions.
              </p>
            </div>
          </div>

          {/* Pre-Planning Benefits */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Benefits of Pre-Planning</h2>
            <p className="text-gray-700 mb-6">
              Many people choose to pre-plan their funeral arrangements. Here are the advantages:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-teal-50 rounded-xl">
                <div className="text-teal-600 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Financial Peace</h3>
                <p className="text-gray-700 text-sm">Lock in today&apos;s prices and avoid future inflation</p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Ease Burden</h3>
                <p className="text-gray-700 text-sm">Relieve family from making difficult decisions during grief</p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-green-600 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Your Wishes</h3>
                <p className="text-gray-700 text-sm">Ensure your preferences are known and honored</p>
              </div>
            </div>
          </div>

          {/* Types of Services */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Funeral Services</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-teal-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Traditional Funeral Service</h3>
                <p className="text-gray-700">Includes viewing/visitation, formal funeral service, and burial or entombment. Often includes religious or cultural customs and traditions.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Memorial Service</h3>
                <p className="text-gray-700">Held after cremation or burial has taken place. The body is not present, allowing more flexibility in timing and location.</p>
              </div>
              <div className="border-l-4 border-green-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Celebration of Life</h3>
                <p className="text-gray-700">A more personalized, uplifting gathering focusing on celebrating the deceased&apos;s life and legacy rather than mourning their passing.</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Direct Cremation or Burial</h3>
                <p className="text-gray-700">The most economical option with no formal viewing or ceremony. The body is cremated or buried shortly after death.</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Green/Natural Burial</h3>
                <p className="text-gray-700">An environmentally-friendly option that minimizes environmental impact through biodegradable materials and natural processes.</p>
              </div>
            </div>
          </div>

          {/* Veterans Benefits */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Veterans Benefits</h2>
            <p className="text-gray-700 mb-6">Veterans and their families may be eligible for funeral and burial benefits:</p>

            <div className="space-y-4">
              {[
                { title: 'Burial in a VA National Cemetery', desc: 'Free burial plot, opening and closing of grave, and perpetual care' },
                { title: 'Burial Allowance', desc: 'Partial reimbursement for burial and funeral costs (service-connected death: up to $2,000; non-service-connected: up to $796)' },
                { title: 'Headstone or Marker', desc: 'Free government headstone or marker with inscription' },
                { title: 'Presidential Memorial Certificate', desc: 'Engraved certificate signed by the current president honoring the veteran\'s service' },
                { title: 'Burial Flag', desc: 'American flag provided to drape the casket or accompany the urn' },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">{item.title}:</span>
                    <span className="text-gray-700"> {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-gray-700">
                <strong>For more information:</strong> Contact the VA at 1-800-827-1000 or visit va.gov/burials-memorials
              </p>
            </div>
          </div>

          {/* Important Contacts */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Government Agencies</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Social Security Administration</strong><br />1-800-772-1213<br />ssa.gov</li>
                  <li><strong>Veterans Affairs</strong><br />1-800-827-1000<br />va.gov</li>
                  <li><strong>Federal Trade Commission (FTC)</strong><br />Funeral Rule Information<br />consumer.ftc.gov</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Support Resources</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>National Funeral Directors Association</strong><br />1-800-228-6332<br />nfda.org</li>
                  <li><strong>GriefShare</strong><br />Grief support groups<br />griefshare.org</li>
                  <li><strong>National Hospice Foundation</strong><br />1-800-338-8619<br />nationalhospicefoundation.org</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { question: "How soon do I need to make funeral arrangements?", answer: "While there's no strict deadline, most arrangements should be made within a few days. Many states require burial or cremation within a certain timeframe (typically 7-10 days). Your funeral director can guide you on timing." },
                { question: "Can I personalize a funeral service?", answer: "Absolutely. Modern funeral services are highly customizable. You can incorporate personal touches like favorite music, photos, hobbies, special readings, unique locations, and more." },
                { question: "What's the difference between a funeral and a memorial service?", answer: "A funeral typically includes the body present in a casket and occurs before burial or cremation. A memorial service takes place after the body has been buried or cremated, so the body is not present." },
                { question: "Do I have to use the casket provided by the funeral home?", answer: "No. Under the FTC Funeral Rule, funeral homes must accept caskets purchased from third-party vendors and cannot charge a handling fee." },
                { question: "What should I bring to my first meeting with a funeral director?", answer: "Bring: death certificate (if available), insurance policies, Social Security number, military discharge papers (DD-214) for veterans, and any pre-planning documents." },
                { question: "Are funeral costs tax deductible?", answer: "Generally, personal funeral expenses are not tax deductible. However, they may be deductible from the deceased's estate if paid from estate funds. Consult with a tax professional for specific guidance." },
                { question: "What is embalming and is it required?", answer: "Embalming is a process that temporarily preserves the body. It is generally NOT required by law except in specific circumstances like interstate transport." },
                { question: "Can I pre-pay for my funeral?", answer: "Yes, many funeral homes offer pre-payment options. Make sure any prepaid plan is protected by state law and understand the cancellation and refund policies." },
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFAQ === index ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need to Find a Funeral Home?</h2>
            <p className="text-white mb-6">Search our directory to find caring professionals in your area</p>
            <Link href="/states" className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Search Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
