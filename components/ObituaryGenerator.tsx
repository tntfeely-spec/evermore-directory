'use client';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'done' | 'error';

export default function ObituaryGenerator() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [cityState, setCityState] = useState('');
  const [dateOfPassing, setDateOfPassing] = useState('');
  const [survivors, setSurvivors] = useState('');
  const [careerHighlights, setCareerHighlights] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [tone, setTone] = useState('Warm and personal');
  const [status, setStatus] = useState<Status>('idle');
  const [obituary, setObituary] = useState('');
  const [copied, setCopied] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setObituary('');
    const [city, ...rest] = cityState.split(',').map((s) => s.trim());
    const stateVal = rest.join(', ');
    try {
      const res = await fetch('/api/obituary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          age,
          city,
          state: stateVal,
          dateOfPassing,
          survivors,
          careerHighlights,
          hobbies,
          tone,
        }),
      });
      if (!res.ok) throw new Error('failed');
      const data = await res.json();
      setObituary(data.obituary || '');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  async function copy() {
    await navigator.clipboard.writeText(obituary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const inputClass = 'w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500';
  const labelClass = 'block text-sm font-semibold text-gray-700 mb-1';

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Free AI Obituary Writer</h2>
      <p className="text-sm text-gray-600 mb-6">
        Fill in a few details below. We&apos;ll generate a heartfelt draft you can copy, edit, and share.
      </p>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className={labelClass}>Full name</label>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Jane Doe" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Age</label>
            <input type="number" required value={age} onChange={(e) => setAge(e.target.value)} className={inputClass} placeholder="78" />
          </div>
          <div>
            <label className={labelClass}>Date of passing</label>
            <input type="date" required value={dateOfPassing} onChange={(e) => setDateOfPassing(e.target.value)} className={inputClass} />
          </div>
        </div>
        <div>
          <label className={labelClass}>City and state</label>
          <input type="text" required value={cityState} onChange={(e) => setCityState(e.target.value)} className={inputClass} placeholder="Nashville, Tennessee" />
        </div>
        <div>
          <label className={labelClass}>Survivors</label>
          <textarea required rows={2} value={survivors} onChange={(e) => setSurvivors(e.target.value)} className={inputClass} placeholder="e.g. spouse Jane, children Tom and Mary" />
        </div>
        <div>
          <label className={labelClass}>Career and life highlights</label>
          <textarea required rows={3} value={careerHighlights} onChange={(e) => setCareerHighlights(e.target.value)} className={inputClass} placeholder="Worked as a teacher for 35 years, served on the local school board, raised a loving family..." />
        </div>
        <div>
          <label className={labelClass}>Hobbies and interests</label>
          <textarea required rows={2} value={hobbies} onChange={(e) => setHobbies(e.target.value)} className={inputClass} placeholder="Gardening, reading, baking, weekly bridge nights with friends..." />
        </div>
        <div>
          <label className={labelClass}>Tone preference</label>
          <select required value={tone} onChange={(e) => setTone(e.target.value)} className={inputClass}>
            <option>Formal</option>
            <option>Warm and personal</option>
            <option>Religious</option>
            <option>Celebratory</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-4 py-3 text-base font-semibold text-white bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 rounded-lg transition-colors"
        >
          {status === 'loading' ? 'Generating…' : 'Generate Obituary'}
        </button>
      </form>

      {status === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700 mb-2">Something went wrong generating the obituary.</p>
          <button
            type="button"
            onClick={(e) => submit(e as unknown as React.FormEvent)}
            className="text-sm font-semibold text-red-700 hover:text-red-900 underline"
          >
            Retry →
          </button>
        </div>
      )}

      {status === 'done' && obituary && (
        <div className="mt-6 bg-slate-50 border border-slate-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold text-gray-900">Draft obituary</h3>
            <button
              type="button"
              onClick={copy}
              className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 border border-slate-300 rounded-lg hover:bg-white"
            >
              {copied ? 'Copied ✓' : 'Copy to clipboard'}
            </button>
          </div>
          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed text-sm">{obituary}</div>
          <p className="mt-4 text-xs text-gray-500">
            This is a draft. Please review and edit for accuracy before sharing or publishing.
          </p>
        </div>
      )}
    </div>
  );
}
