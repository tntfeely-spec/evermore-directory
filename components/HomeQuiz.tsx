'use client';
import { useState } from 'react';

const Q1 = [
  'I need to arrange a funeral soon',
  'Planning ahead for the future',
  'Researching options and pricing',
];

const Q2 = [
  'Under $5,000',
  '$5,000 to $10,000',
  '$10,000 to $15,000',
  'Not sure yet',
];

export default function HomeQuiz() {
  const [intent, setIntent] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  return (
    <div className="bg-white/90 backdrop-blur rounded-xl shadow-md border border-gray-200 p-5 text-left">
      {!intent && (
        <div>
          <p className="text-base font-semibold text-gray-900 mb-3 text-center">What brings you here today?</p>
          <div className="flex flex-col sm:flex-row gap-2">
            {Q1.map((opt) => (
              <button
                key={opt}
                onClick={() => setIntent(opt)}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:border-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {intent && !budget && (
        <div>
          <p className="text-base font-semibold text-gray-900 mb-3 text-center">What is your approximate budget?</p>
          <div className="grid grid-cols-2 gap-2">
            {Q2.map((opt) => (
              <button
                key={opt}
                onClick={() => setBudget(opt)}
                className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:border-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {intent && budget && (
        <div className="flex items-center justify-center gap-3 py-2 text-center">
          <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </span>
          <p className="text-sm text-gray-700">
            We&apos;ll help you find the right funeral home. Browse listings below or use the search above.
          </p>
        </div>
      )}
    </div>
  );
}
