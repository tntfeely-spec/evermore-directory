import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { supabase } from '@/lib/supabase';
import CostCalculator, { StatePricing } from './CostCalculator';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Funeral Cost Calculator: Estimate Costs by State (2026)',
  description: 'Estimate funeral and cremation costs in your state. Real price ranges from 4,800+ funeral homes across all 50 states. Updated 2026.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/funeral-cost-calculator' },
};

const STATE_NAMES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas',
  CA: 'California', CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware',
  FL: 'Florida', GA: 'Georgia', HI: 'Hawaii', ID: 'Idaho',
  IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas',
  KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
  MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi',
  MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada',
  NH: 'New Hampshire', NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York',
  NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma',
  OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah',
  VT: 'Vermont', VA: 'Virginia', WA: 'Washington', WV: 'West Virginia',
  WI: 'Wisconsin', WY: 'Wyoming',
};

function extractLowHigh(raw: string | null): { low: number | null; high: number | null } {
  if (!raw) return { low: null, high: null };
  const matches = raw.match(/\$?([\d,]+)/g);
  if (!matches) return { low: null, high: null };
  const nums = matches.map((m) => parseInt(m.replace(/[$,]/g, ''), 10)).filter((n) => n > 0 && n < 100000);
  if (nums.length === 0) return { low: null, high: null };
  if (nums.length === 1) return { low: nums[0], high: nums[0] };
  return { low: Math.min(...nums), high: Math.max(...nums) };
}

async function getStatePricing(): Promise<StatePricing[]> {
  const { data } = await supabase
    .from('funeral_homes')
    .select('state, price_range_cremation, price_range_burial')
    .not('price_range_cremation', 'is', null)
    .not('price_range_burial', 'is', null)
    .range(0, 10000);

  const buckets = new Map<string, { cremLows: number[]; cremHighs: number[]; burLows: number[]; burHighs: number[]; count: number }>();

  for (const row of data ?? []) {
    const state = (row.state || '').toUpperCase();
    if (!STATE_NAMES[state]) continue;
    const crem = extractLowHigh(row.price_range_cremation);
    const bur = extractLowHigh(row.price_range_burial);
    if (crem.low === null || bur.low === null) continue;
    if (!buckets.has(state)) {
      buckets.set(state, { cremLows: [], cremHighs: [], burLows: [], burHighs: [], count: 0 });
    }
    const b = buckets.get(state)!;
    b.cremLows.push(crem.low);
    b.cremHighs.push(crem.high!);
    b.burLows.push(bur.low);
    b.burHighs.push(bur.high!);
    b.count++;
  }

  const avg = (arr: number[]) => Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);

  const result: StatePricing[] = [];
  for (const [abbr, b] of buckets.entries()) {
    if (b.count === 0) continue;
    result.push({
      abbr,
      name: STATE_NAMES[abbr],
      cremationLow: avg(b.cremLows),
      cremationHigh: avg(b.cremHighs),
      burialLow: avg(b.burLows),
      burialHigh: avg(b.burHighs),
      listingCount: b.count,
    });
  }
  return result;
}

const faqs = [
  { q: 'How much does a funeral cost in 2026?', a: 'The average funeral in the United States ranges from $7,000 to $12,000 for a traditional service with burial. Direct cremation is the least expensive option at $1,000 to $3,000 in most states.' },
  { q: 'What is the cheapest funeral option?', a: 'Direct cremation is the least expensive funeral option, typically costing $1,000 to $3,000. It includes transportation, cremation, and return of remains with no viewing or ceremony.' },
  { q: 'Are funeral prices negotiable?', a: 'Yes. Federal law requires funeral homes to provide an itemized General Price List on request. You can decline any service you do not want and compare prices between providers.' },
  { q: 'Does the state affect funeral costs?', a: 'Yes significantly. California, New York, and Hawaii tend to have the highest funeral costs. Southern and Midwestern states tend to have lower average costs.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const speakableSchema = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Funeral Cost Calculator: Estimate Costs by State (2026)', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['article > section:first-of-type'] } };

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Use the Funeral Cost Calculator',
  description: 'Step by step instructions for estimating funeral costs in your state using the Evermore Directory cost calculator.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Open the calculator', text: 'Scroll to the calculator on this page or click the dropdown labeled "Choose your state."' },
    { '@type': 'HowToStep', position: 2, name: 'Select your state', text: 'Choose your state from the dropdown to see real average prices for cremation and traditional burial in that state.' },
    { '@type': 'HowToStep', position: 3, name: 'Review the pricing ranges', text: 'The calculator displays average direct cremation and traditional burial cost ranges based on funeral homes listed in your state.' },
    { '@type': 'HowToStep', position: 4, name: 'Browse local funeral homes', text: 'Use the "Browse funeral homes" link to see the actual providers in your state, their pricing, and their services.' },
    { '@type': 'HowToStep', position: 5, name: 'Request a General Price List', text: 'Federal law requires funeral homes to provide an itemized General Price List on request. Use it to compare providers before deciding.' },
  ],
};

