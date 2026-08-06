#!/usr/bin/env bash
# scripts/backup-db.sh - Point-in-time backup of the production D1 database.
# Evidence for ISO 27001 A.8.13 (backup of information) and DR readiness.
# Produces a timestamped SQL dump under backups/ and reports the row counts so
# a restore test can verify completeness.
#
# Restore:
#   npx wrangler d1 execute project-aghoy-db --remote --file backups/<file>.sql
#
# Usage: bash scripts/backup-db.sh

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WRANGLER="${WRANGLER:-npx wrangler}"
WRANGLER_CMD() { ${WRANGLER} "$@"; }
DB_NAME="project-aghoy-db"
BACKUP_DIR="${REPO_DIR}/backups"
STAMP="$(date +%Y%m%d-%H%M%S)"
OUTFILE="${BACKUP_DIR}/${DB_NAME}-${STAMP}.sql"

mkdir -p "${BACKUP_DIR}"

echo "=== [backup] Exporting D1 database '${DB_NAME}' ==="
WRANGLER_CMD d1 export "${DB_NAME}" --remote --output "${OUTFILE}"

echo "=== [backup] Verifying row counts ==="
WRANGLER_CMD d1 execute "${DB_NAME}" --remote --command \
  "SELECT 'reports' AS table_name, COUNT(*) AS rows FROM reports
   UNION ALL SELECT 'indicators', COUNT(*) FROM indicators
   UNION ALL SELECT 'blacklist', COUNT(*) FROM blacklist;"

echo "=== [backup] DONE ==="
echo "Backup written to: ${OUTFILE}"
echo "Size: $(du -h "${OUTFILE}" | cut -f1)"
echo "Restore with: npx wrangler d1 execute ${DB_NAME} --remote --file ${OUTFILE}"
echo "Retain at least one verified-restore backup per month (A.8.13)."
