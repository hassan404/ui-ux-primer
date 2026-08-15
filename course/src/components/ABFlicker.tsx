import { useEffect, useRef, useState, type ReactNode } from 'react';
import { InvoiceCard, offScaleCard, flatCard, type CardTokens } from './demos';
import {
  FormCard, attachedForm,
  TypeCard, ColorBanner, bannerTint, DepthRow, consistentShadows,
} from './demos2';

/* ---------------------------------------------------------------------------
   Archetype 1 — A/B commit → in-place flicker, in adaptive rounds.

   Level design contract: within a family, every level perturbs the SAME
   tokens, and higher levels move them closer to correct. Difficulty is
   distance from correct, nothing else. Every level carries its own note so
   each round ends with reasoning, not a verdict.
--------------------------------------------------------------------------- */

interface Level {
  render: (broken: boolean) => ReactNode;
  note: string; // what exactly was broken at this magnitude
}

export interface DrillDef {
  prompt: string;
  levels: Level[]; // index 0 = most obvious break
  toggle: [string, string];
  whyRight: string;
  whyWrong: string;
}

const invoice = (t: Partial<CardTokens>) => (broken: boolean) => (
  <InvoiceCard tokens={broken ? t : {}} width={250} />
);
const form = (t: object) => (broken: boolean) => (
  <FormCard tokens={broken ? (t as any) : attachedForm} />
);

