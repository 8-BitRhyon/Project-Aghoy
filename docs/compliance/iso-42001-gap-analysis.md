# ISO/IEC 42001:2023 - AI Management System Gap Analysis

**Project Aghoy** - last reviewed 2026-08-06
**Owner:** single operator (acts as AI governance owner)
**Standard:** ISO/IEC 42001:2023 (Artificial Intelligence - Management System)

## 1. What ISO 42001 is

ISO 42001 is the first international AI management system standard. Where ISO 27001 protects information, 42001 governs the *responsible development and use of AI systems*: risk assessment, transparency, human oversight, data governance for AI, the AI system lifecycle, and impacts on people. Certification (like 27001) requires a formal management system plus an external audit; this document is the gap analysis that feeds it.

## 2. AI system inventory

| System | Provider path | Model | Controls in place |
|---|---|---|---|
| Scanner (analyze message) | Cloudflare Pages Function -> AI Gateway -> Cerebras, fallback Groq | gpt-oss-120b | Rejects redaction inbound + outbound; body caps; rate limits; JSON schema validation; deterministic `fallbackVerdict` when LLM unavailable |
| OCR (screenshot) | on-device Tesseract (self-hosted, no CDN) | eng traineddata | images never leave the device; MIME checked; size capped; pooled worker |
| Dojo (training game) | Worker -> Workers AI | llama-3-8b | signed session tokens; Rejects redaction; 50-turn cap; break-character instruction on BLOCK/SCAM/REPORT; idle TTL |
| Deterministic detector (no-LLM) | src/brands/brands.ts + rejects | none (rules) | `fallbackVerdict` returns SAFE/SUSPICIOUS/HIGH_RISK offline |

## 3. Clause readiness (Clauses 4-10)

| Clause | Requirement | Status | Gap |
|---|---|---|---|
| 4 Context | AI system purpose, interested parties, scope of the AI management system | PARTIAL | Purpose and scope documented (README); no formal context analysis of interested parties |
| 5 Leadership | AI policy, roles, responsibilities | PARTIAL | ai-governance-policy.md drafted; single-operator role assignment informal |
| 6 Planning | AI risk assessment (6.1), AI objectives (6.2), change planning | GAP | No formal AI risk register (prompt injection, data bias, misuse, over-reliance); no documented AI objectives |
| 7 Support | Resources, competence, awareness, communication, documented info | GAP | No competence/training record, no communication plan |
| 8 Operation | AI risk treatment, AI system impact assessment, lifecycle, data for AI, third-party | PARTIAL | Technical controls exist (Rejects, oversight); no impact assessment process, no third-party AI risk reviews |
| 9 Performance evaluation | Monitoring, internal audit, management review | GAP | No AI monitoring metrics, no internal audit evidence |
| 10 Improvement | Nonconformity, continual improvement | GAP | No process |

## 4. Annex A controls (38 controls across 8 objectives)

ISO 42001 Annex A defines 8 objectives (AI policy, internal context, resources, AI risk assessment, AI system impacts, AI system life cycle, data for AI, and information/interested parties/use/third parties) containing 38 controls in total. Control IDs run A.5 through A.14; status by group:

Objective 5: AI policy - A.5.2 (AI policy) PARTIAL (policy drafted, not formally adopted).
Objective 6: Internal context - A.6.1.2 PARTIAL, A.6.1.4 GAP.
Objective 7: Resources - A.7.3 (competence) GAP.
Objective 8: AI risk assessment - A.8.1.1 GAP (no formal register), A.8.1.2 GAP, A.8.1.3 GAP.
Objective 9: AI system impacts - A.9.1.1 (stakeholder involvement) GAP, A.9.2.1 (impact assessment) GAP.
Objective 10: AI system life cycle - A.10.1.1 (design) PARTIAL, A.10.2.1 (development) PARTIAL, A.10.3.1 (validation) PARTIAL (139 tests, but no acceptance criteria document).
Objective 11: Data for AI - A.11.1.1 (data acquisition) PARTIAL (Rejects redaction, on-device OCR), A.11.1.2 (data quality) GAP, A.11.2.1 (data for fine-tuning) N/A (no fine-tuning), A.11.2.2 (data sources) PARTIAL, A.11.3.1 (data for testing/validation) GAP, A.11.3.2 (data preparation) PARTIAL.
Objective 12: Information for interested parties - A.12.1.1 (documented info) PARTIAL (PrivacyPolicyModal), A.12.1.2 (interaction with users) PARTIAL.
Objective 13: Use of AI systems - A.13.1.1 (responsibilities) GAP, A.13.1.2 (use by users) GAP.
Objective 14: Third-party relationships - A.14.1.1 (third-party risk) GAP (providers: Cloudflare, Cerebras, Groq - no DPA evidence on file).

