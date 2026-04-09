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

type Status = 'idle' | 'sending' | 'done' | 'error';

export default function HomeQuiz() {
  const [intent, setIntent] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          timeline: intent,
          budget,
          source: 'homepage_quiz',
        }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="bg-white/90 backdrop-blur rounded-xl shadow-md border border-gray-200 p-5 text-left max-w-2xl mx-auto">
      {!intent && (
        <div className="transition-opacity duration-300 opacity-100">
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
        <div className="transition-opacity duration-300 opacity-100">
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

      {intent && budget && status !== 'done' && (
        <form onSubmit={submit} className="transition-opacity duration-300 opacity-100 space-y-3">
          <p className="text-base font-semibold text-gray-900 text-center">Where should we send your matches?</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Best phone number"
            required
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-4 py-3 text-sm font-semibold text-white bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 rounded-lg transition-colors"
          >
            {status === 'sending' ? 'Sending…' : 'Find funeral homes near me'}
          </button>
          {status === 'error' && (
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="w-full text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Something went wrong. Tap to retry →
            </button>
          )}
        </form>
      )}

      {status === 'done' && (
        <div className="flex items-center justify-center gap-3 py-2 text-center transition-opacity duration-300 opacity-100">
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
