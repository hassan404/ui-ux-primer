import { useState } from 'react';
import { InvoiceCard, flatCard, type CardTokens } from './demos';

/* ---------------------------------------------------------------------------
   Archetype 3 — one variable at a time, stepped.
   Rebuild hierarchy from flat, pulling a single lever per step.
--------------------------------------------------------------------------- */

const STEPS: Array<{ label: string; tokens: Partial<CardTokens>; caption: string }> = [
  {
    label: 'flat',
    tokens: flatCard,
    caption:
      'Everything at the same volume. The card works, the styles are valid, and your eye has nowhere to land first.',
  },
  {
    label: '+ size',
    tokens: { ...flatCard, titleSize: 16 },
    caption:
      'Lever one: size. Two points on the title and the card has a heading. Notice how little it took.',
  },
  {
    label: '+ weight',
    tokens: { ...flatCard, titleSize: 16, titleWeight: 650, valueWeight: 600 },
    caption:
      'Lever two: weight. The title and the amounts firm up. Structure appears without a single new pixel of space.',
  },
  {
    label: '+ color',
    tokens: { ...flatCard, titleSize: 16, titleWeight: 650, valueWeight: 600, labelColor: 'hsl(200 12% 40%)', metaColor: 'hsl(200 12% 45%)', valueColor: 'hsl(200 25% 15%)' },
    caption:
      'Lever three: color. The labels step back, the data steps forward. The amounts stand out because their neighbors got quieter.',
  },
  {
    label: '+ one primary',
    tokens: {},
    caption:
      'One filled button. The screen now answers “what next” before anyone asks. Three levers, one loudest thing.',
  },
];

export default function LeverStepper() {
  const [step, setStep] = useState(0);
  return (
    <div className="drill">
      <div className="drill-body">
        <div className="seg" role="group" aria-label="Hierarchy repair steps">
          {STEPS.map((s, i) => (
            <button key={s.label} type="button" aria-pressed={step === i} onClick={() => setStep(i)}>
              {s.label}
            </button>
          ))}
        </div>
        <div className="demo-mat" style={{ marginTop: 'var(--s-4)' }}>
          <InvoiceCard tokens={STEPS[step].tokens} width={260} />
        </div>
        <p className="stepper-caption">{STEPS[step].caption}</p>
      </div>
    </div>
  );
}
