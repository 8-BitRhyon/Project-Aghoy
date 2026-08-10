import { SCENARIOS, getScenario, type Scenario, type ScenarioDifficulty, type ScenarioFamily } from "./scenarios";

export type FamilyId = ScenarioFamily;
export type PlacementTier = "easy" | "medium" | "hard";
export type SrsBox = 1 | 2 | 3 | 4;
export type MasteryState = "practiced" | "familiar" | "proficient" | "mastered" | "can-teach";

export interface FamilyMastery {
  attempts: number;
  correct: number;
  last5Correct: boolean[];
  mastered: boolean;
  lastSeenDay: string | null;
}

export interface SrsItem {
  scenarioId: string;
  box: SrsBox;
  dueAt: string;
}

export interface WrongAnswer {
  scenarioId: string;
  stepIndex: number;
  optionId: string;
  answeredAt: string;
}

export interface UnlockedFeatures {
  vishing: boolean;
  hardTier: boolean;
  trap: boolean;
  goodMessage: boolean;
}

export interface LearnerProgress {
  shieldLevel: number;
  xp: number;
  placementScore: number | null;
  placementTier: PlacementTier;
  streakCurrent: number;
  streakBest: number;
  lastActiveDay: string | null;
  completedScenarioIds: string[];
  srsQueue: SrsItem[];
  wrongAnswers: WrongAnswer[];
  transferLog: TransferAnswer[];
  familyMastery: Record<FamilyId, FamilyMastery>;
  examPassed: boolean;
  examBestScore: number | null;
  studyPlan: FamilyId[];
  unlocked: UnlockedFeatures;
}

export interface AnswerInput {
  scenario: Scenario;
  correct: boolean;
  atDay: string;
  stepIndex?: number;
  optionId?: string;
}

export interface MirrorInput {
  wrongId: string;
  siblingId: string;
  atDay: string;
}

export interface ShieldLevelConfig {
  level: number;
  families: FamilyId[];
  tier: ScenarioDifficulty | null;
  feature: "trap" | "good-message" | "hard-tier" | "mastery-badge" | "final-exam" | null;
  gate?: { masteredFamilies?: number; bankRate?: number };
}

export const XP_CORRECT = 10;
export const XP_WRONG = 2;

export const SHIELD_LEVELS: readonly ShieldLevelConfig[] = [
  { level: 1, families: ["ewallet", "fake-reward"], tier: "easy", feature: null },
  { level: 2, families: ["delivery", "customs"], tier: null, feature: "trap" },
  { level: 3, families: ["job", "family-emergency"], tier: null, feature: "good-message" },
  { level: 4, families: ["bank", "telco", "government"], tier: "medium", feature: null },
  { level: 5, families: ["vishing"], tier: null, feature: null, gate: { bankRate: 0.8 } },
  { level: 6, families: ["romance", "investment", "charity"], tier: null, feature: null },
  { level: 7, families: [], tier: "hard", feature: "hard-tier", gate: { masteredFamilies: 4 } },
  { level: 8, families: ["quishing", "sim-pretext", "remittance", "loan-app", "good-message"], tier: "hard", feature: null },
  { level: 9, families: [], tier: null, feature: "mastery-badge" },
  { level: 10, families: [], tier: null, feature: "final-exam" },
];

export const FAMILY_IDS: readonly FamilyId[] = [
  "ewallet", "bank", "telco", "delivery", "customs", "job", "romance", "investment",
  "government", "quishing", "vishing", "sim-pretext", "family-emergency", "remittance",
  "loan-app", "charity", "fake-reward", "good-message",
];

const SRS_INTERVALS: Record<SrsBox, number> = { 1: 1, 2: 3, 3: 7, 4: 14 };

const FAMILY_LEVEL: Record<FamilyId, number> = (() => {
  const m = {} as Record<FamilyId, number>;
  for (const cfg of SHIELD_LEVELS) {
    for (const family of cfg.families) m[family] = cfg.level;
  }
  return m;
})();

const FAMILY_TIER: Record<FamilyId, ScenarioDifficulty> = (() => {
  const m = {} as Record<FamilyId, ScenarioDifficulty>;
  for (const cfg of SHIELD_LEVELS) {
    if (cfg.tier) {
      for (const family of cfg.families) m[family] = cfg.tier;
    }
  }
  return m;
})();

const DAY_MS = 86_400_000;

