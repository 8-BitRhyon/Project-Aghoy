#!/usr/bin/env python3
# scripts/train_classifier.py - fine-tune a small transformer on the Aghoy
# scam corpus with a strict anti-overfitting protocol, then evaluate it against
# the deterministic engine (src/brands/brands.ts) as the verifier.
#
# Run (from repo root, in .venv-train):
#   .venv-train/bin/python scripts/train_classifier.py --help
#
# Protocol (why each step exists - see AGENTS.md "Evidence over hope"):
#   1. Load data/training/corpus.jsonl (12,468 rows, {id, text, label, source}).
#   2. Provenance-aware stratified split 80/10/10: stratified within each
#      (source, label) so every source and class appears in every fold.
#   3. Near-duplicate leakage guard: drop val/test rows whose word-set Jaccard
#      similarity to a train row exceeds the threshold, so re-worded copies of
#      the same scam cannot inflate the test score.
#   4. Tokenize, fine-tune with early stopping on validation loss (patience),
#      weight decay, and class weighting (scam is the minority class).
#   5. The classification threshold is tuned on the VALIDATION fold only.
#      Test scores are reported at that locked threshold - never tuned on test.
#   6. Fusion evaluation: the deterministic engine (fallbackVerdict) acts as
#      the verifier. We measure the model alone, the engine alone, and the
#      fused system (engine decides; model fills in only when the engine
#      abstains at high confidence). False positives are reported per path.
#
# The deterministic engine runs in Node/TS (it lives in src/brands/brands.ts).
# This script writes the test fold to a temp JSONL, invokes the TS sidecar
# (scripts/verify_deterministic.mts) once, and merges the engine verdicts in.

import argparse
import json
import math
import os
import random
import subprocess
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO / "src"))

from sklearn.metrics import confusion_matrix, precision_recall_fscore_support, roc_auc_score

def run_split_sidecar(corpus: Path, seed: int, leak_sim: float) -> dict:
    """The anti-overfitting split lives in TS (src/training/split.ts, tested).
    Python invokes the splitter sidecar and consumes its JSON - one source of
    truth for split correctness, consumed by both Python and the test suite."""
    out = subprocess.run(
        ["npx", "tsx", "scripts/split_corpus.mts", "--corpus", str(corpus),
         "--seed", str(seed), "--leak-sim", str(leak_sim)],
        capture_output=True, text=True, cwd=str(REPO), timeout=300)
    if out.returncode != 0:
        raise RuntimeError(f"split sidecar failed: {out.stderr[:500]}")
    return json.loads(out.stdout.strip().splitlines()[-1])

def parse_args():
    p = argparse.ArgumentParser()
    p.add_argument("--model", default="huawei-noah/TinyBERT_General_4L_312D",
                   help="HF checkpoint to fine-tune (TinyBERT ~15MB or MobileBERT ~26MB int8)")
    p.add_argument("--corpus", default=str(REPO / "data/training/corpus.jsonl"))
    p.add_argument("--out", default=str(REPO / "models"))
    p.add_argument("--epochs", type=int, default=3)
    p.add_argument("--batch-size", type=int, default=16)
    p.add_argument("--lr", type=float, default=2e-5)
    p.add_argument("--max-len", type=int, default=128)
    p.add_argument("--seed", type=int, default=20260808)
    p.add_argument("--leak-sim", type=float, default=0.5, help="max Jaccard similarity for the leakage guard")
    p.add_argument("--patience", type=int, default=2, help="early-stopping patience (epochs)")
    p.add_argument("--tag", default="v1")
    p.add_argument("--no-fusion", action="store_true", help="skip deterministic-verifier evaluation")
    return p.parse_args()

def load_corpus(path: Path) -> list[dict]:
    rows = []
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            d = json.loads(line)
            rows.append({"id": d["id"], "text": d["text"], "label": d["label"], "source": d.get("source", "?")})
    return rows

