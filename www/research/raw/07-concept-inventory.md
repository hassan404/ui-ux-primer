# 07 — Concept & Terminology Inventory

**Scope of this document.** This is the vocabulary inventory for the UI/UX fundamentals course: a deduplicated master list of the *terms* a software developer will encounter in UX/UI writing, design reviews, design-system docs, research readouts, and accessibility audits. Each entry gets a one-sentence plain-English definition (rewritten, not copy-pasted, and deliberately not defined using other jargon) plus an importance tag for a developer audience.

**This document defines. It does not explain.** Deep treatment of principles, visual rules, and interaction patterns belongs to other agents' files. Where a term needs a whole lesson, the definition here is deliberately a stub — the entry exists so the course has a complete concept checklist to prioritize against.

**Importance tag legend (for a *developer* audience, not a designer audience):**

- `[core]` — Must know. A developer who doesn't know this will misread design feedback, ship a defect, or fail a review. These should be non-negotiable course content or explicit prerequisites.
- `[useful]` — Worth a sentence or a footnote. Comes up often enough that recognizing the word saves confusion, but a developer can function without deep understanding.
- `[fringe]` — Fine to skip. Real vocabulary in the field, included here for completeness so the course can *consciously* cut it rather than forget it. Many of these are designer-guild or research-specialist terms.

**Counts:** ~290 terms across 15 thematic groups. Related terms are grouped adjacently (e.g. affordance/signifier, i18n/l10n, responsive/adaptive) so the course can teach them as pairs.

---

## 1. Foundations & Framing

