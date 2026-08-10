# 04 — Visual / UI Craft Layer (Raw Inventory)

**Scope of this file (agent 4 of 9).** The concrete, actionable rules that make interfaces
*look* good — especially as taught to software developers. Typography, spacing & layout,
color, visual hierarchy, depth & polish, plus the canonical "master rule-lists" (Anthony
Hobday, Erik Kennedy, Refactoring UI, Butterick, design-system foundations).

**Explicitly NOT covered here** (owned by other agents): abstract UX laws/heuristics as
theory, interaction & motion patterns, research process, community threads, course
syllabi, delivery formats. Where motion/accessibility rules appear below, they are
incidental to a source I mined for visual rules and are marked as out-of-scope-but-noted.

This is an **inventory, not a curation**. Everything is captured with rule statement,
why-it-works, before/after where the source gives one, and a source URL.

---

## ⚠️ Provenance note — read before using this file

This session ran under two hard constraints that shaped how sources were obtained:

1. **Network egress allowlist.** The environment's egress proxy denied CONNECT to almost
   every design domain: `anthonyhobday.com`, `learnui.design`, `medium.com`,
   `refactoringui.com`, `practicaltypography.com`, `m3.material.io`,
   `polaris.shopify.com`, `nngroup.com`, `smashingmagazine.com`, `webaim.org`,
   `w3.org`, `css-tricks.com`, `tailwindcss.com`, `web.archive.org`, `x.com`, and
   `reddit.com` all returned 403 at the proxy. Only `github.com`,
   `raw.githubusercontent.com`, `gist.github.com` and `developer.apple.com` were reachable.
2. **WebSearch budget exhausted session-wide** (200/200 calls consumed across the
   9 parallel agents) partway through this task.

**Consequence:** the primary-source *text* below was recovered from **verbatim mirrors and
distillations hosted on GitHub**, not fetched from the canonical URLs. Every entry is
tagged with its provenance:

- **[VERBATIM-MIRROR]** — a complete, word-for-word copy of the original article found in a
  public GitHub repo. Treated as reliable; canonical URL still cited.
- **[NOTES]** — a reader's chapter-by-chapter notes on a source. High fidelity to the
  source's *claims*, but wording is the note-taker's.
- **[THIRD-PARTY DISTILLATION]** — an AI-authored or curator-authored knowledge base that
  compiles rules from many named sources. Useful raw material, but **numbers and
  attributions in these should be spot-checked against the original before publishing.**
- **[ORIGINAL]** — fetched directly from the publisher.

Anything that a course would quote as authoritative should be re-verified against the
canonical URL once network access permits. Flagged verification targets are listed in
§8.2.

---

# 1. Typography

## 1.1 Butterick — *Practical Typography*, "Typography in ten minutes" / "Summary of key rules"

Source: <https://practicaltypography.com/typography-in-ten-minutes.html> and
<https://practicaltypography.com/summary-of-key-rules.html>
Provenance: **[NOTES]** via `ckorhonen/claude-skills` →
<https://raw.githubusercontent.com/ckorhonen/claude-skills/main/skills/practical-typography/references/key-rules.md>
Cross-checked against **[THIRD-PARTY DISTILLATION]** `cgallic/design-os` typography canon
(§1.6), which quotes the same thresholds.

**The core claim (why any of this matters).** Butterick: *"Typography matters because it
helps conserve the most valuable resource you have as a writer — reader attention."* And
the utilitarian test of quality: *"Typography that reinforces the meaning of the text, even
if aesthetically unpleasant, is a success. Sometimes ugly is better than pretty."*

**The five rules that "make you better than 90% of writers and designers":**

| # | Rule | Threshold | Why |
|---|---|---|---|
| 1 | **Body text quality determines document quality.** Design body text first, everything else after. | — | "There's more body text than anything else." Headings/decoration are a rounding error by volume. |
| 2 | **Point size** | Print 10–12 pt; **web 15–25 px** | The comfortable reading band for the medium. |
| 3 | **Line spacing** | **120–145% of point size** (CSS `line-height: 1.2`–`1.45`) | Word-processor "single" (≈117%) and "double" (200%) defaults, and CSS `line-height: normal`, are *not* acceptable substitutes for an explicit value. |
| 4 | **Line length** | **45–90 characters** per line average, including spaces | Too short → frequent regressions at line breaks. Too long → hard to find the next line's start. |
| 5 | **Professional fonts.** Buy one; never Times New Roman or Arial. | — | "When Times New Roman appears in a book, document, or advertisement, it connotes apathy." |

**The four most important considerations for body text**, per Butterick, are exactly:
**point size, line spacing, line length, and font** — "because those choices determine how
the body text looks."

**Font choice — avoid:** goofy fonts; monospaced fonts (except for code); most free fonts;
system fonts, *especially* Times New Roman and Arial.

**Formatting rules (the "summary of key rules" list):**

