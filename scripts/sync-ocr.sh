#!/usr/bin/env bash
# scripts/sync-ocr.sh - Regenerates the self-hosted Tesseract assets under
# public/ocr/ from installed packages + one pinned traineddata download.
# These files are gitignored (46MB of binaries); run this after npm install
# and BEFORE building/deploying. Restart the dev server afterwards (Vite
# indexes public/ at startup).
#
# Usage: bash scripts/sync-ocr.sh

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OCR_DIR="${REPO_DIR}/public/ocr"
TESS_DIR="${REPO_DIR}/node_modules/tesseract.js"
CORE_DIR="${REPO_DIR}/node_modules/tesseract.js-core"

echo "=== [ocr] Copying worker script ==="
mkdir -p "${OCR_DIR}"
cp "${TESS_DIR}/dist/worker.min.js" "${OCR_DIR}/"

echo "=== [ocr] Copying wasm cores (all variants) ==="
for f in "${CORE_DIR}"/tesseract-core*.wasm.js "${CORE_DIR}"/tesseract-core*.wasm; do
  [ -f "$f" ] && cp "$f" "${OCR_DIR}/"
done

echo "=== [ocr] Downloading pinned eng traineddata ==="
TRAINDATA_URL="https://cdn.jsdelivr.net/npm/@tesseract.js-data/eng@1.0.0/4.0.0_best_int/eng.traineddata.gz"
curl -fsSL -o "${OCR_DIR}/eng.traineddata.gz" "${TRAINDATA_URL}"

echo "=== [ocr] Done. Files in ${OCR_DIR}: ==="
ls -1 "${OCR_DIR}" | wc -l
echo "(Note: update the TRAINDATA_URL here when upgrading Tesseract.)"
