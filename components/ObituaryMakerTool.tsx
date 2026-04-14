'use client';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'done' | 'error';

export default function ObituaryMakerTool() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dateOfPassing, setDateOfPassing] = useState('');
  const [cityState, setCityState] = useState('');
  const [occupation, setOccupation] = useState('');
  const [traits, setTraits] = useState('');
  const [survivors, setSurvivors] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [memory, setMemory] = useState('');
  const [serviceDetails, setServiceDetails] = useState('');
  const [tone, setTone] = useState('Warm and Personal');
  const [status, setStatus] = useState<Status>('idle');
  const [obituary, setObituary] = useState('');
  const [copied, setCopied] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setStatus('loading');
    setObituary('');
    const [city, ...rest] = cityState.split(',').map(s => s.trim());
    const state = rest.join(', ');
    try {
      const res = await fetch('/api/obituary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          age: age.trim(),
          city,
          state,
          dateOfPassing: dateOfPassing.trim(),
          survivors: survivors.trim(),
          careerHighlights: [occupation, traits].filter(Boolean).join('. '),
          hobbies: [hobbies, memory].filter(Boolean).join('. '),
          tone,
          serviceDetails: serviceDetails.trim(),
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
    <div>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className={labelClass}>Full name of the deceased *</label>
          <input type="text" required value={name} onChange={e => setName(e.target.value)} className={inputClass} placeholder="Full name of the deceased" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>Age at passing</label>
            <input type="text" value={age} onChange={e => setAge(e.target.value)} className={inputClass} placeholder="e.g. 78" />
          </div>
          <div>
            <label className={labelClass}>Date of passing</label>
            <input type="text" value={dateOfPassing} onChange={e => setDateOfPassing(e.target.value)} className={inputClass} placeholder="e.g. April 10, 2026" />
          </div>
          <div>
            <label className={labelClass}>City and state</label>
            <input type="text" value={cityState} onChange={e => setCityState(e.target.value)} className={inputClass} placeholder="e.g. Nashville, Tennessee" />
          </div>
        </div>
        <div>
          <label className={labelClass}>Occupation or career</label>
          <input type="text" value={occupation} onChange={e => setOccupation(e.target.value)} className={inputClass} placeholder="e.g. Retired teacher, 35 years at Lincoln Elementary" />
        </div>
        <div>
          <label className={labelClass}>Key personality traits</label>
          <textarea rows={2} value={traits} onChange={e => setTraits(e.target.value)} className={inputClass} placeholder="How would you describe them in a few words?" />
        </div>
        <div>
          <label className={labelClass}>Surviving family members</label>
          <textarea rows={2} value={survivors} onChange={e => setSurvivors(e.target.value)} className={inputClass} placeholder="e.g. spouse Jane, children Tom and Mary, 5 grandchildren" />
        </div>
        <div>
          <label className={labelClass}>Hobbies and passions</label>
          <textarea rows={2} value={hobbies} onChange={e => setHobbies(e.target.value)} className={inputClass} placeholder="e.g. Gardening, fishing, baking pies for the neighbors" />
        </div>
        <div>
          <label className={labelClass}>A favorite memory or story</label>
          <textarea rows={3} value={memory} onChange={e => setMemory(e.target.value)} className={inputClass} placeholder="Share one story that captures who they were" />
        </div>
        <div>
          <label className={labelClass}>Service details (optional)</label>
          <textarea rows={2} value={serviceDetails} onChange={e => setServiceDetails(e.target.value)} className={inputClass} placeholder="Date, time, and location of the service" />
        </div>
        <div>
          <label className={labelClass}>Tone preference</label>
          <select value={tone} onChange={e => setTone(e.target.value)} className={inputClass}>
            <option>Warm and Personal</option>
            <option>Traditional and Formal</option>
            <option>Celebration of Life</option>
            <option>Brief and Simple</option>
          </select>
        </div>
        <button type="submit" disabled={status === 'loading'} className="w-full px-4 py-3.5 text-base font-semibold text-white bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 rounded-lg transition-colors">
          {status === 'loading' ? 'Generating your obituary...' : 'Generate Obituary'}
        </button>
      </form>

      {status === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700 mb-2">Something went wrong. Please try again.</p>
          <button type="button" onClick={e => submit(e as unknown as React.FormEvent)} className="text-sm font-semibold text-red-700 hover:text-red-900 underline">Retry</button>
        </div>
      )}

      {status === 'done' && obituary && (
        <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">Your obituary draft</h3>
            <button type="button" onClick={copy} className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
              {copied ? 'Copied' : 'Copy to clipboard'}
            </button>
          </div>
          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{obituary}</div>
          <p className="mt-4 text-xs text-gray-500">This is a draft. Please review and edit for accuracy before sharing or publishing.</p>
        </div>
      )}
    </div>
  );
}
