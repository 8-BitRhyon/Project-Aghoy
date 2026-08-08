// scripts/verify_deterministic.mts - runs the deterministic engine
// (src/brands/brands.ts fallbackVerdict) over a probe JSONL and prints one
// JSON object per line: {id, verdict, score}. Consumed by
// scripts/train_classifier.py as the verifier in the fusion evaluation.
//
// Run: node --experimental-strip-types scripts/verify_deterministic.mts <probe.jsonl>
//
// verdict is one of "HIGH_RISK" | "SUSPICIOUS" | "SAFE" | "NULL" (abstains).

import { readFileSync } from "node:fs";
import { fallbackVerdict } from "../src/brands/brands.ts";

const path = process.argv[2];
if (!path) {
  console.error("usage: verify_deterministic.mts <probe.jsonl>");
  process.exit(1);
}

for (const line of readFileSync(path, "utf8").split("\n")) {
  if (!line.trim()) continue;
  const { id, text } = JSON.parse(line);
  const v = fallbackVerdict(text ?? "");
  console.log(JSON.stringify({
    id,
    verdict: v ? v.verdict : "NULL",
    score: v ? v.riskScore : 0,
  }));
}
