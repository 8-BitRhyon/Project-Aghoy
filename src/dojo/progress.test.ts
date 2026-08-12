import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("./scenarios", async (importOriginal) => {
  const actual = await importOriginal<typeof import("./scenarios")>();
  return {
    ...actual,
    getScenario: vi.fn().mockImplementation((id: string) => actual.getScenario(id)),
  };
});

import { getScenario, type Scenario, type ScenarioDifficulty, type ScenarioArchetype } from "./scenarios";
import {
  emptyProgress,
  applyPlacementResult,
  buildPlacementQuiz,
  applyAnswer,
  dueScenarios,
  scheduleMirror,
  familyMasteryState,
  markFamilyMastered,
  decayFamilies,
  recordDailyGoal,
  streakStatus,
  weakestFamilies,
  buildFinalExam,
  applyExamResult,
  sessionPlan,
  isFamilyUnlocked,
  isTierUnlocked,
  countMastered,
  familyRate,
  transferFromLog,
  challengeProgress,
  claimChallenge,
  detectSurpriseReward,
  challengeReward,
  buyStreakFreeze,
  setDailyGoal,
  STREAK_FREEZE_COST,
  addDays,
  XP_CORRECT,
  XP_WRONG,
  FAMILY_IDS,
  type FamilyId,
  type LearnerProgress,
} from "./progress";

const makeScenario = (
  id: string,
  family: FamilyId,
  difficulty: ScenarioDifficulty = "medium",
  archetype: ScenarioArchetype = "redirect",
): Scenario => ({
  id,
  title: id,
  icon: "Shield",
  difficulty,
  family,
  archetype,
  category: "test",
  setup: "test setup",
  steps: [
    {
      id: "s1",
      channel: "sms",
      senderLabel: "Test",
      message: "test message",
      question: "test question",
      options: [{ id: "a", text: "yes", correct: true, feedback: "right" }],
      tip: "test tip",
    },
  ],
  debrief: "test debrief",
  source: "curated",
});

const bank1 = makeScenario("bank-1", "bank", "medium");
const delivery1 = makeScenario("delivery-1", "delivery", "easy");
const delivery2 = makeScenario("delivery-2", "delivery", "easy");
const customs1 = makeScenario("customs-1", "customs", "easy");
const telco1 = makeScenario("telco-1", "telco", "medium");
const gov1 = makeScenario("gov-1", "government", "medium");
const job1 = makeScenario("job-1", "job", "easy");
const famEmerg1 = makeScenario("fam-emergency-1", "family-emergency", "easy");
const romance1 = makeScenario("romance-1", "romance", "medium");
const invest1 = makeScenario("invest-1", "investment", "medium");
const charity1 = makeScenario("charity-1", "charity", "medium");
const trap1 = makeScenario("trap-1", "delivery", "easy", "trap");
const trap2 = makeScenario("trap-2", "customs", "medium", "trap");
const good1 = makeScenario("good-1", "good-message", "easy", "good-message");
const good2 = makeScenario("good-2", "fake-reward", "easy", "good-message");
const fakeReward1 = makeScenario("fake-reward-1", "fake-reward", "easy");
const other1 = makeScenario("other-1", "telco", "medium");
const other2 = makeScenario("other-2", "government", "medium");

const gcashOtp = getScenario("gcash-otp")!;
const parcelFee = getScenario("parcel-fee")!;
const quishingQr = getScenario("quishing-qr")!;

const D = "2026-08-01";

const practice = (p: LearnerProgress, scenario: Scenario, correct: boolean, atDay: string): LearnerProgress =>
  applyAnswer(p, { scenario, correct, atDay, stepIndex: 0, optionId: "a" });

const allCorrect = (p: LearnerProgress, scenario: Scenario, times: number, atDay: string): LearnerProgress => {
  let cur = p;
  for (let i = 0; i < times; i += 1) cur = practice(cur, scenario, true, atDay);
  return cur;
};

describe("emptyProgress", () => {
  it("starts a fresh learner at shield level 1 with nothing earned", () => {
    const p = emptyProgress();
    expect(p.shieldLevel).toBe(1);
    expect(p.xp).toBe(0);
    expect(p.placementScore).toBeNull();
    expect(p.placementTier).toBe("easy");
    expect(p.streakCurrent).toBe(0);
    expect(p.streakBest).toBe(0);
    expect(p.lastActiveDay).toBeNull();
    expect(p.completedScenarioIds).toEqual([]);
    expect(p.srsQueue).toEqual([]);
    expect(p.wrongAnswers).toEqual([]);
    expect(p.examPassed).toBe(false);
    expect(p.examBestScore).toBeNull();
    expect(p.studyPlan).toEqual([]);
    expect(p.unlocked).toEqual({ vishing: false, hardTier: false, trap: false, goodMessage: false });
    for (const f of FAMILY_IDS) {
      expect(p.familyMastery[f].attempts).toBe(0);
      expect(p.familyMastery[f].correct).toBe(0);
      expect(p.familyMastery[f].last5Correct).toEqual([]);
      expect(p.familyMastery[f].mastered).toBe(false);
    }
  });
});

