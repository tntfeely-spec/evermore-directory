import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title:
    'How to Choose a Direct Cremation Provider: 7 Point Checklist | Evermore Directory',
  description:
    'Choose a direct cremation provider using this 7 point checklist: verify licensing, request a price list, check reviews, and evaluate communication and timeline.',
  keywords: [
    'how to choose direct cremation provider',
    'direct cremation provider checklist',
    'choosing a cremation provider',
    'cremation provider reviews',
    'cremation provider licensing',
    'best direct cremation provider',
  ],
  robots: 'index, follow',
  alternates: {
    canonical:
      'https://evermore.com/blog/how-to-choose-direct-cremation-provider',
  },
  openGraph: {
    title:
      'How to Choose a Direct Cremation Provider: 7 Point Checklist | Evermore Directory',
    description:
      'Choose a direct cremation provider using this 7 point checklist: verify licensing, request a price list, check reviews, and evaluate communication and timeline.',
    url: 'https://evermore.com/blog/how-to-choose-direct-cremation-provider',
    type: 'article',
  },
};

const faqs = [
  {
    q: 'What is a General Price List and why should I ask for one?',
    a: 'A General Price List (GPL) is an itemized list of all services and prices offered by a funeral or cremation provider. The FTC Funeral Rule requires every provider to make this list available upon request. The GPL lets you compare prices accurately and identify any fees that are not included in a quoted package price.',
  },
  {
    q: 'How do I verify that a cremation provider is licensed?',
    a: 'Every state has a funeral regulatory board or licensing authority that maintains a public database of licensed providers. Search online for your state name plus "funeral board" or "cremation license lookup." You can verify that a provider holds an active, current license and check for any disciplinary actions.',
  },
  {
    q: 'Should I choose an online provider or a local funeral home?',
    a: 'Both can provide quality service. Online providers typically offer lower prices because they have less overhead. Local funeral homes may offer more personal interaction and the ability to visit their facility. The right choice depends on your priorities: if price is the main concern, online providers often win. If you value face-to-face contact, a local provider may be better.',
  },
  {
    q: 'What is a reasonable timeline for direct cremation?',
    a: 'From the initial call to receiving the ashes, direct cremation typically takes 5 to 10 business days. The main variable is your state waiting period (24 to 72 hours). A provider that quotes significantly longer than 10 business days without a clear reason may not be operating efficiently.',
  },
  {
    q: 'What should I do if a provider will not give me a price list?',
    a: 'Walk away. The FTC Funeral Rule requires every provider to give you an itemized price list upon request, whether in person, by phone, or by mail. A provider that refuses or stalls on this request is violating federal law and should not be trusted with your business.',
  },
];

