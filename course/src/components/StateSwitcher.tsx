import { useState } from 'react';
import { StateCard, type UiState } from './demos2';

/* ---------------------------------------------------------------------------
   The states drill: one card, four realities. The ideal state is the one
   the interface spends the least time in.
--------------------------------------------------------------------------- */

const STATES: Array<{ key: UiState; label: string; caption: string }> = [
  {
    key: 'ideal',
    label: 'ideal',
    caption: 'The state you designed. Real data, right amount of it. Users see this less often than you do.',
  },
  {
    key: 'empty',
    label: 'empty',
    caption: 'The first thing a new user meets. Say what will appear here and hand them the first action. An empty screen with no explanation reads as broken.',
  },
  {
    key: 'loading',
    label: 'loading',
    caption: 'A skeleton holds the layout so content lands without a jolt. Under about 300ms, show nothing; a flash of spinner reads as slower than no spinner.',
  },
  {
    key: 'error',
    label: 'error',
    caption: 'Say what happened, whether their data survived, and what to do next. Then offer the retry. Compare this with a bare "Something went wrong."',
  },
];

export default function StateSwitcher() {
  const [idx, setIdx] = useState(0);
  return (
    <div className="drill">
      <div className="drill-body">
        <div className="seg" role="group" aria-label="UI states">
          {STATES.map((s, i) => (
            <button key={s.key} type="button" aria-pressed={idx === i} onClick={() => setIdx(i)}>
              {s.label}
            </button>
          ))}
        </div>
        <div className="demo-mat" style={{ marginTop: 'var(--s-4)' }}>
          <StateCard state={STATES[idx].key} />
        </div>
        <p className="stepper-caption">{STATES[idx].caption}</p>
      </div>
    </div>
  );
}
