# The course site

The interactive delivery of the UI/UX Primer — the architecture recommended in
[../research/delivery.md](../research/delivery.md): a static Astro/MDX site whose
interactivity comes from a small set of reusable drill archetypes, with every demo UI
rendered from design tokens (never screenshots) so wrong variants are token perturbations.

## Run it

```bash
cd course
npm install
npm run dev        # http://localhost:4321
```

`npm run build` runs the word-budget check first (≤1,200 words of prose per module —
the build fails if a module bloats) and outputs a fully static site to `dist/`.

## Where things live

| Path | What |
|---|---|
| `src/pages/modules/*.mdx` | The modules — prose plus drill placements. This is where the course is written. |
| `src/components/demos.tsx` | Token-rendered demo UIs + the perturbation presets (`offScaleCard`, `flatCard`) |
| `src/components/ABFlicker.tsx` | Archetype 1 — A/B commit → in-place flicker reveal |
| `src/components/PredictReveal.tsx` | Archetype 2 — predict, then the explanation unlocks |
| `src/components/LeverStepper.tsx` | Archetype 3 — one variable at a time, stepped |
| `src/components/BeforeAfter.tsx` | Archetype 4 — annotated before/after with a named rule |
| `src/components/SquintToggle.tsx` | The squint test as a button |
| `src/styles/global.css` | The design tokens the site itself obeys — one spacing scale, one type scale, one hue |
| `scripts/check-words.mjs` | The word-budget enforcer |

## Adding a module

1. Create `src/pages/modules/NN-slug.mdx` with the frontmatter the existing modules use
   (`layout`, `number`, `title`, `dek`, `minutes`, `prev`/`next`).
2. Write in the module arc: `## Notice` → `## Why` → `## The move` → `## The tool` →
   `## Before you ship`. Keep the style contract from
   [../research/synthesis.md](../research/synthesis.md) §5.
3. Place drills by config, not by building new widgets. New demo UIs go in `demos.tsx`
   as token-rendered components.
4. Flip the module from `queued` to linked in `src/pages/index.astro`.
