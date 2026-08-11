import { useState, type ReactNode } from 'react';
import { InvoiceCard, offScaleCard, flatCard } from './demos';
import { SettingsCard, ErrorField } from './demos2';

/* ---------------------------------------------------------------------------
   Archetype 4 — before/after with a named rule and numbered annotations.
   Expository, no commitment required. Toggles in place, for the same
   change-detection reason as ABFlicker.
--------------------------------------------------------------------------- */

const VARIANTS: Record<string, { render: (after: boolean) => ReactNode; rule: string; annots: string[] }> = {
  spacing: {
    render: (after) => <InvoiceCard tokens={after ? {} : offScaleCard} width={260} />,
    rule: 'One scale. Every gap comes from it. When you break it, break it on purpose.',
    annots: [
      'Padding: 17/13/25/19 → 24 on every side. One decision instead of four.',
      'Gap under the title: 9 → 20. Groups need more room than their members.',
      'Row gap: 19 → 12. The three rows now read as one list.',
      'Gap above the button: 31 → 20. The same step of the scale as the title gap, so the card has rhythm.',
    ],
  },
  hierarchy: {
    render: (after) => <InvoiceCard tokens={after ? {} : flatCard} width={260} />,
    rule: 'Size, weight, color. Pull at least two before anyone reads a word.',
    annots: [
      'Title: 14/400 → 16/650. The card has a heading again.',
      'Amounts: 400/gray → 600/near-black. The data now outranks its labels.',
      'Labels: kept quiet on purpose. Emphasis comes from the contrast around it.',
      'Button: back to one filled primary. One loudest thing per screen.',
    ],
  },
  separation: {
    render: (after) => <SettingsCard tokens={{ borders: !after }} />,
    rule: 'To separate things, reach for space first, background second, borders last.',
    annots: [
      'Boxes around the title and every row: removed. The border count drops from five to zero.',
      'Row separation now comes from a hairline and the row gap itself.',
      'The content did not change. The card reads quieter and faster.',
      'Keep borders for inputs and tables, where the boundary carries meaning.',
    ],
  },
  errorcopy: {
    render: (after) => <ErrorField good={after} />,
    rule: 'An error message names what happened and how to fix it, in the user’s words.',
    annots: [
      'Before: an internal status code and a field name. The user has neither.',
      'After: what the input contains, what it should contain, and where to look.',
      'The tone stays flat. No blame, no exclamation point, no "oops."',
      'The red border alone is not an error message. Color marks the place; words do the explaining.',
    ],
  },
};

export default function BeforeAfter({ demo }: { demo: keyof typeof VARIANTS }) {
  const v = VARIANTS[demo];
  const [after, setAfter] = useState(false);

  return (
    <div className="drill">
      <div className="drill-body">
        <div className="drill-actions" style={{ marginTop: 0 }}>
          <div className="seg" role="group" aria-label="Toggle before and after">
            <button type="button" aria-pressed={!after} onClick={() => setAfter(false)}>before</button>
            <button type="button" aria-pressed={after} onClick={() => setAfter(true)}>after</button>
          </div>
          <span className="toggle-row">toggle it and feel the jump</span>
        </div>
        <div className="demo-mat" style={{ marginTop: 'var(--s-4)' }}>
          {v.render(after)}
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