- **Quotation marks:** curly (" "), never straight (").
- **Emphasis:** use **bold or italic as little as possible**; **never both together**;
  **never underline** except for web links.
- **Capitalization:** ALL CAPS are fine for **less than one line** of text. Add **5–12%
  extra letterspacing** to ALL CAPS and small caps.
- **Sentence spacing:** **one space** between sentences, not two. No multiple word spaces
  in a row.
- **Paragraph signal:** use **first-line indents (1–4× point size) OR space between
  paragraphs (4–10 pt) — not both.**
- **Alignment:** centered text sparingly. **If you justify, always turn on hyphenation.**
- **Kerning:** always on.
- **Dashes:** don't confuse hyphen / en dash / em dash (`-`, `–`, `—`). Never `--` as a dash.
- **Ampersands** sparingly unless in proper names.
- Use real ™, ®, © symbols, not alphabetic approximations.
- In documents over 3 pages, **one exclamation point is plenty.**
- **Apostrophes point downward** (’), not (‘).
- **Ellipses:** the real character (…), not periods and spaces.
- **Foot and inch marks are straight** (″, ′), not curly.
- Nonbreaking space after ¶ and § marks.
- **If you don't have real small caps, don't use them at all.**

**Web-specific:** prevent text from flowing to browser-window edges; use `line-height` with
a **unitless** value (e.g. `1.3` for 130%); 15–25 px body.

**Butterick's "common mistakes" list (a ready-made before/after set for a course):**
Times New Roman or Arial · underlining · two spaces after periods · fake small caps ·
multiple hyphens as a dash · alphabetic approximations of symbols · mixing indent +
paragraph spacing · justified text without hyphenation · exclamation-point inflation ·
bold + italic together.

## 1.2 Refactoring UI — "Designing Text" chapter

Source: *Refactoring UI*, Adam Wathan & Steve Schoger — <https://refactoringui.com/book/>
Provenance: **[NOTES]** via `hughbien/notebook` →
<https://raw.githubusercontent.com/hughbien/notebook/master/refactoring_ui.md>
and `elrincondeldev/refactoring-ui-notes` →
<https://raw.githubusercontent.com/elrincondeldev/refactoring-ui-notes/main/README.md>

**Rule: Establish a type scale.**
*Statement:* "Most UIs have too many font sizes." Systematize your font-size selections
into a hand-picked scale.
*The book's example scale (px):* **12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72.**
*Why it works:* exponential progression — many options at small sizes, bigger gaps as sizes
grow — so adjacent steps are always perceptibly different. (Weber–Fechner grounding in §7.2.)
*Units:* **"Don't use ems"** (relative to current font size, so they compound
unpredictably). **Stick to px or rem.** Avoid modular-ratio generators that yield
fractional sizes.

**Rule: Use good fonts.**
- Play it safe with a **neutral sans-serif** — Helvetica or system fonts.
- **"Ignore typefaces with fewer than five weights."** (A family with few weights can't
  support a hierarchy.)
- Optimize for legibility. **Avoid condensed typefaces with short x-heights for main UI text.**
- Fonts meant for **headlines** have tighter letter-spacing and shorter x-height; fonts
  meant for **small sizes** have wider letter-spacing and taller x-height. Match the font
  to the job.
- **"Steal other people's font selections."** Inspect sites you admire.

**Rule: Keep your line length in check.**
*Statement:* Aim for **45–75 characters per line.** A width of **20–35 em** gets you in the
ballpark.
*Why:* readability research (see §7.3).

**Rule: Baseline, not center.**
*Statement:* Vertically align text by its **baseline**, not by centering the boxes.
*Corollary:* **The wider a line of text is, the bigger the line-height needs to be.**
Narrow content can use `line-height: 1.5`; wide content might need `2`. **Small fonts
require more line-height** too. Large headings tighten toward **1–1.25**.
*i.e. line-height and font size are inversely proportional; line-height and measure are
directly proportional.*

**Rule: Not every link needs a color.**
*Statement:* Colored links make sense in long-form text content. In a UI it's less
necessary — **a heavier font weight or darker color** is often enough.
*Why:* saves the color channel for hierarchy work that actually needs it.

**Rule: Align with readability in mind.**
- The vast majority of text should be **left-aligned** for English readers.
- **Center alignment works for headlines and short blocks only** — don't center long-form
  content. (Refactoring UI canon threshold: no centered block over ~3 lines.)
- **Right-align numbers in table cells** so decimal places line up. Use tabular
  (fixed-width) figures — `font-variant-numeric: tabular-nums`.
- If you justify, turn on `hyphens: auto`.

**Rule: Use letter-spacing effectively.**
*Statement:* **Trust the typeface designer and leave letter-spacing alone** most of the
time. Exceptions: **headlines may need tighter tracking**; **ALL CAPS needs wider tracking**.
*Canon thresholds derived from the book + Schoger's CSS Day 2019 talk:* `text-transform:
uppercase` → `letter-spacing ≥ +0.03em`; headings ≥36px may go to about `−0.02em`; body
letter-spacing = 0.

**Rule (from the Hierarchy chapter, but typographic): two font weights is usually enough.**
Normal (400 or 500) for most text; heavier (600 or 700) for emphasis. **Stay away from
font weights under 400 for UI work** — they can work for large headings but are too hard to
read at smaller sizes. If you want to de-emphasize, **use a lighter color or smaller size
instead of a lighter weight.**

## 1.3 Erik Kennedy on type — font sizes, line height, pairing

Source (canonical): Learn UI Design blog —
<https://www.learnui.design/blog/ultimate-guide-font-sizes-ui-design.html>,
<https://www.learnui.design/blog/step-by-step-guide-pairing-fonts.html>
Provenance: **[THIRD-PARTY DISTILLATION]** — `dawitlabs/dawits-skills` UI knowledge base →
<https://raw.githubusercontent.com/dawitlabs/dawits-skills/main/ui-design-principles/SKILL.md>
⚠️ Numbers below are the distiller's rendering of Kennedy's articles. **Verify before quoting.**

**Minimum / comfortable font sizes:**

| Context | Min | Comfortable |
|---|---|---|
| Body text | 15px | 16–18px |
| Secondary / supporting | 13px | 14px |
| Labels / captions | 11px | 12–13px |
| Navigation | 14px | 15–16px |
| Small headings | 20px | 22–24px |
| Large headings | 28px | 32–48px |

"Never go below 12px for any readable text."

**Platform units (a developer-relevant gotcha):** iOS/macOS = points (pt); Android layout =
dp; Android fonts = **sp** (respects the user's accessibility text setting); web = CSS px.
**Always design at @1x** — the guidelines only hold at 1x scale.

**Line height:** body **1.4–1.6×**; headings **1.1–1.25×** (tighter — large text doesn't
have multi-line rhythm problems); captions/labels **1.3–1.4×**.

**Hierarchy through size contrast:** "The difference between heading and body must be
immediately obvious — not just 2px apart." Ratios: **H1 ≈ 2.5× body, H2 ≈ 1.75× body,
H3 ≈ 1.25× body.** **Most UIs need 3 heading levels maximum.**

**Font pairing (Kennedy's "Step-by-Step Guide for Pairing Fonts"):**
- **95% of good font pairings are one serif + one sans-serif.**
- **Max 2 typefaces** except in highly stylized editorial work.
- **Body font criteria:** high x-height, open counters, **never calls attention to itself**.
- 6-step process: (1) determine brand identity as adjectives (clean / classy / friendly /
  quirky / techie) → (2) brainstorm fonts matching that *subtly* → (3) select the body font
  for legibility → (4) add a secondary font to fill brand gaps → (5) define per-font usage
  rules (headings, labels, body, nav, forms, footer) → (6) repeat 4–5 until the system is
  complete.
- Brand→font map: Clean/Simple → geometric neutral sans · Classy/Luxury → high-contrast
  serif (Didone) · Friendly → rounded humanist sans · Quirky → distinct personality font,
  **headlines only** · Techie → bold geometric sans.

**Font-shape ↔ border-radius pairing** (from Kennedy's "King vs. Pawn Game of UI Design"):
**rounded fonts → rounded border-radius** (e.g. Satoshi → 6–8px); **squared/geometric fonts
→ sharp corners (0px)**. Also: **always add letter-spacing to uppercase text** — fonts
designed for sentence case appear cramped in all-caps.

## 1.4 Erik Kennedy — "7 Rules for Creating Gorgeous UI", the typographic rules

Source: <https://www.learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-1.html> and
<https://www.learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-2.html>
(originally Medium, Nov 2014; updated 2024)
Provenance: **[NOTES]** via `daryllxd/lifelong-learning` →
<https://raw.githubusercontent.com/daryllxd/lifelong-learning/master/design/seven-rules-for-creating-gorgeous-ui.md>

Full 7-rule list is in §6.2; the type-specific ones:

**Rule 5 — Make text pop, and un-pop.**
*Statement:* "To pop: big, bold, capitalized. To decrease: small, less contrast, less margin."
*The key insight:* **"Page titles are the only element to style all-out up-pop. For
everything else, you need up- AND down-pop."**
*Worked example given in the article:* big stat **numbers** are up-popped with large size,
color and center alignment — **but simultaneously down-popped with a very light font-weight
and a lower-contrast color** than the dark grey. The **small labels below the numbers** are
uppercase and **very bold**. i.e. the two elements trade emphasis channels rather than both
shouting.
*Corollary on hover/selected states:* changing font-size, case, or weight changes how much
area the text occupies → **"seizing" hover effects** (layout shift). Safe channels for
state: text color, background-color, shadows, underlining, slight animations, or inverting
white/colored elements.
*The pep talk the article closes the rule with:* "If it doesn't look good, it could if you
were better."

**Rule 6 — Use good fonts.**
*Statement:* just use known-good fonts rather than exercising taste you don't have yet.
*Original 2014 list:* Ubuntu, Open Sans, Bebas Neue (for all caps), Montserrat, Gotham,
Proxima Nova, Raleway, Cabin, Lato, PT Sans, Entypo Social.
*Updated list per the third-party distillation of the 2024 revision (⚠️ verify):* Satoshi,
Metropolis, Source Sans, Figtree. Avoid novelty fonts in body text and fonts with
inconsistent weights. Always set `font-display: swap`.

## 1.5 Hobday's typographic rules

(Full 28-rule list with explanations is in §6.1.) The type subset:

- **Keep body text at 16px or above.** 16px is the default text size in most browsers; text
  below this gets harder to read. "The higher you go beyond 16px, the easier the text is to
  read."
- **Use a line length around 70 characters.** "It doesn't matter too much if your line
  length is 60 or 80 characters, but go too far either side of that and you might run into
  subtle readability issues."
- **Lower letter spacing and line height with larger text. Raise them with smaller text.**
  "If you do not do this, large text can look spread out, and small text can look too close."
- **Use two typefaces at most.** "A second typeface is an opportunity to reinforce the
  concept behind a design… It's rarely necessary to use more than two, and it might make the
  design feel visually confused."

## 1.6 The typography canon: Butterick + Bringhurst + Lupton, as enforceable rules

Provenance: **[THIRD-PARTY DISTILLATION]** — `cgallic/design-os` →
<https://raw.githubusercontent.com/cgallic/design-os/main/design_os/canon/typography-canon.md>
This file is unusually valuable because it converts the canon into **checkable thresholds
with per-rule attribution**. ⚠️ It is AI-authored; the quotes are plausible and consistent
with the primary sources but should be verified.

**Framing quotes worth stealing for a course:**
- Bringhurst: **"Typography exists to honor content."**
- Bringhurst: **"Space in typography is like time in music. It is infinitely divisible, but
  a few proportional intervals can be much more useful than a limitless choice of arbitrary
  quantities."** ← the single best one-line argument for type scales and spacing scales.
- Bringhurst: **"Anything from 45 to 75 characters is widely regarded as a satisfactory
  length of line… the 66-character line is widely regarded as ideal."**
- Lupton: **"Typography is what language looks like."** and **"Design is as much an act of
  spacing as an act of marking."**
- Goudy, via Bringhurst: **"A man who would letterspace lower case would steal sheep."**

**Operational rules table (rule / threshold / source):**

| Rule | Threshold | Source cited |
|---|---|---|
| Body text size in the reading band for the medium | print 10–12 pt; web body **15–25 px** | Butterick, "Point size" |
| Line spacing of body text | **1.20 ≤ line-height ≤ 1.45** | Butterick, "Line spacing" |
| Body measure | hard band **45–90 chars**; ideal **66**; flag single-column prose outside 45–75; multi-column 40–50 | Butterick + Bringhurst §2.1.2 |
| **Vertical rhythm from one basic leading** — every block-level departure (heading + margins, figure, blockquote) consumes a **whole-number multiple of the base line-height**. Worked example: text at 11/13 → intrusions of 26, 39, 52, 65 pt. | `(element height + margins) mod base-leading = 0` ±1px for ≥95% of blocks | Bringhurst §2.2 |
| Type sizes come from a **declared modular scale**, ≤7 steps per artifact; **adjacent hierarchy steps differ perceptibly** — a heading within ~1–2 pt (<15%) of body size is Lupton's "tentative and arbitrary" type crime | all sizes ∈ one scale; adjacent used steps differ ≥15% or ≥2 pt | Bringhurst §2.4 (classic 6-7-8-9-10-11-12-14-16-18-21-24-36-48-60-72 series); Lupton |
| Letterspacing: caps/small-caps **+5–12%**; **lowercase body = 0, never letterspace lowercase** | `0.05em–0.12em` caps; `0 ±0.01em` body | Butterick; Bringhurst §2.1.6–7; Goudy |
| **No synthesized or distorted letterforms** — no faux bold, faux italic (mechanical slant), pseudo small caps, no horizontal/vertical scaling or skewing of text. If the real style doesn't exist in the font, don't use the style. | `font-synthesis: none`; `scaleX/scaleY` on text = 1.0; small caps only via real SC glyphs | Lupton "type crimes"; Butterick |
| Emphasis is a **single** signal: bold **or** italic never both; **no underlined non-link text**; all-caps runs shorter than one line; emphasized text ≤5% of body characters | as stated | Butterick |
| **One paragraph signal, not two**: first-line indent 1–4× point size **XOR** inter-paragraph space 4–10 pt | both present = fail | Butterick |
| Real typographic characters: curly quotes, close-apostrophe (’), true ellipsis (…), distinct hyphen/en/em dash, straight primes only for feet/inches, real ©/™, nonbreaking space after ¶/§ | zero straight quotes, zero `...`, zero `--` | Butterick |
| Single spacing characters: exactly one space between sentences; no runs of spaces for alignment. Justified word spaces average about **M/4** (range M/5–M/3, i.e. 0.20–0.33em). | as stated | Butterick; Bringhurst §2.1.1 |
| **Justified requires hyphenation**; otherwise set flush left / ragged right. Check justified blocks for rivers; check rags for shapes and 1-word lines. | no line with word-space > 0.5em in justified text | Butterick; Bringhurst; Lupton |
| **Font choice signals intent** — Times New Roman, Arial, Comic Sans banned as body faces; goofy/grunge/monospaced banned for running prose | computed body font-family ∉ default stack; mono only for code/tabular | Butterick |
| **Typeface budget ≤2 families** per artifact (mono for code exempt). Differentiate within a family by weight, style, size first. | ≤2 | Butterick "Mixing fonts"; Lupton |
| Kerning always on; **old-style/text figures in running prose, lining/tabular figures in tables and UI counters** | `font-kerning: normal`; tabular figures in numeric columns | Butterick; Bringhurst §2.3.2 |
| **Leading adapts to the face and measure** — add line spacing above the 120% floor for sans-serifs, dark/bold faces, large x-heights, and long measures | at 75–90 char measure, sit in the upper half of the 1.2–1.45 band | Bringhurst §2.2.1 |
| **Hierarchy consistent and shallow** — same cue-set per level everywhere; prefer **one changed variable per level**; **no more than 3 heading levels** | ≤3 levels; 100% identical style per level | Butterick "Headings"; Lupton |
| **Centered and vertical type are ceremonial exceptions** — centered only for short lapidary fragments, never body paragraphs; **vertically stacked type only in all-caps** (stacked lowercase is a type crime — mismatched widths wreck the column); prefer rotating the line over stacking | 0 centered paragraphs > 3 lines; 0 stacked lowercase | Butterick; Lupton |
| **Read-then-set gate** — write down what the text is, who reads it, and its goals *before* choosing type; body text spec approved before any heading styling exists | 1 written brief predating type choices | Bringhurst §1.1 "Read the text before designing it"; Butterick |

**Canon anti-patterns (reject on sight):** Times/Arial as the chosen face · faked type
(faux bold/italic, pseudo small caps, stretched letterforms) · letterspaced lowercase ·
all-caps *without* added letterspacing · bold+italic combined · underlined emphasis ·
ALL-CAPS paragraphs · untouched default spacing (`line-height: normal`) · 100+ character
lines · both indent and paragraph space · typewriter habits (straight quotes, two spaces
after periods, `--`, `...`) · justified with hyphenation off · **tentative hierarchy**
(heading 1pt from body) *and its opposite*, every level shouting with size+weight+color+caps
at once · **ad-hoc size zoo** (a new size invented per element) · stacked lowercase ·
exclamation-point inflation.

## 1.7 Micro-typography rules aimed at developers (Vercel Web Interface Guidelines)

Source: <https://github.com/vercel-labs/web-interface-guidelines>
Provenance: **[ORIGINAL]** →
<https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md>
(This is a lint-style ruleset written *for* developers — extremely well-suited to the course's
audience. Non-visual rules omitted; those are other agents' scope.)

- Use `…` not `...`
- Curly quotes `“ ”` not straight `"`
- **Non-breaking spaces**: `10&nbsp;MB`, `⌘&nbsp;K`, brand names
- Loading states end with `…`: `"Loading…"`, `"Saving…"`
- **`font-variant-numeric: tabular-nums` for number columns / comparisons**
- **`text-wrap: balance` or `text-pretty` on headings** (prevents widows)
- Text containers must handle long content: `truncate`, `line-clamp-*`, or `break-words`;
  **flex children need `min-w-0`** to allow truncation
- (from the interface-craft canon, same source family) **no font weights below 400**;
  **weight never changes on hover/selected state** — it causes layout shift
- Mobile input `font-size ≥ 16px` — prevents iOS auto-zoom on focus

**Content/copy rules from the same list** (visual-adjacent, useful for label design):
active voice ("Install the CLI" not "The CLI will be installed") · Title Case for
headings/buttons (Chicago) · numerals for counts ("8 deployments" not "eight") · specific
button labels ("Save API Key" not "Continue") · error messages include the fix, not just
the problem · second person · `&` over "and" where space-constrained.

---

# 2. Spacing & Layout

## 2.1 Refactoring UI — "Layout and Spacing" chapter

Provenance: **[NOTES]**, same two note repos as §1.2.

**Rule: Start with too much white space.**
*Statement:* **"White space should be removed, not added."** Start by giving a UI too much
space, then remove until you're satisfied.
*Why it works:* an asymmetric perceptual bias — insufficient spacing creates immediately
noticeable visual tension ("cramped"), while generous spacing produces a calm/quality
sensation that's hard to pinpoint as excess. Developers reliably err on the under-spaced
side because CSS's default is *no* whitespace.
*Kennedy's version of the same rule (§6.2, Rule 3):* **"Double your whitespace."**
"Start thinking of whitespace as the default — everything starts as whitespace, until you
take it away by adding a page element." Starting from a blank page means **"everything you
draw is a conscious whitespace-removing decision."**

**Rule: Establish a spacing and sizing system.**
*Statement:* Limit yourself to a predefined set of spaces/sizes. **Use an exponential (not
linear) scale.**
*The book's example scale (px, 16px base):* **4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192,
256, 384, 512.**
*Rules of thumb from the canon distillation:* no two adjacent values closer than **~25%**;
scale defined in px/rem; **100% of margins, paddings, gaps and fixed sizes must come from
the scale** — no one-off values.
*Why it works:* (a) decision fatigue — "grab a number instead of tweaking by single
pixels"; (b) Weber–Fechner — equal *ratios*, not equal *increments*, look evenly spaced
(§7.2).

**Rule: You don't have to fill the whole screen.**
*Statement:* "Just because you have space doesn't mean you need to fill it. If you only
need 600px of width, just use that." Different elements on the page can be different widths.
*Tactic:* if you can't design for a large canvas, **shrink the canvas — design mobile
first**. If a UI feels weird when wide, **split it into multiple narrow columns**.
*Converse also holds:* don't cram into a small space either.

**Rule: Grids are overrated.**
*Statement:* **"Don't be a slave to the grid."** Some elements should stay fixed-width
(side navigations, avatars) while others expand. **Embrace fluid AND fixed widths.**
*Note the direct tension with Hobday's "if you use a horizontal grid, use 12 columns" and
with the Swiss/Müller-Brockmann canon (§6.5) — this is a genuine disagreement between
sources and is worth teaching as such.*

**Rule: Relative sizing doesn't scale.**
*Statement:* **"Large elements on a large screen need to shrink faster than elements that
are already fairly small"** when moving to a small screen. Sizes can scale independently.
Not everything needs to be relatively sized against something else.
*Corollary:* larger buttons should have proportionally more padding, not the same padding.
*Implementation note from the analysis (§7):* the book advises designing at roughly **400px
mobile width first**, expanding upward, using fixed `max-width` constraints rather than
percentage widths, and **tuning each element independently at each breakpoint** rather than
scaling proportionally.

**Rule: Avoid ambiguous spacing.**
*Statement:* Make it obvious which elements are grouped. **Labels should be closer to their
input than to the previous input.** Same for headers and the content they head.
*Why it works:* Gestalt proximity — spacing *is* the grouping signal. The failure mode is
inter-element and inter-group spacing being similar, which makes grouping ambiguous.
*Canonical formulation:* **"Ensure more space around groups than within them."**

## 2.2 Hobday's spacing & layout rules

(Full list §6.1.) The spacing subset, with his reasoning:

- **Measurements should be mathematically related.** "The spacing you use between elements,
  and the size of elements, should be determined by some kind of scale. This will help the
  design to look coherent. In the example below, every element uses **multiples of 8**."
- **Make outer padding the same or more than inner padding.** "Inner padding is the space
  between elements inside the container. Outer padding is the space between the elements
  and the edges of the container. **This outer padding should be the same or more than the
  inner padding.** Elements that are more related should be closer together. The elements
  inside a container are more related to each other than they are to the container itself."
  ← This is proximity, applied to containers, and it's a rule almost no developer knows.
- **Spacing should go between points of high contrast.** "Our eyes find the edges of
  elements based on contrast, so we expect the spacing to run between points of contrast."
  *Worked example:* on a white background with black paragraphs, the contrast points are
  the end of one paragraph and the start of the next. **But if you put a black background
  behind one white paragraph, the spacing should run from the end of one paragraph to the
  start of the black background, then again from the start of the black background to the
  start of the paragraph.** (i.e. the *box edge* becomes the measuring point, not the text.)
- **If you use a horizontal grid, use 12 columns.** "A 12 column grid can be broken up into
  1 column, 2 columns, 3 columns, and 4 columns, so it gives you a lot of flexibility."
- **Everything should be aligned with something else.** "Alignment helps us realise that
  things are related to each other. **If something is not aligned with anything else, it
  feels like it does not belong in the design.** Ideally each element should be aligned with
  other elements based on some kind of logic."
- **Optical alignment is often better than mathematical alignment.** "Your design software
  can align things mathematically. But some shapes don't suit this type of alignment… some
  odd shapes have a visual centre that is different from their mathematical centre. Often
  you will need to align things by eye so that it looks right." (Classic instances: a play
  ▶ triangle inside a circular button; a lowercase-heavy word against an uppercase one.)
- **Make horizontal padding twice the vertical padding in buttons.** "The standard button
  pattern is wider than it is tall. If you want people to recognise an element as a button,
  it's a good idea to follow the pattern." *Example given:* 30px above/below the label,
  60px left/right. (Practical CSS: `padding: 12px 24px`.)

## 2.3 The 8-point grid — rationale

Provenance: **[THIRD-PARTY DISTILLATION]** — `Nathandela/compound-agent` research doc →
<https://raw.githubusercontent.com/Nathandela/compound-agent/main/docs/compound/research/design/web-apps/refactoring-ui-design-principles.md>

