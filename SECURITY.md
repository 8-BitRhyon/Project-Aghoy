# Project Aghoy: Security Architecture

**Last updated:** 2026-08-05
**Audit type:** Full security architecture review of the post-hardening state

This document describes the currently audited architecture. It supersedes the 2026-07-07 pre-hardening review. Every claim below is grounded in the current code in this repository.

## 1. Threat model summary

Project Aghoy is an AI-powered scam detector for the Philippines: a React SPA on Cloudflare Pages, a Pages Function (`/api/analyze`) that proxies to LLM providers through Cloudflare AI Gateway, and a Cloudflare Worker (`project-aghoy-dojo`) with Durable Objects, D1, and Vectorize.

**Attackers we defend against:**

- Remote internet users abusing the public LLM proxy to spend our AI quota.
- Prompt-injection attempts aimed at the model via message content.
- PII harvesting from request bodies, provider responses, and storage.
- Abuse of the storage routes (fake reports, forged blacklist entries).
- Cross-origin callers trying to use the API from arbitrary websites.

**Assets at risk:**

- User PII: SMS, email, and job-offer content, phone numbers, Philippine IDs.
- AI spend: quota on Cerebras and Groq through AI Gateway.
- D1 report and indicator data, the Vectorize `scam-index`, and blacklist integrity.
- Admin credentials (`STORAGE_ADMIN_KEY`) and Dojo session tokens.
- R2 evidence blobs (reserved; R2 is not yet enabled).

## 2. PII and privacy

### The Rejects layer

The authoritative PII boundary is `src/rejects/rejects.ts`. It redacts:

- Credit and debit card numbers (13-19 digits, Luhn-validated).
- Philippine mobile numbers (anchored `09...` and `+63` forms) and non-PH international numbers.
- Email addresses.
- API keys: `csk-`, `gsk_`, `sk-`, `sk-ant-`, `ghp_`, `AIza`.
- Philippine government IDs: SSS (2-7-1 and 2-6-1), PhilHealth (2-9-1), TIN (3-3-3 with optional 3-4 digit branch), LTO licenses, passports, Pag-IBIG, UMID, and context-gated keyword forms.
- Context-gated OTP/PIN codes and CVV/CVC numbers.
- Names with honorifics, and dates of birth.

The layer runs in five places:

1. **Inbound** on the Pages Function and the Worker, before any request leaves for a vendor.
2. **Outbound** on provider responses, scrubbing PII the model may echo back.
3. **Before persistence**: `sanitizeForStorage` in `src/worker/storage.ts` redacts every field (content, scam type, red flags, provider, source) before any D1, R2, or Vectorize write.
4. **Before Durable Object storage**: Dojo game history stores only scrubbed user messages and scrubbed model replies.
5. **Client-side pre-send** as defense-in-depth. The client is never authoritative.

The rules are idempotent: re-running redaction over already-redacted text is a no-op. This is enforced by tests (`src/rejects/rejects.test.ts`, 44 tests including idempotency).

### Data at rest

- D1 stores only Rejects-layer output. Reports are deduplicated by SHA-256 of the sanitized content.
- Phone numbers are persisted only as pre-computed SHA-256 hashes, enabling the "reported N times" blacklist without storing raw numbers.
- Vectorize stores sanitized corpus text only (scrubbed again at seed time).
- Dojo session state (Durable Object storage) holds sanitized history and expires after 24 hours of idle time.
- Browser localStorage keeps the last 20 scans, sanitized via `utils/privacy.ts`. This is a display convenience, not a security boundary.

### Processors

- Cloudflare: Pages, Workers, Durable Objects, D1, Vectorize, AI Gateway, Workers AI.
- Cerebras and Groq: LLM inference, reachable only through AI Gateway.
- Tesseract.js: OCR runs entirely on-device in the browser, including the wasm core and traineddata, which are self-hosted under `public/ocr/`.

### RA 10173 context and consent

The app shows a privacy consent gate before any analysis. The gate is implemented client-side in localStorage, which is a documented, deliberate decision: a browser consent gate cannot be a real security boundary. Nothing security-relevant depends on it. Only sanitized content is transmitted regardless of consent state, so the Rejects layer is the actual enforcement mechanism.

Privacy contact: `security@projectaghoy.example` (placeholder). Replace with a real mailbox before public launch.

## 3. Authentication and authorization

### Dojo session tokens

The Worker mints signed, expiring session tokens at `POST /dojo/session`:

- HMAC-SHA256 signed with `SESSION_SIGNING_KEY`; payload is `{ exp, sub }`.
- 24-hour lifetime; the full signed token is the Durable Object key.
- Hard cap of 50 assistant turns per session token, bounding AI spend independently of the IP rate limiter.
- Fail-closed: if `SESSION_SIGNING_KEY` is unset, the route returns 503 and never issues a token. Invalid or expired tokens get 401.

### Storage admin auth

`STORAGE_ADMIN_KEY` guards `/indicators/verify`, `POST /reports/:id/evidence`, `GET /evidence`, and `/seed/vectorize`:

