import { useEffect, useRef, useState } from 'react';
import { DRILLS, type DrillDef } from './ABFlicker';
import { EXAM_DRILLS, EXAM_MODULE_FOR } from './drills-exam';

/* ---------------------------------------------------------------------------
   The exit drill: 14 mixed trials, scored per family.
   Composition per run: one trial from each of the seven in-course families,
   one from five of the six out-of-syllabus exam families, and two wildcards
   from the whole pool. Levels, sides, order, and the exam sample all
   re-randomize each run, so no two runs serve the same test.
--------------------------------------------------------------------------- */

const ALL: Record<string, DrillDef> = { ...DRILLS, ...EXAM_DRILLS };
const CORE = Object.keys(DRILLS);
const EXAM = Object.keys(EXAM_DRILLS);

const NAME: Record<string, string> = {
  spacing: 'spacing scale', hierarchy: 'hierarchy', proximity: 'proximity',
  alignment: 'alignment', typescale: 'type scale', greyoncolor: 'grey on color', shadows: 'shadows',
  xhierarchy: 'hierarchy, unseen surface', xgrouping: 'grouping, unseen surface',
  xlineheight: 'line height, unseen surface', xcontrast: 'contrast, unseen surface',
  xradius: 'corner nesting, unseen surface', xlabels: 'form labels, unseen surface',
};

const MODULE_FOR: Record<string, [string, string]> = {
  spacing: ['Module 2, Space', '02-space'],
  proximity: ['Module 2, Space', '02-space'],
  alignment: ['Module 2, Space', '02-space'],
  hierarchy: ['Module 1, Hierarchy', '01-hierarchy'],
  typescale: ['Module 3, Type', '03-type'],
  greyoncolor: ['Module 4, Color', '04-color'],
  shadows: ['Module 5, Depth & polish', '05-depth-and-polish'],
  ...EXAM_MODULE_FOR,
};

interface Trial { family: string; level: number; goodSide: 'A' | 'B' }

const rnd = (n: number) => Math.floor(Math.random() * n);
const shuffle = <T,>(xs: T[]): T[] => {
  const a = xs.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = rnd(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

function trialFor(family: string): Trial {
  return {
    family,
    level: rnd(ALL[family].levels.length),
    goodSide: Math.random() < 0.5 ? 'A' : 'B',
  };
}

function plainTrials(): Trial[] {
  // Deterministic first paint so the page server-renders; replaced on mount.
  return [...CORE, ...EXAM.slice(0, 5), CORE[0], EXAM[5]].map((family) => ({ family, level: 0, goodSide: 'A' as const }));
}

function makeTrials(): Trial[] {
  const trials = [
    ...CORE.map(trialFor),
    ...shuffle(EXAM).slice(0, 5).map(trialFor),
    ...shuffle([...CORE, ...EXAM]).slice(0, 2).map(trialFor),
  ];
  return shuffle(trials);
}

export default function ExitDrill({ base = '/' }: { base?: string }) {
  const [trials, setTrials] = useState<Trial[]>(plainTrials);
  useEffect(() => { setTrials(makeTrials()); }, []);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<null | 'A' | 'B'>(null);
  const [results, setResults] = useState<Array<{ family: string; correct: boolean }>>([]);
  const verdictRef = useRef<HTMLDivElement>(null);

  const done = idx >= trials.length;
  const trial = done ? null : trials[idx];
  const def: DrillDef | null = trial ? ALL[trial.family] : null;
  const committed = picked !== null;
  const correct = trial && picked === trial.goodSide;

  const commit = (side: 'A' | 'B') => {
    if (committed || !trial) return;
    setPicked(side);
    setResults((r) => [...r, { family: trial.family, correct: side === trial.goodSide }]);
    requestAnimationFrame(() => verdictRef.current?.focus());
  };

  const next = () => { setIdx((i) => i + 1); setPicked(null); };
  const restart = () => { setTrials(makeTrials()); setIdx(0); setPicked(null); setResults([]); };

  if (done) {
    const total = results.filter((r) => r.correct).length;
    const seen = [...new Set(results.map((r) => r.family))];
    const byFamily = seen.map((f) => {
      const rs = results.filter((r) => r.family === f);
      return { f, got: rs.filter((r) => r.correct).length, of: rs.length };
    }).sort((a, b) => (a.got / a.of) - (b.got / b.of));
    return (
      <div className="drill">
        <div className="drill-body">
          <p className="drill-prompt">You caught {total} of {trials.length}.</p>
          <ol className="annots">
            {byFamily.map(({ f, got, of }) => (
              <li key={f}>
                <span className="n">{got}/{of}</span>
                <span>
                  {NAME[f] ?? f}
                  {got < of && (
                    <> — worth a pass back through <a href={`${base}modules/${MODULE_FOR[f][1]}/`}>{MODULE_FOR[f][0]}</a></>
                  )}
                </span>
              </li>
            ))}
          </ol>
          <p style={{ fontSize: 'var(--t-1)', color: 'var(--ink-2)' }}>
            {total >= 12
              ? 'That is a working eye, including on surfaces the course never showed you. The families you missed are one reread away.'
              : total >= 9
                ? 'Solid. The misses above are specific, which means the fix is specific too.'
                : 'The misses cluster, and clusters are good news: reread the modules above and run this again. Items, difficulty, and the surprise set are fresh each run, so memorizing will not help, and it does not need to.'}
          </p>
          <div className="drill-actions">
            <button type="button" className="btn btn-ghost" onClick={restart}>Run it again, fresh items</button>
          </div>
        </div>
      </div>
    );
  }

  const lv = def!.levels[Math.min(trial!.level, def!.levels.length - 1)];
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
              <span style={{ pointerEvents: 'none', display: 'block' }}>{lv.render(side !== trial!.goodSide)}</span>
            </button>
          ))}
        </div>
        {committed && (
          <>
            <div className="verdict" data-kind={correct ? 'good' : 'bad'} ref={verdictRef} tabIndex={-1} role="status">
              <strong>{correct ? 'Caught it.' : `It was version ${trial!.goodSide}.`}</strong>
              <div className="why">{lv.note}</div>
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
