# 09 — Delivery Mechanisms & Formats (raw inventory)

**Scope of this document.** How the world's best learning experiences are *packaged and delivered* — the container, not the content. Other agents own the UX subject matter, syllabus content, and community learning-path threads. Nothing here prescribes what the course teaches; it inventories *forms* the course could take, with pedagogy notes, build-cost estimates, and a fit assessment against the hardest requirement in this project: **teaching visual judgement**, which needs showing, comparing, and difference-spotting rather than explaining.

**Method & verification status.** Research was done via web search and direct page fetches. Two constraints shaped the result and you should know about them before trusting any single line:

- The session's shared web-search budget (200 calls across 9 parallel agents) was exhausted partway through my run.
- The network egress proxy blocked direct fetches to most non-GitHub domains, including `joshwcomeau.com`, `css-for-js.dev`, `executeprogram.com`, `mathacademy.com`, `ncase.me`, `ciechanowski.com`, `redblobgames.com`, `distill.pub`, `en.wikipedia.org`, and `news.ycombinator.com`. GitHub fetches worked.

So every claim below carries one of three tags:

- **[F]** — *Fetched*. I read the page directly this session.
- **[S]** — *Search-derived*. From search-result summaries with cited URLs; the URL is real and the claim came from the summary, but I did not read the primary page.
- **[K]** — *Prior knowledge, unverified this session*. Included because it's load-bearing for the inventory. **Treat every [K] number as needing a fact-check before it goes in front of a learner or a stakeholder.**

Build-cost estimates are my own engineering judgement unless a source is cited, and are stated in *developer-days for one competent full-stack dev*, assuming a Next.js/MDX-ish stack.

---

## Part 1 — Format families

### 1A. The premium interactive course (the "Comeau model")

#### Josh Comeau — *CSS for JavaScript Developers*, *The Joy of React*, *Whimsical Animations*

**What it is.** A paid, self-hosted, self-paced course delivered as a custom web app rather than a video platform. Content is a *blend*: prose articles, short videos, interactive widgets embedded inline, mini-games, small exercises, and larger real-world-inspired projects. **[S]** The marketing copy makes the anti-video positioning explicit: the courses "aren't like other online courses where you sit back and watch someone code — instead there are tons of interactive widgets, exercises, real-world-inspired projects." **[S]**

Reviewers consistently single out three things: the mix of interactive examples with animated explanations, "unusually patient pacing," and an authorial tone that encourages exploration rather than compliance. **[S]** The course is structured as ~10 modules covering the major CSS layout modes. **[S]**

**Why it works (pedagogy).**
- *Generative interaction before explanation.* The widgets are usually manipulable models of the thing being taught (e.g. drag a flex container and watch items reflow), which builds an intuition — a runnable mental model — rather than a memorised rule.
- *Interleaved modality.* Prose for precision, video for demonstration of process, widget for intuition, exercise for retrieval. Each concept gets hit through more than one channel, which is a cheap and reliable way to raise retention without adding content.
- *Pacing as a UX decision.* Short lessons with visible completion state reduce the "wall of knowledge" effect. Progress is legible, so the learner always knows the size of the remaining commitment.
- *Tone as retention.* The writing is personable and low-status-threat, which matters enormously for a developer audience learning something they feel bad at. This is directly relevant here: developers learning visual design are, by definition, being asked to be a beginner in public.

**Why it works (UX).** The course *is* a piece of well-made software, which for a design course is a credibility argument in itself. A course teaching visual judgement that looks bad has already lost.

**Build cost.** **High.** This is the expensive option. Josh Comeau's platform is a bespoke app; each interactive widget is a custom React component with its own state model, animation, and edge cases. Estimate **1–4 dev-days per genuinely good interactive widget**, plus 20–40 days of platform (auth, progress, payments, video hosting, MDX pipeline) if built from scratch. The commercial context: the course was pre-sold and reportedly reached **$550k in revenue** **[S]** (per a Failory interview), which is what justifies that build cost — it's a product, not a blog post.

**Fit for teaching visual judgement.** **Excellent, and the closest existing template.** The widget-in-prose pattern is exactly the right vehicle for "here is the same UI with 8px vs 24px of padding — drag the slider and watch it become correct." Visual judgement is a *comparison* skill, and inline manipulable comparisons are the highest-bandwidth way to deliver comparisons. The main risk is cost: a design course needs *many* comparisons, and if each one is a bespoke React component the budget explodes. **The mitigation is a small number of reusable widget archetypes** (see "Radical ideas", §3.1).

- https://css-for-js.dev/
- https://courses.joshwcomeau.com/css-for-js
- https://www.joshwcomeau.com/courses/
- https://www.joyforjs.com/
- https://www.failory.com/interview/css-for-js-developers
- https://ldirer.com/blog/posts/css-for-js-and-joy-of-react-a-review (third-party review; blocked from direct fetch)

---

#### Execute Program (Gary Bernhardt) — SRS-gated interactive lessons

**What it is.** A paid platform teaching JS, TypeScript, SQL, and regex. The radical part is the structure: **courses are made primarily of code examples, not prose** — a typical course is *hundreds of small examples* rising slowly in complexity, with prose interleaved between live programming problems. **[S]** Every example is interactive and auto-checkable.

**The gating mechanic — the genuinely novel bit.** Lessons you've completed are re-served over time by a spaced-repetition scheduler. You don't just move forward; the system pulls you back to review by making you complete *tiny programs* again. **[S]** Crucially, **the learner never self-grades** — because all review items are executable code examples, the system checks them automatically. **[S]** This removes the single biggest failure mode of conventional SRS (dishonest or noisy self-assessment).

**Why it works.**
- *Retrieval practice with objective scoring.* The review item is a task, not a card-flip. Performance is measured, not reported.
- *Spacing without user effort.* The learner doesn't maintain a deck; the course *is* the deck.
- *Micro-increments.* Hundreds of examples with tiny deltas between them is effectively a worked-example → faded-example → independent-problem ramp, which is the classic cognitive-load-theory progression (see §2C).

**Criticisms / limits.** The catalogue stayed small (JS, TS, SQL, regex) **[S]**, which is telling: the format is *extremely* expensive per unit of content because every item must be machine-checkable. It also only works for domains with an objective right answer.

**Build cost.** **Very high** for the engine (scheduler, execution sandbox, per-item state, review queue: 30–60 dev-days), but *low per item once built*. The economics invert versus the Comeau model: Comeau is cheap platform / expensive content; Execute Program is expensive platform / cheap content.

**Fit for teaching visual judgement.** **Partial but very interesting.** The blocker is auto-checkability: "is this layout well-balanced?" has no `assert`. **But** the difference-spotting variant *is* auto-checkable — "which of these two is correct?" and "click the element that's misaligned" both have objectively right answers. That converts visual judgement into an SRS-schedulable, machine-graded item type. **This is arguably the single most important structural insight in this whole document** — see §3.2.

- https://www.executeprogram.com/spaced-repetition (blocked from direct fetch)
- https://notes.andymatuschak.org/z2LGZ8cXBcQMP7YuAHbeVyCSLZoiMXvQNKCok (Andy Matuschak's note on Execute Program; blocked)
- https://mike.place/2020/executeprogram/
- https://code.brettchalupa.com/execute-program-review
- https://news.ycombinator.com/item?id=42278400
- https://www.destroyallsoftware.com/

---

#### Brilliant.org — problem-first, no video

**What it is.** Interactive STEM lessons delivered as **a short sequence of problems and visualisations with no video lectures**. **[S]** The architecture deliberately "forces the learner to do the cognitive work — manipulate the diagram, predict the outcome, solve the problem — *before* showing the explanation." **[S]**

**The stated pedagogical thesis** is worth quoting because it applies directly to design education: passive video consumption is the wrong medium because **students think they understand when the explanation makes sense, but can't solve a problem when they meet one.** **[S]** That illusion-of-competence gap is *severe* in visual design — reading "use consistent spacing" produces total comprehension and zero capability.

**Criticisms.** Users report the interactivity is often shallow — "sliders that users move up and down" and not much more. **[S]** It's also poorly suited to learners who want a lecture, and weak on audio/accessibility (no read-aloud option noted). **[S]** Reviews on actual learning outcomes are mixed. **[S]**

**Build cost.** Medium-high per lesson; the *format* (predict → attempt → reveal) is cheap to implement and is mostly an editorial discipline, not an engineering one. **A "predict before reveal" wrapper component is maybe 1–2 dev-days and is the single highest-leverage cheap thing on this list.**

**Fit for visual judgement.** **Very good, and cheap.** "Before I tell you which is better, commit to an answer" is implementable as a plain radio-button-then-reveal component over two static screenshots. The pedagogy (forced commitment before feedback) does the heavy lifting; the engineering is trivial.

