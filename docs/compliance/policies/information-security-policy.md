# Project Aghoy Information Security Policy

**Document version:** 1.0
**Document owner:** Project Aghoy operator (single operator; serves as the Information Security (InfoSec) owner and the risk acceptance authority)
**Effective date:** 2026-08-06
**Review cycle:** Annual, or upon any material change to the architecture, threat model, or hosting environment
**Status:** Adopted

## 1. Purpose

This is the top-level policy of the Project Aghoy Information Security Management System (ISMS). It establishes the security objectives, roles, and governing principles for the Project Aghoy scam-detection service: a React single-page application hosted on Cloudflare Pages with a Cloudflare Worker backend (Durable Objects, D1, R2, Vectorize, Workers AI) and third-party LLM inference through Cloudflare AI Gateway. It maps to ISO/IEC 27001:2022 Annex A control A.5.1 (policies for information security).

## 2. Scope

This policy applies to all systems, data, and processing in scope of the ISMS:

- The public scanner and its `/api/analyze` function (`functions/api/analyze.js`).
- The storage worker and Training Dojo (`src/worker/dojo.ts`, `src/worker/storage.ts`).
- The PII redaction layer (`src/rejects/rejects.ts`) and the deterministic brand detection layer (`src/brands/brands.ts`).
- The data stores: D1 (`reports`, `indicators`, `blacklist`), R2 (`evidence`), and Vectorize (`scam-index`).
- The browser client, including on-device OCR (`services/aiService.ts`, `public/ocr/`) and localStorage scan history (`utils/privacy.ts`).
- All operators, contributors, and third-party processors (Cloudflare, Cerebras, Groq).

## 3. Security objectives

The ISMS protects three classes of asset:

1. User-submitted content (SMS, email, job offers, screenshots) that may contain personal data. Objective: confidentiality and integrity, achieved by redacting personal data before any transmission or persistence and by ensuring only Rejects-layer output is stored.
2. The blocklist feed (D1 indicators and blacklist rows, Vectorize embeddings) that powers the "reported N times" signal. Objective: integrity and availability, achieved by authenticated write routes, SHA-256 deduplication, and per-IP rate limiting.
3. The AI pipeline (Cerebras and Groq keys, AI Gateway configuration, Dojo signing key). Objective: confidentiality, achieved by keeping all keys in Worker secrets, never in the client bundle or in committed files.

## 4. The Rejects layer is the core data-protection mechanism

The authoritative PII boundary is `src/rejects/rejects.ts`. It redacts credit and debit card numbers (13-19 digits, Luhn-validated), Philippine and international mobile numbers, email addresses, API keys, Philippine government identifiers (SSS, PhilHealth, TIN, LTO licenses, passports, Pag-IBIG, UMID), context-gated OTP/PIN codes, CVV/CVC numbers, names with honorifics, and dates of birth. The rules are zero-dependency, idempotent (re-running redaction is a no-op), and enforced by tests (`src/rejects/rejects.test.ts`).

The layer runs in five places, all mandatory:

1. Inbound, before any content leaves for an LLM provider (`functions/api/analyze.js`, `src/worker/dojo.ts`).
2. Outbound, on provider responses, scrubbing PII the model may echo back.
3. Before any D1, R2, or Vectorize write, via `sanitizeForStorage` in `src/worker/storage.ts`, applied to every persisted field.
4. Before Durable Object storage of Dojo game history.
5. Client-side pre-send, as defense-in-depth only; the client is never authoritative.

## 5. Core principle

Only Rejects-layer output is persisted or sent to third parties. Raw user content is never written to D1, R2, Vectorize, or Durable Object storage, and no raw user content is ever sent to an LLM provider. Phone numbers are persisted only as pre-computed SHA-256 hashes (`src/worker/storage.ts`). Images are converted to text on-device and never leave the device.

## 6. Acceptable use

- The service may be used only for its stated purpose: scam detection and education for the Philippine context.
- The Training Dojo is an authorized cybersecurity training simulation, not a real scam assistant. It is labeled as such in its system prompt and is required to break character when the user says "BLOCK", "SCAM", or "REPORT" (`src/worker/dojo.ts`).
- Operator actions (deployments, key rotations, data purges, indicator verification) are performed only through documented tooling: Wrangler, the Cloudflare dashboard, and the storage layer's authenticated routes.
- Client-side environment variables are prohibited; all API keys live in Worker secrets.

## 7. Roles and risk acceptance

- Single operator model: one individual owns development, operations, and security. That individual is the InfoSec owner for this ISMS and the single point of accountability.
- Risk acceptance authority: the InfoSec owner may accept residual risk, recorded in the ISMS risk register, when the cost of mitigation is disproportionate to the asset value. Acceptance requires a written note tied to a specific control or gap.
- Third-party processors (Cloudflare, Cerebras, Groq) are engaged under Data Processing Agreements binding them to process only sanitized content for the stated purpose.

## 8. Conformance

Non-conformance with this policy is reportable as a security incident under the incident response policy. This policy is implemented through the AI governance, incident response, data handling and retention, and access control policies, which inherit its objectives.
