// scripts/build-ph-holdout.ts - builds the frozen Philippine hold-out test set
// used to measure REAL generalization, separate from the 22-row Taglish reality
// check (which can be gamed by overfitting to narrow archetypes).
//
// The hold-out is built from the onzero0 "Tagalog-SMS" Kaggle dataset (CC0),
// which is deliberately NEVER added to the training corpus. This guarantees the
// hold-out rows are unseen by any model variant, so a model that scores well
// here has genuinely generalized to real PH text, not memorized archetypes.
//
// Label mapping (documented, auditable):
//   spam   -> SCAM  (verified: casino/loan/NCAP scams, incl. Taglish phrasing)
//   gov    -> LEGIT (NDRRMC/DOT scam warnings - verified legitimate)
//   notifs -> LEGIT (bank/wallet/telco transactional notifications)
//   ads    -> LEGIT (legitimate marketing from real PH businesses)
//   otp    -> EXCLUDED (ambiguous: real OTPs and OTP-phishing both land here;
//                       including them would corrupt the labels)
//
// Every row passes through the Rejects PII layer (shared with training), and
// rows that carry no text or are pre-redacted are dropped.
//
// LEAKAGE GUARD: holdout rows that near-duplicate a training corpus row
// (Jaccard > 0.5 on the same word-set measure training uses) are EXCLUDED.
// This matters doubly because several training sources share source material
// with this dataset - e.g. a BDO "manage your accounts" message is labeled
// SCAM in kaggle-ph-spam but LEGIT here, a contradiction that would poison
// both the holdout score and the model if learned. The guard keeps the
// holdout genuinely unseen and label-clean.
//
// Run: npx tsx scripts/build-ph-holdout.ts
// Writes: data/training/test-ph-holdout.jsonl (committed)

import { mkdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parseCsv, resolveColumns, mapRow } from "../src/training/pipeline";
import { redactPII } from "../src/rejects/rejects";
import { tokenSet, jaccard } from "../src/training/split";
import { extractArchiveEntryRaw } from "./import-archive.ts";
import { xlsxToCsv } from "./import-xlsx.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_DIR = join(__dirname, "..");
const OUT = join(REPO_DIR, "data/training/test-ph-holdout.jsonl");
const CACHE = join(REPO_DIR, "data/training/.cache");

const URL = "https://www.kaggle.com/api/v1/datasets/download/onzero0/tagalog-sms";
const LABEL_MAP: Record<string, "SCAM" | "LEGIT"> = {
  spam: "SCAM",
  gov: "LEGIT",
  notifs: "LEGIT",
  ads: "LEGIT",
};
const EXCLUDED_CATEGORIES = new Set(["otp"]);

const main = async (): Promise<void> => {
  mkdirSync(CACHE, { recursive: true });
  const zipPath = join(CACHE, "tagalog-sms-holdout.zip");
  if (!existsSync(zipPath) || statSync(zipPath).size === 0) {
    console.log("downloading tagalog-sms...");
    const res = await fetch(URL, { redirect: "follow", signal: AbortSignal.timeout(120_000) });
    if (!res.ok) throw new Error(`download failed: ${res.status}`);
    writeFileSync(zipPath, Buffer.from(await res.arrayBuffer()));
  }
  const xlsxPath = join(CACHE, "tagalog-sms-holdout.xlsx");
  if (!existsSync(xlsxPath)) {
    writeFileSync(xlsxPath, extractArchiveEntryRaw(zipPath, "tagalog-sms.xlsx"));
  }
  const csv = parseCsv(xlsxToCsv(xlsxPath));
  const [header, ...rows] = csv;
  const columns = resolveColumns(header, { text: "text", label: "category" });

  const out: { id: string; text: string; label: "SCAM" | "LEGIT" }[] = [];
  let excluded = 0;
  let redacted = 0;
  for (let i = 0; i < rows.length; i++) {
    const raw = rows[i];
    const category = (raw[columns.label] ?? "").trim().toLowerCase();
    if (EXCLUDED_CATEGORIES.has(category)) {
      excluded++;
      continue;
    }
    const label = LABEL_MAP[category];
    if (!label) continue;
    const rawText = (raw[columns.text] ?? "").trim();
    if (!rawText) continue;
    const cleaned = redactPII(rawText);
    if (!cleaned.text.trim() || cleaned.text.trim().length < 4) {
      excluded++;
      continue;
    }
    if (cleaned.redacted) redacted++;
    out.push({ id: `ph-holdout-${String(i).padStart(6, "0")}`, text: cleaned.text, label });
  }

  // Leakage guard: exclude holdout rows near-duplicating a training row. Also
  // flags contradictory labels (e.g. BDO message SCAM in training, LEGIT here).
  const corpusTexts: string[] = [];
  const corpusPath = join(REPO_DIR, "data/training/corpus.jsonl");
  if (existsSync(corpusPath)) {
    for (const line of readFileSync(corpusPath, "utf8").split("\n")) {
      if (line.trim()) corpusTexts.push(JSON.parse(line).text);
    }
  }
  const trainSets = corpusTexts.map((t) => tokenSet(t));
  const leakDropped: string[] = [];
  const clean = out.filter((r) => {
    const set = tokenSet(r.text);
    for (const ts of trainSets) {
      if (jaccard(set, ts) > 0.5) {
        leakDropped.push(r.id);
        return false;
      }
    }
    return true;
  });
  if (leakDropped.length) {
    console.log(`  leakage guard: excluded ${leakDropped.length} rows near-duplicating the training corpus`);
  }

  const nScam = clean.filter((r) => r.label === "SCAM").length;
  const nLegit = clean.filter((r) => r.label === "LEGIT").length;
  writeFileSync(OUT, clean.map((r) => JSON.stringify(r)).join("\n") + "\n");
  console.log(`wrote ${OUT}`);
  console.log(`  ${out.length} rows (${nScam} SCAM / ${nLegit} LEGIT), ${excluded} excluded, ${redacted} PII-redacted`);
};

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