- https://brilliant.org/about/
- https://brilliant.org/faq/
- https://brilliant.org/courses/
- https://beginnersinai.org/brilliant-explained/
- https://learnopoly.com/brilliant-org-review/
- https://brighterly.com/blog/is-brilliant-org-worth-it/

---

#### Duolingo — streaks, bite-size, gamification

**What it is.** The reference implementation of gamified micro-learning: 2–5 minute lessons, streaks, XP, leagues, hearts, and heavy notification-driven re-engagement.

**Numbers found** (all **[S]**, all from secondary/marketing-adjacent sources — **flag these as needing verification, several read like vendor blog content**):
- DAU grew >10x since 2019; ~36% YoY DAU increase in 2025; monthly churn fell from 47% (2020) to ~28% in Western markets by late 2025.
- One cited figure: streaks lifting retention "from 12% to 55%"; users with active streaks "three times more likely" to reach intermediate proficiency.
- A cited EdTech loyalty study: 80% of students credited gamification as the main reason for continued daily use.
- Peer-reviewed efficacy work claims beginner-module completers reach reading/listening scores equivalent to a semester of college instruction.
- The product is explicitly grounded in spacing-effect and memory-retention research, with constant A/B testing. **[S]**

**Why it works.** Bite-size lessons dismantle the "wall of knowledge"; visible small wins produce a felt sense of competence long before actual competence; streaks convert an intrinsic-motivation problem into a loss-aversion problem.

**The honest criticism** (**[K]**, widely argued): streaks optimise *for the streak*, not for learning. Learners game them with the easiest possible lesson, and the metric that improves is engagement, not capability. For a short, ruthlessly-prioritised course aimed at professionals, a streak is probably actively wrong — it implies an indefinite commitment when the whole pitch is "this is short and then you're done."

**Build cost.** Streaks/XP/progress: 3–8 dev-days. Requires accounts and persistence, which is a real product-surface cost for what might otherwise be a static site.

**Fit for visual judgement.** **Low as a primary format, moderate as a garnish.** Bite-size is right. Streaks are probably wrong for this course. A "daily eye-training rep" as an *optional* post-course appendix is the defensible version (see §3.4).

- https://www.strivecloud.io/duolingo-gamification-explained
- https://www.strivecloud.io/blog/blog-gamification-examples-boost-user-retention-duolingo
- https://trophy.so/blog/duolingo-gamification-case-study
- https://www.youngurbanproject.com/duolingo-case-study/
- https://www.uladshauchenka.com/p/duolingo-case-study-the-gamification
- https://medium.com/@flordaniele/decoding-duolingo-a-case-study-on-the-impact-of-gamification-on-user-experience-90b5bac3ada0
- https://www.academicjobs.com/global/global-news/how-online-language-learning-streaks-supercharge-user-motivation-and-retention-108

---

#### Math Academy — knowledge graph + aggressive mastery-based SRS

**What it is.** An adaptive mathematics platform built on a **knowledge graph** of topics and prerequisites, layered with mastery learning, distributed practice, and interleaving. **[S]**

Mechanics worth stealing:
- **Knowledge graph + student model.** The graph connects every topic to its prerequisites and its encompassing topics; the system overlays the student's answers on the graph to produce a "knowledge profile" — what they know and how well. **[S]**
- **Hierarchical spaced repetition.** This is the clever one: a topic is marked *implicitly, partially reviewed* when a later lesson makes use of it. This **lowers total review burden** versus flat SRS, because doing advanced work automatically discharges review debt on the fundamentals. **[S]**
- **Aggressive spacing with escalating context.** Concepts return "just when you think you've escaped them," but in progressively more complex contexts, forcing deep rather than superficial understanding. **[S]**
- **XP with correctness bonuses.** Every completed task earns XP scaled by performance, with small bonuses for 100% correctness explicitly to "discourage sloppiness." **[S]** Note the design intent — the gamification is tuned against a specific failure mode, not bolted on.
- **Adaptive diagnostic placement** at entry. **[S]**

**Build cost.** **Extreme.** This is a multi-year, funded product. The knowledge graph alone is a content-authoring problem an order of magnitude bigger than writing the lessons.

**Fit for visual judgement.** **Low as a build target, high as a design principle.** The two transferable ideas at near-zero cost: (a) *state prerequisites explicitly per lesson* — a dependency-ordered syllabus is a knowledge graph you can write in Markdown; (b) *reinforce earlier fundamentals inside later exercises* rather than in separate review sessions — i.e. the later "build a settings page" exercise should silently re-test spacing, hierarchy, and alignment from module 1.

- https://www.mathacademy.com/pedagogy (blocked)
- https://www.mathacademy.com/how-it-works (blocked)
- https://www.mathacademy.com/how-our-ai-works (blocked)
- https://notes.andymatuschak.org/Math_Academy (blocked)
- https://drgore.substack.com/p/my-review-of-math-academy
- https://recess.gg/think/math-curriculum-review-mathacademy/
- https://frankhecker.com/2025/02/10/math-academy-part-3/
- https://frankhecker.com/2025/02/12/math-academy-part-5/

---

#### Scrimba — the interactive screencast **[K, unverified this session]**

Worth logging even though I couldn't verify it: Scrimba's format records the *editor's DOM state* rather than pixels, so a "video" can be paused at any moment and **edited** — the learner types into the instructor's code mid-playback, forks the state, and experiments. It's the only format I know that dissolves the passive/active boundary inside a single artifact. Build cost is very high (it's a custom recording format + player). Fit for visual judgement: interesting if the "code" is CSS and the learner can pause a critique and fix the layout in place. Source to check: https://scrimba.com/

---

### 1B. Explorable explanations

#### Bret Victor — the origin document

**What it is.** Victor's 2011 essay *Explorable Explanations* is the umbrella framing for the whole family. **[S]** Its three ideas:

1. **Reactive documents** — the reader can play with the author's assumptions and analyses and see the consequences; spreadsheet-like models embedded in authored prose. **[S]**
2. **Explorable examples** — "make the abstract concrete, and allow the reader to develop an intuition for how a system works." **[S]**
3. **Contextual information** — aids that support understanding in place.

**The key distinction, and the one most people miss:** Victor separates explorable explanations from *isolated interactive widgets and visualisations* by the fact that explorables **deliberately guide the attention of their audience toward particular phenomena within the simulation.** **[S]** A slider that does something is not an explorable. A slider plus prose that tells you *what to look at while you drag it* is.

This is the most important sentence in this document for a course about visual judgement. **The whole discipline of "noticing" is attention direction.** A before/after image pair with no pointer teaches nothing; the same pair with "watch the left edge" teaches the skill.

Victor's larger claim: static writing limits understanding by treating information as passive consumption; the goal is "to change people's relationship with text… text as an environment to think in." **[S]**

- https://worrydream.com/ExplorableExplanations/
- https://en.wikipedia.org/wiki/Explorable_explanation (blocked)
- https://www.maartenlambrechts.com/2015/03/04/the-rise-of-explorable-explanations.html
- https://educationexpress.uts.edu.au/blog/2018/09/12/all-about-explorable-explanations/
- https://bjoernkw.com/2016/09/25/explorable-explanations-and-a-reactive-document-ide/
- https://blog.khinsen.net/posts/2025/11/12/explorable-explorable-explanations.html
- https://nextjournal.com/blog/model-driven-authoring

---

#### Bartosz Ciechanowski — the gold standard of the single-topic explorable

**What it is.** Long-form single-subject essays (Bicycle, GPS, Gears, Lights and Shadows, Internal Combustion Engine, Airfoil, Sound, Moon, Mechanical Watch, Curves and Surfaces) in which essentially *every* figure is an interactive, manipulable, often WebGL/canvas 3D simulation, sequenced so each one isolates exactly one variable introduced by the preceding paragraph. His GPS piece appears in curated explorable collections. **[F]** — via awesome-explorables.

**Why it works.** Three things, all copyable:
- *One idea per interactive.* Each widget has usually one or two controls. The reader never wonders what to fiddle with.
- *Strict escalation.* Widget N+1 is widget N plus exactly one new degree of freedom. This is a faded worked-example sequence in disguise (§2C).
- *Prose that narrates the manipulation.* "Drag the slider and notice that…" — Victor's attention-direction principle, executed relentlessly.

**Build cost.** **Enormous.** Ciechanowski publishes roughly a handful of essays *per year*; community estimates of per-essay effort run to hundreds of hours **[K — I could not verify a specific figure this session; the search that would have confirmed it hit the budget limit]**. Each essay is effectively a small custom 3D engine plus an illustrated textbook chapter. **Do not budget for this format at full fidelity.** Budget for its *discipline* (one-variable widgets, strict escalation, narrated manipulation) implemented in cheap 2D DOM/CSS.