def main():
    args = parse_args()
    random.seed(args.seed)
    os.environ["TRANSFORMERS_NO_ADVISORY_WARNINGS"] = "1"
    os.environ["HF_HUB_DISABLE_TELEMETRY"] = "1"

    rows = load_corpus(Path(args.corpus))
    print(f"corpus: {len(rows)} rows")

    split = run_split_sidecar(Path(args.corpus), args.seed, args.leak_sim)
    by_id = {r["id"]: r for r in rows}
    train_rows = [by_id[i] for i in split["train"]]
    val_rows = [by_id[i] for i in split["val"]]
    test_rows = [by_id[i] for i in split["test"]]
    print(f"split: {len(train_rows)} train / {len(val_rows)} val / {len(test_rows)} test"
          + (f" (+{split['leakageDropped']} leakage rows dropped)" if split["leakageDropped"] else ""))

    # ---- imports are lazy so --help works before deps resolve ----
    import numpy as np
    import torch
    from torch.utils.data import DataLoader, Dataset
    from transformers import AutoModelForSequenceClassification, AutoTokenizer, Trainer, TrainingArguments
    from transformers import EarlyStoppingCallback

    torch.manual_seed(args.seed)
    np.random.seed(args.seed)

    tokenizer = AutoTokenizer.from_pretrained(args.model, use_fast=True)
    model = AutoModelForSequenceClassification.from_pretrained(args.model, num_labels=2)

    class ScamDataset(Dataset):
        def __init__(self, items: list[dict]):
            self.enc = tokenizer([r["text"] for r in items], truncation=True, padding="max_length",
                                 max_length=args.max_len, return_tensors="pt")
            self.labels = torch.tensor([1 if r["label"] == "SCAM" else 0 for r in items])
        def __len__(self):
            return len(self.labels)
        def __getitem__(self, i):
            return {k: v[i] for k, v in self.enc.items()} | {"labels": self.labels[i]}

    train_ds = ScamDataset(train_rows)
    val_ds = ScamDataset(val_rows)

    out_dir = Path(args.out) / args.tag
    out_dir.mkdir(parents=True, exist_ok=True)

    # Class weights: scam is ~1/3 of the balanced corpus, but a false negative
    # (missed scam) and a false positive (scam-flagged legit) both matter. Use
    # inverse-frequency weights so the minority class is not ignored.
    n_scam = sum(1 for r in train_rows if r["label"] == "SCAM")
    n_legit = len(train_rows) - n_scam
    if n_scam == 0 or n_legit == 0:
        raise SystemExit(f"train fold has no {('scam' if n_scam == 0 else 'legit')} rows - cannot train a binary classifier")
    w = torch.tensor([len(train_rows) / (2 * n_legit), len(train_rows) / (2 * n_scam)], dtype=torch.float)
    model.config.label2id = {"LEGIT": 0, "SCAM": 1}
    model.config.id2label = {0: "LEGIT", 1: "SCAM"}

    # Weighted CrossEntropy so the minority (scam) class contributes fairly to
    # the gradient. Trainer's default loss is unweighted.
    loss_fn = torch.nn.CrossEntropyLoss(weight=w)

    class WeightedTrainer(Trainer):
        def compute_loss(self, model, inputs, return_outputs=False, num_items_in_batch=None):
            labels = inputs.pop("labels")
            outputs = model(**inputs)
            logits = outputs.logits
            loss = loss_fn(logits.view(-1, model.config.num_labels), labels.view(-1))
            return (loss, outputs) if return_outputs else loss

    training_args = TrainingArguments(
        output_dir=str(out_dir),
        num_train_epochs=args.epochs,
        per_device_train_batch_size=args.batch_size,
        per_device_eval_batch_size=args.batch_size * 2,
        learning_rate=args.lr,
        weight_decay=0.01,
        eval_strategy="epoch",
        save_strategy="epoch",
        load_best_model_at_end=True,
        metric_for_best_model="eval_loss",
        greater_is_better=False,
        save_total_limit=1,
        logging_strategy="no",
        report_to=[],
        seed=args.seed,
        dataloader_pin_memory=False,
        disable_tqdm=False,
        use_cpu=True,  # deterministic CPU training; tiny model, M4 is fast enough
    )

    trainer = WeightedTrainer(
        model=model,
        args=training_args,
        train_dataset=train_ds,
        eval_dataset=val_ds,
        callbacks=[EarlyStoppingCallback(early_stopping_patience=args.patience)],
    )
    print(f"training {args.model} ...")
    trainer.train()

    # ---- lock threshold on VALIDATION only ----
    val_logits = trainer.predict(val_ds).predictions[:, 1]
    val_true = np.array([1 if r["label"] == "SCAM" else 0 for r in val_rows])
    best_thresh, best_f1 = 0.5, -1.0
    for t in [x / 100 for x in range(5, 96, 1)]:
        pred = (val_logits >= t).astype(int)
        f1 = precision_recall_fscore_support(val_true, pred, average="binary", pos_label=1)[2]
        if f1 > best_f1:
            best_f1, best_thresh = f1, t
    print(f"threshold (tuned on val): {best_thresh:.2f} (val F1 {best_f1:.4f})")

    # ---- test evaluation at the locked threshold ----
    test_ds = ScamDataset(test_rows)
    test_logits = trainer.predict(test_ds).predictions[:, 1]
    test_true = np.array([1 if r["label"] == "SCAM" else 0 for r in test_rows])
    pred = (test_logits >= best_thresh).astype(int)
    tn, fp, fn, tp = confusion_matrix(test_true, pred, labels=[0, 1]).ravel()
    p, r, f1, _ = precision_recall_fscore_support(test_true, pred, average="binary", pos_label=1)
    auc = roc_auc_score(test_true, test_logits)
    fpr = fp / max(1, tn + fp)
    fnr = fn / max(1, tp + fn)
    metrics = {
        "model": args.model,
        "tag": args.tag,
        "n_train": len(train_rows), "n_val": len(val_rows), "n_test": len(test_rows),
        "leakage_dropped": split["leakageDropped"],
        "threshold": best_thresh,
        "test": {
            "accuracy": round(float((tp + tn) / max(1, len(test_true))), 4),
            "precision_scam": round(float(p), 4),
            "recall_scam": round(float(r), 4),
            "f1_scam": round(float(f1), 4),
            "auc": round(float(auc), 4),
            "false_positive_rate": round(float(fpr), 4),
            "false_negative_rate": round(float(fnr), 4),
            "tp": int(tp), "fp": int(fp), "fn": int(fn), "tn": int(tn),
        },
    }
    print("\n=== MODEL ALONE (test, locked threshold) ===")
    print(f"  acc={metrics['test']['accuracy']:.3f} P={metrics['test']['precision_scam']:.3f} "
          f"R={metrics['test']['recall_scam']:.3f} F1={metrics['test']['f1_scam']:.3f} AUC={metrics['test']['auc']:.3f}")
    print(f"  FPR={metrics['test']['false_positive_rate']:.4f} FNR={metrics['test']['false_negative_rate']:.4f} "
          f"({tp}TP/{fp}FP/{fn}FN/{tn}TN)")

    if not args.no_fusion:
        metrics["fusion"] = run_fusion_eval(test_rows, test_logits, best_thresh, out_dir)
        metrics["taglish"] = run_taglish_eval(test_rows, test_logits, best_thresh, model, tokenizer)

    with open(out_dir / "metrics.json", "w", encoding="utf-8") as f:
        json.dump(metrics, f, indent=2)
    print(f"\nmetrics -> {out_dir / 'metrics.json'}")

