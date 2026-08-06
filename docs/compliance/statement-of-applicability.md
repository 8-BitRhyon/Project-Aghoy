# Project Aghoy: Statement of Applicability (ISO/IEC 27001:2022)

**Date:** 2026-08-06
**Scope:** The Project Aghoy service and its supporting infrastructure, operated by a single operator as a non-profit.
**Purpose:** This is the canonical register of all 93 Annex A controls. Every control is declared applicable (Y) or not (N), given a status, and justified with a one-line evidence reference. A registrar audits against this document, so each status must be defensible with real artifacts.

**Status values:**
- **Implemented** - operates fully with evidence.
- **Partially** - meaningful implementation exists; a registrar would still require additional evidence or sub-components.
- **Not implemented** - no or effectively no implementation.
- **N/A** - not applicable; justification given (largely physical controls delegated to Cloudflare's data center certifications under the shared responsibility model). Audit artifact for the N/A physical controls: the operator retains Cloudflare's published SOC 2 Type II and ISO 27001 certificate references plus the Data Processing Addendum as delegated-evidence records; see README Phase 3.

Summary: 2 implemented, 47 partially, 28 not implemented, 16 N/A. The 2 fully implemented controls are the data-masking and data-leakage-prevention capabilities built on the Rejects layer.

---

## A.5 Organizational controls

| ID | Control | App | Status | Justification / evidence |
| --- | --- | --- | --- | --- |
| A.5.1 | Policies for information security | Y | Partially | `SECURITY.md` and `AGENTS.md` are de facto policy; no approved top-level ISMS policy with review dates. |
| A.5.2 | Information security roles and responsibilities | Y | Partially | Single operator holds all roles; role descriptions not formally documented. |
| A.5.3 | Segregation of duties | Y | Not implemented | Single operator; mitigated by CI gates (`ci.yml`), pre-commit hook, public repo; must be recorded as residual risk. |
| A.5.4 | Management responsibilities | Y | Not implemented | No dated management commitment statement or policy approval. |
| A.5.5 | Contact with authorities | Y | Partially | Vulnerability disclosure in `SECURITY.md` section 9; app routes to PNP-ACG; NPC breach-reporting contact not registered. |
| A.5.6 | Contact with special interest groups | Y | Not implemented | No documented engagement with security/industry groups. |
| A.5.7 | Threat intelligence | Y | Partially | Product is scam intel (brand detection, indicator extraction, Vectorize search); threat model in `SECURITY.md` section 1. |
| A.5.8 | Information security in project management | Y | Partially | TDD and process gates in `AGENTS.md`; no project-level security risk records. |
| A.5.9 | Inventory of information and other associated assets | Y | Not implemented | No asset register; assets are identifiable from code (D1, Vectorize, R2, DOs, secrets, repo). |
| A.5.10 | Acceptable use of information and other associated assets | Y | Not implemented | Norms exist in `AGENTS.md`; no acceptable-use policy. |
| A.5.11 | Return of assets | N | N/A | Single operator, no staff turnover; assets are the operator's own. |
| A.5.12 | Classification of information | Y | Partially | `SECURITY.md` section 1 classifies assets informally; no formal scheme. |
| A.5.13 | Labelling of information | Y | Not implemented | No labelling scheme or guidance. |
| A.5.14 | Information transfer | Y | Partially | CORS allowlist, TLS, Rejects layer on vendor egress (`functions/api/analyze.js`, `src/worker/dojo.ts`); no transfer policy document. |
| A.5.15 | Access control | Y | Partially | Admin bearer auth, session tokens, CORS 403 enforcement; no access control policy or review cycle. |
| A.5.16 | Identity management | Y | Partially | HMAC session tokens for Dojo; operator identity via GitHub/Cloudflare; lifecycle not documented. |
| A.5.17 | Authentication information | Y | Partially | Secrets in Worker secrets, `.env.example` placeholders, rotation notes; MFA on operator accounts not documented. |
| A.5.18 | Access rights | Y | Partially | Privileged routes gated by `STORAGE_ADMIN_KEY`; no access-rights review cycle. |
| A.5.19 | Information security in supplier relationships | Y | Not implemented | No supplier risk assessments for Cloudflare, Cerebras, Groq, GitHub. |
| A.5.20 | Addressing information security within supplier agreements | Y | Not implemented | Processors disclosed in `components/PrivacyPolicyModal.tsx`; no DPAs/agreements on record. |
| A.5.21 | Managing information security in the ICT supply chain | Y | Partially | SHA-pinned actions enforced in CI, self-hosted OCR, dependency advisory tracking in `SECURITY.md` section 7. |
| A.5.22 | Monitoring, review and change management of supplier services | Y | Partially | Upstream advisory status tracked; no periodic supplier review records. |
| A.5.23 | Information security for use of cloud services | Y | Partially | Cloudflare shared-responsibility reliance; secrets in Worker secrets; no cloud security policy. |
| A.5.24 | Information security incident management planning and preparation | Y | Partially | Disclosure procedure in `SECURITY.md` section 9; no full incident management plan. |
| A.5.25 | Assessment and decision on information security events | Y | Not implemented | No event triage/classification process. |
| A.5.26 | Response to information security incidents | Y | Not implemented | No incident response runbook. |
| A.5.27 | Learning from information security incidents | Y | Not implemented | One documented lesson (plaintext-key incident in `.env.example`); no post-incident review process. |
| A.5.28 | Collection of evidence | Y | Not implemented | No evidence preservation procedure. |
| A.5.29 | Information security during disruption | Y | Not implemented | No business continuity plan. |
| A.5.30 | ICT readiness for business continuity | Y | Not implemented | No BIA/RTO/RPO; deterministic `fallbackVerdict` (`src/brands/brands.ts`) is an availability asset to cite. |
| A.5.31 | Legal, statutory, regulatory and contractual requirements | Y | Partially | RA 10173 recognized in `SECURITY.md` and privacy modal; MIT license; no legal register. |
| A.5.32 | Intellectual property rights | Y | Partially | MIT `LICENSE`, `CONTRIBUTING.md`; dependency licenses not catalogued. |
| A.5.33 | Protection of records | Y | Partially | D1 schema in `migrations/0001_init.sql`; hash dedup; Dojo 24h idle expiry; no retention schedule or deletion jobs. |
| A.5.34 | Privacy and protection of PII | Y | Partially | Rejects layer, phone-hash minimization, consent gate, RA 10173 disclosure; privacy contact is a placeholder, no DPA register. |
| A.5.35 | Independent review of information security | Y | Not implemented | `SECURITY.md` review was operator-authored; no independent reviewer. |
| A.5.36 | Compliance with policies, rules and standards | Y | Partially | CI + pre-commit enforce documented standards; no periodic compliance check. |
| A.5.37 | Documented operating procedures | Y | Partially | Deploy/storage/secrets procedures in `README.md` and `scripts/`; not formalized as controlled SOPs. |

## A.6 People controls

| ID | Control | App | Status | Justification / evidence |
| --- | --- | --- | --- | --- |
| A.6.1 | Screening | N | N/A | No employees; single-operator project. |
| A.6.2 | Terms and conditions of employment | N | N/A | No employment relationships. |
| A.6.3 | Information security awareness, education and training | Y | Partially | Operator practice evident in code and `SECURITY.md`; `AGENTS.md` briefs contributors; no training records. |
| A.6.4 | Disciplinary process | N | N/A | No employees. |
| A.6.5 | Responsibilities after termination or change of employment | Y | Partially | No employees, but contributor GitHub access revocation is undocumented. |
| A.6.6 | Confidentiality or non-disclosure agreements | Y | Partially | MIT license and `CONTRIBUTING.md`; supplier terms govern processors. |
| A.6.7 | Remote working | Y | Not implemented | Operator works remotely; no remote-working/device policy. |
| A.6.8 | Information security event reporting | Y | Partially | External disclosure channel in `SECURITY.md` section 9; no internal event reporting process. |

## A.7 Physical controls

| ID | Control | App | Status | Justification / evidence |
| --- | --- | --- | --- | --- |
| A.7.1 | Physical security perimeters | N | N/A | Cloudflare data centers (shared responsibility). |
| A.7.2 | Physical entry | N | N/A | Cloudflare data centers. |
| A.7.3 | Securing offices, rooms and facilities | N | N/A | Cloudflare data centers. |
| A.7.4 | Physical security monitoring | N | N/A | Cloudflare data centers. |
| A.7.5 | Protecting against physical and environmental threats | N | N/A | Cloudflare data centers. |
| A.7.6 | Working in secure areas | N | N/A | No secure areas in scope. |
| A.7.7 | Clear desk and clear screen | Y | Not implemented | No policy for the operator's device. |
| A.7.8 | Equipment siting and protection | Y | Not implemented | No device protection controls documented. |
| A.7.9 | Security of assets off-premises | Y | Not implemented | Operator laptop is the only asset; no off-premises policy. |
| A.7.10 | Storage media | Y | Not implemented | No removable-media policy. |
| A.7.11 | Supporting utilities | N | N/A | No on-premises infrastructure. |
| A.7.12 | Cabling security | N | N/A | No on-premises infrastructure. |
| A.7.13 | Equipment maintenance | Y | Not implemented | No maintenance procedure for operator devices. |
| A.7.14 | Secure disposal or re-use of equipment | Y | Not implemented | No device disposal procedure. |

## A.8 Technological controls

| ID | Control | App | Status | Justification / evidence |
| --- | --- | --- | --- | --- |
| A.8.1 | User end point devices | Y | Not implemented | No endpoint policy for the operator's device. |
| A.8.2 | Privileged access rights | Y | Partially | `STORAGE_ADMIN_KEY` constant-time bearer auth, fail-closed (`src/worker/dojo.ts`); no review cycle. |
| A.8.3 | Information access restriction | Y | Partially | CORS allowlist 403s, admin-only evidence routes, phone hashes excluded from public feed (`src/worker/storage.ts`). |
| A.8.4 | Access to source code | Y | Partially | Public MIT repo, `.env.example` placeholders, gitleaks full-history scan; branch protection not verified. |
| A.8.5 | Secure authentication | Y | Partially | HMAC-SHA256 expiring session tokens, constant-time comparison, fail-closed 503 (`src/worker/dojo.ts`); no MFA documentation. |
| A.8.6 | Capacity management | Y | Partially | Rate limits (5/20/10 per min), 50-turn cap, body/evidence caps (`src/worker/dojo.ts`, `functions/api/analyze.js`); no capacity plan. |
| A.8.7 | Protection against malware | Y | Not implemented | No endpoint malware protection documented for the operator device. |
| A.8.8 | Management of technical vulnerabilities | Y | Partially | Advisory tracking and `npm audit` guidance in `SECURITY.md` section 7; no SLA or register, SCA not in CI. |
| A.8.9 | Configuration management | Y | Partially | Versioned `wrangler.toml`, migrations, reproducible CI; no config baseline doc. |
| A.8.10 | Information deletion | Y | Partially | Dojo state expiry/delete, localStorage clearing (`App.tsx`); no D1/R2 deletion or retention procedures. |
| A.8.11 | Data masking | Y | **Implemented** | Rejects layer (`src/rejects/rejects.ts`): cards, PH mobiles, emails, API keys, PH IDs, OTPs, CVVs, names, DOBs; idempotent, 45 tests. |
| A.8.12 | Data leakage prevention | Y | **Implemented** | Rejects inbound/outbound/before-persistence; phones as SHA-256 hashes only; `sanitizeForStorage` invariant (`src/worker/storage.ts`). |
| A.8.13 | Information backup | Y | Not implemented | No operator-owned backups or restore tests; seed corpus and migrations make restoration feasible. |
| A.8.14 | Redundancy of information processing facilities | Y | Partially | Cloudflare platform redundancy; no documented availability architecture. |
| A.8.15 | Logging | Y | Partially | Cloudflare analytics; `console.error` for provider errors; no log config, retention, or audit log enablement. |
| A.8.16 | Monitoring activities | Y | Partially | Budget alerts suggested in `scripts/setup-storage.sh`; no monitoring plan or review cadence. |
| A.8.17 | Clock synchronization | N | N/A | Managed by Cloudflare platform; no self-managed clocks. |
| A.8.18 | Use of privileged utility programs | N | N/A | No OS-level privileged utilities in serverless scope; wrangler/dashboard is operator-only and key-protected. |
| A.8.19 | Installation of software on operational systems | Y | Partially | Lockfile-pinned deps via `npm ci`, versioned OCR assets; no operator-device software policy. |
| A.8.20 | Networks security | Y | Partially | Security headers and CSP (`public/_headers`, `src/worker/dojo.ts`), CORS allowlist, TLS; WAF rate limiting pending per `SECURITY.md`. |
| A.8.21 | Security of network services | Y | Partially | AI Gateway proxy, TLS channels, SSRF-guarded inspection (`src/worker/urlInspect.ts`); no network-services doc. |
| A.8.22 | Segregation of networks | N | N/A | No on-premises networks; serverless isolates, bindings, and CORS/`RATE_CHECK_KEY` boundary serve this function. |
| A.8.23 | Web filtering | Y | Not implemented | No web-hygiene/filtering controls for the operator device. |
| A.8.24 | Use of cryptography | Y | Partially | TLS, HMAC-SHA256 tokens, SHA-256 hashing, Web Crypto (`src/worker/dojo.ts`, `src/worker/storage.ts`); no crypto policy or rotation schedule. |
| A.8.25 | Secure development life cycle | Y | Partially | TDD, pre-commit gate, CI in `AGENTS.md`; no written SDLC policy. |
| A.8.26 | Application security requirements | Y | Partially | Threat model in `SECURITY.md` section 1; extensive input validation; no formal requirements baseline. |
| A.8.27 | Secure system architecture and engineering principles | Y | Partially | Defense-in-depth documented (client redaction is explicitly non-authoritative); no formal architecture principles doc. |
| A.8.28 | Secure coding | Y | Partially | Validation, allowlists, constant-time comparisons, no client secrets, error hygiene; no secure-coding guideline doc. |
| A.8.29 | Security testing in development and acceptance | Y | Partially | CI gitleaks + SHA-pin audit + 133 tests; SCA not in CI, no scheduled security testing. |
| A.8.30 | Outsourced development | N | N/A | No outsourced development; contributions are open-source. |
| A.8.31 | Separation of development, test and production environments | Y | Partially | Local dev vs prod, CI-on-PR/deploy-on-main, `.dev.vars` vs Worker secrets; no formal environment policy. |
| A.8.32 | Change management | Y | Not implemented | Change control in practice (PRs, CI, deploy-on-merge); no documented change management policy. |
| A.8.33 | Test information | Y | Partially | Synthetic test data only (`DEV_SAFE`/`DEV_SCAM`, fixtures); no production data in tests; rule not documented. |
| A.8.34 | Protection of information systems during audit testing | Y | Not implemented | No procedure protecting production during audits/assessments. |

---

## Control count reconciliation

| Theme | Total | In scope (Y) | Implemented | Partially | Not implemented | N/A |
| --- | --- | --- | --- | --- | --- | --- |
| A.5 Organizational | 37 | 36 | 0 | 21 | 15 | 1 |
| A.6 People | 8 | 5 | 0 | 4 | 1 | 3 |
| A.7 Physical | 14 | 6 | 0 | 0 | 6 | 8 |
| A.8 Technological | 34 | 30 | 2 | 22 | 6 | 4 |
| **Total** | **93** | **77** | **2** | **47** | **28** | **16** |

## Revision log

| Date | Change |
| --- | --- |
| 2026-08-06 | Initial SoA created from the Phase 1 gap analysis. |

*This document is the canonical register. Update it whenever a control changes status, and keep the summary table and the gap analysis in sync.*
