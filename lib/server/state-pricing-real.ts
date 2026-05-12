/**
 * Real state-level funeral pricing computed from Supabase data.
 * Server-side only. Used by /funeral-costs/[state] and /blog/funeral-cost-calculator.
 */
import { supabase } from '@/lib/supabase';
import { statePricing as nfdaFallback, stateMeta } from '@/lib/state-pricing';

const STATE_NAMES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas',
  CA: 'California', CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', DC: 'District of Columbia',
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

export interface RealStatePricing {
  abbr: string;
  name: string;
  cremationLow: number;
  cremationHigh: number;
  burialLow: number;
  burialHigh: number;
  listingCount: number;
  dataSource: 'supabase' | 'nfda_fallback';
}

function extractLowHigh(raw: string | null): { low: number | null; high: number | null } {
  if (!raw) return { low: null, high: null };
  const matches = raw.match(/\$?([\d,]+)/g);
  if (!matches) return { low: null, high: null };
  const nums = matches.map((m) => parseInt(m.replace(/[$,]/g, ''), 10)).filter((n) => n > 0 && n < 100000);
  if (nums.length === 0) return { low: null, high: null };
  if (nums.length === 1) return { low: nums[0], high: nums[0] };
  return { low: Math.min(...nums), high: Math.max(...nums) };
}

function parsePriceRange(range: string): { low: number; high: number } {
  const matches = range.match(/\$?([\d,]+)/g);
  if (!matches || matches.length < 2) return { low: 0, high: 0 };
  return {
    low: parseInt(matches[0].replace(/[$,]/g, ''), 10),
    high: parseInt(matches[1].replace(/[$,]/g, ''), 10),
  };
}

export async function getAllRealStatePricing(): Promise<RealStatePricing[]> {
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

  const result: RealStatePricing[] = [];

  // States with real Supabase data (10+ listings with pricing)
  for (const [abbr, b] of buckets.entries()) {
    if (b.count >= 10) {
      result.push({
        abbr,
        name: STATE_NAMES[abbr],
        cremationLow: avg(b.cremLows),
        cremationHigh: avg(b.cremHighs),
        burialLow: avg(b.burLows),
        burialHigh: avg(b.burHighs),
        listingCount: b.count,
        dataSource: 'supabase',
      });
    }
  }

  // For states below the 10-listing threshold, fall back to NFDA data
  const coveredAbbrs = new Set(result.map(r => r.abbr));
  for (const [slug, meta] of Object.entries(stateMeta)) {
    const abbr = meta.abbr.toUpperCase();
    if (coveredAbbrs.has(abbr)) continue;
    const nfda = nfdaFallback[slug];
    if (!nfda) continue;
    const crem = parsePriceRange(nfda.directCremation);
    const bur = parsePriceRange(nfda.traditionalBurial);
    // Get total listing count for this state (even without pricing data)
    const bucket = buckets.get(abbr);
    result.push({
      abbr,
      name: STATE_NAMES[abbr] || meta.name,
      cremationLow: crem.low,
      cremationHigh: crem.high,
      burialLow: bur.low,
      burialHigh: bur.high,
      listingCount: bucket?.count || 0,
      dataSource: 'nfda_fallback',
    });
  }

  return result;
}

export async function getRealStatePricing(stateSlug: string): Promise<RealStatePricing | null> {
  const meta = stateMeta[stateSlug];
  if (!meta) return null;
  const all = await getAllRealStatePricing();
  return all.find(r => r.abbr === meta.abbr.toUpperCase()) || null;
}

export function getStateRanking(all: RealStatePricing[], abbr: string, type: 'cremation' | 'burial'): number {
  const sorted = [...all].sort((a, b) => {
    if (type === 'cremation') return a.cremationLow - b.cremationLow;
    return a.burialLow - b.burialLow;
  });
  const idx = sorted.findIndex(r => r.abbr === abbr.toUpperCase());
  return idx >= 0 ? idx + 1 : 0;
}

export interface CityPricing {
  city: string;
  state: string;
  cremationLow: number;
  cremationHigh: number;
  burialLow: number;
  burialHigh: number;
  listingCount: number;
  dataSource: 'city_supabase' | 'state_fallback';
}

export async function getCityPricing(city: string, stateAbbr: string): Promise<CityPricing | null> {
  const stateUpper = stateAbbr.toUpperCase();

  const { data } = await supabase
    .from('funeral_homes')
    .select('price_range_cremation, price_range_burial')
    .eq('state', stateUpper)
    .ilike('city', city)
    .not('price_range_cremation', 'is', null)
    .not('price_range_burial', 'is', null);

  const cremLows: number[] = [];
  const cremHighs: number[] = [];
  const burLows: number[] = [];
  const burHighs: number[] = [];

  for (const row of data ?? []) {
    const crem = extractLowHigh(row.price_range_cremation);
    const bur = extractLowHigh(row.price_range_burial);
    if (crem.low === null || bur.low === null) continue;
    cremLows.push(crem.low);
    cremHighs.push(crem.high!);
    burLows.push(bur.low);
    burHighs.push(bur.high!);
  }

  const avg = (arr: number[]) => Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);

  // If 5+ listings with pricing, use city-level data
  if (cremLows.length >= 5) {
    return {
      city,
      state: stateUpper,
      cremationLow: avg(cremLows),
      cremationHigh: avg(cremHighs),
      burialLow: avg(burLows),
      burialHigh: avg(burHighs),
      listingCount: cremLows.length,
      dataSource: 'city_supabase',
    };
  }

  // Fall back to state-level
  const stateSlug = Object.entries(stateMeta).find(([, m]) => m.abbr.toUpperCase() === stateUpper)?.[0];
  if (!stateSlug) return null;
  const stateData = await getRealStatePricing(stateSlug);
  if (!stateData) return null;

  // Get total listing count for the city (even without pricing)
  const { count } = await supabase
    .from('funeral_homes')
    .select('*', { count: 'exact', head: true })
    .eq('state', stateUpper)
    .ilike('city', city);

  return {
    city,
    state: stateUpper,
    cremationLow: stateData.cremationLow,
    cremationHigh: stateData.cremationHigh,
    burialLow: stateData.burialLow,
    burialHigh: stateData.burialHigh,
    listingCount: count || 0,
    dataSource: 'state_fallback',
  };
}

export function formatCurrency(n: number): string {
  return '$' + n.toLocaleString('en-US');
}

export function formatRange(low: number, high: number): string {
  return `${formatCurrency(low)} to ${formatCurrency(high)}`;
}
