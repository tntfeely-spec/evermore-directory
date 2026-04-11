'use client';
import { useEffect } from 'react';

export default function CalcScript({ calcId, prices }: { calcId: string; prices: Record<string, number> }) {
  useEffect(() => {
    function recalc() {
      let total = 0;
      Object.keys(prices).forEach((k) => {
        const el = document.getElementById(`chk-${k}-${calcId}`) as HTMLInputElement | null;
        if (el && el.checked) total += prices[k];
      });
      const totalEl = document.getElementById(`total-${calcId}`);
      if (totalEl) totalEl.textContent = `$${total.toLocaleString()}`;
    }

    const checkboxes = document.querySelectorAll(`[id^="chk-"][id$="-${calcId}"]`);
    checkboxes.forEach((el) => {
      if (!(el as HTMLInputElement).disabled) {
        el.addEventListener('change', recalc);
      }
    });

    return () => {
      checkboxes.forEach((el) => {
        if (!(el as HTMLInputElement).disabled) {
          el.removeEventListener('change', recalc);
        }
      });
    };
  }, [calcId, prices]);

  return null;
}
