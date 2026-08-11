import { useMemo, useRef, useState } from 'react';
import { DRILLS, type DrillDef } from './ABFlicker';

/* ---------------------------------------------------------------------------
   The exit drill: 14 mixed trials across all seven perturbation families,
   randomized order and magnitude, scored per family. This is the course
   checking its own claim: after ten modules, can you actually see it?
--------------------------------------------------------------------------- */

const FAMILIES = Object.keys(DRILLS) as Array<keyof typeof DRILLS>;

const MODULE_FOR: Record<string, [string, string]> = {
  spacing: ['Module 2, Space', '02-space'],
  proximity: ['Module 2, Space', '02-space'],
  alignment: ['Module 2, Space', '02-space'],
  hierarchy: ['Module 1, Hierarchy', '01-hierarchy'],
  typescale: ['Module 3, Type', '03-type'],
  greyoncolor: ['Module 4, Color', '04-color'],
  shadows: ['Module 5, Depth & polish', '05-depth-and-polish'],
};

interface Trial { family: keyof typeof DRILLS; level: number; goodSide: 'A' | 'B' }

function makeTrials(): Trial[] {
  const trials: Trial[] = [];
  for (const family of FAMILIES) {
    for (const level of [Math.floor(Math.random() * 2), 1 + Math.floor(Math.random() * 2)]) {
      trials.push({ family, level, goodSide: Math.random() < 0.5 ? 'A' : 'B' });
    }
  }
  for (let i = trials.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [trials[i], trials[j]] = [trials[j], trials[i]];
  }
  return trials;
}

export default function ExitDrill({ base = '/' }: { base?: string }) {
  const [seed, setSeed] = useState(0);
  const trials = useMemo(() => makeTrials(), [seed]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<null | 'A' | 'B'>(null);
  const [results, setResults] = useState<Array<{ family: string; correct: boolean }>>([]);
  const verdictRef = useRef<HTMLDivElement>(null);

  const done = idx >= trials.length;
  const trial = done ? null : trials[idx];
  const def: DrillDef | null = trial ? DRILLS[trial.family] : null;
  const committed = picked !== null;
  const correct = trial && picked === trial.goodSide;

  const commit = (side: 'A' | 'B') => {
    if (committed || !trial) return;
    setPicked(side);
    setResults((r) => [...r, { family: trial.family, correct: side === trial.goodSide }]);
    requestAnimationFrame(() => verdictRef.current?.focus());
  };

  const next = () => { setIdx((i) => i + 1); setPicked(null); };
  const restart = () => { setSeed((s) => s + 1); setIdx(0); setPicked(null); setResults([]); };

  if (done) {
    const total = results.filter((r) => r.correct).length;
    const byFamily = FAMILIES.map((f) => {
      const rs = results.filter((r) => r.family === f);
      return { f, got: rs.filter((r) => r.correct).length, of: rs.length };
    });
    const weak = byFamily.filter((b) => b.got < b.of);
    return (
      <div className="drill">
        <div className="drill-body">
          <p className="drill-prompt">You caught {total} of {trials.length}.</p>
          <ol className="annots">
            {byFamily.map(({ f, got, of }) => (
              <li key={f}>
                <span className="n">{got}/{of}</span>
                <span>
                  {f === 'greyoncolor' ? 'grey on color' : f}
                  {got < of && (
                    <> — worth a pass back through <a href={`${base}modules/${MODULE_FOR[f][1]}/`}>{MODULE_FOR[f][0]}</a></>
                  )}
                </span>
              </li>
            ))}
          </ol>
          <p style={{ fontSize: 'var(--t-1)', color: 'var(--ink-2)' }}>
            {total >= 12
              ? 'That is a working eye. The families you missed are one reread away.'
              : total >= 9
                ? 'Solid. The misses above are specific, which means the fix is specific too.'
                : weak.length > 0
                  ? 'The misses cluster, and clusters are good news: reread the modules above and run this again. The items are generated fresh each time, so memorizing is not an option.'
                  : 'Run it again for a fresh set.'}
          </p>
          <div className="drill-actions">
            <button type="button" className="btn btn-ghost" onClick={restart}>Run it again, fresh items</button>
          </div>
        </div>
      </div>
    );
  }

  const render = def!.levels[Math.min(trial!.level, def!.levels.length - 1)];
  return (
    <div className="drill">
      <div className="drill-body">
        <p className="round-note">Trial {idx + 1} of {trials.length}</p>
        <p className="drill-prompt">{def!.prompt}</p>
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
                {committed && trial!.goodSide === side && <span className="pick-badge">the answer</span>}
              </span>
              <span style={{ pointerEvents: 'none', display: 'block' }}>{render(side !== trial!.goodSide)}</span>
            </button>
          ))}
        </div>
        {committed && (
          <>
            <div className="verdict" data-kind={correct ? 'good' : 'bad'} ref={verdictRef} tabIndex={-1} role="status">
              <strong>{correct ? 'Caught it.' : `It was version ${trial!.goodSide}: the “${def!.toggle[1]}” build.`}</strong>
            </div>
            <div className="drill-actions" style={{ marginTop: 'var(--s-4)' }}>
              <button type="button" className="btn btn-ghost" onClick={next}>
                {idx + 1 === trials.length ? 'See the score' : 'Next trial'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
