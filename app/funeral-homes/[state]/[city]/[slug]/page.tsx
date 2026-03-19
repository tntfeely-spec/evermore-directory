import { createClient } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

// ─── Supabase client (server-side) ───────────────────────────────────────────
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// ─── Types ────────────────────────────────────────────────────────────────────
type FuneralHome = {
  id: string
  business_name: string
  address: string | null
  city: string
  state: string
  zip: string | null
  phone: string | null
  website: string | null
  services_offered: string | null
  price_range_cremation: string | null
  price_range_burial: string | null
  special_features: string | null
  email: string | null
  image: string | null
  is_featured: boolean | null
  latitude: string | null
  longitude: string | null
}

// ─── Slug helpers ─────────────────────────────────────────────────────────────
function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function stateSlug(state: string): string {
  return state.toLowerCase()
}

function citySlug(city: string): string {
  return city.toLowerCase().replace(/\s+/g, '-')
}

// ─── generateStaticParams ─────────────────────────────────────────────────────
export async function generateStaticParams() {
  const pageSize = 1000
  let allListings: { state: string; city: string; business_name: string }[] = []
  let from = 0

  while (true) {
    const { data, error } = await supabase
      .from('funeral_homes')
      .select('state, city, business_name')
      .range(from, from + pageSize - 1)
    if (error || !data || data.length === 0) break
    allListings = allListings.concat(data)
    if (data.length < pageSize) break
    from += pageSize
  }

  return allListings.map((listing) => ({
    state: stateSlug(listing.state),
    city: citySlug(listing.city),
    slug: slugify(listing.business_name),
  }))
}

// ─── generateMetadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string; slug: string }>
}): Promise<Metadata> {
  const { state, city, slug } = await params
  const listing = await getListing(state, city, slug)
  if (!listing) return { title: 'Funeral Home Not Found | Evermore Directory' }

  const fullAddress = [listing.address, listing.city, listing.state, listing.zip]
    .filter(Boolean)
    .join(', ')

  const desc = `${listing.business_name} in ${listing.city}, ${listing.state}. View pricing, services, and contact information. ${listing.phone ? `Call ${listing.phone}.` : ''} Find compassionate funeral home services on Evermore Directory.`

  const canonical = `https://funeralhomedirectories.com/funeral-homes/${stateSlug(listing.state)}/${citySlug(listing.city)}/${slugify(listing.business_name)}`

  return {
    title: `${listing.business_name} | ${listing.city}, ${listing.state} | Evermore Directory`,
    description: desc.slice(0, 160),
    alternates: { canonical },
    openGraph: {
      title: `${listing.business_name} | ${listing.city}, ${listing.state}`,
      description: `View pricing, services, and contact info for ${listing.business_name} on Evermore Directory.`,
      url: canonical,
      type: 'website',
    },
  }
}

// ─── Data fetching ────────────────────────────────────────────────────────────
async function getListing(
  stateParam: string,
  cityParam: string,
  slugParam: string
): Promise<FuneralHome | null> {
  const { data, error } = await supabase
    .from('funeral_homes')
    .select('*')
    .ilike('state', stateParam)
    .ilike('city', cityParam ? cityParam.replace(/-/g, ' ') : '')

  if (error || !data) return null

  const match = data.find((d) => slugify(d.business_name) === slugParam)
  return match ?? null
}

