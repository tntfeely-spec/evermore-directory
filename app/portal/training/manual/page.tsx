'use client'

import PortalLayout from '@/components/PortalLayout'
import { useState } from 'react'

function EmailTemplate({ title, subject, body }: { title: string; subject: string; body: string }) {
  const [copied, setCopied] = useState(false)
  const fullText = `Subject: ${subject}\n\n${body}`
  function copy() {
    navigator.clipboard.writeText(fullText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <button onClick={copy} className="text-xs text-slate-600 hover:text-slate-800 font-medium px-3 py-1 border border-gray-200 rounded-md">
          {copied ? '\u2713 Copied' : 'Copy'}
        </button>
      </div>
      <div className="bg-gray-50 rounded-md p-4 text-sm font-mono whitespace-pre-wrap text-gray-700">
        <div className="text-gray-500 mb-2">Subject: {subject}</div>
        {body}
      </div>
    </div>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-100 border-l-4 border-slate-600 px-4 py-4 my-6 italic text-gray-700 text-sm leading-relaxed">
      {children}
    </div>
  )
}

export default function TrainingManualPage() {
  return (
    <PortalLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Training Manual v3</h1>
          <p className="text-sm text-gray-500 mt-1">Evermore Funeral Home Directory</p>
        </div>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 print:hidden"
        >
          Download as PDF
        </button>
      </div>

      <div className="space-y-10 text-gray-800 leading-relaxed">

        {/* ── Section 1 ──────────────────────────────────────────────── */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Section 1: Welcome and Overview</h2>

          <p className="mb-4">Welcome to the Evermore sales team. This manual gives you everything you need to start making calls and closing deals today.</p>

          <p className="mb-4">Evermore Funeral Home Directory (funeralhomedirectories.com) is a nationwide directory of 4,800+ funeral homes across all 50 states. Every funeral home already has a free listing live on the site. Your job is to call them, tell them their listing exists, and offer them an upgrade to a paid Featured Listing.</p>

          <Callout>This is not a cold pitch. Every prospect already has a free listing on the site. You are calling to tell them something they did not know and offer them a chance to be first in their city.</Callout>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">The Acknowledge, Reframe, Close Framework</h3>

          <p className="mb-4">Every objection you will ever hear can be handled with three steps.</p>

          <ul className="list-none space-y-3 mb-4">
            <li><strong className="text-gray-900">Acknowledge:</strong> Show them you heard them. Never argue or push back immediately.</li>
            <li><strong className="text-gray-900">Reframe:</strong> Shift their perspective with one sentence that changes how they see the situation.</li>
            <li><strong className="text-gray-900">Close:</strong> Ask a yes or no question that moves things forward.</li>
          </ul>

          <p className="mb-2"><strong>Example:</strong> They say cost is too high.</p>
          <ul className="list-none space-y-1 mb-4 text-sm">
            <li><strong>Acknowledge:</strong> I understand, $79 a month is real money.</li>
            <li><strong>Reframe:</strong> One family that finds you through the directory covers that cost many times over.</li>
            <li><strong>Close:</strong> Would it be worth a try for one month to see what happens?</li>
          </ul>

          <Callout>Master this framework and every script in this manual will make sense. It is the pattern behind every response.</Callout>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">The Two-Call Strategy</h3>

          <p className="mb-4">Do not expect to close on the first call every time. A two-call close is completely normal and often produces better results.</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Call one goal:</strong> introduce the listing, create curiosity, get permission to call back.</li>
            <li><strong>Call two goal:</strong> follow up, answer questions, close.</li>
          </ul>

          <p>Funeral homes are relationship businesses. The owner has to trust you before they hand over a credit card. A rep who calls back when they said they would builds more trust than one who pushes for a same-call close every time.</p>
        </section>

        {/* ── Section 2 ──────────────────────────────────────────────── */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Section 2: The Product and Pricing</h2>

          <p className="mb-4">Evermore offers four listing tiers. Every funeral home starts with a free listing. You are selling the upgrade.</p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Feature</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Free</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Essential</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Premier</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Exclusive</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-3 py-2">Monthly Price</td><td className="border border-gray-200 px-3 py-2">Free</td><td className="border border-gray-200 px-3 py-2">$79/mo</td><td className="border border-gray-200 px-3 py-2">$149/mo</td><td className="border border-gray-200 px-3 py-2">$449/mo</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">Annual Price</td><td className="border border-gray-200 px-3 py-2">Free</td><td className="border border-gray-200 px-3 py-2">$749/yr</td><td className="border border-gray-200 px-3 py-2">$1,399/yr</td><td className="border border-gray-200 px-3 py-2">$4,699/yr</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">Annual Savings</td><td className="border border-gray-200 px-3 py-2"></td><td className="border border-gray-200 px-3 py-2">Save $199</td><td className="border border-gray-200 px-3 py-2">Save $389</td><td className="border border-gray-200 px-3 py-2">Save $689</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">Featured badge + top of city page</td><td className="border border-gray-200 px-3 py-2"></td><td className="border border-gray-200 px-3 py-2">Yes</td><td className="border border-gray-200 px-3 py-2">Yes</td><td className="border border-gray-200 px-3 py-2">Yes</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">Enhanced listing + photos</td><td className="border border-gray-200 px-3 py-2"></td><td className="border border-gray-200 px-3 py-2"></td><td className="border border-gray-200 px-3 py-2">Yes</td><td className="border border-gray-200 px-3 py-2">Yes</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">Individual listing page</td><td className="border border-gray-200 px-3 py-2"></td><td className="border border-gray-200 px-3 py-2"></td><td className="border border-gray-200 px-3 py-2"></td><td className="border border-gray-200 px-3 py-2">Yes</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">Exclusive city placement</td><td className="border border-gray-200 px-3 py-2"></td><td className="border border-gray-200 px-3 py-2"></td><td className="border border-gray-200 px-3 py-2"></td><td className="border border-gray-200 px-3 py-2">1 per city</td></tr>
              </tbody>
            </table>
          </div>

          <Callout>The Exclusive tier is your best close. One slot per city. When a competitor claims it, it is gone. That scarcity is your most powerful closing tool.</Callout>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Your Commission</h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Tier</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Monthly Rate</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Monthly Earned</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Annual Rate</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Annual Earned</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-3 py-2">Essential</td><td className="border border-gray-200 px-3 py-2">20%</td><td className="border border-gray-200 px-3 py-2">$15.80/mo</td><td className="border border-gray-200 px-3 py-2">25%</td><td className="border border-gray-200 px-3 py-2">$187.25</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">Premier</td><td className="border border-gray-200 px-3 py-2">20%</td><td className="border border-gray-200 px-3 py-2">$29.80/mo</td><td className="border border-gray-200 px-3 py-2">25%</td><td className="border border-gray-200 px-3 py-2">$349.75</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">Exclusive</td><td className="border border-gray-200 px-3 py-2">25%</td><td className="border border-gray-200 px-3 py-2">$112.25/mo</td><td className="border border-gray-200 px-3 py-2">30%</td><td className="border border-gray-200 px-3 py-2">$1,409.70</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">Exclusive (10+)</td><td className="border border-gray-200 px-3 py-2">25%</td><td className="border border-gray-200 px-3 py-2">$112.25/mo</td><td className="border border-gray-200 px-3 py-2">33%</td><td className="border border-gray-200 px-3 py-2">$1,550.67</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">Exclusive (20+)</td><td className="border border-gray-200 px-3 py-2">25%</td><td className="border border-gray-200 px-3 py-2">$112.25/mo</td><td className="border border-gray-200 px-3 py-2">35%</td><td className="border border-gray-200 px-3 py-2">$1,644.65</td></tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">Monthly commissions are recurring. Annual commissions are paid in full immediately on confirmed payment. No clawbacks if the customer cancels after year one.</p>

          <Callout>Performance kicker: Close 10 Exclusive annual deals and your Exclusive annual rate increases to 33%. Close 20 Exclusive annual deals in 12 months and it increases to 35% permanently.</Callout>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Your First 30-Day Target</h3>

          <p className="mb-4">Do not focus on annual earnings tables. Focus on this: close 1 to 3 deals in your first 30 days. That is a realistic, achievable win that builds momentum.</p>

          <p>A rep making 20 calls a day will have 400 calls in 30 days. At a 1% close rate that is 4 closes. At 2% that is 8. The numbers work. Keep your call count up.</p>
        </section>

        {/* ── Section 3 ──────────────────────────────────────────────── */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Section 3: The ROI Pitch</h2>

          <p className="mb-4">The ROI math is what separates this sale from most B2B pitches. You do not need to convince them they need online visibility. Just show them the numbers.</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>The average funeral service costs $7,000 to $12,000.</li>
            <li>Essential at $749/year: one family referral covers the cost 9 to 16 times over.</li>
            <li>Premier at $1,399/year: one family referral covers the cost 5 to 9 times over.</li>
            <li>Exclusive at $4,699/year: one family referral covers the cost more than once.</li>
          </ul>

          <Callout>One sentence closes this: &ldquo;One family that finds you through the directory covers this cost many times over.&rdquo; Practice saying it until it sounds natural.</Callout>
        </section>

        {/* ── Section 4 ──────────────────────────────────────────────── */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Section 4: Before You Call</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">Step 1: Look Up Their Listing</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Go to funeralhomedirectories.com</li>
            <li>Search the funeral home name or city</li>
            <li>Find their listing and note the URL</li>
            <li>Know what their free listing looks like before you dial</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 2: Check Their Google Presence</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Google the funeral home name</li>
            <li>Note how many Google reviews they have</li>
            <li>Funeral homes with few reviews or limited online presence need visibility most and are your best prospects</li>
            <li>Funeral homes with strong Google presence are still worth calling because Exclusive city placement is something Google cannot replicate</li>
          </ul>
        </section>

        {/* ── Section 5 ──────────────────────────────────────────────── */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Section 5: The Call Scripts</h2>

          <p className="mb-6">These scripts are starting points, not rigid scripts. Learn the structure, then make it your own. The best reps sound like themselves, not like they are reading.</p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Script A: Standard Opening Call</h3>
          <div className="bg-gray-50 rounded-md p-4 mb-4 text-sm">
            &ldquo;Hi, is this [Owner Name]? My name is [Your Name] and I am calling about [Business Name]&apos;s listing on Evermore Funeral Home Directory. Your funeral home is already listed on our site and families in [City] are finding it right now when they search on Google. I wanted to reach out because we have a featured listing option that puts you at the top of your city page. It is $79 a month, and honestly one family that finds you through the directory more than covers that. Is that something you would want to take a look at?&rdquo;
          </div>

          <Callout>
            <strong>The Silence Rule:</strong> After you ask the closing question, stop talking. The next person who speaks loses. Most reps cannot handle five seconds of silence and fill it themselves, which kills the close. Ask the question. Put the pen down. Wait. Let them answer.
          </Callout>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Script B: Voicemail</h3>
          <div className="bg-gray-50 rounded-md p-4 mb-6 text-sm">
            &ldquo;Hi, this is [Your Name] calling for [Owner Name] at [Business Name]. I am reaching out because your funeral home is already listed on Evermore Funeral Home Directory and I wanted to let you know families in [City] are finding it on Google. I have a quick question about your listing. You can reach me at [Your Number]. I will also try you again [specific day]. Thanks.&rdquo;
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Script C: Second Call / Follow-Up</h3>
          <div className="bg-gray-50 rounded-md p-4 mb-6 text-sm">
            &ldquo;Hi [Owner Name], this is [Your Name] calling back as promised. I wanted to follow up on our conversation about your listing on Evermore Funeral Home Directory. Have you had a chance to pull it up? [Pause.] The reason I wanted to reconnect is that the featured listing puts you at the top of the page when families in [City] are searching right now. A lot of funeral homes in other cities have already claimed their spot. I can get you set up today if you want to move forward. Should I send you the link?&rdquo;
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Script D: Gatekeeper</h3>
          <div className="bg-gray-50 rounded-md p-4 text-sm">
            &ldquo;Hi, I am calling for the owner or manager regarding your funeral home&apos;s listing on Evermore Directory. It is a quick call about something that is already live on your listing. Is [Owner Name] available?&rdquo;
          </div>
        </section>

        {/* ── Section 5B: Email Templates ────────────────────────────── */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Section 5B: Email Templates</h2>
          <p className="mb-6">Copy these templates and personalize the bracketed fields. Each has a copy button.</p>

          <EmailTemplate title="Email 1: Cold Outreach" subject="Your [City] funeral home listing on Evermore" body={`Hi [First Name],

[Business Name] is already listed on Evermore Funeral Home Directory at funeralhomedirectories.com. Families in [City] are finding your listing right now when they search Google.

I wanted to reach out because we have a featured listing option that puts you at the top of your city page. It is $749 for the year. One family covers that cost many times over.

Your listing is live here: [listing URL]

Would you want to take a look at the upgrade? I can send you the link now.

[Your Name]`} />

          <EmailTemplate title="Email 2: Follow-Up (no response)" subject="Re: Your [City] funeral home listing" body={`Hi [First Name],

Just following up on my note from [X] days ago about your Evermore listing.

Your funeral home is still showing up in Google searches for families in [City]. The featured spot at the top of your city page is still available.

Happy to answer any questions. Just reply here or call me at [Your Number].

[Your Name]`} />

          <EmailTemplate title="Email 3: Breakup" subject="Last note about your Evermore listing" body={`Hi [First Name],

I will not keep following up after this. If the timing is ever right to talk about getting your listing featured, I am here.

Your free listing stays live regardless.

[Your Name]`} />
        </section>

        {/* ── Section 6 ──────────────────────────────────────────────── */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Section 6: Objection Handling</h2>

          <p className="mb-6">Use the Acknowledge, Reframe, Close framework on every objection.</p>

          {[
            { q: '"We already have a website."', a: 'Their site and the Evermore listing work independently. Families searching Google may find Evermore before they find the funeral home\'s own website. This is a second door for families to find them, not a replacement for what they already have.' },
            { q: '"We don\'t need more visibility."', a: 'You are not selling visibility in the abstract. Their listing is already live and already showing up in Google searches. The upgrade puts them at the top of that page instead of in the middle of it.' },
            { q: '"What\'s the cost?"', a: 'Lead with annual. Essential is $749 for the year, which is $62 a month. One family referral covers it. Would you like to start with monthly while you see how it performs?' },
            { q: '"We tried something like this and it didn\'t work."', a: '"What were you using?" (Listen.) The difference with Evermore is that your listing is already live and already indexed. Pull up funeralhomedirectories.com right now and search your city. Your listing is there. Families are already finding it.' },
            { q: '"I need to think about it."', a: 'Absolutely, take all the time you need. When would be a good time to follow up? I will call you back exactly when you say.' },
            { q: '"Is there a contract?"', a: 'No long-term contract. Monthly plans cancel anytime. Annual plans are paid upfront and you save about 20% compared to monthly, but there is no obligation beyond that first year. No clawbacks, no gotchas.' },
            { q: '"What if I\'m already a featured listing?"', a: 'Thank them. If they are on Essential or Premier, pitch the Exclusive tier: it gives them a dedicated individual listing page and the only featured slot in their city.' },
          ].map((item, i) => (
            <div key={i} className="mb-6">
              <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </section>

        {/* ── Section 7 ──────────────────────────────────────────────── */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Section 7: Upselling Monthly to Annual</h2>

          <p className="mb-4">Most first closes will be monthly. That is fine. After 3 months on a monthly plan, call back:</p>

          <div className="bg-gray-50 rounded-md p-4 text-sm">
            &ldquo;Hey, just wanted to check in on how the listing is going. [Pause.] The annual plan would save you $[X] compared to paying monthly. I can send you the upgrade link right now if you want to lock in the savings.&rdquo;
          </div>
        </section>

        {/* ── Section 8 ──────────────────────────────────────────────── */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Section 8: Tracking Your Calls</h2>

          <p className="mb-4">After every call write down:</p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Business Name</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Date</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Result</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Email Captured</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Follow Up Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">Example Funeral Home, Nashville TN</td>
                  <td className="border border-gray-200 px-3 py-2">4/1/2026</td>
                  <td className="border border-gray-200 px-3 py-2">CB requested</td>
                  <td className="border border-gray-200 px-3 py-2">Yes</td>
                  <td className="border border-gray-200 px-3 py-2">4/3/2026</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600">Result codes: <strong>VM</strong> (voicemail), <strong>NI</strong> (not interested, door open), <strong>CB</strong> (callback requested), <strong>CLOSED</strong> (entered in portal).</p>
        </section>

        {/* ── Section 9 ──────────────────────────────────────────────── */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Section 9: Logging Your Closes</h2>

          <p className="mb-4">When a prospect agrees to move forward, go to the portal, open Log a Sale, and enter the close immediately. You will need:</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Funeral home business name</li>
            <li>Owner or contact name</li>
            <li>Email address for the payment link</li>
            <li>Tier: Essential, Premier, or Exclusive</li>
            <li>Monthly or annual</li>
            <li>City and state</li>
          </ul>

          <p>Once entered, the payment link is generated and sent through Stripe automatically. Your commission is processed within 5 business days of confirmed payment.</p>
        </section>

        {/* ── Section 10 ─────────────────────────────────────────────── */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Section 10: Mindset</h2>

          <p className="mb-4">You will hear no many times before you hear yes. That is not failure. That is the job.</p>

          <p className="mb-4">Every no is one call closer to a yes. A rep making 20 calls a day will hear no 19 times and yes once. That one yes is worth $15.80 to $112.25 a month recurring, or up to $1,409.70 on an Exclusive annual close. The math works if you keep your call count up.</p>

          <p className="mb-4">When you hit a tough stretch, go back to the basics. Did you look up the listing before calling? Did you lead with the business name? Did you pause after the pitch and let silence do the work?</p>

          <Callout>Your goal today: make 10 calls. That is it. Everything else follows from that.</Callout>

          <p className="text-xl font-bold text-gray-900 text-center mt-8">You are ready. Go make calls.</p>
        </section>

      </div>
    </PortalLayout>
  )
}
