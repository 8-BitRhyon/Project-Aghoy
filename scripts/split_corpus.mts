// scripts/split_corpus.mts - emits the anti-overfitting train/val/test split
// for the Aghoy training corpus as JSON on stdout. The split logic lives in
// src/training/split.ts (unit-tested); Python scripts consume this sidecar so
// there is a single source of truth for split correctness.
//
// Run: npx tsx scripts/split_corpus.mts --corpus data/training/corpus.jsonl --seed 20260808 --leak-sim 0.5
// Output: {"train":[...], "val":[...], "test":[...], "droppedLeakage":[...]}

import { readFileSync } from "node:fs";
import { dropLeakage, provenanceStratifiedSplit, CorpusRow } from "../src/training/split.ts";

const arg = (name: string): string | undefined => {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
};

const corpusPath = arg("--corpus");
if (!corpusPath) {
  console.error("usage: split_corpus.mts --corpus <corpus.jsonl> [--seed N] [--leak-sim F]");
  process.exit(1);
}
const seed = Number(arg("--seed") ?? "20260808");
const leakSim = Number(arg("--leak-sim") ?? "0.5");

const rows: CorpusRow[] = readFileSync(corpusPath, "utf8")
  .split("\n")
  .filter((l) => l.trim())
  .map((l) => {
    const d = JSON.parse(l);
    return { id: d.id, text: d.text, label: d.label, source: d.source ?? "?" };
  });

const split = provenanceStratifiedSplit(rows, { seed });
const guarded = dropLeakage(rows, split, leakSim);

process.stdout.write(JSON.stringify({
  seed,
  leakSim,
  nTrain: guarded.train.length,
  nVal: guarded.val.length,
  nTest: guarded.test.length,
  leakageDropped: guarded.droppedLeakage.length,
  train: guarded.train,
  val: guarded.val,
  test: guarded.test,
  droppedLeakage: guarded.droppedLeakage,
}) + "\n");
