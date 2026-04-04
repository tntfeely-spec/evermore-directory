'use client'

import PortalLayout from '@/components/PortalLayout'
import { useState, useEffect } from 'react'

const AGREEMENT_TEXT = `INDEPENDENT SALES CONSULTANT AGREEMENT

This Independent Sales Consultant Agreement is entered into between Colbridges Digital LLC, a Tennessee limited liability company ("Company"), and the Sales Consultant named below ("Consultant").

1. INDEPENDENT CONTRACTOR STATUS
Consultant is an independent contractor, not an employee of Company. Consultant is responsible for all taxes on commissions received including self-employment tax. Company will issue a Form 1099-NEC for any calendar year in which Consultant earns $600 or more.

2. SERVICES
Consultant will solicit funeral homes to purchase featured listings on funeralhomedirectories.com. Consultant has no authority to enter into contracts on behalf of Company or make representations beyond Company-provided materials.

3. COMMISSION COMPENSATION
- Essential or Premier Annual: 25% of collected revenue
- Essential or Premier Monthly: 20% of collected monthly revenue (recurring)
- Exclusive Annual: 30% of collected revenue
- Exclusive Monthly: 25% of collected monthly revenue (recurring)
- Performance kicker: 33% on Exclusive annual after 10 closes, 35% after 20 Exclusive annual closes in any 12-month period
Commissions paid within 5 business days of confirmed payment. No clawbacks after year one.

4. NO EMPLOYEE BENEFITS
Consultant is not entitled to health insurance, retirement plans, paid time off, or workers compensation.

5. CODE OF CONDUCT
Consultant agrees not to misrepresent the product, make guarantees about rankings or traffic, or represent themselves as an employee of Company.

6. NON-SOLICITATION
For 12 months following termination, Consultant agrees not to solicit Evermore customers to a competing funeral home directory product.

7. CONFIDENTIALITY
Consultant will keep confidential all customer lists, pricing strategies, and business information.

8. TERM AND TERMINATION
At-will. Either party may terminate with 7 days written notice. Earned commissions on confirmed payments are paid regardless of termination.

9. GOVERNING LAW
State of Tennessee.

Colbridges Digital LLC
Terry Feely, Owner — terry.feely@me.com
Brentwood, Tennessee

To receive a countersigned copy: email terry.feely@me.com with your full legal name and mailing address.`

const W9_TEXT = `W-9 — WHAT YOU NEED TO KNOW

You are required to provide a completed W-9 before your first commission payment is processed.

What is a W-9?
It tells Company your legal name and tax ID so earnings can be reported to the IRS at year end.

What to fill out:
- Line 1: Your full legal name
- Line 3: Check Individual/sole proprietor unless you have an LLC or Corp
- Lines 5-6: Your mailing address
- Part I: Social Security Number or EIN
- Part II: Sign and date

Where to get it:
Download directly from the IRS: irs.gov/pub/irs-pdf/fw9.pdf

Where to send it:
Email to terry.feely@me.com with subject: W-9 — [Your Name]

When:
Must be submitted before your first commission payment. If you earn $600 or more in a calendar year, you will receive a 1099-NEC by January 31 of the following year.

Tax tip: Keep records of all commission payments. As a self-employed contractor you may deduct phone, internet, home office, and mileage. Consult a tax professional for advice specific to your situation.`

const NEC_TEXT = `YOUR 1099-NEC — WHAT TO EXPECT

What is it?
Form 1099-NEC shows how much commission you earned in a calendar year. Company sends a copy to you and one to the IRS.

When will I receive it?
By January 31 of the year following the tax year.

What if I earn less than $600?
Company is not required to issue a 1099-NEC, but you are still required to report all self-employment income to the IRS.

Self-employment tax:
As an independent contractor you pay both the employee and employer portions of Social Security and Medicare, totaling 15.3% on net self-employment income. Most contractors set aside 25-30% of each commission payment for taxes.

Quarterly estimated taxes:
If you expect to owe $1,000 or more for the year, the IRS requires quarterly estimated tax payments due approximately April 15, June 15, September 15, and January 15. Use IRS Form 1040-ES.

Questions: terry.feely@me.com
For tax advice, consult a licensed CPA or tax professional.`

