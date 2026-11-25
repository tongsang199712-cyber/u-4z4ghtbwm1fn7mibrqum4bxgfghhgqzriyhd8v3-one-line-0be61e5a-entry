// One Line, One Laugh — make.fun bounty entry.
//
// Writes a single self-contained funny line (1-140 characters) to
// /output/entry.txt, exactly as the competition requires: the file holds
// the line alone, with no trailing newline and no extra text.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// Revision 2: final polish — an em dash instead of the semicolon, so the
// sentence pauses for a beat right before the twist lands.
const LINE =
  "My smartwatch praised my 10,000 steps today — I was only pacing for my pizza delivery, so technically the pizza did the workout.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
chmodSync(OUTPUT_FILE, 0o644);

console.log(`Wrote ${LINE.length} characters to ${OUTPUT_FILE}`);
console.log(LINE);
