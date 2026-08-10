/*
 * The word budget is a design commitment (research/delivery.md §4):
 * ≤1,200 words of prose per module, enforced at build time.
 * Counts rendered prose only — frontmatter, imports, JSX tags and their
 * attributes are excluded; text inside JSX children counts (the learner reads it).
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const BUDGET = 1200;
const dir = join(dirname(fileURLToPath(import.meta.url)), '../src/pages/modules');

let failed = false;
const rows = [];

for (const file of readdirSync(dir).filter((f) => f.endsWith('.mdx')).sort()) {
  let src = readFileSync(join(dir, file), 'utf8');

  src = src.replace(/^---[\s\S]*?---/, '');                    // frontmatter
  src = src.replace(/^import .*$/gm, '');                       // imports
  src = src.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');               // MDX comments
  src = src.replace(/<[^<>]*?=\{[^{}]*\}[^<>]*?>/gs, '<>');     // tags w/ expression attrs
  src = src.replace(/\{[^{}]*\}/g, ' ');                        // stray expressions
  src = src.replace(/<\/?[A-Za-z][^>]*>/g, ' ');                // remaining tags
  src = src.replace(/^#+\s*/gm, '');                            // heading markers

  const words = src.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
  const over = words > BUDGET;
  if (over) failed = true;
  rows.push({ file, words, status: over ? 'OVER BUDGET' : 'ok' });
}

console.log('\nWord budget (≤%d words of prose per module)', BUDGET);
for (const r of rows) {
  console.log('  %s %s — %d words [%s]', r.status === 'ok' ? '✓' : '✗', r.file, r.words, r.status);
}
console.log('');

if (failed) {
  console.error('Budget exceeded. Cut content, not clarity.');
  process.exit(1);
}
