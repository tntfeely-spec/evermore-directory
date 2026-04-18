import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Cremation and Religion: What Every Major Faith Teaches (2026) | Evermore Directory',
  description: 'Learn where every major religion stands on cremation. Catholic, Protestant, Jewish, Islamic, Hindu, Buddhist, and LDS positions explained clearly for families.',
  keywords: 'cremation and religion, can Catholics be cremated, is cremation allowed in Christianity, cremation Judaism, cremation Islam, Hindu cremation, Buddhist cremation, LDS cremation',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/cremation-and-religion',
  },
  openGraph: {
    title: 'Cremation and Religion: What Every Major Faith Teaches (2026)',
    description: 'Learn where every major religion stands on cremation. Catholic, Protestant, Jewish, Islamic, Hindu, Buddhist, and LDS positions explained clearly for families.',
    url: 'https://funeralhomedirectories.com/blog/cremation-and-religion',
    type: 'article',
  },
};

const faqs = [
  {
    q: 'Can Catholics be cremated?',
    a: 'Yes. The Catholic Church has permitted cremation since 1963. However, the Church requires that cremated remains be interred in a sacred place such as a cemetery or columbarium. Scattering ashes, keeping them at home, or dividing them among family members is not permitted under Catholic teaching. The Vatican reaffirmed this position in the 2016 instruction Ad resurgendum cum Christo.',
  },
  {
    q: 'Can you scatter ashes if you are Catholic?',
    a: 'No. Catholic teaching requires that cremated remains be kept intact and interred in a sacred place such as a cemetery, mausoleum, or columbarium. The Church does not permit scattering, keeping ashes at home, or dividing them among family members. This is based on the belief in the resurrection of the body and the dignity of the human remains.',
  },
  {
    q: 'What does the Bible say about cremation?',
    a: 'The Bible does not explicitly prohibit or endorse cremation. There are references to burial as the common practice in biblical times, and a few references to burning of bodies in specific circumstances. Most Protestant denominations interpret scripture as leaving the decision to individual families. The Catholic Church, which also uses the Bible as sacred text, permits cremation but prefers burial.',
  },
  {
    q: 'Is cremation allowed in Judaism?',
    a: 'It depends on the branch of Judaism. Orthodox Judaism prohibits cremation based on the belief that the body belongs to God and must be returned to the earth through burial. Conservative Judaism discourages cremation but does not always prohibit it. Reform Judaism permits cremation and leaves the decision to individual families and their rabbis.',
  },
  {
    q: 'Why does Islam prohibit cremation?',
    a: 'Islam prohibits cremation based on Hadith teachings about the integrity of the human body. Islamic tradition holds that the body should be treated with dignity after death and returned to the earth through burial, ideally within 24 hours. This prohibition is consistent across both Sunni and Shia traditions. Burial is considered an obligation, not merely a preference.',
  },
  {
    q: 'Do Mormons allow cremation?',
    a: 'The Church of Jesus Christ of Latter-day Saints (LDS) has taken an officially neutral position on cremation. While burial has historically been the preferred practice, the Church recognizes that circumstances vary and does not prohibit cremation. LDS members are counseled to make the decision prayerfully, in consultation with their families and local Church leaders.',
  },
];