describe("placement test", () => {
  it("builds a quiz with at most 2 scenarios per family", () => {
    const quiz = buildPlacementQuiz(["ewallet", "delivery"], "easy", 12);
    expect(quiz).toEqual(["gcash-otp", "parcel-fee"]);
    expect(quiz.length).toBeLessThanOrEqual(12);
    const ewalletIds = quiz.filter((id) => getScenario(id)?.family === "ewallet");
    expect(ewalletIds.length).toBe(1);
    expect(buildPlacementQuiz(["ewallet", "delivery"], "easy", 12)).toEqual(quiz);
  });

  it("respects the requested count and family order", () => {
    const quiz = buildPlacementQuiz(["ewallet", "bank", "delivery"], "easy", 3);
    expect(quiz).toEqual(["gcash-otp", "parcel-fee"]);
    expect(quiz.length).toBeLessThanOrEqual(3);
  });

  it("maps placement scores to shield levels", () => {
    expect(applyPlacementResult(emptyProgress(), 0, 12).shieldLevel).toBe(1);
    expect(applyPlacementResult(emptyProgress(), 4, 12).shieldLevel).toBe(1);
    expect(applyPlacementResult(emptyProgress(), 5, 12).shieldLevel).toBe(2);
    expect(applyPlacementResult(emptyProgress(), 7, 12).shieldLevel).toBe(2);
    expect(applyPlacementResult(emptyProgress(), 8, 12).shieldLevel).toBe(3);
    expect(applyPlacementResult(emptyProgress(), 10, 12).shieldLevel).toBe(3);
    expect(applyPlacementResult(emptyProgress(), 11, 12).shieldLevel).toBe(4);
    expect(applyPlacementResult(emptyProgress(), 12, 12).shieldLevel).toBe(4);
  });

  it("records the placement score, tier, and unlocks", () => {
    const p = applyPlacementResult(emptyProgress(), 11, 12);
    expect(p.placementScore).toBe(11);
    expect(p.placementTier).toBe("hard");
    expect(p.shieldLevel).toBe(4);
    expect(p.unlocked.trap).toBe(true);
    expect(p.unlocked.goodMessage).toBe(true);
    expect(p.unlocked.vishing).toBe(false);
    expect(p.unlocked.hardTier).toBe(false);
    const low = applyPlacementResult(emptyProgress(), 6, 12);
    expect(low.placementTier).toBe("easy");
    expect(low.shieldLevel).toBe(2);
    const mid = applyPlacementResult(emptyProgress(), 9, 12);
    expect(mid.placementTier).toBe("medium");
  });
});

describe("shield level gating", () => {
  it("unlocks easy families by level", () => {
    const p1 = emptyProgress();
    expect(isFamilyUnlocked(p1, "ewallet")).toBe(true);
    expect(isFamilyUnlocked(p1, "fake-reward")).toBe(true);
    expect(isFamilyUnlocked(p1, "delivery")).toBe(false);
    expect(isFamilyUnlocked(p1, "job")).toBe(false);
    const p4 = applyPlacementResult(emptyProgress(), 12, 12);
    expect(isFamilyUnlocked(p4, "delivery")).toBe(true);
    expect(isFamilyUnlocked(p4, "customs")).toBe(true);
    expect(isFamilyUnlocked(p4, "job")).toBe(true);
    expect(isFamilyUnlocked(p4, "family-emergency")).toBe(true);
    expect(isFamilyUnlocked(p4, "bank")).toBe(true);
    expect(isFamilyUnlocked(p4, "telco")).toBe(true);
    expect(isFamilyUnlocked(p4, "government")).toBe(true);
    expect(isFamilyUnlocked(p4, "romance")).toBe(false);
    expect(isFamilyUnlocked(p4, "vishing")).toBe(false);
  });

  it("keeps vishing locked until bank mastery reaches 0.8", () => {
    const p4 = applyPlacementResult(emptyProgress(), 12, 12);
    expect(isFamilyUnlocked(p4, "vishing")).toBe(false);
    const practiced = allCorrect(p4, bank1, 4, D);
    expect(familyRate(practiced, "bank")).toBe(1);
    expect(isFamilyUnlocked(practiced, "vishing")).toBe(false);
    const p5 = { ...practiced, shieldLevel: 5 };
    expect(isFamilyUnlocked(p5, "vishing")).toBe(true);
    const half = applyAnswer(p5, { scenario: bank1, correct: false, atDay: D });
    const halfMore = applyAnswer(half, { scenario: bank1, correct: false, atDay: D });
    expect(familyRate(halfMore, "bank")).toBeLessThan(0.8);
    expect(isFamilyUnlocked(halfMore, "vishing")).toBe(false);
  });

  it("climbs the shield ladder through mastery alone (no placement needed)", () => {
    // The audit found the ladder was unreachable: shieldLevel only rose via
    // applyPlacementResult and there is no placement UI. Mastering every
    // family at a level must unlock the next level.
    const ewallet = getScenario("gcash-otp")!;
    const fakeReward = getScenario("task-scam")!; // family: investment - use only ewallet/fake-reward family scenarios

    // Level 1: ewallet + fake-reward. Master both (>=4/5 correct, >=3 attempts).
    let p = allCorrect(emptyProgress(), ewallet, 4, D);
    expect(p.shieldLevel).toBe(1);
    expect(isFamilyUnlocked(p, "delivery")).toBe(false);
    const famOfEwallet = ewallet.family;
    expect(famOfEwallet).toBe("ewallet");
    // Mastery needs TWO families at level 1. Use any other level-1 family via a
    // scenario of that family - construct by copying the ewallet scenario's shape.
    const other = { ...ewallet, id: "fake-reward-2", family: "fake-reward" as const, steps: [...ewallet.steps] };
    p = allCorrect(p, other, 4, D);
    expect(p.shieldLevel).toBe(2);
    expect(isFamilyUnlocked(p, "delivery")).toBe(true);
  });

  it("locks hard tier until at least 4 families are mastered", () => {
    const p4 = applyPlacementResult(emptyProgress(), 12, 12);
    expect(isTierUnlocked(p4, "hard")).toBe(false);
    const p7 = { ...p4, shieldLevel: 7 };
    expect(isTierUnlocked(p7, "hard")).toBe(false);
    const m1 = markFamilyMastered(p7, "ewallet", D);
    const m2 = markFamilyMastered(m1, "delivery", D);
    const m3 = markFamilyMastered(m2, "customs", D);
    expect(countMastered(m3)).toBe(3);
    expect(isTierUnlocked(m3, "hard")).toBe(false);
    const m4 = markFamilyMastered(m3, "job", D);
    expect(countMastered(m4)).toBe(4);
    expect(isTierUnlocked(m4, "hard")).toBe(true);
    expect(m4.unlocked.hardTier).toBe(true);
  });

  it("gates medium tier at level 4 and hard-tier families behind mastery", () => {
    const p3 = applyPlacementResult(emptyProgress(), 9, 12);
    expect(p3.shieldLevel).toBe(3);
    expect(isTierUnlocked(p3, "medium")).toBe(false);
    const p4 = applyPlacementResult(emptyProgress(), 12, 12);
    expect(isTierUnlocked(p4, "medium")).toBe(true);
    expect(isFamilyUnlocked(p4, "bank")).toBe(true);
    // Hard tier (quishing, remittance, loan-app) needs 4 mastered families.
    expect(isTierUnlocked(p4, "hard")).toBe(false);
    expect(isFamilyUnlocked(p4, "quishing")).toBe(false);
  });
});

