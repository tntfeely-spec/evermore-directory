import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import BlogIndex from '@/components/BlogIndex';

export const metadata: Metadata = {
  title: 'Funeral & Cremation Planning Blog | Evermore Directory',
  description: 'Guides and resources for funeral planning, cremation costs, veterans burial benefits, and choosing the right funeral home.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog' },
};

type Post = { slug: string; title: string; description: string };

const categories: { name: string; subtitle?: string; posts: Post[] }[] = [
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
      { slug: 'what-is-a-viewing-vs-visitation', title: 'Viewing vs. Visitation: What Is the Difference?', description: 'What each one involves and how to decide which is right for your family.' },
      { slug: 'how-long-after-death-is-a-funeral', title: 'How Long After Death Is a Funeral Typically Held?', description: 'What affects timing and what families need to know when planning.' },
      { slug: 'home-funerals-guide', title: 'Home Funerals: What They Are and How to Plan One', description: 'What is involved, what states allow it, and how to get started.' },
      { slug: 'body-donation-to-science', title: 'Body Donation to Science: How It Works', description: 'How the process works and what families need to know.' },
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
      { slug: 'average-cemetery-plot-cost', title: 'How Much Does a Cemetery Plot Cost in 2026?', description: 'Costs range from $1,000 to over $25,000 depending on location and type.' },
      { slug: 'funeral-insurance-guide', title: 'Funeral Insurance: What It Is and Whether You Need It', description: 'How it works, what it costs, and whether it makes sense for your situation.' },
      { slug: 'social-security-death-benefit', title: 'Social Security Death Benefit: What Families Can Claim', description: 'The $255 payment, who qualifies, and survivor benefits beyond the lump sum.' },
      { slug: 'what-happens-to-debt-when-you-die', title: 'What Happens to Debt When You Die?', description: 'What happens to each type of debt and what your family is responsible for.' },
    ],
  },
  {
    name: 'Funeral Home Operations',
    subtitle: 'What families need to know about how funeral homes work.',
    posts: [
      { slug: 'how-long-can-a-funeral-home-hold-a-body', title: 'How Long Can a Funeral Home Hold a Body?', description: '1 to 2 weeks without embalming, 4 to 6 weeks with embalming. State rules and daily storage fees.' },
      { slug: 'embalming-explained', title: 'Embalming: What It Is, What It Costs, and Whether It Is Required', description: 'What the process involves, when it makes sense, and alternatives.' },
      { slug: 'how-to-read-a-funeral-home-general-price-list', title: 'How to Read a Funeral Home General Price List', description: 'What every line item means and how to use it to compare costs.' },
      { slug: 'ftc-funeral-rule-explained', title: 'The FTC Funeral Rule: Your Rights When Planning a Funeral', description: 'What it requires, what your rights are, and how to file a complaint.' },
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
      { slug: 'urns-guide', title: 'Cremation Urns: Types, Costs, and How to Choose One', description: 'Every type of urn, what each one costs, and how to choose the right size.' },
      { slug: 'aquamation-guide', title: 'Aquamation: The Water Based Cremation Alternative', description: 'How it works, what it costs, and where it is available.' },
      { slug: 'natural-organic-reduction', title: 'Natural Organic Reduction: Human Composting Explained', description: 'How it works, what families receive, and where it is legal.' },
      { slug: 'columbarium-guide', title: 'Columbarium: What It Is and How Niche Burial Works', description: 'Types of niches, costs, and how to purchase one.' },
    ],
  },
  {
    name: 'Writing and Speaking',
    posts: [
      { slug: 'how-to-write-an-obituary', title: 'How to Write an Obituary: A Complete Guide', description: 'What to include, how to structure it, example opening lines, and a free AI obituary writer.' },
      { slug: 'eulogy-for-friend-samples', title: 'Eulogy for a Friend: Samples, Tips, and How to Write One', description: 'Three sample eulogies in different tones, plus practical tips for writing and delivering yours.' },
      { slug: 'obituary-examples', title: 'Obituary Examples: Good, Simple, and Meaningful Templates', description: 'Sample obituaries in short, traditional, and celebration of life styles.' },
      { slug: 'thank-you-notes-after-funeral', title: 'Thank You Notes After a Funeral: What to Write and When', description: 'What to write, when to send them, and examples for different situations.' },
      { slug: 'memorial-service-bulletins', title: 'Memorial Service Bulletins: What to Include', description: 'How to create a memorial service bulletin that guides guests and serves as a keepsake.' },
      { slug: 'obituary-vs-death-notice', title: 'Obituary vs. Death Notice: What Is the Difference?', description: 'How they differ, when to use each, and how much they cost to publish.' },
      { slug: 'how-to-write-a-eulogy', title: 'How to Write a Eulogy: A Step by Step Guide', description: 'Simple structure, example opening lines, and tips for delivering with confidence.' },
      { slug: 'how-to-write-a-condolence-card', title: 'How to Write a Condolence Card: What to Say and What to Avoid', description: 'Simple, sincere messages and examples that actually help.' },
      { slug: 'funeral-readings-and-poems', title: 'Funeral Readings and Poems: A Collection for Any Service', description: 'Religious and non-religious options for any ceremony.' },
      { slug: 'what-to-say-at-a-funeral', title: 'What to Say at a Funeral: Words of Comfort That Help', description: 'Simple things to say and a few phrases to avoid.' },
      { slug: 'sample-eulogy-for-mother-from-daughter', title: 'Sample Eulogy for a Mother from a Daughter', description: 'Sample eulogies, a simple structure, and guidance for delivering it with love.' },
      { slug: 'poems-for-loss-of-father', title: 'Poems for the Loss of a Father: Comfort, Memory, and Farewell', description: 'Poems to read at a funeral, share in a card, or keep for yourself.' },
      { slug: 'condolence-text-message', title: 'Condolence Text Messages: What to Write and What to Avoid', description: 'Simple, sincere examples and phrases to avoid when texting condolences.' },
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
      { slug: 'mausoleum-burial-guide', title: 'Mausoleum Burial: What It Is and What It Costs', description: 'What mausoleum burial involves, what it costs, and how to decide.' },
      { slug: 'non-religious-funeral-options', title: 'Non-Religious Funeral Options: Planning a Secular Service', description: 'How to plan a meaningful service without religious content.' },
      { slug: 'food-for-funeral-reception', title: 'Food for a Funeral Reception: What to Serve and How to Plan', description: 'What to serve, how much to order, and how to keep it simple.' },
      { slug: 'donations-at-a-funeral', title: 'Donations at a Funeral: How to Request and Handle Them', description: 'How to request charitable donations in lieu of flowers.' },
      { slug: 'what-is-a-funeral-service', title: 'What Is a Funeral Service? Types, Format, and What to Expect', description: 'What a funeral service involves, the different types, and how to plan one.' },
      { slug: 'classical-music-for-funerals', title: 'Classical Music for Funerals: Meaningful Pieces for Any Service', description: 'The most appropriate and comforting classical pieces for a funeral.' },
    ],
  },
  {
    name: 'Grief and Emotional Support',
    posts: [
      { slug: 'grief-stages-explained', title: 'The 5 Stages of Grief Explained', description: 'What each stage looks like, why grief is not linear, and when to seek support.' },
      { slug: 'how-to-support-a-grieving-friend', title: 'How to Support a Grieving Friend: What Actually Helps', description: 'What to say, what to do, and how to show up long after the funeral.' },
      { slug: 'words-of-comfort-for-grieving-family', title: 'Words of Comfort for a Grieving Family', description: 'Sincere things to say, messages that bring comfort, and phrases to avoid.' },
      { slug: 'pet-loss-grief', title: 'Pet Loss: Poems, Quotes, and How to Cope', description: 'Comforting poems, meaningful quotes, and practical ways to honor your companion.' },
      { slug: 'grief-counseling-guide', title: 'Grief Counseling: What It Is and When to Consider It', description: 'What to expect, when to seek help, and how to find a counselor.' },
      { slug: 'children-and-grief', title: 'Children and Grief: How to Support a Child After a Loss', description: 'How to talk to children about death and help them through loss.' },
      { slug: 'loss-of-spouse-guide', title: 'Losing a Spouse: What to Expect and What to Do First', description: 'Practical guidance on what to do in the first days, weeks, and months.' },
      { slug: 'loss-of-parent-guide', title: 'Losing a Parent: What to Expect and How to Cope', description: 'What to expect emotionally and what practical steps to take.' },
      { slug: 'grief-after-sudden-death', title: 'Grief After Sudden Death: When There Was No Time to Say Goodbye', description: 'Why sudden loss grief is different and how to cope.' },
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
      { slug: 'hindu-funeral-traditions', title: 'Hindu Funeral Traditions: What to Expect', description: 'Cremation within 24 hours, the mourning period, and how to show respect.' },
      { slug: 'buddhist-funeral-traditions', title: 'Buddhist Funeral Traditions: What to Expect', description: 'Chanting, meditation, and honoring the cycle of rebirth.' },
      { slug: 'scripture-readings-for-funerals', title: 'Scripture Readings for Funerals: New and Old Testament Passages', description: 'A collection of New Testament and Old Testament passages for any service.' },
      { slug: 'prayer-of-the-faithful-funeral', title: 'Prayer of the Faithful at a Funeral: Examples and How It Works', description: 'What it is, how it works, and example petitions you can use.' },
      { slug: 'funeral-hymns', title: 'Funeral Hymns: Traditional and Uplifting Songs for a Service', description: 'The most meaningful and uplifting hymns for a funeral or memorial service.' },
      { slug: 'amazing-grace-hymn', title: 'Amazing Grace: The History and Story Behind the Hymn', description: 'The story behind the song and why it resonates at memorial services.' },
    ],
  },
  {
    name: 'Veterans and Military',
    posts: [
      { slug: '/veteran-burial-benefits', title: 'Veteran Burial Benefits and Military Funeral Assistance', description: 'VA burial allowances, national cemetery eligibility, military funeral honors, and how to apply.' },
      { slug: 'military-funeral-honors', title: 'Military Funeral Honors: What Veterans Are Entitled To', description: 'Flag ceremony, Taps, eligibility, and how to request honors for a veteran.' },
      { slug: 'veteran-headstones-and-markers', title: 'Veteran Headstones and Markers: How to Apply for a Free Gravemarker', description: 'What the VA provides, who is eligible, and how to apply.' },
      { slug: 'national-cemetery-guide', title: 'National Cemetery Burial: How to Bury a Veteran for Free', description: 'Who qualifies, how to apply, and what is provided at no cost.' },
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
      { slug: 'how-to-close-deceased-accounts', title: 'How to Close a Deceased Person\'s Accounts', description: 'Banks, credit cards, utilities, subscriptions, and government accounts step by step.' },
      { slug: 'digital-estate-planning', title: 'Digital Estate Planning: What Happens to Your Online Accounts', description: 'How to organize your digital life so your family is not left guessing.' },
      { slug: 'living-will-vs-advance-directive', title: 'Living Will vs. Advance Directive: What Is the Difference?', description: 'How they differ, what each covers, and why you need both.' },
      { slug: 'medicaid-funeral-assistance', title: 'Medicaid and Funeral Assistance for Low Income Families', description: 'What is available, how to apply, and what it covers.' },
      { slug: 'notifying-agencies-after-death', title: 'Who to Notify After a Death: A Complete Checklist', description: 'Every agency, institution, and organization that needs to know.' },
      { slug: 'funeral-homes-that-offer-payment-plans', title: 'Funeral Homes That Offer Payment Plans', description: 'How payment plans work, what to ask, and other financial options.' },
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
      { slug: 'funeral-homes-los-angeles', title: 'Funeral Homes in Los Angeles, CA (2026)', description: 'Compare funeral homes in Los Angeles with real pricing, services, and contact info.' },
    ],
  },
];

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
      <Navigation />
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

            <BlogIndex categories={categories} />

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