## 5. The AI-specific risks Project Aghoy actually faces

1. **Prompt injection (HIGH, partially mitigated).** User-pasted content is embedded in system prompts. Current mitigations: Rejects redaction strips PII; no tools/secrets/credentials are ever in the prompt context; the Dojo is a contained drill; and a shipped **under-detection override** (`enrichResult` in `services/aiService.ts`) escalates any LLM SAFE verdict to SUSPICIOUS with `UNDERDETECTION_OVERRIDE` when the deterministic detector scores the input HIGH_RISK, replacing the stale safe risk fields. The deterministic detector (rules, not an LLM) cannot be prompt-injected. Remaining risk: prompt styles that evade both the LLM and the rule thresholds; a broader adversarial prompt corpus and periodic evaluation are still needed.
2. **Over-reliance / automation bias (MEDIUM).** A user may trust a HIGH_RISK verdict without verification. Mitigation: every result includes educational copy + official channels; no autonomous enforcement exists (human reads the verdict). No usage study exists.
3. **Bias across languages (MEDIUM).** Tagalog/Bisaya/Ilocano/English. Red-flag definitions and brand detection are English-first; detection quality may skew by language and by brand impersonation priors (GCash/Maya weighted).
4. **Data poisoning of the blacklist feed (MEDIUM).** Public `/reports` upserts indicators. Mitigations: content-hash dedup, rate limits, sanitization, phone hashes only. An attacker could still submit repeated false indicators (the `times_reported` counter is additive). No threshold-based verification of the feed yet (verifyIndicator exists but is manual/admin).
5. **Model drift / provider change (LOW-MEDIUM).** Cerebras -> Groq fallback; provider availability changes. The deterministic fallback covers outage but not silent quality drift. No quality sampling process.
6. **Dojo misuse (LOW).** A user might believe they are receiving real scam instructions. Mitigation: authorized-drill framing, break-character on detection. Still a policy disclosure item.

## 6. What is already ISO 42001-aligned (evidence)

- **A.11.1.1 data acquisition:** Rejects layer is the data-governance gate. Only sanitized content reaches any model (`services/aiService.ts` pre-send, `functions/api/analyze.js` and `src/worker/dojo.ts` inbound, `sanitizeForStorage` before any D1/R2/Vectorize write). Images never leave the device (on-device Tesseract, `services/aiService.ts` OCR path).
- **A.10.3.1 validation:** 139 unit tests (rejects 44, brands 33, support DB 6, indicators 10, privacy 15, flags 9, URL inspector 12, useModal 5, under-detection override 4, plus services/aiService enrichment); CI gate runs them on every PR.
- **A.13.x human oversight + transparency:** verdicts are advisory; consent gate; PrivacyPolicyModal discloses processors (Cloudflare/Cerebras/Groq), masking, on-device images, retention.
- **A.14 third parties:** processors documented in the privacy modal; all keys server-side.

## 7. Top AI-governance gaps to close

1. AI risk register (prompt injection, bias, poisoning, over-reliance) with treatment owners - 4-8h
2. Adversarial prompt-injection test corpus + CI test that injection cannot force SAFE on the fallback path - 4-8h
3. Data-quality process for the scam corpus and blacklist feed (dedup + threshold before "reported N times" is surfaced) - 4-8h
4. Documented AI acceptance criteria per model output (verdict/flag schema) as the validation baseline - 4h
5. Stakeholder (users, PH regulators, e-wallet providers) impact notes + disclosure completeness check - 4h
6. Provider DPA/processing evidence pack (Cloudflare, Cerebras, Groq) - operator action, 2-4h
7. AI monitoring metrics (verdict distribution, fallback-verdict rate, provider failure rate) - 4-8h

## 8. Relationship to ISO 27001

42001 and 27001 share clause structure and are designed to integrate. This repo's `iso-27001-gap-analysis.md` covers the information-security controls (A.8.x DLP, cryptography, security testing). This document covers the AI-specific layer. The combined posture: technical controls are strong; the missing layer is the formal management-system documentation and audit evidence, which the README roadmap phases.
