# 06 — Taste and Judgement: how people actually build UX judgement

**Scope of this file.** This is the raw-material inventory for the *meta-skill* strand of the course:
how a developer actually acquires UX judgement/taste, as opposed to learning the rules themselves.
It covers (a) theories of what taste is and whether it can be taught, (b) deliberate-practice methods
people actually use (copywork, teardowns, swipe files, daily critique), (c) critique frameworks for
evaluating any screen, (d) the "developer taste" discourse, and (e) noticing/perception training.

**Explicitly out of scope here** (owned by other agents): the design principles and laws themselves,
concrete visual rules (spacing, type, colour), interaction patterns, existing course syllabi,
general community pain-point threads, and delivery-format questions. Where a canon list appears below
(Rams' 10, Maeda's 10, PG's design principles) it is included **only as an artefact of taste-formation
discourse** — the principles agent owns their substance.

---

## ⚠️ Provenance and verification note — READ BEFORE QUOTING

Two environment constraints shaped this file and they matter for how you use it:

1. **Direct page fetching was blocked.** The session's egress proxy returned 403 policy denials for
   effectively every external host tried (`paulgraham.com`, `themarginalian.org`, `longreads.com`,
   `medium.com`, `rauno.me`, `refactoringui.com`, `smashingmagazine.com`, `nngroup.com`-adjacent hosts,
   etc.). No primary source in this file was read directly.
2. **Search budget was exhausted** partway through (200/200 shared across the parallel agents),
   cutting off ~8 planned queries (listed under *Gaps* at the end).

Everything below therefore comes from **search-engine result summaries plus their cited URLs**.
Quotes are marked with a confidence tag:

- `[VERIFIED-WIDELY]` — quote appeared in search results attributed to the named source, and is a
  well-known, heavily-reproduced line. Low risk, but still confirm before printing in course material.
- `[UNVERIFIED-SECONDHAND]` — quote or claim came through a secondary/summary source only.
  **Must be re-checked against the primary source before use.**
- `[PARAPHRASE]` — my compression of a summary; not quotable as-is.

**Action item for whoever curates this:** every `[VERIFIED-WIDELY]` and `[UNVERIFIED-SECONDHAND]` line
needs one pass against the primary URL (all listed at the bottom) once network access allows.

---

## 1. Theories of taste

### 1.1 Paul Graham — "Taste for Makers" (2002)

**URL:** https://paulgraham.com/taste.html
(secondary: https://longreads.com/2011/02/27/taste-for-makers/ ,
https://barnsworthburning.net/extracts/recF6PEJ2dDRwhf01 ,
http://adamzerner.github.io/pg_essay_summaries/taste_for_makers.html ,
https://jiminhsieh.github.io/2017/08/07/Taste-for-Makers-by-Paul-Graham)

**The central claim (why it belongs in this course):** technical ability is not enough — the thing that
separates people who make good work from people who merely can is *taste*, and taste is trainable.
Graham frames it as wanting students "who are not just good technicians, but who could use their
technical knowledge to design beautiful things." `[UNVERIFIED-SECONDHAND]`

**The anti-relativism argument.** Graham's most useful move for a developer audience is refusing the
"taste is subjective, so shut up about it" position. The argument as summarised: people say taste is
subjective, but this isn't actually true — when you start designing things and keep designing them,
you get better at it and your tastes change, exactly like getting better at any other job.
`[PARAPHRASE]` The reductio, quoted in circulation: *"If taste is just personal preference, then
everyone's is already perfect: you like whatever you like, and that's it."* `[UNVERIFIED-SECONDHAND]`
(surfaced via https://x.com/namyakhann/status/2022689279802249324 citing the essay)

**How it works as a taste-building device.** The essay is structured as a list of "Good design is X"
statements drawn from *across* disciplines (maths, painting, architecture, engineering) — the implicit
method is cross-domain triangulation: if the same property shows up in a proof, a painting, and a
plane, it is probably a real property of good work rather than a fashion.

**Principles surfaced in search results (verbatim-form):**
- "Good design is simple." `[VERIFIED-WIDELY]`
- "Good design is timeless." `[VERIFIED-WIDELY]`
- "Good design is often strange. Some of the very best work has an uncanny quality: Euler's Formula,
  Bruegel's Hunters in the Snow, the SR-71, Lisp. They're not just beautiful, but strangely beautiful."
  `[UNVERIFIED-SECONDHAND]`
- "Good design is often slightly funny." `[UNVERIFIED-SECONDHAND]`

**Further principles named in secondary summaries** (headings, not confirmed verbatim — the canonical
list is longer than what search surfaced; **verify the complete list against the primary URL**):
solves the right problem; is suggestive; uses symmetry (two kinds: repetition and recursion);
resembles nature ("nature has had a long time to work on the problem"); is redesign ("you never get
it right the first try" — iteration is not failure); can copy; happens in chunks; is often daring.
`[UNVERIFIED-SECONDHAND]`

**The pull-quote for a course on judgement:** the recipe for great work is *exacting taste plus the
ability to gratify it*. `[UNVERIFIED-SECONDHAND — reproduced in several summaries as "very exacting
taste, plus the ability to gratify it"]`

**Why it fits developers specifically:** the whole essay is addressed to makers of technical things
and uses engineering/maths exemplars, so it does not require the reader to already care about visual
design. It is probably the single best "opening move" text for a developer-facing taste module.

---

### 1.2 Ira Glass — the "taste gap"

**URLs:** https://www.themarginalian.org/2014/01/29/ira-glass-success-daniel-sax/ ,
https://www.goodreads.com/quotes/309485-nobody-tells-this-to-people-who-are-beginners- ,
https://jamesclear.com/ira-glass-failure , https://www.louisefletcherart.com/blog/great-quote

**Origin:** an on-camera interview (widely circulated since ~2009, later animated in typography by
Daniel Sax) — not an essay. `[UNVERIFIED-SECONDHAND on exact provenance]`

**The mechanism, and why it's load-bearing for this course.** Glass's model explains the specific
failure mode a developer learning UI will hit in week three: your taste is *already* good (that's why
you started), your execution is not, and the gap between them is painful enough that most people quit.
The gap is not evidence of no talent — it is evidence that the taste arrived first. This reframing is
the thing that keeps people in the practice loop long enough for the practice to work.

**The prescription is volume + deadline, not study.** "The most important thing you can do is do a lot
of work. Put yourself on a deadline so that every week you will finish one story." `[VERIFIED-WIDELY]`
This is the direct justification for the course's practice exercises: quantity closes the gap,
not more reading.

**Course-design implication:** Glass and Graham are complementary and should probably be taught
together — Graham says taste is trainable and gives you the axes; Glass explains why the training
*feels* like failure and tells you to ship weekly anyway.

---

### 1.3 Dieter Rams — Ten Principles for Good Design

**URLs:** https://www.vitsoe.com/us/about/good-design (primary/canonical),
https://designmanifestos.org/dieter-rams-ten-principles-for-good-design/ ,
https://ixdf.org/literature/article/dieter-rams-10-timeless-commandments-for-good-design

**Relevance to *taste* (not to principles-teaching):** Rams' list is the canonical example of a
practitioner **codifying** their own accumulated judgement into a checklist that outlives them. That
codification act is itself the lesson — the way to make taste transmissible is to write down the
questions you already ask yourself. Rams reportedly wrote it by asking himself "is my design good
design?"; the ten answers are the residue. `[PARAPHRASE]`

**The list** (substance owned by the principles agent; included here for the taste-formation framing):
innovative; makes a product useful; aesthetic; makes a product understandable; honest; unobtrusive;
long-lasting; thorough down to the last detail; environmentally friendly; **as little design as
possible**. `[VERIFIED-WIDELY]`

**Quote:** "Good design is as little design as possible — Less, but better. Simple as possible but not
simpler." `[VERIFIED-WIDELY — but note the "Weniger, aber besser" / "Less, but better" line is Rams'
motto and is sometimes conflated with the tenth principle's fuller text; check Vitsœ wording]`

---

### 1.4 John Maeda — The Laws of Simplicity (2006)

**URLs:** https://lawsofsimplicity.com/ (primary), https://fs.blog/the-laws-of-simplicity/ ,
https://readingraphics.com/book-summary-the-laws-of-simplicity/ ,
https://grahammann.net/book-notes/the-laws-of-simplicity-john-maeda

**Relevance to taste:** Maeda's laws are a *heuristic vocabulary* — the value for a developer building
judgement is having named handles for intuitions they already half-have. "This screen feels heavy" is
not actionable; "this violates Reduce and Organize" is.

**The ten laws** `[VERIFIED-WIDELY as a list; individual glosses `[UNVERIFIED-SECONDHAND]`]`:
1. **Reduce** — "The simplest way to achieve simplicity is through thoughtful reduction."
2. **Organize** — "Organization makes a system of many appear fewer."
3. **Time** — "Savings in time feel like simplicity."
4. **Learn** — "Knowledge makes everything simpler."
5. **Differences** — "Simplicity and complexity need each other."
6. **Context** — "What lies in the periphery of simplicity is definitely not peripheral."
7. **Emotion** — "More emotions are better than less."
8. **Trust** — "In simplicity we trust."
9. **Failure** — "Some things can never be made simple."
10. **The One** — "Simplicity is about subtracting the obvious, and adding the meaningful."

Law 10 is the most quotable single line for a judgement course. Law 9 is the honest counterweight
that stops "simplify everything" becoming a reflex.

---

### 1.5 Julie Zhuo — "your eye" as the limiting factor

**URLs:** https://medium.com/the-year-of-the-looking-glass/junior-designers-vs-senior-designers-fbe483d3b51e ,
https://medium.com/the-year-of-the-looking-glass/the-beginning-of-your-design-career-549828025494 ,
https://medium.com/the-year-of-the-looking-glass/8-unintuitive-lessons-on-being-a-designer-ca7e97a572ee ,
https://lg.substack.com/p/the-looking-glass-higher-level-design ,
https://asimpleframe.com/notes/junior-vs-senior-designers/

**The core idea, and it is the thesis of this whole strand:** *"how good your work product is will
always be limited by how good your eye is"* — where "eye" means the ability to critically discern the
strengths and weaknesses of a design. `[UNVERIFIED-SECONDHAND — surfaced via search summary of Zhuo's
writing; locate the exact essay before quoting]` Her early-career advice follows from it: "develop
your eye for what good visuals look like." `[UNVERIFIED-SECONDHAND]`

**Why this framing is useful for developers:** it converts a vague aspiration ("get better at design")
into a bottleneck diagnosis. You cannot produce above your discrimination ceiling; therefore the
highest-leverage training is *perception* training (looking, comparing, articulating), not tool
training. This is the argument that justifies copywork/teardowns/swipe files over more Figma tutorials.

**"Junior Designers vs. Senior Designers" (2017)** — an essay made almost entirely of sketches. The
form is itself a taste artefact (Zhuo chose drawings over prose "to communicate points more simply and
memorably"). `[PARAPHRASE]` Useful as an artefact showing *what changes* as judgement matures.

**Related:** "Design, Illustrated in 3 Charts"
(https://medium.com/the-year-of-the-looking-glass/design-illustrated-in-3-charts-128ae8ff22fe).

---

### 1.6 Frank Chimero — *The Shape of Design* (free online)

**URLs:** https://shapeofdesignbook.com/ , https://shapeofdesignbook.com/chapters/02-craft-and-beauty/ ,
https://monoskop.org/images/b/b4/Chimero_Frank_The_Shape_of_Design.pdf ,
https://www.goodreads.com/work/quotes/18180257-the-shape-of-design

**Position:** taste is downstream of *care*, and care is downstream of *affection for the audience*.
This is the humanist counterweight to checklist-based taste, and it gives a non-cynical answer to
"why bother polishing this."

Chapter 02 "Craft and Beauty" is the directly relevant chapter and it is free to read — a good
assigned-reading candidate given no paywall.

Key quotes `[UNVERIFIED-SECONDHAND — all via quote-aggregator results; verify against the free book]`:
- "This is the source of the highest craft, because an affection for the audience produces the care
  necessary to make the work well."
- "Questions about How to do things improves the craft and elevates form, but asking Why unearths a
  purpose and develops a point of view."
- "Beauty is a special form of craft that goes beyond making something work better."

That middle quote is the cleanest available statement of the how/why split — directly usable to
explain why a screen that satisfies every rule can still be bad.

---

### 1.7 Rauno Freiberg — "Invisible Details of Interaction Design" (2023) and *Devouring Details*

**URLs:** https://rauno.me/craft/interaction-design (essay home; also syndicated),
https://every.to/p/invisible-details-of-interaction-design ,
https://devouringdetails.com/ , https://ui.land/interviews/rauno-freiberg ,
https://spaces.is/loversmagazine/interviews/rauno-freiberg ,
https://sebastiangreger.net/2023/07/bookmark-invisible-details-of-interaction-design

**Who:** Estonian design engineer, Staff Design Engineer at Vercel, previously The Browser Company
(Arc); author of the `cmdk` library. He is the central figure in the current "design engineer / craft"
discourse and the closest thing to a native role model for the course's audience.

**The method, and this is the most directly transferable technique in this whole file:** the essay is
~3,000 words deconstructing interaction craft through metaphors and examples. The stated payoff:
*analysing and making sense of design details beyond just "it feels nice" helps nurture taste, amplify
the level of execution, and grow an appreciation for how hard the pursuit of excellence is.*
`[UNVERIFIED-SECONDHAND — close paraphrase of the essay's framing as surfaced in search]`

**Extract the practice from that:** taste grows by refusing to stop at "it feels nice" and forcing
yourself to name the *cause* — a specific spring curve, a specific real-world metaphor (swipe, pinch),
a specific timing. "Name the cause of the feeling" is a repeatable weekly exercise and it is the
noticing-skill drill this course needs.

**Themes covered:** gestures rooted in real-world metaphor; timing of animations; physics of motion;
predictability of gestures; interfaces that feel natural and responsive.

***Devouring Details*** — his interactive course, split into three units: **Principles, Prototypes,
Resources**. Deliberately has *no* code challenges, quizzes, or step-by-step tutorials; instead
learners interact with prototypes and are "exposed to details that Rauno pays attention to."
`[UNVERIFIED-SECONDHAND]` **This is a direct precedent for the pedagogy question**: a craft course
built on *guided exposure* rather than instruction. Note it as prior art for the course's format
discussion (format itself is another agent's call, but the exposure-based model is a taste-teaching
claim and belongs here).

Related craft artefact: https://www.uxtools.co/blog/your-ui-needs-more-walt-disney (animation
principles as craft training).

---

### 1.8 Linear / Karri Saarinen — craft as strategy, and taste as a *hiring* criterion

**URLs:** https://linear.app/now/why-is-quality-so-rare ,
https://www.lennysnewsletter.com/p/inside-linear-building-with-taste ,
https://www.lennysnewsletter.com/p/how-linear-builds-product ,
https://buildingslow.substack.com/p/building-product-the-linear-way ,
https://www.antoinebuteau.com/lessons-from-karri-saarinen-of-linear/ ,
https://jobsbyculture.com/blog/linear-interview-prep-2026

**The most useful single definition of taste in this entire file** — Linear's operational one:
*taste is the ability to (1) notice what is bad, (2) articulate why it is bad, and (3) have a point of
view on what good looks like.* `[UNVERIFIED-SECONDHAND — surfaced as a characterisation of Linear's
hiring bar; find a citable primary statement]`

Three testable components, three teachable skills, and it maps exactly onto the course's promise.
If the course needs one operating definition of "UX judgement," this is the strongest candidate.

**Supporting claims from the Linear discourse** `[UNVERIFIED-SECONDHAND / PARAPHRASE]`:
- "We started with quality... people actually noticed, because it's a rare approach — especially for
  startups."
- Direction of causation is inverted vs. the standard playbook: ideas and assumptions are *driven by
  taste and opinions*, then validated — rather than tests driving decisions.
- Decision test: "does this improve quality?" not only "will this ship faster?"
- Trust "your sense of what feels right" alongside users, not just metrics.
- Craft as moat: competitors cannot copy taste without the team that has it.
- Craft as distribution: when the product is screenshot-worthy, distribution is cheaper.
- Taste and attention to detail are assessed in **work trials** — i.e. an industry claim that taste is
  observable and assessable in practice, which is itself evidence against "you can't teach taste."

**Caveat to flag in the course:** this is a company narrating its own success; it is motivated
reasoning as much as evidence. Use it as a *position*, not proof.

---

### 1.9 Steve Jobs — "design is how it works," in context

**URLs:** https://www.nytimes.com/2003/11/30/magazine/the-guts-of-a-new-machine.html (Rob Walker,
"The Guts of a New Machine," *NYT Magazine*, 30 Nov 2003),
https://www.macworld.com/article/168987/ipod-47.html ,
https://daringfireball.net/2012/02/walter_isaacson_steve_jobs ,
https://newsletter.rogerwong.me/p/design-is-how-it-works-and-what-it

**The full quote, which matters because the short version is routinely mangled:**

> "Most people make the mistake of thinking design is what it looks like. People think it's this
> veneer — that the designers are handed this box and told, 'Make it look good!' That's not what we
> think design is. It's not just what it looks like and feels like. Design is how it works."
> `[VERIFIED-WIDELY — attributed to Jobs in Rob Walker's NYT Magazine iPod piece, 30 Nov 2003]`

**Why the full version is the one to teach:** the truncated "design is how it works" gets used by
engineers to justify ignoring visual craft entirely. The full quote says "not *just* what it looks
like" — it is an *expansion* of design's remit, not a permission slip to skip aesthetics. Worth an
explicit callout; this misreading is common in exactly the audience the course targets.

**Counterpoint source worth keeping:** https://newsletter.rogerwong.me/p/design-is-how-it-works-and-what-it
argues explicitly for the "and what it looks and feels like" restoration.

---

### 1.10 The "you can't teach taste" debate

**URLs:** https://www.fastcompany.com/90863652/you-cant-teach-taste ,
https://theculturecreative.substack.com/p/you-cant-teach-taste ,
https://matejlatin.com/designers-digest/can-good-design-taste-be-taught/ ,
https://signalvnoise.com/posts/1325-acquire-taste ,
https://www.linksforthinks.com/p/18-developing-taste ,
https://www.designative.info/2026/02/01/taste-is-the-new-bottleneck-design-strategy-and-judgment-in-the-age-of-agents-and-vibe-coding/

**The sceptical position:** taste is innate/absorbed, not instructable. Represented in the Fast Company
piece by Omar Nobil (creative director, Design Within Reach), who argues you *cannot* teach taste.
`[UNVERIFIED-SECONDHAND]`

**The counter-position, and the one the course implicitly bets on:**
- Emmanuel Platt (director of merchandising, MoMA): "You can learn taste... you learn from different
  people, different travels... You meet with artists, designers, manufacturers."
  `[UNVERIFIED-SECONDHAND]`
- Taste is "a learnable skill that develops through structured conversations about what works and why."
  `[UNVERIFIED-SECONDHAND]`
- Taste is "a learnable leadership capability — not a personality trait and not a mysterious 'eye,' but
  a learned judgment that guides what we notice, what we value, and what we choose to amplify."
  `[UNVERIFIED-SECONDHAND, from the designative.info piece]`

**The single most course-relevant mechanism claim:** taste develops through **exposure, comparison,
feedback, and socialisation** — and critically, *"taste sharpens not when we merely encounter many
examples, but when we actively compare alternatives and articulate distinctions."*
`[UNVERIFIED-SECONDHAND]`

That sentence is the design brief for every exercise in the course: passive scrolling through Dribbble
does nothing; **comparison + articulation** is the active ingredient. It explains why copywork works,
why teardowns work, why annotated swipe files work, and why a raw inspiration feed does not.

**The AI-era escalation of the debate** (2025–26): as generation gets cheap, judgement becomes the
bottleneck. "Taste is the new bottleneck" framing; and the widely-repeated line that AI "can build
anything now, but it can't tell you what's worth building." `[UNVERIFIED-SECONDHAND]` This is the
strongest available *motivation* hook for a 2026 developer audience.

---

### 1.11 The "developer taste" discourse

**URLs:** https://www.seangoedecke.com/taste/ , https://news.ycombinator.com/item?id=45410940 ,
https://mtrajan.substack.com/p/taste-for-engineers ,
https://pakodas.substack.com/p/how-to-be-a-30x-ai-engineer-with-a-taste ,
https://thethinkingbuilder.substack.com/p/beauty-is-a-virtue ,
https://aiuxplayground.com/guides/rise-of-the-design-engineer/ ,
https://uithings.com/design-engineering ,
https://medium.com/design-optimizely/why-we-hire-ui-engineers-on-optimizely-s-design-team-b2a789553b79

**Sean Goedecke, "What is 'good taste' in software engineering?"** — the best-argued piece here, and it
transfers cleanly to UI:
- "Your engineering taste is composed of the set of engineering values you find most important."
  `[UNVERIFIED-SECONDHAND]`
- Taste ≠ skill: "You can be technically strong but have bad taste, or technically weak with good
  taste." `[UNVERIFIED-SECONDHAND]`
- **The key asymmetry, and the single best analogy for the course:** "just like you can tell good food
  from bad without being able to cook, you can know what kind of software you like before you've got
  the ability to build it." `[UNVERIFIED-SECONDHAND]` — this is Ira Glass's taste gap restated in
  engineering terms, and it lands better with this audience.
- Honest admission worth keeping: taste "is developed in a more mysterious way" than technical ability,
  which yields to study and repetition. `[UNVERIFIED-SECONDHAND]`
- Mature definition: taste is "the ability to adopt the set of engineering values that fit your current
  project" — i.e. taste is **contextual**, not a fixed aesthetic. `[UNVERIFIED-SECONDHAND]`

**Taste is not minimalism — the most important corrective in this file.** From the "Taste for
Engineers" discourse: the common misconception is that taste means minimalism, whitespace, and
sans-serif. Counter-example given: MakeMyTrip dominates India because Indian travellers *want* dense
design and strong colours — every option, every deal, every comparison on one screen. "What makes a
San Francisco designer flinch is exactly what builds trust in Tier 2 India."
`[UNVERIFIED-SECONDHAND]` **This should be taught explicitly**, or the course will simply install a
Vercel-flavoured aesthetic prejudice and call it judgement.

**Taste as iteration count — a concrete behavioural signature.** Boris Cherny at Anthropic reportedly
built ~20 prototypes of the Claude Code todo-list feature in two days; most engineers would have
shipped the first decent approach. The framing: "the initial dissatisfaction with each intermediate
version was taste operating as compass." `[UNVERIFIED-SECONDHAND — anecdote via the Substack pieces
above; verify before repeating, it is a claim about a named person]`
Useful because it makes taste *observable as a behaviour* (kept iterating because something felt
wrong) rather than a mystical property.

**Refactoring UI as existence proof that this is teachable to developers.**
https://refactoringui.com/ , https://www.steveschoger.com/book/ , https://github.com/erikuus/good-ui
Adam Wathan describes himself as "a full stack developer who used to suck at design." The pivotal
belief-change: he "previously chalked it up to a left brain / right brain sort of thing" — logical
people code, intuitive people design — until working with Steve Schoger revealed "little tricks that
didn't require any artistic talent, but made things look better instantly, for reasons that made sense
to him as a developer." `[UNVERIFIED-SECONDHAND — close paraphrase of the book's own framing]`
Framing to steal: **"gets talent out of the picture."** This is the exact promise a developer-facing
taste course needs, and there is a proven market for it.

---

## 2. Deliberate practice methods

The unifying principle across all of these (from §1.10): **exposure alone does nothing; comparison and
articulation are the active ingredients.** Every method below should be taught with a "now say why"
step attached, or it degrades into scrolling.

### 2.1 Interface copywork (highest-value method for this audience)

**URLs:** https://www.learnui.design/blog/copywork-ultimate-way-rapidly-improve-design-skills.html ,
https://designlab.com/blog/value-of-copywork-in-ui-design ,
https://www.smashingmagazine.com/2017/02/improving-ui-design-skills-copywork/ ,
https://www.learnui.design/blog/5-practical-exercises-learn-ui-design-free.html ,
https://uxplanet.org/the-value-of-copywork-in-learning-ui-design-b0b40695c1be

**What it is:** recreating an existing interface as closely as possible — pixel for pixel — purely as
practice. Borrowed from writers and painters, who have used copywork for centuries (aspiring novelists
retyping novels; painters copying masters in galleries).

**Why it works — the mechanism, stated well:** rebuilding someone else's design from scratch "makes one
see the great deal of nuance that goes into the interfaces we regularly use," and "copying directly
from a master provides a controlled setting in which to train your eye." `[UNVERIFIED-SECONDHAND]`
The key insight is that it converts *passive looking* into *forced noticing*: you cannot reproduce a
spacing rhythm you never consciously registered. Every unnoticed detail becomes a visible failure.

**The procedure:**
1. Screenshot a favourite site above the fold, or the first screen of an app.
2. Open Figma (or equivalent), paste the screenshot into a frame, create a second frame of the same
   size beside it.
3. Rebuild every element from scratch in the empty frame.
4. Overlay/compare and hunt the deltas — the deltas are the curriculum.

**Selection rule:** "pick a design that is better than what you are currently capable of... by copying
something outside of your wheelhouse, you will be expanding your skills." `[UNVERIFIED-SECONDHAND]`

**Ethical guardrail that must be taught alongside it:** copywork is practice only — never put copywork
in a portfolio, never ship it. (Designlab has a companion piece specifically on plagiarism in design:
https://designlab.com/blog/plagiarism-in-design)

**Developer-native variant worth proposing:** do the copywork **in code, not Figma**. Rebuild the
screen in HTML/CSS with devtools closed, then diff against the original. This plays to the audience's
existing skills, removes the Figma-learning tax, and makes the exercise directly transferable to their
day job. (This is my synthesis, not sourced — flag as an original course design idea.)

### 2.2 UI / product teardowns

**URLs:** https://www.kodeco.com/books/app-design-apprentice/v2.0/chapters/3-app-teardowns ,
https://uxdesign.cc/building-an-intentional-design-practice-with-2-hr-teardowns-4ecd036aabd6 ,
https://uibreakfast.com/custom-audit/ , https://hellopm.co/what-is-a-product-teardown/ ,
https://blog.logrocket.com/product-management/product-teardown-process-tools/

**What it is:** systematically analysing an existing app's design, features and functionality —
reviewing UI, UX, flows, and overall architecture, then articulating strengths, weaknesses and
unique choices.

**Three levels of analysis to teach separately** (they train different muscles):
- **Design level** — UI/UX choices, accessibility, visual hierarchy, layout, typography, colour.
- **Workflow level** — end-to-end journeys (account setup, checkout), where the seams are.
- **Component level** — the Kodeco exercise: *trace screenshots using basic shapes* to uncover the
  reusable primitives underneath. "A large part of each app's experience was crafted by standing on
  the shoulders of reusable components with unique data." `[UNVERIFIED-SECONDHAND]` This is excellent
  for developers — it maps interfaces onto a mental model (composition, reuse) they already own.

**The cheapest high-yield format** (from the UX Collective 2-hour teardown piece): print 5–8 good
examples on paper, take a pencil, and audit by hand — what works, what doesn't.
`[UNVERIFIED-SECONDHAND]` Paper matters: it removes the temptation to fiddle and forces annotation.

**Timeboxing:** the "2-hr teardown" framing exists precisely to make this a *recurring habit* rather
than an occasional project. Ritual > intensity.

### 2.3 Swipe file / inspiration library (done properly)

**URLs:** https://blog.opendoorscareers.com/p/level-up-your-design-game-capture-inspiration-build-a-swipe-file-to-sharpen-your-eye ,
https://mobbin.com/ , https://mobbin.com/about , https://designcode.io/mobbin-design/ ,
https://uxcel.com/blog/best-resources-for-design-inspiration ,
https://www.banani.co/references

**What it is:** a curated personal database of design references (a.k.a. lookbook, inspiration bucket).

**The one rule that turns it from hoarding into practice:** *"Write a brief note on why you saved a
piece and what you like about it — which not only helps with context later but also trains your eye as
you reflect on what makes a design stand out."* `[UNVERIFIED-SECONDHAND]`
The note **is** the exercise. A swipe file without annotations is a Pinterest board and teaches
nothing (see §1.10: comparison + articulation, not exposure).

**Mechanics:** tags are the backbone — categorise broadly, filter granularly. Save the original source
link, but treat the local copy as the backup and expect links to rot.

**Mobbin** — the current standard reference library: expert-curated interfaces from best-in-class
products, covering design patterns, copywriting, and *whole user flows* (not isolated screens) from
Airbnb, Uber, Fiverr etc. The flow-level coverage is the important part — it is the direct antidote to
the Dribbble problem below.

### 2.4 "Steal like an artist," applied to UI

**URLs:** https://en.wikipedia.org/wiki/Steal_Like_an_Artist ,
https://medium.com/design-bootcamp/steal-like-a-designer-424270239846 ,
https://medium.com/design-bootcamp/from-imitation-to-innovation-lessons-from-steal-like-an-artist-by-austin-kleon-eebbddbc64ab ,
https://grahammann.net/book-notes/steal-like-an-artist-austin-kleon

**The permission structure** this gives a nervous beginner: all creative work builds on prior work;
nothing is truly original; "original thinkers are people who effectively learned to remix other
materials." `[UNVERIFIED-SECONDHAND]`

**The distinction that must be taught with it:** steal the *thinking*, not the pixels. "Copy from
people you admire — not just their style but how they think," i.e. reverse-engineering. Sketching
wireframes and mimicking designs "helps one understand *why* elements were placed in certain ways and
the thought behind them." `[UNVERIFIED-SECONDHAND]`

**The consoling line, which pairs beautifully with Ira Glass:** we are "incapable of making perfect
copies — our failure to copy our heroes is where our own thing lives." `[UNVERIFIED-SECONDHAND]`
So copywork does not produce derivative designers; the copying error *is* the emerging voice.

### 2.5 Daily UI challenges — and the trap

**URLs:** https://dribbble.com/stories/2018/11/09/dribbblers-sharpen-their-skills-with-daily-ui-challenges ,
https://medium.com/intercom-inside/the-dribbblisation-of-design-406422ccb026

Daily-UI-style challenges do build volume (the Glass prescription) and Dribbble itself promotes them
as skill-sharpening. But they inherit the Dribbblisation failure mode below unless each entry is tied
to a real constraint (real content, real edge cases, real states — empty/loading/error).

### 2.6 Why Dribbble is criticised (the anti-pattern to teach explicitly)

**URLs:** https://www.intercom.com/blog/the-dribbblisation-of-design/ (Paul Adams, Intercom — the
origin of the term), https://medium.com/intercom-inside/the-dribbblisation-of-design-406422ccb026 ,
https://medium.com/@wr/dribbble-is-not-for-product-designers-but-thats-okay-62bb85f11d1d ,
https://hitchhikersguidetodesign.com/book/dribbblization/ ,
https://medium.com/design-bootcamp/is-dribbbalization-really-that-bad-though-a89503db9aeb (the
steel-man/counterpoint), https://techcrunch.com/2025/08/04/a-top-designer-was-banned-from-dribbble-now-hes-building-his-own-competitor

**Definition:** "Dribbblisation" = designs optimised for portfolio likes instead of usability;
aesthetic polish and flashy visuals prioritised over clarity, usability and real-world context.

**The four criticisms, all of which are *taste-corrupting* mechanisms — this is why it belongs in a
judgement course rather than a tooling one:**
1. **Appearance over problem-solving.** "Fake work" ignores that real design problems carry vast
   requirements; the work doesn't address business goals or real daily problems.
2. **Designing for peers, not users.** "Too many designers are designing to impress their peers rather
   than address real business problems." This is the mechanism by which a feedback loop trains the
   *wrong* taste — the reward signal (likes from other designers) is decoupled from the outcome
   (someone completing a task).
3. **No depth or context.** Designers "just put up 2–3 screens without thinking from a macro
   perspective of how these screens will fit in on an actual 200-screen project."
4. **Homogenisation.** "A huge majority of the product design work on Dribbble looks the same, whether
   it's social software, accounting software, a marketing site, or a weather app." (The Intercom piece
   famously opens on near-identical weather apps.)
All `[UNVERIFIED-SECONDHAND]`.

**The teachable lesson, which is bigger than Dribbble:** *your taste is trained by whatever feedback
loop you plug into.* Choose the loop deliberately. If your reward signal is likes, you will acquire
like-optimised taste. This generalises to Twitter/X screenshots, awards sites, and internal design
review theatre.

**Keep the counterpoint too** (Bootcamp "Is Dribbblization really that bad, though?") — visual
exploration untethered from constraints has real value for building a vocabulary of possibilities;
the failure is mistaking it for product design.

### 2.7 Heuristic evaluation as a *practice* tool (not just an audit method)

**URLs:** https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/ ,
https://www.nngroup.com/topic/heuristic-evaluation/ ,
https://blog.uxtweak.com/usability-heuristics/ ,
https://cleverx.com/blog/heuristic-evaluation-10-nielsen-principles-explained/ ,
https://uxcel.com/lessons/usability-heuristics-553

**The taste-relevant claim, and it is the best available evidence that structured practice converts
into intuition:** *"Heuristic evaluations become easier the more you conduct them. With practice,
you'll need to rely less and less on the actual heuristics, and you'll start to develop UX instincts
so you can quickly recognise potential usability problems."* `[UNVERIFIED-SECONDHAND — NN/g]`

This is the scaffolding-then-fading model: explicit checklist → repetition → internalised judgement.
It is exactly what the course is trying to induce, and NN/g asserting it gives the claim institutional
weight.

**Why it works as a drill:** "running through all 10 heuristics on a single screen often surfaces
issues that casual review misses." `[UNVERIFIED-SECONDHAND]` The checklist defeats the beginner's
biggest problem — not knowing what to look *for*, so seeing nothing.

**Practical advantages for a solo learner:** no participant recruitment, no test environment, very
cheap, can be done on any product at any time. Provenance: Nielsen & Molich 1990, refined by Nielsen
to the current 10 in 1994.

### 2.8 Product sense as a learnable skill (adjacent, PM-flavoured but structurally identical)

**URLs:** https://www.lennysnewsletter.com/p/product-sense (Jules Walter),
https://www.lennysnewsletter.com/p/how-to-develop-product-sense ,
https://blog.academyofpm.com/p/product-sense , https://rogerwong.me/2025/09/how-to-develop-product-sense ,
https://www.lennysnewsletter.com/p/product-sense/comments

Jules Walter (ex-Slack, ex-YouTube, now Google/Gemini) argues product sense "is not something you need
to be born with — it's a learned skill, just like any other PM skill," and gives four concrete ways to
build it. `[UNVERIFIED-SECONDHAND — the four methods were not retrievable before the search budget ran
out; **this is a priority follow-up fetch**, as it is one of the few sources with an explicit named
curriculum for building judgement.]`

Structurally this is the same argument as the taste argument, aimed at PMs, and it's a strong
credibility anchor because the audience knows Lenny's newsletter.

---

## 3. Critique frameworks

### 3.1 Julie Zhuo — "How to Do a Product Critique"

**URLs:** https://medium.com/the-year-of-the-looking-glass/how-to-do-a-product-critique-98b657050638 ,
https://www.americanpressinstitute.org/need-to-know/offbeat/product-critique-facebooks-product-design-director/ ,
https://rohansandeep.medium.com/product-critique-3facc5e1d282 ,
https://manassaloi.com/2020/12/01/product-critique.html ,
https://uxdesign.cc/dont-overthink-your-product-critique-interview-b472b5c06274 ,
https://www.designernews.co/stories/26242-how-to-do-a-product-critique-by-julie-zhuo

**Stated purpose:** to explore "why some products and experiences work for people, and why others
don't." `[UNVERIFIED-SECONDHAND]`

**The structural innovation — critique across *time*, not just across a screenshot.** Zhuo breaks the
critique into three temporal stages, each of which surfaces different truths. This is the framework's
main contribution and it is exactly what a screenshot-based critique culture (Dribbble) cannot do:

**Stage 1 — Before you open the app.** How did you discover it? What did you expect? What promise was
made to you? (Everything before first launch is part of the product.)

**Stage 2 — The first few minutes.** How do you *feel*? What is confusing? What worked immediately?
Onboarding, first-run, first value.

**Stage 3 — Days, weeks, months after.** How often have you used it? When do you tend to use it?
What compels you to open it? How does it compare to similar apps? Which things does it do better or
worse? What would make you choose this over the alternative? What do other people think of it?

`[Stage question lists: UNVERIFIED-SECONDHAND — reconstructed from summaries; the original essay has
the full question set and should be fetched.]`

**Why it fits this course:** it needs no design vocabulary to start. A developer can run it on day one
using only honest self-observation, and it builds the habit of *interrogating* products they already
use — turning daily software use into practice hours.

### 3.2 "I Like, I Wish, What If" (IDEO / d.school)

**URLs:** https://www.ideo.com/journal/build-your-creative-confidence-i-like-i-wish ,
https://public-media.interaction-design.org/pdf/I-Like-I-Wish-What-If.pdf ,
https://spin.atomicobject.com/i-like-i-wish-what-if/ ,
https://medium.com/@theuxarchitect/the-art-of-design-critique-a-framework-for-meaningful-feedback-7e6949d13ee7

**The three moves:**
- **"I like…"** — specific elements that work, *and why* (the "why" is mandatory; "I like it" is noise).
- **"I wish…"** — improvements framed constructively rather than as complaints.
- **"What if…"** — exploratory, opens possibilities rather than closing them.

**Why it works:** it makes feedback balanced by construction and stops the session degenerating into a
list of complaints; the "what if" slot legitimises speculative ideas that would otherwise feel unsafe
to voice. `[PARAPHRASE]`

**Best feature for beginners:** it gives a person with no design vocabulary a *sentence stem*. Most
beginners stay silent in critique because they can't phrase the observation, not because they didn't
see the problem. Stems unblock that — a cheap, high-yield thing for the course to hand out.

### 3.3 Running a critique — facilitation rules

**URLs:** https://www.nngroup.com/articles/design-critiques/ ,
https://www.uxtigers.com/post/design-crit , https://jakobnielsenphd.substack.com/p/design-crit ,
https://scottberkun.com/essays/23-how-to-run-a-design-critique/ ,
https://www.shopify.com/uk/partners/blog/12-rules-of-engagement-when-running-design-critiques-from-nasdaq-s-aaron-irizarry ,
https://www.toptal.com/designers/product-design/productive-design-critique-guide ,
https://blog.uxtweak.com/design-critique/ , https://medium.com/@iXd/facilitating-a-critique-5f0a7d7c19f ,
https://thecrit.co/resources/how-to-run-design-critique

**The rules that recur across all of these** `[PARAPHRASE / UNVERIFIED-SECONDHAND]`:
1. **Name the central question first.** The facilitator states what the critique is meant to answer and
   returns to it whenever the room drifts. A critique without a question becomes a taste parade.
2. **The presenter listens and does not defend.** "Make sure people receiving feedback just listen —
   this is not a time to defend decisions or challenge the critique." Defending converts critique into
   debate and kills the information flow.
3. **One question per turn.** Ask your single question, then lower your hand so others can contribute
   before you go again. Prevents one loud person owning the session.
4. **Describe the problem, don't prescribe the solution.** Report the symptom you experienced; leave
   the fix to the designer.
5. **Tie feedback to user goals and business objectives, not personal preference.** The single most
   important habit — it is what distinguishes critique from opinion.
6. **Record everything** — shared doc for large groups, post-its/index cards for small ones. The
   presenter cannot both listen and take notes.
7. **The facilitator enforces the rules** and keeps things on topic — an explicit role, not an
   emergent one.

**Critique vs. feedback vs. reaction** — the standard distinction (Connor & Irizarry, *Discussing
Design*; not directly retrieved before the budget ran out, flagged as a gap): a *reaction* is "I don't
like it"; *feedback* is unstructured response; *critique* is analysis against stated objectives.
`[UNVERIFIED — reconstruct from the primary source]`

### 3.4 Questions to ask of any screen (assembled from across sources)

A composite starter set the course could ship as a one-page card. Sources are mixed (Zhuo §3.1,
Nielsen heuristics §2.7, Linear's definition §1.8, Chimero's How/Why split §1.6):

- **What is this screen's job?** What single thing must a user be able to do here? (If you can't answer
  in one sentence, that's the finding.)
- **What does it want me to do next?** Is the primary action unmistakable within one second?
- **What did I feel in the first five seconds** — and *why*? (Rauno's rule: don't stop at "nice.")
- **What is the most prominent thing, and is it the most important thing?** (Prominence/importance
  mismatch is the most common and most fixable defect.)
- **What happens when it's empty, loading, failing, or full of too much real data?** (The four states
  Dribbble never shows.)
- **What would I remove?** (Rams 10 / Maeda 1.)
- **Where did the designer decide something, and where did they default?**
- **Whose taste is this serving — the user's, or other designers'?** (§2.6)
- **What is the *why* behind this form, not just the how?** (§1.6)

`[This composite is my synthesis of the sourced material — not a citable framework. Mark as
course-original if used.]`

---

## 4. Quotes worth keeping

All quotes carry their confidence tag. **Nothing here has been checked against a primary source** —
see the provenance note at the top.

**On whether taste is real and trainable**

> "If taste is just personal preference, then everyone's is already perfect: you like whatever you
> like, and that's it."
> — Paul Graham, *Taste for Makers* `[UNVERIFIED-SECONDHAND]`

> "Good design is often strange. Some of the very best work has an uncanny quality: Euler's Formula,
> Bruegel's Hunters in the Snow, the SR-71, Lisp. They're not just beautiful, but strangely beautiful."
> — Paul Graham, *Taste for Makers* `[UNVERIFIED-SECONDHAND]`

> "You can learn taste... you learn from different people, different travels... You meet with artists,
> designers, manufacturers."
> — Emmanuel Platt, director of merchandising, MoMA (in Fast Company, "You can't teach taste")
> `[UNVERIFIED-SECONDHAND]`

> "Taste sharpens not when we merely encounter many examples, but when we actively compare
> alternatives and articulate distinctions."
> — designative.info, "Taste Is the New Bottleneck" `[UNVERIFIED-SECONDHAND]`
> *(The most operationally useful sentence in the whole inventory.)*

**On the gap between taste and ability**

> "Nobody tells this to people who are beginners, I wish someone told me. All of us who do creative
> work, we get into it because we have good taste. But there is this gap. For the first couple years
> you make stuff, it's just not that good."
> — Ira Glass `[VERIFIED-WIDELY]`

> "The most important thing you can do is do a lot of work. Put yourself on a deadline so that every
> week you will finish one story."
> — Ira Glass `[VERIFIED-WIDELY]`

> "It is only by going through a volume of work that you will close that gap, and your work will be as
> good as your ambitions."
> — Ira Glass `[VERIFIED-WIDELY]`

> "Just like you can tell good food from bad without being able to cook, you can know what kind of
> software you like before you've got the ability to build it."
> — Sean Goedecke, "What is 'good taste' in software engineering?" `[UNVERIFIED-SECONDHAND]`

**On what taste actually is**

> Taste is the ability to notice what is bad, articulate why it is bad, and have a point of view on
> what good looks like.
> — characterisation of Linear's hiring bar `[UNVERIFIED-SECONDHAND — find primary]`

> "You can be technically strong but have bad taste, or technically weak with good taste."
> — Sean Goedecke `[UNVERIFIED-SECONDHAND]`

> "How good your work product is will always be limited by how good your eye is."
> — attributed to Julie Zhuo `[UNVERIFIED-SECONDHAND — locate exact essay]`

**On what design is**

> "Most people make the mistake of thinking design is what it looks like. People think it's this
> veneer — that the designers are handed this box and told, 'Make it look good!' That's not what we
> think design is. It's not just what it looks like and feels like. Design is how it works."
> — Steve Jobs, to Rob Walker, "The Guts of a New Machine," *NYT Magazine*, 30 November 2003
> `[VERIFIED-WIDELY]`

> "Good design is as little design as possible — Less, but better. Simple as possible but not simpler."
> — Dieter Rams, tenth principle `[VERIFIED-WIDELY]`

> "Simplicity is about subtracting the obvious, and adding the meaningful."
> — John Maeda, *The Laws of Simplicity*, Law 10 `[VERIFIED-WIDELY]`

> "Some things can never be made simple."
> — John Maeda, Law 9 `[VERIFIED-WIDELY]`

**On craft and care**

> "This is the source of the highest craft, because an affection for the audience produces the care
> necessary to make the work well."
> — Frank Chimero, *The Shape of Design* `[UNVERIFIED-SECONDHAND]`

> "Questions about How to do things improves the craft and elevates form, but asking Why unearths a
> purpose and develops a point of view."
> — Frank Chimero, *The Shape of Design* `[UNVERIFIED-SECONDHAND]`

> "Beauty is a special form of craft that goes beyond making something work better."
> — Frank Chimero, *The Shape of Design* `[UNVERIFIED-SECONDHAND]`

> Analysing and making sense of design details beyond just "it feels nice" helps nurture taste,
> amplify the level of execution, and grow an appreciation for how hard the pursuit of excellence is.
> — Rauno Freiberg, *Invisible Details of Interaction Design* `[UNVERIFIED-SECONDHAND — close
> paraphrase; get exact wording]`

**On practice**

> "Copying directly from a master provides a controlled setting in which to train your eye."
> — copywork literature (Learn UI Design / Designlab / Smashing) `[UNVERIFIED-SECONDHAND]`

> "The trick is to pick a design that is better than what you are currently capable of."
> — copywork literature `[UNVERIFIED-SECONDHAND]`

> "Our failure to copy our heroes is where our own thing lives."
> — Austin Kleon, *Steal Like an Artist* `[UNVERIFIED-SECONDHAND]`

> "Heuristic evaluations become easier the more you conduct them. With practice, you'll need to rely
> less and less on the actual heuristics, and you'll start to develop UX instincts so you can quickly
> recognise potential usability problems."
> — Nielsen Norman Group `[UNVERIFIED-SECONDHAND]`

**On the wrong feedback loop**

> "Too many designers are designing to impress their peers rather than address real business problems."
> — the Dribbblisation critique `[UNVERIFIED-SECONDHAND]`

> "A huge majority of the product design work on Dribbble looks the same, whether it's social software,
> accounting software, a marketing site, or a weather app."
> — the Dribbblisation critique `[UNVERIFIED-SECONDHAND]`

**On taste ≠ minimalism**

> "What makes a San Francisco designer flinch is exactly what builds trust in Tier 2 India."
> — "Taste for Engineers" `[UNVERIFIED-SECONDHAND]`

**On the AI-era stakes**

> "AI can build anything now, but it can't tell you what's worth building."
> — circulating commentary on *Taste for Makers* `[UNVERIFIED-SECONDHAND]`

---

## 5. Synthesis: the five claims this strand supports

Distilled from the above, for whoever writes the course outline:

1. **Taste is a discrimination skill, and it is the ceiling on output.** You cannot make better than
   you can perceive (Zhuo). So train perception first.
2. **Taste arrives before ability, and that gap is the main attrition risk.** Name it explicitly on day
   one (Glass, Goedecke) or people quit at week three thinking they lack talent.
3. **Exposure is not the mechanism; comparison + articulation is.** Every exercise must end in a
   written "why" (designative, swipe-file literature, Rauno's "beyond *it feels nice*").
4. **You acquire the taste of whatever feedback loop you plug into.** Choose the loop deliberately;
   likes-driven loops produce likes-optimised taste (Dribbblisation).
5. **Taste is contextual, not an aesthetic.** It is "the set of values that fit your current project"
   (Goedecke), not minimalism (MakeMyTrip counter-example). Teach this or the course installs a
   prejudice and calls it judgement.

---

## 6. Gaps — searches cut off by the budget limit

These were planned and not run. Each is a real hole in this inventory:

- Ryan Singer's own writing on design judgement / taste specifically (only got generic Shape Up
  material; the "shaper" role and its judgement requirement is the relevant thread —
  https://basecamp.com/shapeup/ and his newer writing at feltpresence.com).
- Jason Fried / Signal v. Noise, "Acquire taste" — https://signalvnoise.com/posts/1325-acquire-taste
  (URL found, content not retrieved).
- Connor & Irizarry, *Discussing Design* — the critique/feedback/reaction distinction, primary source.
- Noticing-skill training specifically: spotting misalignment, inconsistency, optical vs. mathematical
  alignment, "jank." **This is a named requirement in the brief and is under-covered here** — only
  indirectly served via copywork (§2.1) and Rauno (§1.7).
- Hacker News threads on taste (https://news.ycombinator.com/item?id=45410940 identified but not read
   — likely the richest source of the developer-side counterarguments).
- Ericsson-style deliberate-practice theory applied to design (feedback loops, immediate correction,
  representative tasks) — would give the practice methods a research spine.
- Vercel/design-engineer craft discourse beyond Rauno (Brian Lovin, Emil Kowalski, Paco Coursey).
- Julie Zhuo's exact essay containing the "your eye" line, for a verified citation.

**Highest-priority follow-up fetches, in order:** (1) paulgraham.com/taste.html for the full principle
list and exact wording; (2) Zhuo's product-critique essay for the complete question set; (3) Jules
Walter's four methods; (4) Rauno's essay for exact wording; (5) the Linear taste definition primary.

---

## 7. All source URLs

**Theories of taste**
- https://paulgraham.com/taste.html — Paul Graham, "Taste for Makers" (2002) *(blocked; not read)*
- https://longreads.com/2011/02/27/taste-for-makers/
- https://barnsworthburning.net/extracts/recF6PEJ2dDRwhf01
- http://adamzerner.github.io/pg_essay_summaries/taste_for_makers.html
- https://jiminhsieh.github.io/2017/08/07/Taste-for-Makers-by-Paul-Graham
- http://lemonodor.com/archives/000033.html
- https://readsomethinggreat.substack.com/p/long-read-taste-for-makers
- https://ourglass.wine/blog/rory-sutherland-taste-paul-graham
- https://x.com/namyakhann/status/2022689279802249324
- https://www.themarginalian.org/2014/01/29/ira-glass-success-daniel-sax/ — Ira Glass taste gap
- https://www.goodreads.com/quotes/309485-nobody-tells-this-to-people-who-are-beginners-
- https://jamesclear.com/ira-glass-failure
- https://jayacunzo.com/blog/best-quote-on-creativity-ira-glass-gap
- https://www.louisefletcherart.com/blog/great-quote
- https://www.vitsoe.com/us/about/good-design — Dieter Rams, ten principles (canonical)
- https://designmanifestos.org/dieter-rams-ten-principles-for-good-design/
- https://ixdf.org/literature/article/dieter-rams-10-timeless-commandments-for-good-design
- https://www.linearity.io/blog/dieter-rams/
- https://lawsofsimplicity.com/ — John Maeda
- https://fs.blog/the-laws-of-simplicity/
- https://readingraphics.com/book-summary-the-laws-of-simplicity/
- https://grahammann.net/book-notes/the-laws-of-simplicity-john-maeda
- https://medium.com/the-year-of-the-looking-glass/junior-designers-vs-senior-designers-fbe483d3b51e
- https://medium.com/the-year-of-the-looking-glass/the-beginning-of-your-design-career-549828025494
- https://medium.com/the-year-of-the-looking-glass/8-unintuitive-lessons-on-being-a-designer-ca7e97a572ee
- https://medium.com/the-year-of-the-looking-glass/design-illustrated-in-3-charts-128ae8ff22fe
- https://lg.substack.com/p/the-looking-glass-higher-level-design
- https://asimpleframe.com/notes/junior-vs-senior-designers/
- https://shapeofdesignbook.com/ — Frank Chimero, *The Shape of Design* (free)
- https://shapeofdesignbook.com/chapters/02-craft-and-beauty/
- https://monoskop.org/images/b/b4/Chimero_Frank_The_Shape_of_Design.pdf
- https://www.goodreads.com/work/quotes/18180257-the-shape-of-design
- https://designlab.com/blog/frank-chimero-design-thinkers-shape-of-design
- https://rauno.me/craft/interaction-design — Rauno Freiberg, "Invisible Details of Interaction Design"
- https://every.to/p/invisible-details-of-interaction-design
- https://devouringdetails.com/
- https://ui.land/interviews/rauno-freiberg
- https://spaces.is/loversmagazine/interviews/rauno-freiberg
- https://sebastiangreger.net/2023/07/bookmark-invisible-details-of-interaction-design
- https://www.uxtools.co/blog/your-ui-needs-more-walt-disney
- https://linear.app/now/why-is-quality-so-rare — Linear on quality
- https://www.lennysnewsletter.com/p/inside-linear-building-with-taste
- https://www.lennysnewsletter.com/p/how-linear-builds-product
- https://buildingslow.substack.com/p/building-product-the-linear-way
- https://www.antoinebuteau.com/lessons-from-karri-saarinen-of-linear/
- https://jobsbyculture.com/blog/linear-interview-prep-2026
- https://www.nytimes.com/2003/11/30/magazine/the-guts-of-a-new-machine.html — Jobs / Rob Walker
- https://www.macworld.com/article/168987/ipod-47.html
- https://daringfireball.net/2012/02/walter_isaacson_steve_jobs
- https://newsletter.rogerwong.me/p/design-is-how-it-works-and-what-it
- https://9to5mac.com/2025/10/09/watch-apples-design-is-how-it-works-video-right-here/

**The "can taste be taught" debate**
- https://www.fastcompany.com/90863652/you-cant-teach-taste
- https://theculturecreative.substack.com/p/you-cant-teach-taste
- https://matejlatin.com/designers-digest/can-good-design-taste-be-taught/
- https://signalvnoise.com/posts/1325-acquire-taste
- https://www.linksforthinks.com/p/18-developing-taste
- https://www.designative.info/2026/02/01/taste-is-the-new-bottleneck-design-strategy-and-judgment-in-the-age-of-agents-and-vibe-coding/

**Developer taste**
- https://www.seangoedecke.com/taste/
- https://news.ycombinator.com/item?id=45410940
- https://mtrajan.substack.com/p/taste-for-engineers
- https://pakodas.substack.com/p/how-to-be-a-30x-ai-engineer-with-a-taste
- https://thethinkingbuilder.substack.com/p/beauty-is-a-virtue
- https://aiuxplayground.com/guides/rise-of-the-design-engineer/
- https://uithings.com/design-engineering
- https://www.developersdigest.tech/blog/taste-skills-ai-agents-design-review
- https://medium.com/design-optimizely/why-we-hire-ui-engineers-on-optimizely-s-design-team-b2a789553b79
- https://refactoringui.com/
- https://www.steveschoger.com/book/
- https://github.com/erikuus/good-ui
- https://www.bennadel.com/blog/3547-refactoring-ui-by-adam-wathan-and-steve-schoger.htm
- https://updivision.com/blog/post/book-review-refactoring-ui-by-adam-wathan-steve-schoger

**Deliberate practice methods**
- https://www.learnui.design/blog/copywork-ultimate-way-rapidly-improve-design-skills.html
- https://designlab.com/blog/value-of-copywork-in-ui-design
- https://www.smashingmagazine.com/2017/02/improving-ui-design-skills-copywork/
- https://www.learnui.design/blog/5-practical-exercises-learn-ui-design-free.html
- https://uxplanet.org/the-value-of-copywork-in-learning-ui-design-b0b40695c1be
- https://designlab.com/blog/plagiarism-in-design
- https://www.kodeco.com/books/app-design-apprentice/v2.0/chapters/3-app-teardowns
- https://uxdesign.cc/building-an-intentional-design-practice-with-2-hr-teardowns-4ecd036aabd6
- https://uibreakfast.com/custom-audit/
- https://hellopm.co/what-is-a-product-teardown/
- https://blog.logrocket.com/product-management/product-teardown-process-tools/
- https://blog.opendoorscareers.com/p/level-up-your-design-game-capture-inspiration-build-a-swipe-file-to-sharpen-your-eye
- https://mobbin.com/ , https://mobbin.com/about
- https://designcode.io/mobbin-design/
- https://www.banani.co/references
- https://uxcel.com/blog/best-resources-for-design-inspiration
- https://en.wikipedia.org/wiki/Steal_Like_an_Artist
- https://medium.com/design-bootcamp/steal-like-a-designer-424270239846
- https://medium.com/design-bootcamp/from-imitation-to-innovation-lessons-from-steal-like-an-artist-by-austin-kleon-eebbddbc64ab
- https://grahammann.net/book-notes/steal-like-an-artist-austin-kleon
- https://www.lennysnewsletter.com/p/product-sense — Jules Walter, product sense
- https://www.lennysnewsletter.com/p/how-to-develop-product-sense
- https://blog.academyofpm.com/p/product-sense
- https://rogerwong.me/2025/09/how-to-develop-product-sense

**Dribbble critique**
- https://www.intercom.com/blog/the-dribbblisation-of-design/
- https://medium.com/intercom-inside/the-dribbblisation-of-design-406422ccb026
- https://medium.com/@wr/dribbble-is-not-for-product-designers-but-thats-okay-62bb85f11d1d
- https://hitchhikersguidetodesign.com/book/dribbblization/
- https://medium.com/design-bootcamp/is-dribbbalization-really-that-bad-though-a89503db9aeb
- https://mohitphogat.medium.com/designing-for-real-users-not-dribbble-shots-42036a4bd3cf
- https://dribbble.com/stories/2018/11/09/dribbblers-sharpen-their-skills-with-daily-ui-challenges
- https://techcrunch.com/2025/08/04/a-top-designer-was-banned-from-dribbble-now-hes-building-his-own-competitor

**Critique frameworks**
- https://medium.com/the-year-of-the-looking-glass/how-to-do-a-product-critique-98b657050638
- https://www.americanpressinstitute.org/need-to-know/offbeat/product-critique-facebooks-product-design-director/
- https://rohansandeep.medium.com/product-critique-3facc5e1d282
- https://manassaloi.com/2020/12/01/product-critique.html
- https://uxdesign.cc/dont-overthink-your-product-critique-interview-b472b5c06274
- https://www.designernews.co/stories/26242-how-to-do-a-product-critique-by-julie-zhuo
- https://www.ideo.com/journal/build-your-creative-confidence-i-like-i-wish
- https://public-media.interaction-design.org/pdf/I-Like-I-Wish-What-If.pdf
- https://spin.atomicobject.com/i-like-i-wish-what-if/
- https://medium.com/@theuxarchitect/the-art-of-design-critique-a-framework-for-meaningful-feedback-7e6949d13ee7
- https://www.nngroup.com/articles/design-critiques/
- https://www.uxtigers.com/post/design-crit
- https://jakobnielsenphd.substack.com/p/design-crit
- https://scottberkun.com/essays/23-how-to-run-a-design-critique/
- https://www.shopify.com/uk/partners/blog/12-rules-of-engagement-when-running-design-critiques-from-nasdaq-s-aaron-irizarry
- https://www.toptal.com/designers/product-design/productive-design-critique-guide
- https://blog.uxtweak.com/design-critique/
- https://medium.com/@iXd/facilitating-a-critique-5f0a7d7c19f
- https://thecrit.co/resources/how-to-run-design-critique

**Heuristic evaluation as practice**
- https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/
- https://www.nngroup.com/topic/heuristic-evaluation/
- https://blog.uxtweak.com/usability-heuristics/
- https://cleverx.com/blog/heuristic-evaluation-10-nielsen-principles-explained/
- https://uxcel.com/lessons/usability-heuristics-553
- https://www.aufaitux.com/blog/heuristic-evaluation-ux-design/
