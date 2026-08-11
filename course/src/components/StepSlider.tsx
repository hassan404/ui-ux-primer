import { useState, type ReactNode } from 'react';
import { TypeCard } from './demos2';

/* ---------------------------------------------------------------------------
   Archetype 3 — one variable, stepped through its range.
   The learner feels where "right" lives by passing through "wrong" twice.
--------------------------------------------------------------------------- */

interface SliderDef {
  bar: string; // used as the segmented control's aria label
  steps: Array<{ label: string; render: () => ReactNode; caption: string }>;
  start: number;
}

const SLIDERS: Record<string, SliderDef> = {
  lineheight: {
    bar: 'Line height',
    start: 0,
    steps: [
      {
        label: '1.1',
        render: () => <TypeCard tokens={{ bodyLh: 1.1 }} />,
        caption: 'Cramped. The lines shear into each other and the paragraph feels anxious to read.',
      },
      {
        label: '1.3',
        render: () => <TypeCard tokens={{ bodyLh: 1.3 }} />,
        caption: 'Print territory. Fine for a book page; still tight for a screen you scan at arm’s length.',
      },
      {
        label: '1.55',
        render: () => <TypeCard tokens={{ bodyLh: 1.55 }} />,
        caption: 'The UI default. Around 1.5, each line hands off to the next without effort. Start here for body text.',
      },
      {
        label: '2.0',
        render: () => <TypeCard tokens={{ bodyLh: 2.0 }} />,
        caption: 'Airy, and past the point of help. The lines drift apart and the paragraph stops holding together.',
      },
    ],
  },
  measure: {
    bar: 'Line length',
    start: 2,
    steps: [
      {
        label: 'narrow',
        render: () => <TypeCard tokens={{ width: 210 }} />,
        caption: 'Around 30 characters. The eye ping-pongs; every line break interrupts a phrase.',
      },
      {
        label: 'comfortable',
        render: () => <TypeCard tokens={{ width: 340 }} />,
        caption: 'Around 55 to 65 characters. The sweet range runs 45 to 75. The eye finds the next line without hunting.',
      },
      {
        label: 'wide',
        render: () => <TypeCard tokens={{ width: 560 }} />,
        caption: 'Past 90 characters. Each return sweep risks landing on the wrong line. Cap your prose columns.',
      },
    ],
  },
};

export default function StepSlider({ demo }: { demo: keyof typeof SLIDERS }) {
  const def = SLIDERS[demo];
  const [step, setStep] = useState(def.start);
  return (
    <div className="drill">
      <div className="drill-body">
        <div className="seg" role="group" aria-label={def.bar}>
          {def.steps.map((s, i) => (
            <button key={s.label} type="button" aria-pressed={step === i} onClick={() => setStep(i)}>
              {s.label}
            </button>
          ))}
        </div>
        <div className="demo-mat" style={{ marginTop: 'var(--s-4)' }}>
          {def.steps[step].render()}
        </div>
        <p className="stepper-caption">{def.steps[step].caption}</p>
      </div>
    </div>
  );
}