describe("applyAnswer", () => {
  it("updates mastery, xp, and schedules the first review", () => {
    const p = practice(emptyProgress(), gcashOtp, true, D);
    expect(p.familyMastery.ewallet.attempts).toBe(1);
    expect(p.familyMastery.ewallet.correct).toBe(1);
    expect(p.familyMastery.ewallet.last5Correct).toEqual([true]);
    expect(p.xp).toBe(XP_CORRECT);
    expect(p.srsQueue).toEqual([{ scenarioId: "gcash-otp", box: 1, dueAt: addDays(D, 1) }]);
  });

  it("advances the SRS box 1->2->3->4 with growing intervals", () => {
    const p = allCorrect(emptyProgress(), gcashOtp, 4, D);
    expect(p.srsQueue).toEqual([{ scenarioId: "gcash-otp", box: 4, dueAt: addDays(D, 14) }]);
    expect(p.xp).toBe(4 * XP_CORRECT);
    expect(p.familyMastery.ewallet.last5Correct).toEqual([true, true, true, true]);
    expect(p.completedScenarioIds).toEqual([]);
  });

  it("retires a scenario on a box-4 correct answer", () => {
    const p = allCorrect(emptyProgress(), gcashOtp, 5, D);
    expect(p.completedScenarioIds).toContain("gcash-otp");
    expect(p.srsQueue.find((i) => i.scenarioId === "gcash-otp")).toBeUndefined();
    expect(p.xp).toBe(5 * XP_CORRECT);
  });

  it("a wrong answer resets the box to 1 and records the miss", () => {
    const p2 = allCorrect(emptyProgress(), gcashOtp, 2, D);
    expect(p2.srsQueue[0].box).toBe(2);
    const wrong = applyAnswer(p2, { scenario: gcashOtp, correct: false, atDay: D, stepIndex: 1, optionId: "b" });
    expect(wrong.srsQueue[0].box).toBe(1);
    expect(wrong.srsQueue[0].dueAt).toBe(addDays(D, 1));
    expect(wrong.wrongAnswers).toEqual([
      { scenarioId: "gcash-otp", stepIndex: 1, optionId: "b", answeredAt: D },
    ]);
    expect(wrong.xp).toBe(2 * XP_CORRECT + XP_WRONG);
    expect(wrong.familyMastery.ewallet.correct).toBe(2);
    expect(wrong.familyMastery.ewallet.attempts).toBe(3);
    expect(wrong.familyMastery.ewallet.last5Correct).toEqual([true, true, false]);
  });

  it("keeps the rolling last-5 window at 5 entries", () => {
    const p = allCorrect(emptyProgress(), gcashOtp, 6, D);
    expect(p.familyMastery.ewallet.last5Correct).toEqual([true, true, true, true, true]);
    expect(p.familyMastery.ewallet.attempts).toBe(6);
    expect(p.familyMastery.ewallet.correct).toBe(6);
  });

  it("a wrong answer still schedules a first review for a brand-new scenario", () => {
    const p = practice(emptyProgress(), parcelFee, false, D);
    expect(p.srsQueue).toEqual([{ scenarioId: "parcel-fee", box: 1, dueAt: addDays(D, 1) }]);
    expect(p.wrongAnswers).toHaveLength(1);
  });
});

