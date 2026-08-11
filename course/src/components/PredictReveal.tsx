import { useRef, useState } from 'react';
import { InvoiceCard, MismatchCard } from './demos';
import { ContrastPair } from './demos2';

/* ---------------------------------------------------------------------------
   Archetype 2 — predict, then reveal.
   The explanation stays locked until the learner commits to an answer.
--------------------------------------------------------------------------- */

export default function PredictReveal({
  prompt,
  options,
  answer,
  revealTitle,
  revealBody,
  stage,
}: {
  prompt: string;
  options: string[];
  answer: number;
  revealTitle: string;
  revealBody: string;
  stage?: 'mismatch' | 'invoice' | 'contrast';
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const verdictRef = useRef<HTMLDivElement>(null);
  const committed = picked !== null;

  const commit = (i: number) => {
    if (committed) return;
    setPicked(i);
    requestAnimationFrame(() => verdictRef.current?.focus());
  };

  return (
    <div className="drill">
      <div className="drill-body">
        <p className="drill-prompt">{prompt}</p>
        {stage && (
          <div className="demo-mat" style={{ marginBottom: 'var(--s-4)' }}>
            {stage === 'mismatch' ? <MismatchCard /> : stage === 'contrast' ? <ContrastPair /> : <InvoiceCard />}
          </div>
        )}
        <div role="group" aria-label="Your prediction">
          {options.map((opt, i) => (
            <button
              key={opt}
              type="button"
              className="option-btn"
              data-picked={committed && picked === i}
              data-correct={committed && i === answer}
              aria-disabled={committed}
              onClick={() => commit(i)}
            >
              {opt}
              {committed && picked === i && <span className="pick-badge">your pick</span>}
              {committed && i === answer && <span className="pick-badge">the answer</span>}
            </button>
          ))}
        </div>
        {committed && (
          <div
            className="verdict"
            data-kind={picked === answer ? 'good' : 'note'}
            ref={verdictRef}
            tabIndex={-1}
            role="status"
          >
            <strong>{revealTitle}</strong>
            <div className="why">{revealBody}</div>
          </div>
        )}
      </div>
    </div>
  );
}
