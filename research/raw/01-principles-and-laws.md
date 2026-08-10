# 01 — Principles, Heuristics, and "Laws" of UX

**Scope of this file.** This is the raw-material inventory for the *theoretical bedrock* of the course: the canonical, named principles that practitioners cite by name. It covers Nielsen's 10 usability heuristics, the full Laws of UX collection, Gestalt principles of perception, Don Norman's core interaction concepts, cognitive load theory as applied to UI, accessibility at the *principle* level (POUR), and other named frameworks (Shneiderman's 8 Golden Rules, ISO 9241-110 interaction principles, Tognazzini's First Principles, Krug's usability laws).

**Explicitly out of scope here** (owned by other agents): visual design craft (typography, color, spacing), interaction patterns and micro-interactions, community opinions, existing course syllabi, glossary compilation, UX research process, course delivery formats.

**Format.** Each entry gives: name → a tight definition → why a developer specifically should care → a concrete UI example → source URL.

---

## ⚠️ METHODOLOGY NOTE — READ BEFORE TRUSTING CITATIONS

**Direct page fetching was unavailable for this research session.** Every outbound HTTPS request from this environment was refused at the organization's egress proxy (`CONNECT tunnel failed, response 403`) for *all* hosts tested, including `nngroup.com`, `lawsofux.com`, `w3.org`, `interaction-design.org`, and `wikipedia.org`. Both the `WebFetch` tool and `curl` were blocked identically; the proxy status endpoint confirmed this is an egress *policy* denial, not a TLS or configuration fault. Per the environment's documented guidance, blocked hosts are reported rather than routed around.

**What this means for the content below:**

- **Web *search* worked** and was used heavily (16 distinct queries; see "Sources consulted"). Search returns titles, URLs, and substantive summary snippets — so definitions, list membership, and framing below are corroborated by search results.
- **No primary source was read in full.** In particular, the NN/g heuristic articles and the lawsofux.com law pages were *not* fetched, despite the task asking for that. Their wording below is reconstructed from established knowledge of these canonical frameworks plus search corroboration — it is accurate in substance but is **not verbatim quotation**, and should not be presented as such.
- **URLs cited are canonical/authoritative locations** for each principle (and were surfaced by search), but they are **unverified-by-fetch** in this session.
- **Action for the synthesis stage:** before any of this text ships to learners, re-fetch the starred (★) primary sources from an environment with egress access, and treat exact numbers (e.g. the Doherty 400 ms figure, Miller's 7±2) and any direct quotes as *needing verification*.

Entries where search coverage was thin are flagged inline with `[thin corroboration]`.

---

## 1. Nielsen's 10 Usability Heuristics

**Origin & status.** Jakob Nielsen published the current 10 in 1994, refined from an earlier factor analysis of 249 usability problems (with Rolf Molich's earlier 9-heuristic work as the precursor). NN/g revised the explanatory text in 2020 but the ten items themselves are unchanged. They are deliberately *heuristics* — broad rules of thumb for inspection, not specific usability guidelines — which is exactly why they've survived 30 years of platform churn. They are the basis of "heuristic evaluation," a discount inspection method where 3–5 evaluators independently walk an interface against the list.

★ Primary source (unfetched): https://www.nngroup.com/articles/ten-usability-heuristics/
Method article: https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/

### 1.1 Visibility of System Status

**Definition.** The system should always keep users informed about what is going on, through appropriate feedback within a reasonable time. Users need a continuously updated mental picture of where they are, what the system is doing, and whether their last action registered. Visibility builds trust and predictability: when the system's state is legible, users can decide what to do next; when it isn't, they guess, repeat actions, or abandon.

**Why a developer should care.** This is the heuristic most often violated by *asynchronous code*. Every `await`, every network call, every optimistic update is a moment where the UI knows something the user doesn't. Developers naturally think in terms of state machines; this heuristic asks you to *render* the states you already have — pending, success, error, empty — rather than leaving the UI frozen in its last-known-good frame.

**Concrete UI example.** A file upload that shows a determinate progress bar with percentage and byte count, then a persistent success confirmation with the filename — versus a button that visually does nothing for eight seconds while the request is in flight. Also: the "Saving…" → "All changes saved" indicator in Google Docs; unread badges; a multi-step checkout showing "Step 2 of 4."

**Source.** https://www.nngroup.com/articles/visibility-system-status/

### 1.2 Match Between the System and the Real World

**Definition.** The design should speak the users' language — words, phrases, and concepts familiar to the user — rather than internal jargon, and should follow real-world conventions, making information appear in a natural and logical order. The point is not "dumb it down" but "use the user's vocabulary and the user's ordering," which may be quite technical if the users are technical.

**Why a developer should care.** Developers leak the *implementation model* into the UI constantly: error strings that say `NullPointerException` or `422 Unprocessable Entity`, labels that mirror database column names (`user_fk`, `is_deleted`), settings ordered by the order they were added to the config struct. The heuristic says the interface should express the *user's* model of the domain, not the schema's.

**Concrete UI example.** A checkout that asks for shipping address *before* payment method, mirroring the real-world order of "where does it go, then how are you paying" — versus one ordered by how the payments service was integrated. Also: a trash/recycle bin metaphor for soft-delete; "Archive" instead of `set_status=3`.

**Source.** https://www.nngroup.com/articles/match-system-real-world/

### 1.3 User Control and Freedom

**Definition.** Users frequently perform actions by mistake and need a clearly marked "emergency exit" to leave the unwanted state without having to go through an extended process. Support undo and redo. The deeper idea is that users should feel they are driving the system rather than being driven by it — that any state they land in is reversible or escapable.

**Why a developer should care.** Undo is an *architectural* decision, not a UI decoration. Retrofitting it is expensive; designing for it means modelling actions as reversible commands or keeping soft-delete/tombstones from the start. Developers also over-rely on confirmation modals ("Are you sure?"), which interrupt everyone, when a post-hoc undo interrupts no one and protects better.

**Concrete UI example.** Gmail's "Undo Send" toast, which delays dispatch by a few seconds and lets the user retract with one click — versus a blocking "Are you sure you want to send?" dialog that users learn to dismiss reflexively. Also: a visible Cancel on every modal; back-button behavior that actually goes back; "Move to Trash" (recoverable) rather than immediate hard delete.

**Source.** https://www.nngroup.com/articles/user-control-and-freedom/

### 1.4 Consistency and Standards

**Definition.** Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform and industry conventions. Nielsen distinguishes *internal* consistency (within your own product) from *external* consistency (with the wider ecosystem the user already knows) — both matter, and external consistency is often the more powerful of the two, since it imports learning users already have.

**Why a developer should care.** This is the usability argument for a design system, and it maps directly onto the DRY instinct developers already have. Divergent components (three different button styles, two different date formats, a "Delete" that means archive in one screen and destroy in another) are a form of technical debt that shows up as user error rather than as a failing test.

**Concrete UI example.** A primary action button that is the same color, shape, size, and position on every screen, with the same label vocabulary ("Save" everywhere, not "Save"/"Apply"/"Submit"/"Done" at random). Externally: putting the logo top-left linking home, the cart icon top-right, the nav where users already look for it.

**Source.** https://www.nngroup.com/articles/consistency-and-standards/

### 1.5 Error Prevention

**Definition.** Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions, or check for them and present users with a confirmation option before they commit. Nielsen distinguishes *slips* (unconscious errors of execution — right intent, wrong action) from *mistakes* (conscious errors of intent, from a wrong mental model); the two need different countermeasures.

**Why a developer should care.** Developers are trained to *validate*, which is detection. This heuristic is about *making the invalid state unreachable* — the UI equivalent of making illegal states unrepresentable in the type system. Constrain the input space rather than policing it after the fact.

**Concrete UI example.** A date picker that greys out unavailable dates so an invalid booking cannot be expressed at all — versus a free-text date field that accepts anything and then rejects it with "Invalid date." Also: input masks for phone/card numbers; disabling Submit until required fields are valid; a destructive-action dialog that requires typing the resource name (GitHub repo deletion); unit labels adjacent to numeric inputs.

**Source.** https://www.nngroup.com/articles/slips/ and https://www.nngroup.com/articles/ten-usability-heuristics/

### 1.6 Recognition Rather Than Recall

**Definition.** Minimize the user's memory load by making elements, actions, and options visible. The user should not have to remember information from one part of the interface to another. Information required to use the design (e.g. field labels or menu items) should be visible or easily retrievable when needed. Recognizing something is cognitively far cheaper than recalling it unaided.

**Why a developer should care.** Command-line and keyboard-driven habits make developers unusually tolerant of recall-based interfaces — you remember your flags, so you assume users will remember theirs. Most won't. This heuristic is the argument for autocomplete, visible defaults, and showing prior context instead of asking users to re-derive it.

**Concrete UI example.** A search field with autocomplete and a "recent searches" list, plus breadcrumbs showing where you are in a hierarchy — versus a bare search box and a URL as your only positional cue. Also: showing the previously entered shipping address on the confirmation step instead of making users remember what they typed; visible menu options rather than memorized commands.

**Source.** https://www.nngroup.com/articles/recognition-and-recall/

### 1.7 Flexibility and Efficiency of Use

**Definition.** Shortcuts — hidden from novice users — may speed up the interaction for the expert user such that the design can cater to both inexperienced and experienced users. Allow users to tailor frequent actions. The key structural idea is *accelerators*: a fast path layered on top of, not replacing, the discoverable slow path.

**Why a developer should care.** This is the heuristic developers most naturally *want* (keyboard shortcuts, bulk operations, an API) and most often get backwards — they build the power path first and the discoverable path never. The rule is additive: the beginner route must stay intact and visible while the accelerator sits alongside it.

**Concrete UI example.** A web app where every action is reachable through visible menus, *and* also via a command palette (`Cmd+K`) and single-key shortcuts, with the shortcut hint printed next to the menu item so users graduate naturally. Also: saved filters/views, templates, bulk multi-select, remembered defaults.

**Source.** https://www.nngroup.com/articles/ten-usability-heuristics/

### 1.8 Aesthetic and Minimalist Design

**Definition.** Interfaces should not contain information that is irrelevant or rarely needed. Every extra unit of information in an interface competes with the relevant units and diminishes their relative visibility. This is explicitly *not* a mandate for flat/sparse visual fashion — it's about **content and feature prioritization**, keeping the interface focused on what supports the primary goal.

**Why a developer should care.** Feature accretion is the default state of software. Every flag, every "just expose the option," every debug field that ships to production dilutes the signal of the things users actually came for. This heuristic gives you the vocabulary to argue for progressive disclosure instead of surfacing every capability at once.

**Concrete UI example.** A settings screen showing six common options with an "Advanced" disclosure hiding the other forty — versus a single flat list of forty-six toggles. Also: Google's homepage (one input, minimal chrome); dashboards that show the three metrics that drive decisions rather than every metric collected.

**Source.** https://www.nngroup.com/articles/ten-usability-heuristics/ (see also NN/g on progressive disclosure: https://www.nngroup.com/articles/progressive-disclosure/)

### 1.9 Help Users Recognize, Diagnose, and Recover from Errors

**Definition.** Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution. A good error message answers three things: *what went wrong*, *why*, and *what to do next* — and is presented where the user's attention already is, with visual weight appropriate to the severity.

**Why a developer should care.** Error strings are usually written by developers at the moment of implementation, in implementation vocabulary, for an audience of themselves. They are also the highest-stress moment in the user's session. Traditionally the lowest-effort text in the codebase is the text that matters most.

**Concrete UI example.** "That card was declined by your bank. Try a different card, or contact your bank to authorize the charge." shown inline next to the card field — versus a red toast reading "Error 402: payment_intent_failed." Also: form validation that highlights the specific offending field, explains the constraint ("Password needs at least one number"), and preserves everything the user already typed.

**Source.** https://www.nngroup.com/articles/error-message-guidelines/

### 1.10 Help and Documentation

**Definition.** It's best if the design doesn't need any additional explanation. However, it may be necessary to provide documentation to help users understand how to complete their tasks. Any such help should be easy to search, focused on the user's task, list concrete steps, and not be too large. Note the ordering: help is a *fallback*, and the presence of heavy documentation for a common task is itself a usability finding.

**Why a developer should care.** "It's in the docs" is the standard developer answer to a design problem, and this heuristic explicitly ranks it last. It also frames help as *contextual and task-shaped* — help at the point of need, not a separate manual the user must leave the product to consult.

**Concrete UI example.** A contextual "?" affordance next to a confusing field that opens a short popover explaining exactly that field with an example value — plus a searchable, task-titled help center ("How to transfer a domain") rather than a feature-titled one ("The Domains Module"). Onboarding tours and empty-state guidance count here too.

**Source.** https://www.nngroup.com/articles/ten-usability-heuristics/

---

## 2. Laws of UX (Jon Yablonski)

**Origin & status.** A curated collection by product designer Jon Yablonski, published at lawsofux.com and as the O'Reilly book *Laws of UX: Using Psychology to Design Better Products and Services* (1st ed. 2020; 2nd ed. 2024). Yablonski did not originate these — they're borrowed from cognitive psychology, behavioral economics, HCI, and Gestalt theory and reframed for designers. The site groups them into **heuristics**, **Gestalt principles**, **cognitive biases**, and **principles**. Search results reported the canonical count as **21 laws**, though secondary roundups variously list 18, 21, 23, 28, or 31 by folding in extra principles; category assignment also varies between sources. The enumeration below is the superset commonly presented on the site, grouped as the site groups them.

★ Primary source (unfetched): https://lawsofux.com/
Author: https://jonyablonski.com/work/laws-of-ux/
`[Category assignments and exact site membership are unverified this session — see methodology note.]`

### Group A — Heuristics

#### 2.1 Fitts's Law

**Definition.** The time to acquire a target is a function of the distance to and size of the target. Formally, movement time increases with an index of difficulty of roughly `log₂(2A/W)`, where `A` is distance to the target and `W` is target width along the axis of motion. Bigger and closer targets are faster to hit; small, far targets are slow and error-prone. Derived by Paul Fitts in 1954 from studies of human motor movement.

**Why a developer should care.** It converts "make the button bigger" from an aesthetic opinion into a measurable ergonomic claim, and it explains touch-target minimums (roughly 44×44pt on iOS, 48×48dp on Android) that show up in platform guidelines and accessibility criteria. It's also the reason a 24px icon-only button with no padding is a genuine defect, not a preference.

**Concrete UI example.** A mobile primary CTA rendered full-width at the bottom of the screen, inside the thumb's natural arc — versus a small text link in the top-right corner. Desktop corollary: screen edges and corners have *infinite* effective width because the pointer stops there, which is why the macOS menu bar at the very top edge and Windows' Start button in the corner are fast targets.

**Source.** https://lawsofux.com/fittss-law/

#### 2.2 Hick's Law (Hick–Hyman Law)

**Definition.** The time it takes to make a decision increases with the number and complexity of choices, logarithmically: `RT = a + b·log₂(n + 1)`. Note the *logarithm* — doubling the options doesn't double decision time, and the law describes simple choice-reaction tasks, so applying it to rich, considered decisions is an extrapolation. The practical reading is: minimize choices when response time is critical, break complex tasks into steps, and avoid overwhelming users by highlighting recommended options.

**Why a developer should care.** It's the argument against the "just add a config option" reflex. Every option you expose is a decision you have delegated to the user, and it's paid for on every single use, by every single user.

**Concrete UI example.** A pricing page showing three plans with one marked "Most popular" — versus a comparison grid of nine SKUs. Also: progressive disclosure of advanced settings; a navigation menu limited to top-level categories rather than every page; onboarding split into one-question-per-screen.

**Source.** https://lawsofux.com/hicks-law/

#### 2.3 Jakob's Law

**Definition.** Users spend most of their time on *other* sites/apps, which means they prefer your product to work the same way as all the other products they already know. Users transfer expectations built around one familiar product to another that appears similar. Named for Jakob Nielsen. The design implication is to leverage existing mental models rather than fight them — and when you must change something, minimize discord by letting users transfer over gradually.

**Why a developer should care.** This is the strongest available argument against gratuitous novelty, and specifically against reinventing native controls. It also directly justifies using the platform's/framework's stock components: they carry accumulated user learning (and accessibility behavior) for free.

**Concrete UI example.** Putting the logo top-left linking to home, search top-right, cart icon in the header, and underlined blue-ish links — because that's where a decade of the web taught users to look. Counter-example: a custom scrolljacked hero section that breaks the user's expectation of what a scroll gesture does.

**Source.** https://lawsofux.com/jakobs-law/

#### 2.4 Miller's Law

**Definition.** The average person can keep only about **seven (± two)** items in their working memory. George Miller's 1956 paper is *"The Magical Number Seven, Plus or Minus Two."* Crucially, the widely-cited "7 items" number is frequently over-applied: Miller's actual point was about the *chunk* as the unit of memory, not about how many menu items a nav bar may hold, and later research suggests the practical limit is closer to 4±1 chunks. The durable design implication is **chunking**: organize content into meaningfully grouped units so that each unit is one chunk.

**Why a developer should care.** It's the theoretical backing for formatting data instead of dumping it, and for splitting long forms into steps. It's also a caution against cargo-culting: "never more than 7 nav items" is a misreading that gets quoted in design reviews as if it were law.

**Concrete UI example.** Rendering a credit card number as `4242 4242 4242 4242` rather than `4242424242424242`, a phone number as `(555) 867-5309`, and an IBAN in four-character groups. Also: grouping a 30-field settings page into five labelled sections; a wizard that asks three related questions per step.

**Source.** https://lawsofux.com/millers-law/

#### 2.5 Tesler's Law (Law of Conservation of Complexity)

**Definition.** For any system there is a certain amount of complexity which cannot be reduced — it can only be moved. Larry Tesler (of Xerox PARC, later Apple) argued that this irreducible complexity must be absorbed by *either the system or the user*, and that engineers should spend an extra week reducing complexity rather than making millions of users spend an extra minute each. The design implication: deal with as much of the inherent complexity as possible during design and development, without making the interface so simple it becomes useless.

**Why a developer should care.** This is the sharpest available framing of the effort trade-off developers negotiate daily. "We'll just let the user configure it" and "we'll just ask them to paste the ID" are both decisions to *push complexity onto the user* because absorbing it is expensive. Tesler's Law names that trade explicitly and puts the thumb on the scale toward the system.

**Concrete UI example.** An email client that parses `Send to John about Friday` and infers the recipient — versus a form with separate To/Subject/Body fields the user must map their intent onto. Also: address autocomplete that splits one typed line into street/city/postcode server-side; timezone handling done automatically from the browser rather than via a dropdown of 400 zones.

**Sources.** https://lawsofux.com/teslers-law/ · https://en.wikipedia.org/wiki/Law_of_conservation_of_complexity · https://www.oreilly.com/library/view/laws-of-ux/9781492055303/ch09.html

#### 2.6 Doherty Threshold

**Definition.** Productivity soars when a computer and its users interact at a pace (**< 400 ms**) that ensures neither has to wait on the other. From a 1982 IBM Systems Journal paper by Walter J. Doherty and Arvind J. Thadani, which found that reducing system response time below ~400 ms produced a *more than proportional* increase in user productivity — users entered a state of flow and stayed engaged rather than context-switching away.

**Why a developer should care.** It gives a hard, defensible performance budget tied to a human outcome rather than a vanity metric. It also legitimizes *perceived* performance work — skeleton screens, optimistic UI, prefetching — as real usability work, since the threshold is about the *experience* of responsiveness, not only the server timing.

**Concrete UI example.** A search-as-you-type results panel updating within a few hundred milliseconds of each keystroke, versus one requiring an explicit submit and a full page reload. Also: optimistic UI where a "like" fills in instantly and reconciles with the server afterward; skeleton placeholders that appear immediately so the interface never looks frozen. `[The specific 400 ms figure is well-attested across search results but was not verified against the primary paper.]`

**Sources.** https://lawsofux.com/doherty-threshold/ · https://blog.uxtweak.com/doherty-threshold/

#### 2.7 Postel's Law (Robustness Principle)

**Definition.** *Be liberal in what you accept, and conservative in what you send.* Originally Jon Postel's rule for TCP implementations (RFC 761/793), reframed for interface design: be empathetic to, flexible about, and tolerant of any of the myriad actions the user could take or any input they might provide, while emitting predictable, well-formed, high-quality output yourself. Anticipate variability and translate it, rather than rejecting it.

**Why a developer should care.** Developers already know this law from protocol design; the UX framing extends it to *human* input. Strict input validation feels rigorous but is often just work you've refused to do, handed to the user as an error message. (Worth noting: the principle is contested in security/protocol circles — over-liberal parsing causes interoperability and security problems — so the design lesson is "accept variation *and normalize it explicitly*," not "accept anything.")

**Concrete UI example.** A phone field that accepts `+1 (555) 867-5309`, `555.867.5309`, and `5558675309` and normalizes them server-side — versus one that rejects everything but a single format. Also: trimming whitespace from pasted coupon codes and emails; case-insensitive usernames; a date field that understands `today`, `12/03`, and `3 Dec`; drag-and-drop upload that accepts several image formats and converts them.

**Source.** https://lawsofux.com/postels-law/

#### 2.8 Pareto Principle (80/20 Rule)

**Definition.** Roughly 80% of the effects come from 20% of the causes. Applied to product work: a small proportion of features accounts for the large majority of usage and value, and a small proportion of defects accounts for most of the user pain. The implication is to identify and invest disproportionately in the vital few — inputs that produce the greatest results — and to resist spreading effort evenly across everything.

**Why a developer should care.** It's a prioritization heuristic that maps onto both performance optimization instincts ("profile before optimizing") and design triage. It also cautions against polishing rarely-used flows while the primary flow stays rough.

**Concrete UI example.** Making the single most-used action a persistent, prominent button while the remaining twenty actions live behind an overflow menu. Analytics-driven version: seeing that 80% of sessions use three of your twelve dashboard widgets, and rebuilding the default layout around those three.

**Source.** https://lawsofux.com/pareto-principle/

#### 2.9 Parkinson's Law

**Definition.** Any task will inflate until all of the available time is spent. Cyril Northcote Parkinson's 1955 observation, applied to UX as: if you give a user an unbounded amount of time or an unbounded field, the task expands to fill it. The design implication is to *limit* the time and effort a task can consume — and, conversely, that if you can complete a task faster than the user's expected duration, satisfaction improves.

**Why a developer should care.** It justifies aggressive defaults, autofill, and time-boxing in flows: shaving steps isn't just efficiency, it changes the user's perception of the product. It's also the principle behind deliberate deadlines and countdowns in a flow (used ethically — this one is easily weaponized into dark patterns).

**Concrete UI example.** Autofilling a shipping address from a saved profile so a checkout takes 20 seconds instead of 3 minutes; a "hold your seat for 10:00" timer in a ticket-booking flow that bounds the decision. Also: sensible default values on every field so completion is edit-not-author.

**Source.** https://lawsofux.com/parkinsons-law/

#### 2.10 Occam's Razor

**Definition.** Among competing hypotheses that predict equally well, the one with the fewest assumptions should be selected. In design: analyze each element and remove as many as possible without compromising the overall function — the simplest solution that fully does the job is usually the best one. It's a razor for *deciding between adequate alternatives*, not a mandate for minimalism at the cost of capability.

**Why a developer should care.** It gives a name to the discipline of subtraction, which is systematically under-rewarded in software teams (nobody gets promoted for the feature they removed). It also applies to the code behind the UI: the simplest interaction model is usually the simplest to implement correctly and to make accessible.

**Concrete UI example.** Replacing a modal + form + confirmation dialog for renaming an item with inline click-to-edit on the item's title. Or: deleting three of five onboarding screens after finding the information could be inferred or deferred.

**Source.** https://lawsofux.com/occams-razor/

#### 2.11 Aesthetic-Usability Effect

**Definition.** Users often perceive aesthetically pleasing design as design that's more usable. A visually pleasing design creates a positive response in people's brains and leads them to believe the design actually works better; it can also mask usability problems and prevent issues from being discovered during testing. Traceable to Kurosu & Kashimura's 1995 ATM study.

**Why a developer should care.** Two edges. First, it's the evidence-based rebuttal to "visual polish is fluff" — aesthetics measurably affect perceived usability and users' tolerance for minor problems. Second, and more important for a developer: it means *your own polished prototype will hide real defects in usability testing*, so beautiful ≠ validated.

**Concrete UI example.** Two functionally identical dashboards, one with consistent spacing, type hierarchy, and restrained color; users rate it easier to use and forgive its slow filter. The trap: a gorgeous but unlabeled icon-only toolbar that testers praise aesthetically while failing to complete tasks with it.

**Sources.** https://lawsofux.com/aesthetic-usability-effect/ · https://www.nngroup.com/articles/aesthetic-usability-effect/

#### 2.12 Goal-Gradient Effect

**Definition.** The tendency to approach a goal increases with proximity to the goal — motivation accelerates near the finish line. Originating in Clark Hull's 1930s animal-learning research and demonstrated in humans by Kivetz et al.'s loyalty-card study, where cards pre-stamped with "free" progress were completed faster. Design implications: provide clear indication of progress, and *artificial advancement toward a goal increases motivation to complete it*.

**Why a developer should care.** It's the reason a progress indicator is a functional component, not decoration — it directly changes completion rates in signups, onboarding, and profile setup. It also explains why splitting a long form into visible steps can *increase* completion despite adding clicks.

**Concrete UI example.** A profile-completeness meter reading "70% complete — add a photo to finish," or LinkedIn's profile strength gauge. Also: a multi-step checkout with a "Step 3 of 4" indicator; a loyalty punch card that starts with two punches already given.

**Source.** https://lawsofux.com/goal-gradient-effect/

### Group B — Gestalt Principles as codified in Laws of UX

*(The perception theory behind these is expanded in §3; these are the Laws-of-UX-branded entries.)*

#### 2.13 Law of Proximity
**Definition.** Objects that are near, or proximate to each other, tend to be grouped together. Proximity helps to establish a relationship with nearby objects and is a stronger grouping cue than similarity of color, shape, or other factors. **Developer relevance:** whitespace is a semantic tool — margin values encode relationships, so a CSS spacing scale is an information-architecture decision. **Example:** a form label sitting 4px above its input and 24px below the previous field, so the pairing is unambiguous without any box or line. **Source:** https://lawsofux.com/law-of-proximity/

#### 2.14 Law of Similarity
**Definition.** The human eye tends to perceive similar elements in a design as a complete picture, shape, or group, even if those elements are separated. Similarity in color, shape, size, orientation, or texture creates perceived grouping and communicates that elements are related or have the same function. **Developer relevance:** it means every visual variant you introduce is read as a *semantic* difference; inconsistent styling of the same component type actively misinforms. **Example:** all interactive links in one accent color and all static text in the neutral color, so "clickable" is learnable from appearance alone. **Source:** https://lawsofux.com/law-of-similarity/

#### 2.15 Law of Common Region
**Definition.** Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary. Adding a border or background — a shared region — around a set of elements creates grouping that can *override* proximity and similarity. **Developer relevance:** it's the perceptual justification for the card component, and for why a background color change is a strong structural signal. **Example:** a settings card with a subtle border and shared background containing a heading and three related toggles, visually separating them from the next card's toggles. **Source:** https://lawsofux.com/law-of-common-region/

#### 2.16 Law of Uniform Connectedness
**Definition.** Elements that are visually connected are perceived as more related than elements with no connection. Connection can be via a line, an arrow, a shared color region, or a container. Described in search results as one of the strongest grouping cues, frequently overriding proximity and similarity. **Developer relevance:** explicit connectors beat implicit spacing when you need to guarantee a relationship is read correctly. **Example:** a stepper/wizard where numbered circles are joined by a connecting line, making the sequence unambiguous; or a tab whose active state visually merges with the panel below it. **Source:** https://lawsofux.com/law-of-uniform-connectedness/

#### 2.17 Law of Prägnanz (Law of Good Figure / Law of Simplicity)
**Definition.** People will perceive and interpret ambiguous or complex images as the simplest form possible, because it is the interpretation that requires the least cognitive effort. The overarching Gestalt law from which the others follow. **Developer relevance:** users will resolve your layout into the simplest reading available — which may not be the reading you intended, if your structure is ambiguous. **Example:** a logo read instantly as a recognizable silhouette from a few abstract shapes; conversely, a three-column layout with inconsistent gutters that users misread as two columns plus a sidebar. **Source:** https://lawsofux.com/law-of-prägnanz/

### Group C — Cognitive Biases

#### 2.18 Peak–End Rule

**Definition.** People judge an experience largely based on how they felt at its **peak** (its most intense point, positive or negative) and at its **end**, rather than the sum or average of every moment. From Kahneman and colleagues' research on remembered vs. experienced utility. Implication: pay close attention to the most intense points and the final moments of the user journey, and identify the moments when your product is *most helpful* and design to delight there.

**Why a developer should care.** It reallocates effort: uniformly polishing every screen is a worse investment than making the one high-intensity moment and the final moment excellent. It also warns that a single bad peak — one catastrophic error, one data loss — dominates the memory of an otherwise smooth product.

**Concrete UI example.** A well-crafted success state at the end of a purchase (clear confirmation, order summary, a delightful animation, obvious next step) — and conversely, the outsized damage done by a payment failure at that same moment. Also: Mailchimp's high-five/nervous-monkey moment at the peak-anxiety point of hitting "send campaign."

**Source.** https://lawsofux.com/peak-end-rule/

#### 2.19 Serial Position Effect

**Definition.** Users have a propensity to best remember the **first** and **last** items in a series (primacy and recency effects respectively); items in the middle are recalled worst. Hermann Ebbinghaus. Implication: placing the least important items in the middle of lists can be helpful, and positioning key actions on the far left and right in horizontal lists increases memorization.

**Why a developer should care.** It gives a defensible rule for *ordering* — nav items, menu entries, plan tiers, onboarding points — rather than treating order as arbitrary or alphabetical.

**Concrete UI example.** A mobile tab bar putting Home at the far left and Profile/Account at the far right, with secondary destinations in between. Also: putting your strongest selling point first and your call to action last on a landing page.

**Source.** https://lawsofux.com/serial-position-effect/

#### 2.20 Von Restorff Effect (Isolation Effect)

**Definition.** When multiple similar objects are present, the one that differs from the rest is most likely to be noticed and remembered. Implication: make important information or key actions visually distinctive — but **do not rely on color alone**, since that excludes colorblind and low-vision users, and beware over-using emphasis, which cancels itself out and can cause banner blindness. Also consider users with motion sensitivity when using movement as the differentiator.

**Why a developer should care.** It's the perceptual mechanism behind "primary vs. secondary button," and it comes with a built-in accessibility caveat that developers should internalize: distinctiveness must be encoded redundantly (shape, weight, label, icon), not just in hue.

**Concrete UI example.** One filled, high-contrast "Upgrade" button among a row of ghost buttons; a "Most popular" pricing tier rendered slightly larger with a badge and a border. Anti-example: five equally-bright colored callouts on one page, none of which stands out.

**Source.** https://lawsofux.com/von-restorff-effect/

#### 2.21 Zeigarnik Effect

**Definition.** People remember uncompleted or interrupted tasks better than completed tasks. Bluma Zeigarnik observed waiters recalling unpaid orders in detail and forgetting them once settled. Implication: surfacing incompleteness creates a psychological tension that motivates users to return and finish.

**Why a developer should care.** It's the mechanism behind progress-driven onboarding and the reason "you have 2 steps left" outperforms a generic "complete your profile" nudge. (Ethical caveat: the same lever powers manipulative streak/notification mechanics.)

**Concrete UI example.** An onboarding checklist showing 3 of 5 items ticked, with the remaining two visible and one-click-actionable. Also: a saved-but-unsent draft indicator; an abandoned-cart badge showing the item count.

**Source.** https://lawsofux.com/zeigarnik-effect/

### Group D — General Principles

#### 2.22 Chunking
**Definition.** Chunking is the process of splitting information into smaller, meaningful groups so that content is easier to scan, process, and hold in working memory — the operational companion to Miller's Law. **Developer relevance:** it applies to your output formatting (IDs, numbers, logs, tables) as much as to layout. **Example:** breaking long numbers, IDs, and lists into groups of 3–5 (phone numbers, card fields), and grouping a long settings page into labelled sections. **Source:** https://lawsofux.com/chunking/

#### 2.23 Cognitive Load
**Definition.** The total mental effort required to use an interface; when it exceeds the user's available processing capacity, performance and comprehension degrade. The design goal is to minimize *extraneous* load (see §5). **Developer relevance:** it's the unifying explanation behind recognition-over-recall, chunking, consistency, and progressive disclosure — one concept that subsumes several heuristics. **Example:** replacing a raw JSON config editor with a form of labelled, defaulted, validated fields. **Source:** https://lawsofux.com/cognitive-load/

#### 2.24 Flow
**Definition.** A state of complete immersion and energized focus in an activity, with a corresponding loss of self-consciousness and sense of time (Csikszentmihalyi). Achieved when challenge is balanced against skill — too hard produces anxiety, too easy produces boredom. Design implication: keep tasks appropriately challenging, show clear progress and immediate feedback, and remove unnecessary interruptions. **Developer relevance:** it connects directly to the Doherty Threshold (latency breaks flow) and to interruption design (modals, notifications, and forced reauthentication are flow-destroying). **Example:** an editor that autosaves silently and never interrupts, versus one that throws a "Session expiring" modal mid-sentence. **Source:** https://lawsofux.com/flow/

#### 2.25 Mental Model
**Definition.** A compressed model of what a user believes about a system and how it behaves, built from prior experience with other systems. Mismatch between the user's mental model and the system's actual model ("mental model discordance") is a primary source of usability failure. Closely tied to Jakob's Law. **Developer relevance:** the implementation model and the user's model are different artifacts, and shipping the former is the default failure mode. **Example:** users expecting "Delete" to be recoverable because every other app they use has a trash; a "Sync" button whose behavior differs from the folder-sync model users import from Dropbox. **Source:** https://lawsofux.com/mental-model/

#### 2.26 Selective Attention
**Definition.** The process of focusing attention on specific stimuli in the environment while filtering out others, largely unconsciously. Users systematically ignore regions and visual treatments they've learned are irrelevant — the basis of *banner blindness*. **Developer relevance:** an element being on screen does not mean it was seen; important messages styled like ads or placed in ad-adjacent regions are reliably invisible. **Example:** a critical account warning rendered as a right-rail colored box that users never notice, versus the same message inline in the primary content flow. **Source:** https://lawsofux.com/selective-attention/

#### 2.27 Paradox of the Active User
**Definition.** Users never read manuals; they start using the software immediately and learn by doing, even though taking time to read documentation first would objectively make them faster. Named by Carroll & Rosson. The implication is not to lecture users into changing, but to design for immediate productive action and put learning *into* the interface. **Developer relevance:** it's the empirical answer to "we'll document it." Users are not going to read it, and this is stable, rational-ish behavior, not laziness to be corrected. **Example:** a tool that opens with a working sample project and inline hints, versus one that opens on an empty screen with a "Read the docs to get started" link. **Sources:** https://lawsofux.com/ · https://www.nngroup.com/articles/paradox-of-the-active-user/

#### 2.28 Cognitive Bias (as a category entry)
**Definition.** A systematic pattern of deviation from rational judgment, in which users draw inferences about other people and situations in an illogical fashion. Listed on Laws of UX as an umbrella entry covering the biases above. **Developer relevance:** relevant mostly as a caution — biases can be leveraged ethically (progress indicators) or exploited (dark patterns), and the same mechanism serves both. **Source:** https://lawsofux.com/ `[thin corroboration — category entry, membership unverified]`

---

## 3. Gestalt Principles of Perception

**Origin & status.** Formulated by German psychologists Max Wertheimer, Kurt Koffka, and Wolfgang Köhler in the 1910s–1920s. The central claim is that perception organizes stimuli into unified wholes rather than assembling isolated parts — "the whole is other than the sum of the parts." For interface work these are the most *directly actionable* perception rules available: they determine what users read as grouped, related, clickable, and foreground, entirely from layout and styling, before a single word is read. Search results identified the commonly-used set as: similarity, proximity, continuity, closure, figure-ground, common fate, common region, symmetry/order, and Prägnanz.

Sources: https://www.interaction-design.org/literature/topics/gestalt-principles · https://en.wikipedia.org/wiki/Principles_of_grouping · https://www.toptal.com/designers/ui/gestalt-principles-of-design · https://www.nngroup.com/articles/gestalt-principles-visual-perception/

### 3.1 Prägnanz (Good Figure / Simplicity)
The overarching law: ambiguous or complex stimuli are perceived in the simplest form available, because that reading takes the least cognitive effort. Everything else follows from it. **Developer note:** your layout will be resolved into *some* simple structure whether or not you designed one — ambiguity gets resolved, just not necessarily your way. **Example:** the Olympic rings read as five circles rather than a tangle of arcs.

### 3.2 Proximity
Elements close together are perceived as related; distance implies separation. Proximity is a strong grouping cue that generally beats similarity of color or shape. **Developer note:** spacing is the primary carrier of structure — a design-token spacing scale is how you encode relationships. **Example:** a label immediately above its input, with generous space to the next field, so no user misreads which label belongs to which field. Anti-example: uniform 16px gaps everywhere, making a form read as one undifferentiated column.

### 3.3 Similarity
Elements sharing visual attributes — color, shape, size, orientation, texture — are perceived as belonging to the same group or serving the same function, even when spatially separated. **Developer note:** this is why component consistency is a *communication* requirement, not a tidiness preference. **Example:** every destructive action rendered in the same red-with-icon treatment across the whole app, so danger is recognizable without reading.

### 3.4 Closure
The visual system infers complete figures from incomplete information, filling in illusory contours from partial cues. **Developer note:** you can imply structure without drawing every line — fewer borders, less visual noise, same comprehension. **Example:** a card defined only by a background tint and alignment, with no border; or a partially visible row at the bottom of a scroll area that signals "more content below" because the eye completes the cut-off shape.

### 3.5 Continuity (Continuation)
Elements arranged on a line or smooth curve are perceived as more related than elements not on that path; the eye follows the path and expects it to continue. **Developer note:** this is the perceptual basis of alignment and grid discipline — misalignment breaks a continuity the user is actively following. **Example:** a left-aligned column of form labels creating a strong vertical line that guides scanning; a horizontal carousel whose partially-visible next item invites continued scrolling.

### 3.6 Common Region
Elements within the same clearly bounded area are perceived as grouped — and this cue can override proximity and similarity. **Developer note:** the card, the panel, the fieldset, the modal — all are common-region devices. When you need a grouping to be unambiguous, a boundary is the strongest cheap tool. **Example:** two toggles inside a bordered card read as one settings group even if a third toggle outside the card is physically closer.

### 3.7 Figure/Ground
The visual system separates a scene into a foreground object of attention and a background. The distinction can be stable or ambiguous, and can be driven by contrast, size, blur, elevation, and overlap. **Developer note:** modals, overlays, drawers, and focus states are all figure/ground manipulations; a scrim exists to force the correct figure/ground reading. **Example:** a dialog with a dimmed, blurred backdrop, which unambiguously identifies where interaction is now possible.

### 3.8 Common Fate
Elements that move in the same direction at the same time are perceived as belonging together — motion is a grouping cue as strong as any static one. **Developer note:** it's the perceptual justification for coordinated transitions; items that animate together are read as one unit. **Example:** a list where selected rows all slide out together during a bulk delete, communicating "these are the ones affected" without any label.

### 3.9 Symmetry and Order
Users perceive symmetrical, ordered arrangements as figures around a center point, and read them as stable and intentional; disorder creates perceived instability and invites attention. **Developer note:** consistent alignment and balanced composition reduce the effort of parsing a screen. **Example:** a symmetric three-column feature section that reads instantly as three peer items.

---

## 4. Don Norman's Core Concepts

**Origin & status.** From *The Psychology of Everyday Things* (1988), reissued and expanded as *The Design of Everyday Things* (revised ed. 2013), plus *User Centered System Design* (1986) where the gulfs first appear. Norman is where UX gets its vocabulary for *why* an interface is or isn't understandable. Search corroborated the six-principle framing: affordances, signifiers, constraints, mappings, feedback, conceptual models.

Sources: https://www.nngroup.com/articles/design-principles-affordances-signifiers/ · https://www.interaction-design.org/literature/topics/affordances · https://en.wikipedia.org/wiki/Seven_stages_of_action · https://uxmag.com/articles/understanding-don-normans-principles-of-interaction · Full text PDF surfaced by search: https://media.aanda.psu.edu/sites/media/aa/files/documents/norman_design-of-everyday-things.pdf

### 4.1 Affordances
**Definition.** An affordance is a relationship between the properties of an object and the capabilities of the agent, determining how the object could possibly be used — the *possible actions* it offers. Norman's key later refinement: affordances are relational, not properties of the object alone, and an affordance can exist without being *perceivable*. Classic physical examples: plates are for pushing, handles for pulling, slots for inserting, balls for throwing.

**Why a developer should care.** In software, almost nothing has a physical affordance — everything is pixels — so *every* affordance in your UI is one you deliberately constructed or accidentally failed to construct. `<div onclick>` has the same visual affordance as a paragraph: none.

**Concrete UI example.** A text input affords typing; a scrollable region affords scrolling. The failure mode: a clickable card with no hover state, no cursor change, no border — it affords clicking technically, but nothing communicates that.

### 4.2 Signifiers
**Definition.** Signifiers are the perceivable cues that *communicate* where and how an action can be taken. Norman introduced the term precisely because "affordance" was being misused for "the visual hint." An affordance is what's possible; a signifier is what tells you it's possible. Signifiers can be deliberate (a label, an icon, an underline) or accidental (a worn path in grass).

**Why a developer should care.** This is the single most useful distinction Norman offers developers. Most "the users didn't find it" bugs are missing-signifier bugs, not missing-feature bugs — the capability exists, the cue doesn't. It's also the conceptual root of why `<button>` semantics matter: a real button signifies to sighted users *and* to screen readers.

**Concrete UI example.** A blue, underlined, cursor-changing link (signifiers) versus black body text that happens to be clickable (affordance with no signifier). Also: a drag handle icon on a reorderable row; a "swipe up" chevron; a chevron indicating an expandable accordion; a focus ring signifying keyboard position.

### 4.3 Mapping
**Definition.** Mapping is the relationship between controls and their effects in the world. *Natural mapping* takes advantage of spatial or cultural analogies so that the arrangement of controls corresponds directly to the arrangement of what they control, requiring no learning. Norman's canonical example is the stove: four burners in a square with four knobs in a line requires memorization; four knobs arranged in the same square does not.

**Why a developer should care.** Control layout carries meaning independent of labels. Developers routinely order controls by implementation convenience or alphabetically, discarding a free source of comprehension.

**Concrete UI example.** A volume slider where up/right = louder; a mobile carousel where swiping left moves content left. Failure: a settings page where a list of toggles is ordered differently from the list of items it controls, or where "Cancel" and "OK" swap positions between two dialogs in the same app.

### 4.4 Feedback
**Definition.** Feedback is communicating the results of an action — immediately, informatively, and proportionately. Norman stresses that feedback must be *immediate* (even a tenth-of-a-second delay is noticed), *informative* (say what happened, not just that something happened), and *not excessive* — too much feedback is worse than too little, because users learn to ignore it (the "back-up beeper" problem).

**Why a developer should care.** Overlaps with Nielsen's visibility of system status but adds the proportionality warning that developers habitually get wrong in both directions: silent failures on one hand, and a toast notification for every trivial state change on the other.

**Concrete UI example.** A "Save" that turns into a brief inline "Saved ✓" next to the button — immediate, informative, proportionate. Failure modes: a save that does nothing visible; or a full-screen success modal requiring dismissal after every autosave.

### 4.5 Constraints
**Definition.** Constraints are limitations on the possible actions, which guide users toward correct behavior and prevent errors. Norman classifies them as **physical** (a shape only fits one way — a USB connector, a SIM tray), **cultural** (learned social conventions — red means stop), **semantic** (meaning of the situation constrains what's sensible), and **logical** (deduction from the arrangement — one leftover piece and one leftover hole).

**Why a developer should care.** Constraints are the design-side expression of "make illegal states unrepresentable." Choosing a control that *cannot* express an invalid value beats validating a control that can.

**Concrete UI example.** A date picker that cannot select a past date for a booking (physical/logical constraint in software form); a numeric stepper bounded to 1–10; a form where the "Country" selection constrains the "State/Province" options; a text field with `maxlength` and a visible counter.

### 4.6 Conceptual Models
**Definition.** A conceptual model is an explanation, usually highly simplified, of how something works. Norman distinguishes the **design model** (the designer's intended model), the **user's model** (what the user actually believes, formed largely from the *system image* — everything visible about the product, including UI, docs, and marketing), and the **system image**. Usability failures occur when the system image fails to convey the design model, so the user constructs a wrong model.

**Why a developer should care.** Developers hold the *implementation* model, which is neither of the two that matter. The job is to construct a system image that induces a *useful, simplified, and possibly technically inaccurate* user model — accuracy to implementation is not the goal; predictive power for the user is.

**Concrete UI example.** The desktop "files and folders" metaphor, which corresponds to nothing on the physical disk but predicts behavior perfectly. Failure: a sync product where the user's model is "my folder mirrors the cloud" but the implementation has conflict semantics that occasionally silently pick a winner — the model no longer predicts, and trust collapses.

### 4.7 The Gulf of Execution and the Gulf of Evaluation
**Definition.** The **Gulf of Execution** is the gap between the user's intention and the actions the system makes available — "I know what I want to do; how do I do it here?" The **Gulf of Evaluation** is the gap between the system's actual state and the user's ability to perceive and interpret it — "something happened; did it do what I wanted?" First described in *User Centered System Design* (1986). Signifiers, constraints, and mapping bridge the execution gulf; feedback and visibility bridge the evaluation gulf.

**Why a developer should care.** It's a clean two-question diagnostic for any confusing screen: *can they tell how to act?* and *can they tell what happened?* Nearly every usability complaint sorts into one bucket or the other, which makes it a fast triage tool in code review or bug triage.

**Concrete UI example.** Execution gulf: a user wants to share a document but the only affordance is an unlabeled icon in an overflow menu. Evaluation gulf: they click Share, the dialog closes, and nothing indicates whether an invite was actually sent.

### 4.8 The Seven Stages of Action
**Definition.** Norman's model of how a person carries out an action, cycling through one goal-forming stage and two three-stage arcs:
1. **Goal** — form the goal ("I want the room warmer")
*Execution side:*
2. **Plan** the action
3. **Specify** an action sequence
4. **Perform** the action sequence
*Evaluation side:*
5. **Perceive** the state of the world
6. **Interpret** the perception
7. **Compare** the outcome with the goal

The three execution stages span the Gulf of Execution; the three evaluation stages span the Gulf of Evaluation. Norman pairs the stages with seven fundamental design questions (What do I want to accomplish? What are the alternatives? What can I do now? How do I do it? What happened? What does it mean? Is this okay — have I accomplished my goal?).

**Why a developer should care.** It's a checklist for walking a feature end-to-end. Most features are built to support stages 3–4 (the mechanics of doing) while stages 2, 5, 6, and 7 (discovering the option, perceiving the result, interpreting it, confirming success) are left implicit. Running the seven questions against a flow is a cheap, structured design review that requires no users.

**Concrete UI example.** Deleting a file: goal (free up space) → plan (delete the big video) → specify (find it, use context menu) → perform (click Delete) → perceive (row disappears, toast appears) → interpret ("it's in Trash, recoverable, space not yet freed") → compare ("not done — I must also empty Trash"). A UI that omits the interpret step leaves users believing space was reclaimed when it wasn't.

**Sources.** https://en.wikipedia.org/wiki/Seven_stages_of_action · https://www.simonwhatley.co.uk/writing/human-action-cycle-don-norman/ · https://www.interaction-design.org/literature/topics/seven-stages-of-action

---

## 5. Cognitive Load Theory Applied to UI

**Origin & status.** Developed by John Sweller (1988) in instructional design, grounded in the limited capacity of working memory. It transfers cleanly to interface design because using an unfamiliar interface *is* a learning task. The three-way split is the useful part.

Sources: https://lawsofux.com/cognitive-load/ · https://www.nngroup.com/articles/minimize-cognitive-load/ · https://www.aufaitux.com/blog/cognitive-load-theory-ui-design/ · https://mailchimp.com/resources/cognitive-overload/

### 5.1 Intrinsic Load
**Definition.** The mental effort inherent to the task itself, given the user's existing knowledge — filing a tax return is intrinsically harder than toggling a light. It can be *managed and sequenced* but not eliminated without changing the task. **Design implication:** segment complex tasks, sequence from simple to complex, and let users build schema progressively. **Developer relevance:** this is Tesler's irreducible complexity in cognitive terms. **Example:** splitting a 40-field tax form into a guided interview that asks only the questions relevant to the answers so far.

### 5.2 Extraneous Load
**Definition.** Mental effort imposed by *how information is presented* rather than by the task — clutter, inconsistency, jargon, poor layout, decorative animation, irrelevant options, split attention between related pieces of information. **This is the load design is responsible for, and the target of essentially all optimization.** **Design implication:** remove it ruthlessly — clear visual hierarchy, consistent layouts, recognition over recall, place related information together rather than making the user hold one part in memory while reading another. **Example:** a cluttered checkout page with cross-sells, a newsletter modal, and inconsistent field ordering, versus a single-column checkout with only the fields required. A raw JSON editor for configuration is nearly all extraneous load; a labelled form with defaults and inline validation is nearly none.

### 5.3 Germane Load
**Definition.** The mental effort devoted to processing, schema construction, and automation — i.e. *productive* effort that results in learning how the system works. **Design implication:** you want to preserve headroom for it, which you get by cutting extraneous load. Consistent patterns, familiar conventions, and coherent conceptual models let germane load pay off, because the schema the user builds transfers to the rest of the product. **Developer relevance:** this reframes "learnability" as a budget — every bit of extraneous load you remove is capacity the user can spend on actually learning your domain. **Example:** iOS's consistent gestures and navigation patterns mean the effort a user spends learning one app transfers to the next.

**Overall practical strategies surfaced in search:** clear visual hierarchy; consistent layouts; chunking; progressive disclosure (hide advanced settings until needed); minimize choices; leverage familiar conventions; avoid split attention by co-locating related content.

---

## 6. Accessibility Principles — POUR (WCAG, principle level only)

**Origin & status.** The four top-level principles under which all WCAG 2.x success criteria are organized: **P**erceivable, **O**perable, **U**nderstandable, **R**obust. WCAG's structure is Principles → Guidelines → Success Criteria (A/AA/AAA) → Techniques; only the top level is in scope for this file. The framing to teach: if any one of the four fails, the content is not usable by some group of people, regardless of how well the others are satisfied.

Sources: https://www.w3.org/WAI/fundamentals/accessibility-principles/ · https://www.w3.org/TR/WCAG21/ · https://www.w3.org/WAI/WCAG22/Understanding/intro · https://accessibility.umich.edu/basics/concepts-principles/pour

### 6.1 Perceivable
**Definition.** Information and user interface components must be presentable to users in ways they can perceive — no content may be invisible to *all* of a user's available senses. Covers text alternatives, captions and alternatives for time-based media, adaptable content that doesn't lose meaning when presented differently, and distinguishable content (contrast, not using color alone, resizable text). **Developer relevance:** this is the principle most often satisfied *for free* by using semantic HTML and violated by re-implementing controls in `div`s. **Example:** an icon-only button given an accessible name; a chart whose data is also available as a table; error state indicated by an icon and text, not only red.

### 6.2 Operable
**Definition.** User interface components and navigation must be operable — the interface cannot require interaction that a user cannot perform. Covers full keyboard accessibility (and no keyboard traps), enough time to read and use content, avoiding content that causes seizures (flashing), navigability (skip links, focus order, page titles, visible focus), and input modalities beyond the pointer. **Developer relevance:** keyboard operability is a pure engineering property and the fastest self-test available — unplug the mouse and complete your feature. **Example:** a custom dropdown that opens with Enter/Space, moves with arrow keys, closes with Escape, and returns focus to the trigger.

### 6.3 Understandable
**Definition.** Information and the operation of the user interface must be understandable. Covers readability (declared page language, plain language), predictability (components behave consistently; no unexpected context changes on focus or input), and input assistance (labels and instructions, error identification, error suggestion, error prevention for legal/financial/data actions). **Developer relevance:** note how much this overlaps Nielsen — clear error messages and consistency are simultaneously usability heuristics and accessibility criteria. **Example:** a form that never auto-submits on a select change, labels every field persistently (not placeholder-only), and names both the error and the fix.

### 6.4 Robust
**Definition.** Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies, and remain accessible as those technologies evolve. Covers valid, well-formed markup with correct parsing, and correct name/role/value exposure for all UI components — including status messages being programmatically announced. **Developer relevance:** this is the most purely technical of the four and maps directly to using correct semantics and ARIA only where native elements can't do the job. **Example:** a custom toggle implemented with `role="switch"` and `aria-checked` kept in sync, so a screen reader announces both what it is and its current state — versus a styled `div` that announces nothing.

---

## 7. Other Named Principle Sets

### 7.1 Shneiderman's Eight Golden Rules of Interface Design
**Origin.** Ben Shneiderman, *Designing the User Interface* (1st ed. 1986; still maintained in current editions with Plaisant et al.). Predates and partly overlaps Nielsen; more prescriptive and more oriented to interaction mechanics. Search-confirmed shorthand list: consistency, shortcuts, feedback, closure, error handling, reversal, control, memory load.

1. **Strive for consistency.** Identical terminology, layout, color, and action sequences for similar situations. *(Overlaps Nielsen #4.)*
2. **Seek universal usability.** Recognize diverse users and design for plasticity — novice-to-expert range, age range, disabilities, international variation, technology diversity. Explanations for novices, shortcuts for experts. *(In some editions phrased as "enable frequent users to use shortcuts.")*
3. **Offer informative feedback.** For every user action there should be system feedback; modest for frequent/minor actions, substantial for infrequent/major ones. *(Overlaps Nielsen #1.)*
4. **Design dialogs to yield closure.** Sequences of actions should be organized into groups with a beginning, middle, and end, with informative feedback at completion giving a sense of accomplishment and signalling that the user may move on.
5. **Prevent errors.** Design so users cannot make serious errors; where an error is made, offer simple, constructive, specific recovery instructions. *(Overlaps Nielsen #5/#9.)*
6. **Permit easy reversal of actions.** Actions should be reversible, which relieves anxiety and encourages exploration of unfamiliar options. *(Overlaps Nielsen #3.)*
7. **Keep users in control (support internal locus of control).** Users should be the initiators of actions rather than the responders; surprising system behavior and tedious data entry erode the sense of control.
8. **Reduce short-term memory load.** Displays should be simple, multiple-page displays consolidated, and window-motion frequency reduced, in deference to the limits of human information processing. *(Overlaps Nielsen #6 and Miller's Law.)*

**Why a developer should care.** Rules 4 and 7 are the ones *not* well covered by Nielsen's list and are frequently violated in developer-built UIs: flows that just stop with no completion signal, and systems that interrupt or act on the user's behalf without invitation.

**Sources.** https://www.cs.umd.edu/~ben/goldenrules.html · https://www.uxmatters.com/mt/archives/2022/10/applying-the-8-golden-rules-of-user-interface-design.php · https://www.geeksforgeeks.org/software-engineering/ben-shneiderman-eight-golden-rules-of-interface-design-human-computer-interaction/

### 7.2 ISO 9241-110 — Interaction Principles (formerly "Dialogue Principles")
**Origin & status.** *Ergonomics of human-system interaction — Part 110*. The 2006 edition defined seven **dialogue** principles; the **2020 revision renamed them interaction principles** and changed the set. Search confirmed the 2020 seven as:

1. **Suitability for the user's tasks** — the system supports the user in completing their task, not the system's process.
2. **Self-descriptiveness** — at any point it is obvious what the system is, what it's doing, and what can be done next, without needing external help.
3. **Conformity with user expectations** — behavior matches context and commonly accepted conventions (very close to Jakob's Law).
4. **Learnability** — the system supports discovery, exploration, and remembering.
5. **Controllability** — the user can initiate, direct, pause, and reverse the interaction.
6. **Use error robustness** — the system helps avoid use errors and supports recovery when they occur.
7. **User engagement** — the system presents functions and information in an inviting and motivating way that encourages continued interaction. *(New in 2020; the 2006 set instead had "suitability for individualization" and "suitability for learning.")*

**Why a developer should care.** Unlike Nielsen and Shneiderman, this is a *standard* — it appears in procurement requirements, regulated-industry contracts, and conformance documentation, particularly in Europe. If a course audience builds enterprise or public-sector software, this is the vocabulary in the acceptance criteria.

**Sources.** https://www.iso.org/standard/75258.html · https://www.iso.org/obp/ui/#iso:std:iso:9241:-110:ed-2:v1:en · https://www.usability.de/en/usability-user-experience/glossary/dialogue-principles.html · https://userpeek.com/blog/iso-9241-110-ergonomics-of-human-system-interaction-part-110-interaction-principles/ · https://www.dialogdesign.dk/isos-dialogue-principles-2019/

### 7.3 Tognazzini's First Principles of Interaction Design
**Origin & status.** Bruce "Tog" Tognazzini — Apple employee #66 (1978–1992), author of the original Apple Human Interface Guidelines, later at Sun and NN/g. His *First Principles* is a long, continuously revised list, characterized in search results as **more numerous, more specific, and more grounded in interaction mechanics than Nielsen's 10** — covering time and motion (Fitts's Law, latency reduction), state, defaults, discoverability, and color.

Principles in the list include (non-exhaustive): **Aesthetics**, **Anticipation**, **Autonomy**, **Color blindness**, **Consistency**, **Defaults**, **Discoverability**, **Efficiency of the user** (measure productivity of the *user*, not the computer), **Explorable interfaces**, **Fitts's Law**, **Human-interface objects**, **Latency reduction**, **Learnability**, **Metaphors**, **Protect users' work**, **Readability**, **Simplicity**, **State**, **Track state**, **Visible navigation**.

**Why a developer should care.** Two entries are unusually developer-shaped and appear nowhere else on this list: **"Protect users' work"** (never lose what a user has done, under any circumstance — an absolute, and a direct architecture requirement for autosave, drafts, and crash recovery) and **"Latency reduction"** (multi-threading and perceived-performance techniques to keep the interface responsive, predating the Doherty framing). **"Efficiency of the user"** is also a pointed reminder that a system optimized for machine throughput can be slower for the human.

**Sources.** https://asktog.com/atc/principles-of-interaction-design/ · https://www.designprinciplesftw.com/collections/first-principles-of-interaction-design · https://www.heurio.co/tognazzini-first-principles-of-interaction-design

### 7.4 Krug's Laws of Usability
**Origin & status.** Steve Krug, *Don't Make Me Think* (2000; 3rd ed. *Don't Make Me Think, Revisited*, 2014). Not academic, deliberately informal, and probably the single most-recommended UX book for developers because it is short and pragmatic.

- **Krug's First Law: "Don't make me think."** A page should be self-evident, obvious, self-explanatory — the user should get it without expending any conscious effort thinking about it. Every question mark a UI raises adds to cognitive workload.
- **Krug's Second Law: "It doesn't matter how many times I have to click, as long as each click is a mindless, unambiguous choice."** The direct rebuttal to the "three-click rule" — clarity beats click-count.
- **Krug's Third Law: "Get rid of half the words on each page, then get rid of half of what's left."** Ruthless reduction of instructional text and "happy talk."
- Related core observations: **users satisfice** (they don't choose the best option, they choose the first reasonable one), **users scan, they don't read**, and **users muddle through** — they form a workable-but-wrong model of a site and keep using it successfully enough never to correct it.

**Why a developer should care.** "Users muddle through" is the antidote to the developer assumption that users understand the system the way it was built. And the Second Law kills the most common bad metric in UI arguments.

**Sources.** https://en.wikipedia.org/wiki/Don%27t_Make_Me_Think · http://desource.uvu.edu/dgm/2740/IN/steinja/docs/krug-dont_make_me_think/ch01/krug-ch01.html

### 7.5 Heuristic Evaluation (the method attached to the principles)
**Definition.** A discount usability inspection method: evaluators independently inspect an interface against a heuristic list, then aggregate findings, typically rating each issue's severity (frequency × impact × persistence). Nielsen's guidance is that a **single evaluator finds only around a third of problems, and 3–5 evaluators is the cost-effective sweet spot**, since different evaluators find different issues. Independent-then-aggregate is essential — group inspection produces anchoring.

**Why a developer should care.** It's the one UX activity a developer can run alone, today, with no recruiting, no budget, and no participants. It doesn't replace usability testing (it finds *predicted* problems, not observed ones), but it's the cheapest possible quality gate and it makes the heuristics operational rather than decorative. Strong candidate for a hands-on course exercise.

**Sources.** https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/ · https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/ · https://blog.uxtweak.com/usability-heuristics/

---

## 8. Cross-Cutting Notes for the Synthesis Stage

These are observations about the *set*, flagged for whoever prioritizes the course. Minimal editorializing, but the overlaps are load-bearing for a "ruthlessly prioritized" syllabus.

1. **Heavy redundancy across frameworks.** Consistency, feedback/visibility, error prevention, reversibility, and memory load appear in Nielsen, Shneiderman, ISO 9241-110, and Tognazzini. A short course can teach the *concept* once and mention that four canonical lists all name it — that's a compression opportunity worth several lessons.
2. **A plausible irreducible core.** The concepts that appear in essentially every framework: (a) visibility/feedback of system state, (b) match to the user's model and vocabulary, (c) reversibility and user control, (d) consistency (internal + external), (e) error prevention over error messaging, (f) recognition over recall / memory-load reduction.
3. **Norman explains *why*; Nielsen tells you *what to check*.** Norman's gulfs and signifiers are the causal theory; Nielsen's 10 are the inspection checklist. Teaching Norman first makes Nielsen memorable rather than arbitrary.
4. **Gestalt is the only set that operates below conscious thought** and is therefore the highest-leverage material for developers who "aren't visual" — it converts layout from taste into rules with predictable perceptual outcomes.
5. **The "laws" vary enormously in evidential status.** Fitts's Law is a quantitative, replicated motor-control model. Hick's Law is real but applies to *simple* choice reaction and is routinely over-extrapolated. Miller's 7±2 is widely misapplied (the real unit is the chunk; practical capacity is closer to 4). Postel's Law is a contested engineering maxim borrowed by analogy. Pareto and Parkinson are aphorisms, not findings. A credible course should not present these as equally solid.
6. **Several laws are dual-use.** Zeigarnik, Goal-Gradient, Parkinson, and Peak–End are the engines behind both good onboarding and manipulative engagement mechanics. If the course covers them, the ethical boundary belongs adjacent to them, not in a separate module.
7. **Accessibility principles are not a separate topic from usability principles.** WCAG's Understandable principle restates Nielsen's consistency and error-message heuristics almost verbatim; Von Restorff carries a built-in "don't rely on color alone" caveat. Integrating POUR into the principles module (rather than bolting on an accessibility module) is supported by the source material itself.
8. **Developer-shaped entry points** — the principles that translate most directly into code decisions, worth over-weighting for this audience: Tesler's Law (where does complexity go), Norman's signifiers (why `<div onclick>` fails), Norman's gulfs (a two-question triage), Doherty Threshold (a performance budget with a human justification), Tognazzini's "Protect users' work," POUR's Operable (unplug the mouse), and Heuristic Evaluation (a solo, zero-budget practice).

---

## Sources consulted

### Primary / canonical sources cited (★ = attempted fetch, blocked by egress policy; all URLs unverified this session)

**Nielsen Norman Group** ★
- https://www.nngroup.com/articles/ten-usability-heuristics/
- https://www.nngroup.com/articles/visibility-system-status/
- https://www.nngroup.com/articles/match-system-real-world/
- https://www.nngroup.com/articles/user-control-and-freedom/
- https://www.nngroup.com/articles/consistency-and-standards/
- https://www.nngroup.com/articles/slips/
- https://www.nngroup.com/articles/recognition-and-recall/
- https://www.nngroup.com/articles/error-message-guidelines/
- https://www.nngroup.com/articles/progressive-disclosure/
- https://www.nngroup.com/articles/aesthetic-usability-effect/
- https://www.nngroup.com/articles/minimize-cognitive-load/
- https://www.nngroup.com/articles/gestalt-principles-visual-perception/
- https://www.nngroup.com/articles/design-principles-affordances-signifiers/
- https://www.nngroup.com/articles/paradox-of-the-active-user/
- https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/
- https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/

**Laws of UX** ★
- https://lawsofux.com/ (index)
- https://lawsofux.com/fittss-law/ · /hicks-law/ · /jakobs-law/ · /millers-law/ · /teslers-law/ · /doherty-threshold/ · /postels-law/ · /pareto-principle/ · /parkinsons-law/ · /occams-razor/ · /aesthetic-usability-effect/ · /goal-gradient-effect/
- https://lawsofux.com/law-of-proximity/ · /law-of-similarity/ · /law-of-common-region/ · /law-of-uniform-connectedness/ · /law-of-prägnanz/
- https://lawsofux.com/peak-end-rule/ · /serial-position-effect/ · /von-restorff-effect/ · /zeigarnik-effect/
- https://lawsofux.com/chunking/ · /cognitive-load/ · /flow/ · /mental-model/ · /selective-attention/
- https://jonyablonski.com/work/laws-of-ux/
- https://www.oreilly.com/library/view/laws-of-ux/9781492055303/ch09.html

**W3C / WCAG** ★
- https://www.w3.org/WAI/fundamentals/accessibility-principles/
- https://www.w3.org/TR/WCAG21/
- https://www.w3.org/WAI/WCAG22/Understanding/intro
- https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html

**ISO**
- https://www.iso.org/standard/75258.html (9241-110:2020)
- https://www.iso.org/standard/38009.html (9241-110:2006)
- https://www.iso.org/obp/ui/#iso:std:iso:9241:-110:ed-2:v1:en

**Other primary**
- https://www.cs.umd.edu/~ben/goldenrules.html (Shneiderman)
- https://asktog.com/atc/principles-of-interaction-design/ (Tognazzini)
- https://media.aanda.psu.edu/sites/media/aa/files/documents/norman_design-of-everyday-things.pdf (Norman, full text)
- https://dl.icdst.org/pdfs/files4/4bb8d08a9b309df7d86e62ec4056ceef.pdf (Norman, alternate copy)
- http://desource.uvu.edu/dgm/2740/IN/steinja/docs/krug-dont_make_me_think/ch01/krug-ch01.html (Krug, ch.1 excerpt)

### Secondary sources surfaced and used for corroboration via web search

**Nielsen's heuristics**
- https://blog-ux.com/en/jakob-nielsen-s-10-usability-heuristics/
- https://www.testdevlab.com/blog/nielsens-usability-heuristics-10-principles
- https://www.teacuplab.com/blog/nielsen-10-heuristics-explained-examples/
- https://heurilens.com/blog/nielsens-heuristics/nielsens-10-heuristics-real-website-examples
- https://ux247.com/usability-principles/
- https://thedecisionlab.com/reference-guide/design/nielsens-heuristics
- https://www.uxness.in/2015/02/10-heuristic-principles-jakob-nielsens.html
- https://yukaichou.com/gamification-analysis/nielsen-ten-usability-heuristics-interface-design/
- https://helio.zurb.com/ux-research/laws-of-ux/nielsens-heuristics/
- https://blog.uxtweak.com/usability-heuristics/
- https://jakobnielsenphd.substack.com/p/heuristics-infographics
- https://myuxacademy.com/blog/nielsens-10-usability-heuristics/
- https://midrocket.com/en/guides/nielsen-heuristics-usability/
- https://euleinstitute.com/en/blog/nielsen-usability-heuristics/
- https://designthinkerlabs.com/guides/usability-heuristics.html

**Laws of UX roundups (useful for enumeration and count discrepancies)**
- https://www.uxdesigninstitute.com/blog/laws-of-ux/ (21 laws)
- https://blog.uxtweak.com/ux-laws-and-principles/ (23 laws)
- https://nulab.com/learn/design-and-ux/laws-of-ux/ (28 rules)
- https://www.uxness.in/2024/03/12-laws-of-ux-designing-with-principles.html (31 laws)
- https://www.looppanel.com/blog/laws-of-ux
- https://maze.co/collections/ux-ui-design/ux-laws/
- https://www.parallelhq.com/blog/ux-laws-design-principles
- https://www.uxtoast.com/ux-laws/
- https://www.heurio.co/laws-of-ux-yablonski
- https://hugo.ferreira.cc/lawsofux/
- https://mockflow.com/blog/top-laws-of-ux-for-ui-ux-designers
- https://www.banani.co/blog/laws-of-ux-design
- https://uxplanet.org/list-of-ux-laws-example-of-use-bf1229021d14
- https://blog.uxfol.io/ux-laws/
- https://sdh.global/blog/design/psychology-in-interface-design-20-laws-of-ux/
- https://qualaroo.com/blog/rules-for-ux-beginners/
- https://www.become.team/blogs/the-psychology-behind-ux-design-the-21-laws-every-ux-designer-should-know
- https://trymata.com/blog/ux-laws-and-principles/
- https://myuxacademy.com/blog/ux-design-laws-principles/
- https://www.cursorup.com/blog/laws-of-ux

**Individual laws**
- https://blog.uxtweak.com/doherty-threshold/ · https://www.usably.studio/journal/the-doherty-threshold-in-ux-design · https://www.uxtoast.com/ux-laws/doherty-threshold
- https://en.wikipedia.org/wiki/Law_of_conservation_of_complexity · https://blog.logrocket.com/ux-design/teslers-law-in-ux/ · https://helio.app/ux-research/laws-of-ux/teslers-law/ · https://www.everydayux.net/teslers-law-managing-complexity/ · https://www.geeksforgeeks.org/websites-apps/teslers-law-in-ux-design/
- https://www.codecademy.com/resources/docs/uiux/ux-psychology/postels-law · https://www.geeksforgeeks.org/postels-law-in-ux-design/ · https://www.grupomenta.com/blog/the-robustness-principle-how-postels-law-applies-to-ux-ui-design-and-development · https://www.cerridan.com/postels-law/
- https://blog.uxtweak.com/millers-law/ · https://www.cobeisfresh.com/blog/managing-information-overload-in-ux-design-millers-law
- https://blog.uxtweak.com/jacobs-law/
- https://monsoonfish.com/cognilense/peak-end-rule/ · https://monsoonfish.com/cognilense/aesthetic-usability-effect/
- https://ux.productdesignreference.com/cognitive-tools/ux-laws-principles/behaviour/parkinsons-law

**Gestalt**
- https://www.interaction-design.org/literature/topics/gestalt-principles
- https://en.wikipedia.org/wiki/Principles_of_grouping
- https://www.toptal.com/designers/ui/gestalt-principles-of-design
- https://www.superside.com/blog/gestalt-principles-of-design
- https://www.netguru.com/blog/gestalt-principles-of-design
- https://www.lyssna.com/blog/gestalt-design-principles/
- https://www.optimalworkshop.com/blog/understanding-the-gestalt-principles-of-perception-for-ux
- https://www.usertesting.com/blog/gestalt-principles
- https://www.gestaltprinciples.com/
- https://ixdf.org/literature/topics/law-of-uniform-connectedness · https://ixdf.org/literature/topics/law-of-proximity · https://ixdf.org/literature/article/laws-of-proximity-uniform-connectedness-and-continuation-gestalt-principles-2
- https://opencourse.inf.ed.ac.uk/sites/default/files/https/opencourse.inf.ed.ac.uk/hci/2023/hci-2020-gestalt-principles.pdf

**Norman**
- https://en.wikipedia.org/wiki/Seven_stages_of_action
- https://www.simonwhatley.co.uk/writing/human-action-cycle-don-norman/
- https://uxmag.com/articles/understanding-don-normans-principles-of-interaction
- https://gillnewmanux.wordpress.com/2016/12/06/don-normans-gulfs-of-execution-and-evaluation/
- https://foundationsofhci.wordpress.com/module-2/
- https://figr.design/blog/the-design-of-everyday-things
- https://scottburleson.substack.com/p/book-summary-the-design-of-everyday
- https://uxdesign.cc/ux-psychology-principles-seven-important-questions-960579272880

**Cognitive load**
- https://www.aufaitux.com/blog/cognitive-load-theory-ui-design/
- https://mailchimp.com/resources/cognitive-overload/
- https://www.ijraset.com/research-paper/reducing-cognitive-load-in-ui-design
- https://www.zigpoll.com/content/how-can-psychological-principles-of-cognitive-load-theory-be-applied-to-improve-user-interface-design-and-enhance-user-engagement
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9406012/

**Accessibility**
- https://reciteme.com/us/news/pour-accessibility-principles/
- https://www.webyes.com/blogs/wcag-pour-principles-accessibility/
- https://accessibility.umich.edu/basics/concepts-principles/pour
- https://www.wcag.com/resource/what-is-wcag/
- https://guides.cuny.edu/accessibility/whyitmatters
- https://learn.microsoft.com/en-ie/training/modules/web-accessibility-principles-guidelines/3-principles-of-accessibility-and-levels-of-conformance

**Other frameworks**
- https://www.uxmatters.com/mt/archives/2022/10/applying-the-8-golden-rules-of-user-interface-design.php
- https://www.geeksforgeeks.org/software-engineering/ben-shneiderman-eight-golden-rules-of-interface-design-human-computer-interaction/
- https://capian.co/shneiderman-eight-golden-rules-interface-design
- https://figr.design/blog/eight-golden-rules-interface-design-understanding
- https://lollypop.design/blog/2025/february/8-golden-rules-of-interface-design/
- https://www.usability.de/en/usability-user-experience/glossary/dialogue-principles.html
- https://userpeek.com/blog/iso-9241-110-ergonomics-of-human-system-interaction-part-110-interaction-principles/
- https://www.dialogdesign.dk/isos-dialogue-principles-2019/
- https://www.heurio.co/iso-9241-part-110-dialogue-principles
- https://www.softwareevaluation.de/en/foundations/iso-9241-110-dialog-principles/
- https://www.designprinciplesftw.com/collections/first-principles-of-interaction-design
- https://www.heurio.co/tognazzini-first-principles-of-interaction-design
- https://yozucreative.com/insights/tognazzinis-principles-of-interaction-design/
- https://faculty.kutztown.edu/rieksts/385/topics/hci/tog-summary.html
- https://en.wikipedia.org/wiki/Don%27t_Make_Me_Think

### Search queries run (16)
`Nielsen 10 usability heuristics list definitions examples` · `lawsofux.com complete list of all laws heuristics principles` · `Nielsen heuristic "visibility of system status" ... "consistency and standards"` · `Yablonski laws of UX list "Fitts's Law" ... "Goal-Gradient"` · `Gestalt principles design proximity similarity closure continuity common region figure ground common fate` · `Don Norman Design of Everyday Things affordances signifiers mapping feedback constraints conceptual model gulfs seven stages` · `Shneiderman eight golden rules of interface design list` · `cognitive load theory UI design intrinsic extraneous germane` · `WCAG POUR principles perceivable operable understandable robust definition` · `"Doherty Threshold" 400ms "Tesler's Law" "Postel's Law"` · `"Peak-End Rule" "Aesthetic-Usability Effect" "Von Restorff" "Zeigarnik" "Goal-Gradient" "Serial Position"` · `uxtweak 23 UX laws and principles` · `ISO 9241-110 dialogue principles seven interaction principles` · `Don Norman seven stages of action gulf of execution gulf of evaluation` · `Fitts's Law Hick's Law Miller's Law Jakob's Law definition implication examples` · `"Parkinson's Law" "Pareto Principle" "Occam's Razor" "Selective Attention" "Paradox of the Active User"` · `Tognazzini first principles of interaction design Krug don't make me think` · `nulab laws of UX 28 simple rules` · `laws of UX "Chunking" "Flow" "Mental Model" "Cognitive Load"` · `"Law of Prägnanz" "Law of Uniform Connectedness" "Law of Common Region" gestalt`
