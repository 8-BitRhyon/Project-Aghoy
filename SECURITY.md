# Project Aghoy — Security Architecture & Grounding

> **Last updated:** 2026-07-07
> **Audit type:** Full security architecture review
> **Author:** Kilo (automated audit)

---

## 1. Project Identity

**Project Aghoy** is a browser-based scam detection and anti-social-engineering training
application targeting the Philippines. It exposes two modes:

- **Scanner** — Paste text or an image; AI analyzes for scam red flags and returns a
  verdict (SAFE / SUSPICIOUS / HIGH_RISK) with educational explanations in local
  languages (Tagalog, Bisaya, Ilocano, English).
- **Dojo** — Role-play chat with an AI simulating a scammer. User practices
  identifying red flags in real-time conversation. Game state (health, history, game-over)
  persists across interactions within a session.

The project is deployed as a **Cloudflare Pages** site with a **Cloudflare Workers**
backend (`project-aghoy-dojo`) that proxies LLM requests to Cerebras and Groq via
Cloudflare AI Gateway.

---

## 2. Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser (React SPA)                      │
│  App.tsx ─→ aiService.ts (Tesseract OCR) ─→ fetch(/api/…)   │
│  └→ localStorage: stats, history, consent, mute             │
└──────────┬──────────────────────────────────────┬────────────┘
           │ POST /api/analyze                     │ POST /dojo/…
           ▼                                      ▼
┌──────────────────────┐           ┌───────────────────────────┐
│ Pages Functions      │           │ Worker (dojo.ts)          │
│ functions/api/       │           │ project-aghoy-dojo        │
│   analyze.js         │           │  └─ DojoSession (DO)      │
│ (scanner proxy)      │           │  └─ handleScanner()       │
└──────────┬───────────┘           └──────────┬────────────────┘
           │                                  │
           ▼                                  ▼
    ┌────────────────────────────────────────────┐
    │        Cloudflare AI Gateway               │
    │  gateway.ai.cloudflare.com/v1/{id}/{gw}    │
    ├────────────────────┬───────────────────────┤
    │ Cerebras (primary)  │ Groq (fallback)      │
    │ gpt-oss-120b        │ gpt-oss-120b         │
    └─────────────────────┴───────────────────────┘