**Fit for visual judgement.** **Conceptually perfect, economically dangerous.** The good news is that UI design is natively 2D and DOM-shaped: an interactive that varies padding, weight, or contrast is *orders of magnitude* cheaper than one that ray-traces a lens. A Ciechanowski-grade spacing explorable might be 1 dev-day, where his optics explorable is a month.

- https://ciechanowski.com/ (blocked)
- https://ciechanowski.com/gps/ (referenced in awesome-explorables) **[F]**
- https://github.com/blob42/awesome-explorables **[F]**

---

#### Nicky Case — playable explanations, CC0, deliberately cheap

**What they are.** *The Evolution of Trust*, *Parable of the Polygons* (with Vi Hart), *Explorable Explanations* (the hub at explorabl.es), and others. **[S/F]** *The Evolution of Trust* is an interactive guide to the game theory of trust based on Axelrod's *The Evolution of Cooperation*, structured as a sequence of playable prisoner's-dilemma scenarios that escalate to include mistakes and repeated interactions. **[S]**

**Design philosophy, in Case's own framing:** the mission is "to explore the yet vastly under-explored medium of interactivity," **[S]** and learning should be playful:

> "Lion cubs play-fight to learn hunting skills. Rats play to learn social & emotional skills. Monkeys play to learn cognitive skills… And yet, in the last century, we humans have convinced ourselves that play is useless, and learning is supposed to be boring. Gosh, no wonder we're all so miserable." **[S]**

The Explorable Explanations hub exists to "reunite play and learning" *and* — importantly — to give visitors resources to **make their own** explorables. **[S]**

**Build cost — and this is the encouraging data point.** I fetched the source repo. *The Evolution of Trust* is built from ordinary off-the-shelf libraries: **PIXI.js** (rendering), **Howler.js** (audio), **Tween.js** (animation), **Balloon.css** (tooltips), **Q** (promises), **MinPubSub** (pub/sub), **Pegasus** (XHR) — plus a handwritten font. **[F]** The entire text is **~3,300 words of interface copy plus ~1,100 words of footnotes.** **[F]** Licensed **CC0**. **[F]**

**That word count is the headline.** One of the most-celebrated interactive explanations on the internet is **under 4,500 words**. The value is not in volume; it's in the sequencing of interactions and the compression of the prose. A ruthlessly-prioritised course should find this extremely liberating.

**Fit for visual judgement.** **High.** Case's core mechanic — put the learner in the position of *making the decision* the system is about to critique, then show the consequences — maps cleanly onto design: let the reader choose the spacing/weight/colour, then show them what their choice produced next to what an expert chose. Also: CC0 licensing across this ecosystem means assets and code can be reused directly.

- https://ncase.me/ (blocked)
- https://github.com/ncase/trust **[F]**
- https://blog.ncase.me/the-evolution-of-trust-is-out/
- https://explorabl.es/
- https://en.wikipedia.org/wiki/Nicky_Case (blocked)
- https://annexie43430051.wordpress.com/2018/02/22/interactive-storytelling-for-education-the-evolution-of-trust/
- https://medium.com/greater-than-experience-design/game-theory-and-the-evolution-of-trust-6da95b33407a
- https://www.rednessofred.com/2018/06/05/the-evolution-of-trust/

---

#### Red Blob Games (Amit Patel) — the reusable-diagram approach

**What it is.** Interactive tutorials on game-development maths and CS: pathfinding (the canonical A* guide), hexagonal grids, procedural generation, graph theory. Topics cluster around maps (grids, paths, procgen) and simulations. **[S]**

**The author's stated rationale**, which is a clean articulation of dual-coding: he learns best "combining the language side of his brain (reading, formulas) with the visual side (illustrations, interaction)," and wants to learn "not only by reading or watching something, but by playing with it." **[S]**

**The most useful thing about Red Blob for us:** Patel has *documented his own implementation process* for interactive diagrams — a two-part write-up giving a high-level, library-agnostic overview of how he builds them, plus notes on the small design elements he reuses (colours, shapes, controls). **[S]** He publishes experiments in Vue + Canvas, Vue + KaTeX, Vue + pointer events, and Vue render functions for syntax highlighting. **[S]** In other words: **he treats interactive diagrams as a reusable component library with a house style, not as bespoke art.** That is the economically viable version of the Ciechanowski approach, and it's the model I'd recommend copying for build strategy.

**Build cost.** Medium, front-loaded. Build 4–6 diagram archetypes properly (est. 2–4 dev-days each) and then each new instance is a config object, not a component.

**Fit for visual judgement.** **High**, with the same caveat: define the archetypes first.

- https://www.redblobgames.com/ (blocked)
- https://github.com/redblobgames
- http://www-cs-students.stanford.edu/~amitp/
- https://www.randroll.com/interview_amit_patel/
- https://observablehq.com/@redblobgames
- https://news.ycombinator.com/item?id=22024738
- https://news.ycombinator.com/item?id=22233429

---

#### Distill.pub — and the cautionary tale about cost

**What it was.** A peer-reviewed ML journal built entirely around interactive articles, with an explicit editorial commitment to clarity of explanation as a research contribution.

**What happened, and why it matters enormously for our build budget.** Distill went on a one-year hiatus in July 2021 that "may be extended indefinitely," and is no longer accepting submissions. **[S]** The editorial team's reasons:

1. **Burnout.** Distill was volunteer-run and the frictions caused the team to struggle with burnout. **[S]**
2. **The journal model itself.** They became unsure it made sense to run as a journal rather than encourage authors to self-publish; the journal structure created "structural friction" that crowded out the parts they actually cared about. **[S]**
3. **The cost of interactive articles.** For early articles they provided **more than 50 hours of editorial help per article** on diagram design, writing style, and scientific communication — dialled down over time, but each article still required significant volunteer work on top of day jobs. **[S]** A Hacker News commenter puts it more bluntly: Distill publications "take literally hundreds of hours." **[S]**

**The lesson.** The most prestigious interactive-explanation venue on the internet *died of production cost*. Any plan for this course that assumes bespoke interactives at scale is planning to reproduce that failure. Budget for a **small, fixed set of reusable interaction types** and spend the surplus on editorial quality.

Authors are still encouraged to use the Distill template and self-publish. **[S]**

- https://distill.pub/2021/distill-hiatus/ (blocked)
- https://distill.pub/journal/ (blocked)
- https://chorasimilarity.wordpress.com/2021/07/04/distill-burnout-shows-open-science-publication-is-hard/
- https://news.ycombinator.com/item?id=27718054 (blocked)
- https://news.ycombinator.com/item?id=43826549
- https://dynamicallytyped.com/links/ml-research/210718-distill-hiatus/

---

#### The wider explorable ecosystem (catalogued from awesome-explorables) **[F]**

A curated CC0-licensed index confirming the breadth of the family and providing a shopping list of interaction patterns to steal:

| Project | Domain | Pattern worth stealing |
|---|---|---|
| Explained Visually (setosa.io/ev/) | maths | Tiny single-concept pages, one interactive each |
| Seeing Theory (Brown Univ.) | statistics | Chapter-structured, consistent visual language throughout |
| Immersive Math | linear algebra | A *fully interactive textbook* — proof the long-form version exists |
| The Book of Shaders | GLSL | Live-editable code inline in prose (see below) |
| TensorFlow Playground | neural nets | One canonical toy model, endlessly re-parameterised |
| r2d3.us "Visual Introduction to ML" | ML | Scrollytelling — scroll position drives the visualisation |
| PhET (Colorado) | physics/maths | Simulation-as-lesson at institutional scale |
| Pink Trombone | speech synthesis | Direct manipulation of a model with immediate sensory feedback |
| Parable of the Polygons | social systems | Playable simulation that produces a moral realisation |
| Euclid: The Game | geometry | Constructive puzzle with objective completion criteria |
| VisuAlgo | algorithms | Step-through animation with speed control |
| Circles, Sines and Signals | DSP | Escalating single-variable diagrams |
| Better Explained | maths | Intuition-first prose, minimal interactivity, very cheap |
| Nicky Case's Evolution of Trust | game theory | Play → consequence → generalisation |
| Ciechanowski's GPS | engineering | Full-fidelity simulated instrumentation |

- https://github.com/blob42/awesome-explorables **[F]**

---

#### The Book of Shaders — live-editable code inline **[K, GitHub fetch 404'd on my guessed path]**

The pattern: every code example in the prose is a running shader you can edit in place, with the output rendered immediately beside it. It's the cheapest possible version of "the artifact is the environment." For a UI course the equivalent is an inline editable CSS block whose output renders live in a mini-viewport — a well-trodden, low-cost pattern (CodeMirror/Sandpack + iframe, ~2–4 dev-days for a reusable component).

- https://thebookofshaders.com/
- https://github.com/patriciogv/thebookofshaders (my fetch of this path returned 404; verify the correct repo path)