describe("streaks", () => {
  it("grows on consecutive active days and tracks best", () => {
    const d1 = practice(emptyProgress(), gcashOtp, true, "2026-08-01");
    expect(d1.streakCurrent).toBe(1);
    expect(d1.streakBest).toBe(1);
    const d2 = practice(d1, gcashOtp, true, "2026-08-02");
    const d3 = practice(d2, gcashOtp, true, "2026-08-03");
    expect(d3.streakCurrent).toBe(3);
    expect(d3.streakBest).toBe(3);
  });

  it("does not double count the same day", () => {
    const p = allCorrect(emptyProgress(), gcashOtp, 3, "2026-08-01");
    expect(p.streakCurrent).toBe(1);
    expect(p.streakBest).toBe(1);
  });

  it("resets current to 1 on a missed day but keeps best", () => {
    const p = allCorrect(emptyProgress(), gcashOtp, 2, "2026-08-01");
    const d2 = practice(p, gcashOtp, true, "2026-08-02");
    expect(d2.streakCurrent).toBe(2);
    const gap = practice(d2, gcashOtp, true, "2026-08-05");
    expect(gap.streakCurrent).toBe(1);
    expect(gap.streakBest).toBe(2);
  });

  it("a correct answer on the same day as an earlier wrong answer starts a streak", () => {
    const wrongFirst = practice(emptyProgress(), gcashOtp, false, D);
    expect(wrongFirst.streakCurrent).toBe(0);
    const p = practice(wrongFirst, gcashOtp, true, D);
    expect(p.streakCurrent).toBe(1);
    expect(p.streakBest).toBe(1);
  });

  it("recordDailyGoal extends the streak on goal days and resets on a missed day", () => {
    const base = allCorrect(emptyProgress(), gcashOtp, 2, "2026-08-01");
    const day2 = practice(base, gcashOtp, true, "2026-08-02");
    const met = recordDailyGoal(day2, 3, 3, "2026-08-03");
    expect(met.streakCurrent).toBe(3);
    expect(met.streakBest).toBe(3);
    expect(met.lastActiveDay).toBe("2026-08-03");
    const missed = recordDailyGoal(met, 0, 3, "2026-08-05");
    expect(missed.streakCurrent).toBe(0);
    expect(missed.streakBest).toBe(3);
    const resumed = recordDailyGoal(missed, 4, 3, "2026-08-06");
    expect(resumed.streakCurrent).toBe(1);
  });

  it("streakStatus reports current, best, and active", () => {
    expect(streakStatus(emptyProgress())).toEqual({ current: 0, best: 0, active: false });
    const p = practice(emptyProgress(), gcashOtp, true, D);
    expect(streakStatus(p)).toEqual({ current: 1, best: 1, active: true });
  });
});

describe("dueScenarios", () => {
  it("returns due items plus warm-up picks from the weakest family", () => {
    let p = practice(emptyProgress(), gcashOtp, true, "2026-07-29");
    p = practice(p, parcelFee, true, "2026-07-29");
    expect(p.srsQueue).toEqual([
      { scenarioId: "gcash-otp", box: 1, dueAt: "2026-07-30" },
      { scenarioId: "parcel-fee", box: 1, dueAt: "2026-07-30" },
    ]);
    const plan = dueScenarios(p, "2026-07-31", ["gcash-otp", "parcel-fee"]);
    // Both are due by 07-31; plan includes them with no duplicates.
    expect(plan[0]).toBe("gcash-otp");
    expect(plan).toContain("parcel-fee");
    expect(new Set(plan).size).toBe(plan.length);
    for (const id of plan) expect(["gcash-otp", "parcel-fee"]).toContain(id);
  });

  it("excludes items not yet due and ids outside the pool", () => {
    let p = practice(emptyProgress(), gcashOtp, true, D);
    p = practice(p, parcelFee, true, D);
    const plan = dueScenarios(p, D, ["parcel-fee"]);
    // The not-yet-due gcash-otp (due tomorrow) must be excluded; the plan may
    // include parcel-fee and warm-up picks from unlocked families in the pool.
    expect(plan).not.toContain("gcash-otp");
    for (const id of plan) expect(["parcel-fee"]).toContain(id);
  });

  it("returns nothing for a brand-new learner", () => {
    expect(dueScenarios(emptyProgress(), D, ["gcash-otp"])).toEqual([]);
  });
});

describe("scheduleMirror", () => {
  it("records the sibling at box 1 due tomorrow", () => {
    const p = scheduleMirror(emptyProgress(), { wrongId: "gcash-otp", siblingId: "parcel-fee", atDay: D });
    expect(p.srsQueue).toEqual([{ scenarioId: "parcel-fee", box: 1, dueAt: addDays(D, 1) }]);
    expect(p.completedScenarioIds).toEqual([]);
  });

  it("re-queues an existing sibling back to box 1", () => {
    let p = allCorrect(emptyProgress(), parcelFee, 3, D);
    expect(p.srsQueue[0].box).toBe(3);
    p = scheduleMirror(p, { wrongId: "gcash-otp", siblingId: "parcel-fee", atDay: D });
    expect(p.srsQueue[0]).toEqual({ scenarioId: "parcel-fee", box: 1, dueAt: addDays(D, 1) });
  });
});

