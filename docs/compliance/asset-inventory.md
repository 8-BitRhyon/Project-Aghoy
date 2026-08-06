# Asset Inventory

**Project Aghoy** - last reviewed 2026-08-06
**Owner:** single operator
**Maps to:** ISO 27001 A.5.9 (inventory of information and other associated assets), A.5.10 (acceptable use), A.8.1/2/3 (assets, information, media)

## 1. Information assets

| Asset | Classification | Owner | Location / retention | Controls |
|---|---|---|---|---|
| User-submitted message text | Personal data (RA 10173) | Users | Never persisted server-side; client-only before analysis | Rejects redaction inbound |
| OCR-extracted text | Personal data | Users | Never leaves the device (on-device Tesseract) | MIME/size caps, pooled worker |
| Rejects-redacted analysis records | Sanitized | Project | D1 `reports` (indefinite) | `sanitizeForStorage`, content-hash dedup |
| Indicators (domain/url/keyword) | Non-personal | Project | D1 `indicators` (indefinite) | feed excludes `phone` hashes |
| Phone number hashes | Derived PII (one-way SHA-256) | Project | D1 `indicators` type=phone | never raw, excluded from feed |
| Evidence blobs (screenshots/briefs) | Sanitized | Project | R2 `project-aghoy-evidence` | admin-key auth, 10MB cap, octet-stream |
| Vectorize embeddings | Sanitized | Project | Vectorize `scam-index` | sanitized corpus only |
| Browser scan history | Personal data | Users | client localStorage (20 scans) | sanitizeText, clear action |
| Dojo session state | Sanitized | Project | DO storage (24h idle TTL) | signed tokens, 50-turn cap |

## 2. Software / service assets

| Asset | Criticality | Description | Supply-chain control |
|---|---|---|---|
| React SPA (Pages) | High | User-facing scanner UI | npm audit in CI, SHA-pinned actions |
| Pages Function /api/analyze | High | Scanner backend | gitleaks, rate limiting, Rejects |
| Worker project-aghoy-dojo | High | Storage + Dojo + inspect | SHA-pinned deploy, secrets via wrangler |
| D1 project-aghoy-db | High | Reports/indicators/blacklist | `scripts/backup-db.sh` (A.8.13) |
| R2 project-aghoy-evidence | Medium | Evidence storage | admin-key auth, no public read |
| Vectorize scam-index | Medium | Similar-scam search | sanitized seed only |
| AI Gateway + Cerebras/Groq | Medium | LLM inference | keys server-side, DPA required |
| Tesseract (self-hosted) | Low | OCR | vendored assets, no CDN at runtime |

## 3. Physical / device assets

| Asset | Owner | Controls |
|---|---|---|
| Operator workstation (macOS) | Operator | Full-disk encryption, screen lock, OS updates (A.6.7, A.7.10) |
| Operator smartphone (2FA) | Operator | Lock screen, biometric auth |
| Cloudflare-managed infrastructure | Cloudflare | Delegated - Cloudflare SOC 2 / ISO 27001 certificates as evidence (see SoA A.7) |

## 4. Maintenance

- Review this inventory annually and on any infrastructure change (new binding, new provider, new data type).
- New data asset: classify it, add it above, and confirm the Rejects-layer gate applies before persistence.
- A change that introduces a new third party must update the processor list in `components/PrivacyPolicyModal.tsx` and the SoA.
