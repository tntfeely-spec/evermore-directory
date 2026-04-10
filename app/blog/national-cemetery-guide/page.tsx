import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'National Cemetery Burial: How to Bury a Veteran for Free',
  description: 'Eligible veterans and some family members can be buried at a national cemetery at no cost. Here is who qualifies, how to apply, and what to expect.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/national-cemetery-guide' },
};

const faqs = [
  { q: 'Can any veteran be buried in a national cemetery?', a: 'Not every veteran qualifies. To be eligible for burial in a national cemetery, a veteran must have served in the active military, naval, or air service and been discharged under conditions other than dishonorable. Members of the Reserve and National Guard who were activated for federal service, who completed a qualifying period of service, or who died during duty training are also eligible. Veterans with dishonorable discharges are not eligible, though those with other than honorable discharges may qualify depending on the circumstances.' },
  { q: 'Is burial in a national cemetery really free?', a: 'Yes. For eligible veterans, burial in a national cemetery includes the gravesite, the opening and closing of the grave, a government headstone or marker, a burial flag, perpetual care of the gravesite, and a Presidential Memorial Certificate, all at no cost. The family is responsible for any costs related to transporting the remains to the cemetery and for the funeral service itself, but the burial and memorialization are provided free by the VA.' },
  { q: 'Can a veteran&apos;s spouse be buried in a national cemetery?', a: 'Yes. The spouse or surviving spouse of an eligible veteran may be buried in the same gravesite in a national cemetery at no additional cost. Dependent children who are under 21 years of age, or who are unmarried and under 23 if attending school, may also be eligible. Adult dependent children who became permanently incapacitated before age 21 may qualify as well. The spouse or dependent does not receive a separate gravesite but is interred in the same plot as the veteran.' },
  { q: 'What is the difference between a national cemetery and a veterans cemetery?', a: 'National cemeteries are operated by the U.S. Department of Veterans Affairs and are funded by the federal government. State veterans cemeteries are operated by individual states, often with funding assistance from the VA through the Veterans Cemetery Grants Program. Both types of cemeteries provide burial for eligible veterans, but eligibility requirements and available services may differ. State veterans cemeteries may have additional eligibility criteria or may serve veterans from specific states or regions.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function NationalCemeteryGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">National Cemetery Burial: How to Bury a Veteran for Free</h1>
              <p className="text-xl text-gray-600 mb-4">The VA operates 155 national cemeteries across the country, providing free burial to eligible veterans and their families. Here is everything you need to know about eligibility, benefits, and the application process.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is a National Cemetery</h2>
              <p className="text-gray-600 leading-relaxed mb-4">National cemeteries are burial grounds maintained by the U.S. Department of Veterans Affairs specifically for the interment of veterans, active duty service members, and eligible family members. There are currently 155 VA national cemeteries in 42 states and Puerto Rico, serving as the final resting places for millions of Americans who served their country.</p>
              <p className="text-gray-600 leading-relaxed mb-4">These cemeteries are maintained to the highest standards, with manicured grounds, uniform headstones, and a solemn atmosphere that reflects the honor and sacrifice of those buried there. The VA is responsible for perpetual care of every gravesite, meaning the grounds will be maintained indefinitely at no cost to the family.</p>
              <p className="text-gray-600 leading-relaxed">National cemeteries are distinct from Arlington National Cemetery, which is operated by the U.S. Army and has its own eligibility requirements. They are also separate from state veterans cemeteries, which are funded and managed by individual state governments with support from the VA.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Is Eligible for National Cemetery Burial</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Eligibility for burial in a national cemetery extends to veterans who served in the active military, naval, or air service and were discharged or released under conditions other than dishonorable. This includes veterans of every conflict from the Revolutionary War through current operations, as well as peacetime veterans who completed their service honorably.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Members of the Reserve and National Guard are eligible if they were called to active duty and completed their service under honorable conditions, or if they died while on active duty for training. Service members who die on active duty are eligible regardless of the length of their service.</p>
              <p className="text-gray-600 leading-relaxed">Spouses and dependent children of eligible veterans may also be buried in a national cemetery, either at the time of the veteran&apos;s burial or at a later date. The spouse or dependent is interred in the same gravesite as the veteran. Surviving spouses who remarry after the age of 57 remain eligible for burial with their veteran spouse.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is Provided at No Cost</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Burial in a national cemetery comes with a comprehensive package of benefits at no charge to the family. The VA provides the gravesite itself, including the opening and closing of the grave on the day of burial. A government furnished headstone or marker is included, inscribed with the veteran&apos;s name, branch of service, dates of birth and death, and any other authorized details.</p>
              <p className="text-gray-600 leading-relaxed mb-4">A United States burial flag is provided to drape the casket or accompany the urn, and it is presented to the next of kin after the service. Perpetual care of the gravesite, including mowing, landscaping, and marker maintenance, is guaranteed for as long as the cemetery exists. A Presidential Memorial Certificate signed by the current president is also available to the family at no cost.</p>
              <p className="text-gray-600 leading-relaxed">The family is responsible for costs related to transporting the remains to the national cemetery and for any funeral service or memorial ceremony they choose to hold. Some families hold a service at a funeral home or place of worship before the burial, while others hold the service at the cemetery itself. The cemetery can accommodate committal services at the gravesite.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Apply for National Cemetery Burial</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When a veteran dies, the family or funeral director should contact the National Cemetery Scheduling Office at 1-800-535-1117 to schedule the burial. This office coordinates burials at all VA national cemeteries and can help determine which cemetery is most appropriate based on the family&apos;s location and the veteran&apos;s preferences.</p>
              <p className="text-gray-600 leading-relaxed mb-4">You will need to provide the veteran&apos;s discharge papers (DD Form 214) or other proof of military service. If these documents are not available, the scheduling office can help initiate a search of military records. The funeral director will typically handle much of the coordination with the national cemetery, including arranging the date and time of the burial.</p>
              <p className="text-gray-600 leading-relaxed">For families who want to plan ahead, the VA offers a pre need determination of eligibility. By submitting VA Form 40-10007, you can confirm a veteran&apos;s eligibility for national cemetery burial before the need arises. This can simplify the process at the time of death and give the family peace of mind that arrangements are in order.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Find the Nearest National Cemetery</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The VA maintains a searchable directory of all national cemeteries on its website, allowing you to search by state, city, or ZIP code. Each listing includes the cemetery&apos;s address, phone number, hours of operation, and information about available burial options, including whether the cemetery is currently accepting new interments.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Some national cemeteries have reached capacity and are no longer accepting first interments, though they may still accept subsequent interments in existing gravesites for eligible spouses and dependents. If the nearest national cemetery is closed to new burials, the scheduling office can help identify the next closest option or suggest a state veterans cemetery as an alternative.</p>
              <p className="text-gray-600 leading-relaxed">You can also call the National Cemetery Scheduling Office at 1-800-535-1117 for assistance. The staff can answer questions about availability, eligibility, and the process for scheduling a burial. Many funeral homes are also familiar with the national cemetery system and can help families navigate the options.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Arlington National Cemetery: Special Requirements</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Arlington National Cemetery is the most well known military cemetery in the United States, but it has significantly stricter eligibility requirements than VA national cemeteries. Arlington is operated by the U.S. Army, not the VA, and it has its own set of criteria for in ground burial, inurnment, and memorialization.</p>
              <p className="text-gray-600 leading-relaxed mb-4">In ground burial at Arlington is generally limited to service members who died on active duty, veterans who received the Medal of Honor, Purple Heart, Silver Star, or Distinguished Service Cross, and certain former prisoners of war. Retired veterans with 20 or more years of active service may also qualify. Above ground inurnment in the columbarium is available to a broader group of veterans, including those who served honorably on active duty.</p>
              <p className="text-gray-600 leading-relaxed">If you believe your loved one may be eligible for burial at Arlington, contact the cemetery directly at 1-877-907-8585. The eligibility determination process for Arlington is separate from the VA national cemetery system, and the requirements are subject to change based on available space and current policy.</p>
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
                <li><Link href="/veteran-burial-benefits" className="text-blue-600 hover:underline">Veteran Burial Benefits: What Every Family Should Know</Link></li>
                <li><Link href="/blog/veteran-headstones-and-markers" className="text-blue-600 hover:underline">Veteran Headstones and Markers: How to Apply for a Free Gravemarker</Link></li>
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
