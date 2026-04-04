'use client';

import PortalLayout from '@/components/PortalLayout';

export default function QuickReferencePage() {
  return (
    <PortalLayout>
      {/* Print styles */}
      <style>{`
        @media print {
          nav, footer, button, [data-no-print] { display: none !important; }
          body { font-size: 10px !important; }
          .print-break-avoid { break-inside: avoid; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-2 py-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-sm font-bold text-gray-900">Quick Reference — Call Cheat Sheet</h1>
          <button
            data-no-print
            onClick={() => window.print()}
            className="text-xs bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition-colors"
          >
            Print
          </button>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

          {/* LEFT COLUMN */}
          <div className="space-y-3">

            {/* Pricing Table */}
            <div className="border border-gray-200 rounded bg-white p-2 print-break-avoid">
              <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Pricing</h2>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-200 text-left text-gray-500">
                    <th className="py-1 pr-2 font-medium">Tier</th>
                    <th className="py-1 pr-2 font-medium">Monthly</th>
                    <th className="py-1 pr-2 font-medium">Annual</th>
                    <th className="py-1 font-medium">Your Commission</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b border-gray-100">
                    <td className="py-1 pr-2 font-medium">Essential</td>
                    <td className="py-1 pr-2">$79/mo</td>
                    <td className="py-1 pr-2">$749/yr</td>
                    <td className="py-1">$15.80/mo or $187.25</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-1 pr-2 font-medium">Premier</td>
                    <td className="py-1 pr-2">$149/mo</td>
                    <td className="py-1 pr-2">$1,399/yr</td>
                    <td className="py-1">$29.80/mo or $349.75</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-2 font-medium">Exclusive</td>
                    <td className="py-1 pr-2">$449/mo</td>
                    <td className="py-1 pr-2">$4,699/yr</td>
                    <td className="py-1">$112.25/mo or $1,409.70</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ROI One-liner */}
            <div className="border border-gray-200 rounded bg-white p-2 print-break-avoid">
              <p className="text-xs font-bold text-gray-900 text-center">
                One family referral covers Essential 9-16x, Premier 5-9x, Exclusive 1x+
              </p>
            </div>

            {/* Result Codes */}
            <div className="border border-gray-200 rounded bg-white p-2 print-break-avoid">
              <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Result Codes</h2>
              <ul className="text-xs text-gray-800 space-y-0.5">
                <li><span className="font-mono font-bold">VM</span> — Voicemail left</li>
                <li><span className="font-mono font-bold">CB</span> — Callback requested</li>
                <li><span className="font-mono font-bold">CLOSED</span> — Entered in portal</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-3">

            {/* Script A Opening */}
            <div className="border border-gray-200 rounded bg-white p-2 print-break-avoid">
              <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Script A — Opening</h2>
              <div className="bg-gray-50 border border-gray-200 rounded p-2 text-xs text-gray-800 leading-relaxed">
                &ldquo;Hi, is this <span className="font-medium text-gray-600">[Owner]</span>? I&rsquo;m{' '}
                <span className="font-medium text-gray-600">[Your Name]</span>, calling about{' '}
                <span className="font-medium text-gray-600">[Business]</span>&rsquo;s listing on Evermore Directory.
                Families in <span className="font-medium text-gray-600">[City]</span> are finding it on Google right
                now. We have a featured option that puts you at the top — $79/mo, one family covers it. Want to take a
                look?&rdquo;
              </div>
            </div>

            {/* Top 5 Objections */}
            <div className="border border-gray-200 rounded bg-white p-2 print-break-avoid">
              <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Top 5 Objections</h2>
              <dl className="text-xs space-y-1">
                <div>
                  <dt className="font-medium text-gray-800 inline">&ldquo;We have a website.&rdquo;</dt>
                  <dd className="inline text-gray-600"> &rarr; &ldquo;This is additional reach, not a replacement.&rdquo;</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-800 inline">&ldquo;Don&rsquo;t need visibility.&rdquo;</dt>
                  <dd className="inline text-gray-600"> &rarr; &ldquo;You&rsquo;re already listed. The upgrade puts you at the top.&rdquo;</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-800 inline">&ldquo;What&rsquo;s the cost?&rdquo;</dt>
                  <dd className="inline text-gray-600"> &rarr; &ldquo;$749/yr, which is $62/mo. One family covers it.&rdquo;</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-800 inline">&ldquo;Need to think about it.&rdquo;</dt>
                  <dd className="inline text-gray-600"> &rarr; &ldquo;When&rsquo;s a good time to follow up?&rdquo;</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-800 inline">&ldquo;Tried something like this.&rdquo;</dt>
                  <dd className="inline text-gray-600"> &rarr; &ldquo;Your listing is already live and indexed. Pull it up right now.&rdquo;</dd>
                </div>
              </dl>
            </div>

            {/* Silence Rule */}
            <div className="border border-gray-200 rounded bg-white p-2 print-break-avoid">
              <p className="text-sm font-bold text-gray-900 text-center">
                Ask. Stop. Wait.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
