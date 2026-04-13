import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'How to Find a Grave: Using FindAGrave and Other Resources',
  description: 'Finding where someone is buried is easier than most people think. Here is how to use FindAGrave, ancestry records, and other tools to locate burial records.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/how-to-find-a-grave' },
};

const faqs = [
  { q: 'How do I find where someone is buried?', a: 'Start with FindAGrave.com, which has over 230 million memorial records and is free to use. Search by the person\'s name and narrow results by birth year, death year, or location. If FindAGrave does not have the record, try BillionGraves.com, contact the cemetery directly, or search state vital records for a death certificate that lists the place of burial.' },
  { q: 'Is FindAGrave free to use?', a: 'Yes. FindAGrave is completely free. You can search for burial records, view headstone photos, and leave virtual flowers or notes without paying anything. The site is maintained by volunteers who photograph headstones and transcribe burial records. It is owned by Ancestry.com but remains free as a standalone site.' },
  { q: 'What if the grave is not on FindAGrave?', a: 'If the grave is not listed on FindAGrave, try BillionGraves.com, which has a separate database of photographed headstones. You can also contact the cemetery office directly, as most cemeteries maintain their own burial records. For older burials, check state or county vital records, church records, or local historical societies.' },
  { q: 'How do I find burial records online?', a: 'Several free and paid resources exist for finding burial records online. FindAGrave and BillionGraves are the two largest free databases. Ancestry.com, FamilySearch.org, and Newspapers.com offer searchable death and burial indexes. Many states also have online vital records databases where you can search for death certificates that include burial information.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function HowToFindAGravePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Find a Grave: Using FindAGrave and Other Resources</h1>
              <p className="text-xl text-gray-600 mb-4">A practical guide to locating burial records, cemetery plots, and headstone photos online.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Whether you are trying to visit a family member&apos;s grave, researching your genealogy, or simply want to confirm where someone was laid to rest, finding a burial site is far easier today than it was even a decade ago. Free online databases have digitized hundreds of millions of burial records, and most of the information you need is available from your computer or phone.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Search FindAGrave</h2>
              <p className="text-gray-600 leading-relaxed mb-4">FindAGrave.com is the largest free burial database in the world, with over 230 million memorial records. It is maintained by a community of volunteers who visit cemeteries, photograph headstones, and upload the information. The site is owned by Ancestry.com but remains entirely free to use.</p>
              <p className="text-gray-600 leading-relaxed mb-4">To search, go to FindAGrave.com and enter the person&apos;s first and last name. You can narrow results by adding a birth year, death year, or the cemetery location if you know it. Exact spelling matters, so try alternate spellings if your first search does not return results. Many older records use spelling variations that differ from what the family used.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Each memorial page on FindAGrave may include the person&apos;s full name, birth and death dates, cemetery name and location, a photo of the headstone, and sometimes a brief biography or family links. You can also leave virtual flowers, corrections, or notes on any memorial page.</p>
              <p className="text-gray-600 leading-relaxed">If you find the cemetery but not the specific grave location within it, the memorial page usually includes a plot or section number. You can bring this information to the cemetery office, and they can direct you to the exact spot.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Find a Grave Without FindAGrave</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If FindAGrave does not have the record you are looking for, BillionGraves.com is the next best free option. It uses GPS tagged headstone photos, which means you can get exact coordinates for a gravesite, not just the cemetery name. The database is smaller than FindAGrave but growing steadily.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Local funeral home websites sometimes maintain online obituary archives that include burial location. If you know which funeral home handled the arrangements, check their website or call them directly. Many funeral homes keep records going back decades.</p>
              <p className="text-gray-600 leading-relaxed">Newspaper obituary archives can also lead you to the burial location. Most obituaries mention the cemetery by name. Newspapers.com, the local library&apos;s digital archive, and Legacy.com all offer searchable obituary databases.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contacting Cemeteries Directly</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Every cemetery maintains its own burial records, and most are willing to look up information over the phone or by email. Call the cemetery office during business hours and provide the full name and approximate date of death. They can confirm whether the person is buried there and give you the section, lot, and grave number.</p>
              <p className="text-gray-600 leading-relaxed">For large cemeteries, this information is essential for finding the actual gravesite. Without a plot number, you could spend hours walking rows. Some larger cemeteries have office kiosks or printed maps that help visitors locate specific graves once they arrive.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Using Ancestry and Other Genealogy Sites</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Ancestry.com has a large collection of death records, cemetery transcriptions, and burial indexes. A paid subscription gives you access to billions of historical records, including many that are not available on free sites. FamilySearch.org, run by the Church of Jesus Christ of Latter day Saints, offers similar records entirely for free.</p>
              <p className="text-gray-600 leading-relaxed">Both sites allow you to search by name, date range, and location. Death records often include the cemetery name, funeral home, and sometimes the specific plot number. For older burials that predate modern databases, these genealogy sites are often the best resource available.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">State Vital Records and Death Certificates</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Every state maintains vital records that include death certificates. A death certificate typically lists the place of burial or disposition, the funeral home that handled arrangements, and the date of burial. You can request a copy from the state vital records office, though there is usually a small fee and eligibility requirements vary by state.</p>
              <p className="text-gray-600 leading-relaxed">Some states have digitized their older death records and made them searchable online. Check your state&apos;s vital records website or the state archives. For deaths that occurred more than 50 to 75 years ago, the records are often available to the general public without restrictions.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When the Cemetery Is Closed or Unknown</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Some cemeteries, particularly small rural or church cemeteries, have closed or been abandoned over the years. If the cemetery still exists but is no longer actively maintained, the local historical society or county recorder&apos;s office may have burial records. Many volunteers have also transcribed headstones from abandoned cemeteries and uploaded them to FindAGrave or local genealogy websites.</p>
              <p className="text-gray-600 leading-relaxed">If you have no idea which cemetery the person is buried in, start with the death certificate. If that is not available, try searching obituary archives for the person&apos;s name and the city where they lived at the time of death. The obituary will almost always name the cemetery.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Add a Missing Grave to FindAGrave</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If you visit a grave that is not listed on FindAGrave, you can add it yourself. Create a free account, then click &quot;Add a Memorial&quot; on the cemetery&apos;s page. Enter the person&apos;s name, birth and death dates, and upload a photo of the headstone if you have one. The process takes a few minutes and helps other families and researchers find the record in the future.</p>
              <p className="text-gray-600 leading-relaxed">You can also submit a photo request on FindAGrave for memorials that exist but do not have headstone photos. Volunteers in the area may visit the cemetery and take a photo on your behalf. This feature is especially useful for graves that are far from where you live.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/death-certificate-guide" className="text-slate-600 hover:text-slate-800 font-medium">Death Certificate Guide</Link></li>
                <li><Link href="/blog/national-cemetery-guide" className="text-slate-600 hover:text-slate-800 font-medium">National Cemetery Guide</Link></li>
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