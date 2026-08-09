// src/training/sources.ts - registry of external training datasets usable by
// the Aghoy data pipeline. Every source must carry a permissive license
// (apache-2.0 / mit / cc-by-4.0 / cc0-1.0). The license gate is enforced in
// two places: scripts/import-datasets.ts calls assertLicenseAllowed() for
// every source before anything is downloaded, and getSource() re-checks it.
// Add a dataset here, then rerun:
//   npx tsx scripts/import-datasets.ts

import { assertLicenseAllowed, TrainingChannel } from "./pipeline";

export interface DatasetSource {
  id: string; // short slug used as the row source prefix
  name: string;
  license: string;
  licenseUrl: string;
  attribution: string; // who to credit under the license
  channel: TrainingChannel | ((rawChannel: string) => TrainingChannel);
  labelMap: Record<string, "SCAM" | "LEGIT">;
  columns: { text: string; label: string; channel?: string };
  files: { path: string; url: string; archiveEntry?: string }[];
  // All rows share one label (datasets that ship a single class only).
  constantLabel?: "SCAM" | "LEGIT";
  // Non-commercial/ShareAlike exception approved by the project owner.
  nonCommercial?: boolean;
  // REQUIRED when nonCommercial is true: the owner-decision audit trail
  // (who decided, when, why). The license gate rejects a bare flag.
  licenseNote?: string; // why this exception was approved (audit trail)
}

const EMAIL_CHANNEL = "email" as const;
const SMS_CHANNEL = "sms" as const;
const JOB_CHANNEL = "job" as const;

export const TRAINING_SOURCES: DatasetSource[] = [
  {
    id: "llmgen-email",
    name: "LLMGen Phishing Email Dataset (GPT subset)",
    license: "apache-2.0",
    licenseUrl: "https://huggingface.co/datasets/Dizzzy0x00/LLMGen-Phishing-Email-Dataset",
    attribution: "Dizzzy0x00 / LLMGen-Phishing-Email-Dataset (Apache-2.0)",
    channel: EMAIL_CHANNEL,
    labelMap: { "1": "SCAM", "0": "LEGIT" },
    columns: { text: "content", label: "label" },
    files: [
      {
        path: "gpt_phishing_emails.csv",
        url: "https://huggingface.co/datasets/Dizzzy0x00/LLMGen-Phishing-Email-Dataset/resolve/main/GPT_Phishing_Email_dataset.csv",
      },
    ],
  },
  {
    id: "uci-sms",
    name: "UCI SMS Spam Collection (codesignal mirror)",
    license: "cc-by-4.0",
    licenseUrl: "https://huggingface.co/datasets/codesignal/sms-spam-collection",
    attribution: "UCI Machine Learning Repository SMS Spam Collection, mirrored by codesignal (CC-BY-4.0)",
    channel: SMS_CHANNEL,
    labelMap: { spam: "SCAM", ham: "LEGIT" },
    columns: { text: "message", label: "label" },
    files: [
      {
        path: "sms-spam.csv",
        url: "https://huggingface.co/datasets/codesignal/sms-spam-collection/resolve/main/sms-spam-collection.csv",
      },
    ],
  },
  {
    id: "scamshield",
    name: "ScamShield Scam Detection Data",
    license: "mit",
    licenseUrl: "https://huggingface.co/datasets/rehan-ml/scamshield-scam-detection-data",
    attribution: "Rehan M. / ScamShield Scam Detection Data (MIT)",
    channel: (raw: string) => (raw === "job" ? JOB_CHANNEL : SMS_CHANNEL),
    labelMap: { "1": "SCAM", "0": "LEGIT" },
    columns: { text: "text", label: "label", channel: "source" },
    files: [
      {
        path: "scamshield-train.csv",
        url: "https://huggingface.co/datasets/rehan-ml/scamshield-scam-detection-data/resolve/main/train.csv",
      },
      {
        path: "scamshield-test.csv",
        url: "https://huggingface.co/datasets/rehan-ml/scamshield-scam-detection-data/resolve/main/test.csv",
      },
      {
        path: "scamshield-validation.csv",
        url: "https://huggingface.co/datasets/rehan-ml/scamshield-scam-detection-data/resolve/main/validation.csv",
      },
    ],
  },
  {
    id: "kaggle-ph-spam",
    name: "Philippine Spam/Scam SMS (BwandoWando)",
    // CC BY-NC-SA 4.0: NonCommercial + ShareAlike. Admitted only because the
    // project owner explicitly directed this dataset and the value (real PH
    // Taglish scam SMS, numbers already masked) is the exact gap the model
    // needs. The derived corpus carries NC-SA terms - see THIRD_PARTY_NOTICES.
    license: "cc-by-nc-sa-4.0",
    licenseUrl: "https://www.kaggle.com/datasets/bwandowando/philippine-spam-sms-messages",
    attribution: "BwandoWando / Philippine Spam/Scam SMS Messages (CC BY-NC-SA 4.0)",
    nonCommercial: true,
    licenseNote: "Owner-directed exception (2026-08-08): non-profit use, masked numbers, PH Taglish scam SMS gap.",
    channel: SMS_CHANNEL,
    // The CSV ships only scam texts (no ham column) - every row is SCAM.
    constantLabel: "SCAM",
    labelMap: { spam: "SCAM", ham: "LEGIT" },
    columns: { text: "text", label: "" },
    files: [
      {
        path: "ph-spam.zip",
        // Kaggle's download endpoint is public for this dataset but MAY
        // require an active session for some datasets. If a rerun fails with a
        // 401/403, provide a Kaggle API key: KAGGLE_USERNAME + KAGGLE_KEY.
        url: "https://www.kaggle.com/api/v1/datasets/download/bwandowando/philippine-spam-sms-messages",
        archiveEntry: "SPAM_SMS.csv",
      },
    ],
  },
  {
    id: "antony-reyes-ph",
    name: "Sino 'To?! - ScamMessagesPhilippines (Anton Reyes)",
    // The GitHub repo ships NO license file (all-rights-reserved by default).
    // Admitted ONLY on the project owner's explicit direction (2026-08-09) as
    // a no-license exception, mirroring the non-commercial exception process:
    // the data is a public research aggregation of PH scam texts + the Kaggle
    // source already admitted. Credit is recorded in THIRD_PARTY_NOTICES.
    // The owner should still reach out to the author to convert this to a
    // real permissive license.
    license: "no-license",
    licenseUrl: "https://github.com/AGR-Yes/ScamMessagesPhilippines",
    attribution: "Anton Reyes / Sino 'To?! ScamMessagesPhilippines (no license declared; owner-approved exception)",
    nonCommercial: true,
    licenseNote: "Owner-directed exception (2026-08-09): public PH scam-text research repo, no LICENSE file, non-profit use with credit. Follow-up: email author for a permissive license.",
    channel: SMS_CHANNEL,
    // The spam.csv ships only scam texts - every row is SCAM.
    constantLabel: "SCAM",
    labelMap: { spam: "SCAM", ham: "LEGIT" },
    columns: { text: "proof", label: "" },
    files: [
      {
        path: "antony-reyes-spam.csv",
        url: "https://raw.githubusercontent.com/AGR-Yes/ScamMessagesPhilippines/main/Processed%20Datasets/spam.csv",
      },
    ],
  },
];

export const getSource = (id: string): DatasetSource => {
  const src = TRAINING_SOURCES.find((s) => s.id === id);
  if (!src) throw new Error(`unknown training source "${id}"`);
  assertLicenseAllowed(src.license, src.id, { nonCommercial: src.nonCommercial, licenseNote: src.licenseNote });
  return src;
};
