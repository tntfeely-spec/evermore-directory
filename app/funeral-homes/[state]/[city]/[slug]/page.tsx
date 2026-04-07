import { createClient } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const revalidate = 0
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

function parsePrice(range: string | null, fallback: number): number {
  if (!range) return fallback
  const match = range.match(/\$?([\d,]+)/)
  if (!match) return fallback
  return parseInt(match[1].replace(/,/g, ''), 10)
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
function getCalcItems(listing: FuneralHome) {
  const cremPrice = parsePrice(listing.price_range_cremation, 1595)
  const burialPrice = parsePrice(listing.price_range_burial, 2500)
  return [
    { id: 'basic',      label: 'Basic services of funeral director & staff', price: 2690, required: true,  defaultOn: true },
    { id: 'transport',  label: 'Transfer of remains to funeral home',         price: 395,  required: false, defaultOn: true },
    { id: 'viewing',    label: 'Viewing / visitation (use of facilities)',     price: 495,  required: false, defaultOn: false },
    { id: 'ceremony',   label: 'Funeral ceremony (use of facilities)',         price: 495,  required: false, defaultOn: false },
    { id: 'graveside',  label: 'Graveside service',                           price: 395,  required: false, defaultOn: false },
    { id: 'hearse',     label: 'Use of funeral coach (hearse)',                price: 295,  required: false, defaultOn: false },
    { id: 'embalm',     label: 'Embalming',                                   price: 750,  required: false, defaultOn: false },
    { id: 'directcrem', label: 'Direct cremation',                            price: cremPrice, required: false, defaultOn: false },
    { id: 'directbur',  label: 'Direct burial',                               price: burialPrice, required: false, defaultOn: false },
    { id: 'casket',     label: 'Casket (mid-range selection)',                 price: 2495, required: false, defaultOn: false },
    { id: 'urn',        label: 'Cremation urn',                               price: 295,  required: false, defaultOn: false },
    { id: 'burial',     label: 'Outer burial container',                      price: 1395, required: false, defaultOn: false },
  ]
}

// ─── Build sections HTML string ─────────────────────────────────────────────
function buildSectionsHtml(listing: FuneralHome, services: string[], calcId: string, hasPricing: boolean, cityLabel: string): string {
  const addr = [listing.address, listing.city, listing.state, listing.zip].filter(Boolean).join(', ')
  const addrEncoded = encodeURIComponent(addr)
  const phoneLink = listing.phone ? `<p style="font-size:1rem;color:#374151;">📞 <a href="tel:${listing.phone.replace(/\D/g, '')}" style="color:#2a6496;">${listing.phone}</a></p>` : ''
  const servicesHtml = services.length > 0
    ? `<p style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px;">Services offered</p>
       <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;">${services.map(s => `<span style="background:#f0f4f8;color:#1a1a2e;font-size:1rem;padding:6px 14px;border-radius:6px;border:1px solid #dde5ef;">${s}</span>`).join('')}</div>`
    : ''
  const specialDesc = listing.special_features ? ` ${listing.special_features}.` : ''
  const googleSearch = encodeURIComponent(`${listing.business_name} ${listing.city} ${listing.state}`)
  const reviewsLink = `<a href="https://www.google.com/search?q=${googleSearch}+reviews" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:10px 18px;background:#334155;color:#fff;border-radius:6px;font-size:1rem;font-weight:600;text-decoration:none;">See reviews on Google →</a>`
  const photoContent = listing.image
    ? `<div style="background:#e8edf2;border-radius:8px;height:200px;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:1rem;margin-bottom:12px;">📷 Photo of ${listing.business_name}</div>`
    : `<div style="background:#f0f4f8;border-radius:8px;padding:32px;text-align:center;color:#9ca3af;border:2px dashed #d0dae5;"><div style="font-size:28px;opacity:0.25;margin-bottom:8px;">📷</div><div style="font-weight:600;margin-bottom:4px;color:#6b7280;">No photos available</div><div style="font-size:1rem;">Visit their website or call to learn about their facilities.</div></div>`

  // Calculator rows
  const calcItems = getCalcItems(listing)
  const defaultTotal = calcItems.filter((i) => i.defaultOn).reduce((sum, i) => sum + i.price, 0)
  let calcHtml = ''
  if (hasPricing) {
    const rows = calcItems.map((item, i) =>
      `<tr style="border-bottom:1px solid #f5f5f5;background:${i % 2 === 0 ? '#fff' : '#fafafa'};">
        <td style="padding:10px 16px;width:28px;"><input type="checkbox" id="chk-${item.id}-${calcId}" ${item.defaultOn ? 'checked' : ''} ${item.required ? 'disabled' : ''} style="width:15px;height:15px;accent-color:#2a6496;cursor:pointer;" /></td>
        <td style="padding:10px 8px;font-size:1rem;color:#1a1a2e;">${item.label}${item.required ? '<span style="font-size:10px;color:#bbb;margin-left:6px;">required</span>' : ''}</td>
        <td style="padding:10px 16px;font-size:1rem;font-weight:600;color:#1a1a2e;text-align:right;white-space:nowrap;">$${item.price.toLocaleString()}</td>
      </tr>`
    ).join('')
    calcHtml = `
      <div style="border-top:1px solid #e5e5e5;">
        <div style="padding:14px 20px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center;">
          <div><div style="font-size:1.125rem;font-weight:700;color:#1a1a2e;">Estimate your funeral cost</div><div style="font-size:1rem;color:#9ca3af;margin-top:2px;">Select services below. Total updates instantly.</div></div>
          <div style="text-align:right;"><div style="font-size:11px;color:#9ca3af;margin-bottom:2px;">Estimated total</div><div id="total-${calcId}" style="font-size:22px;font-weight:800;color:#1a1a2e;">$${defaultTotal.toLocaleString()}</div></div>
        </div>
        <div style="padding-bottom:12px;"><table style="width:100%;border-collapse:collapse;"><tbody>${rows}</tbody></table>
        <div style="padding:10px 16px;"><p style="font-size:11px;color:#bbb;line-height:1.6;">Prices are estimated from this funeral home's General Price List. Cash advance items (cemetery fees, death certificates, obituaries) not included. Always request the current GPL before making arrangements.</p></div></div>
      </div>`
  } else {
    calcHtml = `
      <div style="border-top:1px solid #e5e5e5;padding:20px;">
        <div style="background:#fff8e1;border:1px solid #fcd34d;border-radius:8px;padding:14px;margin-bottom:16px;">
          <div style="font-size:1rem;font-weight:600;color:#92400e;margin-bottom:4px;">Pricing not published</div>
          <div style="font-size:1rem;color:#78350f;">This funeral home has not published prices online. Call directly to request their General Price List, which all funeral homes are required to provide.</div>
        </div>
        <p style="font-size:1rem;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px;">${cityLabel} area averages for reference</p>
        <table style="width:100%;border-collapse:collapse;">
          <tbody>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;font-size:1rem;color:#555;">Direct cremation</td><td style="padding:10px 0;font-size:1rem;font-weight:600;color:#1a1a2e;text-align:right;">$1,800 – $3,500</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;font-size:1rem;color:#555;">Cremation with service</td><td style="padding:10px 0;font-size:1rem;font-weight:600;color:#1a1a2e;text-align:right;">$3,500 – $6,000</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;font-size:1rem;color:#555;">Traditional burial</td><td style="padding:10px 0;font-size:1rem;font-weight:600;color:#1a1a2e;text-align:right;">$7,000 – $12,000</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;font-size:1rem;color:#555;">Memorial service only</td><td style="padding:10px 0;font-size:1rem;font-weight:600;color:#1a1a2e;text-align:right;">$1,200 – $2,800</td></tr>
          </tbody>
        </table>
        <p style="font-size:11px;color:#bbb;margin-top:10px;font-style:italic;">Area averages based on Evermore data. Always request a General Price List from the funeral home directly.</p>
      </div>`
  }

  return `
<div style="padding:20px;">
  <p style="font-size:1.125rem;color:#374151;line-height:1.7;margin-bottom:20px;">${listing.business_name} is a funeral home serving families in ${listing.city}, ${listing.state}.${specialDesc} We are committed to helping families find compassionate, professional care during one of life's most difficult moments.</p>
  ${servicesHtml}
  ${phoneLink}
</div>
<div style="border-top:1px solid #e5e5e5;padding:20px;">
  <p style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px;">Reviews</p>
  <p style="font-size:1rem;color:#9ca3af;margin-bottom:16px;">Reviews are pulled from Google. Visit the funeral home's Google listing to read and leave reviews.</p>
  ${reviewsLink}
</div>
<div style="border-top:1px solid #e5e5e5;padding:20px;">
  <p style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px;">Photos</p>
  ${photoContent}
</div>
<div style="border-top:1px solid #e5e5e5;padding:20px;">
  <p style="font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px;">Location</p>
  <iframe width="100%" height="400" style="border:0;border-radius:8px;" loading="lazy" allowfullscreen src="https://maps.google.com/maps?q=${addrEncoded}&output=embed"></iframe>
  <p style="font-size:1rem;color:#374151;line-height:1.8;margin-top:14px;">
    <strong>${listing.business_name}</strong><br />${addr}<br /><br />
    ${listing.phone ? `<a href="tel:${listing.phone.replace(/\D/g, '')}" style="color:#2a6496;">${listing.phone}</a><br />` : ''}
    <a href="https://maps.google.com/?q=${addrEncoded}" target="_blank" rel="noopener noreferrer" style="color:#2a6496;text-decoration:none;">Get directions →</a>
  </p>
</div>
${calcHtml}`
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
      <Navigation />
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1100px] mx-auto px-6 py-2.5 text-xs text-gray-400">
          <Link href="/states" className="text-[#2a6496] no-underline">All States</Link>
          {' / '}
          <Link href={`/funeral-homes/${stateSlug(stateLabel)}`} className="text-[#2a6496] no-underline">{stateLabel}</Link>
          {' / '}
          <Link href={`/funeral-homes/${stateSlug(stateLabel)}/${citySlug(cityLabel)}`} className="text-[#2a6496] no-underline">{cityLabel}</Link>
          {' / '}
          <span className="text-gray-600">{listing.business_name}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1100px] mx-auto px-6 pt-7 pb-6 grid grid-cols-[1fr_300px] gap-6 items-center">
          {/* Left: NAP centered */}
          <div className="text-center">
            <div className="flex gap-2 mb-2 flex-wrap justify-center">
              {listing.is_featured && (
                <span className="bg-green-50 text-green-700 border border-green-300 text-xs px-2.5 py-0.5 rounded-full font-medium">
                  ✓ Verified Featured Listing
                </span>
              )}
              {!listing.is_featured && (
                <span className="bg-green-50 text-green-700 border border-green-300 text-xs px-2.5 py-0.5 rounded-full font-medium">
                  ✓ Verified
                </span>
              )}
            </div>
            <h1 className="text-[22px] font-bold text-[#1a1a2e] mb-1.5">
              {listing.business_name}
            </h1>
            <p className="text-xs text-gray-500 mb-2">
              📍 {fullAddress}
            </p>
            <div className="flex items-center gap-1.5 mb-2 justify-center">
              <span className="text-amber-400 text-sm">★★★★★</span>
              <span className="text-xs text-gray-500">
                <a href={`https://www.google.com/search?q=${encodeURIComponent(listing.business_name + ' ' + listing.city + ' ' + listing.state)}+reviews`} target="_blank" rel="noopener noreferrer" className="text-[#2a6496] no-underline">
                  See reviews on Google
                </a>
              </span>
            </div>
            <div className="flex gap-2 flex-wrap mt-2 justify-center">
              {listing.special_features && (
                <span className="bg-slate-100 text-gray-500 text-xs px-2.5 py-1 rounded-full">
                  {listing.special_features.split(',')[0]?.trim()}
                </span>
              )}
              <span className="bg-slate-100 text-gray-500 text-xs px-2.5 py-1 rounded-full">
                Open 24 hours
              </span>
            </div>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col gap-2.5 items-stretch">
            {listing.website && (
              <a
                href={listing.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1a1a2e] border-[1.5px] border-[#1a1a2e] px-5 py-2 rounded-md text-xs font-semibold text-center no-underline block"
              >
                Visit Website
              </a>
            )}
            <p className="text-center text-[11px] text-green-700 font-medium">
              ● Open 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Main two-column layout */}
      <div className="max-w-[1100px] mx-auto p-6 grid grid-cols-[1fr_300px] gap-6">

        {/* Left column */}
        <div>

          {/* All sections rendered vertically */}
          <div className="bg-white rounded-[10px] border border-gray-200 overflow-hidden mb-5"
            dangerouslySetInnerHTML={{ __html: buildSectionsHtml(listing, services, calcId, hasPricing, cityLabel) }}
          />
        </div>

        {/* Right sidebar */}
        <div>

          {/* Get in touch card */}
          <div id="tab-contact" className="bg-white rounded-[10px] border border-gray-200 mb-4 overflow-hidden">
            <ContactForm listing={listing} calcId={calcId} />
          </div>

          {/* Helpful resources */}
          <div className="bg-white rounded-[10px] border border-gray-200 p-4 mb-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Helpful Planning Resources
            </p>
            <ul className="list-none m-0 p-0">
              <li className="py-2 border-b border-gray-100">
                <Link href="/blog/how-to-plan-a-funeral" className="text-[#2a6496] no-underline text-sm">
                  How to Plan a Funeral: A Step-by-Step Guide
                </Link>
              </li>
              <li className="py-2 border-b border-gray-100">
                <Link href="/blog/funeral-costs-2026" className="text-[#2a6496] no-underline text-sm">
                  How Much Does a Funeral Cost in 2026?
                </Link>
              </li>
              <li className="py-2">
                <Link href="/blog/what-to-do-when-someone-dies" className="text-[#2a6496] no-underline text-sm">
                  What to Do When Someone Dies
                </Link>
              </li>
            </ul>
          </div>

          {/* Nearby funeral homes */}
          {nearby.length > 0 && (
            <div className="bg-white rounded-[10px] border border-gray-200 p-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Nearby funeral homes
              </p>
              <ul className="list-none m-0 p-0">
                {nearby.map((n) => (
                  <li key={n.id} className="py-2.5 border-b border-gray-100">
                    <Link
                      href={`/funeral-homes/${stateSlug(n.state)}/${citySlug(n.city)}/${slugify(n.business_name)}`}
                      className="text-[#2a6496] no-underline text-sm"
                    >
                      {n.business_name}
                    </Link>
                    <br />
                    <span className="text-xs text-gray-400">
                      {approxDistanceMiles(listing, n)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Call button - below contact form */}
      {listing.phone && (
        <div className="max-w-[1100px] mx-auto px-6 pb-6">
          <a
            href={`tel:${listing.phone.replace(/\D/g, '')}`}
            className="bg-[#1a1a2e] text-white border-none px-5 py-3 rounded-md text-sm font-semibold text-center no-underline block max-w-[400px]"
          >
            📞 Call {listing.phone}
          </a>
        </div>
      )}

      {/* Calculator script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
const _prices_${calcId} = {
  basic:2690,transport:395,viewing:495,ceremony:495,
  graveside:395,hearse:295,embalm:750,directcrem:${parsePrice(listing.price_range_cremation, 1595)},
  directbur:${parsePrice(listing.price_range_burial, 2500)},casket:2495,urn:295,burial:1395
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

      {/* Contact form toggle, preference selector */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
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
  var btn = document.getElementById('contact-btn-' + id);
  if (!form) return;
  var name = document.getElementById('contact-name-' + id);
  var phone = document.getElementById('contact-phone-' + id);
  var email = document.getElementById('contact-email-' + id);
  var msg = document.getElementById('contact-message-' + id);
  var home = document.getElementById('contact-home-' + id);
  var nameVal = name ? name.value.trim() : '';
  if (!nameVal) { if (name) name.style.border = '1px solid #e53e3e'; return; }
  if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; btn.style.background = '#7aa5c4'; }
  var activePref = document.querySelector('[id^="pref-"][style*="solid #2a6496"]');
  var prefVal = activePref ? activePref.id.replace('pref-','').replace('-' + id,'') : 'text';
  var timeline = document.getElementById('contact-timeline-' + id);
  var budget = document.getElementById('contact-budget-' + id);
  var zip = document.getElementById('contact-zip-' + id);
  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: nameVal,
      phone: phone ? phone.value : '',
      email: email ? email.value : '',
      message: msg ? msg.value : '',
      preference: prefVal,
      timeline: timeline ? timeline.value : '',
      budget: budget ? budget.value : '',
      zip: zip ? zip.value : '',
      funeralHomeName: home ? home.value : '',
      city: document.getElementById('contact-city-' + id) ? document.getElementById('contact-city-' + id).value : '',
      state: document.getElementById('contact-state-' + id) ? document.getElementById('contact-state-' + id).value : ''
    })
  }).then(function(res) {
    if (res.ok) {
      form.innerHTML = '<div style="padding:24px;text-align:center;"><div style="font-size:28px;margin-bottom:10px;">✓</div><div style="font-size:1rem;font-weight:700;color:#2e7d32;margin-bottom:6px;">Message sent</div><div style="font-size:1rem;color:#555;line-height:1.6;">This funeral home has your contact info and will reach out your preferred way. You can also call them directly anytime.</div></div>';
    } else {
      if (btn) { btn.textContent = 'Retry →'; btn.disabled = false; btn.style.background = '#e53e3e'; }
    }
  }).catch(function() {
    if (btn) { btn.textContent = 'Retry →'; btn.disabled = false; btn.style.background = '#e53e3e'; }
  });
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
  const escapedName = listing.business_name.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  const escapedCity = listing.city.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  const escapedState = listing.state.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div id="contact-form-${calcId}" style="padding:16px;">
  <div style="font-size:1rem;font-weight:700;color:#1a1a2e;margin-bottom:2px;">Contact ${shortName}</div>
  <div style="font-size:1rem;color:#777;margin-bottom:12px;">How would you like them to reach you?</div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:12px;">
    <label id="pref-call-${calcId}" onclick="selectPref('call','${calcId}')" style="border:1.5px solid #d0d9e5;border-radius:8px;padding:10px 6px;text-align:center;cursor:pointer;font-size:1rem;color:#374151;background:#fff;">
      <div style="font-size:1.25rem;margin-bottom:4px;">📞</div><div style="font-weight:600;">Call me</div><div style="font-size:10px;color:#9ca3af;margin-top:2px;">Within the hour</div>
    </label>
    <label id="pref-text-${calcId}" onclick="selectPref('text','${calcId}')" style="border:1.5px solid #2a6496;border-radius:8px;padding:10px 6px;text-align:center;cursor:pointer;font-size:1rem;color:#374151;background:#f0f6ff;">
      <div style="font-size:1.25rem;margin-bottom:4px;">💬</div><div style="font-weight:600;">Text me</div><div style="font-size:10px;color:#9ca3af;margin-top:2px;">Reply when ready</div>
    </label>
    <label id="pref-email-${calcId}" onclick="selectPref('email','${calcId}')" style="border:1.5px solid #d0d9e5;border-radius:8px;padding:10px 6px;text-align:center;cursor:pointer;font-size:1rem;color:#374151;background:#fff;">
      <div style="font-size:1.25rem;margin-bottom:4px;">✉️</div><div style="font-weight:600;">Email me</div><div style="font-size:10px;color:#9ca3af;margin-top:2px;">No pressure</div>
    </label>
  </div>
  <input id="contact-name-${calcId}" type="text" placeholder="Your name" style="width:100%;padding:9px 10px;font-size:1rem;border:1px solid #94a3b8;border-radius:6px;margin-bottom:8px;display:block;box-sizing:border-box;color:#1a1a2e;" />
  <div id="field-phone-${calcId}">
    <input id="contact-phone-${calcId}" type="tel" placeholder="Best phone number" style="width:100%;padding:9px 10px;font-size:1rem;border:1px solid #94a3b8;border-radius:6px;margin-bottom:8px;display:block;box-sizing:border-box;color:#1a1a2e;" />
  </div>
  <div id="field-email-${calcId}" style="display:none;">
    <input id="contact-email-${calcId}" type="email" placeholder="Your email address" style="width:100%;padding:9px 10px;font-size:1rem;border:1px solid #94a3b8;border-radius:6px;margin-bottom:8px;display:block;box-sizing:border-box;color:#1a1a2e;" />
  </div>
  <label for="contact-timeline-${calcId}" style="display:block;font-size:0.875rem;font-weight:600;color:#374151;margin-bottom:4px;">Timeline</label>
  <select id="contact-timeline-${calcId}" style="width:100%;padding:9px 10px;font-size:1rem;border:1px solid #94a3b8;border-radius:6px;margin-bottom:8px;display:block;box-sizing:border-box;color:#1a1a2e;background:#fff;">
    <option value="">Select timeline...</option>
    <option value="immediate">Immediate need (within 24-48 hours)</option>
    <option value="week">Within the next week</option>
    <option value="month">Within the next month</option>
    <option value="preplanning">Pre-planning for the future</option>
  </select>
  <label for="contact-budget-${calcId}" style="display:block;font-size:0.875rem;font-weight:600;color:#374151;margin-bottom:4px;">Budget</label>
  <select id="contact-budget-${calcId}" style="width:100%;padding:9px 10px;font-size:1rem;border:1px solid #94a3b8;border-radius:6px;margin-bottom:8px;display:block;box-sizing:border-box;color:#1a1a2e;background:#fff;">
    <option value="">Select budget range...</option>
    <option value="under5k">Under $5,000</option>
    <option value="5k-10k">$5,000 to $10,000</option>
    <option value="10k-15k">$10,000 to $15,000</option>
    <option value="15k+">$15,000 or more</option>
    <option value="unsure">Not sure yet</option>
  </select>
  <label for="contact-zip-${calcId}" style="display:block;font-size:0.875rem;font-weight:600;color:#374151;margin-bottom:4px;">ZIP code</label>
  <input id="contact-zip-${calcId}" type="text" placeholder="Your ZIP code" maxlength="5" style="width:100%;padding:9px 10px;font-size:1rem;border:1px solid #94a3b8;border-radius:6px;margin-bottom:8px;display:block;box-sizing:border-box;color:#1a1a2e;" />
  <textarea id="contact-message-${calcId}" placeholder="Tell us about your needs (optional)" rows="3" style="width:100%;padding:9px 10px;font-size:1rem;border:1px solid #94a3b8;border-radius:6px;margin-bottom:8px;display:block;box-sizing:border-box;resize:vertical;font-family:inherit;color:#1a1a2e;"></textarea>
  <input type="hidden" id="contact-home-${calcId}" value="${escapedName}" />
  <input type="hidden" id="contact-city-${calcId}" value="${escapedCity}" />
  <input type="hidden" id="contact-state-${calcId}" value="${escapedState}" />
  <button id="contact-btn-${calcId}" onclick="submitContact('${calcId}')" style="width:100%;padding:11px;background:#2a6496;color:#fff;border:none;border-radius:6px;font-size:1rem;font-weight:700;cursor:pointer;">Send my request</button>
  <p style="font-size:11px;color:#9ca3af;margin-top:8px;text-align:center;line-height:1.5;">Goes directly to ${firstName}. We never share your info.</p>
</div>
` }} />
  )
}