*Statement:* Use an 8px base unit for the spacing system (Material Design uses an 8dp
baseline grid).
*Why 8 specifically:* **8px divides cleanly into common display densities (1×, 1.5×, 2×,
3×) without producing subpixel values** — an engineering constraint that happens to
reinforce the perceptual argument. A 4px sub-unit gives finer granularity where it matters
(small values).
*Why geometric, not arithmetic:* Weber–Fechner. "An arithmetic scale (4, 8, 12, 16, 20)
bunches perceptually at the lower end and spreads at the upper end." A geometric scale
(4, 8, 16, 32, 64) produces perceptually even increments.

**Tailwind's implementation of exactly this scale** (a useful concrete artifact for
developers): `p-0.5`=2px, `p-1`=4px, `p-2`=8px, `p-3`=12px, `p-4`=16px, `p-6`=24px,
`p-8`=32px, `p-12`=48px, `p-16`=64px, `p-24`=96px — "roughly geometric at the larger end
(doubling) with finer granularity at the smaller end (4px increments) — matching the
Weber-Fechner prediction that small differences matter more at small values."

**A more granular taxonomy worth knowing:** Nathan Curtis, "Space in Design Systems"
(EightShapes, 2016) splits spacing into three categories —
**inset** (padding within containers), **stack** (vertical rhythm between stacked
elements), **inline** (horizontal spacing between adjacent elements).
Canonical URL: <https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62>
*(not fetched — medium.com blocked)*

**Noted limitation (from the same analysis):** Refactoring UI's spacing advice predates /
ignores fluid spacing techniques — CSS `clamp()`, viewport units, Grid `fr`, `min()`/`max()` —
that give continuous responsiveness without breakpoints. Its "avoid percentage-based
sizing" advice can conflict with modern fluid layout.

## 2.4 The Swiss / Vignelli grid canon (the opposing, maximally-systematic view)

Provenance: **[THIRD-PARTY DISTILLATION]** — `cgallic/design-os` →
<https://raw.githubusercontent.com/cgallic/design-os/main/design_os/canon/swiss-grid.md>
Primary sources cited: Josef Müller-Brockmann, *Grid Systems in Graphic Design*; Massimo
Vignelli, *The Vignelli Canon* (free PDF, <https://www.rit.edu/vignellicenter/>); Emil
Ruder, *Typographie*. ⚠️ Verify quotes.

Included because it's the strongest counter-position to "grids are overrated," and because
several of its rules are directly portable to UI.

| Rule | Threshold | Source |
|---|---|---|
| **A grid must exist before layout begins and be documented in real units** — column count, module count, gutter width, outside margins, baseline unit. Eyeballed layout fails. | 1 written grid spec predating first layout | Müller-Brockmann; Vignelli |
| Every text block, image and component edge **aligns to the declared grid**; vertical positions in whole baseline increments | 100% of edges within 1px of a grid line; y-positions ≡ 0 mod baseline | Müller-Brockmann: "The fields correspond in depth to a specific number of lines of text and the width of the fields is identical with the width of the columns" |
| **Gutters = whole empty text lines vertically**; a single consistent horizontal gutter derived from the type size | vertical gutter = n × line-height; ≤1 distinct horizontal gutter value | Müller-Brockmann: "The vertical distance between the fields is one, two, or more lines of text" |
| **Grid granularity band** — neither so fine it constrains nothing nor so coarse it permits nothing | 8–32 grid fields; 2–6 columns for pages/screens | *Grid Systems* worked examples (2×4 to 4×8) |
| Body measure **7–10 words (~45–60 chars)** per line | flag outside 40–75 | Müller-Brockmann's line-length rule |
| **No more than two type sizes per page/screen**; differentiate beyond that with weight, italic and space | ≤2 sizes | Vignelli: "Our first rule is to stick to one or two type sizes at the most" |
| **Display-to-text contrast ≈ 2×** — not an in-between muddle. Vignelli's example: 10 pt text with 20 pt headings. Subheads may instead keep the text size and switch to bold. | heading ≈ 1.8–2.5× body, or heading = body size in bold; **nothing in the 1.1–1.5× dead zone as a "heading"** | Vignelli, "Type Size Relationship" |
| **Type size chosen for column width; leading one step above size** — 8/9, 9/10, 10/11 pt for columns ≤70mm; 12/13, 14/16 for ≤140mm; 16/18, 18/20 wider. In CSS: line-height ≈ 1.08–1.25× for continuous text, one ratio per role. | as stated | Vignelli |
| **≤2 typeface families, from a pre-approved shortlist of classics** (Garamond, Bodoni, Century Expanded, Futura, Times Roman, Helvetica, + Optima, Univers, Caslon, Baskerville) | ≤2 families; ≤12 faces org-wide | Vignelli, "Typefaces — The Basic Ones" |
| **Zero type deformation** — no stretched, squeezed, skewed, outlined or shadowed type; horizontal scale locked at 100% | as stated | Vignelli: "we are horrified by any type deformation" |
| Continuous text **flush left, ragged right** | 0 centered paragraphs >2 lines | Vignelli: justified "is fundamentally contrived" |
| **White space is a composed element, not leftover** — every view keeps a substantial contiguous empty area; content never runs edge-to-edge on all sides | ≥1 contiguous empty region of ≥1 full grid field; margins >0 all sides (Vignelli letterhead floor: 10mm) | Vignelli: **"It is the white space that makes the layout sing"**; "Bad layouts have no space left for breathing" |
| **Color is a signifier or identifier, never decorative wash** — small palette (Vignelli default: red, blue, yellow + black/white); each hue names the thing it identifies. Unnamed hues are removed. | ≤3 chromatic hues; 100% of hues carry a stated function | Vignelli, "Color" |
| Images sized to **whole grid fields** (1, 2, 3 or 4), and few distinct image sizes per document | 100% whole fields; ≤4 distinct sizes | Müller-Brockmann |
| **Text hierarchy uses only the enumerated Swiss devices**: color, weight, one larger size (within the 2-size budget), rules (lines), blank lines, line breaks. No boxes-as-emphasis, no underline-as-decoration, no ornament. **When rules are used: ~2pt rules separate major parts, 0.5–1pt rules separate items, and type hangs FROM the rule above** (set closer to the rule above than to the one below). | 100% of emphasis from the 6-device list; text-to-rule-above gap < text-to-rule-below gap | Ruder; Vignelli: "Type should always hang from the ruler, regardless of the size" |
| **One voice per view** — at most one primary emphatic element per screen | exactly 1 dominant element by size×weight; 0 ties at top level | Vignelli: enlarging and emboldening multiple elements to compete is **"intellectual vulgarity"** |
| Page/canvas formats come from a **proportion system** (DIN A-series √2, or a declared series); content shape drives container shape | format from a declared series, logged before layout | Vignelli, "Paper Sizes" |

---

# 3. Color

## 3.1 Refactoring UI — "Working with Color" chapter

Provenance: **[NOTES]**, same repos as §1.2.

**Rule: Ditch hex for HSL.**
*Statement:* HSL (Hue / Saturation / Lightness) is more readable and directly manipulable.
Hue = position on the color wheel (0° red, 120° green, 240° blue). Saturation = vividness
(0% grey → 100% intense). Lightness = 0% black, 100% white, 50% pure color at that hue.
(HSB/HSV differs: 0% brightness = black, 100% brightness = white.)
*Why it works:* HSL separates the three dimensions a designer wants to manipulate
independently. Hex/RGB does not — you cannot "make this 10% darker" in hex.

**Rule: You need more colors than you think.**
*Statement:* **"You can't build anything with five hex codes."** A good palette has three
categories, each with multiple shades:
- **Greys** — text, backgrounds, panels, form controls
- **Primary colors** — actions, active navigation
- **Accent colors** — eye-grabbing / semantic UI elements
*Concrete sizing (from the skill distillation, ⚠️ verify):* greys **8–10 shades**; primary
**5–10 shades** (≈9 is the sweet spot); each accent 5–10 shades. **Total 40–80 colors
defined up front.**

**Rule: Define your shades up front.**
*Process:* pick a base color — call it **shade 500**. Then pick the **edge shades 900 and
100** (darkest dark, lightest light). Then **fill in the gaps** — 9–10 steps
(50/100/200/…/900).
*Guidance:* **"The darkest shade of a color is usually reserved for text, while the
lightest shade might be used to tint the background of an element."*
*Important caveat from the book:* shades are **picked by hand in HSL, not generated by
programmatic lighten/darken** — because the numbers lie (see §7.4).

**Rule: Don't let lightness kill your saturation.**
*Statement:* As a color approaches 0% or 100% lightness, the impact of saturation weakens.
**If you don't want light shades to look washed out, increase the saturation as you
increase/decrease the lightness.**
*And the hue-rotation trick:* hues have inherent brightness. **"To make a color lighter,
rotate the hue towards the nearest bright hue"** (yellow 60°, cyan 180°, magenta 300°).
**"To make a color darker, rotate the hue towards the nearest dark hue"** (red 0°,
green 120°, blue 240°). **"Don't rotate the hue more than 20–30° or it will look like a
totally different color instead of just lighter or darker."**
*Kennedy's identical rule, stated as a formula (⚠️ third-party distillation):*
**"Darker = lower brightness + higher saturation. Lighter = higher brightness + lower
saturation. Never just darken or lighten — always move both values together."** And the
diagnosis of the common failure: **"only decreasing B produces dull, muddy darker shades
95% of the time"** — the correct mental model is *"removing white,"* not *"adding black."*

**Rule: Greys don't have to be grey. (= Hobday's "saturate your neutrals")**
*Statement:* True grey is 0% saturation. In practice, take a color and turn down its
saturation. **Cool feel → saturate with blue. Warm feel → saturate with a bit of yellow or
orange.** Increase saturation as you move away from 50% lightness.
*Why it works:* pure neutrals almost never appear in the real world; tinting greys with the
brand hue makes the palette feel coherent rather than assembled.

**Rule: Accessible doesn't have to mean ugly.**
*Statement:* WCAG: text under 18px needs **≥4.5:1**; larger text **≥3:1**.
*The tactic — "flipping the contrast":* when white-on-brand-color can't hit the ratio,
**don't shrink or embolden the text and don't ship the failing pair** — instead use
**dark colored text of the same hue on a light shade of that color** (the badge/pill
pattern). Also: **"You don't want the primary text and the secondary text to look the same;
one way to increase the contrast without getting closer to white is to rotate the hue
towards a brighter color, like cyan, magenta, or yellow."**

**Rule: Don't rely on color alone.**
*Statement:* **"Always use color to support something that your design is already saying;
never use it as the only means of communication."** Add icons or labels alongside color to
indicate categories/states.
*Why:* ~8% of men have some form of color blindness; red/green and blue/purple are the
worst pairs. (Figure from the third-party distillation — ⚠️ verify; the commonly cited
figure is ~8% of men / ~0.5% of women of Northern European descent.)

## 3.2 "Don't use grey text on colored backgrounds" — the single most-cited color rule

Source (canonical): "7 Practical Tips for Cheating at Design", tip 2 —
<https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886>
Provenance: **[VERBATIM-MIRROR]** →
<https://raw.githubusercontent.com/BoiseCodeWorks/codeworks-fs-student-guide/master/src/resources/wk1/04-Cheating-at-Design.md>

Full verbatim text of this tip (it is the clearest before/after in the whole literature):

> Making text a lighter grey is a great way to de-emphasize it on white backgrounds, but it
> doesn't look so great on colored backgrounds.
>
> **That's because the effect we're actually seeing with grey on white is _reduced
> contrast_.**
>
> **Making the text closer to the background color is what actually helps create hierarchy,
> not making it light grey.**
>
> There are two ways you can reduce contrast when working with colorful backgrounds:
>
> **1. Reduce the opacity of white text.** Use white text and lower the opacity. This lets
> the background color bleed through a bit, de-emphasizing the text in a way that doesn't
> clash with the background.
>
> **2. Hand-pick a color that's based on the background color.** This works better than
> reducing the opacity when your background is an image or pattern, or when reducing the
> opacity makes the text feel too dull or washed out. Choose a color that's the same hue as
> the background, adjusting saturation and lightness until it looks right to you.

*Why it works (mechanism):* grey-on-white "works" only incidentally — what the eye is
reading is *reduced contrast between text and background*. Grey is simply the color that
happens to be between black and white. On a blue background, the color between the text and
the background is **a desaturated blue, not grey.** Dropping in grey introduces a *hue
clash* on top of the contrast reduction, and the text reads as dirty/washed out rather than
secondary.

*Enforceable threshold from the canon distillation:* for text on a background with
saturation > 20%, the text hue must be **within ±30° of the background hue**, or pure
white. **Zero near-zero-saturation greys composited over chromatic fills.** Reduced-opacity
white is a *fallback*, not the default — it looks washed out over images/patterns.

## 3.3 60-30-10 and semantic color

Provenance: **[THIRD-PARTY DISTILLATION]** — `dawitlabs/dawits-skills` (citing UX Magazine,
"The Psychology of Color in UI/UX Design"). ⚠️ Verify.

**The 60-30-10 rule:**
- **60%** — dominant (backgrounds, main surfaces)
- **30%** — secondary (cards, sidebars, contrast areas)
- **10%** — accent (CTAs, highlights, key interactions)
*Why it works:* it forces a single dominant surface and reserves saturated color for the one
thing you want clicked; the failure mode it prevents is "accent fatigue," where everything
is colored and therefore nothing is emphasized.

**Semantic color meanings (Western context) — as taught, with the caveat:**

| Color | Communicates | Use for |
|---|---|---|
| Red | urgency, excitement | CTAs, alerts, errors |
| Blue | trust, calm, reliability | finance, auth, info |
| Green | safety, growth, success | success states, health |
| Yellow | warmth, optimism | warnings |
| Black | luxury, premium | high-end branding |
| White | clarity, space | minimal UI |

**Cultural caveat given in the same source:** red = danger in the West but luck/celebration
in Chinese culture. "Never assume color meaning is universal."

**Crucially — Refactoring UI's counter-rule: "Semantics are secondary."**
*Statement:* Semantics matter, but they must not override **hierarchy**. "Instead of
coloring buttons as red for delete, blue for edit, green for publish — just have one primary
color for publish, a secondary lighter color for edit, and make delete a link with no
background-color or border. **If a destructive action isn't the primary action, it doesn't
need to be big/red/bold.**"
*This is a direct conflict with the naive semantic-color table above and should be taught
as the resolution: hierarchy first, semantics second.*

**Vignelli's version of the same discipline** (§2.4): color is a **signifier or identifier**,
never decoration; ≤3 chromatic hues; **every hue must name the thing it identifies, and
unnamed hues get removed.**

## 3.4 Hobday's color rules

(Full list §6.1.) The color subset with his reasoning:

