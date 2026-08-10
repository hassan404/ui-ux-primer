import { useState } from 'react';
import { InvoiceCard, MismatchCard } from './demos';
import { ContrastPair } from './demos2';

/* ---------------------------------------------------------------------------
   Archetype 2 — predict, then reveal.
   The explanation stays locked until the learner commits to an answer.
   Props are plain data (no JSX across the island boundary).
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
  const committed = picked !== null;

  return (
    <div className="drill">
      <div className="drill-bar"><span className="dot" /> drill · answer before you read on</div>
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
              disabled={committed}
              onClick={() => setPicked(i)}
            >
              {opt}
            </button>
          ))}
        </div>
        {committed && (
          <div className="verdict" data-kind={picked === answer ? 'good' : 'note'}>
            <strong>{revealTitle}</strong>
            <div className="why">{revealBody}</div>
          </div>
        )}
      </div>
    </div>
  );
}
