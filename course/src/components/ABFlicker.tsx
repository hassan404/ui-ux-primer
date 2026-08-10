import { useMemo, useState } from 'react';
import { InvoiceCard, goodCard, offScaleCard, flatCard, type CardTokens } from './demos';

/* ---------------------------------------------------------------------------
   Archetype 1 — A/B commit → overlay flicker.
   Forced binary commitment, then an in-place toggle: humans are poor at
   side-by-side comparison and excellent at in-place change detection.
--------------------------------------------------------------------------- */

interface DrillDef {
  prompt: string;
  perturb: Partial<CardTokens>;
  broken: string;          // what token was broken, in one line
  whyRight: string;
  whyWrong: string;
}

const DRILLS: Record<string, DrillDef> = {
  spacing: {
    prompt: 'One of these cards was built on a spacing scale. The other was spaced by eye. Which one is on the scale?',
    perturb: offScaleCard,
    broken: 'perturbed tokens: padding 17/13/25/19 · gaps 9, 19, 31 · no two values related',
    whyRight:
      'Yes. You measured nothing, and you still caught it. Unrelated gaps read as noise, and your eye reports noise as “off.”',
    whyWrong:
      'At a glance they nearly pass for twins, so no harm done. Flicker them in place below and watch the gaps move. After that, your eye catches it unaided.',
  },
  hierarchy: {
    prompt: 'Same card, two builds. On one of them, you know where to look first. Which?',
    perturb: flatCard,
    broken: 'perturbed tokens: title 16→14, 650→400 · values 600→400 · all text to one color · button unfilled',
    whyRight:
      'Right. Nothing moved. Size, weight, and color changed, and those three decide where your eye lands.',
    whyWrong:
      'Use the flicker below. In one version your eye lands on the amounts, then the button. In the other it lands nowhere in particular. That nowhere feeling is flat hierarchy.',
  },
};

export default function ABFlicker({ demo }: { demo: keyof typeof DRILLS }) {
  const def = DRILLS[demo];
  // Which side holds the good card — decided once per mount (client:only island).
  const goodSide = useMemo(() => (Math.random() < 0.5 ? 'A' : 'B'), []);
  const [picked, setPicked] = useState<null | 'A' | 'B'>(null);
  const [showBroken, setShowBroken] = useState(false);

  const committed = picked !== null;
  const correct = picked === goodSide;

  const cardFor = (side: 'A' | 'B') => (
    <InvoiceCard tokens={side === goodSide ? {} : def.perturb} width={250} />
  );

  return (
    <div className="drill">
      <div className="drill-bar"><span className="dot" /> drill · commit before the reveal</div>
      <div className="drill-body">
        <p className="drill-prompt">{def.prompt}</p>

        <div className="drill-stage">
          {(['A', 'B'] as const).map((side) => (
            <button
              key={side}
              type="button"
              className="drill-choice"
              data-picked={picked === side}
              disabled={committed}
              onClick={() => setPicked(side)}
              aria-label={`Choose version ${side}`}
            >
              <span className="tag">version {side}</span>
              <span style={{ pointerEvents: 'none', display: 'block' }}>{cardFor(side)}</span>
            </button>
          ))}
        </div>

        {!committed && (
          <p style={{ fontSize: 'var(--t-1)', color: 'var(--ink-3)' }}>
            Pick one. It is fine to guess; the reveal teaches either way.
          </p>
        )}

        {committed && (
          <>
            <div className="verdict" data-kind={correct ? 'good' : 'bad'}>
              <strong>
                {correct ? `Yes, version ${goodSide}.` : `It was version ${goodSide}.`}
              </strong>
              <div className="why">{correct ? def.whyRight : def.whyWrong}</div>
            </div>

            <div className="drill-actions" style={{ marginTop: 'var(--s-5)' }}>
              <span className="toggle-row">now flicker it in place:</span>
              <div className="seg" role="group" aria-label="Flicker between the two versions in place">
                <button type="button" aria-pressed={!showBroken} onClick={() => setShowBroken(false)}>
                  on scale
                </button>
                <button type="button" aria-pressed={showBroken} onClick={() => setShowBroken(true)}>
                  by eye
                </button>
              </div>
            </div>
            <div className="demo-mat" style={{ marginTop: 'var(--s-4)' }}>
              <InvoiceCard tokens={showBroken ? def.perturb : {}} width={250} />
            </div>
            <p style={{ fontSize: 'var(--t-0)', fontFamily: 'var(--mono)', color: 'var(--ink-3)', marginTop: 'var(--s-3)' }}>
              {def.broken}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