- **Use near-black and near-white instead of pure black and white.** "Pure black often has
  uncomfortably high contrast with other colours, and pure white is too bright."
  *(Practical: `#1a1a1a`/`#2a2a2a` instead of `#000`; `#fafafa`/`#f5f5f5` instead of `#fff`.)*
  Note Hobday states that **all other references to "black" and "white" in his rules assume
  you're following this rule.** Kennedy's independent version: **"Never use black."**
  The canonical developer-facing essay on this is Ian Storm Taylor, "Design Tip: Never Use
  Black" — <https://ianstormtaylor.com/design-tip-never-use-black/> (linked from the
  7 Practical Tips article; *not fetched — domain blocked*).
- **Saturate your neutrals.** "A neutral is generally a black, white, or grey. If you use
  colour in your interface, add a little bit of that colour to your neutrals. This will make
  the colour palette feel more coherent. **If you use the HSB colour system, less than 5%
  saturation should do it.**"
- **If you saturate your neutrals you should use warm OR cool colours, not both.** "If you
  use both warm and cool colours to saturate neutrals, the colour palette will not feel
  coherent." *Before/after given: left side uses a warm background with a cool foreground
  (wrong); right side uses a warm background and warm foreground (right).*
- **Use high contrast for important elements.** "Important elements means buttons, content,
  or anything else that the user needs to notice… Elements that the user does not need to
  notice (e.g. structural elements, drop-shadows) can use as little contrast as possible."
- **Colours in a palette should have distinct brightness values.** "When colours have
  different brightness values, this helps them look and feel distinctive not just in hue,
  but in brightness. This leads to better colour palettes because colours don't compete with
  each other as much."
- **Keep container colours within brightness limits.** "The brightness difference between
  background and container should be **within 12% for dark interfaces, and 7% for light
  interfaces.** These percentages refer to the brightness value in the HSB colour system.
  **This is based on a study of about 100 well-designed websites** where I checked the
  brightness of containers against the backgrounds." ← rare empirically-derived number.
- **Container borders should contrast with both the container and the background.**
  "If you have a card with a 1px border and a dark background, and it sits on top of an even
  darker background, the 1px border should be **lighter than both of them**. It should not be
  set to a brightness somewhere between the card and page background colours. Otherwise the
  edge of the container won't look sharp enough. The same applies to light background
  colours: the 1px border should be **darker than both**." *Before/after given.*
- **Closer elements should be lighter.** "As elements on the screen get closer to the user,
  they should get lighter. This applies to both light and dark mode UIs, because it matches
  how the real world works." *Before/after given.*

## 3.5 Contrast / WCAG in practice

Consolidated from Refactoring UI, the Apple HIG canon, and the interface-craft ruleset.

- **WCAG AA: 4.5:1 for normal text; 3:1 for large text** (large = ≥18pt regular / ≥14pt
  bold). Source: WCAG 2.x SC 1.4.3 — <https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum>
  *(not fetched — w3.org blocked)*
- **WCAG 2.1 SC 1.4.12 (Text Spacing)** requires content to remain functional at
  **line-height ≥ 1.5× font size** (among other spacing overrides) — a useful cross-check on
  the Butterick 1.2–1.45 band, which is *tighter*. **These two authorities disagree**; the
  resolution in practice is that Butterick is writing about typeset prose in print-derived
  contexts and WCAG about user-overridable web text. Worth flagging in the course.
- **Apple HIG:** text contrast ≥4.5:1; large text and essential non-text elements ≥3:1 —
  **including text over translucent or image backgrounds at their worst case.**
- **Perceived brightness varies by hue** — yellow/green appear lighter than blue/purple at
  the same HSL lightness; adjust accordingly. (Mechanism in §7.4.)
- **Don't fix a failing contrast pair by shrinking, bolding, or shipping it** — flip the
  contrast (dark text of the same hue on a light shade of that color).

---

# 4. Visual Hierarchy

## 4.1 Refactoring UI — "Hierarchy Is Everything" chapter

Provenance: **[NOTES]**, same repos as §1.2. This chapter is the densest single source of
hierarchy rules in the literature aimed at developers.

**Rule: Not all elements are equal.**
*Statement:* "When everything competes for attention, the design feels noisy and chaotic."
Deliberately **de-emphasize** secondary/tertiary information and highlight the important
items.

**Rule: Size isn't everything.**
*Statement:* Don't rely purely on font size. **Use font weight and color too.**
*The three-lever table:*

| Lever | Primary | Secondary | Tertiary |
|---|---|---|---|
| **Size** | larger | medium | smaller |
| **Weight** | bold (600–700) | medium (500) | regular (400) — **never below 400** |
| **Color** | dark (but **not black**) | grey | lighter grey |

*Concrete guidance:* "Try to stick to **2–3 colors**: a dark (but not black) color for
primary content (the headline of an article), a grey for secondary content (the publish
date), a lighter grey for ancillary content (the copyright notice in a footer)."
"**Two font weights is usually enough** for UI work."
*Enforceable version from the canon:* for each pair of adjacent text roles, there must be a
**Δcolor or Δweight, not only a Δsize**; supporting text stays **≥12px** rather than
shrinking below it; **≤3 text colors** doing hierarchy work.

**Rule: Emphasize by de-emphasizing.**
*Statement:* **"You can make elements stand out more by de-emphasizing the elements around
them."**
*Worked example given:* make the selected nav item a bold primary color **and make the
unselected nav items grey** — rather than making the selected one louder.
*Why it works:* de-emphasis raises the target's *relative* salience without adding visual
noise. (Preattentive-processing grounding in §7.1.)
*Enforceable version:* given "X lacks prominence," the diff should show **competitors muted
first** (softened inactive nav color, sidebar background removed, icon contrast lowered)
**before X was amplified.**

**Rule: Labels are a last resort.**
*Statement:* **Avoid the `label: value` format.** A contact card doesn't need
`Name: Erin Lindford` — just put `Erin Lindford` and emphasize it.
*The merge tactic:* if a piece of data isn't clear, **clarify the text rather than adding a
label**. Instead of `In stock: 12`, write **"12 left in stock"** and emphasize the 12.
Other examples: "3 bedrooms."
*When labels stay:* if you keep a label, **make it secondary — emphasize the data,
de-emphasize the label.** The **only** time to emphasize the label is when you know the
user is scanning *for that specific label* — e.g. an information-dense spec sheet. **In
that case the label gets the emphasis (darker) and the value goes lighter.**
*Decision procedure from the canon:* for each label — (a) deletable without ambiguity?
delete it. (b) mergeable into the value? merge it. (c) keep only with a stated scanning
rationale.

**Rule: Separate visual hierarchy from document hierarchy.**
*Statement:* **"Don't let the elements you use influence how you style them."** It might
make sense for one header to be an `h1` and another an `h3` — that doesn't mean the `h1`
needs a larger font-size. Sometimes you can visually hide an `h1` entirely and keep it in
the DOM because the content speaks for itself.
*Why this lands for developers specifically:* it names and kills the habit of styling by
tag, which is the #1 structural cause of accidental hierarchy in developer-built UI.

**Rule: Balance weight and contrast.**
*Statement:* **Bold text feels emphasized because it's more densely packed — it covers more
surface area in the same number of pixels.** **Icons are "heavy" too**, especially next to
text. Counter this by **de-emphasizing the icon — give it a softer color.** The same applies
to 1px borders.
*Hobday's independent version:* **"Lower the contrast of icons paired with text.** An icon
will often look visually heavier than any text it's paired with. Lower the background
contrast of icons paired with text. You can do this with opacity, or by making the icon
colour lighter/darker."

**Rule: Semantics are secondary.** (See §3.3.) "Every action sits on a pyramid of
importance."

## 4.2 Button hierarchy — the canonical three-tier rule

Source: "7 Practical Tips for Cheating at Design", tip 7 — **[VERBATIM-MIRROR]**

> Semantics are an important part of button design, but there's a more important dimension
> that's commonly forgotten: **hierarchy.**
>
> Every action on a page sits somewhere in a pyramid of importance. Most pages only have one
> true primary action, a couple of less important secondary actions, and a few seldom used
> tertiary actions.
>
> - **Primary actions should be obvious.** Solid, high contrast background colors work great here.
> - **Secondary actions should be clear but not prominent.** Outline styles or lower contrast
>   background colors are great options.
> - **Tertiary actions should be discoverable but unobtrusive.** Styling these actions like
>   links is usually the best approach.
>
> *"What about destructive actions, shouldn't they always be red?"* **Not necessarily!** If
> the destructive action isn't the *primary* action on the page, it might be better to give
> it a secondary or tertiary button treatment. Save the big, red, and bold styling for when
> that negative action actually *is* the primary action in the interface, **like in a
> confirmation dialog.**

*Named villain in the article:* **Bootstrap** — "Frameworks like Bootstrap sort of encourage
this by giving you a menu of semantic styles to choose from whenever you're adding a new
button." *"Is this a positive action? Make the button green." "Does this delete data? Make
the button red."*
*Enforceable threshold:* **≤1 solid high-contrast primary button per view/section.**

## 4.3 The squint test / MIT

Provenance: **[THIRD-PARTY DISTILLATION]** of Kennedy's "4 Rules for Intuitive UX" —
canonical: <https://www.learnui.design/blog/4-rules-intuitive-ux.html>. ⚠️ Verify.

*Statement:* **Squint your eyes until the screen blurs — what do you see first?** That
blurry focal point is your **MIT (Most Important Thing)**. If the wrong thing is the MIT,
fix the hierarchy: increase contrast, size, or color weight of the real priority.
**"Every screen must have exactly one MIT. If everything shouts, nothing is heard."**
*Vignelli's version:* exactly one dominant element per view; multiple competing enlarged +
emboldened elements is **"intellectual vulgarity."**
*Why it works:* squinting strips out detail and leaves only low-spatial-frequency
information — which is approximately what preattentive vision processes in the first
200–250ms (§7.1). It's a poor-man's saliency map.

## 4.4 Hobday's hierarchy rules

- **Elements should go in order of visual weight.** "If you have a series of elements in a
  row or column, and some are more visually heavy than others (two buttons and three links,
  for example), you should **arrange them like a triangle**. The visually heaviest element
  should go first, and the least heavy element last, in order. **One caveat is that the
  visually heaviest element should be on the outside edge.** If your elements are against the
  right edge of the design, the heaviest element should be against the right edge. Elements
  that go in size or weight order look more satisfying."
- **Everything in your design should be deliberate.** "You should be deliberate about
  absolutely everything… whitespace, alignment, size, spacing, colour, shadows. Everything.
  **If someone points at a random part of your design you should have an explanation for why
  it looks that way.** If you do not do this your design will not feel coherent. If you are
  new to design you can use this rule as a prompt to learn more about what you are not
  deliberate about yet."
- **Put simple on complex or complex on simple.** "A complex background (e.g. a colourful
  gradient fill) works best if the foreground (e.g. text) is simple. And a complex foreground
  element is best on a simple background. **You can put simple on simple, but it tends to
  look plain. Complex on complex should be avoided** because it's hard to pull off and will
  add visual clutter."

---

# 5. Depth & Polish

## 5.1 Shadows

**Kennedy — "Light comes from the sky" (Rule 1 of the 7).**
Provenance: **[NOTES]** via `daryllxd/lifelong-learning`.
*Statement:* "Light comes from the sky so frequently and consistently that for it to come
from below actually looks freaky." "Our screens are flat, but we've invested a great amount
of art into making just about everything on them appear to be 3-D."
*The four details he enumerates for an unpushed vs. pushed button:*
1. The unpushed button has a **dark bottom edge**.
2. The unpushed button is **slightly brighter at the top than at the bottom**.
3. The unpushed button **casts a subtle shadow**.
4. The pushed button, while still darker at the bottom than the top, is **darker overall**.
*Divider notch example:* the top is darker (angled away from the light), the bottom is
brighter (angled toward it).
*The taxonomy that makes this actionable:*
- **Inset elements:** text input fields, pressed buttons, slider tracks, unselected radio
  buttons, checkboxes.
- **Outset elements:** unpressed buttons, slider handles, dropdown controls, cards, the
  button part of a selected radio, popups.
*His verdict on flat design (2014, and still interesting):* iOS 7 is "literally flat — no
simulated protrusions or indentations, just lines and shapes of solid color. I love clean
and simple as much as the next guy, but I don't think this is a long-term trend. The subtle
simulation of 3-D in our interfaces seems far too natural to give up entirely."

**Refactoring UI — "Emulate a light source."**
*Statement:* For **raised** elements: inset shadow at the **inside-top** (lighter), normal
shadow at the **outside-bottom** (darker). For **inset** elements: **darker inset shadow at
the inside-top**, lighter shadow at the inside-bottom.

**Refactoring UI — "Use shadows to convey elevation."**
*Statement:* Small shadows with tight blur → slightly raised. Larger shadows with higher
blur → much closer to the user. **Make an elevation system of shadows, just like your font
sizes and colors.**
*The five-level system:* L1 subtle (buttons, form controls) · L2 medium (cards) ·
L3 pronounced (dropdowns, popovers) · L4 prominent (modals, dialogs) · L5 maximum (rare).
*Shadows as feedback:* "a normal button should be raised closer to the user than a clicked
button."

**Refactoring UI — "Shadows can have two parts."** ← the highest-leverage single tip here.
*Statement:* `box-shadow` accepts multiple shadows. Combine:
- a **larger, softer** shadow with a large vertical offset and blur radius — *the shadow cast
  behind the object by a direct light source*; and
- a **tighter, darker** shadow with less vertical offset and a smaller blur — *the shadow
  underneath the object*.
*Example given:* `box-shadow: 0 4px 6px rgba(0,0,0,.7), 0 5px 15px rgba(0,0,0,.1);`
*Why it works:* real-world lighting has an **ambient** component (omnidirectional, soft) and
a **directional** component (crisp, offset). A single `box-shadow` can model only one, which
is why single shadows read as fake. **Microsoft's Fluent 2 names these exact two components
"key shadow" and "ambient shadow"** — independent convergence by a major design system.

