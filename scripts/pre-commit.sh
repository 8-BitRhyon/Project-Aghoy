#!/usr/bin/env bash
# scripts/pre-commit.sh - Shift-left gate for Project Aghoy.
# Runs typecheck, tests, and build before every commit. CI runs the same
# checks plus the SHA-pinned-actions audit and gitleaks secret scan.
#
# Usage: bash scripts/pre-commit.sh

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "=== [pre-commit] Typecheck ==="
(cd "${REPO_DIR}" && npm run typecheck)

echo "=== [pre-commit] Tests ==="
(cd "${REPO_DIR}" && npm test)

echo "=== [pre-commit] Build ==="
(cd "${REPO_DIR}" && npm run build)

echo "=== [pre-commit] PASS: all gates green ==="
