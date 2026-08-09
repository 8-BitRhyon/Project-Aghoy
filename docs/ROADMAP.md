# Project Aghoy - Roadmap

Where the project is, what ships next, and how each phase is proven with
evidence (holdout metrics, tests, live checks). One person + an automated
pipeline can out-produce a team when every change is gated by the harness:
the license gate (legal), the leakage guard (data integrity), the frozen PH
holdout (QA), and the ML regression gate (reviewer).

## Where we are (verified, 2026-08-09)

| Capability | Status |
| --- | --- |
| PWA scanner (text + OCR screenshot) | Live |
| On-device TinyBERT (14.6 MB int8 ONNX, offline) | Live, verifier-gated |
| Deterministic PH brand engine (43 brands, 29 flags) | Live |
| Rejects PII layer (server-authoritative, idempotent) | Live |
| On-device URL grader (official-domain allowlist, link signals) | Built, uncommitted |
| Trusted-sender allowlist (GCash/BDO/Maya/telco IDs + shortcodes) | Built, uncommitted |
| Community-blacklist escalation (reported phone/domain -> SUSPICIOUS) | Built, uncommitted |
| Share-target flow (highlight -> Share > Aghoy -> scan) | Built, uncommitted |
| ML regression gate (train + holdout eval, fails on regression) | Built, uncommitted |
| Training corpus | 17,046 rows (5,682 scam / 11,364 legit), 0 PII leaks |
| Frozen PH holdout (never in training) | 2,618 rows, AUC 0.98, scam recall 97.9% |
| Tests | 334 passing |

## Phase 0 - Land the backlog (now, days)

Everything in the working tree is uncommitted and must land before any new
work. Four logical PRs, each with its own evidence:

1. **ML pipeline**: URL grader + tests, PH holdout + builders (`build-ph-holdout.ts`,
   `eval_holdout.py`), retrained tagalog model (ONNX + threshold 0.28), ml-gate.yml,
   `data/training/ml-baseline.json`.
2. **Identity layer**: `senderAllowlist.ts` + tests, `blacklistSignals.ts` + tests,
   `From:` field, VERIFIED_SENDER / REPORTED_PHONE / REPORTED_DOMAIN flags,
   aiService wiring.
3. **Share-to-scan**: custom service worker (`src/sw.ts`), `share_target` in
   manifest, `utils/shareTarget.ts` + tests, App.tsx consumption.
4. **Docs refresh**: README (real test table, ML section, this roadmap link).

Gate: 334 tests green, ml-gate passes on the current model (recall 0.979,
AUC 0.985, F1 0.763 vs tolerances 0.95 / 0.96 / 0.70).

## Phase 1 - Complete the product loop (weeks)

The scanner works; the loop is incomplete. The user should be able to scan,
act, and report in one flow, offline.

1. **Offline report queue** (highest value, no platform risk). IndexedDB
   enqueue before any network call; flush on `online` / foreground / 5-min
   timer; exponential backoff with jitter (30s -> 15m, cap 25 attempts);
   write-once-then-delete (delete only on 2xx). The Worker already dedups on
   `content_hash` so retries are idempotent. Replaces the fire-and-forget
   `postReport` in `storageClient.ts`.
2. **COEP header fix** (5-minute perf win). Add
   `Cross-Origin-Embedder-Policy: require-corp` (and CORP on the Google Fonts
   subresource) in `public/_headers`. This unlocks SharedArrayBuffer so
   onnxruntime-web uses its threaded build instead of single-threaded
   Asyncify - an estimated 3-5x latency cut on 2GB phones. Benchmark before/
   after on a low-end device before keeping.
3. **Report routing to CICC 1326 / eGov / telco Stop Spam**. In-app one-tap
   report buttons that package the sanitized evidence (sender, text, timestamp,
   screenshot count) in the format each channel accepts, plus copy-to-clipboard
   for the PNP-ACG affidavit-style text. Reuses the share-card + SmartSupport
   infrastructure.
4. **Surface blacklist results in the scanner UI**. `lookupIndicator` and
   `domainReputation` are client-ready; the result card should show
   "this number reported N times" / "this domain reported N times" with the
   flags already being set.

Exit criteria: a scan -> flag -> report -> (offline queue) -> auto-flush ->
blacklist growth -> next scan catches it, all without losing a report on kill.

## Phase 2 - Feed the flywheel (weeks-months)