---

### 1C. Text-first formats (docs-as-course, repo-as-course, email-as-course)

#### MIT's *The Missing Semester of Your CS Education*

**What it is.** ~12 lectures on the practical tooling a CS degree skips (shell, editors, data wrangling, version control, debugging, security), taught during MIT's January Independent Activities Period. **[S]** Delivered as **video lectures + written lecture notes + exercises**, on a **Jekyll static site** with the whole thing in a public GitHub repo (~6,000 stars, ~1,400 forks). **[F]**

**The framing is the interesting part** and it transfers almost word-for-word to a UI/UX primer for developers. The stated rationale: these topics "are not taught as part of the standard university curriculum," students are "never shown how to use these tools efficiently," and the gap is costly enough that other instructors "have to take weeks to months out of their courses" to cover it, which detracts from their core material. **[S]** They describe the course as "pragmatic, hands-on introductions to tools and techniques that can be immediately applied." **[S]**

**Licensing:** everything — site code, notes, exercises, videos — is **CC BY-NC-SA 4.0**, explicitly to encourage contributions and translations. **[F]**

**Build cost.** **Very low.** Jekyll + Markdown + a repo. Days, not months. The cost is entirely in writing well.

**Fit for visual judgement.** **Moderate on its own, excellent as a substrate.** Static prose can't do difference-spotting. But the *architecture* — static site generator, content in Markdown in git, permissively licensed, exercises per lecture — is the right skeleton to hang interactive widgets off. It also proves that a short, opinionated, gap-filling course with a strong "why this exists" statement can reach a large audience with essentially no platform investment.

- https://missing.csail.mit.edu/
- https://missing.csail.mit.edu/about/
- https://missing.csail.mit.edu/lectures/
- https://missing.csail.mit.edu/2026/
- https://github.com/missing-semester/missing-semester **[F]**
- https://dev.to/balapriya/mits-missing-semester-class-beyond-the-cs-curriculum-4on8
- https://lobste.rs/s/ti1k98/missing_semester_your_cs_education_mit
- https://csdiy.wiki/en/%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8/MIT-Missing-Semester/

---

#### Docs-as-course toolchains: mdBook, Nextra, Docusaurus, GitBook

Verified capabilities:

- **mdBook** **[F]** — Rust-based Gitbook alternative, "a utility to create modern online books from Markdown files." Built-in **search**, **runnable code playground**, customisable themes, MPL-2.0. Its own user guide is the demo. Barrier to entry is low; input is plain Markdown. Best when the course is genuinely text-first with code samples.
- **Nextra** **[F]** — "Simple, powerful and flexible site generation framework with everything you love from Next.js." The decisive feature for us: **MDX**, letting you embed interactive React components directly in prose "without context switching." Explicitly positioned for documentation *and course platforms*. Monorepo (`nextra` core + `nextra-theme-docs`).
- **Docusaurus** **[K]** — Meta's MDX-based docs framework; strong versioning, i18n, and plugin ecosystem; heavier defaults than Nextra.
- **GitBook** **[K]** — hosted, non-technical-friendly, weakest at custom interactivity.

**Recommendation implied by the evidence:** **MDX is the pivotal capability.** It's what lets a course be text-first (cheap, editable, greppable, git-versioned, translatable) *and* selectively interactive (expensive only where it pays). Nextra or a plain Next.js + MDX setup gives the Comeau content model without the Comeau platform build.

- https://github.com/rust-lang/mdBook **[F]**
- https://rust-lang.github.io/mdBook/
- https://github.com/shuding/nextra **[F]**
- https://nextra.site/
- https://docusaurus.io/
- https://www.gitbook.com/

---

#### README-as-course: *You Don't Know JS* and *project-based-learning*

**You Don't Know JS (Yet)** **[F]** — a book series living as a GitHub repo, organised into standalone book folders (Get Started; Scope & Closures; Objects & Classes; Types & Grammar; ES.Next & Beyond), free and canonical in the repo, with paid print/ebook editions sold via Leanpub/Amazon. **~185,000 stars, ~33,400 forks.** Kyle Simpson self-publishes via GetiPub and funds it through GitHub Sponsors/Patreon/PayPal. He frames it as an "11 years journey"; the 2nd edition is marked complete and closed to contributions.

**project-based-learning** **[F]** — a curated index of "build an application from scratch" tutorials across 20+ languages, organised by language, domain, and stack. **~278,000 stars, ~35,800 forks**, 599 commits, with an automated link-rot detection workflow. Its popularity is the strongest available evidence for the appetite for *build-a-thing* pedagogy over concept-first pedagogy.

**Why the format works.** Zero friction (no signup, no paywall, works on a phone, works offline via clone), zero hosting cost, native to the audience's existing tooling, forkable and translatable, and stars provide a public credibility signal that compounds. The distribution mechanism *is* the product.

**Build cost.** **Near zero.** Markdown in a repo.

**Fit for visual judgement.** **Weak on its own** — static Markdown can render images but cannot do reveal-after-commit, slider comparisons, or scoring. **But** it is the ideal *free tier / distribution wedge*: a repo version that drives traffic to the interactive version. Also note: GitHub's Markdown renderer supports side-by-side images in tables and `<details>` collapsible blocks, which is a *surprisingly serviceable* hack for "look at these two, guess, then expand for the answer." Cost: zero.

- https://github.com/getify/You-Dont-Know-JS **[F]**
- https://github.com/practical-tutorials/project-based-learning **[F]**
- https://github.com/sw-yx/spark-joy **[F]** — swyx's "2000+ ways to add design flair, user delight, and whimsy to your product": a curated, developer-targeted design reference covering typography, colour, layout, icons, animation, with a strong emphasis on making design accessible to engineers. Directly adjacent to this course's audience; useful as a competitive reference point for the "curated links" format's ceiling (it's a discovery tool, not a course — it can't teach judgement).

---

#### Google's technical writing courses **[K, unverified this session]**

Google publishes free, self-paced technical-writing courses (Tech Writing One and Two) as plain HTML pages with inline exercises and immediately-revealed answers, plus an optional facilitated cohort version. The relevant lesson: **an extremely plain format with disciplined exercise-per-concept and instant answer reveal is enough to be considered a best-in-class course.** No app, no video, no gamification. Also relevant: they teach a *judgement* skill (prose quality) largely through before/after pairs — the closest existing analogue to teaching visual judgement.

- https://developers.google.com/tech-writing
- https://developers.google.com/tech-writing/one
- https://developers.google.com/tech-writing/two

---

#### Email drip courses **[K, unverified this session]**

**What it is.** A course delivered as N emails over N days/weeks. Notable examples in the design space include design-newsletter courses and "one lesson a day" series; in the dev space, many are free lead magnets for a paid product.

**Why it works.**
- *Spacing is free and automatic.* The delivery cadence *is* the spacing schedule — you get distributed practice without building a scheduler.
- *Push, not pull.* The learner doesn't have to remember to return; the course returns to them. This solves the single biggest cause of non-completion in self-paced courses.
- *Constrained scope per lesson.* An email that takes 3 minutes forces brutal editing.
- *Reply-ability.* Learners can answer the sender, giving a feedback channel a web page doesn't have.

**Weaknesses.** No interactivity beyond links and images; deliverability and image-blocking are real problems for an *image-heavy* design course (many clients block remote images by default — a serious issue if the pedagogy is "compare these two screenshots"); no progress state; hard to revisit non-linearly.

**Build cost.** **Very low** (an ESP + written sequence: 1–3 days of setup), assuming content exists.

**Fit for visual judgement.** **Moderate, with a caveat.** "One visual comparison per day, in your inbox" is a genuinely strong format for eye-training and requires almost no engineering. But test image-blocking behaviour first, and consider linking out to a web page for the interactive part.

---

### 1D. Flashcard / SRS delivery

#### Anki and the SRS stack

**What it is.** **[F]** Anki is "a smart spaced repetition flashcard program"; the repo shows ~29.6k stars, 12,404 commits, and a Rust/Python/TypeScript codebase. Shared decks are distributed via AnkiWeb, which is how "Anki-based courses" are typically delivered — a deck is published, learners import it, and their scheduler handles everything else.

**FSRS (Free Spaced Repetition Scheduler)** **[F]** — a modern scheduler replacing Anki's built-in algorithm, in two parts: the scheduler itself and an **optimizer that uses machine learning to personalise parameters from your own review history**. The project describes its approach as data-driven, "balancing interpretability and verifiability," and cites academic work (MaiMemo). Note honestly: the repo page I fetched **did not** substantiate the specific difficulty/stability/retrievability memory-model details or any quantified review-burden-reduction benchmark — those live in the wiki and would need verification.

