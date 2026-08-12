// AUTO-GENERATED - ILOCANO - do not edit by hand. Regenerate: npx tsx scripts/generate-scenarios.ts
import { Scenario } from "./scenarios";
import { SCENARIOS } from "./scenarios";

export const GENERATED_SCENARIOS_ILOCANO: Scenario[] = [
  {
    "id": "ewallet-easy-000",
    "title": "ewallet drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "call-center agent. Adda mensahe nga agsasao na-lock ti account mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Ma-expire ti MPIN mo itan. I-update daytoy iti gov-ph-tax.site tapos magusar pay ti wallet mo.",
        "question": "Adda mensahe nga agsasao na-lock ti account mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GOTYME. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GOTYME. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-001",
    "title": "ewallet drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "bassit nga online seller. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita mi ti suspicious login iti account mo. I-verify itan iti maya-security-alert.xyz wenno ma-lock daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-002",
    "title": "ewallet drill 2",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "senior pensioner. Adda mensahe nga agsasao maikansela ti benefits mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Addan nga umay a transfer nga P250! Agbayad nga umuna ti bassit a release fee tapos maawat daytoy.",
        "question": "Adda mensahe nga agsasao maikansela ti benefits mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-003",
    "title": "ewallet drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "OFW iti Riyadh. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Ma-expire ti MPIN mo itan. I-update daytoy iti bit.ly/verify-now tapos magusar pay ti wallet mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-004",
    "title": "ewallet drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "bassit nga online seller. Adda mensahe nga agsasao na-lock ti account mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti g-cash-verify-ph.top iti 24 nga oras.",
        "question": "Adda mensahe nga agsasao na-lock ti account mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GCASH. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GCASH. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-005",
    "title": "ewallet drill 5",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "call-center agent. Adda mensahe nga agsasao maisublin ti parcel mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay Alerto: maisublin ti parcel mo. I-verify iti smart-rewar-ds.top wenno ma-suspend ti account mo.",
        "question": "Adda mensahe nga agsasao maisublin ti parcel mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-006",
    "title": "ewallet drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "driver ti jeepney. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Ma-expire ti MPIN mo itan. I-update daytoy iti jnt-tracking-ph.site tapos magusar pay ti wallet mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-007",
    "title": "ewallet drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao adda case number a na-file kontra kenka ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Ma-expire ti MPIN mo itan. I-update daytoy iti g-cash-verify-ph.top tapos magusar pay ti wallet mo.",
        "question": "Adda mensahe nga agsasao adda case number a na-file kontra kenka ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-008",
    "title": "ewallet drill 8",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "senior pensioner. Adda mensahe nga agsasao adda nakita nga unauthorized transfer ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Addan nga umay a transfer nga P100,000! Agbayad nga umuna ti bassit a release fee tapos maawat daytoy.",
        "question": "Adda mensahe nga agsasao adda nakita nga unauthorized transfer ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-009",
    "title": "ewallet drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "driver ti jeepney. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash Alerto: adda case number a na-file kontra kenka. I-verify iti bdo-secure-login-verify.top wenno ma-suspend ti account mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GCASH. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GCASH. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-010",
    "title": "ewallet drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "Lola iti probinsya. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Addan nga umay a transfer nga P100,000! Agbayad nga umuna ti bassit a release fee tapos maawat daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-011",
    "title": "ewallet drill 11",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "estudyante iti Manila. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti bit.ly/verify-now iti 24 nga oras.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-012",
    "title": "ewallet drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "OFW iti Riyadh. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: ma-deactivate ti SIM mo I-reply ti OTP mo itan tapos ma-reactivate, wenno mapukaw ti kuarta mo iti 24 nga oras.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a MAYA. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a MAYA. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-013",
    "title": "ewallet drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "tagikuada ti sari-sari store. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti shopee-refund-ph.site iti 24 nga oras.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GCASH. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GCASH. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-014",
    "title": "ewallet drill 14",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "senior pensioner. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: maisublin ti parcel mo I-reply ti OTP mo itan tapos ma-reactivate, wenno mapukaw ti kuarta mo iti 24 nga oras.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-015",
    "title": "ewallet drill 15",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "senior pensioner. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Ma-expire ti MPIN mo itan. I-update daytoy iti shopee-refund-ph.site tapos magusar pay ti wallet mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GOTYME. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GOTYME. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-016",
    "title": "ewallet drill 16",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "Lola iti probinsya. Adda mensahe nga agsasao ma-deactivate ti SIM mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti gov-ph-tax.site iti 24 nga oras.",
        "question": "Adda mensahe nga agsasao ma-deactivate ti SIM mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GCASH. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GCASH. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-017",
    "title": "ewallet drill 17",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "senior pensioner. Adda mensahe nga agsasao adda case number a na-file kontra kenka ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay Alerto: adda case number a na-file kontra kenka. I-verify iti shopee-refund-ph.site wenno ma-suspend ti account mo.",
        "question": "Adda mensahe nga agsasao adda case number a na-file kontra kenka ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-018",
    "title": "ewallet drill 18",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "Lola iti probinsya. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Ma-expire ti MPIN mo itan. I-update daytoy iti g-cash-verify-ph.top tapos magusar pay ti wallet mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-019",
    "title": "ewallet drill 19",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "driver ti jeepney. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Addan nga umay a transfer nga P100,000! Agbayad nga umuna ti bassit a release fee tapos maawat daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga GCash hotline 2882."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-020",
    "title": "ewallet drill 20",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "tagikuada ti sari-sari store. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme Alerto: adda nakita nga unauthorized transfer. I-verify iti g-cash-verify-ph.top wenno ma-suspend ti account mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GOTYME. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GOTYME. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-021",
    "title": "ewallet drill 21",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "senior pensioner. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Nakita mi ti suspicious login iti account mo. I-verify itan iti gov-ph-tax.site wenno ma-lock daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-022",
    "title": "ewallet drill 22",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "tagikuada ti sari-sari store. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Ma-expire ti MPIN mo itan. I-update daytoy iti jnt-tracking-ph.site tapos magusar pay ti wallet mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GOTYME. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GOTYME. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-023",
    "title": "ewallet drill 23",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "OFW iti Riyadh. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay Alerto: na-lock ti account mo. I-verify iti maya-security-alert.xyz wenno ma-suspend ti account mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-024",
    "title": "ewallet drill 24",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "Lola iti probinsya. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Maya",
        "message": "Maya: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti jnt-tracking-ph.site iti 24 nga oras.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a MAYA. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a MAYA. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-025",
    "title": "ewallet drill 25",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "call-center agent. Adda mensahe nga agsasao mapukaw ti kuarta mo iti 24 nga oras ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti smart-rewar-ds.top iti 24 nga oras.",
        "question": "Adda mensahe nga agsasao mapukaw ti kuarta mo iti 24 nga oras ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-026",
    "title": "ewallet drill 26",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "bassit nga online seller. Adda mensahe nga agsasao daytoyen ti maudi a gundaway mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme Alerto: daytoyen ti maudi a gundaway mo. I-verify iti gov-ph-tax.site wenno ma-suspend ti account mo.",
        "question": "Adda mensahe nga agsasao daytoyen ti maudi a gundaway mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-027",
    "title": "ewallet drill 27",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "tagikuada ti sari-sari store. Adda mensahe nga agsasao mapukaw ti kuarta mo iti 24 nga oras ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Maya",
        "message": "Maya: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti bit.ly/verify-now iti 24 nga oras.",
        "question": "Adda mensahe nga agsasao mapukaw ti kuarta mo iti 24 nga oras ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-028",
    "title": "ewallet drill 28",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "call-center agent. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Ma-expire ti MPIN mo itan. I-update daytoy iti g-cash-verify-ph.top tapos magusar pay ti wallet mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-029",
    "title": "ewallet drill 29",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "bassit nga online seller. Adda mensahe nga agsasao adda case number a na-file kontra kenka ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Maya",
        "message": "Maya: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti maya-security-alert.xyz iti 24 nga oras.",
        "question": "Adda mensahe nga agsasao adda case number a na-file kontra kenka ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-030",
    "title": "ewallet drill 30",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao ma-deactivate ti SIM mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Addan nga umay a transfer nga P150! Agbayad nga umuna ti bassit a release fee tapos maawat daytoy.",
        "question": "Adda mensahe nga agsasao ma-deactivate ti SIM mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-031",
    "title": "ewallet drill 31",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "tagikuada ti sari-sari store. Adda mensahe nga agsasao maisublin ti parcel mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Nakita mi ti suspicious login iti account mo. I-verify itan iti pagibig-loan-release.site wenno ma-lock daytoy.",
        "question": "Adda mensahe nga agsasao maisublin ti parcel mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-032",
    "title": "ewallet drill 32",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "estudyante iti Manila. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Addan nga umay a transfer nga P5,000! Agbayad nga umuna ti bassit a release fee tapos maawat daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-033",
    "title": "ewallet drill 33",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "bassit nga online seller. Adda mensahe nga agsasao mapukaw ti kuarta mo iti 24 nga oras ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita mi ti suspicious login iti account mo. I-verify itan iti smart-rewar-ds.top wenno ma-lock daytoy.",
        "question": "Adda mensahe nga agsasao mapukaw ti kuarta mo iti 24 nga oras ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GOTYME. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GOTYME. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-034",
    "title": "ewallet drill 34",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "call-center agent. Adda mensahe nga agsasao na-lock ti account mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti shopee-refund-ph.site iti 24 nga oras.",
        "question": "Adda mensahe nga agsasao na-lock ti account mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-035",
    "title": "ewallet drill 35",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "call-center agent. Adda mensahe nga agsasao adda case number a na-file kontra kenka ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti smart-rewar-ds.top iti 24 nga oras.",
        "question": "Adda mensahe nga agsasao adda case number a na-file kontra kenka ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-036",
    "title": "ewallet drill 36",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "tagikuada ti sari-sari store. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Addan nga umay a transfer nga P150! Agbayad nga umuna ti bassit a release fee tapos maawat daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-037",
    "title": "ewallet drill 37",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "call-center agent. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Nakita mi ti suspicious login iti account mo. I-verify itan iti bdo-secure-login-verify.top wenno ma-lock daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga GCash hotline 2882."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-038",
    "title": "ewallet drill 38",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "senior pensioner. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Nakita mi ti suspicious login iti account mo. I-verify itan iti gcash-update.ph-verify.top wenno ma-lock daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-039",
    "title": "ewallet drill 39",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "driver ti jeepney. Adda mensahe nga agsasao maikansela ti benefits mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Ma-expire ti MPIN mo itan. I-update daytoy iti gov-ph-tax.site tapos magusar pay ti wallet mo.",
        "question": "Adda mensahe nga agsasao maikansela ti benefits mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-040",
    "title": "ewallet drill 40",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "bassit nga online seller. Adda mensahe nga agsasao ma-deactivate ti SIM mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GoTyme",
        "message": "GoTyme Alerto: ma-deactivate ti SIM mo. I-verify iti gov-ph-tax.site wenno ma-suspend ti account mo.",
        "question": "Adda mensahe nga agsasao ma-deactivate ti SIM mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-041",
    "title": "ewallet drill 41",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "call-center agent. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Nakita mi ti suspicious login iti account mo. I-verify itan iti pagibig-loan-release.site wenno ma-lock daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GCASH. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GCASH. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-042",
    "title": "ewallet drill 42",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "estudyante iti Manila. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: maisublin ti parcel mo I-reply ti OTP mo itan tapos ma-reactivate, wenno mapukaw ti kuarta mo iti 24 nga oras.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-043",
    "title": "ewallet drill 43",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao mapukaw ti kuarta mo iti 24 nga oras ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GCash",
        "message": "GCash: Nakita mi ti suspicious login iti account mo. I-verify itan iti jnt-tracking-ph.site wenno ma-lock daytoy.",
        "question": "Adda mensahe nga agsasao mapukaw ti kuarta mo iti 24 nga oras ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga GCash hotline 2882."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-044",
    "title": "ewallet drill 44",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao maisublin ti parcel mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti bdo-secure-login-verify.top iti 24 nga oras.",
        "question": "Adda mensahe nga agsasao maisublin ti parcel mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-045",
    "title": "ewallet drill 45",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "call-center agent. Adda mensahe nga agsasao adda nakita nga unauthorized transfer ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GCash",
        "message": "GCash Alerto: adda nakita nga unauthorized transfer. I-verify iti pagibig-loan-release.site wenno ma-suspend ti account mo.",
        "question": "Adda mensahe nga agsasao adda nakita nga unauthorized transfer ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-046",
    "title": "ewallet drill 46",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "driver ti jeepney. Adda mensahe nga agsasao daytoyen ti maudi a gundaway mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Ma-expire ti MPIN mo itan. I-update daytoy iti pagibig-loan-release.site tapos magusar pay ti wallet mo.",
        "question": "Adda mensahe nga agsasao daytoyen ti maudi a gundaway mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-047",
    "title": "ewallet drill 47",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao na-lock ti account mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Addan nga umay a transfer nga P500! Agbayad nga umuna ti bassit a release fee tapos maawat daytoy.",
        "question": "Adda mensahe nga agsasao na-lock ti account mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga GCash hotline 2882."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-048",
    "title": "ewallet drill 48",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "bassit nga online seller. Adda mensahe nga agsasao adda case number a na-file kontra kenka ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GCash",
        "message": "GCash: Nakita mi ti suspicious login iti account mo. I-verify itan iti g-cash-verify-ph.top wenno ma-lock daytoy.",
        "question": "Adda mensahe nga agsasao adda case number a na-file kontra kenka ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-049",
    "title": "ewallet drill 49",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "call-center agent. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Maya",
        "message": "Maya: Ma-expire ti MPIN mo itan. I-update daytoy iti bdo-secure-login-verify.top tapos magusar pay ti wallet mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a MAYA. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a MAYA. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-050",
    "title": "ewallet drill 50",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "senior pensioner. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti smart-rewar-ds.top iti 24 nga oras.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-051",
    "title": "ewallet drill 51",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "call-center agent. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Addan nga umay a transfer nga P12,000! Agbayad nga umuna ti bassit a release fee tapos maawat daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-052",
    "title": "ewallet drill 52",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "estudyante iti Manila. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Maya",
        "message": "Maya: Error iti double refund! Tapos ma-correct, kumpirmaam ti account mo iti gcash-update.ph-verify.top iti 24 nga oras.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-053",
    "title": "ewallet drill 53",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "Lola iti probinsya. Adda mensahe nga agsasao adda case number a na-file kontra kenka ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Ma-expire ti MPIN mo itan. I-update daytoy iti gcash-update.ph-verify.top tapos magusar pay ti wallet mo.",
        "question": "Adda mensahe nga agsasao adda case number a na-file kontra kenka ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga Maya hotline *788."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-054",
    "title": "ewallet drill 54",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "tagikuada ti sari-sari store. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita mi ti suspicious login iti account mo. I-verify itan iti shopee-refund-ph.site wenno ma-lock daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-055",
    "title": "ewallet drill 55",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "call-center agent. Adda mensahe nga agsasao maisublin ti parcel mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: maisublin ti parcel mo I-reply ti OTP mo itan tapos ma-reactivate, wenno mapukaw ti kuarta mo iti 24 nga oras.",
        "question": "Adda mensahe nga agsasao maisublin ti parcel mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-056",
    "title": "ewallet drill 56",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "bassit nga online seller. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Nakita mi ti suspicious login iti account mo. I-verify itan iti bit.ly/verify-now wenno ma-lock daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-057",
    "title": "ewallet drill 57",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "call-center agent. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Maya",
        "message": "Maya: Nakita mi ti suspicious login iti account mo. I-verify itan iti bdo-secure-login-verify.top wenno ma-lock daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a MAYA. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a MAYA. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-058",
    "title": "ewallet drill 58",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "Lola iti probinsya. Adda mensahe nga agsasao ma-deactivate ti SIM mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Nakita mi ti suspicious login iti account mo. I-verify itan iti shopee-refund-ph.site wenno ma-lock daytoy.",
        "question": "Adda mensahe nga agsasao ma-deactivate ti SIM mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a SHOPEEPAY. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-059",
    "title": "ewallet drill 59",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "OFW iti Riyadh. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GCash",
        "message": "GCash: mapukaw ti kuarta mo iti 24 nga oras I-reply ti OTP mo itan tapos ma-reactivate, wenno mapukaw ti kuarta mo iti 24 nga oras.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-060",
    "title": "ewallet drill 60",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "driver ti jeepney. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Ma-expire ti MPIN mo itan. I-update daytoy iti bdo-secure-login-verify.top tapos magusar pay ti wallet mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga GCash hotline 2882."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-061",
    "title": "ewallet drill 61",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "estudyante iti Manila. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GoTyme",
        "message": "GoTyme: maikansela ti benefits mo I-reply ti OTP mo itan tapos ma-reactivate, wenno mapukaw ti kuarta mo iti 24 nga oras.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-062",
    "title": "ewallet drill 62",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "call-center agent. Adda mensahe nga agsasao daytoyen ti maudi a gundaway mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Ma-expire ti MPIN mo itan. I-update daytoy iti gcash-update.ph-verify.top tapos magusar pay ti wallet mo.",
        "question": "Adda mensahe nga agsasao daytoyen ti maudi a gundaway mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GCASH. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a GCASH. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-063",
    "title": "ewallet drill 63",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "bassit nga online seller. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay Alerto: daytoyen ti maudi a gundaway mo. I-verify iti shopee-refund-ph.site wenno ma-suspend ti account mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga SHOPEEPAY app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga SHOPEEPAY app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-064",
    "title": "ewallet drill 64",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao adda nakita nga unauthorized transfer ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GoTyme",
        "message": "GoTyme: adda nakita nga unauthorized transfer I-reply ti OTP mo itan tapos ma-reactivate, wenno mapukaw ti kuarta mo iti 24 nga oras.",
        "question": "Adda mensahe nga agsasao adda nakita nga unauthorized transfer ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-065",
    "title": "ewallet drill 65",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "senior pensioner. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash Alerto: daytoyen ti maudi a gundaway mo. I-verify iti pagibig-loan-release.site wenno ma-suspend ti account mo.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga GCash hotline 2882."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-066",
    "title": "ewallet drill 66",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "senior pensioner. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita mi ti suspicious login iti account mo. I-verify itan iti maya-security-alert.xyz wenno ma-lock daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-067",
    "title": "ewallet drill 67",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "tagikuada ti sari-sari store. Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita mi ti suspicious login iti account mo. I-verify itan iti gcash-update.ph-verify.top wenno ma-lock daytoy.",
        "question": "Adda text nga agsasao nga masapul nga agtignay ka a dagus. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Ti numero nga dayta para iti scammer. Usaren laeng ti opisial nga the official hotline."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-hard-068",
    "title": "ewallet drill 68",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "ewallet",
    "archetype": "trap",
    "category": "ewallet",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao adda nakita nga unauthorized transfer ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme Alerto: adda nakita nga unauthorized transfer. I-verify iti g-cash-verify-ph.top wenno ma-suspend ti account mo.",
        "question": "Adda mensahe nga agsasao adda nakita nga unauthorized transfer ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GOTYME app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GOTYME app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "I-reply ti OTP a dagus tapos natalged ti kuarta ko.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-easy-069",
    "title": "ewallet drill 69",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao maikansela ti benefits mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Ma-expire ti MPIN mo itan. I-update daytoy iti bit.ly/verify-now tapos magusar pay ti wallet mo.",
        "question": "Adda mensahe nga agsasao maikansela ti benefits mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga GCASH app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga GCASH app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "No agbayad ka tapos makaawat ti kuarta, scam dayta."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "ewallet-medium-070",
    "title": "ewallet drill 70",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "driver ti jeepney. Adda mensahe nga agsasao daytoyen ti maudi a gundaway mo ken agdawdawat iti OTP. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya Alerto: daytoyen ti maudi a gundaway mo. I-verify iti bdo-secure-login-verify.top wenno ma-suspend ti account mo.",
        "question": "Adda mensahe nga agsasao daytoyen ti maudi a gundaway mo ken agdawdawat iti OTP. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti pudno nga MAYA app ken i-check ti account ko.",
            "correct": true,
            "feedback": "Usto. In-check mo ti pudno nga MAYA app imbes a mamati iti text. Ti account mo ti source of truth, saan ti mensahe."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text tapos ma-verify.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a MAYA. Ti mensahe nga dayta ti scam."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maawat ti transfer.",
            "correct": false,
            "feedback": "Saan nga agdawdawat iti OTP ti pudno a MAYA. Ti mensahe nga dayta ti scam."
          }
        ],
        "tip": "Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Sekreto ti OTP. DIDA nga agdawat iti OTP ti pudno a kompanya.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-000",
    "title": "bank drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "tagikuada ti sari-sari store. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "RCBC",
        "message": "RCBC Fraud Dept: nakakita ti unauthorized transfer nga P1,000,000. I-reply ti card details mo tapos ma-reverse.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-001",
    "title": "bank drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "senior pensioner. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "LandBank",
        "message": "LandBank Fraud Dept: nakakita ti unauthorized transfer nga P45,000. I-reply ti card details mo tapos ma-reverse.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-002",
    "title": "bank drill 2",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "call-center agent. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LandBank",
        "message": "LandBank: Naka-hold ti account mo para iti review. I-kumpirma ti identity mo iti smart-rewar-ds.top tapos masublian ti access.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-003",
    "title": "bank drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "bassit nga online seller. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Security Bank",
        "message": "Security Bank Fraud Dept: nakakita ti unauthorized transfer nga P2,000. I-reply ti card details mo tapos ma-reverse.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-004",
    "title": "bank drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "OFW iti Riyadh. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNB",
        "message": "PNB: daytoyen ti maudi a gundaway mo. I-click ti jnt-tracking-ph.site tapos i-verify ti identity mo itan.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-005",
    "title": "bank drill 5",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "estudyante iti Manila. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNB",
        "message": "PNB Fraud Dept: nakakita ti unauthorized transfer nga P1,500. I-reply ti card details mo tapos ma-reverse.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-006",
    "title": "bank drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "estudyante iti Manila. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank: Masaradan ti card mo gapu iti inactivity. I-reactivate iti smart-rewar-ds.top.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-007",
    "title": "bank drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "call-center agent. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: nakakita ti unauthorized transfer nga P100,000. I-reply ti card details mo tapos ma-reverse.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-008",
    "title": "bank drill 8",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "bassit nga online seller. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: nakakita ti unauthorized transfer nga P500. I-reply ti card details mo tapos ma-reverse.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-009",
    "title": "bank drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "estudyante iti Manila. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Security Bank",
        "message": "Security Bank Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti g-cash-verify-ph.top.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-010",
    "title": "bank drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "bassit nga online seller. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Metrobank",
        "message": "Metrobank: Naka-hold ti account mo para iti review. I-kumpirma ti identity mo iti pagibig-loan-release.site tapos masublian ti access.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-011",
    "title": "bank drill 11",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "driver ti jeepney. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BPI",
        "message": "BPI: mapukaw ti kuarta mo iti 24 nga oras. I-click ti smart-rewar-ds.top tapos i-verify ti identity mo itan.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-012",
    "title": "bank drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "Lola iti probinsya. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "RCBC",
        "message": "RCBC: ma-deactivate ti SIM mo. I-click ti g-cash-verify-ph.top tapos i-verify ti identity mo itan.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-013",
    "title": "bank drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "Lola iti probinsya. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LandBank",
        "message": "LandBank: Masaradan ti card mo gapu iti inactivity. I-reactivate iti bit.ly/verify-now.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-014",
    "title": "bank drill 14",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "senior pensioner. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: nakakita ti unauthorized transfer nga P500. I-reply ti card details mo tapos ma-reverse.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-015",
    "title": "bank drill 15",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "driver ti jeepney. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LandBank",
        "message": "LandBank Fraud Dept: nakakita ti unauthorized transfer nga P2,000. I-reply ti card details mo tapos ma-reverse.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-016",
    "title": "bank drill 16",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "senior pensioner. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "UnionBank",
        "message": "UnionBank: maikansela ti benefits mo. I-click ti bdo-secure-login-verify.top tapos i-verify ti identity mo itan.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-017",
    "title": "bank drill 17",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "call-center agent. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Metrobank",
        "message": "Metrobank Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti pagibig-loan-release.site.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-018",
    "title": "bank drill 18",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "OFW iti Riyadh. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LandBank",
        "message": "LandBank Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti g-cash-verify-ph.top.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-019",
    "title": "bank drill 19",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "estudyante iti Manila. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti jnt-tracking-ph.site.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-020",
    "title": "bank drill 20",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "OFW iti Riyadh. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "UnionBank",
        "message": "UnionBank: adda nakita nga unauthorized transfer. I-click ti maya-security-alert.xyz tapos i-verify ti identity mo itan.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-021",
    "title": "bank drill 21",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "tagikuada ti sari-sari store. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PNB",
        "message": "PNB: Masaradan ti card mo gapu iti inactivity. I-reactivate iti g-cash-verify-ph.top.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-022",
    "title": "bank drill 22",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "senior pensioner. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: Naka-hold ti account mo para iti review. I-kumpirma ti identity mo iti shopee-refund-ph.site tapos masublian ti access.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-023",
    "title": "bank drill 23",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "estudyante iti Manila. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Metrobank",
        "message": "Metrobank: Masaradan ti card mo gapu iti inactivity. I-reactivate iti jnt-tracking-ph.site.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-024",
    "title": "bank drill 24",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "driver ti jeepney. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti gov-ph-tax.site.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-025",
    "title": "bank drill 25",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "tagikuada ti sari-sari store. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Security Bank",
        "message": "Security Bank Fraud Dept: nakakita ti unauthorized transfer nga P12,000. I-reply ti card details mo tapos ma-reverse.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-026",
    "title": "bank drill 26",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "senior pensioner. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RCBC",
        "message": "RCBC: Naka-hold ti account mo para iti review. I-kumpirma ti identity mo iti shopee-refund-ph.site tapos masublian ti access.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-027",
    "title": "bank drill 27",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "call-center agent. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Metrobank",
        "message": "Metrobank Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti smart-rewar-ds.top.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-028",
    "title": "bank drill 28",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "call-center agent. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "RCBC",
        "message": "RCBC: Naka-hold ti account mo para iti review. I-kumpirma ti identity mo iti bdo-secure-login-verify.top tapos masublian ti access.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-029",
    "title": "bank drill 29",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "call-center agent. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "UnionBank",
        "message": "UnionBank: adda nakita nga unauthorized transfer. I-click ti bit.ly/verify-now tapos i-verify ti identity mo itan.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-030",
    "title": "bank drill 30",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "bassit nga online seller. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Metrobank",
        "message": "Metrobank: Masaradan ti card mo gapu iti inactivity. I-reactivate iti gcash-update.ph-verify.top.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-031",
    "title": "bank drill 31",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "tagikuada ti sari-sari store. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LandBank",
        "message": "LandBank Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti bit.ly/verify-now.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-032",
    "title": "bank drill 32",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "Lola iti probinsya. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LandBank",
        "message": "LandBank Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti maya-security-alert.xyz.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-033",
    "title": "bank drill 33",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "OFW iti Riyadh. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNB",
        "message": "PNB Fraud Dept: nakakita ti unauthorized transfer nga P100,000. I-reply ti card details mo tapos ma-reverse.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-034",
    "title": "bank drill 34",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "estudyante iti Manila. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Security Bank",
        "message": "Security Bank: daytoyen ti maudi a gundaway mo. I-click ti gov-ph-tax.site tapos i-verify ti identity mo itan.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-035",
    "title": "bank drill 35",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "tagikuada ti sari-sari store. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "UnionBank",
        "message": "UnionBank: Masaradan ti card mo gapu iti inactivity. I-reactivate iti pagibig-loan-release.site.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-036",
    "title": "bank drill 36",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "OFW iti Riyadh. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "BPI Fraud Dept: nakakita ti unauthorized transfer nga P150. I-reply ti card details mo tapos ma-reverse.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-037",
    "title": "bank drill 37",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "Lola iti probinsya. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: Masaradan ti card mo gapu iti inactivity. I-reactivate iti gov-ph-tax.site.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-038",
    "title": "bank drill 38",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "Lola iti probinsya. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "LandBank",
        "message": "LandBank: Naka-hold ti account mo para iti review. I-kumpirma ti identity mo iti g-cash-verify-ph.top tapos masublian ti access.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-039",
    "title": "bank drill 39",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "tagikuada ti sari-sari store. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: nakakita ti unauthorized transfer nga P250. I-reply ti card details mo tapos ma-reverse.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-040",
    "title": "bank drill 40",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "driver ti jeepney. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: Masaradan ti card mo gapu iti inactivity. I-reactivate iti shopee-refund-ph.site.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-041",
    "title": "bank drill 41",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "driver ti jeepney. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: ma-deactivate ti SIM mo. I-click ti shopee-refund-ph.site tapos i-verify ti identity mo itan.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-042",
    "title": "bank drill 42",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "senior pensioner. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank: Naka-hold ti account mo para iti review. I-kumpirma ti identity mo iti bdo-secure-login-verify.top tapos masublian ti access.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-043",
    "title": "bank drill 43",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "call-center agent. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Security Bank",
        "message": "Security Bank Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti pagibig-loan-release.site.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-044",
    "title": "bank drill 44",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "senior pensioner. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank: Masaradan ti card mo gapu iti inactivity. I-reactivate iti pagibig-loan-release.site.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-045",
    "title": "bank drill 45",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "tagikuada ti sari-sari store. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "BPI",
        "message": "BPI: na-lock ti account mo. I-click ti gcash-update.ph-verify.top tapos i-verify ti identity mo itan.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-046",
    "title": "bank drill 46",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "tagikuada ti sari-sari store. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: nakakita ti unauthorized transfer nga P12,000. I-reply ti card details mo tapos ma-reverse.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-047",
    "title": "bank drill 47",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "estudyante iti Manila. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RCBC",
        "message": "RCBC Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti gcash-update.ph-verify.top.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-048",
    "title": "bank drill 48",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "Lola iti probinsya. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RCBC",
        "message": "RCBC: daytoyen ti maudi a gundaway mo. I-click ti jnt-tracking-ph.site tapos i-verify ti identity mo itan.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-049",
    "title": "bank drill 49",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "OFW iti Riyadh. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: nakakita ti unauthorized transfer nga P1,000,000. I-reply ti card details mo tapos ma-reverse.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-050",
    "title": "bank drill 50",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "bassit nga online seller. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BPI",
        "message": "BPI Fraud Dept: nakakita ti unauthorized transfer nga P45,000. I-reply ti card details mo tapos ma-reverse.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-051",
    "title": "bank drill 51",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "estudyante iti Manila. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Security Bank",
        "message": "Security Bank: Naka-hold ti account mo para iti review. I-kumpirma ti identity mo iti jnt-tracking-ph.site tapos masublian ti access.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-052",
    "title": "bank drill 52",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "driver ti jeepney. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNB",
        "message": "PNB Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti g-cash-verify-ph.top.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-053",
    "title": "bank drill 53",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "OFW iti Riyadh. Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RCBC",
        "message": "RCBC Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti bit.ly/verify-now.",
        "question": "Adda email nga agsasao nga adda iti peggad ti account mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-054",
    "title": "bank drill 54",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "call-center agent. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Metrobank",
        "message": "Metrobank Fraud Dept: nakakita ti unauthorized transfer nga P5,000. I-reply ti card details mo tapos ma-reverse.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-055",
    "title": "bank drill 55",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "senior pensioner. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Security Bank",
        "message": "Security Bank Fraud Dept: nakakita ti unauthorized transfer nga P100,000. I-reply ti card details mo tapos ma-reverse.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-hard-056",
    "title": "bank drill 56",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "senior pensioner. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PNB",
        "message": "PNB: Masaradan ti card mo gapu iti inactivity. I-reactivate iti smart-rewar-ds.top.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-easy-057",
    "title": "bank drill 57",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "bank",
    "archetype": "redirect",
    "category": "bank",
    "setup": "call-center agent. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: Naka-hold ti account mo para iti review. I-kumpirma ti identity mo iti gov-ph-tax.site tapos masublian ti access.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti bank app ko ken i-check no adda pudno nga alert.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti login ko tapos saan a maiserra ti account.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "bank-medium-058",
    "title": "bank drill 58",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "bank",
    "archetype": "trap",
    "category": "bank",
    "setup": "OFW iti Riyadh. Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "BPI Security: Adda baro a device a nag-try nga ag-login. I-approve wenno i-decline iti shopee-refund-ph.site.",
        "question": "Kuna ti agtawtawag nga nagusar ti card mo iti fraud. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID ken sender name. Kanayon nga awagan ti pudno nga number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ken 3-digit code ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga mangted iti card details wenno code iti phone wenno text link. Ammoen ti pudno a bangko ti card number mo."
          }
        ],
        "tip": "Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan pudno a bangko nga agdawdawat iti OTP wenno card code mo.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-000",
    "title": "job drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "OFW iti Riyadh. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "Congratulations! Nakapasar ka iti screening mi. Bayadan ti P250 processing fee iti maya-security-alert.xyz tapos rugi.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-001",
    "title": "job drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "estudyante iti Manila. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "Congratulations! Nakapasar ka iti screening mi. Bayadan ti P2,000 processing fee iti pagibig-loan-release.site tapos rugi.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-002",
    "title": "job drill 2",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "call-center agent. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "Umuna a task mo: i-transfer ti P500 kas refundable performance deposit.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-003",
    "title": "job drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "Lola iti probinsya. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Umuna a task mo: i-transfer ti P500 kas refundable performance deposit.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-004",
    "title": "job drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "Lola iti probinsya. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "HR ditoy: ngamin a malpas ti onboarding mo. Kumpirmaam iti bit.ly/verify-now para iti P1,000,000 refundable deposit.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-005",
    "title": "job drill 5",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "bassit nga online seller. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoGlobal",
        "message": "HR ditoy: ngamin a malpas ti onboarding mo. Kumpirmaam iti g-cash-verify-ph.top para iti P1,500 refundable deposit.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-006",
    "title": "job drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "Lola iti probinsya. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "DataEntryPH",
        "message": "Umuna a task mo: i-transfer ti P12,000 kas refundable performance deposit.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-007",
    "title": "job drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "call-center agent. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "RemoteHire",
        "message": "Congratulations! Nakapasar ka iti screening mi. Bayadan ti P500 processing fee iti bdo-secure-login-verify.top tapos rugi.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-008",
    "title": "job drill 8",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "tagikuada ti sari-sari store. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "HR ditoy: ngamin a malpas ti onboarding mo. Kumpirmaam iti smart-rewar-ds.top para iti P8,000 refundable deposit.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-009",
    "title": "job drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "estudyante iti Manila. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "HR ditoy: ngamin a malpas ti onboarding mo. Kumpirmaam iti bdo-secure-login-verify.top para iti P12,000 refundable deposit.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-010",
    "title": "job drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "bassit nga online seller. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Umuna a task mo: i-transfer ti P2,000 kas refundable performance deposit.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-011",
    "title": "job drill 11",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "estudyante iti Manila. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "Kayat mi ti profile mo! P100,000/bulan, work from home. I-download daytoy nga app tapos rugi ti training itan.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-012",
    "title": "job drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "call-center agent. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "DataEntryPH",
        "message": "Adda ka iti shortlist! I-confirm ti slot mo iti gov-ph-tax.site iti 24 nga oras.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-013",
    "title": "job drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "tagikuada ti sari-sari store. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "RemoteHire",
        "message": "Kayat mi ti profile mo! P5,000/bulan, work from home. I-download daytoy nga app tapos rugi ti training itan.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-014",
    "title": "job drill 14",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "driver ti jeepney. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Kayat mi ti profile mo! P150/bulan, work from home. I-download daytoy nga app tapos rugi ti training itan.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-015",
    "title": "job drill 15",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "senior pensioner. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "RemoteHire",
        "message": "Adda ka iti shortlist! I-confirm ti slot mo iti g-cash-verify-ph.top iti 24 nga oras.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-016",
    "title": "job drill 16",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "estudyante iti Manila. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "DataEntryPH",
        "message": "Umuna a task mo: i-transfer ti P500 kas refundable performance deposit.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-017",
    "title": "job drill 17",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "Lola iti probinsya. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "CryptoGlobal",
        "message": "Kayat mi ti profile mo! P1,000,000/bulan, work from home. I-download daytoy nga app tapos rugi ti training itan.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-018",
    "title": "job drill 18",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "call-center agent. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoGlobal",
        "message": "Kayat mi ti profile mo! P8,000/bulan, work from home. I-download daytoy nga app tapos rugi ti training itan.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-019",
    "title": "job drill 19",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "call-center agent. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Adda ka iti shortlist! I-confirm ti slot mo iti pagibig-loan-release.site iti 24 nga oras.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-020",
    "title": "job drill 20",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "driver ti jeepney. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "Congratulations! Nakapasar ka iti screening mi. Bayadan ti P12,000 processing fee iti bdo-secure-login-verify.top tapos rugi.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-021",
    "title": "job drill 21",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "senior pensioner. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Umuna a task mo: i-transfer ti P5,000 kas refundable performance deposit.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-022",
    "title": "job drill 22",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "tagikuada ti sari-sari store. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoGlobal",
        "message": "Umuna a task mo: i-transfer ti P150 kas refundable performance deposit.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-023",
    "title": "job drill 23",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "senior pensioner. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "HR ditoy: ngamin a malpas ti onboarding mo. Kumpirmaam iti shopee-refund-ph.site para iti P5,000 refundable deposit.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-024",
    "title": "job drill 24",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "call-center agent. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Congratulations! Nakapasar ka iti screening mi. Bayadan ti P2,000 processing fee iti gcash-update.ph-verify.top tapos rugi.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-025",
    "title": "job drill 25",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "call-center agent. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "HR ditoy: ngamin a malpas ti onboarding mo. Kumpirmaam iti bit.ly/verify-now para iti P1,000,000 refundable deposit.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-026",
    "title": "job drill 26",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "bassit nga online seller. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Kayat mi ti profile mo! P1,000,000/bulan, work from home. I-download daytoy nga app tapos rugi ti training itan.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-027",
    "title": "job drill 27",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "tagikuada ti sari-sari store. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Adda ka iti shortlist! I-confirm ti slot mo iti smart-rewar-ds.top iti 24 nga oras.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-028",
    "title": "job drill 28",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "senior pensioner. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "Umuna a task mo: i-transfer ti P5,000 kas refundable performance deposit.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-029",
    "title": "job drill 29",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "estudyante iti Manila. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "CryptoGlobal",
        "message": "Kayat mi ti profile mo! P12,000/bulan, work from home. I-download daytoy nga app tapos rugi ti training itan.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-030",
    "title": "job drill 30",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "senior pensioner. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Congratulations! Nakapasar ka iti screening mi. Bayadan ti P12,000 processing fee iti shopee-refund-ph.site tapos rugi.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-031",
    "title": "job drill 31",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "estudyante iti Manila. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "HR ditoy: ngamin a malpas ti onboarding mo. Kumpirmaam iti pagibig-loan-release.site para iti P12,000 refundable deposit.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-032",
    "title": "job drill 32",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "estudyante iti Manila. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Kayat mi ti profile mo! P12,000/bulan, work from home. I-download daytoy nga app tapos rugi ti training itan.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-033",
    "title": "job drill 33",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "call-center agent. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Adda ka iti shortlist! I-confirm ti slot mo iti gcash-update.ph-verify.top iti 24 nga oras.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-034",
    "title": "job drill 34",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "OFW iti Riyadh. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Congratulations! Nakapasar ka iti screening mi. Bayadan ti P8,000 processing fee iti gcash-update.ph-verify.top tapos rugi.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-035",
    "title": "job drill 35",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "tagikuada ti sari-sari store. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "HR ditoy: ngamin a malpas ti onboarding mo. Kumpirmaam iti jnt-tracking-ph.site para iti P250 refundable deposit.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-036",
    "title": "job drill 36",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "estudyante iti Manila. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoGlobal",
        "message": "Kayat mi ti profile mo! P1,000,000/bulan, work from home. I-download daytoy nga app tapos rugi ti training itan.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-037",
    "title": "job drill 37",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "tagikuada ti sari-sari store. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Congratulations! Nakapasar ka iti screening mi. Bayadan ti P1,000,000 processing fee iti gcash-update.ph-verify.top tapos rugi.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-038",
    "title": "job drill 38",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "estudyante iti Manila. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Umuna a task mo: i-transfer ti P1,000,000 kas refundable performance deposit.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-039",
    "title": "job drill 39",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "redirect",
    "category": "job",
    "setup": "Lola iti probinsya. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "HR ditoy: ngamin a malpas ti onboarding mo. Kumpirmaam iti shopee-refund-ph.site para iti P1,500 refundable deposit.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-040",
    "title": "job drill 40",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "call-center agent. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "Adda ka iti shortlist! I-confirm ti slot mo iti gov-ph-tax.site iti 24 nga oras.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-hard-041",
    "title": "job drill 41",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "Lola iti probinsya. Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Congratulations! Nakapasar ka iti screening mi. Bayadan ti P25,000 processing fee iti pagibig-loan-release.site tapos rugi.",
        "question": "Adda tagtagainep a trabaho a naguna a nakakita kenka. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Awan pudno a trabaho nga agdawdawat iti bayad tapos agtrabaho.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-easy-042",
    "title": "job drill 42",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "senior pensioner. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Congratulations! Nakapasar ka iti screening mi. Bayadan ti P2,000 processing fee iti g-cash-verify-ph.top tapos rugi.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua ken mangted iti proof.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "job-medium-043",
    "title": "job drill 43",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "job",
    "archetype": "trap",
    "category": "job",
    "setup": "OFW iti Riyadh. Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "HR ditoy: ngamin a malpas ti onboarding mo. Kumpirmaam iti bdo-secure-login-verify.top para iti P12,000 refundable deposit.",
        "question": "Kayat da iti deposit tapos rugi ti trabaho. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-search ti nagan ti kompanya ken i-check ti pudno a website da.",
            "correct": true,
            "feedback": "Usto. Adda verifiable web presence ti pudno a kompanya; saan da a dumardaras nga mang-install iti app wenno agbayad iti deposit."
          },
          {
            "id": "b",
            "text": "Ipatulod ti deposit. Kuna da a refundable.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          },
          {
            "id": "c",
            "text": "I-download a dagus ti app sakbay pay a pumili da iti sabali.",
            "correct": false,
            "feedback": "Bayadan KA ti pudno nga employer. Saan da nga agdawdawat iti bayad tapos agrugika."
          }
        ],
        "tip": "Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti trabaho a mangbayad KA tapos agtrabaho saan a trabaho, scam dayta.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-000",
    "title": "investment drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "call-center agent. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Garantisado a kita! Ag-invest iti P500 itan, madoble iti maysa a lawas. Sure kita, pasok na!",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P500 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-001",
    "title": "investment drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "driver ti jeepney. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Signal group: garantisado a P100,000 payout iti lawas. Sumrek sakbay a maiserra.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-002",
    "title": "investment drill 2",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "tagikuada ti sari-sari store. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Dinoble ti app mi ti P45,000 iti 7 nga aldaw. Rugi ti account mo itan iti bdo-secure-login-verify.top.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P45,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-003",
    "title": "investment drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "tagikuada ti sari-sari store. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Ag-urnong iti P5,000 inaldaw nga awan risk. Mag-withdraw anytime. Ag-invest itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P5,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-004",
    "title": "investment drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "driver ti jeepney. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Ag-urnong iti P5,000 inaldaw nga awan risk. Mag-withdraw anytime. Ag-invest itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P5,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-005",
    "title": "investment drill 5",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "Lola iti probinsya. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Signal group: garantisado a P150 payout iti lawas. Sumrek sakbay a maiserra.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P150 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-006",
    "title": "investment drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "bassit nga online seller. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Dinoble ti AI trading app mi ti P12,000 iti maysa a bulan. Rugi itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-007",
    "title": "investment drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "OFW iti Riyadh. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Dinoble ti AI trading app mi ti P45,000 iti maysa a bulan. Rugi itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P45,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-008",
    "title": "investment drill 8",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "estudyante iti Manila. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Dinoble ti AI trading app mi ti P1,500 iti maysa a bulan. Rugi itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P1,500 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-009",
    "title": "investment drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "bassit nga online seller. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Binance",
        "message": "Ag-urnong iti P2,000 inaldaw nga awan risk. Mag-withdraw anytime. Ag-invest itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P2,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-010",
    "title": "investment drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "bassit nga online seller. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Ag-urnong iti P12,000 inaldaw nga awan risk. Mag-withdraw anytime. Ag-invest itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P12,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-011",
    "title": "investment drill 11",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "senior pensioner. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Garantisado a kita! Ag-invest iti P12,000 itan, madoble iti maysa a lawas. Sure kita, pasok na!",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P12,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-012",
    "title": "investment drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "estudyante iti Manila. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoPips",
        "message": "Dinoble ti AI trading app mi ti P25,000 iti maysa a bulan. Rugi itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-013",
    "title": "investment drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "call-center agent. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Binance",
        "message": "Ag-urnong iti P2,000 inaldaw nga awan risk. Mag-withdraw anytime. Ag-invest itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P2,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-014",
    "title": "investment drill 14",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "Lola iti probinsya. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Signal group: garantisado a P45,000 payout iti lawas. Sumrek sakbay a maiserra.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P45,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-015",
    "title": "investment drill 15",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "driver ti jeepney. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoPips",
        "message": "Signal group: garantisado a P12,000 payout iti lawas. Sumrek sakbay a maiserra.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P12,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-016",
    "title": "investment drill 16",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "call-center agent. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Garantisado a kita! Ag-invest iti P12,000 itan, madoble iti maysa a lawas. Sure kita, pasok na!",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-017",
    "title": "investment drill 17",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "driver ti jeepney. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Ag-urnong iti P8,000 inaldaw nga awan risk. Mag-withdraw anytime. Ag-invest itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P8,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-018",
    "title": "investment drill 18",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "Lola iti probinsya. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Dinoble ti AI trading app mi ti P45,000 iti maysa a bulan. Rugi itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P45,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-019",
    "title": "investment drill 19",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "call-center agent. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoPips",
        "message": "Ag-urnong iti P25,000 inaldaw nga awan risk. Mag-withdraw anytime. Ag-invest itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-020",
    "title": "investment drill 20",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "estudyante iti Manila. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Signal group: garantisado a P45,000 payout iti lawas. Sumrek sakbay a maiserra.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P45,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-021",
    "title": "investment drill 21",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "call-center agent. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Dinoble ti app mi ti P5,000 iti 7 nga aldaw. Rugi ti account mo itan iti shopee-refund-ph.site.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-022",
    "title": "investment drill 22",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "driver ti jeepney. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Dinoble ti AI trading app mi ti P8,000 iti maysa a bulan. Rugi itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P8,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-023",
    "title": "investment drill 23",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "call-center agent. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Dinoble ti AI trading app mi ti P8,000 iti maysa a bulan. Rugi itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P8,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-024",
    "title": "investment drill 24",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "OFW iti Riyadh. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Garantisado a kita! Ag-invest iti P8,000 itan, madoble iti maysa a lawas. Sure kita, pasok na!",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P8,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-025",
    "title": "investment drill 25",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "bassit nga online seller. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Binance",
        "message": "Dinoble ti AI trading app mi ti P5,000 iti maysa a bulan. Rugi itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P5,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-026",
    "title": "investment drill 26",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "driver ti jeepney. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Ag-urnong iti P5,000 inaldaw nga awan risk. Mag-withdraw anytime. Ag-invest itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P5,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-027",
    "title": "investment drill 27",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "senior pensioner. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Dinoble ti AI trading app mi ti P1,500 iti maysa a bulan. Rugi itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-028",
    "title": "investment drill 28",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "Lola iti probinsya. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "CryptoPips",
        "message": "Garantisado a kita! Ag-invest iti P2,000 itan, madoble iti maysa a lawas. Sure kita, pasok na!",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-029",
    "title": "investment drill 29",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "estudyante iti Manila. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Ag-urnong iti P150 inaldaw nga awan risk. Mag-withdraw anytime. Ag-invest itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P150 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-030",
    "title": "investment drill 30",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "call-center agent. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Ag-urnong iti P12,000 inaldaw nga awan risk. Mag-withdraw anytime. Ag-invest itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-031",
    "title": "investment drill 31",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "bassit nga online seller. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Signal group: garantisado a P12,000 payout iti lawas. Sumrek sakbay a maiserra.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P12,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-032",
    "title": "investment drill 32",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "estudyante iti Manila. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Dinoble ti app mi ti P2,000 iti 7 nga aldaw. Rugi ti account mo itan iti gov-ph-tax.site.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P2,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-033",
    "title": "investment drill 33",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "redirect",
    "category": "investment",
    "setup": "driver ti jeepney. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Dinoble ti AI trading app mi ti P12,000 iti maysa a bulan. Rugi itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P12,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-034",
    "title": "investment drill 34",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "driver ti jeepney. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoPips",
        "message": "Ag-urnong iti P500 inaldaw nga awan risk. Mag-withdraw anytime. Ag-invest itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P500 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-035",
    "title": "investment drill 35",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "call-center agent. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoPips",
        "message": "Dinoble ti AI trading app mi ti P250 iti maysa a bulan. Rugi itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P250 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-easy-036",
    "title": "investment drill 36",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "senior pensioner. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoPips",
        "message": "Ag-urnong iti P1,500 inaldaw nga awan risk. Mag-withdraw anytime. Ag-invest itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-medium-037",
    "title": "investment drill 37",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "senior pensioner. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Binance",
        "message": "Signal group: garantisado a P150 payout iti lawas. Sumrek sakbay a maiserra.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Ag-invest iti P150 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "I-share iti pamilya tapos ag-urnong da met.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "investment-hard-038",
    "title": "investment drill 38",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "investment",
    "archetype": "trap",
    "category": "investment",
    "setup": "call-center agent. Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Dinoble ti AI trading app mi ti P45,000 iti maysa a bulan. Rugi itan.",
        "question": "Adda tao a mangari ti garantisado a kita. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ken i-report. Awan garantisado a kita.",
            "correct": true,
            "feedback": "Usto. Ti 'garantisado a kita' ti kasalsalimetmetan a scam signal nga adda."
          },
          {
            "id": "b",
            "text": "Rugi iti bassit tapos i-test.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          },
          {
            "id": "c",
            "text": "Ag-invest iti P45,000 tapos suboken.",
            "correct": false,
            "feedback": "Ti siasinoman a mangari iti garantisado a kita ket alaenna ti kuarta mo, saan nga i-invest."
          }
        ],
        "tip": "Ti 'sure profit' a saan mo kiniddaw kanayon a scam."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ti 'sure profit' a saan mo kiniddaw kanayon a scam.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-000",
    "title": "government drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "Lola iti probinsya. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Adda warrant a na-issue kontra iti ID mo. I-resolve iti gcash-update.ph-verify.top tapos malikawan ti panag-aresto.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti Pag-IBIG tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti Pag-IBIG. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti Pag-IBIG. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-001",
    "title": "government drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "OFW iti Riyadh. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SSS",
        "message": "SSS: daytoyen ti maudi a gundaway mo Bayadan ti penalty mo nga P25,000 iti gcash-update.ph-verify.top tapos malikawan ti case filing.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti SSS tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-002",
    "title": "government drill 2",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "driver ti jeepney. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BIR",
        "message": "BIR: Adda warrant a na-issue kontra iti ID mo. I-resolve iti pagibig-loan-release.site tapos malikawan ti panag-aresto.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti BIR tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti BIR. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti BIR. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-003",
    "title": "government drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "estudyante iti Manila. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "SSS",
        "message": "SSS: Adda warrant a na-issue kontra iti ID mo. I-resolve iti smart-rewar-ds.top tapos malikawan ti panag-aresto.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti SSS tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-004",
    "title": "government drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "OFW iti Riyadh. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Saganad ti tax refund mo nga P8,000. I-claim iti pagibig-loan-release.site sakbay a ma-expire.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti Pag-IBIG tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti Pag-IBIG. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti Pag-IBIG. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-005",
    "title": "government drill 5",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "OFW iti Riyadh. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "SSS",
        "message": "SSS: ma-deactivate ti SIM mo Bayadan ti penalty mo nga P12,000 iti shopee-refund-ph.site tapos malikawan ti case filing.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti SSS tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-006",
    "title": "government drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "estudyante iti Manila. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "NBI",
        "message": "NBI: Maikansela ti benefits mo malaksid no mag-verify ka iti maya-security-alert.xyz.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti NBI tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-007",
    "title": "government drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "estudyante iti Manila. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "SSS",
        "message": "SSS: Adda warrant a na-issue kontra iti ID mo. I-resolve iti pagibig-loan-release.site tapos malikawan ti panag-aresto.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti SSS tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-008",
    "title": "government drill 8",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "estudyante iti Manila. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "NBI",
        "message": "NBI: I-update ti records mo iti gcash-update.ph-verify.top wenno ma-pause ti pension mo.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti NBI tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-009",
    "title": "government drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "estudyante iti Manila. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: Saganad ti tax refund mo nga P150. I-claim iti bdo-secure-login-verify.top sakbay a ma-expire.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti PNP-ACG tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PNP-ACG. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PNP-ACG. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-010",
    "title": "government drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "OFW iti Riyadh. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PhilHealth",
        "message": "PhilHealth: Adda warrant a na-issue kontra iti ID mo. I-resolve iti jnt-tracking-ph.site tapos malikawan ti panag-aresto.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti PhilHealth tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PhilHealth. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PhilHealth. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-011",
    "title": "government drill 11",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "driver ti jeepney. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC: adda nakita nga unauthorized transfer Bayadan ti penalty mo nga P250 iti g-cash-verify-ph.top tapos malikawan ti case filing.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti CICC tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti CICC. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti CICC. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-012",
    "title": "government drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "driver ti jeepney. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC: Maikansela ti benefits mo malaksid no mag-verify ka iti bdo-secure-login-verify.top.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti CICC tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti CICC. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti CICC. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-013",
    "title": "government drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "OFW iti Riyadh. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: Adda warrant a na-issue kontra iti ID mo. I-resolve iti gcash-update.ph-verify.top tapos malikawan ti panag-aresto.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti PNP-ACG tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PNP-ACG. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PNP-ACG. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-014",
    "title": "government drill 14",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "senior pensioner. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: I-update ti records mo iti smart-rewar-ds.top wenno ma-pause ti pension mo.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti PNP-ACG tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PNP-ACG. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PNP-ACG. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-015",
    "title": "government drill 15",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "driver ti jeepney. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Maikansela ti benefits mo malaksid no mag-verify ka iti pagibig-loan-release.site.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti Pag-IBIG tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti Pag-IBIG. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti Pag-IBIG. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-016",
    "title": "government drill 16",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "Lola iti probinsya. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SSS",
        "message": "SSS: I-update ti records mo iti pagibig-loan-release.site wenno ma-pause ti pension mo.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti SSS tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-017",
    "title": "government drill 17",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "senior pensioner. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: Saganad ti tax refund mo nga P150. I-claim iti smart-rewar-ds.top sakbay a ma-expire.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti PNP-ACG tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PNP-ACG. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PNP-ACG. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-018",
    "title": "government drill 18",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "OFW iti Riyadh. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: I-update ti records mo iti shopee-refund-ph.site wenno ma-pause ti pension mo.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti Pag-IBIG tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti Pag-IBIG. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti Pag-IBIG. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-019",
    "title": "government drill 19",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "call-center agent. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: I-update ti records mo iti bit.ly/verify-now wenno ma-pause ti pension mo.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti PNP-ACG tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PNP-ACG. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PNP-ACG. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-020",
    "title": "government drill 20",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "call-center agent. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CICC",
        "message": "CICC: Adda warrant a na-issue kontra iti ID mo. I-resolve iti bdo-secure-login-verify.top tapos malikawan ti panag-aresto.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti CICC tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti CICC. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti CICC. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-021",
    "title": "government drill 21",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "call-center agent. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SSS",
        "message": "SSS: Maikansela ti benefits mo malaksid no mag-verify ka iti gcash-update.ph-verify.top.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti SSS tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-022",
    "title": "government drill 22",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "estudyante iti Manila. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "NBI",
        "message": "NBI: Adda warrant a na-issue kontra iti ID mo. I-resolve iti pagibig-loan-release.site tapos malikawan ti panag-aresto.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti NBI tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-023",
    "title": "government drill 23",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "bassit nga online seller. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "NBI",
        "message": "NBI: Adda warrant a na-issue kontra iti ID mo. I-resolve iti maya-security-alert.xyz tapos malikawan ti panag-aresto.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti NBI tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-024",
    "title": "government drill 24",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "tagikuada ti sari-sari store. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BIR",
        "message": "BIR: Maikansela ti benefits mo malaksid no mag-verify ka iti pagibig-loan-release.site.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti BIR tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti BIR. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti BIR. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-025",
    "title": "government drill 25",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "call-center agent. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BIR",
        "message": "BIR: daytoyen ti maudi a gundaway mo Bayadan ti penalty mo nga P250 iti bdo-secure-login-verify.top tapos malikawan ti case filing.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti BIR tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti BIR. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti BIR. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-026",
    "title": "government drill 26",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "tagikuada ti sari-sari store. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PhilHealth",
        "message": "PhilHealth: maikansela ti benefits mo Bayadan ti penalty mo nga P250 iti gov-ph-tax.site tapos malikawan ti case filing.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti PhilHealth tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PhilHealth. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PhilHealth. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-027",
    "title": "government drill 27",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "estudyante iti Manila. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "NBI",
        "message": "NBI: Maikansela ti benefits mo malaksid no mag-verify ka iti bit.ly/verify-now.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti NBI tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-028",
    "title": "government drill 28",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "tagikuada ti sari-sari store. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC: Maikansela ti benefits mo malaksid no mag-verify ka iti smart-rewar-ds.top.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti CICC tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti CICC. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti CICC. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-029",
    "title": "government drill 29",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "estudyante iti Manila. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SSS",
        "message": "SSS: maikansela ti benefits mo Bayadan ti penalty mo nga P25,000 iti gov-ph-tax.site tapos malikawan ti case filing.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti SSS tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-030",
    "title": "government drill 30",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "call-center agent. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CICC",
        "message": "CICC: Maikansela ti benefits mo malaksid no mag-verify ka iti g-cash-verify-ph.top.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti CICC tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti CICC. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti CICC. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-031",
    "title": "government drill 31",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "estudyante iti Manila. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Saganad ti tax refund mo nga P250. I-claim iti gcash-update.ph-verify.top sakbay a ma-expire.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti Pag-IBIG tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti Pag-IBIG. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti Pag-IBIG. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-032",
    "title": "government drill 32",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "OFW iti Riyadh. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BIR",
        "message": "BIR: I-update ti records mo iti gov-ph-tax.site wenno ma-pause ti pension mo.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti BIR tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti BIR. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti BIR. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-033",
    "title": "government drill 33",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "call-center agent. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "NBI",
        "message": "NBI: I-update ti records mo iti g-cash-verify-ph.top wenno ma-pause ti pension mo.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti NBI tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-034",
    "title": "government drill 34",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "driver ti jeepney. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "NBI",
        "message": "NBI: I-update ti records mo iti gov-ph-tax.site wenno ma-pause ti pension mo.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti NBI tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-035",
    "title": "government drill 35",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "driver ti jeepney. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "NBI",
        "message": "NBI: Maikansela ti benefits mo malaksid no mag-verify ka iti smart-rewar-ds.top.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti NBI tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti NBI. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-easy-036",
    "title": "government drill 36",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "government",
    "archetype": "trap",
    "category": "government",
    "setup": "OFW iti Riyadh. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SSS",
        "message": "SSS: na-lock ti account mo Bayadan ti penalty mo nga P12,000 iti gcash-update.ph-verify.top tapos malikawan ti case filing.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti SSS tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos malikawan ti kaso.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti SSS. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-medium-037",
    "title": "government drill 37",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "estudyante iti Manila. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: ma-deactivate ti SIM mo Bayadan ti penalty mo nga P150 iti bdo-secure-login-verify.top tapos malikawan ti case filing.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti PNP-ACG tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PNP-ACG. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti PNP-ACG. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "government-hard-038",
    "title": "government drill 38",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "government",
    "archetype": "redirect",
    "category": "government",
    "setup": "tagikuada ti sari-sari store. Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Saganad ti tax refund mo nga P2,000. I-claim iti maya-security-alert.xyz sakbay a ma-expire.",
        "question": "Adda opisina ti gobyerno nga mangbaballaag iti penalty iti text. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti Pag-IBIG tapos ma-verify.",
            "correct": true,
            "feedback": "Usto. Saan nga mangarkensa iti fee ti gobyerno iti text; awagan ti opisial nga numero."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti Pag-IBIG. Impersonation ti text."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko.",
            "correct": false,
            "feedback": "Adda opisial nga channel dagiti ahensya a kas iti Pag-IBIG. Impersonation ti text."
          }
        ],
        "tip": "Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Awan opisina ti gobyerno nga agdawdawat iti fee wenno OTP iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-easy-000",
    "title": "telco drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "tagikuada ti sari-sari store. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Ma-expire dan ti points mo! I-redeem ti P250 itan iti bdo-secure-login-verify.top.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga PLDT app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga PLDT app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-001",
    "title": "telco drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "redirect",
    "category": "telco",
    "setup": "Lola iti probinsya. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Ngamin nga ma-expire ti account mo. I-renew iti gov-ph-tax.site tapos mapabilin ti number mo.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga SMART app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga SMART app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-002",
    "title": "telco drill 2",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "estudyante iti Manila. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: na-lock ti account mo I-reply ti registered name ken address mo tapos agpabilin ti line mo.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga DITO app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga DITO app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-easy-003",
    "title": "telco drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "call-center agent. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: Overdue ti bill mo. Bayadan ti P150 iti smart-rewar-ds.top tapos malikawan ti disconnection.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga GLOBE app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga GLOBE app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-004",
    "title": "telco drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "driver ti jeepney. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Overdue ti bill mo. Bayadan ti P45,000 iti bit.ly/verify-now tapos malikawan ti disconnection.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga GLOBE app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga GLOBE app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-005",
    "title": "telco drill 5",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "bassit nga online seller. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Smart",
        "message": "Smart: Overdue ti bill mo. Bayadan ti P250 iti g-cash-verify-ph.top tapos malikawan ti disconnection.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga SMART app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga SMART app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-easy-006",
    "title": "telco drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "telco",
    "archetype": "redirect",
    "category": "telco",
    "setup": "call-center agent. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Ma-expire dan ti points mo! I-redeem ti P250 itan iti bit.ly/verify-now.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga GLOBE app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga GLOBE app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-007",
    "title": "telco drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "tagikuada ti sari-sari store. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Ngamin nga ma-expire ti account mo. I-renew iti smart-rewar-ds.top tapos mapabilin ti number mo.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga PLDT app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga PLDT app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-008",
    "title": "telco drill 8",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "OFW iti Riyadh. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Ma-expire dan ti points mo! I-redeem ti P45,000 itan iti gov-ph-tax.site.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga GLOBE app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga GLOBE app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-easy-009",
    "title": "telco drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "tagikuada ti sari-sari store. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Nawaya nga P5,000 load para kenka! I-claim iti gcash-update.ph-verify.top itan.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga SMART app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga SMART app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-010",
    "title": "telco drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "redirect",
    "category": "telco",
    "setup": "call-center agent. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Nawaya nga P1,000,000 load para kenka! I-claim iti bit.ly/verify-now itan.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga DITO app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga DITO app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-011",
    "title": "telco drill 11",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "redirect",
    "category": "telco",
    "setup": "OFW iti Riyadh. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "DITO",
        "message": "DITO: Ngamin nga ma-expire ti account mo. I-renew iti g-cash-verify-ph.top tapos mapabilin ti number mo.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga DITO app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga DITO app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-easy-012",
    "title": "telco drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "telco",
    "archetype": "redirect",
    "category": "telco",
    "setup": "bassit nga online seller. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Smart",
        "message": "Smart: Ma-expire dan ti points mo! I-redeem ti P1,000,000 itan iti smart-rewar-ds.top.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga SMART app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga SMART app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-013",
    "title": "telco drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "redirect",
    "category": "telco",
    "setup": "estudyante iti Manila. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Overdue ti bill mo. Bayadan ti P1,000,000 iti gov-ph-tax.site tapos malikawan ti disconnection.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga SMART app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga SMART app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-014",
    "title": "telco drill 14",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "redirect",
    "category": "telco",
    "setup": "call-center agent. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Overdue ti bill mo. Bayadan ti P1,000,000 iti gcash-update.ph-verify.top tapos malikawan ti disconnection.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga PLDT app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga PLDT app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-easy-015",
    "title": "telco drill 15",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "senior pensioner. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Ma-expire dan ti points mo! I-redeem ti P250 itan iti gcash-update.ph-verify.top.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga GLOBE app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga GLOBE app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-016",
    "title": "telco drill 16",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "tagikuada ti sari-sari store. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Ma-expire dan ti points mo! I-redeem ti P1,000,000 itan iti jnt-tracking-ph.site.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga GLOBE app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga GLOBE app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-017",
    "title": "telco drill 17",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "redirect",
    "category": "telco",
    "setup": "senior pensioner. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Ma-expire dan ti points mo! I-redeem ti P5,000 itan iti smart-rewar-ds.top.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga DITO app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga DITO app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-easy-018",
    "title": "telco drill 18",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "telco",
    "archetype": "redirect",
    "category": "telco",
    "setup": "Lola iti probinsya. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Ngamin nga ma-expire ti account mo. I-renew iti shopee-refund-ph.site tapos mapabilin ti number mo.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga PLDT app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga PLDT app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-019",
    "title": "telco drill 19",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "driver ti jeepney. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Ma-expire dan ti points mo! I-redeem ti P150 itan iti jnt-tracking-ph.site.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga GLOBE app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga GLOBE app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-020",
    "title": "telco drill 20",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "bassit nga online seller. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Ma-expire dan ti points mo! I-redeem ti P150 itan iti gov-ph-tax.site.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga PLDT app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga PLDT app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-easy-021",
    "title": "telco drill 21",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "driver ti jeepney. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Overdue ti bill mo. Bayadan ti P2,000 iti bit.ly/verify-now tapos malikawan ti disconnection.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga SMART app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga SMART app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-022",
    "title": "telco drill 22",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "redirect",
    "category": "telco",
    "setup": "call-center agent. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Ma-expire dan ti points mo! I-redeem ti P250 itan iti bdo-secure-login-verify.top.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga DITO app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga DITO app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-023",
    "title": "telco drill 23",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "senior pensioner. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Overdue ti bill mo. Bayadan ti P1,000,000 iti gcash-update.ph-verify.top tapos malikawan ti disconnection.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga SMART app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga SMART app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-easy-024",
    "title": "telco drill 24",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "bassit nga online seller. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Overdue ti bill mo. Bayadan ti P12,000 iti pagibig-loan-release.site tapos malikawan ti disconnection.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga SMART app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga SMART app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-025",
    "title": "telco drill 25",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "OFW iti Riyadh. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: adda case number a na-file kontra kenka I-reply ti registered name ken address mo tapos agpabilin ti line mo.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga GLOBE app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga GLOBE app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-026",
    "title": "telco drill 26",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "senior pensioner. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Ma-expire dan ti points mo! I-redeem ti P2,000 itan iti gov-ph-tax.site.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga GLOBE app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga GLOBE app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-easy-027",
    "title": "telco drill 27",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "Lola iti probinsya. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Nawaya nga P1,000,000 load para kenka! I-claim iti gov-ph-tax.site itan.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga PLDT app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga PLDT app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "telco-medium-028",
    "title": "telco drill 28",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "telco",
    "archetype": "trap",
    "category": "telco",
    "setup": "tagikuada ti sari-sari store. Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: na-lock ti account mo I-reply ti registered name ken address mo tapos agpabilin ti line mo.",
        "question": "Adda mensahe nga mangitangtango iti points wenno mangbaballaag iti line mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga GLOBE app ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. I-check ti opisial nga GLOBE app; saan nga agtalek iti text link."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti details ko tapos ma-redeem.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          },
          {
            "id": "c",
            "text": "I-reply ti sibubukel a nagan ken adres ko.",
            "correct": false,
            "feedback": "Ti panag-reply wenno panag-click ket ibaga na iti scammer nga aktibo ti numero ken details mo."
          }
        ],
        "tip": "Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agdawdawat ti telco iti OTP wenno ID mo iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-easy-000",
    "title": "delivery drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Naka-hold ti parcel mo para iti unpaid fee nga P250. Bayadan iti shopee-refund-ph.site wenno maisublin ti package mo.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-medium-001",
    "title": "delivery drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "Lola iti probinsya. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Kasapulan ti package mo ti bassit a storage fee nga P2,000. Bayadan iti bdo-secure-login-verify.top.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-hard-002",
    "title": "delivery drill 2",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Flash Express",
        "message": "Flash Express: Kasapulan ti package mo ti bassit a storage fee nga P45,000. Bayadan iti smart-rewar-ds.top.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos saan a maisublin ti parcel ko.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-easy-003",
    "title": "delivery drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "tagikuada ti sari-sari store. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Saan a kompleto ti adres mo. I-confirm iti smart-rewar-ds.top wenno maisublin ti parcel.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos saan a maisublin ti parcel ko.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-medium-004",
    "title": "delivery drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "senior pensioner. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: adda case number a na-file kontra kenka Tapos ma-reschedule ti delivery, agbayad ti bassit a fee iti gov-ph-tax.site.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos saan a maisublin ti parcel ko.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-hard-005",
    "title": "delivery drill 5",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold ti parcel mo para iti unpaid fee nga P1,500. Bayadan iti bit.ly/verify-now wenno maisublin ti package mo.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos saan a maisublin ti parcel ko.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-easy-006",
    "title": "delivery drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold ti parcel mo para iti unpaid fee nga P1,000,000. Bayadan iti pagibig-loan-release.site wenno maisublin ti package mo.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-medium-007",
    "title": "delivery drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "bassit nga online seller. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Na-attempt ti delivery ngem napasakup. I-reschedule iti pagibig-loan-release.site para iti P150.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-hard-008",
    "title": "delivery drill 8",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "senior pensioner. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Kasapulan ti package mo ti bassit a storage fee nga P500. Bayadan iti g-cash-verify-ph.top.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-easy-009",
    "title": "delivery drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "Lola iti probinsya. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: na-lock ti account mo Tapos ma-reschedule ti delivery, agbayad ti bassit a fee iti maya-security-alert.xyz.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-medium-010",
    "title": "delivery drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "senior pensioner. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Na-attempt ti delivery ngem napasakup. I-reschedule iti gcash-update.ph-verify.top para iti P8,000.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos saan a maisublin ti parcel ko.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-hard-011",
    "title": "delivery drill 11",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "Lola iti probinsya. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Kasapulan ti package mo ti bassit a storage fee nga P45,000. Bayadan iti jnt-tracking-ph.site.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos saan a maisublin ti parcel ko.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-easy-012",
    "title": "delivery drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "bassit nga online seller. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Naka-hold ti parcel mo para iti unpaid fee nga P1,500. Bayadan iti smart-rewar-ds.top wenno maisublin ti package mo.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos saan a maisublin ti parcel ko.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-medium-013",
    "title": "delivery drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Flash Express",
        "message": "Flash Express: maisublin ti parcel mo Tapos ma-reschedule ti delivery, agbayad ti bassit a fee iti maya-security-alert.xyz.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-hard-014",
    "title": "delivery drill 14",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "driver ti jeepney. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Flash Express",
        "message": "Flash Express: Naka-hold ti parcel mo para iti unpaid fee nga P8,000. Bayadan iti g-cash-verify-ph.top wenno maisublin ti package mo.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos saan a maisublin ti parcel ko.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-easy-015",
    "title": "delivery drill 15",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "call-center agent. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Kasapulan ti package mo ti bassit a storage fee nga P500. Bayadan iti bdo-secure-login-verify.top.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos saan a maisublin ti parcel ko.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-medium-016",
    "title": "delivery drill 16",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "driver ti jeepney. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Saan a kompleto ti adres mo. I-confirm iti smart-rewar-ds.top wenno maisublin ti parcel.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-hard-017",
    "title": "delivery drill 17",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "driver ti jeepney. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Na-attempt ti delivery ngem napasakup. I-reschedule iti maya-security-alert.xyz para iti P150.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-easy-018",
    "title": "delivery drill 18",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "Lola iti probinsya. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Saan a kompleto ti adres mo. I-confirm iti shopee-refund-ph.site wenno maisublin ti parcel.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-medium-019",
    "title": "delivery drill 19",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "senior pensioner. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Naka-hold ti parcel mo para iti unpaid fee nga P1,500. Bayadan iti shopee-refund-ph.site wenno maisublin ti package mo.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-hard-020",
    "title": "delivery drill 20",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Kasapulan ti package mo ti bassit a storage fee nga P100,000. Bayadan iti gcash-update.ph-verify.top.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-easy-021",
    "title": "delivery drill 21",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "bassit nga online seller. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Flash Express",
        "message": "Flash Express: Saan a kompleto ti adres mo. I-confirm iti pagibig-loan-release.site wenno maisublin ti parcel.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos saan a maisublin ti parcel ko.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-medium-022",
    "title": "delivery drill 22",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "call-center agent. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Flash Express",
        "message": "Flash Express: Naka-hold ti parcel mo para iti unpaid fee nga P25,000. Bayadan iti maya-security-alert.xyz wenno maisublin ti package mo.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos saan a maisublin ti parcel ko.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-hard-023",
    "title": "delivery drill 23",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "bassit nga online seller. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Naka-hold ti parcel mo para iti unpaid fee nga P2,000. Bayadan iti g-cash-verify-ph.top wenno maisublin ti package mo.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-easy-024",
    "title": "delivery drill 24",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "delivery",
    "archetype": "redirect",
    "category": "delivery",
    "setup": "bassit nga online seller. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Kasapulan ti package mo ti bassit a storage fee nga P25,000. Bayadan iti bdo-secure-login-verify.top.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos saan a maisublin ti parcel ko.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-medium-025",
    "title": "delivery drill 25",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "driver ti jeepney. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: na-lock ti account mo Tapos ma-reschedule ti delivery, agbayad ti bassit a fee iti gov-ph-tax.site.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "delivery-hard-026",
    "title": "delivery drill 26",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "delivery",
    "archetype": "trap",
    "category": "delivery",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Saan a kompleto ti adres mo. I-confirm iti g-cash-verify-ph.top wenno maisublin ti parcel.",
        "question": "Adda mensahe nga agsasao nga naka-hold ti parcel mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna ti pudno a tracking number iti order app ko.",
            "correct": true,
            "feedback": "Usto. Inkompara mo iti pudno a tracking ti order mo. No saan nga agtutop, peke dayta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          },
          {
            "id": "c",
            "text": "Agbayad iti link tapos natalged.",
            "correct": false,
            "feedback": "Ikolekta ti pudno a courier ti fee iti ridaw wenno iti opisial nga app da, saan iti random text link."
          }
        ],
        "tip": "Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Bayadan ti delivery fee iti pudno nga app wenno iti ridaw, saan iti text link.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-medium-000",
    "title": "romance drill 0",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "romance",
    "archetype": "trap",
    "category": "romance",
    "setup": "estudyante iti Manila. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ti account ko. Mabalin nga i-hold ti P100,000 para kaniak agingga ti isasangpet ko?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-001",
    "title": "romance drill 1",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "tagikuada ti sari-sari store. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ak para kadatayo, ngem kasapulan ko iti P25,000 pay tapos ma-withdraw ken umay kenka.",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-002",
    "title": "romance drill 2",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "OFW iti Riyadh. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Kasapulan ti crypto investment ko iti P1,000,000 pay tapos ma-withdraw, kalpasanna bayadan ka.",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-medium-003",
    "title": "romance drill 3",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "romance",
    "archetype": "trap",
    "category": "romance",
    "setup": "Lola iti probinsya. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ti account ko. Mabalin nga i-hold ti P100,000 para kaniak agingga ti isasangpet ko?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-004",
    "title": "romance drill 4",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "senior pensioner. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ak para kadatayo, ngem kasapulan ko iti P8,000 pay tapos ma-withdraw ken umay kenka.",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-005",
    "title": "romance drill 5",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "tagikuada ti sari-sari store. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ak para kadatayo, ngem kasapulan ko iti P5,000 pay tapos ma-withdraw ken umay kenka.",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-medium-006",
    "title": "romance drill 6",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "romance",
    "archetype": "trap",
    "category": "romance",
    "setup": "Lola iti probinsya. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ti account ko. Mabalin nga i-hold ti P250 para kaniak agingga ti isasangpet ko?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-007",
    "title": "romance drill 7",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "call-center agent. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ti account ko. Mabalin nga i-hold ti P150 para kaniak agingga ti isasangpet ko?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-008",
    "title": "romance drill 8",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "trap",
    "category": "romance",
    "setup": "call-center agent. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Kasapulan ti crypto investment ko iti P100,000 pay tapos ma-withdraw, kalpasanna bayadan ka.",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-medium-009",
    "title": "romance drill 9",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "OFW iti Riyadh. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ak para kadatayo, ngem kasapulan ko iti P45,000 pay tapos ma-withdraw ken umay kenka.",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-010",
    "title": "romance drill 10",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "call-center agent. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ti account ko. Mabalin nga i-hold ti P2,000 para kaniak agingga ti isasangpet ko?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-011",
    "title": "romance drill 11",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "trap",
    "category": "romance",
    "setup": "bassit nga online seller. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Ay-ayaten ka ngem na-stuck ak iti customs ken kasapulan ko ti P1,500 tapos makakita ka. Mabalin nga ipatulod?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-medium-012",
    "title": "romance drill 12",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "tagikuada ti sari-sari store. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ak para kadatayo, ngem kasapulan ko iti P500 pay tapos ma-withdraw ken umay kenka.",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-013",
    "title": "romance drill 13",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "trap",
    "category": "romance",
    "setup": "senior pensioner. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ti account ko. Mabalin nga i-hold ti P1,000,000 para kaniak agingga ti isasangpet ko?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-014",
    "title": "romance drill 14",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "trap",
    "category": "romance",
    "setup": "estudyante iti Manila. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Adda problemak iti airport. Kasapulan da iti P1,000,000 tapos ma-release ti visa ko. Ipatulod itan.",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-medium-015",
    "title": "romance drill 15",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "bassit nga online seller. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ti account ko. Mabalin nga i-hold ti P45,000 para kaniak agingga ti isasangpet ko?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-016",
    "title": "romance drill 16",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "trap",
    "category": "romance",
    "setup": "estudyante iti Manila. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Adda problemak iti airport. Kasapulan da iti P1,000,000 tapos ma-release ti visa ko. Ipatulod itan.",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-017",
    "title": "romance drill 17",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "trap",
    "category": "romance",
    "setup": "estudyante iti Manila. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Kasapulan ti crypto investment ko iti P150 pay tapos ma-withdraw, kalpasanna bayadan ka.",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-medium-018",
    "title": "romance drill 18",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "tagikuada ti sari-sari store. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Kasapulan ti crypto investment ko iti P25,000 pay tapos ma-withdraw, kalpasanna bayadan ka.",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-019",
    "title": "romance drill 19",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "call-center agent. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Ay-ayaten ka ngem na-stuck ak iti customs ken kasapulan ko ti P100,000 tapos makakita ka. Mabalin nga ipatulod?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-020",
    "title": "romance drill 20",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "driver ti jeepney. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ti account ko. Mabalin nga i-hold ti P100,000 para kaniak agingga ti isasangpet ko?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-medium-021",
    "title": "romance drill 21",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "romance",
    "archetype": "trap",
    "category": "romance",
    "setup": "Lola iti probinsya. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ti account ko. Mabalin nga i-hold ti P1,000,000 para kaniak agingga ti isasangpet ko?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-022",
    "title": "romance drill 22",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "OFW iti Riyadh. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Kasapulan ti crypto investment ko iti P12,000 pay tapos ma-withdraw, kalpasanna bayadan ka.",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-hard-023",
    "title": "romance drill 23",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "romance",
    "archetype": "redirect",
    "category": "romance",
    "setup": "tagikuada ti sari-sari store. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ti account ko. Mabalin nga i-hold ti P12,000 para kaniak agingga ti isasangpet ko?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta tapos saan da nga ma-stuck.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "romance-medium-024",
    "title": "romance drill 24",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "romance",
    "archetype": "trap",
    "category": "romance",
    "setup": "senior pensioner. Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ti account ko. Mabalin nga i-hold ti P8,000 para kaniak agingga ti isasangpet ko?",
        "question": "Adda tao a nakilam iti online nga mangkasapulan iti kuarta itan. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan. Saan ko pay nakita daytoy a tao a personal.",
            "correct": true,
            "feedback": "Usto. Ti romance scammer mangbangon iti talek tapos agdawdawat iti kuarta. Saan nga agipatulod iti kuarta iti saan mo pay nakita."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof, kalpasanna ipatulod.",
            "correct": false,
            "feedback": "Naimbag ti panangted iti proof, ngem ti laeng natalged a sungbat ket saan nga agipatulod iti kuarta iti estranghero."
          }
        ],
        "tip": "Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga agipatulod ti kuarta iti tao a saan mo pay nakita a personal.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-medium-000",
    "title": "vishing drill 0",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "Lola iti probinsya. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC agent ditoy. Tapos ma-reverse ti fraudulent transfer, kasapulan ko ti OTP mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-001",
    "title": "vishing drill 1",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "estudyante iti Manila. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC agent ditoy. Tapos ma-reverse ti fraudulent transfer, kasapulan ko ti OTP mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-002",
    "title": "vishing drill 2",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "redirect",
    "category": "vishing",
    "setup": "call-center agent. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Daytoy ti CICC tech support. Na-hack ti line mo. Ited ti code iti phone mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-medium-003",
    "title": "vishing drill 3",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "OFW iti Riyadh. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC agent ditoy. Tapos ma-reverse ti fraudulent transfer, kasapulan ko ti OTP mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-004",
    "title": "vishing drill 4",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "call-center agent. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "Daytoy ti BPI tech support. Na-hack ti line mo. Ited ti code iti phone mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-005",
    "title": "vishing drill 5",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "bassit nga online seller. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "Daytoy ti BDO Alerts tech support. Na-hack ti line mo. Ited ti code iti phone mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-medium-006",
    "title": "vishing drill 6",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "OFW iti Riyadh. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Agtawtawag ak manipud iti Globe. Adda tao a nag-try nga ag-access iti account mo. I-confirm ti details mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-007",
    "title": "vishing drill 7",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "bassit nga online seller. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "Agtawtawag ak manipud iti BPI. Adda tao a nag-try nga ag-access iti account mo. I-confirm ti details mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-008",
    "title": "vishing drill 8",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "redirect",
    "category": "vishing",
    "setup": "OFW iti Riyadh. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe agent ditoy. Tapos ma-reverse ti fraudulent transfer, kasapulan ko ti OTP mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-medium-009",
    "title": "vishing drill 9",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "estudyante iti Manila. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "Daytoy ti BDO Alerts fraud department. Nagusar ti card mo para iti P100,000. Ibaga ti card number ken ti code iti likud.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-010",
    "title": "vishing drill 10",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "senior pensioner. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Agtawtawag ak manipud iti Globe. Adda tao a nag-try nga ag-access iti account mo. I-confirm ti details mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-011",
    "title": "vishing drill 11",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "redirect",
    "category": "vishing",
    "setup": "tagikuada ti sari-sari store. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Daytoy ti CICC tech support. Na-hack ti line mo. Ited ti code iti phone mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-medium-012",
    "title": "vishing drill 12",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "vishing",
    "archetype": "redirect",
    "category": "vishing",
    "setup": "bassit nga online seller. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "Daytoy ti BDO Alerts fraud department. Nagusar ti card mo para iti P8,000. Ibaga ti card number ken ti code iti likud.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-013",
    "title": "vishing drill 13",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "redirect",
    "category": "vishing",
    "setup": "Lola iti probinsya. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Smart",
        "message": "Daytoy ti Smart tech support. Na-hack ti line mo. Ited ti code iti phone mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-014",
    "title": "vishing drill 14",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "Lola iti probinsya. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Kasapulan tayo nga i-secure ti account mo ITAN. Agipatulod ak iti code. Pangngaasi nga basuen iti likud.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-medium-015",
    "title": "vishing drill 15",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "vishing",
    "archetype": "redirect",
    "category": "vishing",
    "setup": "driver ti jeepney. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Daytoy ti CICC tech support. Na-hack ti line mo. Ited ti code iti phone mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-016",
    "title": "vishing drill 16",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "redirect",
    "category": "vishing",
    "setup": "Lola iti probinsya. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts agent ditoy. Tapos ma-reverse ti fraudulent transfer, kasapulan ko ti OTP mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-017",
    "title": "vishing drill 17",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "bassit nga online seller. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Smart",
        "message": "Daytoy ti Smart fraud department. Nagusar ti card mo para iti P1,500. Ibaga ti card number ken ti code iti likud.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-medium-018",
    "title": "vishing drill 18",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "vishing",
    "archetype": "redirect",
    "category": "vishing",
    "setup": "tagikuada ti sari-sari store. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Agtawtawag ak manipud iti CICC. Adda tao a nag-try nga ag-access iti account mo. I-confirm ti details mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-019",
    "title": "vishing drill 19",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "estudyante iti Manila. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Smart",
        "message": "Daytoy ti Smart fraud department. Nagusar ti card mo para iti P1,000,000. Ibaga ti card number ken ti code iti likud.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-020",
    "title": "vishing drill 20",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "redirect",
    "category": "vishing",
    "setup": "estudyante iti Manila. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "Agtawtawag ak manipud iti BPI. Adda tao a nag-try nga ag-access iti account mo. I-confirm ti details mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-medium-021",
    "title": "vishing drill 21",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "vishing",
    "archetype": "redirect",
    "category": "vishing",
    "setup": "estudyante iti Manila. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe agent ditoy. Tapos ma-reverse ti fraudulent transfer, kasapulan ko ti OTP mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-022",
    "title": "vishing drill 22",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "bassit nga online seller. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe agent ditoy. Tapos ma-reverse ti fraudulent transfer, kasapulan ko ti OTP mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Basaen ti card number ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-hard-023",
    "title": "vishing drill 23",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "OFW iti Riyadh. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "Kasapulan tayo nga i-secure ti account mo ITAN. Agipatulod ak iti code. Pangngaasi nga basuen iti likud.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen iti likud ti code nga impatulod da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "vishing-medium-024",
    "title": "vishing drill 24",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "vishing",
    "archetype": "trap",
    "category": "vishing",
    "setup": "tagikuada ti sari-sari store. Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "Daytoy ti BPI tech support. Na-hack ti line mo. Ited ti code iti phone mo.",
        "question": "Ipakita ti caller ID ti pudno a bangko mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Ibabain ti tawag, kalpasanna awagan ti numero iti likud ti card ko.",
            "correct": true,
            "feedback": "Usto. Mabalin a peke ti caller ID. Ibabain ti tawag ken awagan ti pudno a numero."
          },
          {
            "id": "b",
            "text": "Mangted nga umuna iti proof no siak da.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          },
          {
            "id": "c",
            "text": "Basaen ti card number ko tapos mapasardeng ti fraud.",
            "correct": false,
            "feedback": "Saan nga agbasa iti code wenno card details iti tao a nagtawag kenka, uray kasano ka-opisial ti langada."
          }
        ],
        "tip": "Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Mabalin a peke ti Caller ID. Ibabain ti tawag ken awagan ti opisial a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-easy-000",
    "title": "quishing drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "call-center agent. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-verify ti parking exit mo babaen ti panag-scan daytoy a code.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ken agbayad. P2,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-medium-001",
    "title": "quishing drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "driver ti jeepney. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-verify ti parking exit mo babaen ti panag-scan daytoy a code.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ken agbayad. P8,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-hard-002",
    "title": "quishing drill 2",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "Lola iti probinsya. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan tapos bayadan ti P45,000 parking fee. Instant ken secure ti payment.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ken agbayad. P45,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-easy-003",
    "title": "quishing drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "OFW iti Riyadh. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-verify ti parking exit mo babaen ti panag-scan daytoy a code.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ken agbayad. P12,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-medium-004",
    "title": "quishing drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "OFW iti Riyadh. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan tapos bayadan ti P100,000 parking fee. Instant ken secure ti payment.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ken agbayad. P100,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-hard-005",
    "title": "quishing drill 5",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "bassit nga online seller. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-scan tapos bayadan ti P8,000 parking fee. Instant ken secure ti payment.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ken agbayad. P8,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-easy-006",
    "title": "quishing drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "Lola iti probinsya. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-scan tapos bayadan ti P5,000 parking fee. Instant ken secure ti payment.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ken agbayad. P5,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-medium-007",
    "title": "quishing drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "senior pensioner. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan tapos bayadan ti electric bill mo. Official partner. P100,000 ti bayad.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ken agbayad. P100,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-hard-008",
    "title": "quishing drill 8",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "call-center agent. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] Bayadan ditoy ti food delivery mo. Paspas ken secure.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ken agbayad. P250 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-easy-009",
    "title": "quishing drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "call-center agent. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan tapos bayadan ti electric bill mo. Official partner. P1,000,000 ti bayad.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ken agbayad. P1,000,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-medium-010",
    "title": "quishing drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "call-center agent. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-verify ti parking exit mo babaen ti panag-scan daytoy a code.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ken agbayad. P100,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-hard-011",
    "title": "quishing drill 11",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "estudyante iti Manila. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] Bayadan ditoy ti food delivery mo. Paspas ken secure.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ken agbayad. P25,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-easy-012",
    "title": "quishing drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "bassit nga online seller. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-verify ti parking exit mo babaen ti panag-scan daytoy a code.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ken agbayad. P45,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-medium-013",
    "title": "quishing drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "estudyante iti Manila. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] Bayadan ditoy ti food delivery mo. Paspas ken secure.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ken agbayad. P5,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-hard-014",
    "title": "quishing drill 14",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "call-center agent. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan tapos bayadan ti electric bill mo. Official partner. P1,000,000 ti bayad.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ken agbayad. P1,000,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-easy-015",
    "title": "quishing drill 15",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "bassit nga online seller. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan tapos bayadan ti P5,000 parking fee. Instant ken secure ti payment.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ken agbayad. P5,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-medium-016",
    "title": "quishing drill 16",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "driver ti jeepney. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-scan tapos bayadan ti P1,500 parking fee. Instant ken secure ti payment.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ken agbayad. P1,500 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-hard-017",
    "title": "quishing drill 17",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "senior pensioner. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-verify ti parking exit mo babaen ti panag-scan daytoy a code.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ken agbayad. P25,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-easy-018",
    "title": "quishing drill 18",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "tagikuada ti sari-sari store. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-scan tapos bayadan ti P2,000 parking fee. Instant ken secure ti payment.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ken agbayad. P2,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "quishing-medium-019",
    "title": "quishing drill 19",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "quishing",
    "archetype": "trap",
    "category": "quishing",
    "setup": "call-center agent. Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan tapos bayadan ti electric bill mo. Official partner. P45,000 ti bayad.",
        "question": "Adda QR code a mangitangtango nga agbayad iti parking. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Biruken ti opisial nga parking sign wenno agbayad iti machine.",
            "correct": true,
            "feedback": "Usto. Kanayon nga usaren ti opisial a pamay-an ti panagbayad, saan ti sticker a kalit a nagparang."
          },
          {
            "id": "b",
            "text": "I-scan ken agbayad. P45,000 laeng dayta.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          },
          {
            "id": "c",
            "text": "I-scan ngem i-check ti page sakbay nga agbayad.",
            "correct": false,
            "feedback": "Mabalin nga itudtudo ti QR nga dayta iti peke a payment page a mangtakaw iti card mo."
          }
        ],
        "tip": "Na-suspetsa ti QR code a saan mo kiniddaw."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Na-suspetsa ti QR code a saan mo kiniddaw.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-easy-000",
    "title": "remittance drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "remittance",
    "archetype": "redirect",
    "category": "remittance",
    "setup": "call-center agent. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "WesternUnion",
        "message": "Aguray ti remittance mo nga P1,500, ngem masapul nga agbayad ka iti P1,500 release fee nga umuna iti jnt-tracking-ph.site.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Mangted iti tulong ti gayyem nga agbayad.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-001",
    "title": "remittance drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "trap",
    "category": "remittance",
    "setup": "call-center agent. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Remitly",
        "message": "Palawan: I-claim ti kuarta mo. I-confirm iti bdo-secure-login-verify.top tapos ma-release ti P45,000.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Mangted iti tulong ti gayyem nga agbayad.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-002",
    "title": "remittance drill 2",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "redirect",
    "category": "remittance",
    "setup": "call-center agent. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "WesternUnion",
        "message": "Aguray ti remittance mo nga P12,000, ngem masapul nga agbayad ka iti P12,000 release fee nga umuna iti bdo-secure-login-verify.top.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-easy-003",
    "title": "remittance drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "remittance",
    "archetype": "trap",
    "category": "remittance",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Remitly",
        "message": "Palawan: I-claim ti kuarta mo. I-confirm iti smart-rewar-ds.top tapos ma-release ti P1,500.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Mangted iti tulong ti gayyem nga agbayad.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-004",
    "title": "remittance drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "redirect",
    "category": "remittance",
    "setup": "driver ti jeepney. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "WesternUnion",
        "message": "Aguray ti remittance mo nga P5,000, ngem masapul nga agbayad ka iti P5,000 release fee nga umuna iti gov-ph-tax.site.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-005",
    "title": "remittance drill 5",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "redirect",
    "category": "remittance",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "WesternUnion",
        "message": "Aguray ti remittance mo nga P45,000, ngem masapul nga agbayad ka iti P45,000 release fee nga umuna iti shopee-refund-ph.site.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Mangted iti tulong ti gayyem nga agbayad.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-easy-006",
    "title": "remittance drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "remittance",
    "archetype": "trap",
    "category": "remittance",
    "setup": "call-center agent. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Palawan",
        "message": "Aguray ti remittance mo nga P2,000, ngem masapul nga agbayad ka iti P2,000 release fee nga umuna iti jnt-tracking-ph.site.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Mangted iti tulong ti gayyem nga agbayad.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-007",
    "title": "remittance drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "redirect",
    "category": "remittance",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Palawan",
        "message": "Aguray ti remittance mo nga P100,000, ngem masapul nga agbayad ka iti P100,000 release fee nga umuna iti g-cash-verify-ph.top.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Mangted iti tulong ti gayyem nga agbayad.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-008",
    "title": "remittance drill 8",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "trap",
    "category": "remittance",
    "setup": "call-center agent. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "WesternUnion",
        "message": "Aguray ti remittance mo nga P25,000, ngem masapul nga agbayad ka iti P25,000 release fee nga umuna iti g-cash-verify-ph.top.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-easy-009",
    "title": "remittance drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "remittance",
    "archetype": "redirect",
    "category": "remittance",
    "setup": "tagikuada ti sari-sari store. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Remitly",
        "message": "Naka-hold ti remittance mo nga P1,500. Bayadan ti release fee iti pagibig-loan-release.site tapos maawat daytoy.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-010",
    "title": "remittance drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "trap",
    "category": "remittance",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Palawan",
        "message": "Aguray ti remittance mo nga P150, ngem masapul nga agbayad ka iti P150 release fee nga umuna iti gov-ph-tax.site.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-011",
    "title": "remittance drill 11",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "redirect",
    "category": "remittance",
    "setup": "call-center agent. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "WesternUnion",
        "message": "Aguray ti remittance mo nga P2,000, ngem masapul nga agbayad ka iti P2,000 release fee nga umuna iti smart-rewar-ds.top.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Mangted iti tulong ti gayyem nga agbayad.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-easy-012",
    "title": "remittance drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "remittance",
    "archetype": "trap",
    "category": "remittance",
    "setup": "senior pensioner. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Palawan",
        "message": "Palawan: I-claim ti kuarta mo. I-confirm iti maya-security-alert.xyz tapos ma-release ti P250.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Mangted iti tulong ti gayyem nga agbayad.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-013",
    "title": "remittance drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "redirect",
    "category": "remittance",
    "setup": "driver ti jeepney. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "WesternUnion",
        "message": "Aguray ti remittance mo nga P5,000, ngem masapul nga agbayad ka iti P5,000 release fee nga umuna iti gcash-update.ph-verify.top.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Mangted iti tulong ti gayyem nga agbayad.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-014",
    "title": "remittance drill 14",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "redirect",
    "category": "remittance",
    "setup": "call-center agent. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Palawan",
        "message": "Palawan: I-claim ti kuarta mo. I-confirm iti bit.ly/verify-now tapos ma-release ti P8,000.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Mangted iti tulong ti gayyem nga agbayad.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-easy-015",
    "title": "remittance drill 15",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "remittance",
    "archetype": "redirect",
    "category": "remittance",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Palawan",
        "message": "Aguray ti remittance mo nga P45,000, ngem masapul nga agbayad ka iti P45,000 release fee nga umuna iti bit.ly/verify-now.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Mangted iti tulong ti gayyem nga agbayad.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-016",
    "title": "remittance drill 16",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "trap",
    "category": "remittance",
    "setup": "tagikuada ti sari-sari store. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Remitly",
        "message": "Aguray ti remittance mo nga P25,000, ngem masapul nga agbayad ka iti P25,000 release fee nga umuna iti maya-security-alert.xyz.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-017",
    "title": "remittance drill 17",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "trap",
    "category": "remittance",
    "setup": "Lola iti probinsya. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Palawan",
        "message": "Naka-hold ti remittance mo nga P500. Bayadan ti release fee iti gcash-update.ph-verify.top tapos maawat daytoy.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-easy-018",
    "title": "remittance drill 18",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "remittance",
    "archetype": "trap",
    "category": "remittance",
    "setup": "driver ti jeepney. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Palawan",
        "message": "Palawan: I-claim ti kuarta mo. I-confirm iti bit.ly/verify-now tapos ma-release ti P150.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Bayadan ti release fee tapos maala ko ti kuarta.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "remittance-medium-019",
    "title": "remittance drill 19",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "remittance",
    "archetype": "redirect",
    "category": "remittance",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Remitly",
        "message": "Palawan: I-claim ti kuarta mo. I-confirm iti pagibig-loan-release.site tapos ma-release ti P8,000.",
        "question": "Adda mensahe nga agsasao a kasapulan iti fee ti remittance mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check ti remittance app ko wenno ti opisial a branch mismo.",
            "correct": true,
            "feedback": "Usto. Umay a mismo ti pudno a transfer; awan ti kasapulan nga agbayad tapos makaawat ti kuarta."
          },
          {
            "id": "b",
            "text": "Mangted iti tulong ti gayyem nga agbayad.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Ti panagbayad tapos makaawat ti kuarta ket ti advance-fee trick: agbayad ka, saan nga umay ti kuarta."
          }
        ],
        "tip": "Saan ka nga agbayad iti fee tapos makaawat ti remittance."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka nga agbayad iti fee tapos makaawat ti remittance.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-easy-000",
    "title": "fake-reward drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "fake-reward",
    "archetype": "redirect",
    "category": "fake-reward",
    "setup": "OFW iti Riyadh. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "Congratulations! Nag-abak ka iti P25,000! I-claim iti gcash-update.ph-verify.top sakbay a ma-expire.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-001",
    "title": "fake-reward drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "redirect",
    "category": "fake-reward",
    "setup": "estudyante iti Manila. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PCSO",
        "message": "Nag-abak ti GCash raffle ticket mo! Agbayad ti bassit a fee iti smart-rewar-ds.top tapos maawat ti P100,000.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-002",
    "title": "fake-reward drill 2",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "trap",
    "category": "fake-reward",
    "setup": "Lola iti probinsya. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "MallVoucher",
        "message": "Maudi nga aldaw tapos i-claim ti premyo mo nga P250! Bisitaen ti g-cash-verify-ph.top.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-click a dagus ti link sakbay a ma-expire ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-easy-003",
    "title": "fake-reward drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "fake-reward",
    "archetype": "redirect",
    "category": "fake-reward",
    "setup": "Lola iti probinsya. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PCSO",
        "message": "Nag-abak ti GCash raffle ticket mo! Agbayad ti bassit a fee iti jnt-tracking-ph.site tapos maawat ti P45,000.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-click a dagus ti link sakbay a ma-expire ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-004",
    "title": "fake-reward drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "trap",
    "category": "fake-reward",
    "setup": "Lola iti probinsya. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "MallVoucher",
        "message": "Nag-abak ti GCash raffle ticket mo! Agbayad ti bassit a fee iti maya-security-alert.xyz tapos maawat ti P8,000.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-005",
    "title": "fake-reward drill 5",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "redirect",
    "category": "fake-reward",
    "setup": "estudyante iti Manila. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "Nag-abak ti GCash raffle ticket mo! Agbayad ti bassit a fee iti maya-security-alert.xyz tapos maawat ti P45,000.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-click a dagus ti link sakbay a ma-expire ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-easy-006",
    "title": "fake-reward drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "fake-reward",
    "archetype": "trap",
    "category": "fake-reward",
    "setup": "bassit nga online seller. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PCSO",
        "message": "Congratulations! Nag-abak ka iti P12,000! I-claim iti pagibig-loan-release.site sakbay a ma-expire.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-007",
    "title": "fake-reward drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "trap",
    "category": "fake-reward",
    "setup": "senior pensioner. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "Maudi nga aldaw tapos i-claim ti premyo mo nga P500! Bisitaen ti jnt-tracking-ph.site.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-008",
    "title": "fake-reward drill 8",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "redirect",
    "category": "fake-reward",
    "setup": "call-center agent. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "Maudi nga aldaw tapos i-claim ti premyo mo nga P2,000! Bisitaen ti gov-ph-tax.site.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-easy-009",
    "title": "fake-reward drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "fake-reward",
    "archetype": "trap",
    "category": "fake-reward",
    "setup": "bassit nga online seller. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PCSO",
        "message": "Maudi nga aldaw tapos i-claim ti premyo mo nga P1,000,000! Bisitaen ti bdo-secure-login-verify.top.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-click a dagus ti link sakbay a ma-expire ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-010",
    "title": "fake-reward drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "trap",
    "category": "fake-reward",
    "setup": "bassit nga online seller. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "MallVoucher",
        "message": "Congratulations! Nag-abak ka iti P500! I-claim iti bit.ly/verify-now sakbay a ma-expire.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-011",
    "title": "fake-reward drill 11",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "trap",
    "category": "fake-reward",
    "setup": "call-center agent. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "MallVoucher",
        "message": "Nag-abak ti GCash raffle ticket mo! Agbayad ti bassit a fee iti smart-rewar-ds.top tapos maawat ti P1,000,000.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-click a dagus ti link sakbay a ma-expire ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-easy-012",
    "title": "fake-reward drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "fake-reward",
    "archetype": "trap",
    "category": "fake-reward",
    "setup": "senior pensioner. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PCSO",
        "message": "Nag-abak ti GCash raffle ticket mo! Agbayad ti bassit a fee iti maya-security-alert.xyz tapos maawat ti P25,000.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-click a dagus ti link sakbay a ma-expire ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-013",
    "title": "fake-reward drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "redirect",
    "category": "fake-reward",
    "setup": "estudyante iti Manila. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "MallVoucher",
        "message": "Nag-abak ti GCash raffle ticket mo! Agbayad ti bassit a fee iti shopee-refund-ph.site tapos maawat ti P25,000.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-click a dagus ti link sakbay a ma-expire ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-014",
    "title": "fake-reward drill 14",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "redirect",
    "category": "fake-reward",
    "setup": "call-center agent. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PCSO",
        "message": "Nag-abak ka iti P8,000 iti anniversary draw mi! I-claim iti g-cash-verify-ph.top itan.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-click a dagus ti link sakbay a ma-expire ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-easy-015",
    "title": "fake-reward drill 15",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "fake-reward",
    "archetype": "redirect",
    "category": "fake-reward",
    "setup": "estudyante iti Manila. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "PCSO",
        "message": "Nag-abak ti GCash raffle ticket mo! Agbayad ti bassit a fee iti gov-ph-tax.site tapos maawat ti P8,000.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-016",
    "title": "fake-reward drill 16",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "trap",
    "category": "fake-reward",
    "setup": "tagikuada ti sari-sari store. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PCSO",
        "message": "Nag-abak ti GCash raffle ticket mo! Agbayad ti bassit a fee iti bdo-secure-login-verify.top tapos maawat ti P250.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-click a dagus ti link sakbay a ma-expire ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-017",
    "title": "fake-reward drill 17",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "trap",
    "category": "fake-reward",
    "setup": "call-center agent. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "MallVoucher",
        "message": "Nag-abak ka iti P12,000 iti anniversary draw mi! I-claim iti shopee-refund-ph.site itan.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-easy-018",
    "title": "fake-reward drill 18",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "fake-reward",
    "archetype": "trap",
    "category": "fake-reward",
    "setup": "estudyante iti Manila. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "MallVoucher",
        "message": "Congratulations! Nag-abak ka iti P8,000! I-claim iti gcash-update.ph-verify.top sakbay a ma-expire.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward iti gayyem tapos makapag-abak da met.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "fake-reward-medium-019",
    "title": "fake-reward drill 19",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "fake-reward",
    "archetype": "trap",
    "category": "fake-reward",
    "setup": "Lola iti probinsya. Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "Maudi nga aldaw tapos i-claim ti premyo mo nga P250! Bisitaen ti smart-rewar-ds.top.",
        "question": "Nag-abak ka iti raffle a saan mo a sinrek. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore daytoy. Saan ka a simrek, isu a peke daytoy.",
            "correct": true,
            "feedback": "Usto. No saan ka a simrek, saan ka a makapag-abak. Daytoy ti klasiko a fake-reward scam."
          },
          {
            "id": "b",
            "text": "Agipatulod ti bassit a fee tapos i-claim ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          },
          {
            "id": "c",
            "text": "I-click a dagus ti link sakbay a ma-expire ti premyo.",
            "correct": false,
            "feedback": "Saan nga agbayad ti mannag-abak tapos i-claim ti premyo. Saan ka a makapag-abak iti raffle a saan mo a sinrek."
          }
        ],
        "tip": "Saan ka a makapag-abak iti raffle a saan mo a sinrek."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan ka a makapag-abak iti raffle a saan mo a sinrek.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-easy-000",
    "title": "family-emergency drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "bassit nga online seller. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Relative",
        "message": "Siak daytoy, ti anak mo. Adda ak iti ospital. Kasapulan ti ospital iti P500. Pangngaasi ipatulod iti numero nga daytoy.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-medium-001",
    "title": "family-emergency drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "estudyante iti Manila. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Lola, adda problemak iti polis. Kasapulan ko iti P12,000 para iti piyansa. Saan nga ibaga iti siasinoman.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta. Anak ko dayta.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-hard-002",
    "title": "family-emergency drill 2",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "driver ti jeepney. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Mom/Dad, siak daytoy. Naburak ti phone ko. Ipatulod ti P8,000 iti GCash nga daytoy. Pangngaasi saan nga agtawag, naburak ti phone ko.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta. Anak ko dayta.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-easy-003",
    "title": "family-emergency drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "call-center agent. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Relative",
        "message": "Mom/Dad, siak daytoy. Naburak ti phone ko. Ipatulod ti P250 iti GCash nga daytoy. Pangngaasi saan nga agtawag, naburak ti phone ko.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta. Anak ko dayta.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-medium-004",
    "title": "family-emergency drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "senior pensioner. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Child",
        "message": "Siak daytoy, ti anak mo. Adda ak iti ospital. Kasapulan ti ospital iti P1,500. Pangngaasi ipatulod iti numero nga daytoy.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta. Anak ko dayta.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-hard-005",
    "title": "family-emergency drill 5",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "driver ti jeepney. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Relative",
        "message": "Siak daytoy, ti anak mo. Adda ak iti ospital. Kasapulan ti ospital iti P2,000. Pangngaasi ipatulod iti numero nga daytoy.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-easy-006",
    "title": "family-emergency drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "senior pensioner. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Child",
        "message": "Lola, adda problemak iti polis. Kasapulan ko iti P100,000 para iti piyansa. Saan nga ibaga iti siasinoman.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta. Anak ko dayta.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-medium-007",
    "title": "family-emergency drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "call-center agent. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Child",
        "message": "Lola, adda problemak iti polis. Kasapulan ko iti P2,000 para iti piyansa. Saan nga ibaga iti siasinoman.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta. Anak ko dayta.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-hard-008",
    "title": "family-emergency drill 8",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "OFW iti Riyadh. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Siak daytoy, ti anak mo. Adda ak iti ospital. Kasapulan ti ospital iti P1,000,000. Pangngaasi ipatulod iti numero nga daytoy.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta. Anak ko dayta.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-easy-009",
    "title": "family-emergency drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "senior pensioner. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Relative",
        "message": "Mom/Dad, siak daytoy. Naburak ti phone ko. Ipatulod ti P5,000 iti GCash nga daytoy. Pangngaasi saan nga agtawag, naburak ti phone ko.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-medium-010",
    "title": "family-emergency drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "bassit nga online seller. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Child",
        "message": "Siak daytoy, ti anak mo. Adda ak iti ospital. Kasapulan ti ospital iti P8,000. Pangngaasi ipatulod iti numero nga daytoy.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-hard-011",
    "title": "family-emergency drill 11",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "Lola iti probinsya. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Child",
        "message": "Mom, napukaw ti wallet ko iti ruar. Pangngaasi ipatulod ti P500 iti account nga daytoy.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta. Anak ko dayta.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-easy-012",
    "title": "family-emergency drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "estudyante iti Manila. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Relative",
        "message": "Lola, adda problemak iti polis. Kasapulan ko iti P5,000 para iti piyansa. Saan nga ibaga iti siasinoman.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kuarta. Anak ko dayta.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-medium-013",
    "title": "family-emergency drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "Lola iti probinsya. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Relative",
        "message": "Mom, napukaw ti wallet ko iti ruar. Pangngaasi ipatulod ti P1,500 iti account nga daytoy.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-hard-014",
    "title": "family-emergency drill 14",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "OFW iti Riyadh. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Child",
        "message": "Lola, adda problemak iti polis. Kasapulan ko iti P25,000 para iti piyansa. Saan nga ibaga iti siasinoman.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kuarta. Anak ko dayta.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-easy-015",
    "title": "family-emergency drill 15",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "OFW iti Riyadh. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Relative",
        "message": "Mom, napukaw ti wallet ko iti ruar. Pangngaasi ipatulod ti P100,000 iti account nga daytoy.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kuarta. Anak ko dayta.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-medium-016",
    "title": "family-emergency drill 16",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "tagikuada ti sari-sari store. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Mom, napukaw ti wallet ko iti ruar. Pangngaasi ipatulod ti P500 iti account nga daytoy.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Ipatulod ti kuarta. Anak ko dayta.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "family-emergency-hard-017",
    "title": "family-emergency drill 17",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "family-emergency",
    "archetype": "trap",
    "category": "family-emergency",
    "setup": "bassit nga online seller. Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Siak daytoy, ti anak mo. Adda ak iti ospital. Kasapulan ti ospital iti P45,000. Pangngaasi ipatulod iti numero nga daytoy.",
        "question": "Kasla eksakto ti timek ti anak mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti PUDNO a naka-save a numero ti anak ko sakbay nga agipatulod iti aniaman.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka sakbay nga nagtignay. Saan nga agtalek iti di-amammo a 'baro a numero'."
          },
          {
            "id": "b",
            "text": "Ipatulod ti kagudua itan.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          },
          {
            "id": "c",
            "text": "Mangted iti saludsod nga anak ko laeng ti makaammo.",
            "correct": false,
            "feedback": "Ti 'saan nga agtawag' a kiddaw ti red flag; usaren dayta ti scammer tapos mapasardeng ka nga ag-verify."
          }
        ],
        "tip": "Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Usaren ti scammer dagiti nagan ti pamilya tapos mapabuteng ka. Awagan ti pudno a naka-save a numero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-easy-000",
    "title": "customs drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "customs",
    "archetype": "redirect",
    "category": "customs",
    "setup": "estudyante iti Manila. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PHILPOST",
        "message": "PHILPOST: Nakakita ti customs iti undeclared items. I-clear iti gcash-update.ph-verify.top para iti P8,000.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti PHILPOST tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-medium-001",
    "title": "customs drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "customs",
    "archetype": "redirect",
    "category": "customs",
    "setup": "senior pensioner. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC Customs: Naka-pending iti inspection ti international parcel mo. Bayadan ti P500 inspection fee iti gcash-update.ph-verify.top.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti LBC tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-medium-002",
    "title": "customs drill 2",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "customs",
    "archetype": "redirect",
    "category": "customs",
    "setup": "bassit nga online seller. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Nakakita ti customs iti undeclared items. I-clear iti bit.ly/verify-now para iti P5,000.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti LBC tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-easy-003",
    "title": "customs drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "customs",
    "archetype": "trap",
    "category": "customs",
    "setup": "OFW iti Riyadh. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold iti customs ti package mo. Bayadan ti P45,000 clearance fee iti smart-rewar-ds.top tapos ma-release.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti LBC tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-medium-004",
    "title": "customs drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "customs",
    "archetype": "trap",
    "category": "customs",
    "setup": "tagikuada ti sari-sari store. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PHILPOST",
        "message": "PHILPOST: Naka-hold iti customs ti package mo. Bayadan ti P12,000 clearance fee iti pagibig-loan-release.site tapos ma-release.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti PHILPOST tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-medium-005",
    "title": "customs drill 5",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "customs",
    "archetype": "redirect",
    "category": "customs",
    "setup": "tagikuada ti sari-sari store. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LBC",
        "message": "LBC: Nakakita ti customs iti undeclared items. I-clear iti pagibig-loan-release.site para iti P100,000.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti LBC tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-easy-006",
    "title": "customs drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "customs",
    "archetype": "trap",
    "category": "customs",
    "setup": "estudyante iti Manila. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Nakakita ti customs iti undeclared items. I-clear iti jnt-tracking-ph.site para iti P150.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti LBC tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-medium-007",
    "title": "customs drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "customs",
    "archetype": "redirect",
    "category": "customs",
    "setup": "bassit nga online seller. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold iti customs ti package mo. Bayadan ti P500 clearance fee iti shopee-refund-ph.site tapos ma-release.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti LBC tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-medium-008",
    "title": "customs drill 8",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "customs",
    "archetype": "redirect",
    "category": "customs",
    "setup": "Lola iti probinsya. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PHILPOST",
        "message": "PHILPOST: Nakakita ti customs iti undeclared items. I-clear iti g-cash-verify-ph.top para iti P100,000.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti PHILPOST tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-easy-009",
    "title": "customs drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "customs",
    "archetype": "trap",
    "category": "customs",
    "setup": "driver ti jeepney. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LBC",
        "message": "LBC Customs: Naka-pending iti inspection ti international parcel mo. Bayadan ti P250 inspection fee iti shopee-refund-ph.site.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti LBC tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-medium-010",
    "title": "customs drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "customs",
    "archetype": "trap",
    "category": "customs",
    "setup": "OFW iti Riyadh. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Nakakita ti customs iti undeclared items. I-clear iti bit.ly/verify-now para iti P100,000.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti LBC tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-medium-011",
    "title": "customs drill 11",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "customs",
    "archetype": "trap",
    "category": "customs",
    "setup": "Lola iti probinsya. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC Customs: Naka-pending iti inspection ti international parcel mo. Bayadan ti P100,000 inspection fee iti gov-ph-tax.site.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti LBC tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-easy-012",
    "title": "customs drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "customs",
    "archetype": "trap",
    "category": "customs",
    "setup": "Lola iti probinsya. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold iti customs ti package mo. Bayadan ti P25,000 clearance fee iti bdo-secure-login-verify.top tapos ma-release.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti LBC tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-medium-013",
    "title": "customs drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "customs",
    "archetype": "redirect",
    "category": "customs",
    "setup": "OFW iti Riyadh. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold iti customs ti package mo. Bayadan ti P150 clearance fee iti pagibig-loan-release.site tapos ma-release.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti LBC tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "customs-medium-014",
    "title": "customs drill 14",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "customs",
    "archetype": "trap",
    "category": "customs",
    "setup": "senior pensioner. Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PHILPOST",
        "message": "PHILPOST: Naka-hold iti customs ti package mo. Bayadan ti P150 clearance fee iti smart-rewar-ds.top tapos ma-release.",
        "question": "Adda customs a kayatna ti clearance fee. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Awagan ti opisial nga hotline ti PHILPOST tapos ma-check no pudno.",
            "correct": true,
            "feedback": "Usto. Nag-verify ka iti opisial nga channel. Peke ti text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayadan ti fee tapos ma-release ti customs ti package ko.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-confirm.",
            "correct": false,
            "feedback": "Saan nga mangarkensa iti fee ti customs iti text, ken no awan ti impatulod mo iti ruar, awan ti ma-clear."
          }
        ],
        "tip": "Saan nga mangarkensa iti fee ti customs iti text."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti fee ti customs iti text.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-easy-000",
    "title": "sim-pretext drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "sim-pretext",
    "archetype": "redirect",
    "category": "sim-pretext",
    "setup": "tagikuada ti sari-sari store. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: maikansela ti benefits mo Ag-re-register iti bdo-secure-login-verify.top wenno mapukaw ti SIM mo.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti Globe ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-medium-001",
    "title": "sim-pretext drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "sim-pretext",
    "archetype": "redirect",
    "category": "sim-pretext",
    "setup": "Lola iti probinsya. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe: Saan a fully registered ti SIM mo. Kompletoen iti jnt-tracking-ph.site wenno maputol ti line mo.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti Globe ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-medium-002",
    "title": "sim-pretext drill 2",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "sim-pretext",
    "archetype": "redirect",
    "category": "sim-pretext",
    "setup": "Lola iti probinsya. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe: Kasapulan ti baro a SIM rules nga mag-verify ka iti maya-security-alert.xyz iti 48 nga oras.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti Globe ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-easy-003",
    "title": "sim-pretext drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "sim-pretext",
    "archetype": "trap",
    "category": "sim-pretext",
    "setup": "driver ti jeepney. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: maisublin ti parcel mo Ag-re-register iti g-cash-verify-ph.top wenno mapukaw ti SIM mo.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti Globe ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-medium-004",
    "title": "sim-pretext drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "sim-pretext",
    "archetype": "trap",
    "category": "sim-pretext",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DITO",
        "message": "DITO: na-lock ti account mo Ag-re-register iti g-cash-verify-ph.top wenno mapukaw ti SIM mo.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti DITO ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-medium-005",
    "title": "sim-pretext drill 5",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "sim-pretext",
    "archetype": "redirect",
    "category": "sim-pretext",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Smart",
        "message": "Smart: Saan a fully registered ti SIM mo. Kompletoen iti bit.ly/verify-now wenno maputol ti line mo.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti Smart ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-easy-006",
    "title": "sim-pretext drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "sim-pretext",
    "archetype": "redirect",
    "category": "sim-pretext",
    "setup": "Lola iti probinsya. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Kasapulan ti baro a SIM rules nga mag-verify ka iti bit.ly/verify-now iti 48 nga oras.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti DITO ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-medium-007",
    "title": "sim-pretext drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "sim-pretext",
    "archetype": "redirect",
    "category": "sim-pretext",
    "setup": "tagikuada ti sari-sari store. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe: Kasapulan ti baro a SIM rules nga mag-verify ka iti bit.ly/verify-now iti 48 nga oras.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti Globe ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-medium-008",
    "title": "sim-pretext drill 8",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "sim-pretext",
    "archetype": "redirect",
    "category": "sim-pretext",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Kasapulan ti baro a SIM rules nga mag-verify ka iti pagibig-loan-release.site iti 48 nga oras.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti Globe ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-easy-009",
    "title": "sim-pretext drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "sim-pretext",
    "archetype": "trap",
    "category": "sim-pretext",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Kasapulan ti baro a SIM rules nga mag-verify ka iti shopee-refund-ph.site iti 48 nga oras.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti DITO ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-medium-010",
    "title": "sim-pretext drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "sim-pretext",
    "archetype": "redirect",
    "category": "sim-pretext",
    "setup": "OFW iti Riyadh. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "DITO",
        "message": "DITO: mapukaw ti kuarta mo iti 24 nga oras Ag-re-register iti shopee-refund-ph.site wenno mapukaw ti SIM mo.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti DITO ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-medium-011",
    "title": "sim-pretext drill 11",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "sim-pretext",
    "archetype": "trap",
    "category": "sim-pretext",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Saan a fully registered ti SIM mo. Kompletoen iti bit.ly/verify-now wenno maputol ti line mo.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti Smart ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-easy-012",
    "title": "sim-pretext drill 12",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "sim-pretext",
    "archetype": "redirect",
    "category": "sim-pretext",
    "setup": "senior pensioner. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Kasapulan ti baro a SIM rules nga mag-verify ka iti bit.ly/verify-now iti 48 nga oras.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti Globe ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-medium-013",
    "title": "sim-pretext drill 13",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "sim-pretext",
    "archetype": "redirect",
    "category": "sim-pretext",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Saan a fully registered ti SIM mo. Kompletoen iti shopee-refund-ph.site wenno maputol ti line mo.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti Smart ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "sim-pretext-medium-014",
    "title": "sim-pretext drill 14",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "sim-pretext",
    "archetype": "redirect",
    "category": "sim-pretext",
    "setup": "estudyante iti Manila. Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: Saan a fully registered ti SIM mo. Kompletoen iti bit.ly/verify-now wenno maputol ti line mo.",
        "question": "Adda mensahe nga agsasao nga ma-deactivate ti SIM mo. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Lukatan ti opisial nga website wenno app ti Globe ken i-check idiay.",
            "correct": true,
            "feedback": "Usto. Ti SIM registration ket mapasamak laeng iti opisial nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ti link ken iserrek ti ID ko.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          },
          {
            "id": "c",
            "text": "Awagan ti numero iti text.",
            "correct": false,
            "feedback": "Ikolekta ti link nga dayta ti ID mo. Saan ka a i-text ti pudno a telco tapos ag-register iti random link."
          }
        ],
        "tip": "Ag-register iti SIM iti opisial laeng a telco channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-register iti SIM iti opisial laeng a telco channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-medium-000",
    "title": "loan-app drill 0",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "bassit nga online seller. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LendFast",
        "message": "Final notice: bayadan ti P8,000 itan tapos malikawan ti escalation.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P8,000 tapos aguray da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos mapasardeng da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-hard-001",
    "title": "loan-app drill 1",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "senior pensioner. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Bayadan ti overdue penalty mo nga P150 itan wenno kontaken mi amin a contacts mo iti bit.ly/verify-now.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P150 tapos aguray da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos mapasardeng da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-hard-002",
    "title": "loan-app drill 2",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "estudyante iti Manila. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CashKo",
        "message": "Bayadan ti overdue penalty mo nga P100,000 itan wenno kontaken mi amin a contacts mo iti maya-security-alert.xyz.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P100,000 tapos aguray da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos mapasardeng da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-medium-003",
    "title": "loan-app drill 3",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "bassit nga online seller. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "CashKo",
        "message": "Final notice: bayadan ti P45,000 itan tapos malikawan ti escalation.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos mapasardeng da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-negotiate.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-hard-004",
    "title": "loan-app drill 4",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "Lola iti probinsya. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CashKo",
        "message": "Ti loan penalty mo ket P8,000. Bayadan itan iti pagibig-loan-release.site wenno ma-notify ti contacts mo.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos mapasardeng da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Ipatulod ti P8,000 tapos aguray da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-hard-005",
    "title": "loan-app drill 5",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "estudyante iti Manila. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Final notice: bayadan ti P12,000 itan tapos malikawan ti escalation.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-negotiate.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos mapasardeng da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-medium-006",
    "title": "loan-app drill 6",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "OFW iti Riyadh. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "LendFast",
        "message": "Final notice: bayadan ti P500 itan tapos malikawan ti escalation.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos mapasardeng da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-negotiate.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-hard-007",
    "title": "loan-app drill 7",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "tagikuada ti sari-sari store. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "CashKo",
        "message": "Final notice: bayadan ti P500 itan tapos malikawan ti escalation.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-negotiate.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos mapasardeng da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-hard-008",
    "title": "loan-app drill 8",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "call-center agent. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CashKo",
        "message": "Ti loan penalty mo ket P1,500. Bayadan itan iti shopee-refund-ph.site wenno ma-notify ti contacts mo.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos ma-negotiate.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Ipatulod ti P1,500 tapos aguray da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-medium-009",
    "title": "loan-app drill 9",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "tagikuada ti sari-sari store. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Final notice: bayadan ti P12,000 itan tapos malikawan ti escalation.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P12,000 tapos aguray da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-negotiate.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-hard-010",
    "title": "loan-app drill 10",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "estudyante iti Manila. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Bayadan ti overdue penalty mo nga P25,000 itan wenno kontaken mi amin a contacts mo iti pagibig-loan-release.site.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos mapasardeng da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-negotiate.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-hard-011",
    "title": "loan-app drill 11",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "estudyante iti Manila. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LendFast",
        "message": "Bayadan ti overdue penalty mo nga P150 itan wenno kontaken mi amin a contacts mo iti maya-security-alert.xyz.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P150 tapos aguray da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos ma-negotiate.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-medium-012",
    "title": "loan-app drill 12",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "estudyante iti Manila. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CashKo",
        "message": "Ti loan penalty mo ket P12,000. Bayadan itan iti shopee-refund-ph.site wenno ma-notify ti contacts mo.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Bayadan ti penalty tapos mapasardeng da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Ipatulod ti P12,000 tapos aguray da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-hard-013",
    "title": "loan-app drill 13",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "call-center agent. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LendFast",
        "message": "Ti loan penalty mo ket P8,000. Bayadan itan iti gov-ph-tax.site wenno ma-notify ti contacts mo.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P8,000 tapos aguray da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos mapasardeng da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "loan-app-hard-014",
    "title": "loan-app drill 14",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "loan-app",
    "archetype": "trap",
    "category": "loan-app",
    "setup": "senior pensioner. Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Ti loan penalty mo ket P150. Bayadan itan iti maya-security-alert.xyz wenno ma-notify ti contacts mo.",
        "question": "Adda lender a mangbaballaag a kontaken ti amin. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Saan nga agbayad. I-report ti harassment iti DTI wenno CICC.",
            "correct": true,
            "feedback": "Usto. Illegal ti loan-app harassment; i-report daytoy imbes nga agbayad iti estranghero."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P150 tapos aguray da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          },
          {
            "id": "c",
            "text": "Bayadan ti penalty tapos mapasardeng da.",
            "correct": false,
            "feedback": "Ti panagbayad iti estranghero saan a mapasardeng dagiti am-among; i-report daytoy iti autoridad."
          }
        ],
        "tip": "Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Saan nga mangarkensa iti penalty ti pudno a lender babaen iti estranghero.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "charity-easy-000",
    "title": "charity drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "charity",
    "archetype": "trap",
    "category": "charity",
    "setup": "tagikuada ti sari-sari store. Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Kasapulan ti orphanage nga daytoy iti P100,000. Ag-donate itan ken isalakan ti maysa nga ubing.",
        "question": "Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna no pudno ken na-verify ti charity.",
            "correct": true,
            "feedback": "Usto. I-verify ti charity babaen iti opisial a channel sakbay nga mangted."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P100,000 tapos matulongan dagiti biktima.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          },
          {
            "id": "c",
            "text": "I-share ti numero tapos makapag-donate ti dadduma.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          }
        ],
        "tip": "Ag-donate laeng iti na-verify nga opisial a channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-donate laeng iti na-verify nga opisial a channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "charity-medium-001",
    "title": "charity drill 1",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "charity",
    "archetype": "trap",
    "category": "charity",
    "setup": "estudyante iti Manila. Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ChurchAid",
        "message": "Tulongan ti typhoon drive mi! Tunggal P12,000 ket mangpakan iti pamilya. Ipatulod iti numero nga daytoy.",
        "question": "Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna no pudno ken na-verify ti charity.",
            "correct": true,
            "feedback": "Usto. I-verify ti charity babaen iti opisial a channel sakbay nga mangted."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P12,000 tapos matulongan dagiti biktima.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          },
          {
            "id": "c",
            "text": "I-share ti numero tapos makapag-donate ti dadduma.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          }
        ],
        "tip": "Ag-donate laeng iti na-verify nga opisial a channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-donate laeng iti na-verify nga opisial a channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "charity-medium-002",
    "title": "charity drill 2",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "charity",
    "archetype": "trap",
    "category": "charity",
    "setup": "estudyante iti Manila. Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ReliefFund",
        "message": "Ag-donate kadagiti biktima ti bagyo! Ipatulod ti P12,000 iti numero nga daytoy. Tunggal pisos ket tumulong.",
        "question": "Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna no pudno ken na-verify ti charity.",
            "correct": true,
            "feedback": "Usto. I-verify ti charity babaen iti opisial a channel sakbay nga mangted."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P12,000 tapos matulongan dagiti biktima.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          },
          {
            "id": "c",
            "text": "I-share ti numero tapos makapag-donate ti dadduma.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          }
        ],
        "tip": "Ag-donate laeng iti na-verify nga opisial a channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-donate laeng iti na-verify nga opisial a channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "charity-easy-003",
    "title": "charity drill 3",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "charity",
    "archetype": "trap",
    "category": "charity",
    "setup": "estudyante iti Manila. Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ReliefFund",
        "message": "Kasapulan ti orphanage nga daytoy iti P100,000. Ag-donate itan ken isalakan ti maysa nga ubing.",
        "question": "Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna no pudno ken na-verify ti charity.",
            "correct": true,
            "feedback": "Usto. I-verify ti charity babaen iti opisial a channel sakbay nga mangted."
          },
          {
            "id": "b",
            "text": "I-share ti numero tapos makapag-donate ti dadduma.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          },
          {
            "id": "c",
            "text": "Ipatulod ti P100,000 tapos matulongan dagiti biktima.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          }
        ],
        "tip": "Ag-donate laeng iti na-verify nga opisial a channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-donate laeng iti na-verify nga opisial a channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "charity-medium-004",
    "title": "charity drill 4",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "charity",
    "archetype": "trap",
    "category": "charity",
    "setup": "estudyante iti Manila. Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Tulongan ti typhoon drive mi! Tunggal P25,000 ket mangpakan iti pamilya. Ipatulod iti numero nga daytoy.",
        "question": "Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna no pudno ken na-verify ti charity.",
            "correct": true,
            "feedback": "Usto. I-verify ti charity babaen iti opisial a channel sakbay nga mangted."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P25,000 tapos matulongan dagiti biktima.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          },
          {
            "id": "c",
            "text": "I-share ti numero tapos makapag-donate ti dadduma.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          }
        ],
        "tip": "Ag-donate laeng iti na-verify nga opisial a channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-donate laeng iti na-verify nga opisial a channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "charity-medium-005",
    "title": "charity drill 5",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "charity",
    "archetype": "trap",
    "category": "charity",
    "setup": "bassit nga online seller. Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Ag-donate kadagiti biktima ti bagyo! Ipatulod ti P45,000 iti numero nga daytoy. Tunggal pisos ket tumulong.",
        "question": "Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna no pudno ken na-verify ti charity.",
            "correct": true,
            "feedback": "Usto. I-verify ti charity babaen iti opisial a channel sakbay nga mangted."
          },
          {
            "id": "b",
            "text": "I-share ti numero tapos makapag-donate ti dadduma.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          },
          {
            "id": "c",
            "text": "Ipatulod ti P45,000 tapos matulongan dagiti biktima.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          }
        ],
        "tip": "Ag-donate laeng iti na-verify nga opisial a channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-donate laeng iti na-verify nga opisial a channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "charity-easy-006",
    "title": "charity drill 6",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "charity",
    "archetype": "trap",
    "category": "charity",
    "setup": "estudyante iti Manila. Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ReliefFund",
        "message": "Tulongan ti typhoon drive mi! Tunggal P45,000 ket mangpakan iti pamilya. Ipatulod iti numero nga daytoy.",
        "question": "Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna no pudno ken na-verify ti charity.",
            "correct": true,
            "feedback": "Usto. I-verify ti charity babaen iti opisial a channel sakbay nga mangted."
          },
          {
            "id": "b",
            "text": "I-share ti numero tapos makapag-donate ti dadduma.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          },
          {
            "id": "c",
            "text": "Ipatulod ti P45,000 tapos matulongan dagiti biktima.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          }
        ],
        "tip": "Ag-donate laeng iti na-verify nga opisial a channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-donate laeng iti na-verify nga opisial a channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "charity-medium-007",
    "title": "charity drill 7",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "charity",
    "archetype": "trap",
    "category": "charity",
    "setup": "bassit nga online seller. Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ChurchAid",
        "message": "Kasapulan ti orphanage nga daytoy iti P1,500. Ag-donate itan ken isalakan ti maysa nga ubing.",
        "question": "Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna no pudno ken na-verify ti charity.",
            "correct": true,
            "feedback": "Usto. I-verify ti charity babaen iti opisial a channel sakbay nga mangted."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P1,500 tapos matulongan dagiti biktima.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          },
          {
            "id": "c",
            "text": "I-share ti numero tapos makapag-donate ti dadduma.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          }
        ],
        "tip": "Ag-donate laeng iti na-verify nga opisial a channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-donate laeng iti na-verify nga opisial a channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "charity-medium-008",
    "title": "charity drill 8",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "charity",
    "archetype": "trap",
    "category": "charity",
    "setup": "call-center agent. Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ReliefFund",
        "message": "Tulongan ti typhoon drive mi! Tunggal P25,000 ket mangpakan iti pamilya. Ipatulod iti numero nga daytoy.",
        "question": "Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna no pudno ken na-verify ti charity.",
            "correct": true,
            "feedback": "Usto. I-verify ti charity babaen iti opisial a channel sakbay nga mangted."
          },
          {
            "id": "b",
            "text": "I-share ti numero tapos makapag-donate ti dadduma.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          },
          {
            "id": "c",
            "text": "Ipatulod ti P25,000 tapos matulongan dagiti biktima.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          }
        ],
        "tip": "Ag-donate laeng iti na-verify nga opisial a channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-donate laeng iti na-verify nga opisial a channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "charity-easy-009",
    "title": "charity drill 9",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "charity",
    "archetype": "trap",
    "category": "charity",
    "setup": "bassit nga online seller. Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ChurchAid",
        "message": "Tulongan ti typhoon drive mi! Tunggal P45,000 ket mangpakan iti pamilya. Ipatulod iti numero nga daytoy.",
        "question": "Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna no pudno ken na-verify ti charity.",
            "correct": true,
            "feedback": "Usto. I-verify ti charity babaen iti opisial a channel sakbay nga mangted."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P45,000 tapos matulongan dagiti biktima.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          },
          {
            "id": "c",
            "text": "I-share ti numero tapos makapag-donate ti dadduma.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          }
        ],
        "tip": "Ag-donate laeng iti na-verify nga opisial a channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-donate laeng iti na-verify nga opisial a channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "charity-medium-010",
    "title": "charity drill 10",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "charity",
    "archetype": "trap",
    "category": "charity",
    "setup": "call-center agent. Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Tulongan ti typhoon drive mi! Tunggal P150 ket mangpakan iti pamilya. Ipatulod iti numero nga daytoy.",
        "question": "Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna no pudno ken na-verify ti charity.",
            "correct": true,
            "feedback": "Usto. I-verify ti charity babaen iti opisial a channel sakbay nga mangted."
          },
          {
            "id": "b",
            "text": "I-share ti numero tapos makapag-donate ti dadduma.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          },
          {
            "id": "c",
            "text": "Ipatulod ti P150 tapos matulongan dagiti biktima.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          }
        ],
        "tip": "Ag-donate laeng iti na-verify nga opisial a channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-donate laeng iti na-verify nga opisial a channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "charity-medium-011",
    "title": "charity drill 11",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "charity",
    "archetype": "trap",
    "category": "charity",
    "setup": "bassit nga online seller. Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Ag-donate kadagiti biktima ti bagyo! Ipatulod ti P2,000 iti numero nga daytoy. Tunggal pisos ket tumulong.",
        "question": "Adda estranghero nga agdawdawat iti donasyon. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "I-check nga umuna no pudno ken na-verify ti charity.",
            "correct": true,
            "feedback": "Usto. I-verify ti charity babaen iti opisial a channel sakbay nga mangted."
          },
          {
            "id": "b",
            "text": "Ipatulod ti P2,000 tapos matulongan dagiti biktima.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          },
          {
            "id": "c",
            "text": "I-share ti numero tapos makapag-donate ti dadduma.",
            "correct": false,
            "feedback": "Usaren ti scammer ti disaster tapos mangala iti 'donasyon' nga para kadakuada, saan kadagiti biktima."
          }
        ],
        "tip": "Ag-donate laeng iti na-verify nga opisial a channel."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Ag-donate laeng iti na-verify nga opisial a channel.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "good-message-medium-000",
    "title": "good-message drill 0",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "good-message",
    "archetype": "good-message",
    "category": "good-message",
    "setup": "senior pensioner. Kasla pudno a mensahe daytoy. Scam kadi?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Shopee",
        "message": "Shopee: Na-ship ti order mo. I-track iti app.",
        "question": "Kasla pudno a mensahe daytoy. Scam kadi?",
        "options": [
          {
            "id": "a",
            "text": "Pudno daytoy. Manipud iti opisial nga sender ken saan nga agdawdawat nga agipatulod.",
            "correct": true,
            "feedback": "Usto. Ibaga ti pudno nga OTP text nga isekreto daytoy; ti scam ket ti siasinoman a MANGDAWDAWAT kenka nga ipatulod."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos i-confirm ti identity ko.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          },
          {
            "id": "c",
            "text": "Scam daytoy ta nangibaga iti code.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          }
        ],
        "tip": "Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "good-message-hard-001",
    "title": "good-message drill 1",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "good-message",
    "archetype": "good-message",
    "category": "good-message",
    "setup": "estudyante iti Manila. Adda mensahe manipud iti kompanya nga us-usarem. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Na-ship ti order mo. I-track iti app.",
        "question": "Adda mensahe manipud iti kompanya nga us-usarem. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Pudno daytoy. Manipud iti opisial nga sender ken saan nga agdawdawat nga agipatulod.",
            "correct": true,
            "feedback": "Usto. Ibaga ti pudno nga OTP text nga isekreto daytoy; ti scam ket ti siasinoman a MANGDAWDAWAT kenka nga ipatulod."
          },
          {
            "id": "b",
            "text": "I-block ken i-report.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          },
          {
            "id": "c",
            "text": "Scam daytoy ta nangibaga iti code.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          }
        ],
        "tip": "Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "good-message-hard-002",
    "title": "good-message drill 2",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "good-message",
    "archetype": "good-message",
    "category": "good-message",
    "setup": "estudyante iti Manila. Adda mensahe manipud iti kompanya nga us-usarem. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Lazada",
        "message": "Lazada: Agyaman iti cash-in mo nga P500. Available ti baro a balance mo iti app.",
        "question": "Adda mensahe manipud iti kompanya nga us-usarem. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Pudno daytoy. Manipud iti opisial nga sender ken saan nga agdawdawat nga agipatulod.",
            "correct": true,
            "feedback": "Usto. Ibaga ti pudno nga OTP text nga isekreto daytoy; ti scam ket ti siasinoman a MANGDAWDAWAT kenka nga ipatulod."
          },
          {
            "id": "b",
            "text": "I-block ken i-report.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          },
          {
            "id": "c",
            "text": "Scam daytoy ta nangibaga iti code.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          }
        ],
        "tip": "Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "good-message-medium-003",
    "title": "good-message drill 3",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "good-message",
    "archetype": "good-message",
    "category": "good-message",
    "setup": "bassit nga online seller. Adda mensahe manipud iti kompanya nga us-usarem. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Lazada",
        "message": "Lazada: Agyaman iti cash-in mo nga P1,000,000. Available ti baro a balance mo iti app.",
        "question": "Adda mensahe manipud iti kompanya nga us-usarem. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Pudno daytoy. Manipud iti opisial nga sender ken saan nga agdawdawat nga agipatulod.",
            "correct": true,
            "feedback": "Usto. Ibaga ti pudno nga OTP text nga isekreto daytoy; ti scam ket ti siasinoman a MANGDAWDAWAT kenka nga ipatulod."
          },
          {
            "id": "b",
            "text": "Scam daytoy ta nangibaga iti code.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos i-confirm ti identity ko.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          }
        ],
        "tip": "Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "good-message-hard-004",
    "title": "good-message drill 4",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "good-message",
    "archetype": "good-message",
    "category": "good-message",
    "setup": "OFW iti Riyadh. Adda mensahe manipud iti kompanya nga us-usarem. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Agyaman iti cash-in mo nga P45,000. Available ti baro a balance mo iti app.",
        "question": "Adda mensahe manipud iti kompanya nga us-usarem. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Pudno daytoy. Manipud iti opisial nga sender ken saan nga agdawdawat nga agipatulod.",
            "correct": true,
            "feedback": "Usto. Ibaga ti pudno nga OTP text nga isekreto daytoy; ti scam ket ti siasinoman a MANGDAWDAWAT kenka nga ipatulod."
          },
          {
            "id": "b",
            "text": "I-block ken i-report.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          },
          {
            "id": "c",
            "text": "Scam daytoy ta nangibaga iti code.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          }
        ],
        "tip": "Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "good-message-hard-005",
    "title": "good-message drill 5",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "good-message",
    "archetype": "good-message",
    "category": "good-message",
    "setup": "Lola iti probinsya. Kasla pudno a mensahe daytoy. Scam kadi?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GCash",
        "message": "GCash: Ti verification code mo ket 4126. Saan nga ibingay daytoy a code iti siasinoman. Saan daytoy a dawaten ti GCash.",
        "question": "Kasla pudno a mensahe daytoy. Scam kadi?",
        "options": [
          {
            "id": "a",
            "text": "Pudno daytoy. Manipud iti opisial nga sender ken saan nga agdawdawat nga agipatulod.",
            "correct": true,
            "feedback": "Usto. Ibaga ti pudno nga OTP text nga isekreto daytoy; ti scam ket ti siasinoman a MANGDAWDAWAT kenka nga ipatulod."
          },
          {
            "id": "b",
            "text": "Scam daytoy ta nangibaga iti code.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          },
          {
            "id": "c",
            "text": "Ag-reply tapos i-confirm ti identity ko.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          }
        ],
        "tip": "Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "good-message-medium-006",
    "title": "good-message drill 6",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "good-message",
    "archetype": "good-message",
    "category": "good-message",
    "setup": "estudyante iti Manila. Adda mensahe manipud iti kompanya nga us-usarem. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Na-ship ti order mo. I-track iti app.",
        "question": "Adda mensahe manipud iti kompanya nga us-usarem. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Pudno daytoy. Manipud iti opisial nga sender ken saan nga agdawdawat nga agipatulod.",
            "correct": true,
            "feedback": "Usto. Ibaga ti pudno nga OTP text nga isekreto daytoy; ti scam ket ti siasinoman a MANGDAWDAWAT kenka nga ipatulod."
          },
          {
            "id": "b",
            "text": "I-block ken i-report.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          },
          {
            "id": "c",
            "text": "Scam daytoy ta nangibaga iti code.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          }
        ],
        "tip": "Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "good-message-hard-007",
    "title": "good-message drill 7",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "good-message",
    "archetype": "good-message",
    "category": "good-message",
    "setup": "bassit nga online seller. Kasla pudno a mensahe daytoy. Scam kadi?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Ti verification code mo ket 4126. Saan nga ibingay daytoy a code iti siasinoman. Saan daytoy a dawaten ti Maya.",
        "question": "Kasla pudno a mensahe daytoy. Scam kadi?",
        "options": [
          {
            "id": "a",
            "text": "Pudno daytoy. Manipud iti opisial nga sender ken saan nga agdawdawat nga agipatulod.",
            "correct": true,
            "feedback": "Usto. Ibaga ti pudno nga OTP text nga isekreto daytoy; ti scam ket ti siasinoman a MANGDAWDAWAT kenka nga ipatulod."
          },
          {
            "id": "b",
            "text": "Scam daytoy ta nangibaga iti code.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          },
          {
            "id": "c",
            "text": "I-block ken i-report.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          }
        ],
        "tip": "Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "good-message-hard-008",
    "title": "good-message drill 8",
    "icon": "ShieldCheck",
    "difficulty": "hard",
    "family": "good-message",
    "archetype": "good-message",
    "category": "good-message",
    "setup": "senior pensioner. Kasla pudno a mensahe daytoy. Scam kadi?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Shopee",
        "message": "Shopee: Ti verification code mo ket 4126. Saan nga ibingay daytoy a code iti siasinoman. Saan daytoy a dawaten ti Shopee.",
        "question": "Kasla pudno a mensahe daytoy. Scam kadi?",
        "options": [
          {
            "id": "a",
            "text": "Pudno daytoy. Manipud iti opisial nga sender ken saan nga agdawdawat nga agipatulod.",
            "correct": true,
            "feedback": "Usto. Ibaga ti pudno nga OTP text nga isekreto daytoy; ti scam ket ti siasinoman a MANGDAWDAWAT kenka nga ipatulod."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos i-confirm ti identity ko.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          },
          {
            "id": "c",
            "text": "I-block ken i-report.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          }
        ],
        "tip": "Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  },
  {
    "id": "good-message-medium-009",
    "title": "good-message drill 9",
    "icon": "ShieldCheck",
    "difficulty": "medium",
    "family": "good-message",
    "archetype": "good-message",
    "category": "good-message",
    "setup": "senior pensioner. Adda mensahe manipud iti kompanya nga us-usarem. Ania ti aramidem?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GCash",
        "message": "GCash: Agyaman iti cash-in mo nga P100,000. Available ti baro a balance mo iti app.",
        "question": "Adda mensahe manipud iti kompanya nga us-usarem. Ania ti aramidem?",
        "options": [
          {
            "id": "a",
            "text": "Pudno daytoy. Manipud iti opisial nga sender ken saan nga agdawdawat nga agipatulod.",
            "correct": true,
            "feedback": "Usto. Ibaga ti pudno nga OTP text nga isekreto daytoy; ti scam ket ti siasinoman a MANGDAWDAWAT kenka nga ipatulod."
          },
          {
            "id": "b",
            "text": "Ag-reply tapos i-confirm ti identity ko.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          },
          {
            "id": "c",
            "text": "Scam daytoy ta nangibaga iti code.",
            "correct": false,
            "feedback": "Ti panang-flag iti tunggal pudno a mensahe ket mangaramid nga saan ka agtalek iti aniaman. Ti test no adda MANGDAWDAWAT kenka nga agtignay."
          }
        ],
        "tip": "Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code."
      }
    ],
    "debrief": "Na-practice mo ti pagannurotan: Adda pudno nga OTP text. Ti scam ket ti siasinoman a mangdawdawat kenka nga IPATULOD ti code.. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
    "source": "generated"
  }
];

export const ALL_SCENARIOS_ILOCANO: Scenario[] = [...SCENARIOS, ...GENERATED_SCENARIOS_ILOCANO];
