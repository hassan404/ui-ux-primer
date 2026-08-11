import { useState } from 'react';
import { InvoiceCard, MismatchCard } from './demos';

/* ---------------------------------------------------------------------------
   The squint test and the grayscale pass as buttons. Blur drops detail so
   only the prominence order survives; grayscale drops hue so only meaning
   that never depended on color survives.
--------------------------------------------------------------------------- */

const FILTERS: Record<string, string> = {
  normal: 'none',
  squint: 'blur(4px)',
  grayscale: 'grayscale(1)',
};

export default function SquintToggle({
  demo = 'invoice',
  modes = ['normal', 'squint'],
}: {
  demo?: 'invoice' | 'mismatch';
  modes?: Array<'normal' | 'squint' | 'grayscale'>;
}) {
  const [mode, setMode] = useState<string>('normal');
  return (
    <div className="drill">
      <div className="drill-body">
        <div className="drill-actions" style={{ marginTop: 0 }}>
          <div className="seg" role="group" aria-label="View the demo normally, blurred, or in grayscale">
            {modes.map((m) => (
              <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}>
                {m}
              </button>
            ))}
          </div>
          <span className="toggle-row">what survives the filter is what the screen is saying</span>
        </div>
        <div className="demo-mat" style={{ marginTop: 'var(--s-4)' }}>
          <div style={{ filter: FILTERS[mode], transition: 'filter 160ms ease' }}>
            {demo === 'invoice' ? <InvoiceCard width={260} /> : <MismatchCard width={280} />}
          </div>
        </div>
      </div>
    </div>
  );
}
