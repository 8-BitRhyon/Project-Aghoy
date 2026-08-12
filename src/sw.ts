// Custom service worker: CacheFirst for OCR/model/ort-wasm + Web Share Target (/share POST -> ?share_text / ?share_file).

/// <reference lib="webworker" />
declare const self: ServiceWorkerGlobalScope & { __WB_MANIFEST: unknown };
import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";

export type {};
const CACHE_SHARE = "aghoy-share";
const CACHE_OCR = "aghoy-ocr";
const CACHE_MODELS = "aghoy-models";
const CACHE_ORT = "aghoy-ort-wasm";
const MAX_AGE = 60 * 60 * 24 * 30;

// Precache the app shell; large on-demand assets (OCR/model/ort-wasm) stay out via globIgnores + CacheFirst below.
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

const CACHE_FIRST_RULES: { prefix: string; cache: string }[] = [
  { prefix: "/ocr/", cache: CACHE_OCR },
  { prefix: "/models/", cache: CACHE_MODELS },
  { prefix: "/ort-wasm/", cache: CACHE_ORT },
];

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // cleanupOutdatedCaches() (called above) removes old workbox precaches;
  // this just takes control of open pages immediately after activation.
  event.waitUntil(self.clients.claim());
});

// CacheFirst for the runtime asset families (mirrors the old workbox config).
// Each rule uses its OWN cache (the hardcoded CACHE_MODELS here was a bug
// that put OCR/ort-wasm entries in the models cache) and entries expire after
// MAX_AGE days so the runtime caches do not grow without bound.
const cacheFirst = async (request: Request, cacheName: string): Promise<Response> => {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(request);
  if (hit && !isExpired(hit)) return hit;
  if (hit) await cache.delete(request);
  const response = await fetch(request);
  if (response.ok && request.method === "GET") {
    cache.put(request, response.clone());
  }
  return response;
};

// A cached response is stale after MAX_AGE days. The response Date header (set
// by the origin/Pages CDN) is authoritative; if absent, fall back to the
// Cache-Control max-age.
const isExpired = (response: Response): boolean => {
  const dateHeader = response.headers.get("date");
  if (dateHeader) {
    const ageMs = Date.now() - Date.parse(dateHeader);
    return ageMs > MAX_AGE * 1000;
  }
  const cacheControl = response.headers.get("cache-control") || "";
  const maxAge = /max-age=(\d+)/.exec(cacheControl);
  if (maxAge) {
    return Number(maxAge[1]) > MAX_AGE;
  }
  return false;
};

// Serve a stashed shared image from the aghoy-share cache.
const serveSharedFile = async (): Promise<Response> => {
  const cache = await caches.open(CACHE_SHARE);
  const hit = await cache.match("/share-file");
  if (hit) return hit;
  return new Response("not found", { status: 404 });
};

// Handle a Web Share Target POST to /share.
const handleShare = async (request: Request): Promise<Response> => {
  let text = "";
  let hasFile = false;
  try {
    const form = await request.formData();
    const t = form.get("text");
    const u = form.get("url");
    const ti = form.get("title");
    text = [t, u, ti].filter((v): v is FormDataEntryValue => typeof v === "string").join("\n").trim();
    const file = form.get("file");
    if (file instanceof File && file.size > 0) {
      const cache = await caches.open(CACHE_SHARE);
      await cache.put("/share-file", new Response(file, { headers: { "content-type": file.type || "image/png" } }));
      hasFile = true;
    }
  } catch {
    text = "";
  }
  const qs = new URLSearchParams();
  if (hasFile) qs.set("share_file", "1");
  if (text) qs.set("share_text", text);
  return Response.redirect(`/?${qs.toString()}`, 302);
};

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // Web Share Target POST
  if (url.pathname === "/share" && event.request.method === "POST") {
    event.respondWith(handleShare(event.request));
    return;
  }

  // Consumed by the app to read a shared image after redirect.
  if (url.pathname === "/share-file") {
    event.respondWith(serveSharedFile());
    return;
  }

  // CacheFirst for runtime asset families.
  const rule = CACHE_FIRST_RULES.find((r) => url.pathname.startsWith(r.prefix));
  if (rule && event.request.method === "GET") {
    event.respondWith(cacheFirst(event.request, rule.cache));
  }
});