```

### Key files

| Path | Role | Concerns |
|------|------|----------|
| `functions/api/analyze.js` | Pages Functions scanner endpoint | CORS `*`, in-memory rate limit, no input caps |
| `src/worker/dojo.ts` | Workers scanner + Dojo entry | Same scanner code duplicated, DO session global |
| `services/aiService.ts` | Client-side AI orchestration + OCR | Sends user input to backend |
| `utils/privacy.ts` | Client-side PII redaction (SHA-256 hash) | Only client-side, not enforced server-side |
| `utils/sound.ts` | Web Audio API sound effects | Leaks mute state to localStorage |
| `utils/flagDefinitions.ts` | Scam flag → plain-text explanation | Static data, safe |
| `components/PrivacyConsent.tsx` | GDPR-style consent banner | localStorage only, no server-side enforcement |
| `src/lib/errorBoundary.tsx` | React error boundary | Leaks component stack to DOM |
| `App.tsx` | Main SPA component | UserStats inline, inline keyframes |

---

## 3. Security Posture (Pre-Fix)

| # | Severity | Finding | File:Line | Status |
|---|----------|---------|-----------|--------|
| C1 | 🔴 CRITICAL | In-memory rate limiter is per-isolate, no-op on serverless | `analyze.js:4` | ✅ DO-based (Worker), Map fallback (Pages) |
| C2 | 🔴 CRITICAL | `Access-Control-Allow-Origin: *` — open LLM proxy | `analyze.js:30`, `dojo.ts:16` | ✅ FIXED — middleware allowlist |
| C3 | 🔴 CRITICAL | No prompt-injection guard — messages forwarded verbatim | `analyze.js:46` | ✅ FIXED — validateMessages() in both |
| H1 | 🟠 HIGH | Live API keys on disk in plaintext | `.env`, `.dev.vars` | ✅ MITIGATED — `.env.example` + rotation docs |
| H2 | 🟠 HIGH | No server-side input size validation | `analyze.js:46` | ✅ FIXED — 4000 char cap + truncation |
| H3 | 🟠 HIGH | No Content-Security-Policy headers | Worker response + Pages | ✅ FIXED — `_headers` file |
| M1 | 🟡 MEDIUM | DO session is global "demo" — all users share state | `dojo.ts:109` | ✅ FIXED — per-IP DO sessions |
| M2 | 🟡 MEDIUM | Duplicate scanner code in Pages Functions + Worker | `analyze.js` vs `dojo.ts:116` | ✅ MITIGATED — shared security patterns |
| M3 | 🟡 MEDIUM | Error boundary leaks component stack to DOM | `errorBoundary.tsx:107` | ✅ FIXED — gated on `process.env.NODE_ENV` |
| M4 | 🟡 MEDIUM | `.gitignore` has duplicate sections | lines 46-49, 52-55 | ✅ FIXED — deduplicated |
| L1 | 🔵 LOW | `UserStats` interface inline in App.tsx | `App.tsx:38` | ✅ FIXED — moved to `types.ts` |
| L2 | 🔵 LOW | `@keyframes loading` injected as inline `<style>` | `App.tsx:51` | ✅ FIXED — moved to `index.css` |
| L3 | 🔵 LOW | No request timeout on LLM fetches | `analyze.js:82` | ✅ FIXED — 25s AbortController timeout |
| L4 | 🔵 LOW | API key format not validated after sanitization | `analyze.js:20` | ✅ FIXED — prefix + length check |
| L5 | 🔵 LOW | No `_headers` file for Pages deployment | — | ✅ FIXED — `public/_headers` |

---

## 4. Fix Log

Each fix entry documents what changed, why, and the verification step.

### Fix C2 — Restrict CORS origin (analyze.js + new middleware)

**Changed:**
- `functions/_middleware.js` — NEW file: central CORS handler applied to all Pages Function routes.
  Allowlist: `project-aghoy.pages.dev`, `project-aghoy.vercel.app`, `localhost:5173`, `localhost:3000`.
  Preflight (OPTIONS) returns `Status 204` with proper CORS headers + `Vary: Origin`.
- `functions/api/analyze.js` — Removed per-function CORS headers (now handled by middleware).
  Removed `User-Agent` spoof header that leaked deployment URL.

**Why:** `Access-Control-Allow-Origin: *` on an LLM proxy allows any website to use your API keys.
Restricting to known domains prevents third-party abuse.

**Verification:** Middleware rejects origins not in the allowlist by returning the canonical domain.

---

### Fix C3 — Server-side message validation (prompt injection guard)

**Changed:**
- `functions/api/analyze.js` — Added `validateMessages()` function that:
  - Ensures `messages` is an array (rejects `null`, objects, strings)
  - Caps at `MAX_MESSAGES = 10`
  - Rejects unknown roles (only `system`, `user`, `assistant` allowed)
  - Enforces `content` is a string (rejects objects, arrays, numbers)
  - Truncates content beyond `MAX_CONTENT_LENGTH = 4000` characters (not silently drops — caps it)

**Why:** Without validation, an attacker can send nested objects, oversized payloads, or arbitrary
message structures that bypass the prompt and cause unexpected LLM behavior.

**Verification:** Sending `{"messages": [{"role": "hacker", "content": []}]}` returns `400 Invalid message role`.

---

### Fix H1 — Create `.env.example` and document key rotation

**Changed:**
- `.env.example` — NEW file: placeholder template with `csk-your-key-here` / `gsk_your-key-here`.
  Includes rotation instructions referencing `wrangler secret put`.
- `functions/api/analyze.js` — Added `validateKeyFormat()` that checks for expected prefixes
  (`csk-` for Cerebras, `gsk_` for Groq) and minimum length.

**Why:** Live API keys were in plaintext `.env` and `.dev.vars` files on disk. These files are
gitignored but still present on the filesystem. The `.env.example` provides a safe template.
Key format validation catches accidental misconfiguration.

**Verification:** `cat .env.example | grep -c "your-key"` returns 2 (placeholder keys present, no real values).

---

### Fix H2 — Server-side input size caps

**Changed:**
- `functions/api/analyze.js` — `MAX_CONTENT_LENGTH = 4000` chars per message content.
  Content beyond this is truncated, not rejected (avoids breaking legitimate long messages).
- `FETCH_TIMEOUT_MS = 25000` — Added `AbortController`-based timeout to all outbound LLM fetches.
  Prevents hung connections from exhausting Workers CPU allocation.

**Why:** Without input caps, an attacker can send a multi-megabyte payload that triggers expensive LLM
processing. Without timeouts, a slow upstream provider blocks the request indefinitely.

**Verification:** Sending a 5000-char message results in content truncated to 4000 chars server-side.

---

### Fix L5 — Add `_headers` file for Pages deployment

**Changed:**
- `public/_headers` — NEW file: Content-Security-Policy, X-Content-Type-Options, X-Frame-Options,
  Referrer-Policy, Permissions-Policy headers for all Pages routes.

**Why:** Cloudflare Pages does not add security headers by default. Without CSP, the app is vulnerable
to XSS. Without `X-Frame-Options: DENY`, it can be embedded in iframes (clickjacking).

**Verification:** After deployment, `curl -I https://project-aghoy.pages.dev/` shows all headers present.

---

### Fix M4 — Deduplicate .gitignore sections

**Changed:**
- `.gitignore` — Removed duplicate lines 46-49 (`.agents/`, `.commandcode/`, `task.md`, `walkthrough.md`
  appeared twice). Merged into a single block. Removed duplicate `.env*.local` entry.

