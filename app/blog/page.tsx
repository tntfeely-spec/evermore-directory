import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Funeral & Cremation Planning Blog | Evermore Directory',
  description: 'Guides and resources for funeral planning, cremation costs, veterans burial benefits, and choosing the right funeral home.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog' },
};

type Post = { slug: string; title: string; description: string };

const categories: { name: string; posts: Post[] }[] = [
  {
    name: 'Planning a Funeral',
    posts: [
      { slug: 'how-to-plan-a-funeral', title: 'How to Plan a Funeral: A Step by Step Guide', description: 'A practical guide to planning a funeral. What to do first, how to choose a funeral home, what decisions to make, and how to manage costs.' },
      { slug: 'what-to-do-when-someone-dies', title: 'What to Do When Someone Dies: A Guide for the First 72 Hours', description: 'What needs to happen in the first 72 hours after a death, in order, without overwhelm.' },
      { slug: 'pre-planning-a-funeral', title: 'Pre-Planning a Funeral: Why It Matters and How to Do It', description: 'Pre-planning is one of the most generous things you can do for the people who will grieve you.' },
      { slug: 'what-to-do-after-a-funeral', title: 'What to Do After a Funeral: The Gathering and Next Steps', description: 'How to plan the after funeral gathering and handle the practical tasks that follow.' },
      { slug: 'end-of-life-planning-checklist', title: 'End of Life Planning Checklist', description: 'Covers wills, advance directives, funeral preferences, financial accounts, digital assets, and what to share with your family.' },
      { slug: 'questions-to-ask-a-funeral-director', title: '20 Questions to Ask a Funeral Director Before You Decide', description: 'The right questions save money, prevent surprises, and help your family make confident decisions.' },
      { slug: 'what-happens-if-you-cant-afford-a-funeral', title: "What Happens If You Can't Afford a Funeral?", description: 'Low cost options, government assistance, and what funeral homes are required to offer.' },
      { slug: 'how-to-choose-a-funeral-home', title: 'How to Choose a Funeral Home: What Families Need to Know', description: 'What to look for, what to ask, and how to compare your options.' },
      { slug: 'free-funeral-planning-guide', title: 'Free Funeral Planning Guide: Step by Step for Families', description: 'Every step of funeral planning in one guide so nothing gets missed.' },
      { slug: 'death-certificate-guide', title: 'Death Certificates: How Many You Need and How to Get Them', description: 'How to order certified copies, what they cost, and where you will need them.' },
      { slug: 'funeral-pre-planning-checklist', title: 'Funeral Pre-Planning Checklist: What to Decide Before It Is Needed', description: 'A complete checklist of what to decide and document so your family never has to guess.' },
    ],
  },
  {
    name: 'Costs and Pricing',
    posts: [
      { slug: 'funeral-costs-2026', title: 'How Much Does a Funeral Cost in 2026? Complete Price Guide', description: 'Funeral costs range from $7,000 to $15,000+ for a traditional service. Average prices by state and how to save.' },
      { slug: 'cremation-costs-2026', title: 'How Much Does Cremation Cost in 2026?', description: 'Cremation costs range from $500 to $7,000+ depending on location and services. Prices by state.' },
      { slug: 'direct-cremation-vs-traditional-funeral', title: 'Direct Cremation vs Traditional Funeral: How to Choose', description: 'Compare costs, timelines, and how to decide which is right for your family.' },
      { slug: 'burial-vs-cremation', title: 'Burial vs. Cremation: Pros and Cons', description: 'Compare burial and cremation side by side. Costs, process, and how to decide.' },
      { slug: 'cremation-near-me', title: 'Cremation Near Me: How to Find Affordable Services', description: 'How to find and compare affordable cremation services in your area.' },
      { slug: 'cremation-cost-san-jose', title: 'Cremation Cost in San Jose: 2026 Price Guide', description: 'Compare actual cremation prices from San Jose funeral homes.' },
      { slug: 'average-burial-cost', title: 'Average Burial Cost in 2026: What Families Should Expect to Pay', description: 'Full breakdown of burial costs, what drives prices up, and how to save.' },
    ],
  },
  {
    name: 'Cremation',
    posts: [
      { slug: 'what-to-do-with-ashes-after-cremation', title: 'What to Do with Ashes After Cremation: 10 Options', description: '10 meaningful options for cremated remains, from scattering to keepsakes.' },
      { slug: 'cremation-near-me', title: 'Cremation Near Me: How to Find Affordable Services', description: 'How to find and compare affordable cremation services in your area.' },
      { slug: 'what-happens-to-the-body-during-cremation', title: 'What Happens to the Body During Cremation?', description: 'A clear, respectful explanation of the cremation process from start to finish.' },
      { slug: 'green-burial-options', title: 'Green Burial Options: What They Are and How to Plan One', description: 'A natural, environmentally friendly alternative to traditional burial.' },
      { slug: 'cremation-jewelry', title: 'Cremation Jewelry: Keeping a Loved One Close', description: 'Wearable keepsakes that hold a small portion of ashes. Types, costs, and how they work.' },
      { slug: 'scattering-ashes-guide', title: 'Scattering Ashes: Laws, Locations, and What to Know', description: 'Legal rules for scattering at sea, on land, and in parks, plus how to plan a ceremony.' },
    ],
  },
  {
    name: 'Writing and Speaking',
    posts: [
      { slug: 'how-to-write-an-obituary', title: 'How to Write an Obituary: A Complete Guide', description: 'What to include, how to structure it, example opening lines, and a free AI obituary writer.' },
      { slug: 'eulogy-for-friend-samples', title: 'Eulogy for a Friend: Samples, Tips, and How to Write One', description: 'Three sample eulogies in different tones, plus practical tips for writing and delivering yours.' },
      { slug: 'how-long-can-a-funeral-home-hold-a-body', title: 'How Long Can a Funeral Home Hold a Body?', description: '1 to 2 weeks without embalming, 4 to 6 weeks with embalming. State rules and daily storage fees.' },
      { slug: 'obituary-examples', title: 'Obituary Examples: Good, Simple, and Meaningful Templates', description: 'Sample obituaries in short, traditional, and celebration of life styles.' },
      { slug: 'thank-you-notes-after-funeral', title: 'Thank You Notes After a Funeral: What to Write and When', description: 'What to write, when to send them, and examples for different situations.' },
      { slug: 'memorial-service-bulletins', title: 'Memorial Service Bulletins: What to Include', description: 'How to create a memorial service bulletin that guides guests and serves as a keepsake.' },
      { slug: 'obituary-vs-death-notice', title: 'Obituary vs. Death Notice: What Is the Difference?', description: 'How they differ, when to use each, and how much they cost to publish.' },
      { slug: 'how-to-write-a-eulogy', title: 'How to Write a Eulogy: A Step by Step Guide', description: 'Simple structure, example opening lines, and tips for delivering with confidence.' },
    ],
  },
  {
    name: 'Services and Ceremonies',
    posts: [
      { slug: 'traditional-vs-celebration-of-life', title: 'Traditional Funeral vs. Celebration of Life: How to Choose', description: 'The real emotional and financial difference between traditional funerals and celebrations of life.' },
      { slug: 'what-is-a-celebration-of-life', title: 'What Is a Celebration of Life Service?', description: 'How it differs from a funeral, what to expect, and how to plan one.' },
      { slug: 'what-is-a-graveside-service', title: 'What Is a Graveside Service?', description: 'A simple, meaningful ceremony held at the burial site. What to expect and how to plan one.' },
      { slug: 'what-is-a-funeral-celebrant', title: 'What Is a Funeral Celebrant?', description: 'How celebrants differ from clergy and when to consider one for a personalized service.' },
      { slug: 'pallbearer-guide', title: 'Pallbearer Guide: What to Wear, What to Do, and What to Expect', description: 'Everything you need to know about serving as a pallbearer.' },
      { slug: 'what-to-wear-to-a-funeral', title: 'What to Wear to a Funeral: Dress Code Guide', description: 'What to wear for men, women, and children across different service types.' },
      { slug: 'how-long-does-a-funeral-last', title: 'How Long Does a Funeral Last?', description: 'Timing breakdown for traditional funerals, graveside services, memorials, and celebrations of life.' },
      { slug: 'funeral-flowers-guide', title: 'Funeral Flowers: What to Send and What They Mean', description: 'Common funeral flowers, their meanings, and how to order appropriately.' },
      { slug: 'funeral-etiquette-guide', title: 'Funeral Etiquette: What to Do, Say, and Avoid', description: 'A practical guide to funeral etiquette from arrival through the reception.' },
    ],
  },
  {
    name: 'Grief and Emotional Support',
    posts: [
      { slug: 'grief-stages-explained', title: 'The 5 Stages of Grief Explained', description: 'What each stage looks like, why grief is not linear, and when to seek support.' },
      { slug: 'how-to-support-a-grieving-friend', title: 'How to Support a Grieving Friend: What Actually Helps', description: 'What to say, what to do, and how to show up long after the funeral.' },
      { slug: 'words-of-comfort-for-grieving-family', title: 'Words of Comfort for a Grieving Family', description: 'Sincere things to say, messages that bring comfort, and phrases to avoid.' },
      { slug: 'pet-loss-grief', title: 'Pet Loss: Poems, Quotes, and How to Cope', description: 'Comforting poems, meaningful quotes, and practical ways to honor your companion.' },
    ],
  },
  {
    name: 'Religious and Cultural Traditions',
    posts: [
      { slug: 'jewish-funeral-etiquette', title: 'Jewish Funeral Etiquette for Non-Jews', description: 'What to expect, what to wear, and how to show respect at a Jewish funeral.' },
      { slug: 'catholic-funeral-traditions', title: 'Catholic Funeral Traditions: What to Expect', description: 'The vigil, funeral Mass, and rite of committal explained for guests and family.' },
      { slug: 'muslim-funeral-traditions', title: 'Muslim Funeral Traditions: What to Expect', description: 'Islamic funeral customs, the funeral prayer, burial traditions, and how to show respect.' },
      { slug: 'bible-verses-for-funerals', title: 'Bible Verses for Funerals: Comfort, Hope, and Remembrance', description: 'A collection of scripture passages for funerals and memorial services.' },
      { slug: 'christian-funeral-songs', title: 'Modern Christian Funeral Songs', description: 'Meaningful modern and traditional Christian funeral songs to consider.' },
    ],
  },
  {
    name: 'Veterans and Military',
    posts: [
      { slug: '/veteran-burial-benefits', title: 'Veteran Burial Benefits and Military Funeral Assistance', description: 'VA burial allowances, national cemetery eligibility, military funeral honors, and how to apply.' },
      { slug: 'military-funeral-honors', title: 'Military Funeral Honors: What Veterans Are Entitled To', description: 'Flag ceremony, Taps, eligibility, and how to request honors for a veteran.' },
    ],
  },
  {
    name: 'Financial and Legal',
    posts: [
      { slug: 'what-happens-to-hsa-when-you-die', title: 'What Happens to Your HSA When You Die?', description: 'How HSA funds are handled, spouse vs. non-spouse inheritance, and estate planning tips.' },
      { slug: 'average-burial-cost', title: 'Average Burial Cost in 2026: What Families Should Expect to Pay', description: 'Full breakdown of burial costs, what drives prices up, and how to save.' },
      { slug: 'what-happens-if-you-cant-afford-a-funeral', title: "What Happens If You Can't Afford a Funeral?", description: 'Low cost options, government assistance, and what funeral homes are required to offer.' },
      { slug: 'best-prepaid-funeral-plans', title: 'Best Prepaid Funeral Plans: What to Know Before You Buy', description: 'How prepaid plans work, irrevocable vs. revocable, risks to watch for, and alternatives.' },
      { slug: 'death-certificate-guide', title: 'Death Certificates: How Many You Need and How to Get Them', description: 'How to order certified copies, what they cost, and where you will need them.' },
    ],
  },
  {
    name: 'City Guides',
    posts: [
      { slug: 'best-funeral-homes-nashville-tn', title: '10 Funeral Homes in Nashville, TN (2026)', description: 'Compare the top funeral homes in Nashville with pricing, services, and contact information.' },
      { slug: 'funeral-homes-atlanta-ga', title: '12 Funeral Homes in Atlanta, GA (2026)', description: 'Compare funeral homes in Atlanta with real pricing, services, and contact info.' },
      { slug: 'funeral-homes-houston-tx', title: '13 Funeral Homes in Houston, TX (2026)', description: 'Compare funeral homes in Houston with real pricing, services, and contact info.' },
      { slug: 'funeral-homes-memphis-tn', title: '10 Funeral Homes in Memphis, TN (2026)', description: 'Compare funeral homes in Memphis with real pricing, services, and contact info.' },
      { slug: 'funeral-homes-chicago-il', title: '13 Funeral Homes in Chicago, IL (2026)', description: 'Compare funeral homes in Chicago with real pricing, services, and contact info.' },
      { slug: 'funeral-homes-los-angeles', title: 'Funeral Homes in Los Angeles: Prices and Services', description: 'Compare funeral home prices in Los Angeles with actual cremation and burial costs.' },
    ],
  },
];

function postHref(slug: string) {
  if (slug.startsWith('/')) return slug;
  return `/blog/${slug}`;
}

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://funeralhomedirectories.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog' },
            ],
          }),
        }}
      />
      <main className="min-h-screen relative">
        <div
          className="fixed inset-0 z-0"
          style={{ backgroundImage: 'url(/Ocean_Image.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.35 }}
        />
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto px-4 py-12">
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral and Cremation Planning Blog</h1>
              <p className="text-xl text-gray-600">Guides, cost comparisons, and resources to help you make informed decisions about funeral and cremation services.</p>
            </header>

            {categories.map((cat) => (
              <section key={cat.name} className="mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{cat.name}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {cat.posts.map((post) => (
                    <Link key={post.slug} href={postHref(post.slug)} className="block bg-white bg-opacity-90 border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-slate-600 transition-colors">{post.title}</h3>
                      <p className="text-sm text-gray-600">{post.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}

            <section className="mt-12 bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Find Funeral Homes Near You</h2>
              <p className="text-gray-600 mb-6">Compare funeral homes and cremation services across all 50 states.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">Browse by State</Link>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
