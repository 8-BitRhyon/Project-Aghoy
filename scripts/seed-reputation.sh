#!/usr/bin/env bash
# scripts/seed-reputation.sh - Seed the reputation feed with a curated PH
# scam-domain list (source='seed', seed_weight). Seeds NEVER count as crowd
# reports (times_reported stays 0) and can lift a domain to SUSPICIOUS at most.
#
# The seed list lives at data/seed-domains.csv (domain,type,notes) and is the
# operator's one-time hand-verified set (from CICC/BSP advisories + lookalike
# detection). Third-party feeds (URLhaus/PhishTank/PhishStats/GSB) are
# internal-only per licensing research and are NOT imported here.
#
# Usage: bash scripts/seed-reputation.sh

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WRANGLER="${WRANGLER:-npx wrangler}"
WRANGLER_CMD() { ${WRANGLER} "$@"; }
DB_NAME="project-aghoy-db"
SEED_FILE="${REPO_DIR}/data/seed-domains.csv"

if [ ! -f "${SEED_FILE}" ]; then
  echo "Seed file not found: ${SEED_FILE}"
  echo "Expected CSV: domain,type,notes"
  exit 1
fi

echo "=== [seed] Importing reputation seeds (source=seed, seed_weight=0.5) ==="
COUNT=0
while IFS= read -r line; do
  # Skip blanks and comments (lines starting with #).
  [ -z "${line}" ] && continue
  case "${line}" in \#*) continue ;; esac
  value="$(echo "${line}" | cut -d, -f1 | tr -d ' ')"
  type="$(echo "${line}" | cut -d, -f2 | tr -d ' ')"
  [ -z "${value}" ] && continue
  [ -z "${type}" ] && type="domain"

  # Validate to prevent SQL injection: value must be a safe hostname-like
  # token, type must be one of the three indicator types.
  case "${value}" in
    *[\'\"]*|*\ *|*\;*|*\`*|*\(*|*\)*)
      echo "Skipping invalid seed value: ${value}"
      continue ;;
  esac
  case "${type}" in
    domain|url|keyword) ;;
    *) echo "Skipping invalid seed type: ${type}"; continue ;;
  esac
  if ! printf '%s' "${value}" | LC_ALL=C grep -Eq '^[A-Za-z0-9.-]+$'; then
    echo "Skipping invalid seed value: ${value}"
    continue
  fi

  # Insert as seed; never touch times_reported (crowd lane). source='seed'
  # seeds never count as distinct user reports.
  WRANGLER_CMD d1 execute "${DB_NAME}" --remote --command \
    "INSERT INTO indicators (type, value, status, times_reported, source, seed_weight, first_seen, last_seen) VALUES ('${type}', '${value}', 'reported', 0, 'seed', 0.5, datetime('now'), datetime('now')) ON CONFLICT(type, value) DO UPDATE SET seed_weight = 0.5, last_seen = datetime('now') WHERE indicators.source = 'seed';" \
    >/dev/null
  COUNT=$((COUNT + 1))
done < "${SEED_FILE}"

echo "=== [seed] DONE: ${COUNT} seed rows imported ==="
echo "Seeds lift a domain to SUSPICIOUS at most; crowd reports (times_reported)"
echo "come only from real users. Re-run after editing data/seed-domains.csv."
