# AGENTS.md

Canonical agent instructions for the Project Aghoy repository. Shared across Claude Code, Kilo, Pi, OpenCode, Codex, and other harnesses.

## Purpose

Project Aghoy is an AI-powered scam detector for the Philippine context. It analyzes SMS, emails, and job offers for fraud indicators. The app is a Vite + React SPA deployed to Cloudflare Pages with a Cloudflare Worker backend (Durable Objects + Vectorize).

## Commands

- `npm run dev` - start the Vite dev server (port 3000)
- `npm run build` - production build to `dist/`
- `npm run preview` - preview the production build
- `npm run typecheck` - TypeScript checks for both the app and the Worker
- `npm test` - Vitest suite (run once)
- `npm run test:watch` - Vitest watch mode
- `npm run check` - full local gate: typecheck + test + build
- `bash scripts/install-hooks.sh` - install the pre-commit gate

## Standards

- **Evidence over hope.** "Seems right is not done." Every change ends with verification: `npm run check`, tests, or a real browser run.
- **Read before you write.** Never edit a file you have not read. Never guess names, signatures, or structures.
- **One logical change per commit.** No drive-by refactoring.
- **Write failing tests first.** TDD prove-it cycle: red, green, refactor, verify.
- **No em dashes.** Use `-` or `:` instead of the Unicode U+2014 character in every artifact this repo produces.
- **No machine-specific paths.** Never commit absolute home paths or local file URI references. Use `~`, `$HOME`, or relative paths.
- **Secure by default.** Never commit secrets, keys, or account/zone IDs. `functions/api/analyze.js` reads keys from Worker secrets (`.dev.vars` locally), never from committed files.

## Process

1. **Pre-commit gate.** `scripts/pre-commit.sh` runs typecheck + test + build. CI (`.github/workflows/ci.yml`) runs the same checks plus a SHA-pinned-actions audit and a gitleaks full-history secret scan.
2. **No lint script exists.** Add one only if a real lint config (e.g. ESLint) is introduced; do not invent a lint command.
3. **Typecheck covers two projects**: the app via `tsconfig.json` and the Worker via `Tsconfig.Worker.Json`. Keep both green.
4. **Deploy** is Cloudflare Pages (`project-aghoy.pages.dev`) with Functions for the API and a Wrangler Durable Objects worker for the Dojo. `vercel.json` is a Vite fallback, not the primary host.

## Architecture

- `App.tsx` - main scanner UI (SCANNER / TRAINING_DOJO tabs, privacy consent gate)
- `services/aiService.ts` - client logic: OCR via Tesseract (pooled worker, SELF-HOSTED assets under `public/ocr/`), `/api/analyze` calls, Dojo chat factory. Runs client-side pre-send redaction, deterministic brand/intent enrichment, and the no-provider fallback verdict. Posts sanitized reports to the storage layer.
- `functions/api/analyze.js` - Cloudflare Function backend (AI Gateway, rate limiting). Applies the Rejects layer inbound and outbound.
- `src/worker/dojo.ts` - Worker with Durable Objects: `DojoSession` (per-user game state), `RateLimiter` (per-IP). Applies the Rejects layer inbound, outbound, and before durable storage. Hosts the storage-layer routes (signed session tokens, constant-time admin auth, security headers).
- `src/rejects/rejects.ts` - the REJECTS LAYER: server-authoritative PII filter (cards via Luhn, PH mobiles, emails, API keys, PH IDs, OTPs, names, DOBs). Shared by the Function, the Worker, and the client. Idempotent; tests in `src/rejects/rejects.test.ts`.
- `src/brands/brands.ts` - BRAND DETECTION LAYER: deterministic PH brand detection (~48 brands), intent classifier, and `fallbackVerdict` (no-LLM analysis for quota outages). Pure logic; tests in `src/brands/brands.test.ts`.
- `src/support/supportDatabase.ts` - typed PH bank/wallet/telco/delivery/gov contact database (36 entries) powering `SmartSupport`. Tests in `src/support/supportDatabase.test.ts`.
- `src/api/storageClient.ts` - browser client for the storage layer: `postReport` (sanitized, with optional phone hashes) and `lookupIndicator`.
- `src/worker/storage.ts` - STORAGE LAYER: D1 (reports, indicators, blacklist), R2 (evidence), Vectorize (similar-scam search + seed). Only sanitized content is ever persisted. Routes: `POST /reports`, `GET /indicators`, `POST /indicators/verify`, `POST /reports/:id/evidence`, `GET /evidence`, `POST /seed/vectorize`.
- `src/worker/indicators.ts` - pure indicator extraction (domain/url/keyword) from sanitized content; tests in `src/worker/indicators.test.ts`.
- `utils/flagDefinitions.ts` - flag taxonomy (29 flags incl. PH-native TASK_SCAM, OTP_SHARING, PARCEL_FEE, QUISHING, etc.). Keep every flag defined here AND in `services/aiService.ts` VALID_FLAGS.
- `data/scam-corpus.jsonl` - Vectorize seed corpus (22 entries); seed via `POST /seed/vectorize` with the admin key.
- `utils/privacy.ts` - client-side PII sanitization for localStorage history; do not treat it as a security boundary.

