'use client';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'done' | 'error';

export default function EulogyWriterTool() {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('Son/Daughter');
  const [age, setAge] = useState('');
  const [cityState, setCityState] = useState('');
  const [career, setCareer] = useState('');
  const [traits, setTraits] = useState('');
  const [memory, setMemory] = useState('');
  const [meaning, setMeaning] = useState('');
  const [tone, setTone] = useState('Warm and Personal');
  const [length, setLength] = useState('Standard 4-5 minutes');
  const [status, setStatus] = useState<Status>('idle');
  const [eulogy, setEulogy] = useState('');
  const [copied, setCopied] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setStatus('loading');
    setEulogy('');
    const [city, ...rest] = cityState.split(',').map(s => s.trim());
    const state = rest.join(', ');
    try {
      const res = await fetch('/api/eulogy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), relationship, age: age.trim(), city, state, career: career.trim(), traits: traits.trim(), memory: memory.trim(), meaning: meaning.trim(), tone, length }),
      });
      if (!res.ok) throw new Error('failed');
      const data = await res.json();
      setEulogy(data.eulogy || '');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  async function copy() {
    await navigator.clipboard.writeText(eulogy);
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Your relationship to them *</label>
            <select required value={relationship} onChange={e => setRelationship(e.target.value)} className={inputClass}>
              <option>Son/Daughter</option>
              <option>Spouse/Partner</option>
              <option>Grandchild</option>
              <option>Sibling</option>
              <option>Friend</option>
              <option>Colleague</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Age at passing</label>
            <input type="text" value={age} onChange={e => setAge(e.target.value)} className={inputClass} placeholder="e.g. 78" />
          </div>
        </div>
        <div>
          <label className={labelClass}>City and state they lived in</label>
          <input type="text" value={cityState} onChange={e => setCityState(e.target.value)} className={inputClass} placeholder="e.g. Nashville, Tennessee" />
        </div>
        <div>
          <label className={labelClass}>Career or what they were known for</label>
          <input type="text" value={career} onChange={e => setCareer(e.target.value)} className={inputClass} placeholder="e.g. Retired teacher, volunteer firefighter, avid gardener" />
        </div>
        <div>
          <label className={labelClass}>3 words that describe them best</label>
          <input type="text" value={traits} onChange={e => setTraits(e.target.value)} className={inputClass} placeholder="e.g. Patient, generous, funny" />
        </div>
        <div>
          <label className={labelClass}>A favorite memory or story</label>
          <textarea rows={3} value={memory} onChange={e => setMemory(e.target.value)} className={inputClass} placeholder="Share one story that captures who they were" />
        </div>
        <div>
          <label className={labelClass}>What they meant to you</label>
          <textarea rows={3} value={meaning} onChange={e => setMeaning(e.target.value)} className={inputClass} placeholder="What will you carry forward from knowing them?" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Tone preference</label>
            <select value={tone} onChange={e => setTone(e.target.value)} className={inputClass}>
              <option>Warm and Personal</option>
              <option>Traditional and Formal</option>
              <option>Celebration of Life</option>
              <option>With Gentle Humor</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Desired length</label>
            <select value={length} onChange={e => setLength(e.target.value)} className={inputClass}>
              <option>Short 2-3 minutes</option>
              <option>Standard 4-5 minutes</option>
              <option>Full 6-8 minutes</option>
            </select>
          </div>
        </div>
        <button type="submit" disabled={status === 'loading'} className="w-full px-4 py-3.5 text-base font-semibold text-white bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 rounded-lg transition-colors">
          {status === 'loading' ? 'Writing your eulogy...' : 'Generate Eulogy'}
        </button>
      </form>

      {status === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700 mb-2">Something went wrong. Please try again.</p>
          <button type="button" onClick={e => submit(e as unknown as React.FormEvent)} className="text-sm font-semibold text-red-700 hover:text-red-900 underline">Retry</button>
        </div>
      )}

      {status === 'done' && eulogy && (
        <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">Your eulogy draft</h3>
            <button type="button" onClick={copy} className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
              {copied ? 'Copied' : 'Copy to clipboard'}
            </button>
          </div>
          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{eulogy}</div>
          <p className="mt-4 text-xs text-gray-500">This is a draft. Please review, personalize, and practice reading it aloud before the service.</p>
        </div>
      )}
    </div>
  );
}
