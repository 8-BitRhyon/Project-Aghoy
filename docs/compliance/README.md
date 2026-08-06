# Project Aghoy: ISO 27001:2022 Compliance Program

**Status:** Phase 1 (gap analysis, policy set, SoA, asset inventory, risk register, and operational evidence in place)
**Owner:** Single operator (InfoSec owner, AI governance owner, internal auditor)
**Target:** ISO/IEC 27001:2022 certification
**Last updated:** 2026-08-06

This directory is the compliance program for Project Aghoy. It is honest about what certification is and what it is not: ISO 27001 certification is a *certification process* for a managed information security program, not a code deliverable. The technical security work in this repository is strong and well documented; the management system around it is the actual gap.

---

## 1. What ISO 27001 is, and what certification actually requires

ISO/IEC 27001:2022 specifies an Information Security Management System (ISMS). Certification is issued by an external, accredited **registrar** after it audits two things:

1. **The management system (Clauses 4-10).** The organization must be able to demonstrate, with documented evidence, that it:
   - defines the ISMS scope, context, and interested parties (Clause 4);
   - has a leadership commitment from top management and a documented information security policy (Clause 5);
   - plans the ISMS and runs a formal risk assessment with a risk treatment plan (Clause 6);
   - provides the resources and competence, and runs security awareness (Clause 7);
   - operates the controls it selected and manages them day to day (Clause 8);
   - **evaluates** the ISMS with performance monitoring, an **internal audit program**, and **management reviews** (Clause 9);
   - **improves** the ISMS continually, including correcting nonconformities (Clause 10).

2. **The Annex A controls it declared in its Statement of Applicability (SoA).** Annex A of the 2022 edition lists 93 controls in 4 themes: Organizational (A.5, 37 controls), People (A.6, 8 controls), Physical (A.7, 14 controls), and Technological (A.8, 34 controls). Each control is declared applicable (in scope) or not applicable, with justification, and each applicable control must be implemented with evidence.

Certification is a **certification process**, not a code deliverable. The registrar does not run your tests; it interviews you, samples your evidence (policies, risk register, audit reports, meeting minutes, logs, configuration), and verifies that what you claim in the SoA is actually true. It is a continuing obligation: surveillance audits typically occur annually and full recertification every three years.

For a single-operator, serverless, non-profit project the key practical consequences are:

- **Documented evidence beats claims.** Every control status in the SoA must point to a real artifact (a file, a dashboard, a log, a meeting record). If it is not written down, the registrar treats it as not done.
- **Clause 9 evidence is non-negotiable.** There must be a real internal audit (with findings) and real management review (with minutes) on record before a registrar will schedule Stage 1.
- **Segregation of duties is an audit theme.** A one-person ISMS must demonstrate compensating controls (automated gates, external review, independent evidence) and be prepared to discuss the risk with the registrar. It does not disqualify you, but it is the first thing an auditor probes.

---

## 2. What Project Aghoy already has that maps to the standard

The technical control base is unusually strong for a project of this size. These are the highest-confidence mappings:

