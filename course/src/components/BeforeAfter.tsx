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
    rule: 'One scale. Every gap comes from it. When you break it, break it on purpose.',
    annots: [
      'Padding: 17/13/25/19 → 24 on every side. One decision instead of four.',
      'Gap under the title: 9 → 20. Groups need more room than their members.',
      'Row gap: 19 → 12. The three rows now read as one list.',
      'Gap above the button: 31 → 20. The same step of the scale as the title gap, so the card has rhythm.',
    ],
  },
  hierarchy: {
    before: flatCard,
    rule: 'Size, weight, color. Pull at least two before anyone reads a word.',
    annots: [
      'Title: 14/400 → 16/650. The card has a heading again.',
      'Amounts: 400/gray → 600/near-black. The data now outranks its labels.',
      'Labels: kept quiet on purpose. Emphasis comes from the contrast around it.',
      'Button: back to one filled primary. One loudest thing per screen.',
    ],
  },
};

export default function BeforeAfter({ demo }: { demo: keyof typeof VARIANTS }) {
  const v = VARIANTS[demo];
  const [after, setAfter] = useState(false);

  return (
    <div className="drill">
      <div className="drill-bar"><span className="dot" /> before and after</div>
      <div className="drill-body">
        <div className="drill-actions" style={{ marginTop: 0 }}>
          <div className="seg" role="group" aria-label="Toggle before and after">
            <button type="button" aria-pressed={!after} onClick={() => setAfter(false)}>before</button>
            <button type="button" aria-pressed={after} onClick={() => setAfter(true)}>after</button>
          </div>
          <span className="toggle-row">toggle it and feel the jump</span>
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