export const DRILLS: Record<string, DrillDef> = {
  spacing: {
    prompt: 'One of these cards was built on a spacing scale. The other was spaced by eye. Which one is on the scale?',
    toggle: ['on scale', 'by eye'],
    levels: [
      {
        render: invoice(offScaleCard),
        note: 'The break: padding 17/13/25/19 instead of 24 all round, gaps 9/19/31 instead of 24/12/24. Nothing relates to anything.',
      },
      {
        render: invoice({ pad: '21px 20px 27px 22px', gapTitle: '17px', gapRow: '15px', gapFoot: '29px' }),
        note: 'The break, smaller now: every gap sits 3 to 6px off the scale, each in its own direction.',
      },
      {
        render: invoice({ pad: '24px 21px 24px 24px', gapTitle: '21px', gapRow: '10px', gapFoot: '27px' }),
        note: 'The break, subtle: three gaps off by only 2 or 3px. At this size you are reading rhythm, not measuring.',
      },
    ],
    whyRight: 'You measured nothing and still caught it. Unrelated gaps read as noise, and your eye reports noise as “off.”',
    whyWrong: 'At a glance they nearly pass for twins, so no harm done. Flicker them in place below and watch the gaps move. After that, your eye catches it unaided.',
  },
  hierarchy: {
    prompt: 'Same card, two builds. On one of them, you know where to look first. Which?',
    toggle: ['ranked', 'flat'],
    levels: [
      {
        render: invoice(flatCard),
        note: 'The break: everything flattened at once. Title size and weight, value weight, text color, and the button fill all pulled to one volume.',
      },
      {
        render: invoice({ titleWeight: 400, valueWeight: 400 }),
        note: 'The break, smaller: sizes, colors, and the button kept their rank; only the two weights were flattened. Structure went soft, not silent.',
      },
      {
        render: invoice({ valueWeight: 400 }),
        note: 'The break, one token: the amounts dropped from semibold to regular. The title still leads; the data lost its firmness against its labels.',
      },
    ],
    whyRight: 'Nothing moved. Size, weight, and color changed, and those three decide where your eye lands.',
    whyWrong: 'Use the flicker below. In one version your eye lands on the amounts, then the button. In the other it lands nowhere in particular. That nowhere feeling is flat hierarchy.',
  },
  proximity: {
    prompt: 'Two builds of the same form. On one, each label belongs to its field. Which?',
    toggle: ['attached', 'floating'],
    levels: [
      {
        render: form({ labelGapAbove: 14, labelGapBelow: 14, align: 'left' }),
        note: 'The break: 14px above each label and 14px below. Exactly halfway, so each label belongs to nothing.',
      },
      {
        render: form({ labelGapAbove: 17, labelGapBelow: 11, align: 'left' }),
        note: 'The break, smaller: 17 above, 11 below, against the correct 24 and 6. The lean toward the right field is there, and weak.',
      },
      {
        render: form({ labelGapAbove: 20, labelGapBelow: 9, align: 'left' }),
        note: 'The break, subtle: 20 and 9 instead of 24 and 6. Every value is nearly right; the ratio between them is what your eye reads.',
      },
    ],
    whyRight: 'The labels sit close to their own field and far from the neighbor above. Distance told you what belongs to what before you read a word.',
    whyWrong: 'Measure with your eye in the flicker below. When a label floats halfway between two fields, it belongs to neither, and the form becomes a puzzle.',
  },
  alignment: {
    prompt: 'Same form, same spacing. One build snaps to a shared edge. Which?',
    toggle: ['aligned', 'scattered'],
    levels: [
      {
        render: form({ ...attachedForm, align: 'scattered', drift: 1 }),
        note: 'The break: the title centered, one label indented 14px, one input narrowed and pushed right, the button drifted a third of the way across.',
      },
      {
        render: form({ ...attachedForm, align: 'scattered', drift: 0.55 }),
        note: 'The break, smaller: the same four elements drift off the left line, at roughly half the distance.',
      },
      {
        render: form({ ...attachedForm, align: 'scattered', drift: 0.28 }),
        note: 'The break, subtle: drifts of a few pixels each. No single offset is visible on its own; the ragged left edge is.',
      },
    ],
    whyRight: 'In the aligned build, one invisible line runs down the left side and everything touches it. Your eye follows lines like that without being told.',
    whyWrong: 'Flicker below and watch the left edge. In one build it is a straight line; in the other, elements start at different positions. Each drift is small. The sum reads as careless.',
  },
  typescale: {
    prompt: 'Two builds of the same card. In one, the sizes were picked from a scale. Which?',
    toggle: ['on scale', 'crowded'],
    levels: [
      {
        render: (broken) => <TypeCard tokens={broken ? { hSize: 17, metaSize: 15 } : {}} />,
        note: 'The break: heading 21→17, meta 13→15. The three sizes now sit within 2px of each other and refuse to rank.',
      },
      {
        render: (broken) => <TypeCard tokens={broken ? { hSize: 18.5, metaSize: 14 } : {}} />,
        note: 'The break, smaller: heading 18.5 and meta 14 against the correct 21 and 13. The ranking survives, weakened.',
      },
      {
        render: (broken) => <TypeCard tokens={broken ? { hSize: 19.5, metaSize: 13.5 } : {}} />,
        note: 'The break, subtle: each size a step and a half from correct. You are no longer reading sizes; you are reading whether the card feels ranked.',
      },
    ],
    whyRight: 'The heading, the meta line, and the body sit on clearly different steps, so the card ranks itself. In the other build the sizes crowd into one register.',
    whyWrong: 'Flicker below and watch the heading. When sizes sit a pixel or two apart, your eye cannot rank them, and the card turns into one gray block of text.',
  },
  greyoncolor: {
    prompt: 'Two builds of the same banner, same text lightness. One keeps the supporting text clean; one goes muddy. Which is clean?',
    toggle: ['tinted', 'grey'],
    levels: [
      {
        render: (broken) => <ColorBanner sub={broken ? 'hsl(0 0% 90%)' : bannerTint} />,
        note: 'The break: saturation to zero. Same lightness, pure grey against the teal, and the paragraph reads faintly dirty.',
      },
      {
        render: (broken) => <ColorBanner sub={broken ? 'hsl(195 22% 90%)' : bannerTint} />,
        note: 'The break, smaller: a third of the tint’s saturation kept. Less mud, same direction.',
      },
      {
        render: (broken) => <ColorBanner sub={broken ? 'hsl(195 42% 90%)' : bannerTint} />,
        note: 'The break, subtle: two thirds of the saturation kept. The difference is a faint chill on the text; many production banners ship exactly this.',
      },
    ],
    whyRight: 'The clean text is the background hue, lightened. At the same lightness, grey on a colored background reads faintly dirty; a tint of the same hue reads as quiet.',
    whyWrong: 'Flicker below and watch the paragraph. Same lightness in both builds; only the hue moved. Grey on a colored background goes subtly muddy, and the fix is a light tint of the background hue itself.',
  },
  shadows: {
    prompt: 'Two builds of the same stat row. In one, every shadow agrees about the light. Which?',
    toggle: ['one light', 'mixed'],
    levels: [
      {
        render: (broken) => (
          <DepthRow shadows={broken ? [
            '0 0 14px hsl(200 30% 20% / 0.35)',
            '-4px -2px 6px hsl(200 30% 20% / 0.28)',
            '3px 8px 2px hsl(200 30% 20% / 0.45)',
          ] : consistentShadows} />
        ),
        note: 'The break: three cards, three physics. A glow with no direction, light from the lower right, and a hard dark smear.',
      },
      {
        render: (broken) => (
          <DepthRow shadows={broken ? [
            '0 1px 2px hsl(200 30% 20% / 0.08)',
            '-5px 3px 8px hsl(200 30% 20% / 0.22)',
            '0 6px 16px hsl(200 30% 20% / 0.12), 0 2px 4px hsl(200 30% 20% / 0.06)',
          ] : consistentShadows} />
        ),
        note: 'The break, smaller: one card lit from the side while its neighbors stay lit from above.',
      },
      {
        render: (broken) => (
          <DepthRow shadows={broken ? [
            '0 1px 2px hsl(200 30% 20% / 0.08)',
            '0 1px 2px hsl(200 30% 20% / 0.08)',
            '0 5px 4px hsl(200 30% 20% / 0.3)',
          ] : consistentShadows} />
        ),
        note: 'The break, subtle: the raised card keeps its direction but trades its soft wide shadow for a tight dark one. Same light, wrong weather.',
      },
    ],
    whyRight: 'Those cards share one light source, from above, in two strengths. In the other build the cards disagree about the physics, and the row stops feeling like one surface.',
    whyWrong: 'Flicker below and look at the shadows, not the cards. One build has a single light source in two strengths. The other disagrees with itself. Your eye trusts consistent light.',
  },
};

