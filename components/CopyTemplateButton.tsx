'use client';
import { useState } from 'react';

export default function CopyTemplateButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="mt-3 text-sm font-semibold text-slate-700 hover:text-slate-900 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
    >
      {copied ? 'Copied' : 'Copy This Template'}
    </button>
  );
}
