# Project Aghoy

**AI-powered scam detection for the Philippine context.** Scan text or a screenshot of any SMS, email, or job offer. Get an AI verdict with plain-language explanations, direct victim-assistance hotlines, government reporting channels, and a safe training Dojo where you practice spotting scammers.

Project Aghoy is a free, open-source, non-profit community project. It is not a business and it does not collect data for profit.

## Why it exists

Scams are a daily reality in the Philippines: SMS phishing, vishing calls, task scams, parcel-fee demands, QR code (quishing) traps, fake investments, and impersonations of wallets, banks, telcos, and government agencies. Victims lose savings, and the pressure to act fast is exactly what the scammers exploit.

Project Aghoy meets that threat three ways:

- **Detection:** analyze suspicious messages before you act, with explanations you can understand in your own language.
- **Education:** the Dojo lets you practice recognizing social engineering in a safe simulation, and the flag library explains each red flag.
- **Privacy by design:** the messages you analyze contain personal data. A server-authoritative PII filter (the Rejects layer) redacts names, numbers, IDs, and secrets before any content leaves your device or is stored. This respects the spirit of the Data Privacy Act of 2012 (RA 10173).

## Features

- **Scanner.** Paste text or upload a screenshot. OCR extracts the text, the AI returns a verdict (SAFE / SUSPICIOUS / HIGH_RISK), a risk score, red flags, and an educational tip in your language.
- **Deterministic brand detection.** 48 Philippine brands (wallets, banks, telcos, delivery, e-commerce, government) are detected with leetspeak-aware, boundary-aware matching. Powers victim-support routing and works even when the LLM is down.
- **Rejects PII layer.** Server-authoritative redaction of credit cards (Luhn-validated), Philippine and international phone numbers, emails, API keys, Philippine IDs (SSS, TIN, PhilHealth, LTO, passports, Pag-IBIG, UMID), OTPs, CVVs, names, and dates of birth. Runs inbound and outbound on every request and before every database write. Idempotent.
- **Self-hosted OCR.** Tesseract.js runs entirely from `public/ocr/` (worker, wasm cores, pinned English traineddata). No third-party CDN at runtime.
- **Training Dojo.** A role-play chat where an AI simulates a scammer. Spot the red flags and end the game by reporting it. Authorized cybersecurity training, not a real scam assistant.
- **Victim support database.** SmartSupport routes you to verified official channels for 36 banks, wallets, telcos, couriers, and government agencies, including PNP-ACG reporting guidance.
- **4 languages.** Tagalog, Bisaya, Ilocano, and English for verdicts, explanations, and the Dojo.
- **Offline fallback verdict.** When the AI provider is unavailable, a deterministic rule engine still produces a verdict for obviously suspicious messages.
- **Storage layer and blacklist.** Sanitized reports go to D1, indicators feed an open blocklist feed with "reported N times" counts. Phone numbers are only ever stored as SHA-256 hashes.
- **PWA.** Installable with offline-ready assets (OCR models cached separately).

## Architecture

```
+----------------------------------------------------------+
|                    Browser (React 19 SPA)                 |
|  Retro terminal UI + PWA, 4 languages, consent gate      |
|  aiService.ts: OCR (self-hosted Tesseract)               |
|  client pre-send Rejects redaction (defense-in-depth)    |
|  deterministic brand/intent enrichment                   |
|  localStorage history (20 scans, sanitized)              |
+-----------------+-----------------------------+----------+
                  | POST /api/analyze            | POST /reports, GET /indicators
                  v                             v
+-----------------------------+   +----------------------------------------+
| Cloudflare Pages Function   |   | Worker project-aghoy-dojo              |
| functions/api/analyze.js    |   | src/worker/dojo.ts                     |
|  Rejects inbound + outbound |   |  RateLimiter DO (per-IP)               |
|  input caps, 25s timeout    |   |  DojoSession DO (per-token game)      |
|  per-isolate rate limit     |   |  Rejects before any persistence        |
|                             |   |  storage routes: /reports, /indicators |
|                             |   |  /indicators/verify, /evidence, seed   |
+-----------------------------+   +-------+--------------+-----------------+
                  |                        |              |
                  v                        v              v
+--------------------------+   +---------------+   +---------------------+
| Cloudflare AI Gateway    |   | D1 database   |   | Vectorize index     |
| Cerebras gpt-oss-120b    |   | reports,      |   | scam-index          |
| Groq gpt-oss-120b (fb)   |   | indicators,   |   | 768d, cosine,       |
|                          |   | blacklist     |   | seeded 22 entries   |
+--------------------------+   +---------------+   +---------+-----------+
                                                              |
                                                              v
                                                      Workers AI: embeddings
                                                      (@cf/baai/bge-base-en-v1.5)
                                                      + Dojo LLM (llama-3-8b)
```