const toEpochDays = (day: string): number => {
  const [y, m, d] = day.split("-").map(Number);
  return Date.UTC(y, m - 1, d) / DAY_MS;
};

export const addDays = (day: string, n: number): string =>
  new Date((toEpochDays(day) + n) * DAY_MS).toISOString().slice(0, 10);

export const daysBetween = (a: string, b: string): number => toEpochDays(b) - toEpochDays(a);

const isNextDay = (a: string, b: string): boolean => daysBetween(a, b) === 1;

export const emptyFamily = (): FamilyMastery => ({
  attempts: 0,
  correct: 0,
  last5Correct: [],
  mastered: false,
  lastSeenDay: null,
});

export const emptyProgress = (): LearnerProgress => ({
  shieldLevel: 1,
  xp: 0,
  placementScore: null,
  placementTier: "easy",
  streakCurrent: 0,
  streakBest: 0,
  lastActiveDay: null,
  completedScenarioIds: [],
  srsQueue: [],
  wrongAnswers: [],
  transferLog: [],
  familyMastery: Object.fromEntries(FAMILY_IDS.map((f) => [f, emptyFamily()])) as Record<FamilyId, FamilyMastery>,
  examPassed: false,
  examBestScore: null,
  studyPlan: [],
  unlocked: { vishing: false, hardTier: false, trap: false, goodMessage: false },
});

export const familyRate = (p: LearnerProgress, family: FamilyId): number => {
  const m = p.familyMastery[family];
  if (!m) return 0;
  if (m.last5Correct.length > 0) return m.last5Correct.filter(Boolean).length / m.last5Correct.length;
  if (m.attempts > 0) return m.correct / m.attempts;
  return 0;
};

export const countMastered = (p: LearnerProgress): number =>
  FAMILY_IDS.filter((f) => (p.familyMastery[f] ?? emptyFamily()).mastered).length;

export const isTierUnlocked = (p: LearnerProgress, tier: ScenarioDifficulty): boolean => {
  if (tier === "easy") return p.shieldLevel >= 1;
  if (tier === "medium") return p.shieldLevel >= 4;
  return p.shieldLevel >= 7 && countMastered(p) >= 4;
};

export const isFamilyUnlocked = (p: LearnerProgress, family: FamilyId): boolean => {
  const required = FAMILY_LEVEL[family] ?? Number.POSITIVE_INFINITY;
  if (p.shieldLevel < required) return false;
  const tier = FAMILY_TIER[family];
  if (tier && !isTierUnlocked(p, tier)) return false;
  if (family === "vishing" && familyRate(p, "bank") < 0.8) return false;
  return true;
};

const recomputeUnlocked = (p: LearnerProgress): LearnerProgress => ({
  ...p,
  unlocked: {
    vishing: isFamilyUnlocked(p, "vishing"),
    hardTier: isTierUnlocked(p, "hard"),
    trap: p.shieldLevel >= 2,
    goodMessage: p.shieldLevel >= 3,
  },
});

export const buildPlacementQuiz = (families: string[], difficulty: "easy" | "medium", count = 12): string[] => {
  const result: string[] = [];
  for (const family of families) {
    const ids = SCENARIOS.filter((s) => s.family === family && s.difficulty === difficulty).map((s) => s.id);
    for (const id of ids.slice(0, 2)) {
      if (result.length >= count) break;
      result.push(id);
    }
    if (result.length >= count) break;
  }
  return result;
};

export const applyPlacementResult = (p: LearnerProgress, score: number, max: number): LearnerProgress => {
  const ratio = max > 0 ? score / max : 0;
  let shieldLevel = 1;
  if (ratio > 4 / 12 && ratio <= 7 / 12) shieldLevel = 2;
  else if (ratio > 7 / 12 && ratio <= 10 / 12) shieldLevel = 3;
  else if (ratio > 10 / 12) shieldLevel = 4;
  const tier: PlacementTier = shieldLevel <= 2 ? "easy" : shieldLevel === 3 ? "medium" : "hard";
  return recomputeUnlocked({ ...p, shieldLevel, placementScore: score, placementTier: tier });
};