describe("mastery states", () => {
  it("labels by last-5 accuracy and attempts", () => {
    expect(familyMasteryState(emptyProgress(), "ewallet")).toBe("practiced");
    const p2 = practice(emptyProgress(), gcashOtp, true, D);
    expect(familyMasteryState(p2, "ewallet")).toBe("proficient");
    const low = allCorrect(emptyProgress(), gcashOtp, 2, D);
    const low3 = practice(low, gcashOtp, false, D);
    const low4 = practice(low3, gcashOtp, false, D);
    const low5 = practice(low4, gcashOtp, false, D);
    expect(familyMasteryState(low5, "ewallet")).toBe("familiar");
    const mid = allCorrect(emptyProgress(), gcashOtp, 3, D);
    const mid2 = practice(mid, gcashOtp, false, D);
    const mid3 = practice(mid2, gcashOtp, false, D);
    expect(familyMasteryState(mid3, "ewallet")).toBe("proficient");
    const high = allCorrect(emptyProgress(), gcashOtp, 3, D);
    expect(familyMasteryState(high, "ewallet")).toBe("mastered");
  });

  it("becomes can-teach only after passing the exam", () => {
    const practiced = allCorrect(emptyProgress(), gcashOtp, 4, D);
    expect(familyMasteryState(practiced, "ewallet")).toBe("mastered");
    const failed = applyExamResult(practiced, 11, 15);
    expect(failed.examPassed).toBe(false);
    expect(familyMasteryState(failed, "ewallet")).toBe("mastered");
    const passed = applyExamResult(practiced, 12, 15);
    expect(passed.examPassed).toBe(true);
    expect(familyMasteryState(passed, "ewallet")).toBe("can-teach");
  });

  it("markFamilyMastered flags the family for the hard-tier gate", () => {
    const p = markFamilyMastered(emptyProgress(), "ewallet", D);
    expect(p.familyMastery.ewallet.mastered).toBe(true);
    expect(countMastered(p)).toBe(1);
  });

  it("decays a mastered family after 14 days without practice", () => {
    const marked = markFamilyMastered(emptyProgress(), "ewallet", "2026-07-01");
    const before = decayFamilies(marked, "2026-07-14");
    expect(before.familyMastery.ewallet.mastered).toBe(true);
    const after = decayFamilies(marked, "2026-07-15");
    expect(after.familyMastery.ewallet.mastered).toBe(false);
    expect(countMastered(after)).toBe(0);
  });

  it("decay keeps mastery when the family was practiced recently", () => {
    const marked = markFamilyMastered(emptyProgress(), "ewallet", "2026-07-01");
    const practiced = practice(marked, gcashOtp, true, "2026-07-10");
    const after = decayFamilies(practiced, "2026-07-15");
    expect(after.familyMastery.ewallet.mastered).toBe(true);
  });
});

describe("exam", () => {
  beforeEach(() => {
    const mock = vi.mocked(getScenario);
    const fallback = mock.getMockImplementation()!;
    mock.mockImplementation((id: string) => {
      if (id === "trap-1") return trap1;
      if (id === "trap-2") return trap2;
      if (id === "good-1") return good1;
      if (id === "good-2") return good2;
      if (id === "other-1") return other1;
      if (id === "other-2") return other2;
      return fallback(id);
    });
  });

  it("builds a mixed exam including 2 traps and 2 good messages", () => {
    const pool = ["trap-1", "trap-2", "good-1", "good-2", "other-1", "other-2"];
    const exam = buildFinalExam(pool, 15);
    expect(exam).toEqual(["trap-1", "trap-2", "good-1", "good-2", "other-1", "other-2"]);
    expect(exam.filter((id) => getScenario(id)?.archetype === "trap").length).toBeGreaterThanOrEqual(2);
    expect(exam.filter((id) => getScenario(id)?.archetype === "good-message").length).toBeGreaterThanOrEqual(2);
  });

  it("returns what it can when the pool is short", () => {
    const exam = buildFinalExam(["trap-1", "good-1", "good-2", "other-1"], 15);
    expect(exam).toEqual(["trap-1", "good-1", "good-2", "other-1"]);
    const capped = buildFinalExam(["trap-1", "trap-2", "good-1", "other-1"], 3);
    expect(capped).toHaveLength(3);
    expect(capped).toContain("trap-1");
    expect(capped).toContain("trap-2");
  });

  it("passes at 80% and records the best score", () => {
    const passed = applyExamResult(emptyProgress(), 12, 15);
    expect(passed.examPassed).toBe(true);
    expect(passed.examBestScore).toBe(12);
    expect(passed.studyPlan).toEqual([]);
    const higher = applyExamResult(emptyProgress(), 13, 15);
    expect(higher.examBestScore).toBe(13);
  });

  it("fails below 80% and returns a study plan of the weakest families", () => {
    const practiced = allCorrect(emptyProgress(), gcashOtp, 2, D);
    const low = practice(practiced, gcashOtp, false, D);
    const failed = applyExamResult(low, 11, 15);
    expect(failed.examPassed).toBe(false);
    expect(failed.examBestScore).toBe(11);
    expect(failed.studyPlan).toContain("ewallet");
    expect(failed.studyPlan.length).toBeLessThanOrEqual(3);
  });
});

