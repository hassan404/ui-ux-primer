# 05 — Interaction Design in Practice: How Interfaces *Behave*

**Scope of this file.** This is the raw-material inventory for the *behavioural* half of UI/UX — everything about how an interface acts over time, in response to a user, and in response to the network. It covers: the five UI states; loading, waiting and perceived performance; feedback and affordance in practice (button states, touch targets, form feedback); form design and validation; navigation and IA patterns; microinteractions and motion; forgiveness (undo, confirmation, destructive actions); dark/deceptive patterns; and microcopy/UX writing.

**Explicitly out of scope here** (owned by sibling agents): the named laws and heuristics themselves (file 01 — Nielsen's heuristics, Fitts, Hick, Doherty, Gestalt), visual craft (typography/color/spacing), courses and syllabi, community voices, taste-building exercises, the glossary, research process, and delivery formats. Where a law from file 01 is *applied* here, it is cross-referenced rather than re-explained.

**Why this file matters to the brief.** Objectives.md asks: *"Behavior: How should interfaces act, not just look — states, feedback, forgiveness?"* This file is the answer set. It is also the file with the highest **actionability** score for a developer audience: nearly every pattern below maps onto code the learner is already writing (a `useState`, a `Promise`, a `<button disabled>`, a `try/catch`).

---

## ⚠️ METHODOLOGY & VERIFICATION NOTE — READ BEFORE TRUSTING ANY CITATION

**Direct page fetching was unavailable in this environment.** Outbound HTTPS from this session is refused at the organisation's egress proxy (403 on CONNECT) for effectively all hosts, including `nngroup.com`, `m3.material.io`, `developer.apple.com`, `deceptive.design`, `goodui.org`, and `ui-patterns.com`. Both `WebFetch` and `curl` fail identically. Per environment guidance, blocked hosts are reported, not routed around. **No primary source was read in full for this file.**

**Web *search* did work** (returning titles, canonical URLs, and substantive summary snippets) and was used for the highest-risk claims — specific numbers, list membership, and named frameworks. Roughly 8 queries were run before the shared budget became unreliable; one query ("deceptive.design pattern types") returned a hard `Web search error: unavailable`, and that section is tagged accordingly.

**Every section below carries one of these tags:**

| Tag | Meaning |
|---|---|
| `[verified-via-search]` | A search result explicitly corroborated the claim, including the numbers. Canonical URL surfaced by search. Still **not** read in full — exact wording is not quotable. |
| `[model-knowledge — verify before publication]` | Written from established knowledge of the canonical source. The URL given is the believed canonical location, surfaced by search or recalled. Treat all figures as needing a re-check. |
| `[contested]` | Practitioners genuinely disagree, or the evidence base is weaker than the confidence with which it's usually repeated. Flagged so the course doesn't teach folklore as fact. |

**Action for the synthesis stage.** Before anything here ships to learners: (1) re-fetch every ★ starred source from an environment with egress; (2) treat *all* numeric thresholds (ms values, px/pt/dp sizes, percentages) as unverified until confirmed against the primary; (3) be especially sceptical of the widely-circulated skeleton-screen and inline-validation *percentages* — see the `[contested]` flags, several are internet telephone-game numbers.

**Entry format.** Each pattern is given as: **Pattern** → *When to use* → *Why it works* → *Believed source*. Developer-specific notes are called out as **Dev note**, since that is the audience.

---

# 1. UI States — the behavioural skeleton of every screen

## 1.1 The Five UI States

`[model-knowledge — verify before publication]` `[high consensus]`

**Pattern.** Every component that displays data has (at least) five states that must be designed, not just the happy path:

1. **Ideal / default state** — the state the designer draws first: populated with plausible, well-shaped data. The state everyone designs and the *only* state most developers implement deliberately.
2. **Empty state** — no data yet. Splits into three meaningfully different sub-cases, which is the single most useful refinement in this whole section:
   - *First use* (nothing exists yet, and that's expected) → this is an onboarding opportunity, see §7.1.
   - *User-cleared* (there was data; the user emptied it) → this is a success, and should feel like one ("Inbox zero").
   - *No results* (a filter or search returned nothing) → this is a dead end, and must offer an escape: clear the filter, broaden the query, suggest alternatives.
3. **Loading state** — data is in flight. See §2.
4. **Partial state** — *some* data, but not enough for the component to look or work as designed: one item in a list built for twenty, a chart with two data points, a dashboard where three of five widgets resolved. The most-skipped state and a frequent source of "it looks broken in production but fine in Figma."
5. **Error state** — the request failed, the input was rejected, or the system is degraded. See §1.3 and §8.3.

**When to use.** As a checklist applied to *every* data-bearing component before calling it done. This is the highest-leverage single artefact in this file for a developer audience: it converts "design sense" into a code review item.

**Why it works.** It maps precisely onto states a developer already has in their code (`idle | loading | success | error`, plus `data.length === 0` and `data.length < n`). The insight is not that these states exist — developers know they exist — but that **each is a design surface with its own copy, layout, and call-to-action**, not a `return null`. It also front-loads the failure modes: designing the error state early forces the question "what can actually go wrong here?" while it is still cheap to answer.

**Dev note.** The classic developer failure is rendering the ideal state and letting the other four fall out of the framework's defaults: a blank white rectangle for empty, a layout-shifting spinner for loading, a stretched-looking card for partial, and an unhandled promise rejection for error. A useful rule: *if your component has a network call, it owes the user five renders.*

**Believed source.** The "five states" framing is most associated with **Scott Hurff**, *Designing UX: Prototyping* / his widely-circulated essay "Why your user interface is awkward and you don't know it" and the UI Stack concept. Also heavily promoted by Vitaly Friedman / Smashing Magazine and in design-system docs. ★ http://scotthurff.com/posts/why-your-user-interface-is-awkward-and-you-dont-know-it — believed canonical, **unverified**. Related NN/g framing: "Visibility of system status" (heuristic #1, see file 01).

**Common extensions worth mentioning (and probably cutting for brevity).** Some teams add: *skeleton/placeholder*, *offline*, *permission-denied / unauthorised*, *stale (showing cached data while revalidating)*, and *disabled*. The offline and stale states have become much more relevant with SPA/PWA architectures and libraries like React Query/SWR that expose `isStale`/`isFetching` distinct from `isLoading`.

## 1.2 The empty state is not empty — it is a screen with a job

`[model-knowledge — verify before publication]`

**Pattern.** An empty state should contain: (a) a one-line statement of what *would* be here, (b) why it isn't, and (c) exactly one primary action that fills it. Optionally: a lightweight illustration, and a link to learn more. Anything else is decoration.

**When to use.** Every list, table, inbox, feed, dashboard, and search result. Highest value in *new-user onboarding* contexts, where the empty state is the first real screen a user sees.

**Why it works.** A blank region is ambiguous: the user cannot distinguish "nothing here yet" from "still loading" from "broken" from "I'm not allowed to see this." Naming the state removes that ambiguity (Nielsen heuristic #1), and offering the action converts a dead end into a next step. In first-use contexts it doubles as onboarding without a modal tour (§7.1).

**Believed source.** NN/g has written on empty states; also *ui-patterns.com* ("Blank Slate" pattern) and the Material/Fluent design-system docs. ★ https://www.nngroup.com/articles/empty-state-interface-design/ (believed; **unverified**), ★ https://ui-patterns.com/ (blocked).

## 1.3 Error states: recoverable, at the right altitude

`[model-knowledge — verify before publication]`

**Pattern.** Errors should be shown at the **smallest scope that contains the failure**. A field-level validation failure belongs next to the field; a failed widget belongs inside the widget with a retry; only a failure that invalidates the whole screen earns a full-page error. Never replace a working screen with a global error because one panel 500'd.

**When to use.** Universally. The anti-pattern — a toast that disappears in 4 seconds carrying the only description of what went wrong — is extremely common in developer-built UIs.

**Why it works.** Scoped errors preserve the user's context and their unsaved work. They also localise the recovery action ("Retry" on the panel that failed) so the user doesn't have to reload and re-enter everything. Transient toasts fail because error messages are exactly the content a user needs to *re-read* while fixing the problem.

**Dev note.** Practical rule: **never** put a message the user must act on into an auto-dismissing toast. Toasts are for confirmations and undo affordances, not for instructions.

---

# 2. Loading, Waiting, and Perceived Performance

## 2.1 The three response-time limits: 0.1s / 1s / 10s

`[verified-via-search]`

**Pattern.** Three thresholds govern how a system should behave while the user waits:

- **0.1 second (~100 ms)** — the limit for the user to feel the system is reacting *instantaneously*, i.e. that their action directly caused the result. Below this, no feedback of any kind is needed; the result simply appears.
- **1 second** — the limit for the user's *flow of thought* to stay uninterrupted. The delay is noticed, but the user stays on task. Between 0.1 s and 1 s, generally no special feedback is required, though a subtle indicator does no harm.
- **10 seconds** — the limit for keeping the user's attention on the dialogue at all. Beyond this, users switch to other tasks, so the system must give feedback about *when it expects to be done* — i.e. a determinate progress indicator, not a spinner.

**When to use.** As the decision rule for "does this action need a loading indicator, and which kind?"
- `< 100 ms` → no indicator. Adding a spinner here actively *hurts*: a flash of spinner reads as jank.
- `100 ms – 1 s` → optional subtle feedback; a button pressed-state is usually enough.
- `1 s – 10 s` → indeterminate indicator (spinner/skeleton) is required; keep the UI responsive.
- `> 10 s` → determinate progress with an estimate, plus the ability to leave and come back. Consider making it a background job with a notification on completion.

**Why it works.** These are perceptual/cognitive constants, not design preferences — they derive from how quickly humans bind cause to effect and how long short-term attention holds. That's why they've survived unchanged from mainframes to mobile.

**Believed source.** ★ Jakob Nielsen, "Response Times: The 3 Important Limits" — https://www.nngroup.com/articles/response-times-3-important-limits/ (article, 1993/1997; corroborated by search, **not fetched**). Originally from Nielsen's *Usability Engineering* (1993), which itself credits **Robert B. Miller's** 1968 paper *"Response time in man-computer conversational transactions"* (AFIPS) and Stuart Card's work. Nielsen has since extended this into "Powers of 10: Time Scales in User Experience" — https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/ `[verified-via-search — URL surfaced]`.

**Cross-reference.** File 01 will cover the **Doherty Threshold** (~400 ms) — the claim that productivity rises sharply when system response drops below 400 ms. Treat the 400 ms figure as `[contested]`; it comes from a 1982 IBM Systems Journal paper (Doherty & Thadhani) about mainframe transaction time, and is frequently over-generalised to modern web UI.

## 2.2 Skeleton screens vs. spinners vs. progress bars

`[verified-via-search for the pattern; [contested] for the percentages]`

**Pattern.** Three loading indicators with distinct jobs:

- **Spinner (indeterminate)** — "something is happening, duration unknown." Cheap, universally understood, but conveys zero information about *what* is coming or *when*.
- **Skeleton screen** — a grey wireframe of the layout that is about to appear, usually with a subtle shimmer. Conveys *shape* and *progress-toward-a-known-thing*.
- **Progress bar (determinate)** — a proportional fill plus, ideally, a time or step estimate. The only correct choice above ~10 s.

**When to use.**
- Skeletons: when the resulting layout is **known and stable** — lists, cards, article bodies, profile headers, dashboards. Best for full-page or full-region loads.
- Spinners: when the result's shape is **unknown**, when the region is **small** (a button, an inline action), or when the wait is short. A skeleton for a 300 ms load is worse than nothing — it flashes.
- Progress bars: file uploads/downloads, imports/exports, multi-step server jobs, installs — anything where real progress is measurable. Never fake determinate progress you can't measure; the "stuck at 99%" experience destroys trust.

**Why it works.** Skeletons reduce *uncertainty*, which is the dominant source of perceived wait pain. Showing the shape of the incoming content lets the user begin building a mental model and lets their eyes pre-position. They also eliminate the layout shift that a centred spinner causes when content pops in. The general principle behind all three: **occupied waits feel shorter than unoccupied waits, and uncertain waits feel longer than known, finite waits** (from queueing psychology — David Maister's "The Psychology of Waiting Lines," 1985).

**⚠️ Numbers to distrust.** Search surfaced a cluster of confidently-repeated statistics — "users perceive skeleton screens as 9–12% faster," "20–30% faster," "Facebook found 300 ms faster perceived load," "reduces bounce 9–20%" — attributed variously to NN/g and Google. **These are almost certainly telephone-game figures**; the sources cited by the pages repeating them are secondary blogs, not the primary study. There *is* a genuine peer-reviewed study — **Bill Chung / "The effect of skeleton screens: users' perception of speed and ease of navigation"** (ResearchGate, 2018) — whose actual result is more equivocal: the skeleton page scored higher on *perceived* speed and ease of navigation, but users on the *spinner* page were **faster at actually finding an article on first visit.** `[contested]` — teach the mechanism (reduce uncertainty, avoid layout shift), not the percentages.

**Dev note (highest practical value).** Two implementation rules that matter more than the choice of indicator:
1. **Delay the indicator by ~200–300 ms.** If the response arrives first, the user never sees a flash. (Common in libraries as a `delay`/`suspense` threshold.)
2. **Once shown, keep it up for a minimum (~300–500 ms).** A spinner that appears and vanishes in 80 ms reads as a visual glitch, not as speed.

**Believed sources.** ★ https://www.nngroup.com/articles/progress-indicators/ (NN/g on progress indicators — believed canonical, **unverified**); ResearchGate: *The effect of skeleton screens: Users' perception of speed and ease of navigation* — https://www.researchgate.net/publication/326858669 `[verified-via-search — exists]`; Maister, *The Psychology of Waiting Lines* `[model-knowledge]`.

## 2.3 Optimistic UI

`[model-knowledge — verify before publication]`

**Pattern.** Render the *expected* result of a user's action immediately, before the server confirms it — then reconcile: on success do nothing visible, on failure roll back and explain.

**When to use.** When **all** of the following hold: the action succeeds the overwhelming majority of the time; the failure is cheap to roll back; and the user would otherwise be blocked waiting. Canonical fits: likes/favourites/reactions, toggles, adding a to-do, reordering a list, marking read, sending a chat message (with a "sending…" tick that resolves).

**When NOT to use.** Irreversible or consequential operations — payments, deletes, publishing, anything with real-world side effects, anything where the server may legitimately reject (permissions, quota, conflicting concurrent edit). Optimistically confirming a payment that then fails is worse than a 2-second spinner.

**Why it works.** It buys you the sub-100 ms "direct manipulation" feel (§2.1) on top of a network you cannot make faster. The user's perception of causality is preserved: their click *did* the thing. It converts latency from a blocking cost into a background one.

**Dev note.** Optimistic UI is a **rollback design problem**, not an animation problem. Three things must be designed up front: (a) what the optimistic state looks like (often identical to success, sometimes with a subtle pending affordance); (b) what rollback looks like *when the user has already scrolled away or acted again*; (c) how the failure is explained without losing the user's subsequent work. The nastiest failure mode is silent divergence — the UI says "saved," the server disagrees, and nobody finds out until reload. Libraries: React Query's `onMutate`/`onError` rollback, Apollo `optimisticResponse`, Rails Hotwire/Turbo optimistic patterns.

**Believed sources.** Popularised in the React ecosystem (Relay/Apollo docs); the underlying idea is much older — direct manipulation (Shneiderman, 1983). ★ https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates (implementation reference, **unverified**).

## 2.4 Perceived-performance toolkit (beyond indicators)

`[model-knowledge — verify before publication]`

A grab-bag of moves that make a system *feel* faster without making it faster. Worth listing as a menu; probably worth teaching 3 of them.

- **Reserve space / avoid layout shift.** Fix dimensions for images, ads, and async blocks so content doesn't jump. Directly measured by **CLS** (Cumulative Layout Shift) in Core Web Vitals. This is arguably the highest-ROI item here because it's mechanical.
- **Respond to input instantly even if the result is slow.** Button depresses, row highlights, input echoes the keystroke. Input latency matters more than completion latency. Related: **INP** (Interaction to Next Paint) replaced FID as a Core Web Vital.
- **Show something above the fold first** (progressive/streaming rendering, SSR streaming, React Suspense boundaries). Perceived load anchors on *first meaningful content*, not full completion.
- **Preload / prefetch on intent** — start fetching on hover, focus, or touchstart, ~100–300 ms before the click lands. (Used by `instant.page`, Next.js `<Link prefetch>`.)
- **Front-load the wait, back-load the payoff.** People tolerate waiting *before* starting better than being interrupted mid-task.
- **Fill the wait with useful information** — what's happening ("Checking availability… Reserving seats…"). Occupied waits feel shorter. Do not fabricate steps; users notice.
- **Never regress**: a progress bar that goes backwards, or an ETA that grows, is worse than no ETA.

**Believed sources.** web.dev / Core Web Vitals (https://web.dev/vitals/), Maister's queueing psychology, NN/g on progress indicators. All **unverified**.

---

# 3. Feedback & Affordance in Practice

## 3.1 The interactive-state matrix for every control

`[model-knowledge — verify before publication]` `[high consensus]`

**Pattern.** Every interactive element needs a designed appearance for each of these states, and the set is finite:

| State | Trigger | Must communicate |
|---|---|---|
| **Default / rest** | — | "I am interactive" (affordance) |
| **Hover** | pointer over | "This is the thing you're about to hit" (pointer devices only) |
| **Focus (focus-visible)** | keyboard/AT navigation | "Keyboard input goes here" — **legally required, never remove** |
| **Active / pressed** | mousedown/touchstart | "Your press registered" — the 0.1 s guarantee |
| **Loading / pending** | async in flight | "Working — don't click again" |
| **Disabled** | precondition unmet | "Not available now" — and ideally *why* |
| **Selected / checked / current** | state, not interaction | "This is on / this is where you are" |
| **Error / invalid** | validation failed | "This needs fixing" |

**When to use.** Every button, link, input, checkbox, radio, toggle, tab, menu item, and row. This is a checklist for component authors and for code review of a design system.

**Why it works.** Each state answers a different user question at a different moment: *can I click this?* (default) → *am I about to click the right thing?* (hover) → *where am I?* (focus) → *did it register?* (active) → *is it working?* (loading) → *why can't I?* (disabled). Missing any one produces a specific, predictable confusion.

**Dev notes / the three most common failures.**
1. **`outline: none` with no replacement.** Killing the focus ring makes the product unusable by keyboard and screen-reader users, and violates WCAG 2.4.7 (Focus Visible). Modern fix: style `:focus-visible` so mouse users don't see a ring but keyboard users do. Never delete without replacing.
2. **Hover-only affordances.** Actions revealed only on hover (row action buttons, "…" menus) do not exist on touch and are hard to reach by keyboard. Hover may *emphasise*, never *reveal-only*.
3. **Disabled buttons as validation.** A greyed-out submit button that never says why is a dead end — the user can't tell what's missing. Two better options: (a) keep the button enabled and show errors on submit, or (b) if disabled, pair it with a visible, always-present explanation of what's outstanding. Disabled controls are also typically removed from tab order and have poor contrast, so screen-reader users get the least information of anyone. `[contested — some design systems still mandate disabled-until-valid; GOV.UK and several a11y practitioners argue against it]`
4. **No pending state on submit.** Users double-submit. Every async action button needs a pending state that is *also* functionally idempotent-safe.

**Believed sources.** Material Design "states" / interaction states documentation ★ https://m3.material.io/foundations/interaction/states/overview; Apple HIG "Buttons"; WCAG 2.4.7 Focus Visible, 2.4.11 Focus Not Obscured (2.2); adrianroselli.com and Sara Soueidan on focus styling. All **unverified**.

## 3.2 Touch target sizes

`[verified-via-search]`

**Pattern.** Minimum tappable/clickable areas, by authority:

| Authority | Minimum | Notes |
|---|---|---|
| **Apple HIG (iOS)** | **44 × 44 pt** | Long-standing iOS guidance for any tappable control. |
| **Material Design (Android)** | **48 × 48 dp** | Material recognises a minimum touch target height of 48 dp; typically with ≥8 dp spacing between targets. |
| **WCAG 2.1 SC 2.5.5 Target Size** | **44 × 44 CSS px** | **Level AAA** — aspirational, not commonly required. |
| **WCAG 2.2 SC 2.5.8 Target Size (Minimum)** | **24 × 24 CSS px** | **Level AA** — the realistic legal floor, with exceptions (inline links in text, spacing-based equivalents, user-agent defaults, essential cases). |

**When to use.** Any touch surface; and increasingly any surface at all, since pointer precision varies (trackpads, tremor, assistive devices). Practical default for a developer: **44–48 px for primary actions on touch, never below 24 px for anything, and always ≥8 px of separation.**

**Why it works.** This is **Fitts's Law** made concrete (see file 01): acquisition time falls as target size grows and distance shrinks. The finger's contact patch is ~8–10 mm and the user cannot see under it, so the visual target and the *effective* target differ.

**Dev note.** The hit area does not have to equal the visual area. A 20 px icon can carry a 44 px hit area via padding, or an invisible `::after` overlay, or `hitSlop` in React Native. This is the single cheapest accessibility win in most codebases. Also beware: CSS `px` ≠ device pixels ≠ pt ≠ dp — but for the purpose of these rules, 1 CSS px ≈ 1 dp ≈ 1 pt at baseline density, so the numbers are roughly comparable.

**Believed sources.** ★ Apple Human Interface Guidelines (https://developer.apple.com/design/human-interface-guidelines/ — note: the developer.apple.com JSON docs API is sometimes reachable where HTML is not; worth retrying in an unblocked environment); ★ Material Design accessibility (https://m3.material.io/foundations/accessible-design/); ★ WCAG 2.2 SC 2.5.8 (https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html). Corroborated by search across LogRocket, TetraLogical, and adrianroselli.com summaries; **primaries unfetched.**

## 3.3 Feedback proportional to consequence

`[model-knowledge — verify before publication]`

**Pattern.** Match the intrusiveness of the feedback to the significance of the event:

| Event significance | Feedback vehicle |
|---|---|
| Trivial, expected, reversible | Inline state change only (toggle flips, star fills) |
| Minor, worth confirming | Toast / snackbar, auto-dismiss, non-blocking |
| Notable, may need action | Persistent inline banner in the affected region |
| Blocking, needs a decision | Modal dialog — expensive, use sparingly |
| Destructive & irreversible | Modal with typed confirmation, or (better) undo — see §7 |

**Why it works.** Interruption is a budget. Every modal spends attention the user might have needed elsewhere, and over-used modals train reflexive dismissal — which then defeats the *one* modal that mattered. Under-feedback leaves the user unsure whether their action landed; over-feedback trains them to ignore you. The pattern is really an application of Nielsen #1 (visibility) constrained by #8 (aesthetic and minimalist design).

## 3.4 Affordance & signifiers in practice

`[model-knowledge — verify before publication]`

**Pattern.** Make interactive things *look* interactive and non-interactive things *not*. In practice: buttons look raised/filled/outlined and are labelled with verbs; links are distinguishable from body text by more than colour alone; draggable things show a grab affordance and a `grab`/`grabbing` cursor; scrollable regions show a scroll cue (a peeking edge, a visible scrollbar, a fade).

**When to use.** Whenever the design leans flat/minimal — the flat-design era's core cost was **discoverability of interactivity**.

**Why it works.** Norman's distinction: an *affordance* is what an object permits; a *signifier* is the perceivable cue that advertises it. Flat UI removed signifiers while keeping affordances, so users must guess or hunt. Empirically this shows up as users not finding actions they'd have found in a skeuomorphic layout.

**Dev note.** Two concrete rules: (1) never rely on colour alone to signal a link — WCAG 1.4.1 Use of Color; underline body links; (2) hidden scroll regions (`overflow: auto` with `scrollbar-width: none`) are a very common self-inflicted discoverability bug on desktop.

**Believed sources.** Norman, *The Design of Everyday Things* (revised ed.); NN/g "Flat Design: Its Origins, Its Problems" and "Flat UI Elements Attract Less Attention" — ★ https://www.nngroup.com/articles/flat-design/, **unverified**.

---

# 4. Forms

Forms are where developers do the most UX damage per line of code, and where the fixes are the most mechanical. High priority for the course.

## 4.1 Labels above fields; placeholders are not labels

`[verified-via-search]`

**Pattern.** Put a persistent, visible `<label>` above (or beside) every field. Reserve placeholder text for genuinely supplementary hints (a format example), and prefer moving even those *outside* the field as always-visible help text.

**When to use.** Always. There is no context in which a placeholder-as-label is the better choice; even "space-constrained mobile" is better served by a floating label.

**Why it works (four independent failure modes of placeholder-as-label):**
1. **Memory.** The label disappears the moment the user types, so they can't verify what a filled field was asking for — especially when reviewing before submit or fixing errors.
2. **Error recovery.** Fixing a validation error requires re-reading the label, which no longer exists.
3. **Accessibility.** Placeholders are inconsistently announced by screen readers and are not a `<label>`; and placeholder text is typically low-contrast by default (failing WCAG 1.4.3), which harms low-vision users. Cognitive-impairment burden is documented.
4. **"Is it filled?"** Grey placeholder text is easily mistaken for an already-entered value, so users skip fields — a documented cause of failed submissions.

**Compromise: floating labels.** The label starts in the field and animates up on focus/entry, staying visible. NN/g discusses them as an improvement over pure placeholders while noting drawbacks: small type when floated, animation cost, and cramped rows.

**Believed source.** ★ Katie Sherwin / NN/g, "Placeholders in Form Fields Are Harmful" — https://www.nngroup.com/articles/form-design-placeholders/ `[verified-via-search — title, URL, and substance corroborated; not fetched]`. Also NN/g video version, and W3C WAI low-vision task force "Placeholder Research" wiki page — https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research.

## 4.2 Inline validation timing — "Reward Early, Punish Late"

`[verified-via-search]`

**Pattern.** The timing rule for when to show and clear a field error:

- **Punish late** — do *not* flag a field as invalid while the user is still typing into it for the first time. Wait until they leave the field (`blur`) or attempt submit. (Otherwise "j" is an invalid email address and you've just shouted at someone mid-word.)
- **Reward early** — once a field *is* flagged as invalid, switch to validating on every keystroke, and clear the error the *instant* the input becomes valid. Confirmation should be immediate.

Stated as a state machine (which is how to teach it to developers):
- `pristine` → validate on **blur** only.
- `invalid` → validate on **change** (each keystroke); clear as soon as valid.
- `valid-after-error` → optionally show a success affordance; then behave like pristine.
- Server-side/async checks (username taken, address lookup) → **debounce ~500 ms–1 s** and show a pending state on the field.
- On submit: validate everything, focus the **first** invalid field, and summarise errors at the top for screen-reader users.

**Why it works.** Validation-while-typing on a pristine field produces error messages for input the user hasn't finished giving — it is both wrong and hostile, and research reported longer completion times, higher error rates, and worse satisfaction for the "before-and-while" variant. Clearing errors immediately, by contrast, gives fast, non-punitive confirmation that the fix worked, avoiding a re-submit cycle to find out.

**Believed sources.** ★ Mihael Konjević, "Inline validation in forms — designing the experience" (Medium/WDstack) — https://medium.com/wdstack/inline-validation-in-forms-designing-the-experience-123fb34088ce — this is the origin of the "reward early, punish late" phrasing. `[verified-via-search]` Also ★ Smashing Magazine, "A Complete Guide To Live Validation UX" (2022) — https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/ `[verified-via-search]`; Luke Wroblewski's earlier inline-validation study (with Etre, ~2009) reporting improvements in completion, error rate, satisfaction and completion time for inline vs. after-submit validation — ★ https://www.lukew.com/ff/entry.asp?1288 `[model-knowledge — the specific percentages from that study circulate widely and should be re-verified]`.

## 4.3 Error message anatomy

`[model-knowledge — verify before publication]`

**Pattern.** A good error message has four parts, and most developer-written messages have one:

1. **What happened** — in the user's terms, not the system's. ("We couldn't process this card.")
2. **Why / which part** — specific enough to act on. ("The expiry date is in the past.")
3. **What to do next** — the recovery action, ideally as a control. ("Update the expiry date" / a Retry button.)
4. **Reassurance about consequences** — did they lose anything? ("Your cart is saved.")

Plus rules of tone: no blame ("you entered" → "this needs"), no jargon (`422`, `null`, `constraint violation`), no humour in a failure the user cares about, and never an error code *alone* — though a code alongside a human message is genuinely useful for support.

**When to use.** Every error surface: validation, network, permission, 404, 500, empty-search.

**Why it works.** Nielsen heuristic #9 is literally "Help users recognize, diagnose, and recover from errors": express errors in plain language, precisely indicate the problem, and constructively suggest a solution. Errors are also the moment of highest user frustration and lowest patience — a message that fails to say what to do converts a recoverable moment into abandonment.

**Dev note.** The structural fix is architectural: your API's error payloads must carry enough structure (field, code, human message) for the client to build a good message. If the backend returns `{"detail": "Invalid input"}`, no amount of frontend polish saves it. Consider RFC 9457 (Problem Details for HTTP APIs) as a shape.

**Believed sources.** ★ NN/g "Error Message Guidelines" — https://www.nngroup.com/articles/error-message-guidelines/ ; NN/g heuristic #9 — https://www.nngroup.com/articles/error-message-guidelines/ ; Shopify Polaris and Mailchimp content-style guides both have excellent public error-writing sections. **Unverified.**

## 4.4 Reduce fields; use the right input type; give sensible defaults

`[model-knowledge — verify before publication]` `[the "every field costs conversion" claim is [contested] in its strong form]`

**Pattern (a) — Cut fields.** For each field ask: do we need this *now*? Can we derive it (country from IP, city/state from postcode, card type from the number)? Can we ask later, in context? Optional fields are still cost — they add scanning and decision load even when skipped. Mark **optional** fields rather than required ones when most are required (and vice versa) — but always mark one or the other explicitly.

**Pattern (b) — Right input type.** Use `type="email" | "tel" | "url" | "number" | "date"`, `inputmode`, and `autocomplete` tokens (`autocomplete="one-time-code"`, `"cc-number"`, `"given-name"`, `"postal-code"`). On mobile this changes the keyboard that appears — arguably the single highest-value, lowest-effort mobile form fix. `autocomplete` also unlocks browser/password-manager autofill, which is a WCAG 2.1 SC 1.3.5 (Identify Input Purpose) item.

**Pattern (c) — Sensible defaults.** Pre-fill the most common answer; default to the safest option for destructive settings; remember the last choice where it's likely to repeat. Never default to an option that benefits you at the user's expense — that's a deceptive pattern (§8: "preselection"/"sneaking").

**Pattern (d) — One column, logical grouping.** Single-column layouts are faster to complete than multi-column for most forms because they present an unambiguous vertical path; group related fields; put the primary submit action at the end, left-aligned with the fields.

**Pattern (e) — Don't split what users think of as one thing.** Phone numbers, card numbers, and dates in three boxes create tab-order pain and paste failures. Accept a single field and normalise server-side. Accept whitespace and formatting characters — refusing a pasted card number with spaces is a self-inflicted wound.

**Why it works.** Every field is a decision, a chance to error, and a chance to abandon; forms are the highest-friction surface in most products. Defaults exploit status-quo bias in the user's favour (when chosen honestly) and are the cheapest way to remove decisions.

**Believed sources.** ★ Luke Wroblewski, *Web Form Design: Filling in the Blanks* (Rosenfeld Media, 2008) — the canonical text; https://rosenfeldmedia.com/books/web-form-design/ and https://www.lukew.com/. ★ Baymard Institute checkout usability research (https://baymard.com/blog/checkout-flow-average-form-fields) — a strong empirical source for field-count claims. ★ GOV.UK Design System form patterns (https://design-system.service.gov.uk/patterns/) — unusually well-evidenced and public. ★ goodui.org (https://goodui.org/) — A/B-tested UI ideas, several form-specific; note goodui's claims come with varying evidence strength and it monetises the evidence, so `[contested]`. All **unverified/unfetched.**

## 4.5 Forms: a developer's default checklist

`[model-knowledge]` — this is a synthesis artefact, likely course-ready:

- [ ] Every input has a persistent `<label>` correctly associated (`for`/`id`).
- [ ] Correct `type`, `inputmode`, and `autocomplete` on every field.
- [ ] Validation: punish late, reward early; debounce async checks.
- [ ] Errors are inline, adjacent to the field, in text (not colour alone), and announced (`aria-describedby`, `aria-invalid`, live region for the summary).
- [ ] On submit failure, focus moves to the first invalid field.
- [ ] Submit button has a pending state and is protected against double-submit.
- [ ] Nothing the user typed is ever lost on error — including on a full page reload where feasible.
- [ ] Works with the browser's autofill and a password manager.
- [ ] Keyboard-only completion is possible start to finish, with a sensible tab order.
- [ ] The form has empty/loading/error states for any async parts (dropdown options, address lookup).

---

# 5. Navigation & Information Architecture Patterns

## 5.1 The three navigation questions

`[model-knowledge — verify before publication]`

**Pattern.** Every navigation system exists to answer three questions continuously: **Where am I? Where can I go? How do I get back?** Any nav that fails one of these is broken regardless of how it looks.

**Why it works.** It reduces "IA" from an abstract discipline to a testable rubric a developer can apply to a screenshot in ten seconds. Maps to Nielsen #1 (visibility of system status) and #3 (user control and freedom).

## 5.2 Breadcrumbs

`[model-knowledge — verify before publication]`

**When to use.** Hierarchies **three or more levels deep** — documentation, e-commerce categories, file systems, admin consoles. Not useful for flat sites (a 2-level site's breadcrumb is noise).

**Why it works.** Provides location (level 1 of the three questions) and one-click ascent without consuming the Back button. Especially valuable when users arrive deep from search — they land with no context, and the breadcrumb supplies it. Cheap in vertical space.

**Rules.** Show the *path*, not the history. Include the current page as the last, non-clickable crumb. Never let a breadcrumb replace the primary nav.

**Believed source.** ★ NN/g "Breadcrumbs: 11 Design Guidelines" — https://www.nngroup.com/articles/breadcrumbs/ ; ui-patterns.com "Breadcrumbs". **Unverified.**

## 5.3 Search

`[model-knowledge — verify before publication]`

**When to use.** When content volume exceeds what browsing can serve (roughly: more than a few dozen items), or when users arrive with a specific known target. In small apps, search is a distraction; in large ones, it's the primary nav for a large user segment.

**Design notes worth teaching.** Search must handle its own five states (§1): empty query, loading, results, **zero results** (offer spelling correction, broader query, or browse), and error. Zero-results pages are the most-neglected screen in most products. Also: keep the query visible in the field after searching; support keyboard (`/` or `⌘K` to focus); scope indicators when searching within a section; and don't lose the user's filters on back-navigation.

**Why it works.** Splits users into "browsers" and "searchers" — a well-documented split — and refusing to serve searchers strands a large fraction of your audience.

## 5.4 Progressive disclosure

`[model-knowledge — verify before publication]` `[high leverage]`

**Pattern.** Show the small set of options most users need most of the time; move the rest behind a clearly-labelled secondary layer ("Advanced," "More options," an accordion, a detail panel, a second step).

**When to use.** Whenever a screen has a long tail of rarely-used controls: settings pages, filters, admin forms, export dialogs, IDE-like tools.

**Why it works.** It reduces the visual and cognitive load of the common path without removing capability — the classic "simple by default, powerful when needed." Also improves scanability by shrinking the number of competing elements (relates to Hick's Law and to visual hierarchy generally).

**Failure modes.** (a) Hiding something *most* users need — that's not disclosure, that's burial. (b) Unlabelled disclosure ("…" or a bare chevron) so nobody finds the second layer. (c) Nesting disclosure inside disclosure. Rule of thumb: **one level of progressive disclosure, with a descriptive label.**

**Believed source.** ★ NN/g, "Progressive Disclosure" (Nielsen) — https://www.nngroup.com/articles/progressive-disclosure/ ; the concept predates NN/g (Jack Carroll's "training wheels" work). **Unverified.**

## 5.5 Wizards (multi-step) vs. single-page forms

`[model-knowledge — verify before publication]` `[contested]`

**Use a wizard when:** the task is long and genuinely sequential; later steps depend on earlier answers (branching); the user is a novice at a one-off task (tax filing, onboarding, checkout); or the full form's length would cause bounce on sight.

**Use a single page when:** the user is a repeat/expert user; the fields are few; the user needs to see everything at once to answer any of it; or they'll need to jump around and revise.

**Why wizards work when they work.** Chunking reduces perceived effort and working-memory load; a progress indicator ("Step 2 of 4") supplies a sense of advancement and a finite horizon (Goal-Gradient effect); and branching means users never see irrelevant fields.

**Why they fail.** Extra clicks and page loads; inability to review the whole; lost progress if state isn't persisted; and dishonest progress indicators (a "Step 3 of 4" that turns out to have sub-steps destroys trust). If you use a wizard: always show total steps, allow going back without data loss, persist partial progress, and end with a review screen.

**Dev note.** A wizard is a state-machine and persistence problem. If you can't persist partial state across a refresh, don't build a wizard.

## 5.6 Tabs

`[model-knowledge — verify before publication]`

**When to use.** Peer content sets that the user views **one at a time**, where they don't need to compare across sets, and where the set is small (roughly ≤ 7) and stable.

**When not to use.** Sequential steps (use a wizard); content the user must compare side by side; content that should be findable by search/deep link but isn't (make tabs URL-addressable!); more tabs than fit without scrolling on mobile.

**Rules.** The selected tab must be unmistakably selected — this is the single most common tab bug, where hover and selected look identical. Tabs must be keyboard operable (arrow keys per the ARIA Tabs pattern). Content should not change layout height dramatically between tabs.

**Believed source.** ★ NN/g "Tabs, Used Right" — https://www.nngroup.com/articles/tabs-used-right/ ; ★ ARIA Authoring Practices Guide, Tabs pattern — https://www.w3.org/WAI/ARIA/apg/patterns/tabs/. **Unverified.**

## 5.7 Mobile navigation patterns

`[model-knowledge — verify before publication]`

| Pattern | When to use | Cost |
|---|---|---|
| **Bottom tab bar** | 3–5 top-level destinations, frequently switched | Consumes permanent vertical space; caps at ~5 |
| **Hamburger / drawer** | Many destinations, infrequently used | **Significantly lower discoverability and engagement** than visible tabs — the best-documented mobile nav finding |
| **"More"/overflow tab** | >5 destinations with a clear top 4 | Buries the tail |
| **Segmented control** | Filtering/switching *within* a screen | Not for navigation between sections |
| **Search-first** | Large content corpora | Requires good search |
| **Back/up gesture** | Universal | Must not conflict with edge-swipe carousels |

**Why the hamburger underperforms.** Hidden navigation is out-of-sight and therefore out-of-mind: users engage less with content they cannot see, and discovery of sections drops. Visible-but-cramped beats hidden-but-tidy for anything users need routinely. Note the counter-case: for apps with a genuinely large, infrequently-used nav (settings-heavy enterprise apps), a drawer is fine.

**Thumb zone.** Primary actions belong in the lower-centre of the screen where the thumb reaches comfortably; destructive actions should *not* be in easy-reach zones. (Steven Hoober's grip research; popularised as "thumb zone" heatmaps.) `[contested — the heatmaps are widely reproduced with more confidence than the underlying sample supports]`

**Believed sources.** ★ NN/g "Hamburger Menus and Hidden Navigation Hurt UX" — https://www.nngroup.com/articles/hamburger-menus/ ; Luke Wroblewski's "Obvious Always Wins" writing on nav visibility (https://www.lukew.com/); Steven Hoober, *How Do Users Really Hold Mobile Devices?* (UXmatters, 2013). **Unverified.**

## 5.8 Navigation misc worth listing

- **Sticky headers** — keep nav reachable on long pages; cost is vertical space and occluded content on scroll-to-anchor. Shrink on scroll rather than hide-on-scroll-down if the nav is frequently used.
- **"You are here" marking** — the active nav item must be visually distinct; astonishingly often missing.
- **Deep-linkability** — every meaningful UI state (tab, filter, modal, wizard step) should have a URL. This is a *developer-specific* UX obligation that designers often don't specify and that breaks Back, refresh, and sharing.
- **Back-button integrity** — SPA routers that break Back are a user-control violation (Nielsen #3). Test: open a modal, hit Back.
- **Skip link** — "Skip to main content" as the first focusable element; WCAG 2.4.1 Bypass Blocks.

---

# 6. Microinteractions & Motion

## 6.1 Saffer's microinteraction framework: trigger / rules / feedback / loops & modes

`[verified-via-search]`

**Pattern.** A *microinteraction* is a contained product moment that does one small task — toggling a setting, liking a post, setting an alarm, entering a password. Dan Saffer decomposes each into four parts:

1. **Trigger** — what initiates it. *Manual* (the user acts: tap, type, drag, hover) or *system* (a condition is met: data arrives, a timer fires, a threshold is crossed). Design question: is the trigger discoverable, and does it look like what it does?
2. **Rules** — what can and cannot happen once triggered; the state machine. Design question: what's allowed, in what order, with what constraints, and what happens on the edges (empty, offline, permission denied)?
3. **Feedback** — what the user perceives about the rules: visual, audio, haptic. The rules are invisible; feedback is the *only* thing that teaches them. Design question: does the user know what happened and what state they're now in?
4. **Loops & modes** — the long-term behaviour. A *loop* governs duration and repetition ("how long does this last, what happens if it repeats, what happens the hundredth time?"). A *mode* is a fork in the rules (an edit mode, a settings mode) — Saffer's guidance is to **avoid modes** where possible, since they're a classic source of error (see "mode error," Norman).

**When to use.** As a design *checklist* for any small interactive detail — and as a critique tool. It's the fastest way to notice that a nicely-animated toggle has no failure feedback, or that a "copy to clipboard" button has feedback but no loop rule for the tenth press.

**Why it works.** It gives a vocabulary and a completeness test for details that otherwise get built by reflex. The loops-and-modes component in particular catches the thing developers most often miss: **how the interaction behaves on the 100th use, not the 1st.** (Delightful animation on first use is charming; on the 100th it's an obstacle. Saffer's related principle: don't make the user wait for your delight.)

**Believed source.** ★ Dan Saffer, *Microinteractions: Designing with Details* (O'Reilly, 2013; "Full Color Edition" 2014) — https://www.oreilly.com/library/view/microinteractions/9781449342760/ `[verified-via-search — the four components corroborated across multiple secondary summaries; book not read in this session]`. Saffer's related maxim, widely quoted: *"Details are not the details. They make the design."* (which is actually Charles Eames, quoted by Saffer).

## 6.2 Motion: duration ranges and easing

`[verified-via-search for the ranges; specific numbers vary by system]`

**Pattern — duration.** Rough working ranges, corroborated across Material and general practice:

| Motion type | Duration |
|---|---|
| Micro (hover, focus ring, checkbox, small toggle, button press) | **~100–150 ms** |
| Standard UI transition (most things) | **~200–300 ms** |
| Larger surfaces (panel slide, drawer, dropdown, modal reveal) | **~300–500 ms** |
| Full-screen / complex choreography | up to ~500 ms; beyond that it drags |

Rules of thumb: **under ~100 ms reads as instantaneous/jarring; over ~400–500 ms reads as sluggish.** Larger and farther-travelling elements need proportionally longer durations to look natural. Exit/dismiss animations should generally be **shorter** than entrances (the user has already decided; get out of the way). Material notes that durations should shrink on smaller devices (wearables ~30% shorter than mobile) and that desktop animations are often 150–200 ms.

**Pattern — easing.** Never `linear` for anything representing a physical object; linear motion reads as mechanical.
- **Standard / ease-in-out** — elements moving within the screen. Material's "standard curve" (roughly `cubic-bezier(0.4, 0.0, 0.2, 1)` in M2).
- **Decelerate / ease-out** — elements *entering* the screen: fast in, gentle settle. The most-used curve in UI.
- **Accelerate / ease-in** — elements *leaving* the screen permanently.
- **Sharp** — elements that leave but may return.
- **Spring physics** — increasingly the default in modern systems (iOS, Framer Motion); parameterised by stiffness/damping rather than duration.

**Why it works.** Motion's job in a UI is not decoration; it is to **explain change**: where an element came from, where it went, what is now related to what, and that the system responded. Real objects accelerate and decelerate, so eased motion is parsed pre-attentively as physical and therefore as *causal*. Duration lands in a narrow band because it must be long enough to be *seen* as a transition (~>100 ms) but short enough not to gate the user's next action (~<400 ms).

**When animation helps.** (a) Explaining spatial relationships (a panel slides in from the edge it lives on; a modal grows from the element that opened it); (b) preserving object continuity so the eye can track an element across a state change (shared-element transition); (c) directing attention to a change that would otherwise be missed; (d) making a wait feel occupied; (e) confirming an action (a subtle press/scale).

**When animation hurts.** (a) On repeated, high-frequency actions where it becomes a tax; (b) when it blocks input — animation must never gate interaction, always allow interruption; (c) when it's decorative and content-free; (d) scroll-jacking and parallax that fight the user's scroll; (e) for users with vestibular disorders, where large-motion effects can cause real nausea and dizziness.

**`prefers-reduced-motion`.** A media query/OS setting (`@media (prefers-reduced-motion: reduce)`) exposing the user's system preference. This is **not** "turn off all animation" — the right response is usually to replace *movement* (translation, scale, parallax, spin) with a *fade* or an instant change, while keeping essential feedback. Related standard: WCAG 2.3.3 Animation from Interactions (AAA) and 2.2.2 Pause, Stop, Hide (A) for anything auto-playing longer than 5 s. **This is a one-line CSS block that most developers don't write and should.**

**Believed sources.** ★ Material Design 3, "Easing and duration" — https://m3.material.io/styles/motion/easing-and-duration `[verified-via-search — URL surfaced]`; ★ Material Design 1, "Duration & easing" — https://m1.material.io/motion/duration-easing.html (still the clearest write-up of the four curves) `[verified-via-search]`; ★ Apple HIG "Motion" — https://developer.apple.com/design/human-interface-guidelines/motion; ★ MDN `prefers-reduced-motion` — https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion; Val Head, *Designing Interface Animation* (Rosenfeld, 2016) — the canonical book. All **unfetched**.

## 6.3 Microinteraction inventory (candidates for course examples)

`[model-knowledge]` — a list of the small behaviours worth showing as before/after examples:

- Pull-to-refresh; toggle switches (state must be readable *without* the label); "copy to clipboard" with a transient "Copied!"; like/favourite with a scale pop; password strength meter; show/hide password; character/word counters that warn before the limit rather than after; drag-and-drop with a drop-target highlight and a placeholder gap; inline "saving…/saved" indicators; unread badges; typing indicators; swipe-to-delete with an undo; form field success ticks; skeleton shimmer; hover previews; `⌘K` command palettes; toast stacking behaviour; the "new items available" pill on a live feed (never auto-scroll a feed under a reading user).

---

# 7. Forgiveness: Undo, Confirmation, Destructive Actions, Safety Nets

## 7.1 Empty states as onboarding

`[model-knowledge — verify before publication]`

**Pattern.** Use the first-run empty state as the onboarding surface instead of a modal tour: the region where the content *will* be explains what goes there and offers the action that creates the first item. Optionally seed with sample/demo data the user can delete.

**When to use.** New accounts, new projects, new workspaces, any "create your first X" moment.

**Why it works.** It teaches **in the place where the knowledge is needed** rather than in a tour the user will forget or dismiss. It's contextual, non-blocking, permanently available (it reappears whenever the list empties), and requires no state tracking of "has this user seen the tour." Modal onboarding tours are dismissed reflexively and retention of their content is poor.

**Believed sources.** NN/g on onboarding/empty states; the pattern is well documented in Intercom's and Basecamp's product writing; ui-patterns.com "Blank Slate." **Unverified.**

## 7.2 Undo vs. confirmation

`[model-knowledge — verify before publication]` `[high leverage — likely course-core]`

**Pattern.** Prefer **undo** (act now, offer reversal) over **confirmation** (ask first). Reserve confirmation dialogs for actions that are genuinely irreversible and consequential.

**Decision rule:**

| Action | Recommended |
|---|---|
| Reversible, low stakes (archive, mark read, reorder) | Just do it; no confirm, no undo needed |
| Reversible, medium stakes (delete a message, remove an item) | Do it + **undo toast** (~5–10 s) |
| Reversible with a longer window (delete a document) | Do it + **trash/recycle bin** with restore |
| Irreversible, low stakes | Undo if you can make it possible; else confirm |
| Irreversible, high stakes (delete an org, wipe production, publish) | **Typed confirmation** ("type the repo name"), plus friction, plus a clear statement of exactly what will be lost |
| Bulk destructive | Show the count and a sample of what's affected; never "Delete 4,132 items?" alone |

**Why undo beats confirmation.** (1) Confirmation taxes **everyone** on **every** invocation to protect against the rare mistake; undo taxes only the person who erred. (2) Users habituate to confirmation dialogs and click through them reflexively — the dialog stops being read within days, so it protects nothing while still costing everyone a click. (3) Undo is honest about what happened: the user sees the result and *then* decides, rather than predicting from a dialog. (4) Undo supports exploration, which supports learning (Nielsen #3, user control and freedom; also "forgiveness" in Tognazzini's principles).

**Why confirmation still exists.** When the action truly cannot be undone (sending an email, charging a card, deleting a bucket), there is nothing to undo *to*. Then the goal is to break automaticity: make the confirmation require *specific* information (type the name), state the consequence in concrete terms, and never make the destructive button the default-focused one.

**Dev note (the honest constraint).** Undo is an **architecture** decision, not a UI decision. It requires either (a) soft delete / tombstones, (b) command objects with inverses, (c) an event log you can replay, or (d) delayed execution (Gmail's "Undo Send" simply holds the message for N seconds and then sends). Option (d) is the cheapest and most under-used: **delay the side effect by the length of the undo window, and undo becomes "cancel the timer."** This is the single most useful implementation insight in this section for a developer audience.

**Believed sources.** ★ NN/g "Confirmation Dialogs Can Prevent User Slips" / "Reset and Cancel Buttons" — https://www.nngroup.com/articles/confirmation-dialog/ ; Aza Raskin, "Never Use a Warning When You Mean Undo" (Humanized/Alertbox-era essay) — ★ http://alistapart.com/article/neveruseawarning `[model-knowledge — believed to be the canonical essay for this argument; verify URL]`; Jef Raskin, *The Humane Interface* (2000) on habituation and modes; Alan Cooper, *About Face* on "possibility vs. probability" in dialogs. **All unfetched.**

## 7.3 Destructive action handling — the visual and structural rules

`[model-knowledge — verify before publication]`

- **Never make the destructive action the primary/default button.** In a confirm dialog, "Cancel" should be the easy, default-focused path; the destructive action should be secondary in emphasis even when coloured red.
- **Label buttons with the verb, not "Yes/OK."** "Delete 3 files" / "Keep files" — not "OK" / "Cancel." A user who skimmed the body text can still act correctly from the button labels alone. (This is also the microcopy rule in §9.2.)
- **Separate destructive controls spatially** from frequently-used ones (Fitts: distance is protection).
- **State exactly what will be lost**, including cascading effects ("This will also delete 12 comments and 3 attachments").
- **Prefer reversible framing where true**: "Move to Trash" is a different promise from "Delete forever," and users read the difference.
- **Guard against accidental repeat**: a destructive action that is also a keyboard shortcut needs a confirm or an undo.

## 7.4 Other safety nets

`[model-knowledge]`

- **Autosave + version history.** Turns "don't lose work" from a discipline into a property of the system. Show *when* it last saved.
- **Draft preservation.** Never lose typed input on navigation, error, or session expiry. Session-expiry-eats-the-form is a top-tier developer-caused UX failure.
- **Constraints over correction.** Prevent the error rather than catching it: disable dates before today in a picker, cap the input to what the API accepts, use a picker instead of free text where the option set is closed. (Nielsen #5: error *prevention* beats error messages.)
- **Idempotency.** Double-submitted payments and duplicate records are a UX failure caused by a backend design choice.
- **Recognition over recall.** Show the options rather than requiring the user to remember them (Nielsen #6) — autocomplete over free text, recently-used over search-from-memory.

---

# 8. Dark / Deceptive Patterns

## 8.1 Definition and framing

`[model-knowledge — verify before publication]` — *the direct search for deceptive.design's taxonomy returned `Web search error: unavailable`, so this section is the weakest-sourced in the file. Enumerations below are from established knowledge and MUST be re-checked against the primary before publication.*

**Definition.** A deceptive pattern (originally "dark pattern," coined by **Harry Brignull**, 2010) is an interface deliberately designed to trick users into doing things they didn't intend or wouldn't choose — as distinct from a merely bad design, which harms the user by accident. The community has largely shifted to "deceptive pattern" for clarity and to avoid the "dark = bad" connotation.

**Why a developer course should include it.** Three reasons: (1) developers *implement* these, often on instruction and often without recognising them — naming them creates the ability to object; (2) they are increasingly **illegal** (EU Digital Services Act Art. 25, GDPR consent requirements, the US FTC's enforcement actions, California's CPRA dark-pattern provisions, the FTC "click to cancel" / Negative Option Rule); (3) recognising manipulation sharpens the ability to recognise honest persuasion, which is a useful judgement muscle.

## 8.2 Taxonomy A — Brignull / deceptive.design types

`[model-knowledge — verify before publication]` — believed list; **names and count have changed over time on the site**, so re-verify.

The types catalogued at deceptive.design (formerly darkpatterns.org) have historically included:

| Type | What it does |
|---|---|
| **Comparison prevention** | Makes it hard to compare options/prices (inconsistent units, jumbled feature tables) |
| **Confirmshaming** | Guilts the user out of opting out ("No thanks, I don't like saving money") |
| **Disguised ads** | Ads styled as content or as UI controls (fake "Download" buttons) |
| **Fake scarcity** | Invented low-stock or limited-availability signals |
| **Fake social proof** | Fabricated reviews, testimonials, or "23 people are viewing this" |
| **Fake urgency** | Countdown timers that reset, "offer ends soon" that never ends |
| **Forced action** | Requires an unrelated action to proceed (mandatory account, forced newsletter, forced data sharing) |
| **Hard to cancel** ("Roach motel") | Easy to sign up, hard to leave — phone-only cancellation, buried flows |
| **Hidden costs** | Fees revealed only at the final checkout step |
| **Hidden subscription** ("Forced continuity") | A "free trial" or one-off that silently becomes recurring |
| **Misdirection** | Visual/copy emphasis steers attention away from the honest choice |
| **Nagging** | Repeated interruptions to request something already declined |
| **Obstruction** | Deliberate friction in the path the user wants |
| **Preselection** | Harmful options checked by default |
| **Sneaking** | Items added to cart / costs added without consent |
| **Trick wording** | Double negatives and ambiguous phrasing in opt-outs |
| **Visual interference** | Contrast/size/placement used to hide or de-emphasise the honest option |

**Believed source.** ★ https://www.deceptive.design/types (blocked); Harry Brignull, *Deceptive Patterns* (book, 2023) — https://www.deceptive.design/book/ `[verified-via-search — chapter URL surfaced: https://www.deceptive.design/book/contents/chapter-13/]`.

## 8.3 Taxonomy B — Mathur et al. (2019), the academic one

`[verified-via-search — partially]`

The Princeton study **"Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites"** (Mathur, Acharya, Bin Wang, Chen, Mayer, Kshirsagar, Friedman, Narayanan) crawled ~11,000 shopping sites, found dark patterns on **>11%** of them, and found the most popular sites were the most likely to use them. It contributed a widely-cited higher-level taxonomy of **seven categories**:

1. **Nagging** — repeated, out-of-context requests.
2. **Obstruction** — making a task harder than necessary (subsumes Brignull's "roach motel").
3. **Sneaking** — hiding or delaying information material to the decision (Sneak into Basket, Hidden Costs, Hidden Subscription).
4. **Interface Interference** — manipulating the visual hierarchy to privilege some options (preselection, trick wording, visual prominence).
5. **Forced Action** — requiring an unrelated action to complete the desired one.
6. **Social Proof** — activity notifications and testimonials, potentially fabricated.
7. **Urgency** — countdowns and limited-time messages, potentially false.

It also characterises patterns along dimensions: **asymmetric, covert, deceptive, hides information, restrictive.** That five-dimension characterisation is arguably more useful for teaching *judgement* than the category list, because it gives a test rather than a lookup table: *Is this choice architecture asymmetric? Is the mechanism covert? Does it mislead? Does it withhold material information? Does it restrict the choice set?*

**Believed sources.** ★ https://arxiv.org/pdf/1907.07032 (the paper) `[verified-via-search — arXiv URL surfaced]`; ★ https://webtransparency.cs.princeton.edu/dark-patterns/ `[verified-via-search]`; Gray et al., "The Dark (Patterns) Side of UX Design" (CHI 2018) — the earlier five-category taxonomy (nagging, obstruction, sneaking, interface interference, forced action) that Mathur builds on. `[model-knowledge]`

## 8.4 The honest-persuasion boundary

`[model-knowledge]`

Worth one paragraph in the course: defaults, friction, and emphasis are *tools*, not sins. A default is deceptive when it serves the operator against the user's evident interest and is hard to notice or reverse. A test that travels well: **"Would the user be annoyed if we showed them a plain-language description of what this design does and why we did it?"** and **"Is the effort to opt out proportional to the effort to opt in?"** (symmetry).

---

# 9. Microcopy & UX Writing

## 9.1 Clarity over cleverness

`[model-knowledge — verify before publication]`

**Pattern.** Prefer the plain, boring, specific word. Use the user's vocabulary, not the system's. Front-load the information-carrying word ("Delete account" not "Click here to delete your account"). Cut greetings, apologies, and filler.

**When to use.** Everywhere, but *especially* in errors, empty states, permission prompts, and destructive confirmations — the moments of highest stakes and lowest patience.

**Why it works.** UI text is scanned, not read; users read roughly the first couple of words of a label before deciding. Clever copy costs a parse; in a failure state it also costs trust.

## 9.2 Button labels state the action

`[model-knowledge — verify before publication]` `[high leverage, trivially teachable]`

**Pattern.** A button's label should be a **verb phrase describing what happens when it's pressed** — and it should make sense read on its own, without the surrounding text. Not "OK/Cancel" but "Delete 3 files / Keep files." Not "Submit" but "Create account" / "Send invite" / "Pay $42.00."

**Why it works.** (1) Users skim dialogs and act from the buttons; a label that only makes sense with the body text is a trap. (2) Screen-reader users can navigate by control; an orphan "OK" is meaningless out of context (WCAG 2.4.9 Link Purpose, Link-Only). (3) Naming the consequence surfaces it at the exact moment of decision. (4) Specific labels reduce mis-clicks between paired actions.

**Corollary.** Never label the paired options "Yes/No" for a question phrased with a negative ("Don't you want to stop receiving emails? Yes / No"). Trick wording — see §8.

## 9.3 Voice, tone, and person

`[model-knowledge — verify before publication]`

- **Voice is constant; tone varies with context.** The same product can be playful in an empty state and completely flat in a payment failure. Humour scales inversely with user stress.
- **Second person for the user ("you"), first person plural for the product ("we") — sparingly.** Avoid the app referring to itself in the third person.
- **Prefer active voice and present tense.** "We couldn't save your changes" beats "Your changes could not be saved."
- **Don't blame the user.** "That password doesn't match" not "You entered the wrong password."
- **Consistency of terms is a UX property.** One concept, one word, forever. If it's a "workspace" on the marketing site, it's not a "team" in the settings page. Developers leak schema names into UI copy constantly.

## 9.4 Error message writing — the concrete rules

`[model-knowledge]` (structure covered in §4.3; writing rules here)

- Say what happened in the first four words.
- Be specific about *which* thing failed, not *that something* failed.
- Give the fix as an action, ideally a control the user can press right there.
- Preserve their input and say so.
- No stack traces, no HTTP status codes alone, no `undefined`, no `[object Object]`.
- Include a support-usable correlation ID *alongside* (not instead of) human text.
- Don't apologise more than once, and never apologise instead of explaining.

**Believed sources.** ★ NN/g "Error Message Guidelines" — https://www.nngroup.com/articles/error-message-guidelines/ ; ★ Shopify Polaris content guidelines — https://polaris.shopify.com/content ; ★ Mailchimp Content Style Guide — https://styleguide.mailchimp.com/ ; ★ GOV.UK content design / "Writing for GOV.UK" — https://www.gov.uk/guidance/content-design ; Torrey Podmajersky, *Strategic Writing for UX* (O'Reilly, 2019); Kinneret Yifrah, *Microcopy: The Complete Guide*. All **unfetched**.

---

# 10. Cross-cutting synthesis notes for the course (my prioritization opinion)

Offered as input to the synthesis stage, clearly marked as opinion rather than sourced material.

**The five items from this file I'd fight to keep** (highest leverage × actionability × irreversibility for a developer):

1. **The five UI states as a code-review checklist.** Maps 1:1 onto code the learner writes; catches the most common developer-built-UI failures; teachable in five minutes.
2. **Undo over confirmation, and the "delay the side effect" implementation trick.** One idea that changes architecture decisions, not just CSS.
3. **The response-time thresholds + "delay the spinner, then hold it."** Converts a fuzzy topic into two numbers and two rules.
4. **Form defaults: real labels, correct input types/autocomplete, reward-early-punish-late.** Highest damage-per-line-of-code area; the fixes are mechanical and same-day.
5. **The interactive-state matrix, especially `:focus-visible` and pending states on async buttons.** Cheap, checkable, and the failure modes are invisible to the developer but fatal for some users.

**What I'd cut or compress from this file:**
- The full deceptive-pattern enumeration → compress to the *five characterisation dimensions* (asymmetric/covert/deceptive/hides information/restrictive) plus 4 named examples. Enumerating 17 types is vocabulary, not judgement.
- Microinteraction inventory → keep as a reference appendix, not lesson content.
- Wizards vs. single-page, tabs, breadcrumbs → compress into one "navigation patterns" reference table. Low frequency of decision for most developers.
- Motion easing curve specifics → compress to "200–300 ms, ease-out for entrances, and write the `prefers-reduced-motion` block."

**Where this file overlaps other agents (dedupe candidates):**
- Nielsen heuristics #1 (visibility), #3 (control/freedom), #5 (error prevention), #9 (error recovery) — file 01 owns the statements; this file owns the practice.
- Fitts's Law — file 01 owns; §3.2 (touch targets) and §7.3 (spatial separation of destructive controls) are the applications.
- Hick's Law — file 01 owns; §5.4 (progressive disclosure) is the application.
- Accessibility principles (POUR) — file 01; the specific SCs cited here (2.4.7, 2.5.5, 2.5.8, 1.4.1, 1.3.5, 2.3.3) are the practice-level hooks.
- Visual craft agent owns colour/contrast; this file only asserts "colour alone is never the signal."

---

# Sources

Grouped by confidence. **★ = a primary source that must be re-fetched and verified before publication. No URL below was successfully fetched in this session.**

### Verified-via-search (URL and substance corroborated by search results)

- ★ Jakob Nielsen — *Response Times: The 3 Important Limits* — https://www.nngroup.com/articles/response-times-3-important-limits/
- ★ NN/g — *Powers of 10: Time Scales in User Experience* — https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/
- ★ NN/g video — *The 3 Response Time Limits in Interaction Design* — https://www.nngroup.com/videos/3-response-time-limits-interaction-design/
- ★ Katie Sherwin / NN/g — *Placeholders in Form Fields Are Harmful* — https://www.nngroup.com/articles/form-design-placeholders/
- ★ Mihael Konjević — *Inline validation in forms — designing the experience* — https://medium.com/wdstack/inline-validation-in-forms-designing-the-experience-123fb34088ce
- ★ Smashing Magazine — *A Complete Guide To Live Validation UX* (2022) — https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/
- ★ Material Design 3 — *Easing and duration* — https://m3.material.io/styles/motion/easing-and-duration
- ★ Material Design 1 — *Duration & easing* — https://m1.material.io/motion/duration-easing.html
- ★ Dan Saffer — *Microinteractions: Designing with Details* (O'Reilly) — https://www.oreilly.com/library/view/microinteractions/9781449342760/
- ★ Mathur et al. — *Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites* — https://arxiv.org/pdf/1907.07032 · project page https://webtransparency.cs.princeton.edu/dark-patterns/
- ★ Harry Brignull — *Deceptive Patterns* (book), ch. 13 on the Mathur taxonomy — https://www.deceptive.design/book/contents/chapter-13/
- ★ W3C WCAG 2.2 — *Target Size (Minimum)* SC 2.5.8 — https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html (24×24 CSS px, AA)
- ★ W3C WCAG 2.1 — *Target Size* SC 2.5.5 — 44×44 CSS px, AAA
- ★ W3C WAI — *Placeholder Research* (low-vision a11y task force) — https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research
- Adrian Roselli — *Target Size and 2.5.5* — http://adrianroselli.com/2019/06/target-size-and-2-5-5.html
- TetraLogical — *Foundations: target sizes* — https://tetralogical.com/blog/2022/12/20/foundations-target-size/
- ResearchGate — *The effect of skeleton screens: Users' perception of speed and ease of navigation* — https://www.researchgate.net/publication/326858669 `[the primary study behind the skeleton-screen claims; note its result is more equivocal than the blogs suggest]`

### Model-knowledge — canonical URL believed correct, unverified

- ★ Scott Hurff — *Why your user interface is awkward and you don't know it* / the UI Stack (five states) — http://scotthurff.com/posts/why-your-user-interface-is-awkward-and-you-dont-know-it
- ★ Luke Wroblewski — *Web Form Design: Filling in the Blanks* (Rosenfeld Media, 2008) — https://rosenfeldmedia.com/books/web-form-design/ · author site https://www.lukew.com/
- ★ Luke Wroblewski — inline validation study write-up — https://www.lukew.com/ff/entry.asp?1288
- ★ NN/g — *Error Message Guidelines* — https://www.nngroup.com/articles/error-message-guidelines/
- ★ NN/g — *Progress Indicators Make a Slow System Less Insufferable* — https://www.nngroup.com/articles/progress-indicators/
- ★ NN/g — *Progressive Disclosure* — https://www.nngroup.com/articles/progressive-disclosure/
- ★ NN/g — *Breadcrumbs: 11 Design Guidelines* — https://www.nngroup.com/articles/breadcrumbs/
- ★ NN/g — *Tabs, Used Right* — https://www.nngroup.com/articles/tabs-used-right/
- ★ NN/g — *Hamburger Menus and Hidden Navigation Hurt UX* — https://www.nngroup.com/articles/hamburger-menus/
- ★ NN/g — *Flat Design: Its Origins, Its Problems* — https://www.nngroup.com/articles/flat-design/
- ★ NN/g — empty-state / blank-slate guidance — https://www.nngroup.com/articles/empty-state-interface-design/ `[URL shape guessed — verify]`
- ★ NN/g — confirmation dialogs — https://www.nngroup.com/articles/confirmation-dialog/ `[URL shape guessed — verify]`
- ★ Aza Raskin — *Never Use a Warning When You Mean Undo* — believed A List Apart / Humanized — http://alistapart.com/article/neveruseawarning `[verify]`
- ★ Apple — *Human Interface Guidelines* (buttons, motion, layout/touch targets) — https://developer.apple.com/design/human-interface-guidelines/ `[note: developer.apple.com's JSON docs API may be reachable where HTML is blocked — worth a retry]`
- ★ Material Design 3 — *Interaction states* — https://m3.material.io/foundations/interaction/states/overview
- ★ Material Design 3 — *Accessible design* (48 dp targets) — https://m3.material.io/foundations/accessible-design/
- ★ deceptive.design — *Types of deceptive pattern* — https://www.deceptive.design/types `[the enumeration in §8.2 is from knowledge; the site's list has changed over time — MUST be re-checked]`
- ★ Gray, Kou, Battles, Hoggatt, Toombs — *The Dark (Patterns) Side of UX Design* (CHI 2018)
- ★ goodui.org — A/B-tested UI patterns — https://goodui.org/ `[evidence strength varies; commercially motivated]`
- ★ ui-patterns.com — pattern library (Blank Slate, Breadcrumbs, Wizard, Inline Validation, etc.) — https://ui-patterns.com/
- ★ GOV.UK Design System — patterns & components — https://design-system.service.gov.uk/patterns/ `[unusually well-evidenced, publicly documented research]`
- ★ Baymard Institute — checkout & form usability research — https://baymard.com/blog/checkout-flow-average-form-fields
- ★ MDN — `prefers-reduced-motion` — https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- ★ web.dev — Core Web Vitals (CLS, INP) — https://web.dev/vitals/
- ★ W3C ARIA Authoring Practices Guide — Tabs pattern — https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
- ★ TanStack Query — optimistic updates guide — https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates
- Books (no URL needed): Don Norman, *The Design of Everyday Things*; Jef Raskin, *The Humane Interface*; Alan Cooper, *About Face*; Val Head, *Designing Interface Animation*; Torrey Podmajersky, *Strategic Writing for UX*; Kinneret Yifrah, *Microcopy: The Complete Guide*; Robert B. Miller (1968), *Response time in man-computer conversational transactions*; David Maister (1985), *The Psychology of Waiting Lines*; Steven Hoober (2013), *How Do Users Really Hold Mobile Devices?* (UXmatters).

### Claims explicitly flagged as needing verification or as contested

| Claim | Status |
|---|---|
| Skeleton screens perceived 9–12% / 20–30% faster; Facebook "300 ms"; bounce −9–20% | `[contested]` — secondary-source telephone game; primary study is more equivocal |
| Doherty Threshold 400 ms | `[contested]` — 1982 mainframe study, over-generalised |
| Thumb-zone heatmaps | `[contested]` — reproduced with more confidence than the sample supports |
| Wroblewski inline-validation improvement percentages | Verify against https://www.lukew.com/ff/entry.asp?1288 |
| deceptive.design's current list of pattern types and their exact names | **Unverified — search failed on this query.** Re-fetch https://www.deceptive.design/types |
| "Disabled submit until valid" | `[contested]` — GOV.UK and several a11y practitioners argue against; many design systems still mandate it |
| Exact motion durations per system (Material vs. Apple vs. spring defaults) | Ranges corroborated; per-system exact values unverified |
| NN/g URLs marked `[URL shape guessed]` | Article exists in substance; slug may differ |
