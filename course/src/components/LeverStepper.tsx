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
      'Everything at the same volume. Working software, working styles — and your eye has nowhere to land. This is the bug.',
  },
  {
    label: '+ size',
    tokens: { ...flatCard, titleSize: 16 },
    caption:
      'Lever 1 — size. Two points on the title and the card has a name. Notice how little it took.',
  },
  {
    label: '+ weight',
    tokens: { ...flatCard, titleSize: 16, titleWeight: 650, valueWeight: 600 },
    caption:
      'Lever 2 — weight. Title and amounts firm up. Structure appears with zero new pixels of space.',
  },
  {
    label: '+ color',
    tokens: { ...flatCard, titleSize: 16, titleWeight: 650, valueWeight: 600, labelColor: 'hsl(248 10% 40%)', metaColor: 'hsl(248 8% 55%)', valueColor: 'hsl(248 22% 16%)' },
    caption:
      'Lever 3 — color. The labels step back and the data steps forward. Emphasis by de-emphasis: you quieted the neighbors instead of shouting.',
  },
  {
    label: '+ one primary',
    tokens: {},
    caption:
      'One filled button. The screen now answers “what next?” without being asked. That’s hierarchy: three levers and a single loudest thing.',
  },
];

export default function LeverStepper() {
  const [step, setStep] = useState(0);
  return (
    <div className="drill">
      <div className="drill-bar"><span className="dot" /> step through the fix — one lever per step</div>
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