export default function ABFlicker({ demo, rounds = 3 }: { demo: keyof typeof DRILLS; rounds?: number }) {
  const def = DRILLS[demo];
  // Deterministic first paint (so the drill server-renders), randomized on mount.
  const [sides, setSides] = useState<Array<'A' | 'B'>>(() => Array(rounds).fill('A'));
  useEffect(() => {
    setSides(Array.from({ length: rounds }, () => (Math.random() < 0.5 ? 'A' : 'B')));
  }, [rounds]);

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
  const maxLevel = def.levels.length - 1;
  const lv = def.levels[Math.min(level, maxLevel)];
  const steppingUp = correct && level < maxLevel;

  const commit = (side: 'A' | 'B') => {
    if (committed) return;
    setPicked(side);
    if (side === goodSide) setScore((s) => s + 1);
    requestAnimationFrame(() => verdictRef.current?.focus());
  };

  const nextRound = () => {
    setLevel((l) => (correct ? Math.min(l + 1, maxLevel) : Math.max(l - 1, 0)));
    setRound((r) => r + 1);
    setPicked(null);
    setShowBroken(false);
  };

  return (
    <div className="drill">
      <div className="drill-body">
        <p className="drill-prompt">{def.prompt}</p>
        {rounds > 1 && <p className="round-note">Round {round + 1} of {rounds}</p>}

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
              <span style={{ pointerEvents: 'none', display: 'block' }}>{lv.render(side !== goodSide)}</span>
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
              <strong>{correct ? `Version ${goodSide}, caught.` : `It was version ${goodSide}.`}</strong>
              <div className="why">{lv.note}</div>
              {!lastRound && (
                <div className="why">
                  {steppingUp
                    ? 'Next round, the same tokens move a smaller distance.'
                    : correct
                      ? 'Next round holds this difficulty.'
                      : 'Next round, the same tokens move a bigger distance.'}
                </div>
              )}
              {lastRound && (
                <div className="why">
                  {rounds > 1 && `You caught ${score} of ${rounds}. `}
                  {correct ? def.whyRight : def.whyWrong}
                </div>
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
                  {lv.render(showBroken)}
                </div>
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
