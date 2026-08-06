# Project Aghoy: ISO 27001:2022 Gap Analysis

**Date:** 2026-08-06
**Method:** Document and code review of the repository against ISO/IEC 27001:2022 Annex A (93 controls in 4 themes) plus the mandatory ISMS clauses 4-10.
**Status legend:**
- **IMPLEMENTED** - the control operates fully in this project, with evidence.
- **PARTIAL** - meaningful technical or documented implementation exists, but a registrar would ask for more (missing documentation, evidence, or a sub-component).
- **GAP** - no or effectively no implementation or evidence.
- **N/A** - not applicable for this organization, with justification (see the N/A register at the end).

Overall posture: 2 implemented, 47 partial, 28 gaps, 16 N/A out of 93 controls. The technical control base is strong; the management-system layer is the dominant gap.

---

## 1. Clause 4-10 readiness (the management system itself)

ISO 27001 certification is granted for the ISMS, not for individual controls. This quick view shows where the mandatory clauses stand before any registrar engagement.

| Clause | Requirement | Status | Evidence / gap |
| --- | --- | --- | --- |
| 4.1 / 4.2 | Context of the organization and interested parties | GAP | No documented context analysis. Implicit context exists: non-profit, Philippine scam-detection mission, RA 10173 (Data Privacy Act) environment. `README.md` states mission; no formal interested-party analysis. |
| 4.3 | ISMS scope | GAP | No scope statement. Suggested scope: the Project Aghoy service (SPA, Pages Functions, Dojo Worker, D1/R2/Vectorize, CI/CD) operated by the single operator. |
| 4.4 | ISMS | GAP | No ISMS established as a managed system. This compliance program is the first artifact. |
| 5.1 / 5.2 | Leadership and the information security policy | GAP | No top-level policy statement, no management commitment record. `SECURITY.md` functions as a de facto security architecture document. |
| 5.3 | Roles and responsibilities | PARTIAL | Roles are implicit: single operator. `SECURITY.md` and `AGENTS.md` describe responsibilities. No formal role descriptions or RACI. |
| 6.1 | Risk assessment and treatment | GAP | **No risk register and no risk treatment plan exist.** `SECURITY.md` section 1 has a threat model (attackers, assets at risk), which is a strong seed for the risk assessment, but it is not a risk register. This is the single biggest management gap. |
| 6.2 | Security objectives | GAP | No documented objectives with target dates (e.g. "close top-10 gaps by Q1", "complete first internal audit by Q2"). |
| 7.1 / 7.2 | Resources and competence | PARTIAL | Resources are the operator's time and the Cloudflare free tier. Competence is demonstrated by the codebase quality but not recorded (no CV/skill matrix required for certification, but a competence record helps). |
| 7.3 | Awareness | PARTIAL | Operator is security-literate; `AGENTS.md` encodes standards for contributors. No awareness program or training records. |
| 7.4 | Communication | GAP | No documented internal/external communication plan for the ISMS (e.g. who reports incidents, how the operator learns about them). |
| 7.5 | Documented information | PARTIAL | Strong documentation culture (`AGENTS.md`, `SECURITY.md`, `README.md`, this compliance set). No document control process (versioning, approval, review dates) for policies. |
| 8.1 | Operational planning and control | PARTIAL | CI/CD, pre-commit gate, and scripts operationalize quality and deployment. No operational planning tied to the risk treatment plan. |
| 9.1 | Monitoring, measurement, analysis, evaluation | PARTIAL | Cloudflare analytics exist; `scripts/setup-storage.sh` recommends budget alerts. No defined security metrics or monitoring criteria. |
| 9.2 | Internal audit | GAP | **No internal audit program, no audit plan, no audit report, no findings log.** Required before any registrar will schedule Stage 1. |
| 9.3 | Management review | GAP | **No management review records or minutes.** Must review audit results, risk treatment status, incidents, and improvements at planned intervals. |
| 10.1 / 10.2 | Nonconformity and continual improvement | GAP | No corrective-action log or improvement process. One instance of learning is documented (the plaintext-key incident and rotation guidance in `.env.example`), but not as a process. |

---

## 2. Theme A.5 - Organizational controls (37; 36 in scope, 1 N/A)

