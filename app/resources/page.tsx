import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Funeral Planning Resources | Evermore Directory',
  description: 'Guides, cost breakdowns, and practical tools to help families make informed decisions about funeral and cremation services.',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/resources',
  },
};

type Resource = {
  title: string;
  description: string;
  href: string;
};

const SECTIONS: { heading: string; resources: Resource[] }[] = [
  {
    heading: 'Planning Guides',
    resources: [
      { title: 'How to Plan a Funeral: A Step-by-Step Guide', description: 'What to do first, how to choose a funeral home, and how to manage costs without getting overwhelmed.', href: '/blog/how-to-plan-a-funeral' },
      { title: 'What to Do When Someone Dies: The First 72 Hours', description: 'A paramedic\u2019s step-by-step guide to the first three days after a loss.', href: '/blog/what-to-do-when-someone-dies' },
      { title: 'Pre-Planning a Funeral: Why It Matters', description: 'How pre-planning protects your family from making hard decisions during grief.', href: '/blog/pre-planning-a-funeral' },
      { title: 'Traditional Funeral vs. Celebration of Life', description: 'The real emotional and financial difference between the two options.', href: '/blog/traditional-vs-celebration-of-life' },
      { title: 'How to Write an Obituary', description: 'What to include, how long it should be, and example opening lines.', href: '/blog/how-to-write-an-obituary' },
    ],
  },
  {
    heading: 'Understanding Costs',
    resources: [
      { title: 'How Much Does a Funeral Cost in 2026?', description: 'National averages by state and what drives the price difference.', href: '/blog/funeral-costs-2026' },
      { title: 'How Much Does Cremation Cost in 2026?', description: 'State-by-state cremation prices and how to save money.', href: '/blog/cremation-costs-2026' },
      { title: 'How Much Does a Funeral Cost in Tennessee?', description: 'Regional breakdown for Tennessee families.', href: '/blog/funeral-cost-tennessee-2026' },
      { title: 'Cremation Cost in San Jose', description: 'Local pricing guide for San Jose area families.', href: '/blog/cremation-cost-san-jose' },
    ],
  },
  {
    heading: 'Burial vs. Cremation',
    resources: [
      { title: 'Burial vs. Cremation: Costs, Process & How to Decide', description: 'Side-by-side comparison with cost ranges and pros and cons.', href: '/blog/burial-vs-cremation' },
      { title: 'Direct Cremation vs. Traditional Funeral', description: 'The most affordable vs. the most traditional option, compared clearly.', href: '/blog/direct-cremation-vs-traditional-funeral' },
      { title: 'Green Burial Options: What It Is and How Much It Costs', description: 'Eco-friendly burial explained for families considering alternatives.', href: '/blog/green-burial-options-guide' },
    ],
  },
  {
    heading: 'Finding a Funeral Home',
    resources: [
      { title: 'Funeral Homes Near Me: How to Choose the Right One', description: 'What to look for, questions to ask, and red flags to avoid.', href: '/blog/funeral-homes-near-me' },
      { title: 'Funeral Home Red Flags: What to Watch Out For', description: 'Warning signs that protect grieving families from bad actors.', href: '/blog/funeral-home-red-flags' },
      { title: 'Cremation Near Me: How to Find Affordable Services', description: 'How to find and compare local cremation providers.', href: '/blog/cremation-near-me' },
    ],
  },
  {
    heading: 'Local Price Guides',
    resources: [
      { title: 'Funeral Homes in Nashville, TN', description: 'Compare 10 Nashville funeral homes with pricing and services.', href: '/blog/best-funeral-homes-nashville-tn' },
      { title: 'Funeral Homes in Atlanta, GA', description: 'Compare 12 Atlanta funeral homes.', href: '/blog/funeral-homes-atlanta-ga' },
      { title: 'Funeral Homes in Houston, TX', description: 'Compare 13 Houston funeral homes.', href: '/blog/funeral-homes-houston-tx' },
      { title: 'Funeral Homes in Memphis, TN', description: 'Compare 10 Memphis funeral homes.', href: '/blog/funeral-homes-memphis-tn' },
      { title: 'Funeral Homes in Chicago, IL', description: 'Compare 13 Chicago funeral homes.', href: '/blog/funeral-homes-chicago-il' },
      { title: 'Funeral Homes in Los Angeles', description: 'Prices, services, and how to choose in LA.', href: '/blog/funeral-homes-los-angeles' },
    ],
  },
  {
    heading: 'Veterans Benefits',
    resources: [
      { title: 'VA Burial Benefits: What Every Veteran\u2019s Family Needs to Know', description: 'Full breakdown of every benefit and how to claim it.', href: '/blog/va-burial-benefits-veterans-guide' },
      { title: 'Military Funeral Honors: Color Guard, Rifle Salute, and Flag Folding', description: 'How to request honors at no cost.', href: '/blog/military-funeral-honors-color-guard-explained' },
      { title: 'National Cemetery Burial: How to Bury a Veteran for Free', description: 'Who qualifies and how to schedule.', href: '/blog/national-cemetery-burial-veterans-free' },
      { title: 'VA Pre-Need Burial Eligibility: How to Apply Before You Need It', description: 'One application that removes the hardest task from your family\u2019s worst day.', href: '/blog/va-pre-need-burial-eligibility' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Funeral Planning Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Practical guides written by a former firefighter and paramedic who has responded to 400+ death scenes. No fluff. Just what families actually need to know.
          </p>
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {SECTIONS.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-3 border-b border-gray-100">
              {section.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {section.resources.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">{r.description}</p>
                  <span className="text-sm text-slate-600 font-medium hover:underline">
                    Read Guide &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="bg-slate-50 border-t border-gray-100 mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Find a Funeral Home Near You</h2>
          <p className="text-gray-600 mb-6">
            Browse 4,800+ funeral homes across all 50 states. Free for families. No pressure.
          </p>
          <Link
            href="/states"
            className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Browse by State
          </Link>
        </div>
      </section>
    </main>
  );
}