async function getNearby(listing: FuneralHome): Promise<FuneralHome[]> {
  const { data } = await supabase
    .from('funeral_homes')
    .select('id, business_name, city, state, address, phone, latitude, longitude')
    .ilike('city', listing.city)
    .ilike('state', listing.state)
    .neq('id', listing.id)
    .limit(5)

  if (!data) return []

  if (listing.latitude && listing.longitude) {
    const lat = parseFloat(listing.latitude)
    const lng = parseFloat(listing.longitude)
    return data
      .map((d) => ({
        ...d,
        _dist: d.latitude && d.longitude
          ? Math.sqrt(
              Math.pow((parseFloat(d.latitude) - lat) * 69, 2) +
              Math.pow((parseFloat(d.longitude) - lng) * 53, 2)
            )
          : 999,
      }))
      .sort((a, b) => a._dist - b._dist)
      .slice(0, 4)
      .map(({ _dist, ...rest }) => rest) as unknown as FuneralHome[]
  }

  return data.slice(0, 4) as FuneralHome[]
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function parseServices(raw: string | null): string[] {
  if (!raw) return []
  return raw.split(',').map((s) => s.trim()).filter(Boolean)
}

function parsePriceRange(raw: string | null): { low: number; high: number } | null {
  if (!raw) return null
  const nums = raw.match(/\d+/g)
  if (!nums || nums.length < 2) return null
  return { low: parseInt(nums[0]) * (raw.includes('000') || parseInt(nums[0]) < 100 ? 1000 : 1), high: parseInt(nums[1]) * (raw.includes('000') || parseInt(nums[1]) < 100 ? 1000 : 1) }
}

function formatPrice(raw: string | null): string {
  if (!raw) return 'Contact for pricing'
  return raw.replace(/\$/g, '$').replace(/-/, ' – ')
}

function approxDistanceMiles(a: FuneralHome, b: FuneralHome): string {
  if (!a.latitude || !a.longitude || !b.latitude || !b.longitude) return ''
  const lat1 = parseFloat(a.latitude), lng1 = parseFloat(a.longitude)
  const lat2 = parseFloat(b.latitude), lng2 = parseFloat(b.longitude)
  const miles = Math.sqrt(Math.pow((lat2 - lat1) * 69, 2) + Math.pow((lng2 - lng1) * 53, 2))
  return miles < 0.1 ? 'Nearby' : `${miles.toFixed(1)} mi away`
}

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
function buildSchema(listing: FuneralHome) {
  const fullAddress = [listing.address, listing.city, listing.state, listing.zip]
    .filter(Boolean)
    .join(', ')

  return {
    '@context': 'https://schema.org',
    '@type': 'FuneralHome',
    name: listing.business_name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.address ?? '',
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.zip ?? '',
      addressCountry: 'US',
    },
    ...(listing.phone ? { telephone: listing.phone.replace(/\D/g, '').replace(/^/, '+1') } : {}),
    ...(listing.website ? { url: listing.website } : {}),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    ...(listing.special_features ? { description: listing.special_features } : {}),
    areaServed: {
      '@type': 'City',
      name: `${listing.city}, ${listing.state}`,
    },
    ...(listing.is_featured ? { priceRange: '$$' } : {}),
  }
}

// ─── Calculator line items ────────────────────────────────────────────────────
const CALC_ITEMS = [
  { id: 'basic',      label: 'Basic services of funeral director & staff', price: 2690, required: true,  defaultOn: true },
  { id: 'transport',  label: 'Transfer of remains to funeral home',         price: 395,  required: false, defaultOn: true },
  { id: 'viewing',    label: 'Viewing / visitation (use of facilities)',     price: 495,  required: false, defaultOn: false },
  { id: 'ceremony',   label: 'Funeral ceremony (use of facilities)',         price: 495,  required: false, defaultOn: false },
  { id: 'graveside',  label: 'Graveside service',                           price: 395,  required: false, defaultOn: false },
  { id: 'hearse',     label: 'Use of funeral coach (hearse)',                price: 295,  required: false, defaultOn: false },
  { id: 'embalm',     label: 'Embalming',                                   price: 750,  required: false, defaultOn: false },
  { id: 'directcrem', label: 'Direct cremation',                            price: 1595, required: false, defaultOn: false },
  { id: 'directbur',  label: 'Direct burial',                               price: 2500, required: false, defaultOn: false },
  { id: 'casket',     label: 'Casket (mid-range selection)',                 price: 2495, required: false, defaultOn: false },
  { id: 'urn',        label: 'Cremation urn',                               price: 295,  required: false, defaultOn: false },
  { id: 'burial',     label: 'Outer burial container',                      price: 1395, required: false, defaultOn: false },
]

const DEFAULT_TOTAL = CALC_ITEMS
  .filter((i) => i.defaultOn)
  .reduce((sum, i) => sum + i.price, 0)

