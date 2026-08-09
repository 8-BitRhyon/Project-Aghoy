#!/usr/bin/env python3
# scripts/eval_holdout.py - evaluate a trained classifier against the frozen
# PH hold-out test set (data/training/test-ph-holdout.jsonl). This measures REAL
# generalization to unseen Philippine text, independent of the 22-row Taglish
# reality check (which can be gamed by overfitting to narrow archetypes).
#
# The hold-out is built from a dataset that is deliberately NOT in any training
# run, and its rows are leakage-guarded against the training corpus. A model
# that scores well here has genuinely generalized to PH text.
#
# Run:
#   .venv-train/bin/python scripts/eval_holdout.py \
#     --checkpoint models/tinybert-v1/checkpoint-XXXX \
#     --holdout data/training/test-ph-holdout.jsonl \
#     --threshold 0.71

import argparse
import json
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent

def parse_args():
    p = argparse.ArgumentParser()
    p.add_argument("--checkpoint", required=True, help="trained model dir")
    p.add_argument("--holdout", default=str(REPO / "data/training/test-ph-holdout.jsonl"))
    p.add_argument("--threshold", type=float, default=0.5)
    p.add_argument("--model", default="huawei-noah/TinyBERT_General_4L_312D",
                   help="base model for the tokenizer (checkpoints don't ship tokenizer files)")
    return p.parse_args()

def main():
    args = parse_args()
    import numpy as np
    import torch
    from transformers import AutoModelForSequenceClassification, AutoTokenizer

    tokenizer = AutoTokenizer.from_pretrained(args.model, use_fast=True)
    model = AutoModelForSequenceClassification.from_pretrained(args.checkpoint)
    model.eval()

    hold = []
    with open(args.holdout, "r", encoding="utf-8") as f:
        for line in f:
            if line.strip():
                d = json.loads(line)
                hold.append(d)
    print(f"holdout: {len(hold)} rows")

    texts = [r["text"] for r in hold]
    labels = np.array([1 if r["label"] == "SCAM" else 0 for r in hold])
    enc = tokenizer(texts, truncation=True, padding="max_length", max_length=128, return_tensors="pt")

    from sklearn.metrics import confusion_matrix, precision_recall_fscore_support, roc_auc_score
    with torch.no_grad():
        logits = model(**enc).logits
    probs = torch.softmax(logits, dim=-1)[:, 1].numpy()
    pred = (probs >= args.threshold).astype(int)

    tn, fp, fn, tp = confusion_matrix(labels, pred, labels=[0, 1]).ravel()
    p, r, f1, _ = precision_recall_fscore_support(labels, pred, average="binary", pos_label=1)
    fpr = fp / max(1, tn + fp)
    fnr = fn / max(1, tp + fn)
    auc = roc_auc_score(labels, probs)
    acc = (tp + tn) / max(1, len(labels))
    scam_n = int(tp + fn)
    legit_n = int(tn + fp)

    print(f"\n=== PH HOLDOUT ({len(hold)} rows: {scam_n} SCAM / {legit_n} LEGIT) ===")
    print(f"  threshold: {args.threshold:.2f}")
    print(f"  accuracy: {acc:.4f}")
    print(f"  scam precision: {p:.4f}  recall: {r:.4f}  F1: {f1:.4f}")
    print(f"  false-positive rate: {fpr:.4f} ({fp}/{legit_n})")
    print(f"  false-negative rate: {fnr:.4f} ({fn}/{scam_n} scams missed)")
    print(f"  AUC: {auc:.4f}")
    print(f"  conf matrix: {tp}TP/{fp}FP/{fn}FN/{tn}TN")
    print(f"  recalled scams: {tp}/{scam_n} ({tp/scam_n*100:.1f}%)")

    # Per-label scan for diagnostics
    print("\n--- missed scams (FNs) sample ---")
    missed = [(r, pr) for r, pr, l in zip(hold, probs, pred) if l == 0 and r["label"] == "SCAM"]
    missed.sort(key=lambda x: -x[1])
    for r, pr in missed[:5]:
        print(f"  p={pr:.2f} | {r['text'][:70]}")
    print("\n--- false positives (FPs) sample ---")
    fps = [(r, pr) for r, pr, l in zip(hold, probs, pred) if l == 1 and r["label"] == "LEGIT"]
    fps.sort(key=lambda x: -x[1])
    for r, pr in fps[:5]:
        print(f"  p={pr:.2f} | {r['text'][:70]}")

if __name__ == "__main__":
    main()
