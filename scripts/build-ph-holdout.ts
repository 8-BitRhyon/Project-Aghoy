// Builds the frozen PH hold-out (onzero0 Tagalog-SMS, CC0, never in training). spam->SCAM, gov/notifs/ads->LEGIT, otp excluded; Jaccard-leakage guard. Run: npx tsx scripts/build-ph-holdout.ts

import { createHash } from "node:crypto";
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
// Pinned SHA-256: upstream changes must bump this deliberately (keeps the frozen holdout stable).
const EXPECTED_ARCHIVE_SHA = "e0f4201360b79260aa249c98b3f4399668af62c549ac34ed1de73befb1fef60c";
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
    const buf = Buffer.from(await res.arrayBuffer());
    const sha = createHash("sha256").update(buf).digest("hex");
    if (sha !== EXPECTED_ARCHIVE_SHA) {
      throw new Error(`archive SHA mismatch: got ${sha}, expected ${EXPECTED_ARCHIVE_SHA}. Update the pin deliberately if the source changed.`);
    }
    writeFileSync(zipPath, buf);
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
