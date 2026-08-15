import type { DrillDef } from './ABFlicker';
import { TeamCard, Toolbar, NoteCard, CtaCard, MediaCard, FilledForm } from './demos-exam';

/* ---------------------------------------------------------------------------
   Out-of-syllabus drill families, one per course section. Same contract as
   the in-course DRILLS: levels perturb the same tokens, higher = subtler.
--------------------------------------------------------------------------- */

export const EXAM_DRILLS: Record<string, DrillDef> = {
  xhierarchy: {
    prompt: 'A team list you have never seen. On one build you can scan the names in one pass. Which?',
    toggle: ['ranked', 'flat'],
    levels: [
      {
        render: (broken) => (broken ? <TeamCard roleSize={14} roleWeight={600} roleColor="hsl(200 25% 15%)" /> : <TeamCard />),
        note: 'The break: the roles got the names’ size, weight, and color. Six equally loud lines, no scan path.',
      },
      {
        render: (broken) => (broken ? <TeamCard roleSize={13.5} roleWeight={500} roleColor="hsl(200 18% 28%)" /> : <TeamCard />),
        note: 'The break, subtler: the roles crept up in size, weight, and darkness. The names still lead, barely.',
      },
    ],
    whyRight: 'Names dark and firm, roles small and gray. The list ranks itself, and module 1 never showed you this card.',
    whyWrong: 'Scan the ranked build: your eye hops name to name and the roles wait their turn. In the flat build every line competes. Same lesson as module 1, new surface.',
  },
  xgrouping: {
    prompt: 'Two toolbars, same nine buttons. One tells you which actions belong together. Which?',
    toggle: ['grouped', 'even'],
    levels: [
      {
        render: (broken) => (broken ? <Toolbar inGap={14} betweenGap={14} /> : <Toolbar />),
        note: 'The break: every gap equal at 14px. Nine strangers in a row; the formatting, insert, and history groups dissolved.',
      },
      {
        render: (broken) => (broken ? <Toolbar inGap={9} betweenGap={16} /> : <Toolbar />),
        note: 'The break, subtler: groups still gap wider than members, but at 9 versus 16 the ratio is too weak to read at a glance.',
      },
    ],
    whyRight: 'Tight inside a group, wide between groups. Distance declared the structure before you read a single label.',
    whyWrong: 'Count the groups in each build. In one, three clusters pop out; in the other you have to read the labels to find them. That is module 2’s ratio rule on a surface it never showed you.',
  },
  xlineheight: {
    prompt: 'The same support reply, two builds. One is comfortable to read. Which?',
    toggle: ['1.55', 'cramped'],
    levels: [
      {
        render: (broken) => <NoteCard lh={broken ? 1.12 : 1.55} />,
        note: 'The break: line height 1.12. The lines press into each other and the paragraph feels tense.',
      },
      {
        render: (broken) => <NoteCard lh={1.3} />,
        note: 'The break, subtler: 1.3, the print value on a screen. Readable, and tighter than a scanning distance wants.',
      },
    ],
    whyRight: 'Around 1.5, each line hands off to the next without effort. You felt this in module 3’s slider; here it is in the wild.',
    whyWrong: 'Read three lines of each build and notice where your eye stumbles on the return sweep. The cramped build makes every line break a small tax.',
  },
  xcontrast: {
    prompt: 'One of these buttons passes the 4.5:1 text floor. Which?',
    toggle: ['passes', 'fails'],
    levels: [
      {
        render: (broken) => <CtaCard btnBg={broken ? 'hsl(195 60% 62%)' : undefined} />,
        note: 'The break: white text on a 62%-lightness teal, roughly 2.2:1. Pretty in a mockup, gone in daylight.',
      },
      {
        render: (broken) => <CtaCard btnBg={broken ? 'hsl(195 65% 45%)' : undefined} />,
        note: 'The break, subtler: white on 45% lightness, roughly 3.5:1. It looks fine, which is exactly why the floor is a number and not a feeling.',
      },
    ],
    whyRight: 'The passing build is white on the dark teal, above 4.5:1. Your eye ranked the two correctly; module 4’s point is that it cannot measure them, so keep the checker.',
    whyWrong: 'The lighter button reads as friendlier and fails the floor. This is the most common contrast failure in shipped products: a brand color used at a lightness the text cannot survive.',
  },
  xradius: {
    prompt: 'Two media cards, same content. On one, the corners agree with each other. Which?',
    toggle: ['concentric', 'fighting'],
    levels: [
      {
        render: (broken) => <MediaCard innerRadius={broken ? 16 : 5} />,
        note: 'The break: the inner image is rounder than the card that contains it, 16 inside 12. Nested corners must shrink; these fight.',
      },
      {
        render: (broken) => <MediaCard innerRadius={broken ? 12 : 5} />,
        note: 'The break, subtler: inner radius equal to the outer, 12 in 12. The corner gap thins at the curve, and the eye reads a faint wrongness it cannot name.',
      },
    ],
    whyRight: 'Inner radius ≈ outer radius minus the padding between them. Module 5 stated the rule; this is what it protects.',
    whyWrong: 'Look only at a corner. In one build the two curves run parallel; in the other they pinch. Nobody names this consciously and everybody’s eye checks it.',
  },
  xlabels: {
    prompt: 'Both forms were half filled in. On one you can still tell what every answer means. Which?',
    toggle: ['labeled', 'placeholders'],
    levels: [
      {
        render: (broken) => <FilledForm placeholderOnly={broken} />,
        note: 'The break: placeholder-as-label. The filled field now reads “10115” with no clue what it answers, and the question is gone forever.',
      },
      {
        render: (broken) => <FilledForm placeholderOnly={broken} />,
        note: 'Same break, second look: the empty field still shows its question and the filled one does not. Placeholders die exactly when the user starts succeeding.',
      },
    ],
    whyRight: 'Labels above fields survive typing. Module 6’s rule, tested on a form no module showed you.',
    whyWrong: 'Cover the labels build and look at the placeholder build: what is 10115? A zip? A customer number? The interface deleted its own question the moment it was answered.',
  },
};

export const EXAM_MODULE_FOR: Record<string, [string, string]> = {
  xhierarchy: ['Module 1, Hierarchy', '01-hierarchy'],
  xgrouping: ['Module 2, Space', '02-space'],
  xlineheight: ['Module 3, Type', '03-type'],
  xcontrast: ['Module 4, Color', '04-color'],
  xradius: ['Module 5, Depth & polish', '05-depth-and-polish'],
  xlabels: ['Module 6, Behavior', '06-behavior'],
};
