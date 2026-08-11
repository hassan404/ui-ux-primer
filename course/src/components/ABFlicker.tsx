import { useMemo, useRef, useState, type ReactNode } from 'react';
import { InvoiceCard, offScaleCard, flatCard, type CardTokens } from './demos';
import {
  FormCard, attachedForm, floatingForm, scatteredForm,
  TypeCard, ColorBanner, bannerTint, DepthRow, consistentShadows,
} from './demos2';

/* ---------------------------------------------------------------------------
   Archetype 1 — A/B commit → in-place flicker, now with rounds.
   Each drill family has three perturbation magnitudes. A correct answer
   moves the next round to a subtler break; a miss moves back to an obvious
   one. Perception trains on repetition under uncertainty, not on one look.
--------------------------------------------------------------------------- */

export interface DrillDef {
  prompt: string;
  levels: Array<(broken: boolean) => ReactNode>; // index 0 = most obvious break
  toggle: [string, string];
  broken: string;
  whyRight: string;
  whyWrong: string;
}

const offScaleLevels: Partial<CardTokens>[] = [
  offScaleCard,
  { pad: '21px 20px 27px 22px', gapTitle: '15px', gapRow: '15px', gapFoot: '27px' },
  { pad: '24px 22px 24px 24px', gapTitle: '21px', gapRow: '10px', gapFoot: '27px' },
];
const flatLevels: Partial<CardTokens>[] = [
  flatCard,
  { titleWeight: 400, valueWeight: 400 },
  { titleWeight: 500, valueWeight: 400, valueColor: 'hsl(200 12% 40%)' },
];
const floatingLevels = [
  floatingForm,
  { ...attachedForm, labelGapAbove: 18, labelGapBelow: 10 },
  { ...attachedForm, labelGapAbove: 15, labelGapBelow: 9 },
];
const scatterLevels = [
  scatteredForm,
  { ...scatteredForm, drift: 0.55 },
  { ...scatteredForm, drift: 0.3 },
];
const crowdedLevels = [
  { hSize: 17, metaSize: 15 },
  { hSize: 18.5, metaSize: 14 },
  { hSize: 19.5, metaSize: 13.5 },
];
const greyLevels = ['hsl(0 0% 90%)', 'hsl(195 20% 90%)', 'hsl(195 40% 90%)'];
const mixedShadowLevels: string[][] = [
  [
    '0 0 14px hsl(200 30% 20% / 0.35)',
    '-4px -2px 6px hsl(200 30% 20% / 0.28)',
    '3px 8px 2px hsl(200 30% 20% / 0.45)',
  ],
  [
    '0 1px 2px hsl(200 30% 20% / 0.08)',
    '-5px 3px 8px hsl(200 30% 20% / 0.22)',
    '0 6px 16px hsl(200 30% 20% / 0.12), 0 2px 4px hsl(200 30% 20% / 0.06)',
  ],
  [
    '0 1px 2px hsl(200 30% 20% / 0.08)',
    '0 1px 2px hsl(200 30% 20% / 0.08)',
    '0 5px 4px hsl(200 30% 20% / 0.3)',
  ],
];

export const DRILLS: Record<string, DrillDef> = {
  spacing: {
    prompt: 'One of these cards was built on a spacing scale. The other was spaced by eye. Which one is on the scale?',
    levels: offScaleLevels.map((t) => (broken: boolean) => <InvoiceCard tokens={broken ? t : {}} width={250} />),
    toggle: ['on scale', 'by eye'],
    broken: 'What changed: the padding and the three gaps. On the scale they are 24 and 24/12/24; by eye they drift a few pixels each, in different directions.',
    whyRight: 'You measured nothing and still caught it. Unrelated gaps read as noise, and your eye reports noise as “off.”',
    whyWrong: 'At a glance they nearly pass for twins, so no harm done. Flicker them in place below and watch the gaps move. After that, your eye catches it unaided.',
  },
  hierarchy: {
    prompt: 'Same card, two builds. On one of them, you know where to look first. Which?',
    levels: flatLevels.map((t) => (broken: boolean) => <InvoiceCard tokens={broken ? t : {}} width={250} />),
    toggle: ['ranked', 'flat'],
    broken: 'What changed: only the ranking tokens. Title size or weight, value weight, sometimes the text color and the button fill. The layout never moved.',
    whyRight: 'Nothing moved. Size, weight, and color changed, and those three decide where your eye lands.',
    whyWrong: 'Use the flicker below. In one version your eye lands on the amounts, then the button. In the other it lands nowhere in particular. That nowhere feeling is flat hierarchy.',
  },
  proximity: {
    prompt: 'Two builds of the same form. On one, each label belongs to its field. Which?',
    levels: floatingLevels.map((t) => (broken: boolean) => <FormCard tokens={broken ? t : attachedForm} />),
    toggle: ['attached', 'floating'],
    broken: 'What changed: the label gaps. Attached: 24 above, 6 below. Floating: the two gaps drift toward equal, and each label belongs to nothing.',
    whyRight: 'The labels sit close to their own field and far from the neighbor above. Distance told you what belongs to what before you read a word.',
    whyWrong: 'Measure with your eye in the flicker below. When a label floats halfway between two fields, it belongs to neither, and the form becomes a puzzle.',
  },
  alignment: {
    prompt: 'Same form, same spacing. One build snaps to a shared edge. Which?',
    levels: scatterLevels.map((t) => (broken: boolean) => <FormCard tokens={broken ? t : attachedForm} />),
    toggle: ['aligned', 'scattered'],
    broken: 'What changed: only the edges. The title, one label, one input, and the button each drift off the shared left line by a few pixels to a few dozen.',
    whyRight: 'In the aligned build, one invisible line runs down the left side and everything touches it. Your eye follows lines like that without being told.',
    whyWrong: 'Flicker below and watch the left edge. In one build it is a straight line; in the other, elements start at different positions. Each drift is small. The sum reads as careless.',
  },
  typescale: {
    prompt: 'Two builds of the same card. In one, the sizes were picked from a scale. Which?',
    levels: crowdedLevels.map((t) => (broken: boolean) => <TypeCard tokens={broken ? t : {}} />),
    toggle: ['on scale', 'crowded'],
    broken: 'What changed: two sizes. The heading came down, the meta line came up, and the steps between the three sizes shrank until they stopped ranking.',
    whyRight: 'The heading, the meta line, and the body sit on clearly different steps, so the card ranks itself. In the other build the sizes crowd into one register.',
    whyWrong: 'Flicker below and watch the heading. When sizes sit a pixel or two apart, your eye cannot rank them, and the card turns into undifferentiated text.',
  },
  greyoncolor: {
    prompt: 'Two builds of the same banner, same text lightness. One keeps the supporting text clean; one goes muddy. Which is clean?',
    levels: greyLevels.map((grey) => (broken: boolean) => <ColorBanner sub={broken ? grey : bannerTint} />),
    toggle: ['tinted', 'grey'],
    broken: 'What changed: one dial. The lightness stayed at 90%; only the hue and saturation moved, from a tint of the background teal toward plain grey.',
    whyRight: 'The clean text is the background hue, lightened. At the same lightness, grey on a colored background reads faintly dirty; a tint of the same hue reads as quiet.',
    whyWrong: 'Flicker below and watch the paragraph. Same lightness in both builds; only the hue moved. Grey on a colored background goes subtly muddy, and the fix is a light tint of the background hue itself.',
  },
  shadows: {
    prompt: 'Two builds of the same stat row. In one, every shadow agrees about the light. Which?',
    levels: mixedShadowLevels.map((sh) => (broken: boolean) => <DepthRow shadows={broken ? sh : consistentShadows} />),
    toggle: ['one light', 'mixed'],
    broken: 'What changed: the shadows. One build keeps two tiers lit from above; the other lets at least one card claim its own light source or a harsher edge.',
    whyRight: 'Those cards share one light source, from above, in two strengths. In the other build the cards disagree about the physics, and the row stops feeling like one surface.',
    whyWrong: 'Flicker below and look at the shadows, not the cards. One build has a single light source in two strengths. The other disagrees with itself. Your eye trusts consistent light.',
  },
};

