import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Funeral & Cremation Planning Blog | Evermore Directory',
  description: 'Guides and resources for funeral planning, cremation costs, veterans burial benefits, and choosing the right funeral home.',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog',
  },
};

const blogPosts = [
  {
    slug: 'end-of-life-planning-checklist',
    title: 'End of Life Planning Checklist: Everything to Do Before It Is Too Late',
    description: 'Covers wills, advance directives, funeral preferences, financial accounts, digital assets, and what to share with your family.',
    category: 'Planning Guide',
  },
  {
    slug: 'what-to-do-after-a-funeral',
    title: 'What to Do After a Funeral: The Gathering and Next Steps',
    description: 'How to plan the after-funeral gathering and handle death certificates, notifications, estate tasks, and self-care in the days that follow.',
    category: 'Planning Guide',
  },
  {
    slug: 'best-prepaid-funeral-plans',
    title: 'Best Prepaid Funeral Plans: What to Know Before You Buy (2026)',
    description: 'Prepaid funeral plans lock in today\'s prices. How they work, irrevocable vs. revocable, risks to watch for, and alternatives.',
    category: 'Planning Guide',
  },
  {
    slug: 'what-is-a-celebration-of-life',
    title: 'What Is a Celebration of Life Service? (2026 Guide)',
    description: 'A celebration of life focuses on honoring who someone was. How it differs from a funeral, what to expect, and how to plan one.',
    category: 'Planning Guide',
  },
  {
    slug: 'how-long-can-a-funeral-home-hold-a-body',
    title: 'How Long Can a Funeral Home Hold a Body? (2026 Guide)',
    description: 'Most funeral homes can hold a body for 1 to 2 weeks without embalming, and 4 to 6 weeks with embalming. State rules, daily storage fees, and questions to ask.',
    category: 'Planning Guide',
  },
  {
    slug: 'va-burial-benefits-veterans-guide',
    title: "VA Burial Benefits: What Every Veteran's Family Needs to Know",
    description: 'The VA provides burial allowances, free national cemetery burial, free headstones, and more for eligible veterans. A former paramedic explains every benefit and how to claim it.',
    category: 'Veterans Benefits',
  },
  {
    slug: 'military-funeral-honors-color-guard-explained',
    title: 'Military Funeral Honors: Color Guard, Rifle Salute, and Flag Folding Explained',
    description: 'What military funeral honors involve -- color guard, rifle salute, Taps, and flag presentation -- and exactly how to request them for a veteran at no cost.',
    category: 'Veterans Benefits',
  },
  {
    slug: 'national-cemetery-burial-veterans-free',
    title: 'National Cemetery Burial: How to Bury a Veteran in a Federal Cemetery for Free',
    description: 'Any veteran with an honorable discharge is eligible for burial in a national cemetery at no cost. Who qualifies, what is included, and how to schedule.',
    category: 'Veterans Benefits',
  },
  {
    slug: 'va-pre-need-burial-eligibility',
    title: 'VA Pre-Need Burial Eligibility: How to Apply Before You Need It',
    description: "The VA Pre-Need program lets veterans confirm burial eligibility in advance. One 30-minute application removes the hardest documentation task from your family's worst day.",
    category: 'Veterans Benefits',
  },
  {
    slug: 'what-to-do-when-someone-dies',
    title: 'What to Do When Someone Dies: A Step-by-Step Guide for the First 72 Hours',
    description: 'A former firefighter and paramedic walks families through exactly what needs to happen in the first 72 hours after a death -- in order, without overwhelm.',
    category: 'Planning Guide',
  },
  {
    slug: 'best-funeral-homes-nashville-tn',
    title: '10 Funeral Homes in Nashville, TN (2026) | Prices & Services',
    description: 'Compare the top 10 funeral homes in Nashville with pricing, services, and contact information. Updated for 2026.',
    category: 'Local Prices',
  },
  {
    slug: 'funeral-homes-atlanta-ga',
    title: '12 Funeral Homes in Atlanta, GA (2026) | Compare Prices & Services',
    description: 'Compare funeral homes in Atlanta, GA with real pricing, services, and contact info. Updated 2026.',
    category: 'Local Prices',
  },
  {
    slug: 'funeral-homes-houston-tx',
    title: '13 Funeral Homes in Houston, TX (2026) | Compare Prices & Services',
    description: 'Compare funeral homes in Houston, TX with real pricing, services, and contact info. Updated 2026.',
    category: 'Local Prices',
  },
  {
    slug: 'funeral-homes-memphis-tn',
    title: '10 Funeral Homes in Memphis, TN (2026) | Compare Prices & Services',
    description: 'Compare funeral homes in Memphis, TN with real pricing, services, and contact info. Updated 2026.',
    category: 'Local Prices',
  },
  {
    slug: 'funeral-homes-chicago-il',
    title: '13 Funeral Homes in Chicago, IL (2026) | Compare Prices & Services',
    description: 'Compare funeral homes in Chicago, IL with real pricing, services, and contact info. Updated 2026.',
    category: 'Local Prices',
  },
  {
    slug: 'funeral-cost-tennessee-2026',
    title: 'How Much Does a Funeral Cost in Tennessee? 2026 Guide',
    description: 'Funeral costs in Tennessee range from under $1,000 for direct cremation to $18,000+ for traditional burial. A complete breakdown by service type and region.',
    category: 'Local Prices',
  },
  {
    slug: 'green-burial-options-guide',
    title: 'Green Burial Options: What It Is, How Much It Costs, and Where to Find Providers',
    description: 'Green burial skips embalming, vaults, and metal caskets -- and costs significantly less than conventional burial. What it involves and how to find a certified provider.',
    category: 'Planning Guide',
  },
  {
    slug: 'how-to-write-an-obituary',
    title: 'How to Write an Obituary: A Simple Guide With Examples',
    description: 'A practical guide to writing an obituary -- what to include, how to structure it, how long it should be, and example opening lines that actually work.',
    category: 'Planning Guide',
  },
  {
    slug: 'pre-planning-a-funeral',
    title: 'Pre-Planning a Funeral: Why It Matters and How to Do It',
    description: 'Pre-planning a funeral is one of the most generous things you can do for the people who will grieve you. A former paramedic explains why it matters and how to do it.',
    category: 'Planning Guide',
  },
  {
    slug: 'funeral-home-red-flags',
    title: 'Funeral Home Red Flags: What to Watch Out For When Grieving',
    description: 'Most funeral homes operate with integrity. But families in grief are vulnerable. A former paramedic walks through the warning signs that matter most -- and your rights under FTC law.',
    category: 'Consumer Guide',
  },
  {
    slug: 'cremation-costs-2026',
    title: 'How Much Does Cremation Cost in 2026? Complete Price Guide',
    description: 'Cremation costs in 2026 range from $500 to $7,000+ depending on location and services. See average cremation prices by state and learn how to save money.',
    category: 'Cremation Costs',
  },
  {
    slug: 'cremation-near-me',
    title: 'Cremation Near Me: How to Find Affordable Cremation Services',
    description: 'Find affordable cremation services near you. Compare direct cremation costs, cremation with services, and learn what to look for when choosing a provider.',
    category: 'Finding Services',
  },
  {
    slug: 'direct-cremation-vs-traditional-funeral',
    title: 'Direct Cremation vs Traditional Funeral: How to Choose',
    description: 'Compare direct cremation and traditional funeral options. Learn costs, timelines, and how to decide which is right for your family.',
    category: 'Planning Guide',
  },
  {
    slug: 'cremation-cost-san-jose',
    title: 'Cremation Cost in San Jose: 2026 Price Guide',
    description: 'How much does cremation cost in San Jose? Compare actual cremation prices from San Jose funeral homes. Direct cremation, cremation with services, and more.',
    category: 'Local Prices',
  },
  {
    slug: 'funeral-homes-los-angeles',
    title: 'Funeral Homes in Los Angeles: Prices, Services & How to Choose',
    description: 'Compare funeral home prices in Los Angeles. See actual cremation and burial costs from LA funeral homes, plus tips for choosing the right provider.',
    category: 'Local Prices',
  },
  {
    slug: 'funeral-costs-2026',
    title: 'How Much Does a Funeral Cost in 2026? Complete Price Guide',
    description: 'Funeral costs in 2026 range from $7,000 to $15,000+ for a traditional service. See average funeral prices by state, what is included, and how to save money.',
    category: 'Funeral Costs',
  },
  {
    slug: 'burial-vs-cremation',
    title: 'Burial vs Cremation: Costs, Process & How to Decide',
    description: 'Compare burial and cremation side by side. See costs, process, timeline, and pros and cons to help your family make the right decision.',
    category: 'Planning Guide',
  },
  {
    slug: 'how-to-plan-a-funeral',
    title: 'How to Plan a Funeral: A Step-by-Step Guide',
    description: 'A practical step-by-step guide to planning a funeral. What to do first, how to choose a funeral home, what decisions to make, and how to manage costs.',
    category: 'Planning Guide',
  },
  {
    slug: 'funeral-homes-near-me',
    title: 'Funeral Homes Near Me: How to Choose the Right One',
    description: 'How to find and compare funeral homes near you. What to look for, questions to ask, red flags to avoid, and how to get the best value for your family.',
    category: 'Finding Services',
  },
  {
    slug: 'traditional-vs-celebration-of-life',
    title: 'Traditional Funeral vs. Celebration of Life: How to Choose',
    description: 'A former firefighter and paramedic explains the real emotional and financial difference between traditional funerals and celebrations of life.',
    category: 'Planning Guide',
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog" }
            ]
          })
        }}
      />
      <main className="min-h-screen relative">
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: 'url(/Ocean_Image.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.35
          }}
        />
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Funeral &amp; Cremation Planning Blog
              </h1>
              <p className="text-xl text-gray-600">
                Guides, cost comparisons, and resources to help you make informed decisions about funeral and cremation services.
              </p>
            </header>
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white bg-opacity-90">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-slate-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-slate-600 font-medium hover:text-slate-700"
                  >
                    Read More &rarr;
                  </Link>
                </article>
              ))}
            </div>
            <section className="mt-12 bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Find Funeral Homes Near You
              </h2>
              <p className="text-gray-600 mb-6">
                Compare funeral homes and cremation services across all 50 states.
              </p>
              <Link
                href="/states"
                className="inline-block bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Browse by State
              </Link>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