- **User experience (UX)** — Everything a person encounters while dealing with a product or company, not just the screens. `[core]`
- **User interface (UI)** — The specific surface a person touches, sees, or hears in order to operate a system. `[core]`
- **UX vs. UI** — UX is the whole felt journey and whether it works; UI is the concrete controls and visuals that journey runs through. `[core]`
- **Usability** — How easily and reliably a person can accomplish what they came to do. `[core]`
- **Utility** — Whether the product can do the thing the person needs at all (separate from whether it's easy). `[core]`
- **Usefulness** — Utility and usability together; a thing that both does the job and can be operated. `[useful]`
- **Desirability** — Whether people actually want the thing, beyond it merely working. `[useful]`
- **Human-computer interaction (HCI)** — The academic field studying how people and computers deal with each other; UX is its commercial descendant. `[useful]`
- **Interaction design (IxD)** — Designing what happens when a person acts and how the system responds. `[core]`
- **Human factors / ergonomics** — The older engineering discipline of fitting machines to human bodies and limits. `[fringe]`
- **User-centered design (UCD)** — A working method where real user needs and real user feedback drive decisions at every stage. `[core]`
- **Human-centered design (HCD)** — Same idea as UCD, framed more broadly around people and context rather than "users of a product." `[useful]`
- **Participatory design / co-design** — Involving the people who'll use the thing as actual contributors to designing it, not just as test subjects. `[fringe]`
- **Service design** — Designing the whole end-to-end service including staff, back-office steps, and non-digital touchpoints. `[fringe]`
- **Product design** — In industry usage, a designer role covering research, interaction, and visual work for a product. `[useful]`
- **Industrial design** — Designing physical objects; the ancestor of much UX vocabulary (Norman's examples are doors and stoves). `[fringe]`
- **Touchpoint** — Any single moment of contact between a person and the product or company. `[useful]`
- **Channel** — The medium a touchpoint happens through (web, native app, email, phone support). `[useful]`
- **Omnichannel** — Designing so a person can move between channels without losing context or repeating themselves. `[fringe]`
- **User** — The person operating the system; often criticized as a dehumanizing word but universally used. `[core]`
- **End user vs. buyer** — The person who uses the software is frequently not the person who chose or paid for it, which distorts what gets built. `[useful]`
- **Stakeholder** — Anyone with authority or interest over the product who isn't the user (execs, legal, support, sales). `[core]`
- **Context of use** — The environment, device, time pressure, and mental state a person is in when using the thing. `[core]`
- **User goal vs. task vs. action** — The outcome a person wants, the chunk of work to get there, and the individual click/keystroke, respectively. `[core]`

## 2. Perception, Cognition & Human Limits

- **Mental model** — What a person *believes* about how your system works, which is usually not how it actually works. `[core]`
- **Conceptual model** — The story the design tells about how the system works, deliberately designed to shape the user's mental model. `[useful]`
- **Implementation model** — Exposing the internal/database structure directly in the UI, usually producing something users find bizarre. `[core]`
- **Gulf of execution** — The gap between what a person wants to do and figuring out how to tell the system to do it. `[useful]`
- **Gulf of evaluation** — The gap between the system changing state and the person understanding that it did. `[useful]`
- **Affordance** — A property of a thing that makes a particular action possible (a button *can* be pressed). `[core]`
- **Perceived affordance** — What the person thinks they can do with it, which is what actually matters in software. `[core]`
- **Signifier** — The visible clue that advertises an affordance (underline says "link", shadow says "pressable"). `[core]`
- **Feedback** — The system visibly confirming that it registered an action and what happened as a result. `[core]`
- **Feedforward** — Telling the person what will happen *before* they commit to an action. `[useful]`
- **Mapping** — How well the arrangement of controls corresponds to the arrangement of the things they control. `[useful]`
- **Constraint** — Deliberately preventing invalid actions so a person can't get into a broken state. `[core]`
- **Cognitive load** — How much mental effort your interface demands at once; working memory is small and easily blown. `[core]`
- **Intrinsic / extraneous / germane load** — Load from the task's inherent difficulty, from bad presentation, and from actual learning, respectively. `[fringe]`
- **Working memory** — The tiny, fast-decaying scratchpad people hold current information in. `[useful]`
- **Recognition over recall** — Showing options is far easier for people than making them remember and retype them. `[core]`
- **Chunking** — Grouping information into a few meaningful units so it fits in working memory. `[useful]`
- **Cognitive bias** — Systematic ways human judgment predictably deviates from logic. `[useful]`
- **Satisficing** — People pick the first option that looks good enough rather than reading everything and optimizing. `[core]`
- **Information scent** — The cues (link text, labels) that tell someone whether a path leads toward what they want. `[useful]`
- **Banner blindness** — People automatically ignore anything shaped or placed like an advertisement, including your real content. `[useful]`
- **Change blindness** — People often fail to notice a change on screen if it isn't announced or animated into their attention. `[useful]`
- **Inattentional blindness** — Focused people miss obvious things outside the thing they're focused on. `[fringe]`
- **F-pattern** — The common eye-tracking scan shape on text-heavy pages: heavy on the first lines and left edge, thinning downward. `[useful]`
- **Z-pattern / Gutenberg diagram** — Predicted scan paths across sparse, image-led layouts. `[fringe]`
- **Selective attention** — People only consciously process a small slice of what's on screen at any moment. `[useful]`
- **Habituation** — Repeated exposure makes people stop noticing a signal, which is why every-time warnings stop working. `[useful]`
- **Muscle memory / motor memory** — Learned physical action sequences that make moving a button expensive for existing users. `[useful]`
- **Flow (state)** — Sustained absorbed concentration that interruptions destroy. `[fringe]`
- **Priming** — Earlier exposure to something changes how a person interprets what comes next. `[fringe]`
- **Anchoring** — The first number or option seen skews all subsequent judgments. `[useful]`
- **Decision fatigue** — Quality of choices degrades as the number of choices made increases. `[fringe]`
- **Choice overload / paradox of choice** — Too many options makes people slower, less satisfied, or unwilling to choose at all. `[useful]`
- **Perceived performance** — How fast something *feels*, which is manipulable independently of actual latency. `[core]`
- **Progressive/perceived responsiveness** — Showing partial results or immediate acknowledgment so waiting feels shorter. `[core]`

## 3. Named Laws & Effects

- **Nielsen's usability heuristics** — Ten general rules of thumb for spotting interface problems without running a study. `[core]`
- **Fitts's law** — Small and far-away targets take longer to hit, so make important controls big and close. `[core]`
- **Hick's law** — More options means a longer decision, so trim or group choices. `[core]`
- **Jakob's law** — People expect your product to work like the other products they already use. `[core]`
- **Miller's law** — Working memory holds roughly a handful of items (the famous "7±2", widely over-applied). `[useful]`
- **Tesler's law / conservation of complexity** — Some complexity is irreducible; the only question is whether the user or the system absorbs it. `[core]`
- **Postel's law / robustness principle** — Accept sloppy input generously, emit strict and predictable output. `[core]`
- **Doherty threshold** — Responses under roughly 400ms keep people engaged; slower and attention drifts. `[useful]`
- **Aesthetic-usability effect** — People judge attractive interfaces as more usable and forgive their flaws. `[core]`
- **Von Restorff effect (isolation effect)** — The one item that looks different is the one people remember. `[useful]`
- **Serial position effect** — People best remember the first and last items in a list. `[useful]`
- **Peak-end rule** — People judge an experience by its most intense moment and its ending, not its average. `[useful]`
- **Zeigarnik effect** — Unfinished tasks nag at people, which is why progress bars and incomplete checklists pull. `[fringe]`
- **Goal-gradient effect** — Motivation rises the closer a person feels to finishing. `[fringe]`
- **Occam's razor (design usage)** — Prefer the simplest design that satisfies the requirement. `[useful]`
- **Pareto principle (80/20)** — A small subset of features or paths accounts for most real usage. `[useful]`
- **Parkinson's law (design usage)** — Work expands to fill whatever time is allotted, so timebox design work. `[fringe]`
- **Law of proximity / similarity / closure / continuity / common region** — Gestalt grouping rules: people read things as related when they're near, alike, enclosed, aligned, or boxed together. `[core]`
- **Figure-ground** — People automatically separate a scene into a foreground object and a background. `[useful]`
- **Law of Prägnanz / simplicity** — People interpret ambiguous visuals in the simplest way available. `[fringe]`
- **Uniform connectedness** — Elements joined by a line or shared container are read as one unit. `[fringe]`
- **Mere-exposure effect** — Familiarity alone increases preference. `[fringe]`
- **Hawthorne effect** — People behave differently because they're being observed, which contaminates usability tests. `[useful]`
- **Novelty effect** — A new UI produces a temporary metric bump that fades, faking a win in A/B tests. `[core]`

## 4. Usability Principles & Evaluation Vocabulary

- **Heuristic evaluation** — An expert walks the interface against a checklist of usability rules and lists violations. `[core]`
- **Cognitive walkthrough** — Stepping through a task asking, at each step, whether a first-time user would know what to do. `[useful]`
- **Expert review / design audit** — Any structured critique of an existing product by someone experienced, without users present. `[useful]`
- **Visibility of system status** — Always show what the system is doing right now. `[core]`
- **Match between system and real world** — Use the words and concepts the user already has, not internal engineering names. `[core]`
- **User control and freedom** — Always give a way out: cancel, back, undo. `[core]`
- **Consistency and standards** — Same thing should look and behave the same way, inside your product and against platform norms. `[core]`
- **Internal vs. external consistency** — Consistency with the rest of your own product vs. with the wider world's conventions. `[useful]`
- **Error prevention** — Design so the mistake can't happen, rather than reporting it afterward. `[core]`
- **Slips vs. mistakes** — A slip is doing the right plan wrong; a mistake is executing a wrong plan correctly; they need different fixes. `[useful]`
- **Error recovery / forgiveness** — Make every error cheap to reverse. `[core]`
- **Undo / redo** — Reversal of a completed action, the single strongest safety net in an interface. `[core]`
- **Confirmation dialog** — Asking "are you sure?" before a costly action; often a weaker substitute for undo. `[core]`
- **Destructive action** — Any action that loses data or money and therefore needs guarding or reversing. `[core]`
- **Flexibility and efficiency of use** — Provide accelerators for experts without burdening beginners. `[useful]`
- **Aesthetic and minimalist design** — Every extra element competes with the important ones for attention. `[core]`
- **Help and documentation** — Findable, task-shaped help for when the interface alone isn't enough. `[useful]`
- **Discoverability** — Whether a person can find a feature without being told it exists. `[core]`
- **Learnability** — How quickly a first-timer gets competent. `[core]`
- **Memorability** — How well someone returning after a gap still knows how to work it. `[useful]`
- **Efficiency** — How fast a proficient person gets through the task. `[core]`
- **Error rate** — How often people do the wrong thing and how bad it is when they do. `[core]`
- **Satisfaction** — How pleasant people report the experience being. `[useful]`
- **Progressive disclosure** — Show the common controls first and reveal advanced ones on demand. `[core]`
- **Deferred / staged disclosure** — Splitting a big task across steps so each screen is small. `[useful]`
- **Sensible defaults** — Preselecting the option most people want so most people don't have to choose. `[core]`
- **Forgiving format** — Accepting input in whatever shape the user typed it and normalizing behind the scenes. `[core]`
- **Recovery vs. prevention tradeoff** — Deciding whether to block a bad action or allow-and-undo it. `[useful]`
- **Accessibility-usability distinction** — Accessibility is whether people with disabilities can use it at all; usability is how well anyone can. `[core]`
- **Red route** — The handful of journeys that matter most and must never break. `[useful]`
- **Happy path / unhappy path** — The intended flawless flow vs. everything that happens when something goes wrong. `[core]`
- **Edge case vs. stress case** — A rare input vs. a moment when a real person is in a bad situation and the UI must not make it worse. `[core]`

## 5. Information Architecture, Navigation & Findability

- **Information architecture (IA)** — How content and features are organized, labeled, and related so people can find them. `[core]`
- **Taxonomy** — The named category structure content is filed into. `[useful]`
- **Ontology** — The definitions and relationships between concepts underlying that structure. `[fringe]`
- **Controlled vocabulary** — An agreed fixed set of terms so the same thing is always called the same thing. `[useful]`
- **Metadata** — Structured facts attached to content that make it filterable and findable. `[useful]`
- **Labeling** — Choosing the words on nav items, buttons, and headings; usually the highest-leverage IA work. `[core]`
- **Findability** — Whether people can locate a specific thing they know exists. `[core]`
- **Wayfinding** — Whether people know where they are, where they've been, and how to get elsewhere. `[useful]`
- **Navigation** — The controls that move a person around the product's structure. `[core]`
- **Global / primary navigation** — The persistent top-level menu present everywhere. `[core]`
- **Local / secondary navigation** — Section-specific navigation nested under a global area. `[useful]`
- **Utility navigation** — The small links for account, settings, help, sign-out. `[useful]`
- **Breadcrumb** — A trail showing the current page's position in the hierarchy. `[useful]`
- **Sitemap** — A diagram of the whole structure of pages/screens and their hierarchy. `[useful]`
- **Faceted navigation / faceted search** — Filtering a result set along several independent attributes at once. `[useful]`
- **Filter vs. sort** — Removing non-matching items vs. reordering the same items. `[core]`
- **Search vs. browse** — Typing a query vs. clicking down through structure; products need both. `[core]`
- **Zero-results state** — What search shows when nothing matches, and the recovery it offers. `[core]`
- **Mega menu** — A large multi-column dropdown showing many destinations at once. `[fringe]`
- **Hub and spoke** — A structure where users return to a central screen between tasks, common on mobile. `[fringe]`
- **Flat vs. deep hierarchy** — Many options per level vs. many levels with few options each. `[useful]`
- **Polyhierarchy** — Content that legitimately lives in more than one category. `[fringe]`
- **Card sorting** — Asking people to group and name content items to learn how *they* think it should be organized. `[useful]`
- **Open vs. closed card sort** — Participants invent the category names vs. sort into names you supply. `[useful]`
- **Tree testing (reverse card sort)** — Testing whether people can find things in a proposed structure, with no visual design present. `[useful]`
- **Content inventory / audit** — Enumerating and assessing everything that currently exists before restructuring. `[fringe]`

## 6. Interaction & UI Pattern Vocabulary

*(Names only — pattern behavior and when-to-use belongs to another agent's file.)*

- **Component** — A reusable, self-contained piece of interface with defined behavior. `[core]`
- **Control / widget** — Any single interactive element such as a button, input, or toggle. `[core]`
- **Element vs. component vs. pattern** — A primitive, a composed reusable unit, and a recurring solution shape, respectively. `[useful]`
- **State** — The current condition of a component: default, hover, focus, active, disabled, loading, error, selected. `[core]`
- **Hover / focus / active / disabled / read-only** — The standard interactive states every component needs designed and implemented. `[core]`
- **Empty state** — What a screen shows when there's no data yet, and how it teaches the next action. `[core]`
- **Loading state** — What's on screen while data is in flight. `[core]`
- **Skeleton screen** — Grey placeholder shapes in the layout's real positions while content loads. `[core]`
- **Spinner / progress indicator** — Indeterminate vs. determinate signals that work is happening. `[core]`
- **Error state** — What's on screen when something failed, and what the person can do about it. `[core]`
- **Success / confirmation state** — Visible proof that the thing the person did actually worked. `[core]`
- **Optimistic UI** — Showing the successful result immediately and reconciling if the server disagrees. `[core]`
- **Modal vs. modeless** — A blocking overlay that must be dealt with vs. a panel you can ignore and work around. `[core]`
- **Dialog** — A focused window asking for a decision or a small piece of input. `[core]`
- **Drawer / sheet** — A panel that slides in from an edge over the current screen. `[useful]`
- **Popover / tooltip** — A small floating panel anchored to an element, interactive vs. purely informational. `[useful]`
- **Toast / snackbar** — A brief self-dismissing message confirming something happened. `[core]`
- **Banner / inline message** — A persistent in-page notice tied to a region rather than floating. `[useful]`
- **Notification vs. alert** — Informational push vs. something demanding attention now. `[useful]`
- **Accordion** — Stacked sections that expand one at a time to save vertical space. `[useful]`
- **Tabs** — Parallel sibling views in the same space, only one visible at a time. `[useful]`
- **Stepper / wizard** — Splitting a long process into ordered numbered steps. `[useful]`
- **Pagination vs. infinite scroll vs. load more** — Three ways to reveal a long list, with very different findability and footer consequences. `[core]`
- **Master-detail / list-detail** — A list on one side, the selected item's detail on the other. `[useful]`
- **Data table** — Structured rows and columns with sorting, selection, and density concerns. `[core]`
- **Form** — A set of inputs collecting structured data, the highest-defect-density UI in most products. `[core]`
- **Label vs. placeholder vs. helper text** — The permanent field name, the disappearing example, and the persistent supporting hint. `[core]`
- **Inline validation** — Checking and reporting a field's validity as the person works, rather than only on submit. `[core]`
- **Input masking** — Formatting what the person types as they type it. `[useful]`
- **Autocomplete / typeahead** — Suggesting completions as the person types. `[useful]`
- **Autosave** — Persisting work continuously so nothing is lost. `[core]`
- **Call to action (CTA)** — The primary thing you want the person to click on a screen. `[core]`
- **Primary / secondary / tertiary action** — The visual ranking of buttons so the main path is obvious. `[core]`
- **Affordance states of buttons** — Whether a button looks pressable, is currently pressable, and is currently working. `[core]`
- **Touch target / hit area** — The clickable region, which must be bigger than the icon drawn inside it. `[core]`
- **Gesture** — Touch inputs like swipe, pinch, long-press that have no visible signifier and must be taught. `[useful]`
- **Drag and drop** — Direct manipulation by picking up and moving, with heavy accessibility obligations. `[useful]`
- **Direct manipulation** — Acting on the on-screen object itself instead of via a separate control. `[useful]`
- **Microinteraction** — A tiny self-contained moment of feedback: a toggle animating, a heart filling. `[useful]`
- **Animation / transition / easing** — Motion used to explain what changed and where things went. `[useful]`
- **Onboarding** — The first-run experience that gets someone from zero to first success. `[core]`
- **Coach mark / product tour** — Overlaid instructional callouts pointing at UI elements. `[useful]`
- **Above the fold** — The part visible without scrolling; still meaningful, no longer sacred. `[useful]`
- **Sticky / persistent element** — A header, toolbar, or action bar that stays put while content scrolls. `[useful]`
- **Command palette** — A keyboard-invoked searchable list of every action, an expert accelerator. `[useful]`
- **Keyboard shortcut / accelerator** — A key combination that skips navigation for frequent actions. `[useful]`
- **Bulk action / multi-select** — Applying one operation to many selected items. `[useful]`
- **Contextual menu** — Actions revealed on right-click or an overflow control, scoped to one object. `[useful]`
- **Overflow menu ("kebab"/"meatball")** — The three-dot control hiding secondary actions. `[useful]`
- **Nudge / empty-state prompt** — In-product messaging steering someone toward a next step. `[fringe]`

## 7. Visual Design, Layout & Typography

- **Visual hierarchy** — Arranging things so the eye is told, without words, what matters most. `[core]`
- **Emphasis** — Making one element clearly dominant through size, weight, color, or isolation. `[core]`
- **Whitespace / negative space** — Empty area used deliberately to group, separate, and emphasize. `[core]`
- **Macro vs. micro whitespace** — Space between big blocks vs. between letters and lines. `[fringe]`
- **Alignment** — Sharing edges or centers so elements read as ordered rather than scattered. `[core]`
- **Grid** — An invisible column-and-row framework that positions everything consistently. `[core]`
- **Column / gutter / margin** — The content strips, the gap between them, and the outer breathing room. `[useful]`
- **Spacing scale** — A restricted set of allowed gap sizes so spacing is consistent by construction. `[core]`
- **8-point grid** — The common convention of using multiples of 8 (and 4) for all spacing and sizing. `[core]`
- **Density** — How much information is packed into a given area; comfortable vs. compact modes. `[useful]`
- **Balance (symmetric/asymmetric)** — Whether visual weight is evenly distributed across a layout. `[fringe]`
- **Rhythm / repetition** — Repeating spacing and shapes so a page feels intentional. `[useful]`
- **Proportion / scale** — The relative sizes of elements and the ratios between them. `[useful]`
- **Contrast** — Difference in size, weight, or color that makes something distinguishable. `[core]`
- **Typography** — The craft of setting text so it's readable and correctly ranked. `[core]`
- **Typeface vs. font** — The design of a set of letterforms vs. a specific weight/size instance of it. `[useful]`
- **Serif / sans-serif / monospace** — The three families developers actually pick between. `[useful]`
- **Weight** — The thickness of the strokes, the cheapest way to create hierarchy. `[core]`
- **Type scale** — A fixed ladder of allowed text sizes, usually ratio-based. `[core]`
- **Leading / line-height** — Vertical space between lines of text. `[core]`
- **Tracking / letter-spacing** — Uniform space added between all characters. `[useful]`
- **Kerning** — Space adjustment between two specific characters. `[fringe]`
- **Measure / line length** — How many characters fit per line, with roughly 45–75 being comfortable. `[core]`
- **x-height / cap height / baseline / ascender / descender** — The anatomy terms that explain why two fonts at the same size look different. `[fringe]`
- **Widow / orphan** — A stranded single line or word at a column break. `[fringe]`
- **Truncation vs. wrapping** — Cutting text with an ellipsis vs. letting it flow onto more lines. `[core]`
- **Readability vs. legibility** — Whether a body of text is comfortable to read through vs. whether individual characters are distinguishable. `[useful]`
- **Color theory** — The framework for choosing colors that work together. `[useful]`
- **Hue / saturation / lightness (HSL)** — The three dials that make reasoning about color adjustments tractable. `[useful]`
- **Palette** — The restricted set of colors a product is allowed to use. `[core]`
- **Semantic color** — Color assigned a meaning (danger, success, warning) rather than a look. `[core]`
- **Brand color vs. UI color** — Marketing identity colors vs. the functional greys and states an interface needs. `[useful]`
- **Contrast ratio** — The measured luminance difference between text and its background. `[core]`
- **Color blindness / color-safe design** — Never encoding meaning in hue alone, since many people can't distinguish it. `[core]`
- **Elevation / shadow / depth** — Simulated layering that communicates what floats above what. `[useful]`
- **Border radius** — Corner rounding, a small but pervasive brand and system consistency decision. `[useful]`
- **Iconography** — The system of icons and the rule that icons alone rarely communicate reliably. `[core]`
- **Icon + label** — Pairing icons with text because unlabeled icons are routinely misread. `[core]`
- **Skeuomorphism / flat design / neumorphism / material** — Successive visual style eras, mostly worth knowing as vocabulary. `[fringe]`
- **Dark mode** — A low-light theme that is a color-system problem, not an inverted-colors problem. `[core]`
- **Responsive design** — One layout that fluidly adapts to any viewport size. `[core]`
- **Adaptive design** — Distinct fixed layouts swapped at set breakpoints. `[useful]`
- **Breakpoint** — The viewport width at which layout rules change. `[core]`
- **Mobile-first** — Designing the small-screen version first and enhancing upward. `[core]`
- **Fluid vs. fixed layout** — Sizing in proportions that stretch vs. absolute pixel widths. `[useful]`
- **Content-out vs. canvas-in** — Letting real content determine the layout vs. drawing a frame and pouring content in. `[fringe]`
- **Zoom and reflow** — Content must remain usable when magnified, without horizontal scrolling. `[core]`
- **Safe area / notch** — Device screen regions obscured by hardware that layouts must avoid. `[useful]`
- **Visual weight** — How much attention an element commands regardless of its literal size. `[useful]`
- **Squint test** — Blurring your eyes at a design to check whether the hierarchy survives. `[useful]`

## 8. Content, Language & Localization

- **UX writing** — Writing the words inside the interface so people can act correctly. `[core]`
- **Microcopy** — The small strings — button labels, hints, errors, empty states — that carry disproportionate weight. `[core]`
- **Content design** — Treating the words as a designed system, not decoration added at the end. `[useful]`
- **Content strategy** — Planning what content exists, who owns it, and how it's maintained over time. `[fringe]`
- **Voice and tone** — Voice is the constant personality; tone is how it shifts by situation. `[useful]`
- **Plain language** — Writing at the simplest level that still says the thing accurately. `[core]`
- **Readability score** — A rough numeric estimate of reading difficulty (Flesch-Kincaid and friends). `[fringe]`
- **Sentence case vs. title case** — Capitalizing like a sentence vs. capitalizing most words; pick one and enforce it. `[useful]`
- **Actionable error message** — An error that says what happened, why, and exactly what to do next. `[core]`
- **Blame-free language** — Wording failures so the person isn't accused of being wrong. `[core]`
- **Terminology consistency** — One concept, one word, everywhere, including in the code and the docs. `[core]`
- **Front-loading** — Putting the most distinguishing words at the start of a label or link. `[useful]`
- **Scannability** — Formatting so people who skim still extract the point. `[core]`
- **Internationalization (i18n)** — Building the product so it *can* be adapted to other languages and regions. `[core]`
- **Localization (l10n)** — Actually adapting it: translation plus currency, dates, formats, and norms. `[core]`
- **Pseudolocalization** — Faking a long, accented translation to shake out layout breakage early. `[useful]`
- **String expansion** — Translated text is often much longer, so fixed-width UI breaks. `[core]`
- **RTL (right-to-left)** — Languages that flow the other way, requiring mirrored layout not just mirrored text. `[useful]`
- **Pluralization rules** — Languages have more than two plural forms, so string concatenation fails. `[useful]`
- **Locale** — The language-plus-region identifier that drives formatting decisions. `[useful]`
- **Numeronym** — The naming trick behind a11y, i18n, l10n (first letter, count of omitted letters, last letter). `[useful]`

## 9. Accessibility & Inclusion

- **Accessibility (a11y)** — Making the product operable by people with disabilities, permanent or temporary. `[core]`
- **WCAG** — The international standard listing testable requirements for accessible web content. `[core]`
- **POUR** — WCAG's four principles: content must be Perceivable, Operable, Understandable, and Robust. `[core]`
- **Success criterion** — One individually testable WCAG requirement, numbered (e.g. 1.4.3 contrast). `[core]`
- **Conformance levels A / AA / AAA** — Tiers of strictness; AA is the practical legal and industry target. `[core]`
- **Assistive technology (AT)** — Software or hardware people use to operate computers: screen readers, magnifiers, switches, voice control. `[core]`
- **Screen reader** — Software that speaks the interface aloud, driven entirely by your markup's structure. `[core]`
- **Semantic HTML** — Using elements for their actual meaning so assistive tech understands the page for free. `[core]`
- **ARIA** — Attributes that describe roles, states, and properties when native HTML semantics aren't enough. `[core]`
- **Role / state / property** — What a thing is, what condition it's in, and its fixed characteristics, as exposed to assistive tech. `[core]`
- **Accessible name** — The label assistive tech announces for a control, which is often not the visible text. `[core]`
- **First rule of ARIA** — Don't use ARIA if a native element already does the job. `[core]`
- **Accessibility tree** — The parallel structure browsers expose to assistive tech, derived from the DOM. `[useful]`
- **Keyboard accessibility** — Everything must be operable with a keyboard alone. `[core]`
- **Focus** — Which element currently receives keyboard input. `[core]`
- **Focus indicator / focus visible** — The visible ring showing where focus is, which must never be removed without replacement. `[core]`
- **Focus order** — The sequence tabbing moves through, which must match the visual/logical order. `[core]`
- **Focus management** — Programmatically moving focus when UI appears or disappears, e.g. into and out of a modal. `[core]`
- **Keyboard trap** — Focus enters something and can't get out with the keyboard. `[core]`
- **Skip link** — A hidden-until-focused link that jumps past repeated navigation to the main content. `[useful]`
- **Landmark / region** — Structural markers (main, nav, header) that let assistive tech users jump around. `[useful]`
- **Heading structure** — A correct, un-skipped heading hierarchy used as the primary navigation tool by screen reader users. `[core]`
- **Alt text** — A text equivalent for an image; decorative images take an empty alt so they're skipped. `[core]`
- **Captions / subtitles / transcripts** — Text equivalents for audio and video content. `[useful]`
- **Audio description** — Narration of visual information in video for people who can't see it. `[fringe]`
- **Live region** — A marked area whose dynamic updates get announced without stealing focus. `[useful]`
- **Contrast minimum (1.4.3)** — The specific ratio thresholds text must meet against its background. `[core]`
- **Non-text contrast** — Icons, borders, and control boundaries also need sufficient contrast. `[useful]`
- **Target size** — Minimum touchable/clickable dimensions specified by the standard. `[core]`
- **Reduced motion** — Respecting the OS preference for people who get sick or distracted by animation. `[core]`
- **Reflow (1.4.10)** — Content must work at high zoom in a narrow viewport without two-dimensional scrolling. `[useful]`
- **Timing adjustable** — Users must be able to extend or disable time limits. `[useful]`
- **Error identification / suggestion** — Errors must be described in text and, where possible, a fix suggested. `[core]`
- **Automated vs. manual testing** — Automated tools catch a minority of issues; the rest requires human keyboard and screen reader testing. `[core]`
- **Axe / Lighthouse / WAVE** — Common automated accessibility checkers a developer will actually run. `[useful]`
- **VPAT / ACR** — The vendor document claiming a product's accessibility conformance, often demanded in procurement. `[fringe]`
- **Section 508 / ADA / EN 301 549 / EAA** — The main legal regimes that make accessibility a compliance requirement. `[useful]`
- **Inclusive design** — Designing for the full range of human diversity rather than an imagined average person. `[core]`
- **Universal design** — Aiming for one solution usable by as many people as possible without adaptation. `[useful]`
- **Permanent, temporary, situational disability** — One-armed, arm-in-a-cast, holding-a-baby — the same interface constraint from three causes. `[core]`
- **Curb-cut effect** — Accessibility fixes routinely end up benefiting everyone. `[useful]`
- **Cognitive accessibility** — Designing for memory, attention, literacy, and processing differences, the most neglected area. `[useful]`
- **Neurodiversity** — Designing for variation in how brains process, including ADHD and autism. `[useful]`
- **Shift left (accessibility)** — Catching accessibility problems in design and code review rather than in an audit at the end. `[core]`

## 10. Research & Discovery Methods

- **User research** — Systematically learning about the people you're building for, rather than guessing. `[core]`
- **Generative vs. evaluative research** — Research that discovers what to build vs. research that checks what you built. `[core]`
- **Qualitative vs. quantitative** — Finding out *why* through observation vs. finding out *how many* through measurement. `[core]`
- **Attitudinal vs. behavioral** — What people say vs. what people actually do; they diverge constantly. `[core]`
- **Moderated vs. unmoderated** — A researcher present and probing vs. participants working alone through a script. `[useful]`
- **Remote vs. in-person** — Where the study happens, with tradeoffs in realism and reach. `[useful]`
- **Usability test** — Watching a real person attempt real tasks with your product and noting where they struggle. `[core]`
- **Task scenario** — The realistic situation and goal given to a test participant, phrased without giving away the UI words. `[core]`
- **Think-aloud protocol** — Asking participants to narrate their thoughts while working so you can hear the confusion. `[core]`
- **Retrospective probing** — Asking about decisions afterward instead of interrupting during the task. `[fringe]`
- **Facilitator bias / leading questions** — Accidentally coaching participants toward the answer you wanted. `[useful]`
- **Pilot test** — A dry run of the study to catch broken tasks and bad wording before spending real participants. `[useful]`
- **Discount usability** — Nielsen's argument that a few cheap tests find most problems, so do them often. `[core]`
- **Five-user rule** — The claim that ~5 participants surface most usability problems in a given design; frequently misapplied to quantitative work. `[core]`
- **Interview** — A structured conversation to understand goals, context, and current workarounds. `[useful]`
- **Contextual inquiry** — Observing people doing their real work in their real environment. `[useful]`
- **Field study / ethnography** — Extended observation of people in their natural setting. `[fringe]`
- **Diary study** — Participants log their experiences over days or weeks to reveal patterns you can't see in one session. `[fringe]`
- **Survey** — Structured questions at scale, good for measuring, bad for discovering. `[useful]`
- **Screener** — The qualifying questionnaire that determines who gets into the study. `[useful]`
- **Recruiting** — Finding and scheduling the right participants, usually the hardest logistical part. `[useful]`
- **Focus group (and its caveat)** — Group discussion, notorious for groupthink and for being wrong about usability. `[useful]`
- **Sample size / saturation** — How many participants, and the point at which new sessions stop revealing new problems. `[useful]`
- **Participant vs. user vs. customer** — Who you tested, who uses it, and who pays; often three different groups. `[useful]`
- **Guerrilla / hallway testing** — Grabbing whoever is nearby for a five-minute test; low rigor, still catches real bugs. `[core]`
- **First-click test** — Measuring whether people's very first click goes toward the right place. `[useful]`
- **Five-second test** — Showing a screen briefly to see what people remember and understand. `[useful]`
- **Preference test** — Asking which of two designs people prefer; measures opinion, not usability. `[useful]`
- **Eye tracking** — Recording where people actually look; expensive and rarely necessary. `[fringe]`
- **Session recording / replay** — Watching anonymized recordings of real usage in production. `[useful]`
- **Wizard of Oz** — Faking the system's intelligence with a human behind the curtain to test an idea cheaply. `[fringe]`
- **Concept test** — Putting a rough idea in front of people before building it. `[useful]`
- **Affinity diagram** — Clustering raw observations on sticky notes until themes emerge. `[useful]`
- **Coding / tagging (qualitative)** — Systematically labeling observations so they can be counted and compared. `[fringe]`
- **Finding vs. insight vs. recommendation** — What was observed, what it means, and what to do about it. `[useful]`
- **Severity rating** — Ranking usability problems so the team fixes the painful ones first. `[core]`
- **Triangulation** — Confirming a conclusion with more than one independent method. `[useful]`
- **ResearchOps** — The tooling, panels, consent, and logistics that make research repeatable. `[fringe]`
- **Consent and participant privacy** — The ethical and legal obligations around recording and storing people's sessions. `[useful]`
- **Competitive / comparative analysis** — Studying how other products solve the same problem. `[useful]`
- **Top task analysis** — Identifying the small number of things most users actually come to do. `[useful]`
- **Jobs to be done (JTBD)** — Framing needs as the progress a person is trying to make, not as demographics or features. `[useful]`
- **Empathy map** — A simple grid of what a user says, thinks, does, and feels. `[fringe]`
- **Assumption mapping** — Listing what the team is taking on faith and ranking by risk. `[useful]`

## 11. Artifacts & Deliverables

- **Persona** — A short profile of a representative user type, built from research, used to keep decisions grounded. `[useful]`
- **Proto-persona** — The same thing built from assumptions rather than research, explicitly flagged as provisional. `[useful]`
- **Scenario** — A short narrative of a specific person trying to achieve something in a specific situation. `[useful]`
- **Use case** — A more formal enumeration of actor, steps, and alternate paths. `[useful]`
- **User story** — A one-line requirement in the "as a X, I want Y, so that Z" shape. `[core]`
- **Acceptance criteria** — The concrete checks that decide whether a story is actually done. `[core]`
- **User flow** — A diagram of the screens and decisions a person passes through to complete a goal. `[core]`
- **Task flow** — The same idea for a single fixed sequence with no branching. `[useful]`
- **Journey map** — A timeline of a person's whole experience including actions, thoughts, feelings, and pain points. `[useful]`
- **Experience map** — A journey map not tied to one specific product. `[fringe]`
- **Service blueprint** — A journey map extended downward to show the staff, systems, and backstage steps behind each touchpoint. `[fringe]`
- **Storyboard** — A comic-strip sketch of a scenario to make it concrete and discussable. `[fringe]`
- **Sketch** — A fast, throwaway hand drawing used to think and to generate options. `[useful]`
- **Wireframe** — A structural layout showing what goes where, deliberately without visual styling. `[core]`
- **Low-fidelity vs. high-fidelity** — Deliberately rough vs. looks-like-the-real-thing; each invites different feedback. `[core]`
- **Mockup / comp** — A static, fully visually designed screen. `[core]`
- **Prototype** — Something clickable that simulates the real behavior for testing before it's built. `[core]`
- **Paper prototype** — Prototyping with drawn screens moved by hand. `[fringe]`
- **Throwaway vs. evolutionary prototype** — Built to be discarded vs. intended to become the product. `[useful]`
- **Fidelity** — How closely an artifact resembles the finished product in look, content, and behavior. `[core]`
- **Design spec / redline** — Annotated measurements, colors, and behaviors handed to implementation. `[core]`
- **Handoff** — The moment and mechanism by which design work becomes engineering work. `[core]`
- **Design critique** — A structured session where a design is examined against goals rather than tastes. `[useful]`
- **Design review** — A gate where a design is approved or sent back. `[useful]`
- **Design brief** — The written statement of problem, constraints, audience, and success criteria before work starts. `[useful]`
- **Design rationale** — The recorded reasoning for why a design is the way it is. `[useful]`
- **Style guide** — Documentation of the visual and language rules a product follows. `[core]`
- **Mood board** — A collage establishing visual direction before designing. `[fringe]`
- **Design principles** — A handful of stated rules a team uses to break ties consistently. `[useful]`

## 12. Measurement, Metrics & Experimentation

- **UX metric** — Any number tracking whether the experience is getting better or worse. `[core]`
- **Task success rate / completion rate** — The percentage of people who finish the task correctly. `[core]`
- **Time on task** — How long completion takes, meaningful only against a baseline. `[core]`
- **Error rate (measured)** — How many wrong actions occur per task attempt. `[core]`
- **Baseline / benchmark** — The "before" number, without which no metric means anything. `[core]`
- **System Usability Scale (SUS)** — A standard 10-question survey producing a 0–100 perceived-usability score, where ~68 is average. `[core]`
- **Single Ease Question (SEQ)** — A single 7-point "how difficult was that?" asked right after a task. `[core]`
- **UMUX-Lite** — A two-question shortcut correlating with SUS. `[fringe]`
- **CSAT** — A direct "how satisfied are you?" rating. `[useful]`
- **CES (Customer Effort Score)** — How much work the person felt they had to do. `[fringe]`
- **Net Promoter Score (NPS)** — A 0–10 "would you recommend us" question turned into a promoter-minus-detractor number. `[useful]`
- **NPS caveats** — NPS measures brand sentiment, not usability; it's statistically noisy, easily gamed, and cannot tell you what to fix. `[core]`
- **HEART framework** — Google's grouping of UX metrics into Happiness, Engagement, Adoption, Retention, and Task success. `[useful]`
- **Goal-Signal-Metric** — The method of turning a fuzzy goal into an observable signal and then a specific number. `[useful]`
- **PULSE metrics** — The older ops-centric set (page views, uptime, latency, seven-day actives, earnings) that HEART was a reaction to. `[fringe]`
- **North star metric** — The single number a team optimizes, ideally representing delivered user value. `[useful]`
- **Vanity metric** — A number that goes up reliably and tells you nothing actionable. `[core]`
- **Leading vs. lagging indicator** — Something that predicts the outcome vs. something that confirms it after the fact. `[useful]`
- **Conversion rate** — The share of people who complete a target action. `[core]`
- **Funnel / drop-off** — A sequence of steps with the loss between each one made visible. `[core]`
- **Bounce rate** — The share of visits that leave without engaging, notoriously ambiguous. `[useful]`
- **Engagement** — Frequency and depth of use, defined differently by every team that reports it. `[useful]`
- **Retention** — Whether people come back over time. `[useful]`
- **Cohort analysis** — Grouping users by when they joined and tracking each group separately over time. `[useful]`
- **Churn** — The rate at which people stop using or paying. `[useful]`
- **DAU/MAU / stickiness** — Daily over monthly active users as a rough habit measure. `[useful]`
- **Analytics** — Instrumented, aggregate behavioral data from production. `[core]`
- **Event tracking / instrumentation** — Deliberately emitting the events you'll need to answer questions later. `[core]`
- **Heatmap / click map / scroll map** — Aggregate visualizations of where people click, move, and stop scrolling. `[useful]`
- **A/B test** — Randomly splitting traffic between two versions and measuring which performs better. `[core]`
- **Multivariate test** — Testing combinations of several changes at once. `[useful]`
- **Statistical significance / p-value** — The likelihood the observed difference isn't just noise. `[core]`
- **Confidence interval** — The plausible range the true value sits in, more informative than a bare average. `[useful]`
- **Sample size / power** — How many observations you need before the test could detect a real effect. `[useful]`
- **Peeking / p-hacking** — Stopping a test the moment it looks good, which manufactures false wins. `[core]`
- **Local maximum** — Where repeated small A/B optimizations trap you, unable to find a better design elsewhere. `[core]`
- **Survivorship bias** — Only measuring the people who made it through, missing everyone who gave up. `[useful]`
- **Selection bias** — Your measured population isn't representative of your real one. `[useful]`
- **Guardrail metric** — A metric watched to make sure an optimization isn't breaking something else. `[useful]`
- **Qual-quant pairing** — Using numbers to find where the problem is and observation to find out why. `[core]`

## 13. Design Systems & Delivery Infrastructure

- **Design system** — The whole system of principles, tokens, components, patterns, docs, and governance a product is built from. `[core]`
- **Component library** — The actual coded, reusable UI components. `[core]`
- **Pattern library** — Documented recurring solutions to recurring interface problems. `[useful]`
- **Style guide (in a system)** — The rules for visual and verbal expression within the system. `[useful]`
- **Design tokens** — Named variables for design decisions (color, spacing, radius, type) shared across platforms. `[core]`
- **Primitive vs. semantic tokens** — `blue-600` vs. `color-action-primary`; the second is what components should consume. `[core]`
- **Token tiers / aliasing** — Layering tokens so themes can be swapped without touching components. `[useful]`
- **Theming** — Producing alternate looks (dark mode, brands, density) from one component set. `[core]`
- **Single source of truth** — One authoritative definition, so design and code cannot silently drift apart. `[core]`
- **Atomic design** — Brad Frost's ladder of atoms, molecules, organisms, templates, and pages. `[useful]`
- **Variant** — A named configuration of a component (size, tone, emphasis) rather than a separate component. `[core]`
- **Component API / props** — The exposed configuration surface of a component, a design decision as much as a code one. `[core]`
- **Composition vs. configuration** — Building complex UI by combining small pieces vs. by adding options to a big piece. `[core]`
- **Slot** — A designated hole in a component where consumers insert their own content. `[useful]`
- **Headless / unstyled component** — Behavior and accessibility without visual opinions, styled by the consumer. `[useful]`
- **Primitive** — The lowest-level building block a system exposes. `[useful]`
- **Governance** — Who decides what enters the system and how changes are approved. `[useful]`
- **Contribution model** — The defined path for product teams to add or change shared components. `[useful]`
- **Versioning / semver for design systems** — Communicating breaking visual and API changes to consumers. `[core]`
- **Deprecation** — Formally retiring a component with a migration path and a timeline. `[useful]`
- **Adoption metrics** — Measuring what fraction of the product actually uses the system. `[useful]`
- **Design debt** — Accumulated inconsistency and one-off exceptions that make change progressively costlier. `[core]`
- **UI inventory / interface audit** — Screenshotting every existing variation to reveal how much inconsistency exists. `[useful]`
- **Design lint** — Automated checks that flag off-system colors, spacing, and type. `[useful]`
- **Storybook** — The common tool for developing and documenting components in isolation. `[useful]`
- **Figma component / library / auto layout** — The design-tool counterparts of components, packages, and flex layout. `[useful]`
- **Design-to-code parity** — Whether the component in the design tool and the one in code actually match. `[core]`
- **Accessibility annotations** — Marking focus order, roles, and labels on designs so implementers don't have to guess. `[useful]`
- **DesignOps** — The practice of running design work as a system: tooling, process, hiring, and workflow. `[fringe]`
- **Documentation site** — The published home of the system's usage guidance, without which the system doesn't get used. `[core]`

## 14. Process, Product & Team Vocabulary

- **Design thinking** — A popularized five-stage problem-solving frame: empathize, define, ideate, prototype, test. `[useful]`
- **Double diamond** — The Discover / Define / Develop / Deliver shape showing two rounds of widening then narrowing. `[useful]`
- **Divergent vs. convergent thinking** — Generating many options vs. deciding among them; doing both at once fails. `[core]`
- **Problem space vs. solution space** — Understanding what's actually wrong vs. designing what to build. `[core]`
- **Problem framing** — Stating the problem in a way that doesn't already assume the answer. `[core]`
- **"How might we" (HMW)** — A phrasing convention that turns a problem statement into an open design question. `[useful]`
- **Ideation** — Deliberately generating many candidate solutions before committing. `[useful]`
- **Crazy eights / design studio** — Timeboxed sketching exercises for producing options fast. `[fringe]`
- **Design sprint** — A compressed multi-day process from problem to tested prototype. `[fringe]`
- **Lean UX** — Reducing design to the smallest experiments that resolve the riskiest assumptions. `[useful]`
- **Agile UX / dual-track agile** — Running a discovery track ahead of a delivery track so design isn't blocking or blocked. `[useful]`
- **Iteration** — Improving through repeated build-measure-learn cycles rather than one big attempt. `[core]`
- **MVP (minimum viable product)** — The smallest complete thing that lets a real user finish a real task and teaches you something. `[core]`
- **MVP misuse** — Shipping a broken subset and calling it an MVP; viable means it actually works end to end. `[core]`
- **MLP (minimum lovable product)** — A reaction to MVP insisting the minimum still has to be good. `[fringe]`
- **Prototype-to-production gap** — The gulf between a demo that looks right and a system that handles real state and errors. `[core]`
- **Backlog / epic / story / spike** — The work-tracking units design conversations get translated into. `[useful]`
- **Definition of done** — The agreed checklist, ideally including accessibility and states, before something ships. `[core]`
- **Roadmap** — The sequenced plan of what's coming, which design work must be scheduled against. `[useful]`
- **Product manager vs. product owner vs. designer** — Overlapping roles whose boundaries vary by company and cause most process friction. `[useful]`
- **UX maturity** — How seriously and systematically an organization treats design, from nonexistent to embedded. `[useful]`
- **Design debt vs. tech debt** — Accumulated interface inconsistency vs. accumulated code compromise; they compound each other. `[useful]`
- **HiPPO** — The highest-paid person's opinion overriding evidence. `[useful]`
- **Bikeshedding** — Teams arguing about trivial visible details while ignoring hard important ones. `[useful]`
- **Feature creep / scope creep** — Steady unmanaged growth in what's being built. `[core]`
- **Feature factory** — An organization measured on shipping features rather than on outcomes. `[useful]`
- **Outcome vs. output** — The change in user or business behavior vs. the amount of stuff shipped. `[core]`
- **Design QA** — Checking the built thing against the design before release. `[core]`
- **Dogfooding** — Using your own product for real work to feel its problems. `[useful]`
- **Feature flag / progressive rollout** — Releasing to a slice of users first so problems are contained. `[useful]`
- **Post-launch review** — Checking after release whether the intended outcome actually happened. `[useful]`

## 15. Ethics, Persuasion & Modern Concerns

- **Dark pattern / deceptive design** — Interface choices deliberately engineered to get people to do things against their own interest. `[core]`
- **Brignull taxonomy** — Harry Brignull's named catalogue of deceptive patterns, now cited by regulators. `[useful]`
- **Roach motel** — Easy to get into, deliberately hard to get out of (subscriptions, accounts). `[core]`
- **Confirmshaming** — Wording the decline option to make the person feel stupid or bad for choosing it. `[core]`
- **Privacy zuckering** — Tricking people into sharing more data than they intended. `[useful]`
- **Sneak into basket** — Adding an item the person didn't choose during checkout. `[useful]`
- **Hidden costs / drip pricing** — Revealing fees only at the final step after sunk effort. `[core]`
- **Forced continuity** — Silently converting a free trial into a charge. `[useful]`
- **Bait and switch** — The control does something other than what it advertised. `[useful]`
- **Trick question** — Deliberately confusing wording or double negatives on consent controls. `[useful]`
- **Disguised ad** — Advertising dressed as content or as a UI control. `[useful]`
- **Nagging** — Repeated interruption until the person gives in. `[useful]`
- **Obstruction / friction as a weapon** — Deliberately making the path you don't want people to take harder. `[core]`
- **Preselection** — Defaulting the option that benefits you, exploiting the fact people don't change defaults. `[core]`
- **Consent UX / cookie banner** — The interface for obtaining permission, a common home for deceptive patterns and now regulated. `[useful]`
- **Persuasive design** — Deliberately using psychology to change behavior; legitimate or manipulative depending on whose interest it serves. `[useful]`
- **Nudge** — A small design change that shifts behavior without removing choice. `[useful]`
- **Friction (as a design tool)** — Deliberate difficulty, harmful in checkout and helpful before deleting a database. `[core]`
- **Gamification** — Adding points, streaks, and badges to drive engagement. `[useful]`
- **Attention economy / engagement optimization** — Business models that reward holding attention, which shapes design incentives. `[useful]`
- **Addictive design** — Patterns like infinite scroll, variable rewards, and streaks that exploit compulsion. `[useful]`
- **Ethical design / value-sensitive design** — Explicitly weighing user interest and third-party harm as design criteria. `[useful]`
- **Trust and safety** — Designing for abuse, harassment, and bad actors as a first-class concern. `[useful]`
- **Privacy by design** — Making data minimization and user control structural rather than a settings page. `[useful]`
- **Consent vs. coercion** — Whether the person genuinely had a real, understandable choice. `[useful]`
- **Accessibility as ethics vs. compliance** — Doing it because people are excluded vs. doing it to avoid lawsuits. `[useful]`
- **Algorithmic transparency / explainability** — Telling people why the system showed or decided something. `[useful]`
- **Human in the loop** — Keeping a person's review and override in an automated decision path. `[useful]`
- **AI UX conventions** — Emerging patterns for generative features: showing uncertainty, citing sources, allowing correction, and never hiding that output is machine-generated. `[useful]`
- **Hallucination disclosure** — Setting expectations in the interface that AI output can be confidently wrong. `[useful]`
- **Progressive trust** — Earning permission and data gradually instead of demanding everything up front. `[fringe]`
- **Anthropomorphism (in UI)** — Making software seem person-like, which raises expectations it usually can't meet. `[fringe]`

---

## Coverage notes

**Where sources agreed (strong signal for `[core]`).** The following terms appeared in essentially every general glossary consulted (NN/g's glossary set, UX Design Institute's 101-term glossary, CareerFoundry's 91+ term glossary, KoruUX's 100+ term list, UXtweak, TestingTime, Maze, UserInterviews, UXmatters, AND Academy, The UX Copywriter): **usability, UX vs. UI, affordance, signifier, mental model, wireframe, prototype, persona, user journey, information architecture, card sorting, usability testing, heuristic evaluation, accessibility, responsive design, design system, visual hierarchy, whitespace, A/B testing, user flow, MVP, user story, style guide, microcopy, progressive disclosure, dark pattern.** These 26 form the highest-confidence must-cover set; every source treated them as beginner vocabulary.

**Where sources diverged.**
- *Affordance* — general glossaries define it as "what you can do with an object"; Norman-derived sources (UX Planet, LogRocket, IxDF) insist on splitting **affordance** (the possible action) from **perceived affordance** and **signifier** (the visible clue). The three-way split is the correct one to teach; the sloppy single definition is what developers will hear in meetings, so the course should flag both.
- *Design system vs. pattern library vs. style guide vs. component library* — UXPin, The Design System Guide, designsystems.surf, and Magic Patterns all disagree slightly on boundaries, but converge on: design system ⊃ (component library + tokens + patterns + docs + governance). This confusion is itself worth 30 seconds of course time.
- *Number of "laws of UX"* — sources counted 7, 10, 20, 21, or 23 laws. Only Fitts, Hick, Jakob, Miller, and Tesler appear in every list. Von Restorff, peak-end, Doherty, and aesthetic-usability appear in most. The rest are long-tail and safe to cut.
- *Nielsen's 10 heuristics* — the canonical list is stable, but heuristic #9 is commonly restated two different ways ("help users recognize, diagnose, and recover from errors" as #9 with "help and documentation" as #10). One search result returned a garbled 10-item list; the canonical NN/g ordering should be used.
- *Metrics* — quantitative sources (MeasuringU, Userlytics, Lyssna, CorsoUX) consistently warn that SUS ≠ NPS ≠ task success, and that any metric without a baseline is meaningless. Multiple independent sources flagged the NPS caveat, so treating NPS skeptically is a defensible, well-sourced course position rather than an opinion.
- *Dark patterns* — the Brignull taxonomy names (roach motel, confirmshaming, privacy zuckering) are stable across CareerFoundry, Eleken, Hall of Shame, Usercentrics, and academic work, though newer regulatory language prefers "deceptive design patterns" over "dark patterns."

**Terms present in glossaries but almost absent from developer conversation** (candidates to cut without loss): ontology, polyhierarchy, macro/micro whitespace, Gutenberg diagram, x-height anatomy, widow/orphan, mood board, crazy eights, PULSE, UMUX-Lite, ResearchOps, Wizard of Oz, audio description, VPAT.

**Terms developers hit constantly that most UX glossaries under-serve** (gap the course can fill): loading/empty/error state design, optimistic UI, perceived performance, string expansion under localization, focus management in modals, token tiering, component API design as a design decision, design-to-code parity, and the prototype-to-production gap. General UX glossaries barely mention these; design-system and accessibility sources cover them. This is where a developer-aimed course has the most differentiated value.

**Method caveat.** The network egress proxy in this environment blocked direct page fetches (`WebFetch`) to nngroup.com, ixdf.org, w3.org, wikipedia.org, uxdesigninstitute.com, uxtweak.com, and essentially all other target domains. Term lists and definitions below were therefore assembled from web-search result summaries of those same sources plus domain knowledge, rather than from full-page scrapes. Definitions were rewritten rather than quoted, so this doesn't affect the deliverable, but a future pass with unrestricted network access could verify exact glossary membership and pull the complete term lists from NN/g's four glossaries verbatim.

---

## Sources

**Nielsen Norman Group (glossaries and definitional articles — search-summarized, not fetched)**
- https://www.nngroup.com/articles/research-methods-glossary/
- https://www.nngroup.com/articles/quant-ux-glossary/
- https://www.nngroup.com/articles/ux-deliverables-glossary/
- https://www.nngroup.com/articles/agile-glossary/
- https://www.nngroup.com/articles/visual-design-cheat-sheet/
- https://www.nngroup.com/articles/definition-user-experience/
- https://www.nngroup.com/articles/ux-mapping-methods-study-guide/
- https://www.nngroup.com/articles/service-blueprints-definition/
- https://www.nngroup.com/articles/journey-mapping-101/
- https://www.nngroup.com/articles/ia-vs-navigation/
- https://www.nngroup.com/articles/minimize-cognitive-load/
- https://www.nngroup.com/videos/this-vs-that-confusing-ux-terms/
- https://www.nngroup.com/videos/ux-vocabulary-inflation/
- https://www.nngroup.com/topic/deliverables/

**Interaction Design Foundation (literature topics = de facto glossary)**
- https://ixdf.org/literature
- https://www.interaction-design.org/literature/topics
- https://ixdf.org/literature/book/the-glossary-of-human-computer-interaction/user-experience-ux
- https://ixdf.org/literature/topics/interaction-design
- https://ixdf.org/literature/topics/usability
- https://ixdf.org/literature/topics/visual-hierarchy
- https://ixdf.org/literature/topics/ui-design-patterns
- https://ixdf.org/literature/topics/ux-deliverables
- https://ixdf.org/literature/topics/cognition
- https://ixdf.org/literature/topics/mobile-first

**usability.gov (archived) and government/standards**
- https://www.usability.gov/what-and-why/glossary/u/
- https://www.usability.gov/what-and-why/glossary/tag/user-research/index.html
- https://developer.mozilla.org/en-US/docs/Glossary/Mobile_First

**General UX glossaries / listicles**
- https://www.uxdesigninstitute.com/blog/glossary-ux-terms/ (101 UX terms)
- https://careerfoundry.com/en/blog/ux-design/ux-design-glossary/ (91+ terms)
- https://www.koruux.com/blog/ui-ux-glossary-for-designers/ (100+ UI/UX terms)
- https://www.andacademy.com/resources/blog/ui-ux-design/ui-ux-design-glossary/ (50+ terms)
- https://www.uxtweak.com/ux-glossary/
- https://www.testingtime.com/en/ux-glossary/
- https://ux247.com/usability-glossary/
- https://www.uxmatters.com/glossary/
- https://majordigital.com/articles/a-z-ux-terms
- https://meshworld.in/blog/web-dev/ux/terms-every-designer-should-know/
- https://medium.com/@atnoforuiuxdesigning/the-complete-glossary-of-ui-ux-design-terms-every-beginner-must-know-e5dc26db2402
- https://humanfactors.com/downloads/Glossary_of_Usability_Terms.pdf
- https://www.textbookofusability.com/glossary/
- https://anthonyhobday.com/sideprojects/interactionconcepts/ (list of every interaction design concept)
- https://uiterms.com/ (visual dictionary of UI patterns/components)
- https://namethatui.org/

**UX research method glossaries**
- https://maze.co/resources/glossary/
- https://www.userinterviews.com/ux-research-field-guide-chapter/user-research-terms
- https://www.userlytics.com/resources/glossary/user-experience-ux-research/
- https://measuringu.com/taxonomy-ux-research-methods/
- https://nulab.com/learn/design-and-ux/ux-research-methods/

**Metrics & analytics**
- https://www.userlytics.com/resources/glossary/ux-metrics/
- https://www.lyssna.com/blog/usability-metrics/
- https://courseux.com/ux-metrics/ (SUS, NPS, HEART)
- https://uxpilot.ai/blogs/ux-metrics
- https://amplitude.com/glossary/terms/ab-testing
- https://amplitude.com/glossary/terms/conversions
- https://amplitude.com/glossary/terms/product-analytics
- https://kissmetrics.io/glossary/funnel-analysis
- https://www.digitalapplied.com/blog/analytics-glossary-200-data-metrics-terms

**Design systems**
- https://www.uxpin.com/studio/blog/design-system-glossary/ (34 terms)
- https://thedesignsystem.guide/knowledge-base/design-system-glossary
- https://designsystem.university/glossary
- https://designsystems.surf/glossary
- https://www.uxpin.com/studio/blog/design-systems-vs-pattern-libraries-vs-style-guides-whats-difference/
- https://www.magicpatterns.com/blog/what-is-a-design-system
- https://www.bornfight.com/blog/design-systems-design-tokens-atomic-design-the-art-of-scaling-design/

**Accessibility**
- https://www.webability.io/glossary
- https://www.webability.io/glossary/a11y
- https://www.thewcag.com/glossary
- https://www.qualibooth.com/resources/accessibility-glossary/
- https://accessivepath.com/glossary
- https://blog.accessify.app/accessibility-glossary-explained/
- https://accessibility.arizona.edu/accessibility-101/accessibility-glossary
- https://louisiana.edu/accessibility/training-resources/glossary-terms
- https://www.filamentgames.com/blog/accessibility-terms-for-game-developers-a-wcag-2-1-aa-glossary

**UX laws / cognition**
- https://blog.uxtweak.com/ux-laws-and-principles/ (23 laws)
- https://www.uxdesigninstitute.com/blog/laws-of-ux/ (21 laws)
- https://www.looppanel.com/blog/laws-of-ux
- https://neurodiversity.design/ux-law-definitions/
- https://www.uxtoast.com/ux-laws/
- https://blog.logrocket.com/ux-design/cognitive-principles-for-ux-designers/
- https://blog.logrocket.com/ux-design/affordances-ux-design/
- https://uxplanet.org/all-about-affordance-and-signifier-terms-by-don-norman-the-ux-pioneer-e0ea7b9b99f5

**Information architecture**
- https://www.sanity.io/glossary/information-architecture
- https://informationarchitectureauthority.com/navigation-design

**Content / UX writing**
- https://theuxcopywriter.com/ux-glossary-of-content-and-design-terminology/
- https://kontent.ai/glossary/ux-writing-or-ux-content/
- https://uxwritinghub.com/what-is-microcopy/

**Responsive / modern delivery / i18n**
- https://polypane.app/responsive-design-glossary/
- https://www.uxpin.com/studio/blog/responsive-vs-adaptive-design-whats-best-choice-designers/
- https://www.uxpin.com/studio/blog/internationalization-vs-localization-in-app-design/
- https://www.productplan.com/glossary/design-ops
- https://amworldgroup.com/glossary/digital/design-operations-designops

**Dark patterns / ethics**
- https://hallofshame.design/collection/
- https://careerfoundry.com/en/blog/ux-design/dark-patterns-ux/
- https://www.suebehaviouraldesign.com/en/blog/dark-patterns-explained/
- https://usercentrics.com/knowledge-hub/dark-patterns-and-how-they-affect-consent/
- https://www.eleken.co/blog-posts/dark-patterns-examples
- https://euleinstitute.com/en/blog/dark-patterns/
- https://arxiv.org/pdf/2309.17145 (Staying at the Roach Motel — cross-country analysis of manipulative subscription flows)