Notes on the diagram:

- The browser talks to the Cloudflare Pages Function for analysis and to the Worker directly for the storage layer. Both apply the Rejects layer before content reaches any vendor.
- The Worker hosts Durable Objects (`DojoSession` for game state, `RateLimiter` for per-IP limits) plus the storage routes.
- R2 is reserved for scam evidence blobs (screenshots, evidence briefs) but is **not yet enabled** on the account. Evidence routes return 501 until it is.

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19, Vite 6, Tailwind CSS, vite-plugin-pwa |
| Hosting | Cloudflare Pages (SPA + Functions) |
| API backend | Cloudflare Pages Functions (`/api/analyze`) |
| Worker | Cloudflare Workers + Durable Objects |
| AI | Cloudflare AI Gateway (Cerebras gpt-oss-120b, Groq gpt-oss-120b fallback) + Workers AI |
| Database | D1 (`reports`, `indicators`, `blacklist`) |
| Vector search | Vectorize `scam-index` (768d, cosine) |
| Object storage | R2 (evidence; binding commented out until account enablement) |
| OCR | Tesseract.js, self-hosted under `public/ocr/` |
| Language | TypeScript (strict) for app and Worker |
| Tests | Vitest, 115 tests across 6 suites |
| CI | GitHub Actions (SHA-pinned, gitleaks secret scan) |

## Quick start

Prerequisites:

- Node.js 20 or newer
- A Cloudflare account and a logged-in wrangler (`npx wrangler login`)
- Vendor API keys (Cerebras, Groq) and your Cloudflare AI Gateway IDs for full AI analysis

Steps:

```bash
npm install
npm run dev
```

- The dev server runs on port 3000 (`http://localhost:3000`).
- For local API calls, create a `.dev.vars` file modeled on `.env.example` with `CEREBRAS_API_KEY`, `GROQ_API_KEY`, `CF_ACCOUNT_ID`, and `CF_GATEWAY_ID`. Never commit real keys.
- Accept the privacy consent gate when the app prompts you.
- Paste a suspicious message, or upload a screenshot, and hit Scan.

## Deployment

1. **Pages site.** Connect the repository to Cloudflare Pages. Build command: `npm run build`, output directory: `dist`. The `functions/` directory deploys as Functions automatically.
2. **Worker.** From the repo: `npx wrangler deploy`. This deploys `project-aghoy-dojo` with its Durable Objects, D1, and Vectorize bindings.
3. **Storage setup.** Run `bash scripts/setup-storage.sh` to create the D1 database, apply migrations, and create the R2 evidence bucket (idempotent).
4. **Secrets.** Set Worker secrets with `npx wrangler secret put`: `STORAGE_ADMIN_KEY`, `SESSION_SIGNING_KEY`, `CEREBRAS_API_KEY`, `GROQ_API_KEY`, `CF_ACCOUNT_ID`, `CF_GATEWAY_ID`. The Pages Function needs the same AI keys and gateway IDs as Pages environment variables.
5. **Vectorize seed.** The `scam-index` already exists and is seeded. To reseed: `curl -X POST https://project-aghoy-dojo.rhyonfs.workers.dev/seed/vectorize -H "Authorization: Bearer $STORAGE_ADMIN_KEY" -d @corpus.json`.
6. **R2 (pending).** Enable R2 on your Cloudflare account, uncomment the `EVIDENCE` binding in `wrangler.toml`, run `npx wrangler r2 bucket create project-aghoy-evidence`, and redeploy. Evidence routes return 501 until then.