- Compared in constant time by SHA-256 digesting both sides and XOR-accumulating (Workers exposes Web Crypto only, no `timingSafeEqual`).
- Fail-closed: no configured key means 503, never access.

### Evidence routes

Both evidence endpoints are admin-only. Uploads require the target report to exist in D1, are capped at 10 MB, and the stored Content-Type is forced server-side to `application/octet-stream`. Downloads are served as opaque bytes with `no-store`.

## 4. Rate limiting and abuse

- The Worker uses a `RateLimiter` Durable Object: per-IP counts persisted to durable storage, globally consistent across isolates, with expired windows evicted on access.
- `POST /reports` is limited to 20 requests/minute per IP.
- `/api/analyze` (both Pages Function and Worker) is limited to 5 requests/minute per IP.
- The Dojo adds the 50-turn per-token cap on top of the per-IP limiter.

**Known gap:** the `/api/analyze` limiter on the Pages Function is an in-memory Map that is per-isolate and is not globally accurate on serverless. The intended mitigation is Cloudflare WAF rate limiting configured in the dashboard for the Pages domain. This is documented as pending; the Worker's DO-based limiter is not affected.

## 5. Input validation

- `/api/analyze`: requires `Content-Type: application/json` (415), rejects bodies over 100 KB via Content-Length and again after parsing (413). Messages must be a non-empty array of at most 10 `{ role, content }` objects with roles restricted to `system`/`user`/`assistant` and string content truncated to 4000 characters. Validation failures return 400.
- `POST /reports`: 100 KB body cap; verdict restricted to `SAFE`/`SUSPICIOUS`/`HIGH_RISK`; riskScore must be a number 0-10; scamType, provider, and source capped at 100 chars; at most 10 red flags of 64 chars each; at most 10 `phoneHashes`, each matching `^[a-f0-9]{64}$`.
- Evidence: 10 MB cap enforced on declared and actual size.
- Provider key format is validated (expected `csk-`/`gsk_` prefixes plus minimum length) before any request leaves.

## 6. Output and edge security

- **No upstream error leak:** provider failures surface as generic messages such as `Provider error: status 503`. Upstream detail is logged server-side only, never returned.
- **Error classification:** internal errors are mapped to 400 (validation), 429 (rate limit), 503 (missing configuration), or 500, with no stack traces or internal paths in responses.
- **Security headers on Pages:** HSTS, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, Referrer-Policy, Permissions-Policy, COOP/CORP, and a CSP.
- **Security headers on the Worker:** CSP `default-src 'none'`, nosniff, CORP and COOP same-origin, no-referrer, applied to every response including errors.
- **CSP on the SPA:** `script-src 'self' 'unsafe-inline' 'unsafe-eval'` (required by Vite and the Tesseract wasm worker), `connect-src 'self' https://gateway.ai.cloudflare.com`, `worker-src blob:`.
- **CORS:** both the Pages middleware and the Worker enforce an origin allowlist and return 403 for disallowed cross-origin callers. Preflights carry `Vary: Origin`.
- **Client IP:** only `CF-Connecting-IP` is trusted. `X-Forwarded-For` is attacker-controllable and never used.
- **Timeouts:** all outbound LLM fetches use a 25-second AbortController timeout.

## 7. Supply chain

- GitHub Actions are SHA-pinned and CI enforces that no unpinned action sneaks in. Gitleaks runs a full-history secret scan.
- All API keys live in Worker secrets, never in the bundle or in committed files. `.env.example` contains placeholders only.
- OCR assets are self-hosted; no code or model is fetched from a third-party CDN at runtime (the CSP would block the CDN `importScripts` anyway).
- Runtime dependencies (React, Tesseract, html2canvas, lucide-react) have no known advisories. The dev toolchain (wrangler/miniflare, the Vite build chain via picomatch, sharp/libvips) has pending advisories tracked upstream; these are build-time only and do not ship to the runtime bundle. Run `npm audit` before merging dependency bumps.

## 8. Known limitations

- The consent gate is client-side and cannot be enforced against a determined user. Deliberate design decision; the Rejects layer is the enforcement boundary.
- The `/api/analyze` rate limiter on Pages is per-isolate in-memory; WAF rate limiting is the documented mitigation and is pending.
- R2 is not enabled on the account, so the evidence store is dormant and evidence routes return 501.
- `X-Forwarded-For` is never trusted; IP-based limits rely solely on `CF-Connecting-IP`.
- The Dojo's prompt-injection surface is intentional: the model is instructed to role-play a scammer and has no tools or secrets in its context. The Rejects layer still scrubs everything the model receives and returns.

## 9. Reporting vulnerabilities

Please report security issues privately before public disclosure.

- Email `security@projectaghoy.example` (placeholder; replace with the real maintainer address).
- Include: endpoint or component affected, steps to reproduce, expected vs actual behavior, and impact.
- Do not include live secrets, real PII, or exploit payloads beyond a minimal repro.
- We will acknowledge within 72 hours and coordinate a fix before any disclosure.

Acknowledgment: contributors who report verified vulnerabilities may be credited in this file.