## Storage Layer Setup (one-time)

- D1 database `project-aghoy-db` (id `c3463668-1ed1-4355-9efd-e3f0f41a204a`) is provisioned and migrations `0001_init.sql` are applied (remote + local).
- Vectorize index `scam-index` (768 dims, cosine) already exists and is seeded (22 corpus entries via `POST /seed/vectorize`).
- Worker `project-aghoy-dojo` is deployed at `https://project-aghoy-dojo.rhyonfs.workers.dev`.
- **R2 evidence storage is pending enablement.** The `EVIDENCE` binding is commented out in `wrangler.toml` and evidence routes return 501 until it is enabled. To enable: (1) subscribe/enable R2 in the Cloudflare dashboard, (2) run `bash scripts/setup-storage.sh enable-r2` (uncomments the binding, creates `project-aghoy-evidence`, redeploys), (3) set a budget alert under Billing (R2 free tier: 10GB + 1M writes + 10M reads/mo).
- Admin secret `STORAGE_ADMIN_KEY` is set on the Worker (guards `/indicators/verify` and `/seed/vectorize`).
- **Cross-isolate rate limiting**: `RATE_CHECK_KEY` (Worker secret) and `WORKER_RATE_CHECK_KEY` (Pages secret) share the same value. The Pages Function `/api/analyze` consults the Worker's `/ratelimit/check` endpoint (backed by the persisted RateLimiter DO) for a globally-accurate 5/min decision, falling back to the per-isolate limiter only when the Worker is unreachable.
- Only Rejects-layer output (`sanitizeForStorage` in `storage.ts`) may be written to D1/R2/Vectorize. Never persist raw user content.

## OCR / Tesseract (self-hosted)

- All Tesseract assets live in `public/ocr/`: `worker.min.js`, the wasm cores (`tesseract-core-*.wasm.js` + `.wasm`, including `-lstm` and `-simd` variants), and the pinned `eng.traineddata.gz`.
- `services/aiService.ts` passes `workerPath`/`corePath`/`langPath` pointing at `/ocr/` so NO code or model is fetched from a third-party CDN at runtime. This is required for CSP compliance (`script-src 'self'` blocks the CDN `importScripts`) and removes the supply-chain risk.
- `vite.config.ts` PWA workbox excludes `ocr/**` from precache and runtime-caches it (`CacheFirst`, 30-day expiry) so the service worker stays lean.
- To upgrade Tesseract: bump the package, then re-copy `node_modules/tesseract.js/dist/worker.min.js` and the needed `node_modules/tesseract.js-core/*` files into `public/ocr/`, and re-pin the traineddata (current: `@tesseract.js-data/eng@1.0.0/4.0.0_best_int`). Restart the dev server after copying public assets (Vite indexes `public/` at startup).

## Deliberate Decisions (do NOT silently revert)

- The privacy consent gate blocks analysis until the user accepts the privacy protocols. Preserve it.
- Client-side env vars were removed; all API keys live in Worker secrets. Do not reintroduce client-side keys.
- The Dojo is an authorized cybersecurity training simulation, not a real scam assistant.
- The REJECTS LAYER (`src/rejects/rejects.ts`) is the authoritative PII boundary: content must be redacted before any request leaves for a vendor and before any content is written to Durable Object storage. Client-side redaction is defense-in-depth only. Reject-layer rules must be idempotent and covered by tests.
- Tests target pure logic (privacy sanitization, flag definitions, rejects layer) to keep the suite fast and CI-stable. Add component tests only where they add real regression value.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