export default function DocumentsPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ agreement: true, w9: false, nec: false })
  const [agreementSigned, setAgreementSigned] = useState(false)
  const [w9Submitted, setW9Submitted] = useState(false)
  const [w9Date, setW9Date] = useState('')
  const [saving, setSaving] = useState(false)
  const [username, setUsername] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('portal_user')
    if (!stored) return
    try {
      const user = JSON.parse(stored)
      setUsername(user.username)
      fetch(`/api/portal/profile?username=${encodeURIComponent(user.username)}`)
        .then(r => r.json())
        .then(d => {
          if (d.profile?.agreement_signed) setAgreementSigned(true)
          if (d.profile?.w9_submitted) setW9Submitted(true)
        })
      fetch(`/api/portal/w9?username=${encodeURIComponent(user.username)}`)
        .then(r => r.json())
        .then(d => {
          if (d.w9) {
            setW9Submitted(true)
            setW9Date(new Date(d.w9.submitted_at).toLocaleDateString())
          }
        })
    } catch { /* ignore */ }
  }, [])

  function toggle(key: string) {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }))
  }

  async function handleAgreementCheck(checked: boolean) {
    if (!username || !checked) return
    setAgreementSigned(true)
    setSaving(true)
    try {
      await fetch('/api/portal/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, agreement_signed: true }),
      })
    } catch { /* ignore */ }
    setSaving(false)
  }

  return (
    <PortalLayout>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Documents</h1>

      {/* Document 1: Agreement */}
      <div className="bg-white rounded-lg border border-gray-200 mb-4">
        <button
          onClick={() => toggle('agreement')}
          className="w-full flex items-center justify-between px-6 py-4 text-left"
        >
          <span className="font-semibold text-gray-900">Independent Sales Consultant Agreement</span>
          <svg
            className={`h-5 w-5 text-gray-500 transition-transform ${expanded.agreement ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {expanded.agreement && (
          <div className="px-6 pb-6">
            <div className="bg-gray-50 rounded-md p-5 border border-gray-100">
              <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{AGREEMENT_TEXT}</p>
            </div>
            <label className="flex items-center gap-3 mt-4 cursor-pointer">
              <input
                type="checkbox"
                checked={agreementSigned}
                disabled={agreementSigned || saving}
                onChange={e => handleAgreementCheck(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-slate-700 focus:ring-slate-500"
              />
              <span className={`text-sm ${agreementSigned ? 'text-green-700 font-medium' : 'text-gray-700'}`}>
                {agreementSigned
                  ? 'You have agreed to the terms of this agreement.'
                  : 'I have read and agree to the terms of this agreement.'}
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Document 2: W-9 Instructions */}
      <div className="bg-white rounded-lg border border-gray-200 mb-4">
        <button
          onClick={() => toggle('w9')}
          className="w-full flex items-center justify-between px-6 py-4 text-left"
        >
          <span className="font-semibold text-gray-900">W-9 Instructions</span>
          <svg
            className={`h-5 w-5 text-gray-500 transition-transform ${expanded.w9 ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {expanded.w9 && (
          <div className="px-6 pb-6">
            {w9Submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md px-4 py-3 mb-4 flex justify-between items-center">
                <span className="text-sm text-green-700">W-9 on file. Submitted {w9Date}.</span>
                <a href="/portal/profile#w9" className="text-xs text-green-800 font-medium hover:underline">Update W-9</a>
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-200 rounded-md px-4 py-3 mb-4 flex justify-between items-center">
                <span className="text-sm text-amber-800">W-9 not yet submitted. Required before your first commission payment.</span>
                <a href="/portal/profile#w9" className="text-xs bg-slate-800 text-white px-3 py-1.5 rounded-md font-medium hover:bg-slate-900">Submit W-9 Now</a>
              </div>
            )}
            <div className="bg-gray-50 rounded-md p-5 border border-gray-100">
              <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{W9_TEXT}</p>
            </div>
          </div>
        )}
      </div>

      {/* Document 3: 1099-NEC Overview */}
      <div className="bg-white rounded-lg border border-gray-200 mb-4">
        <button
          onClick={() => toggle('nec')}
          className="w-full flex items-center justify-between px-6 py-4 text-left"
        >
          <span className="font-semibold text-gray-900">1099-NEC Overview</span>
          <svg
            className={`h-5 w-5 text-gray-500 transition-transform ${expanded.nec ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {expanded.nec && (
          <div className="px-6 pb-6">
            <div className="bg-gray-50 rounded-md p-5 border border-gray-100">
              <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{NEC_TEXT}</p>
            </div>
          </div>
        )}
      </div>
    </PortalLayout>
  )
}
