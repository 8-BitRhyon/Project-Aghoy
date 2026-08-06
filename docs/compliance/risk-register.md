# Risk Register

**Project Aghoy** - last reviewed 2026-08-06
**Owner:** single operator (acts as risk owner)
**Maps to:** ISO 27001 Clause 6.1 (planning / risk assessment), ISO 42001 6.1 (AI risk assessment)

Method: likelihood x impact = score (1-3 each, 1-9 total). Score >= 6 = treat; < 6 = accept with rationale. Review at least annually and on major change.

## 1. Information security risks (ISO 27001)

| ID | Risk | L | I | Score | Treatment | Mitigation / evidence |
|---|---|---|---|---|---|---|
| R-01 | PII exfiltration to a third-party AI provider | 2 | 3 | 6 | Treat | Rejects layer (cards/PH IDs/OTP/CVV/names/DOBs) inbound + outbound; verified by tests |
| R-02 | LLM prompt injection forcing SAFE on a real scam | 2 | 3 | 6 | Treat | Deterministic under-detection override escalates SAFE on HIGH_RISK; adversarial corpus test |
| R-03 | Abuse of the public blocklist feed (poisoning) | 2 | 2 | 4 | Accept | Rate limits, content-hash dedup, "reported N times" threshold of 5, feed excludes phone hashes |
| R-04 | Memory-DoS on public endpoints | 2 | 2 | 4 | Treat | 100KB body caps on all worker routes + Pages Function |
| R-05 | SSRF via URL inspection | 2 | 3 | 6 | Treat | Protocol allowlist, host blocklist, DNS private-IP rejection, per-hop redirect validation, rate limit |
| R-06 | Secret leakage into the repository | 2 | 3 | 6 | Treat | gitleaks in CI, secrets in wrangler, .env.example placeholders only, KEY ROTATION procedure |
| R-07 | Cross-isolate rate-limit bypass | 2 | 2 | 4 | Treat | Shared RateLimiter DO consulted by Pages Function (/ratelimit/check) |
| R-08 | Provider (Cerebras/Groq) outage | 2 | 1 | 2 | Accept | Deterministic fallback verdict covers outage |
| R-09 | D1 data loss | 1 | 3 | 3 | Treat | scripts/backup-db.sh, restore documented (A.8.13) |
| R-10 | Supply-chain compromise (npm/actions) | 1 | 3 | 3 | Treat | npm audit in CI, SHA-pinned actions, self-hosted OCR |
| R-11 | Evidence blobs exposed without auth | 1 | 3 | 3 | Treat | Admin-key auth on R2 routes, octet-stream, report-exists check |
| R-12 | Browser history tampering via localStorage | 2 | 1 | 2 | Accept | Client-side only; not a security boundary (documented) |

## 2. AI-specific risks (ISO 42001)

| ID | Risk | L | I | Score | Treatment | Mitigation / evidence |
|---|---|---|---|---|---|---|
| AI-01 | Prompt injection (crafted user text alters verdicts) | 2 | 3 | 6 | Treat | Rejects redaction, no tools/secrets in context, under-detection override, adversarial corpus |
| AI-02 | Model bias across languages (Taglish/Bisaya/Ilocano/English) | 2 | 2 | 4 | Accept | Deterministic brand/intent cross-check; annual review of feedback |
| AI-03 | Over-reliance on verdicts (automation bias) | 2 | 2 | 4 | Accept | Advisory verdicts + official channels + education; no autonomous enforcement |
| AI-04 | Feed poisoning affects AI similarity results | 2 | 2 | 4 | Accept | Sanitized seed, dedup, threshold; Vectorize returns only close matches (score >= 0.5) |
| AI-05 | Model drift / provider change degrades quality | 2 | 2 | 4 | Treat | /metrics observability (fallback rate, verdict distribution); annual quality review |
| AI-06 | Dojo user believes they receive real scam instructions | 1 | 2 | 2 | Accept | Authorized-drill framing, break-character on BLOCK/SCAM/REPORT, policy disclosure |

## 3. Residual risk statement

After treatment, the highest residual risks are prompt injection variants (R-02/AI-01) that evade both the LLM and rule thresholds, and feed poisoning (R-03/AI-04). Both are accepted at residual level because (a) no autonomous enforcement exists, (b) every verdict is advisory with human review encouraged, and (c) the deterministic layer provides an independent, uninjectable cross-check. The operator re-evaluates these annually and on any material change to the AI pipeline.

## 4. Owner acceptance

| ID | Accept? | Owner | Date |
|---|---|---|---|
| R-03, R-08, R-12, AI-02, AI-03, AI-04, AI-06 | Yes | Operator | 2026-08-06 |
| All others treated | Yes | Operator | 2026-08-06 |
