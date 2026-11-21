// Entry program for the make.fun GTA 6 meme bounty (Node 22, standard library only).
//
// The entry itself is the X post: this program only hands the grader the post's
// address. It reads POST.json from the repository, checks it really is an object
// with a url string, and writes that same JSON out to the output directory.
// Nothing else is written, so the two grader runs always produce the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const raw = readFileSync(join(botDir, 'POST.json'), 'utf8');
const parsed: unknown = JSON.parse(raw);

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  console.error('POST.json must be a JSON object with a url field.');
  process.exit(1);
}

const url = (parsed as Record<string, unknown>).url;
if (typeof url !== 'string' || url.length === 0) {
  console.error('POST.json must carry a url string naming the X post.');
  process.exit(1);
}

// The address must name a post on X; anything else is refused by the gate,
// so fail loudly here instead of handing the grader a bad file.
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\//.test(url)) {
  console.error('POST.json url must be an https://x.com (or twitter.com) post address.');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), `${JSON.stringify(parsed)}\n`, 'utf8');
