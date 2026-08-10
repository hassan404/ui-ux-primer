import { useMemo, useState, type ReactNode } from 'react';
import { InvoiceCard, offScaleCard, flatCard } from './demos';
import { FormCard, attachedForm, floatingForm, scatteredForm, TypeCard, crowdedType, ColorBanner, DepthRow } from './demos2';

/* ---------------------------------------------------------------------------
   Archetype 1 — A/B commit → in-place flicker.
   Forced commitment, then a toggle that swaps the variants in place. Humans
   compare poorly side by side and detect change in place very well.
--------------------------------------------------------------------------- */

interface DrillDef {
  prompt: string;
  render: (broken: boolean) => ReactNode;
  toggle: [string, string]; // [good label, broken label]
  broken: string;           // which tokens were perturbed
  whyRight: string;
  whyWrong: string;
}

const DRILLS: Record<string, DrillDef> = {
  spacing: {
    prompt: 'One of these cards was built on a spacing scale. The other was spaced by eye. Which one is on the scale?',
    render: (broken) => <InvoiceCard tokens={broken ? offScaleCard : {}} width={250} />,
    toggle: ['on scale', 'by eye'],
    broken: 'perturbed tokens: padding 17/13/25/19 · gaps 9, 19, 31 · no two values related',
    whyRight:
      'Yes. You measured nothing, and you still caught it. Unrelated gaps read as noise, and your eye reports noise as “off.”',
    whyWrong:
      'At a glance they nearly pass for twins, so no harm done. Flicker them in place below and watch the gaps move. After that, your eye catches it unaided.',
  },
  hierarchy: {
    prompt: 'Same card, two builds. On one of them, you know where to look first. Which?',
    render: (broken) => <InvoiceCard tokens={broken ? flatCard : {}} width={250} />,
    toggle: ['ranked', 'flat'],
    broken: 'perturbed tokens: title 16→14, 650→400 · values 600→400 · all text to one color · button unfilled',
    whyRight:
      'Right. Nothing moved. Size, weight, and color changed, and those three decide where your eye lands.',
    whyWrong:
      'Use the flicker below. In one version your eye lands on the amounts, then the button. In the other it lands nowhere in particular. That nowhere feeling is flat hierarchy.',
  },
  proximity: {
    prompt: 'Two builds of the same form. On one, each label belongs to its field. Which?',
    render: (broken) => <FormCard tokens={broken ? floatingForm : attachedForm} />,
    toggle: ['attached', 'floating'],
    broken: 'perturbed tokens: label gap above 24→14, below 6→14 · every label now equidistant from two fields',
    whyRight:
      'Yes. The labels sit close to their own field and far from the neighbor above. Distance told you what belongs to what before you read a word.',
    whyWrong:
      'Measure with your eye in the flicker below. When a label floats halfway between two fields, it belongs to neither, and the form becomes a puzzle.',
  },
  alignment: {
    prompt: 'Same form, same spacing. One build snaps to a shared edge. Which?',
    render: (broken) => <FormCard tokens={broken ? scatteredForm : attachedForm} />,
    toggle: ['aligned', 'scattered'],
    broken: 'perturbed tokens: title centered · one label indented 14px · one input 80% wide, pushed right · button drifted',
    whyRight:
      'Yes. In the aligned build, one invisible line runs down the left side and everything touches it. Your eye follows lines like that without being told.',
    whyWrong:
      'Flicker below and watch the left edge. In one build it is a straight line; in the other, five elements start at five positions. Each drift is small. The sum reads as careless.',
  },
  typescale: {
    prompt: 'Two builds of the same card. In one, the sizes were picked from a scale. Which?',
    render: (broken) => <TypeCard tokens={broken ? crowdedType : {}} />,
    toggle: ['on scale', 'crowded'],
    broken: 'perturbed tokens: heading 21/650→17/500 · meta 13→15 · the three sizes now sit within 2.5px of each other',
    whyRight:
      'Yes. The heading, the meta line, and the body sit on clearly different steps, so the card ranks itself. In the other build the sizes crowd into one register.',
    whyWrong:
      'Flicker below and watch the heading. When sizes sit 1 or 2px apart, your eye cannot rank them, and the card turns into undifferentiated text.',
  },
  greyoncolor: {
    prompt: 'Two builds of the same banner. In one, the supporting text stays readable and calm. Which?',
    render: (broken) => <ColorBanner textMode={broken ? 'grey' : 'tint'} />,
    toggle: ['tinted', 'grey'],
    broken: 'perturbed token: subtitle color, from a light tint of the background hue to neutral grey',
    whyRight:
      'Yes. That text is not white at lower opacity and not grey. It is the background hue, lightened. Grey on a colored background turns muddy; a tint of the same hue reads as quiet.',
    whyWrong:
      'Flicker below and watch the paragraph. Grey text on a colored background goes muddy and slightly dirty. The fix is a light tint of the background hue itself.',
  },
  shadows: {
    prompt: 'Two builds of the same stat row. In one, every shadow agrees about the light. Which?',
    render: (broken) => <DepthRow mode={broken ? 'mixed' : 'consistent'} />,
    toggle: ['one light', 'mixed'],
    broken: 'perturbed tokens: three shadows with three light sources, one glow, one hard offset · consistent build: two tiers, light from above',
    whyRight:
      'Yes. Those cards share one light source, from above, in two strengths. In the other build each card invents its own physics, and the row stops feeling like one surface.',
    whyWrong:
      'Flicker below and look at the shadows, not the cards. One build has a single light source in two strengths. The other has a glow, a sideways sun, and a hard smear. Your eye trusts consistent light.',
  },
};

export default function ABFlicker({ demo }: { demo: keyof typeof DRILLS }) {
  const def = DRILLS[demo];
  // Which side holds the good build. Decided once per mount (client:only island).
  const goodSide = useMemo(() => (Math.random() < 0.5 ? 'A' : 'B'), []);
  const [picked, setPicked] = useState<null | 'A' | 'B'>(null);
  const [showBroken, setShowBroken] = useState(false);

  const committed = picked !== null;
  const correct = picked === goodSide;

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
              <span style={{ pointerEvents: 'none', display: 'block' }}>{def.render(side !== goodSide)}</span>
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
                  {def.toggle[0]}
                </button>
                <button type="button" aria-pressed={showBroken} onClick={() => setShowBroken(true)}>
                  {def.toggle[1]}
                </button>
              </div>
            </div>
            <div className="demo-mat" style={{ marginTop: 'var(--s-4)' }}>
              {def.render(showBroken)}
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