**"7 Practical Tips", tip 3 — Offset your shadows.** **[VERBATIM-MIRROR]**
> Instead of using large blur and spread values to make box shadows more noticeable, **add a
> vertical offset.** It looks a lot more natural because it simulates a light source shining
> down from above like we're used to seeing in the real world. This applies to inset shadows
> like you might use on wells or form inputs too.
*(The article points readers to the Material Design elevation/shadows guidelines as "a
fantastic primer": <https://m3.material.io/styles/elevation/overview> — not fetched, blocked.)*

**Hobday — Make drop shadow blur values double their distance values.**
> "If you create a shadow which extends 4 pixels on the Y axis, use a blur value of 8 pixels.
> **As the element gets 'closer' to the viewer, it's a good idea to also lower the opacity of
> the shadow.** This looks good because as elements move closer to the light source, their
> shadows get more blurry."
*i.e. `box-shadow: 0 4px 8px rgba(0,0,0,0.1)` — blur = 2 × distance.*

**Hobday — Don't use shadows in dark interfaces.**
> "It's hard to make shadows work in a dark interface. Either your background colour needs to
> be light enough to show a shadow, or the shadow needs to be hard enough that it'll stand
> out — which is more attention than a shadow probably needs. It also doesn't make much sense
> for shadows to be visible in a dark place."
*The industry's answer to the same problem:* **Material Design 3 (2021) supplemented shadows
with tonal elevation** — lighter surface colors at higher elevations in dark mode — precisely
because shadows become invisible on dark backgrounds. Material 1 and 2 used shadows
exclusively.

**Hobday — Don't mix depth techniques.**
> "Stick to one depth technique throughout an interface. If you've got a soft shadow on your
> main navigation bar, use soft shadows elsewhere. Don't suddenly switch to a hard/abstract
> shadow, or no shadow at all. **Any of these approaches are fine, but if you mix them it
> looks inconsistent and unprofessional.**"

**Shadow opacity calibrated to background luminosity** (Kennedy, "King vs. Pawn Game of UI
Design" — **[THIRD-PARTY DISTILLATION]**, ⚠️ verify the exact numbers):
- Light button on light background: `0 1px 2px rgba(0,0,0,0.30)`
- Dark/bold button: `0 2px 4px rgba(0,0,0,0.50)`
- Dark background context: `0 2px 3px rgba(0,0,0,0.40)` (vs `0.20` on light backgrounds)
- **Rule:** higher-luminosity background → lower shadow opacity needed; lower-luminosity
  background → higher opacity needed.
- **Diagnostic:** convert the button to grayscale to check whether the shadow darkness is
  matched to the background.
- **Alternative to a drop shadow:** a **30% black border on the bottom edge only** gives a
  softer depth effect.

**Tailwind's shadow scale as a reference implementation** of the dual-shadow philosophy:
```css
--shadow-sm:  0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow:     0 1px 3px 0 rgb(0 0 0 / 0.1),  0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg:  0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl:  0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```
Note the pattern: **vertical offset increases with elevation (1, 4, 10, 20, 25px); blur
increases faster than offset (3, 6, 15, 25, 50px); negative spread constrains the shadow's
horizontal footprint.**

**Further:** Josh W. Comeau, "Designing Beautiful Shadows in CSS" (2021) —
<https://www.joshwcomeau.com/css/designing-shadows/> *(not fetched — domain not probed/blocked)*.
Per the analysis doc, he extends the dual-shadow idea: **layering 3–5 subtle shadows with
varying color temperatures produces more naturalistic results than a single shadow of
equivalent total spread.**

## 5.2 Borders vs. spacing vs. background — separation without lines

**"7 Practical Tips", tip 4 — Use fewer borders.** **[VERBATIM-MIRROR]**

> When you need to create separation between two elements, **try to resist immediately
> reaching for a border.** While borders are a great way to distinguish two elements from one
> another, they aren't the *only* way, and **using too many of them can make your design feel
> busy and cluttered.**
>
> **Use a box shadow.** "Box shadows do a great job of outlining an element like a border
> would, but can be more subtle and accomplish the same goal without being as distracting."
>
> **Use two different background colors.** "Giving adjacent elements slightly different
> background colors is usually all you need to create distinction between them. **If you're
> already using different background colors in addition to a border, try removing the border;
> you might not need it.**"
>
> **Add extra spacing.** "What better way to create separation between elements than to simply
> increase the separation? Spacing things further apart is a great way to create distinction
> between groups of elements **without introducing any new UI at all.**"

*From the book, "Use fewer borders" applied:* table borders aren't necessary around the
entire table — try a box shadow; or a different background color for different UI elements
(like a search bar); or **instead of borders between each table row, add more vertical
spacing.**

*Why it works:* borders add visual weight to **every element they touch**. Each border is an
additional line the visual system must process, contributing to perceived complexity.
Rosenholtz, Li & Nakano (2007) showed that visual clutter degrades search performance and
increases perceived complexity — borders contribute to clutter even when their purpose is to
*reduce* ambiguity. The Gestalt principle of **closure** is what lets you drop them: when an
element has a distinct background color or a shadow, the visual system infers its boundary
without an explicit line.

*Enforceable version:* per separation, ask — was space (≥16px), Δbackground, or a shadow
viable? Borders only where those three demonstrably fail (dense tables are a legitimate
exception). **An element never wears both a border and a shadow doing the same separation
job** (no double separators).

*Honest limitation flagged in the analysis:* borders also serve **non-decorative** functions —
focus indicators for accessibility, interactive-element boundaries on form inputs, and
structural containment in data-heavy tables. "Use fewer borders" requires judgment about
which borders are decorative (removable) vs. functional (necessary), and **the book does not
systematically address this distinction.**
*Also noted:* zebra-striping tables instead of row borders has **mixed** empirical support —
Enders (2007) found it improved accuracy for very wide tables but had no significant effect
for narrower ones.

**Hobday's related rule — Don't put two hard divides next to each other.**
> "Background transitions, container edges, and dividing lines will create hard visual
> divides. **You should not have two or more hard divides next to each other.** More than one
> hard divide creates visual clutter and catches the eye." *In his example he removes the
> background transition so the hard divide comes only from the container edge.*

## 5.3 Border-radius consistency — corner nesting

**Hobday — Nest corners properly.** (Possibly the highest ratio of "instantly fixable" to
"nobody knows this" in the entire list.)
> "Sometimes you will have two or more rounded corners nested together. If you want them to
> look right, **set the inside corner radius to the outside corner radius, minus the distance
> between the two.** In the example below the outside radius is 30px, and there is a 20px
> gap, so the inside corner radius is 10px."

**`inner-radius = outer-radius − gap`**

```css
.outer { border-radius: 30px; padding: 20px; }
.inner { border-radius: 10px; } /* 30 − 20 */
```
*Why it works:* concentric arcs. If both radii are equal, the curves are not parallel and the
gap between them visibly varies around the corner — the eye reads it as sloppy without being
able to say why. As the gap approaches or exceeds the outer radius, the inner radius should
trend toward 0.

**Related — font-shape ↔ radius pairing** (Kennedy, §1.3): rounded typefaces pair with
rounded radii; geometric/squared typefaces pair with sharp corners. Border-radius is one of
the three levers Refactoring UI names for **"choose a personality"** (alongside font choice
and color): "border-radius makes it feel more playful and friendly."

## 5.4 Icons

**"7 Practical Tips", tip 5 — Don't blow up icons that are meant to be small.**
**[VERBATIM-MIRROR]**

> While it's true that vector images won't degrade in quality when you increase their size,
> **icons that were drawn at 16–24px are never going to look very professional when you blow
> them up to 3× or 4× their intended size. They lack detail, and always feel
> disproportionately "chunky".**
>
> **If small icons are all you've got, try enclosing them inside another shape and giving the
> shape a background color.** This lets you keep the actual icon closer to its intended size,
> while still filling the larger space.
>
> If you have the budget, use a premium icon set designed to be used at larger sizes.

*Named examples in the article:* Font Awesome and Zondicons as the small-icon sets people
reach for; Heroicons and Iconic as sets designed for larger use.
*Enforceable threshold:* icon rendered size ≤ **~1.5× its native design size** (never 3–4×).

**Icon drawing consistency** (Kennedy, "King vs. Pawn Game" — **[THIRD-PARTY DISTILLATION]**):
- **Match icon stroke weight to text weight.**
- Apply the **same corner radius to icons as the typeface uses**.
- **"Icons should appear drawn with the same pen as the typeface."**
- Avoid thick bubbly icon sets for precise/minimal UIs.

**Icon contrast** (Hobday + Refactoring UI, §4.1): icons look visually heavier than the text
they sit beside — lower their contrast (opacity, or a lighter/darker color).

## 5.5 Images and text-over-images

**Kennedy — Rule 4: Learn the methods of overlaying text on images.** **[NOTES]**
The enumerated techniques (this is a good "toolbox" slide):
1. **Text directly on the image** — only works if the image is dark and has few contrasting
   edges. **The text has to be white** ("no counterexamples exist"). Test at every
   screen/window size for legibility.
2. **Overlay the whole image** — if the original isn't dark enough, overlay it with
   translucent black. Works great for thumbnails or small images. Colored overlays work too.
3. **Text-in-a-box** — a mildly transparent black rectangle with white text on it.
4. **Blur** — blur part of the underlying image behind the text.
5. **Floor fade** — the image subtly fades toward black at the bottom with white text over
   it: a subtle gradient from the middle (0% opacity) to the bottom (black at 20% opacity).
   *Named example:* **Medium's collection thumbnails additionally use a slight text-shadow to
   further increase legibility — "as a result, Medium can layer just about any text on any
   image and have a readable result."*
6. **Floor blur** and **scrim** (a gradated-opacity box).

**Refactoring UI — "Text needs consistent contrast."** Same problem, its list:
add a semi-transparent overlay · lower the image contrast · **colorize the image** (lower
contrast, desaturate, add a solid fill using `multiply` blend mode) · add a text-shadow.

**Refactoring UI — "Everything has an intended size."**
- Don't naively scale up icons even though they're vector (§5.4).
- **Don't scale down screenshots** — text becomes unreadable. Instead: use a **partial**
  screenshot, take the screenshot **at a smaller viewport** (e.g. the tablet layout), or
  **draw a simplified version of the UI with details removed**.
*Enforceable threshold:* screenshots displayed at ≥ ~70% of natural size, or replaced by
partial/simplified versions.

**Refactoring UI — "Beware user-uploaded content."** Control size and aspect ratio with
`background-size: cover` / `object-fit: cover` and fixed aspect ratios. **Prevent background
bleed** (when a transparent image's background bleeds into your page background) with a
**subtle inner box-shadow**, and set an explicit `background-color`.

**Refactoring UI — "Use good photos."** "Bad photos will ruin a design, even if everything
else about it looks great." Hire a photographer or use high-quality stock.

## 5.6 Empty states

**Refactoring UI — "Don't overlook empty states."**
*Statement:* If your app depends on user-generated content, **the empty state should be a
priority, not an afterthought.**
*What to do:* add an **illustration** and a **large, emphasized call to action** (`+ Add
Contact`). **Remove unnecessary UI elements** — "table headers aren't necessary if there's
nothing in the table yet"; "there's no point in presenting a bunch of actions that don't do
anything until the user has created some content."
*Enforceable version:* the empty state contains an illustration/graphic, exactly **1
emphasized CTA**, and **0 visible non-functional controls** (hide filters, sort, tabs that
do nothing).
*Vercel/interface-craft version:* "Empty states are never blank: they state what belongs
there and prompt creation of the first item (optionally with templates)."
*Apple HIG version (via canon):* every screen ships with designed **empty, loading, error,
and maximum-accessibility-text** states — "not just the happy path with ideal data." Jony
Ive's framing: *"finishing the back of a drawer. Nobody's going to see it, but you do it
anyway."*

## 5.7 Finishing touches (Refactoring UI, ch. 8)

- **Supercharge the defaults.** Replace list bullets with icons (**checkmark icons are a
  good generic bullet**; **quote icons for blockquotes**). Add a custom underline that
  partially overlaps the link text. Use custom checkboxes and radio buttons.
- **Add color with accent borders.** (See §6.3 tip 6 — verbatim.)
- **Decorate your backgrounds.** Add a background color to emphasize panels or add contrast
  between page sections; or use a repeating pattern or a subtle gradient.
- **Think outside the box.** A single dropdown list could become **multiple columns with an
  icon and a description per item**. Table rows don't need a single row of text — cells can
  have subtext. **Radio buttons can be styled as selectable cards.**

**"37 Ways to Spice Up Your UI Designs" (Kennedy)** — **[THIRD-PARTY DISTILLATION]**,
canonical <https://www.learnui.design/blog/spice-up-your-ui-design.html>. ⚠️ Verify.
Framing: *"Pro-level designs = solid foundations + a few well-chosen techniques."*
A menu of concrete polish moves, grouped:
- **Backgrounds:** angled transitions (diagonal instead of horizontal) · curved transitions ·
  tilted highlight shape behind an element (gradient fills amplify it) · background highlight
  shape to distinguish a section without a border · subtle low-contrast patterns ·
  **XL background text** (large, low-contrast words behind content — size and contrast trade off).
- **Borders:** dotted borders (lighter, more textured; dotted *dividers* suggest connection
  rather than separation) · double borders (an extra white ring) · gradient borders ·
  bevelled borders · **fading borders** (duplicate the border at increasing sizes with
  decreasing opacity → depth/pulse) · thick *transparent* borders (structure without weight).
- **Shadows:** floating shadow (separated from the element so it appears to hover) · solid
  shadow (offset, unblurred, cartoon depth) · outline shadow · pattern shadow.
- **Typography:** layered text interwoven with imagery (large titles only) · inline imagery
  (icons embedded in a sentence) · **thick underlines in a brand color** (not the thin
  default) · font-change emphasis on specific words · width variation (condensed/extended
  variants as an emphasis channel beyond bold/italic).
- **Structural:** **break the frame** (content spills beyond container edges) · offset
  background (border/background separated from the element edge by a gap) · pocket cut-off
  (images cropped at an edge to imply they continue behind) · repeated shapes at decreasing
  sizes (illusion of distance).

---

# 6. Master rule-lists (verbatim / near-verbatim)

## 6.1 Anthony Hobday — "Visual design rules you can safely follow every time" — **ALL RULES**

Canonical: <https://anthonyhobday.com/sideprojects/saferules/>
Provenance: **[VERBATIM-MIRROR]** of the page HTML →
<https://raw.githubusercontent.com/AndrewMaksimchuk/note/master/content/_pages/design-saferules/index.html>
(rules 1–25, with Hobday's own explanations, reproduced below verbatim)
Plus three later-added rules recovered from a second mirror →
<https://raw.githubusercontent.com/RestartDK/procedural-planets/main/.cursor/rules/style-guide.mdc>
(marked †). Numbering in third-party audits that reference "rule 24 = Nest corners properly"
and "rule 25 = avoid adjacent hard divides" matches the 1–25 ordering below.

**Hobday's own framing:** *"You do not have to follow these rules every time. If you have a
good reason to break any of them, do. But they are safe to follow every time."*
Announcement framing on X: *"To be clear, it's fine to break these rules if you want. But
they're safe: most people agree they're good rules."*
(<https://x.com/hobdaydesign/status/1613586066287775754>)

Every rule on the site is accompanied by an illustration; several explicitly say "the left
side is incorrect and the right side is correct" — noted per rule below.

1. **Use near-black and near-white instead of pure black and white.**
   "Pure black often has uncomfortably high contrast with other colours, and pure white is
   too bright. Use close-to-black and close-to-white instead. Any other references to 'black'
   and 'white' in these rules assume you're following this rule."

2. **Saturate your neutrals.**
   "A neutral is generally a black, white, or grey. If you use colour in your interface, add
   a little bit of that colour to your neutrals. This will make the colour palette feel more
   coherent. If you use the HSB colour system less than 5% saturation should do it."

3. **Use high contrast for important elements.**
   "Important elements means buttons, content, or anything else that the user needs to
   notice. A higher contrast means that the element will grab attention, which is useful for
   important elements. Elements that the user does not need to notice (e.g. structural
   elements, drop-shadows) can use as little contrast as possible."

4. **Everything in your design should be deliberate.**
   "You should be deliberate about absolutely everything in your design. This means
   whitespace, alignment, size, spacing, colour, shadows. Everything. If someone points at a
   random part of your design you should have an explanation for why it looks that way. If
   you do not do this your design will not feel coherent. If you are new to design you can
   use this rule as a prompt to learn more about what you are not deliberate about yet."

5. **Optical alignment is often better than mathematical alignment.**
   "Your design software can align things mathematically. But some shapes don't suit this
   type of alignment. For example, some odd shapes have a visual centre that is different
   from their mathematical centre. Often you will need to align things by eye so that it
   looks right. It takes some practice to be able to align things by eye, but if you do it
   regularly you'll quickly pick it up."

6. **Lower letter spacing and line height with larger text. Raise them with smaller text.**
   "This applies to all text. The bigger the text, the less space you need between each
   letter and each line. The reverse is also true. If you do not do this large text can look
   spread out, and small text can look too close."

7. **Container borders should contrast with both the container and the background.**
   "Example: If you have a card with a 1px border and a dark background, and it sits on top
   of an even darker background, the 1px border should be lighter than both of them. It
   should not be set to a brightness somewhere between the card and page background colours.
   Otherwise the edge of the container won't look sharp enough. The same applies to light
   background colours: the 1px border should be darker than both background colours."
   *(before/after illustration: left incorrect, right correct)*

8. **Everything should be aligned with something else.**
   "Alignment helps us realise that things are related to each other. If something is not
   aligned with anything else, it feels like it does not belong in the design. Ideally each
   element should be aligned with other elements based on some kind of logic."

9. **Colours in a palette should have distinct brightness values.**
   "When colours have different brightness values, this helps them look and feel distinctive
   not just in hue, but in brightness. This leads to better colour palettes because colours
   don't compete with each other as much."

10. **If you saturate your neutrals you should use warm or cool colours, not both.**
    "If you use both warm and cool colours to saturate neutrals, the colour palette will not
    feel coherent. In the example below the left side uses a warm background and a cool
    foreground. The right side uses a warm background and foreground."

11. **Measurements should be mathematically related.**
    "The spacing you use between elements, and the size of elements, should be determined by
    some kind of scale. This will help the design to look coherent. In the example below,
    every element uses multiples of 8. Horizontal and vertical grids based on a scale help if
    you want to make sure elements like pictures are the right size."

12. **Elements should go in order of visual weight.**
    "If you have a series of elements in a row or column, and some are more visually heavy
    than others (two buttons and three links, for example), you should arrange them like a
    triangle. The visually heaviest element should go first, and the least heavy element
    last, in order. One caveat is that the visually heaviest element should be on the outside
    edge. If your elements are against the right edge of the design, for example, the
    heaviest element should be against the right edge. Elements that go in size or weight
    order look more satisfying."

13. **If you use a horizontal grid, use 12 columns.**
    "If you're going to break your design up into vertical columns, use 12 columns. A 12
    column grid can be broken up into 1 column, 2 columns, 3 columns, and 4 columns, so it
    gives you a lot of flexibility."

14. **Spacing should go between points of high contrast.**
    "When you're measuring out space between elements in a design—for example if you want
    100px of vertical space between blocks of content on a landing page—the spacing should be
    from one point of high contrast to the next. This is because our eyes find the edges of
    elements based on contrast, so we expect the spacing to run between points of contrast.
    A white background with black paragraphs of text means that the points of contrast will
    be the end of one paragraph and the start of the next. But if you put a black background
    behind one white paragraph, the spacing should run from the end of one paragraph to the
    start of the black background, then again from the start of the black background to the
    start of the paragraph."

15. **Closer elements should be lighter.**
    "As elements on the screen get closer to the user, they should get lighter. This applies
    to both light and dark mode UIs, because it matches how the real world works."
    *(before/after: left incorrect, right correct)*

16. **Make drop shadow blur values double their distance values.**
    "e.g. If you create a shadow which extends 4 pixels on the Y axis, use a blur value of 8
    pixels. As the element gets 'closer' to the viewer, it's a good idea to also lower the
    opacity of the shadow. This looks good because as elements move closer to the light
    source, their shadows get more blurry."

17. **Put simple on complex or complex on simple.**
    "A complex background (e.g. a colourful gradient fill) works best if the foreground (e.g.
    text) is simple. And a complex foreground element is best on a simple background. You can
    put simple on simple, but it tends to look plain. Complex on complex should be avoided
    because it's hard to pull off and will add visual clutter."

18. **Keep container colours within brightness limits.**
    "The brightness difference between background and container should be within 12% for dark
    interfaces, and 7% for light interfaces. These percentages refer to the brightness value
    in the HSB colour system. This is based on a study of about 100 well-designed websites
    where I checked the brightness of containers against the backgrounds."

19. **Make outer padding the same or more than inner padding.**
    "In containers, inner padding is the space between elements inside the container. Outer
    padding is the space between the elements and the edges of the container. This outer
    padding should be the same or more than the inner padding. Elements that are more related
    should be closer together. The elements inside a container are more related to each other
    than they are to the container itself."

20. **Keep body text at 16px or above.**
    "16px is the default text size in most browsers. Text below this size gets harder to
    read, so it's safest to avoid it for body text. The higher you go beyond 16px, the easier
    the text is to read. If you are writing code yourself, use whatever equivalent of pixels
    you prefer."

21. **Use a line length around 70 characters.**
    "It doesn't matter too much if your line length is 60 or 80 characters, but go too far
    either side of that and you might run into subtle readability issues."

22. **Make horizontal padding twice the vertical padding in buttons.**
    "The standard button pattern is wider than it is tall. If you want people to recognise an
    element as a button, it's a good idea to follow the pattern. In the example below, the
    padding above and below the label is 30px, and the padding to the left and right is 60px."

23. **Use two typefaces at most.**
    "A second typeface is an opportunity to reinforce the concept behind a design. It also
    helps add some variety to a design. It's rarely necessary to use more than two, and it
    might make the design feel visually confused."

24. **Nest corners properly.**
    "Sometimes you will have two or more rounded corners nested together. If you want them to
    look right, set the inside corner radius to the outside corner radius, minus the distance
    between the two. In the example below the outside radius is 30px, and there is a 20px
    gap, so the inside corner radius is 10px."

25. **Don't put two hard divides next to each other.**
    "Background transitions, container edges, and dividing lines will create hard visual
    divides. You should not have two or more hard divides next to each other. You can see
    this marked in red in the example below. More than one hard divide creates visual clutter
    and catches the eye. In the example I have removed the background transition so that the
    hard divide only comes from the container edge."

26. † **Lower the contrast of icons paired with text.**
    "An icon will often look visually heavier than any text it's paired with. Lower the
    background contrast of icons paired with text. You can do this with opacity, or by making
    the icon colour lighter/darker."

27. † **Don't use shadows in dark interfaces.**
    "It's hard to make shadows work in a dark interface. Either your background colour needs
    to be light enough to show a shadow, or the shadow needs to be hard enough that it'll
    stand out. Which is more attention than a shadow probably needs. It also doesn't make
    much sense for shadows to be visible in a dark place."

28. † **Don't mix depth techniques.**
    "Stick to one depth technique throughout an interface. If you've got a soft shadow on your
    main navigation bar, use soft shadows elsewhere. Don't suddenly switch to a hard/abstract
    shadow, or no shadow at all. Any of these approaches are fine, but if you mix them it
    looks inconsistent and unprofessional."

**Hobday's companion resource:** "A list of every visual design concept" —
<https://anthonyhobday.com/sideprojects/visualconcepts/> *(not fetched — domain blocked)*

## 6.2 Erik Kennedy — "7 Rules for Creating Gorgeous UI" (Parts 1 & 2) — the full seven

Canonical: <https://www.learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-1.html> ·
<https://www.learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-2.html>
(Originally Medium, Nov 2014 — <https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-1-559d4e805cda>
and <https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96>;
updated for 2024.)
Provenance: **[NOTES]** via `daryllxd/lifelong-learning`; rule titles cross-confirmed by
`swyxio/spark-joy`, `appacademy/aa-public-ruby-curriculum`, and the Changelog #333 transcript.

**Kennedy's framing (worth quoting to developers):**
> "In the end, I learned the aesthetics of apps the same way I've learned any creative
> endeavor: cold, hard, analysis. And shameless copying of what works. **If I'm good at
> designing UI now, it's because I've analyzed stuff — not because I came out the chute with
> an intuitive understanding of beauty and balance.**"

And from his Changelog interview about the article:
> "I feel like design is not something you should really need to go to school for years — at
> least the visual design side of things — to pick up enough to get by. It should be very
> possible for someone to know a couple tips, tricks, heuristics for what they're even gonna
> consider doing and what they're not gonna consider doing, and go from there."
> — <https://changelog.com/podcast/333>

**Part 1**
1. **Light comes from the sky.** (§5.1)
2. **Black and white first.** *Statement:* "Design mobile first, and design black and white
   first. **Add color last, and even then, only with purpose.**"
   *Why:* "Designs that have a strong specific attitude — 'sporty', 'flashy', 'cartoony' —
   need a designer who can use color extremely well. **But most apps don't have a specific
   attitude except clean and simple.**" Grayscale forces you to solve contrast and hierarchy
   with spacing, size and value — and **if it looks bad in black and white, color won't fix it.**
   *The color-model corollary:* "**RGB is not a good framework for coloring designs. What's
   better is HSB/HSV/HSL.** By modifying the saturation and brightness of a single hue, you
   can generate multiple colors — darks, lights, backgrounds, accents, eye-catchers — but it's
   not overwhelming on the eye." *Tips given:* **"Never use black."** "Totally flat grays
   almost never appear in the real world, and **saturating your shades of gray adds a visual
   richness** to your designs." And: search Dribbble by color.
3. **Double your whitespace.** (§2.1)

**Part 2**
4. **Learn the methods of overlaying text on images.** (§5.5)
5. **Make text pop — and un-pop.** (§1.4)
6. **Use good fonts.** (§1.4)
7. **Steal like an artist.** *Statement:* **"Every artist should be a parrot until they're
   good at mimicking the best."**
   *Process (per the third-party distillation, ⚠️ verify):* find something great → ask
   **"why does this work?"** → extract the principle → apply it yourself. Named sources:
   Dribbble, Layers.to, **Mobbin** (searchable by element type).
   *Refactoring UI's identical closing advice:* "Look for decisions you wouldn't normally make
   when using other designers' UIs · **Rebuild your favorite interfaces** · Continually study
   other people's work that inspires you with a careful eye."

## 6.3 Refactoring UI — "7 Practical Tips for Cheating at Design" — all seven, verbatim headings

Canonical: <https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886>
(Adam Wathan & Steve Schoger, 2017/2019)
Provenance: **[VERBATIM-MIRROR]** →
<https://raw.githubusercontent.com/BoiseCodeWorks/codeworks-fs-student-guide/master/src/resources/wk1/04-Cheating-at-Design.md>

**Subtitle:** *"Improving your designs with tactics instead of talent."*

**Opening framing — the exact pitch to developers:**
> "Every web developer inevitably runs into situations where they need to make visual design
> decisions, whether they like it or not. Maybe the company you work for doesn't have a
> full-time designer and you need to implement the UI for a new feature on your own. Or maybe
> you're hacking on a side-project and you want it to look better than *yet-another-Bootstrap-site.*
> It's easy to throw your hands up and say, *'I'll never be able to make this look good, I'm
> not an artist!'* but it turns out there are a ton of tricks you can use to level up your
> work that don't require a background in graphic design."

1. **Use color and weight to create hierarchy instead of size.** (§4.1 — full text there)
2. **Don't use grey text on colored backgrounds.** (§3.2 — full text there)
3. **Offset your shadows.** (§5.1 — full text there)
4. **Use fewer borders.** (§5.2 — full text there; three sub-tactics: box shadow, two
   background colors, extra spacing)
5. **Don't blow up icons that are meant to be small.** (§5.4 — full text there)
6. **Use accent borders to add color to a bland design.**
   > "If you're not a graphic designer, how do you add that dash of visual flair to your UI
   > that other designs get from beautiful photography or colorful illustrations? One simple
   > trick that can make a big difference is to add **colorful accent borders** to parts of
   > your interface that would otherwise feel a bit bland."
   *Three placements illustrated:* **along the side of an alert message** · **to highlight
   active navigation items** · **across the top of your entire layout**.
   > "**It doesn't take any graphic design talent to add a colored rectangle to your UI**, and
   > it can go a long way towards making your site feel more 'designed.'"
   *Plus a color-picking tip:* "Have a hard time picking colors? Try choosing from a
   constrained palette like Dribbble's color search to avoid feeling overwhelmed by the
   endless possibilities of a traditional color picker." (<https://dribbble.com/colors>)
7. **Not every button needs a background color.** (§4.2 — full text there)

**Steve Schoger's own talk-version of the same list** (from the Refactoring UI process video,
<https://www.youtube.com/watch?v=7Z9rrryIOC4>, as noted in `swyxio/spark-joy`):
1. Give text consistent contrast · 2. Don't use grey text on colored backgrounds ·
3. Use perceived brightness · 4. Start with too much whitespace · 5. Balance weight and contrast.
Additional items captured in `krishnaanaril/Notes`: *offset your shadows* · *use fewer borders —
use a box shadow, two different background colors, or add extra spacing* · *don't blow up icons
that are meant to be small* · *start headings with the most important and distinctive words;
avoid "Your" or "User."*

## 6.4 Refactoring UI (the book) — full chapter-by-chapter rule inventory

Canonical: <https://refactoringui.com/book/> · <https://www.refactoringui.com/>
Provenance: **[NOTES]** — `hughbien/notebook` + `elrincondeldev/refactoring-ui-notes`,
cross-checked against the **[THIRD-PARTY DISTILLATION]** skill in
`majiayu000/claude-skill-registry`.

**Ch. 1 — Starting from Scratch**
- **Start with a feature, not a layout.** "It's difficult to design a shell (layout,
  navigation, container) without knowing the features first." *Worked example:* a flight
  booking service needs fields for cities, fields for dates, and a button — start with that
  form. **"You might not even need the rest of the layout."**
- **Detail comes later.** Don't spend time early on typefaces, shadows, icons. Make
  low-fidelity mockups. **Design in grayscale**, which forces you to use spacing, contrast and
  size to design well.
- **Don't design too much.** Work in short cycles: design a simple version of the next feature
  → make it real → get feedback (including edge cases) → iterate → restart with the next
  feature. If a feature is nice-to-have, design it later.
  *(elrincon adds: "Be aware of the difficulty of development; don't design something you
  won't be able to develop later.")*
- **Choose a personality.** Secure and professional, or fun and playful? Personality is
  conveyed through **font choice** (serif = elegant, rounded sans = playful, neutral sans =
  plain), **color** (safe blue, expensive gold, fun pink), **border-radius** (rounded = more
  playful and friendly), and **copy**.
- **Limit your choices.** Design with constraints; put systems in place in advance.
  **Systematize everything:** font size, font weight, line height, color, margin, padding,
  width, height, box shadows, border radius, border width, opacity.

**Ch. 2 — Hierarchy Is Everything** → §4.1 above (all rules).

**Ch. 3 — Layout and Spacing** → §2.1 above (all rules).

**Ch. 4 — Designing Text** → §1.2 above (all rules).

**Ch. 5 — Working with Color** → §3.1 above (all rules).

**Ch. 6 — Creating Depth** → §5.1 above, plus:
- **Even flat designs can have depth.** Flat designs convey depth with **color** — lighter
  objects feel closer. **Solid shadows with no blur radius** also work.
- **Overlap elements to create layers.** Overlapping creates a feeling of layers → depth.
  *Tactics:* overlap forms on top of different sections; make a component taller than its
  background; **overlap avatars (and add an invisible border around each round avatar image)**.

**Ch. 7 — Working with Images** → §5.5 above (all rules).

**Ch. 8 — Finishing Touches** → §5.6, §5.7 above (all rules).

**Ch. 9 — Leveling Up**
- Look for decisions you wouldn't normally make when using other designers' UIs.
- **Rebuild your favorite interfaces.**
- Continually study other people's work with a careful eye.

**Anti-patterns list derived from the book (a ready-made review checklist):**
relying on font size alone for hierarchy · arbitrary spacing values · grey text on colored
backgrounds · inconsistent/ad-hoc shadows · borders everywhere · no type scale · raw hex
colors instead of an HSL shade system · scaled-up icons · undesigned empty states · labels
louder than values.

## 6.5 Apple Human Interface Guidelines — the stated visual principles

Canonical: <https://developer.apple.com/design/human-interface-guidelines/>
(typography: `.../typography` · color: `.../color` · layout: `.../layout` ·
materials: `.../materials` · icons: `.../icons`)
Provenance: ⚠️ **The HIG pages are a client-rendered SPA**; `developer.apple.com` was
reachable but returned only the JS shell for both the HTML and every DocC-JSON path I tried
(`/tutorials/data/documentation/...`). The rules below are therefore
**[THIRD-PARTY DISTILLATION]** from `cgallic/design-os` →
<https://raw.githubusercontent.com/cgallic/design-os/main/design_os/canon/apple-hig.md>,
which attributes each to a specific HIG section. **Verify against Apple before publishing.**

**Founding principle — deference.** UI "helps people understand and interact with the
content, but never competes with it."
*Enforceable version:* on a content screen, app chrome (bars, headers, branding, ads) should
occupy **≤ ~1/3 of the viewport**; the content region is visually primary. **Test: take a
screenshot — is the largest, highest-contrast region the user's content?**

| Rule | Threshold | HIG area |
|---|---|---|
| **Hit region ≥ 44×44 pt** regardless of how small the visible glyph is (visionOS: 60×60 pt) — measure the hit region, not the icon | ≥44×44 pt | Layout & Accessibility |
| **No rendered text smaller than 11 pt** (tvOS: 23 pt, because of viewing distance) | ≥11 pt | Typography (11 pt is the floor of Caption 2) |
| **Text sizes come from the platform type ramp, not one-off values.** Default "Large" setting: Large Title 34, Title1 28, Title2 22, Title3 20, Headline 17 semibold, **Body 17**, Callout 16, Subheadline 15, Footnote 13, Caption1 12, Caption2 11 pt | 100% of sizes ∈ {34,28,22,20,17,16,15,13,12,11} or a declared equivalent | Typography (Dynamic Type) |
| **All text scales with the user's text-size setting** and the layout reflows without truncation or overlap (web equivalent: rem/em + intact layout at 200% zoom) | 0 px-fixed body text; layout intact at 200% | Typography, "Support Dynamic Type" |
| **Respect optical sizing** — text-optimized cuts below 20 pt, display cuts at 20 pt and above (SF Pro Text ≤19 pt, SF Pro Display ≥20 pt, with per-size tracking). Never use a display cut for body copy, or ultralight/thin weights below 20 pt. | 20 pt cutoff; weights < Regular banned under 20 pt | SF typeface specs |
| **Text contrast ≥4.5:1**; large text (≥18pt regular / ≥14pt bold) and essential non-text elements ≥3:1 — **including text over translucent or image backgrounds at their worst case** | as stated | Accessibility > Color and effects |
| **Safe areas and standard layout margins** — nothing clipped by notch / home indicator / rounded corners; content insets ≥ system margin (16 pt compact, 20 pt regular) | ≥16 pt edge insets | Layout |
| **Use standard components and gestures for standard jobs**; never repurpose or block system gestures; never build a lookalike of a system control that behaves differently | 0 overridden system gestures | Consistency principle |
| **The launch experience goes straight to work** — the launch screen is visually identical to the app's first real screen; no branding splash, ad, or forced tutorial | launch placeholder ≈ first screen | Launching: "Don't use your launch screen as a branding opportunity" |
| **Flat top-level nav stays scannable** — 3–5 tabs on iPhone | 3 ≤ tabs ≤ 5 | Tab bars |
| **Alerts are rare, short and binary** — one-sentence title stating the situation (never bare "Error"/"Warning"), **at most two buttons**, safe action prominent; ≥3 choices → action sheet or menu; **destructive actions are never the default** | ≤2 buttons | Alerts |
| **Every screen ships with designed empty, loading, error, and maximum-accessibility-text states** — not just the happy path with ideal data | 4/4 states designed per screen | (Ive: "finishing the back of a drawer") |

**Design-process rules attributed to Apple in the same canon** (out of my scope but noted for
whoever owns process): 10-to-3-to-1 divergence · pixel-perfect mockups with real content
before build · paired brainstorm/production meetings kept separate and both running the whole
cycle · decide on artifacts (prototypes), never descriptions · default answer is no.

## 6.6 Other rule-lists worth mining (identified, not fetchable this session)

- **Adham Dannaway, "16 little UI design rules that make a big impact"** —
  <https://www.adhamdannaway.com/blog/ui-design/16-ui-design-rules>
  (Recommended alongside Hobday in **MDN's own "Design for developers" curriculum** —
  <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Design_for_developers>,
  source at <https://raw.githubusercontent.com/mdn/content/main/files/en-us/learn_web_development/core/design_for_developers/index.md>.)
  Per an archived summary in `anselmh/wdrl.info`: the article "explores how to design a card
  component with data so it looks great and is well readable. **Many of the tricks are
  applicable to other UI components as well.**" — i.e. it's a single worked
  before/after redesign, which makes it unusually good teaching material. ⚠️ **Not fetched.**
- **"50 UI Tips"** — <https://fifty.user-interface.io/50_ui_tips.pdf> (noted in
  `swyxio/spark-joy`). ⚠️ Not fetched.
- **Checklist Design** — <https://www.checklist.design/> ⚠️ Not fetched.
- **Can't Unsee** — <https://cantunsee.space/> — a game that tests your eye for exactly these
  visual-craft distinctions. Excellent candidate for a course exercise.
- **Material Design 3 foundations** — <https://m3.material.io/> (elevation:
  `.../styles/elevation/overview`; type scale: `.../styles/typography/type-scale-tokens`).
  ⚠️ Blocked. What I could establish indirectly: **8dp baseline grid**; **elevation measured
  in dp on a z-axis with per-component values (card 1–8dp, dialog 24dp, navigation drawer
  16dp)**; **M1/M2 used shadows exclusively for elevation, M3 (2021) added tonal color shifts
  because shadows fail in dark mode**; **16px default body size**.
- **Shopify Polaris foundations** — <https://polaris.shopify.com/design> ⚠️ Blocked; the
  Polaris repo's content files were not locatable via GitHub code search in the time available.
- **IBM Carbon** (<https://carbondesignsystem.com/elements/typography/overview/>),
  **Atlassian Design** (<https://atlassian.design/foundations>), **GitHub Primer**
  (<https://primer.style/foundations>) — all blocked; all are open-source repos and should be
  mineable via GitHub raw on a future pass.
- **Ian Storm Taylor, "Design Tip: Never Use Black"** —
  <https://ianstormtaylor.com/design-tip-never-use-black/> ⚠️ Not fetched. Cited directly by
  the 7 Practical Tips article as the reference for "a dark (but not black) color."
- **Nathan Curtis, "Space in Design Systems"** —
  <https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62> ⚠️ Blocked.
  (inset / stack / inline taxonomy.)
- **Josh W. Comeau, "Designing Beautiful Shadows in CSS"** —
  <https://www.joshwcomeau.com/css/designing-shadows/> ⚠️ Not fetched.
- **Steve Schoger, CSS Day 2019 talk** — repeatedly cited by the canon distillations as the
  source for the perceived-brightness and `tnum` guidance.
- **Vercel Web Interface Guidelines** — <https://github.com/vercel-labs/web-interface-guidelines>
  ✅ **Fetched** (§1.7). A developer-native lint-style ruleset; strong candidate for a course
  "checklist" handout.

---

# 7. Why these rules work — the perceptual mechanisms

Source: **[THIRD-PARTY DISTILLATION]** — a literature review of Refactoring UI's principles,
`Nathandela/compound-agent` →
<https://raw.githubusercontent.com/Nathandela/compound-agent/main/docs/compound/research/design/web-apps/refactoring-ui-design-principles.md>
⚠️ The cited studies should be verified before being repeated as fact. They are recorded here
because "why it works" is explicitly in scope and these are the mechanisms the sources appeal to.

## 7.1 Preattentive processing → why hierarchy works at all
Treisman's feature integration theory (1980): a **preattentive stage** processes basic visual
features (color, size, orientation, motion) **in parallel across the entire visual field**,
then an attentive stage serially binds them into objects. Preattentive features are detected
**in under 200–250 ms regardless of the number of items on screen** (Healey & Enns, 2012).
→ Using color, size and weight for hierarchy is **leveraging preattentive channels**: a bold
dark heading against lighter body text exploits preattentive **luminance-contrast** detection;
a colored primary button exploits preattentive **hue** detection.
→ **"De-emphasize competitors rather than over-emphasize the target" works because reducing
the salience of competing elements increases the relative salience of the target without
adding visual noise.**
Eye-tracking (Jiang et al., 2023) reportedly confirms saliency significantly affects UI task
performance.

## 7.2 Weber–Fechner → why scales are geometric, not arithmetic
Weber (1834) / Fechner (1860): perceived stimulus intensity is proportional to the
**logarithm** of physical intensity. So equal arithmetic increments are **not** perceptually
equal — **"the difference between 8px and 12px spacing is far more visually salient than the
difference between 48px and 52px."**
→ This is the psychophysical foundation for the multiplicative spacing and type scales in
Refactoring UI and Tailwind (each step ≈1.5–2× the previous), and for the "no two adjacent
scale values closer than ~25%" rule.
→ It also explains why HSL lightness is not perceptually uniform: L=20%→30% does not look
like the same jump as L=70%→80%. Hence "trust your eyes, not the numbers" when building shade
scales, and hence OKLCH.

## 7.3 Line length → the empirical basis for 45–75
- Bringhurst (1992): 45–75 chars, 66 ideal.
- **Dyson & Kipping (1998):** 55 characters per line produced the **highest subjective
  readability ratings**.
- **Ling & van Schaik (2006):** medium line lengths (55 CPL) rated easiest to read.
- Baymard Institute's literature review supports the **50–75 CPL** range, noting the two
  distinct failure modes: **very short lines increase regression frequency at line breaks**;
  **very long lines make it hard to locate the start of the next line.**
- Line height: **WCAG 2.1 SC 1.4.12 requires line-height ≥1.5×** for body text; headings
  reduce to 1.1–1.3 because at large sizes **the ascenders and descenders already create
  sufficient visual separation.**

## 7.4 Color perception → why "the numbers lie"
- **HSL's lightness axis does not correspond to perceived brightness.** Pure yellow (#FFFF00)
  and pure blue (#0000FF) both have HSL lightness 50%, but yellow appears dramatically
  brighter. Reason: the human visual system's spectral sensitivity peaks in green-yellow. The
  relative-luminance formula (ITU-R BT.709) weights **green 0.7152, red 0.2126, blue 0.0722**.
- **Perceived brightness formula** referenced by Refactoring UI (NTSC luma coefficients):
  `sqrt(0.299·R² + 0.587·G² + 0.114·B²) / 255`
  → green contributes most, then red, then blue — **which is why green backgrounds require
  darker text than blue backgrounds at the same HSL lightness.**
- **Schoger's fix (CSS Day 2019):** when you need a lighter variant, **rotate the hue toward a
  brighter hue** (yellow/cyan/magenta) rather than simply raising lightness, to keep the color
  vibrant.
- **OKLCH** (Ottosson, 2020) encodes perceptual uniformity directly — equal numeric steps in
  L, C, H produce visually even changes. **Tailwind CSS v4 (2024–25) migrated its default
  palette from hand-picked HSL/RGB to OKLCH** for exactly this reason. Supported in all major
  browsers as of 2024.

## 7.5 Gestalt → why spacing, borders and cards work
- **Proximity** — elements close together are perceived as one group; **it is the most powerful
  grouping principle and can override competing cues like color or shape similarity**
  (Wagemans et al., 2012). NN/g research confirms proximity is the primary mechanism users
  rely on to interpret which UI elements are related (Harley, 2020). → "More space around
  groups than within them" is proximity, operationalized.
- **Similarity** — shared color/shape/size/orientation groups elements. → consistent semantic
  color coding.
- **Closure** — the visual system completes incomplete shapes. → **cards work with minimal or
  no borders: the brain infers containment from a background-color difference or a shadow.**
- **Figure–ground** — → shadow/elevation systems exploit figure-ground segregation to say what
  is "above" what.
- **Continuity** — elements along a line are perceived as related. → alignment rules, baseline
  grids.
- **Prägnanz (good form)** — the visual system prefers the simplest regular interpretation. →
  the perceptual basis for clean, geometrically consistent interfaces.

## 7.6 Light from above → why shadows must be offset downward
Mamassian, Knill & Kersten (1998): cast shadows are a strong cue for perceived depth and
spatial position. Sun & Perona (1998): the visual system carries a **"light from above" prior**
— it preferentially interprets shading as indicating overhead illumination. → validates
Kennedy's Rule 1, Refactoring UI's "emulate a light source," Hobday's blur=2×distance, and
"offset your shadows."

## 7.7 Visual clutter → why fewer borders
Rosenholtz, Li & Nakano (2007): visual clutter — many elements competing for attention —
**degrades search performance and increases perceived complexity.** Borders are additional
visual elements and contribute to clutter even when their purpose is to *reduce* ambiguity.

---

# 8. Sources

## 8.1 Canonical URLs (cite these in the course)

**Master rule-lists**
- Anthony Hobday, "Visual design rules you can safely follow every time" — <https://anthonyhobday.com/sideprojects/saferules/>
- Anthony Hobday, "A list of every visual design concept" — <https://anthonyhobday.com/sideprojects/visualconcepts/>
- Hobday's announcement thread — <https://x.com/hobdaydesign/status/1613586066287775754>
- Erik Kennedy, "7 Rules for Creating Gorgeous UI (Part 1)" — <https://www.learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-1.html>
- Erik Kennedy, "7 Rules for Creating Gorgeous UI (Part 2)" — <https://www.learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-2.html>
- Original Medium versions — <https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-1-559d4e805cda> · <https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96>
- Adam Wathan & Steve Schoger, "7 Practical Tips for Cheating at Design" — <https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886>
- *Refactoring UI* (book) — <https://refactoringui.com/book/> · <https://www.refactoringui.com/>
- Adham Dannaway, "16 little UI design rules that make a big impact" — <https://www.adhamdannaway.com/blog/ui-design/16-ui-design-rules>
- Vercel Web Interface Guidelines — <https://github.com/vercel-labs/web-interface-guidelines>
- "50 UI Tips" — <https://fifty.user-interface.io/50_ui_tips.pdf>
- Checklist Design — <https://www.checklist.design/>
- Can't Unsee (eye-training game) — <https://cantunsee.space/>

**Typography**
- Matthew Butterick, *Practical Typography* — <https://practicaltypography.com/>
- — "Typography in ten minutes" — <https://practicaltypography.com/typography-in-ten-minutes.html>
- — "Summary of key rules" — <https://practicaltypography.com/summary-of-key-rules.html>
- Robert Bringhurst, *The Elements of Typographic Style* (1992; 4th ed. 2012)
- Ellen Lupton, *Thinking with Type* (2004; 3rd ed. 2024) — <https://thinkingwithtype.com/>
- Erik Kennedy, "Ultimate Guide to Font Sizes in UI Design" — <https://www.learnui.design/blog/ultimate-guide-font-sizes-ui-design.html>
- Erik Kennedy, "The Step-by-Step Guide for Pairing Fonts" — <https://www.learnui.design/blog/step-by-step-guide-pairing-fonts.html>

**Color**
- Erik Kennedy, "Color in UI Design: A (Practical) Framework" — <https://www.learnui.design/blog/color-in-ui-design-a-practical-framework.html>
- Erik Kennedy, "The HSB Color System: A Practitioner's Primer" — <https://www.learnui.design/blog/the-hsb-color-system-practicioners-primer.html>
- Erik Kennedy, "Picking Colors for Data Visualizations" — <https://www.learnui.design/blog/picking-colors-data-visualization.html>
- Ian Storm Taylor, "Design Tip: Never Use Black" — <https://ianstormtaylor.com/design-tip-never-use-black/>
- Björn Ottosson, "OKLCH / Oklab" — <https://bottosson.github.io/posts/oklab/>
- WCAG 2.2 Understanding SC 1.4.3 Contrast (Minimum) — <https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum>
- WCAG 2.1 SC 1.4.12 Text Spacing — <https://www.w3.org/WAI/WCAG22/Understanding/text-spacing>
- Dribbble color search — <https://dribbble.com/colors>

**Spacing, layout, depth**
- Nathan Curtis, "Space in Design Systems" — <https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62>
- Josh W. Comeau, "Designing Beautiful Shadows in CSS" — <https://www.joshwcomeau.com/css/designing-shadows/>
- Erik Kennedy, "The King vs. Pawn Game of UI Design" — <https://www.learnui.design/blog/the-king-vs-pawn-game-of-ui-design.html>
- Erik Kennedy, "3 Pro Tips on Alignment" — <https://www.learnui.design/blog/design-tips-alignment.html>
- Erik Kennedy, "37 Ways to Spice Up Your UI Designs" — <https://www.learnui.design/blog/spice-up-your-ui-design.html>
- Smashing Magazine, "Building Better UI Designs With Layout Grids" — <https://www.smashingmagazine.com/2017/12/building-better-ui-designs-layout-grids/>

**Design system foundations**
- Apple Human Interface Guidelines — <https://developer.apple.com/design/human-interface-guidelines/>
  (typography · color · layout · materials · icons subsections)
- Material Design 3 — <https://m3.material.io/> · elevation <https://m3.material.io/styles/elevation/overview> · type scale <https://m3.material.io/styles/typography/type-scale-tokens>
- Shopify Polaris — <https://polaris.shopify.com/design>
- IBM Carbon typography — <https://carbondesignsystem.com/elements/typography/overview/>
- Atlassian Design foundations — <https://atlassian.design/foundations>
- GitHub Primer foundations — <https://primer.style/foundations>
- Microsoft Fluent 2 (key + ambient shadow model) — <https://fluent2.microsoft.design/>

**Curricula / meta**
- MDN, "Design for developers" — <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Design_for_developers>
- The Changelog #333, "Tactical design advice for developers" (Erik Kennedy interview) — <https://changelog.com/podcast/333>
- Refactoring UI process video (Steve Schoger) — <https://www.youtube.com/watch?v=7Z9rrryIOC4>
- Ladybug Podcast #24, "Design for developers" (Steve Schoger interview) — <https://www.ladybug.dev/episodes/design-for-developers>

## 8.2 Mirrors actually fetched this session (with provenance grade)

| # | Grade | What it is | URL fetched |
|---|---|---|---|
| M1 | **VERBATIM-MIRROR** | Hobday's saferules page, rules 1–25 with full explanations | <https://raw.githubusercontent.com/AndrewMaksimchuk/note/master/content/_pages/design-saferules/index.html> |
| M2 | VERBATIM-MIRROR (partial) | Hobday rules incl. 3 later additions (icon contrast, no shadows in dark UI, don't mix depth techniques), grouped + CSS examples | <https://raw.githubusercontent.com/RestartDK/procedural-planets/main/.cursor/rules/style-guide.mdc> |
| M3 | VERBATIM-MIRROR | Archived full HTML of the saferules page (base64 images inline) — useful for recovering the illustrations | <https://github.com/brettinternet/archive/blob/main/web/2023/Visual%20design%20rules%20you%20can%20safely%20follow%20every%20time%20(2023-06-10).html> |
| M4 | **VERBATIM-MIRROR** | "7 Practical Tips for Cheating at Design", complete article text incl. all image URLs | <https://raw.githubusercontent.com/BoiseCodeWorks/codeworks-fs-student-guide/master/src/resources/wk1/04-Cheating-at-Design.md> |
| M5 | **NOTES** | Erik Kennedy's 7 Rules, Parts 1 & 2, detailed reader notes | <https://raw.githubusercontent.com/daryllxd/lifelong-learning/master/design/seven-rules-for-creating-gorgeous-ui.md> |
| M6 | **NOTES** | *Refactoring UI* full-book chapter notes | <https://raw.githubusercontent.com/hughbien/notebook/master/refactoring_ui.md> |
| M7 | **NOTES** | *Refactoring UI* chapter notes (second, independent set — good cross-check) | <https://raw.githubusercontent.com/elrincondeldev/refactoring-ui-notes/main/README.md> |
| M8 | THIRD-PARTY DISTILLATION | *Refactoring UI* as an applied skill: three-lever hierarchy table, spacing/type scales, shadow elevation table, anti-patterns | <https://raw.githubusercontent.com/majiayu000/claude-skill-registry/main/skills/design/refactoring-ui-booklib-ai-skills/SKILL.md> |
| M9 | **NOTES** | Butterick key-rules summary | <https://raw.githubusercontent.com/ckorhonen/claude-skills/main/skills/practical-typography/references/key-rules.md> |
| M10 | THIRD-PARTY DISTILLATION | Typography canon (Butterick + Bringhurst + Lupton) as enforceable thresholds with per-rule attribution | <https://raw.githubusercontent.com/cgallic/design-os/main/design_os/canon/typography-canon.md> |
| M11 | THIRD-PARTY DISTILLATION | *Refactoring UI* canon as enforceable thresholds | <https://raw.githubusercontent.com/cgallic/design-os/main/design_os/canon/refactoring-ui.md> |
| M12 | THIRD-PARTY DISTILLATION | Apple HIG as enforceable thresholds (type ramp, 44pt, safe areas, deference) | <https://raw.githubusercontent.com/cgallic/design-os/main/design_os/canon/apple-hig.md> |
| M13 | THIRD-PARTY DISTILLATION | Swiss grid canon (Müller-Brockmann, Vignelli, Ruder) as enforceable thresholds | <https://raw.githubusercontent.com/cgallic/design-os/main/design_os/canon/swiss-grid.md> |
| M14 | THIRD-PARTY DISTILLATION | Interface-craft canon (Vercel/Freiberg/Kowalski) — micro-typography, hit targets, focus, empty states | <https://raw.githubusercontent.com/cgallic/design-os/main/design_os/canon/interface-craft.md> |
| M15 | THIRD-PARTY DISTILLATION | Erik Kennedy's Learn UI Design corpus condensed: font sizes, HSB, shadows, alignment, 60-30-10, font pairing, 37 spice techniques, key reference numbers | <https://raw.githubusercontent.com/dawitlabs/dawits-skills/main/ui-design-principles/SKILL.md> |
| M16 | THIRD-PARTY DISTILLATION | Literature review of Refactoring UI's principles — Gestalt, Weber–Fechner, preattentive processing, line-length studies, OKLCH, perceived brightness, clutter research, and honest limitations | <https://raw.githubusercontent.com/Nathandela/compound-agent/main/docs/compound/research/design/web-apps/refactoring-ui-design-principles.md> |
| M17 | **ORIGINAL** | Vercel Web Interface Guidelines (developer-facing lint ruleset) | <https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md> |
| M18 | **ORIGINAL** | MDN "Design for developers" curriculum + its recommended reading list | <https://raw.githubusercontent.com/mdn/content/main/files/en-us/learn_web_development/core/design_for_developers/index.md> |
| M19 | **ORIGINAL** | Anthropic `frontend-design` skill — aesthetic-direction guidance; notable for its calibration note on the three "AI-default" looks | <https://raw.githubusercontent.com/anthropics/skills/main/skills/frontend-design/SKILL.md> |
| M20 | NOTES | Steve Schoger talk notes (Refactoring UI process video) | <https://raw.githubusercontent.com/krishnaanaril/Notes/master/UX/Refactoring-UI_Notes/Video_Notes.md> |
| M21 | NOTES | swyx's spark-joy list — Hobday rule titles + Kennedy rule titles + Schoger's 5-tip talk list | <https://raw.githubusercontent.com/swyxio/spark-joy/master/README.md> |

## 8.3 Verification queue (do these when network access permits)

1. **Hobday rules 26–28** — confirm they are on the live page and get their canonical
   ordering/numbering (only found via M2).
2. **Erik Kennedy's 2024-updated font list** (Satoshi/Metropolis/Source Sans/Figtree) —
   currently only from M15.
3. **All numeric thresholds attributed to Learn UI Design in M15** — font-size minimums,
   shadow rgba values, button 40px/20px/16px, letter-spacing −1% for Source Sans, the
   60-30-10 attribution.
4. **The `cgallic/design-os` canon quotes** (M10–M14) — especially the Apple HIG type ramp,
   the Vignelli quotes, and the Bringhurst section numbers.
5. **The research citations in §7** (Dyson & Kipping 1998; Ling & van Schaik 2006; Sun &
   Perona 1998; Mamassian et al. 1998; Rosenholtz et al. 2007; Enders 2007; Jiang et al.
   2023; the 2024 *Scientific Reports* font-pairing NMF study) — verify each exists and says
   what is claimed before repeating.
6. **Material Design 3, Polaris, Carbon, Primer, Atlassian foundations** — not obtained at
   all; these are the biggest genuine gap in this file.
7. **Adham Dannaway's 16 rules** — not obtained; likely high-value given MDN endorses it.
8. **Hobday's illustrations** — M3 contains them base64-inline; extract if the course wants
   the before/after visuals.

## 8.4 Known conflicts between sources (teach these as judgment calls, not errors)

| Question | Position A | Position B |
|---|---|---|
| **Grids** | Hobday: "If you use a horizontal grid, use 12 columns." Müller-Brockmann/Vignelli: a documented grid must exist *before* layout; every edge snaps to it. | Refactoring UI: **"Grids are overrated… don't be a slave to the grid."** Embrace fluid AND fixed widths. |
| **Line length** | Butterick: 45–90 chars. Hobday: ~70. | Refactoring UI/Bringhurst: 45–75, 66 ideal. Müller-Brockmann: 7–10 words (~45–60). |
| **Line height for body** | Butterick: **1.20–1.45**. Vignelli: 1.08–1.25. | Refactoring UI: **1.5–2.0**. WCAG 1.4.12: **≥1.5**. ← the biggest numeric conflict in the file; roughly print-typesetting vs. screen-UI convention. |
| **Number of type sizes** | Vignelli: **≤2 sizes per view**, differentiate with weight and space. | Refactoring UI: a **10–11 step type scale**. |
| **De-saturated text on color** | 7 Practical Tips offers **reduced-opacity white** as option 1. | The canon threshold treats reduced-opacity white as a **fallback only** — hand-picked same-hue color is the default, because opacity washes out over images/patterns. |
| **Semantic button colors** | Common practice / Bootstrap / color-psychology tables: green = positive, red = destructive. | Refactoring UI: **"Semantics are secondary"** — hierarchy first; a non-primary destructive action gets a secondary or tertiary treatment, not red. |
| **Shadows in dark mode** | Refactoring UI's elevation system assumes light backgrounds. | Hobday: **don't use shadows in dark interfaces at all.** Material 3: use **tonal elevation** (lighter surfaces) instead. |
| **Font weights** | Refactoring UI / Vercel: **never below 400** in UI. | Apple SF guidance: weights below Regular are acceptable **at ≥20 pt** (display sizes) — i.e. the rule is size-dependent, not absolute. |