describe("weakestFamilies", () => {
  it("ranks unlocked practiced families by last-5 accuracy ascending", () => {
    let p = emptyProgress();
    for (let i = 0; i < 5; i += 1) {
      p = practice(p, gcashOtp, i % 2 === 0, D);
      p = practice(p, fakeReward1, true, D);
    }
    expect(familyRate(p, "ewallet")).toBe(0.6);
    expect(familyRate(p, "fake-reward")).toBe(1);
    const weak = weakestFamilies(p, 3);
    expect(weak[0]).toBe("ewallet");
    expect(weak[1]).toBe("fake-reward");
    expect(weak).not.toContain("delivery");
  });

  it("skips families with no practice", () => {
    const p = practice(emptyProgress(), gcashOtp, true, D);
    expect(weakestFamilies(p, 3)).toEqual(["ewallet"]);
  });
});

describe("sessionPlan", () => {
  const pool: Record<FamilyId, string[]> = {
    ewallet: ["gcash-otp"],
    "fake-reward": ["fake-reward-1"],
    delivery: ["delivery-1"],
    customs: ["customs-1"],
    job: ["job-1"],
    "family-emergency": ["fam-emergency-1"],
    telco: ["telco-1"],
    government: ["gov-1"],
    vishing: ["vishing-1"],
    romance: ["romance-1"],
    investment: ["invest-1"],
    charity: ["charity-1"],
    bank: ["bank-1"],
    quishing: ["quishing-1"],
    "sim-pretext": ["sim-pretext-1"],
    remittance: ["remittance-1"],
    "loan-app": ["loan-app-1"],
    "good-message": ["good-message-1"],
  };

  const familyOfId = (id: string): FamilyId | undefined => {
    for (const f of FAMILY_IDS) if (pool[f]?.includes(id)) return f;
    return getScenario(id)?.family;
  };

  it("starts with due SRS items and never repeats a family", () => {
    const p4 = applyPlacementResult(emptyProgress(), 12, 12);
    const withDue = practice(p4, gcashOtp, true, "2026-07-29");
    expect(withDue.srsQueue[0].dueAt).toBe("2026-07-30");
    const plan = sessionPlan(withDue, D, pool, 3);
    expect(plan[0]).toBe("gcash-otp");
    expect(plan).toHaveLength(3);
    const families = plan.map(familyOfId);
    expect(new Set(families).size).toBe(plan.length);
  });

  it("prefers a due SRS item over a warm-up from the same family", () => {
    let p4 = applyPlacementResult(emptyProgress(), 12, 12);
    p4 = practice(p4, gcashOtp, true, "2026-07-29");
    p4 = practice(p4, famEmerg1, false, "2026-07-31");
    const weakest = weakestFamilies(p4, 1)[0];
    expect(weakest).toBe("family-emergency");
    const plan = sessionPlan(p4, D, pool, 3);
    expect(plan[0]).toBe("gcash-otp");
    const families = plan.map(familyOfId);
    expect(new Set(families).size).toBe(plan.length);
  });

  it("adds a warm-up from the weakest family when it is not already due", () => {
    let p4 = applyPlacementResult(emptyProgress(), 12, 12);
    p4 = practice(p4, famEmerg1, false, "2026-07-31");
    const plan = sessionPlan(p4, D, pool, 3);
    expect(plan).toContain("fam-emergency-1");
    const families = plan.map(familyOfId);
    expect(new Set(families).size).toBe(plan.length);
  });

  it("never puts two scenarios from the same family in one session", () => {
    let p4 = applyPlacementResult(emptyProgress(), 12, 12);
    p4 = practice(p4, delivery1, true, "2026-07-27");
    p4 = practice(p4, delivery2, true, "2026-07-27");
    const plan = sessionPlan(p4, D, pool, 3);
    const deliveryIds = plan.filter((id) => familyOfId(id) === "delivery");
    expect(deliveryIds.length).toBeLessThanOrEqual(1);
    const families = plan.map(familyOfId);
    expect(new Set(families).size).toBe(plan.length);
  });

  it("is deterministic for the same day and state", () => {
    const p4 = applyPlacementResult(emptyProgress(), 12, 12);
    expect(sessionPlan(p4, D, pool, 3)).toEqual(sessionPlan(p4, D, pool, 3));
  });

  it("respects the goal and returns what it can", () => {
    const p1 = emptyProgress();
    const plan = sessionPlan(p1, D, pool, 3);
    expect(plan.length).toBeLessThanOrEqual(3);
    expect(plan.length).toBeGreaterThanOrEqual(1);
    const families = plan.map(familyOfId);
    expect(new Set(families).size).toBe(plan.length);
  });
});

describe("date helpers", () => {
  it("adds days across month boundaries", () => {
    expect(addDays("2026-08-01", 1)).toBe("2026-08-02");
    expect(addDays("2026-08-31", 1)).toBe("2026-09-01");
    expect(addDays("2026-12-31", 1)).toBe("2027-01-01");
    expect(addDays("2028-02-28", 1)).toBe("2028-02-29");
  });
});