**Why SRS works (the brief pedagogy).** The **spacing effect** — reviews distributed over time produce far better long-term retention than the same total time massed — is one of the most robust findings in learning science, replicated for over a century. **[K]** Combined with the **testing effect** (retrieval attempts strengthen memory more than re-reading), it's the highest-evidence pair of techniques available. Duolingo's design is explicitly grounded in spacing-effect research **[S]**; Math Academy's whole architecture is built on distributed practice and interleaving **[S]**; Execute Program's entire product thesis is spacing with automatic grading **[S]**.

**SRS fatigue — the honest criticisms.** **[K/S]**
- **Review debt compounds.** Daily obligation grows with deck size; miss a week and you face a punishing backlog. This is the most common cause of abandonment. Math Academy's *hierarchical* spacing — crediting implicit review when a later lesson exercises a prerequisite — is an explicit attempt to fix precisely this. **[S]**
- **Self-grading is noisy.** Learners rate their own recall, badly. Execute Program's answer is to make every item machine-checkable so nobody grades themselves. **[S]**
- **Cards ≠ understanding.** SRS optimises recall of atomised facts; it does not build transferable skill. Card-writing quality dominates outcomes, and most learners write bad cards.
- **Indefinite commitment.** SRS is a permanent habit, which conflicts with a *short* course's promise of an ending.

**Build cost.** Publishing an Anki deck: **~zero** (write cards, export `.apkg`). Building your own scheduler + queue + persistence: **10–25 dev-days** for something credible; more if items are rich media.

**Fit for teaching visual judgement.** **Surprisingly good — better than it sounds — but only for a specific item type.** Standard "definition on the back" cards are useless for design. **Image-based discrimination cards are not.** Anki supports images and multiple-choice-ish templates natively, so a card can be "here are two versions of a component — which is correct?" with the answer and the *reason* on the back. That's an eye-training deck. The unresolved risk: self-grading noise, plus the fact that a fixed image pair becomes memorised as a specific image rather than generalised as a principle — **which argues strongly for procedurally generated comparisons over a fixed card set** (see §3.2).

- https://github.com/ankitects/anki **[F]**
- https://apps.ankiweb.net/
- https://github.com/open-spaced-repetition/fsrs4anki **[F]**
- https://en.wikipedia.org/wiki/Spaced_repetition (blocked)
- https://en.wikipedia.org/wiki/Spaced_learning (blocked)
- https://eshapard.github.io/teaching/applying-spaced-repetition-to-online-course-design.html
- https://mike.place/2020/executeprogram/

---

### 1E. Game and challenge formats

#### Flexbox Froggy & CSS Grid Garden (Thomas Park / CodePip)

**What they are.** **[S/F]** Froggy: help frogs reach lilypads by writing CSS flexbox declarations. Grid Garden: water carrots by writing CSS Grid declarations, **28 levels**. **[S]** Both use the same teaching style — an approachable, interactive, low-stakes way into layout fundamentals. Park also built **Anchoreum** (CSS anchor positioning) and runs a collection of free and premium front-end learning games under **CodePip**. **[S]**

**Implementation reality (fetched).** **[F]** flexboxfroggy is ~7.4k stars / 728 forks, MIT-licensed code with CC images, and the repo is plain HTML + CSS + JS folders with npm-managed locale files. **Community translation is the standout property: 50+ languages**, from Arabic to Tamil to Yoruba, contributed by fork-and-PR. (Search results reported "25 languages / 40+ contributors" **[S]** while the repo itself indicates 50+ **[F]** — the repo is the better source; the discrepancy is probably age of the secondary article.)

**Why it works.**
- *Instant, unambiguous feedback.* You write a declaration and the frog either lands on the lilypad or doesn't. Feedback latency near zero, correctness objective.
- *Constraint as scaffolding.* You may only write one property, so the search space is small and the failure is diagnosable.
- *Charm lowers the stakes.* A cartoon frog makes being wrong 30 times in a row fine.
- *Levels as a difficulty ramp.* Each level adds exactly one new property or combination.

**Build cost.** **Moderate.** My own estimate for a comparable game with real level design and i18n: **20–40 dev-days**, matching the fetched assessment's "2–4 months for a small team" for an ambitious version. **[F]** But a *stripped* version — 15 levels, one mechanic, no i18n — is closer to **5–10 dev-days**, because the engine is genuinely small; the cost is level design and pedagogical sequencing, not code.

**Fit for visual judgement.** **Moderate-to-good, with a translation problem.** Froggy works because CSS has a right answer. Visual judgement mostly doesn't — *except* for the objectively-checkable slice: alignment, consistency, contrast ratios, spacing on a scale, optical centring. A "make these three elements align/sit on the 8pt grid" puzzle with a tolerance-based checker is fully buildable and genuinely teaches something.

- https://flexboxfroggy.com/
- https://cssgridgarden.com/
- https://github.com/thomaspark/flexboxfroggy **[F]**
- https://thomaspark.co/2015/11/learning-css-layout-with-flexbox-froggy/
- https://thomaspark.co/2017/04/learning-css-grid-with-grid-garden/
- https://codepip.com/
- https://css-tricks.com/anchoreum-a-new-game-for-learning-anchor-positioning/
- https://www.noupe.com/design/css-grid-playfullyl-learned.html
- https://www.hongkiat.com/blog/learn-css-grid-layout/
- https://www.inapps.net/thomas-park-hops-to-easy-css-development-with-flexbox-froggy-inapps-2022/

---

#### **Can't Unsee — the single most relevant artifact found in this research**

**What it is.** **[S]** A browser game that trains UI difference-spotting. Each round shows **two similar interface images** and you decide **which is more correct**. After you answer, **the game overlays the two images so you can switch between them and see exactly what differed.** The game is **3 rounds × 18 pairs**. Difficulty ramps from obvious (bad web fonts, wonky icons) to subtle (**poor padding, incorrect alignment, bad image aspect ratios**). Rounds cover hierarchy, typography, colour, alignment, and spacing — "the small errors that slip into real products." **[S]**

**Credits, corrected:** search results consistently attribute it to **Alex Kotliarskyi**, with designs by **Amanda Hum** — *not* Vitaly Kolesnikov as the original brief assumed. **[S]** Worth verifying before citing publicly.

**Why it works — and it's worth being precise, because this mechanic is the thing to copy.**
1. **Forced binary commitment.** You must choose before you learn anything. This is Brilliant's "do the cognitive work before the explanation" and it converts passive looking into active hypothesising.
2. **The overlay-toggle reveal is the pedagogical masterstroke.** After committing, you flip between the two images *in place*. Because they're registered on the same pixel grid, the difference *pops out* — your visual system detects the change instantly, where side-by-side comparison would require serial scanning. This is a direct exploitation of change-blindness/flicker-paradigm psychophysics: humans are near-blind to differences between images shown side by side, and near-instant at detecting them when the images alternate in place. **[K on the psychophysics; F/S on the mechanic]**
3. **It trains perception, not knowledge.** You end up unable to *stop* seeing 3px misalignments — hence the name. That is precisely the transfer we want.
4. **Difficulty ramp within a fixed, short length.** 54 items total, three rounds, done in one sitting.

**Build cost.** **Low for the engine, high for the content.** The mechanic is: two images, a binary choice, and a toggle overlay — call it **2–4 dev-days** for a polished reusable component. **The real cost is authoring the pairs**: each pair needs a "correct" design and a deliberately, *singly* degraded variant. If you're already designing UI examples for the course, generating the degraded twin is cheap — **and if the UI is rendered from code rather than pasted as images, the degraded twin can be generated programmatically by perturbing one token** (padding, weight, hue, alignment). That collapses content cost to near zero and gives you an infinite item pool.

**Fit for teaching visual judgement.** **Highest of anything in this document.** It is a purpose-built visual-judgement trainer, it's short, it needs no account, it's fun, and its mechanic is cheap to reimplement over your own content. If the course adopts one novel mechanic, this is the one.

- https://cantunsee.space/
- https://www.creativebloq.com/news/spot-ui-design-flaws-with-this-addictive-quiz
- https://www.fastcompany.com/90303723/test-your-ui-design-skills-with-this-addicting-game
- https://thenextweb.com/news/design-skills-cant-unsee-quiz
- https://collections.designzig.com/cant-unsee/
- https://www.uwarp.design/cant-unsee
- https://www.designer.tips/practices/can-t-unsee
- https://medium.com/@jianingl/game-critique-blog-cant-unsee-7e748af41914
- https://bitskingdom.com/blog/ui-ux-games-to-level-up-your-skills/

---

#### type-challenges — the puzzle-collection format

**What it is.** **[F]** 1,000+ TypeScript type puzzles in tiers: **warm-up → easy → medium → hard → extreme**, run in strict mode, solved in an online playground (with a TS Playground plugin for integrated testing). **48.4k stars.** Community-driven, with badges and visual organisation for progress tracking.

