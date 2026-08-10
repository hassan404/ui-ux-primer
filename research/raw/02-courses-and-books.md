# 02 — What Existing Courses and Books Actually Teach

**Scope of this file (Agent 02):** an inventory of *syllabi* — the tables of contents, module
sequences, stated learning outcomes, target audiences and time commitments of the major UI/UX
courses and books. This is raw material, not curation. The point is to see **what everyone
teaches, in what order, and what only one source bothers with.**

**Explicitly out of scope here** (owned by other agents): the design principles themselves in
depth, visual-design rules in depth, community/practitioner opinion, delivery-format and pedagogy
analysis, glossary/terminology work.

---

## Research-conditions caveat (read this before trusting a line item)

This session's network egress proxy blocked essentially every destination except `github.com` /
`raw.githubusercontent.com` (403 CONNECT denials for coursera.org, interaction-design.org,
refactoringui.com, learnui.design, frontendmasters.com, classcentral.com, library catalogues,
dokumen.pub, css-tricks.com, etc.), and the shared WebSearch budget for the 9-agent swarm was
exhausted partway through. Every claim below is therefore tagged:

- **`[web-verified]`** — confirmed against search results or a fetched page *in this session*.
  Quotes and module names are reliable.
- **`[model-knowledge]`** — reconstructed from training data, **not re-verified this session**.
  Structure and topic sets are high-confidence for famous books; exact chapter wording, edition
  numbering and hour counts should be spot-checked before quoting in the course.

Anything marked `[model-knowledge]` is still usable as *inventory* (it tells you what the topic
sequence looks like); just don't cite it as a verbatim TOC without a second pass.

---

# PART A — COURSES

## A1. Google UX Design Professional Certificate (Coursera) `[web-verified]`

**Audience:** absolute beginners with no design background, aiming at entry-level UX jobs.
**Time:** Google's official framing is ~6 months at ~10 hrs/week; reviewers commonly report 3–4
months part-time. 7 courses. Portfolio outcome: 3 end-to-end projects.
**Format:** video + readings + graded activities + peer-reviewed portfolio work.

### Course 1 — Foundations of User Experience (UX) Design
Stated outcomes `[web-verified]`:
- Define the field of UX and explain why it matters to consumers and businesses
- Foundational concepts: user-centered design, the design thinking framework, accessibility,
  equity-focused design
- Identify factors contributing to great UX
- Job responsibilities of entry-level UX designers; cross-functional teams
- Explain why design sprints matter

Module sequence:
1. Basics of UX design; designing for good UX; the product development life cycle; jobs in UX;
   entry-level responsibilities; specialists vs. generalists; cross-functional teams
2. Common terms, tools and frameworks; user-centered design; **equity and accessibility**
3. Design sprints — phases, planning, participating; retrospectives
4. Portfolio: starting a portfolio website

### Course 2 — Start the UX Design Process: Empathize, Define, Ideate
Outcomes: empathize with users; write problem statements; generate solution ideas.
Topics: researching user needs, **personas**, **user stories**, **user journey maps**, empathy
maps, problem/hypothesis statements, ideation methods (Crazy Eights etc.).

### Course 3 — Build Wireframes and Low-Fidelity Prototypes
Outcomes: storyboards (big-picture and close-up); paper wireframes; digital wireframes in Figma;
paper prototypes; low-fi prototypes in Figma.
Also explicitly taught: **information architecture**, **sitemaps**, and **Gestalt principles**
(similarity, proximity, common region) applied to wireframes.

### Course 4 — Conduct UX Research and Test Early Concepts
Outcomes: plan and run moderated and unmoderated usability studies; synthesize observations into
insights; present research persuasively; iterate low-fi designs on findings.
Four-module sequence: (1) planning research studies, (2) conducting usability studies,
(3) analyzing/synthesizing results, (4) sharing insights.
Notable teachable artifact: the **7-element research plan** — project background, research goals,
research questions, KPIs, methodology, participants, script.

### Course 5 — Create High-Fidelity Designs and Prototypes in Figma
Outcomes: mockups and hi-fi prototypes in Figma; **define and apply visual design elements and
principles**; **design systems** for organizing/standardizing; **design critique** sessions and
feedback; **handoff to engineering**; complete a portfolio-ready mobile app.

### Course 6 — Build Dynamic User Interfaces (UI) for Websites
Outcomes: run the full design-thinking loop (empathize → define → ideate → prototype → test) for a
**responsive website**; information architecture and sitemaps for web; **common web page layouts**;
plan and conduct a usability study. Tooling: Adobe XD and/or Figma.

### Course 7 — Design a User Experience for Social Good & Prepare for Jobs
Outcomes: a third end-to-end project (social-good brief) covering wireframes → mockups → lo-fi →
hi-fi for both a mobile app and a responsive site; portfolio polish; **interview process and
strategies**; **freelancing** — business plan, landing a first client.

