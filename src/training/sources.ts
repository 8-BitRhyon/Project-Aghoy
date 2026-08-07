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
  files: { path: string; url: string }[];
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
];

export const getSource = (id: string): DatasetSource => {
  const src = TRAINING_SOURCES.find((s) => s.id === id);
  if (!src) throw new Error(`unknown training source "${id}"`);
  assertLicenseAllowed(src.license, src.id);
  return src;
};
