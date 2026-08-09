// utils/shareTarget.ts - parse content received via the Web Share Target API.
//
// When a user highlights text (or an image) in any app and chooses
// "Share > Aghoy" from the system share sheet, the PWA is launched with the
// shared content. With a `method: POST` share_target, the content arrives as
// multipart/form-data (name="text" and/or name="file"). With `method: GET`,
// it arrives as URL query params. This module normalizes both into the same
// shape the scanner already consumes ({ input, selectedImage, imageMimeType }).
//
// Pure and testable - no browser APIs here. The caller reads the actual
// request/event and passes plain values in.

export interface SharedPayload {
  text?: string;
  url?: string;
  title?: string;
}

export interface NormalizedShare {
  text: string; // combined text (text + url + title), trimmed
  file: { name: string; type: string; size: number } | null;
}

// Normalize GET-style query params (share_target with method: GET).
export const parseShareQuery = (params: URLSearchParams): NormalizedShare => {
  const payload: SharedPayload = {
    text: params.get("text") ?? undefined,
    url: params.get("url") ?? undefined,
    title: params.get("title") ?? undefined,
  };
  return combineSharePayload(payload);
};

// Combine the three standard share fields into the scanner's single text box.
// URL is appended because a shared URL alone (e.g. "check this link") is the
// most common PH scam share; title adds context when present.
export const combineSharePayload = (payload: SharedPayload): NormalizedShare => {
  const parts: string[] = [];
  if (payload.text?.trim()) parts.push(payload.text.trim());
  if (payload.url?.trim()) parts.push(payload.url.trim());
  if (payload.title?.trim() && !parts.join(" ").includes(payload.title.trim())) {
    parts.push(payload.title.trim());
  }
  const text = parts.join("\n");
  return {
    text,
    file: null,
  };
};

// Guard against a share of the app's own URL (e.g. user shares the app page).
export const isSelfShare = (url: string | null | undefined, selfOrigin: string): boolean => {
  if (!url) return false;
  try {
    return new URL(url).origin === new URL(selfOrigin).origin;
  } catch {
    return false;
  }
};

// Extract a shared image file's metadata from a File-like object (name, type,
// size). The actual FileReader/objectURL work stays in the caller.
export const fileMeta = (file: { name?: string; type?: string; size?: number } | null | undefined): { name: string; type: string; size: number } | null => {
  if (!file) return null;
  return {
    name: file.name ?? "",
    type: file.type ?? "",
    size: file.size ?? 0,
  };
};
