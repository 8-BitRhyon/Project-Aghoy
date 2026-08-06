# Project Aghoy AI Governance Policy

**Document version:** 1.0
**Document owner:** Project Aghoy operator (single operator; also the AI risk owner)
**Effective date:** 2026-08-06
**Review cycle:** Annual, or upon any change to the AI systems, models, or providers
**Status:** Adopted

## 1. Purpose

This policy governs the design, deployment, and oversight of the AI systems in Project Aghoy, in alignment with ISO/IEC 42001:2023 (AI management system). It defines the AI system inventory, the AI risk assessment, data governance for AI, human oversight, transparency, and fairness obligations, and references the applicable Annex A controls (5.2 AI policy, 6.1.2 AI risk assessment, 7.x AI system lifecycle, 8.x data quality for AI).

## 2. AI system inventory

1. The Scanner (LLM-based): analyzes pasted text and OCR-extracted text via `functions/api/analyze.js`, which proxies to Cerebras (primary) and Groq (fallback) through Cloudflare AI Gateway using the `gpt-oss-120b` model. Client logic lives in `services/aiService.ts`.
2. The Training Dojo (Workers AI): a role-play training game running on Durable Objects (`src/worker/dojo.ts`) using `@cf/meta/llama-3-8b-instruct` for dialogue and `@cf/baai/bge-base-en-v1.5` embeddings for Vectorize retrieval.
3. The deterministic layer (no-LLM): brand detection (~48 Philippine brands), intent classification, and the `fallbackVerdict` path in `src/brands/brands.ts`, which produces a verdict when the LLM is unavailable. This path is pure, rule-based logic and is not a machine-learning model.

## 3. AI risk assessment

AI-specific risks are assessed in the ISMS risk register and include:

- Prompt injection: user content is placed into model context, so an attacker may attempt to override instructions. Mitigations: the Rejects layer redacts personal data from everything the model receives (inbound on both `functions/api/analyze.js` and `src/worker/dojo.ts`); the model context contains no tools, no secrets, and no privileged instructions; output is re-redacted before being returned; the app instructs the model to treat all analysis as advisory.
- Confabulation: model output may be factually wrong. Mitigations: verdicts are advisory only, JSON output is schema-validated and repaired client-side (`services/aiService.ts`), and the deterministic layer (`fallbackVerdict` in `src/brands/brands.ts`) provides a rule-based verdict when the LLM is unavailable. The fallback abstains on clean or below-threshold input (returns no verdict rather than a false positive), and an under-detection override escalates LLM SAFE verdicts on deterministically HIGH_RISK content. Users may therefore receive "no assessment" on clearly benign messages; that outcome is disclosed in the UI as a plain result rather than a fabricated verdict.
- Social engineering misuse: the Dojo simulates a scammer. Mitigations: it is labeled an authorized cybersecurity drill in its system prompt, has no tools or secrets in context, hard-caps AI usage at 50 assistant turns per signed session token, and is required to break character and reveal the test when the user says "BLOCK", "SCAM", or "REPORT" (`src/worker/dojo.ts`).
- Availability of AI spend: public use of the LLM path is bounded by per-IP rate limits (5/min on `/api/analyze`) enforced by a cross-isolate rate limiter, protecting AI quota from abuse.

## 4. Data governance for AI

- Only Rejects-layer output reaches any model. Redaction runs server-side before the model request is constructed, and again on model responses.
- Images are processed entirely on-device by self-hosted Tesseract assets (`public/ocr/`); screenshots never leave the device. Only the extracted text is analyzed.
- Providers (Cloudflare, Cerebras, Groq) are processors. Data Processing Agreements are required and must state that they receive only sanitized content for the sole purpose of generating scam analysis.
- No model training on user data: the project does not collect data for training. The Vectorize corpus is seeded only from the sanitized corpus in `data/scam-corpus.jsonl` via the admin-protected `/seed/vectorize` route, which re-scrubs every entry (`src/worker/storage.ts`).

## 5. Human oversight

All verdicts are advisory. Project Aghoy does not perform autonomous enforcement: it does not block, report, or act on content without human review. The operator retains authority to verify indicators (`/indicators/verify`, admin-only) and to correct or clear entries in the blocklist feed. User-facing copy instructs readers to verify through official channels and never to make financial decisions based solely on a verdict.

## 6. Transparency

- The privacy consent gate blocks analysis until the user accepts the privacy protocols. This gate is client-side and is documented as a non-security boundary; the Rejects layer is the actual enforcement mechanism.
- `components/PrivacyPolicyModal.tsx` discloses: the data processed, the third-party processors, the Rejects layer masking behavior, retention, user rights under RA 10173, and the advisory, experimental nature of verdicts.
- Users can revoke consent at any time, clearing browser-held state.

## 7. Fairness and bias

The service targets Taglish, Bisaya, Ilocano, and English speakers, with language-specific system prompts in `services/aiService.ts` tailoring tone and terminology. Because model training data may under-represent low-resource Philippine languages, the operator uses the deterministic layer's brand and intent signals as a check on model bias, and bias-related user feedback is reviewed at the annual review. The deterministic fallback produces consistent, explainable, rule-based verdicts.

## 8. AI incidents

AI-specific incidents (prompt injection success, model echo of personal data, Dojo misuse, provider data events) are handled under the incident response policy and are classified as AI misuse or PII breach incidents there. Evidence handling follows the same rules as security incidents.

## 9. References

This policy implements ISO/IEC 42001:2023 Annex A controls including 5.2 (AI policy), 6.1.2 (AI risk assessment), 7.x (AI system lifecycle, including deployment and use of the scanner and Dojo), and 8.x (data quality for AI systems, expressed as the sanitization-first data flows above). It is subordinate to the information security policy and is reviewed annually.
