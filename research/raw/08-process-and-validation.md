# 08 — UX Process & Validation (raw inventory)

**Scope (this file only):** how good UX actually gets *made and validated*, scoped to what a
working software developer needs — not a researcher's full toolkit. Covers: the user-centered
design loop and its minimum viable version; cheap ways to understand users (JTBD, personas /
proto-personas and their critics, interview technique, mental models); discount usability
testing (Krug, the 5-user rule and its critiques, hallway/guerrilla testing, think-aloud);
information architecture validation (card sorting, tree testing, depth vs breadth, labeling);
prototyping fidelity and fake-door tests; measuring UX (task success, time-on-task, SUS, SEQ,
HEART, why NPS is criticized, analytics vs research); working with and without designers
(handoff friction, when to push back); accessibility as a *process* (quick checks a dev runs).

**Explicitly NOT in scope here** (other agents own them): usability *principles/heuristics* as a
list, visual craft rules, interaction patterns, taste-building, community threads, course
syllabi, glossaries, delivery formats. Where those touch process (e.g. heuristics used *as* a
review method), only the process side is noted.

**Bias applied throughout:** the 20% a developer needs. Every method below carries a
**Minimal version** line — the smallest thing that still produces a decision — and a
**Worth it when** line. Anything that needs a recruiting budget, a lab, or a specialist is
flagged as such.

---

## ⚠️ Collection-method caveat — read before curating

This pass ran under two hard environment constraints, which affect how these notes should be
trusted:

1. **All outbound `WebFetch` was blocked by the org egress proxy** (403 CONNECT policy denial)
   for every domain attempted: `nngroup.com`, `sensible.com`, `measuringu.com`, `webaim.org`,
   `w3.org`, `developer.mozilla.org`, `en.wikipedia.org`, `lawsofux.com`, `mtlynch.io`.
   No primary source could be read in full.
2. **The shared WebSearch budget (200 calls across 9 parallel agents) was exhausted** partway
   through, cutting off ~4 planned topics.

Consequently: **content below is synthesized from search-engine result summaries plus the
titles/URLs those searches surfaced.** URLs are real and were returned by search; the
*characterizations* of them are second-hand. Direct quotes are marked as reported quotes, not
verified transcriptions. **Anything marked `[UNSOURCED THIS PASS]` is method knowledge included
for inventory completeness with no citation captured — verify before it enters the course.**
A gap list with candidate URLs is at the end.

---

## 1. The user-centered design loop, and its minimum viable version

### 1.1 Design thinking (the canonical loop)
- **What it is:** NN/g frames it as **3 phases** — *understand, explore, materialize* — decomposed
  into **6 sub-phases**: *empathize, define, ideate, prototype, test, implement*. Reported framing:
  each phase is "iterative and cyclical rather than strictly linear"; teams routinely return to
  empathize/define after building and testing a first prototype, because "only after wireframes
  are prototyped … can you accurately assess if your solution really works."
- **The load-bearing argument for developers:** attributed to Nielsen — *"a wonderful interface
  solving the wrong problem will fail."* This is the whole justification for spending any time on
  process at all; it's the strongest single line for a developer-facing course opener.
- **Minimal version:** one sentence naming the user + the job, one sketch, one person tries it,
  one change. That is a complete turn of the loop.
- **Worth it when:** you are about to build something whose *problem statement* is unverified.
  Skip the ceremony when the problem is known and only the execution is in question.
- **Sources:**
  - https://www.nngroup.com/articles/design-thinking/
  - https://www.nngroup.com/articles/design-thinking-study-guide/
  - https://media.nngroup.com/media/articles/attachments/Design-thinking-101-NNG.pdf (PDF poster of the model)
  - https://www.nngroup.com/videos/design-thinking/ (3-min video)
  - https://www.nngroup.com/videos/design-thinking-102/
  - https://lightit.io/blog/design-thinking-nielsen-norman/ (secondary explainer)

### 1.2 Parallel + iterative design
- **What it is:** NN/g line of research arguing that generating several *parallel* alternatives and
  then iterating beats refining a single idea; combined with competitive testing it produces the
  largest usability gains.
- **Minimal version:** sketch 3 layouts before committing to one. Cost: ~15 minutes.
- **Worth it when:** at the start of any screen you'd otherwise design exactly once. Cheapest
  quality lever available to a solo dev.
- **Source:** https://www.nngroup.com/articles/parallel-and-iterative-design/

### 1.3 Lean UX / build–measure–learn
- **What it is:** lean + agile principles applied to UX. Loop reported as: *form a hypothesis →
  build the smallest testable version → collect feedback → learn → repeat*. Maps onto Lean
  Startup's Ideas → Build/Code → Measure/Data → Learn.
- **Assumption mapping:** list the assumptions the idea rests on, convert them into **falsifiable
  hypotheses**, then build only enough to test the riskiest one. Reported guidance: the smallest
  testable version "might be a sketch, clickable prototype, landing page, mockup, survey, or
  single feature flow."
- **Explicitly works solo:** sources note the process is unchanged whether a designer works alone
  or with a team — directly relevant to this course's audience.
- **Minimal version for a solo dev:** write the riskiest assumption as a sentence that could be
  proven *false*; pick the cheapest artifact that could falsify it; run it this week.
- **Worth it when:** the feature is expensive to build and the demand is speculative. Overkill for
  a bug fix or a well-understood CRUD screen.
- **Sources:**
  - https://www.lyssna.com/blog/lean-ux/
  - https://www.questionpro.com/blog/lean-ux/
  - https://www.toptal.com/designers/ux/lean-ux-mvp
  - https://medium.com/@_sidharth_m_/beginners-guide-to-lean-ux-defined-explained-228d18940acb
  - https://uxplaybook.org/articles/how-to-implement-lean-ux-in-your-design-process
  - https://b-works.io/en/insights/complete-guide-to-lean-ux/
  - https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop/
  - https://medium.com/@dominic_11011/build-measure-learn-cycle-ace388a13b4d
  - https://www.plainconcepts.com/lean-ux-methodology/

### 1.4 Continuous discovery `[GAP — search budget exhausted]`
- Teresa Torres's *Continuous Discovery Habits* (opportunity solution trees, weekly customer
  touchpoints) was on the plan and could not be searched. The relevant developer-sized idea —
  *a small, regular contact cadence beats a big one-off research project* — is corroborated
  indirectly by Krug's "a morning a month" (§3.1). Flag for a follow-up pass.

---

## 2. Understanding users cheaply

### 2.1 Jobs to Be Done (JTBD) in one page
- **What it is:** frame the user by the *progress they are trying to make in a circumstance*, not
  by demographics. Christensen's formulation: customers "hire" a product to do a job and "fire" it
  when it does the job badly. The canonical line: *"People don't want to buy a quarter-inch drill.
  They want a quarter-inch hole."* Christensen articulated outcome-driven innovation in the 2005
  HBR paper *"The Cause and the Cure of Marketing Malpractice."*
- **Intercom case (the one developers find persuasive):** growth stalled after three years;
  **switch interviews** revealed customers were hiring Intercom for **four distinct jobs**; they
  rebuilt product, go-to-market and pricing around each job. Reported outcome: 500% company growth
  in 18 months, 3× revenue. *(Reported figures — verify before quoting on a slide.)*
- **Switch interview:** interview people *at the moment of switching* — what triggered the change,
  what they used before, what nearly stopped them. Cheap, and the highest-signal interview type.
- **Job story format `[UNSOURCED THIS PASS]`:** the Intercom-associated template
  *"When [situation], I want to [motivation], so I can [expected outcome]"* — offered as an
  alternative to "As a [persona], I want…" user stories. I could not capture a citation this pass;
  verify against Intercom's own writing before teaching it.
- **Minimal version:** one page — the situation that triggers use, what the user is trying to
  achieve, what they do today instead, and what "done well" looks like to them.