The model's ceiling is data. The community blacklist is the only public,
real-time, PH-specific scam-intelligence corpus that exists - grow it and
retrain on it.

1. **Data licensing follow-ups**. Email Anton Reyes (ScamMessagesPhilippines)
   and the MSU-IIT / ICoDSA authors for permissive licenses (MIT / CC-BY-4.0)
   on their PH datasets (5.8k labeled rows; 54k Filipino words). Point at the
   repo as proof of non-profit use. This converts owner-exception sources into
   clean legal footing.
2. **Self-report training loop**. The `training_answers` / `self_reports`
   tables already exist. Route accepted, high-confidence community reports
   into the training corpus export (Rejects-sanitized only), then weekly
   retrain via the ml-gate scheduled run. The model learns from real new scams
   as they are reported.
3. **Synthetic Taglish augmentation** (free-tier). Use Workers AI
   (GLM-4.7-Flash, MIT weights, 10k free neurons/day) to generate Taglish
   variants of the 22 seed archetypes + the flag taxonomy, through the same
   Rejects + license-gated pipeline. Target the 7 remaining holdout FNs and
   the romance/marketplace/family-emergency archetypes.
4. **Document the data gap publicly**. Publish the honest finding: text alone
   cannot separate legit bank notifications from scams; identity (sender +
   link + community reputation) is the differentiator. This is the research
   contribution and the pitch for institutional partnership.

Exit criteria: holdout recall / F1 improves on a retrain; the blacklist grows
with real reports; at least one dataset is licensed permissively.

## Phase 3 - Reach the vulnerable demographic (months)

The mission: grandparents and OFW families should never be the last line of
defense. The paste/share PWA requires action; the default-SMS-handler app does
not.

1. **Sideload SMS-reader pilot (APK)**. A minimal Android app (WebView shell
   of the same PWA + ORT Mobile running the SAME ONNX) with a
   NotificationListenerService prototype reading SMS notifications and
   flagging on-device. Distributed via sideload / early-access only - the NLS
   path is Play-policy-gray for SMS content.
2. **Default-SMS-handler app (QKSMS fork)**. The only Play-compliant way to
   read SMS automatically and filter BEFORE the user sees the message. Fork
   QKSMS (MIT), run the classifier at `SMS_DELIVER` time, bodies never stored
   or transmitted. Accept and document the tradeoff: replacing Google Messages
   as default means losing RCS.
3. **Smishing-exception evidence pack**. Compile benchmark results + industry
   references to apply for the Play "anti-SMS phishing" exception (requires "a
   track record of significant protection for users").
4. **Privacy architecture as the differentiator**. "What leaves this phone"
   screen in 4 languages: verdicts, domains, and SHA-256 number hashes only -
   never message bodies. Contrast with Truecaller (uploads contacts) and even
   Google Messages (server-side content processing).

Exit criteria: a reported scam SMS is flagged automatically on a 2GB phone
with warm inference under ~300ms, zero regression on the offline queue, and
the smishing-exception application filed.

## Phase 4 - Institutional integration (ongoing)

1. **CICC / DICT / eGovPH connector** behind the Worker: package sanitized
   reports for the channels that exist today (1326 hotline, eGov app eReport,
   telco Stop Spam forms) and automate dispatch when online.
2. **Telco partnership for a reporting shortcode** (the PH 7726 equivalent).
   Requires Globe/Smart/DITO + NTC; a scale/reach project, not an engineering
   task. Until then, integrate with the existing channels.
3. **Public scam-intelligence corpus**. The community blacklist, released as
   the advisory host blocklist (already an endpoint) + an open metrics page.
   This is the asset no institution has and the reason partners engage.

## How each phase is proven

- Phase 0: 334 tests + ml-gate green.
- Phase 1: end-to-end offline report flow test; COEP latency A/B on a real
  low-end device.
- Phase 2: holdout metrics on each retrain; blacklist row growth.
- Phase 3: field test on 3-5 real budget phones with real users.
- Phase 4: at least one live report routed to an official channel.

## Guiding rules (do not break)

- The Rejects layer is the boundary: nothing unredacted leaves the device or
  is stored. Ever.
- The license gate stays strict; only permissive licenses, or documented
  owner-approved exceptions with an audit note.
- The on-device model is a second opinion: it escalates, never forces
  HIGH_RISK, never downgrades.
- No secrets in the repo; CI enforces SHA-pinned actions + gitleaks + audit.
- One logical change per commit; the holdout decides if a model change lands.