export default function HowToChooseDirectCremationProvider() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'How to Choose a Direct Cremation Provider: 7 Point Checklist',
            author: {
              '@type': 'Person',
              name: 'Terry Feely',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Evermore Directory',
            },
            datePublished: '2026-04-18',
            dateModified: '2026-04-18',
            description:
              'A 7 point checklist for choosing a direct cremation provider, covering licensing, pricing, reviews, chain of custody, and communication.',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://evermore.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://evermore.com/blog',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'How to Choose a Direct Cremation Provider',
                item: 'https://evermore.com/blog/how-to-choose-direct-cremation-provider',
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <Navigation />

      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                How to Choose a Direct Cremation Provider: 7 Point Checklist
              </h1>
              <p className="text-sm text-gray-500 mb-4">
                By Terry Feely, Former Firefighter and Paramedic | Evermore
                Directory · Last updated: April 2026
              </p>
              <p className="text-lg text-gray-700">
                Not all cremation providers are the same. Prices vary by
                thousands of dollars, service quality ranges from excellent to
                unacceptable, and the difference often comes down to asking the
                right questions before you commit.
              </p>
            </header>

            <section className="mb-10">
              <p className="text-gray-800 leading-relaxed mb-4">
                When choosing a direct cremation provider, verify their state
                licensing, request an itemized General Price List, confirm what
                is included in the quoted price, check online reviews, ask about
                their chain of custody procedures, clarify the expected
                timeline, and evaluate their communication responsiveness. These
                seven steps protect you from overpaying and ensure your family
                member is treated with dignity.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                I spent years as a firefighter and paramedic working alongside
                funeral professionals. I saw the best and worst of the
                industry. The providers who do it right are transparent,
                responsive, and straightforward. If you are new to this topic,
                start with our complete guide on{' '}
                <Link
                  href="/blog/what-is-direct-cremation"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  what direct cremation is
                </Link>
                , then use this checklist to find a provider you can trust.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Choosing the Right Provider Matters
              </h2>
              <p className="text-gray-800 leading-relaxed mb-4">
                Direct cremation prices for the same basic service can range
                from $800 to $4,000 within the same city. That is not because
                the expensive provider does something different during the
                cremation. It is because of overhead, markup, and what extras
                they bundle in.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Beyond price, you want a provider who communicates clearly,
                responds promptly, and treats your family with respect. When
                someone passes, you should not have to chase down updates or
                wonder what is happening. A good provider handles the logistics
                so you can focus on your family.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The 7 Point Checklist
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-2">
                1. Coverage Area
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Confirm that the provider serves your specific city or county.
                Ask how far they will travel for transportation. Most providers
                include pickup within a set radius (often 25 to 50 miles) and
                charge per mile beyond that. If the death occurs at a location
                outside their normal service area, know what the additional cost
                will be before you agree. Some online providers work with
                partner crematories in different regions, so ask exactly which
                facility will handle the cremation.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-2">
                2. Price Transparency
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Request the General Price List. The FTC Funeral Rule requires
                every provider to give you one. A trustworthy provider will have
                it on their website or will send it promptly by email. Look at
                whether they offer itemized pricing or package pricing. With
                itemized pricing, you can see exactly what each service costs.
                With package pricing, make sure you understand what is included
                and what is not. Common items that may be excluded: extra
                mileage, weekend surcharges, death certificate copies, and urn.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-2">
                3. Licensing
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Every cremation provider must hold a valid license from the
                state where they operate. To verify this, search for your state
                funeral board or funeral regulatory authority website. Most
                states maintain an online database of licensed funeral
                establishments, crematories, and funeral directors. Check that
                the license is active and current. Look for any disciplinary
                actions or complaints on file. If a provider cannot tell you
                their license number or gets evasive about licensing, consider
                that a serious warning sign.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-2">
                4. Chain of Custody
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Chain of custody refers to the procedures that ensure the body
                is properly identified and tracked from the moment of pickup
                through the return of ashes. Ask the provider these specific
                questions: How do you identify the deceased at pickup? What
                tracking methods do you use during storage and cremation? Do you
                cremate one person at a time per chamber? How do you ensure the
                correct ashes are returned to the family? A reputable provider
                will have clear, confident answers to all of these questions.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-2">
                5. Reviews
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Check Google reviews, BBB ratings, and any complaints filed with
                your state funeral regulatory board. Look for recent reviews
                from the past 12 months. Pay attention to comments about
                communication, timeliness, hidden fees, and how the provider
                handled problems. A provider with mostly positive reviews and
                thoughtful responses to negative ones demonstrates
                accountability. A pattern of unanswered complaints or defensive
                responses is a red flag.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-2">
                6. Timeline
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Ask the provider for their typical timeline from the first call
                to the return of ashes. A reasonable answer is 5 to 10 business
                days. Ask what factors could extend that timeline, such as
                medical examiner involvement, a backlog at the crematory, or
                shipping delays. Also ask about their initial response time.
                When you call to report a death, how quickly will the transport
                team arrive? A standard response time is 1 to 4 hours.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-2">
                7. Communication
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                This is often the factor that separates good providers from
                great ones. Ask: Who is my point of contact? Will I have a
                single person handling my case or will I talk to different
                people each time I call? How will I receive updates (phone,
                email, text)? Is someone available after hours and on weekends?
                The best providers proactively update you at each stage of the
                process. You should never have to wonder what is happening.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Questions to Ask on the Phone
              </h2>
              <p className="text-gray-800 leading-relaxed mb-4">
                When you call a provider for the first time, ask these eight
                questions. The answers will tell you a lot about how they
                operate.
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-800 mb-4">
                <li>What is your total price for direct cremation, with no add-ons?</li>
                <li>Can you email me your General Price List right now?</li>
                <li>What is included in that price and what costs extra?</li>
                <li>Are there additional charges for weekend or after-hours pickups?</li>
                <li>How many death certificate copies are included, and what does each additional copy cost?</li>
                <li>What is your typical timeline from first call to return of ashes?</li>
                <li>How do you track and identify remains throughout the process?</li>
                <li>What is your state license number?</li>
              </ol>
              <p className="text-gray-800 leading-relaxed mb-4">
                A good provider will answer these questions directly and without
                hesitation. If they seem annoyed by the questions, dodge them,
                or try to rush you into a decision, move on to the next
                provider.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Red Flags to Watch For
              </h2>
              <p className="text-gray-800 leading-relaxed mb-4">
                In my experience working alongside funeral professionals, these
                are the warning signs that should make you pause.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-4">
                <li>
                  <strong>No GPL available.</strong> If a provider will not
                  share their price list, they are violating federal law. Do not
                  do business with them.
                </li>
                <li>
                  <strong>Pressure to upgrade.</strong> A provider that tries
                  to upsell you from direct cremation to a more expensive
                  package is prioritizing their revenue over your needs. Direct
                  cremation is a legitimate, dignified choice.
                </li>
                <li>
                  <strong>Unclear pricing.</strong> If you cannot get a clear,
                  all-in price after asking directly, the final bill will likely
                  include surprises.
                </li>
                <li>
                  <strong>No physical address.</strong> A provider should have
                  a verifiable physical location, even if they primarily
                  operate online. No address means no accountability.
                </li>
                <li>
                  <strong>Negative review patterns.</strong> One bad review can
                  happen to anyone. But multiple reviews mentioning the same
                  problems (poor communication, hidden fees, delayed return of
                  ashes) indicate systemic issues.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Online Providers vs Local Providers
              </h2>
              <p className="text-gray-800 leading-relaxed mb-4">
                Both online and local providers can deliver excellent direct
                cremation service. Here is how they compare.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Online Providers
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-4">
                <li>Typically lower prices due to reduced overhead</li>
                <li>Arrangements handled by phone and online, which is convenient for some families</li>
                <li>May partner with local crematories rather than operating their own</li>
                <li>Coverage may span multiple states or nationwide</li>
                <li>Less opportunity for face-to-face interaction</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Local Providers
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-4">
                <li>You can visit their facility in person</li>
                <li>May offer a more personal, hands-on experience</li>
                <li>Established presence in the community with local reputation</li>
                <li>Pricing may be higher due to facility and staffing overhead</li>
                <li>Limited to one geographic area</li>
              </ul>
              <p className="text-gray-800 leading-relaxed mb-4">
                The right choice depends on your priorities. If price and
                convenience matter most, an online provider may be the better
                fit. If you want to meet your provider face-to-face and value
                a local presence, a brick-and-mortar provider may feel more
                comfortable. Either way, use the 7 point checklist above to
                evaluate them.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Find a Provider in Our Directory
              </h2>
              <p className="text-gray-800 leading-relaxed mb-4">
                Our{' '}
                <Link
                  href="/direct-cremation"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  direct cremation directory
                </Link>{' '}
                lists providers across the country with pricing information,
                service details, and coverage areas. Use it as a starting point,
                then apply this checklist to narrow your options.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-gray-800 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Related Reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/blog/what-is-direct-cremation"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-blue-700">
                    What Is Direct Cremation? The Complete Guide
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Everything you need to know about direct cremation in one
                    place.
                  </p>
                </Link>
                <Link
                  href="/blog/why-direct-cremation-is-affordable"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-blue-700">
                    Why Is Direct Cremation So Affordable?
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    A cost breakdown showing where the savings come from.
                  </p>
                </Link>
                <Link
                  href="/blog/what-is-a-cremation-society"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-blue-700">
                    What Is a Cremation Society?
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    How cremation societies work and whether membership is worth
                    it.
                  </p>
                </Link>
                <Link
                  href="/blog/funeral-home-red-flags"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-blue-700">
                    Funeral Home Red Flags
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Warning signs to watch for when dealing with funeral
                    providers.
                  </p>
                </Link>
                <Link
                  href="/blog/cremation-near-me"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-blue-700">
                    Cremation Near Me
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    How to find cremation providers in your area.
                  </p>
                </Link>
                <Link
                  href="/direct-cremation"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-blue-700">
                    Find Direct Cremation Providers Near You
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Browse our directory of vetted direct cremation providers.
                  </p>
                </Link>
              </div>
            </section>

            <footer className="border-t border-gray-200 pt-6 mt-10">
              <p className="text-sm text-gray-500">
                Written by Terry Feely for Evermore Directory. Information is
                current as of April 2026 and is intended for general guidance
                only.
              </p>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
}