- **Worth it when:** you're deciding *what* to build or how to segment. Less useful for
  fine-grained interface decisions, where a usability test beats a JTBD statement.
- **Sources:**
  - https://www.fullstory.com/blog/clayton-christensen-jobs-to-be-done-framework-product-development/
  - https://productschool.com/blog/product-fundamentals/jtbd-framework
  - https://medium.com/make-us-proud/jobs-to-be-done-framework-748c761797a8 (explicitly "scrapping the persona")
  - https://courseux.com/jobs-to-be-done/ (guide + templates)
  - https://www.koji.so/docs/jobs-to-be-done-framework
  - https://www.r-ght.com/jobs-to-be-done/
  - https://www.prfire.com/the-jobs-to-be-done-framework-how-to-use-it/
  - https://euleinstitute.com/en/blog/jobs-to-be-done/

### 2.2 Personas vs proto-personas — and the criticism
- **Persona (full):** a researched representation built from interviews, surveys, and observation.
- **Proto-persona:** a "LITE version" — a sketch produced in a brainstorming session, primarily to
  *align stakeholders*, built from existing assumptions rather than new research.
- **NN/g's three-tier taxonomy** (useful for a course because it dissolves the argument):
  **lightweight → qualitative → statistical** personas, i.e. it's a spectrum of evidence, not a
  binary. Source: https://www.nngroup.com/articles/persona-types/
- **The criticism (collect all of it — the course should teach the critique, not just the method):**
  - *Groupthink / toxic assumptions:* critics argue fleshing out proto-personas creates "an
    inescapable well of groupthink" and bakes in bias that then blocks real research.
  - *False confidence:* assumption-laden personas "give false confidence and lead to bad
    decision-making, or undermine the value of proper user research."
  - *Practical uselessness:* reported designer verdict — "utterly useless" when solving real
    people's problems.
  - *JTBD as the replacement:* UXmatters argues the pitfalls of personas are precisely what JTBD
    fixes (behaviour/circumstance beats demography).
  - *Not unanimous:* others hold that proto-personas are a legitimate *hypothesis* as long as they
    are explicitly labelled as such and validated empirically. Reported: descriptions in the wild
    range "from extremely valuable to completely useless."
- **Minimal version for a dev:** skip the stock photo and the fake name. Write 3–5 bullets:
  what they're trying to do, their context/constraints, their tooling literacy, and the one thing
  that would make them abandon the flow. Label it **assumption** until an interview confirms it.
- **Worth it when:** the team keeps arguing about "the user" and means different people. Not worth
  it as a deliverable in its own right for a solo developer.
- **Sources:**
  - https://www.nngroup.com/articles/persona-types/
  - https://www.uxmatters.com/mt/archives/2019/02/the-pitfalls-of-personas-and-advantages-of-jobs-to-be-done.php
  - https://medium.com/typecode/the-problem-with-personas-b6734a08d37a
  - https://makeiterate.com/ux-personas-without-user-research-the-harsh-reality/
  - https://medium.com/@karimcmahon/proto-personas-vs-persona-s-db8873a2d2e4
  - https://medium.com/@gabrielalfsousa/user-profile-proto-persona-and-persona-whats-the-difference-552c103c1e3b
  - https://flatironschool.com/blog/user-personas-in-ux-design-when-are-they-useful/
  - https://www.ux-republic.com/en/Are-personas-still-relevant-in-2025/

### 2.3 User interviews — The Mom Test (Rob Fitzpatrick)
- **What it is:** a set of rules for asking questions that yield truth even from people motivated
  to be nice to you. Named for the fact that the questions must work *even on your mother*.
- **The three rules (reported as the book's core):**
  1. **Talk about their life, not your idea.**
  2. **Ask about specifics in the past, not generics or opinions about the future.**
  3. **Talk less, listen more.**
- **Why it works:** pitching first triggers "reactionary politeness" instead of conversation.
  Reported claim: *avoiding mentioning your idea at all* automatically improves your questions and
  is "the simplest and most significant improvement you can make to customer conversations."
- **What counts as real evidence (the developer-useful part):** past behaviour, not stated intent.
  Strong signals that a problem is real — **time already spent** on it, **money already spent**,
  and **existing workarounds**. Opening move: ask how they solve it *right now*.
- **Minimal version:** 20 minutes, 3 questions — "Walk me through the last time you had to do X."
  / "What did you use?" / "What was annoying about it?" Never describe what you're building.
- **Worth it when:** before building anything speculative. Five of these beat any survey.
- **Sources:**
  - https://mtlynch.io/book-reports/the-mom-test/ (detailed book report; *fetch blocked, high-value follow-up*)
  - https://www.ricklindquist.com/notes/the-mom-test-by-rob-fitzpatrick
  - https://readingraphics.com/book-summary-the-mom-test/
  - https://www.finsync.com/start-to-scale/stop-pitching-start-listening-a-summary-of-the-mom-test-by-rob-fitzpatrick/
  - https://www.businessfloss.com/books/the-mom-test
  - https://startupswiki.org/books/books/page/the-mom-test-how-to-talk-to-customers-by-rob-fitzpatrick
  - https://www.goodreads.com/book/show/52283963-the-mom-test (book record)

### 2.4 Mental models, and matching them
> Overlaps the principles/laws agent — kept here **only** as process: how you *discover* and
> *match* a mental model, not as a law to memorize.
- **What it is:** a mental model is what the user *believes* about how the system works, built from
  their prior experience. Different users construct different models of the same system. The
  reported core problem: *"one of the biggest dilemmas in usability is the gap between designers'
  and users' mental models."*
- **Jakob's Law as the process shortcut:** users spend most of their time on *other* products, so
  they expect yours to work like the ones they already know. Practical consequence for a developer:
  **the cheapest way to match a mental model is to copy the convention** rather than research it.
- **Indi Young** is the name attached to rigorous mental-model diagramming (deep interview-derived
  maps). Flagged as **beyond a developer's 20%** — cite as "where to go if you need more," not as a
  method to teach. `[No usable citation captured this pass — search surfaced only a passing mention.]`
- **Minimal version:** before designing, write one sentence: "The user will assume this works like
  ___." Then check whether your design honours or violates that assumption. If it violates it,
  you owe the user an explicit affordance or a very good reason.
- **Worth it when:** any time you're tempted to invent a novel interaction.
- **Sources:**
  - https://www.nngroup.com/articles/mental-models/
  - https://lawsofux.com/mental-model/
  - https://lawsofux.com/jakobs-law/
  - https://ixdf.org/literature/topics/mental-models
  - https://blog.logrocket.com/ux-design/jakobs-law-creating-user-centric-interfaces/
  - https://hi-interactive.com/blog/leveraging-mental-models-in-ux-design/
  - https://medium.com/design-bootcamp/ux-laws-jakobs-law-explained-in-simple-terms-fbeb0d794318
  - https://dev.to/pasindu_tsx/jakobs-law-in-uiux-design-1330 (dev-audience framing)

---

## 3. Usability testing on a budget

### 3.1 Krug's DIY method — *Rocket Surgery Made Easy*
- **What it is:** the how-to companion to *Don't Make Me Think*. A pared-down usability testing
  process explicitly designed so that non-specialists (including developers) will actually do it.
- **The cadence — the single most quotable idea:** **"A morning a month, that's all we ask."**
  Reported rationale: paring testing + fixing down to essentials makes it realistic to test *early
  and often*, catching problems while they're still cheap to fix.
- **The economic argument for DIY:** reported price tag of **$5,000–$10,000** per round for a
  usability consultant — which is why, done that way, "it rarely happens."
- **The mechanics:** participant sits in a room and performs tasks **while thinking out loud**.
  Deliberately **qualitative, not quantitative** — the objective is insight you can act on, which
  is what licenses testing fewer users and being flexible. Simpler process ⇒ more likely to
  actually happen. (That last inference — *simplicity is the point because it drives adoption* —
  is the through-line for a developer course.)
- **Minimal version:** 3 people, one morning, one task list, screen-share recording, fix the
  worst thing before the next round.
- **Worth it when:** always, once something is clickable. This is the highest-leverage single
  practice in this entire file for a developer audience.
- **Sources:**
  - https://sensible.com/rocket-surgery-made-easy/ (author's own page — hosts the downloadable
    scripts/checklists; **fetch blocked, top-priority follow-up**)
  - https://www.oreilly.com/library/view/rocket-surgery-made/9780321702821/
  - https://www.peachpit.com/store/rocket-surgery-made-easy-the-do-it-yourself-guide-to-9780321657299
  - https://www.amazon.com/Rocket-Surgery-Made-Easy-Yourself/dp/0321657292
  - https://medium.com/@jpolldesign/rocket-surgery-made-easy-book-review-ad4b9fb9ef3b
  - https://www.kmrom.com/post/rocket-surgery-made-easy-book-review
  - https://www.researchgate.net/publication/236881297_Book_review_commentary_Rocket_Surgery_Made_Easy_The_Do-It-Yourself_Guide_to_Finding_and_Fixing_Usability_Problems_by_Steve_Krug
  - https://www.goodreads.com/book/show/6658783-rocket-surgery-made-easy

