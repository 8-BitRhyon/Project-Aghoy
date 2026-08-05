# Contributing to Project Aghoy

Thank you for helping. Project Aghoy is a free, non-profit, community project that helps Filipinos detect scams and learn to defend against social engineering. Every contributor moves that mission forward.

## Getting started

```bash
git clone <your-fork-url>
npm install
npm run dev          # dev server on port 3000
bash scripts/install-hooks.sh   # install the pre-commit gate
```

For local API calls, create a `.dev.vars` file modeled on `.env.example`. Never commit real keys.

## How to contribute

- **Issues:** open one for bugs, feature requests, or questions. Include what you did, what happened, and what you expected.
- **Pull requests:** work on a branch off `main` and open a PR against `main`. Keep each PR to one logical change with a focused commit history. No drive-by refactoring.
- **Discuss first for big changes:** if a change touches the Rejects layer, storage writes, or security headers, open an issue first so the maintainers can weigh in before you invest the work.

## Code style

- Follow the patterns in the file you are editing. Read before you write.
- TypeScript strict is enforced by `npm run typecheck` for both the app and the Worker. Keep both green.
- **No em dashes (U+2014).** Use `-` or `:` instead, in every artifact this repo produces.
- **No machine-specific paths.** Never commit absolute home paths or local file URIs. Use `~`, `$HOME`, or relative paths.
- No lint script exists yet. Add one only if a real ESLint config is introduced.
- Security notes from AGENTS.md apply to you too: read it before starting.

## Testing requirement

Every change ends with verification. "Seems right" is not done.

- Run `npm run check` (typecheck + test + build) before pushing and before opening a PR.
- CI runs the same gate plus a SHA-pinned-actions audit and a gitleaks full-history secret scan.
- Write tests for any change to `src/rejects`, `src/brands`, `src/support`, `src/worker/indicators`, `utils/privacy`, or `utils/flagDefinitions`. The suite favors fast, pure-logic tests over component tests.
- Prefer TDD: write the failing test first, then make it pass, then verify.

## Adding a brand or flag

1. Add the canonical key and its normalized aliases to `BRAND_ALIASES` in `src/brands/brands.ts` (include leetspeak and misspelled variants).
2. Add a `src/support/supportDatabase.ts` entry with verified contact channels, `verifiedAt`, and `source`, so SmartSupport can route victims correctly. Entries must be real, verified channels; no placeholders.
3. If the scam pattern needs a new red flag, add it to `utils/flagDefinitions.ts` AND to `VALID_FLAGS` in `services/aiService.ts`. Both must stay in sync.
4. Add tests: brand detection cases in `src/brands/brands.test.ts`, support data integrity in `src/support/supportDatabase.test.ts`, and flag coverage in `utils/flagDefinitions.test.ts`.

## Adding PII redaction

- Implement the rule in `src/rejects/rejects.ts`. Follow the existing structure: a named regex or validator, a `redact*` function, and an entry in `redactText` in the correct order (cards and mobiles before accounts, PH IDs before DOB, OTP last).
- Rules must be **idempotent**: running redaction twice over the same text must not change the result.
- Rules must be conservative: no placeholder unless the pattern is a real PII match. Prefer context gating for ambiguous patterns.
- Add tests in `src/rejects/rejects.test.ts`, including an idempotency test: `redactPII(redactPII(text).text)` must equal `redactPII(text).text`.

## Security contribution policy

- Never commit secrets, keys, or account/zone IDs. Key material belongs in Worker secrets (`.dev.vars` locally), never in the bundle.
- Follow the Rejects-layer rule: only sanitized content may reach vendors or storage. Never persist raw user content.
- Never weaken a security control silently. The deliberate decisions in AGENTS.md (consent gate, client-side redaction being defense-in-depth, the Dojo as training simulation) must not be reverted without maintainer sign-off.
- Report vulnerabilities through the process in SECURITY.md, not in public issues.

## License

By contributing you agree that your contributions are licensed under the MIT License. See [LICENSE](LICENSE).
