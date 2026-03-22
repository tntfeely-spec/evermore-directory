import { createClient } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamicParams = true

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

// ─── Build tabs HTML string ──────────────────────────────────────────────────
function buildTabsHtml(listing: FuneralHome, services: string[], calcId: string, hasPricing: boolean, cityLabel: string): string {
  const addr = [listing.address, listing.city, listing.state, listing.zip].filter(Boolean).join(', ')
  const addrEncoded = encodeURIComponent(addr)
  const phoneLink = listing.phone ? `<p style="font-size:14px;color:#444;">📞 <a href="tel:${listing.phone.replace(/\D/g, '')}" style="color:#2a6496;">${listing.phone}</a></p>` : ''
  const servicesHtml = services.length > 0
    ? `<p style="font-size:11px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px;">Services offered</p>
       <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;">${services.map(s => `<span style="background:#f0f4f8;color:#1a1a2e;font-size:13px;padding:6px 14px;border-radius:6px;border:1px solid #dde5ef;">${s}</span>`).join('')}</div>`
    : ''
  const specialDesc = listing.special_features ? ` ${listing.special_features}.` : ''
  const googleSearch = encodeURIComponent(`${listing.business_name} ${listing.city} ${listing.state}`)
  const websiteLink = listing.website
    ? `<a href="https://www.google.com/search?q=${googleSearch}" target="_blank" rel="noopener noreferrer" style="color:#2a6496;font-size:14px;text-decoration:none;">See reviews on Google →</a>`
    : ''
  const photoContent = listing.image
    ? `<div style="background:#e8edf2;border-radius:8px;height:200px;display:flex;align-items:center;justify-content:center;color:#888;font-size:14px;margin-bottom:12px;">📷 Photo of ${listing.business_name}</div>`
    : `<div style="background:#f0f4f8;border-radius:8px;padding:32px;text-align:center;color:#888;border:2px dashed #d0dae5;"><div style="font-size:28px;opacity:0.25;margin-bottom:8px;">📷</div><div style="font-weight:600;margin-bottom:4px;color:#666;">No photos available</div><div style="font-size:13px;">Visit their website or call to learn about their facilities.</div></div>`

  // Calculator rows
  let calcHtml = ''
  if (hasPricing) {
    const rows = CALC_ITEMS.map((item, i) =>
      `<tr style="border-bottom:1px solid #f5f5f5;background:${i % 2 === 0 ? '#fff' : '#fafafa'};">
        <td style="padding:10px 16px;width:28px;"><input type="checkbox" id="chk-${item.id}-${calcId}" ${item.defaultOn ? 'checked' : ''} ${item.required ? 'disabled' : ''} style="width:15px;height:15px;accent-color:#2a6496;cursor:pointer;" /></td>
        <td style="padding:10px 8px;font-size:14px;color:#1a1a2e;">${item.label}${item.required ? '<span style="font-size:10px;color:#bbb;margin-left:6px;">required</span>' : ''}</td>
        <td style="padding:10px 16px;font-size:14px;font-weight:600;color:#1a1a2e;text-align:right;white-space:nowrap;">$${item.price.toLocaleString()}</td>
      </tr>`
    ).join('')
    calcHtml = `
      <div style="border-top:1px solid #e5e5e5;">
        <div style="padding:14px 20px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center;">
          <div><div style="font-size:15px;font-weight:700;color:#1a1a2e;">Estimate your funeral cost</div><div style="font-size:12px;color:#999;margin-top:2px;">Select services below. Total updates instantly.</div></div>
          <div style="text-align:right;"><div style="font-size:11px;color:#999;margin-bottom:2px;">Estimated total</div><div id="total-${calcId}" style="font-size:22px;font-weight:800;color:#1a1a2e;">$${DEFAULT_TOTAL.toLocaleString()}</div></div>
        </div>
        <div style="padding-bottom:12px;"><table style="width:100%;border-collapse:collapse;"><tbody>${rows}</tbody></table>
        <div style="padding:10px 16px;"><p style="font-size:11px;color:#bbb;line-height:1.6;">Prices are estimated from this funeral home's General Price List. Cash advance items (cemetery fees, death certificates, obituaries) not included. Always request the current GPL before making arrangements.</p></div></div>
      </div>`
  } else {
    calcHtml = `
      <div style="border-top:1px solid #e5e5e5;padding:20px;">
        <div style="background:#fff8e1;border:1px solid #fcd34d;border-radius:8px;padding:14px;margin-bottom:16px;">
          <div style="font-size:13px;font-weight:600;color:#92400e;margin-bottom:4px;">Pricing not published</div>
          <div style="font-size:13px;color:#78350f;">This funeral home has not published prices online. Call directly to request their General Price List, which all funeral homes are required to provide.</div>
        </div>
        <p style="font-size:12px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px;">${cityLabel} area averages for reference</p>
        <table style="width:100%;border-collapse:collapse;">
          <tbody>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;font-size:14px;color:#555;">Direct cremation</td><td style="padding:10px 0;font-size:14px;font-weight:600;color:#1a1a2e;text-align:right;">$1,800 – $3,500</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;font-size:14px;color:#555;">Cremation with service</td><td style="padding:10px 0;font-size:14px;font-weight:600;color:#1a1a2e;text-align:right;">$3,500 – $6,000</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;font-size:14px;color:#555;">Traditional burial</td><td style="padding:10px 0;font-size:14px;font-weight:600;color:#1a1a2e;text-align:right;">$7,000 – $12,000</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;font-size:14px;color:#555;">Memorial service only</td><td style="padding:10px 0;font-size:14px;font-weight:600;color:#1a1a2e;text-align:right;">$1,200 – $2,800</td></tr>
          </tbody>
        </table>
        <p style="font-size:11px;color:#bbb;margin-top:10px;font-style:italic;">Area averages based on Evermore data. Always request a General Price List from the funeral home directly.</p>
      </div>`
  }

  return `
<div style="display:flex;border-bottom:1px solid #e5e5e5;background:#fff;">
  <button onclick="switchTab('overview')" data-tab="overview" style="padding:14px 20px;font-size:14px;color:#1a1a2e;background:none;border:none;border-bottom:2px solid #1a1a2e;margin-bottom:-2px;font-weight:500;cursor:pointer;">Overview</button>
  <button onclick="switchTab('reviews')" data-tab="reviews" style="padding:14px 20px;font-size:14px;color:#666;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;font-weight:400;cursor:pointer;">Reviews</button>
  <button onclick="switchTab('photos')" data-tab="photos" style="padding:14px 20px;font-size:14px;color:#666;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;font-weight:400;cursor:pointer;">Photos</button>
  <button onclick="switchTab('location')" data-tab="location" style="padding:14px 20px;font-size:14px;color:#666;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;font-weight:400;cursor:pointer;">Location</button>
</div>
<div id="tab-overview" style="padding:20px;display:block;">
  <p style="font-size:15px;color:#444;line-height:1.7;margin-bottom:20px;">${listing.business_name} is a funeral home serving families in ${listing.city}, ${listing.state}.${specialDesc} We are committed to helping families find compassionate, professional care during one of life's most difficult moments.</p>
  ${servicesHtml}
  ${phoneLink}
</div>
${calcHtml}
<div id="tab-reviews" style="padding:20px;display:none;">
  <p style="font-size:13px;color:#888;margin-bottom:16px;">Reviews are pulled from Google. Visit the funeral home's Google listing to read and leave reviews.</p>
  ${websiteLink}
</div>
<div id="tab-photos" style="padding:20px;display:none;">
  ${photoContent}
</div>
<div id="tab-location" style="padding:20px;display:none;">
  <iframe width="100%" height="400" style="border:0;border-radius:8px;" loading="lazy" allowfullscreen src="https://maps.google.com/maps?q=${addrEncoded}&output=embed"></iframe>
  <p style="font-size:14px;color:#444;line-height:1.8;margin-top:14px;">
    <strong>${listing.business_name}</strong><br />${addr}<br /><br />
    ${listing.phone ? `<a href="tel:${listing.phone.replace(/\D/g, '')}" style="color:#2a6496;">${listing.phone}</a><br />` : ''}
    <a href="https://maps.google.com/?q=${addrEncoded}" target="_blank" rel="noopener noreferrer" style="color:#2a6496;text-decoration:none;">Get directions →</a>
  </p>
</div>`
}

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

          {/* Tabs + Calculator - all rendered as raw HTML for onclick support */}
          <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e5e5e5', overflow: 'hidden', marginBottom: 20 }}
            dangerouslySetInnerHTML={{ __html: buildTabsHtml(listing, services, calcId, hasPricing, cityLabel) }}
          />
        </div>

        {/* Right sidebar */}
        <div>

          {/* Get in touch card */}
          <div id="tab-contact" style={{ background: '#fff', borderRadius: 10, border: '1px solid #e5e5e5', marginBottom: 16, overflow: 'hidden' }}>
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

      {/* Tab switching, contact form toggle, preference selector */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
function switchTab(name) {
  var tabs = ['overview','reviews','photos','location','contact'];
  tabs.forEach(function(t) {
    var el = document.getElementById('tab-' + t);
    if (el) el.style.display = t === name ? 'block' : 'none';
  });
  var calc = document.getElementById('tab-overview-calc');
  if (calc) calc.style.display = name === 'overview' ? 'block' : 'none';
  var btns = document.querySelectorAll('[data-tab]');
  btns.forEach(function(b) {
    var active = b.getAttribute('data-tab') === name;
    b.style.borderBottom = active ? '2px solid #1a1a2e' : '2px solid transparent';
    b.style.color = active ? '#1a1a2e' : '#888';
  });
}
function toggleContact(id) {
  var form = document.getElementById('contact-form-' + id);
  var toggle = document.getElementById('contact-toggle-' + id);
  if (form && toggle) {
    var show = form.style.display === 'none';
    form.style.display = show ? 'block' : 'none';
    toggle.style.display = show ? 'none' : 'block';
  }
}
function selectPref(type, id) {
  ['call','text','email'].forEach(function(t) {
    var el = document.getElementById('pref-' + t + '-' + id);
    if (el) {
      el.style.border = t === type ? '1.5px solid #2a6496' : '1.5px solid #d0d9e5';
      el.style.background = t === type ? '#f0f6ff' : '#fff';
    }
  });
  var phoneField = document.getElementById('field-phone-' + id);
  var emailField = document.getElementById('field-email-' + id);
  if (phoneField) phoneField.style.display = type === 'email' ? 'none' : 'block';
  if (emailField) emailField.style.display = type === 'email' ? 'block' : 'none';
}
function submitContact(id) {
  var form = document.getElementById('contact-form-' + id);
  if (form) {
    form.innerHTML = '<div style="padding:16px;text-align:center;color:#2e7d32;font-weight:600;">✓ Request sent! They will be in touch soon.</div>';
  }
}
`,
        }}
      />
    </>
  )
}

// ─── Contact Form (sidebar) ───────────────────────────────────────────────────
function ContactForm({ listing, calcId }: { listing: FuneralHome; calcId: string }) {
  const shortName = listing.business_name.split(' ').slice(0, 2).join(' ');
  const firstName = listing.business_name.split(' ')[0];
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div id="contact-toggle-${calcId}" onclick="toggleContact('${calcId}')" style="cursor:pointer;padding:16px;">
  <div style="background:#f0f6ff;border:1.5px solid #c2d9f5;border-radius:10px;padding:14px 16px;">
    <div style="font-size:13px;font-weight:700;color:#1a1a2e;margin-bottom:4px;">💬 Get in touch today</div>
    <div style="font-size:12px;color:#555;line-height:1.5;">Choose how you want to hear back. Call, text, or email.</div>
    <div style="margin-top:10px;background:#2a6496;color:#fff;border-radius:6px;padding:9px 14px;font-size:13px;font-weight:700;text-align:center;">Contact this funeral home →</div>
  </div>
</div>
<div id="contact-form-${calcId}" style="display:none;padding:0 16px 16px;">
  <div style="font-size:13px;font-weight:700;color:#1a1a2e;margin-bottom:2px;">Contact ${shortName}</div>
  <div style="font-size:12px;color:#777;margin-bottom:12px;">How would you like them to reach you?</div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:12px;">
    <label id="pref-call-${calcId}" onclick="selectPref('call','${calcId}')" style="border:1.5px solid #d0d9e5;border-radius:8px;padding:10px 6px;text-align:center;cursor:pointer;font-size:12px;color:#444;background:#fff;">
      <div style="font-size:18px;margin-bottom:4px;">📞</div><div style="font-weight:600;">Call me</div><div style="font-size:10px;color:#888;margin-top:2px;">Within the hour</div>
    </label>
    <label id="pref-text-${calcId}" onclick="selectPref('text','${calcId}')" style="border:1.5px solid #2a6496;border-radius:8px;padding:10px 6px;text-align:center;cursor:pointer;font-size:12px;color:#444;background:#f0f6ff;">
      <div style="font-size:18px;margin-bottom:4px;">💬</div><div style="font-weight:600;">Text me</div><div style="font-size:10px;color:#888;margin-top:2px;">Reply when ready</div>
    </label>
    <label id="pref-email-${calcId}" onclick="selectPref('email','${calcId}')" style="border:1.5px solid #d0d9e5;border-radius:8px;padding:10px 6px;text-align:center;cursor:pointer;font-size:12px;color:#444;background:#fff;">
      <div style="font-size:18px;margin-bottom:4px;">✉️</div><div style="font-weight:600;">Email me</div><div style="font-size:10px;color:#888;margin-top:2px;">No pressure</div>
    </label>
  </div>
  <div id="field-phone-${calcId}">
    <input type="text" placeholder="Your name" style="width:100%;padding:9px 10px;font-size:13px;border:1px solid #d0d9e5;border-radius:6px;margin-bottom:8px;display:block;box-sizing:border-box;" />
    <input type="tel" placeholder="Best phone number" style="width:100%;padding:9px 10px;font-size:13px;border:1px solid #d0d9e5;border-radius:6px;margin-bottom:8px;display:block;box-sizing:border-box;" />
  </div>
  <div id="field-email-${calcId}" style="display:none;">
    <input type="text" placeholder="Your name" style="width:100%;padding:9px 10px;font-size:13px;border:1px solid #d0d9e5;border-radius:6px;margin-bottom:8px;display:block;box-sizing:border-box;" />
    <input type="email" placeholder="Your email address" style="width:100%;padding:9px 10px;font-size:13px;border:1px solid #d0d9e5;border-radius:6px;margin-bottom:8px;display:block;box-sizing:border-box;" />
  </div>
  <select style="width:100%;padding:9px 10px;font-size:13px;border:1px solid #d0d9e5;border-radius:6px;margin-bottom:10px;color:#444;box-sizing:border-box;background:#fff;">
    <option value="now">We need services now</option>
    <option value="soon">Planning within the next few days</option>
    <option value="pricing">Just getting pricing information</option>
    <option value="preplanning">Pre-planning for the future</option>
  </select>
  <button onclick="submitContact('${calcId}')" style="width:100%;padding:11px;background:#2a6496;color:#fff;border:none;border-radius:6px;font-size:14px;font-weight:700;cursor:pointer;">Send →</button>
  <p style="font-size:11px;color:#999;margin-top:8px;text-align:center;line-height:1.5;">Goes directly to ${firstName}. We never share your info.</p>
</div>
` }} />
  )
}
