#!/usr/bin/env bash
# scripts/setup-storage.sh - Provision Project Aghoy storage layer (D1 + R2).
# Idempotent. Requires: logged-in wrangler (npx wrangler login) and node.
#
# Steps:
#   1. Create the R2 evidence bucket (skip if it exists).
#   2. Create the D1 database, patch wrangler.toml with the real database_id,
#      and apply migrations.
#   3. Print the next manual steps (Vectorize index + Vectorize seed).

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WRANGLER="${WRANGLER:-npx wrangler}"
# Allow WRANGLER to be a command string like "npx wrangler"; unquoted on purpose.
WRANGLER_CMD() { ${WRANGLER} "$@"; }
DB_NAME="project-aghoy-db"
BUCKET_NAME="project-aghoy-evidence"
TOML="${REPO_DIR}/wrangler.toml"

echo "=== [storage] R2 bucket: ${BUCKET_NAME} ==="
if WRANGLER_CMD r2 bucket list 2>/dev/null | grep -q "${BUCKET_NAME}"; then
  echo "[storage] Bucket already exists, skipping."
else
  # R2 may not be enabled on the account (error 10042). Do not abort: D1 and
  # migrations should still be provisioned. The bucket is retried post-enable.
  if ! WRANGLER_CMD r2 bucket create "${BUCKET_NAME}"; then
    echo "[storage] WARNING: R2 bucket creation failed (is R2 enabled on the account?). Continuing without evidence storage."
  fi
fi

echo ""
echo "=== [storage] D1 database: ${DB_NAME} ==="
DB_INFO="$(WRANGLER_CMD d1 list 2>/dev/null | grep "${DB_NAME}" || true)"
if [ -z "${DB_INFO}" ]; then
  WRANGLER_CMD d1 create "${DB_NAME}"
  DB_INFO="$(WRANGLER_CMD d1 list 2>/dev/null | grep "${DB_NAME}")"
fi

DATABASE_ID="$(echo "${DB_INFO}" | grep -oE '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}' | head -1)"
if [ -z "${DATABASE_ID}" ]; then
  echo "[FAIL] Could not parse database_id from: ${DB_INFO}"
  echo "Manually paste the id into wrangler.toml [[d1_databases]] database_id."
  exit 1
fi

echo "[storage] database_id=${DATABASE_ID}"
if grep -q "PLACEHOLDER_REPLACE_WITH_D1_DATABASE_ID" "${TOML}"; then
  # macOS sed needs -i ''; Linux needs -i
  if [ "$(uname)" = "Darwin" ]; then
    sed -i '' "s/PLACEHOLDER_REPLACE_WITH_D1_DATABASE_ID/${DATABASE_ID}/" "${TOML}"
  else
    sed -i "s/PLACEHOLDER_REPLACE_WITH_D1_DATABASE_ID/${DATABASE_ID}/" "${TOML}"
  fi
  echo "[storage] Patched database_id into wrangler.toml"
else
  echo "[storage] wrangler.toml already has a database_id, leaving it."
fi

echo ""
echo "=== [storage] Applying D1 migrations ==="
WRANGLER_CMD d1 migrations apply "${DB_NAME}"

echo ""
echo "=== [storage] DONE ==="
echo ""
echo "Next manual steps:"
echo "  1. Vectorize index (if missing): npx wrangler vectorize create scam-index --dimensions=768 --metric=cosine"
echo "  2. Seed known scams: curl -X POST https://<worker>/seed/vectorize -H \"Authorization: Bearer \$STORAGE_ADMIN_KEY\" -d @corpus.json"
echo "  3. Set STORAGE_ADMIN_KEY secret: npx wrangler secret put STORAGE_ADMIN_KEY"
echo "  4. Deploy the worker: npx wrangler deploy"
