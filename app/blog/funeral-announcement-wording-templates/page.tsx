import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Funeral Announcement Wording: 15 Templates Families Can Copy',
  description: 'Find 15 funeral announcement wording templates organized by style. Traditional, brief, celebration of life, private, memorial, and religious formats.',
  keywords: 'funeral announcement wording, funeral announcement template, death announcement wording, funeral notice template, funeral invitation wording',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/funeral-announcement-wording-templates' },
  openGraph: { title: 'Funeral Announcement Wording: 15 Templates', url: 'https://funeralhomedirectories.com/blog/funeral-announcement-wording-templates', type: 'article' },
};

const faqs = [
  { q: 'What is the difference between a funeral announcement and an obituary?', a: 'A funeral announcement is a brief notice that tells people when and where the funeral service will be held. An obituary is a longer biographical piece about the person who died. A funeral announcement is focused on logistics. An obituary tells the story of a life.' },
  { q: 'When should I send a funeral announcement?', a: 'Send the announcement as soon as the funeral details are confirmed, ideally within 24 to 48 hours of the death. If the service is several days away, you have more time, but most families send the announcement within the first day or two.' },
  { q: 'Should I include the cause of death in a funeral announcement?', a: 'No. A funeral announcement does not need to include the cause of death. If the family wants to share that information, it is more appropriate to include it in a full obituary rather than in the service announcement.' },
  { q: 'Can I send a funeral announcement by text message?', a: 'Yes. Text messages and group texts are now one of the most common ways to share funeral details, especially for reaching people quickly. You can send the announcement as a text or share a link to the full announcement online.' },
  { q: 'Is it appropriate to post a funeral announcement on social media?', a: 'Yes, as long as the immediate family has given permission. Many families post funeral announcements on Facebook, Instagram, or community pages. Make sure the family has been notified before posting publicly.' },
];

export default function FuneralAnnouncementWordingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Funeral Announcement Wording: 15 Templates Families Can Copy", author: { "@type": "Person", name: "Terry Feely", url: "https://funeralhomedirectories.com/about" }, publisher: { "@type": "Organization", name: "Evermore Directory", url: "https://funeralhomedirectories.com" }, datePublished: "2026-05-12", dateModified: "2026-05-12", url: "https://funeralhomedirectories.com/blog/funeral-announcement-wording-templates" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://funeralhomedirectories.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://funeralhomedirectories.com/blog" }, { "@type": "ListItem", position: 3, name: "Funeral Announcement Wording" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Announcement Wording: 15 Templates Families Can Copy</h1>
              <p className="text-sm text-gray-500 mb-3">By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026</p>
              <p className="text-xl text-gray-600">Copy and customize these funeral announcement templates to notify family, friends, and community about a service.</p>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                A funeral announcement is a brief notice that tells people when, where, and how to attend a funeral or memorial service. The single most important rule is to include every detail someone needs to show up: the full name of the deceased, the date and time of the service, the location with a full address, and whether there will be a reception or visitation beforehand. Everything else is optional.
              </p>
              <p className="text-gray-600 mb-4">
                As a former paramedic, I have been with families in the hours after a death when these announcements need to go out fast. The templates below are designed to be copied, filled in, and sent within minutes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Include in Every Funeral Announcement</h2>
              <p className="text-gray-600 mb-4">Every funeral announcement should contain these eight elements:</p>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside mb-4">
                <li><strong>Full legal name</strong> of the deceased (include maiden name or nickname if commonly used)</li>
                <li><strong>Age</strong> at time of death</li>
                <li><strong>Date of death</strong></li>
                <li><strong>Service location</strong> with full street address</li>
                <li><strong>Service date and time</strong> (include the day of the week for clarity)</li>
                <li><strong>Viewing or visitation details</strong> if applicable (separate time and location if different)</li>
                <li><strong>Reception or repast information</strong> if applicable</li>
                <li><strong>Contact person</strong> for questions (name and phone number or email)</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">15 Funeral Announcement Templates</h2>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-8">Traditional Announcements</h3>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 1: Traditional formal</p>
                <p className="text-gray-700 leading-relaxed italic">The family of [Full Name], age [age], announces with deep sorrow [his/her] passing on [date of death]. A funeral service will be held on [day], [date], at [time] at [location name], [full address]. Visitation will take place from [time] to [time] prior to the service. A reception will follow at [location]. In lieu of flowers, the family requests donations to [charity]. For questions, please contact [name] at [phone/email].</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 2: Traditional with religious tone</p>
                <p className="text-gray-700 leading-relaxed italic">[Full Name], age [age], entered eternal rest on [date]. A Mass of Christian Burial will be celebrated on [day], [date], at [time] at [church name], [address]. Visitation will be held at [funeral home name] on [day] from [time] to [time]. Interment will follow at [cemetery name]. The family welcomes your prayers and presence.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 3: Traditional warm tone</p>
                <p className="text-gray-700 leading-relaxed italic">It is with heavy hearts that we share the passing of [Full Name], who died peacefully on [date] at the age of [age]. A funeral service celebrating [his/her] life will be held on [day], [date], at [time] at [location], [address]. All who knew and cared for [first name] are welcome to attend. Please contact [name] at [phone] with any questions.</p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-8">Brief / Immediate Notification</h3>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 4: Brief text or email</p>
                <p className="text-gray-700 leading-relaxed italic">[Full Name] passed away on [date]. Services will be held on [day], [date], at [time] at [location], [address]. All are welcome. Details to follow.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 5: Immediate notification with details pending</p>
                <p className="text-gray-700 leading-relaxed italic">We are saddened to share that [Full Name] passed away on [date] at the age of [age]. Funeral arrangements are being made and details will be shared as soon as they are finalized. For now, please keep the family in your thoughts.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 6: Group text announcement</p>
                <p className="text-gray-700 leading-relaxed italic">Hi everyone. I am reaching out to let you know that [Full Name] passed away [this morning/yesterday/on date]. The funeral will be on [day], [date] at [time] at [location], [address]. Please let me know if you have questions. Thank you for your support.</p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-8">Celebration of Life</h3>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 7: Celebration of life, casual tone</p>
                <p className="text-gray-700 leading-relaxed italic">Please join us in celebrating the life of [Full Name], who passed away on [date] at the age of [age]. A celebration of life will be held on [day], [date], at [time] at [location], [address]. Come share your favorite stories and memories. [First name] would have wanted us together.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 8: Celebration of life, delayed date</p>
                <p className="text-gray-700 leading-relaxed italic">[Full Name] passed away on [date of death]. The family will hold a celebration of life on [date, weeks or months later] at [time] at [location], [address]. This gathering will honor [first name]&apos;s memory with stories, music, and fellowship. All who cared for [him/her] are warmly welcome.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 9: Celebration of life, outdoor setting</p>
                <p className="text-gray-700 leading-relaxed italic">In memory of [Full Name], the family invites you to a celebration of life on [day], [date], at [time] at [park/beach/garden name], [address]. [First name] always felt most at home outdoors, and we want to honor that. Please dress casually and bring a lawn chair. Light refreshments will be provided.</p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-8">Private Service / Family Only</h3>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 10: Private service with public memorial later</p>
                <p className="text-gray-700 leading-relaxed italic">[Full Name], age [age], passed away on [date]. A private funeral service will be held for immediate family only. A public memorial will be announced at a later date. The family appreciates your understanding and your kind words during this time.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 11: Private service, no public memorial</p>
                <p className="text-gray-700 leading-relaxed italic">[Full Name] passed away peacefully on [date] at the age of [age]. Per [his/her] wishes, a private service will be held for family. In lieu of flowers, the family requests donations to [charity/organization] in [first name]&apos;s memory. Cards may be sent to [address or funeral home name].</p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-8">Memorial Service</h3>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 12: Memorial service (cremation already completed)</p>
                <p className="text-gray-700 leading-relaxed italic">[Full Name], age [age], passed away on [date]. Cremation has taken place. A memorial service will be held on [day], [date], at [time] at [location], [address]. All who knew [first name] are welcome to attend and celebrate [his/her] life.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 13: Memorial service at place of worship</p>
                <p className="text-gray-700 leading-relaxed italic">A memorial service for [Full Name] will be held on [day], [date], at [time] at [church/synagogue/mosque name], [address]. [First name] passed away on [date] at the age of [age]. The service will include [readings/music/prayers] followed by a reception in the fellowship hall. All are welcome.</p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-8">Catholic / Religious</h3>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 14: Catholic funeral mass</p>
                <p className="text-gray-700 leading-relaxed italic">[Full Name], age [age], was called home to the Lord on [date]. A Funeral Mass will be celebrated on [day], [date], at [time] at [parish name], [address]. Visitation will be held the evening prior from [time] to [time] at [funeral home name], [address], with a Rosary at [time]. Interment will follow at [cemetery]. May [his/her] soul rest in peace.</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Template 15: Baptist/Protestant funeral</p>
                <p className="text-gray-700 leading-relaxed italic">[Full Name], age [age], went home to be with the Lord on [date]. A homegoing service will be held on [day], [date], at [time] at [church name], [address]. The family will receive friends from [time] to [time] prior to the service. Burial will follow at [cemetery name]. The family is grateful for your prayers and support.</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Share a Funeral Announcement</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">1.</span><span><strong>Newspaper obituary.</strong> Contact the local newspaper&apos;s obituary desk. Most charge per line or per word. Include the announcement text and a photo if desired.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">2.</span><span><strong>Social media.</strong> Post on Facebook, share via Instagram Stories, or post in community groups. Make sure the immediate family has been notified first.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">3.</span><span><strong>Text message or email.</strong> For quick, direct notification. Use a group text for close friends and family. Use email for a wider circle or workplace contacts.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">4.</span><span><strong>Printed cards.</strong> Funeral homes can print announcement cards to hand out or mail. These are traditional and appreciated by older family members.</span></li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Funeral Announcement Etiquette</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>Timing:</strong> Send the announcement as soon as funeral details are confirmed. For an immediate need service (within 2 to 3 days), send the same day the arrangements are made.</span></li>
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>What to include:</strong> Name, age, date of death, service details, location, and a contact person. That covers everything someone needs to attend.</span></li>
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>What to leave out:</strong> Cause of death (unless the family specifically wants to include it), financial details, and family conflicts. Keep the announcement focused on honoring the person and informing the community.</span></li>
                <li className="flex items-start"><span className="text-slate-600 mr-3">&#8226;</span><span><strong>Sensitive situations:</strong> For sudden deaths, overdoses, suicides, or other difficult circumstances, the announcement does not need to address the cause. A simple "passed away unexpectedly" is appropriate if the family wants to acknowledge the sudden nature.</span></li>
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
                <Link href="/blog/how-to-write-an-obituary" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">How to Write an Obituary</h3><p className="text-sm text-gray-600">Templates and guidance for writing a full obituary.</p></Link>
                <Link href="/blog/how-to-plan-a-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">How to Plan a Funeral</h3><p className="text-sm text-gray-600">Step by step guide to planning a funeral service.</p></Link>
                <Link href="/blog/what-to-do-when-someone-dies" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">What to Do When Someone Dies</h3><p className="text-sm text-gray-600">Complete checklist for the first 72 hours.</p></Link>
                <Link href="/obituary-maker" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">Free AI Obituary Maker</h3><p className="text-sm text-gray-600">Generate an obituary in minutes with our free tool.</p></Link>
              </div>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 5,100+ funeral homes and cremation providers across all 50 states. Compare prices, services, and locations. Free for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