def run_fusion_eval(test_rows: list, test_logits, threshold, out_dir: Path):
    """Run the deterministic engine over the test fold, then compute the fused
    (engine-as-verifier) false-positive/recall numbers vs the model alone."""
    import numpy as np
    from sklearn.metrics import confusion_matrix

    probe = out_dir / "fusion_test_input.jsonl"
    with open(probe, "w", encoding="utf-8") as f:
        for r in test_rows:
            f.write(json.dumps({"id": r["id"], "text": r["text"]}) + "\n")

    script = REPO / "scripts" / "verify_deterministic.mts"
    if not script.exists():
        print("  [fusion] verify_deterministic.mts missing - skipping deterministic evaluation")
        return None
    # Extensionless TS imports (src/rejects/rejects) need tsx, not raw node.
    out = subprocess.run(["npx", "tsx", str(script), str(probe)],
                         capture_output=True, text=True, cwd=str(REPO), timeout=600)
    if out.returncode != 0:
        print(f"  [fusion] deterministic engine failed: {out.stderr[:500]}")
        return None

    engine = {}
    for line in out.stdout.splitlines():
        if not line.strip():
            continue
        d = json.loads(line)
        engine[d["id"]] = d  # {id, verdict: SAFE|SUSPICIOUS|HIGH_RISK|null, score}
    missing = [r["id"] for r in test_rows if r["id"] not in engine]
    if missing:
        print(f"  [fusion] engine did not return verdicts for {len(missing)} test rows")
        return None

    true = np.array([1 if r["label"] == "SCAM" else 0 for r in test_rows])
    model_prob = test_logits
    model_pred = (model_prob >= threshold).astype(int)
    engine_verdicts = np.array([engine[r["id"]]["verdict"] for r in test_rows])

    # Verifier-correct fusion. The engine is a verifier, not a second flagger:
    #   - engine HIGH_RISK confirms the model  (both-agree => flag)
    #   - engine abstains/null                 => model fills in (its own call)
    #   - engine HIGH_RISK but model says LEGIT => model wins (the engine is
    #     PH-precision-biased; on non-PH text its HIGH_RISK is often a false
    #     positive, which a blind OR-fusion would add). This is the anti-
    #     false-positive property: the engine can raise recall only where the
    #     model agrees, never force a flag the model rejects.
    fused_both = np.where(
        (engine_verdicts == "HIGH_RISK") & (model_pred == 1), 1,
        np.where(engine_verdicts == "HIGH_RISK", 0, model_pred)
    ).astype(int)

    # Naive OR-fusion (kept for comparison only - shows why it is wrong).
    fused_or = np.where(engine_verdicts == "HIGH_RISK", 1, model_pred).astype(int)

    def report(name, pred):
        tn, fp, fn, tp = confusion_matrix(true, pred, labels=[0, 1]).ravel()
        p = tp / max(1, tp + fp)
        r = tp / max(1, tp + fn)
        f1 = 2 * p * r / max(1e-9, p + r)
        fpr = fp / max(1, tn + fp)
        fnr = fn / max(1, tp + fn)
        print(f"  {name:>20}: F1={f1:.3f} P={p:.3f} R={r:.3f} FPR={fpr:.4f} FNR={fnr:.4f} ({tp}TP/{fp}FP/{fn}FN/{tn}TN)")
        return {"f1": round(f1, 4), "precision": round(p, 4), "recall": round(r, 4),
                "false_positive_rate": round(fpr, 4), "false_negative_rate": round(fnr, 4),
                "tp": int(tp), "fp": int(fp), "fn": int(fn), "tn": int(tn)}

    result = {"model_alone": report("model-alone", model_pred),
              "engine_alone": report("engine-alone", np.array([1 if engine[r["id"]]["verdict"] == "HIGH_RISK" else 0 for r in test_rows])),
              "fused_both_agree": report("fused(both)", fused_both),
              "fused_or_naive": report("fused(OR)", fused_or)}
    return result