| Capability | Where it lives | Annex A mapping |
| --- | --- | --- |
| Server-authoritative PII redaction (cards, PH mobiles, emails, API keys, PH IDs, OTPs, CVVs, names, DOBs), idempotent, tested | `src/rejects/rejects.ts` (+45 tests in `src/rejects/rejects.test.ts`), applied inbound/outbound in `functions/api/analyze.js` and `src/worker/dojo.ts`, before every persistence write via `sanitizeForStorage` in `src/worker/storage.ts` | A.8.11 Data masking, A.8.12 Data leakage prevention |
| Data minimization at rest: phone numbers stored only as SHA-256 hashes, reports deduplicated by SHA-256 of sanitized content, no raw PII in D1/R2/Vectorize | `src/worker/storage.ts`, `src/worker/dojo.ts`, `migrations/0001_init.sql` | A.8.10 Information deletion, A.8.12, A.5.34 Privacy |
| Signed expiring session tokens (HMAC-SHA256, 24h TTL, fail-closed 503) | `src/worker/dojo.ts` (`signSessionToken`/`verifySessionToken`, `/dojo/session`) | A.8.24 Cryptography, A.8.5 Secure authentication |
| Constant-time admin auth (SHA-256 digest + XOR accumulate), fail-closed | `src/worker/dojo.ts` (`constantTimeEqual`, `authorized`) | A.8.2 Privileged access rights |
| Cross-isolate rate limiting via persisted `RateLimiter` Durable Object; per-IP budgets (analyze 5/min, reports 20/min, inspect 10/min, Dojo 50 turns/token) | `src/worker/dojo.ts`, `functions/api/analyze.js` | A.8.5, A.8.6 Capacity management |
| CORS origin allowlist + security headers + CSP on Pages and Worker | `functions/_middleware.js`, `public/_headers`, `src/worker/dojo.ts` (`corsHeaders`) | A.8.20 Network security |
| SSRF-guarded URL inspection (protocol allowlist, host blocklist, DNS private-IP rejection, per-hop redirect validation, size/time caps) | `src/worker/urlInspect.ts` (+12 tests) | A.8.21, A.8.22 |
| Input validation and output hygiene: body caps, message caps, role allowlist, verdict allowlist, no upstream error leak, classified errors, 25s timeouts | `functions/api/analyze.js`, `src/worker/dojo.ts` | A.8.28 Secure coding |
| Supply chain hygiene: SHA-pinned Actions enforced in CI, gitleaks full-history scan, self-hosted OCR (no third-party CDN), `npm audit` guidance | `.github/workflows/ci.yml`, `public/ocr/`, `SECURITY.md` | A.5.21, A.8.8, A.8.25 |
| Secret management: all keys in Worker secrets, `.env.example` placeholders only, `.dev.vars` gitignored, rotation notes | `wrangler.toml`, `.env.example`, `.gitignore`, `README.md` | A.5.17, A.5.14 |
| Test + change gate: pre-commit hook, CI typecheck/test/build, 139 Vitest tests, TDD culture | `scripts/pre-commit.sh`, `.github/workflows/ci.yml`, `AGENTS.md` | A.8.31, A.8.29, A.8.32 (partial) |
| Privacy consent gate and RA 10173 disclosure (processors, retention, rights, NPC) | `components/PrivacyConsent.tsx`, `components/PrivacyPolicyModal.tsx`, `SECURITY.md` | A.5.34 |
| Threat model, architecture review, vulnerability disclosure process | `SECURITY.md` | A.5.7, A.5.24, A.8.26 |
| Deterministic no-LLM fallback verdict and brand/intent classification | `src/brands/brands.ts` | A.8.26, A.8.12 (availability resilience) |

Honest counterpoint: almost all of this is **technical control operation**, not management-system evidence. There is no risk register, no internal audit report, no management review minutes, no business continuity plan, no asset register, and no incident response runbook. That is the gap this program exists to close.

---

## 3. Certification roadmap

The work is split into three phases. Phase 1 is happening now.

### Phase 1 (current): framework construction
- Run the full Annex A gap analysis (`iso-27001-gap-analysis.md`).
- Draft the SoA for all 93 controls (`statement-of-applicability.md`).
- Produce the policy set under `docs/compliance/policies/` (separate workstream, parallel agent).
- Stand up the asset inventory (`asset-inventory.md`, A.5.9) and risk register (`risk-register.md`, Clause 6.1).
- Maintain the AI governance analysis (`iso-42001-gap-analysis.md`) and operational evidence: `scripts/backup-db.sh` (A.8.13), `/metrics` observability (verdict/provider/fallback rates), and the adversarial prompt-injection corpus test (`src/brands/adversarial-corpus.test.ts`).
- Agree the ISMS scope and write the top-level information security policy.

Exit criteria: a defensible SoA, a policy set, and a risk register with a treatment plan. Estimated effort: 1-3 weeks of part-time operator work.

### Phase 2: complete the ISMS processes and collect evidence
- **Internal audit program (Clause 9.2):** audit plan, checklist, audit report with findings and corrective actions. First audit should cover clauses 4-10 plus the applicable Annex A controls.
- **Management review (Clause 9.3):** documented review of audit results, risk treatment status, incidents, and improvement actions, with minutes.
- **Risk treatment execution:** implement the agreed treatments from Phase 1 (including the top-10 gaps list in the gap analysis).
- **Operational evidence baseline:** logging/monitoring configuration, backup/restore test records, asset register updates, vulnerability management SLA, incident response runbook, supplier review (Cloudflare/Cerebras/Groq), training records, and a privacy contact + data-processing register.
- **Continual improvement loop (Clause 10):** nonconformity log and corrective action tracking.

Exit criteria: one full internal audit cycle with management review completed, evidence gathered for every "in scope" control, and the SoA updated to reflect reality. Estimated effort: 2-4 months part-time.

### Phase 3: registrar audit and certification
- **Stage 1 audit (documentation review):** registrar reviews the ISMS documentation, SoA, policy set, and audit evidence. Document gaps get fixed.
- **Stage 2 audit (certification audit):** registrar samples controls and interviews the operator. Evidence must match the SoA.
- **Certification decision and surveillance cycle:** certificate issued, then annual surveillance audits and triennial recertification.

Estimated effort: 2-6 months from Phase 2 exit, dominated by registrar scheduling and the documentation fixes from Stage 1.

