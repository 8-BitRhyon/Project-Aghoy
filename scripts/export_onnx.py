#!/usr/bin/env python3
# scripts/export_onnx.py - export a fine-tuned Aghoy classifier to ONNX int8
# for on-device/browser inference (transformers.js / ONNX Runtime Web).
#
# Run: .venv-train/bin/python scripts/export_onnx.py --checkpoint models/tinybert-v1/checkpoint-1248 --out models/tinybert-v1/onnx
#
# Output: model.onnx (int8 quantized) + tokenizer files + config.json, ready to
# serve from public/models/ like the self-hosted Tesseract assets.

import argparse
import shutil
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent

def parse_args():
    p = argparse.ArgumentParser()
    p.add_argument("--checkpoint", required=True, help="HF checkpoint dir (best checkpoint from training)")
    p.add_argument("--out", required=True, help="output dir for ONNX assets")
    p.add_argument("--no-quantize", action="store_true", help="skip int8 dynamic quantization")
    return p.parse_args()

def main():
    args = parse_args()
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)

    from optimum.onnxruntime import ORTModelForSequenceClassification
    from transformers import AutoTokenizer

    ckpt = Path(args.checkpoint)
    print(f"exporting {ckpt} -> {out}")

    # Checkpoints from Trainer contain weights+config but never the tokenizer
    # files. The tokenizer always comes from the base model (same vocab).
    base = "huawei-noah/TinyBERT_General_4L_312D"
    tokenizer = AutoTokenizer.from_pretrained(base, use_fast=True)
    tokenizer.save_pretrained(str(out))

    # Export fp32 ONNX via optimum from the fine-tuned weights.
    model = ORTModelForSequenceClassification.from_pretrained(str(ckpt), export=True)
    save_dir = out / "fp32"
    model.save_pretrained(str(save_dir))
    tokenizer.save_pretrained(str(save_dir))
    shutil.copy(ckpt / "config.json", save_dir / "config.json")

    fp32_model = save_dir / "model.onnx"
    print(f"fp32 model: {fp32_model.stat().st_size / 1e6:.1f} MB")

    if args.no_quantize:
        print("skipping quantization (--no-quantize)")
        return

    # int8 dynamic quantization (weights + activations quantized at runtime).
    from optimum.onnxruntime import ORTQuantizer
    from optimum.onnxruntime.configuration import AutoQuantizationConfig

    quantizer = ORTQuantizer.from_pretrained(save_dir)
    dqconfig = AutoQuantizationConfig.arm64(is_static=False) if sys.platform == "darwin" else AutoQuantizationConfig.avx512_vnni(is_static=False)
    quantizer.quantize(save_dir=out, quantization_config=dqconfig)
    int8_model = out / "model_quantized.onnx"
    if not int8_model.exists():
        # fallback filename used by optimum in some versions
        candidates = list(out.glob("*int8*.onnx")) + list(out.glob("model_quantized.onnx"))
        if not candidates:
            raise SystemExit("int8 export produced no model file")
        int8_model = candidates[0]
    print(f"int8 model: {int8_model.stat().st_size / 1e6:.1f} MB -> {int8_model}")
    print("done. copy the ONNX + tokenizer to public/models/ for the PWA.")

if __name__ == "__main__":
    main()