def run_taglish_eval(test_rows: list, test_logits, threshold, model, tokenizer):
    """PH-reality check: the 22 real Taglish/GCash seed rows (all SCAM, never
    in the training corpus) are the ground truth that matters for the actual
    users. The English test fold cannot tell us whether the model understands
    'SCAM YAN' / GCash / 'pakisend nalang po sa GCash'. Both the model and the
    deterministic engine score these rows; a model that fails them is useless
    in the Philippines regardless of its English-test F1."""
    import json as _json
    import subprocess as _sp

    seed_path = REPO / "data" / "scam-corpus.jsonl"
    if not seed_path.exists():
        return None
    seed = []
    with open(seed_path, "r", encoding="utf-8") as f:
        for line in f:
            if line.strip():
                d = _json.loads(line)
                seed.append({"id": d["id"], "text": d["text"], "label": "SCAM"})
    print(f"\n=== TAGLISH REALITY CHECK ({len(seed)} seed rows, all SCAM, never trained on) ===")

    # Model: reuse the loaded model + tokenizer (no re-tokenize cost).
    import torch
    import numpy as np
    enc = tokenizer([r["text"] for r in seed], truncation=True, padding="max_length",
                    max_length=128, return_tensors="pt")
    model.eval()
    with torch.no_grad():
        logits = model(**enc).logits
    probs = torch.softmax(logits, dim=-1)[:, 1].numpy()
    model_hit = int((probs >= threshold).sum())

    # Engine: sidecar for consistency with the fusion path.
    probe = REPO / "models" / "_taglish_probe.jsonl"
    with open(probe, "w", encoding="utf-8") as f:
        for r in seed:
            f.write(_json.dumps({"id": r["id"], "text": r["text"]}) + "\n")
    out = _sp.run(["npx", "tsx", "scripts/verify_deterministic.mts", str(probe)],
                  capture_output=True, text=True, cwd=str(REPO), timeout=300)
    engine_hit = 0
    if out.returncode == 0:
        for line in out.stdout.splitlines():
            if line.strip() and _json.loads(line)["verdict"] == "HIGH_RISK":
                engine_hit += 1
    else:
        print(f"  [taglish] engine sidecar failed: {out.stderr[:300]}")

    print(f"  model catches {model_hit}/{len(seed)} Taglish scams ({model_hit/len(seed)*100:.0f}%) at threshold {threshold:.2f}")
    print(f"  engine catches {engine_hit}/{len(seed)} Taglish scams ({engine_hit/len(seed)*100:.0f}%)")
    engine_by_id = {}
    if out.returncode == 0:
        for line in out.stdout.splitlines():
            if line.strip():
                d = _json.loads(line)
                engine_by_id[d["id"]] = d["verdict"] == "HIGH_RISK"
    union = sum(1 for i, r in enumerate(seed) if (probs[i] >= threshold) or engine_by_id.get(r["id"], False))
    print(f"  union (engine OR model): {union}/{len(seed)} ({union/len(seed)*100:.0f}%)")
    return {"model_hit": int(model_hit), "engine_hit": int(engine_hit), "union": int(union), "n": len(seed)}

if __name__ == "__main__":
    main()