describe("transfer metric (novel-lure generalization)", () => {
  it("transferFromLog weights first-time accuracy over repeated", () => {
    const log = [
      // 5 first-time scenarios, all correct (strong generalization)
      { scenarioId: "a", correct: true, firstTime: true, atDay: "2026-08-01" },
      { scenarioId: "b", correct: true, firstTime: true, atDay: "2026-08-01" },
      { scenarioId: "c", correct: true, firstTime: true, atDay: "2026-08-02" },
      { scenarioId: "d", correct: true, firstTime: true, atDay: "2026-08-02" },
      { scenarioId: "e", correct: true, firstTime: true, atDay: "2026-08-03" },
      // repeats, all wrong (memorized lures, no transfer)
      { scenarioId: "a", correct: false, firstTime: false, atDay: "2026-08-04" },
      { scenarioId: "b", correct: false, firstTime: false, atDay: "2026-08-04" },
    ];
    const s = transferFromLog(log as any);
    expect(s.firstTime.accuracy).toBe(1);
    expect(s.repeated.accuracy).toBe(0);
    expect(s.transferScore).toBeGreaterThan(0.6);
    expect(s.firstTimeCount).toBe(5);
  });

  it("returns transferScore 0 when there is no first-time data", () => {
    const s = transferFromLog([{ scenarioId: "a", correct: true, firstTime: false, atDay: "2026-08-01" }] as any);
    expect(s.transferScore).toBe(0);
    expect(s.firstTimeCount).toBe(0);
  });

  it("applyAnswer records firstTime correctly for a never-seen scenario", () => {
    const p = emptyProgress();
    const s = getScenario("gcash-otp")!;
    const after = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-01" });
    expect(after.transferLog.length).toBe(1);
    expect(after.transferLog[0].firstTime).toBe(true);
    expect(after.transferLog[0].scenarioId).toBe("gcash-otp");
  });

  it("a repeated scenario is NOT marked firstTime", () => {
    const s = getScenario("gcash-otp")!;
    const first = applyAnswer(emptyProgress(), { scenario: s, correct: true, atDay: "2026-08-01" });
    const second = applyAnswer(first, { scenario: s, correct: false, atDay: "2026-08-02" });
    expect(second.transferLog.length).toBe(2);
    expect(second.transferLog[0].firstTime).toBe(true);
    expect(second.transferLog[1].firstTime).toBe(false);
  });
});

describe("transfer metric edge cases", () => {
  it("a perfect first-time score with no repeats returns accuracy 1, not 0.5", () => {
    const s = transferFromLog([
      { scenarioId: "a", correct: true, firstTime: true, atDay: "2026-08-01" },
      { scenarioId: "b", correct: true, firstTime: true, atDay: "2026-08-01" },
      { scenarioId: "c", correct: true, firstTime: true, atDay: "2026-08-02" },
    ] as any);
    expect(s.firstTime.accuracy).toBe(1);
    expect(s.transferScore).toBe(1);
  });

  it("an errorless-loop retry does NOT append a second transfer-log entry", () => {
    // A learner who answers wrong then self-corrects on the retry must not be
    // double-counted for the same step - the transfer metric is first-attempt
    // accuracy, and a wrong-then-correct retry used to write TWO entries
    // (deflating the metric for self-correctors).
    const s = getScenario("gcash-otp")!;
    let p = applyAnswer(emptyProgress(), { scenario: s, correct: false, atDay: "2026-08-01" });
    expect(p.transferLog).toHaveLength(1);
    expect(p.transferLog[0].correct).toBe(false);
    // Retry of the same step, now correct, with retriedWrong set.
    p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-01", retriedWrong: true });
    expect(p.transferLog).toHaveLength(1); // no second entry
    // Mastery still learns from the retry (the learner did get it right).
    expect(p.familyMastery[s.family].last5Correct).toEqual([false, true]);
  });

  it("a fresh correct attempt on a NEW step still appends a transfer-log entry", () => {
    const s = getScenario("gcash-otp")!;
    let p = applyAnswer(emptyProgress(), { scenario: s, correct: true, atDay: "2026-08-01" });
    p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-02" }); // different day, no retry flag
    expect(p.transferLog).toHaveLength(2);
  });
});

