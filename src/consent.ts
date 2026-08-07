// === CONSENT ATTESTATION ===
// Server-verifiable proof that the user accepted the privacy protocols.
// The client consent gate (localStorage) is NOT a security boundary: any
// script could set 'granted' or call the API directly. This module makes
// consent server-enforced by minting a signed, expiring, version-bound token
// ONLY after the user accepts, and requiring that token on every data-touching
// request (Pages Function /api/analyze and Worker /reports, /inspect, /dojo).
//
// Design:
//   - HMAC-SHA256 signed, base64url(payload).base64url(sig), payload { v, sub, exp }.
//   - v = CONSENT_VERSION; bump it when the privacy text changes to invalidate
//     all previously-granted consent (users must re-accept).
//   - exp = issuance + CONSENT_TTL_MS; stale consent must be refreshed.
//   - Verification fails closed: missing, malformed, expired, wrong-version, or
//     bad-signature tokens are rejected with 403.

export const CONSENT_VERSION = "2026-08-06-v1";
export const CONSENT_TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 days

const base64urlEncode = (data: Uint8Array): string => {
  let binary = "";
  for (let i = 0; i < data.length; i++) binary += String.fromCharCode(data[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
};

const base64urlDecode = (input: string): Uint8Array => {
  const b64 = input.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (input.length % 4)) % 4);
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
};

const importConsentKey = (secret: string): Promise<CryptoKey> =>
  crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
    "verify",
  ]);

// Mint a signed consent attestation bound to the current CONSENT_VERSION.
export const mintConsentToken = async (secret: string): Promise<string> => {
  const payload = {
    v: CONSENT_VERSION,
    sub: crypto.randomUUID(),
    exp: Date.now() + CONSENT_TTL_MS,
  };
  const payloadB64 = base64urlEncode(new TextEncoder().encode(JSON.stringify(payload)));
  const key = await importConsentKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payloadB64));
  return `${payloadB64}.${base64urlEncode(new Uint8Array(sig))}`;
};

export type ConsentCheckResult = { ok: true } | { ok: false; reason: "missing" | "malformed" | "expired" | "version" | "invalid" };

// Verify a consent attestation. Fail-closed: every failure mode is rejected.
export const verifyConsentToken = async (secret: string, token: string | null): Promise<ConsentCheckResult> => {
  if (!token) return { ok: false, reason: "missing" };
  const parts = token.split(".");
  if (parts.length !== 2) return { ok: false, reason: "malformed" };
  const [payloadB64, sigB64] = parts;

  let payloadBytes: Uint8Array;
  try {
    payloadBytes = base64urlDecode(payloadB64);
  } catch {
    return { ok: false, reason: "malformed" };
  }

  const key = await importConsentKey(secret);
  const expectedSig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payloadB64));
  let givenSig: Uint8Array;
  try {
    givenSig = base64urlDecode(sigB64);
  } catch {
    return { ok: false, reason: "malformed" };
  }
  // Constant-time comparison over equal-length digests.
  if (givenSig.length !== expectedSig.byteLength) return { ok: false, reason: "invalid" };
  let diff = 0;
  const expected = new Uint8Array(expectedSig);
  for (let i = 0; i < givenSig.length; i++) diff |= givenSig[i] ^ expected[i];
  if (diff !== 0) return { ok: false, reason: "invalid" };

  let payload: { v?: unknown; exp?: unknown };
  try {
    payload = JSON.parse(new TextDecoder().decode(payloadBytes)) as { v?: unknown; exp?: unknown };
  } catch {
    return { ok: false, reason: "malformed" };
  }
  if (typeof payload.exp !== "number" || payload.exp < Date.now()) return { ok: false, reason: "expired" };
  if (payload.v !== CONSENT_VERSION) return { ok: false, reason: "version" };
  return { ok: true };
};

// Convenience: extract the consent token from a request (header, or body field).
export const extractConsentToken = (request: Request): string | null => {
  const header = request.headers.get("X-Consent-Token");
  if (header) return header.trim() || null;
  return null;
};
