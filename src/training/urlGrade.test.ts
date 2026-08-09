// src/training/urlGrade.test.ts - pure tests for the on-device URL grader.

import { describe, expect, it } from "vitest";
import { gradeMessageLinks, gradeUrl, SHORTENERS } from "./urlGrade";

describe("gradeUrl - suspicious links", () => {
  it("flags brand-in-hostname with a non-official domain", () => {
    const g = gradeUrl("https://gcash-verify.example.com/login");
    expect(g?.grade).toBe("SUSPICIOUS_LINK");
    expect(g?.reasons.join(" ")).toContain("gcash");
  });

  it("flags a raw IP host", () => {
    const g = gradeUrl("http://45.33.22.11/claim-prize");
    expect(g?.grade).toBe("SUSPICIOUS_LINK");
  });

  it("flags the @ redirect trick", () => {
    const g = gradeUrl("https://gcash.com@evil.xyz/verify");
    expect(g?.grade).toBe("SUSPICIOUS_LINK");
  });

  it("flags punycode hosts", () => {
    const g = gradeUrl("https://xn--gcas-hna.com/login");
    expect(g?.grade).toBe("SUSPICIOUS_LINK");
  });

  it("flags free-hosting + suspicious TLD", () => {
    const g = gradeUrl("https://verify-bdo-login.top");
    expect(g?.grade).toBe("SUSPICIOUS_LINK");
  });
});

describe("gradeUrl - legit / verified links", () => {
  it("marks an official PH domain as verified and low-risk", () => {
    const g = gradeUrl("https://help.shopee.ph/article/123");
    expect(g?.verifiedOfficialDomain).toBe(true);
    expect(g?.grade).not.toBe("SUSPICIOUS_LINK");
  });

  it("marks a plain legit-looking domain as not suspicious", () => {
    const g = gradeUrl("https://en.wikipedia.org/wiki/Philippines");
    expect(g?.grade).toBe("LEGIT_LINK");
    expect(g?.score).toBeLessThan(10);
  });
});

describe("gradeUrl - shorteners and ambiguity", () => {
  it("treats shorteners as AMBIGUOUS regardless of score", () => {
    const g = gradeUrl("https://bit.ly/3xYzAbc");
    expect(g?.grade).toBe("AMBIGUOUS_LINK");
    expect(g?.isShortener).toBe(true);
  });

  it("recognizes the shortener list", () => {
    expect(SHORTENERS.has("bit.ly")).toBe(true);
    expect(SHORTENERS.has("t.co")).toBe(true);
  });
});

describe("gradeMessageLinks", () => {
  it("returns no-url AMBIGUOUS when there are no links", () => {
    const r = gradeMessageLinks("Just checking in, no links here");
    expect(r.urlCount).toBe(0);
    expect(r.worst.grade).toBe("AMBIGUOUS_LINK");
  });

  it("returns the worst grade across multiple links", () => {
    const r = gradeMessageLinks("Check https://shopee.ph for my order or click https://gcash-verify.top now");
    expect(r.urlCount).toBe(2);
    expect(r.worst.grade).toBe("SUSPICIOUS_LINK");
  });
});