describe("gamification (retention strategies)", () => {
  it("awards shield coins only for correct answers", () => {
    const s = getScenario("gcash-otp")!;
    const right = applyAnswer(emptyProgress(), { scenario: s, correct: true, atDay: "2026-08-01" });
    expect(right.shieldCoins).toBe(5);
    const wrong = applyAnswer(emptyProgress(), { scenario: s, correct: false, atDay: "2026-08-01" });
    expect(wrong.shieldCoins).toBe(0);
  });

  it("advances the daily-goal challenge on any correct answer", () => {
    const s = getScenario("gcash-otp")!;
    let p = emptyProgress();
    for (let i = 0; i < 3; i++) {
      p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-01" });
    }
    const prog = challengeProgress(p, "daily-goal");
    expect(prog.progress).toBe(3);
    expect(prog.claimed).toBe(false);
  });

  it("resets the daily-goal challenge when the day rolls over", () => {
    const s = getScenario("gcash-otp")!;
    let p = emptyProgress();
    // Day 1: complete 3 of 3.
    for (let i = 0; i < 3; i++) {
      p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-01" });
    }
    expect(challengeProgress(p, "daily-goal").progress).toBe(3);
    // Day 2: the counter restarts at 1 for the first answer of the new day.
    p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-02" });
    const day2 = challengeProgress(p, "daily-goal");
    expect(day2.progress).toBe(1);
    expect(day2.claimed).toBe(false);
  });

  it("a completed challenge awards a deterministic variable reward once on claim", () => {
    const s = getScenario("gcash-otp")!;
    let p = emptyProgress();
    for (let i = 0; i < 3; i++) {
      p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-01" });
    }
    const before = p.shieldCoins;
    const reward = challengeReward("daily-goal");
    expect(reward).toBeGreaterThanOrEqual(15);
    expect(reward).toBeLessThanOrEqual(25);
    const claimed = claimChallenge(p, "daily-goal");
    expect(claimed.shieldCoins).toBe(before + reward);
    expect(claimed.challenges["daily-goal"].claimedAt).not.toBeNull();
    // Claiming again awards nothing.
    const again = claimChallenge(claimed, "daily-goal");
    expect(again.shieldCoins).toBe(claimed.shieldCoins);
  });

  it("detects a surprise reward on a 3-day streak", () => {
    let p = emptyProgress();
    // Simulate a 3-day streak via applyAnswer + recordDailyGoal.
    const s = getScenario("gcash-otp")!;
    p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-01" });
    p = recordDailyGoal(p, 3, 3, "2026-08-01");
    p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-02" });
    p = recordDailyGoal(p, 3, 3, "2026-08-02");
    p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-03" });
    p = recordDailyGoal(p, 3, 3, "2026-08-03");
    const reward = detectSurpriseReward(p, "2026-08-03");
    expect(reward).not.toBeNull();
    expect(reward!.kind).toBe("streak-3");
  });

  it("a perfect family rate triggers the mastery surprise first (priority order)", () => {
    const s = getScenario("gcash-otp")!;
    let p = emptyProgress();
    for (let i = 0; i < 5; i++) {
      p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-01" });
    }
    const reward = detectSurpriseReward(p, "2026-08-01");
    expect(reward).not.toBeNull();
    // Mastery (>=4/5 correct) is the bigger milestone and fires first.
    expect(reward!.kind).toBe("first-mastery");
  });

  it("a single correct answer does NOT count as a perfect drill", () => {
    const s = getScenario("gcash-otp")!;
    let p = emptyProgress();
    p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-01" });
    expect(p.familyMastery[s.family].last5Correct).toEqual([true]);
    expect(detectSurpriseReward(p, "2026-08-01")).toBeNull();
  });

  it("three consecutive correct answers trigger the perfect-drill reward", () => {
    const s = getScenario("gcash-otp")!;
    let p = emptyProgress();
    for (let i = 0; i < 3; i++) {
      p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-01" });
    }
    const reward = detectSurpriseReward(p, "2026-08-01");
    expect(reward).not.toBeNull();
    expect(reward!.kind).toBe("first-perfect");
  });
});

describe("streak agency (the streak-trap fix)", () => {
  it("a missed day consumes a streak freeze instead of resetting the streak", () => {
    const s = getScenario("gcash-otp")!;
    let p = emptyProgress();
    // Day 1: meet goal, streak = 1.
    p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-01" });
    p = recordDailyGoal(p, 3, 3, "2026-08-01");
    expect(p.streakCurrent).toBe(1);
    // Day 2: meet goal, streak = 2. Earn enough correct answers for a freeze.
    p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-02" });
    p = recordDailyGoal(p, 3, 3, "2026-08-02");
    expect(p.streakCurrent).toBe(2);
    // Earn 4 more correct answers (total 6 = 30 coins) so the freeze is affordable.
    for (let i = 0; i < 4; i++) {
      p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-02" });
    }
    // Buy a freeze, then miss day 3: the freeze is consumed, streak survives.
    p = buyStreakFreeze(p);
    expect(p.streakAgency.freezesLeft).toBe(1);
    p = recordDailyGoal(p, 0, 3, "2026-08-04"); // gap of 2 days
    expect(p.streakCurrent).toBe(2); // not reset to 0
    expect(p.streakAgency.freezesLeft).toBe(0); // freeze consumed
    expect(p.streakAgency.lastFrozenDay).toBe("2026-08-04");
  });

  it("buying a freeze costs coins and is refused when unaffordable", () => {
    const s = getScenario("gcash-otp")!;
    let p = emptyProgress();
    // Earn 10 coins (2 correct answers) - below the 30 cost.
    p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-01" });
    p = applyAnswer(p, { scenario: s, correct: true, atDay: "2026-08-01" });
    const refused = buyStreakFreeze(p);
    expect(refused.shieldCoins).toBe(10);
    expect(refused.streakAgency.freezesLeft).toBe(0);
    // Earn enough (6 correct) then buy.
    let rich = emptyProgress();
    for (let i = 0; i < 6; i++) rich = applyAnswer(rich, { scenario: s, correct: true, atDay: "2026-08-01" });
    const bought = buyStreakFreeze(rich);
    expect(bought.shieldCoins).toBe(30 - STREAK_FREEZE_COST);
    expect(bought.streakAgency.freezesLeft).toBe(1);
  });

  it("the user can choose their daily goal (3/5/7) and it persists", () => {
    const p = setDailyGoal(emptyProgress(), 5);
    expect(p.streakAgency.dailyGoal).toBe(5);
    expect(setDailyGoal(p, 7).streakAgency.dailyGoal).toBe(7);
  });
});
