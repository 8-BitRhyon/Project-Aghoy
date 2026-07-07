// === CORS MIDDLEWARE ===
// Applied to all Pages Functions routes under /api/*
// Restricts Access-Control-Allow-Origin to known domains

const ALLOWED_ORIGINS = [
  "https://project-aghoy.pages.dev",
  "https://project-aghoy.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

export const onRequest = async (context) => {
  const { request, next } = context;
  const origin = request.headers.get("Origin") || "";

  // Determine allowed origin
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

  // Handle preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
        "Vary": "Origin",
      },
    });
  }

  const response = await next();

  const newHeaders = new Headers(response.headers);
  newHeaders.set("Access-Control-Allow-Origin", allowedOrigin);
  newHeaders.set("Vary", "Origin");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
};
