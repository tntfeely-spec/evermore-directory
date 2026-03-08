import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Funeral & Cremation Planning Blog | Evermore Directory',
  description: 'Guides and resources for funeral planning, cremation costs, and choosing the right funeral home. Compare prices, understand your options, and make informed decisions.',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog',
  },
};

const blogPosts = [
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
    description: 'A former firefighter and paramedic explains the real emotional and financial difference between traditional funerals and celebrations of life -- and how to know which is right for your family.',
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
                <article key={post.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Read More &rarr;
                  </Link>
                </article>
              ))}
            </div>

            <section className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Find Funeral Homes Near You
              </h2>
              <p className="text-gray-600 mb-6">
                Compare funeral homes and cremation services across all 50 states.
              </p>
              <Link
                href="/states"
                className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
