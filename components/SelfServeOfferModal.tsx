'use client'

import { useState, useEffect } from 'react'

const SHOWN_KEY = 'evermore_offer_shown'
const DISMISSED_KEY = 'evermore_offer_dismissed'
const TIME_TRIGGER_MS = 90 * 1000

export default function SelfServeOfferModal() {
  const [show, setShow] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Suppress for rep-referred traffic
    if (typeof window === 'undefined') return
    if (window.location.search.includes('ref=')) return

    // Suppress if already shown or dismissed in this session
    if (sessionStorage.getItem(SHOWN_KEY)) return
    if (sessionStorage.getItem(DISMISSED_KEY)) return

    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return

    let triggered = false
    const trigger = () => {
      if (triggered) return
      triggered = true
      sessionStorage.setItem(SHOWN_KEY, 'true')
      setShow(true)
    }

    // Time trigger: 90 seconds
    const timer = setTimeout(trigger, TIME_TRIGGER_MS)

    // Scroll trigger: past pricing section
    const onScroll = () => {
      const pricing = document.getElementById('pricing')
      if (pricing) {
        const rect = pricing.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.5) {
          trigger()
        }
      } else {
        // Fallback: 60% scroll depth
        const scrolled = window.scrollY + window.innerHeight
        const total = document.documentElement.scrollHeight
        if (scrolled / total > 0.6) trigger()
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [enabled])

  function dismiss() {
    sessionStorage.setItem(DISMISSED_KEY, 'true')
    setShow(false)
  }

  if (!show) return null

  const monthlyHref = process.env.NEXT_PUBLIC_STRIPE_ESSENTIAL_MONTHLY || '/contact?plan=essential-monthly'
  const annualPromoHref = process.env.NEXT_PUBLIC_STRIPE_ESSENTIAL_ANNUAL_PROMO || '/contact?plan=essential-annual-promo'

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60">
      <div className="bg-white rounded-2xl shadow-2xl max-w-[480px] w-full p-8">
        {/* Headline */}
        <div className="text-center mb-5">
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Founding Member Rate
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">You found us without a referral.</h2>
          <p className="text-gray-600 text-sm">Direct sign-ups save on overhead. We pass the savings on to you.</p>
        </div>

        <p className="text-center text-gray-700 mb-6">
          Lock in your Evermore listing at our lowest rate, reserved for funeral homes who sign up directly.
        </p>

        {/* Pricing options */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Monthly */}
          <div className="border border-gray-200 rounded-xl p-4 text-center">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Monthly</div>
            <div className="text-sm text-gray-400 line-through">$79/mo</div>
            <div className="text-2xl font-bold text-gray-900">$67/mo</div>
            <div className="text-xs text-green-700 font-semibold mt-1">15% off</div>
            <div className="text-xs text-gray-500 mt-2 mb-3">Cancel anytime</div>
            <a
              href={monthlyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 px-3 rounded-lg bg-slate-700 hover:bg-slate-800 text-white text-xs font-semibold"
            >
              Start Monthly
            </a>
          </div>

          {/* Annual (highlighted) */}
          <div className="border-2 border-amber-500 bg-amber-50 rounded-xl p-4 text-center relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full whitespace-nowrap">
              Best Value
            </div>
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2 mt-1">Annual</div>
            <div className="text-sm text-gray-400 line-through">$749/yr</div>
            <div className="text-2xl font-bold text-gray-900">$524/yr</div>
            <div className="text-xs text-green-700 font-semibold mt-1">30% off — save $225</div>
            <div className="text-xs text-gray-700 mt-2 mb-3">Pay once</div>
            <a
              href={annualPromoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold"
            >
              Start Annual
            </a>
          </div>
        </div>

        {/* Small print */}
        <p className="text-center text-[11px] text-gray-500 mb-5">
          This rate is available today only. Full pricing at funeralhomedirectories.com/featured-listing.
        </p>

        {/* Dismiss link */}
        <div className="text-center">
          <button
            onClick={dismiss}
            className="text-xs text-gray-400 hover:text-gray-600 underline"
          >
            No thanks, I&apos;ll pay full price
          </button>
        </div>
      </div>
    </div>
  )
}
