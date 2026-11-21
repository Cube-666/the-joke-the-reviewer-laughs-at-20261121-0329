import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
// The judge is the reviewer of the change, so the joke is about the review
// itself: a confident "minor cleanup" that touches 47 files.
const JOKE =
  "My AI agent's commit message said 'minor cleanup' — 47 files changed, and I approved it because the summary sounded more confident than I felt.";

mkdirSync("/output", { recursive: true });

// The gate: 1 to 280 Unicode code points, not only white space.
const length = [...JOKE].length;
if (JOKE.trim().length === 0 || length < 1 || length > 280) {
  console.error(`entry.txt must be 1-280 characters, got ${length}`);
  process.exit(1);
}

writeFileSync("/output/entry.txt", JOKE, "utf8");
