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
    broken: 'What changed: padding 17/13/25/19 became 24 all round; gaps 9, 19, 31 came from no scale.',
    whyRight:
      'You measured nothing and still caught it. Unrelated gaps read as noise, and your eye reports noise as “off.”',
    whyWrong:
      'At a glance they nearly pass for twins, so no harm done. Flicker them in place below and watch the gaps move. After that, your eye catches it unaided.',
  },
  hierarchy: {
    prompt: 'Same card, two builds. On one of them, you know where to look first. Which?',
    render: (broken) => <InvoiceCard tokens={broken ? flatCard : {}} width={250} />,
    toggle: ['ranked', 'flat'],
    broken: 'What changed: title size and weight, value weight, text color, and the button fill. Nothing else.',
    whyRight:
      'Nothing moved. Size, weight, and color changed, and those three decide where your eye lands.',
    whyWrong:
      'Use the flicker below. In one version your eye lands on the amounts, then the button. In the other it lands nowhere in particular. That nowhere feeling is flat hierarchy.',
  },
  proximity: {
    prompt: 'Two builds of the same form. On one, each label belongs to its field. Which?',
    render: (broken) => <FormCard tokens={broken ? floatingForm : attachedForm} />,
    toggle: ['attached', 'floating'],
    broken: 'What changed: the label gaps. Attached: 24 above, 6 below. Floating: 14 and 14, equidistant from two fields.',
    whyRight:
      'The labels sit close to their own field and far from the neighbor above. Distance told you what belongs to what before you read a word.',
    whyWrong:
      'Measure with your eye in the flicker below. When a label floats halfway between two fields, it belongs to neither, and the form becomes a puzzle.',
  },
  alignment: {
    prompt: 'Same form, same spacing. One build snaps to a shared edge. Which?',
    render: (broken) => <FormCard tokens={broken ? scatteredForm : attachedForm} />,
    toggle: ['aligned', 'scattered'],
    broken: 'What changed: the title centered, one label indented, one input narrowed and pushed right, the button drifted.',
    whyRight:
      'In the aligned build, one invisible line runs down the left side and everything touches it. Your eye follows lines like that without being told.',
    whyWrong:
      'Flicker below and watch the left edge. In one build it is a straight line; in the other, five elements start at five positions. Each drift is small. The sum reads as careless.',
  },
  typescale: {
    prompt: 'Two builds of the same card. In one, the sizes were picked from a scale. Which?',
    render: (broken) => <TypeCard tokens={broken ? crowdedType : {}} />,
    toggle: ['on scale', 'crowded'],
    broken: 'What changed: heading down to 17, meta up to 15. The three sizes now sit within about 2px of each other.',
    whyRight:
      'The heading, the meta line, and the body sit on clearly different steps, so the card ranks itself. In the other build the sizes crowd into one register.',
    whyWrong:
      'Flicker below and watch the heading. When sizes sit 1 or 2px apart, your eye cannot rank them, and the card turns into undifferentiated text.',
  },
  greyoncolor: {
    prompt: 'Two builds of the same banner. In one, the supporting text stays readable and calm. Which?',
    render: (broken) => <ColorBanner textMode={broken ? 'grey' : 'tint'} />,
    toggle: ['tinted', 'grey'],
    broken: 'What changed: one color. The subtitle went from a light tint of the background hue to neutral grey.',
    whyRight:
      'The quiet text there is the background hue, lightened. Grey on a colored background turns muddy; a tint of the same hue stays clean and calm.',
    whyWrong:
      'Flicker below and watch the paragraph. Grey text on a colored background goes muddy and slightly dirty. The fix is a light tint of the background hue itself.',
  },
  shadows: {
    prompt: 'Two builds of the same stat row. In one, every shadow agrees about the light. Which?',
    render: (broken) => <DepthRow mode={broken ? 'mixed' : 'consistent'} />,
    toggle: ['one light', 'mixed'],
    broken: 'What changed: the shadows. One build keeps two tiers lit from above; the other mixes a glow, a side light, and a hard offset.',
    whyRight:
      'Those cards share one light source, from above, in two strengths. In the other build each card invents its own physics, and the row stops feeling like one surface.',
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
            <p style={{ fontSize: 'var(--t-1)', color: 'var(--ink-3)', marginTop: 'var(--s-3)' }}>
              {def.broken}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
