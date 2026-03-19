'use client'

import { useState } from 'react'

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
  image: string | null
  is_featured: boolean | null
  latitude: string | null
  longitude: string | null
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

// ─── Tab section ──────────────────────────────────────────────────────────────
export function TabSection({ listing, services }: { listing: FuneralHome; services: string[] }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'photos' | 'location'>('overview')

  const fullAddr = [listing.address, listing.city, listing.state, listing.zip].filter(Boolean).join(', ')

  const tabStyle = (tab: string) => ({
    padding: '14px 20px',
    fontSize: 14,
    color: activeTab === tab ? '#1a1a2e' : '#888',
    background: 'none' as const,
    border: 'none' as const,
    borderBottom: activeTab === tab ? '2px solid #1a1a2e' : '2px solid transparent',
    marginBottom: -2,
    fontWeight: 500,
    cursor: 'pointer' as const,
  })

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '2px solid #e5e5e5' }}>
        <button style={tabStyle('overview')} onClick={() => setActiveTab('overview')}>Overview</button>
        <button style={tabStyle('reviews')} onClick={() => setActiveTab('reviews')}>Reviews</button>
        <button style={tabStyle('photos')} onClick={() => setActiveTab('photos')}>
          Photos{listing.image ? ' (1)' : ''}
        </button>
        <button style={tabStyle('location')} onClick={() => setActiveTab('location')}>Location</button>
      </div>

      <div style={{ padding: 20 }}>
        {activeTab === 'overview' && (
          <div>
            <p style={{ fontSize: 15, color: '#444', lineHeight: 1.7, marginBottom: 20 }}>
              {listing.business_name} is a funeral home serving families in {listing.city}, {listing.state}.
              {listing.special_features ? ` ${listing.special_features}.` : ''}
              {' '}Our directory is committed to helping families find compassionate, professional care during
              one of life&apos;s most difficult moments.
            </p>
            {services.length > 0 && (
              <>
                <p style={{ fontSize: 11, fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
                  Services offered
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {services.map((s) => (
                    <span key={s} style={{ background: '#f0f4f8', color: '#1a1a2e', fontSize: 13, padding: '6px 14px', borderRadius: 6, border: '1px solid #dde5ef' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <p style={{ fontSize: 13, color: '#888', marginBottom: 16 }}>
              Reviews are sourced from Google. Visit the funeral home&apos;s Google listing to read and leave reviews.
            </p>
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(listing.business_name + ' ' + listing.city + ' ' + listing.state + ' reviews')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2a6496', fontSize: 14, textDecoration: 'none' }}
            >
              See reviews on Google →
            </a>
          </div>
        )}

        {activeTab === 'photos' && (
          <div>
            {listing.image ? (
              <div>
                <div style={{ background: '#e8edf2', borderRadius: 8, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: 14, marginBottom: 12 }}>
                  📷 {listing.business_name}
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
        )}

        {activeTab === 'location' && (
          <div>
            <div style={{ background: '#e8edf2', borderRadius: 8, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: 14, marginBottom: 14 }}>
              📍 {fullAddr}
            </div>
            <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8 }}>
              <strong>{listing.business_name}</strong><br />
              {fullAddr}<br /><br />
            </p>
            {listing.phone && (
              <p style={{ marginBottom: 8 }}>
                <a href={`tel:${listing.phone.replace(/\D/g, '')}`} style={{ color: '#2a6496', fontSize: 14 }}>{listing.phone}</a>
              </p>
            )}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(fullAddr)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2a6496', fontSize: 14, textDecoration: 'none' }}
            >
              Get directions →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Cost Calculator ──────────────────────────────────────────────────────────
export function CostCalculator({ listing, cityLabel }: { listing: FuneralHome; cityLabel: string }) {
  const hasPricing = !!(listing.price_range_cremation || listing.price_range_burial)
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(CALC_ITEMS.map((i) => [i.id, i.defaultOn]))
  )

  const total = CALC_ITEMS
    .filter((i) => checked[i.id])
    .reduce((sum, i) => sum + i.price, 0)

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e5e5e5', overflow: 'hidden' }}>
      <div style={{ padding: '14px 20px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e' }}>Estimate your funeral cost</div>
          <div style={{ fontSize: 12, color: '#999', marginTop: 2 }}>Select services below. Total updates instantly.</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, color: '#999', marginBottom: 2 }}>Estimated total</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#1a1a2e' }}>${total.toLocaleString()}</div>
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
                      checked={checked[item.id]}
                      disabled={item.required}
                      onChange={() => toggle(item.id)}
                      style={{ width: 15, height: 15, accentColor: '#2a6496', cursor: item.required ? 'default' : 'pointer' }}
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
              Prices are estimated from this funeral home&apos;s General Price List. Cash advance items
              (cemetery fees, death certificates, obituaries) not included. Always request the current GPL
              before making arrangements.
            </p>
          </div>
        </div>
      ) : (
        <div style={{ padding: 20 }}>
          <div style={{ background: '#fff8e1', border: '1px solid #fcd34d', borderRadius: 8, padding: 14, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#92400e', marginBottom: 4 }}>Pricing not published</div>
            <div style={{ fontSize: 13, color: '#78350f' }}>
              This funeral home has not published prices online. Call directly to request their General Price List,
              which all funeral homes are required to provide upon request.
            </div>
          </div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
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
  )
}

// ─── Contact Form (sidebar) ───────────────────────────────────────────────────
type ContactPref = 'call' | 'text' | 'email'

export function ContactForm({ listing }: { listing: FuneralHome }) {
  const [open, setOpen] = useState(false)
  const [pref, setPref] = useState<ContactPref>('text')
  const [sent, setSent] = useState(false)

  const prefStyle = (p: ContactPref) => ({
    border: pref === p ? '1.5px solid #2a6496' : '1.5px solid #d0d9e5',
    borderRadius: 8,
    padding: '10px 6px',
    textAlign: 'center' as const,
    cursor: 'pointer' as const,
    fontSize: 12,
    color: '#444',
    background: pref === p ? '#f0f6ff' : '#fff',
  })

  if (sent) {
    return (
      <div style={{ padding: 24, textAlign: 'center' }}>
        <div style={{ fontSize: 28, marginBottom: 10 }}>✓</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#2e7d32', marginBottom: 6 }}>Message sent</div>
        <div style={{ fontSize: 13, color: '#555', lineHeight: 1.6 }}>
          This funeral home has your contact info and will reach out your preferred way.
          You can also call them directly anytime.
        </div>
      </div>
    )
  }

  return (
    <div>
      {!open ? (
        <div onClick={() => setOpen(true)} style={{ cursor: 'pointer', padding: 16 }}>
          <div style={{ background: '#f0f6ff', border: '1.5px solid #c2d9f5', borderRadius: 10, padding: '14px 16px' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e', marginBottom: 4 }}>💬 Get in touch today</div>
            <div style={{ fontSize: 12, color: '#555', lineHeight: 1.5 }}>Choose how you want to hear back. Call, text, or email.</div>
            <div style={{ marginTop: 10, background: '#2a6496', color: '#fff', borderRadius: 6, padding: '9px 14px', fontSize: 13, fontWeight: 700, textAlign: 'center' }}>
              Contact this funeral home →
            </div>
          </div>
        </div>
      ) : (
        <div style={{ padding: '0 16px 16px' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e', marginBottom: 2, paddingTop: 16 }}>
            Contact {listing.business_name.split(' ').slice(0, 2).join(' ')}
          </div>
          <div style={{ fontSize: 12, color: '#777', marginBottom: 12 }}>How would you like them to reach you?</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginBottom: 12 }}>
            <label style={prefStyle('call')} onClick={() => setPref('call')}>
              <div style={{ fontSize: 18, marginBottom: 4 }}>📞</div>
              <div style={{ fontWeight: 600 }}>Call me</div>
              <div style={{ fontSize: 10, color: '#888', marginTop: 2 }}>Within the hour</div>
            </label>
            <label style={prefStyle('text')} onClick={() => setPref('text')}>
              <div style={{ fontSize: 18, marginBottom: 4 }}>💬</div>
              <div style={{ fontWeight: 600 }}>Text me</div>
              <div style={{ fontSize: 10, color: '#888', marginTop: 2 }}>Reply when ready</div>
            </label>
            <label style={prefStyle('email')} onClick={() => setPref('email')}>
              <div style={{ fontSize: 18, marginBottom: 4 }}>✉️</div>
              <div style={{ fontWeight: 600 }}>Email me</div>
              <div style={{ fontSize: 10, color: '#888', marginTop: 2 }}>No pressure</div>
            </label>
          </div>

          <input
            type="text"
            placeholder="Your name"
            style={{ width: '100%', padding: '9px 10px', fontSize: 13, border: '1px solid #d0d9e5', borderRadius: 6, marginBottom: 8, display: 'block', boxSizing: 'border-box' }}
          />
          {pref === 'email' ? (
            <input
              type="email"
              placeholder="Your email address"
              style={{ width: '100%', padding: '9px 10px', fontSize: 13, border: '1px solid #d0d9e5', borderRadius: 6, marginBottom: 8, display: 'block', boxSizing: 'border-box' }}
            />
          ) : (
            <input
              type="tel"
              placeholder="Best phone number"
              style={{ width: '100%', padding: '9px 10px', fontSize: 13, border: '1px solid #d0d9e5', borderRadius: 6, marginBottom: 8, display: 'block', boxSizing: 'border-box' }}
            />
          )}

          <select style={{ width: '100%', padding: '9px 10px', fontSize: 13, border: '1px solid #d0d9e5', borderRadius: 6, marginBottom: 10, color: '#444', boxSizing: 'border-box', background: '#fff' }}>
            <option value="now">We need services now</option>
            <option value="soon">Planning within the next few days</option>
            <option value="pricing">Just getting pricing information</option>
            <option value="preplanning">Pre-planning for the future</option>
          </select>

          <button
            onClick={() => setSent(true)}
            style={{ width: '100%', padding: 11, background: '#2a6496', color: '#fff', border: 'none', borderRadius: 6, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
          >
            Send →
          </button>
          <p style={{ fontSize: 11, color: '#999', marginTop: 8, textAlign: 'center', lineHeight: 1.5 }}>
            Goes directly to {listing.business_name.split(' ')[0]}. We never share your info.
          </p>
        </div>
      )}
    </div>
  )
}