export default async function FuneralCostCalculatorPage() {
  const pricing = await getStatePricing();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Cost Calculator: Estimate Costs by State (2026)</h1>
              <p className="text-xl text-gray-600 mb-4">Real price ranges from 4,800+ funeral homes across all 50 states.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>Last Updated April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 leading-relaxed">A funeral in the United States costs between $1,000 and $15,000 depending on the type of service and state. Direct cremation is the least expensive option, averaging $1,000 to $3,000 nationally. A traditional funeral with burial averages $7,000 to $12,000. Costs vary significantly by state, with California and New York running 30 to 50 percent above the national average.</p>
            </section>

            <section className="mb-12">
              <CostCalculator data={pricing} />
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Affects Funeral Costs</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Two families in the same town can pay wildly different amounts for similar services. The biggest cost drivers are usually predictable, and knowing them up front lets you ask the right questions before you commit to anything.</p>
              <ul className="list-disc list-inside space-y-3 text-gray-600 mb-4">
                <li><strong>Service type.</strong> Direct cremation is the least expensive option because it skips embalming, viewing, and ceremony. Traditional burial with a full service is the most expensive because it includes the casket, embalming, viewing, ceremony, hearse, plot, vault, and headstone.</li>
                <li><strong>Location within the state.</strong> Funeral homes in major metro areas typically charge 20 to 40 percent more than rural providers in the same state. If you are willing to travel an hour, you can often save thousands.</li>
                <li><strong>Funeral home ownership.</strong> Corporate-owned funeral homes (Service Corporation International, StoneMor, and others) often run higher than independent family-owned homes for the same services. Independent providers are often more flexible on pricing.</li>
                <li><strong>Casket and urn selection.</strong> Caskets range from $500 for a basic cloth-covered model to $10,000 or more for hardwood or metal options. You are legally allowed to buy a casket from a third party (including online) and have the funeral home use it without surcharge.</li>
                <li><strong>Add-on services.</strong> Memorial cards, video tributes, livestreaming, limousine service, additional viewing time, and graveside services all add to the bill. Each item is optional and can be declined.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Use the General Price List</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The General Price List, or GPL, is the single most powerful tool a family has for controlling funeral costs. Federal law requires every funeral home to provide it on request, and to honor the prices listed on it.</p>
              <ul className="list-disc list-inside space-y-3 text-gray-600 mb-4">
                <li><strong>Federal law requires it.</strong> The Federal Trade Commission Funeral Rule requires funeral homes to give you a printed itemized General Price List as soon as you begin discussing arrangements, in person or by phone. If they refuse, walk away and report them.</li>
                <li><strong>What every line item means.</strong> The GPL lists every service the home offers with its individual price. Categories include the basic services fee (non-declinable), embalming, transportation, casket, vault, viewing, ceremony, and graveside services. You can decline almost everything except the basic services fee.</li>
                <li><strong>Compare two homes side by side.</strong> Get GPLs from at least two homes and compare them line by line. The basic services fee alone can vary by $1,500 between homes in the same town. Add up only the items you actually want and use that total to compare.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">For a deeper walkthrough, see our guide on <Link href="/blog/how-to-read-a-funeral-home-general-price-list" className="text-slate-600 hover:text-slate-800 font-medium underline">how to read a funeral home General Price List</Link>.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Low Cost Options</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If cost is a serious concern, several real options can bring the total well under $2,000 or even to zero. None of them require sacrificing dignity.</p>
              <ul className="list-disc list-inside space-y-3 text-gray-600 mb-4">
                <li><strong>Direct cremation.</strong> The single most affordable option, averaging $1,000 to $3,000 depending on the state. The remains are returned to the family in a basic urn or container, and the family can hold a separate memorial service whenever and wherever they choose.</li>
                <li><strong>County indigent burial assistance.</strong> Most counties have a program to cover basic burial or cremation for families that cannot afford it. The county coroner or social services office can connect you. Benefits vary by county.</li>
                <li><strong>Body donation programs.</strong> Donating the body to a medical school or research program is free and the program usually returns cremated remains to the family within a year or two at no cost. This is a meaningful option for families that want a low cost choice with a sense of purpose.</li>
                <li><strong>VA burial benefits for veterans.</strong> Eligible veterans qualify for free burial in a national cemetery, a free headstone or marker, and burial allowances from $300 to $796 toward funeral costs. See our <Link href="/blog/va-burial-benefits-veterans-guide" className="text-slate-600 hover:text-slate-800 font-medium underline">guide to VA burial benefits</Link> for the full breakdown.</li>
              </ul>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/funeral-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">How Much Does a Funeral Cost in 2026? Complete Price Guide</Link></li>
                <li><Link href="/blog/cremation-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">How Much Does Cremation Cost in 2026?</Link></li>
                <li><Link href="/blog/direct-cremation-vs-traditional-funeral" className="text-slate-600 hover:text-slate-800 font-medium">Direct Cremation vs Traditional Funeral: How to Choose</Link></li>
                <li><Link href="/blog/va-burial-benefits-veterans-guide" className="text-slate-600 hover:text-slate-800 font-medium">VA Burial Benefits: What Every Veteran&apos;s Family Needs to Know</Link></li>
                <li><Link href="/blog/how-to-read-a-funeral-home-general-price-list" className="text-slate-600 hover:text-slate-800 font-medium">How to Read a Funeral Home General Price List</Link></li>
                <li><Link href="/states" className="text-slate-600 hover:text-slate-800 font-medium">Browse Funeral Homes by State</Link></li>
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
