// src/sw.ts - custom service worker (vite-plugin-pwa injectManifest strategy).
//
// Two responsibilities:
//   1. Precache + runtime caching of OCR/model/ort-wasm assets (CacheFirst),
//      exactly as the previous generateSW workbox config did.
//   2. Web Share Target handling: when a user highlights text/image and
//      "Share > Aghoy" posts to /share, read the form data, stash any image
//      in the aghoy-share cache, and redirect to the app with the payload in
//      the URL. The app consumes it on mount (utils/shareTarget.ts).
//
// A static page cannot read its own POST body, so this service worker is the
// documented mechanism for POST share targets.

/// <reference lib="webworker" />
declare const self: ServiceWorkerGlobalScope & { __WB_MANIFEST: unknown };
import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";

export type {};
const CACHE_SHARE = "aghoy-share";
const CACHE_OCR = "aghoy-ocr";
const CACHE_MODELS = "aghoy-models";
const CACHE_ORT = "aghoy-ort-wasm";
const MAX_AGE = 60 * 60 * 24 * 30;

// Precache the small app shell (index.html + JS/CSS chunks + icons). The large
// on-demand assets (OCR/model/ort-wasm) are excluded via injectManifest
// globIgnores and runtime-cached CacheFirst below. Referencing self.__WB_MANIFEST
// here keeps the token alive through the Vite build so workbox can inject the
// manifest list at this call site.
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
const cacheFirst = async (request: Request): Promise<Response> => {
  const cache = await caches.open(CACHE_MODELS);
  const hit = await cache.match(request);
  if (hit) return hit;
  const response = await fetch(request);
  if (response.ok && request.method === "GET") {
    cache.put(request, response.clone());
  }
  return response;
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
    event.respondWith(cacheFirst(event.request));
  }
});
