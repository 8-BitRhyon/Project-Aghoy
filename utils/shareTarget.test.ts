// utils/shareTarget.test.ts - pure tests for Web Share Target parsing.

// @vitest-environment jsdom
import { describe, expect, it, vi, afterEach } from "vitest";
import { combineSharePayload, fetchSharedFile, fileMeta, isSelfShare, parseShareQuery } from "./shareTarget";

describe("combineSharePayload", () => {
  it("returns just the text when only text is shared", () => {
    const r = combineSharePayload({ text: "GCash: your account is locked" });
    expect(r.text).toBe("GCash: your account is locked");
    expect(r.file).toBeNull();
  });

  it("appends url and title for context", () => {
    const r = combineSharePayload({ text: "URGENT", url: "https://jt-hold.top", title: "Parcel fee" });
    expect(r.text).toContain("URGENT");
    expect(r.text).toContain("https://jt-hold.top");
    expect(r.text).toContain("Parcel fee");
  });

  it("does not duplicate the title if it is already in the text", () => {
    const r = combineSharePayload({ text: "URGENT parcel", url: "https://x.top", title: "URGENT parcel" });
    expect(r.text.match(/URGENT parcel/g)?.length).toBe(1);
  });

  it("handles an empty share gracefully", () => {
    expect(combineSharePayload({}).text).toBe("");
  });
});

describe("parseShareQuery", () => {
  it("reads text from URLSearchParams", () => {
    const r = parseShareQuery(new URLSearchParams("text=check+this&url=https%3A%2F%2Fa.top"));
    expect(r.text).toContain("check this");
    expect(r.text).toContain("https://a.top");
  });

  it("reads the service worker's share_text param", () => {
    const r = parseShareQuery(new URLSearchParams("share_text=GCash%3A+account+locked"));
    expect(r.text).toContain("GCash");
    expect(r.text).toContain("account locked");
  });

  it("flags share_file=1 as a file share", () => {
    const r = parseShareQuery(new URLSearchParams("share_text=hello&share_file=1"));
    expect(r.text).toContain("hello");
    expect(r.file).not.toBeNull();
  });
});

describe("isSelfShare", () => {
  it("flags a share of the app's own origin", () => {
    expect(isSelfShare("https://project-aghoy.pages.dev/", "https://project-aghoy.pages.dev")).toBe(true);
  });
  it("allows a foreign share URL", () => {
    expect(isSelfShare("https://gcash-verify.top", "https://project-aghoy.pages.dev")).toBe(false);
  });
  it("handles missing/empty urls", () => {
    expect(isSelfShare(null, "https://x.dev")).toBe(false);
    expect(isSelfShare("", "https://x.dev")).toBe(false);
  });
});

describe("fetchSharedFile", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("reads the stashed shared image as a data URL", async () => {
    const blob = new Blob(["fake-image-bytes"], { type: "image/png" });
    vi.stubGlobal("fetch", vi.fn(async () => new Response(blob, { headers: { "Content-Type": "image/png" } })));
    const file = await fetchSharedFile();
    expect(file).not.toBeNull();
    expect(file!.mimeType).toBe("image/png");
    expect(file!.dataUrl).toContain("data:image/png;base64,");
  });

  it("returns null when the service worker has no shared file", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response("not found", { status: 404 })));
    expect(await fetchSharedFile()).toBeNull();
  });

  it("returns null on fetch failure", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => { throw new TypeError("Failed to fetch"); }));
    expect(await fetchSharedFile()).toBeNull();
  });
});

describe("fileMeta", () => {
  it("extracts image metadata from a File-like object", () => {
    const f = fileMeta({ name: "scam.png", type: "image/png", size: 1024 });
    expect(f).toEqual({ name: "scam.png", type: "image/png", size: 1024 });
  });
  it("returns null for empty input", () => {
    expect(fileMeta(null)).toBeNull();
    expect(fileMeta(undefined)).toBeNull();
  });
});
