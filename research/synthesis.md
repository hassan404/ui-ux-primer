# Synthesis — what the research says the course must be

*The reconciliation of [objectives.md](objectives.md) with the nine-file raw inventory in [raw/](raw/). Everything here is traceable to a raw file; nothing here is a vibe.*

---

## 1. The findings that decide everything

Nine research strands, read against the objectives, collapse into eight load-bearing findings. Each one constrains the course design; together they nearly determine it.

**1. "UX" and "UI" are two disjoint curricula wearing one name.** The process schools (Google, IxDF, universities, NN/g) teach research and evaluation with almost no visual instruction; the craft schools (Refactoring UI, Learn UI Design, Shift Nudge) teach typography/color/space with almost no research. Erik Kennedy sells both — *as two separate products*. The two shortest dev-facing courses drop process entirely. → Our course is deliberately craft-heavy and judgement-heavy, with process compressed to a single honest lesson. *(raw/02 §C)*

**2. The 80/20 core exists, and it is small.** Eight topics appear in ~10+ of 18 independent sources: visual hierarchy, typography, color, spacing/layout, usability testing, iteration, accessibility, Gestalt grouping. That intersection *is* the syllabus spine — everything else must fight for a seat. *(raw/02 §C)*

**3. Systems beat taste.** The four most dev-respected sources all teach the same move: constrain your choices *in advance* — a type scale, a spacing scale, fixed color shades — then let consistency do the work. This is also the community's single most-repeated advice, and it maps perfectly onto how developers already think (pre-defined variables, invariants). *(raw/02 §C, raw/03, raw/04)*

**4. Spacing is the highest-leverage single topic.** It is the community's #1 diagnosis of "why does my UI look amateur," and it has a mechanical fix: one scale, used everywhere. The felt problem and the cheapest win are the same topic — that's the course's opening move. *(raw/03)*

**5. Taste is trainable, and the mechanism is comparison + articulation, not exposure.** You can't make better than you can perceive, so train perception first; every exercise must end in a written *why*; the taste-before-ability gap (Ira Glass) is the main attrition risk and must be named on day one. Taste ≠ minimalism — teach that or we install a prejudice and call it judgement. *(raw/06 §5)*

**6. The winning register is peer-to-peer, not expert-to-novice.** Every artifact that spread in the community either lowers status or removes shame ("cheating at design," "from one non-designer to another"). The genre that gets rejected: "why developers suck at design." Also: devs adopt rules enthusiastically and then argue about the 10% — ship every rule *with* its escape hatch, or the comments section will. *(raw/03)*

**7. Process compresses to one sentence.** Mom Test, think-aloud, hallway testing, fake doors, tree testing, task success — six faces of one idea: *watch a real person attempt a real task, and trust behavior over opinion.* Cadence beats rigor. Teach every method with its critique attached; the critiques are what make it credible to engineers. *(raw/08 §9)*

**8. The principles literature is massively redundant — and that's good news.** Nielsen, Shneiderman, ISO 9241, and Tognazzini all restate the same ~6 ideas: visible state, match the user's model, reversibility, consistency, prevent errors, recognition over recall. Teach the six once; cite the four lists as corroboration. Norman explains *why*, Nielsen gives the *checklist* — pair them. Gestalt operates below conscious thought, which makes it the highest-leverage material for devs who "aren't visual." And the "laws" vary wildly in evidential status (Fitts is replicated science; Pareto is an aphorism) — an honest course says so. *(raw/01 §8)*

## 2. The course map

Ten modules, ~3 hours total consumption. Sequence resolves the field's oldest ordering debate (theory-first vs. craft-first) deliberately: **craft first, because that's where the learner's pain is; theory after, as the explanation for why the craft worked.** Norman lands harder when you've already felt his principles operate.

| # | Module | Core content (all traceable to raw/) | Time |
|---|---|---|---|
| 0 | **Why your UI looks off** | The wound, named without shame. Spacing as the usual culprit. The Glass taste-gap: your eye outrunning your hands is the *sign you have taste*, not proof you lack it. | 10 min |
| 1 | **Hierarchy** | One job per screen. Size/weight/color as the three levers. Emphasize by de-emphasizing. The squint test. Prominence ≠ importance mismatch as the most fixable defect. | 20 min |
| 2 | **Space** | One spacing scale, used everywhere (the single cheapest win in the whole field). Proximity = relatedness (Gestalt, applied). Alignment. Start with too much whitespace, then remove — *with the density escape hatch: data-dense tools are a different regime.* | 20 min |
| 3 | **Type** | A type scale (pick from it, never between). Line-height ~1.5 for UI body (print rules differ — that conflict taught, not hidden). 45–75 char measure. Two families max; weights ≥400 at text sizes. | 15 min |
| 4 | **Color** | Shades, not colors: one hue → 5–9 steps. HSL/OKLCH thinking. Contrast as a checkable number (4.5:1). Never grey text on colored backgrounds — same-hue, desaturated instead. Hierarchy before semantics in buttons. | 15 min |
| 5 | **Depth & polish** | Shadows as elevation system (two tiers are enough); no shadows in dark UI. Separation: spacing first, background second, borders last. Radius consistency & corner nesting. Don't scale up icons. | 15 min |
| 6 | **Behavior** | The states nobody designs: empty, loading, error, partial. Feedback within 100ms/1s/10s. Forms: labels not placeholders, validate late not early, errors that say how to recover. Undo over confirmation. Touch targets. | 25 min |
| 7 | **The mind on the other side** | Mental models & Jakob's Law (boring is a feature). The irreducible six principles (visible state, match the model, reversibility, consistency, error prevention, recognition over recall). Tesler: complexity is conserved — someone pays; let it be you. Fitts, Hick, Miller — with their real evidential status. | 20 min |
| 8 | **Judgement** | The critique card: nine questions to ask of any screen. Copywork as training. Choose your feedback loop (Dribbble optimizes for likes, not use). Every rule's escape hatch, revisited: rules are 90% rules. | 15 min |
| 9 | **Reality** | The one process lesson: watch one human attempt one task, think-aloud, this week. SEQ as the cheapest metric. The 5-minute a11y smoke test: keyboard, contrast, grayscale. When to distrust yourself. | 15 min |