export const applyAnswer = (p: LearnerProgress, input: AnswerInput): LearnerProgress => {
  const { scenario, correct, atDay } = input;
  const family = scenario.family;
  const prev = p.familyMastery[family] ?? emptyFamily();
  const last5Correct = [...prev.last5Correct, correct].slice(-5);
  // Mastery is computed from the rolling last-5 rate: >= 0.8 and >= 3 attempts.
  const mastered = prev.mastered || (last5Correct.filter(Boolean).length >= 4 && prev.attempts + 1 >= 3);
  const fam: FamilyMastery = {
    attempts: prev.attempts + 1,
    correct: prev.correct + (correct ? 1 : 0),
    last5Correct,
    mastered,
    lastSeenDay: atDay,
  };

  const xp = p.xp + (correct ? XP_CORRECT : XP_WRONG);

  let streakCurrent = p.streakCurrent;
  // Never regress lastActiveDay: a backdated atDay (clock/timezone change) must
  // not move the stored day backwards.
  let lastActiveDay = p.lastActiveDay;
  if (correct) {
    if (lastActiveDay == null) {
      streakCurrent = 1;
      lastActiveDay = atDay;
    } else if (atDay > lastActiveDay) {
      const gapDays = daysBetween(lastActiveDay, atDay);
      streakCurrent = gapDays === 1 ? streakCurrent + 1 : 1;
      lastActiveDay = atDay;
    } else if (atDay === lastActiveDay && streakCurrent === 0) {
      streakCurrent = 1;
    }
  } else if (lastActiveDay == null) {
    lastActiveDay = atDay;
  }
  const streakBest = Math.max(p.streakBest, streakCurrent);

  let srsQueue = p.srsQueue;
  let completedScenarioIds = p.completedScenarioIds;
  const existing = p.srsQueue.find((i) => i.scenarioId === scenario.id);
  if (existing) {
    if (correct && existing.box === 4) {
      srsQueue = p.srsQueue.filter((i) => i.scenarioId !== scenario.id);
      if (!completedScenarioIds.includes(scenario.id)) {
        completedScenarioIds = [...completedScenarioIds, scenario.id];
      }
    } else if (correct) {
      const nextBox = (existing.box + 1) as SrsBox;
      srsQueue = p.srsQueue.map((i) =>
        i.scenarioId === scenario.id ? { ...i, box: nextBox, dueAt: addDays(atDay, SRS_INTERVALS[nextBox]) } : i,
      );
    } else {
      srsQueue = p.srsQueue.map((i) =>
        i.scenarioId === scenario.id ? { ...i, box: 1, dueAt: addDays(atDay, SRS_INTERVALS[1]) } : i,
      );
    }
  } else {
    srsQueue = [...p.srsQueue, { scenarioId: scenario.id, box: 1, dueAt: addDays(atDay, SRS_INTERVALS[1]) }];
  }

  const wrongAnswers = correct
    ? p.wrongAnswers
    : [...p.wrongAnswers, { scenarioId: scenario.id, stepIndex: input.stepIndex ?? -1, optionId: input.optionId ?? "", answeredAt: atDay }];

  // Transfer log: record whether this answer was on a scenario the learner had
  // never seen (firstTime). This is the exact signal for the transfer metric -
  // accuracy on novel lures is what predicts real-world scam detection, since
  // training effects do not transfer to new lure types.
  const wasSeen = p.completedScenarioIds.includes(scenario.id) || p.srsQueue.some((i) => i.scenarioId === scenario.id);
  const transferLog = [
    ...p.transferLog,
    { scenarioId: scenario.id, correct, firstTime: !wasSeen, atDay },
  ];

  return recomputeUnlocked({
    ...p,
    xp,
    streakCurrent,
    streakBest,
    lastActiveDay,
    completedScenarioIds,
    srsQueue,
    wrongAnswers,
    transferLog,
    familyMastery: { ...p.familyMastery, [family]: fam },
  });
};

export const dueScenarios = (p: LearnerProgress, today: string, pool: string[]): string[] => {
  const due = p.srsQueue
    .filter((i) => i.dueAt <= today)
    .map((i) => i.scenarioId)
    .filter((id) => pool.includes(id));
  const weakest = weakestFamilies(p, 1)[0];
  let warm: string[] = [];
  if (weakest) {
    warm = pool.filter((id) => getScenario(id)?.family === weakest && !due.includes(id)).slice(0, 2);
  }
  return [...due, ...warm];
};

export const scheduleMirror = (p: LearnerProgress, mirror: MirrorInput): LearnerProgress => {
  const dueAt = addDays(mirror.atDay, 1);
  const existing = p.srsQueue.find((i) => i.scenarioId === mirror.siblingId);
  const srsQueue = existing
    ? p.srsQueue.map((i) => (i.scenarioId === mirror.siblingId ? { ...i, box: 1 as SrsBox, dueAt } : i))
    : [...p.srsQueue, { scenarioId: mirror.siblingId, box: 1 as SrsBox, dueAt }];
  return recomputeUnlocked({ ...p, srsQueue });
};

