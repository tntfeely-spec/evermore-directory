'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Q1 = [
  'I need to arrange a funeral soon',
  'Planning ahead for the future',
  'Researching options and pricing',
];

const Q2 = [
  'Traditional funeral service',
  'Cremation only',
  'Graveside service only',
  'Not sure yet',
];

const Q3 = [
  'Under $5,000',
  '$5,000 to $10,000',
  '$10,000 to $15,000',
  'Not sure yet',
];

type Status = 'idle' | 'sending' | 'done' | 'error';

const TOTAL_STEPS = 5;

export default function HomeQuiz() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [intent, setIntent] = useState<string | null>(null);
  const [serviceType, setServiceType] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [zip, setZip] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  function pick(setter: (v: string) => void, next: number) {
    return (v: string) => {
      setter(v);
      setStep(next);
    };
  }

  function continueZip(e: React.FormEvent) {
    e.preventDefault();
    if (zip.trim().length < 5) return;
    setStep(5);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          timeline: intent,
          serviceType,
          budget,
          zip: zip.trim(),
          source: 'homepage_quiz',
        }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
      try {
        const z = await fetch(`https://api.zippopotam.us/us/${zip.trim()}`);
        if (z.ok) {
          const data = await z.json();
          const place = data?.places?.[0];
          const cityName: string | undefined = place?.['place name'];
          const stateAbbr: string | undefined = place?.['state abbreviation'];
          if (cityName && stateAbbr) {
            const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
            const stateSlug = stateAbbr.toLowerCase();
            try {
              const check = await fetch(`/api/check-city?state=${stateSlug}&city=${citySlug}`);
              if (check.ok) {
                router.push(`/funeral-homes/${stateSlug}/${citySlug}`);
              } else {
                router.push(`/funeral-homes/${stateSlug}`);
              }
            } catch {
              router.push(`/funeral-homes/${stateSlug}`);
            }
          }
        }
      } catch {
        /* fall back to success message */
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass = 'w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500';
  const optionClass = 'px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:border-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors';

  return (
    <div className="bg-white/90 backdrop-blur rounded-xl shadow-md border border-gray-200 p-5 text-left max-w-2xl mx-auto">
      {status !== 'done' && (
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Step {step} of {TOTAL_STEPS}</p>
          <div className="flex-1 ml-3 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-600 transition-all duration-300"
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>
      )}

      {step === 1 && (
        <div key="s1" className="transition-opacity duration-300 opacity-100">
          <p className="text-base font-semibold text-gray-900 mb-3 text-center">What brings you here today?</p>
          <div className="flex flex-col gap-2">
            {Q1.map((opt) => (
              <button key={opt} onClick={() => pick(setIntent, 2)(opt)} className={optionClass}>{opt}</button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div key="s2" className="transition-opacity duration-300 opacity-100">
          <p className="text-base font-semibold text-gray-900 mb-3 text-center">What type of service are you looking for?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {Q2.map((opt) => (
              <button key={opt} onClick={() => pick(setServiceType, 3)(opt)} className={optionClass}>{opt}</button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div key="s3" className="transition-opacity duration-300 opacity-100">
          <p className="text-base font-semibold text-gray-900 mb-3 text-center">What is your approximate budget?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {Q3.map((opt) => (
              <button key={opt} onClick={() => pick(setBudget, 4)(opt)} className={optionClass}>{opt}</button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <form key="s4" onSubmit={continueZip} className="transition-opacity duration-300 opacity-100 space-y-3">
          <p className="text-base font-semibold text-gray-900 text-center">What is your ZIP code?</p>
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, ''))}
            placeholder="Enter your ZIP code"
            required
            className={inputClass}
          />
          <button type="submit" className="w-full px-4 py-3 text-sm font-semibold text-white bg-slate-700 hover:bg-slate-800 rounded-lg transition-colors">
            Continue
          </button>
        </form>
      )}

      {step === 5 && status !== 'done' && (
        <form key="s5" onSubmit={submit} className="transition-opacity duration-300 opacity-100 space-y-3">
          <p className="text-base font-semibold text-gray-900 text-center">Where should we send your matches?</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className={inputClass}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className={inputClass}
          />
          <div>
            <label className="block text-xs text-gray-500 mb-1">Want to be contacted directly? Add your phone number.</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
              className={inputClass}
            />
          </div>
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