### 3.2 The 5-user rule (Nielsen's discount usability) — **and its critiques**
- **The claim:** Jakob Nielsen, *"Why You Only Need to Test with 5 Users"* (2000), building on
  Nielsen & Landauer (1993): five testers uncover ~**85%** of usability problems, so you should run
  **many small iterative tests** rather than one big one.
- **The critiques — teach these alongside the rule:**
  - **Variance is the real story.** Reported: five users might surface as much as **95%** of issues
    or as little as **55%**; some random sets of 5 found 99%, others 55%. **10 users** raised the
    floor to ~**80%**; **20 users** to ~**95%**.
  - **Unknowability.** There is no way to tell *which* set you got, or which problems you missed.
  - **Segments break it.** The rule holds only if users are comparable; distinct user types each
    need their own five.
  - **Method-dependent.** It's a rule for *qualitative* testing that is *iterated*. It does not
    transfer to quantitative studies or to card sorting, which need larger samples.
- **How to state it honestly in a course:** 5 users is not "enough to be sure"; it is "enough to
  find something worth fixing this week." The rule's power is the **iteration**, not the number.
- **Minimal version:** 5 users, then fix, then 5 more.
- **Worth it when:** qualitative, iterative, single user segment. Not when you need a number to
  put in front of a stakeholder.
- **Sources:**
  - https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/ (the original claim)
  - https://link.springer.com/content/pdf/10.3758/BF03195514.pdf ("Benefits of increased sample
    sizes in usability testing" — the academic counterweight; **best primary critique source**)
  - https://www.userlytics.com/resources/blog/why-10-participants-give-you-the-complete-ux-picture/
  - https://uxarmy.com/blog/usability-testing-are-5-participants-enough/
  - https://pixeltreemedia.co.uk/usability-testing-with-5-users-is-it-enough/
  - https://frankspillers.com/how-many-users-should-you-test-user-testing/
  - https://maze.co/blog/user-testing-how-many-users/ (per-method participant counts)
  - https://thestory.is/en/journal/why-is-it-enough-to-test-5-users/
  - https://aguayo.co/en/blog-aguayo-user-experience/nielsen-norman-theory-usability-testing-5-users/

### 3.3 Hallway / guerrilla / corridor testing
- **What it is:** grab whoever is nearby and make them use the thing. **Joel Spolsky's** definition
  (from *The Joel Test*, 2000) is the developer-native version and worth quoting verbatim in a
  dev course: *"A hallway usability test is where you grab the next person that passes by in the
  hallway and force them to try to use the code you just wrote. If you do this to five people, you
  will learn 95% of what there is to learn about usability problems in your code."* Note this
  lands in a **programming**-culture document, not a design one — strong framing device.
- **Guerrilla testing** is the same idea outside the building: coffee shop, mall, street. Fast,
  informal, high-level feedback.
- **Practical numbers reported:** ~**8–10** participants for a hallway round, **~10 min each**,
  with the observation that after ~5 you start hearing the same issues — which is the 5-user
  saturation argument arrived at empirically.