export const familyMasteryState = (p: LearnerProgress, family: FamilyId): MasteryState => {
  const m = p.familyMastery[family] ?? emptyFamily();
  const rate = familyRate(p, family);
  const base: MasteryState =
    rate >= 0.8 && m.attempts >= 3 ? "mastered" : rate >= 0.6 ? "proficient" : rate >= 0.4 ? "familiar" : "practiced";
  if (p.examPassed && base === "mastered") return "can-teach";
  return base;
};

export const markFamilyMastered = (p: LearnerProgress, family: FamilyId, atDay: string): LearnerProgress =>
  recomputeUnlocked({
    ...p,
    familyMastery: {
      ...p.familyMastery,
      [family]: { ...(p.familyMastery[family] ?? emptyFamily()), mastered: true, lastSeenDay: atDay },
    },
  });

export const decayFamilies = (p: LearnerProgress, today: string): LearnerProgress => {
  let changed = false;
  const familyMastery = { ...p.familyMastery };
  for (const family of FAMILY_IDS) {
    const m = familyMastery[family] ?? emptyFamily();
    if (m.mastered && m.lastSeenDay != null && daysBetween(m.lastSeenDay, today) >= 14) {
      familyMastery[family] = { ...m, mastered: false };
      changed = true;
    }
  }
  return changed ? recomputeUnlocked({ ...p, familyMastery }) : p;
};

export const recordDailyGoal = (p: LearnerProgress, completedToday: number, goal: number, today: string): LearnerProgress => {
  const met = completedToday >= goal;
  let streakCurrent = p.streakCurrent;
  let lastActiveDay = p.lastActiveDay;
  if (met) {
    if (lastActiveDay == null) {
      streakCurrent = 1;
      lastActiveDay = today;
    } else if (today === lastActiveDay) {
      streakCurrent = Math.max(1, streakCurrent);
    } else if (isNextDay(lastActiveDay, today)) {
      streakCurrent += 1;
      lastActiveDay = today;
    } else {
      // Gap of more than one day: the streak was broken before today.
      streakCurrent = 1;
      lastActiveDay = today;
    }
  } else if (lastActiveDay != null && daysBetween(lastActiveDay, today) > 1) {
    // A missed day resets the streak to 0 (not 1): the learner did not earn a
    // credit for a day the goal was not met.
    streakCurrent = 0;
    lastActiveDay = today;
  }
  return { ...p, streakCurrent, streakBest: Math.max(p.streakBest, streakCurrent), lastActiveDay };
};

export const streakStatus = (p: LearnerProgress): { current: number; best: number; active: boolean } => ({
  current: p.streakCurrent,
  best: p.streakBest,
  active: p.streakCurrent >= 1,
});

export const weakestFamilies = (p: LearnerProgress, n = 3): FamilyId[] =>
  FAMILY_IDS.filter((f) => isFamilyUnlocked(p, f) && (p.familyMastery[f] ?? emptyFamily()).attempts >= 1)
    .sort((a, b) => {
      const ra = familyRate(p, a);
      const rb = familyRate(p, b);
      if (ra !== rb) return ra - rb;
      return a < b ? -1 : a > b ? 1 : 0;
    })
    .slice(0, n);

// Transfer metric (the research-backed outcome that matters). Anti-phishing
// training effects transfer poorly to NEW lure types (Rozema & Davis 2025;
// NIST Phish Scale), so the Dojo's key measurement is accuracy on scenarios
// the learner has NEVER seen - not accuracy on drills they have practiced.
// A learner who scores well on first-time scenarios has genuinely learned to
// spot scams; a learner who only does well on repeats has memorized lures.

export interface TransferSnapshot {
  firstTime: { correct: number; total: number; accuracy: number }; // novel lures
  repeated: { correct: number; total: number; accuracy: number }; // practiced lures
  transferScore: number; // 0..1 weighted to first-time performance
  firstTimeCount: number; // how many novel scenarios attempted (>= 5 for meaning)
}

export interface TransferAnswer {
  scenarioId: string;
  correct: boolean;
  firstTime: boolean;
  atDay: string;
}

