// utils/shareTarget.test.ts - pure tests for Web Share Target parsing.

import { describe, expect, it } from "vitest";
import { combineSharePayload, fileMeta, isSelfShare, parseShareQuery } from "./shareTarget";

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
