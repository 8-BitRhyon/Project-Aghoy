# Project Aghoy Data Handling and Retention Policy

**Document version:** 1.0
**Document owner:** Project Aghoy operator (single operator; data protection owner)
**Effective date:** 2026-08-06
**Review cycle:** Annual
**Status:** Adopted

## 1. Purpose

This policy defines how Project Aghoy classifies, handles, stores, and deletes data, and how it supports data subject rights under the Philippine Data Privacy Act (RA 10173). It implements ISO/IEC 27001:2022 Annex A controls A.8.10 (information deletion), A.8.12 (data leakage prevention), and A.5.34 (privacy and protection of personally identifiable information).

## 2. Data classification

1. User-submitted text (SMS, email, job offers): personal data. Immediately subject to Rejects-layer redaction (`src/rejects/rejects.ts`) before any transmission or storage.
2. Evidence blobs (R2 `evidence`): sanitized artifacts only. Uploads are admin-only, capped at 10 MB, and stored with a forced `application/octet-stream` Content-Type (`src/worker/dojo.ts`). R2 is currently dormant; evidence routes return 501 until the account enables the binding.
3. D1 indicators and reports: sanitized content only. Every persisted field (content, scam type, red flags, provider, source) passes through `sanitizeForStorage` in `src/worker/storage.ts` before the write.
4. Phone hashes: only one-way SHA-256 hashes of Philippine mobile numbers are persisted, never the raw numbers. Enforcement is server-side in `src/worker/storage.ts` and client-side in `services/aiService.ts`.
5. Vectorize embeddings (`scam-index`): sanitized text only, re-scrubbed at seed time by `seedVectorize` in `src/worker/storage.ts`.
6. Browser localStorage scan history: sanitized via `utils/privacy.ts`, limited to the last 20 scans, and cleared through the in-app clear action. This is a display convenience, not a security boundary.

## 3. Handling rules

- The governing rule is: raw PII is never persisted server-side, and images never leave the device. OCR runs on-device via self-hosted Tesseract assets (`public/ocr/`); only extracted text is analyzed.
- Rejects-layer rules are idempotent, so re-redaction of already-redacted data is a no-op, preventing double-masking errors.
- Phone-type indicator rows are excluded from the public list feed because they are client-supplied hashes that could be reversed offline against the Philippine mobile number keyspace; they are reachable only by exact-match lookup (`src/worker/storage.ts`).
- Transfers to third parties are limited to sanitized content, as specified in the AI governance policy.

## 4. Retention periods

- D1 reports: retained indefinitely to support the community blacklist. Records are deduplicated by SHA-256 of the sanitized content, so repeated scans of the same message do not grow storage.
- D1 indicators and blacklist: retained indefinitely; `times_reported` and `last_seen` counters support the "reported N times" signal, and status transitions from `reported` to `verified` and can be `cleared`.
- R2 evidence: retained until the related indicator is cleared or the operator purges it; no automatic expiry is implemented.
- Vectorize index: retained until re-seeded or deleted; the seed source is the operator-maintained `data/scam-corpus.jsonl`.
- Durable Object (Dojo) sessions: expire after 24 hours of idle time, game history is trimmed to 20 messages, and session tokens expire after 24 hours (`src/worker/dojo.ts`).
- Browser localStorage: the last 20 scans; users can clear them in the UI at any time.

## 5. Deletion

- The operator can delete D1 rows, purge R2 objects, and re-seed or delete the Vectorize index through the admin routes and the Cloudflare dashboard.
- Users can delete browser-held history in the app.
- Deletion requests from data subjects are handled as described below.

## 6. Data subject rights (RA 10173)

Data subjects have the right to know, object, access, rectify, and erase or block their personal data, and to file a complaint with the National Privacy Commission (privacy.gov.ph). Requests are handled through the privacy contact. Because the service stores only sanitized records and hashes, most requests resolve to an explanation of what is held plus confirmation of deletion; the operator responds within the statutory period and records the request in the incident/request log.

## 7. Storage location

D1 is provisioned in Cloudflare's APAC region as configured in `wrangler.toml`. Pages, Workers, Durable Objects, R2, Vectorize, and AI Gateway run on Cloudflare's global network; model inference is processed by Cerebras and Groq. The operator treats storage location as a documented characteristic of the service and revalidates it at the annual policy review.
