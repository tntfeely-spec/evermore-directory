import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Cremation vs Aquamation: Cost, Process, and Environmental Comparison (2026)',
  description:
    'Compare cremation and aquamation side by side. Flame cremation costs $695 to $3,500 and is available in all 50 states. Aquamation costs $2,000 to $5,000, is legal in 28 states, and uses one-tenth the energy.',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/vs/cremation-vs-aquamation',
  },
  openGraph: {
    title: 'Cremation vs Aquamation: Cost, Process, and Environmental Comparison (2026)',
    description:
      'Compare cremation and aquamation side by side. Flame cremation costs $695 to $3,500 and is available in all 50 states. Aquamation costs $2,000 to $5,000, is legal in 28 states, and uses one-tenth the energy.',
    url: 'https://funeralhomedirectories.com/vs/cremation-vs-aquamation',
    siteName: 'Evermore Directory',
    type: 'article',
  },
};

export default function CremationVsAquamationPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cremation vs Aquamation: Complete Comparison',
    description:
      'A detailed comparison of traditional flame cremation and aquamation covering cost, process, environmental impact, and availability.',
    datePublished: '2026-05-15',
    dateModified: '2026-05-15',
    author: {
      '@type': 'Person',
      name: 'Terry Feely',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Evermore Directory',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://funeralhomedirectories.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Comparisons',
        item: 'https://funeralhomedirectories.com/vs',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Cremation vs Aquamation',
        item: 'https://funeralhomedirectories.com/vs/cremation-vs-aquamation',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is aquamation legal in my state?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As of 2026, aquamation is legal in approximately 28 states. States that have approved it include California, Colorado, Florida, Illinois, Minnesota, Oregon, and Washington, among others. Legislation is pending in several additional states. Check with your state board of funeral directors for the most current status.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does aquamation cost more than cremation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aquamation typically costs $2,000 to $5,000 compared to $695 to $3,500 for flame cremation. The higher price reflects the cost of specialized alkaline hydrolysis equipment, limited availability of providers, and lower consumer demand. As more funeral homes adopt the technology, prices are expected to decrease.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you get ashes back from aquamation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Aquamation returns approximately 20 to 30 percent more remains than flame cremation. The remains are a white powder, finer and lighter in color than traditional cremation ashes. They can be placed in an urn, scattered, or handled in the same ways as cremation remains.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does aquamation take compared to cremation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Flame cremation takes 2 to 3 hours at temperatures between 1,400 and 1,800 degrees Fahrenheit. Aquamation takes 6 to 8 hours using water and alkali solution heated to 200 to 300 degrees Fahrenheit. The total turnaround time for receiving remains is usually similar for both options, typically 3 to 7 business days.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is aquamation better for the environment than cremation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aquamation uses roughly one-tenth the energy of flame cremation and produces no direct carbon emissions, no mercury release from dental fillings, and no particulate matter. The sterile liquid byproduct can be safely returned to the water system. For families prioritizing environmental impact, aquamation is the more sustainable choice.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex flex-wrap gap-1">
            <li>
              <Link href="/" className="hover:text-gray-700 underline">Home</Link>
              <span className="mx-1">/</span>
            </li>
            <li>
              <Link href="/resources" className="hover:text-gray-700 underline">Resources</Link>
              <span className="mx-1">/</span>
            </li>
            <li className="text-gray-800 font-medium">Cremation vs Aquamation</li>
          </ol>
        </nav>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Cremation vs Aquamation: Complete Comparison
        </h1>

        {/* AI-citable opening */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Traditional flame cremation costs $695 to $3,500 and is available in all 50 states, while
          aquamation (alkaline hydrolysis) costs $2,000 to $5,000 and is legal in approximately 28
          states as of 2026. Aquamation uses one-tenth the energy of flame cremation and produces no
          direct carbon emissions.
        </p>

        {/* Byline */}
        <p className="text-sm text-gray-500 mb-10">
          By{' '}
          <Link href="/about" className="text-blue-700 underline">
            Terry Feely
          </Link>
          , Former Firefighter and Paramedic &middot; Last Updated May 2026
        </p>

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Factor</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Cremation</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Aquamation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Cost</td>
                  <td className="p-3 border border-gray-200">$695 to $3,500</td>
                  <td className="p-3 border border-gray-200">$2,000 to $5,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Process</td>
                  <td className="p-3 border border-gray-200">Flame-based reduction</td>
                  <td className="p-3 border border-gray-200">Water and alkali solution</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Temperature</td>
                  <td className="p-3 border border-gray-200">1,400 to 1,800&deg;F</td>
                  <td className="p-3 border border-gray-200">200 to 300&deg;F</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Duration</td>
                  <td className="p-3 border border-gray-200">2 to 3 hours</td>
                  <td className="p-3 border border-gray-200">6 to 8 hours</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Energy Use</td>
                  <td className="p-3 border border-gray-200">High (natural gas)</td>
                  <td className="p-3 border border-gray-200">About one-tenth of cremation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Carbon Emissions</td>
                  <td className="p-3 border border-gray-200">Approximately 540 lbs CO2 per cremation</td>
                  <td className="p-3 border border-gray-200">No direct carbon emissions</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Availability</td>
                  <td className="p-3 border border-gray-200">All 50 states</td>
                  <td className="p-3 border border-gray-200">Approximately 28 states</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Remains Returned</td>
                  <td className="p-3 border border-gray-200">Standard volume, gray in color</td>
                  <td className="p-3 border border-gray-200">20 to 30% more, white and fine</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Environmental Impact</td>
                  <td className="p-3 border border-gray-200">Moderate. Emissions and fuel use.</td>
                  <td className="p-3 border border-gray-200">Low. Minimal energy, no emissions.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Mercury Concerns</td>
                  <td className="p-3 border border-gray-200">Mercury released from dental fillings</td>
                  <td className="p-3 border border-gray-200">No mercury release</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Legal Status</td>
                  <td className="p-3 border border-gray-200">Legal everywhere in the U.S.</td>
                  <td className="p-3 border border-gray-200">Legal in 28 states, pending in others</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Public Awareness</td>
                  <td className="p-3 border border-gray-200">Widely understood and accepted</td>
                  <td className="p-3 border border-gray-200">Growing awareness, still unfamiliar to many</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cremation Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cremation Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Flame cremation has been practiced for thousands of years and remains the most common
            alternative to traditional burial in the United States. As of 2026, the national
            cremation rate exceeds 60 percent. The process uses a specialized furnace called a
            retort, which reaches temperatures between 1,400 and 1,800 degrees Fahrenheit.
            Organic tissue is reduced to bone fragments over the course of 2 to 3 hours. Those
            fragments are then processed into a fine, grayish powder and returned to the family.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Direct cremation, which skips the formal viewing and ceremony beforehand, is the most
            affordable option. Prices for direct cremation start around $695 in competitive markets
            and can reach $3,500 or more in areas with fewer providers. Families who choose
            cremation can still hold a memorial service at any time before or after the process.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From an environmental standpoint, each flame cremation produces approximately 540
            pounds of carbon dioxide. Natural gas is the primary fuel source, and mercury vapor can
            be released when dental amalgam fillings are present. Some crematories use filtration
            systems to reduce emissions, but this is not universally required. Despite these
            concerns, cremation still uses significantly fewer resources than traditional casket
            burial with embalming and a concrete vault.
          </p>
        </section>

        {/* Aquamation Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Aquamation Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aquamation, formally known as alkaline hydrolysis, uses water and a potassium hydroxide
            solution to break down the body. The process mimics natural decomposition but
            accelerates it from months to roughly 6 to 8 hours. The body is placed in a
            stainless-steel vessel, and the solution is heated to 200 to 300 degrees Fahrenheit
            under gentle pressure. By the end of the cycle, only bone remains. These are dried,
            processed into a fine white powder, and returned to the family.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The liquid byproduct of aquamation is a sterile solution of amino acids, salts, and
            sugars. It contains no DNA or recognizable tissue and is safely discharged into the
            municipal water system, where it is treated like any other wastewater. Some providers
            offer families the option of using this nutrient-rich effluent for garden or tree
            planting.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Aquamation is currently legal in approximately 28 states, with legislation pending in
            several more. Availability remains limited because fewer funeral homes have invested in
            the equipment, which costs between $150,000 and $500,000 per unit. For families who
            can access the service, aquamation returns 20 to 30 percent more remains than flame
            cremation. The remains are also noticeably whiter and finer in texture.
          </p>
        </section>

        {/* Cost Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cost Comparison</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Flame cremation is the more affordable option in nearly every market. Direct cremation
            without a service ranges from $695 to $1,500 in most areas. When you add a viewing,
            ceremony, or upgraded urn, total costs can rise to $3,500 or more.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aquamation pricing typically falls between $2,000 and $5,000. The higher cost reflects
            the expense of alkaline hydrolysis equipment, limited competition among providers, and
            lower overall demand. In states with only one or two aquamation providers, prices tend
            to sit at the higher end of that range.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As more states legalize aquamation and more funeral homes adopt the technology,
            industry analysts expect prices to decrease. Families comparing options should request
            an itemized price list from providers, which funeral homes are required to provide
            under the FTC Funeral Rule.
          </p>
        </section>

        {/* When to Choose Cremation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Choose Cremation</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Budget is a primary concern, and you want the most affordable disposition option.</li>
            <li>You live in a state where aquamation is not yet available.</li>
            <li>You prefer a well-established process with wide provider availability.</li>
            <li>Time is a factor. Cremation is faster, typically 2 to 3 hours versus 6 to 8.</li>
            <li>Your family or faith tradition is already comfortable with flame cremation.</li>
          </ul>
        </section>

        {/* When to Choose Aquamation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Choose Aquamation</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Environmental sustainability is a top priority for you or your loved one.</li>
            <li>You want to avoid carbon emissions and mercury release entirely.</li>
            <li>You prefer to receive more remains in a finer, lighter form.</li>
            <li>Aquamation is legal and available from a provider in your area.</li>
            <li>You are comfortable with a newer process that is less widely known.</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is aquamation legal in my state?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As of 2026, aquamation is legal in approximately 28 states. States that have
                approved it include California, Colorado, Florida, Illinois, Minnesota, Oregon, and
                Washington, among others. Legislation is pending in several additional states. Check
                with your state board of funeral directors for the most current status.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Why does aquamation cost more than cremation?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Aquamation typically costs $2,000 to $5,000 compared to $695 to $3,500 for flame
                cremation. The higher price reflects the cost of specialized alkaline hydrolysis
                equipment, limited availability of providers, and lower consumer demand. As more
                funeral homes adopt the technology, prices are expected to decrease.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you get ashes back from aquamation?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Aquamation returns approximately 20 to 30 percent more remains than flame
                cremation. The remains are a white powder, finer and lighter in color than
                traditional cremation ashes. They can be placed in an urn, scattered, or handled in
                the same ways as cremation remains.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does aquamation take compared to cremation?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Flame cremation takes 2 to 3 hours at temperatures between 1,400 and 1,800 degrees
                Fahrenheit. Aquamation takes 6 to 8 hours using water and alkali solution heated to
                200 to 300 degrees Fahrenheit. The total turnaround time for receiving remains is
                usually similar for both options, typically 3 to 7 business days.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is aquamation better for the environment than cremation?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Aquamation uses roughly one-tenth the energy of flame cremation and produces no
                direct carbon emissions, no mercury release from dental fillings, and no particulate
                matter. The sterile liquid byproduct can be safely returned to the water system. For
                families prioritizing environmental impact, aquamation is the more sustainable
                choice.
              </p>
            </div>
          </div>
        </section>

        {/* Related Reading */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Reading</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/what-is-aquamation" className="text-blue-700 underline hover:text-blue-900">
                What Is Aquamation?
              </Link>
            </li>
            <li>
              <Link href="/what-is-direct-cremation" className="text-blue-700 underline hover:text-blue-900">
                What Is Direct Cremation?
              </Link>
            </li>
            <li>
              <Link href="/what-is-a-green-burial" className="text-blue-700 underline hover:text-blue-900">
                What Is a Green Burial?
              </Link>
            </li>
            <li>
              <Link href="/glossary" className="text-blue-700 underline hover:text-blue-900">
                Funeral Planning Glossary
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer tagline */}
        <footer className="border-t border-gray-200 pt-8 mt-12 text-center text-sm text-gray-500">
          No popups. No pressure. Built for families.
        </footer>
      </main>
    </>
  );
}
