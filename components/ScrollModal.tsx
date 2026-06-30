'use client';
import { useEffect } from 'react';

const SESSION_KEY = 'lcf_modal_shown';

interface Props {
  threshold?: number;
  delayMs?: number;
}

export default function ScrollModal({ threshold = 0.30, delayMs }: Props) {
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') return;
    if (localStorage.getItem('lcf_submitted') === 'true') return;

    let fired = false;

    function fire() {
      if (fired) return;
      fired = true;
      sessionStorage.setItem(SESSION_KEY, 'true');
      window.removeEventListener('scroll', handleScroll);
      window.dispatchEvent(new CustomEvent('open-lead-modal'));
    }

    function handleScroll() {
      if (localStorage.getItem('lcf_submitted') === 'true') {
        window.removeEventListener('scroll', handleScroll);
        return;
      }
      const pct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (pct >= threshold) fire();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    const timer = delayMs != null ? setTimeout(fire, delayMs) : null;

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer != null) clearTimeout(timer);
    };
  }, [threshold, delayMs]);

  return null;
}
