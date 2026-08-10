import { useState } from 'react';
import { InvoiceCard, MismatchCard } from './demos';

/* ---------------------------------------------------------------------------
   The squint test as a button. CSS blur ≈ squinting: detail drops out,
   only the prominence order survives — a stack trace of what reads first.
--------------------------------------------------------------------------- */

export default function SquintToggle({ demo = 'invoice' }: { demo?: 'invoice' | 'mismatch' }) {
  const [blur, setBlur] = useState(false);
  return (
    <div className="drill">
      <div className="drill-bar"><span className="dot" /> tool — the squint test, no face required</div>
      <div className="drill-body">
        <div className="drill-actions" style={{ marginTop: 0 }}>
          <div className="seg" role="group" aria-label="Toggle squint blur">
            <button type="button" aria-pressed={!blur} onClick={() => setBlur(false)}>normal</button>
            <button type="button" aria-pressed={blur} onClick={() => setBlur(true)}>squint</button>
          </div>
          <span className="toggle-row">what survives the blur is your real hierarchy</span>
        </div>
        <div className="demo-mat" style={{ marginTop: 'var(--s-4)' }}>
          <div style={{ filter: blur ? 'blur(4px)' : 'none', transition: 'filter 160ms ease' }}>
            {demo === 'invoice' ? <InvoiceCard width={260} /> : <MismatchCard width={280} />}
          </div>
        </div>
      </div>
    </div>
  );
}