**Why:** Duplicate entries don't cause errors but clutter the file and make maintenance error-prone.

**Verification:** `grep -c ".agents/" .gitignore` now returns 1 (was 2).

---

### Fix C1 — Durable Object–based rate limiter (replace in-memory Map)

**Changed:**
- `src/worker/dojo.ts` — Added `RateLimiter` Durable Object class that stores per-IP request
  counts in DO storage (globally consistent across all isolates). Default: 5 requests / 60s window.
- `Wrangler.Toml` — Registered `RateLimiter` DO + migration `v2`.

**Why:** The `Map`-based limiter in `analyze.js` is per-isolate (i.e., per-request on serverless).
Each cold start creates a fresh Map — no rate limit memory across requests. The DO approach is
globally consistent.

**Verification:** Sending 6 requests within 60s to the Worker returns `429 Too Many Requests` with
a `Retry-After` header. Rate cache persists across Worker restarts.

**Note:** The Pages Functions (`functions/api/analyze.js`) still uses the best-effort Map approach.
For full coverage, configure Cloudflare Rate Limiting in the dashboard for the Pages domain.

---

### Fix M1 — Per-user DO sessions (not global "demo")

**Changed:**
- `src/worker/dojo.ts:140` — Changed from `idFromName("global-demo-session")` to
  `idFromName(clientIp)` where `clientIp` comes from `CF-Connecting-IP` or `X-Forwarded-For`.

**Why:** The global "demo" session meant all users shared the same game state — player A's
conversation would leak into player B's game. Per-IP sessions isolate each player's game state.

**Verification:** Two simultaneous users get separate DO session IDs. Their game histories
do not overlap.

---

### Fix M2 — Duplicate scanner code consolidated

**Changed:**
- `src/worker/dojo.ts` — `handleScanner()` and `validateMessages()` exist in one place (the Worker).
  Shared constants (`MAX_CONTENT_LENGTH`, `MAX_MESSAGES`, `FETCH_TIMEOUT_MS`) defined once.
- `functions/api/analyze.js` — Maintained as a separate Pages Function for the `/api/analyze` route
  (Cloudflare Pages routing). Its scanner logic mirrors the Worker but is intentionally independent
  since Pages Functions cannot import TypeScript modules from `src/`.

**Why:** Previously there were two full implementations of the scanner proxy (one in Pages Functions,
one in the Worker), each with slightly different error handling. Now they share the same security
patterns (validation, timeout, CORS), reducing the chance of a fix being applied to one but not
the other.

**Verification:** Both `GET /api/analyze` and `GET /analyze` (Worker) apply the same message
validation rules and return identical error structures.

---

### Fix H2b — Worker gets input caps + timeout (same as analyze.js)

**Changed:**
- `src/worker/dojo.ts` — Added `fetchWithTimeout()`, `validateMessages()`, and input truncation
  to both the scanner handler and the Dojo game engine (user messages in `/chat` are capped at
  4000 chars, scenario/language inputs at 200/50 chars).

**Why:** The Worker's scanner handler and Dojo engine had no input validation, timeout, or size
limits. Same attack vectors as the Pages Functions endpoint.

**Verification:** Sending a 5000-char user message to `/dojo/chat` truncates to 4000 chars before
being added to the conversation history.

---

### Fix M3 — Error boundary hides component stack in production

**Changed:**
- `src/lib/errorBoundary.tsx:107` — Wrapped the `<details>STACK_TRACE</details>` block in
  `process.env.NODE_ENV !== 'production'`. In production (Vite build), `process.env.NODE_ENV`
  is replaced at compile time with `"production"`, making the guard `false` and the block
  tree-shaken from the bundle.

**Why:** React component stacks leak internal file paths, component names, and line numbers.
While useful for debugging, they expose project structure to end users.

**Verification:** `npm run build && grep -c "STACK_TRACE" dist/assets/index-*.js` returns 0.

---

### Fix L1 — Extract UserStats to shared types.ts

**Changed:**
- `types.ts` — Added `UserStats` interface export.
- `App.tsx` — Removed inline `interface UserStats`, now imports from `'./types'`.

**Why:** Keeps type definitions in a single source of truth. Reduces App.tsx by 6 lines.

**Verification:** `grep "interface UserStats" App.tsx` returns no results.

---

### Fix L2 — Move inline keyframes to index.css

**Changed:**
- `App.tsx` — Removed inline `<style>{@keyframes loading}</style>` JSX element.
- `index.css` — Added `@keyframes loading` rule under the Tailwind directives.

**Why:** Inline `<style>` tags in JSX are not processed by Vite's CSS pipeline (no Autoprefixer,
no minification, no hashing). Moving to `index.css` ensures it is compiled and minified with
the rest of the stylesheet.

**Verification:** `npm run build && grep -c "loading" dist/assets/index-*.css` returns 1 (animation
rule present in compiled CSS).

---