export default function ABFlicker({ demo, rounds = 3 }: { demo: keyof typeof DRILLS; rounds?: number }) {
  const def = DRILLS[demo];
  const sides = useMemo(() => Array.from({ length: rounds }, () => (Math.random() < 0.5 ? 'A' : 'B')), [rounds]);
  const [round, setRound] = useState(0);
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<null | 'A' | 'B'>(null);
  const [showBroken, setShowBroken] = useState(false);
  const verdictRef = useRef<HTMLDivElement>(null);

  const goodSide = sides[round];
  const committed = picked !== null;
  const correct = picked === goodSide;
  const lastRound = round === rounds - 1;
  const render = def.levels[Math.min(level, def.levels.length - 1)];

  const commit = (side: 'A' | 'B') => {
    if (committed) return;
    setPicked(side);
    if (side === goodSide) setScore((s) => s + 1);
    requestAnimationFrame(() => verdictRef.current?.focus());
  };

  const nextRound = () => {
    setLevel((l) => (correct ? Math.min(l + 1, def.levels.length - 1) : Math.max(l - 1, 0)));
    setRound((r) => r + 1);
    setPicked(null);
    setShowBroken(false);
  };

  return (
    <div className="drill">
      <div className="drill-body">
        <p className="drill-prompt">{def.prompt}</p>
        {rounds > 1 && <p className="round-note">Round {round + 1} of {rounds}. It gets subtler when you are right.</p>}

        <div className="drill-stage">
          {(['A', 'B'] as const).map((side) => (
            <button
              key={side}
              type="button"
              className="drill-choice"
              data-picked={picked === side}
              aria-disabled={committed}
              onClick={() => commit(side)}
              aria-label={`Choose version ${side} of this visual comparison`}
            >
              <span className="tag">
                Version {side}
                {committed && picked === side && <span className="pick-badge">your pick</span>}
                {committed && goodSide === side && <span className="pick-badge">the answer</span>}
              </span>
              <span style={{ pointerEvents: 'none', display: 'block' }}>{render(side !== goodSide)}</span>
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
            <div className="verdict" data-kind={correct ? 'good' : 'bad'} ref={verdictRef} tabIndex={-1} role="status">
              <strong>{correct ? `Version ${goodSide} is right.` : `It was version ${goodSide}.`}</strong>
              <div className="why">
                {lastRound
                  ? (correct ? def.whyRight : def.whyWrong)
                  : correct
                    ? 'Caught it. Next one is subtler.'
                    : `That one was the “${def.toggle[1]}” build. The next round eases off.`}
              </div>
              {lastRound && rounds > 1 && (
                <div className="why">You caught {score} of {rounds}.</div>
              )}
            </div>

            {lastRound ? (
              <>
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
                  {render(showBroken)}
                </div>
                <p style={{ fontSize: 'var(--t-1)', color: 'var(--ink-3)', marginTop: 'var(--s-3)' }}>
                  {def.broken}
                </p>
              </>
            ) : (
              <div className="drill-actions" style={{ marginTop: 'var(--s-4)' }}>
                <button type="button" className="btn btn-ghost" onClick={nextRound}>
                  Next round
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
