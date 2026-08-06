# Project Aghoy Incident Response Policy

**Document version:** 1.0
**Document owner:** Project Aghoy operator (single operator; sole responder and decision-maker)
**Effective date:** 2026-08-06
**Review cycle:** Annual, or after each major incident
**Status:** Adopted

## 1. Purpose

This policy defines how Project Aghoy detects, classifies, responds to, and learns from security, privacy, and availability incidents. It implements ISO/IEC 27001:2022 Annex A controls A.5.24 (incident response planning), A.5.25 (assessment of security incidents), A.5.26 (response to incidents), and A.5.28 (collection of evidence).

## 2. Scope

All systems and data in the ISMS scope: the Cloudflare Pages site, the Pages Function `/api/analyze`, the storage worker and Training Dojo (`src/worker/dojo.ts`), the data stores (D1, R2, Vectorize), the AI Gateway and its providers (Cerebras, Groq), and the CI/CD pipeline.

## 3. Incident classes

1. Security: unauthorized access, credential exposure, or exploitation of the worker or function routes.
2. PII breach: personal data leaving the Rejects layer, or a provider event involving user content.
3. AI misuse: prompt injection success, model echo of personal data, or Dojo misuse.
4. Availability: outage of the scanner, worker, or Dojo, or AI quota exhaustion.
5. Abuse of the blocklist feed: forged reports, indicator flooding, or tampering with blacklist rows.

## 4. Detection

Detection sources include: Cloudflare dashboard metrics and WAF/rate-limiting logs, worker and function logs, rate-limit 429 patterns, the gitleaks and CI secret scans, dependency audits (`npm audit`), and user reports to the security contact.

## 5. Triage and severity

- P1 (critical): known PII exposure, credential compromise, or total service outage. Respond immediately.
- P2 (high): suspected PII exposure, feed tampering, or sustained abuse.
- P3 (medium): AI misuse, partial availability loss, or provider incidents.
- P4 (low): suspected reconnaissance, quota spikes, or nuisance reports.

The single operator is the incident commander for all severities. There are no on-call tiers; the owner is accountable end to end.

## 6. Response and containment

Containment actions are mapped to mechanisms the operator can actually execute:

- Rotate or revoke secrets: use `wrangler secret put` for `CEREBRAS_API_KEY`, `GROQ_API_KEY`, `STORAGE_ADMIN_KEY`, `SESSION_SIGNING_KEY`, and `RATE_CHECK_KEY` (see the KEY ROTATION section of `.env.example`). Revoking `STORAGE_ADMIN_KEY` immediately denies all admin write routes because the worker fails closed (503) when the key is unset.
- Block abusive IPs: the per-IP rate limiter keys on `CF-Connecting-IP` only (never `X-Forwarded-For`). For a targeted block, enable Cloudflare WAF rate limiting or a WAF rule on the Pages domain. IP data in the rate limiter is ephemeral.
- Purge stored data: delete rows from D1 (`reports`, `indicators`, `blacklist`), purge R2 `evidence` objects, and re-seed or delete the Vectorize `scam-index` via the admin routes or the dashboard.
- Take the site down: disable the Pages project in the Cloudflare dashboard or deploy a static maintenance page.
- Pause the AI pipeline: remove the provider keys so `/api/analyze` fails closed with 503, leaving the deterministic fallback (`src/brands/brands.ts`) as the only verdict path.

The Rejects layer is assumed intact until proven otherwise. Any suspicion that raw PII reached a provider or a store is treated as a PII breach regardless of how it arose.

## 7. Notification obligations

- As a Philippine service processing sensitive personal information, a breach is notifiable to the National Privacy Commission under the Data Privacy Act (RA 10173) and NPC Circular 16-03: notification to the NPC and affected data subjects must occur within 72 hours of confirmation when the breach involves sensitive personal information or when identity theft is possible.
- The notification covers the breach description, the categories and number of affected individuals, the mitigating steps taken, and contact details.
- Provider incidents involving Cerebras, Groq, or Cloudflare are handled through their own breach notification provisions, which the operator must monitor and incorporate into any NPC notification.
- Vulnerability reports are acknowledged within 72 hours, per `SECURITY.md`.

## 8. Evidence retention

- Preserve logs, request metadata, rate-limiter state, and provider correspondence in the incident record. Do not store raw user content as evidence; retain Rejects-layer output or sanitized extracts instead.
- Evidence for a PII breach is retained for at least one year to support NPC inquiries.
- Containment actions, timestamps, and decisions are recorded in the incident record.

## 9. Post-incident review

Within 30 days of a P1 or P2 incident, the operator performs a review covering root cause, whether the Rejects layer held, detection gaps, containment effectiveness, and required policy or control changes. Findings update the ISMS risk register and may trigger an out-of-cycle review of any policy in this series.

## 10. Contact

The security contact is `projectaghoy@gmail.com` (also the privacy contact). This mailbox must be monitored; incident and breach notifications are directed here, and RA 10173 / NPC 16-03 breach notifications to affected parties and the NPC are coordinated from it.