export default function CremationAndReligionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Cremation and Religion: What Every Major Faith Teaches (2026)",
          "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
          "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
          "datePublished": "2026-04-18",
          "dateModified": "2026-04-18",
          "description": "Learn where every major religion stands on cremation. Catholic, Protestant, Jewish, Islamic, Hindu, Buddhist, and LDS positions explained clearly for families.",
          "url": "https://funeralhomedirectories.com/blog/cremation-and-religion",
          "mainEntityOfPage": "https://funeralhomedirectories.com/blog/cremation-and-religion"
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://funeralhomedirectories.com/blog" },
            { "@type": "ListItem", "position": 3, "name": "Cremation and Religion" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        }) }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Cremation and Religion: What Every Major Faith Teaches
              </h1>
              <p className="text-sm text-gray-500 mb-3">
                By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic | Evermore Directory &middot; Last updated: April 2026
              </p>
              <p className="text-xl text-gray-600">
                A clear, respectful guide to where the world&apos;s major religions stand on cremation, so you can make an informed decision that honors both your faith and your family.
              </p>
            </header>

            {/* AI-citable opening */}
            <section className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Most major world religions now permit cremation, though positions vary. The Catholic Church allows cremation but prefers burial. Most Protestant denominations leave the decision to families. Judaism generally discourages cremation, especially in Orthodox practice. Islam prohibits cremation. Hinduism and Buddhism traditionally practice cremation.
              </p>
              <p className="text-gray-600 mb-4">
                If you are considering <Link href="/blog/what-is-direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">direct cremation</Link> and wondering whether it aligns with your faith tradition, this guide covers the position of every major religion. Each section includes the official teaching, the reasoning behind it, and practical guidance for families navigating this decision.
              </p>
              <p className="text-gray-600">
                As a former firefighter and paramedic, I have been present with families from every background in their most difficult moments. Faith matters deeply to many families at the end of life. This guide is written with that in mind.
              </p>
            </section>

            {/* Overview */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Religious Landscape Around Cremation Is Shifting
              </h2>
              <p className="text-gray-600 mb-4">
                For most of Western history, burial was the default. Religious traditions reinforced that default with theological reasoning about the body, the soul, and the afterlife. But the landscape has changed significantly in the past 60 years.
              </p>
              <p className="text-gray-600 mb-4">
                The Catholic Church lifted its ban on cremation in 1963. Protestant denominations, most of which never formally prohibited it, have become increasingly comfortable with the practice. Eastern religions like Hinduism and Buddhism have practiced cremation for thousands of years.
              </p>
              <p className="text-gray-600">
                Today, the cremation rate in the United States exceeds 60%. Many families who choose cremation are deeply religious. The question is no longer whether cremation is acceptable, but how to honor your faith tradition within the cremation process.
              </p>

              {/* Summary table */}
              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Religion</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Position on Cremation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700 font-medium">Catholic</td><td className="px-4 py-3 text-gray-700">Permitted since 1963, but burial is preferred. Remains must be interred, not scattered.</td></tr>
                    <tr className="border-b border-gray-100 bg-gray-50"><td className="px-4 py-3 text-gray-700 font-medium">Protestant</td><td className="px-4 py-3 text-gray-700">Generally permissive. Most denominations leave the decision to families.</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700 font-medium">Judaism (Orthodox)</td><td className="px-4 py-3 text-gray-700">Prohibited. The body must be buried in the earth.</td></tr>
                    <tr className="border-b border-gray-100 bg-gray-50"><td className="px-4 py-3 text-gray-700 font-medium">Judaism (Reform)</td><td className="px-4 py-3 text-gray-700">Permitted. Left to individual and family decision.</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700 font-medium">Islam</td><td className="px-4 py-3 text-gray-700">Prohibited across Sunni and Shia traditions.</td></tr>
                    <tr className="border-b border-gray-100 bg-gray-50"><td className="px-4 py-3 text-gray-700 font-medium">Hinduism</td><td className="px-4 py-3 text-gray-700">Traditional and preferred practice. Central to funeral rites.</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700 font-medium">Buddhism</td><td className="px-4 py-3 text-gray-700">Traditional practice. No prohibition. Widely practiced.</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700 font-medium">LDS (Mormon)</td><td className="px-4 py-3 text-gray-700">Officially neutral. Burial historically preferred, but cremation allowed.</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Catholic Church */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Catholic Church
              </h2>
              <p className="text-gray-600 mb-4">
                The Catholic Church prohibited cremation for centuries, viewing it as a denial of the resurrection of the body. That changed in 1963 when the Church officially lifted the ban. Today, Catholics may choose cremation, though the Church continues to express a preference for burial.
              </p>
              <p className="text-gray-600 mb-4">
                The most important distinction for Catholic families is what happens after cremation. In 2016, the Vatican issued the instruction Ad resurgendum cum Christo (To Rise with Christ), which reaffirmed that cremated remains must be interred in a sacred place. This means a cemetery, mausoleum, or columbarium.
              </p>
              <p className="text-gray-600 mb-4">
                Under Catholic teaching, the following are not permitted:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-4">
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>Scattering ashes in nature, at sea, or in the air</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>Keeping ashes at home permanently</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>Dividing ashes among family members</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>Incorporating ashes into jewelry, art, or other objects</li>
              </ul>
              <p className="text-gray-600 mb-4">
                A Catholic funeral can include a Funeral Mass (with the body present) followed by cremation, or a Memorial Mass (after cremation has already occurred). Many parishes accommodate both arrangements. Speak with your parish priest to discuss the options available.
              </p>
              <p className="text-gray-600">
                The reasoning behind the Catholic position is rooted in the belief that the body is sacred, created in the image of God, and destined for resurrection. The Church views proper disposition of remains as an expression of respect for the body and hope in the resurrection.
              </p>
            </section>

            {/* Protestant denominations */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Protestant Denominations
              </h2>
              <p className="text-gray-600 mb-4">
                Most Protestant denominations take a permissive stance on cremation. There is no centralized prohibition, and individual families are generally free to choose based on personal preference, finances, and circumstance.
              </p>
              <p className="text-gray-600 mb-4">
                Here is where the major Protestant traditions stand:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-4">
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>Methodist: No prohibition. The United Methodist Church considers cremation an acceptable practice and leaves the decision to families.</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>Baptist: Generally permitted, though some individual congregations or pastors may express a preference for burial. The Southern Baptist Convention has no official policy prohibiting cremation.</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>Lutheran: Permitted. The Evangelical Lutheran Church in America and the Lutheran Church Missouri Synod both allow cremation.</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>Presbyterian: Permitted. The Presbyterian Church (USA) has no prohibition and acknowledges cremation as an acceptable choice.</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>Episcopal/Anglican: Permitted. The Book of Common Prayer includes rites for burial of ashes.</li>
              </ul>
              <p className="text-gray-600">
                While denominations may be officially permissive, individual churches and pastors may have their own preferences or guidance. If your faith community is important to you, it is worth having a conversation with your pastor or minister about how they can support your family through a cremation and memorial process.
              </p>
            </section>

            {/* Judaism */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Judaism
              </h2>
              <p className="text-gray-600 mb-4">
                Judaism&apos;s position on cremation varies significantly by branch.
              </p>
              <p className="text-gray-600 mb-4">
                <strong className="text-gray-800">Orthodox Judaism</strong> prohibits cremation. The prohibition is based on several principles: the body is viewed as belonging to God and must be returned to the earth, Jewish law (halakha) requires burial, and the historical association of cremation with the Holocaust makes it especially painful for many Jewish communities. Orthodox rabbis will not officiate at a service where cremation has occurred.
              </p>
              <p className="text-gray-600 mb-4">
                <strong className="text-gray-800">Conservative Judaism</strong> generally discourages cremation but does not uniformly prohibit it. Some Conservative rabbis will officiate at services for individuals who have been cremated, while others will not. The Committee on Jewish Law and Standards has upheld burial as the preferred practice while acknowledging that individual circumstances vary.
              </p>
              <p className="text-gray-600 mb-4">
                <strong className="text-gray-800">Reform Judaism</strong> permits cremation and leaves the decision to individuals and families. Reform rabbis will typically officiate at memorial services following cremation. The Reform movement emphasizes personal autonomy in matters of ritual practice.
              </p>
              <p className="text-gray-600">
                The core reasoning across all branches is that the body is a divine creation. In traditional Jewish teaching, the body is on loan from God and should be returned to the earth in its natural form. Burial in a simple shroud and plain wooden casket reflects this belief.
              </p>
            </section>

            {/* Islam */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Islam
              </h2>
              <p className="text-gray-600 mb-4">
                Islam prohibits cremation. This prohibition is consistent across both Sunni and Shia traditions and is considered settled within Islamic jurisprudence.
              </p>
              <p className="text-gray-600 mb-4">
                The prohibition is based on several Hadith teachings. The Prophet Muhammad instructed that the human body should be treated with dignity after death. Islamic teaching holds that burning the body is a form of mutilation (muthla), which is forbidden. The body belongs to God and must be returned to the earth through burial.
              </p>
              <p className="text-gray-600 mb-4">
                Islamic burial practices emphasize simplicity and promptness:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-4">
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>Burial should occur as soon as possible, ideally within 24 hours of death</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>The body is washed (ghusl) and wrapped in a simple white shroud (kafan)</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>No embalming or elaborate preparation is performed</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span>The body is placed directly in the ground, facing Mecca, without a casket in many traditions</li>
              </ul>
              <p className="text-gray-600">
                For Muslim families in the United States, some funeral homes specialize in Islamic burial practices and can facilitate prompt burial in accordance with religious requirements. Many cities have cemeteries with sections designated for Muslim burials.
              </p>
            </section>

            {/* Hinduism */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hinduism
              </h2>
              <p className="text-gray-600 mb-4">
                Cremation is the traditional and preferred practice in Hinduism. It has been the standard form of disposition for thousands of years. The Hindu funeral rite, known as Antyesti (meaning &quot;last sacrifice&quot;), centers on cremation as a sacred act.
              </p>
              <p className="text-gray-600 mb-4">
                In traditional practice, the eldest son (or closest male relative) lights the funeral pyre. In modern crematories, this role is adapted by having the family member press the button to start the cremation chamber or be present for a witness cremation.
              </p>
              <p className="text-gray-600 mb-4">
                Hindu beliefs about cremation are tied to the concept of the soul (atman) being released from the body to continue its journey. The fire is seen as a purifying force that frees the soul. The ashes are traditionally scattered in a sacred body of water, with the Ganges River being the most significant. In the United States, many Hindu families scatter ashes in a river, ocean, or other natural water source.
              </p>
              <p className="text-gray-600">
                There are exceptions within Hinduism. Young children, saints, and pregnant women are sometimes buried rather than cremated, as their bodies are considered pure and do not require the purification of fire. These practices vary by region and community.
              </p>
            </section>

            {/* Buddhism */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Buddhism
              </h2>
              <p className="text-gray-600 mb-4">
                Cremation is the traditional practice in Buddhism. The Buddha himself was cremated after his death, and his relics were distributed among his followers. This historical precedent carries significant weight in Buddhist practice.
              </p>
              <p className="text-gray-600 mb-4">
                There is no prohibition against burial in Buddhism, but cremation is widely practiced in Buddhist countries including Thailand, Sri Lanka, Japan, and Tibet. The specific funeral customs vary greatly by culture and region, but cremation remains the most common method of disposition.
              </p>
              <p className="text-gray-600">
                Buddhist funeral rites may include chanting, meditation, offerings, and prayers led by monks or a Buddhist teacher. In some traditions, the cremation takes place several days after death to allow time for the consciousness to fully depart the body. The ashes may be kept in a temple, placed in a stupa, scattered, or divided among family members. Buddhism does not prescribe a single correct approach to handling cremated remains.
              </p>
            </section>

            {/* LDS Church */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Church of Jesus Christ of Latter-day Saints (LDS/Mormon)
              </h2>
              <p className="text-gray-600 mb-4">
                The LDS Church has historically preferred burial but has taken an officially neutral position on cremation. Church policy states that the decision is left to the family and should be made with prayer and consideration of individual circumstances.
              </p>
              <p className="text-gray-600 mb-4">
                In earlier decades, LDS leaders more strongly encouraged burial, partly due to beliefs about the physical resurrection and the importance of the body. The Church&apos;s General Handbook now states that cremation is not prohibited, acknowledging that cultural norms and practical circumstances vary around the world.
              </p>
              <p className="text-gray-600">
                LDS members who choose cremation can still have their remains dressed in temple clothing (if endowed) before cremation. A bishop or stake president can provide guidance on how temple ordinances and burial customs can be adapted for a cremation arrangement. The key teaching is that God&apos;s power to resurrect the body is not limited by the method of disposition.
              </p>
            </section>

            {/* How to honor religious traditions within a cremation */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Honor Religious Traditions Within a Cremation
              </h2>
              <p className="text-gray-600 mb-4">
                If you have chosen cremation and want to honor your faith tradition, there are several ways to bridge the two.
              </p>
              <ul className="space-y-3 text-gray-600 ml-4">
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span><strong className="text-gray-800">Work with your clergy.</strong> Talk to your pastor, priest, rabbi, or religious leader about your plans. Many will offer prayers, blessings, or a brief service before the cremation takes place.</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span><strong className="text-gray-800">Request prayer before cremation.</strong> Some families arrange for a prayer or blessing to be said over the body at the funeral home or crematory before the cremation begins. Many providers accommodate this.</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span><strong className="text-gray-800">Place religious items with the remains.</strong> Where the crematory allows, families may place a rosary, prayer card, religious text, or small devotional item with the body before cremation. Check with your provider about what items are permitted.</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span><strong className="text-gray-800">Hold a religious service after cremation.</strong> A memorial service, Memorial Mass, or religious gathering can take place after the cremation. The urn can be present at the service if the family wishes.</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">&bull;</span><strong className="text-gray-800">Choose interment in a religious cemetery.</strong> Catholic, Jewish, and other faith based cemeteries accept cremated remains. Columbarium niches in churches and synagogues are another option.</li>
              </ul>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions About Cremation and Religion
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Reading */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Direct Cremation? The Complete 2026 Guide</h3>
                  <p className="text-sm text-gray-600">Everything you need to know about direct cremation, including cost, process, and how to find a provider.</p>
                </Link>
                <Link href="/blog/what-happens-during-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">What Happens During Cremation?</h3>
                  <p className="text-sm text-gray-600">A respectful, detailed explanation of the cremation process from start to finish.</p>
                </Link>
                <Link href="/blog/scattering-ashes-guide" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Scattering Ashes: Laws, Locations, and How to Plan</h3>
                  <p className="text-sm text-gray-600">Where and how you can legally scatter cremated remains in the United States.</p>
                </Link>
                <Link href="/blog/burial-vs-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Burial vs Cremation: How to Decide</h3>
                  <p className="text-sm text-gray-600">Side by side comparison of cost, process, timeline, and religious considerations.</p>
                </Link>
                <Link href="/blog/how-direct-cremation-works" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">How Direct Cremation Works</h3>
                  <p className="text-sm text-gray-600">Step by step walkthrough of the direct cremation process from first call to return of ashes.</p>
                </Link>
                <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Browse Direct Cremation Providers</h3>
                  <p className="text-sm text-gray-600">Find and compare direct cremation providers in your state and city.</p>
                </Link>
              </div>
            </section>

            <div className="text-center text-sm text-gray-400 mt-12">
              <p>Written by <strong className="text-gray-500">Terry Feely</strong>, former firefighter and paramedic. Terry has firsthand experience helping families navigate end of life decisions and founded Evermore Directory to make funeral planning more transparent.</p>
            </div>

          </article>
        </div>
      </main>
    </>
  );
}
