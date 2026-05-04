'use client';

import { useState, FormEvent } from 'react';

interface Props {
  listing: {
    business_name: string;
    city: string;
    state: string;
    phone: string | null;
  };
}

export default function InlineLeadForm({ listing }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) { setError('Please enter your name.'); return; }
    if (!phone.trim()) { setError('Please enter your phone number.'); return; }
    if (!email.trim()) { setError('Please enter your email.'); return; }

    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          message: message.trim(),
          serviceType,
          funeralHomeName: listing.business_name,
          city: listing.city,
          state: listing.state,
          source: 'Listing Page Inline Form',
          tags: ['listing-inquiry', 'inline-form'],
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or call the funeral home directly.');
      }
    } catch {
      setError('Something went wrong. Please try again or call the funeral home directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-[10px] border border-gray-200 p-6 mb-5 text-center">
        <p className="text-lg font-bold text-green-700 mb-2">Message sent</p>
        <p className="text-sm text-gray-600">
          {listing.business_name} has your contact information and will reach out soon.
          {listing.phone && (
            <> You can also call them directly at <a href={`tel:${listing.phone.replace(/\D/g, '')}`} className="text-[#2a6496] font-semibold">{listing.phone}</a>.</>
          )}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[10px] border-2 border-[#2a6496] p-6 mb-5">
      <h2 className="text-lg font-bold text-[#1a1a2e] mb-1">
        Contact {listing.business_name} About Services
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Fill out this form and {listing.business_name} will receive your inquiry directly.
      </p>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 mb-3">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#2a6496] focus:ring-1 focus:ring-[#2a6496]"
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#2a6496] focus:ring-1 focus:ring-[#2a6496]"
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#2a6496] focus:ring-1 focus:ring-[#2a6496]"
        />
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#2a6496] focus:ring-1 focus:ring-[#2a6496] bg-white"
        >
          <option value="">Service needed (optional)</option>
          <option value="Cremation">Cremation</option>
          <option value="Burial">Burial</option>
          <option value="Pre-Planning">Pre-Planning</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
        <textarea
          placeholder="Message (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#2a6496] focus:ring-1 focus:ring-[#2a6496] resize-vertical"
        />
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-[#2a6496] text-white font-bold text-sm rounded-md hover:bg-[#1e4f7a] transition-colors disabled:bg-[#7aa5c4] disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending...' : 'Send My Request'}
        </button>
        <p className="text-xs text-gray-400 text-center">
          Goes directly to {listing.business_name}. We never share your information.
        </p>
      </form>
    </div>
  );
}