**Word budget:** ≤1,200 words of prose per module, ~12,000 total — a hard ceiling, checked in CI, per the Nicky Case finding that the best interactive explanation ever made is ~3,300 words of interface copy. *(raw/09 §3.5)*

## 3. The cut list

Cut deliberately, with reasons — not forgotten:

- **Figma & tools** — tools aren't judgement; the learner already has an editor. *(objectives anti-goal)*
- **Personas, journey maps, design sprints, double diamond** — process theater for our audience; the criticism sections outweighed the method sections in the raw material. *(raw/08 §2.2)*
- **Research methodology beyond module 9** — the 5-user rule's own critiques (55–99% variance) justify teaching only the cheap version. *(raw/08 §3.2)*
- **Design history, color theory beyond palettes, drawing** — high hours, low leverage for this outcome. *(raw/02 tier 3)*
- **Career/portfolio content** — different course, different promise. *(raw/02)*
- **Motion design beyond duration/easing basics** — rare even in paid curricula; an appendix candidate. *(raw/02 tier 3)*
- **Long-tail "laws"** (Von Restorff, Zeigarnik, Peak-End…) — only Fitts/Hick/Jakob/Miller/Tesler survive the frequency test; the biases cluster is also the dark-pattern engine and needs ethics context we don't have time to do well. *(raw/07, raw/01 §8.6)*
- **Streaks, gamification, certificates** — contradict the "short and finite" promise. *(raw/09)*

## 4. Conflicts we teach as judgment calls

The raw material caught canonical sources flatly disagreeing. The course's credibility move is to teach these *as* disagreements, each with its resolving question ("what regime are you in?"):

| Conflict | Poles | The resolving question |
|---|---|---|
| Whitespace | generous (RUI) vs. dense (enterprise backlash) | How much data must one glance hold? |
| Line-height | 1.2–1.45 (print canon) vs. ≥1.5 (screen/WCAG) | Reading prose or scanning UI? |
| Type sizes per view | ≤2 (Vignelli) vs. 11-step scale (RUI) | System constraint vs. per-view discipline — both are "decide in advance" |
| Grids | sacred (Swiss canon) vs. "overrated" (RUI) | Does the layout repeat? |
| Button color | semantic (green/red) vs. hierarchy-first (RUI) | What's the *one* thing this screen wants? |
| Shadows in dark mode | elevation shadows vs. tonal surfaces | Which background regime? |
| Nav breadth | ~16 links OK vs. 6–7 ceiling | Recognition-scan vs. recall-choice? *(raw/08 §9.5 — genuinely unresolved)* |

## 5. The voice

**Decided (after UAT round 1): The Trained Eye.** Perception-led, imperative, present tense. The course narrates what the learner's eye is doing, because the skill being taught is seeing. Nearly every section starts from something the learner just looked at; authority comes from the accuracy of the observations, not from cleverness or credentials.

A first draft used a "design as debugging" conceit (modules as bug reports, spacing as tech debt for pixels). Rejected in review: when every heading is a metaphor, the metaphor owns the content. Dev parallels are demoted from system to seasoning, used only where one is genuinely the shortest sentence (e.g. "you already pull magic numbers into named constants").

**Register rules (the style contract):**
1. Make them look first. Show, then explain what their eye did. Imperatives are welcome: look, notice, cover it, squint.
2. Short declaratives after each observation. No pep, no reassurance-as-content; warmth arrives through respect and precision.
3. Every rule ships with its exceptions attached, inline, same breath.
4. Every claim carries its confidence in plain words: replicated research, strong convention, folklore that works.
5. Second person, present tense, no hedging, no "simply."
6. Economy enforced by budget: if a module exceeds 1,200 words, cut content, not clarity.
7. **No em-dashes. Hard rule.** Commas, colons, periods, parentheses.
8. Banned moves: reversal aphorisms and chiasmus ("it wasn't designed at all"-style turns), naming the reader's feelings for them, any sustained metaphor system.

## 6. Honesty ledger

The research environment blocked most direct page fetches (egress proxy) and the shared search budget capped mid-run. Consequences, so nobody trusts this further than they should:

- Every raw file carries a provenance/methodology header; quotes are confidence-tagged ([V]/[P], VERBATIM-MIRROR/model-knowledge, etc.). **Nothing goes into course copy in quotation marks without fetching the primary source first.** Each raw file ends with its own verification queue and gap list.
- Best-verified strands: visual craft (raw/04 — GitHub mirrors, largely verbatim), delivery formats (raw/09). Least-verified: community quotes (raw/03), principles wording (raw/01 — substance solid, wording reconstructed).
- Known holes worth a follow-up pass: HN thread 36468535 ("What topics are good for a UI/UX Primer?" — directly on-topic, never extracted), noticing-skill training specifically, Material/Polaris/Carbon foundations docs (all open-source, mineable via GitHub raw).

## 7. What happens next

1. **Decide the delivery mechanism** — [delivery.md](delivery.md) makes the recommendation.
2. **Write module 0 + 1 first** in the §5 voice, hold them against the style contract, and only then batch the rest.
3. **Run the verification queue** for any quote or number that survives into course copy.
