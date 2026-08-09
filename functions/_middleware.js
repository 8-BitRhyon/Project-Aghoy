// === CORS MIDDLEWARE ===
// Applied to all Pages Functions routes under /api/*
// Restricts Access-Control-Allow-Origin to known domains

const ALLOWED_ORIGINS = [
  "https://project-aghoy.pages.dev",
  "http://localhost:5173",
  "http://localhost:3000",
];

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "no-referrer",
  "Cache-Control": "no-store",
};

export const onRequest = async (context) => {
  const { request, next } = context;
  const origin = request.headers.get("Origin");

  // A disallowed cross-origin request is rejected outright. No Origin header
  // means same-origin or non-browser traffic: proceed without CORS headers.
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return new Response("Forbidden origin", {
      status: 403,
      headers: { ...SECURITY_HEADERS },
    });
  }

  // Handle preflight
  if (request.method === "OPTIONS") {
    const headers = { ...SECURITY_HEADERS };
    if (origin) {
      headers["Access-Control-Allow-Origin"] = origin;
      headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS";
      headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization, X-Consent-Token";
      headers["Access-Control-Max-Age"] = "86400";
      headers["Vary"] = "Origin";
    }
    return new Response(null, {
      status: 204,
      headers,
    });
  }

  const response = await next();

  const newHeaders = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    newHeaders.set(key, value);
  }
  if (origin) {
    newHeaders.set("Access-Control-Allow-Origin", origin);
    newHeaders.set("Vary", "Origin");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
};
