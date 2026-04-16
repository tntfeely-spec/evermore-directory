'use client';
import { useState } from 'react';
import Link from 'next/link';

export type StatePricing = {
  abbr: string;
  name: string;
  cremationLow: number;
  cremationHigh: number;
  burialLow: number;
  burialHigh: number;
  listingCount: number;
};

function formatCurrency(n: number): string {
  const rounded = Math.round(n / 100) * 100;
  return '$' + rounded.toLocaleString('en-US');
}

export default function CostCalculator({ data }: { data: StatePricing[] }) {
  const [selectedAbbr, setSelectedAbbr] = useState<string>('');
  const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
  const selected = data.find((s) => s.abbr === selectedAbbr);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
      <label htmlFor="state-select" className="block text-sm font-semibold text-gray-800 mb-2">
        Choose your state
      </label>
      <select
        id="state-select"
        value={selectedAbbr}
        onChange={(e) => setSelectedAbbr(e.target.value)}
        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
      >
        <option value="">Select a state...</option>
        {sorted.map((s) => (
          <option key={s.abbr} value={s.abbr}>
            {s.name}
          </option>
        ))}
      </select>

      {selected && (
        <div className="mt-6 space-y-4">
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">Direct Cremation in {selected.name}</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatCurrency(selected.cremationLow)} to {formatCurrency(selected.cremationHigh)}
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">Traditional Burial in {selected.name}</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatCurrency(selected.burialLow)} to {formatCurrency(selected.burialHigh)}
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Based on {selected.listingCount.toLocaleString()} funeral homes in the Evermore Directory.
          </p>
          <Link
            href={`/funeral-homes/${selected.abbr.toLowerCase()}`}
            className="inline-block bg-slate-700 text-white px-5 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            Browse funeral homes in {selected.name}
          </Link>
        </div>
      )}

      <p className="mt-6 text-xs text-gray-500 leading-relaxed">
        Prices shown are averages based on funeral homes listed in the Evermore Directory. Actual costs vary by provider, services selected, and location within the state. Always request a General Price List before making any decisions.
      </p>
    </div>
  );
}