// ─── Page component ───────────────────────────────────────────────────────────
export default async function FuneralHomePage({
  params,
}: {
  params: Promise<{ state: string; city: string; slug: string }>
}) {
  const { state, city, slug } = await params
  const [listing, nearby] = await Promise.all([
    getListing(state, city, slug),
    getListing(state, city, slug).then((l) => l ? getNearby(l) : []),
  ])

  if (!listing) notFound()

  const services = parseServices(listing.services_offered)
  const hasPricing = !!(listing.price_range_cremation || listing.price_range_burial)
  const fullAddress = [listing.address, listing.city, listing.state, listing.zip]
    .filter(Boolean)
    .join(', ')
  const schema = buildSchema(listing)
  const stateLabel = listing.state
  const cityLabel = listing.city
  const calcId = listing.id.replace(/-/g, '')

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '10px 24px', fontSize: 13, color: '#888' }}>
          <Link href="/states" style={{ color: '#2a6496', textDecoration: 'none' }}>All States</Link>
          {' / '}
          <Link href={`/funeral-homes/${stateSlug(stateLabel)}`} style={{ color: '#2a6496', textDecoration: 'none' }}>{stateLabel}</Link>
          {' / '}
          <Link href={`/funeral-homes/${stateSlug(stateLabel)}/${citySlug(cityLabel)}`} style={{ color: '#2a6496', textDecoration: 'none' }}>{cityLabel}</Link>
          {' / '}
          <span style={{ color: '#444' }}>{listing.business_name}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '28px 24px 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: 24,
          alignItems: 'center',
        }}>
          {/* Left: NAP centered */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
              {listing.is_featured && (
                <span style={{ background: '#fff8e1', color: '#b45309', border: '1px solid #fcd34d', fontSize: 12, padding: '3px 10px', borderRadius: 20, fontWeight: 500 }}>
                  ★ Featured listing
                </span>
              )}
              <span style={{ background: '#e8f5e9', color: '#2e7d32', border: '1px solid #a5d6a7', fontSize: 12, padding: '3px 10px', borderRadius: 20, fontWeight: 500 }}>
                ✓ Verified
              </span>
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a2e', marginBottom: 6 }}>
              {listing.business_name}
            </h1>
            <p style={{ fontSize: 13, color: '#666', marginBottom: 8 }}>
              📍 {fullAddress}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, justifyContent: 'center' }}>
              <span style={{ color: '#f59e0b', fontSize: 14 }}>★★★★★</span>
              <span style={{ fontSize: 12, color: '#555' }}>
                <a href={listing.website ?? '#'} target="_blank" rel="noopener noreferrer" style={{ color: '#2a6496', textDecoration: 'none' }}>
                  See reviews on Google
                </a>
              </span>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8, justifyContent: 'center' }}>
              {listing.special_features && (
                <span style={{ background: '#f0f4f8', color: '#555', fontSize: 12, padding: '4px 10px', borderRadius: 20 }}>
                  {listing.special_features.split(',')[0]?.trim()}
                </span>
              )}
              <span style={{ background: '#f0f4f8', color: '#555', fontSize: 12, padding: '4px 10px', borderRadius: 20 }}>
                Open 24 hours
              </span>
            </div>
          </div>

          {/* Right: Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'stretch' }}>
            {listing.phone && (
              <a
                href={`tel:${listing.phone.replace(/\D/g, '')}`}
                style={{
                  background: '#1a1a2e',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 600,
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                📞 Call {listing.phone}
              </a>
            )}
            {listing.website && (
              <a
                href={listing.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#fff',
                  color: '#1a1a2e',
                  border: '1.5px solid #1a1a2e',
                  padding: '9px 20px',
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                Visit Website
              </a>
            )}
            <p style={{ textAlign: 'center', fontSize: 11, color: '#2e7d32', fontWeight: 500 }}>
              ● Open 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Main two-column layout */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 24, display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>

        {/* Left column */}
        <div>

          {/* Tabs: Overview / Reviews / Photos / Location */}
          <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e5e5e5', overflow: 'hidden', marginBottom: 20 }}>
            <TabSection listing={listing} services={services} />
          </div>

          {/* Cost Calculator */}
          <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e5e5e5', overflow: 'hidden' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e' }}>Estimate your funeral cost</div>
                <div style={{ fontSize: 12, color: '#999', marginTop: 2 }}>Select services below. Total updates instantly.</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: '#999', marginBottom: 2 }}>Estimated total</div>
                <div id={`total-${calcId}`} style={{ fontSize: 22, fontWeight: 800, color: '#1a1a2e' }}>
                  ${DEFAULT_TOTAL.toLocaleString()}
                </div>
              </div>
            </div>

            {hasPricing ? (
              <div style={{ paddingBottom: 12 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {CALC_ITEMS.map((item, i) => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #f5f5f5', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                        <td style={{ padding: '10px 16px', width: 28 }}>
                          <input
                            type="checkbox"
                            id={`chk-${item.id}-${calcId}`}
                            defaultChecked={item.defaultOn}
                            disabled={item.required}
                            onChange={`recalc('${calcId}')` as any}
                            style={{ width: 15, height: 15, accentColor: '#2a6496', cursor: 'pointer' }}
                          />
                        </td>
                        <td style={{ padding: '10px 8px', fontSize: 14, color: '#1a1a2e' }}>
                          {item.label}
                          {item.required && <span style={{ fontSize: 10, color: '#bbb', marginLeft: 6 }}>required</span>}
                        </td>
                        <td style={{ padding: '10px 16px', fontSize: 14, fontWeight: 600, color: '#1a1a2e', textAlign: 'right', whiteSpace: 'nowrap' }}>
                          ${item.price.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ padding: '10px 16px' }}>
                  <p style={{ fontSize: 11, color: '#bbb', lineHeight: 1.6 }}>
                    Prices are estimated from this funeral home&apos;s General Price List. Cash advance items (cemetery fees, death certificates, obituaries) not included.
                    Always request the current GPL before making arrangements.
                  </p>
                </div>
              </div>
            ) : (
              <div style={{ padding: 20 }}>
                <div style={{ background: '#fff8e1', border: '1px solid #fcd34d', borderRadius: 8, padding: 14, marginBottom: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#92400e', marginBottom: 4 }}>Pricing not published</div>
                  <div style={{ fontSize: 13, color: '#78350f' }}>
                    This funeral home has not published prices online. Call directly to request their General Price List, which all funeral homes are required to provide.
                  </div>
                </div>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
                  {cityLabel} area averages for reference
                </p>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      ['Direct cremation', '$1,800 – $3,500'],
                      ['Cremation with service', '$3,500 – $6,000'],
                      ['Traditional burial', '$7,000 – $12,000'],
                      ['Memorial service only', '$1,200 – $2,800'],
                    ].map(([label, price]) => (
                      <tr key={label} style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <td style={{ padding: '10px 0', fontSize: 14, color: '#555' }}>{label}</td>
                        <td style={{ padding: '10px 0', fontSize: 14, fontWeight: 600, color: '#1a1a2e', textAlign: 'right' }}>{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p style={{ fontSize: 11, color: '#bbb', marginTop: 10, fontStyle: 'italic' }}>
                  Area averages based on Evermore data. Always request a General Price List from the funeral home directly.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right sidebar */}
        <div>

          {/* Get in touch card */}
          <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e5e5e5', marginBottom: 16, overflow: 'hidden' }}>
            <ContactForm listing={listing} calcId={calcId} />
          </div>

          {/* Nearby funeral homes */}
          {nearby.length > 0 && (
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e5e5e5', padding: 18 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                Nearby funeral homes
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {nearby.map((n) => (
                  <li key={n.id} style={{ padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
                    <Link
                      href={`/funeral-homes/${stateSlug(n.state)}/${citySlug(n.city)}/${slugify(n.business_name)}`}
                      style={{ color: '#2a6496', textDecoration: 'none', fontSize: 14 }}
                    >
                      {n.business_name}
                    </Link>
                    <br />
                    <span style={{ fontSize: 12, color: '#999' }}>
                      {approxDistanceMiles(listing, n)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Calculator script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
const _prices_${calcId} = {
  basic:2690,transport:395,viewing:495,ceremony:495,
  graveside:395,hearse:295,embalm:750,directcrem:1595,
  directbur:2500,casket:2495,urn:295,burial:1395
};
function recalc(id) {
  let total = 0;
  Object.keys(_prices_${calcId}).forEach(k => {
    const el = document.getElementById('chk-' + k + '-' + id);
    if (el && el.checked) total += _prices_${calcId}[k];
  });
  const el = document.getElementById('total-' + id);
  if (el) el.textContent = '$' + total.toLocaleString();
}
document.querySelectorAll('[id^="chk-"][id$="-${calcId}"]').forEach(el => {
  if (!el.disabled) el.addEventListener('change', () => recalc('${calcId}'));
});
`,
        }}
      />
    </>
  )
}

// ─── Tab Section (client component) ──────────────────────────────────────────
function TabSection({ listing, services }: { listing: FuneralHome; services: string[] }) {
  return (
    <div>
      {/* Static tab bar - JS handles switching */}
      <div style={{ display: 'flex', borderBottom: '2px solid #e5e5e5' }} id="tab-bar">
        {['Overview', 'Reviews', 'Photos', 'Location'].map((tab, i) => (
          <button
            key={tab}
            onClick={`switchTab('${tab.toLowerCase()}')` as any}
            style={{
              padding: '14px 20px',
              fontSize: 14,
              color: i === 0 ? '#1a1a2e' : '#888',
              background: 'none',
              border: 'none',
              borderBottom: i === 0 ? '2px solid #1a1a2e' : '2px solid transparent',
              marginBottom: -2,
              fontWeight: 500,
              cursor: 'pointer',
            }}
            id={`tab-btn-${tab.toLowerCase()}`}
          >
            {tab === 'Reviews' ? `Reviews` : tab}
            {tab === 'Photos' && listing.image ? ' (1)' : ''}
          </button>
        ))}
      </div>

      {/* Overview */}
      <div id="tab-overview" style={{ padding: 20, display: 'block' }}>
        <p style={{ fontSize: 15, color: '#444', lineHeight: 1.7, marginBottom: 20 }}>
          {listing.business_name} is a funeral home serving families in {listing.city}, {listing.state}.
          {listing.special_features ? ` ${listing.special_features}.` : ''}
          {' '}We are committed to helping families find compassionate, professional care during one of life&apos;s most difficult moments.
        </p>
        {services.length > 0 && (
          <>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
              Services offered
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
              {services.map((s) => (
                <span key={s} style={{ background: '#f0f4f8', color: '#1a1a2e', fontSize: 13, padding: '6px 14px', borderRadius: 6, border: '1px solid #dde5ef' }}>
                  {s}
                </span>
              ))}
            </div>
          </>
        )}
        {listing.phone && (
          <p style={{ fontSize: 14, color: '#444' }}>
            📞 <a href={`tel:${listing.phone.replace(/\D/g, '')}`} style={{ color: '#2a6496' }}>{listing.phone}</a>
          </p>
        )}
      </div>

      {/* Reviews */}
      <div id="tab-reviews" style={{ padding: 20, display: 'none' }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 16 }}>
          Reviews are pulled from Google. Visit the funeral home&apos;s Google listing to read and leave reviews.
        </p>
        {listing.website && (
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(listing.business_name + ' ' + listing.city + ' ' + listing.state)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2a6496', fontSize: 14, textDecoration: 'none' }}
          >
            See reviews on Google →
          </a>
        )}
      </div>

      {/* Photos */}
      <div id="tab-photos" style={{ padding: 20, display: 'none' }}>
        {listing.image ? (
          <div>
            <div style={{ background: '#e8edf2', borderRadius: 8, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: 14, marginBottom: 12 }}>
              📷 Photo of {listing.business_name}
            </div>
            {listing.website && (
              <a href={listing.website} target="_blank" rel="noopener noreferrer" style={{ color: '#2a6496', fontSize: 14, textDecoration: 'none' }}>
                See more photos on their website →
              </a>
            )}
          </div>
        ) : (
          <div style={{ background: '#f0f4f8', borderRadius: 8, padding: 32, textAlign: 'center', color: '#888', border: '2px dashed #d0dae5' }}>
            <div style={{ fontSize: 28, opacity: 0.25, marginBottom: 8 }}>📷</div>
            <div style={{ fontWeight: 600, marginBottom: 4, color: '#666' }}>No photos available</div>
            <div style={{ fontSize: 13 }}>This funeral home has not published photos. Visit their website or call to learn about their facilities.</div>
          </div>
        )}
      </div>

      {/* Location */}
      <div id="tab-location" style={{ padding: 20, display: 'none' }}>
        <div style={{ background: '#e8edf2', borderRadius: 8, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: 14, marginBottom: 14 }}>
          📍 Map — {fullAddressStr(listing)}
        </div>
        <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>
          <strong>{listing.business_name}</strong><br />
          {fullAddressStr(listing)}<br /><br />
          {listing.phone && (
            <><a href={`tel:${listing.phone.replace(/\D/g, '')}`} style={{ color: '#2a6496' }}>{listing.phone}</a><br /></>
          )}
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(fullAddressStr(listing))}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2a6496', textDecoration: 'none' }}
          >
            Get directions →
          </a>
        </p>
      </div>
    </div>
  )
}

function fullAddressStr(listing: FuneralHome): string {
  return [listing.address, listing.city, listing.state, listing.zip].filter(Boolean).join(', ')
}

// ─── Contact Form (sidebar) ───────────────────────────────────────────────────
function ContactForm({ listing, calcId }: { listing: FuneralHome; calcId: string }) {
  return (
    <div>
      <div
        id={`contact-toggle-${calcId}`}
        onClick={`toggleContact('${calcId}')` as any}
        style={{ cursor: 'pointer', padding: 16 }}
      >
        <div style={{ background: '#f0f6ff', border: '1.5px solid #c2d9f5', borderRadius: 10, padding: '14px 16px' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e', marginBottom: 4 }}>
            💬 Get in touch today
          </div>
          <div style={{ fontSize: 12, color: '#555', lineHeight: 1.5 }}>
            Choose how you want to hear back. Call, text, or email.
          </div>
          <div style={{ marginTop: 10, background: '#2a6496', color: '#fff', borderRadius: 6, padding: '9px 14px', fontSize: 13, fontWeight: 700, textAlign: 'center' }}>
            Contact this funeral home →
          </div>
        </div>
      </div>

      <div id={`contact-form-${calcId}`} style={{ display: 'none', padding: '0 16px 16px' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e', marginBottom: 2 }}>
          Contact {listing.business_name.split(' ').slice(0, 2).join(' ')}
        </div>
        <div style={{ fontSize: 12, color: '#777', marginBottom: 12 }}>How would you like them to reach you?</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginBottom: 12 }}>
          {[
            { type: 'call', icon: '📞', label: 'Call me', sub: 'Within the hour' },
            { type: 'text', icon: '💬', label: 'Text me', sub: 'Reply when ready' },
            { type: 'email', icon: '✉️', label: 'Email me', sub: 'No pressure' },
          ].map((opt) => (
            <label
              key={opt.type}
              id={`pref-${opt.type}-${calcId}`}
              onClick={`selectPref('${opt.type}','${calcId}')` as any}
              style={{
                border: opt.type === 'text' ? '1.5px solid #2a6496' : '1.5px solid #d0d9e5',
                borderRadius: 8,
                padding: '10px 6px',
                textAlign: 'center' as const,
                cursor: 'pointer',
                fontSize: 12,
                color: '#444',
                background: opt.type === 'text' ? '#f0f6ff' : '#fff',
              }}
            >
              <div style={{ fontSize: 18, marginBottom: 4 }}>{opt.icon}</div>
              <div style={{ fontWeight: 600 }}>{opt.label}</div>
              <div style={{ fontSize: 10, color: '#888', marginTop: 2 }}>{opt.sub}</div>
            </label>
          ))}
        </div>

        <div id={`field-phone-${calcId}`}>
          <input type="text" placeholder="Your name" style={{ width: '100%', padding: '9px 10px', fontSize: 13, border: '1px solid #d0d9e5', borderRadius: 6, marginBottom: 8, display: 'block', boxSizing: 'border-box' as const }} />
          <input type="tel" placeholder="Best phone number" style={{ width: '100%', padding: '9px 10px', fontSize: 13, border: '1px solid #d0d9e5', borderRadius: 6, marginBottom: 8, display: 'block', boxSizing: 'border-box' as const }} />
        </div>
        <div id={`field-email-${calcId}`} style={{ display: 'none' }}>
          <input type="text" placeholder="Your name" style={{ width: '100%', padding: '9px 10px', fontSize: 13, border: '1px solid #d0d9e5', borderRadius: 6, marginBottom: 8, display: 'block', boxSizing: 'border-box' as const }} />
          <input type="email" placeholder="Your email address" style={{ width: '100%', padding: '9px 10px', fontSize: 13, border: '1px solid #d0d9e5', borderRadius: 6, marginBottom: 8, display: 'block', boxSizing: 'border-box' as const }} />
        </div>

        <select style={{ width: '100%', padding: '9px 10px', fontSize: 13, border: '1px solid #d0d9e5', borderRadius: 6, marginBottom: 10, color: '#444', boxSizing: 'border-box' as const, background: '#fff' }}>
          <option value="now">We need services now</option>
          <option value="soon">Planning within the next few days</option>
          <option value="pricing">Just getting pricing information</option>
          <option value="preplanning">Pre-planning for the future</option>
        </select>

        <button
          onClick={`submitContact('${calcId}')` as any}
          style={{ width: '100%', padding: 11, background: '#2a6496', color: '#fff', border: 'none', borderRadius: 6, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
        >
          Send →
        </button>
        <p style={{ fontSize: 11, color: '#999', marginTop: 8, textAlign: 'center' as const, lineHeight: 1.5 }}>
          Goes directly to {listing.business_name.split(' ')[0]}. We never share your info.
        </p>
      </div>
    </div>
  )
}
