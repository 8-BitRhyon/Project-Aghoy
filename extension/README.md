# Project Aghoy - Browser Extension

The free, private, non-profit way to check and report Philippine scam links, pages, and messages from your browser. Every report is sanitized (PII redacted) and lands in the shared Project Aghoy database, so one person's report warns everyone.

## What it does

- **Right-click any link or page**: "Check this link with Project Aghoy" - server-side, SSRF-guarded inspection of the real destination, final domain, HTTP status, redirects, and community reputation.
- **Right-click and report**: "Report this link/page as a scam" - posts a sanitized report into the shared D1 database (deduped, rate-limited, phone hashes only), which feeds the "reported N times" signal and the reputation feed.
- **Paste a message to check**: paste an SMS, email, or job-offer text and get an AI verdict in plain language, with the same pipeline as the web app (Rejects PII layer, deterministic under-detection override).

## Privacy & permissions (why you can trust it)

The extension requests **minimal permissions**:

| Permission | Why |
|---|---|
| `contextMenus` | To add the "Check with Aghoy" / "Report as scam" right-click items |
| `activeTab` | To read only the URL of the page you explicitly chose to check/report |
| `storage` | To store your consent token and settings locally |
| `notifications` | To show a result notification (optional) |
| `host_permissions` -> `project-aghoy-dojo.rhyonfs.workers.dev` | The ONLY origin it talks to - your report goes to the Project Aghoy Worker, nowhere else |

It **never** reads arbitrary website content, never requests "read your data on all sites", never sends your browsing history, and never sells data. Message text is Rejects-redacted server-side (card numbers, PH mobiles, emails, IDs, OTPs) before any persistence. Phone numbers are stored only as SHA-256 hashes. Consent is server-enforced and version-bound.

## Install (unpacked, for development)

1. Open `chrome://extensions`
2. Enable "Developer mode" (top right)
3. Click "Load unpacked"
4. Select this `extension/` directory

## Building the report -> reputation loop

The extension's `POST /reports` calls feed the same D1 database as the web app. Over time:
- Domains reported by >= 5 distinct users surface "reported N times" on web scans
- The `/feed/reputation` endpoint (see the aggregation roadmap) publishes scores
- A future ML classifier trains on the accumulated sanitized corpus

## Contributing

- Reports flow through `extension/api.js` -> the Worker (same consent + Rejects + rate limits as the web client).
- Keep permissions minimal. Never add a broad `host_permissions` or a content script that reads pages.
- Add tests for any pure logic alongside the web test suite.
