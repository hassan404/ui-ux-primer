import { useState } from 'react';
import { MismatchCard } from './demos';

/* ---------------------------------------------------------------------------
   The critique card, performed once inside the course. Nine questions run
   against a screen the learner has already met, each with a written answer
   to compare against. Procedures become habits by being executed, not read.
--------------------------------------------------------------------------- */

const QUESTIONS: Array<{ q: string; model: string }> = [
  {
    q: 'What is this screen’s job, in one sentence?',
    model: 'Get a trial user to pick a paid plan before day three. One sentence works, so the screen itself is not the problem yet.',
  },
  {
    q: 'Where did your eye land first, and is that the most important thing?',
    model: 'The filled "Compare all 14 features" button. It is not the most important thing; the upgrade is. Prominence and importance disagree, which module 1 named as the most fixable bug.',
  },
  {
    q: 'What does it want you to do next, and how fast did you know?',
    model: 'The pixels say "compare," the business wants "upgrade," and it takes a moment to notice the grey link is the real ask. Anything that needs a moment costs signups.',
  },
  {
    q: 'What happens when it is empty, loading, failing, or overflowing?',
    model: 'A static card avoids this one, and that is the point of the question: nobody shows you those states, so you ask every time. Here, the honest answer is "unknown," which on a real screen means "unfinished."',
  },
  {
    q: 'Which gaps disagree with the scale, and did anyone choose that?',
    model: 'The title-to-body gap (8) and body-to-buttons gap (20) are both off the 4/8/12/16/24 scale used elsewhere at 20. Nothing suggests a choice; it reads as drift.',
  },
  {
    q: 'What would you remove?',
    model: 'The feature-comparison button, or at least its fill. With it quieted to a text link, the card has one loud thing and the job gets done by default.',
  },
  {
    q: 'Where did the maker decide, and where did they default?',
    model: 'The headline and body read as decided. The button treatments read as defaults: a component library primary got reused for whichever action was coded first.',
  },
  {
    q: 'Whose taste is this serving, the user’s or the maker’s?',
    model: 'Neither, which is worse: it serves the component library. No user is served by a loud detour, and no maker chose it on purpose.',
  },
  {
    q: 'Can you say why it fails, in sentences a colleague could act on?',
    model: 'Yes: "Swap the two button treatments. The primary action should be the filled one. Two-minute fix." A critique that ends in a two-minute fix is a critique that gets acted on.',
  },
];

export default function CritiqueWalkthrough() {
  const [step, setStep] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [note, setNote] = useState('');
  const q = QUESTIONS[step];

  const advance = () => {
    setStep((s) => s + 1);
    setRevealed(false);
    setNote('');
  };

  return (
    <div className="drill">
      <div className="drill-body">
        <p className="round-note">Question {step + 1} of {QUESTIONS.length}, against a screen you met in module 1</p>
        <div className="demo-mat" style={{ marginBottom: 'var(--s-4)' }}>
          <MismatchCard />
        </div>
        <p className="drill-prompt">{q.q}</p>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={2}
          placeholder="One or two sentences. Writing it is the exercise."
          aria-label="Your answer"
          style={{
            width: '100%', font: 'inherit', fontSize: 'var(--t-1)',
            padding: 'var(--s-3)', border: '1px solid var(--line)',
            borderRadius: 'var(--r-1)', resize: 'vertical', background: 'var(--card)',
            color: 'var(--ink)',
          }}
        />
        <div className="drill-actions" style={{ marginTop: 'var(--s-3)' }}>
          {!revealed ? (
            <button type="button" className="btn btn-ghost" onClick={() => setRevealed(true)}>
              Compare with a strong answer
            </button>
          ) : step + 1 < QUESTIONS.length ? (
            <button type="button" className="btn btn-ghost" onClick={advance}>Next question</button>
          ) : (
            <button type="button" className="btn btn-ghost" onClick={() => { setStep(0); setRevealed(false); setNote(''); }}>
              Start over
            </button>
          )}
        </div>
        {revealed && (
          <div className="verdict" data-kind="note" role="status">
            <div className="why">{q.model}</div>
            {step + 1 === QUESTIONS.length && (
              <div className="why">
                That is the whole procedure, once. It took a few minutes against a card you had already seen.
                Now it is a habit with a template: one screen you admire, one you resent, weekly, in writing.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