**Recommended registrar consideration:** certification is a paid, recurring engagement. For a non-profit with no commercial obligations, weigh certification against full ISMS operation without a registrar (internally self-assessed) unless a partner, grant, or data-sharing arrangement (for example with government or telecom partners for the blacklist feed) requires an accredited certificate.

---

## 4. Roles and the segregation-of-duties reality

For ISO 27001 the ISMS roles in this project are, necessarily, all held by one person:

| Role | Holder | What it means here |
| --- | --- | --- |
| ISMS management representative / InfoSec owner | Single operator | Owns the policy set, risk register, and control operation |
| AI governance owner | Single operator | Owns the model/provider decisions (Cerebras/Groq via AI Gateway), prompt-injection surface, and the Dojo simulation boundary |
| Internal auditor (Clause 9.2) | Single operator | Runs the internal audit program and produces the audit report |
| Management (Clause 5.1) | Single operator | Approves policy, accepts risk, signs off management review |

**The honest tension:** ISO 27001's A.5.3 (segregation of duties) and the internal audit clause both assume independent actors. A one-person ISMS cannot fully satisfy independence, and the registrar will probe this. The compensating controls that make it defensible are:

1. **Automated enforcement in the change path.** CI (`ci.yml`) enforces typecheck, tests, build, SHA-pinned Actions, and a gitleaks full-history secret scan on every PR; the pre-commit hook gates local commits. No operator can silently ship an unverified change.
2. **External, independent evidence.** The codebase is public and open source (MIT); third parties review it. The registrar itself provides an independent check at audit time.
3. **Distinct artifacts per role.** Audit reports, risk registers, and management review minutes must be produced as separate, dated documents even though the same person writes them. This is the evidence the registrar asks for.
4. **Self-declared conflict.** The SoA and risk treatment must explicitly record that A.5.3 is mitigated by (1)-(3) and accepted as a residual risk by management.

This is a legitimate posture for a non-profit with a single operator, but do not paper over it: the internal audit cannot claim independence it does not have. State the residual risk plainly in the risk register.

---

## 5. Controls matrix summary

Full detail lives in `statement-of-applicability.md` (all 93 controls) and `iso-27001-gap-analysis.md` (every in-scope control with evidence and gap). Status counts as of 2026-08-06:

| Theme | In scope | Implemented | Partial | Gap | N/A |
| --- | --- | --- | --- | --- | --- |
| A.5 Organizational (37) | 36 | 0 | 21 | 15 | 1 |
| A.6 People (8) | 5 | 0 | 4 | 1 | 3 |
| A.7 Physical (14) | 6 | 0 | 0 | 6 | 8 |
| A.8 Technological (34) | 30 | 2 | 22 | 6 | 4 |
| **Total (93)** | **77** | **2** | **47** | **28** | **16** |

Reading the numbers honestly:

- The two **Implemented** controls (A.8.11 data masking, A.8.12 data leakage prevention) are the crown jewels of the technical work: the Rejects layer plus the "sanitized-only" persistence invariant.
- The **47 Partial** controls are mostly technical controls that operate in code but lack the management-system documentation or the operating evidence a registrar requires (retention schedules, access reviews, logging configuration, training records, supplier assessments).
- The **28 Gap** controls are concentrated where the project has done no work yet: management system artifacts (risk register, policies, internal audit, management review, BCP/DR, incident response, change management, vulnerability SLA, asset inventory) and the operator-device physical/people controls.
- The **16 N/A** controls are almost all physical controls that Cloudflare's data centers satisfy under the shared responsibility model (see the SoA for each justification).

---

## 6. Files in this directory

| File | Contents |
| --- | --- |
| `README.md` (this file) | Program overview, certification reality, roadmap, roles, controls matrix |
| `iso-27001-gap-analysis.md` | Detailed gap analysis: every in-scope Annex A control with status, evidence, and gap; Clause 4-10 readiness; top-10 gaps with effort estimates |
| `statement-of-applicability.md` | The canonical SoA: all 93 Annex A controls with applicability, status, and one-line justification/evidence reference |
| `policies/` | The policy set (separate workstream; see the pointers in the gap analysis for the policy list) |

Sister documents outside this directory that serve as evidence: `SECURITY.md` (threat model, architecture review, disclosure process), `AGENTS.md` (engineering standards and process), `README.md` (deployment, storage setup, testing), `.github/workflows/ci.yml` and `.github/workflows/deploy.yml` (CI/CD evidence), `wrangler.toml` (configuration baseline), `migrations/0001_init.sql` (data schema), and the test suites under `src/` and `utils/`.

---

*Maintenance note: keep the status counts in section 5 in sync with the SoA whenever a control changes status. The SoA is the canonical register.*