| ID | Control | Status | Evidence / current implementation | Gap / what is needed |
| --- | --- | --- | --- | --- |
| A.5.1 | Policies for information security | PARTIAL | `SECURITY.md` is a thorough security architecture review; `AGENTS.md` documents engineering standards ("secure by default", "evidence over hope"). | A formally approved top-level Information Security Policy with scope, objectives, and review cadence; policy approval and review dates; the policy set in `docs/compliance/policies/`. |
| A.5.2 | Information security roles and responsibilities | PARTIAL | Roles implied by the single-operator structure; `SECURITY.md` documents who runs the security-relevant systems. | Formal role descriptions (InfoSec owner, AI governance owner, internal auditor) and responsibilities; see `README.md` section 4. |
| A.5.3 | Segregation of duties | GAP | Single operator means no segregation. Mitigating controls exist: CI enforces SHA-pinned actions, gitleaks, typecheck, tests, build (`.github/workflows/ci.yml`); pre-commit gate (`scripts/pre-commit.sh`); public open-source repo. | Document the compensating controls, record A.5.3 as a residual risk in the risk register, and state the limitation honestly in the internal audit report. |
| A.5.4 | Management responsibilities | GAP | No formal management commitment. `README.md` states the mission and non-profit status. | A dated management commitment statement and the top-level policy signed by the operator as top management. |
| A.5.5 | Contact with authorities | PARTIAL | `SECURITY.md` defines a vulnerability disclosure process; the app routes victims to PNP-ACG and government channels (`src/support/supportDatabase.ts`). | A documented authority contact register, including the National Privacy Commission (NPC) for PH data-breach reporting under RA 10173 section 20, and the CERT/CSIRT relevant to Cloudflare and the registrars. |
| A.5.6 | Contact with special interest groups | GAP | No formal memberships or documented engagement. | Join or record engagement with security communities (OWASP, Philippine CERT communities, scam-reporting coalitions) and note the Open Source community on GitHub. |
| A.5.7 | Threat intelligence | PARTIAL | The product *is* scam threat intelligence: 48-brand detection (`src/brands/brands.ts`), indicator extraction (`src/worker/indicators.ts`), Vectorize similar-scam search, and a threat model in `SECURITY.md` section 1. | Document the threat-intel sources the project consumes (Cloudflare threat intel, scam corpus, telecom advisories) and how they feed the risk assessment. |
| A.5.8 | Information security in project management | PARTIAL | `AGENTS.md` process section: TDD, one-change-per-commit, pre-commit gate; `README.md` roadmap. | Add security checkpoints (threat modeling, security review) to the project process and record risks at project level. |
| A.5.9 | Inventory of information and other associated assets | GAP | Assets are identifiable from code: D1 (`project-aghoy-db`, reports/indicators/blacklist), Vectorize `scam-index`, R2 `project-aghoy-evidence` (dormant), Durable Objects (DojoSession, RateLimiter), Worker secrets, source repo, docs, the operator's device. No register exists. | Build an asset register with owner, classification, and location for each asset. Effort: low. |
| A.5.10 | Acceptable use of information and other associated assets | GAP | `AGENTS.md` encodes norms (no secrets, secure-by-default) but there is no acceptable-use policy. | Short acceptable-use policy for the operator, contributors, and the public service (what the API and storage endpoints may be used for). |
| A.5.11 | Return of assets | N/A | Single operator owns all assets; no staff turnover. | Justification: no personnel; GitHub contributor access is the only third-party asset exposure and is handled under A.5.18/A.6.5. |
| A.5.12 | Classification of information | PARTIAL | `SECURITY.md` section 1 implicitly classifies assets: user PII, AI spend, D1/Vectorize data, admin credentials, R2 evidence. | Formal classification scheme (e.g. Public/Internal/Confidential/Restricted) and an asset-class mapping. |
| A.5.13 | Labelling of information | GAP | No labelling scheme. | Simple labelling guidance for docs and data (e.g. mark `SECURITY.md` artifacts, policy documents, and the risk register). Low effort. |
| A.5.14 | Information transfer | PARTIAL | CORS origin allowlist (`functions/_middleware.js`, `src/worker/dojo.ts`), TLS via Cloudflare, the Rejects layer applied before any vendor egress (`functions/api/analyze.js`, `src/worker/dojo.ts`), provider responses scrubbed outbound. | A documented information-transfer policy covering the browser-to-API, API-to-AI-Gateway, and operator-to-cloud channels, plus the AI provider data flows disclosed in `components/PrivacyPolicyModal.tsx`. |
| A.5.15 | Access control | PARTIAL | `STORAGE_ADMIN_KEY` bearer auth on privileged routes, HMAC-signed session tokens for the Dojo, CORS allowlist, fail-closed authorization (`src/worker/dojo.ts`). | Formal access control policy and periodic access-rights review; documented approval/revocation for the admin key. |
| A.5.16 | Identity management | PARTIAL | Dojo identities are token-based (`/dojo/session` mints HMAC tokens, `src/worker/dojo.ts`); admin identity is the bearer key; operator identity is the GitHub/Cloudflare account. | Identity lifecycle documentation: unique identities for the operator (GitHub, Cloudflare, npm) and how tokens map to game sessions. |
| A.5.17 | Authentication information | PARTIAL | Secrets live in Worker secrets (`wrangler secret put` per `README.md`), `.env.example` has placeholders only, `.dev.vars` is gitignored, and `.env.example` documents key rotation. | Document MFA on operator accounts (GitHub, Cloudflare, provider dashboards) and a password/key management standard. |
| A.5.18 | Access rights | PARTIAL | Privileged routes are gated by the admin key; evidence routes are admin-only; read routes are public. | Access-rights review cycle (quarterly, recorded) and documented revocation of contributor/operator access when no longer needed. |
| A.5.19 | Information security in supplier relationships | GAP | No supplier risk assessment. Key suppliers: Cloudflare (Pages, Workers, DO, D1, R2, Vectorize, AI Gateway), Cerebras, Groq, GitHub (hosting/CI), npm ecosystem. | Supplier risk assessments. Cloudflare publishes ISO 27001 and SOC 2 reports; GitHub publishes SOC reports. Record these plus the AI providers' security posture. |
| A.5.20 | Addressing information security within supplier agreements | GAP | `components/PrivacyPolicyModal.tsx` discloses processors and `SECURITY.md` lists them, but there are no signed agreements or DPAs on record. | Collect Cloudflare's DPA (covers Pages/Workers/AI Gateway), provider terms, and record data-processing commitments in a supplier register. |
| A.5.21 | Managing information security in the ICT supply chain | PARTIAL | Actions are SHA-pinned and CI *enforces* it (`ci.yml` uses `zgosalvez/github-actions-ensure-sha-pinned-actions`); OCR assets self-hosted under `public/ocr/`; `SECURITY.md` section 7 tracks known dependency advisories and mandates `npm audit` before merges. | Formal supply-chain risk management: dependency allowlist, SBOM generation, and a documented review cadence for the pinning policy. |
| A.5.22 | Monitoring, review and change management of supplier services | PARTIAL | `SECURITY.md` tracks upstream advisory status for the dev toolchain; deploy workflow pins wrangler behavior via the local install. | Periodic (annual) supplier review records: Cloudflare plan/limits, provider quotas, AI Gateway spend, and any provider policy changes. |
| A.5.23 | Information security for use of cloud services | PARTIAL | Cloudflare shared-responsibility model implicitly relied on (serverless, managed D1/Vectorize/R2); secrets in Worker secrets; fail-closed config. | A cloud security policy: acceptable Cloudflare usage, configuration review of `wrangler.toml`, budget alerts (suggested in `scripts/setup-storage.sh`), and reliance on Cloudflare's certifications. |
| A.5.24 | Information security incident management planning and preparation | PARTIAL | `SECURITY.md` section 9 defines a vulnerability disclosure procedure (private report, 72-hour acknowledgment, coordinated fix). | Full incident management plan: roles, severity levels, communication, containment/recovery steps. The disclosure policy is preparation; the plan is the missing piece. |
| A.5.25 | Assessment and decision on information security events | GAP | No event triage/classification process. | Define what counts as an information security event (rate-limit abuse, quota exhaustion, gitleaks hit, provider incident, disclosure report) and a triage decision tree. |
| A.5.26 | Response to information security incidents | GAP | No incident response runbook. | Write a runbook: detect (Cloudflare analytics, logs, disclosure email), assess, contain, eradicate, recover, communicate. Include the plaintext-key incident from `.env.example` as a worked example. |
| A.5.27 | Learning from information security incidents | GAP | One documented lesson: `.env.example` records the past plaintext-keys incident and its rotation remedy. No process. | Post-incident review template and a lessons-learned log; record the plaintext-key event as the first entry. |
| A.5.28 | Collection of evidence | GAP | No forensic/evidence procedure. (Note: the app's R2 `evidence` store is scam evidence, not incident evidence.) | Procedure for preserving logs, Cloudflare audit logs, and provider traces when an incident occurs. |
| A.5.29 | Information security during disruption | GAP | No business continuity plan. | BCP for the service: what happens if the operator is unavailable, if Cloudflare has an outage, if AI Gateway/quota fails (the deterministic `fallbackVerdict` in `src/brands/brands.ts` is a genuine resilience feature to cite). |
| A.5.30 | ICT readiness for business continuity | GAP | No BIA, RTO, or RPO defined. | Business impact analysis with recovery objectives; assess D1/Vectorize data loss tolerance and the manual reseed path (`POST /seed/vectorize`). |
| A.5.31 | Legal, statutory, regulatory and contractual requirements | PARTIAL | RA 10173 recognized in `SECURITY.md` and `components/PrivacyPolicyModal.tsx` (NPC rights, privacy.gov.ph); MIT license on file (`LICENSE`). | A legal/regulatory register: RA 10173, MIT license obligations, Cloudflare Acceptable Use, AI provider terms, and any future partnership obligations. |
| A.5.32 | Intellectual property rights | PARTIAL | MIT `LICENSE`, `CONTRIBUTING.md` for contributors. | IPR policy: ownership of contributions, third-party licenses in dependencies (`package.json`), and the self-hosted OCR traineddata license. |
| A.5.33 | Protection of records | PARTIAL | `migrations/0001_init.sql` defines the D1 schema (reports, indicators, blacklist); records are hash-deduplicated and sanitized; Dojo state expires after 24h idle (`src/worker/dojo.ts`). | Records retention schedule: how long reports/indicators are kept, log retention, and destruction/export procedures. No retention or deletion jobs exist today. |
| A.5.34 | Privacy and protection of PII | PARTIAL | This is the project's strongest area: Rejects layer (inbound/outbound/before-persistence), phone numbers stored only as SHA-256 hashes, client consent gate, RA 10173 rights disclosure, privacy contact. | Complete the operational side: real privacy contact (currently a placeholder), a DPA/processing register for Cloudflare/Cerebras/Groq, a formal privacy impact assessment, and a data-subject-request procedure. |
| A.5.35 | Independent review of information security | GAP | No independent review. `SECURITY.md` records a 2026-07-07 review, but it was authored by the same operator. | For a one-person org: contract or arrange an independent review (peer reviewer, security volunteer, or the registrar at audit time) and record it. |
| A.5.36 | Compliance with policies, rules and standards for information security | PARTIAL | CI + pre-commit gate *enforce* the documented standards (typecheck, tests, build, SHA pins, secret scan). | A compliance review: a periodic check that the repo still matches the policy set, recorded in management review. |
| A.5.37 | Documented operating procedures | PARTIAL | Operations are documented: `README.md` (deploy, storage setup, secrets), `AGENTS.md`, `scripts/` (idempotent provisioning), `SECURITY.md`. | Formalize the key SOPs (deploy, secret rotation, D1 migration, Vectorize reseed, incident response) as controlled documents with review dates. |

**A.5 N/A register:** A.5.11 (return of assets) - single operator, no staff turnover; assets are the operator's own. Justification recorded in the SoA.

---

## 3. Theme A.6 - People controls (8; 5 in scope, 3 N/A)

| ID | Control | Status | Evidence / current implementation | Gap / what is needed |
| --- | --- | --- | --- | --- |
| A.6.1 | Screening | N/A | No employees are hired. | Justification: single-operator non-profit; contributors to the public repo are governed by `CONTRIBUTING.md`, not employment. If staff are ever hired, screening is required. |
| A.6.2 | Terms and conditions of employment | N/A | No employees. | Justification: no employment relationship exists. |
| A.6.3 | Information security awareness, education and training | PARTIAL | The operator demonstrably applies security practice (the codebase and `SECURITY.md` prove it); `AGENTS.md` briefs every contributor on security standards. | A training log: dated sessions (or self-study) covering the ISMS, the Rejects layer, incident response, and RA 10173; annual refresher. |
| A.6.4 | Disciplinary process | N/A | No employees. | Justification: no staff. For contributors, enforcement is GitHub governance per `CONTRIBUTING.md`. |
| A.6.5 | Responsibilities after termination or change of employment | PARTIAL | No employees, but third parties (contributors) hold GitHub access. | Document the offboarding step: revoke GitHub/collaborator access, rotate keys if a contributor ever held secrets, record the action. |
| A.6.6 | Confidentiality or non-disclosure agreements | PARTIAL | The project is MIT open source; `LICENSE` and `CONTRIBUTING.md` govern contribution terms. | Record that supplier confidentiality is governed by supplier terms (Cloudflare DPA, provider terms) and consider a contributor IP/confidentiality note in `CONTRIBUTING.md`. |
| A.6.7 | Remote working | GAP | The operator works remotely by the nature of the project; no policy exists. | Remote-working policy: device requirements (encryption, lock screen, OS updates), safe Wi-Fi, handling of `wrangler secret` values on the device, and the clear-screen rule (A.7.7). |
| A.6.8 | Information security event reporting | PARTIAL | External reporting exists: `SECURITY.md` section 9 (private disclosure, 72h ack). | Internal event reporting: the operator's own process to record events from Cloudflare alerts, gitleaks findings, provider incidents, and the disclosure mailbox into the incident log. |

**A.6 N/A register:** A.6.1, A.6.2, A.6.4 (see above).

---

## 4. Theme A.7 - Physical controls (14; 6 in scope, 8 N/A)

Physical security for the *service* is delegated to Cloudflare under the shared responsibility model (Cloudflare operates ISO 27001-certified data centers with physical perimeters, entry control, monitoring, environmental protection, and cabling). The in-scope controls concern the **operator's device and handling of assets off-premises**.

| ID | Control | Status | Evidence / current implementation | Gap / what is needed |
| --- | --- | --- | --- | --- |
| A.7.7 | Clear desk and clear screen | GAP | Nothing documented. | Policy for the operator's device: lock screen on departure, no printed secrets/keys left visible, no credential notes. Fold into the remote-working policy (A.6.7). |
| A.7.8 | Equipment siting and protection | GAP | No documented control for the operator's devices. | Device protection: disk encryption, screen lock timeout, OS/security updates, physical custody of the machine that holds `wrangler` sessions. |
| A.7.9 | Security of assets off-premises | GAP | The operator's laptop is the only asset that leaves a residence; no policy. | Off-premises asset policy: device encryption, transport precautions, and prohibition on leaving the device unattended in public. |
| A.7.10 | Storage media | GAP | No removable-media policy. | Policy: no secrets or raw PII on USB sticks or SD cards; wipe/destroy media before disposal; never carry the admin key on portable media. |
| A.7.13 | Equipment maintenance | GAP | No maintenance procedure for operator devices. | Document maintenance: OS/driver updates, hardware failure handling, and the security checks after any repair. |
| A.7.14 | Secure disposal or re-use of equipment | GAP | No disposal procedure. | Procedure: full-disk encryption before re-use or trade-in, secure erase, and destruction of any device that stored secrets. |

**A.7 N/A register** (8): A.7.1 (physical security perimeters), A.7.2 (physical entry), A.7.3 (securing offices), A.7.4 (physical security monitoring), A.7.5 (protection against physical and environmental threats), A.7.6 (working in secure areas), A.7.11 (supporting utilities), A.7.12 (cabling security). Justification: the service runs entirely on Cloudflare-managed infrastructure; these controls are satisfied by Cloudflare's data center certifications under the shared responsibility model. None of these N/A entries reduce the operator's obligation for the six device-level controls above.

---

## 5. Theme A.8 - Technological controls (34; 30 in scope, 4 N/A)

This theme contains the project's genuine strengths and the clearest technical evidence.

| ID | Control | Status | Evidence / current implementation | Gap / what is needed |
| --- | --- | --- | --- | --- |
| A.8.1 | User end point devices | GAP | No endpoint policy for the operator's device(s). | Endpoint standard: disk encryption, lock screen, OS patches, malware protection, and the browser used for the Cloudflare/provider dashboards. See A.6.7. |
| A.8.2 | Privileged access rights | PARTIAL | `STORAGE_ADMIN_KEY` bearer auth on `/indicators/verify`, evidence routes, `/seed/vectorize` with constant-time SHA-256 comparison and fail-closed 503 (`src/worker/dojo.ts`); secrets never in the bundle. | Document least-privilege rules, review privileged rights periodically, and define what happens to the admin key on rotation (rotation steps exist in `.env.example`). |
| A.8.3 | Information access restriction | PARTIAL | CORS allowlist with 403 for disallowed origins (`functions/_middleware.js`, `src/worker/dojo.ts`), admin-only evidence routes, phone-hash rows excluded from the public indicator feed (`src/worker/storage.ts` `listIndicators`). | Formal authorization rules (who may read/write what) and a review of the public read surfaces (`/indicators`, `/evidence`) against the classification scheme. |
| A.8.4 | Access to source code | PARTIAL | Repository is public under MIT; `.env.example` ships placeholders only; gitleaks scans full history; `.dev.vars` is gitignored. | Document repo permission model (who can push/merge, branch protection on `main`) and verify protected-branch settings are enabled on GitHub. |
| A.8.5 | Secure authentication | PARTIAL | Dojo sessions use HMAC-SHA256 signed expiring tokens (24h TTL, fail-closed 503 when `SESSION_SIGNING_KEY` is unset); admin auth is constant-time; `RATE_CHECK_KEY` guards the rate oracle. | MFA on operator accounts (GitHub, Cloudflare, provider dashboards) and a documented authentication standard. Token replay/lifetime limits are handled; document the reasoning. |
| A.8.6 | Capacity management | PARTIAL | Capacity is actively bounded: per-IP rate limits (5/min analyze, 20/min reports, 10/min inspect) via the persisted `RateLimiter` DO, 50-turn per-session cap, 100KB body caps, 10MB evidence cap, 25s fetch timeouts (`src/worker/dojo.ts`, `functions/api/analyze.js`). | Capacity planning records: expected usage, Cloudflare free-tier limits (D1 rows, Vectorize queries, R2 if enabled), and review of limits against growth. |
| A.8.7 | Protection against malware | GAP | No malware protection documented for the operator's device (serverless platform has no host OS to protect). | Endpoint malware protection and download hygiene on the operator device; `npm ci` from the lockfile mitigates dependency malware but record the practice. |
| A.8.8 | Management of technical vulnerabilities | PARTIAL | `SECURITY.md` section 7 documents known advisories (dev toolchain tracked upstream, runtime deps clean) and mandates `npm audit` before merging bumps; gitleaks catches secrets. | A vulnerability management procedure with an SLA (e.g. critical in 7 days, high in 30) and a tracking register; consider adding `npm audit` to CI. |
| A.8.9 | Configuration management | PARTIAL | `wrangler.toml` is versioned; D1 migrations are versioned (`migrations/0001_init.sql`); CI builds from a clean install (`npm ci`); deploy is reproducible via workflow. | A configuration baseline document and a review of Cloudflare dashboard settings (WAF, rate limiting, headers) that are not yet codified. |
| A.8.10 | Information deletion | PARTIAL | Dojo session state is deleted on idle-expiry and explicitly cleared when expired (`src/worker/dojo.ts` `isExpired`/`delete`); localStorage history is clearable in-app (`App.tsx`); nothing raw is ever stored to delete. | Data retention/deletion procedures for D1 reports/indicators and R2 evidence (no cleanup job exists today), plus a documented deletion-on-request path (see A.5.34). |
| A.8.11 | Data masking | **IMPLEMENTED** | The Rejects layer (`src/rejects/rejects.ts`): Luhn-validated cards, PH mobiles, international phones, emails, API keys, PH government IDs (SSS/TIN/PhilHealth/LTO/passport/Pag-IBIG/UMID), OTPs, CVVs, names, DOBs; idempotent; 45 tests including idempotency (`src/rejects/rejects.test.ts`). | No material gap. Optionally document the masking policy and placeholder taxonomy as a controlled document. |
| A.8.12 | Data leakage prevention | **IMPLEMENTED** | Rejects runs inbound and outbound on `functions/api/analyze.js` and `src/worker/dojo.ts`, before Durable Object storage, and before every persistence via `sanitizeForStorage` (`src/worker/storage.ts`); phones persist only as SHA-256 hashes; client redaction is defense-in-depth only; Vectorize is scrubbed at seed (`seedVectorize`). | No material gap. Document the DLP design (see `SECURITY.md` section 2) as the control evidence. |
| A.8.13 | Information backup | GAP | No backup/restore procedure or test evidence. Cloudflare provides managed redundancy for D1/R2/Vectorize, but there is no operator-owned backup and no restore test. | Backup policy: export path for the Vectorize corpus (`data/scam-corpus.jsonl` is the seed source) and D1 indicator data, restore procedure, and a tested restore record. |
| A.8.14 | Redundancy of information processing facilities | PARTIAL | Platform-level redundancy: Cloudflare's global edge, Durable Objects, managed D1/R2/Vectorize. No operator documentation. | Document the availability architecture and single points of failure (free-tier limits, account-level outages, provider quota). Feeds the BCP (A.5.29/30). |
| A.8.15 | Logging | PARTIAL | Cloudflare dashboards provide request/analytics logs; provider errors are logged server-side via `console.error` (`functions/api/analyze.js` `readProviderContent`); no structured application logging. | Define what is logged (requests, admin actions, rate-limit events, deploy events), retention, and access. Cloudflare audit logs should be enabled for the account. |
| A.8.16 | Monitoring activities | PARTIAL | `scripts/setup-storage.sh` recommends budget alerts; rate limiting surfaces abuse; no monitoring procedure. | Monitoring plan: Cloudflare analytics review cadence, quota/spend alerts (AI Gateway), uptime checks, and gitleaks/deploy success monitoring. |
| A.8.17 | Clock synchronization | N/A | Serverless platform: Cloudflare manages NTP for its infrastructure; token `exp` checks use the platform clock. | Justification: no self-managed clocks exist in the scope; Cloudflare's managed infrastructure provides time sync. |
| A.8.18 | Use of privileged utility programs | N/A | No OS-level privileged utilities in the serverless runtime. The nearest equivalent (wrangler deploy, dashboard admin) is operator-only and key-protected. | Justification: platform has no privileged utility programs for the operator to control. Document `wrangler` usage as the privileged admin surface. |
| A.8.19 | Installation of software on operational systems | PARTIAL | No OS installation in scope (serverless). Runtime deps are pinned via `package-lock.json` and `npm ci`; OCR assets are versioned in `public/ocr/`. | Document the operator-device software policy (only trusted software, keep current) and the dependency-add process (review, `npm audit`). |
| A.8.20 | Networks security | PARTIAL | Security headers on Pages (`public/_headers`: HSTS, CSP, nosniff, X-Frame-Options, Permissions-Policy, COOP/CORP), Worker headers (`src/worker/dojo.ts` `corsHeaders`), CORS allowlist, TLS via Cloudflare. | Document the network controls and close the known gap: Cloudflare WAF rate limiting for `/api/analyze` is dashboard-pending (per `SECURITY.md` section 4 and `README.md`). |
| A.8.21 | Security of network services | PARTIAL | Only TLS-encrypted channels; AI Gateway proxies provider calls; SSRF-guarded URL inspection (`src/worker/urlInspect.ts`). | Document the network services in use (AI Gateway, provider APIs, DoH for URL inspection) and the security controls on each. |
| A.8.22 | Segregation of networks | N/A | No on-premises networks. Serverless isolates, bindings, and the CORS allowlist serve the segregation function; the Pages-to-Worker rate channel is authenticated by the shared `RATE_CHECK_KEY`. | Justification: no physical or virtual networks to segregate in scope; document the boundary controls as the compensating segregation. |
| A.8.23 | Web filtering | GAP | No web-filtering/restriction controls on the operator's device. The app's SSRF-guarded inspector is a user-facing feature, not a filtering control. | Operator-device web-hygiene standard (block known-bad sites, phishing awareness) documented in the remote-working policy. |
| A.8.24 | Use of cryptography | PARTIAL | TLS everywhere via Cloudflare; HMAC-SHA256 session tokens (`src/worker/dojo.ts`); SHA-256 for content dedup, phone hashing, and constant-time auth comparison; Web Crypto only. | A cryptography policy: approved algorithms, key lengths, key management (secrets), and rotation schedule (`SESSION_SIGNING_KEY`, `STORAGE_ADMIN_KEY`, `RATE_CHECK_KEY`, provider keys). |
| A.8.25 | Secure development life cycle | PARTIAL | `AGENTS.md`: TDD, evidence-over-hope, review-before-write, one-change-per-commit, secure-by-default; pre-commit gate; CI. | A written SDLC policy: security requirements, threat modeling at design time, code review, and testing gates. The practice exists; the policy document does not. |
| A.8.26 | Application security requirements | PARTIAL | `SECURITY.md` section 1 is a threat model with attackers and assets; validation rules are extensive (`functions/api/analyze.js`, `src/worker/dojo.ts`). | A security requirements baseline for the application and the statement of what the app must protect (PII, quota, blacklist integrity). |
| A.8.27 | Secure system architecture and engineering principles | PARTIAL | Defense-in-depth is real and documented: client redaction is explicitly defense-in-depth only, the Rejects layer is server-authoritative, fail-closed patterns, `sanitizeForStorage` as the persistence invariant. | Formalize the architecture principles (see `SECURITY.md`) into the SDLC policy with review points. |
| A.8.28 | Secure coding | PARTIAL | Input validation, allowlists, constant-time comparisons, no secrets in the client bundle, no `X-Forwarded-For` trust, error message hygiene, timeouts. | A secure-coding guideline document codifying these patterns (the code is exemplary; the standard is not yet written). |
| A.8.29 | Security testing in development and acceptance | PARTIAL | CI: gitleaks full-history secret scan, SHA-pin enforcement, typecheck, 133 Vitest tests, build; pre-commit hook. | Add SCA (`npm audit`) to CI and schedule periodic security testing (dependency review, manual security review of changes; a full pen test is optional for this scale). |
| A.8.30 | Outsourced development | N/A | All development is by the operator; contributors to the open-source repo are not outsourced developers. | Justification: no outsourced development. If contract development is ever used, supplier controls (A.5.19-23) and IPR terms apply. |
| A.8.31 | Separation of development, test and production environments | PARTIAL | Local dev (`vite`, port 3000) is separate from production (Pages/Worker); CI runs on PRs, deploy runs only on `main` (`.github/workflows/`); `.dev.vars` vs Worker secrets; `DEV_SAFE`/`DEV_SCAM` dev responses are isolated in `services/aiService.ts`. | Document the environment separation and the promotion rules; confirm no production keys reach dev (gitleaks + `.dev.vars` gitignore cover this). |
| A.8.32 | Change management | GAP | Change control exists in practice (PRs, CI, pre-commit, deploy on merge, one-change-per-commit) but there is no change management policy with approval, testing, and rollback for infrastructure/config changes (e.g. `wrangler.toml`, secrets, migrations). | Change management policy: record changes, approve, test, back out plan. The D1 migration path and `scripts/setup-storage.sh` are the natural templates. |
| A.8.33 | Test information | PARTIAL | Tests use synthetic data (`DEV_SAFE`/`DEV_SCAM`, seeded corpus, fixture messages); no production PII in tests; migration applied against real D1 is the only production-adjacent data touchpoint. | Document the rule: no production data in test environments, and protect the seed corpus from PII (the Rejects layer scrubs at seed already). |
| A.8.34 | Protection of information systems during audit testing | GAP | No documented procedure protecting production during audits or assessments. | Procedure: audits run against copies or read-only surfaces; `STORAGE_ADMIN_KEY` gates all destructive/admin operations; record any audit-testing activities. |

**A.8 N/A register** (4): A.8.17 (clock sync), A.8.18 (privileged utilities), A.8.22 (network segregation), A.8.30 (outsourced development). See justifications in the rows above and in the SoA.

---

## 6. N/A register summary (16)

| ID | Control | Why N/A |
| --- | --- | --- |
| A.5.11 | Return of assets | Single operator; no staff turnover. |
| A.6.1 | Screening | No employees. |
| A.6.2 | Terms and conditions of employment | No employees. |
| A.6.4 | Disciplinary process | No employees. |
| A.7.1 | Physical security perimeters | Cloudflare data centers (shared responsibility). |
| A.7.2 | Physical entry | Cloudflare data centers. |
| A.7.3 | Securing offices, rooms and facilities | Cloudflare data centers. |
| A.7.4 | Physical security monitoring | Cloudflare data centers. |
| A.7.5 | Protection against physical and environmental threats | Cloudflare data centers. |
| A.7.6 | Working in secure areas | No secure areas in scope. |
| A.7.11 | Supporting utilities | No on-premises infrastructure. |
| A.7.12 | Cabling security | No on-premises infrastructure. |
| A.8.17 | Clock synchronization | Managed by Cloudflare platform. |
| A.8.18 | Use of privileged utility programs | No OS-level utilities in serverless scope. |
| A.8.22 | Segregation of networks | No on-premises networks; isolates/allowlists substitute. |
| A.8.30 | Outsourced development | No outsourced development. |

---

## 7. Top 10 gaps to close

Ranked by certification impact and effort. Estimates are for a single operator working part time.

| # | Gap | Related controls / clauses | Why it matters | Effort estimate |
| --- | --- | --- | --- | --- |
| 1 | **Risk assessment register and risk treatment plan** | Clause 6.1; A.5.1, A.8.8 | The registrar's first ask. Seed it from the threat model in `SECURITY.md` section 1. No risk register, no ISMS. | 8-16 hours (initial), then ongoing |
| 2 | **Internal audit program with evidence** | Clause 9.2; A.5.35 | A real audit report (plan, checklist, findings, corrective actions) is required before Stage 1. Cannot be faked for a one-person org; record the limitation. | 8-16 hours for the first cycle |
| 3 | **Management review records** | Clause 9.3 | Dated minutes reviewing audit results, risk status, incidents, and improvements. Needed every review cycle, not once. | 4 hours per cycle + prep |
| 4 | **Incident response runbook** | A.5.24, A.5.25, A.5.26, A.5.28; A.6.8 | No runbook exists. The disclosure policy in `SECURITY.md` section 9 is the seed. Include the plaintext-key event from `.env.example` as a worked example. | 6-10 hours |
| 5 | **Business continuity and ICT readiness** | A.5.29, A.5.30 | No BCP, BIA, RTO, or RPO. Cite the deterministic `fallbackVerdict` (`src/brands/brands.ts`) and provider redundancy as strengths; define what loss is acceptable for D1/Vectorize. | 8-16 hours |
| 6 | **Asset inventory** | A.5.9, A.5.10, A.5.12, A.5.13 | Everything is identifiable from code but nothing is registered. Build the register with owners and classification. | 4-8 hours |
| 7 | **Change management policy** | A.8.32 | Practice exists (PRs, CI, deploy-on-merge) but there is no documented policy with approval, testing, and rollback for infra/config changes. | 4-8 hours |
| 8 | **Vulnerability management SLA and register** | A.8.8, A.8.29 | `SECURITY.md` tracks advisories but there is no SLA or register, and `npm audit` is not in CI. Add CI SCA and document the response SLA. | 4-8 hours |
| 9 | **Backup and restore procedure with test evidence** | A.8.13, A.8.10 | No operator-owned backups or restore tests for D1/Vectorize. The seed corpus (`data/scam-corpus.jsonl`) and migration files make restoration feasible; prove it. | 4-8 hours |
| 10 | **Operator-device and privacy operational controls** | A.6.7, A.7.7-A.7.14, A.8.1, A.8.7, A.8.23; A.5.34 | Six GAP physical controls plus remote-working, endpoint, and privacy-operational gaps (real privacy contact, DPA register, data-subject request path) block several SoA rows at once. | 8-16 hours |

Also tracked, just outside the top 10: supplier security assessments (A.5.19-A.5.23), logging/monitoring configuration (A.8.15, A.8.16), WAF rate limiting for `/api/analyze` (A.8.20), segregation-of-duties residual risk (A.5.3), and the cryptography policy (A.8.24).

---

*The Statement of Applicability in `statement-of-applicability.md` is the canonical per-control register; keep statuses in this file in sync with it.*