- **5-second test** is the adjacent micro-method (show a screen for 5s, ask what it's for / what
  they'd do next) — good for first-impression and hierarchy questions.
- **Minimal version:** one colleague from a different team, one task, five minutes, watch silently.
- **Worth it when:** the task doesn't require domain knowledge. **Caveat to teach:** hallway
  participants are wrong for specialist products (your coworkers aren't your users) — great for
  navigation/labelling/first-impression, bad for workflow realism.
- **Sources:**
  - https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/ (primary)
  - https://medium.com/thinking-design/guerrilla-testing-hallway-usability-tests-for-ux-67fbfc2fd154
  - https://www.boldare.com/blog/hallway-testing-tips/ (10 practical tips)
  - https://xd.adobe.com/ideas/process/user-testing/hallway-usability-test-guerrilla-testing
  - https://openclassrooms.com/en/courses/4555916-test-products-on-users-usability-testing/4812851-get-feedback-quickly-with-guerrilla-testing
  - https://medium.com/design-bootcamp/corridor-testing-5-second-test-5835101f3616
  - https://wall-skills.com/2014/hallway-usability-tests/ (one-page summary sheet)
  - https://blog.hubspot.com/service/joel-test (secondary explainer of the Joel Test)

### 3.4 Think-aloud protocol (how to actually moderate)
- **What it is:** the participant narrates their thinking while performing tasks. It is what makes
  a cheap test diagnostic rather than merely pass/fail — you learn *why* they got stuck.
- **Session structure reported:** welcome & intro (**5–10 min**) — build rapport, state the
  purpose, **emphasize you are testing the system, not the user**, explain thinking aloud, get
  recording consent. Standard instruction wording: *"Think out loud as you're working through the
  scenario, telling us what you are looking at and what you are thinking."*
- **Moderation rules (the part developers get wrong):**
  - Guide without leading; observe without influencing; probe without biasing.
  - **Do not help.** Don't complete the task for them, don't answer their questions during the task.
  - Keep them talking without distracting them; stay neutral.
  - **Avoid leading and hypothetical questions** — "Did you find that confusing?" and
    "What would you change?" are both bad. Ask **behavioural/process** questions instead:
    **"What did you expect to happen there?"** ← single best fallback prompt.
  - Tell them there are no right or wrong answers.
- **What to watch for `[partly UNSOURCED THIS PASS — verify]`:** hesitation before clicking,
  wrong first click, back-tracking, re-reading, scrolling past the thing, verbalized surprise
  ("huh?"), and the gap between what they *say* and what they *do*. Also: things they never
  mention because they never saw them.
- **Minimal version:** "Talk out loud. I'm testing the page, not you. What did you expect?" —
  three sentences and a mute button.
- **Worth it when:** every moderated test. Costs nothing.
- **Sources:**
  - https://en.wikipedia.org/wiki/Think_aloud_protocol (concurrent vs retrospective; origin)
  - https://jakobnielsenphd.substack.com/p/user-testing ("12 Steps for Usability Testing:
    Plan, Run, Analyze, Report" — Nielsen's own current write-up; **high-value follow-up**)
  - https://www.lyssna.com/guides/think-aloud-protocol/
  - https://www.looppanel.com/blog/usability-testing-strategy
  - https://www.koji.so/docs/think-aloud-protocol
  - https://theelearningcoach.com/elearning_design/think-aloud-protocol/
  - https://theuxcookbook.com/usability-testing
  - https://www.linkedin.com/advice/0/how-do-you-use-think-aloud-method-usability-testing

### 3.5 Heuristic evaluation as a solo-dev fallback `[GAP — search budget exhausted]`
- Planned but not searched. The process-side facts to verify next pass: run it with 3–5 evaluators
  independently, then merge findings; rate severity (frequency × impact × persistence); it finds
  *different* problems than user testing and is not a substitute for it. The heuristics list
  itself belongs to the principles agent — only the **procedure** belongs here.

---

## 4. Information architecture: cheap ways to validate structure

### 4.1 Card sorting
- **What it is:** a **discovery/generative** method — participants group content items to reveal
  their mental model and suggest an organization. Three variants: **open** (participants name the
  categories), **closed** (you supply categories, they file items into them), **hybrid**.
- **When in the process:** **early**, *before* you have a structure — initial design or the start of
  a redesign.
- **Minimal version:** 30 sticky notes / a spreadsheet column, 5 people, 20 minutes each, open sort.
  Look for items that everyone groups together and items nobody agrees on — the disagreements are
  the finding.
- **Caveat to carry from §3.2:** card sorting is one of the methods Nielsen's 5-user rule
  explicitly **does not** cover; it wants more participants.
- **Sources:** https://www.nngroup.com/articles/card-sorting-tree-testing-differences/ ·
  https://www.usertesting.com/blog/how-to-use-tree-testing-and-card-sorting

### 4.2 Tree testing
- **What it is:** the **evaluative** counterpart — give people a bare text hierarchy (no visual
  design, no search) and ask them to find things. Tests whether your structure and **labels** work.
- **When in the process:** **after** you have a draft structure, before you build the nav.
- **What it catches:** navigational dead-ends, mis-parsed category labels, and mismatch between
  your structure and users' expectations.
- **Minimal version:** an indented bullet list in a plain doc + 5 "where would you click to…"
  tasks. No tooling required. Record first click and whether they had to back out.
- **Pairing (the standard recipe):** card sort **to build** the IA → tree test **to validate** it.
- **Sources:**
  - https://maze.co/guides/tree-testing/vs-card-sorting/
  - https://www.lyssna.com/blog/tree-testing-vs-card-sorting/
  - https://www.playbookux.com/tree-testing-vs-card-sorting-which-is-the-right-method-for-your-project/
  - https://heymarvin.com/resources/tree-testing-vs-card-sorting
  - https://www.usehubble.io/blog/tree-testing-vs-card-sorting
  - https://www.tree-testing.com/tree-testing-is-similar-to-card-sorting/
  - https://provenbyusers.com/help/Tree_Testing-Tree_Testing_vs_Card_Sorting.html

### 4.3 Navigation depth vs breadth
- **The research consensus:** **moderate breadth beats extreme depth**, replicated many times.
  Design for **minimum depth / maximum breadth where possible**.
- **Concrete reported numbers (treat as indicative, verify before printing):**
  - One convergent finding: ~**16 ungrouped top-level links** feeding **2–3 further levels** is
    most efficient and learnable.
  - NN/g-attributed finding: users tolerate roughly **6–7 top-level items** before task completion
    declines — *note this conflicts with the 16-link figure*; the conflict is real and probably
    turns on grouping and domain. **Flag as a genuine disagreement rather than picking one.**
- **The trade-off, stated cleanly:** wide/shallow exposes more options at once but can exceed
  cognitive limits; deep/narrow lowers per-screen load but costs clicks.
- **"Concave is optimal":** Norman & Chin (1988), replicated by Bernard (2002) — a broad first
  screen, then narrower category decisions, then a broad terminal set. Fewer wasted clicks and
  less time on browse tasks.
- **Information scent** is the moderating variable: with good scent (clear, predictive labels)
  *both* broad and deep hierarchies work. **This is the actionable takeaway for developers —
  fix the labels before you re-shape the tree.**
- **Minimal version:** count your top-level items; if the labels don't predict what's underneath,
  relabel before restructuring.
- **Sources:**
  - https://www.humanfactors.com/newsletters/breadth_vs_depth_we_revisit_this_question.html
  - https://www.cs.umd.edu/hcil/trs/99-15/99-15.html (HCIL academic paper)
  - https://dl.acm.org/doi/10.1145/1152215.1152248 (depth/breadth away from the desktop)
  - https://www.agux.co/information-architecture/information-scent-makes-and-broad-and-deep-information-hierarchies
  - https://medium.com/eightshapes-llc/four-tradeoffs-when-designing-navigation-menus-abbf787ae6e3 (Dan Brown)
  - https://codyburleson.com/blog/ia-files-005-navigation-breadth-and-depth
  - https://informationarchitectureauthority.com/navigation-design
  - https://arxiv.org/pdf/2404.11469 (depth/breadth under divided attention — in-vehicle study)

### 4.4 Labeling `[GAP — not separately searched]`
- Partially covered above via **information scent** and via tree testing's role in catching
  mis-parsed labels. A dedicated pass on labeling conventions (users' words vs internal jargon,
  testing labels with a first-click test) is still owed.

---

## 5. Prototyping & fidelity

### 5.1 The fidelity ladder: paper → wireframe → hi-fi
- **Levels:** **low-fi** (sketches, wireframes, rough click-throughs — fast, rough, **disposable**);
  **mid-fi** (simple layouts, a few details); **hi-fi** (near-final visuals, micro-interactions,
  real content).
- **The governing rule — the one line to teach:**
  **"Match your fidelity to your uncertainty."** The more you're still testing assumptions, the
  simpler the prototype should be.
- **Why polish backfires (the mechanism, not just the advice):** *"When a prototype looks finished,
  feedback shifts to visual details — button sizes, color choices, spacing — instead of the
  structural questions that actually determine whether a product will succeed."* Directly useful
  to developers, who tend to over-build before asking.
- **Low-fi is for:** exploration — mapping flows, validating structure, catching usability problems
  early; collaborative sessions where several people contribute at once. Needs no special tools.
- **Low-fi's real limits (state them honestly):** users can struggle to imagine the final
  experience from a wireframe, which makes usability results **less reliable**; animations,
  transitions, hover states and form validation can't be represented; and wireframes don't carry
  enough detail to build from.
- **Hi-fi is for:** stakeholder presentations, realistic usability testing, and developer handoff.
- **Recommended practice:** don't pick one — **progressive prototyping**: start simple, test early,
  raise fidelity as uncertainty falls.
- **Minimal version for a dev:** a hand-drawn screen photographed on your phone, or — often faster
  for a developer than any design tool — **unstyled HTML**. Both sit at the right fidelity for
  structural questions.
- **Sources:**
  - https://www.axure.com/blog/how-to-choose-the-correct-level-of-fidelity-for-your-prototype
  - https://www.uxpin.com/studio/blog/high-fidelity-prototyping-low-fidelity-difference/
  - https://miro.com/prototyping/low-fidelity-vs-high-fidelity-prototypes/
  - https://miro.com/wireframe/low-fidelity-vs-high-fidelity-wireframes/
  - https://www.magicpatterns.com/blog/low-fidelity-vs-high-fidelity-wireframes
  - https://www.justinmind.com/wireframe/low-fidelity-vs-high-fidelity-wireframing-is-paper-dead
  - https://www.uptopcorp.com/blog/high-vs-low-fidelity-prototypes/
  - https://wireframetool.com/wireframing-guide/low-vs-high-fidelity-wireframes

### 5.2 Fake door / painted door tests
- **What it is:** ship a **real-looking entry point** — button, menu item, pricing tier, banner, ad
  — for a feature that **does not exist**, and measure how many people try to use it. Clicking
  lands on a "coming soon" message, usually with an email capture. Also called **painted door**,
  **facade**, or **smoke test**.
- **Why it works:** it measures **behaviour**, not stated intent — the same principle as the Mom
  Test, applied at scale. Reported supporting stat: CB Insights found ~**35%** of startups fail
  because there was no market need.
- **Bonus signal:** the follow-up email to people who clicked converts a click into a *qualitative*
  interview about **why** they wanted it. Cheap and high-yield.
- **Ethics — must be taught alongside the method:** not inherently unethical *when transparent* —
  always show a clear "coming soon," offer notification, and **don't disappoint the same users
  repeatedly**. The distinction from **dark patterns**: dark patterns deliberately deceive to
  manipulate behaviour; an ethical fake door is honest the moment the user engages.
  (This is the natural hand-off point to whichever agent owns dark patterns.)
- **Minimal version:** add the menu item, log the click, show an honest "not built yet — want us to
  tell you when it is?" Ship it behind a small traffic percentage.
- **Worth it when:** the feature is expensive and demand is genuinely unknown. Not for
  small features (the test costs more than building it) and not on high-trust/critical flows.
- **Sources:**
  - https://amplitude.com/explore/experiment/fake-door-testing
  - https://www.koji.so/docs/fake-door-testing-guide
  - https://crstanier.medium.com/a-product-managers-guide-to-painted-door-tests-a1a5de33b473
  - https://www.gethorizon.net/guides/fake-door-testing
  - https://evelance.io/blog/fake-door-testing-the-complete-guide/
  - https://mvpdevelopment.company/blog/fake-door-mvp
  - https://help.glidr.io/en/articles/1648423-fake-door-smoke-test
  - https://www.personizely.net/glossary/fake-door-testing
  - https://www.martian.ventures/blog/innovative-methods-for-idea-validation-from-fake-doors-to-wizardry

---

## 6. Measuring UX

### 6.1 Behavioural metrics: task success, time-on-task, errors
- **Task success rate (TSR)** and **task completion time** are the two headline behavioural
  numbers; both are named in HEART's *Task Success* category. They're what you collect *from the
  same sessions* you already run for qualitative testing — near-zero marginal cost.
- **Use them as the objective spine** that satisfaction scores hang off: sources are consistent
  that satisfaction metrics (SUS/SEQ) should **complement** performance metrics like success rates
  and time on task, not replace them.
- **Minimal version:** for each task record **done / not done / done with help** plus a stopwatch.
  Three columns in a spreadsheet.
- **Caveat `[UNSOURCED THIS PASS]`:** with 5 users, a success rate is a ratio out of five — treat
  it as a flag, not a statistic. Error-rate detail and formal success-rate definitions were on the
  plan but the search budget ran out; verify next pass.

### 6.2 SUS — System Usability Scale
- **What it is:** a **10-item** questionnaire, created by **John Brooke (1986)**, the de facto
  industry standard for *perceived* usability. Five-point Likert, items **alternate positive and
  negative** phrasing to blunt response bias.
- **Scoring (exact):** for **odd-numbered** items, subtract **1** from the score; for
  **even-numbered** items, subtract the score **from 5**; sum the adjusted scores and multiply by
  **2.5**. Result: **0–100**.
- **Interpretation — the crucial correction:** **68 is the average** across ~500 studies. A SUS
  score is **not a percentage**: "68" does **not** mean "68% usable." Above 68 = above average;
  **>~80 excellent**; **<50 poor**.
- **Minimal version:** administer once at the end of a session; compare against your own previous
  release rather than against the industry mean.
- **Worth it when:** you need a defensible before/after number for a redesign. Not diagnostic —
  it tells you *that* something is worse, never *what*.
- **Sources:**
  - https://measuringu.com/sus/ (Sauro — the standard reference; **fetch blocked, follow up**)
  - https://trymata.com/blog/system-usability-scale-sus/
  - https://cleverx.com/blog/system-usability-scale-sus-complete-scoring-walkthrough
  - https://blog.uxtweak.com/system-usability-scale/
  - https://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/
  - https://yourcx.io/en/blog/2024/09/system-usability-scale-sus-in-ux-research-measuring-user-experience-effectively/
  - https://formbricks.com/survey-templates/system-usability-scale (ready-made template)

### 6.3 SEQ — Single Ease Question (the cheapest useful metric)
- **What it is:** **one** question asked **after every task**: rate how difficult that task was, on
  a **7-point** scale from very easy to very hard.
- **Why it's the best fit for a developer:** reported as *"just as good a way to measure task
  usability as other, longer scales"*; costs one question; the task is **fresh in mind** so the
  rating isn't blurred by other tasks; and because it's per-task, **it localizes the problem** —
  it tells you *which* flow hurts, which SUS cannot.
- **Standard combination:** **SEQ after each task, SUS after the session**, both alongside success
  rate and time on task.
- **Minimal version:** literally one line at the end of each task. Do this and skip SUS entirely if
  you're only going to adopt one thing.
- **Sources:**
  - https://www.nngroup.com/articles/measuring-perceived-usability/ ("Beyond the NPS: … SUS,
    NASA-TLX, and the Single Ease Question" — **best single source for §6.2–6.4**)
  - https://www.nngroup.com/videos/seq-vs-sus/ · https://www.youtube.com/watch?v=cWau0aimbjM
  - https://trymata.com/blog/measuring-task-usability-the-single-ease-question/
  - https://dscout.com/people-nerds/sus-seq
  - https://www.usersense.com/knowledge-base/usability-metrics/single-ease-question-seq
  - https://wearemadcraft.com/insights/seq-vs-sus-usability-metrics/
  - https://www.questionpro.com/blog/single-ease-question/
  - https://formbricks.com/blog/ux-survey-questions

### 6.4 NPS — and why it's criticized
- **What it is:** a single-question loyalty metric ("would you recommend…", 0–10), scored by
  subtracting % detractors from % promoters.
- **NN/g's position (nuanced, worth stating fairly):** it correlates reasonably with perceived
  usability and is easy to administer — but it is **"insufficiently nuanced to help with detailed
  UX design decisions"** and should be used **with** other UX metrics, never in isolation.
- **The criticisms, collected:**
  - **Information loss:** bucketing into promoters/passives/detractors "treats fairly dissimilar
    responses in the same way," and **identical index values can correspond to different loyalty
    levels** — so you can't tell whether year-over-year movement is real.
  - **Gameable.**
  - **Question validity:** "would you recommend" is misinterpreted by consumers and gives an
    unrealistic picture of actual recommendation behaviour (Ehrenberg-Bass).
  - **Bad assumptions:** that a person can't be promoter and detractor at once; that everyone maps
    satisfaction onto the same linear scale.
- **Verdict for the course:** NPS answers a *business relationship* question, not a *usability*
  question. If someone hands a developer an NPS target as a UX goal, that's the moment to point at
  task success + SEQ instead.
- **Sources:**
  - https://www.nngroup.com/articles/nps-ux/
  - https://www.nngroup.com/videos/downsides-net-promoter-score/
  - https://marketingscience.info/news-and-insights/net-promoter-score-actually-bad-tool-use-instead (Ehrenberg-Bass)
  - https://www.emerald.com/tqm/article/35/9/191/378999/Statistical-validation-of-critical-aspects-of-the (peer-reviewed critique)
  - https://www.researchgate.net/publication/370484697_Statistical_validation_of_critical_aspects_of_the_Net_Promoter_Score
  - https://medium.com/@claus.nisslmueller/net-promoter-score-nps-helpful-signal-or-overrated-hero-metric-d30954f29dea

### 6.5 Google's HEART framework
- **What it is:** five measurement categories — **H**appiness, **E**ngagement, **A**doption,
  **R**etention, **T**ask success — developed at Google to connect UX work to business outcomes.
  *Happiness* is attitudinal (self-reported surveys); *Task success* is behavioural (completion
  rate + completion time).
- **The mechanism that makes it usable — Goals → Signals → Metrics (GSM):** for each category,
  state the **goal**, identify observable **signals** of progress, then define the **metrics** that
  quantify them. This is the part to teach; HEART without GSM is just a word list.
- **Explicit guidance against over-adoption:** *"You don't need to track all five categories at
  once. Start with the two or three most relevant to your current product goals."*
- **Pairs quant with qual:** HEART works best combining analytics/surveys/completion rates with
  interviews and usability testing — the *what* plus the *why*.
- **Minimal version for a dev:** pick **one** category (usually Task Success), write one goal, one
  signal, one metric. That's a complete, honest HEART application.
- **Sources:**
  - https://www.lyssna.com/blog/google-heart-framework/
  - https://www.thefountaininstitute.com/blog/goals-signals-metrics (best on the GSM half)
  - https://ixdf.org/literature/article/google-s-heart-framework-for-measuring-ux
  - https://www.statsig.com/perspectives/heart-framework-measuring-ux
  - https://usersnap.com/blog/heart-framework/
  - https://uxtbe.medium.com/googles-heart-framework-in-ux-cf2fb0585641
  - https://www.geeksforgeeks.org/websites-apps/googles-heart-framework-for-measuring-ux/

### 6.6 Analytics vs research `[GAP — search budget exhausted]`
- Not separately searched. The one defensible claim already sourced (§6.5) is that **analytics tell
  you what happened; research tells you why** — HEART's own guidance is to combine quantitative
  (analytics, surveys, completion rates) with qualitative (interviews, usability testing,
  open-ended feedback). A dedicated pass on funnel analysis, session replay, and the limits of
  A/B testing for UX questions is still owed.

---

## 7. Working with — and without — designers

### 7.1 Where handoff friction actually comes from
- **Root causes reported:** miscommunication plus **mutual ignorance of each other's work** —
  designers and developers "work differently, see problems differently, have different educational
  backgrounds, and are motivated differently." Structurally: **collaboration starts too late** —
  design finishes, throws it over the wall, and moves to the next feature. *"The gap between these
  two realities is where most handoff friction lives."*
- **Fixes, in rough order of leverage:**
  1. **Start earlier.** Bring developers into conceptualization and prototyping (and client
     meetings) rather than at the end. Treat handoff as **continuous** across the build cycle —
     early technical alignment, walkthroughs, implementation support — not a single event.
  2. **Transfer the *why*, not just the spec.** If a developer knows the rationale, then when a
     design turns out to be infeasible they can propose an alternative that preserves the intent
     instead of silently degrading it. This is the single most useful thing for a dev to *ask for*.
  3. **Shared design system** — one vocabulary, fewer per-screen negotiations, consistency by
     default.
  4. **Regular cadence** (e.g. weekly) to close knowledge gaps.
- **The highest-value developer checklist item, stated verbatim:** before handoff, confirm **all
  system states are defined — loading, empty, error**. Reported to prevent many implementation
  issues on its own. *(This is also the most common legitimate reason for a developer to push back:
  a design that only specifies the happy path is incomplete.)*
- **When to push back `[partly UNSOURCED THIS PASS]`:** sourced grounds — missing states
  (loading/empty/error), and infeasibility where you can offer an intent-preserving alternative.
  Other commonly cited grounds (accessibility violations, performance cost, inconsistency with the
  existing system, unrepresentable data volumes) are **not sourced this pass** — verify.
- **Sources:**
  - https://www.figma.com/blog/the-designers-handbook-for-developer-handoff/
  - https://www.uxpin.com/studio/blog/10-ways-to-improve-design-to-development-handoff/
  - https://ixdf.org/literature/article/how-to-ensure-a-smooth-design-handoff
  - https://ixdf.org/literature/topics/design-handoffs
  - https://medium.com/@shannonmbain/the-design-developer-relationship-more-than-just-the-handoff-74f24a6886c4
  - https://medium.com/@vishnukumarancv/developer-handoff-acd52f1c8144
  - https://timgraf.com/ux-design/the-complete-guide-to-design-development-handoff-building-a-frictionless-bridge-between-designers-and-developers/
  - https://www.secretstache.com/blog/design-development-handoff/

### 7.2 Working *without* a designer
- No dedicated source captured. The defensible synthesis from everything above: a developer with no
  designer should lean on (a) **convention over invention** (Jakob's Law, §2.4), (b) **one hallway
  test per feature** (§3.3), (c) **SEQ per task** (§6.3), and (d) the **a11y easy checks** (§8) —
  four habits, none requiring design skill. `[SYNTHESIS, UNSOURCED]`

---

## 8. Accessibility as process — quick checks a developer can run

### 8.1 W3C WAI "Easy Checks — A First Review of Web Accessibility"
- **What it is:** the canonical **non-expert** first-pass a11y review from W3C/WAI. Each check
  states briefly what it tests and why it matters; results give "a basic idea of how accessible
  the page is." **This is the single best-authority artifact in this whole section** — it is
  literally designed for people who are not accessibility specialists.
- **Checks it covers (as surfaced):** **page title**, **image alt text**, **headings**
  (do they communicate the content's organization), **color contrast**, **keyboard focus**, and a
  **grayscale check** — view the page in grayscale and see whether any information is lost or hard
  to see (catches color-only signalling).
- **Keyboard focus check:** tab through the page; the focus indicator must be **visible** and must
  **move sensibly**. Rationale given: keyboard-reliant users must be able to tell which link or
  control has focus.
- **Contrast check:** contrast between adjacent colors, typically text vs background. Matters for
  low-vision users with reduced contrast acuity **and** for color-deficient vision.
- **Minimal version (a 5-minute developer smoke test, assembled from the above):**
  1. **Unplug the mouse.** Tab the whole flow. Can you reach and operate everything? Is focus
     always visible? Does focus order match visual order? Can you escape every modal?
  2. **Contrast checker** on your primary text/background pair and your primary button.
  3. **Grayscale the page** — is any meaning carried by color alone still legible?
  4. **Automated pass** — an in-browser auditing extension for the mechanical failures.
  5. **Screen reader smoke test** — turn one on and traverse one critical flow by headings and
     links; does the page announce a sensible title, headings, and control labels?
- **Worth it when:** every feature, before merge. It's a linting habit, not a project.
- **Critical caveat to teach:** automated tools and a non-expert pass catch a *minority* of issues,
  and a developer flailing with VoiceOver is not a substitute for testing with actual screen reader
  users — the smoke test catches gross breakage (unlabeled buttons, unreachable controls), not
  usability. `[This caveat is standard guidance but is UNSOURCED THIS PASS — WebAIM fetch was
  blocked; verify against webaim.org before teaching.]`
- **Sources:**
  - https://www.w3.org/WAI/test-evaluate/preliminary/ (canonical)
  - https://www.w3.org/WAI/test-evaluate/easy-checks/ (draft revision)
  - https://www.w3.org/WAI/test-evaluate/easy-checks/color-contrast/ (contrast check specifically)
  - https://yatil.github.io/EasyChecks/index.html (readable mirror/rework)
  - https://www.w3.org/WAI/test-evaluate/tools/list/ (WAI's evaluation tools directory —
    filterable; the right place to source a contrast checker and an audit extension)
  - https://www.w3.org/WAI/EO/wiki/Easy_Checks (working wiki)
  - https://www.elearningworld.org/w3c-easy-checks-to-start-moving-toward-digital-accessibility/
  - https://webaim.org/articles/screenreader_testing/ (**fetch blocked — highest-priority
    follow-up for the screen-reader smoke test section**)
  - https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Tooling
    (**fetch blocked — dev-native tooling walkthrough, keyboard + screen reader + auditing**)

---

## 9. Cross-cutting observations for the curator

1. **One spine, repeated.** Nearly every method here reduces to the same instruction: *watch a real
   person attempt a real task, and prefer past behaviour to stated opinion.* Mom Test, think-aloud,
   hallway testing, fake doors, tree testing and task success are six faces of that one idea.
   If the course has room for exactly one process lesson, it is this.
2. **Cadence beats rigor.** Krug's "a morning a month," Nielsen's iterate-with-5, and Lean UX's
   short loops all argue that a small thing done repeatedly beats a large thing done once. This is
   the argument that survives contact with a developer's schedule.
3. **Teach every method with its critique attached.** The 5-user rule, personas, NPS and fake doors
   each have a well-documented critique, and in each case the critique is *more* instructive than
   the method. This is also what makes the course credible to a skeptical engineering audience.
4. **Cheapest ranked shortlist for a solo dev** (from everything above): unstyled-HTML/paper
   prototype → one hallway test with think-aloud → SEQ per task → keyboard + contrast + grayscale
   a11y pass → tree test the nav labels. Everything else is optional.
5. **A genuine unresolved conflict to flag, not paper over:** navigation breadth — "~16 top-level
   links" vs "6–7 before task completion declines" (§4.3).

---

## 10. Gaps in this pass (for a follow-up agent)

Blocked by the exhausted shared search budget and by total `WebFetch` egress denial:
- Teresa Torres / continuous discovery, opportunity solution trees (§1.4)
- Heuristic evaluation *as a procedure*, incl. severity rating scales (§3.5)
- Task success / error-rate formal definitions and calculation (§6.1)
- Analytics vs research, session replay, limits of A/B testing for UX questions (§6.6)
- IA labeling conventions and first-click testing (§4.4)
- Participant recruiting on a budget; incentive norms
- Working *without* a designer, as a sourced topic (§7.2)
- Grounds for pushing back on a design, beyond missing states (§7.1)

**Highest-value fetches to retry when egress permits** (all returned by search, all blocked):
`sensible.com/rocket-surgery-made-easy/` · `nngroup.com/articles/why-you-only-need-to-test-with-5-users/` ·
`nngroup.com/articles/measuring-perceived-usability/` · `link.springer.com/content/pdf/10.3758/BF03195514.pdf` ·
`jakobnielsenphd.substack.com/p/user-testing` · `w3.org/WAI/test-evaluate/preliminary/` ·
`webaim.org/articles/screenreader_testing/` · `measuringu.com/sus/` · `mtlynch.io/book-reports/the-mom-test/`

---

## 11. All source URLs (flat list)

**Process / design thinking / Lean UX**
1. https://www.nngroup.com/articles/design-thinking/
2. https://www.nngroup.com/articles/design-thinking-study-guide/
3. https://media.nngroup.com/media/articles/attachments/Design-thinking-101-NNG.pdf
4. https://www.nngroup.com/videos/design-thinking/
5. https://www.nngroup.com/videos/design-thinking-102/
6. https://www.nngroup.com/videos/design-thinking-activities/
7. https://lightit.io/blog/design-thinking-nielsen-norman/
8. https://www.nngroup.com/articles/parallel-and-iterative-design/
9. https://www.lyssna.com/blog/lean-ux/
10. https://www.questionpro.com/blog/lean-ux/
11. https://www.toptal.com/designers/ux/lean-ux-mvp
12. https://medium.com/@_sidharth_m_/beginners-guide-to-lean-ux-defined-explained-228d18940acb
13. https://uxplaybook.org/articles/how-to-implement-lean-ux-in-your-design-process
14. https://b-works.io/en/insights/complete-guide-to-lean-ux/
15. https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop/
16. https://medium.com/@dominic_11011/build-measure-learn-cycle-ace388a13b4d
17. https://www.plainconcepts.com/lean-ux-methodology/

**JTBD**
18. https://www.fullstory.com/blog/clayton-christensen-jobs-to-be-done-framework-product-development/
19. https://productschool.com/blog/product-fundamentals/jtbd-framework
20. https://medium.com/make-us-proud/jobs-to-be-done-framework-748c761797a8
21. https://courseux.com/jobs-to-be-done/
22. https://www.koji.so/docs/jobs-to-be-done-framework
23. https://www.r-ght.com/jobs-to-be-done/
24. https://www.prfire.com/the-jobs-to-be-done-framework-how-to-use-it/
25. https://euleinstitute.com/en/blog/jobs-to-be-done/

**Personas / proto-personas + criticism**
26. https://www.nngroup.com/articles/persona-types/
27. https://www.uxmatters.com/mt/archives/2019/02/the-pitfalls-of-personas-and-advantages-of-jobs-to-be-done.php
28. https://medium.com/typecode/the-problem-with-personas-b6734a08d37a
29. https://makeiterate.com/ux-personas-without-user-research-the-harsh-reality/
30. https://medium.com/@karimcmahon/proto-personas-vs-persona-s-db8873a2d2e4
31. https://medium.com/@gabrielalfsousa/user-profile-proto-persona-and-persona-whats-the-difference-552c103c1e3b
32. https://flatironschool.com/blog/user-personas-in-ux-design-when-are-they-useful/
33. https://www.ux-republic.com/en/Are-personas-still-relevant-in-2025/

**Interviews / The Mom Test**
34. https://mtlynch.io/book-reports/the-mom-test/
35. https://www.ricklindquist.com/notes/the-mom-test-by-rob-fitzpatrick
36. https://readingraphics.com/book-summary-the-mom-test/
37. https://www.finsync.com/start-to-scale/stop-pitching-start-listening-a-summary-of-the-mom-test-by-rob-fitzpatrick/
38. https://www.businessfloss.com/books/the-mom-test
39. https://startupswiki.org/books/books/page/the-mom-test-how-to-talk-to-customers-by-rob-fitzpatrick
40. https://www.goodreads.com/book/show/52283963-the-mom-test
41. https://libraryofllm.com/sources/mom-test

**Mental models**
42. https://www.nngroup.com/articles/mental-models/
43. https://lawsofux.com/mental-model/
44. https://lawsofux.com/jakobs-law/
45. https://ixdf.org/literature/topics/mental-models
46. https://blog.logrocket.com/ux-design/jakobs-law-creating-user-centric-interfaces/
47. https://hi-interactive.com/blog/leveraging-mental-models-in-ux-design/
48. https://medium.com/design-bootcamp/ux-laws-jakobs-law-explained-in-simple-terms-fbeb0d794318
49. https://dev.to/pasindu_tsx/jakobs-law-in-uiux-design-1330
50. https://medium.com/@shakindikithmini/jakobs-law-in-ux-design-why-familiarity-improves-user-experience-boosts-conversions-213c36e4c32b

**Krug / DIY usability testing**
51. https://sensible.com/rocket-surgery-made-easy/
52. https://www.oreilly.com/library/view/rocket-surgery-made/9780321702821/
53. https://www.peachpit.com/store/rocket-surgery-made-easy-the-do-it-yourself-guide-to-9780321657299
54. https://www.amazon.com/Rocket-Surgery-Made-Easy-Yourself/dp/0321657292
55. https://medium.com/@jpolldesign/rocket-surgery-made-easy-book-review-ad4b9fb9ef3b
56. https://www.kmrom.com/post/rocket-surgery-made-easy-book-review
57. https://www.researchgate.net/publication/236881297_Book_review_commentary_Rocket_Surgery_Made_Easy_The_Do-It-Yourself_Guide_to_Finding_and_Fixing_Usability_Problems_by_Steve_Krug
58. https://www.goodreads.com/book/show/6658783-rocket-surgery-made-easy

**5-user rule + critiques**
59. https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/
60. https://link.springer.com/content/pdf/10.3758/BF03195514.pdf
61. https://www.userlytics.com/resources/blog/why-10-participants-give-you-the-complete-ux-picture/
62. https://uxarmy.com/blog/usability-testing-are-5-participants-enough/
63. https://pixeltreemedia.co.uk/usability-testing-with-5-users-is-it-enough/
64. https://frankspillers.com/how-many-users-should-you-test-user-testing/
65. https://maze.co/blog/user-testing-how-many-users/
66. https://thestory.is/en/journal/why-is-it-enough-to-test-5-users/
67. https://aguayo.co/en/blog-aguayo-user-experience/nielsen-norman-theory-usability-testing-5-users/

**Hallway / guerrilla testing**
68. https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/
69. https://medium.com/thinking-design/guerrilla-testing-hallway-usability-tests-for-ux-67fbfc2fd154
70. https://www.boldare.com/blog/hallway-testing-tips/
71. https://xd.adobe.com/ideas/process/user-testing/hallway-usability-test-guerrilla-testing
72. https://openclassrooms.com/en/courses/4555916-test-products-on-users-usability-testing/4812851-get-feedback-quickly-with-guerrilla-testing
73. https://medium.com/design-bootcamp/corridor-testing-5-second-test-5835101f3616
74. https://wall-skills.com/2014/hallway-usability-tests/
75. https://blog.hubspot.com/service/joel-test

**Think-aloud / running a test**
76. https://en.wikipedia.org/wiki/Think_aloud_protocol
77. https://jakobnielsenphd.substack.com/p/user-testing
78. https://www.lyssna.com/guides/think-aloud-protocol/
79. https://www.looppanel.com/blog/usability-testing-strategy
80. https://www.koji.so/docs/think-aloud-protocol
81. https://theelearningcoach.com/elearning_design/think-aloud-protocol/
82. https://theuxcookbook.com/usability-testing
83. https://www.linkedin.com/advice/0/how-do-you-use-think-aloud-method-usability-testing

**Information architecture**
84. https://www.nngroup.com/articles/card-sorting-tree-testing-differences/
85. https://maze.co/guides/tree-testing/vs-card-sorting/
86. https://www.lyssna.com/blog/tree-testing-vs-card-sorting/
87. https://www.playbookux.com/tree-testing-vs-card-sorting-which-is-the-right-method-for-your-project/
88. https://heymarvin.com/resources/tree-testing-vs-card-sorting
89. https://www.usehubble.io/blog/tree-testing-vs-card-sorting
90. https://www.usertesting.com/blog/how-to-use-tree-testing-and-card-sorting
91. https://www.tree-testing.com/tree-testing-is-similar-to-card-sorting/
92. https://provenbyusers.com/help/Tree_Testing-Tree_Testing_vs_Card_Sorting.html
93. https://www.humanfactors.com/newsletters/breadth_vs_depth_we_revisit_this_question.html
94. https://www.cs.umd.edu/hcil/trs/99-15/99-15.html
95. https://dl.acm.org/doi/10.1145/1152215.1152248
96. https://www.agux.co/information-architecture/information-scent-makes-and-broad-and-deep-information-hierarchies
97. https://medium.com/eightshapes-llc/four-tradeoffs-when-designing-navigation-menus-abbf787ae6e3
98. https://codyburleson.com/blog/ia-files-005-navigation-breadth-and-depth
99. https://informationarchitectureauthority.com/navigation-design
100. https://arxiv.org/pdf/2404.11469

**Prototyping & fidelity**
101. https://www.axure.com/blog/how-to-choose-the-correct-level-of-fidelity-for-your-prototype
102. https://www.uxpin.com/studio/blog/high-fidelity-prototyping-low-fidelity-difference/
103. https://miro.com/prototyping/low-fidelity-vs-high-fidelity-prototypes/
104. https://miro.com/wireframe/low-fidelity-vs-high-fidelity-wireframes/
105. https://www.magicpatterns.com/blog/low-fidelity-vs-high-fidelity-wireframes
106. https://www.justinmind.com/wireframe/low-fidelity-vs-high-fidelity-wireframing-is-paper-dead
107. https://www.uptopcorp.com/blog/high-vs-low-fidelity-prototypes/
108. https://wireframetool.com/wireframing-guide/low-vs-high-fidelity-wireframes

**Fake door tests**
109. https://amplitude.com/explore/experiment/fake-door-testing
110. https://www.koji.so/docs/fake-door-testing-guide
111. https://crstanier.medium.com/a-product-managers-guide-to-painted-door-tests-a1a5de33b473
112. https://www.gethorizon.net/guides/fake-door-testing
113. https://evelance.io/blog/fake-door-testing-the-complete-guide/
114. https://mvpdevelopment.company/blog/fake-door-mvp
115. https://help.glidr.io/en/articles/1648423-fake-door-smoke-test
116. https://www.personizely.net/glossary/fake-door-testing
117. https://www.martian.ventures/blog/innovative-methods-for-idea-validation-from-fake-doors-to-wizardry

**Measuring UX — SUS / SEQ / NPS / HEART**
118. https://measuringu.com/sus/
119. https://trymata.com/blog/system-usability-scale-sus/
120. https://cleverx.com/blog/system-usability-scale-sus-complete-scoring-walkthrough
121. https://blog.uxtweak.com/system-usability-scale/
122. https://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/
123. https://yourcx.io/en/blog/2024/09/system-usability-scale-sus-in-ux-research-measuring-user-experience-effectively/
124. https://formbricks.com/survey-templates/system-usability-scale
125. https://www.nngroup.com/articles/measuring-perceived-usability/
126. https://www.nngroup.com/videos/seq-vs-sus/
127. https://www.youtube.com/watch?v=cWau0aimbjM
128. https://trymata.com/blog/measuring-task-usability-the-single-ease-question/
129. https://dscout.com/people-nerds/sus-seq
130. https://www.usersense.com/knowledge-base/usability-metrics/single-ease-question-seq
131. https://wearemadcraft.com/insights/seq-vs-sus-usability-metrics/
132. https://www.questionpro.com/blog/single-ease-question/
133. https://formbricks.com/blog/ux-survey-questions
134. https://www.nngroup.com/articles/nps-ux/
135. https://www.nngroup.com/videos/downsides-net-promoter-score/
136. https://marketingscience.info/news-and-insights/net-promoter-score-actually-bad-tool-use-instead
137. https://www.emerald.com/tqm/article/35/9/191/378999/Statistical-validation-of-critical-aspects-of-the
138. https://www.researchgate.net/publication/370484697_Statistical_validation_of_critical_aspects_of_the_Net_Promoter_Score
139. https://medium.com/@claus.nisslmueller/net-promoter-score-nps-helpful-signal-or-overrated-hero-metric-d30954f29dea
140. https://www.lyssna.com/blog/google-heart-framework/
141. https://www.thefountaininstitute.com/blog/goals-signals-metrics
142. https://ixdf.org/literature/article/google-s-heart-framework-for-measuring-ux
143. https://www.statsig.com/perspectives/heart-framework-measuring-ux
144. https://usersnap.com/blog/heart-framework/
145. https://uxtbe.medium.com/googles-heart-framework-in-ux-cf2fb0585641
146. https://www.geeksforgeeks.org/websites-apps/googles-heart-framework-for-measuring-ux/

**Design handoff / dev-designer collaboration**
147. https://www.figma.com/blog/the-designers-handbook-for-developer-handoff/
148. https://www.uxpin.com/studio/blog/10-ways-to-improve-design-to-development-handoff/
149. https://ixdf.org/literature/article/how-to-ensure-a-smooth-design-handoff
150. https://ixdf.org/literature/topics/design-handoffs
151. https://medium.com/@shannonmbain/the-design-developer-relationship-more-than-just-the-handoff-74f24a6886c4
152. https://medium.com/@vishnukumarancv/developer-handoff-acd52f1c8144
153. https://timgraf.com/ux-design/the-complete-guide-to-design-development-handoff-building-a-frictionless-bridge-between-designers-and-developers/
154. https://www.secretstache.com/blog/design-development-handoff/

**Accessibility as process**
155. https://www.w3.org/WAI/test-evaluate/preliminary/
156. https://www.w3.org/WAI/test-evaluate/easy-checks/
157. https://www.w3.org/WAI/test-evaluate/easy-checks/color-contrast/
158. https://yatil.github.io/EasyChecks/index.html
159. https://www.w3.org/WAI/test-evaluate/tools/list/
160. https://www.w3.org/WAI/EO/wiki/Easy_Checks
161. https://www.elearningworld.org/w3c-easy-checks-to-start-moving-toward-digital-accessibility/
162. https://webaim.org/articles/screenreader_testing/
163. https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Tooling
