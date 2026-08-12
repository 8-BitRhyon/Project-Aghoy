// AUTO-GENERATED - BISAYA - do not edit by hand. Regenerate: npx tsx scripts/generate-scenarios.ts
import { Scenario } from "./scenarios";
import { SCENARIOS } from "./scenarios";

export const GENERATED_SCENARIOS_BISAYA: Scenario[] = [
  {
    "id": "ewallet-easy-000",
    "title": "ewallet drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "call-center agent. Naay mensahe nga nag-ingon naka-lock ang account nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Ma-expire ang MPIN nimo karon. I-update kini sa gov-ph-tax.site para magamit pa ang wallet nimo.",
        "question": "Naay mensahe nga nag-ingon naka-lock ang account nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GOTYME. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GOTYME. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita namo ang suspicious login sa account nimo. I-verify karon sa maya-security-alert.xyz o i-lock kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nag-ingon ikansela ang benefits nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Naay moabot nga transfer nga P250! Mobayad una og gamay nga release fee aron madawat kini.",
        "question": "Naay mensahe nga nag-ingon ikansela ang benefits nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Ma-expire ang MPIN nimo karon. I-update kini sa bit.ly/verify-now para magamit pa ang wallet nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nag-ingon naka-lock ang account nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa g-cash-verify-ph.top sa 24 ka oras.",
        "question": "Naay mensahe nga nag-ingon naka-lock ang account nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GCASH. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GCASH. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon ibalik ang parcel nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay Alerto: ibalik ang parcel nimo. I-verify sa smart-rewar-ds.top o ma-suspend ang account nimo.",
        "question": "Naay mensahe nga nag-ingon ibalik ang parcel nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Ma-expire ang MPIN nimo karon. I-update kini sa jnt-tracking-ph.site para magamit pa ang wallet nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon naay case number nga na-file batok nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Ma-expire ang MPIN nimo karon. I-update kini sa g-cash-verify-ph.top para magamit pa ang wallet nimo.",
        "question": "Naay mensahe nga nag-ingon naay case number nga na-file batok nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nag-ingon naay nakit-an nga unauthorized transfer ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Naay moabot nga transfer nga P100,000! Mobayad una og gamay nga release fee aron madawat kini.",
        "question": "Naay mensahe nga nag-ingon naay nakit-an nga unauthorized transfer ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash Alerto: naay case number nga na-file batok nimo. I-verify sa bdo-secure-login-verify.top o ma-suspend ang account nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GCASH. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GCASH. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Naay moabot nga transfer nga P100,000! Mobayad una og gamay nga release fee aron madawat kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa bit.ly/verify-now sa 24 ka oras.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: ide-deactivate ang SIM nimo I-reply ang OTP nimo karon para ma-reactivate, o mawala ang kwarta nimo sa 24 ka oras.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga MAYA. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga MAYA. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa shopee-refund-ph.site sa 24 ka oras.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GCASH. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GCASH. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: ibalik ang parcel nimo I-reply ang OTP nimo karon para ma-reactivate, o mawala ang kwarta nimo sa 24 ka oras.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Ma-expire ang MPIN nimo karon. I-update kini sa shopee-refund-ph.site para magamit pa ang wallet nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GOTYME. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GOTYME. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa gov-ph-tax.site sa 24 ka oras.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GCASH. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GCASH. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nag-ingon naay case number nga na-file batok nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay Alerto: naay case number nga na-file batok nimo. I-verify sa shopee-refund-ph.site o ma-suspend ang account nimo.",
        "question": "Naay mensahe nga nag-ingon naay case number nga na-file batok nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Ma-expire ang MPIN nimo karon. I-update kini sa g-cash-verify-ph.top para magamit pa ang wallet nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Naay moabot nga transfer nga P100,000! Mobayad una og gamay nga release fee aron madawat kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga GCash hotline 2882."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme Alerto: naay nakit-an nga unauthorized transfer. I-verify sa g-cash-verify-ph.top o ma-suspend ang account nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GOTYME. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GOTYME. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Nakita namo ang suspicious login sa account nimo. I-verify karon sa gov-ph-tax.site o i-lock kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Ma-expire ang MPIN nimo karon. I-update kini sa jnt-tracking-ph.site para magamit pa ang wallet nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GOTYME. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GOTYME. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay Alerto: naka-lock ang account nimo. I-verify sa maya-security-alert.xyz o ma-suspend ang account nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Maya",
        "message": "Maya: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa jnt-tracking-ph.site sa 24 ka oras.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga MAYA. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga MAYA. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon mawala ang kwarta nimo sa 24 ka oras ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa smart-rewar-ds.top sa 24 ka oras.",
        "question": "Naay mensahe nga nag-ingon mawala ang kwarta nimo sa 24 ka oras ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nag-ingon mao na kini ang katapusang higayon nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme Alerto: mao na kini ang katapusang higayon nimo. I-verify sa gov-ph-tax.site o ma-suspend ang account nimo.",
        "question": "Naay mensahe nga nag-ingon mao na kini ang katapusang higayon nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay mensahe nga nag-ingon mawala ang kwarta nimo sa 24 ka oras ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Maya",
        "message": "Maya: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa bit.ly/verify-now sa 24 ka oras.",
        "question": "Naay mensahe nga nag-ingon mawala ang kwarta nimo sa 24 ka oras ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Ma-expire ang MPIN nimo karon. I-update kini sa g-cash-verify-ph.top para magamit pa ang wallet nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nag-ingon naay case number nga na-file batok nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Maya",
        "message": "Maya: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa maya-security-alert.xyz sa 24 ka oras.",
        "question": "Naay mensahe nga nag-ingon naay case number nga na-file batok nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Naay moabot nga transfer nga P150! Mobayad una og gamay nga release fee aron madawat kini.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay mensahe nga nag-ingon ibalik ang parcel nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Nakita namo ang suspicious login sa account nimo. I-verify karon sa pagibig-loan-release.site o i-lock kini.",
        "question": "Naay mensahe nga nag-ingon ibalik ang parcel nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Naay moabot nga transfer nga P5,000! Mobayad una og gamay nga release fee aron madawat kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nag-ingon mawala ang kwarta nimo sa 24 ka oras ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita namo ang suspicious login sa account nimo. I-verify karon sa smart-rewar-ds.top o i-lock kini.",
        "question": "Naay mensahe nga nag-ingon mawala ang kwarta nimo sa 24 ka oras ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GOTYME. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GOTYME. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon naka-lock ang account nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa shopee-refund-ph.site sa 24 ka oras.",
        "question": "Naay mensahe nga nag-ingon naka-lock ang account nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon naay case number nga na-file batok nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa smart-rewar-ds.top sa 24 ka oras.",
        "question": "Naay mensahe nga nag-ingon naay case number nga na-file batok nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Naay moabot nga transfer nga P150! Mobayad una og gamay nga release fee aron madawat kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Nakita namo ang suspicious login sa account nimo. I-verify karon sa bdo-secure-login-verify.top o i-lock kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga GCash hotline 2882."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Nakita namo ang suspicious login sa account nimo. I-verify karon sa gcash-update.ph-verify.top o i-lock kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nag-ingon ikansela ang benefits nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Ma-expire ang MPIN nimo karon. I-update kini sa gov-ph-tax.site para magamit pa ang wallet nimo.",
        "question": "Naay mensahe nga nag-ingon ikansela ang benefits nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GoTyme",
        "message": "GoTyme Alerto: ide-deactivate ang SIM nimo. I-verify sa gov-ph-tax.site o ma-suspend ang account nimo.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Nakita namo ang suspicious login sa account nimo. I-verify karon sa pagibig-loan-release.site o i-lock kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GCASH. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GCASH. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: ibalik ang parcel nimo I-reply ang OTP nimo karon para ma-reactivate, o mawala ang kwarta nimo sa 24 ka oras.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon mawala ang kwarta nimo sa 24 ka oras ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GCash",
        "message": "GCash: Nakita namo ang suspicious login sa account nimo. I-verify karon sa jnt-tracking-ph.site o i-lock kini.",
        "question": "Naay mensahe nga nag-ingon mawala ang kwarta nimo sa 24 ka oras ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga GCash hotline 2882."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon ibalik ang parcel nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa bdo-secure-login-verify.top sa 24 ka oras.",
        "question": "Naay mensahe nga nag-ingon ibalik ang parcel nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon naay nakit-an nga unauthorized transfer ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GCash",
        "message": "GCash Alerto: naay nakit-an nga unauthorized transfer. I-verify sa pagibig-loan-release.site o ma-suspend ang account nimo.",
        "question": "Naay mensahe nga nag-ingon naay nakit-an nga unauthorized transfer ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nag-ingon mao na kini ang katapusang higayon nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Ma-expire ang MPIN nimo karon. I-update kini sa pagibig-loan-release.site para magamit pa ang wallet nimo.",
        "question": "Naay mensahe nga nag-ingon mao na kini ang katapusang higayon nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon naka-lock ang account nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Naay moabot nga transfer nga P500! Mobayad una og gamay nga release fee aron madawat kini.",
        "question": "Naay mensahe nga nag-ingon naka-lock ang account nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga GCash hotline 2882."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nag-ingon naay case number nga na-file batok nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GCash",
        "message": "GCash: Nakita namo ang suspicious login sa account nimo. I-verify karon sa g-cash-verify-ph.top o i-lock kini.",
        "question": "Naay mensahe nga nag-ingon naay case number nga na-file batok nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Maya",
        "message": "Maya: Ma-expire ang MPIN nimo karon. I-update kini sa bdo-secure-login-verify.top para magamit pa ang wallet nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga MAYA. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga MAYA. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa smart-rewar-ds.top sa 24 ka oras.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Naay moabot nga transfer nga P12,000! Mobayad una og gamay nga release fee aron madawat kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Maya",
        "message": "Maya: Error sa double refund! Para i-correct, kumpirmaha ang account nimo sa gcash-update.ph-verify.top sa 24 ka oras.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nag-ingon naay case number nga na-file batok nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Ma-expire ang MPIN nimo karon. I-update kini sa gcash-update.ph-verify.top para magamit pa ang wallet nimo.",
        "question": "Naay mensahe nga nag-ingon naay case number nga na-file batok nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita namo ang suspicious login sa account nimo. I-verify karon sa shopee-refund-ph.site o i-lock kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon ibalik ang parcel nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: ibalik ang parcel nimo I-reply ang OTP nimo karon para ma-reactivate, o mawala ang kwarta nimo sa 24 ka oras.",
        "question": "Naay mensahe nga nag-ingon ibalik ang parcel nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Nakita namo ang suspicious login sa account nimo. I-verify karon sa bit.ly/verify-now o i-lock kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Maya",
        "message": "Maya: Nakita namo ang suspicious login sa account nimo. I-verify karon sa bdo-secure-login-verify.top o i-lock kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga MAYA. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga MAYA. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Nakita namo ang suspicious login sa account nimo. I-verify karon sa shopee-refund-ph.site o i-lock kini.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga SHOPEEPAY. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GCash",
        "message": "GCash: mawala ang kwarta nimo sa 24 ka oras I-reply ang OTP nimo karon para ma-reactivate, o mawala ang kwarta nimo sa 24 ka oras.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Ma-expire ang MPIN nimo karon. I-update kini sa bdo-secure-login-verify.top para magamit pa ang wallet nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga GCash hotline 2882."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GoTyme",
        "message": "GoTyme: ikansela ang benefits nimo I-reply ang OTP nimo karon para ma-reactivate, o mawala ang kwarta nimo sa 24 ka oras.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon mao na kini ang katapusang higayon nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Ma-expire ang MPIN nimo karon. I-update kini sa gcash-update.ph-verify.top para magamit pa ang wallet nimo.",
        "question": "Naay mensahe nga nag-ingon mao na kini ang katapusang higayon nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GCASH. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga GCASH. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay Alerto: mao na kini ang katapusang higayon nimo. I-verify sa shopee-refund-ph.site o ma-suspend ang account nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga SHOPEEPAY app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga SHOPEEPAY app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon naay nakit-an nga unauthorized transfer ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GoTyme",
        "message": "GoTyme: naay nakit-an nga unauthorized transfer I-reply ang OTP nimo karon para ma-reactivate, o mawala ang kwarta nimo sa 24 ka oras.",
        "question": "Naay mensahe nga nag-ingon naay nakit-an nga unauthorized transfer ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash Alerto: mao na kini ang katapusang higayon nimo. I-verify sa pagibig-loan-release.site o ma-suspend ang account nimo.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga GCash hotline 2882."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita namo ang suspicious login sa account nimo. I-verify karon sa maya-security-alert.xyz o i-lock kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita namo ang suspicious login sa account nimo. I-verify karon sa gcash-update.ph-verify.top o i-lock kini.",
        "question": "Naay text nga nag-ingon kinahanglan molihok ka dayon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero nga iyan para sa scammer. Gamita lang ang opisyal nga the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon naay nakit-an nga unauthorized transfer ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme Alerto: naay nakit-an nga unauthorized transfer. I-verify sa g-cash-verify-ph.top o ma-suspend ang account nimo.",
        "question": "Naay mensahe nga nag-ingon naay nakit-an nga unauthorized transfer ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GOTYME app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GOTYME app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP dayon aron luwas ang kwarta nako.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon ikansela ang benefits nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Ma-expire ang MPIN nimo karon. I-update kini sa bit.ly/verify-now para magamit pa ang wallet nimo.",
        "question": "Naay mensahe nga nag-ingon ikansela ang benefits nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga GCASH app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga GCASH app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Kung mobayad ka aron makadawat og kwarta, scam kana."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nag-ingon mao na kini ang katapusang higayon nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya Alerto: mao na kini ang katapusang higayon nimo. I-verify sa bdo-secure-login-verify.top o ma-suspend ang account nimo.",
        "question": "Naay mensahe nga nag-ingon mao na kini ang katapusang higayon nimo ug nangayo og OTP. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang tinuod nga MAYA app ug i-check ang account nako.",
            "correct": true,
            "feedback": "Sakto. Gisusi nimo ang tinuod nga MAYA app imbes nga motuo sa text. Ang account nimo ang source of truth, dili ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga MAYA. Ang mensahe nga iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron madawat nako ang transfer.",
            "correct": false,
            "feedback": "Dili mangayo og OTP ang tinuod nga MAYA. Ang mensahe nga iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Lihim ang OTP. DILI mangayo og OTP ang tinuod nga kompanya.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "RCBC",
        "message": "RCBC Fraud Dept: nakit-an ang unauthorized transfer nga P1,000,000. I-reply ang card details nimo aron ma-reverse.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "LandBank",
        "message": "LandBank Fraud Dept: nakit-an ang unauthorized transfer nga P45,000. I-reply ang card details nimo aron ma-reverse.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LandBank",
        "message": "LandBank: Naka-hold ang account nimo para sa review. I-kumpirma ang identity nimo sa smart-rewar-ds.top aron mabalik ang access.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Security Bank",
        "message": "Security Bank Fraud Dept: nakit-an ang unauthorized transfer nga P2,000. I-reply ang card details nimo aron ma-reverse.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNB",
        "message": "PNB: mao na kini ang katapusang higayon nimo. I-click ang jnt-tracking-ph.site para i-verify ang identity nimo karon.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNB",
        "message": "PNB Fraud Dept: nakit-an ang unauthorized transfer nga P1,500. I-reply ang card details nimo aron ma-reverse.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank: Sirado na ang card nimo tungod sa inactivity. I-reactivate sa smart-rewar-ds.top.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: nakit-an ang unauthorized transfer nga P100,000. I-reply ang card details nimo aron ma-reverse.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: nakit-an ang unauthorized transfer nga P500. I-reply ang card details nimo aron ma-reverse.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Security Bank",
        "message": "Security Bank Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa g-cash-verify-ph.top.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Metrobank",
        "message": "Metrobank: Naka-hold ang account nimo para sa review. I-kumpirma ang identity nimo sa pagibig-loan-release.site aron mabalik ang access.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BPI",
        "message": "BPI: mawala ang kwarta nimo sa 24 ka oras. I-click ang smart-rewar-ds.top para i-verify ang identity nimo karon.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "RCBC",
        "message": "RCBC: ide-deactivate ang SIM nimo. I-click ang g-cash-verify-ph.top para i-verify ang identity nimo karon.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LandBank",
        "message": "LandBank: Sirado na ang card nimo tungod sa inactivity. I-reactivate sa bit.ly/verify-now.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: nakit-an ang unauthorized transfer nga P500. I-reply ang card details nimo aron ma-reverse.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LandBank",
        "message": "LandBank Fraud Dept: nakit-an ang unauthorized transfer nga P2,000. I-reply ang card details nimo aron ma-reverse.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "UnionBank",
        "message": "UnionBank: ikansela ang benefits nimo. I-click ang bdo-secure-login-verify.top para i-verify ang identity nimo karon.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Metrobank",
        "message": "Metrobank Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa pagibig-loan-release.site.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LandBank",
        "message": "LandBank Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa g-cash-verify-ph.top.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa jnt-tracking-ph.site.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "UnionBank",
        "message": "UnionBank: naay nakit-an nga unauthorized transfer. I-click ang maya-security-alert.xyz para i-verify ang identity nimo karon.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PNB",
        "message": "PNB: Sirado na ang card nimo tungod sa inactivity. I-reactivate sa g-cash-verify-ph.top.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: Naka-hold ang account nimo para sa review. I-kumpirma ang identity nimo sa shopee-refund-ph.site aron mabalik ang access.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Metrobank",
        "message": "Metrobank: Sirado na ang card nimo tungod sa inactivity. I-reactivate sa jnt-tracking-ph.site.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa gov-ph-tax.site.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Security Bank",
        "message": "Security Bank Fraud Dept: nakit-an ang unauthorized transfer nga P12,000. I-reply ang card details nimo aron ma-reverse.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RCBC",
        "message": "RCBC: Naka-hold ang account nimo para sa review. I-kumpirma ang identity nimo sa shopee-refund-ph.site aron mabalik ang access.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Metrobank",
        "message": "Metrobank Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa smart-rewar-ds.top.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "RCBC",
        "message": "RCBC: Naka-hold ang account nimo para sa review. I-kumpirma ang identity nimo sa bdo-secure-login-verify.top aron mabalik ang access.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "UnionBank",
        "message": "UnionBank: naay nakit-an nga unauthorized transfer. I-click ang bit.ly/verify-now para i-verify ang identity nimo karon.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Metrobank",
        "message": "Metrobank: Sirado na ang card nimo tungod sa inactivity. I-reactivate sa gcash-update.ph-verify.top.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LandBank",
        "message": "LandBank Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa bit.ly/verify-now.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LandBank",
        "message": "LandBank Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa maya-security-alert.xyz.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNB",
        "message": "PNB Fraud Dept: nakit-an ang unauthorized transfer nga P100,000. I-reply ang card details nimo aron ma-reverse.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Security Bank",
        "message": "Security Bank: mao na kini ang katapusang higayon nimo. I-click ang gov-ph-tax.site para i-verify ang identity nimo karon.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "UnionBank",
        "message": "UnionBank: Sirado na ang card nimo tungod sa inactivity. I-reactivate sa pagibig-loan-release.site.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "BPI Fraud Dept: nakit-an ang unauthorized transfer nga P150. I-reply ang card details nimo aron ma-reverse.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: Sirado na ang card nimo tungod sa inactivity. I-reactivate sa gov-ph-tax.site.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "LandBank",
        "message": "LandBank: Naka-hold ang account nimo para sa review. I-kumpirma ang identity nimo sa g-cash-verify-ph.top aron mabalik ang access.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: nakit-an ang unauthorized transfer nga P250. I-reply ang card details nimo aron ma-reverse.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: Sirado na ang card nimo tungod sa inactivity. I-reactivate sa shopee-refund-ph.site.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: ide-deactivate ang SIM nimo. I-click ang shopee-refund-ph.site para i-verify ang identity nimo karon.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank: Naka-hold ang account nimo para sa review. I-kumpirma ang identity nimo sa bdo-secure-login-verify.top aron mabalik ang access.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Security Bank",
        "message": "Security Bank Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa pagibig-loan-release.site.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank: Sirado na ang card nimo tungod sa inactivity. I-reactivate sa pagibig-loan-release.site.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "BPI",
        "message": "BPI: naka-lock ang account nimo. I-click ang gcash-update.ph-verify.top para i-verify ang identity nimo karon.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: nakit-an ang unauthorized transfer nga P12,000. I-reply ang card details nimo aron ma-reverse.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RCBC",
        "message": "RCBC Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa gcash-update.ph-verify.top.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RCBC",
        "message": "RCBC: mao na kini ang katapusang higayon nimo. I-click ang jnt-tracking-ph.site para i-verify ang identity nimo karon.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: nakit-an ang unauthorized transfer nga P1,000,000. I-reply ang card details nimo aron ma-reverse.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BPI",
        "message": "BPI Fraud Dept: nakit-an ang unauthorized transfer nga P45,000. I-reply ang card details nimo aron ma-reverse.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Security Bank",
        "message": "Security Bank: Naka-hold ang account nimo para sa review. I-kumpirma ang identity nimo sa jnt-tracking-ph.site aron mabalik ang access.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNB",
        "message": "PNB Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa g-cash-verify-ph.top.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RCBC",
        "message": "RCBC Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa bit.ly/verify-now.",
        "question": "Naay email nga nag-ingon nga naa sa peligro ang account nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Metrobank",
        "message": "Metrobank Fraud Dept: nakit-an ang unauthorized transfer nga P5,000. I-reply ang card details nimo aron ma-reverse.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Security Bank",
        "message": "Security Bank Fraud Dept: nakit-an ang unauthorized transfer nga P100,000. I-reply ang card details nimo aron ma-reverse.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PNB",
        "message": "PNB: Sirado na ang card nimo tungod sa inactivity. I-reactivate sa smart-rewar-ds.top.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: Naka-hold ang account nimo para sa review. I-kumpirma ang identity nimo sa gov-ph-tax.site aron mabalik ang access.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang bank app nako ug i-check kung naay tinuod nga alert.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang login nako aron dili ma-close ang account.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "BPI Security: Naay bag-ong device nga nag-try mag-login. I-approve o i-decline sa shopee-refund-ph.site.",
        "question": "Nag-ingon ang nagtawag nga gigamit ang card nimo sa fraud. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID ug sender name. Kanunay tawagon ang tinuod nga number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          },
          {
            "id": "c",
            "text": "Basaha ang card number ug 3-digit code nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw paghatag og card details o code sa phone o text link. Nahibalo na ang tinuod nga bangko sa card number nimo."
          }
        ],
        "tip": "Wala gyuy bangko nga mangayo sa imong OTP o card code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy bangko nga mangayo sa imong OTP o card code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "Congratulations! Nakapasar ka sa screening namo. Bayari ang P250 processing fee sa maya-security-alert.xyz aron magsugod.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "Congratulations! Nakapasar ka sa screening namo. Bayari ang P2,000 processing fee sa pagibig-loan-release.site aron magsugod.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "Unang task nimo: i-transfer ang P500 isip refundable performance deposit.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Unang task nimo: i-transfer ang P500 isip refundable performance deposit.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "HR diri: hapit na human ang onboarding nimo. Kumpirmaha sa bit.ly/verify-now para sa P1,000,000 refundable deposit.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoGlobal",
        "message": "HR diri: hapit na human ang onboarding nimo. Kumpirmaha sa g-cash-verify-ph.top para sa P1,500 refundable deposit.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "DataEntryPH",
        "message": "Unang task nimo: i-transfer ang P12,000 isip refundable performance deposit.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "RemoteHire",
        "message": "Congratulations! Nakapasar ka sa screening namo. Bayari ang P500 processing fee sa bdo-secure-login-verify.top aron magsugod.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "HR diri: hapit na human ang onboarding nimo. Kumpirmaha sa smart-rewar-ds.top para sa P8,000 refundable deposit.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "HR diri: hapit na human ang onboarding nimo. Kumpirmaha sa bdo-secure-login-verify.top para sa P12,000 refundable deposit.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Unang task nimo: i-transfer ang P2,000 isip refundable performance deposit.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "Gusto namo ang profile nimo! P100,000/bulan, work from home. I-download kini nga app aron magsugod sa training karon.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "DataEntryPH",
        "message": "Naa ka sa shortlist! I-confirm ang slot nimo sa gov-ph-tax.site sa 24 ka oras.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "RemoteHire",
        "message": "Gusto namo ang profile nimo! P5,000/bulan, work from home. I-download kini nga app aron magsugod sa training karon.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Gusto namo ang profile nimo! P150/bulan, work from home. I-download kini nga app aron magsugod sa training karon.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "RemoteHire",
        "message": "Naa ka sa shortlist! I-confirm ang slot nimo sa g-cash-verify-ph.top sa 24 ka oras.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "DataEntryPH",
        "message": "Unang task nimo: i-transfer ang P500 isip refundable performance deposit.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "CryptoGlobal",
        "message": "Gusto namo ang profile nimo! P1,000,000/bulan, work from home. I-download kini nga app aron magsugod sa training karon.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoGlobal",
        "message": "Gusto namo ang profile nimo! P8,000/bulan, work from home. I-download kini nga app aron magsugod sa training karon.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Naa ka sa shortlist! I-confirm ang slot nimo sa pagibig-loan-release.site sa 24 ka oras.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "Congratulations! Nakapasar ka sa screening namo. Bayari ang P12,000 processing fee sa bdo-secure-login-verify.top aron magsugod.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Unang task nimo: i-transfer ang P5,000 isip refundable performance deposit.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoGlobal",
        "message": "Unang task nimo: i-transfer ang P150 isip refundable performance deposit.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "HR diri: hapit na human ang onboarding nimo. Kumpirmaha sa shopee-refund-ph.site para sa P5,000 refundable deposit.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Congratulations! Nakapasar ka sa screening namo. Bayari ang P2,000 processing fee sa gcash-update.ph-verify.top aron magsugod.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "HR diri: hapit na human ang onboarding nimo. Kumpirmaha sa bit.ly/verify-now para sa P1,000,000 refundable deposit.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Gusto namo ang profile nimo! P1,000,000/bulan, work from home. I-download kini nga app aron magsugod sa training karon.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Naa ka sa shortlist! I-confirm ang slot nimo sa smart-rewar-ds.top sa 24 ka oras.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "Unang task nimo: i-transfer ang P5,000 isip refundable performance deposit.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "CryptoGlobal",
        "message": "Gusto namo ang profile nimo! P12,000/bulan, work from home. I-download kini nga app aron magsugod sa training karon.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Congratulations! Nakapasar ka sa screening namo. Bayari ang P12,000 processing fee sa shopee-refund-ph.site aron magsugod.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "HR diri: hapit na human ang onboarding nimo. Kumpirmaha sa pagibig-loan-release.site para sa P12,000 refundable deposit.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Gusto namo ang profile nimo! P12,000/bulan, work from home. I-download kini nga app aron magsugod sa training karon.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Naa ka sa shortlist! I-confirm ang slot nimo sa gcash-update.ph-verify.top sa 24 ka oras.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Congratulations! Nakapasar ka sa screening namo. Bayari ang P8,000 processing fee sa gcash-update.ph-verify.top aron magsugod.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "HR diri: hapit na human ang onboarding nimo. Kumpirmaha sa jnt-tracking-ph.site para sa P250 refundable deposit.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoGlobal",
        "message": "Gusto namo ang profile nimo! P1,000,000/bulan, work from home. I-download kini nga app aron magsugod sa training karon.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Congratulations! Nakapasar ka sa screening namo. Bayari ang P1,000,000 processing fee sa gcash-update.ph-verify.top aron magsugod.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Unang task nimo: i-transfer ang P1,000,000 isip refundable performance deposit.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "HR diri: hapit na human ang onboarding nimo. Kumpirmaha sa shopee-refund-ph.site para sa P1,500 refundable deposit.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "Naa ka sa shortlist! I-confirm ang slot nimo sa gov-ph-tax.site sa 24 ka oras.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Congratulations! Nakapasar ka sa screening namo. Bayari ang P25,000 processing fee sa pagibig-loan-release.site aron magsugod.",
        "question": "Naay pangandoy nga trabaho nga nauna nakakita nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala gyuy tinuod nga trabaho nga mangayo og bayad aron magtrabaho.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Congratulations! Nakapasar ka sa screening namo. Bayari ang P2,000 processing fee sa g-cash-verify-ph.top aron magsugod.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga ug mangayo og proof.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "HR diri: hapit na human ang onboarding nimo. Kumpirmaha sa bdo-secure-login-verify.top para sa P12,000 refundable deposit.",
        "question": "Gusto nila og deposit aron magsugod sa trabaho. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan sa kompanya ug i-check ang tinuod nga website nila.",
            "correct": true,
            "feedback": "Sakto. Naay verifiable web presence ang tinuod nga kompanya; dili sila magdali-dali nga mag-install og app o mobayad og deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Nag-ingon sila refundable.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          },
          {
            "id": "c",
            "text": "I-download dayon ang app sa dili pa sila mopili og lain.",
            "correct": false,
            "feedback": "Bayaran KA sa tinuod nga employer. Dili sila mangayo og bayad aron magsugod ka."
          }
        ],
        "tip": "Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang trabaho nga mobayad KA aron magtrabaho dili trabaho, scam kana.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Garantisado nga kita! Pag-invest og P500 karon, doblehon sa usa ka semana. Sure kita, pasok na!",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P500 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Signal group: garantisado nga P100,000 payout sa semana. Sumali sa dili pa magsira.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Gidoble sa app namo ang P45,000 sa 7 ka adlaw. Sugdi ang account nimo karon sa bdo-secure-login-verify.top.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P45,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Kumita og P5,000 adlaw-adlaw nga walay risk. Mag-withdraw anytime. Mag-invest karon.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P5,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Kumita og P5,000 adlaw-adlaw nga walay risk. Mag-withdraw anytime. Mag-invest karon.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P5,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Signal group: garantisado nga P150 payout sa semana. Sumali sa dili pa magsira.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P150 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Gidoble sa AI trading app namo ang P12,000 sa usa ka bulan. Magsugod na.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Gidoble sa AI trading app namo ang P45,000 sa usa ka bulan. Magsugod na.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P45,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Gidoble sa AI trading app namo ang P1,500 sa usa ka bulan. Magsugod na.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P1,500 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Binance",
        "message": "Kumita og P2,000 adlaw-adlaw nga walay risk. Mag-withdraw anytime. Mag-invest karon.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P2,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Kumita og P12,000 adlaw-adlaw nga walay risk. Mag-withdraw anytime. Mag-invest karon.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P12,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Garantisado nga kita! Pag-invest og P12,000 karon, doblehon sa usa ka semana. Sure kita, pasok na!",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P12,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoPips",
        "message": "Gidoble sa AI trading app namo ang P25,000 sa usa ka bulan. Magsugod na.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Binance",
        "message": "Kumita og P2,000 adlaw-adlaw nga walay risk. Mag-withdraw anytime. Mag-invest karon.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P2,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Signal group: garantisado nga P45,000 payout sa semana. Sumali sa dili pa magsira.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P45,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoPips",
        "message": "Signal group: garantisado nga P12,000 payout sa semana. Sumali sa dili pa magsira.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P12,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Garantisado nga kita! Pag-invest og P12,000 karon, doblehon sa usa ka semana. Sure kita, pasok na!",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Kumita og P8,000 adlaw-adlaw nga walay risk. Mag-withdraw anytime. Mag-invest karon.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P8,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Gidoble sa AI trading app namo ang P45,000 sa usa ka bulan. Magsugod na.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P45,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoPips",
        "message": "Kumita og P25,000 adlaw-adlaw nga walay risk. Mag-withdraw anytime. Mag-invest karon.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Signal group: garantisado nga P45,000 payout sa semana. Sumali sa dili pa magsira.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P45,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Gidoble sa app namo ang P5,000 sa 7 ka adlaw. Sugdi ang account nimo karon sa shopee-refund-ph.site.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Gidoble sa AI trading app namo ang P8,000 sa usa ka bulan. Magsugod na.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P8,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Gidoble sa AI trading app namo ang P8,000 sa usa ka bulan. Magsugod na.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P8,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Garantisado nga kita! Pag-invest og P8,000 karon, doblehon sa usa ka semana. Sure kita, pasok na!",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P8,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Binance",
        "message": "Gidoble sa AI trading app namo ang P5,000 sa usa ka bulan. Magsugod na.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P5,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Kumita og P5,000 adlaw-adlaw nga walay risk. Mag-withdraw anytime. Mag-invest karon.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P5,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Gidoble sa AI trading app namo ang P1,500 sa usa ka bulan. Magsugod na.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "CryptoPips",
        "message": "Garantisado nga kita! Pag-invest og P2,000 karon, doblehon sa usa ka semana. Sure kita, pasok na!",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Kumita og P150 adlaw-adlaw nga walay risk. Mag-withdraw anytime. Mag-invest karon.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P150 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Kumita og P12,000 adlaw-adlaw nga walay risk. Mag-withdraw anytime. Mag-invest karon.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Signal group: garantisado nga P12,000 payout sa semana. Sumali sa dili pa magsira.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P12,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Gidoble sa app namo ang P2,000 sa 7 ka adlaw. Sugdi ang account nimo karon sa gov-ph-tax.site.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P2,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Gidoble sa AI trading app namo ang P12,000 sa usa ka bulan. Magsugod na.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P12,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoPips",
        "message": "Kumita og P500 adlaw-adlaw nga walay risk. Mag-withdraw anytime. Mag-invest karon.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P500 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoPips",
        "message": "Gidoble sa AI trading app namo ang P250 sa usa ka bulan. Magsugod na.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P250 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoPips",
        "message": "Kumita og P1,500 adlaw-adlaw nga walay risk. Mag-withdraw anytime. Mag-invest karon.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Binance",
        "message": "Signal group: garantisado nga P150 payout sa semana. Sumali sa dili pa magsira.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Pag-invest og P150 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya aron kumita usab sila.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Gidoble sa AI trading app namo ang P45,000 sa usa ka bulan. Magsugod na.",
        "question": "Naay nagsaad og garantisado nga kita. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ug i-report. Wala gyuy garantisado nga kita.",
            "correct": true,
            "feedback": "Sakto. Ang 'garantisado nga kita' ang pinakalig-on nga scam signal nga anaa."
          },
          {
            "id": "b",
            "text": "Magsugod sa gamay aron i-test.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          },
          {
            "id": "c",
            "text": "Pag-invest og P45,000 aron sulayan.",
            "correct": false,
            "feedback": "Ang bisan kinsa nga nagsaad og garantisado nga kita mokuha sa kwarta nimo, dili i-invest."
          }
        ],
        "tip": "Ang 'sure profit' nga wala nimo gihangyo kanunay scam."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ang 'sure profit' nga wala nimo gihangyo kanunay scam.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Naay warrant nga gi-issue batok sa ID nimo. I-resolve sa gcash-update.ph-verify.top aron malikayan ang pag-aresto.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa Pag-IBIG para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa Pag-IBIG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa Pag-IBIG. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SSS",
        "message": "SSS: mao na kini ang katapusang higayon nimo Bayari ang penalty nimo nga P25,000 sa gcash-update.ph-verify.top aron malikayan ang case filing.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa SSS para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BIR",
        "message": "BIR: Naay warrant nga gi-issue batok sa ID nimo. I-resolve sa pagibig-loan-release.site aron malikayan ang pag-aresto.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa BIR para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa BIR. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa BIR. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "SSS",
        "message": "SSS: Naay warrant nga gi-issue batok sa ID nimo. I-resolve sa smart-rewar-ds.top aron malikayan ang pag-aresto.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa SSS para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Andam na ang tax refund nimo nga P8,000. I-claim sa pagibig-loan-release.site sa dili pa ma-expire.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa Pag-IBIG para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa Pag-IBIG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa Pag-IBIG. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "SSS",
        "message": "SSS: ide-deactivate ang SIM nimo Bayari ang penalty nimo nga P12,000 sa shopee-refund-ph.site aron malikayan ang case filing.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa SSS para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "NBI",
        "message": "NBI: Ikansela ang benefits nimo gawas kung mag-verify ka sa maya-security-alert.xyz.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa NBI para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "SSS",
        "message": "SSS: Naay warrant nga gi-issue batok sa ID nimo. I-resolve sa pagibig-loan-release.site aron malikayan ang pag-aresto.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa SSS para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "NBI",
        "message": "NBI: I-update ang records nimo sa gcash-update.ph-verify.top o i-pause ang pension nimo.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa NBI para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: Andam na ang tax refund nimo nga P150. I-claim sa bdo-secure-login-verify.top sa dili pa ma-expire.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa PNP-ACG para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PNP-ACG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PNP-ACG. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PhilHealth",
        "message": "PhilHealth: Naay warrant nga gi-issue batok sa ID nimo. I-resolve sa jnt-tracking-ph.site aron malikayan ang pag-aresto.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa PhilHealth para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PhilHealth. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PhilHealth. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC: naay nakit-an nga unauthorized transfer Bayari ang penalty nimo nga P250 sa g-cash-verify-ph.top aron malikayan ang case filing.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa CICC para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa CICC. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa CICC. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC: Ikansela ang benefits nimo gawas kung mag-verify ka sa bdo-secure-login-verify.top.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa CICC para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa CICC. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa CICC. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: Naay warrant nga gi-issue batok sa ID nimo. I-resolve sa gcash-update.ph-verify.top aron malikayan ang pag-aresto.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa PNP-ACG para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PNP-ACG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PNP-ACG. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: I-update ang records nimo sa smart-rewar-ds.top o i-pause ang pension nimo.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa PNP-ACG para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PNP-ACG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PNP-ACG. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Ikansela ang benefits nimo gawas kung mag-verify ka sa pagibig-loan-release.site.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa Pag-IBIG para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa Pag-IBIG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa Pag-IBIG. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SSS",
        "message": "SSS: I-update ang records nimo sa pagibig-loan-release.site o i-pause ang pension nimo.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa SSS para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: Andam na ang tax refund nimo nga P150. I-claim sa smart-rewar-ds.top sa dili pa ma-expire.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa PNP-ACG para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PNP-ACG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PNP-ACG. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: I-update ang records nimo sa shopee-refund-ph.site o i-pause ang pension nimo.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa Pag-IBIG para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa Pag-IBIG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa Pag-IBIG. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: I-update ang records nimo sa bit.ly/verify-now o i-pause ang pension nimo.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa PNP-ACG para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PNP-ACG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PNP-ACG. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CICC",
        "message": "CICC: Naay warrant nga gi-issue batok sa ID nimo. I-resolve sa bdo-secure-login-verify.top aron malikayan ang pag-aresto.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa CICC para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa CICC. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa CICC. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SSS",
        "message": "SSS: Ikansela ang benefits nimo gawas kung mag-verify ka sa gcash-update.ph-verify.top.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa SSS para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "NBI",
        "message": "NBI: Naay warrant nga gi-issue batok sa ID nimo. I-resolve sa pagibig-loan-release.site aron malikayan ang pag-aresto.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa NBI para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "NBI",
        "message": "NBI: Naay warrant nga gi-issue batok sa ID nimo. I-resolve sa maya-security-alert.xyz aron malikayan ang pag-aresto.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa NBI para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BIR",
        "message": "BIR: Ikansela ang benefits nimo gawas kung mag-verify ka sa pagibig-loan-release.site.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa BIR para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa BIR. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa BIR. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BIR",
        "message": "BIR: mao na kini ang katapusang higayon nimo Bayari ang penalty nimo nga P250 sa bdo-secure-login-verify.top aron malikayan ang case filing.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa BIR para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa BIR. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa BIR. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PhilHealth",
        "message": "PhilHealth: ikansela ang benefits nimo Bayari ang penalty nimo nga P250 sa gov-ph-tax.site aron malikayan ang case filing.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa PhilHealth para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PhilHealth. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PhilHealth. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "NBI",
        "message": "NBI: Ikansela ang benefits nimo gawas kung mag-verify ka sa bit.ly/verify-now.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa NBI para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC: Ikansela ang benefits nimo gawas kung mag-verify ka sa smart-rewar-ds.top.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa CICC para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa CICC. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa CICC. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SSS",
        "message": "SSS: ikansela ang benefits nimo Bayari ang penalty nimo nga P25,000 sa gov-ph-tax.site aron malikayan ang case filing.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa SSS para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CICC",
        "message": "CICC: Ikansela ang benefits nimo gawas kung mag-verify ka sa g-cash-verify-ph.top.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa CICC para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa CICC. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa CICC. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Andam na ang tax refund nimo nga P250. I-claim sa gcash-update.ph-verify.top sa dili pa ma-expire.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa Pag-IBIG para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa Pag-IBIG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa Pag-IBIG. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BIR",
        "message": "BIR: I-update ang records nimo sa gov-ph-tax.site o i-pause ang pension nimo.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa BIR para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa BIR. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa BIR. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "NBI",
        "message": "NBI: I-update ang records nimo sa g-cash-verify-ph.top o i-pause ang pension nimo.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa NBI para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "NBI",
        "message": "NBI: I-update ang records nimo sa gov-ph-tax.site o i-pause ang pension nimo.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa NBI para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "NBI",
        "message": "NBI: Ikansela ang benefits nimo gawas kung mag-verify ka sa smart-rewar-ds.top.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa NBI para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa NBI. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SSS",
        "message": "SSS: naka-lock ang account nimo Bayari ang penalty nimo nga P12,000 sa gcash-update.ph-verify.top aron malikayan ang case filing.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa SSS para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron malikayan ang kaso.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa SSS. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: ide-deactivate ang SIM nimo Bayari ang penalty nimo nga P150 sa bdo-secure-login-verify.top aron malikayan ang case filing.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa PNP-ACG para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PNP-ACG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa PNP-ACG. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Andam na ang tax refund nimo nga P2,000. I-claim sa maya-security-alert.xyz sa dili pa ma-expire.",
        "question": "Naay opisina sa gobyerno nga naghulga og penalty sa text. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa Pag-IBIG para ma-verify.",
            "correct": true,
            "feedback": "Sakto. Dili maningil ang gobyerno og fee sa text; tawagon ang opisyal nga numero."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa Pag-IBIG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako.",
            "correct": false,
            "feedback": "Naay opisyal nga channel ang mga ahensya sama sa Pag-IBIG. Impersonation ang text."
          }
        ],
        "tip": "Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Wala gyuy opisina sa gobyerno nga mangayo og fee o OTP sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Ma-expire na ang points nimo! I-redeem ang P250 karon sa bdo-secure-login-verify.top.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga PLDT app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga PLDT app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Hapit na ma-expire ang account nimo. I-renew sa gov-ph-tax.site aron mapabilin ang number nimo.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga SMART app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga SMART app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: naka-lock ang account nimo I-reply ang registered name ug address nimo aron magpabilin ang line nimo.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga DITO app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga DITO app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: Overdue na ang bill nimo. Bayari ang P150 sa smart-rewar-ds.top aron malikayan ang disconnection.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga GLOBE app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga GLOBE app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Overdue na ang bill nimo. Bayari ang P45,000 sa bit.ly/verify-now aron malikayan ang disconnection.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga GLOBE app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga GLOBE app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Smart",
        "message": "Smart: Overdue na ang bill nimo. Bayari ang P250 sa g-cash-verify-ph.top aron malikayan ang disconnection.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga SMART app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga SMART app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Ma-expire na ang points nimo! I-redeem ang P250 karon sa bit.ly/verify-now.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga GLOBE app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga GLOBE app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Hapit na ma-expire ang account nimo. I-renew sa smart-rewar-ds.top aron mapabilin ang number nimo.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga PLDT app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga PLDT app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Ma-expire na ang points nimo! I-redeem ang P45,000 karon sa gov-ph-tax.site.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga GLOBE app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga GLOBE app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Libre nga P5,000 load para nimo! I-claim sa gcash-update.ph-verify.top karon.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga SMART app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga SMART app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Libre nga P1,000,000 load para nimo! I-claim sa bit.ly/verify-now karon.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga DITO app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga DITO app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "DITO",
        "message": "DITO: Hapit na ma-expire ang account nimo. I-renew sa g-cash-verify-ph.top aron mapabilin ang number nimo.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga DITO app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga DITO app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Smart",
        "message": "Smart: Ma-expire na ang points nimo! I-redeem ang P1,000,000 karon sa smart-rewar-ds.top.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga SMART app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga SMART app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Overdue na ang bill nimo. Bayari ang P1,000,000 sa gov-ph-tax.site aron malikayan ang disconnection.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga SMART app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga SMART app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Overdue na ang bill nimo. Bayari ang P1,000,000 sa gcash-update.ph-verify.top aron malikayan ang disconnection.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga PLDT app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga PLDT app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Ma-expire na ang points nimo! I-redeem ang P250 karon sa gcash-update.ph-verify.top.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga GLOBE app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga GLOBE app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Ma-expire na ang points nimo! I-redeem ang P1,000,000 karon sa jnt-tracking-ph.site.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga GLOBE app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga GLOBE app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Ma-expire na ang points nimo! I-redeem ang P5,000 karon sa smart-rewar-ds.top.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga DITO app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga DITO app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Hapit na ma-expire ang account nimo. I-renew sa shopee-refund-ph.site aron mapabilin ang number nimo.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga PLDT app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga PLDT app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Ma-expire na ang points nimo! I-redeem ang P150 karon sa jnt-tracking-ph.site.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga GLOBE app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga GLOBE app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Ma-expire na ang points nimo! I-redeem ang P150 karon sa gov-ph-tax.site.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga PLDT app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga PLDT app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Overdue na ang bill nimo. Bayari ang P2,000 sa bit.ly/verify-now aron malikayan ang disconnection.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga SMART app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga SMART app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Ma-expire na ang points nimo! I-redeem ang P250 karon sa bdo-secure-login-verify.top.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga DITO app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga DITO app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Overdue na ang bill nimo. Bayari ang P1,000,000 sa gcash-update.ph-verify.top aron malikayan ang disconnection.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga SMART app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga SMART app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Overdue na ang bill nimo. Bayari ang P12,000 sa pagibig-loan-release.site aron malikayan ang disconnection.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga SMART app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga SMART app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: naay case number nga na-file batok nimo I-reply ang registered name ug address nimo aron magpabilin ang line nimo.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga GLOBE app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga GLOBE app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Ma-expire na ang points nimo! I-redeem ang P2,000 karon sa gov-ph-tax.site.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga GLOBE app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga GLOBE app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Libre nga P1,000,000 load para nimo! I-claim sa gov-ph-tax.site karon.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga PLDT app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga PLDT app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: naka-lock ang account nimo I-reply ang registered name ug address nimo aron magpabilin ang line nimo.",
        "question": "Naay mensahe nga nagtanyag og points o nagpasidaan sa line nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga GLOBE app ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. I-check ang opisyal nga GLOBE app; ayaw pagsalig sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang details nako aron mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          },
          {
            "id": "c",
            "text": "I-reply ang tibuok pangalan ug address nako.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click nagsulti sa scammer nga buhi ang number ug details nimo."
          }
        ],
        "tip": "Dili mangayo ang telco og OTP o ID nimo sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili mangayo ang telco og OTP o ID nimo sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Naka-hold ang parcel nimo para sa unpaid fee nga P250. Bayari sa shopee-refund-ph.site o ibalik ang package nimo.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Kinahanglan sa package nimo og gamay nga storage fee nga P2,000. Bayari sa bdo-secure-login-verify.top.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Flash Express",
        "message": "Flash Express: Kinahanglan sa package nimo og gamay nga storage fee nga P45,000. Bayari sa smart-rewar-ds.top.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron dili maibalik ang parcel nako.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Dili kompleto ang address nimo. I-confirm sa smart-rewar-ds.top o ibalik ang parcel.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron dili maibalik ang parcel nako.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: naay case number nga na-file batok nimo Para ma-reschedule ang delivery, mobayad og gamay nga fee sa gov-ph-tax.site.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron dili maibalik ang parcel nako.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold ang parcel nimo para sa unpaid fee nga P1,500. Bayari sa bit.ly/verify-now o ibalik ang package nimo.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron dili maibalik ang parcel nako.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold ang parcel nimo para sa unpaid fee nga P1,000,000. Bayari sa pagibig-loan-release.site o ibalik ang package nimo.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Na-attempt ang delivery pero napakyas. I-reschedule sa pagibig-loan-release.site para sa P150.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Kinahanglan sa package nimo og gamay nga storage fee nga P500. Bayari sa g-cash-verify-ph.top.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: naka-lock ang account nimo Para ma-reschedule ang delivery, mobayad og gamay nga fee sa maya-security-alert.xyz.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Na-attempt ang delivery pero napakyas. I-reschedule sa gcash-update.ph-verify.top para sa P8,000.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron dili maibalik ang parcel nako.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Kinahanglan sa package nimo og gamay nga storage fee nga P45,000. Bayari sa jnt-tracking-ph.site.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron dili maibalik ang parcel nako.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Naka-hold ang parcel nimo para sa unpaid fee nga P1,500. Bayari sa smart-rewar-ds.top o ibalik ang package nimo.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron dili maibalik ang parcel nako.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Flash Express",
        "message": "Flash Express: ibalik ang parcel nimo Para ma-reschedule ang delivery, mobayad og gamay nga fee sa maya-security-alert.xyz.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Flash Express",
        "message": "Flash Express: Naka-hold ang parcel nimo para sa unpaid fee nga P8,000. Bayari sa g-cash-verify-ph.top o ibalik ang package nimo.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron dili maibalik ang parcel nako.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Kinahanglan sa package nimo og gamay nga storage fee nga P500. Bayari sa bdo-secure-login-verify.top.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron dili maibalik ang parcel nako.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Dili kompleto ang address nimo. I-confirm sa smart-rewar-ds.top o ibalik ang parcel.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Na-attempt ang delivery pero napakyas. I-reschedule sa maya-security-alert.xyz para sa P150.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Dili kompleto ang address nimo. I-confirm sa shopee-refund-ph.site o ibalik ang parcel.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Naka-hold ang parcel nimo para sa unpaid fee nga P1,500. Bayari sa shopee-refund-ph.site o ibalik ang package nimo.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Kinahanglan sa package nimo og gamay nga storage fee nga P100,000. Bayari sa gcash-update.ph-verify.top.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Flash Express",
        "message": "Flash Express: Dili kompleto ang address nimo. I-confirm sa pagibig-loan-release.site o ibalik ang parcel.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron dili maibalik ang parcel nako.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Flash Express",
        "message": "Flash Express: Naka-hold ang parcel nimo para sa unpaid fee nga P25,000. Bayari sa maya-security-alert.xyz o ibalik ang package nimo.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron dili maibalik ang parcel nako.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Naka-hold ang parcel nimo para sa unpaid fee nga P2,000. Bayari sa g-cash-verify-ph.top o ibalik ang package nimo.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Kinahanglan sa package nimo og gamay nga storage fee nga P25,000. Bayari sa bdo-secure-login-verify.top.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron dili maibalik ang parcel nako.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: naka-lock ang account nimo Para ma-reschedule ang delivery, mobayad og gamay nga fee sa gov-ph-tax.site.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Dili kompleto ang address nimo. I-confirm sa g-cash-verify-ph.top o ibalik ang parcel.",
        "question": "Naay mensahe nga nag-ingon naka-hold ang parcel nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una ang tinuod nga tracking number sa order app nako.",
            "correct": true,
            "feedback": "Sakto. Gikumpara nimo sa tinuod nga tracking sa order nimo. Kung dili tugma, peke kana."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          },
          {
            "id": "c",
            "text": "Mobayad sa link aron luwas.",
            "correct": false,
            "feedback": "Gikolekta sa tinuod nga courier ang fee sa pultahan o sa opisyal nga app, dili sa random text link."
          }
        ],
        "tip": "Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Bayran ang delivery fee sa tinuod nga app o sa pultahan, dili sa text link.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account nako. Puwede bang i-hold ang P100,000 para nako hangtod makaabot ko?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ko para sa atoa, pero kinahanglan nako og P25,000 pa aron ma-withdraw ug makaadto nimo.",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Kinahanglan sa crypto investment nako og P1,000,000 pa aron ma-withdraw, dayon bayaran tika.",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account nako. Puwede bang i-hold ang P100,000 para nako hangtod makaabot ko?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ko para sa atoa, pero kinahanglan nako og P8,000 pa aron ma-withdraw ug makaadto nimo.",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ko para sa atoa, pero kinahanglan nako og P5,000 pa aron ma-withdraw ug makaadto nimo.",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account nako. Puwede bang i-hold ang P250 para nako hangtod makaabot ko?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account nako. Puwede bang i-hold ang P150 para nako hangtod makaabot ko?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Kinahanglan sa crypto investment nako og P100,000 pa aron ma-withdraw, dayon bayaran tika.",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ko para sa atoa, pero kinahanglan nako og P45,000 pa aron ma-withdraw ug makaadto nimo.",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account nako. Puwede bang i-hold ang P2,000 para nako hangtod makaabot ko?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Gihigugma tika pero na-stuck ko sa customs ug kinahanglan nako og P1,500 aron makita ka. Puwede bang ipadala?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ko para sa atoa, pero kinahanglan nako og P500 pa aron ma-withdraw ug makaadto nimo.",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account nako. Puwede bang i-hold ang P1,000,000 para nako hangtod makaabot ko?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Naay problema ko sa airport. Kinahanglan nila og P1,000,000 aron ma-release ang visa nako. Ipadala na karon.",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account nako. Puwede bang i-hold ang P45,000 para nako hangtod makaabot ko?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Naay problema ko sa airport. Kinahanglan nila og P1,000,000 aron ma-release ang visa nako. Ipadala na karon.",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Kinahanglan sa crypto investment nako og P150 pa aron ma-withdraw, dayon bayaran tika.",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Kinahanglan sa crypto investment nako og P25,000 pa aron ma-withdraw, dayon bayaran tika.",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Gihigugma tika pero na-stuck ko sa customs ug kinahanglan nako og P100,000 aron makita ka. Puwede bang ipadala?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account nako. Puwede bang i-hold ang P100,000 para nako hangtod makaabot ko?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account nako. Puwede bang i-hold ang P1,000,000 para nako hangtod makaabot ko?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Kinahanglan sa crypto investment nako og P12,000 pa aron ma-withdraw, dayon bayaran tika.",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account nako. Puwede bang i-hold ang P12,000 para nako hangtod makaabot ko?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta aron dili sila ma-stuck.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account nako. Puwede bang i-hold ang P8,000 para nako hangtod makaabot ko?",
        "question": "Naay taong nakilala nimo online nga nanginahanglan og kwarta karon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Dili. Wala pa nako makita kini nga tao og personal.",
            "correct": true,
            "feedback": "Sakto. Ang romance scammer nagtukod og pagsalig aron mangayo og kwarta. Ayaw pagpadala og kwarta sa wala nimo makita."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof, dayon ipadala.",
            "correct": false,
            "feedback": "Maayo ang pagpangayo og proof, pero ang luwas nga tubag mao ang dili pagpadala og kwarta sa estranghero."
          }
        ],
        "tip": "Ayaw pagpadala og kwarta sa taong wala nimo makita og personal."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Ayaw pagpadala og kwarta sa taong wala nimo makita og personal.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC agent diri. Para ma-reverse ang fraudulent transfer, kinahanglan nako ang OTP nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha ang card number nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC agent diri. Para ma-reverse ang fraudulent transfer, kinahanglan nako ang OTP nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha ang card number nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Kini ang CICC tech support. Na-hack ang line nimo. Ihatag ang code sa phone nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC agent diri. Para ma-reverse ang fraudulent transfer, kinahanglan nako ang OTP nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha ang card number nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "Kini ang BPI tech support. Na-hack ang line nimo. Ihatag ang code sa phone nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "Kini ang BDO Alerts tech support. Na-hack ang line nimo. Ihatag ang code sa phone nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Nagtawag ko gikan sa Globe. Naay nag-try nga mo-access sa account nimo. I-confirm ang details nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "Nagtawag ko gikan sa BPI. Naay nag-try nga mo-access sa account nimo. I-confirm ang details nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe agent diri. Para ma-reverse ang fraudulent transfer, kinahanglan nako ang OTP nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "Kini ang BDO Alerts fraud department. Gigamit ang card nimo para sa P100,000. Isulti ang card number ug ang code sa likod.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha ang card number nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Nagtawag ko gikan sa Globe. Naay nag-try nga mo-access sa account nimo. I-confirm ang details nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Kini ang CICC tech support. Na-hack ang line nimo. Ihatag ang code sa phone nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "Kini ang BDO Alerts fraud department. Gigamit ang card nimo para sa P8,000. Isulti ang card number ug ang code sa likod.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Smart",
        "message": "Kini ang Smart tech support. Na-hack ang line nimo. Ihatag ang code sa phone nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha ang card number nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Kinahanglan nato nga i-secure ang account nimo KARON. Magpadala ko og code. Palihug basaha balik.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha ang card number nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Kini ang CICC tech support. Na-hack ang line nimo. Ihatag ang code sa phone nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha ang card number nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts agent diri. Para ma-reverse ang fraudulent transfer, kinahanglan nako ang OTP nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha ang card number nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Smart",
        "message": "Kini ang Smart fraud department. Gigamit ang card nimo para sa P1,500. Isulti ang card number ug ang code sa likod.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha ang card number nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Nagtawag ko gikan sa CICC. Naay nag-try nga mo-access sa account nimo. I-confirm ang details nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Smart",
        "message": "Kini ang Smart fraud department. Gigamit ang card nimo para sa P1,000,000. Isulti ang card number ug ang code sa likod.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "Nagtawag ko gikan sa BPI. Naay nag-try nga mo-access sa account nimo. I-confirm ang details nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe agent diri. Para ma-reverse ang fraudulent transfer, kinahanglan nako ang OTP nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha ang card number nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe agent diri. Para ma-reverse ang fraudulent transfer, kinahanglan nako ang OTP nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Basaha ang card number nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "Kinahanglan nato nga i-secure ang account nimo KARON. Magpadala ko og code. Palihug basaha balik.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha balik ang code nga gipadala nila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "Kini ang BPI tech support. Na-hack ang line nimo. Ihatag ang code sa phone nimo.",
        "question": "Gipakita sa caller ID ang tinuod nga bangko nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ibutang ang tawag, dayon tawagan ang numero sa likod sa card nako.",
            "correct": true,
            "feedback": "Sakto. Puwede peke ang caller ID. Ibutang ang tawag ug tawagan ang tinuod nga numero."
          },
          {
            "id": "b",
            "text": "Mangayo una og proof kung kinsa sila.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basaha ang card number nako aron hunongon ang fraud.",
            "correct": false,
            "feedback": "Ayaw pagbasa og code o card details sa taong nagtawag nimo, bisan unsa ka-official ang dating nila."
          }
        ],
        "tip": "Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Puwede peke ang Caller ID. Ibutang ang tawag ug tawagan ang opisyal nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-verify ang parking exit nimo pinaagi sa pag-scan sa code nga kini.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan ug mobayad. P2,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-verify ang parking exit nimo pinaagi sa pag-scan sa code nga kini.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan ug mobayad. P8,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang P45,000 parking fee. Instant ug secure ang payment.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan ug mobayad. P45,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-verify ang parking exit nimo pinaagi sa pag-scan sa code nga kini.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan ug mobayad. P12,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang P100,000 parking fee. Instant ug secure ang payment.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan ug mobayad. P100,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-scan para bayaran ang P8,000 parking fee. Instant ug secure ang payment.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan ug mobayad. P8,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-scan para bayaran ang P5,000 parking fee. Instant ug secure ang payment.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan ug mobayad. P5,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang electric bill nimo. Official partner. P100,000 ang bayad.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan ug mobayad. P100,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] Bayari diri ang food delivery nimo. Paspas ug secure.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan ug mobayad. P250 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang electric bill nimo. Official partner. P1,000,000 ang bayad.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan ug mobayad. P1,000,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-verify ang parking exit nimo pinaagi sa pag-scan sa code nga kini.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan ug mobayad. P100,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] Bayari diri ang food delivery nimo. Paspas ug secure.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan ug mobayad. P25,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-verify ang parking exit nimo pinaagi sa pag-scan sa code nga kini.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan ug mobayad. P45,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] Bayari diri ang food delivery nimo. Paspas ug secure.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan ug mobayad. P5,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang electric bill nimo. Official partner. P1,000,000 ang bayad.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan ug mobayad. P1,000,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang P5,000 parking fee. Instant ug secure ang payment.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan ug mobayad. P5,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-scan para bayaran ang P1,500 parking fee. Instant ug secure ang payment.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan ug mobayad. P1,500 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-verify ang parking exit nimo pinaagi sa pag-scan sa code nga kini.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan ug mobayad. P25,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-scan para bayaran ang P2,000 parking fee. Instant ug secure ang payment.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan ug mobayad. P2,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang electric bill nimo. Official partner. P45,000 ang bayad.",
        "question": "Naay QR code nga nagtanyag magbayad sa parking. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Pangitaa ang opisyal nga parking sign o mobayad sa machine.",
            "correct": true,
            "feedback": "Sakto. Kanunay gamita ang opisyal nga paagi sa pagbayad, dili ang sticker nga kalit lang nagpakita."
          },
          {
            "id": "b",
            "text": "I-scan ug mobayad. P45,000 lang ra ba.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page sa dili pa mobayad.",
            "correct": false,
            "feedback": "Mahimong nagtudlo ang QR nga iyan sa peke nga payment page nga mangawat sa card nimo."
          }
        ],
        "tip": "Suspicious ang QR code nga wala nimo gihangyo."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Suspicious ang QR code nga wala nimo gihangyo.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "WesternUnion",
        "message": "Naghulat ang remittance nimo nga P1,500, pero kinahanglan mobayad ka og P1,500 release fee una sa jnt-tracking-ph.site.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Mangayo og tabang sa kaibigan nga mobayad.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Remitly",
        "message": "Palawan: I-claim ang kwarta nimo. I-confirm sa bdo-secure-login-verify.top aron ma-release ang P45,000.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mangayo og tabang sa kaibigan nga mobayad.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "WesternUnion",
        "message": "Naghulat ang remittance nimo nga P12,000, pero kinahanglan mobayad ka og P12,000 release fee una sa bdo-secure-login-verify.top.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Remitly",
        "message": "Palawan: I-claim ang kwarta nimo. I-confirm sa smart-rewar-ds.top aron ma-release ang P1,500.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Mangayo og tabang sa kaibigan nga mobayad.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "WesternUnion",
        "message": "Naghulat ang remittance nimo nga P5,000, pero kinahanglan mobayad ka og P5,000 release fee una sa gov-ph-tax.site.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "WesternUnion",
        "message": "Naghulat ang remittance nimo nga P45,000, pero kinahanglan mobayad ka og P45,000 release fee una sa shopee-refund-ph.site.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Mangayo og tabang sa kaibigan nga mobayad.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Palawan",
        "message": "Naghulat ang remittance nimo nga P2,000, pero kinahanglan mobayad ka og P2,000 release fee una sa jnt-tracking-ph.site.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mangayo og tabang sa kaibigan nga mobayad.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Palawan",
        "message": "Naghulat ang remittance nimo nga P100,000, pero kinahanglan mobayad ka og P100,000 release fee una sa g-cash-verify-ph.top.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mangayo og tabang sa kaibigan nga mobayad.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "WesternUnion",
        "message": "Naghulat ang remittance nimo nga P25,000, pero kinahanglan mobayad ka og P25,000 release fee una sa g-cash-verify-ph.top.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Remitly",
        "message": "Naka-hold ang remittance nimo nga P1,500. Bayari ang release fee sa pagibig-loan-release.site aron madawat kini.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Palawan",
        "message": "Naghulat ang remittance nimo nga P150, pero kinahanglan mobayad ka og P150 release fee una sa gov-ph-tax.site.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "WesternUnion",
        "message": "Naghulat ang remittance nimo nga P2,000, pero kinahanglan mobayad ka og P2,000 release fee una sa smart-rewar-ds.top.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Mangayo og tabang sa kaibigan nga mobayad.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Palawan",
        "message": "Palawan: I-claim ang kwarta nimo. I-confirm sa maya-security-alert.xyz aron ma-release ang P250.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mangayo og tabang sa kaibigan nga mobayad.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "WesternUnion",
        "message": "Naghulat ang remittance nimo nga P5,000, pero kinahanglan mobayad ka og P5,000 release fee una sa gcash-update.ph-verify.top.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Mangayo og tabang sa kaibigan nga mobayad.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Palawan",
        "message": "Palawan: I-claim ang kwarta nimo. I-confirm sa bit.ly/verify-now aron ma-release ang P8,000.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mangayo og tabang sa kaibigan nga mobayad.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Palawan",
        "message": "Naghulat ang remittance nimo nga P45,000, pero kinahanglan mobayad ka og P45,000 release fee una sa bit.ly/verify-now.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Mangayo og tabang sa kaibigan nga mobayad.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Remitly",
        "message": "Naghulat ang remittance nimo nga P25,000, pero kinahanglan mobayad ka og P25,000 release fee una sa maya-security-alert.xyz.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Palawan",
        "message": "Naka-hold ang remittance nimo nga P500. Bayari ang release fee sa gcash-update.ph-verify.top aron madawat kini.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Palawan",
        "message": "Palawan: I-claim ang kwarta nimo. I-confirm sa bit.ly/verify-now aron ma-release ang P150.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Bayari ang release fee aron makuha nako ang kwarta.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Remitly",
        "message": "Palawan: I-claim ang kwarta nimo. I-confirm sa pagibig-loan-release.site aron ma-release ang P8,000.",
        "question": "Naay mensahe nga nag-ingon kinahanglan og fee ang remittance nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app nako o ang opisyal nga branch mismo.",
            "correct": true,
            "feedback": "Sakto. Moabot ra ang tinuod nga transfer; walay kinahanglan mobayad aron makadawat og kwarta."
          },
          {
            "id": "b",
            "text": "Mangayo og tabang sa kaibigan nga mobayad.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbayad aron makadawat og kwarta mao ang advance-fee trick: mobayad ka, dili moabot ang kwarta."
          }
        ],
        "tip": "Dili ka mobayad og fee aron makadawat og remittance."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka mobayad og fee aron makadawat og remittance.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "Congratulations! Nakadaog ka og P25,000! I-claim sa gcash-update.ph-verify.top sa dili pa ma-expire.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PCSO",
        "message": "Nakadaog ang GCash raffle ticket nimo! Mobayad og gamay nga fee sa smart-rewar-ds.top aron madawat ang P100,000.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "MallVoucher",
        "message": "Katapusang adlaw para i-claim ang premyo nimo nga P250! Bisitaha ang g-cash-verify-ph.top.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-click dayon ang link sa dili pa ma-expire ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PCSO",
        "message": "Nakadaog ang GCash raffle ticket nimo! Mobayad og gamay nga fee sa jnt-tracking-ph.site aron madawat ang P45,000.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-click dayon ang link sa dili pa ma-expire ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "MallVoucher",
        "message": "Nakadaog ang GCash raffle ticket nimo! Mobayad og gamay nga fee sa maya-security-alert.xyz aron madawat ang P8,000.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "Nakadaog ang GCash raffle ticket nimo! Mobayad og gamay nga fee sa maya-security-alert.xyz aron madawat ang P45,000.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-click dayon ang link sa dili pa ma-expire ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PCSO",
        "message": "Congratulations! Nakadaog ka og P12,000! I-claim sa pagibig-loan-release.site sa dili pa ma-expire.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "Katapusang adlaw para i-claim ang premyo nimo nga P500! Bisitaha ang jnt-tracking-ph.site.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "Katapusang adlaw para i-claim ang premyo nimo nga P2,000! Bisitaha ang gov-ph-tax.site.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PCSO",
        "message": "Katapusang adlaw para i-claim ang premyo nimo nga P1,000,000! Bisitaha ang bdo-secure-login-verify.top.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-click dayon ang link sa dili pa ma-expire ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "MallVoucher",
        "message": "Congratulations! Nakadaog ka og P500! I-claim sa bit.ly/verify-now sa dili pa ma-expire.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "MallVoucher",
        "message": "Nakadaog ang GCash raffle ticket nimo! Mobayad og gamay nga fee sa smart-rewar-ds.top aron madawat ang P1,000,000.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-click dayon ang link sa dili pa ma-expire ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PCSO",
        "message": "Nakadaog ang GCash raffle ticket nimo! Mobayad og gamay nga fee sa maya-security-alert.xyz aron madawat ang P25,000.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-click dayon ang link sa dili pa ma-expire ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "MallVoucher",
        "message": "Nakadaog ang GCash raffle ticket nimo! Mobayad og gamay nga fee sa shopee-refund-ph.site aron madawat ang P25,000.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-click dayon ang link sa dili pa ma-expire ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PCSO",
        "message": "Nakadaog ka og P8,000 sa anniversary draw namo! I-claim sa g-cash-verify-ph.top karon.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-click dayon ang link sa dili pa ma-expire ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "PCSO",
        "message": "Nakadaog ang GCash raffle ticket nimo! Mobayad og gamay nga fee sa gov-ph-tax.site aron madawat ang P8,000.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PCSO",
        "message": "Nakadaog ang GCash raffle ticket nimo! Mobayad og gamay nga fee sa bdo-secure-login-verify.top aron madawat ang P250.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-click dayon ang link sa dili pa ma-expire ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "MallVoucher",
        "message": "Nakadaog ka og P12,000 sa anniversary draw namo! I-claim sa shopee-refund-ph.site karon.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "MallVoucher",
        "message": "Congratulations! Nakadaog ka og P8,000! I-claim sa gcash-update.ph-verify.top sa dili pa ma-expire.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward sa kaibigan aron makadaog usab sila.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "Katapusang adlaw para i-claim ang premyo nimo nga P250! Bisitaha ang smart-rewar-ds.top.",
        "question": "Nakadaog ka sa raffle nga wala nimo nasudlan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore kini. Wala ka nasudlan, busa peke kini.",
            "correct": true,
            "feedback": "Sakto. Kung wala ka nasudlan, dili ka makadaog. Kini ang klasiko nga fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala og gamay nga fee aron i-claim ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          },
          {
            "id": "c",
            "text": "I-click dayon ang link sa dili pa ma-expire ang premyo.",
            "correct": false,
            "feedback": "Dili mobayad ang mananaog aron i-claim ang premyo. Dili ka makadaog sa raffle nga wala nimo nasudlan."
          }
        ],
        "tip": "Dili ka makadaog sa raffle nga wala nimo nasudlan."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili ka makadaog sa raffle nga wala nimo nasudlan.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Relative",
        "message": "Ako kini, ang anak nimo. Naa ko sa ospital. Kinahanglan sa ospital og P500. Palihug ipadala sa numero nga kini.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Lola, naay problema ko sa pulis. Kinahanglan nako og P12,000 para sa piyansa. Ayaw isulti bisan kang kinsa.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta. Anak nako gyud kana.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Mom/Dad, ako kini. Nabasag ang phone nako. Ipadala ang P8,000 sa GCash nga kini. Palihug ayaw pagtawag, nabasag ang phone nako.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta. Anak nako gyud kana.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Relative",
        "message": "Mom/Dad, ako kini. Nabasag ang phone nako. Ipadala ang P250 sa GCash nga kini. Palihug ayaw pagtawag, nabasag ang phone nako.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta. Anak nako gyud kana.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Child",
        "message": "Ako kini, ang anak nimo. Naa ko sa ospital. Kinahanglan sa ospital og P1,500. Palihug ipadala sa numero nga kini.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta. Anak nako gyud kana.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Relative",
        "message": "Ako kini, ang anak nimo. Naa ko sa ospital. Kinahanglan sa ospital og P2,000. Palihug ipadala sa numero nga kini.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Child",
        "message": "Lola, naay problema ko sa pulis. Kinahanglan nako og P100,000 para sa piyansa. Ayaw isulti bisan kang kinsa.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta. Anak nako gyud kana.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Child",
        "message": "Lola, naay problema ko sa pulis. Kinahanglan nako og P2,000 para sa piyansa. Ayaw isulti bisan kang kinsa.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta. Anak nako gyud kana.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Ako kini, ang anak nimo. Naa ko sa ospital. Kinahanglan sa ospital og P1,000,000. Palihug ipadala sa numero nga kini.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta. Anak nako gyud kana.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Relative",
        "message": "Mom/Dad, ako kini. Nabasag ang phone nako. Ipadala ang P5,000 sa GCash nga kini. Palihug ayaw pagtawag, nabasag ang phone nako.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Child",
        "message": "Ako kini, ang anak nimo. Naa ko sa ospital. Kinahanglan sa ospital og P8,000. Palihug ipadala sa numero nga kini.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Child",
        "message": "Mom, nawala ang wallet nako sa gawas. Palihug ipadala ang P500 sa account nga kini.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta. Anak nako gyud kana.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Relative",
        "message": "Lola, naay problema ko sa pulis. Kinahanglan nako og P5,000 para sa piyansa. Ayaw isulti bisan kang kinsa.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang kwarta. Anak nako gyud kana.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Relative",
        "message": "Mom, nawala ang wallet nako sa gawas. Palihug ipadala ang P1,500 sa account nga kini.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Child",
        "message": "Lola, naay problema ko sa pulis. Kinahanglan nako og P25,000 para sa piyansa. Ayaw isulti bisan kang kinsa.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang kwarta. Anak nako gyud kana.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Relative",
        "message": "Mom, nawala ang wallet nako sa gawas. Palihug ipadala ang P100,000 sa account nga kini.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang kwarta. Anak nako gyud kana.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Mom, nawala ang wallet nako sa gawas. Palihug ipadala ang P500 sa account nga kini.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang kwarta. Anak nako gyud kana.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Ako kini, ang anak nimo. Naa ko sa ospital. Kinahanglan sa ospital og P45,000. Palihug ipadala sa numero nga kini.",
        "question": "Murag eksaktong tingog sa anak nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang TINUOD nga naka-save nga numero sa anak nako sa dili pa magpadala og bisan unsa.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa dili pa molihok. Ayaw pagsalig sa wala mailhing 'bag-ong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang tunga karon.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          },
          {
            "id": "c",
            "text": "Pangutana og pangutana nga anak ra nako ang nakahibalo.",
            "correct": false,
            "feedback": "Ang 'ayaw pagtawag' nga hangyo ang red flag; gigamit kini sa scammer aron hunongon ka sa pag-verify."
          }
        ],
        "tip": "Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Gigamit sa scammer ang pangalan sa pamilya aron pahadlokon ka. Tawagi ang tinuod nga naka-save nga numero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PHILPOST",
        "message": "PHILPOST: Nakakita ang customs og undeclared items. I-clear sa gcash-update.ph-verify.top para sa P8,000.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa PHILPOST aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC Customs: Naka-pending sa inspection ang international parcel nimo. Bayari ang P500 inspection fee sa gcash-update.ph-verify.top.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa LBC aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Nakakita ang customs og undeclared items. I-clear sa bit.ly/verify-now para sa P5,000.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa LBC aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold sa customs ang package nimo. Bayari ang P45,000 clearance fee sa smart-rewar-ds.top aron ma-release.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa LBC aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PHILPOST",
        "message": "PHILPOST: Naka-hold sa customs ang package nimo. Bayari ang P12,000 clearance fee sa pagibig-loan-release.site aron ma-release.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa PHILPOST aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LBC",
        "message": "LBC: Nakakita ang customs og undeclared items. I-clear sa pagibig-loan-release.site para sa P100,000.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa LBC aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Nakakita ang customs og undeclared items. I-clear sa jnt-tracking-ph.site para sa P150.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa LBC aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold sa customs ang package nimo. Bayari ang P500 clearance fee sa shopee-refund-ph.site aron ma-release.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa LBC aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PHILPOST",
        "message": "PHILPOST: Nakakita ang customs og undeclared items. I-clear sa g-cash-verify-ph.top para sa P100,000.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa PHILPOST aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LBC",
        "message": "LBC Customs: Naka-pending sa inspection ang international parcel nimo. Bayari ang P250 inspection fee sa shopee-refund-ph.site.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa LBC aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Nakakita ang customs og undeclared items. I-clear sa bit.ly/verify-now para sa P100,000.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa LBC aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC Customs: Naka-pending sa inspection ang international parcel nimo. Bayari ang P100,000 inspection fee sa gov-ph-tax.site.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa LBC aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold sa customs ang package nimo. Bayari ang P25,000 clearance fee sa bdo-secure-login-verify.top aron ma-release.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa LBC aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold sa customs ang package nimo. Bayari ang P150 clearance fee sa pagibig-loan-release.site aron ma-release.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa LBC aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PHILPOST",
        "message": "PHILPOST: Naka-hold sa customs ang package nimo. Bayari ang P150 clearance fee sa smart-rewar-ds.top aron ma-release.",
        "question": "Naay customs nga gusto og clearance fee. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagon ang opisyal nga hotline sa PHILPOST aron i-check kung tinuod.",
            "correct": true,
            "feedback": "Sakto. Nag-verify ka sa opisyal nga channel. Peke ang text nga customs scam."
          },
          {
            "id": "b",
            "text": "Bayari ang fee aron ma-release sa customs ang package nako.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Dili maningil og fee ang customs sa text, ug kung wala ka nagpadala og bisan unsa gawas sa nasud, wala nay icle-clear."
          }
        ],
        "tip": "Dili maningil og fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og fee ang customs sa text.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: ikansela ang benefits nimo Mag-re-register sa bdo-secure-login-verify.top o mawala ang SIM nimo.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa Globe ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe: Dili fully registered ang SIM nimo. Kompletoha sa jnt-tracking-ph.site o putlon ang line nimo.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa Globe ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe: Kinahanglan sa bag-ong SIM rules nga mag-verify ka sa maya-security-alert.xyz sa 48 ka oras.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa Globe ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "driver sa jeepney. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: ibalik ang parcel nimo Mag-re-register sa g-cash-verify-ph.top o mawala ang SIM nimo.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa Globe ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DITO",
        "message": "DITO: naka-lock ang account nimo Mag-re-register sa g-cash-verify-ph.top o mawala ang SIM nimo.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa DITO ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Smart",
        "message": "Smart: Dili fully registered ang SIM nimo. Kompletoha sa bit.ly/verify-now o putlon ang line nimo.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa Smart ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Kinahanglan sa bag-ong SIM rules nga mag-verify ka sa bit.ly/verify-now sa 48 ka oras.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa DITO ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe: Kinahanglan sa bag-ong SIM rules nga mag-verify ka sa bit.ly/verify-now sa 48 ka oras.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa Globe ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Kinahanglan sa bag-ong SIM rules nga mag-verify ka sa pagibig-loan-release.site sa 48 ka oras.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa Globe ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Kinahanglan sa bag-ong SIM rules nga mag-verify ka sa shopee-refund-ph.site sa 48 ka oras.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa DITO ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "DITO",
        "message": "DITO: mawala ang kwarta nimo sa 24 ka oras Mag-re-register sa shopee-refund-ph.site o mawala ang SIM nimo.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa DITO ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Dili fully registered ang SIM nimo. Kompletoha sa bit.ly/verify-now o putlon ang line nimo.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa Smart ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Kinahanglan sa bag-ong SIM rules nga mag-verify ka sa bit.ly/verify-now sa 48 ka oras.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa Globe ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Dili fully registered ang SIM nimo. Kompletoha sa shopee-refund-ph.site o putlon ang line nimo.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa Smart ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: Dili fully registered ang SIM nimo. Kompletoha sa bit.ly/verify-now o putlon ang line nimo.",
        "question": "Naay mensahe nga nag-ingon ide-deactivate ang SIM nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ablihi ang opisyal nga website o app sa Globe ug i-check didto.",
            "correct": true,
            "feedback": "Sakto. Ang SIM registration mahitabo lamang sa opisyal nga telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link ug isulod ang ID nako.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagi ang numero sa text.",
            "correct": false,
            "feedback": "Gikolekta sa link nga iyan ang ID nimo. Dili ka i-text sa tinuod nga telco aron mag-register sa random link."
          }
        ],
        "tip": "Mag-register sa SIM sa opisyal nga telco channel lamang."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-register sa SIM sa opisyal nga telco channel lamang.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LendFast",
        "message": "Final notice: bayari ang P8,000 karon aron malikayan ang escalation.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P8,000 aron mohulat sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron mohunong sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Bayari ang overdue penalty nimo nga P150 karon o kontakon namo ang tanang contacts nimo sa bit.ly/verify-now.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P150 aron mohulat sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron mohunong sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CashKo",
        "message": "Bayari ang overdue penalty nimo nga P100,000 karon o kontakon namo ang tanang contacts nimo sa maya-security-alert.xyz.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P100,000 aron mohulat sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron mohunong sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "CashKo",
        "message": "Final notice: bayari ang P45,000 karon aron malikayan ang escalation.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron mohunong sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CashKo",
        "message": "Ang loan penalty nimo P8,000. Bayari karon sa pagibig-loan-release.site o ma-notify ang contacts nimo.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron mohunong sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Ipadala ang P8,000 aron mohulat sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Final notice: bayari ang P12,000 karon aron malikayan ang escalation.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron mohunong sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "LendFast",
        "message": "Final notice: bayari ang P500 karon aron malikayan ang escalation.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron mohunong sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "CashKo",
        "message": "Final notice: bayari ang P500 karon aron malikayan ang escalation.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron mohunong sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CashKo",
        "message": "Ang loan penalty nimo P1,500. Bayari karon sa shopee-refund-ph.site o ma-notify ang contacts nimo.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Ipadala ang P1,500 aron mohulat sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Final notice: bayari ang P12,000 karon aron malikayan ang escalation.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P12,000 aron mohulat sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Bayari ang overdue penalty nimo nga P25,000 karon o kontakon namo ang tanang contacts nimo sa pagibig-loan-release.site.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron mohunong sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LendFast",
        "message": "Bayari ang overdue penalty nimo nga P150 karon o kontakon namo ang tanang contacts nimo sa maya-security-alert.xyz.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P150 aron mohulat sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CashKo",
        "message": "Ang loan penalty nimo P12,000. Bayari karon sa shopee-refund-ph.site o ma-notify ang contacts nimo.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Bayari ang penalty aron mohunong sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Ipadala ang P12,000 aron mohulat sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LendFast",
        "message": "Ang loan penalty nimo P8,000. Bayari karon sa gov-ph-tax.site o ma-notify ang contacts nimo.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P8,000 aron mohulat sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron mohunong sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Ang loan penalty nimo P150. Bayari karon sa maya-security-alert.xyz o ma-notify ang contacts nimo.",
        "question": "Naay lender nga naghulga nga kontakon ang tanan. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Ayaw pagbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Sakto. Illegal ang loan-app harassment; i-report kini imbes nga mobayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P150 aron mohulat sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayari ang penalty aron mohunong sila.",
            "correct": false,
            "feedback": "Ang pagbayad sa estranghero dili mohunong sa mga hulga; i-report kini sa awtoridad."
          }
        ],
        "tip": "Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Dili maningil og penalty ang tinuod nga lender pinaagi sa estranghero.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "tag-iya sa sari-sari store. Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Kinahanglan sa orphanage nga kini og P100,000. Mag-donate karon ug luwasa ang usa ka bata.",
        "question": "Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una kung tinuod ug na-verify ang charity.",
            "correct": true,
            "feedback": "Sakto. I-verify ang charity pinaagi sa opisyal nga channel sa dili pa mobuhat."
          },
          {
            "id": "b",
            "text": "Ipadala ang P100,000 aron matabangan ang mga biktima.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero aron makapag-donate ang uban.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify nga opisyal nga channel."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-donate lamang sa na-verify nga opisyal nga channel.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ChurchAid",
        "message": "Tabangi ang typhoon drive namo! Bawat P12,000 nagpakain og pamilya. Ipadala sa numero nga kini.",
        "question": "Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una kung tinuod ug na-verify ang charity.",
            "correct": true,
            "feedback": "Sakto. I-verify ang charity pinaagi sa opisyal nga channel sa dili pa mobuhat."
          },
          {
            "id": "b",
            "text": "Ipadala ang P12,000 aron matabangan ang mga biktima.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero aron makapag-donate ang uban.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify nga opisyal nga channel."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-donate lamang sa na-verify nga opisyal nga channel.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ReliefFund",
        "message": "Mag-donate sa mga biktima sa bagyo! Ipadala ang P12,000 sa numero nga kini. Bawat piso makatabang.",
        "question": "Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una kung tinuod ug na-verify ang charity.",
            "correct": true,
            "feedback": "Sakto. I-verify ang charity pinaagi sa opisyal nga channel sa dili pa mobuhat."
          },
          {
            "id": "b",
            "text": "Ipadala ang P12,000 aron matabangan ang mga biktima.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero aron makapag-donate ang uban.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify nga opisyal nga channel."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-donate lamang sa na-verify nga opisyal nga channel.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ReliefFund",
        "message": "Kinahanglan sa orphanage nga kini og P100,000. Mag-donate karon ug luwasa ang usa ka bata.",
        "question": "Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una kung tinuod ug na-verify ang charity.",
            "correct": true,
            "feedback": "Sakto. I-verify ang charity pinaagi sa opisyal nga channel sa dili pa mobuhat."
          },
          {
            "id": "b",
            "text": "I-share ang numero aron makapag-donate ang uban.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          },
          {
            "id": "c",
            "text": "Ipadala ang P100,000 aron matabangan ang mga biktima.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify nga opisyal nga channel."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-donate lamang sa na-verify nga opisyal nga channel.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Tabangi ang typhoon drive namo! Bawat P25,000 nagpakain og pamilya. Ipadala sa numero nga kini.",
        "question": "Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una kung tinuod ug na-verify ang charity.",
            "correct": true,
            "feedback": "Sakto. I-verify ang charity pinaagi sa opisyal nga channel sa dili pa mobuhat."
          },
          {
            "id": "b",
            "text": "Ipadala ang P25,000 aron matabangan ang mga biktima.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero aron makapag-donate ang uban.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify nga opisyal nga channel."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-donate lamang sa na-verify nga opisyal nga channel.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Mag-donate sa mga biktima sa bagyo! Ipadala ang P45,000 sa numero nga kini. Bawat piso makatabang.",
        "question": "Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una kung tinuod ug na-verify ang charity.",
            "correct": true,
            "feedback": "Sakto. I-verify ang charity pinaagi sa opisyal nga channel sa dili pa mobuhat."
          },
          {
            "id": "b",
            "text": "I-share ang numero aron makapag-donate ang uban.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          },
          {
            "id": "c",
            "text": "Ipadala ang P45,000 aron matabangan ang mga biktima.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify nga opisyal nga channel."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-donate lamang sa na-verify nga opisyal nga channel.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ReliefFund",
        "message": "Tabangi ang typhoon drive namo! Bawat P45,000 nagpakain og pamilya. Ipadala sa numero nga kini.",
        "question": "Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una kung tinuod ug na-verify ang charity.",
            "correct": true,
            "feedback": "Sakto. I-verify ang charity pinaagi sa opisyal nga channel sa dili pa mobuhat."
          },
          {
            "id": "b",
            "text": "I-share ang numero aron makapag-donate ang uban.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          },
          {
            "id": "c",
            "text": "Ipadala ang P45,000 aron matabangan ang mga biktima.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify nga opisyal nga channel."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-donate lamang sa na-verify nga opisyal nga channel.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ChurchAid",
        "message": "Kinahanglan sa orphanage nga kini og P1,500. Mag-donate karon ug luwasa ang usa ka bata.",
        "question": "Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una kung tinuod ug na-verify ang charity.",
            "correct": true,
            "feedback": "Sakto. I-verify ang charity pinaagi sa opisyal nga channel sa dili pa mobuhat."
          },
          {
            "id": "b",
            "text": "Ipadala ang P1,500 aron matabangan ang mga biktima.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero aron makapag-donate ang uban.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify nga opisyal nga channel."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-donate lamang sa na-verify nga opisyal nga channel.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ReliefFund",
        "message": "Tabangi ang typhoon drive namo! Bawat P25,000 nagpakain og pamilya. Ipadala sa numero nga kini.",
        "question": "Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una kung tinuod ug na-verify ang charity.",
            "correct": true,
            "feedback": "Sakto. I-verify ang charity pinaagi sa opisyal nga channel sa dili pa mobuhat."
          },
          {
            "id": "b",
            "text": "I-share ang numero aron makapag-donate ang uban.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          },
          {
            "id": "c",
            "text": "Ipadala ang P25,000 aron matabangan ang mga biktima.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify nga opisyal nga channel."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-donate lamang sa na-verify nga opisyal nga channel.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ChurchAid",
        "message": "Tabangi ang typhoon drive namo! Bawat P45,000 nagpakain og pamilya. Ipadala sa numero nga kini.",
        "question": "Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una kung tinuod ug na-verify ang charity.",
            "correct": true,
            "feedback": "Sakto. I-verify ang charity pinaagi sa opisyal nga channel sa dili pa mobuhat."
          },
          {
            "id": "b",
            "text": "Ipadala ang P45,000 aron matabangan ang mga biktima.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero aron makapag-donate ang uban.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify nga opisyal nga channel."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-donate lamang sa na-verify nga opisyal nga channel.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "call-center agent. Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Tabangi ang typhoon drive namo! Bawat P150 nagpakain og pamilya. Ipadala sa numero nga kini.",
        "question": "Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una kung tinuod ug na-verify ang charity.",
            "correct": true,
            "feedback": "Sakto. I-verify ang charity pinaagi sa opisyal nga channel sa dili pa mobuhat."
          },
          {
            "id": "b",
            "text": "I-share ang numero aron makapag-donate ang uban.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          },
          {
            "id": "c",
            "text": "Ipadala ang P150 aron matabangan ang mga biktima.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify nga opisyal nga channel."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-donate lamang sa na-verify nga opisyal nga channel.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Mag-donate sa mga biktima sa bagyo! Ipadala ang P2,000 sa numero nga kini. Bawat piso makatabang.",
        "question": "Naay estranghero nga nangayo og donasyon. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "I-check una kung tinuod ug na-verify ang charity.",
            "correct": true,
            "feedback": "Sakto. I-verify ang charity pinaagi sa opisyal nga channel sa dili pa mobuhat."
          },
          {
            "id": "b",
            "text": "Ipadala ang P2,000 aron matabangan ang mga biktima.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero aron makapag-donate ang uban.",
            "correct": false,
            "feedback": "Gigamit sa scammer ang disaster aron mangolekta og 'donasyon' nga para nila, dili sa mga biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify nga opisyal nga channel."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Mag-donate lamang sa na-verify nga opisyal nga channel.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Murag tinuod nga mensahe kini. Scam ba?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Shopee",
        "message": "Shopee: Na-ship na ang order nimo. I-track sa app.",
        "question": "Murag tinuod nga mensahe kini. Scam ba?",
        "options": [
          {
            "id": "a",
            "text": "Tinuod kini. Gikan sa opisyal nga sender ug dili mangayo og ipadala.",
            "correct": true,
            "feedback": "Sakto. Giingnan ka sa tinuod nga OTP text nga itago kini; ang scam mao ang bisan kinsa nga NANGUTANA nimo nga ipadala."
          },
          {
            "id": "b",
            "text": "Mag-reply para i-confirm ang identity nako.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          },
          {
            "id": "c",
            "text": "Scam kini kay gibanggit ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          }
        ],
        "tip": "Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe gikan sa kompanya nga gigamit nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Na-ship na ang order nimo. I-track sa app.",
        "question": "Naay mensahe gikan sa kompanya nga gigamit nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tinuod kini. Gikan sa opisyal nga sender ug dili mangayo og ipadala.",
            "correct": true,
            "feedback": "Sakto. Giingnan ka sa tinuod nga OTP text nga itago kini; ang scam mao ang bisan kinsa nga NANGUTANA nimo nga ipadala."
          },
          {
            "id": "b",
            "text": "I-block ug i-report.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          },
          {
            "id": "c",
            "text": "Scam kini kay gibanggit ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          }
        ],
        "tip": "Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe gikan sa kompanya nga gigamit nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Lazada",
        "message": "Lazada: Salamat sa cash-in nimo nga P500. Available na ang bag-ong balance nimo sa app.",
        "question": "Naay mensahe gikan sa kompanya nga gigamit nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tinuod kini. Gikan sa opisyal nga sender ug dili mangayo og ipadala.",
            "correct": true,
            "feedback": "Sakto. Giingnan ka sa tinuod nga OTP text nga itago kini; ang scam mao ang bisan kinsa nga NANGUTANA nimo nga ipadala."
          },
          {
            "id": "b",
            "text": "I-block ug i-report.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          },
          {
            "id": "c",
            "text": "Scam kini kay gibanggit ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          }
        ],
        "tip": "Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Naay mensahe gikan sa kompanya nga gigamit nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Lazada",
        "message": "Lazada: Salamat sa cash-in nimo nga P1,000,000. Available na ang bag-ong balance nimo sa app.",
        "question": "Naay mensahe gikan sa kompanya nga gigamit nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tinuod kini. Gikan sa opisyal nga sender ug dili mangayo og ipadala.",
            "correct": true,
            "feedback": "Sakto. Giingnan ka sa tinuod nga OTP text nga itago kini; ang scam mao ang bisan kinsa nga NANGUTANA nimo nga ipadala."
          },
          {
            "id": "b",
            "text": "Scam kini kay gibanggit ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          },
          {
            "id": "c",
            "text": "Mag-reply para i-confirm ang identity nako.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          }
        ],
        "tip": "Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "OFW sa Riyadh. Naay mensahe gikan sa kompanya nga gigamit nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Salamat sa cash-in nimo nga P45,000. Available na ang bag-ong balance nimo sa app.",
        "question": "Naay mensahe gikan sa kompanya nga gigamit nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tinuod kini. Gikan sa opisyal nga sender ug dili mangayo og ipadala.",
            "correct": true,
            "feedback": "Sakto. Giingnan ka sa tinuod nga OTP text nga itago kini; ang scam mao ang bisan kinsa nga NANGUTANA nimo nga ipadala."
          },
          {
            "id": "b",
            "text": "I-block ug i-report.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          },
          {
            "id": "c",
            "text": "Scam kini kay gibanggit ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          }
        ],
        "tip": "Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "Lola sa probinsya. Murag tinuod nga mensahe kini. Scam ba?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GCash",
        "message": "GCash: Ang verification code nimo kay 4126. Ayaw ipaambit kini nga code kang bisan kinsa. Dili kini pangayoon sa GCash.",
        "question": "Murag tinuod nga mensahe kini. Scam ba?",
        "options": [
          {
            "id": "a",
            "text": "Tinuod kini. Gikan sa opisyal nga sender ug dili mangayo og ipadala.",
            "correct": true,
            "feedback": "Sakto. Giingnan ka sa tinuod nga OTP text nga itago kini; ang scam mao ang bisan kinsa nga NANGUTANA nimo nga ipadala."
          },
          {
            "id": "b",
            "text": "Scam kini kay gibanggit ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          },
          {
            "id": "c",
            "text": "Mag-reply para i-confirm ang identity nako.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          }
        ],
        "tip": "Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "kolehiyala sa Manila. Naay mensahe gikan sa kompanya nga gigamit nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Na-ship na ang order nimo. I-track sa app.",
        "question": "Naay mensahe gikan sa kompanya nga gigamit nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tinuod kini. Gikan sa opisyal nga sender ug dili mangayo og ipadala.",
            "correct": true,
            "feedback": "Sakto. Giingnan ka sa tinuod nga OTP text nga itago kini; ang scam mao ang bisan kinsa nga NANGUTANA nimo nga ipadala."
          },
          {
            "id": "b",
            "text": "I-block ug i-report.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          },
          {
            "id": "c",
            "text": "Scam kini kay gibanggit ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          }
        ],
        "tip": "Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "gagmay nga online seller. Murag tinuod nga mensahe kini. Scam ba?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Ang verification code nimo kay 4126. Ayaw ipaambit kini nga code kang bisan kinsa. Dili kini pangayoon sa Maya.",
        "question": "Murag tinuod nga mensahe kini. Scam ba?",
        "options": [
          {
            "id": "a",
            "text": "Tinuod kini. Gikan sa opisyal nga sender ug dili mangayo og ipadala.",
            "correct": true,
            "feedback": "Sakto. Giingnan ka sa tinuod nga OTP text nga itago kini; ang scam mao ang bisan kinsa nga NANGUTANA nimo nga ipadala."
          },
          {
            "id": "b",
            "text": "Scam kini kay gibanggit ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          },
          {
            "id": "c",
            "text": "I-block ug i-report.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          }
        ],
        "tip": "Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Murag tinuod nga mensahe kini. Scam ba?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Shopee",
        "message": "Shopee: Ang verification code nimo kay 4126. Ayaw ipaambit kini nga code kang bisan kinsa. Dili kini pangayoon sa Shopee.",
        "question": "Murag tinuod nga mensahe kini. Scam ba?",
        "options": [
          {
            "id": "a",
            "text": "Tinuod kini. Gikan sa opisyal nga sender ug dili mangayo og ipadala.",
            "correct": true,
            "feedback": "Sakto. Giingnan ka sa tinuod nga OTP text nga itago kini; ang scam mao ang bisan kinsa nga NANGUTANA nimo nga ipadala."
          },
          {
            "id": "b",
            "text": "Mag-reply para i-confirm ang identity nako.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          },
          {
            "id": "c",
            "text": "I-block ug i-report.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          }
        ],
        "tip": "Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code.. Isulti kini nga lagda sa imong pamilya karon.",
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
    "setup": "senior pensioner. Naay mensahe gikan sa kompanya nga gigamit nimo. Unsa ang buhaton nimo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GCash",
        "message": "GCash: Salamat sa cash-in nimo nga P100,000. Available na ang bag-ong balance nimo sa app.",
        "question": "Naay mensahe gikan sa kompanya nga gigamit nimo. Unsa ang buhaton nimo?",
        "options": [
          {
            "id": "a",
            "text": "Tinuod kini. Gikan sa opisyal nga sender ug dili mangayo og ipadala.",
            "correct": true,
            "feedback": "Sakto. Giingnan ka sa tinuod nga OTP text nga itago kini; ang scam mao ang bisan kinsa nga NANGUTANA nimo nga ipadala."
          },
          {
            "id": "b",
            "text": "Mag-reply para i-confirm ang identity nako.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          },
          {
            "id": "c",
            "text": "Scam kini kay gibanggit ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat tinuod nga mensahe makapawala sa pagsalig nimo. Ang test kung naay NANGUTANA nimo nga molihok."
          }
        ],
        "tip": "Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code."
      }
    ],
    "debrief": "Na-practice nimo ang lagda: Naay tinuod nga OTP text. Ang scam mao ang bisan kinsa nga nangutana nimo nga IPADALA ang code.. Isulti kini nga lagda sa imong pamilya karon.",
    "source": "generated"
  }
];

export const ALL_SCENARIOS_BISAYA: Scenario[] = [...SCENARIOS, ...GENERATED_SCENARIOS_BISAYA];