export const transferFromLog = (log: TransferAnswer[]): TransferSnapshot => {
  const firstTime = { correct: 0, total: 0 };
  const repeated = { correct: 0, total: 0 };
  for (const a of log) {
    const bucket = a.firstTime ? firstTime : repeated;
    bucket.total += 1;
    if (a.correct) bucket.correct += 1;
  }
  const ft = firstTime.total > 0 ? firstTime.correct / firstTime.total : 0;
  const rep = repeated.total > 0 ? repeated.correct / repeated.total : 0;
  // Transfer score: first-time accuracy weighted 2x over repeated (the exact
  // signal of generalization), 0 if no first-time data yet.
  const weight = firstTime.total >= 5 ? 2 : firstTime.total > 0 ? 1 : 0;
  const transferScore = weight > 0 ? (weight * ft + rep) / (weight + 1) : 0;
  return {
    firstTime: { correct: firstTime.correct, total: firstTime.total, accuracy: ft },
    repeated: { correct: repeated.correct, total: repeated.total, accuracy: rep },
    transferScore,
    firstTimeCount: firstTime.total,
  };
};

export const buildFinalExam = (pool: string[], count = 15): string[] => {  const traps = pool.filter((id) => getScenario(id)?.archetype === "trap");
  const goods = pool.filter((id) => getScenario(id)?.archetype === "good-message");
  const others = pool.filter((id) => {
    const a = getScenario(id)?.archetype;
    return a !== "trap" && a !== "good-message";
  });
  const result: string[] = [];
  const push = (ids: string[]) => {
    for (const id of ids) {
      if (result.length < count && !result.includes(id)) result.push(id);
    }
  };
  push(traps.slice(0, 2));
  push(goods.slice(0, 2));
  push(others);
  push(traps);
  push(goods);
  return result;
};

export const applyExamResult = (p: LearnerProgress, score: number, max: number): LearnerProgress => {
  const pass = max > 0 && score / max >= 0.8;
  const examBestScore = Math.max(p.examBestScore ?? 0, score);
  if (pass) return recomputeUnlocked({ ...p, examPassed: true, examBestScore, studyPlan: [] });
  return { ...p, examBestScore, studyPlan: weakestFamilies(p, 3) };
};

const hashCode = (value: string): number => {
  let h = 0;
  for (let i = 0; i < value.length; i += 1) h = (h * 31 + value.charCodeAt(i)) | 0;
  return h >>> 0;
};

const seededPick = (ids: string[], ...seeds: (string | number)[]): string => {
  const ids2 = ids;
  return ids2[hashCode(seeds.join("|")) % ids2.length];
};

export const sessionPlan = (
  p: LearnerProgress,
  today: string,
  pool: Record<FamilyId, string[]>,
  goal = 3,
): string[] => {
  const poolIds = FAMILY_IDS.flatMap((f) => pool[f] ?? []);
  const familyOf = (id: string): FamilyId | undefined => {
    for (const f of FAMILY_IDS) {
      if (pool[f]?.includes(id)) return f;
    }
    return getScenario(id)?.family;
  };

  const picked: string[] = [];
  const pickedFamilies = new Set<FamilyId>();

  const due = p.srsQueue.filter((i) => i.dueAt <= today && poolIds.includes(i.scenarioId));
  for (const item of due) {
    if (picked.length >= goal) break;
    const family = familyOf(item.scenarioId);
    if (!family || pickedFamilies.has(family) || !isFamilyUnlocked(p, family)) continue;
    picked.push(item.scenarioId);
    pickedFamilies.add(family);
  }

  const weakest = weakestFamilies(p, 1)[0];
  if (weakest && picked.length < goal && !pickedFamilies.has(weakest)) {
    const candidates = (pool[weakest] ?? []).filter((id) => !picked.includes(id) && familyOf(id) === weakest);
    if (candidates.length > 0) {
      picked.push(seededPick(candidates, today, p.xp, picked.length));
      pickedFamilies.add(weakest);
    }
  }

  let guard = 0;
  while (picked.length < goal && guard < poolIds.length * 2 + 16) {
    guard += 1;
    const candidates = poolIds.filter((id) => {
      const family = familyOf(id);
      return family !== undefined && isFamilyUnlocked(p, family) && !pickedFamilies.has(family) && !picked.includes(id);
    });
    if (candidates.length === 0) break;
    picked.push(seededPick(candidates, today, p.xp, picked.length, guard));
    const family = familyOf(picked[picked.length - 1]);
    if (family) pickedFamilies.add(family);
  }

  return picked;
};