## Project structure

```
App.tsx                        main scanner UI (SCANNER / TRAINING_DOJO tabs)
services/aiService.ts          client orchestration: OCR, /api/analyze, storage loop
functions/api/analyze.js       Pages Function scanner endpoint (AI Gateway)
functions/_middleware.js       CORS allowlist + security headers
src/rejects/rejects.ts         server-authoritative PII filter (Rejects layer)
src/brands/brands.ts           deterministic brand/intent detection + fallback verdict
src/support/supportDatabase.ts typed victim-support contacts (SmartSupport)
src/worker/dojo.ts             Worker: Durable Objects + storage routes
src/worker/storage.ts          D1 + R2 + Vectorize access (sanitized writes only)
src/worker/indicators.ts       pure indicator extraction (domain/url/keyword)
src/api/storageClient.ts       browser client for the storage layer
utils/flagDefinitions.ts       flag taxonomy (29 flags)
utils/privacy.ts               client-side display sanitization (not a boundary)
data/scam-corpus.jsonl         Vectorize seed corpus (22 entries)
public/ocr/                    self-hosted Tesseract worker, wasm cores, traineddata
scripts/                       hooks, storage setup, OCR sync
migrations/                    D1 schema
```

## Testing

- `npm test` runs the full Vitest suite: 115 tests across 6 suites.
- `npm run check` is the local gate: typecheck + test + build. CI runs the same plus a SHA-pinned-actions audit and a gitleaks full-history secret scan.
- The pre-commit hook (`bash scripts/install-hooks.sh`) runs the gate before every commit.

| Suite | Tests | Covers |
| --- | --- | --- |
| `src/rejects/rejects.test.ts` | 44 | PII redaction rules, idempotency |
| `src/brands/brands.test.ts` | 31 | brand detection, intents, fallback verdict |
| `src/support/supportDatabase.test.ts` | 6 | support data integrity |
| `src/worker/indicators.test.ts` | 10 | indicator extraction |
| `utils/privacy.test.ts` | 15 | client-side sanitization |
| `utils/flagDefinitions.test.ts` | 9 | flag taxonomy |

## Status and roadmap

Live today:

- Scanner (text + screenshot OCR) with AI verdicts through Cloudflare AI Gateway.
- Rejects layer enforced server-side on both endpoints and before every storage write.
- Deterministic brand detection and the no-provider fallback verdict.
- Dojo training game with per-token sessions and a hard per-session AI turn cap.
- Storage layer: D1 reports and indicators, Vectorize similar-scam search, phone-hash "reported N times" blacklist.
- Self-hosted OCR, PWA installability, 4 languages, SmartSupport routing, family warning share card, PNP-ACG report copy.

Pending:

- R2 evidence store: blocked on account-level R2 enablement (Cloudflare error code 10042), then uncomment the binding and redeploy.
- Cloudflare WAF rate limiting for `/api/analyze`: the current Pages limiter is per-isolate in-memory and not globally accurate (see SECURITY.md).
- UI surfacing of indicator/blacklist lookups: `storageClient.lookupIndicator` is client-ready; wiring it into the scanner result view is in progress.
- Dev-toolchain dependency updates as upstream fixes land (see SECURITY.md, supply chain).

## License

MIT. Copyright (c) 2025 Project Aghoy. See [LICENSE](LICENSE).

## Links

- Live app: https://project-aghoy.pages.dev
- Dojo worker: https://project-aghoy-dojo.rhyonfs.workers.dev
- Security posture: [SECURITY.md](SECURITY.md)
- Contributing: [CONTRIBUTING.md](CONTRIBUTING.md)