**Emphasizes:** process, research, artifacts (personas, journeys, wireframes), portfolio and
employability, accessibility/equity framing, Figma tooling.
**De-emphasizes:** visual craft depth (typography/color get one course's worth), any
implementation/code, business/product strategy, metrics beyond study KPIs.

---

## A2. Interaction Design Foundation (IxDF) `[web-verified structure, model-knowledge catalogue]`

**Audience:** career-changers and working practitioners; membership model (~40+ courses in the
catalogue), heavily marketed as a cheaper alternative to bootcamps.
**Format:** each course is roughly 8 lessons delivered weekly, self-paced, ~2–3 hrs/week, ends with
a certificate; courses are grouped into published **learning paths** (a public
`IDF-Course-Learning-Paths.pdf` exists — blocked this session).

### "User Experience: The Beginner's Guide/Course" (their flagship intro) `[web-verified]`
Stated framing: "gain a thorough understanding of the various design principles that come together
to create a user's experience," plus "the value UX design brings to a project."
Stated audience, verbatim in their marketing: **marketers** wanting a holistic view of the user's
experience with a product/brand, and **newcomers considering a switch into UX**.
Pedagogy note (in-scope only as syllabus fact): cohort-style — "join a global multidisciplinary
team working on the course and the exercises at the same time as you."

### Catalogue shape `[model-knowledge]`
Recurring foundational titles across their catalogue and learning paths:
- Design Thinking: The Ultimate Guide / The Beginner's Guide
- Human-Computer Interaction (HCI) — the most academic course they offer
- UI Design Patterns for Successful Software
- Interaction Design for Usability
- Visual Design: The Ultimate Guide
- Gestalt Psychology and Web Design
- Accessibility: How to Design for All
- Mobile UX Design: The Beginner's Guide
- User Research — Methods and Best Practices
- Journey Mapping
- Emotion Driven / Emotional Design
- Information Visualization
- Design Systems
- Agile Methods for UX Design
- Psychology of E-Commerce / Persuasive design
- "Become a UX Designer from Scratch" (bundle/path)
- Design for the 21st Century with Don Norman (masterclass-style)

**Emphasizes:** breadth of theory, HCI/academic lineage, design thinking, research methods,
certificate-per-course credentialing.
**De-emphasizes:** hands-on tool work (little Figma), code, and portfolio production.

---

## A3. Learn UI Design — Erik Kennedy `[web-verified]`

**Audience:** explicitly developers, PMs, founders and self-taught designers — "understanding the
principles behind design decisions rather than following trends."
**Size:** **16+ hours of video across 30+ lessons**; downloadable resources, homework assignments,
student community. **List price $999** (tiered).
**Topic set (verified):** color, typography, layout, responsive design, visual hierarchy, design
process, "modern interface aesthetics."

Sequencing `[model-knowledge]` — the course is organised as a small number of deep verticals rather
than a project pipeline:
1. **Design process** for UI (working from references, iteration, "steal like an artist")
2. **Typography** — choosing typefaces, type scale, line-height/measure, font pairing
3. **Color** — HSB-based palette building, semantic color, gray construction, accessible contrast
4. **Layout & spacing** — grids, alignment, whitespace, density
5. **Visual hierarchy** — de-emphasis as the main lever, size/weight/color contrast
6. **Responsive/mobile** adaptation
7. **UI components** and real-world app teardowns / redesigns

**Emphasizes:** *visual* craft with explicit, rule-shaped heuristics; "why" behind each rule;
homework/critique.
**De-emphasizes:** user research, testing, IA, team process, code.

---

## A4. Learn UX Design — Erik Kennedy `[web-verified]`

**Size:** reported as **~22–23 hours across ~31–37 video lessons** (sources vary), described as
"live design work."
**Verified module structure — three blocks:**
1. **Design Patterns & Best Practices** — navigation, menus, text input controls, selection
   controls, errors, search & filter, lists & tables, browsing, responsive design, accessibility
2. **User Research & Testing** — interviewing, surveys, personas, user flows, prototyping,
   usability testing
3. **Communicating Design** — design portfolios, job interviews, finding clients, presenting design

**Notable:** the pattern block is unusually concrete for a "UX" course — most UX curricula teach
process and leave patterns implicit. This is one of the few sources that teaches *forms, tables,
search/filter, and error states* as first-class subjects.
**De-emphasizes:** visual styling (that's the sibling UI course), HCI theory, metrics.

---

## A5. Shift Nudge — Matt D. Smith `[web-verified]`

**Audience:** developers and junior designers wanting professional *interface* (visual) design
skill; positioned as "professional interface design training."
**Size:** 80+ lessons, 30+ hours of video (one source claims 679 total lesson units including
supplements); Core plan = 4 modules; full curriculum spans 8 module areas.
**Recommended pace:** **8 weeks at 5–7 hrs/week** (they publish both an 8-week and a "Beast Mode"
12-week schedule).

**Module areas (verified):**
1. Foundations / Introduction (sample lesson titles seen: "UX vs. UI", "Structural vs.
   Interactive", "Optics vs. Math")
2. **Typography** (Core) — incl. "Typography Overview", "Combining Text and Elements"
3. **Layout** (Core) — incl. "High & Low Density"
4. **Color** (Core)
5. Style
6. Imagery
7. Elements (components)
8. Tactics (+ advanced modules)

**Per-lesson framework (verified, and structurally interesting):** every lesson is
**Why the principle matters → What it looks like in real client work → How to apply it**, followed
by a design exercise.
**Emphasizes:** optical/visual craft, repetition through exercises, "math vs. optics" judgment.
**De-emphasizes:** research, testing, process artifacts, code.

---

## A6. Scrimba — UI design track (taught by Gary Simon / DesignCourse) `[web-verified]`

Three distinct Scrimba offerings show up:

**"Learn UI Design" / "UI Design for Web Developers"** — **98 interactive scrims across 12
modules**, ~8 hours, built *in HTML and CSS* (the differentiator: you design by coding).
Sequence (verified topic list):
1. UI design fundamentals — core principles/techniques
2. Basic UI layout — multi-column layouts, working with photographs
3. Responsive design — adapting across screen sizes
4. Navigation systems that adapt to devices
5. **Forms** that "guide and delight"
6. Final project — a vacation-booking website

**"Intro to UI Design Fundamentals" (free)** — white space, alignment, contrast, scale, typography,
color theory, visual hierarchy. This 7-item list is about as close to a consensus "minimum viable
visual design syllabus" as exists.

**Emphasizes:** hands-on, code-native, immediate application; visual fundamentals.
**De-emphasizes:** research, testing, process, accessibility (only lightly).

---

## A7. DesignCourse (Gary Simon) `[model-knowledge, instructor link web-verified]`

**Audience:** front-end developers wanting to design their own UIs. Gary Simon is verified as the
author of Scrimba's UI course; his own site sells a longer "UI/UX Design Bootcamp."
Typical curriculum shape: design theory (typography, color, spacing, layout, hierarchy) → Figma
tooling → UI patterns and component design → converting designs to HTML/CSS → portfolio/freelance.
Large free YouTube corpus of "UI design fundamentals" and redesign-critique videos.
**Emphasizes:** speed to a good-looking result; tool fluency; implementation.
**De-emphasizes:** research, HCI theory, accessibility.

---

## A8. Frontend Masters — "Design for Developers" (Sarah Drasner) `[web-verified]`

**Audience:** developers, explicitly. **Length: 4 hours 20 minutes** — the shortest serious
offering in this inventory, and therefore the single most useful prior art for a *ruthlessly
prioritized* dev-facing course.
**Verified lesson topics, in order:**
- Introduction; debunking the "right brain vs. left brain" myth
- What this course is / is not; setup
- **Perfection** — reframing failure and the pursuit of perfection
- Developer vs. designer roles ("why I don't introduce myself as a designer")
- **Layout** — grids and where they apply
- **Balance and symmetry** — how they affect composition
- **Layout tools** — survey of tools with pros/cons
- **Sources of inspiration** — where to pull from

`[model-knowledge]` the remainder of the course covers color theory and palette building,
typography and type pairing, spacing/whitespace, hierarchy, animation/motion basics, and a
practical "redesign this" exercise, plus CSS Grid demos (the companion repo
`github.com/sdras/design-for-developers` holds SVG/PNG assets, **five CSS Grid CodePen examples**,
and numbered PDF slide decks — verified via GitHub).

**Emphasizes:** unblocking developers psychologically (perfection, "you can do this"), layout,
inspiration sourcing, tools.
**De-emphasizes:** research, testing, process, accessibility.

**Other Frontend Masters design-adjacent courses** `[model-knowledge]`: "Design Systems with React
& Storybook," "Figma for Developers," "Responsive Web Design," "Accessibility" (Marcy Sutton /
Jon Kuperman) — the platform treats *design systems* and *accessibility* as separate specialist
courses rather than folding them into design fundamentals.

---

## A9. University HCI intro syllabi `[model-knowledge]`

These matter because they show the *academic* sequencing, which differs sharply from the
bootcamp/industry sequencing (theory-and-evaluation-first rather than artifact-first).

**Stanford CS147 — Introduction to Human-Computer Interaction Design.** ~10-week studio,
project-based, team of 4. Sequence: needfinding → task analysis → point-of-view/problem framing →
storyboarding → **low-fidelity (paper) prototyping** → heuristic evaluation → medium-fi interactive
prototype → **visual design** → user testing → hi-fi prototype → final presentation. Emphasis on
*generating many alternatives* before converging.

**Georgia Tech CS 6750 — Human-Computer Interaction (OMSCS).** Four units:
(1) Introduction to HCI, (2) **Principles of Design** — direct manipulation, mental models,
representations, task analysis, distributed cognition, (3) **Design Life Cycle** — needfinding,
design alternatives, prototyping, evaluation, (4) **Applications** — HCI "in the wild": VR/AR,
CSCW, ubiquitous computing, agents, accessibility. Heavy reading load, written assignments, no
required tooling.

**MIT 6.813/6.831 — User Interface Design and Implementation.** Sequence: usability definitions →
**human capabilities** (perception, motor control/Fitts's Law, memory, attention) → design
principles (learnability, visibility, efficiency, error prevention) → task analysis →
**implementation** (output/input/layout models, MVC, toolkits) → heuristic evaluation →
prototyping → **user testing and experiment design** → information design → graphic design and
color → accessibility → responsive/mobile. Unique in this inventory for teaching **UI toolkit
implementation** alongside design.

**UC Berkeley CS 160 — User Interface Design and Development.** Design thinking studio + mobile app
build: contextual inquiry, task analysis, sketching, paper prototyping, heuristic evaluation,
usability testing, iterative design, plus actual Android/web implementation.

**UW CSE 440 — Intro to HCI.** Design-thinking studio: contextual inquiry → task analysis →
design sketching → paper prototyping → heuristic evaluation → usability testing → final poster.

**Common academic pattern:** psychology/human capabilities and *evaluation methods* are taught
early and graded hard; visual/aesthetic craft gets one lecture near the end, if at all.

---

## A10. Other "design for developers" curricula `[model-knowledge]`

- **Practical UI (Adham Dannaway)** — ebook aimed squarely at developers; ~"practical rules"
  organised as layout & spacing, typography, color, contrast, hierarchy, components, forms,
  iconography, accessibility, dark mode. Directly competitive with Refactoring UI.
- **Refactoring UI: The Video Series** (Wathan/Schoger) — screencast companion showing live
  redesigns; same topic spine as the book.
- **Josh Comeau — "CSS for JavaScript Developers"** — adjacent, not a design course, but the
  layout/spacing/flow mental models overlap heavily with what design courses call "layout."
- **Storybook — "Design Systems for Developers"** — free curriculum: architecture, component
  libraries, documentation, distribution, workflow. Treats design as an engineering artifact.
- **Nielsen Norman Group UX Certification** — modular seminar-based; core modules are usability
  testing, IA, interaction design, UX research methods, visual design, content strategy,
  management. Highest price point, strongest research/heuristics emphasis.
- **Bootcamp-style programs** (Designlab UX Academy, CareerFoundry, Springboard, General Assembly)
  — all follow essentially the Google-cert spine: research → IA → wireframe → prototype → test →
  visual → portfolio, over 3–9 months with mentorship.
- **Hack Design / "Design for Hackers" (David Kadavy)** — self-directed reading lists and a book
  arguing developers should learn design through *visual history and typography* first.

---

# PART B — BOOKS

## B1. Refactoring UI — Adam Wathan & Steve Schoger `[web-verified]`

**Audience:** developers, explicitly ("for developers who want to design"). **Size:** ~50 short,
image-heavy chapters over 200+ typeset pages; readable in a few hours. No exercises.
**Verified 8-section structure** (confirmed against the official TOC page listing and two
independent GitHub notes repos):

1. **Starting from Scratch** — start with a feature, not a layout; don't design the whole app at
   once; hold the color (design in grayscale first); don't over-invest early; work in cycles
   (build as you design); choose a personality (typeface, color, border radius, language);
   limit your choices / define systems in advance
2. **Hierarchy is Everything** — "when everything competes for attention it feels noisy and
   chaotic"; not all elements are equal; size isn't everything (use weight and color);
   dark = primary, gray = secondary, lighter gray = tertiary; emphasize by de-emphasizing;
   labels are secondary; separate visual hierarchy from document hierarchy; balance weight and
   contrast; semantic ≠ visual hierarchy; primary/secondary/tertiary **actions** (button styling)
3. **Layout and Spacing** — start with too much white space; establish a **spacing system** on a
   scale (e.g. 4/8/12/16/24/32/48…); you don't have to fill the whole screen; grids are overrated /
   don't use fixed-width columns for everything; **relative sizing doesn't scale**; avoid
   ambiguous spacing; **mobile-first**, then scale up
4. **Designing Text** — establish a **type scale** (limit font sizes); use good fonts; keep line
   length to **45–75 characters**; baseline, not center, for mixed sizes; line-height is
   proportional to line length; not every link needs a color; align with readability in mind
   (left-align most text; avoid center-aligned long text); letter-spacing (tighten headlines,
   loosen all-caps)
5. **Working with Color** — ditch hex for **HSL**; you need more colors than you think
   (~8–10 shades per color, 3 palettes: **greys, primary, accents**); define shades up front;
   don't let lightness kill saturation; **greys don't have to be grey** (tint them);
   accessible doesn't have to mean ugly; don't rely on color alone
6. **Creating Depth** — emulate a light source ("light comes from above; to make something feel
   lifted, add a shadow on the bottom"); use **shadows to convey elevation** (a two-tier shadow
   system: small for buttons, large for modals); overlap elements to create layers; flat designs
   still have depth
7. **Working with Images** — use good photos (hire a photographer / use quality stock); text needs
   consistent contrast over images (overlay/scrim, lower image contrast, colorize); **don't scale
   up icons** — enclose small icons in a shape instead; beware user-uploaded content (use inner
   border/shadow)
8. **Finishing Touches** — supercharge the defaults (better bullets, quotes, tables, links);
   add color with accent borders; decorate backgrounds (subtle gradients/shapes/patterns);
   **don't overlook empty states**; **use fewer borders** (use shadow/background/spacing instead);
   "think outside the box" — reimagine dropdowns, tables, lists, radio buttons as richer UI

**Emphasizes:** actionable visual rules with before/after screenshots; systems (spacing scale, type
scale, color shades) over taste; the *specific* failure modes developer-built UIs exhibit.
**De-emphasizes:** everything process-related — no user research, no testing, no IA, no personas,
no accessibility beyond contrast, no code.

---

## B2. The Design of Everyday Things — Don Norman (Revised & Expanded, 2013) `[ch. 1,4,5,6,7 web-verified; 2,3 model-knowledge]`

**Audience:** general readers, designers, engineers. **Size:** 7 chapters, ~350 pages. No exercises.
The last two chapters are new to the revised edition; the revised edition also added a dedicated
chapter on the human-centered design *process*.

1. **The Psychopathology of Everyday Things** — the Norman door; discoverability and understanding;
   the fundamental principles: **affordances, signifiers, constraints, mappings, feedback,
   conceptual models**; the "Gulf of Execution" and "Gulf of Evaluation"
2. **The Psychology of Everyday Actions** — how people do things and how they explain them
   (falsely); the **seven stages of action** (goal → plan → specify → perform → perceive →
   interpret → compare); the three levels of processing: **visceral, behavioral, reflective**;
   people blame themselves for design failures
3. **Knowledge in the Head and in the World** — precise behavior from imprecise knowledge;
   constraints simplify memory; memory as knowledge in the head; the structure of memory;
   **trade-off between knowledge in the world (easy, slow) and in the head (fast, needs learning)**;
   natural mapping; culture and design conventions
4. **Knowing What to Do: Constraints, Discoverability, and Feedback** — the four constraint types:
   **physical, cultural, semantic, logical**; forcing functions (interlocks, lock-ins, lock-outs);
   sound as feedback; discoverability + feedback as a continuous loop
5. **Human Error? No, Bad Design** — the central reframing; **slips (right plan, wrong action) vs.
   mistakes (wrong plan)**; capture/description/mode errors; root-cause analysis and the Swiss
   cheese model; designing for error; resilience engineering
6. **Design Thinking** — the double-diamond (diverge/converge twice); **human-centered design
   process: observation → idea generation → prototyping → testing**, iterated; activity-centered
   design; "what I just told you won't work" (the reality of constraints)
7. **Design in the World of Business** — competitive pressure and featuritis; new technologies
   force change; the two forms of innovation (**incremental vs. radical**); the lifecycle of
   product ideas; the future of design; moral obligations of design

**Emphasizes:** conceptual vocabulary (affordance/signifier/mapping/feedback), error as a design
failure, psychology of action.
**De-emphasizes:** anything screen-specific — no typography, no color, no layout, minimal digital
UI, no tooling. This is the source everyone cites for *vocabulary* and almost nobody uses for
*practice*.

---

## B3. Don't Make Me Think, Revisited (3rd ed.) — Steve Krug `[web-verified TOC]`

**Audience:** anyone who builds or commissions websites — explicitly written to be read on a plane
in a couple of hours. **Size:** 13 chapters, ~200 heavily-illustrated pages.
Loose part groupings `[model-knowledge]`: Guiding Principles (1–3), Things You Need to Get Right
(4–7), Making Sure You Got It Right (8–9), Larger Concerns (10–13).

1. **Don't make me think!** — Krug's first law of usability; self-evident vs. self-explanatory;
   every question mark adds cognitive load
2. **How we really use the Web** — **scanning, satisficing, muddling through**; users don't read,
   they scan; they don't make optimal choices, they take the first reasonable option; they don't
   figure out how it works, they muddle through
3. **Billboard Design 101** — design for scanning: **visual hierarchy**, conventions, clearly
   defined areas, obvious clickability, **reduce noise**
4. **Animal, Vegetable, or Mineral?** — "it doesn't matter how many times I have to click, as long
   as each click is a mindless, unambiguous choice"
5. **Omit needless words** — get rid of half the words on each page, then half of what's left;
   kill happy talk and instructions
6. **Street signs and Breadcrumbs** — **navigation design**: persistent nav, site ID, sections,
   utilities, search, "you are here" indicators, breadcrumbs, the **trunk test**
7. **The Big Bang Theory of Web Design** — the **home page** must convey identity, hierarchy,
   what's here, where to start, and the tagline/value proposition
8. **"The Farmer and the Cowman Should Be Friends"** — **stop the religious debates**; the answer
   to most design arguments is "it depends," and the way to settle them is to test
9. **Usability testing on 10 cents a day** — **DIY discount usability testing**: 3 users, once a
   month, morning of testing / afternoon of debriefing; the value of watching people, not asking
   opinions
10. **Mobile: It's not just a city in Alabama anymore** — mobile constraints, tradeoffs of "mobile
    versions," affordances lost to touch, the flat-design discoverability problem
11. **Usability as common courtesy** — the **reservoir of goodwill**; things that deplete it
    (hiding info, punishing for not doing things your way, asking for unneeded info, sham
    sincerity) and refill it
12. **Accessibility and you** — a short, guilt-free onramp; do the easy things first (alt text,
    heading structure, form labels, keyboard order); read one book, fix the obvious
13. **Guide for the perplexed** — how to get usability adopted when the org is hostile/broke

**Emphasizes:** cognitive economy, scanning, navigation, cheap testing, common sense.
**De-emphasizes:** visual craft (no typography or color instruction), research methods beyond
testing, any process framework, mobile depth, code.

---

## B4. About Face: The Essentials of Interaction Design (4th ed.) — Cooper, Reimann, Cronin, Noessel `[model-knowledge — chapter titles approximate]`

**Audience:** professional interaction designers and product teams; effectively the textbook of the
"goal-directed design" school. **Size:** ~700 pages, 21 chapters in 3 parts. Reference-grade, not a
weekend read.

**Part I — Goal-Directed Design (process)**
1. A Design Process for Digital Products
2. Understanding the Problem: Design Research
3. Modeling Users: **Personas and Goals** (this book is where personas come from)
4. Setting the Vision: **Scenarios and Design Requirements**
5. Designing the Product: **Framework and Refinement**
6. Creative Teamwork

**Part II — Making Well-Behaved Products (behavior principles)**
7. A Basis for Good Product Behavior
8. **Digital Etiquette** ("software should behave like a considerate human being")
9. **Platform and Posture** (sovereign / transient / daemonic postures)
10. **Optimizing for Intermediates** (not beginners, not experts — the perpetual intermediate)
11. **Orchestration and Flow** (harmonious interaction; protecting flow state)
12. **Reducing Work and Eliminating Excise** (excise = work that serves the tool, not the goal)
13. **Metaphors, Idioms, and Affordances**
14. Rethinking Data Entry, Storage, and Retrieval
15. **Preventing Errors and Informing Decisions**
16. Designing for Different Needs (accessibility, localization, learnability tiers)
17. Integrating Visual Design

**Part III — Interaction Details (platform-specific patterns)**
18. Designing for the Desktop
19. Designing for Mobile and Other Devices
20. Designing for the Web
21. Design Details: **Controls and Dialogs**

**Emphasizes:** personas and goal-directed process; *product behavior* as a first-class subject —
posture, flow, excise, etiquette, the perpetual intermediate. Nobody else teaches these.
**De-emphasizes:** visual/aesthetic craft (one chapter), quantitative research, modern
design-systems practice.

---

## B5. 100 Things Every Designer Needs to Know About People — Susan Weinschenk `[model-knowledge]`

**Audience:** designers and developers wanting the psychology behind design rules. **Size:** 100
two-page entries in **10 sections of 10** — a reference/browse book, not a linear read.

1. **How People See** — peripheral vision, pattern recognition, face recognition, color vision and
   colorblindness, size/contrast perception, "we see at an angle"
2. **How People Read** — reading is pattern recognition; ALL CAPS is hard; typeface vs. legibility;
   line length; reading online vs. print; F-pattern; reading level
3. **How People Remember** — working memory limits, "**4 items, not 7**" (updated Miller),
   chunking, recall vs. recognition, memory reconstruction, sleep and consolidation
4. **How People Think** — cognitive load, the brain wants less information, mental models vs.
   conceptual models, **progressive disclosure**, storytelling, flow, spacing effect
5. **How People Focus Their Attention** — selective attention, habituation, inattentional
   blindness, multitasking is a myth, the "salience" of movement/sound
6. **What Motivates People** — the closer to a goal the more motivated (goal-gradient), variable
   rewards / dopamine, intrinsic vs. extrinsic reward, mastery, competition, autonomy
7. **People Are Social Animals** — social proof, imitation, strong/weak ties, Dunbar's number,
   synchronous activity, laughter, oxytocin and trust
8. **How People Feel** — emotion and attention, surprise, "**attractive things work better**",
   anecdotes over data, anticipation, music and emotion
9. **People Make Mistakes** — everyone makes errors; prevention over correction; error messages;
   "people will make errors when under time pressure"; not all errors are bad
10. **How People Decide** — most decisions are unconscious; people decide with emotion then justify;
    **choice paralysis** / too many options; anchoring; loss aversion; confidence and defaults

**Emphasizes:** empirically-grounded, citation-per-claim psychology; each entry is one testable
fact plus a design implication.
**De-emphasizes:** process, tooling, visual craft, any coherent sequence.

---

## B6. Universal Principles of Design — Lidwell, Holden & Butler `[model-knowledge]`

**Audience:** cross-disciplinary designers (product, industrial, graphic, UI). **Size:** originally
100 principles (2003), 125 in the revised edition (2010), 200 in the recent expanded edition.
**Structure:** strictly **alphabetical**, one principle per two-page spread — left page text, right
page visual example. No sequence at all; the book instead supplies thematic cross-reference indexes
("How can I influence the way a design is perceived?", "How do I learn from designs?", "How can I
increase usability?", "How can I make better design decisions?").

**Principles most frequently reused elsewhere:** 80/20 Rule, Affordance, Alignment, Chunking,
Closure, Cognitive Dissonance, Consistency, Constraint, Cost-Benefit, Errors, Feedback,
Fitts's Law, Figure-Ground, Flexibility-Usability Tradeoff, Form Follows Function, Framing,
Gestalt principles (proximity/similarity/closure/continuation/common fate), Golden Ratio,
Hick's Law, Hierarchy, Iconic Representation, Interference Effects, Iteration, Legibility,
Mapping, Mental Model, Mimicry, Modularity, Nudge, Ockham's Razor, Performance Load,
Picture Superiority Effect, Progressive Disclosure, Proximity, Readability, Recognition Over Recall,
Redundancy, Rule of Thirds, Satisficing, Scaling Fallacy, Serial Position Effect,
**Signal-to-Noise Ratio**, Similarity, **Von Restorff Effect**, Visibility, Wayfinding.

**Emphasizes:** breadth, cross-domain applicability, one-page digestibility, visual exemplars.
**De-emphasizes:** any application sequence, any digital/UI specificity, process, tooling.

---

## B7. The Non-Designer's Design Book (4th ed.) — Robin Williams `[model-knowledge]`

**Audience:** the literal non-designer — office workers, self-publishers, developers. **Size:**
~200 pages, exercise-driven, the shortest useful visual-design book in this inventory.

**Part 1 — Design Principles**
- The Joshua Tree Epiphany (you can't design what you can't name)
- **Proximity** — group related items
- **Alignment** — nothing arbitrary; every element has a visual connection
- **Repetition** — repeat visual elements to unify
- **Contrast** — if two things aren't the same, make them *very* different
  (the four together = **C.R.A.P.**)
- Review + "little quiz" exercises; before/after redesigns

**Interlude — Design with Color**
- Color wheel, hue/shade/tint/tone; complementary, triadic, split-complement, analogous,
  monochromatic; warm vs. cool; **CMYK vs. RGB**; how much color to use

**Part 2 — Designing with Type**
- Type (and Life) — concord / conflict / **contrast**
- **Type categories**: Oldstyle, Modern, Slab serif, Sans serif, Script, Decorative
- **Type contrasts**: size, weight, structure, form, direction, color
- Combining typefaces; extra tips & tricks (punctuation, quotes, spacing, widows/orphans)
- Answers to exercises; typeface index

**Emphasizes:** four nameable principles + type contrast, learned by doing before/after critiques.
Highest ratio of "immediately usable" to "pages read" of any book here.
**De-emphasizes:** screens entirely (examples are print/flyers/business cards), UX, research, code.

---

# PART C — Cross-source frequency analysis

Sources counted (18): Google UX Cert (G), IxDF (I), Learn UI Design (LUI), Learn UX Design (LUX),
Shift Nudge (SN), Scrimba/DesignCourse (SC), Frontend Masters D4D (FM), University HCI syllabi
(UNI, treated as one), Refactoring UI (RUI), DOET (N), Don't Make Me Think (K), About Face (AF),
100 Things (100T), Universal Principles (UPD), Non-Designer's Design Book (NDDB), Practical UI (P),
NN/g certification (NNG), Storybook Design Systems (DS).

## Tier 1 — near-universal (appears in ~10+ sources): the 80/20 core

| Topic | Appears in | Notes |
|---|---|---|
| **Visual hierarchy / emphasis & de-emphasis** | G, I, LUI, SN, SC, FM, RUI, K, AF, UPD, NDDB, P, NNG | The single most universal topic. Framed as "hierarchy" (RUI, LUI), "billboard design" (K), "contrast" (NDDB), "scale/emphasis" (SC). |
| **Typography** (scale, weight, line length, pairing) | G, I, LUI, SN, SC, FM, RUI, 100T, UPD, NDDB, P | Second most universal. The 45–75 character measure appears in RUI, NDDB, 100T, LUI. |
| **Color** (palette construction, contrast, semantics) | G, I, LUI, SN, SC, FM, RUI, 100T, NDDB, P, NNG | HSL/HSB-based palette building specifically in RUI, LUI, SN, P. |
| **Layout, spacing, whitespace, alignment** | G, I, LUI, SN, SC, FM, RUI, UPD, NDDB, P, DS | Spacing *systems* (a numeric scale) specifically in RUI, LUI, SN, P, DS. |
| **Usability testing / watching real users** | G, I, LUX, UNI, K, AF, NNG | Krug's "3 users, once a month" is the cheapest framing; universities teach formal protocols. |
| **Iterative design process / prototyping fidelity** | G, I, LUX, UNI, N, AF, NNG, DS | lo-fi → hi-fi is near-universal outside the pure visual-craft books. |
| **Accessibility / contrast / inclusive design** | G, I, LUX, UNI, RUI(light), K, AF, P, NNG, FM(sibling course) | Present nearly everywhere but *depth varies wildly* — one chapter (K), one lesson (LUX), or a whole course (I, FM). |
| **Gestalt principles / grouping / proximity** | G, I, LUI, SC, UNI, 100T, UPD, NDDB, NNG | Google cert names them explicitly in the wireframing course; NDDB calls it "proximity." |

## Tier 2 — common (5–9 sources)

| Topic | Appears in | Notes |
|---|---|---|
| **Information architecture / navigation / sitemaps** | G, I, LUX, UNI, K, AF, NNG | Owned by the UX-side sources; entirely absent from every visual-craft source. |
| **Affordances, signifiers, mappings, feedback** | I, UNI, N, AF, UPD, 100T, NNG | Norman's vocabulary; near-zero presence in developer-facing visual courses. |
| **User research: interviews, personas, journey maps** | G, I, LUX, UNI, AF, NNG | Personas originate in AF; Google cert makes them a whole course. |
| **Responsive / mobile design** | G, LUI, LUX, SC, RUI(mobile-first), K, AF, P | RUI's "design mobile-first then scale up" is the compressed version. |
| **Forms, inputs, controls, error states** | LUX, SC, UNI, AF, RUI(finishing touches), P, NNG | Underrepresented relative to how much of a dev's actual UI work this is. |
| **Design systems / components / tokens** | G, I, SN, DS, P, NNG, FM(sibling) | Rising topic; absent from the older books entirely. |
| **Human error, slips vs. mistakes, error prevention** | UNI, N, AF, 100T, UPD, NNG | Almost entirely an academic/book topic; no dev-facing course teaches it. |
| **Cognitive psychology: attention, memory, load** | I, UNI, N, 100T, UPD, K(implicitly), NNG | K teaches the *conclusions* (scanning, satisficing) without the psychology. |
| **Depth, shadows, elevation** | LUI, SN, SC, RUI, P, DS | Purely a modern-UI-craft topic; no book older than ~2010 covers it. |
| **Images, photography, icons** | LUI, SN, SC, FM, RUI, NDDB(light), P | RUI's "don't scale up icons — put them in a shape" is the canonical rule. |

## Tier 3 — rare / single-source (the differentiators)

| Topic | Source(s) | Why it's notable |
|---|---|---|
| **Product *behavior*: posture, flow, excise, digital etiquette, "the perpetual intermediate"** | AF only | The most valuable orphaned framework in the inventory. Nothing else teaches "excise." |
| **Empty states, loading, edge states as a design subject** | RUI, P (and lightly LUX) | High practical value for developers; nearly invisible elsewhere. |
| **"Emphasize by de-emphasizing" as a technique** | RUI, LUI | A genuinely non-obvious lever that developers never discover on their own. |
| **Design in grayscale first ("hold the color")** | RUI, SN(implied) | Single most-quoted RUI heuristic. |
| **"Reservoir of goodwill"** | K only | Krug's framing of usability as courtesy. |
| **Settling design arguments ("the farmer and the cowman"; the answer is "it depends, go test")** | K only | Directly applicable to dev-team dynamics. |
| **Perfection / psychological unblocking for developers** | FM only | Drasner spends real time on developer impostor syndrome about design. |
| **Optics vs. math (optical alignment/adjustment)** | SN only | The visual-craft topic developers most reliably get wrong. |
| **UI toolkit implementation (MVC, layout/output/input models)** | MIT/UNI only | The bridge topic between design and code that no design course touches. |
| **Experiment design / statistics for evaluation** | UNI, NNG | Academic-only. |
| **Design sprints (as a named 5-day format)** | G, I | Almost a Google-specific artifact. |
| **Freelancing, business plans, landing clients** | G (course 7), LUX (block 3) | Career content, not design content. |
| **Portfolio construction as a graded deliverable** | G, LUX, bootcamps | Absent from every book and every dev-facing course. |
| **Distributed cognition, CSCW, ubiquitous computing** | UNI only | Pure HCI academia. |
| **Innovation types (incremental vs. radical), business pressure on design** | N (ch. 7), AF | Norman's business chapter is widely skipped by readers. |
| **Alphabetical reference format with no sequence** | UPD only | Structurally unique; explains why it's a lookup book, not a course. |
| **Motion / animation** | FM, SN(light), DS | Surprisingly rare given how much modern UI depends on it. |
| **Copywriting / microcopy / "omit needless words"** | K, AF(light), NNG | Rare and high-leverage; Krug's is the only memorable treatment. |
| **Dark mode** | P, RUI(absent), DS(light) | Recent topic, barely covered by any established curriculum. |

## Structural observations across sources

1. **Two disjoint curricula wear the same name.** The "UX" curricula (Google, IxDF, universities,
   NN/g, About Face, DOET, Krug) teach process, research, evaluation and vocabulary and contain
   almost no visual instruction. The "UI" curricula (Refactoring UI, Learn UI Design, Shift Nudge,
   Scrimba, Practical UI, Non-Designer's) teach typography/color/space/hierarchy and contain almost
   no research or testing. Only Erik Kennedy sells both, as **two separate products** — which is
   itself evidence they don't fit in one course.
2. **The visual-craft consensus is small and stable.** Across LUI/SN/SC/RUI/P/NDDB the shared spine
   is: **hierarchy → typography → color → spacing/layout → depth → images → components/polish.**
   Scrimba's free intro compresses it to seven words: white space, alignment, contrast, scale,
   typography, color theory, visual hierarchy.
3. **Time commitments span three orders of magnitude:** Frontend Masters 4h20m → Scrimba ~8h →
   Refactoring UI ~a few hours reading → Learn UI Design 16h → Learn UX Design ~22h → Shift Nudge
   ~40h/8 weeks → Google Certificate ~200h/6 months → a university semester. The two shortest
   (FM, Scrimba intro) are the closest analogues to the target course, and both drop research,
   testing and process entirely.
4. **Everyone teaches hierarchy first or near-first; nobody teaches research first except the
   process schools.** Refactoring UI, Learn UI Design and Shift Nudge all open with
   "start from scratch / foundations," then go straight to hierarchy or typography.
5. **Systems beat taste, consistently.** The four most dev-respected sources (RUI, LUI, SN, P) all
   frame their teaching as *constrain your choices in advance*: a type scale, a spacing scale, a
   fixed set of color shades, a two-tier shadow system. This is the framing that translates
   cleanly to a developer's existing instincts.
6. **Almost nothing addresses the developer's real starting position** — an existing app that looks
   bad — except Refactoring UI (before/after redesigns), Shift Nudge (client-work walkthroughs)
   and DesignCourse (redesign videos). The process curricula assume a greenfield project and a
   research budget.

---

# Source URLs

### Google UX Design Certificate
- https://www.coursera.org/professional-certificates/google-ux-design
- https://www.coursera.org/learn/foundations-user-experience-design
- https://www.coursera.org/learn/start-ux-design-process
- https://www.coursera.org/learn/wireframes-low-fidelity-prototypes
- https://www.coursera.org/learn/conduct-ux-research
- https://www.coursera.org/learn/high-fidelity-designs-prototype
- https://www.coursera.org/learn/responsive-web-design-adobe-xd
- https://www.coursera.org/learn/ux-design-jobs
- https://www.skills.google/paths/2271/course_templates/1285
- https://www.classcentral.com/course/google-ux-design-36437
- https://www.classcentral.com/course/foundations-user-experience-design-35132
- https://www.classcentral.com/course/wireframes-low-fidelity-prototypes-35136
- https://www.classcentral.com/course/conduct-ux-research-35135
- https://www.classcentral.com/course/responsive-web-design-adobe-xd-35133
- https://www.mooc-list.com/course/foundations-user-experience-ux-design-coursera
- https://www.mooc-list.com/course/conduct-ux-research-and-test-early-concepts-coursera
- https://www.mooc-list.com/course/design-user-experience-social-good-prepare-jobs-coursera
- https://designlab.com/blog/google-ux-design-certificate-on-coursera-is-it-worth-it
- https://www.lessonsindesign.com/coursera-start-the-ux-design-process/
- https://www.lessonsindesign.com/conduct-ux-research/
- https://www.lessonsindesign.com/high-fidelity-designs-and-prototypes/
- https://www.lessonsindesign.com/user-experience-for-social-good/
- https://quiztudy.com/coursera-google-courses/google-ux-design-pc-weekly-breakdown/start-the-ux-design-process-week-2/
- https://quiztudy.com/coursera-google-courses/google-ux-design-pc-weekly-breakdown/conduct-ux-research-week-2/
- https://medium.com/@fernnandoptr/ux-foundations-course-1-of-7-google-ux-design-journey-40853a08df06
- https://medium.com/design-bootcamp/my-experience-with-the-google-ux-certificate-course-3-build-wireframes-and-low-fidelity-prototypes-b12cb82ebb7f
- https://medium.com/design-bootcamp/annotations-google-ux-design-professional-certificate-course-4-7-4384491a0fa4
- https://medium.com/design-bootcamp/case-study-google-ux-certificate-course-5-create-high-fidelity-designs-and-prototypes-in-figma-5fc6444e5279
- https://medium.com/javarevisited/review-is-courseras-google-ux-design-professional-certificate-worth-it-2025-03c834e90dd1
- https://www.careers360.com/courses-certifications/google-foundations-of-user-experience-ux-design-course
- https://www.careers360.com/courses-certifications/google-build-wireframes-and-low-fidelity-prototypes-course
- https://www.careers360.com/courses-certifications/google-design-user-experience-for-social-good-and-prepare-for-jobs-course

### Interaction Design Foundation
- https://www.interaction-design.org/courses/user-experience-the-beginner-s-guide-DEPRECATED
- https://interaction-design.org/courses/user-experience-the-beginner-s-guide
- https://public-media.interaction-design.org/pdf/IDF-Course-Learning-Paths.pdf
- https://mockitt.medium.com/best-10-interaction-design-foundation-courses-ux-beginners-should-know-ff4d80250330
- https://bpb-eu-w2.wpmucdn.com/sites.aub.edu.lb/dist/c/13/files/2019/06/the-basics-of-ux-design.pdf

### Refactoring UI
- https://www.refactoringui.com/book/table-of-contents
- https://refactoringui.com/
- https://github.com/elrincondeldev/refactoring-ui-notes (fetched)
- https://github.com/Swapnil-ingle/refactoring-ui-notes (fetched)
- https://github.com/tigerabrodi/refactoring-ui-notes (fetched)
- https://github.com/luismartinezs/web-design-ux-ui-cheatsheet
- https://github.com/knowledge-worker77/refactoring-ui-book
- https://uxcellence.com/library/refactoring-ui
- https://howtoes.blog/2025/07/04/refactoring-ui-complete-book-summary-all-key-ideas/
- https://medium.com/@azeezbasitopeyemi/summarizing-the-first-3-chapters-of-refactoring-ui-book-by-adam-wathan-and-steve-schoger-12ccbc305826
- https://medium.com/design-bootcamp/book-review-refactoring-ui-b39081c7753c
- https://www.bookey.app/book/refactoring-ui

### The Design of Everyday Things
- https://jnd.org/books/the-design-of-everyday-things-revised-and-expanded-edition/
- https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654
- https://dokumen.pub/the-design-of-everyday-things-9780465050659-9780465003945-2013024417.html
- https://medium.com/design-bootcamp/chapter-4-knowing-what-to-do-constraints-discoverability-and-feedback-df4ea21fd5d8
- https://medium.com/design-bootcamp/chapter-5-human-error-no-bad-design-1965afd57ce
- https://www.supersummary.com/the-design-of-everyday-things/summary/
- https://readingraphics.com/book-summary-the-design-of-everyday-things/
- https://www.melissadu.com/posts/the-design-of-everyday-things

### Don't Make Me Think
- https://sensible.com/dont-make-me-think/
- https://www.peachpit.com/store/dont-make-me-think-revisited-a-common-sense-approach-9780321965516
- https://search.schlowlibrary.org/Record/425548/TOC
- https://readingraphics.com/book-summary-dont-make-me-think/
- https://www.bookey.app/book/don't-make-me-think,-revisited

### Erik Kennedy — Learn UI Design / Learn UX Design
- https://www.learnui.design/
- https://www.learnui.design/courses/learn-ux-design.html
- https://www.erikdkennedy.com/
- https://css-tricks.com/learn-ui-design-complete-video-course/
- https://dribbble.com/shots/3225037--Curriculum-Learn-UI-Design
- https://mlily.medium.com/learnui-design-review-d8430e0edd1d
- https://mlily.medium.com/learn-ux-design-review-481160ab3d1
- https://maryshaw.net/learn-ui-design-course/

### Shift Nudge
- https://shiftnudge.com/
- https://shiftnudge.com/curriculum
- https://shiftnudge.com/what-is-shift-nudge
- https://shiftnudge.com/schedules/8
- https://shiftnudge.com/schedules/12
- https://shiftnudge.com/free
- https://medium.com/design-bootcamp/my-honest-review-of-the-shift-nudge-interface-design-course-770d15f0b4b0

### Scrimba / DesignCourse
- https://scrimba.com/learn/designbootcamp
- https://v1.scrimba.com/learn/designbootcamp
- https://www.classcentral.com/course/learn-ui-design-201891
- https://www.classcentral.com/course/ui-design-294369
- https://www.classcentral.com/course/scrimba-design-86269
- https://www.coursera.org/learn/learn-ui-design
- https://dev.to/scrimba/learn-basic-ui-design-in-5-minutes-1mlk

### Frontend Masters
- https://frontendmasters.com/courses/design-for-developers/
- https://frontendmasters.com/courses/design-for-developers/introduction/
- https://frontendmasters.com/courses/design-for-developers/what-this-course-is-setup/
- https://frontendmasters.com/courses/design-for-developers/perfection/
- https://frontendmasters.com/courses/design-for-developers/layout-tools/
- https://frontendmasters.com/courses/design-for-developers/sources-of-inspiration/
- https://frontendmasters.com/teachers/sarah-drasner/
- https://frontendmasters.com/topics/design/
- https://github.com/sdras/design-for-developers (fetched)
- https://www.classcentral.com/course/frontend-masters-design-for-developers-118042

### Other / general
- https://www.coursera.org/learn/fundamentals-of-uiux-design
- https://www.coursera.org/learn/user-experience-design
- https://www.coursera.org/career-academy/roles/user-interface-user-experience-ui-ux-designer
- https://www.springboard.com/resources/guides/interaction-design-course/
- https://github.com/topics/refactoring-ui (fetched)

### Sources cited from model knowledge only (NOT fetched this session — verify before quoting)
- About Face 4th ed. TOC — Wiley product page / publisher listing
- 100 Things Every Designer Needs to Know About People — New Riders/Peachpit listing
- Universal Principles of Design — Rockport Publishers listing
- The Non-Designer's Design Book 4th ed. — Peachpit listing
- Stanford CS147 syllabus — hci.stanford.edu / cs147 course site
- Georgia Tech CS 6750 — omscs.gatech.edu course page
- MIT 6.813/6.831 — ocw.mit.edu / web.mit.edu course site
- UC Berkeley CS 160, UW CSE 440 course sites
- Practical UI — practical-ui.com
- Storybook "Design Systems for Developers" — storybook.js.org/tutorials
- Nielsen Norman Group UX Certification — nngroup.com/ux-certification
