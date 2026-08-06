# Project Aghoy Access Control Policy

**Document version:** 1.0
**Document owner:** Project Aghoy operator (single operator; sole credential holder)
**Effective date:** 2026-08-06
**Review cycle:** Annual
**Status:** Adopted

## 1. Purpose

This policy defines how access to Project Aghoy systems, routes, and secrets is granted, authenticated, and revoked. It implements ISO/IEC 27001:2022 Annex A controls A.5.15 (access control), A.5.18 (access rights), and A.8.2 (privileged access rights).

## 2. Least privilege

Each credential is scoped to a single purpose and nothing else:

1. `STORAGE_ADMIN_KEY`: guards the admin write routes `/indicators/verify`, `/reports/:id/evidence`, `/evidence`, and `/seed/vectorize` on the worker (`src/worker/dojo.ts`). It is verified as a bearer token in constant time (SHA-256 digests compared with XOR accumulation, since Workers exposes Web Crypto only). Fail-closed: with no key configured, the routes return 503, never access.
2. `RATE_CHECK_KEY` (worker) and `WORKER_RATE_CHECK_KEY` (Pages): a single shared secret that authenticates the Pages Function's call to the worker's `/ratelimit/check` endpoint, so that endpoint cannot be used as an open rate oracle.
3. `SESSION_SIGNING_KEY`: signs expiring HMAC-SHA256 Dojo session tokens (payload `{ exp, sub }`). Tokens are bound to a Durable Object by the signed token value, expire after 24 hours, and are required for `/dojo/start` and `/dojo/chat`. Fail-closed when unset (503); invalid or expired tokens return 401.
4. `CEREBRAS_API_KEY` and `GROQ_API_KEY`: LLM provider credentials, used server-side only, never present in the client bundle or in committed files. Key format is validated before any request leaves the function (`functions/api/analyze.js`).

All secrets are stored in Cloudflare Worker secrets and in local `.dev.vars`; `.env.example` contains placeholders only. Placeholder values (for example `your-admin-key-here`) are never valid secrets: a key that still equals its placeholder is treated as unconfigured and the affected endpoint fails closed (503), so a misconfiguration cannot silently pass authentication. Rotation follows the KEY ROTATION procedure in `.env.example`.

## 3. Authentication mechanisms

- Dojo sessions: HMAC-SHA256 signed, expiring tokens. Verification requires a valid signature and an unexpired `exp` claim (`src/worker/dojo.ts`).
- Admin routes: constant-time bearer comparison against `STORAGE_ADMIN_KEY`.
- Rate check: constant-time bearer comparison against the shared rate check key.
- All secret checks are fail-closed: an unset key means 503, never a silent allow.

## 4. The public client is unauthenticated by design

The scanner is a public tool: the browser client carries no identity. This is a documented, accepted design decision. The controls that make it safe are: per-IP rate limiting on `/api/analyze` (5/min) and `/reports` (20/min) backed by the durable `RateLimiter` Durable Object keyed on `CF-Connecting-IP` only (never `X-Forwarded-For`), body-size and per-field validation, CORS origin allowlisting, and Rejects-layer sanitization of everything that is stored or forwarded.

## 5. Key rotation

Rotation follows the KEY ROTATION procedure in `.env.example`: generate new keys at the provider or locally, update the secret via `wrangler secret put` (and `wrangler pages secret put` for Pages secrets), and repeat per secret. Rotation is required immediately after any suspected exposure, after any incident involving a credential, and at least annually. Dojo session keys rotate without user-visible impact because expired tokens are re-minted client-side on a 401 (`services/aiService.ts`).

## 6. Change of access and segregation of duties

The service is operated by a single individual, so segregation of duties is limited: the same person develops, deploys, holds all secrets, and can authorize and execute privileged actions. This limitation is accepted and recorded in the ISMS risk register. Mitigations in place: all changes flow through the documented CI/CD gate (SHA-pinned actions, gitleaks full-history secret scan, typecheck and test suite), privileged routes are narrowly scoped, and secrets rotate on a fixed schedule. If a second operator is added, this policy will be revised to introduce separation between change and approval.

## 7. Review

Access rights and secrets are reviewed annually and after any personnel or key change. Credentials no longer in use are revoked.
