'use client';
import { useState } from 'react';
import Link from 'next/link';

type Source = 'homepage' | 'listing_page' | 'city_page' | 'state_page' | 'blog' | 'contact';
type Status = 'idle' | 'sending' | 'done' | 'error';

interface Props {
  source: Source;
  funeralHomeName?: string;
  city?: string;
  state?: string;
  defaultZip?: string;
}

const TAGS_BY_SOURCE: Record<Source, string[]> = {
  homepage: ['homepage-lead'],
  listing_page: ['listing-inquiry'],
  city_page: ['city-page-lead'],
  state_page: ['state-page-lead'],
  blog: ['blog-lead'],
  contact: ['contact-form-lead'],
};

const TOTAL_STEPS = 4;

export default function LeadCaptureForm({
  source,
  funeralHomeName,
  city,
  state,
  defaultZip = '',
}: Props) {
  const [dismissed, setDismissed] = useState(false);
  const [step, setStep] = useState(1);
  const [timeline, setTimeline] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [zip, setZip] = useState(defaultZip);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  if (dismissed) {
    return (
      <button
        onClick={() => setDismissed(false)}
        className="w-full text-sm text-slate-600 hover:text-slate-800 font-medium py-2 px-4 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors text-left"
      >
        Get connected with a local funeral home
      </button>
    );
  }

  const inputClass =
    'w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500';
  const optionClass =
    'w-full text-left px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:border-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500';
  const backClass =
    'mt-2 w-full text-xs text-gray-400 hover:text-gray-600 transition-colors py-1 focus:outline-none';

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          timeline,
          serviceType,
          zip: zip.trim(),
          source,
          funeralHomeName,
          city,
          state,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          tags: TAGS_BY_SOURCE[source],
        }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div
      className="bg-white rounded-xl border border-gray-200 p-5"
      role="region"
      aria-label="Connect with a funeral home"
    >
      {status !== 'done' && (
        <div className="flex items-center gap-2 mb-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap">
            Step {step} of {TOTAL_STEPS}
          </p>
          <div
            className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={TOTAL_STEPS}
            aria-label={`Step ${step} of ${TOTAL_STEPS}`}
          >
            <div
              className="h-full bg-slate-600 transition-all duration-300"
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            />
          </div>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded focus:outline-none focus:ring-1 focus:ring-slate-500"
            aria-label="Dismiss"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {step === 1 && (
        <div>
          <p className="text-xs text-gray-500 mb-2 text-center">
            Answer a few quick questions to get connected with the right funeral home.
          </p>
          <p
            id="lcf-step1-heading"
            className="text-base font-semibold text-gray-900 mb-3 text-center"
          >
            When will you require services?
          </p>
          <div
            className="flex flex-col gap-2"
            role="radiogroup"
            aria-labelledby="lcf-step1-heading"
          >
            {[
              { label: 'Immediately', value: 'immediate' },
              { label: 'Within the next few weeks', value: 'weeks' },
              { label: 'Planning ahead for the future', value: 'preplanning' },
            ].map(({ label, value }) => (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={timeline === value}
                onClick={() => {
                  setTimeline(value);
                  setStep(2);
                }}
                className={optionClass}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <p
            id="lcf-step2-heading"
            className="text-base font-semibold text-gray-900 mb-3 text-center"
          >
            Which do you prefer?
          </p>
          <div
            className="flex flex-col gap-2"
            role="radiogroup"
            aria-labelledby="lcf-step2-heading"
          >
            {[
              { label: 'Burial', value: 'burial' },
              { label: 'Cremation', value: 'cremation' },
            ].map(({ label, value }) => (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={serviceType === value}
                onClick={() => {
                  setServiceType(value);
                  setStep(3);
                }}
                className={optionClass}
              >
                {label}
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setStep(1)} className={backClass}>
            Back
          </button>
        </div>
      )}

      {step === 3 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (zip.trim().length >= 5) setStep(4);
          }}
        >
          <label
            htmlFor="lcf-zip"
            className="block text-base font-semibold text-gray-900 mb-3 text-center"
          >
            What is your ZIP code?
          </label>
          <input
            id="lcf-zip"
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, ''))}
            placeholder="Enter your ZIP code"
            required
            autoComplete="postal-code"
            className={inputClass}
          />
          <button
            type="submit"
            className="mt-3 w-full px-4 py-3 text-sm font-semibold text-white bg-slate-700 hover:bg-slate-800 rounded-lg transition-colors"
          >
            Next
          </button>
          <button type="button" onClick={() => setStep(2)} className={backClass}>
            Back
          </button>
        </form>
      )}

      {step === 4 && status !== 'done' && (
        <form onSubmit={submit} className="space-y-3">
          <p className="text-base font-semibold text-gray-900 text-center">
            Where should we send your matches?
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="lcf-firstname" className="sr-only">
                First name
              </label>
              <input
                id="lcf-firstname"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
                autoComplete="given-name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="lcf-lastname" className="sr-only">
                Last name
              </label>
              <input
                id="lcf-lastname"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                autoComplete="family-name"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="lcf-email" className="sr-only">
              Email address
            </label>
            <input
              id="lcf-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              autoComplete="email"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="lcf-phone" className="block text-xs text-gray-500 mb-1">
              Prefer a call or text? Add your phone number.
            </label>
            <input
              id="lcf-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number (optional)"
              autoComplete="tel"
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-4 py-3 text-sm font-semibold text-white bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 rounded-lg transition-colors"
          >
            {status === 'sending' ? 'Sending...' : 'Connect me with funeral homes'}
          </button>
          <p className="text-[11px] text-gray-400 text-center leading-relaxed">
            By submitting, you agree to be contacted by Evermore and matched funeral home providers
            about your request. See our{' '}
            <Link href="/privacy" className="underline hover:text-gray-600">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/terms" className="underline hover:text-gray-600">
              Terms
            </Link>
            .
          </p>
          {status === 'error' && (
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="w-full text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Something went wrong. Tap to retry.
            </button>
          )}
          <button type="button" onClick={() => setStep(3)} className={backClass}>
            Back
          </button>
        </form>
      )}

      {status === 'done' && (
        <div
          className="flex items-center justify-center gap-3 py-2 text-center"
          role="status"
          aria-live="polite"
        >
          <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p className="text-sm text-gray-700">
            Your request has been sent. A local funeral home will be in touch soon.
          </p>
        </div>
      )}
    </div>
  );
}
