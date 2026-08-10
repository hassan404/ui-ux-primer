import { useState } from 'react';
import { InvoiceCard, offScaleCard, flatCard, type CardTokens } from './demos';

/* ---------------------------------------------------------------------------
   Archetype 4 — annotated before/after with a named rule.
   Expository, no commitment required. Still toggles in place rather than
   side-by-side, for the same change-detection reason as ABFlicker.
--------------------------------------------------------------------------- */

const VARIANTS: Record<string, { before: Partial<CardTokens>; rule: string; annots: string[] }> = {
  spacing: {
    before: offScaleCard,
    rule: 'One scale. Every gap picks from it. No exceptions you didn’t choose.',
    annots: [
      'Padding: 17/13/25/19 → 24 on every side. One decision instead of four.',
      'Title-to-rows gap: 9 → 20. Related things sit close; groups get room.',
      'Row gap: 19 → 12. Rows are one group now, not three strangers.',
      'Rows-to-button: 31 → 20. Same slot in the scale as the title gap — rhythm.',
    ],
  },
  hierarchy: {
    before: flatCard,
    rule: 'Three levers — size, weight, color. Pull at least two before anyone reads a word.',
    annots: [
      'Title: 14/400 → 16/650. The room has a name on the door again.',
      'Amounts: 400/gray → 600/near-black. The data outranks its labels.',
      'Labels: stay quiet on purpose. Emphasis works by contrast, not volume.',
      'Button: back to one filled primary. A screen gets one loudest thing.',
    ],
  },
};

export default function BeforeAfter({ demo }: { demo: keyof typeof VARIANTS }) {
  const v = VARIANTS[demo];
  const [after, setAfter] = useState(false);

  return (
    <div className="drill">
      <div className="drill-bar"><span className="dot" /> the fix, applied</div>
      <div className="drill-body">
        <div className="drill-actions" style={{ marginTop: 0 }}>
          <div className="seg" role="group" aria-label="Toggle before and after">
            <button type="button" aria-pressed={!after} onClick={() => setAfter(false)}>before</button>
            <button type="button" aria-pressed={after} onClick={() => setAfter(true)}>after</button>
          </div>
          <span className="toggle-row">toggle it — feel the jump, don’t just see it</span>
        </div>
        <div className="demo-mat" style={{ marginTop: 'var(--s-4)' }}>
          <InvoiceCard tokens={after ? {} : v.before} width={260} />
        </div>
        <p style={{ marginTop: 'var(--s-4)', fontWeight: 600, fontSize: 'var(--t-1)' }}>{v.rule}</p>
        <ol className="annots">
          {v.annots.map((a, i) => (
            <li key={i}><span className="n">{String(i + 1).padStart(2, '0')}</span><span>{a}</span></li>
          ))}
        </ol>
      </div>
    </div>
  );
}
