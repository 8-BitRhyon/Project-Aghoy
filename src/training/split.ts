// src/training/split.ts - anti-overfitting data splits for the Aghoy classifier.
//
// Two independent guards, both deterministic:
//
// 1. Provenance-aware stratified split (80/10/10): stratification happens
//    WITHIN each source (llmgen/uci-sms/scamshield) and each label, so the
//    test fold never loses a source or a class the model saw in training.
//    A naive global shuffle would let a source-rich class silently dominate
//    or starve a fold.
//
// 2. Near-duplicate leakage guard: near-identical texts (same scam template
//    re-worded across datasets) must never straddle train and test, or the
//    test score is fake. We drop any val/test row whose token-set Jaccard
//    similarity to its best train match exceeds `maxSimilarity`, and log
//    every dropped row for audit.
//
// Split is emitted as explicit row ids (from the corpus `id` field), NOT as
// indices, so the split is stable regardless of file ordering or edits.

export interface CorpusRow {
  id: string;
  text: string;
  label: "SCAM" | "LEGIT";
  source: string;
}

export interface SplitResult {
  train: string[];
  val: string[];
  test: string[];
  droppedLeakage: { id: string; bestTrainId: string; similarity: number }[];
}

export const jaccard = (a: Set<string>, b: Set<string>): number => {
  if (a.size === 0 && b.size === 0) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter += 1;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
};

export const tokenSet = (text: string, _n?: number): Set<string> => {
  // Unigram word set: far more sensitive to near-duplicates than n-gram
  // shingles. A 4-gram shingle of a re-worded scam template can score <0.3
  // even though it is the same scam, letting leakage slip through the guard.
  const toks = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((t) => t.length >= 3);
  return new Set(toks);
};

// Deterministic splitter. `seed` drives a per-source RNG so reruns are stable.
export const provenanceStratifiedSplit = (
  rows: CorpusRow[],
  opts: { seed?: number; valFrac?: number; testFrac?: number } = {}
): SplitResult => {
  const seed = opts.seed ?? 20260808;
  const valFrac = opts.valFrac ?? 0.1;
  const testFrac = opts.testFrac ?? 0.1;
  const train: string[] = [];
  const val: string[] = [];
  const test: string[] = [];

  const bySource = new Map<string, Map<string, CorpusRow[]>>();
  for (const r of rows) {
    if (!bySource.has(r.source)) bySource.set(r.source, new Map());
    const byLabel = bySource.get(r.source)!;
    if (!byLabel.has(r.label)) byLabel.set(r.label, []);
    byLabel.get(r.label)!.push(r);
  }

  // Iterate strata in SORTED order and derive each stratum's RNG seed from the
  // source+label so the split is independent of corpus row ordering: reordering
  // the same JSONL must produce the same fold membership for the same seed.
  const sourceKeys = [...bySource.keys()].sort();
  for (const source of sourceKeys) {
    const byLabel = bySource.get(source)!;
    const labelKeys = [...byLabel.keys()].sort();
    for (const label of labelKeys) {
      const pool = byLabel.get(label)!;
      const ids = pool.map((r) => r.id).sort();
      // Deterministic shuffle within the (source, label) stratum.
      let a = (seed ^ hashStr(`${source}|${label}`) ^ (ids.length * 2654435761)) >>> 0;
      const rnd = () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
      for (let i = ids.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [ids[i], ids[j]] = [ids[j], ids[i]];
      }
      const nVal = Math.floor(ids.length * valFrac);
      const nTest = Math.floor(ids.length * testFrac);
      test.push(...ids.slice(0, nTest));
      val.push(...ids.slice(nTest, nTest + nVal));
      train.push(...ids.slice(nTest + nVal));
    }
  }

  return { train, val, test, droppedLeakage: [] };
};

// Deterministic string hash (FNV-1a, 32-bit) for stratum-seeded shuffling.
const hashStr = (s: string): number => {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
};

// Second guard: drop val/test rows that near-duplicate a train row. This is
// O(n^2) worst-case but the corpus is ~12k rows and each comparison is a
// cheap Set intersection; acceptable for a one-shot offline pipeline.
export const dropLeakage = (
  rows: CorpusRow[],
  split: { train: string[]; val: string[]; test: string[] },
  maxSimilarity = 0.5
): SplitResult => {
  const byId = new Map(rows.map((r) => [r.id, r]));
  // Comparison set grows: train rows first, then RETAINED val rows (so a test
  // row that near-duplicates a validation row - which is used for threshold
  // tuning - is also dropped, not just train duplicates).
  const comparison = split.train.map((id) => ({ id, set: tokenSet(byId.get(id)?.text ?? "") }));
  const droppedLeakage: SplitResult["droppedLeakage"] = [];
  const keepVal: string[] = [];
  const keepTest: string[] = [];

  for (const fold of [
    { ids: split.val, out: keepVal },
    { ids: split.test, out: keepTest },
  ]) {
    for (const id of fold.ids) {
      const row = byId.get(id);
      if (!row) continue;
      const set = tokenSet(row.text);
      let bestSim = 0;
      let bestId = "";
      for (const t of comparison) {
        const sim = jaccard(set, t.set);
        if (sim > bestSim) {
          bestSim = sim;
          bestId = t.id;
          if (bestSim > maxSimilarity) break;
        }
      }
      if (bestSim > maxSimilarity) {
        droppedLeakage.push({ id, bestTrainId: bestId, similarity: Math.round(bestSim * 100) / 100 });
      } else {
        fold.out.push(id);
        // Retained rows join the comparison set for later folds (val -> test),
        // so val-to-test leakage is caught too.
        comparison.push({ id, set });
      }
    }
  }

  return { train: split.train, val: keepVal, test: keepTest, droppedLeakage };
};
