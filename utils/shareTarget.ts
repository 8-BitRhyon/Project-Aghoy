// Parses Web Share Target content (POST form data or GET query) into scanner input. Pure + testable.

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

// Combine share fields into the scanner's text box (URL is the most common PH scam share).
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

// Extract image metadata from a File-like object (actual read stays in the caller).
export const fileMeta = (file: { name?: string; type?: string; size?: number } | null | undefined): { name: string; type: string; size: number } | null => {
  if (!file) return null;
  return {
    name: file.name ?? "",
    type: file.type ?? "",
    size: file.size ?? 0,
  };
};