**Why it works.** Objective pass/fail via the compiler; a progressive complexity ramp from `Pick` to advanced union manipulation; problems that mirror real utility-type needs; and a community that shares solutions, which turns each puzzle into a comparison of approaches. **[F]**

**Build cost.** **Very low** — it's a repo of test files plus a public playground someone else built. The leverage comes entirely from having a free, universal *checker* (the compiler).

**Fit for visual judgement.** **Low directly** — there is no compiler for taste. **But** it demonstrates a cheap pattern: *if you can find any objective checker, the whole course structure comes free.* For design, candidate checkers are contrast-ratio maths (WCAG), spacing-scale conformance, alignment tolerance, type-scale ratios, and touch-target sizes. A "design lint challenges" repo is a real possibility at near-zero build cost.

- https://github.com/type-challenges/type-challenges **[F]**
- https://tsch.js.org/

---

#### Other game/challenge formats worth logging **[K, unverified this session]**

- **Designercize** (https://designercize.com/) — a randomised design-exercise generator: press a button, get a whiteboard-style prompt and a timer. Near-zero build cost (a JSON array + a shuffle + a timer, ~0.5 dev-days). Fit: good for *generative* practice, useless for feedback, since nothing evaluates your output.
- **Laws of UX card deck** (https://lawsofux.com/ — Jon Yablonski; poster/deck sold as a physical artifact) — the "principles as a deck of cards" pattern. Notable delivery insight: a well-designed *reference object* can outlive and out-distribute the course that explains it. Cheap digital version: a flip-card grid. ~1–2 dev-days.
- **CSSBattle** (https://cssbattle.dev/) — replicate a target image in minimum CSS characters; scored by *pixel-diff against the target*. **This is the one place a machine genuinely grades a visual outcome**, and it's worth studying: pixel-diff scoring is a real, cheap, objective feedback channel for "reproduce this layout."
- **Frontend Mentor** (https://www.frontendmentor.io/) — provides real design files + assets; you build it; community critique closes the loop. The design-to-code direction is exactly the developer's daily job.
- **Daily UI** (https://www.dailyui.co/) — a 100-day email prompt series. Demonstrates the drip + generative-prompt combination at scale.
- **Refactoring UI** (https://www.refactoringui.com/) — Wathan & Schoger. Format: a book of **before/after pairs with a named tactic each**, sold as PDF + video. The most commercially successful "design for developers" product, and its format is almost entirely *static image pairs with a rule attached* — strong evidence that you do **not** need interactivity to teach visual judgement, if the pairs are well chosen and the rule is crisply named.
- **Anchoreum** (https://anchoreum.com/) — Park's newer CSS anchor-positioning game. **[S]**
- **Euclid: The Game** — constructive geometry puzzles. **[F, via awesome-explorables]**

---

## Part 2 — Pedagogy in brief

Compressed to what actually informs format choice. Verification is weak here because the search budget ran out before I could pull the primary literature; **[K]** items below are standard findings that should be cited from primary sources before publication.

### 2A. Active recall / retrieval practice
Retrieving information strengthens memory far more than re-reading or re-watching. **[K]** Practical implication for format: **every unit must contain at least one point where the learner produces an answer before seeing one.** Brilliant's architecture is this principle made structural **[S]**; Can't Unsee's forced binary choice is this principle in a visual domain **[S]**; Execute Program's auto-graded review items are this principle with the self-grading noise removed **[S]**.

### 2B. Spacing / distributed practice
Same total study time, distributed rather than massed, yields substantially better retention. **[K]** Format implications: an email drip gets spacing for free; a self-paced web course gets none unless it builds a scheduler; Math Academy's hierarchical crediting shows how to get spacing benefits while *reducing* review burden **[S]**. Duolingo's design is explicitly grounded in spacing research **[S]**.

### 2C. Worked examples & cognitive load
Cognitive Load Theory (Sweller) holds that novices learn better from **studying worked examples** than from solving equivalent problems unaided, because unguided problem-solving consumes working memory on search rather than on schema construction. The **expertise reversal effect** means this flips as competence grows — hence the standard **worked example → completion problem → faded example → independent problem** progression. **[K]**

This is quietly the most actionable item in Part 2, because **it dictates sequencing, not just activity type**. Execute Program's "hundreds of small examples slowly increasing in complexity" **[S]** and Ciechanowski's one-new-variable-per-widget escalation are both this progression. For visual judgement the sequence is: *show a correct design and narrate why it's correct* → *show a near-correct one and ask what's off* → *give a broken one and ask them to fix it* → *give a blank canvas*. Most design courses skip straight to the blank canvas, which is a cognitive-load failure.

### 2D. Learning by doing / active learning
Freeman et al.'s 2014 PNAS meta-analysis of 225 STEM studies found active learning raised exam scores and substantially reduced failure rates versus lecture. **[K — verify the exact effect sizes; commonly cited as ~0.47 SD improvement and failure rates falling from ~34% to ~22%.]** Format implication: the default should be *doing*, with exposition as support, not the reverse. The popularity of project-based-learning (278k stars **[F]**) is market evidence for the same preference.

### 2E. Perceptual learning — **the most under-used idea for this specific course**

Philip Kellman's **Perceptual Learning Modules (PLMs)** are sets of **short, interactive trials** designed to develop **pattern recognition, classification ability, and the capacity to map across multiple representations**. **[S]** Key findings:

- PLM practice has produced "remarkable improvements in fluency and structure recognition" across domains from fractions and algebra to complex anatomic recognition in medical and surgical training. **[S]**
- Applications span mathematics, aviation/flight training, dermatology, histopathology, ophthalmology, and surgical anatomy. **[S]**
- The theoretical claim: **expert–novice differences in many skills are differences in *perception*, not knowledge.** Sufficient exposure to relevant stimulus variation produces more efficient information extraction, processing of higher-order patterns, and automaticity. **[S]**
- The design claim: **"isolating and condensing relevant perceptual experience in part-task environments might accelerate training."** **[S]**

**Why this matters more than anything else in Part 2.** "Visual judgement" is a *perceptual* skill, and the education literature already has a validated, well-studied format for training perceptual skills: **many short classification trials with immediate feedback, high stimulus variation, and adaptive item selection.** That is not a metaphor for Can't Unsee — it is *literally the same design*, arrived at independently. A design course built as a PLM would be: dozens of 3-second "which of these is on-grid / which has the correct hierarchy / which contrast is compliant" trials, with variation across many different UI contexts so the learner extracts the *invariant* rather than memorising the examples.

The "high stimulus variation" requirement is the crucial engineering constraint: **PLMs need many distinct items, which is why programmatic generation of variants beats hand-authored screenshots.**

- https://kellmanlab.psych.ucla.edu/research-perceptual-and-adaptive-learning-in-stem.php
- https://kellmanlab.psych.ucla.edu/research/perceptual-and-adaptive-learning-in-medicine/
- https://journals.sagepub.com/doi/10.1177/154193129403801808 (Kellman & Kaiser, *Perceptual Learning Modules in Flight Training*, 1994)
- https://www.semanticscholar.org/paper/Perceptual-Learning-Modules-in-Flight-Training-Kellman-Kaiser/69b44b9906b77d80bb1358f129d803ddf94c653f
- https://www.researchgate.net/publication/227544864_Perceptual_Learning_Modules_in_Mathematics_Enhancing_Students'_Pattern_Recognition_Structure_Extraction_and_Fluency
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10084265/ (PLMs in undergraduate dermatology teaching)
- https://kellmanlab.psych.ucla.edu/files/ghose_erlikhman_garrigan_kellman_mnookin_dror_charlton_2013_abstract.pdf

### 2F. Completion rates — MOOCs vs short interactive courses

**I could not verify figures this session** (the search hit the budget limit). What is commonly cited **[K]**: MOOC completion rates cluster around **3–15%**, with ~5–6% typical for open-enrolment courses; paid courses complete substantially better than free ones; and short, interactive, tightly-scoped courses complete far better than long lecture-based ones. Duolingo-style churn figures are the closest verified-ish proxy found (monthly churn 47% → 28% **[S]**).

**Format implication regardless of the exact numbers:** length is the dominant predictor of non-completion. A ruthlessly-prioritised course's *shortness is itself a pedagogical feature*, and should be marketed as one ("finish it in one evening"). Anything that implies unbounded commitment — streaks, ever-growing SRS decks, 40-hour syllabi — works against completion.

*Figures to verify before use: Class Central / Katy Jordan's MOOC completion-rate dataset (http://www.katyjordan.com/MOOCproject.html), and Reich & Ruipérez-Valiente, "The MOOC pivot," Science 2019.*

---

## Part 3 — Radical ideas encountered

Ordered by (my judgement of) leverage-per-unit-cost for this specific course.

### 3.1 The reusable-widget-archetype strategy (the budget-saving idea)
From Red Blob Games' documented, library-agnostic, house-style approach to diagrams **[S]** and, inversely, from Distill's death by 50+ editorial hours per article **[S]**. **Do not build bespoke interactives. Build 5–6 archetypes and instantiate them by config.** Candidate archetypes for a visual-judgement course:
1. **A/B commit-then-overlay** (the Can't Unsee mechanic)
2. **Single-variable slider over a live UI** (padding, weight, contrast, radius)
3. **Predict-then-reveal** (Brilliant's forced commitment; the cheapest of all — a radio group and a `<details>`)
4. **Annotated before/after pair with a named rule** (the Refactoring UI unit)
5. **Fix-the-broken-layout with a tolerance checker** (the Froggy/CSSBattle unit)
6. **Spot-the-flaw click target** (click where the error is; objectively scoreable)

Six archetypes at 1–4 dev-days each ≈ **10–20 dev-days total**, after which every lesson's interactivity is a data file. This is the difference between a shippable course and a Distill.

### 3.2 Procedurally generated visual-discrimination items ("the design tactics trainer")
The synthesis of Can't Unsee + Execute Program's auto-grading + Kellman's PLM variation requirement + chess tactics trainers. **If the course's UI examples are rendered from code and design tokens rather than pasted as screenshots, you can generate the "wrong" variant automatically by perturbing exactly one token** — nudge padding off-scale, break the type ratio, misalign by 3px, drop contrast below 4.5:1, break optical centring.

Consequences, which are large:
- **Infinite, non-memorisable item pool** — solves the "learner memorises the specific image" failure of fixed decks.
- **Objective grading for a subjective-seeming skill** — the system knows which one it broke, so it can score *and* explain.
- **SRS becomes possible for visual judgement** — items are auto-checkable, so Execute Program's gating model applies, without self-grading noise.
- **Difficulty is a dial** — perturbation magnitude *is* the difficulty parameter, enabling adaptive item selection exactly as PLMs require.
- **Content cost approaches zero** after the generator exists.

Estimated build: **8–15 dev-days** on top of a token-driven component set. **This is, in my view, the single highest-value idea in this document**, and I found no existing product that does it for UI design.

### 3.3 The overlay-toggle (flicker) reveal as a standard course primitive
Can't Unsee's post-answer overlay **[S]** exploits the fact that humans are poor at side-by-side difference detection and excellent at in-place change detection. **[K]** It costs perhaps half a day to build as a reusable component and should probably replace every side-by-side before/after image in the entire course.

### 3.4 "Finish, then optionally train" — a bounded course with an unbounded appendix
Resolves the tension between completion (favours short and finite, §2F) and retention (favours spacing, §2B). Ship a **finite, one-evening course** as the product and promise, then offer an **optional daily 60-second discrimination drill** (email or web) afterwards for anyone who wants the eye-training to stick. The streak lives in the appendix, where it can't undermine the completion promise.

### 3.5 Prose-count discipline: the 4,500-word ceiling
*The Evolution of Trust* — one of the most celebrated interactive explanations ever made — is **~3,300 words of interface copy + ~1,100 words of footnotes.** **[F]** Adopt an explicit word budget per module and spend the surplus on interaction sequencing. For a "ruthlessly-prioritised" course this is a concrete, checkable constraint rather than an aspiration.

### 3.6 The repo-as-free-tier wedge
YDKJS at 185k stars and project-based-learning at 278k stars **[F]** show the reach of a plain Markdown repo. Publish a CC-licensed Markdown edition (Missing Semester uses CC BY-NC-SA for *everything* including videos **[F]**) as the distribution wedge, with the interactive version as the destination. Cost: near zero. Bonus: community translation happens for free — flexboxfroggy reached **50+ languages** purely through fork-and-PR **[F]**.

### 3.7 Find a checker, get a curriculum free
type-challenges works because the TypeScript compiler grades it; CSSBattle works because pixel-diff grades it. **[F/K]** The design-domain checkers that already exist: WCAG contrast maths, spacing-scale conformance, alignment tolerance, type-scale ratios, touch-target minimums, optical-centring offsets. Any of these converts a lesson into a self-grading challenge for a day's work.

### 3.8 Hierarchical review: discharge fundamentals inside advanced work
Math Academy's implicit-partial-review **[S]** applied to design: the module-6 "build a settings page" exercise should silently re-assess spacing, hierarchy, and alignment from module 1, and the system should credit that as review. Cheap to *design* even if not instrumented — it's a syllabus-authoring rule, not a feature.

### 3.9 Attention direction as the actual product
Victor's distinction between an interactive widget and an explorable explanation — the latter **deliberately guides attention toward particular phenomena** **[S]** — implies the highest-value asset isn't the widget but the **sentence telling the learner where to look while they use it**. For a perception-training course this may be the whole game, and it costs nothing but editorial care.

### 3.10 The physical artifact as a distribution channel
The Laws of UX deck/poster **[K]** and the Refactoring UI book **[K]** suggest a printable one-page "checklist of visual tells" that outlives the course. Near-zero cost, disproportionate word-of-mouth.

---

## Part 4 — Fit-for-purpose summary

Rated for **teaching visual judgement to developers**, in a **short** course.

| Format | Teaches noticing? | Build cost | Completion risk | Verdict |
|---|---|---|---|---|
| Can't Unsee-style A/B + overlay | **Yes, directly** | Low engine / low content if generated | Low (it's fun) | **Core mechanic** |
| Procedurally generated discrimination items | **Yes, and adaptively** | Medium (8–15 dd) | Low | **Highest-value bet** |
| Predict-then-reveal wrapper | Yes | Trivial (1–2 dd) | Low | **Use everywhere** |
| Single-variable slider explorable | Yes (builds intuition) | Low-medium per archetype | Low | **Use often** |
| Annotated before/after pairs (Refactoring UI) | Yes | Very low | Low | **Backbone of static content** |
| MDX docs-as-course (Nextra/mdBook) | No, but hosts everything | Very low | Low | **Substrate of choice** |
| Repo-as-course (Markdown) | Weakly | ~Zero | Low | **Free tier / distribution** |
| Email drip | Weakly (image blocking!) | Very low | **Lowest** (push) | **Appendix / eye-training** |
| Fix-the-layout game w/ checker | Partly | Medium (5–10 dd) | Medium | Good if scope-limited |
| SRS deck (Anki) | Partly (image cards) | ~Zero to publish | High (review debt) | Optional appendix |
| Custom SRS gating (Execute Program) | Yes if items auto-graded | Very high (30–60 dd) | Medium | Only if §3.2 is built |
| Video course | **No** | Medium-high | High | Avoid as primary |
| Full Ciechanowski-grade explorables | Yes | **Extreme** | Low | Copy the discipline, not the fidelity |
| Knowledge-graph adaptive platform | Yes | **Extreme** | Low | Steal principles only |
| Streaks / leagues | No | Medium | Contradicts "short" | Reject for core course |

**Composite recommendation implied by the inventory** (offered as a finding, not a decision): a **Next.js/MDX text-first course** in the *Missing Semester* mould, using **~6 reusable interaction archetypes** in the *Red Blob* mould, whose flagship mechanic is a **procedurally-generated Can't Unsee-style discrimination trainer** justified by **Kellman's PLM research**, held to a **Nicky Case word budget**, distributed with a **CC-licensed Markdown repo** as the free wedge, and with **streaks and SRS quarantined to an optional post-completion appendix**.

---

## Part 5 — All source URLs

**Interactive course platforms**
- https://css-for-js.dev/
- https://courses.joshwcomeau.com/css-for-js
- https://courses.joshwcomeau.com/
- https://www.joshwcomeau.com/courses/
- https://www.joyforjs.com/
- https://www.failory.com/interview/css-for-js-developers
- https://ldirer.com/blog/posts/css-for-js-and-joy-of-react-a-review
- https://www.executeprogram.com/spaced-repetition
- https://notes.andymatuschak.org/z2LGZ8cXBcQMP7YuAHbeVyCSLZoiMXvQNKCok
- https://mike.place/2020/executeprogram/
- https://code.brettchalupa.com/execute-program-review
- https://news.ycombinator.com/item?id=42278400
- https://www.destroyallsoftware.com/
- https://brilliant.org/about/
- https://brilliant.org/faq/
- https://brilliant.org/courses/
- https://beginnersinai.org/brilliant-explained/
- https://learnopoly.com/brilliant-org-review/
- https://brighterly.com/blog/is-brilliant-org-worth-it/
- https://www.alternativeto.net/software/brilliant-org/about/
- https://www.mathacademy.com/pedagogy
- https://www.mathacademy.com/how-it-works
- https://www.mathacademy.com/how-our-ai-works
- https://notes.andymatuschak.org/Math_Academy
- https://drgore.substack.com/p/my-review-of-math-academy
- https://recess.gg/think/math-curriculum-review-mathacademy/
- https://frankhecker.com/2025/02/10/math-academy-part-3/
- https://frankhecker.com/2025/02/12/math-academy-part-5/
- https://www.howtohomeschool.com/curriculum-directory/math/math-academy
- https://scrimba.com/

**Duolingo / gamification**
- https://www.strivecloud.io/duolingo-gamification-explained
- https://www.strivecloud.io/blog/blog-gamification-examples-boost-user-retention-duolingo
- https://trophy.so/blog/duolingo-gamification-case-study
- https://www.youngurbanproject.com/duolingo-case-study/
- https://www.uladshauchenka.com/p/duolingo-case-study-the-gamification
- https://medium.com/@flordaniele/decoding-duolingo-a-case-study-on-the-impact-of-gamification-on-user-experience-90b5bac3ada0
- https://medium.com/@navsrujan.mit/duolingo-gamifying-language-learning-eb8e6a55b521
- https://www.academicjobs.com/global/global-news/how-online-language-learning-streaks-supercharge-user-motivation-and-retention-108

**Explorable explanations**
- https://worrydream.com/ExplorableExplanations/
- https://en.wikipedia.org/wiki/Explorable_explanation
- https://www.maartenlambrechts.com/2015/03/04/the-rise-of-explorable-explanations.html
- https://educationexpress.uts.edu.au/blog/2018/09/12/all-about-explorable-explanations/
- https://bjoernkw.com/2016/09/25/explorable-explanations-and-a-reactive-document-ide/
- https://blog.khinsen.net/posts/2025/11/12/explorable-explorable-explanations.html
- https://nextjournal.com/blog/model-driven-authoring
- https://viscomvibz.wordpress.com/2012/05/20/explorable-explanations/
- https://github.com/blob42/awesome-explorables
- https://explorabl.es/
- https://ncase.me/
- https://github.com/ncase/trust
- https://blog.ncase.me/the-evolution-of-trust-is-out/
- https://annexie43430051.wordpress.com/2018/02/22/interactive-storytelling-for-education-the-evolution-of-trust/
- https://medium.com/greater-than-experience-design/game-theory-and-the-evolution-of-trust-6da95b33407a
- https://www.rednessofred.com/2018/06/05/the-evolution-of-trust/
- https://ciechanowski.com/
- https://ciechanowski.com/gps/
- https://www.redblobgames.com/
- https://github.com/redblobgames
- http://www-cs-students.stanford.edu/~amitp/
- https://www.randroll.com/interview_amit_patel/
- https://observablehq.com/@redblobgames
- https://news.ycombinator.com/item?id=22024738
- https://news.ycombinator.com/item?id=22233429
- https://distill.pub/2021/distill-hiatus/
- https://distill.pub/journal/
- https://chorasimilarity.wordpress.com/2021/07/04/distill-burnout-shows-open-science-publication-is-hard/
- https://news.ycombinator.com/item?id=27718054
- https://news.ycombinator.com/item?id=43826549
- https://dynamicallytyped.com/links/ml-research/210718-distill-hiatus/
- https://thebookofshaders.com/
- https://setosa.io/ev/
- https://seeing-theory.brown.edu/
- https://immersivemath.com/
- https://playground.tensorflow.org/
- https://www.r2d3.us/visual-intro-to-machine-learning-part-1/
- https://phet.colorado.edu/
- https://ncase.me/polygons/
- https://visualgo.net/

**Text-first / docs-as-course**
- https://missing.csail.mit.edu/
- https://missing.csail.mit.edu/about/
- https://missing.csail.mit.edu/lectures/
- https://missing.csail.mit.edu/2026/
- https://github.com/missing-semester/missing-semester
- https://dev.to/balapriya/mits-missing-semester-class-beyond-the-cs-curriculum-4on8
- https://lobste.rs/s/ti1k98/missing_semester_your_cs_education_mit
- https://csdiy.wiki/en/%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8/MIT-Missing-Semester/
- https://github.com/rust-lang/mdBook
- https://rust-lang.github.io/mdBook/
- https://github.com/shuding/nextra
- https://nextra.site/
- https://docusaurus.io/
- https://www.gitbook.com/
- https://github.com/getify/You-Dont-Know-JS
- https://github.com/practical-tutorials/project-based-learning
- https://github.com/sw-yx/spark-joy
- https://developers.google.com/tech-writing
- https://developers.google.com/tech-writing/one
- https://developers.google.com/tech-writing/two

**SRS / flashcards**
- https://github.com/ankitects/anki
- https://apps.ankiweb.net/
- https://dev-docs.ankiweb.net/
- https://github.com/open-spaced-repetition/fsrs4anki
- https://en.wikipedia.org/wiki/Spaced_repetition
- https://en.wikipedia.org/wiki/Spaced_learning
- https://eshapard.github.io/teaching/applying-spaced-repetition-to-online-course-design.html

**Games / challenges**
- https://cantunsee.space/
- https://www.creativebloq.com/news/spot-ui-design-flaws-with-this-addictive-quiz
- https://www.fastcompany.com/90303723/test-your-ui-design-skills-with-this-addicting-game
- https://thenextweb.com/news/design-skills-cant-unsee-quiz
- https://collections.designzig.com/cant-unsee/
- https://www.uwarp.design/cant-unsee
- https://www.designer.tips/practices/can-t-unsee
- https://medium.com/@jianingl/game-critique-blog-cant-unsee-7e748af41914
- https://bitskingdom.com/blog/ui-ux-games-to-level-up-your-skills/
- https://flexboxfroggy.com/
- https://cssgridgarden.com/
- https://github.com/thomaspark/flexboxfroggy
- https://thomaspark.co/2015/11/learning-css-layout-with-flexbox-froggy/
- https://thomaspark.co/2017/04/learning-css-grid-with-grid-garden/
- https://codepip.com/
- https://anchoreum.com/
- https://css-tricks.com/anchoreum-a-new-game-for-learning-anchor-positioning/
- https://www.noupe.com/design/css-grid-playfullyl-learned.html
- https://www.hongkiat.com/blog/learn-css-grid-layout/
- https://www.inapps.net/thomas-park-hops-to-easy-css-development-with-flexbox-froggy-inapps-2022/
- https://github.com/type-challenges/type-challenges
- https://tsch.js.org/
- https://designercize.com/
- https://lawsofux.com/
- https://cssbattle.dev/
- https://www.frontendmentor.io/
- https://www.dailyui.co/
- https://www.refactoringui.com/

**Pedagogy**
- https://kellmanlab.psych.ucla.edu/research-perceptual-and-adaptive-learning-in-stem.php
- https://kellmanlab.psych.ucla.edu/research/perceptual-and-adaptive-learning-in-medicine/
- https://journals.sagepub.com/doi/10.1177/154193129403801808
- https://www.semanticscholar.org/paper/Perceptual-Learning-Modules-in-Flight-Training-Kellman-Kaiser/69b44b9906b77d80bb1358f129d803ddf94c653f
- https://www.researchgate.net/publication/227544864_Perceptual_Learning_Modules_in_Mathematics_Enhancing_Students'_Pattern_Recognition_Structure_Extraction_and_Fluency
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10084265/
- https://kellmanlab.psych.ucla.edu/files/ghose_erlikhman_garrigan_kellman_mnookin_dror_charlton_2013_abstract.pdf
- https://db.arabpsychology.com/perceptual-learning-2/
- http://www.katyjordan.com/MOOCproject.html *(to verify — MOOC completion data)*

---

## Part 6 — Open questions / gaps for a follow-up pass

Things I could not close because search budget ran out and egress was blocked:

1. **Ciechanowski's actual per-essay effort.** Widely cited as hundreds of hours; never verified. Look for his own posts/interviews.
2. **MOOC completion-rate primary sources.** Katy Jordan's dataset; Reich & Ruipérez-Valiente (*Science*, 2019).
3. **Freeman et al. 2014 PNAS effect sizes** for active learning — quoted from memory above.
4. **Dunlosky et al. 2013**, *Improving Students' Learning With Effective Learning Techniques* — the canonical ranking that puts practice testing and distributed practice at the top. Not retrieved.
5. **Sweller's worked-example and expertise-reversal literature** — not retrieved.
6. **Can't Unsee's authorship** — search says Alex Kotliarskyi (design by Amanda Hum), contradicting the brief's "Vitaly Kolesnikov." Verify before citing.
7. **FSRS memory model + benchmarks** — the repo page didn't substantiate them; check the wiki and the FSRS benchmark repo.
8. **Scrimba's format details** — entirely unverified.
9. **Josh Comeau's course completion rates** — he has published retrospectives; would be the single most useful missing number in this document.
10. **Email drip courses in design specifically** — the brief mentioned "Kennedy's design newsletter course"; I could not identify or verify it.
