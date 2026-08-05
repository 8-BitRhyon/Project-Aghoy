#!/usr/bin/env bash
# scripts/install-hooks.sh - Installs the Project Aghoy pre-commit hook (shift-left).
#
# Usage: bash scripts/install-hooks.sh [--remove]

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HOOK_PATH="$(git -C "${REPO_DIR}" rev-parse --git-path hooks/pre-commit)"

if [ "${1:-}" = "--remove" ]; then
  rm -f "${HOOK_PATH}"
  echo "[hooks] Removed pre-commit hook."
  exit 0
fi

if [ ! -d "$(dirname "${HOOK_PATH}")" ]; then
  mkdir -p "$(dirname "${HOOK_PATH}")"
fi

cat > "${HOOK_PATH}" <<'HOOK'
#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(git rev-parse --show-toplevel)"
echo "=== [pre-commit] Running Project Aghoy gate (typecheck + test + build) ==="
exec bash "${REPO_DIR}/scripts/pre-commit.sh"
HOOK
chmod +x "${HOOK_PATH}"

echo "[hooks] Installed pre-commit hook at ${HOOK_PATH}"
