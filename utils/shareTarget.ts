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

// Normalize the service worker's Web Share Target redirect params
// (sw.ts redirects to ?share_text=<combined>&share_file=1). Also accepts the
// classic GET share_target keys (text/url/title) for compatibility.
export const parseShareQuery = (params: URLSearchParams): NormalizedShare => {
  const payload: SharedPayload = {
    text: params.get("share_text") ?? params.get("text") ?? undefined,
    url: params.get("url") ?? undefined,
    title: params.get("title") ?? undefined,
  };
  return {
    ...combineSharePayload(payload),
    file: params.get("share_file") === "1" ? { name: "shared-image", type: "image/*", size: 0 } : null,
  };
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

// The service worker stashes a shared image under /share-file (CACHE_SHARE);
// this reads it back as a data URL for the scanner's selectedImage state.
// Returns null when nothing was shared or the fetch fails.
export const fetchSharedFile = async (): Promise<{ dataUrl: string; mimeType: string } | null> => {
  try {
    const res = await fetch("/share-file");
    if (!res.ok) return null;
    const blob = await res.blob();
    if (!blob || blob.size === 0) return null;
    const mimeType = res.headers.get("content-type")?.split(";")[0] || blob.type || "image/png";
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result ?? ""));
      reader.onerror = () => reject(new Error("read failed"));
      reader.readAsDataURL(blob);
    });
    return { dataUrl, mimeType };
  } catch {
    return null;
  }
};
