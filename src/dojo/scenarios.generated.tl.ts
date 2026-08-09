// AUTO-GENERATED - TAGALOG - do not edit by hand. Regenerate: npx tsx scripts/generate-scenarios.ts
import { Scenario } from "./scenarios";

export const ALL_SCENARIOS_TAGALOG: Scenario[] = [
  {
    "id": "ewallet-easy-000",
    "title": "ewallet drill 0",
    "icon": "ShieldCheck",
    "difficulty": "easy",
    "family": "ewallet",
    "archetype": "redirect",
    "category": "ewallet",
    "setup": "call-center agent. May mensaheng nagsasabing naka-lock ang account mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Mag-e-expire ang MPIN mo ngayon. I-update ito sa gov-ph-tax.site para magamit pa ang wallet mo.",
        "question": "May mensaheng nagsasabing naka-lock ang account mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GOTYME. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GOTYME. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa maya-security-alert.xyz o ilo-lock ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nagsasabing ikakansela ang benefits mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: May papasok na transfer na P250! Magbayad muna ng maliit na release fee para matanggap ito.",
        "question": "May mensaheng nagsasabing ikakansela ang benefits mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Mag-e-expire ang MPIN mo ngayon. I-update ito sa bit.ly/verify-now para magamit pa ang wallet mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nagsasabing naka-lock ang account mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa g-cash-verify-ph.top sa loob ng 24 oras.",
        "question": "May mensaheng nagsasabing naka-lock ang account mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GCASH. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GCASH. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing ibabalik ang parcel mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay Alerto: ibabalik ang parcel mo. I-verify sa smart-rewar-ds.top o masususpend ang account mo.",
        "question": "May mensaheng nagsasabing ibabalik ang parcel mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Mag-e-expire ang MPIN mo ngayon. I-update ito sa jnt-tracking-ph.site para magamit pa ang wallet mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing may na-file na case number laban sa iyo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Mag-e-expire ang MPIN mo ngayon. I-update ito sa g-cash-verify-ph.top para magamit pa ang wallet mo.",
        "question": "May mensaheng nagsasabing may na-file na case number laban sa iyo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nagsasabing may nakitang unauthorized transfer at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: May papasok na transfer na P100,000! Magbayad muna ng maliit na release fee para matanggap ito.",
        "question": "May mensaheng nagsasabing may nakitang unauthorized transfer at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash Alerto: may na-file na case number laban sa iyo. I-verify sa bdo-secure-login-verify.top o masususpend ang account mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GCASH. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GCASH. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme: May papasok na transfer na P100,000! Magbayad muna ng maliit na release fee para matanggap ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa bit.ly/verify-now sa loob ng 24 oras.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: ide-deactivate ang SIM mo I-reply ang OTP mo ngayon para ma-reactivate, o mawawala ang pera mo sa loob ng 24 oras.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong MAYA. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong MAYA. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa shopee-refund-ph.site sa loob ng 24 oras.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GCASH. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GCASH. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: ibabalik ang parcel mo I-reply ang OTP mo ngayon para ma-reactivate, o mawawala ang pera mo sa loob ng 24 oras.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Mag-e-expire ang MPIN mo ngayon. I-update ito sa shopee-refund-ph.site para magamit pa ang wallet mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GOTYME. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GOTYME. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nagsasabing ide-deactivate ang SIM mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa gov-ph-tax.site sa loob ng 24 oras.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GCASH. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GCASH. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nagsasabing may na-file na case number laban sa iyo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay Alerto: may na-file na case number laban sa iyo. I-verify sa shopee-refund-ph.site o masususpend ang account mo.",
        "question": "May mensaheng nagsasabing may na-file na case number laban sa iyo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Mag-e-expire ang MPIN mo ngayon. I-update ito sa g-cash-verify-ph.top para magamit pa ang wallet mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: May papasok na transfer na P100,000! Magbayad muna ng maliit na release fee para matanggap ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na GCash hotline 2882."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme Alerto: may nakitang unauthorized transfer. I-verify sa g-cash-verify-ph.top o masususpend ang account mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GOTYME. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GOTYME. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa gov-ph-tax.site o ilo-lock ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Mag-e-expire ang MPIN mo ngayon. I-update ito sa jnt-tracking-ph.site para magamit pa ang wallet mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GOTYME. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GOTYME. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay Alerto: naka-lock ang account mo. I-verify sa maya-security-alert.xyz o masususpend ang account mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Maya",
        "message": "Maya: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa jnt-tracking-ph.site sa loob ng 24 oras.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong MAYA. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong MAYA. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing mawawala ang pera mo sa loob ng 24 oras at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa smart-rewar-ds.top sa loob ng 24 oras.",
        "question": "May mensaheng nagsasabing mawawala ang pera mo sa loob ng 24 oras at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nagsasabing ito na ang huling pagkakataon mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme Alerto: ito na ang huling pagkakataon mo. I-verify sa gov-ph-tax.site o masususpend ang account mo.",
        "question": "May mensaheng nagsasabing ito na ang huling pagkakataon mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May mensaheng nagsasabing mawawala ang pera mo sa loob ng 24 oras at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Maya",
        "message": "Maya: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa bit.ly/verify-now sa loob ng 24 oras.",
        "question": "May mensaheng nagsasabing mawawala ang pera mo sa loob ng 24 oras at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Mag-e-expire ang MPIN mo ngayon. I-update ito sa g-cash-verify-ph.top para magamit pa ang wallet mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nagsasabing may na-file na case number laban sa iyo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Maya",
        "message": "Maya: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa maya-security-alert.xyz sa loob ng 24 oras.",
        "question": "May mensaheng nagsasabing may na-file na case number laban sa iyo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing ide-deactivate ang SIM mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: May papasok na transfer na P150! Magbayad muna ng maliit na release fee para matanggap ito.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May mensaheng nagsasabing ibabalik ang parcel mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa pagibig-loan-release.site o ilo-lock ito.",
        "question": "May mensaheng nagsasabing ibabalik ang parcel mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: May papasok na transfer na P5,000! Magbayad muna ng maliit na release fee para matanggap ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nagsasabing mawawala ang pera mo sa loob ng 24 oras at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa smart-rewar-ds.top o ilo-lock ito.",
        "question": "May mensaheng nagsasabing mawawala ang pera mo sa loob ng 24 oras at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GOTYME. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GOTYME. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing naka-lock ang account mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa shopee-refund-ph.site sa loob ng 24 oras.",
        "question": "May mensaheng nagsasabing naka-lock ang account mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing may na-file na case number laban sa iyo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa smart-rewar-ds.top sa loob ng 24 oras.",
        "question": "May mensaheng nagsasabing may na-file na case number laban sa iyo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: May papasok na transfer na P150! Magbayad muna ng maliit na release fee para matanggap ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa bdo-secure-login-verify.top o ilo-lock ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na GCash hotline 2882."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa gcash-update.ph-verify.top o ilo-lock ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nagsasabing ikakansela ang benefits mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Mag-e-expire ang MPIN mo ngayon. I-update ito sa gov-ph-tax.site para magamit pa ang wallet mo.",
        "question": "May mensaheng nagsasabing ikakansela ang benefits mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nagsasabing ide-deactivate ang SIM mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GoTyme",
        "message": "GoTyme Alerto: ide-deactivate ang SIM mo. I-verify sa gov-ph-tax.site o masususpend ang account mo.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa pagibig-loan-release.site o ilo-lock ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GCASH. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GCASH. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: ibabalik ang parcel mo I-reply ang OTP mo ngayon para ma-reactivate, o mawawala ang pera mo sa loob ng 24 oras.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing mawawala ang pera mo sa loob ng 24 oras at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GCash",
        "message": "GCash: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa jnt-tracking-ph.site o ilo-lock ito.",
        "question": "May mensaheng nagsasabing mawawala ang pera mo sa loob ng 24 oras at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na GCash hotline 2882."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing ibabalik ang parcel mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa bdo-secure-login-verify.top sa loob ng 24 oras.",
        "question": "May mensaheng nagsasabing ibabalik ang parcel mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing may nakitang unauthorized transfer at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GCash",
        "message": "GCash Alerto: may nakitang unauthorized transfer. I-verify sa pagibig-loan-release.site o masususpend ang account mo.",
        "question": "May mensaheng nagsasabing may nakitang unauthorized transfer at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nagsasabing ito na ang huling pagkakataon mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Mag-e-expire ang MPIN mo ngayon. I-update ito sa pagibig-loan-release.site para magamit pa ang wallet mo.",
        "question": "May mensaheng nagsasabing ito na ang huling pagkakataon mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing naka-lock ang account mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: May papasok na transfer na P500! Magbayad muna ng maliit na release fee para matanggap ito.",
        "question": "May mensaheng nagsasabing naka-lock ang account mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na GCash hotline 2882."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nagsasabing may na-file na case number laban sa iyo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GCash",
        "message": "GCash: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa g-cash-verify-ph.top o ilo-lock ito.",
        "question": "May mensaheng nagsasabing may na-file na case number laban sa iyo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Maya",
        "message": "Maya: Mag-e-expire ang MPIN mo ngayon. I-update ito sa bdo-secure-login-verify.top para magamit pa ang wallet mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong MAYA. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong MAYA. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa smart-rewar-ds.top sa loob ng 24 oras.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: May papasok na transfer na P12,000! Magbayad muna ng maliit na release fee para matanggap ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Maya",
        "message": "Maya: Error sa double refund! Para i-correct, kumpirmahin ang account mo sa gcash-update.ph-verify.top sa loob ng 24 oras.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nagsasabing may na-file na case number laban sa iyo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Mag-e-expire ang MPIN mo ngayon. I-update ito sa gcash-update.ph-verify.top para magamit pa ang wallet mo.",
        "question": "May mensaheng nagsasabing may na-file na case number laban sa iyo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na Maya hotline *788."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa shopee-refund-ph.site o ilo-lock ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing ibabalik ang parcel mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: ibabalik ang parcel mo I-reply ang OTP mo ngayon para ma-reactivate, o mawawala ang pera mo sa loob ng 24 oras.",
        "question": "May mensaheng nagsasabing ibabalik ang parcel mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa bit.ly/verify-now o ilo-lock ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Maya",
        "message": "Maya: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa bdo-secure-login-verify.top o ilo-lock ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong MAYA. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong MAYA. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nagsasabing ide-deactivate ang SIM mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa shopee-refund-ph.site o ilo-lock ito.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong SHOPEEPAY. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GCash",
        "message": "GCash: mawawala ang pera mo sa loob ng 24 oras I-reply ang OTP mo ngayon para ma-reactivate, o mawawala ang pera mo sa loob ng 24 oras.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Mag-e-expire ang MPIN mo ngayon. I-update ito sa bdo-secure-login-verify.top para magamit pa ang wallet mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na GCash hotline 2882."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "GoTyme",
        "message": "GoTyme: ikakansela ang benefits mo I-reply ang OTP mo ngayon para ma-reactivate, o mawawala ang pera mo sa loob ng 24 oras.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing ito na ang huling pagkakataon mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash: Mag-e-expire ang MPIN mo ngayon. I-update ito sa gcash-update.ph-verify.top para magamit pa ang wallet mo.",
        "question": "May mensaheng nagsasabing ito na ang huling pagkakataon mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GCASH. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong GCASH. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "ShopeePay",
        "message": "ShopeePay Alerto: ito na ang huling pagkakataon mo. I-verify sa shopee-refund-ph.site o masususpend ang account mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong SHOPEEPAY app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong SHOPEEPAY app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing may nakitang unauthorized transfer at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GoTyme",
        "message": "GoTyme: may nakitang unauthorized transfer I-reply ang OTP mo ngayon para ma-reactivate, o mawawala ang pera mo sa loob ng 24 oras.",
        "question": "May mensaheng nagsasabing may nakitang unauthorized transfer at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "GCash Alerto: ito na ang huling pagkakataon mo. I-verify sa pagibig-loan-release.site o masususpend ang account mo.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na GCash hotline 2882."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na GCash hotline 2882."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa maya-security-alert.xyz o ilo-lock ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme: Nakita namin ang kahina-hinalang login sa account mo. I-verify ngayon sa gcash-update.ph-verify.top o ilo-lock ito.",
        "question": "May text na sabi dapat kumilos ka agad. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Ang numero na iyan ay sa scammer. Gamitin lamang ang opisyal na the official hotline."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing may nakitang unauthorized transfer at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GoTyme",
        "message": "GoTyme Alerto: may nakitang unauthorized transfer. I-verify sa g-cash-verify-ph.top o masususpend ang account mo.",
        "question": "May mensaheng nagsasabing may nakitang unauthorized transfer at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GOTYME app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GOTYME app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "I-reply ang OTP agad para ligtas ang pera ko.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing ikakansela ang benefits mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "GCash: Mag-e-expire ang MPIN mo ngayon. I-update ito sa bit.ly/verify-now para magamit pa ang wallet mo.",
        "question": "May mensaheng nagsasabing ikakansela ang benefits mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong GCASH app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong GCASH app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Kung magbabayad ka para makatanggap ng pera, scam iyan."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nagsasabing ito na ang huling pagkakataon mo at humihingi ng OTP. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya Alerto: ito na ang huling pagkakataon mo. I-verify sa bdo-secure-login-verify.top o masususpend ang account mo.",
        "question": "May mensaheng nagsasabing ito na ang huling pagkakataon mo at humihingi ng OTP. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang totoong MAYA app at i-check ang account ko.",
            "correct": true,
            "feedback": "Tama. In-check mo ang totoong MAYA app imbes na maniwala sa text. Ang account mo ang source of truth, hindi ang mensahe."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text para ma-verify.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong MAYA. Ang mensaheng iyan ang scam."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para matanggap ko ang transfer.",
            "correct": false,
            "feedback": "Hindi humihingi ng OTP ang totoong MAYA. Ang mensaheng iyan ang scam."
          }
        ],
        "tip": "Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Lihim ang OTP. HINDI hihingi ng OTP ang totoong kumpanya.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "RCBC",
        "message": "RCBC Fraud Dept: may nakitang unauthorized transfer na P1,000,000. I-reply ang card details mo para ma-reverse.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "LandBank",
        "message": "LandBank Fraud Dept: may nakitang unauthorized transfer na P45,000. I-reply ang card details mo para ma-reverse.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LandBank",
        "message": "LandBank: Naka-hold ang account mo para sa review. I-kumpirma ang identity mo sa smart-rewar-ds.top para maibalik ang access.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Security Bank",
        "message": "Security Bank Fraud Dept: may nakitang unauthorized transfer na P2,000. I-reply ang card details mo para ma-reverse.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNB",
        "message": "PNB: ito na ang huling pagkakataon mo. I-click ang jnt-tracking-ph.site para i-verify ang identity mo ngayon.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNB",
        "message": "PNB Fraud Dept: may nakitang unauthorized transfer na P1,500. I-reply ang card details mo para ma-reverse.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank: Isasara ang card mo dahil sa inactivity. I-reactivate sa smart-rewar-ds.top.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: may nakitang unauthorized transfer na P100,000. I-reply ang card details mo para ma-reverse.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: may nakitang unauthorized transfer na P500. I-reply ang card details mo para ma-reverse.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Security Bank",
        "message": "Security Bank Security: May bagong device na nag-try mag-login. I-approve o i-decline sa g-cash-verify-ph.top.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Metrobank",
        "message": "Metrobank: Naka-hold ang account mo para sa review. I-kumpirma ang identity mo sa pagibig-loan-release.site para maibalik ang access.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BPI",
        "message": "BPI: mawawala ang pera mo sa loob ng 24 oras. I-click ang smart-rewar-ds.top para i-verify ang identity mo ngayon.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "RCBC",
        "message": "RCBC: ide-deactivate ang SIM mo. I-click ang g-cash-verify-ph.top para i-verify ang identity mo ngayon.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LandBank",
        "message": "LandBank: Isasara ang card mo dahil sa inactivity. I-reactivate sa bit.ly/verify-now.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: may nakitang unauthorized transfer na P500. I-reply ang card details mo para ma-reverse.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LandBank",
        "message": "LandBank Fraud Dept: may nakitang unauthorized transfer na P2,000. I-reply ang card details mo para ma-reverse.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "UnionBank",
        "message": "UnionBank: ikakansela ang benefits mo. I-click ang bdo-secure-login-verify.top para i-verify ang identity mo ngayon.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Metrobank",
        "message": "Metrobank Security: May bagong device na nag-try mag-login. I-approve o i-decline sa pagibig-loan-release.site.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LandBank",
        "message": "LandBank Security: May bagong device na nag-try mag-login. I-approve o i-decline sa g-cash-verify-ph.top.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts Security: May bagong device na nag-try mag-login. I-approve o i-decline sa jnt-tracking-ph.site.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "UnionBank",
        "message": "UnionBank: may nakitang unauthorized transfer. I-click ang maya-security-alert.xyz para i-verify ang identity mo ngayon.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PNB",
        "message": "PNB: Isasara ang card mo dahil sa inactivity. I-reactivate sa g-cash-verify-ph.top.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: Naka-hold ang account mo para sa review. I-kumpirma ang identity mo sa shopee-refund-ph.site para maibalik ang access.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Metrobank",
        "message": "Metrobank: Isasara ang card mo dahil sa inactivity. I-reactivate sa jnt-tracking-ph.site.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts Security: May bagong device na nag-try mag-login. I-approve o i-decline sa gov-ph-tax.site.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Security Bank",
        "message": "Security Bank Fraud Dept: may nakitang unauthorized transfer na P12,000. I-reply ang card details mo para ma-reverse.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RCBC",
        "message": "RCBC: Naka-hold ang account mo para sa review. I-kumpirma ang identity mo sa shopee-refund-ph.site para maibalik ang access.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Metrobank",
        "message": "Metrobank Security: May bagong device na nag-try mag-login. I-approve o i-decline sa smart-rewar-ds.top.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "RCBC",
        "message": "RCBC: Naka-hold ang account mo para sa review. I-kumpirma ang identity mo sa bdo-secure-login-verify.top para maibalik ang access.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "UnionBank",
        "message": "UnionBank: may nakitang unauthorized transfer. I-click ang bit.ly/verify-now para i-verify ang identity mo ngayon.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Metrobank",
        "message": "Metrobank: Isasara ang card mo dahil sa inactivity. I-reactivate sa gcash-update.ph-verify.top.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LandBank",
        "message": "LandBank Security: May bagong device na nag-try mag-login. I-approve o i-decline sa bit.ly/verify-now.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LandBank",
        "message": "LandBank Security: May bagong device na nag-try mag-login. I-approve o i-decline sa maya-security-alert.xyz.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNB",
        "message": "PNB Fraud Dept: may nakitang unauthorized transfer na P100,000. I-reply ang card details mo para ma-reverse.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Security Bank",
        "message": "Security Bank: ito na ang huling pagkakataon mo. I-click ang gov-ph-tax.site para i-verify ang identity mo ngayon.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "UnionBank",
        "message": "UnionBank: Isasara ang card mo dahil sa inactivity. I-reactivate sa pagibig-loan-release.site.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "BPI Fraud Dept: may nakitang unauthorized transfer na P150. I-reply ang card details mo para ma-reverse.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: Isasara ang card mo dahil sa inactivity. I-reactivate sa gov-ph-tax.site.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "LandBank",
        "message": "LandBank: Naka-hold ang account mo para sa review. I-kumpirma ang identity mo sa g-cash-verify-ph.top para maibalik ang access.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: may nakitang unauthorized transfer na P250. I-reply ang card details mo para ma-reverse.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: Isasara ang card mo dahil sa inactivity. I-reactivate sa shopee-refund-ph.site.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: ide-deactivate ang SIM mo. I-click ang shopee-refund-ph.site para i-verify ang identity mo ngayon.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank: Naka-hold ang account mo para sa review. I-kumpirma ang identity mo sa bdo-secure-login-verify.top para maibalik ang access.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Security Bank",
        "message": "Security Bank Security: May bagong device na nag-try mag-login. I-approve o i-decline sa pagibig-loan-release.site.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank: Isasara ang card mo dahil sa inactivity. I-reactivate sa pagibig-loan-release.site.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "BPI",
        "message": "BPI: naka-lock ang account mo. I-click ang gcash-update.ph-verify.top para i-verify ang identity mo ngayon.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: may nakitang unauthorized transfer na P12,000. I-reply ang card details mo para ma-reverse.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RCBC",
        "message": "RCBC Security: May bagong device na nag-try mag-login. I-approve o i-decline sa gcash-update.ph-verify.top.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RCBC",
        "message": "RCBC: ito na ang huling pagkakataon mo. I-click ang jnt-tracking-ph.site para i-verify ang identity mo ngayon.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "UnionBank",
        "message": "UnionBank Fraud Dept: may nakitang unauthorized transfer na P1,000,000. I-reply ang card details mo para ma-reverse.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your UnionBank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BPI",
        "message": "BPI Fraud Dept: may nakitang unauthorized transfer na P45,000. I-reply ang card details mo para ma-reverse.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Security Bank",
        "message": "Security Bank: Naka-hold ang account mo para sa review. I-kumpirma ang identity mo sa jnt-tracking-ph.site para maibalik ang access.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNB",
        "message": "PNB Security: May bagong device na nag-try mag-login. I-approve o i-decline sa g-cash-verify-ph.top.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RCBC",
        "message": "RCBC Security: May bagong device na nag-try mag-login. I-approve o i-decline sa bit.ly/verify-now.",
        "question": "May email na nagsasabing nasa panganib ang account mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Metrobank",
        "message": "Metrobank Fraud Dept: may nakitang unauthorized transfer na P5,000. I-reply ang card details mo para ma-reverse.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your Metrobank card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Security Bank",
        "message": "Security Bank Fraud Dept: may nakitang unauthorized transfer na P100,000. I-reply ang card details mo para ma-reverse.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PNB",
        "message": "PNB: Isasara ang card mo dahil sa inactivity. I-reactivate sa smart-rewar-ds.top.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong the official hotline number mismo."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts: Naka-hold ang account mo para sa review. I-kumpirma ang identity mo sa gov-ph-tax.site para maibalik ang access.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang bank app ko at i-check kung may totoong alert.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your BDO card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang login ko para hindi maisara ang account.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "BPI Security: May bagong device na nag-try mag-login. I-approve o i-decline sa shopee-refund-ph.site.",
        "question": "Sabi ng tumatawag ginamit ang card mo sa fraud. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID at sender name. Laging tawagan ang totoong number on the back of your BPI card number mismo."
          },
          {
            "id": "b",
            "text": "Basa-hin ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko at 3-digit code para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbigay ng card details o code sa phone o text link. Alam na ng totoong bangko ang card number mo."
          }
        ],
        "tip": "Walang bangkong humihingi ng OTP o card code mo."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang bangkong humihingi ng OTP o card code mo.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "Congratulations! Pumasa ka sa screening namin. Bayaran ang P250 processing fee sa maya-security-alert.xyz para magsimula.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "Congratulations! Pumasa ka sa screening namin. Bayaran ang P2,000 processing fee sa pagibig-loan-release.site para magsimula.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "Unang task mo: i-transfer ang P500 bilang refundable performance deposit.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Unang task mo: i-transfer ang P500 bilang refundable performance deposit.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "HR dito: halos tapos na ang onboarding mo. Kumpirmahin sa bit.ly/verify-now para sa P1,000,000 refundable deposit.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoGlobal",
        "message": "HR dito: halos tapos na ang onboarding mo. Kumpirmahin sa g-cash-verify-ph.top para sa P1,500 refundable deposit.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "DataEntryPH",
        "message": "Unang task mo: i-transfer ang P12,000 bilang refundable performance deposit.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "RemoteHire",
        "message": "Congratulations! Pumasa ka sa screening namin. Bayaran ang P500 processing fee sa bdo-secure-login-verify.top para magsimula.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "HR dito: halos tapos na ang onboarding mo. Kumpirmahin sa smart-rewar-ds.top para sa P8,000 refundable deposit.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "HR dito: halos tapos na ang onboarding mo. Kumpirmahin sa bdo-secure-login-verify.top para sa P12,000 refundable deposit.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Unang task mo: i-transfer ang P2,000 bilang refundable performance deposit.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "Gusto namin ang profile mo! P100,000/buwan, work from home. I-download ang app na ito para magsimula sa training ngayon.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "DataEntryPH",
        "message": "Nasa shortlist ka! I-confirm ang slot mo sa gov-ph-tax.site sa loob ng 24 oras.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "RemoteHire",
        "message": "Gusto namin ang profile mo! P5,000/buwan, work from home. I-download ang app na ito para magsimula sa training ngayon.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Gusto namin ang profile mo! P150/buwan, work from home. I-download ang app na ito para magsimula sa training ngayon.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "RemoteHire",
        "message": "Nasa shortlist ka! I-confirm ang slot mo sa g-cash-verify-ph.top sa loob ng 24 oras.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "DataEntryPH",
        "message": "Unang task mo: i-transfer ang P500 bilang refundable performance deposit.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "CryptoGlobal",
        "message": "Gusto namin ang profile mo! P1,000,000/buwan, work from home. I-download ang app na ito para magsimula sa training ngayon.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoGlobal",
        "message": "Gusto namin ang profile mo! P8,000/buwan, work from home. I-download ang app na ito para magsimula sa training ngayon.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Nasa shortlist ka! I-confirm ang slot mo sa pagibig-loan-release.site sa loob ng 24 oras.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "Congratulations! Pumasa ka sa screening namin. Bayaran ang P12,000 processing fee sa bdo-secure-login-verify.top para magsimula.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Unang task mo: i-transfer ang P5,000 bilang refundable performance deposit.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoGlobal",
        "message": "Unang task mo: i-transfer ang P150 bilang refundable performance deposit.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "HR dito: halos tapos na ang onboarding mo. Kumpirmahin sa shopee-refund-ph.site para sa P5,000 refundable deposit.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Congratulations! Pumasa ka sa screening namin. Bayaran ang P2,000 processing fee sa gcash-update.ph-verify.top para magsimula.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "HR dito: halos tapos na ang onboarding mo. Kumpirmahin sa bit.ly/verify-now para sa P1,000,000 refundable deposit.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Gusto namin ang profile mo! P1,000,000/buwan, work from home. I-download ang app na ito para magsimula sa training ngayon.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Nasa shortlist ka! I-confirm ang slot mo sa smart-rewar-ds.top sa loob ng 24 oras.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "Unang task mo: i-transfer ang P5,000 bilang refundable performance deposit.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "CryptoGlobal",
        "message": "Gusto namin ang profile mo! P12,000/buwan, work from home. I-download ang app na ito para magsimula sa training ngayon.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Congratulations! Pumasa ka sa screening namin. Bayaran ang P12,000 processing fee sa shopee-refund-ph.site para magsimula.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "HR dito: halos tapos na ang onboarding mo. Kumpirmahin sa pagibig-loan-release.site para sa P12,000 refundable deposit.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Gusto namin ang profile mo! P12,000/buwan, work from home. I-download ang app na ito para magsimula sa training ngayon.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Nasa shortlist ka! I-confirm ang slot mo sa gcash-update.ph-verify.top sa loob ng 24 oras.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Congratulations! Pumasa ka sa screening namin. Bayaran ang P8,000 processing fee sa gcash-update.ph-verify.top para magsimula.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "HR dito: halos tapos na ang onboarding mo. Kumpirmahin sa jnt-tracking-ph.site para sa P250 refundable deposit.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoGlobal",
        "message": "Gusto namin ang profile mo! P1,000,000/buwan, work from home. I-download ang app na ito para magsimula sa training ngayon.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoGlobal",
        "message": "Congratulations! Pumasa ka sa screening namin. Bayaran ang P1,000,000 processing fee sa gcash-update.ph-verify.top para magsimula.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "RemoteHire",
        "message": "Unang task mo: i-transfer ang P1,000,000 bilang refundable performance deposit.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "HR dito: halos tapos na ang onboarding mo. Kumpirmahin sa shopee-refund-ph.site para sa P1,500 refundable deposit.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "RemoteHire",
        "message": "Nasa shortlist ka! I-confirm ang slot mo sa gov-ph-tax.site sa loob ng 24 oras.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Congratulations! Pumasa ka sa screening namin. Bayaran ang P25,000 processing fee sa pagibig-loan-release.site para magsimula.",
        "question": "May pangarap na trabaho na unang nakahanap sa iyo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Walang totoong trabaho na hihingi ng bayad para magtrabaho.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DataEntryPH",
        "message": "Congratulations! Pumasa ka sa screening namin. Bayaran ang P2,000 processing fee sa g-cash-verify-ph.top para magsimula.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati at humingi ng proof.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "linkedin",
        "senderLabel": "DataEntryPH",
        "message": "HR dito: halos tapos na ang onboarding mo. Kumpirmahin sa bdo-secure-login-verify.top para sa P12,000 refundable deposit.",
        "question": "Gusto nila ng deposit para magsimula sa trabaho. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-search ang pangalan ng kumpanya at i-check ang totoong website nila.",
            "correct": true,
            "feedback": "Tama. May verifiable web presence ang totoong kumpanya; hindi sila nagmamadali na mag-install ng app o magbayad ng deposit."
          },
          {
            "id": "b",
            "text": "Ipadala ang deposit. Sabi nila refundable.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          },
          {
            "id": "c",
            "text": "I-download agad ang app bago pa pumili ng iba.",
            "correct": false,
            "feedback": "Bayaran KA ng totoong employer. Hindi sila hihingi ng bayad para magsimula ka."
          }
        ],
        "tip": "Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang trabahong magbabayad KA para magtrabaho ay hindi trabaho, scam iyan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Garantisadong kita! Mag-invest ng P500 ngayon, doblehin sa isang linggo. Sure kita, pasok na!",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P500 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Signal group: garantisadong P100,000 payout sa linggong ito. Sumali bago magsara.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Dinoble ng app namin ang P45,000 sa 7 araw. Simulan ang account mo ngayon sa bdo-secure-login-verify.top.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P45,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Kumita ng P5,000 araw-araw na walang risk. Mag-withdraw anytime. Mag-invest ngayon.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P5,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Kumita ng P5,000 araw-araw na walang risk. Mag-withdraw anytime. Mag-invest ngayon.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P5,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Signal group: garantisadong P150 payout sa linggong ito. Sumali bago magsara.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P150 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Dinoble ng AI trading app namin ang P12,000 sa isang buwan. Magsimula na.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Dinoble ng AI trading app namin ang P45,000 sa isang buwan. Magsimula na.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P45,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Dinoble ng AI trading app namin ang P1,500 sa isang buwan. Magsimula na.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P1,500 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Binance",
        "message": "Kumita ng P2,000 araw-araw na walang risk. Mag-withdraw anytime. Mag-invest ngayon.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P2,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Kumita ng P12,000 araw-araw na walang risk. Mag-withdraw anytime. Mag-invest ngayon.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P12,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Garantisadong kita! Mag-invest ng P12,000 ngayon, doblehin sa isang linggo. Sure kita, pasok na!",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P12,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoPips",
        "message": "Dinoble ng AI trading app namin ang P25,000 sa isang buwan. Magsimula na.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Binance",
        "message": "Kumita ng P2,000 araw-araw na walang risk. Mag-withdraw anytime. Mag-invest ngayon.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P2,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Signal group: garantisadong P45,000 payout sa linggong ito. Sumali bago magsara.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P45,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoPips",
        "message": "Signal group: garantisadong P12,000 payout sa linggong ito. Sumali bago magsara.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P12,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Garantisadong kita! Mag-invest ng P12,000 ngayon, doblehin sa isang linggo. Sure kita, pasok na!",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Kumita ng P8,000 araw-araw na walang risk. Mag-withdraw anytime. Mag-invest ngayon.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P8,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Dinoble ng AI trading app namin ang P45,000 sa isang buwan. Magsimula na.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P45,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoPips",
        "message": "Kumita ng P25,000 araw-araw na walang risk. Mag-withdraw anytime. Mag-invest ngayon.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Signal group: garantisadong P45,000 payout sa linggong ito. Sumali bago magsara.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P45,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Dinoble ng app namin ang P5,000 sa 7 araw. Simulan ang account mo ngayon sa shopee-refund-ph.site.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Dinoble ng AI trading app namin ang P8,000 sa isang buwan. Magsimula na.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P8,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Dinoble ng AI trading app namin ang P8,000 sa isang buwan. Magsimula na.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P8,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Garantisadong kita! Mag-invest ng P8,000 ngayon, doblehin sa isang linggo. Sure kita, pasok na!",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P8,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Binance",
        "message": "Dinoble ng AI trading app namin ang P5,000 sa isang buwan. Magsimula na.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P5,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Kumita ng P5,000 araw-araw na walang risk. Mag-withdraw anytime. Mag-invest ngayon.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P5,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Dinoble ng AI trading app namin ang P1,500 sa isang buwan. Magsimula na.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "CryptoPips",
        "message": "Garantisadong kita! Mag-invest ng P2,000 ngayon, doblehin sa isang linggo. Sure kita, pasok na!",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SureKita",
        "message": "Kumita ng P150 araw-araw na walang risk. Mag-withdraw anytime. Mag-invest ngayon.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P150 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Kumita ng P12,000 araw-araw na walang risk. Mag-withdraw anytime. Mag-invest ngayon.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Signal group: garantisadong P12,000 payout sa linggong ito. Sumali bago magsara.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P12,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Binance",
        "message": "Dinoble ng app namin ang P2,000 sa 7 araw. Simulan ang account mo ngayon sa gov-ph-tax.site.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P2,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Binance",
        "message": "Dinoble ng AI trading app namin ang P12,000 sa isang buwan. Magsimula na.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P12,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoPips",
        "message": "Kumita ng P500 araw-araw na walang risk. Mag-withdraw anytime. Mag-invest ngayon.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P500 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CryptoPips",
        "message": "Dinoble ng AI trading app namin ang P250 sa isang buwan. Magsimula na.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P250 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CryptoPips",
        "message": "Kumita ng P1,500 araw-araw na walang risk. Mag-withdraw anytime. Mag-invest ngayon.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Binance",
        "message": "Signal group: garantisadong P150 payout sa linggong ito. Sumali bago magsara.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Mag-invest ng P150 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "I-share sa pamilya para kumita rin sila.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May nangangako ng garantisadong kita. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SureKita",
        "message": "Dinoble ng AI trading app namin ang P45,000 sa isang buwan. Magsimula na.",
        "question": "May nangangako ng garantisadong kita. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore at i-report. Walang garantisadong kita.",
            "correct": true,
            "feedback": "Tama. Ang 'garantisadong kita' ang pinakamalakas na scam signal na mayroon."
          },
          {
            "id": "b",
            "text": "Magsimula sa maliit para i-test.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          },
          {
            "id": "c",
            "text": "Mag-invest ng P45,000 para subukan.",
            "correct": false,
            "feedback": "Ang sinumang nangangako ng garantisadong kita ay kukunin ang pera mo, hindi i-invest."
          }
        ],
        "tip": "Ang 'sure profit' na hindi mo hiniling ay palaging scam."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ang 'sure profit' na hindi mo hiniling ay palaging scam.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: May warrant na inilabas laban sa ID mo. I-resolve sa gcash-update.ph-verify.top para maiwasan ang pag-aresto.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng Pag-IBIG para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng Pag-IBIG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng Pag-IBIG. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SSS",
        "message": "SSS: ito na ang huling pagkakataon mo Bayaran ang penalty mong P25,000 sa gcash-update.ph-verify.top para maiwasan ang case filing.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng SSS para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BIR",
        "message": "BIR: May warrant na inilabas laban sa ID mo. I-resolve sa pagibig-loan-release.site para maiwasan ang pag-aresto.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng BIR para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng BIR. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng BIR. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "SSS",
        "message": "SSS: May warrant na inilabas laban sa ID mo. I-resolve sa smart-rewar-ds.top para maiwasan ang pag-aresto.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng SSS para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Handa na ang tax refund mong P8,000. I-claim sa pagibig-loan-release.site bago mag-expire.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng Pag-IBIG para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng Pag-IBIG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng Pag-IBIG. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "SSS",
        "message": "SSS: ide-deactivate ang SIM mo Bayaran ang penalty mong P12,000 sa shopee-refund-ph.site para maiwasan ang case filing.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng SSS para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "NBI",
        "message": "NBI: Ikakansela ang benefits mo maliban kung mag-verify ka sa maya-security-alert.xyz.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng NBI para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "SSS",
        "message": "SSS: May warrant na inilabas laban sa ID mo. I-resolve sa pagibig-loan-release.site para maiwasan ang pag-aresto.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng SSS para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "NBI",
        "message": "NBI: I-update ang records mo sa gcash-update.ph-verify.top o i-pause ang pension mo.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng NBI para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: Handa na ang tax refund mong P150. I-claim sa bdo-secure-login-verify.top bago mag-expire.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng PNP-ACG para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PNP-ACG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PNP-ACG. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PhilHealth",
        "message": "PhilHealth: May warrant na inilabas laban sa ID mo. I-resolve sa jnt-tracking-ph.site para maiwasan ang pag-aresto.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng PhilHealth para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PhilHealth. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PhilHealth. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC: may nakitang unauthorized transfer Bayaran ang penalty mong P250 sa g-cash-verify-ph.top para maiwasan ang case filing.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng CICC para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng CICC. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng CICC. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC: Ikakansela ang benefits mo maliban kung mag-verify ka sa bdo-secure-login-verify.top.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng CICC para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng CICC. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng CICC. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: May warrant na inilabas laban sa ID mo. I-resolve sa gcash-update.ph-verify.top para maiwasan ang pag-aresto.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng PNP-ACG para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PNP-ACG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PNP-ACG. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: I-update ang records mo sa smart-rewar-ds.top o i-pause ang pension mo.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng PNP-ACG para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PNP-ACG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PNP-ACG. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Ikakansela ang benefits mo maliban kung mag-verify ka sa pagibig-loan-release.site.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng Pag-IBIG para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng Pag-IBIG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng Pag-IBIG. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SSS",
        "message": "SSS: I-update ang records mo sa pagibig-loan-release.site o i-pause ang pension mo.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng SSS para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: Handa na ang tax refund mong P150. I-claim sa smart-rewar-ds.top bago mag-expire.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng PNP-ACG para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PNP-ACG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PNP-ACG. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: I-update ang records mo sa shopee-refund-ph.site o i-pause ang pension mo.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng Pag-IBIG para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng Pag-IBIG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng Pag-IBIG. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: I-update ang records mo sa bit.ly/verify-now o i-pause ang pension mo.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng PNP-ACG para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PNP-ACG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PNP-ACG. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CICC",
        "message": "CICC: May warrant na inilabas laban sa ID mo. I-resolve sa bdo-secure-login-verify.top para maiwasan ang pag-aresto.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng CICC para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng CICC. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng CICC. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SSS",
        "message": "SSS: Ikakansela ang benefits mo maliban kung mag-verify ka sa gcash-update.ph-verify.top.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng SSS para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "NBI",
        "message": "NBI: May warrant na inilabas laban sa ID mo. I-resolve sa pagibig-loan-release.site para maiwasan ang pag-aresto.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng NBI para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "NBI",
        "message": "NBI: May warrant na inilabas laban sa ID mo. I-resolve sa maya-security-alert.xyz para maiwasan ang pag-aresto.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng NBI para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BIR",
        "message": "BIR: Ikakansela ang benefits mo maliban kung mag-verify ka sa pagibig-loan-release.site.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng BIR para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng BIR. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng BIR. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "BIR",
        "message": "BIR: ito na ang huling pagkakataon mo Bayaran ang penalty mong P250 sa bdo-secure-login-verify.top para maiwasan ang case filing.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng BIR para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng BIR. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng BIR. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PhilHealth",
        "message": "PhilHealth: ikakansela ang benefits mo Bayaran ang penalty mong P250 sa gov-ph-tax.site para maiwasan ang case filing.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng PhilHealth para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PhilHealth. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PhilHealth. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "NBI",
        "message": "NBI: Ikakansela ang benefits mo maliban kung mag-verify ka sa bit.ly/verify-now.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng NBI para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC: Ikakansela ang benefits mo maliban kung mag-verify ka sa smart-rewar-ds.top.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng CICC para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng CICC. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng CICC. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "SSS",
        "message": "SSS: ikakansela ang benefits mo Bayaran ang penalty mong P25,000 sa gov-ph-tax.site para maiwasan ang case filing.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng SSS para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "CICC",
        "message": "CICC: Ikakansela ang benefits mo maliban kung mag-verify ka sa g-cash-verify-ph.top.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng CICC para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng CICC. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng CICC. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Handa na ang tax refund mong P250. I-claim sa gcash-update.ph-verify.top bago mag-expire.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng Pag-IBIG para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng Pag-IBIG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng Pag-IBIG. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BIR",
        "message": "BIR: I-update ang records mo sa gov-ph-tax.site o i-pause ang pension mo.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng BIR para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng BIR. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng BIR. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "NBI",
        "message": "NBI: I-update ang records mo sa g-cash-verify-ph.top o i-pause ang pension mo.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng NBI para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "NBI",
        "message": "NBI: I-update ang records mo sa gov-ph-tax.site o i-pause ang pension mo.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng NBI para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "NBI",
        "message": "NBI: Ikakansela ang benefits mo maliban kung mag-verify ka sa smart-rewar-ds.top.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng NBI para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng NBI. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "SSS",
        "message": "SSS: naka-lock ang account mo Bayaran ang penalty mong P12,000 sa gcash-update.ph-verify.top para maiwasan ang case filing.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng SSS para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para maiwasan ang kaso.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng SSS. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PNP-ACG",
        "message": "PNP-ACG: ide-deactivate ang SIM mo Bayaran ang penalty mong P150 sa bdo-secure-login-verify.top para maiwasan ang case filing.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng PNP-ACG para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PNP-ACG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng PNP-ACG. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Pag-IBIG",
        "message": "Pag-IBIG: Handa na ang tax refund mong P2,000. I-claim sa maya-security-alert.xyz bago mag-expire.",
        "question": "May opisina ng gobyerno na nagbabanta ng penalty sa text. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng Pag-IBIG para i-verify.",
            "correct": true,
            "feedback": "Tama. Hindi naniningil ang gobyerno ng fee sa text; tawagan ang opisyal na numero."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng Pag-IBIG. Impersonation ang text."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko.",
            "correct": false,
            "feedback": "May opisyal na channel ang mga ahensya tulad ng Pag-IBIG. Impersonation ang text."
          }
        ],
        "tip": "Walang opisina ng gobyerno na humihingi ng fee o OTP sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Walang opisina ng gobyerno na humihingi ng fee o OTP sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Mag-e-expire na ang points mo! I-redeem ang P250 ngayon sa bdo-secure-login-verify.top.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na PLDT app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na PLDT app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Malapit nang mag-expire ang account mo. I-renew sa gov-ph-tax.site para mapanatili ang number mo.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na SMART app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na SMART app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: naka-lock ang account mo I-reply ang registered name at address mo para manatiling active ang line mo.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na DITO app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na DITO app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: Overdue na ang bill mo. Bayaran ang P150 sa smart-rewar-ds.top para maiwasan ang disconnection.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na GLOBE app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na GLOBE app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Overdue na ang bill mo. Bayaran ang P45,000 sa bit.ly/verify-now para maiwasan ang disconnection.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na GLOBE app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na GLOBE app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Smart",
        "message": "Smart: Overdue na ang bill mo. Bayaran ang P250 sa g-cash-verify-ph.top para maiwasan ang disconnection.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na SMART app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na SMART app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Mag-e-expire na ang points mo! I-redeem ang P250 ngayon sa bit.ly/verify-now.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na GLOBE app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na GLOBE app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Malapit nang mag-expire ang account mo. I-renew sa smart-rewar-ds.top para mapanatili ang number mo.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na PLDT app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na PLDT app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Mag-e-expire na ang points mo! I-redeem ang P45,000 ngayon sa gov-ph-tax.site.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na GLOBE app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na GLOBE app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Libreng P5,000 load para sa iyo! I-claim sa gcash-update.ph-verify.top ngayon.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na SMART app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na SMART app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Libreng P1,000,000 load para sa iyo! I-claim sa bit.ly/verify-now ngayon.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na DITO app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na DITO app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "DITO",
        "message": "DITO: Malapit nang mag-expire ang account mo. I-renew sa g-cash-verify-ph.top para mapanatili ang number mo.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na DITO app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na DITO app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Smart",
        "message": "Smart: Mag-e-expire na ang points mo! I-redeem ang P1,000,000 ngayon sa smart-rewar-ds.top.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na SMART app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na SMART app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Overdue na ang bill mo. Bayaran ang P1,000,000 sa gov-ph-tax.site para maiwasan ang disconnection.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na SMART app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na SMART app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Overdue na ang bill mo. Bayaran ang P1,000,000 sa gcash-update.ph-verify.top para maiwasan ang disconnection.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na PLDT app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na PLDT app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Mag-e-expire na ang points mo! I-redeem ang P250 ngayon sa gcash-update.ph-verify.top.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na GLOBE app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na GLOBE app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Mag-e-expire na ang points mo! I-redeem ang P1,000,000 ngayon sa jnt-tracking-ph.site.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na GLOBE app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na GLOBE app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Mag-e-expire na ang points mo! I-redeem ang P5,000 ngayon sa smart-rewar-ds.top.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na DITO app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na DITO app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Malapit nang mag-expire ang account mo. I-renew sa shopee-refund-ph.site para mapanatili ang number mo.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na PLDT app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na PLDT app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Mag-e-expire na ang points mo! I-redeem ang P150 ngayon sa jnt-tracking-ph.site.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na GLOBE app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na GLOBE app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Mag-e-expire na ang points mo! I-redeem ang P150 ngayon sa gov-ph-tax.site.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na PLDT app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na PLDT app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Overdue na ang bill mo. Bayaran ang P2,000 sa bit.ly/verify-now para maiwasan ang disconnection.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na SMART app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na SMART app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Mag-e-expire na ang points mo! I-redeem ang P250 ngayon sa bdo-secure-login-verify.top.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na DITO app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na DITO app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Overdue na ang bill mo. Bayaran ang P1,000,000 sa gcash-update.ph-verify.top para maiwasan ang disconnection.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na SMART app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na SMART app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Overdue na ang bill mo. Bayaran ang P12,000 sa pagibig-loan-release.site para maiwasan ang disconnection.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na SMART app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na SMART app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: may na-file na case number laban sa iyo I-reply ang registered name at address mo para manatiling active ang line mo.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na GLOBE app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na GLOBE app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Mag-e-expire na ang points mo! I-redeem ang P2,000 ngayon sa gov-ph-tax.site.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na GLOBE app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na GLOBE app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PLDT Home",
        "message": "PLDT Home: Libreng P1,000,000 load para sa iyo! I-claim sa gov-ph-tax.site ngayon.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na PLDT app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na PLDT app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: naka-lock ang account mo I-reply ang registered name at address mo para manatiling active ang line mo.",
        "question": "May mensaheng nag-aalok ng points o nagbabala sa line mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na GLOBE app at i-check doon.",
            "correct": true,
            "feedback": "Tama. I-check ang opisyal na GLOBE app; huwag magtiwala sa text link."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang details ko para mag-redeem.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          },
          {
            "id": "c",
            "text": "I-reply ang buong pangalan at address ko.",
            "correct": false,
            "feedback": "Ang pag-reply o pag-click ay nagsasabi sa scammer na active ang numero at details mo."
          }
        ],
        "tip": "Hindi humihingi ang telco ng OTP o ID mo sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi humihingi ang telco ng OTP o ID mo sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Naka-hold ang parcel mo para sa unpaid fee na P250. Bayaran sa shopee-refund-ph.site o ibabalik ang package mo.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Kailangan ng package mo ng maliit na storage fee na P2,000. Bayaran sa bdo-secure-login-verify.top.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Flash Express",
        "message": "Flash Express: Kailangan ng package mo ng maliit na storage fee na P45,000. Bayaran sa smart-rewar-ds.top.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para hindi maibalik ang parcel ko.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Hindi kumpleto ang address mo. I-confirm sa smart-rewar-ds.top o ibabalik ang parcel.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para hindi maibalik ang parcel ko.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: may na-file na case number laban sa iyo Para ma-reschedule ang delivery, magbayad ng maliit na fee sa gov-ph-tax.site.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para hindi maibalik ang parcel ko.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold ang parcel mo para sa unpaid fee na P1,500. Bayaran sa bit.ly/verify-now o ibabalik ang package mo.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para hindi maibalik ang parcel ko.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold ang parcel mo para sa unpaid fee na P1,000,000. Bayaran sa pagibig-loan-release.site o ibabalik ang package mo.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Na-attempt ang delivery pero pumalpak. I-reschedule sa pagibig-loan-release.site para sa P150.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Kailangan ng package mo ng maliit na storage fee na P500. Bayaran sa g-cash-verify-ph.top.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: naka-lock ang account mo Para ma-reschedule ang delivery, magbayad ng maliit na fee sa maya-security-alert.xyz.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Na-attempt ang delivery pero pumalpak. I-reschedule sa gcash-update.ph-verify.top para sa P8,000.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para hindi maibalik ang parcel ko.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Kailangan ng package mo ng maliit na storage fee na P45,000. Bayaran sa jnt-tracking-ph.site.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para hindi maibalik ang parcel ko.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Naka-hold ang parcel mo para sa unpaid fee na P1,500. Bayaran sa smart-rewar-ds.top o ibabalik ang package mo.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para hindi maibalik ang parcel ko.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Flash Express",
        "message": "Flash Express: ibabalik ang parcel mo Para ma-reschedule ang delivery, magbayad ng maliit na fee sa maya-security-alert.xyz.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Flash Express",
        "message": "Flash Express: Naka-hold ang parcel mo para sa unpaid fee na P8,000. Bayaran sa g-cash-verify-ph.top o ibabalik ang package mo.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para hindi maibalik ang parcel ko.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LBC",
        "message": "LBC: Kailangan ng package mo ng maliit na storage fee na P500. Bayaran sa bdo-secure-login-verify.top.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para hindi maibalik ang parcel ko.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Hindi kumpleto ang address mo. I-confirm sa smart-rewar-ds.top o ibabalik ang parcel.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Na-attempt ang delivery pero pumalpak. I-reschedule sa maya-security-alert.xyz para sa P150.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Hindi kumpleto ang address mo. I-confirm sa shopee-refund-ph.site o ibabalik ang parcel.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Naka-hold ang parcel mo para sa unpaid fee na P1,500. Bayaran sa shopee-refund-ph.site o ibabalik ang package mo.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Kailangan ng package mo ng maliit na storage fee na P100,000. Bayaran sa gcash-update.ph-verify.top.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Flash Express",
        "message": "Flash Express: Hindi kumpleto ang address mo. I-confirm sa pagibig-loan-release.site o ibabalik ang parcel.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para hindi maibalik ang parcel ko.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Flash Express",
        "message": "Flash Express: Naka-hold ang parcel mo para sa unpaid fee na P25,000. Bayaran sa maya-security-alert.xyz o ibabalik ang package mo.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para hindi maibalik ang parcel ko.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Naka-hold ang parcel mo para sa unpaid fee na P2,000. Bayaran sa g-cash-verify-ph.top o ibabalik ang package mo.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Ninja Van",
        "message": "Ninja Van: Kailangan ng package mo ng maliit na storage fee na P25,000. Bayaran sa bdo-secure-login-verify.top.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para hindi maibalik ang parcel ko.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "J&T Express",
        "message": "J&T Express: naka-lock ang account mo Para ma-reschedule ang delivery, magbayad ng maliit na fee sa gov-ph-tax.site.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "J&T Express",
        "message": "J&T Express: Hindi kumpleto ang address mo. I-confirm sa g-cash-verify-ph.top o ibabalik ang parcel.",
        "question": "May mensaheng nagsasabing naka-hold ang parcel mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna ang totoong tracking number sa order app ko.",
            "correct": true,
            "feedback": "Tama. Ikinumpara mo sa totoong tracking ng order mo. Kung hindi tugma, peke iyan."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          },
          {
            "id": "c",
            "text": "Magbayad sa link para ligtas.",
            "correct": false,
            "feedback": "Kinokolekta ng totoong courier ang fee sa pinto o sa opisyal na app, hindi sa random text link."
          }
        ],
        "tip": "Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Bayad ang delivery fee sa totoong app o sa pinto, hindi sa text link.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account ko. Pwede mo bang i-hold ang P100,000 para sa akin hanggang makarating ako?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ako para sa atin, pero kailangan ko ng P25,000 pa para ma-withdraw at pumunta sa iyo.",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Kailangan ng crypto investment ko ng P1,000,000 pa para ma-withdraw, tapos babayaran kita.",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account ko. Pwede mo bang i-hold ang P100,000 para sa akin hanggang makarating ako?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ako para sa atin, pero kailangan ko ng P8,000 pa para ma-withdraw at pumunta sa iyo.",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ako para sa atin, pero kailangan ko ng P5,000 pa para ma-withdraw at pumunta sa iyo.",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account ko. Pwede mo bang i-hold ang P250 para sa akin hanggang makarating ako?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account ko. Pwede mo bang i-hold ang P150 para sa akin hanggang makarating ako?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Kailangan ng crypto investment ko ng P100,000 pa para ma-withdraw, tapos babayaran kita.",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ako para sa atin, pero kailangan ko ng P45,000 pa para ma-withdraw at pumunta sa iyo.",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account ko. Pwede mo bang i-hold ang P2,000 para sa akin hanggang makarating ako?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Mahal kita pero naka-stuck ako sa customs at kailangan ko ng P1,500 para makita kita. Pwede bang ipadala?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Nag-invest ako para sa atin, pero kailangan ko ng P500 pa para ma-withdraw at pumunta sa iyo.",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account ko. Pwede mo bang i-hold ang P1,000,000 para sa akin hanggang makarating ako?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Nasa problema ako sa airport. Kailangan nila ng P1,000,000 para ma-release ang visa ko. Ipadala na ngayon.",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account ko. Pwede mo bang i-hold ang P45,000 para sa akin hanggang makarating ako?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Nasa problema ako sa airport. Kailangan nila ng P1,000,000 para ma-release ang visa ko. Ipadala na ngayon.",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Kailangan ng crypto investment ko ng P150 pa para ma-withdraw, tapos babayaran kita.",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Kailangan ng crypto investment ko ng P25,000 pa para ma-withdraw, tapos babayaran kita.",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Mahal kita pero naka-stuck ako sa customs at kailangan ko ng P100,000 para makita kita. Pwede bang ipadala?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account ko. Pwede mo bang i-hold ang P100,000 para sa akin hanggang makarating ako?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account ko. Pwede mo bang i-hold ang P1,000,000 para sa akin hanggang makarating ako?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Kailangan ng crypto investment ko ng P12,000 pa para ma-withdraw, tapos babayaran kita.",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account ko. Pwede mo bang i-hold ang P12,000 para sa akin hanggang makarating ako?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera para hindi sila ma-stuck.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DatingApp",
        "message": "Na-freeze ang account ko. Pwede mo bang i-hold ang P8,000 para sa akin hanggang makarating ako?",
        "question": "May taong nakilala mo online na nangangailangan ng pera ngayon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hindi. Hindi ko pa nakikita ang taong ito nang personal.",
            "correct": true,
            "feedback": "Tama. Bumubuo ng tiwala ang romance scammer para humingi ng pera. Huwag magpadala ng pera sa hindi mo pa nakikilala."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof, tapos ipadala.",
            "correct": false,
            "feedback": "Maganda ang paghingi ng proof, pero ang tanging ligtas na sagot ay huwag magpadala ng pera sa estranghero."
          }
        ],
        "tip": "Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Huwag magpadala ng pera sa taong hindi mo pa nakikita nang personal.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC agent dito. Para ma-reverse ang fraudulent transfer, kailangan ko ang OTP mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC agent dito. Para ma-reverse ang fraudulent transfer, kailangan ko ang OTP mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Ito ang CICC tech support. Na-hack ang line mo. Ibigay ang code sa phone mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "CICC agent dito. Para ma-reverse ang fraudulent transfer, kailangan ko ang OTP mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "Ito ang BPI tech support. Na-hack ang line mo. Ibigay ang code sa phone mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "Ito ang BDO Alerts tech support. Na-hack ang line mo. Ibigay ang code sa phone mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Tumatawag ako mula sa Globe. May nag-try na i-access ang account mo. I-confirm ang details mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "Tumatawag ako mula sa BPI. May nag-try na i-access ang account mo. I-confirm ang details mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe agent dito. Para ma-reverse ang fraudulent transfer, kailangan ko ang OTP mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "Ito ang BDO Alerts fraud department. Ginamit ang card mo para sa P100,000. Sabihin ang card number at code sa likod.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Tumatawag ako mula sa Globe. May nag-try na i-access ang account mo. I-confirm ang details mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Ito ang CICC tech support. Na-hack ang line mo. Ibigay ang code sa phone mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "Ito ang BDO Alerts fraud department. Ginamit ang card mo para sa P8,000. Sabihin ang card number at code sa likod.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Smart",
        "message": "Ito ang Smart tech support. Na-hack ang line mo. Ibigay ang code sa phone mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Kailangan nating i-secure ang account mo NGAYON. Magpapadala ako ng code. Pakibasa pabalik.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Ito ang CICC tech support. Na-hack ang line mo. Ibigay ang code sa phone mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "BDO Alerts agent dito. Para ma-reverse ang fraudulent transfer, kailangan ko ang OTP mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Smart",
        "message": "Ito ang Smart fraud department. Ginamit ang card mo para sa P1,500. Sabihin ang card number at code sa likod.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CICC",
        "message": "Tumatawag ako mula sa CICC. May nag-try na i-access ang account mo. I-confirm ang details mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Smart",
        "message": "Ito ang Smart fraud department. Ginamit ang card mo para sa P1,000,000. Sabihin ang card number at code sa likod.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "Tumatawag ako mula sa BPI. May nag-try na i-access ang account mo. I-confirm ang details mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe agent dito. Para ma-reverse ang fraudulent transfer, kailangan ko ang OTP mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe agent dito. Para ma-reverse ang fraudulent transfer, kailangan ko ang OTP mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Basa-hin ang card number ko para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BDO Alerts",
        "message": "Kailangan nating i-secure ang account mo NGAYON. Magpapadala ako ng code. Pakibasa pabalik.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin pabalik ang code na pinadala nila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "BPI",
        "message": "Ito ang BPI tech support. Na-hack ang line mo. Ibigay ang code sa phone mo.",
        "question": "Ipinapakita ng caller ID ang totoong bangko mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Ibaba ang tawag, tapos tawagan ang numero sa likod ng card ko.",
            "correct": true,
            "feedback": "Tama. Pwedeng peke ang caller ID. Ibaba ang tawag at tawagan ang totoong numero."
          },
          {
            "id": "b",
            "text": "Humingi muna ng proof kung sino sila.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          },
          {
            "id": "c",
            "text": "Basa-hin ang card number ko para itigil ang fraud.",
            "correct": false,
            "feedback": "Huwag magbasa ng code o card details sa taong tumawag sa iyo, gaano man ka-official ang dating nila."
          }
        ],
        "tip": "Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Pwedeng peke ang Caller ID. Ibaba ang tawag at tawagan ang opisyal na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-verify ang parking exit mo sa pag-scan ng code na ito.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan at magbayad. P2,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-verify ang parking exit mo sa pag-scan ng code na ito.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan at magbayad. P8,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang P45,000 parking fee. Instant at secure ang payment.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan at magbayad. P45,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-verify ang parking exit mo sa pag-scan ng code na ito.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan at magbayad. P12,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang P100,000 parking fee. Instant at secure ang payment.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan at magbayad. P100,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-scan para bayaran ang P8,000 parking fee. Instant at secure ang payment.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan at magbayad. P8,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-scan para bayaran ang P5,000 parking fee. Instant at secure ang payment.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan at magbayad. P5,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang electric bill mo. Official partner. P100,000 ang bayad.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan at magbayad. P100,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] Bayaran dito ang food delivery mo. Mabilis at secure.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan at magbayad. P250 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang electric bill mo. Official partner. P1,000,000 ang bayad.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan at magbayad. P1,000,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-verify ang parking exit mo sa pag-scan ng code na ito.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan at magbayad. P100,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] Bayaran dito ang food delivery mo. Mabilis at secure.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan at magbayad. P25,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-verify ang parking exit mo sa pag-scan ng code na ito.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan at magbayad. P45,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] Bayaran dito ang food delivery mo. Mabilis at secure.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan at magbayad. P5,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang electric bill mo. Official partner. P1,000,000 ang bayad.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan at magbayad. P1,000,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang P5,000 parking fee. Instant at secure ang payment.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan at magbayad. P5,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-scan para bayaran ang P1,500 parking fee. Instant at secure ang payment.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan at magbayad. P1,500 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-verify ang parking exit mo sa pag-scan ng code na ito.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan at magbayad. P25,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "MerchantQR",
        "message": "[QR] I-scan para bayaran ang P2,000 parking fee. Instant at secure ang payment.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan at magbayad. P2,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "qr",
        "senderLabel": "ParkingPH",
        "message": "[QR] I-scan para bayaran ang electric bill mo. Official partner. P45,000 ang bayad.",
        "question": "May QR code na nag-aalok magbayad ng parking. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Hanapin ang opisyal na parking sign o magbayad sa machine.",
            "correct": true,
            "feedback": "Tama. Laging gamitin ang opisyal na paraan ng pagbayad, hindi ang sticker na biglang lumitaw."
          },
          {
            "id": "b",
            "text": "I-scan at magbayad. P45,000 lang naman.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          },
          {
            "id": "c",
            "text": "I-scan pero i-check ang page bago magbayad.",
            "correct": false,
            "feedback": "Maaaring tumuturo ang QR na iyon sa pekeng payment page na magnanakaw ng card mo."
          }
        ],
        "tip": "Kahina-hinala ang QR code na hindi mo hiniling."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Kahina-hinala ang QR code na hindi mo hiniling.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "WesternUnion",
        "message": "Naghihintay ang remittance mong P1,500, pero dapat kang magbayad ng P1,500 release fee muna sa jnt-tracking-ph.site.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Magpatulong sa kaibigan na bayaran.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Remitly",
        "message": "Palawan: I-claim ang pera mo. I-confirm sa bdo-secure-login-verify.top para ma-release ang P45,000.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Magpatulong sa kaibigan na bayaran.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "WesternUnion",
        "message": "Naghihintay ang remittance mong P12,000, pero dapat kang magbayad ng P12,000 release fee muna sa bdo-secure-login-verify.top.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Remitly",
        "message": "Palawan: I-claim ang pera mo. I-confirm sa smart-rewar-ds.top para ma-release ang P1,500.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Magpatulong sa kaibigan na bayaran.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "WesternUnion",
        "message": "Naghihintay ang remittance mong P5,000, pero dapat kang magbayad ng P5,000 release fee muna sa gov-ph-tax.site.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "WesternUnion",
        "message": "Naghihintay ang remittance mong P45,000, pero dapat kang magbayad ng P45,000 release fee muna sa shopee-refund-ph.site.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Magpatulong sa kaibigan na bayaran.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Palawan",
        "message": "Naghihintay ang remittance mong P2,000, pero dapat kang magbayad ng P2,000 release fee muna sa jnt-tracking-ph.site.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Magpatulong sa kaibigan na bayaran.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Palawan",
        "message": "Naghihintay ang remittance mong P100,000, pero dapat kang magbayad ng P100,000 release fee muna sa g-cash-verify-ph.top.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Magpatulong sa kaibigan na bayaran.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "WesternUnion",
        "message": "Naghihintay ang remittance mong P25,000, pero dapat kang magbayad ng P25,000 release fee muna sa g-cash-verify-ph.top.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Remitly",
        "message": "Naka-hold ang remittance mong P1,500. Bayaran ang release fee sa pagibig-loan-release.site para matanggap ito.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Palawan",
        "message": "Naghihintay ang remittance mong P150, pero dapat kang magbayad ng P150 release fee muna sa gov-ph-tax.site.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "WesternUnion",
        "message": "Naghihintay ang remittance mong P2,000, pero dapat kang magbayad ng P2,000 release fee muna sa smart-rewar-ds.top.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Magpatulong sa kaibigan na bayaran.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Palawan",
        "message": "Palawan: I-claim ang pera mo. I-confirm sa maya-security-alert.xyz para ma-release ang P250.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Magpatulong sa kaibigan na bayaran.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "WesternUnion",
        "message": "Naghihintay ang remittance mong P5,000, pero dapat kang magbayad ng P5,000 release fee muna sa gcash-update.ph-verify.top.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Magpatulong sa kaibigan na bayaran.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Palawan",
        "message": "Palawan: I-claim ang pera mo. I-confirm sa bit.ly/verify-now para ma-release ang P8,000.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Magpatulong sa kaibigan na bayaran.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Palawan",
        "message": "Naghihintay ang remittance mong P45,000, pero dapat kang magbayad ng P45,000 release fee muna sa bit.ly/verify-now.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Magpatulong sa kaibigan na bayaran.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Remitly",
        "message": "Naghihintay ang remittance mong P25,000, pero dapat kang magbayad ng P25,000 release fee muna sa maya-security-alert.xyz.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Palawan",
        "message": "Naka-hold ang remittance mong P500. Bayaran ang release fee sa gcash-update.ph-verify.top para matanggap ito.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Palawan",
        "message": "Palawan: I-claim ang pera mo. I-confirm sa bit.ly/verify-now para ma-release ang P150.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Bayaran ang release fee para makuha ko ang pera.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Remitly",
        "message": "Palawan: I-claim ang pera mo. I-confirm sa pagibig-loan-release.site para ma-release ang P8,000.",
        "question": "May mensaheng nagsasabing kailangan ng remittance mo ng fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check ang remittance app ko o ang opisyal na branch mismo.",
            "correct": true,
            "feedback": "Tama. Dumarating mag-isa ang totoong transfer; walang kailangan magbayad para makatanggap ng pera."
          },
          {
            "id": "b",
            "text": "Magpatulong sa kaibigan na bayaran.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Ang pagbabayad para makatanggap ng pera ay ang advance-fee trick: magbabayad ka, hindi darating ang pera."
          }
        ],
        "tip": "Hindi ka nagbabayad ng fee para makatanggap ng remittance."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka nagbabayad ng fee para makatanggap ng remittance.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "Congratulations! Nanalo ka ng P25,000! I-claim sa gcash-update.ph-verify.top bago mag-expire.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PCSO",
        "message": "Nanalo ang GCash raffle ticket mo! Magbayad ng maliit na fee sa smart-rewar-ds.top para matanggap ang P100,000.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "MallVoucher",
        "message": "Huling araw para i-claim ang premyo mong P250! Bisitahin ang g-cash-verify-ph.top.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-click agad ang link bago mag-expire ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PCSO",
        "message": "Nanalo ang GCash raffle ticket mo! Magbayad ng maliit na fee sa jnt-tracking-ph.site para matanggap ang P45,000.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-click agad ang link bago mag-expire ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "MallVoucher",
        "message": "Nanalo ang GCash raffle ticket mo! Magbayad ng maliit na fee sa maya-security-alert.xyz para matanggap ang P8,000.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "GCash",
        "message": "Nanalo ang GCash raffle ticket mo! Magbayad ng maliit na fee sa maya-security-alert.xyz para matanggap ang P45,000.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-click agad ang link bago mag-expire ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PCSO",
        "message": "Congratulations! Nanalo ka ng P12,000! I-claim sa pagibig-loan-release.site bago mag-expire.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "Huling araw para i-claim ang premyo mong P500! Bisitahin ang jnt-tracking-ph.site.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "Huling araw para i-claim ang premyo mong P2,000! Bisitahin ang gov-ph-tax.site.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PCSO",
        "message": "Huling araw para i-claim ang premyo mong P1,000,000! Bisitahin ang bdo-secure-login-verify.top.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-click agad ang link bago mag-expire ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "MallVoucher",
        "message": "Congratulations! Nanalo ka ng P500! I-claim sa bit.ly/verify-now bago mag-expire.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "MallVoucher",
        "message": "Nanalo ang GCash raffle ticket mo! Magbayad ng maliit na fee sa smart-rewar-ds.top para matanggap ang P1,000,000.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-click agad ang link bago mag-expire ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PCSO",
        "message": "Nanalo ang GCash raffle ticket mo! Magbayad ng maliit na fee sa maya-security-alert.xyz para matanggap ang P25,000.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-click agad ang link bago mag-expire ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "MallVoucher",
        "message": "Nanalo ang GCash raffle ticket mo! Magbayad ng maliit na fee sa shopee-refund-ph.site para matanggap ang P25,000.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-click agad ang link bago mag-expire ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PCSO",
        "message": "Nanalo ka ng P8,000 sa anniversary draw namin! I-claim sa g-cash-verify-ph.top ngayon.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-click agad ang link bago mag-expire ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "PCSO",
        "message": "Nanalo ang GCash raffle ticket mo! Magbayad ng maliit na fee sa gov-ph-tax.site para matanggap ang P8,000.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PCSO",
        "message": "Nanalo ang GCash raffle ticket mo! Magbayad ng maliit na fee sa bdo-secure-login-verify.top para matanggap ang P250.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-click agad ang link bago mag-expire ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "MallVoucher",
        "message": "Nanalo ka ng P12,000 sa anniversary draw namin! I-claim sa shopee-refund-ph.site ngayon.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "MallVoucher",
        "message": "Congratulations! Nanalo ka ng P8,000! I-claim sa gcash-update.ph-verify.top bago mag-expire.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "I-forward sa kaibigan para manalo rin sila.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "GCash",
        "message": "Huling araw para i-claim ang premyo mong P250! Bisitahin ang smart-rewar-ds.top.",
        "question": "Nanalo ka sa raffle na hindi mo sinalihan. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-ignore ito. Hindi ka sumali, kaya peke ito.",
            "correct": true,
            "feedback": "Tama. Kung hindi ka sumali, hindi ka mananalo. Ito ang klasikong fake-reward scam."
          },
          {
            "id": "b",
            "text": "Magpadala ng maliit na fee para i-claim ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          },
          {
            "id": "c",
            "text": "I-click agad ang link bago mag-expire ang premyo.",
            "correct": false,
            "feedback": "Hindi nagbabayad ang mananalo para i-claim ang premyo. Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
          }
        ],
        "tip": "Hindi ka maaaring manalo sa raffle na hindi mo sinalihan."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi ka maaaring manalo sa raffle na hindi mo sinalihan.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Relative",
        "message": "Ako ito, ang anak mo. Nasa ospital ako. Kailangan ng ospital ng P500. Pakiusap ipadala sa numerong ito.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Lola, may problema ako sa pulis. Kailangan ko ng P12,000 para sa piyansa. Huwag sabihin kahit kanino.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera. Anak ko talaga iyan.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Mom/Dad, ako ito. Nasira ang phone ko. Ipadala ang P8,000 sa GCash na ito. Pakiusap huwag tumawag, sira ang phone ko.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera. Anak ko talaga iyan.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Relative",
        "message": "Mom/Dad, ako ito. Nasira ang phone ko. Ipadala ang P250 sa GCash na ito. Pakiusap huwag tumawag, sira ang phone ko.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera. Anak ko talaga iyan.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Child",
        "message": "Ako ito, ang anak mo. Nasa ospital ako. Kailangan ng ospital ng P1,500. Pakiusap ipadala sa numerong ito.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera. Anak ko talaga iyan.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Relative",
        "message": "Ako ito, ang anak mo. Nasa ospital ako. Kailangan ng ospital ng P2,000. Pakiusap ipadala sa numerong ito.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Child",
        "message": "Lola, may problema ako sa pulis. Kailangan ko ng P100,000 para sa piyansa. Huwag sabihin kahit kanino.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera. Anak ko talaga iyan.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Child",
        "message": "Lola, may problema ako sa pulis. Kailangan ko ng P2,000 para sa piyansa. Huwag sabihin kahit kanino.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera. Anak ko talaga iyan.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Ako ito, ang anak mo. Nasa ospital ako. Kailangan ng ospital ng P1,000,000. Pakiusap ipadala sa numerong ito.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera. Anak ko talaga iyan.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Relative",
        "message": "Mom/Dad, ako ito. Nasira ang phone ko. Ipadala ang P5,000 sa GCash na ito. Pakiusap huwag tumawag, sira ang phone ko.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Child",
        "message": "Ako ito, ang anak mo. Nasa ospital ako. Kailangan ng ospital ng P8,000. Pakiusap ipadala sa numerong ito.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Child",
        "message": "Mom, nawala ang wallet ko abroad. Pakiusap ipadala ang P500 sa account na ito.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera. Anak ko talaga iyan.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Relative",
        "message": "Lola, may problema ako sa pulis. Kailangan ko ng P5,000 para sa piyansa. Huwag sabihin kahit kanino.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang pera. Anak ko talaga iyan.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Relative",
        "message": "Mom, nawala ang wallet ko abroad. Pakiusap ipadala ang P1,500 sa account na ito.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Child",
        "message": "Lola, may problema ako sa pulis. Kailangan ko ng P25,000 para sa piyansa. Huwag sabihin kahit kanino.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang pera. Anak ko talaga iyan.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Relative",
        "message": "Mom, nawala ang wallet ko abroad. Pakiusap ipadala ang P100,000 sa account na ito.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang pera. Anak ko talaga iyan.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Mom, nawala ang wallet ko abroad. Pakiusap ipadala ang P500 sa account na ito.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Ipadala ang pera. Anak ko talaga iyan.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Relative",
        "message": "Ako ito, ang anak mo. Nasa ospital ako. Kailangan ng ospital ng P45,000. Pakiusap ipadala sa numerong ito.",
        "question": "Parang eksaktong boses ng anak mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang TOTOONG naka-save na numero ng anak ko bago magpadala ng kahit ano.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka bago kumilos. Huwag magtiwala sa hindi kilalang 'bagong numero'."
          },
          {
            "id": "b",
            "text": "Ipadala ang kalahati ngayon.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          },
          {
            "id": "c",
            "text": "Magtanong ng tanong na alam lang ng anak ko.",
            "correct": false,
            "feedback": "Ang 'huwag tumawag' na hiling ang red flag; ginagamit ito ng scammer para pigilan kang mag-verify."
          }
        ],
        "tip": "Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Ginagamit ng scammer ang pangalan ng pamilya para takutin ka. Tawagan ang totoong naka-save na numero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PHILPOST",
        "message": "PHILPOST: May nahanap na undeclared items ang customs. I-clear sa gcash-update.ph-verify.top para sa P8,000.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng PHILPOST para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC Customs: Naka-pending sa inspection ang international parcel mo. Bayaran ang P500 inspection fee sa gcash-update.ph-verify.top.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng LBC para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: May nahanap na undeclared items ang customs. I-clear sa bit.ly/verify-now para sa P5,000.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng LBC para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold sa customs ang package mo. Bayaran ang P45,000 clearance fee sa smart-rewar-ds.top para ma-release.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng LBC para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PHILPOST",
        "message": "PHILPOST: Naka-hold sa customs ang package mo. Bayaran ang P12,000 clearance fee sa pagibig-loan-release.site para ma-release.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng PHILPOST para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LBC",
        "message": "LBC: May nahanap na undeclared items ang customs. I-clear sa pagibig-loan-release.site para sa P100,000.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng LBC para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: May nahanap na undeclared items ang customs. I-clear sa jnt-tracking-ph.site para sa P150.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng LBC para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold sa customs ang package mo. Bayaran ang P500 clearance fee sa shopee-refund-ph.site para ma-release.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng LBC para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "PHILPOST",
        "message": "PHILPOST: May nahanap na undeclared items ang customs. I-clear sa g-cash-verify-ph.top para sa P100,000.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng PHILPOST para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LBC",
        "message": "LBC Customs: Naka-pending sa inspection ang international parcel mo. Bayaran ang P250 inspection fee sa shopee-refund-ph.site.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng LBC para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: May nahanap na undeclared items ang customs. I-clear sa bit.ly/verify-now para sa P100,000.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng LBC para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC Customs: Naka-pending sa inspection ang international parcel mo. Bayaran ang P100,000 inspection fee sa gov-ph-tax.site.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng LBC para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold sa customs ang package mo. Bayaran ang P25,000 clearance fee sa bdo-secure-login-verify.top para ma-release.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng LBC para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LBC",
        "message": "LBC: Naka-hold sa customs ang package mo. Bayaran ang P150 clearance fee sa pagibig-loan-release.site para ma-release.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng LBC para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May gusto ang customs na clearance fee. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "PHILPOST",
        "message": "PHILPOST: Naka-hold sa customs ang package mo. Bayaran ang P150 clearance fee sa smart-rewar-ds.top para ma-release.",
        "question": "May gusto ang customs na clearance fee. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Tawagan ang opisyal na hotline ng PHILPOST para i-check kung totoo.",
            "correct": true,
            "feedback": "Tama. Nag-verify ka sa opisyal na channel. Peke ang text na customs scam."
          },
          {
            "id": "b",
            "text": "Bayaran ang fee para ma-release ng customs ang package ko.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-confirm.",
            "correct": false,
            "feedback": "Hindi naniningil ng fee ang customs sa text, at kung wala ka namang pinadala mula abroad, wala nang icle-clear."
          }
        ],
        "tip": "Hindi naniningil ng fee ang customs sa text."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng fee ang customs sa text.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: ikakansela ang benefits mo Mag-re-register sa bdo-secure-login-verify.top o mawawala ang SIM mo.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng Globe at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe: Hindi fully registered ang SIM mo. Kumpletuhin sa jnt-tracking-ph.site o putulin ang line mo.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng Globe at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe: Kailangan ng bagong SIM rules na mag-verify ka sa maya-security-alert.xyz sa loob ng 48 oras.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng Globe at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "driver ng jeepney. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: ibabalik ang parcel mo Mag-re-register sa g-cash-verify-ph.top o mawawala ang SIM mo.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng Globe at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "DITO",
        "message": "DITO: naka-lock ang account mo Mag-re-register sa g-cash-verify-ph.top o mawawala ang SIM mo.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng DITO at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Smart",
        "message": "Smart: Hindi fully registered ang SIM mo. Kumpletuhin sa bit.ly/verify-now o putulin ang line mo.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng Smart at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Kailangan ng bagong SIM rules na mag-verify ka sa bit.ly/verify-now sa loob ng 48 oras.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng DITO at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "Globe",
        "message": "Globe: Kailangan ng bagong SIM rules na mag-verify ka sa bit.ly/verify-now sa loob ng 48 oras.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng Globe at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Kailangan ng bagong SIM rules na mag-verify ka sa pagibig-loan-release.site sa loob ng 48 oras.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng Globe at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "DITO",
        "message": "DITO: Kailangan ng bagong SIM rules na mag-verify ka sa shopee-refund-ph.site sa loob ng 48 oras.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng DITO at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "DITO",
        "message": "DITO: mawawala ang pera mo sa loob ng 24 oras Mag-re-register sa shopee-refund-ph.site o mawawala ang SIM mo.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng DITO at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Hindi fully registered ang SIM mo. Kumpletuhin sa bit.ly/verify-now o putulin ang line mo.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng Smart at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Globe",
        "message": "Globe: Kailangan ng bagong SIM rules na mag-verify ka sa bit.ly/verify-now sa loob ng 48 oras.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng Globe at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Smart",
        "message": "Smart: Hindi fully registered ang SIM mo. Kumpletuhin sa shopee-refund-ph.site o putulin ang line mo.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng Smart at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "Globe",
        "message": "Globe: Hindi fully registered ang SIM mo. Kumpletuhin sa bit.ly/verify-now o putulin ang line mo.",
        "question": "May mensaheng nagsasabing ide-deactivate ang SIM mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Buksan ang opisyal na website o app ng Globe at i-check doon.",
            "correct": true,
            "feedback": "Tama. Ang SIM registration ay nangyayari lamang sa opisyal na telco channel."
          },
          {
            "id": "b",
            "text": "I-click ang link at ilagay ang ID ko.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          },
          {
            "id": "c",
            "text": "Tawagan ang numero sa text.",
            "correct": false,
            "feedback": "Kinokolekta ng link na iyan ang ID mo. Hindi ka tina-text ng totoong telco para mag-register sa random link."
          }
        ],
        "tip": "Mag-register ng SIM sa opisyal na telco channel lamang."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-register ng SIM sa opisyal na telco channel lamang.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LendFast",
        "message": "Final notice: bayaran ang P8,000 ngayon para maiwasan ang escalation.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P8,000 para maghintay sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para tumigil sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Bayaran ang overdue penalty mong P150 ngayon o kokontakin namin ang lahat ng contacts mo sa bit.ly/verify-now.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P150 para maghintay sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para tumigil sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CashKo",
        "message": "Bayaran ang overdue penalty mong P100,000 ngayon o kokontakin namin ang lahat ng contacts mo sa maya-security-alert.xyz.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P100,000 para maghintay sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para tumigil sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "CashKo",
        "message": "Final notice: bayaran ang P45,000 ngayon para maiwasan ang escalation.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para tumigil sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CashKo",
        "message": "Ang loan penalty mo ay P8,000. Bayaran ngayon sa pagibig-loan-release.site o ma-notify ang contacts mo.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para tumigil sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Ipadala ang P8,000 para maghintay sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Final notice: bayaran ang P12,000 ngayon para maiwasan ang escalation.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para tumigil sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "LendFast",
        "message": "Final notice: bayaran ang P500 ngayon para maiwasan ang escalation.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para tumigil sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "CashKo",
        "message": "Final notice: bayaran ang P500 ngayon para maiwasan ang escalation.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para tumigil sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CashKo",
        "message": "Ang loan penalty mo ay P1,500. Bayaran ngayon sa shopee-refund-ph.site o ma-notify ang contacts mo.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Ipadala ang P1,500 para maghintay sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Final notice: bayaran ang P12,000 ngayon para maiwasan ang escalation.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P12,000 para maghintay sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Bayaran ang overdue penalty mong P25,000 ngayon o kokontakin namin ang lahat ng contacts mo sa pagibig-loan-release.site.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para tumigil sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "LendFast",
        "message": "Bayaran ang overdue penalty mong P150 ngayon o kokontakin namin ang lahat ng contacts mo sa maya-security-alert.xyz.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P150 para maghintay sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Mag-reply para mag-negotiate.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "vishing",
        "senderLabel": "CashKo",
        "message": "Ang loan penalty mo ay P12,000. Bayaran ngayon sa shopee-refund-ph.site o ma-notify ang contacts mo.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Bayaran ang penalty para tumigil sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Ipadala ang P12,000 para maghintay sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "LendFast",
        "message": "Ang loan penalty mo ay P8,000. Bayaran ngayon sa gov-ph-tax.site o ma-notify ang contacts mo.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P8,000 para maghintay sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para tumigil sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "CashKo",
        "message": "Ang loan penalty mo ay P150. Bayaran ngayon sa maya-security-alert.xyz o ma-notify ang contacts mo.",
        "question": "May lender na nagbabanta na kontakin ang lahat. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Huwag magbayad. I-report ang harassment sa DTI o CICC.",
            "correct": true,
            "feedback": "Tama. Illegal ang loan-app harassment; i-report ito imbes na magbayad sa estranghero."
          },
          {
            "id": "b",
            "text": "Ipadala ang P150 para maghintay sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          },
          {
            "id": "c",
            "text": "Bayaran ang penalty para tumigil sila.",
            "correct": false,
            "feedback": "Ang pagbabayad sa estranghero ay hindi tumitigil sa mga banta; i-report ito sa awtoridad."
          }
        ],
        "tip": "Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Hindi naniningil ng penalty ang totoong lender sa pamamagitan ng estranghero.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "may-ari ng sari-sari store. May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Kailangan ng orphanage na ito ng P100,000. Mag-donate ngayon at iligtas ang isang bata.",
        "question": "May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna kung totoo at na-verify ang charity.",
            "correct": true,
            "feedback": "Tama. I-verify ang charity sa pamamagitan ng opisyal na channel bago magbigay."
          },
          {
            "id": "b",
            "text": "Ipadala ang P100,000 para matulungan ang mga biktima.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero para makapag-donate ang iba.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify na opisyal na channel."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-donate lamang sa na-verify na opisyal na channel.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ChurchAid",
        "message": "Tulungan ang typhoon drive namin! Bawat P12,000 ay nagpapakain ng pamilya. Ipadala sa numerong ito.",
        "question": "May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna kung totoo at na-verify ang charity.",
            "correct": true,
            "feedback": "Tama. I-verify ang charity sa pamamagitan ng opisyal na channel bago magbigay."
          },
          {
            "id": "b",
            "text": "Ipadala ang P12,000 para matulungan ang mga biktima.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero para makapag-donate ang iba.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify na opisyal na channel."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-donate lamang sa na-verify na opisyal na channel.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ReliefFund",
        "message": "Mag-donate sa mga biktima ng bagyo! Ipadala ang P12,000 sa numerong ito. Bawat piso ay nakakatulong.",
        "question": "May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna kung totoo at na-verify ang charity.",
            "correct": true,
            "feedback": "Tama. I-verify ang charity sa pamamagitan ng opisyal na channel bago magbigay."
          },
          {
            "id": "b",
            "text": "Ipadala ang P12,000 para matulungan ang mga biktima.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero para makapag-donate ang iba.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify na opisyal na channel."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-donate lamang sa na-verify na opisyal na channel.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ReliefFund",
        "message": "Kailangan ng orphanage na ito ng P100,000. Mag-donate ngayon at iligtas ang isang bata.",
        "question": "May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna kung totoo at na-verify ang charity.",
            "correct": true,
            "feedback": "Tama. I-verify ang charity sa pamamagitan ng opisyal na channel bago magbigay."
          },
          {
            "id": "b",
            "text": "I-share ang numero para makapag-donate ang iba.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          },
          {
            "id": "c",
            "text": "Ipadala ang P100,000 para matulungan ang mga biktima.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify na opisyal na channel."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-donate lamang sa na-verify na opisyal na channel.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Tulungan ang typhoon drive namin! Bawat P25,000 ay nagpapakain ng pamilya. Ipadala sa numerong ito.",
        "question": "May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna kung totoo at na-verify ang charity.",
            "correct": true,
            "feedback": "Tama. I-verify ang charity sa pamamagitan ng opisyal na channel bago magbigay."
          },
          {
            "id": "b",
            "text": "Ipadala ang P25,000 para matulungan ang mga biktima.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero para makapag-donate ang iba.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify na opisyal na channel."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-donate lamang sa na-verify na opisyal na channel.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Mag-donate sa mga biktima ng bagyo! Ipadala ang P45,000 sa numerong ito. Bawat piso ay nakakatulong.",
        "question": "May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna kung totoo at na-verify ang charity.",
            "correct": true,
            "feedback": "Tama. I-verify ang charity sa pamamagitan ng opisyal na channel bago magbigay."
          },
          {
            "id": "b",
            "text": "I-share ang numero para makapag-donate ang iba.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          },
          {
            "id": "c",
            "text": "Ipadala ang P45,000 para matulungan ang mga biktima.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify na opisyal na channel."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-donate lamang sa na-verify na opisyal na channel.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ReliefFund",
        "message": "Tulungan ang typhoon drive namin! Bawat P45,000 ay nagpapakain ng pamilya. Ipadala sa numerong ito.",
        "question": "May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna kung totoo at na-verify ang charity.",
            "correct": true,
            "feedback": "Tama. I-verify ang charity sa pamamagitan ng opisyal na channel bago magbigay."
          },
          {
            "id": "b",
            "text": "I-share ang numero para makapag-donate ang iba.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          },
          {
            "id": "c",
            "text": "Ipadala ang P45,000 para matulungan ang mga biktima.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify na opisyal na channel."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-donate lamang sa na-verify na opisyal na channel.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ChurchAid",
        "message": "Kailangan ng orphanage na ito ng P1,500. Mag-donate ngayon at iligtas ang isang bata.",
        "question": "May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna kung totoo at na-verify ang charity.",
            "correct": true,
            "feedback": "Tama. I-verify ang charity sa pamamagitan ng opisyal na channel bago magbigay."
          },
          {
            "id": "b",
            "text": "Ipadala ang P1,500 para matulungan ang mga biktima.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero para makapag-donate ang iba.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify na opisyal na channel."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-donate lamang sa na-verify na opisyal na channel.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ReliefFund",
        "message": "Tulungan ang typhoon drive namin! Bawat P25,000 ay nagpapakain ng pamilya. Ipadala sa numerong ito.",
        "question": "May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna kung totoo at na-verify ang charity.",
            "correct": true,
            "feedback": "Tama. I-verify ang charity sa pamamagitan ng opisyal na channel bago magbigay."
          },
          {
            "id": "b",
            "text": "I-share ang numero para makapag-donate ang iba.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          },
          {
            "id": "c",
            "text": "Ipadala ang P25,000 para matulungan ang mga biktima.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify na opisyal na channel."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-donate lamang sa na-verify na opisyal na channel.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "ChurchAid",
        "message": "Tulungan ang typhoon drive namin! Bawat P45,000 ay nagpapakain ng pamilya. Ipadala sa numerong ito.",
        "question": "May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna kung totoo at na-verify ang charity.",
            "correct": true,
            "feedback": "Tama. I-verify ang charity sa pamamagitan ng opisyal na channel bago magbigay."
          },
          {
            "id": "b",
            "text": "Ipadala ang P45,000 para matulungan ang mga biktima.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero para makapag-donate ang iba.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify na opisyal na channel."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-donate lamang sa na-verify na opisyal na channel.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "call-center agent. May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Tulungan ang typhoon drive namin! Bawat P150 ay nagpapakain ng pamilya. Ipadala sa numerong ito.",
        "question": "May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna kung totoo at na-verify ang charity.",
            "correct": true,
            "feedback": "Tama. I-verify ang charity sa pamamagitan ng opisyal na channel bago magbigay."
          },
          {
            "id": "b",
            "text": "I-share ang numero para makapag-donate ang iba.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          },
          {
            "id": "c",
            "text": "Ipadala ang P150 para matulungan ang mga biktima.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify na opisyal na channel."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-donate lamang sa na-verify na opisyal na channel.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "chat",
        "senderLabel": "ReliefFund",
        "message": "Mag-donate sa mga biktima ng bagyo! Ipadala ang P2,000 sa numerong ito. Bawat piso ay nakakatulong.",
        "question": "May estranghero na humihingi ng donasyon. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "I-check muna kung totoo at na-verify ang charity.",
            "correct": true,
            "feedback": "Tama. I-verify ang charity sa pamamagitan ng opisyal na channel bago magbigay."
          },
          {
            "id": "b",
            "text": "Ipadala ang P2,000 para matulungan ang mga biktima.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          },
          {
            "id": "c",
            "text": "I-share ang numero para makapag-donate ang iba.",
            "correct": false,
            "feedback": "Ginagamit ng scammer ang disaster para mangolekta ng 'donasyon' na sa kanila napupunta, hindi sa biktima."
          }
        ],
        "tip": "Mag-donate lamang sa na-verify na opisyal na channel."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Mag-donate lamang sa na-verify na opisyal na channel.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Parang totoong mensahe ito. Scam ba?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Shopee",
        "message": "Shopee: Na-ship na ang order mo. I-track sa app.",
        "question": "Parang totoong mensahe ito. Scam ba?",
        "options": [
          {
            "id": "a",
            "text": "Totoo ito. Galing sa opisyal na sender at hindi humihingi ng ipapadala.",
            "correct": true,
            "feedback": "Tama. Sinasabi sa iyo ng totoong OTP text na itago ito; ang scam ay ang sinumang NAGTATANONG na ipadala ito."
          },
          {
            "id": "b",
            "text": "Mag-reply para i-confirm ang identity ko.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          },
          {
            "id": "c",
            "text": "Scam ito dahil binanggit nito ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          }
        ],
        "tip": "Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensahe mula sa kumpanyang ginagamit mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Maya",
        "message": "Maya: Na-ship na ang order mo. I-track sa app.",
        "question": "May mensahe mula sa kumpanyang ginagamit mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Totoo ito. Galing sa opisyal na sender at hindi humihingi ng ipapadala.",
            "correct": true,
            "feedback": "Tama. Sinasabi sa iyo ng totoong OTP text na itago ito; ang scam ay ang sinumang NAGTATANONG na ipadala ito."
          },
          {
            "id": "b",
            "text": "I-block at i-report.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          },
          {
            "id": "c",
            "text": "Scam ito dahil binanggit nito ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          }
        ],
        "tip": "Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensahe mula sa kumpanyang ginagamit mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "sms",
        "senderLabel": "Lazada",
        "message": "Lazada: Salamat sa cash-in mong P500. Available na ang bagong balance mo sa app.",
        "question": "May mensahe mula sa kumpanyang ginagamit mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Totoo ito. Galing sa opisyal na sender at hindi humihingi ng ipapadala.",
            "correct": true,
            "feedback": "Tama. Sinasabi sa iyo ng totoong OTP text na itago ito; ang scam ay ang sinumang NAGTATANONG na ipadala ito."
          },
          {
            "id": "b",
            "text": "I-block at i-report.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          },
          {
            "id": "c",
            "text": "Scam ito dahil binanggit nito ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          }
        ],
        "tip": "Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. May mensahe mula sa kumpanyang ginagamit mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Lazada",
        "message": "Lazada: Salamat sa cash-in mong P1,000,000. Available na ang bagong balance mo sa app.",
        "question": "May mensahe mula sa kumpanyang ginagamit mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Totoo ito. Galing sa opisyal na sender at hindi humihingi ng ipapadala.",
            "correct": true,
            "feedback": "Tama. Sinasabi sa iyo ng totoong OTP text na itago ito; ang scam ay ang sinumang NAGTATANONG na ipadala ito."
          },
          {
            "id": "b",
            "text": "Scam ito dahil binanggit nito ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          },
          {
            "id": "c",
            "text": "Mag-reply para i-confirm ang identity ko.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          }
        ],
        "tip": "Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "OFW sa Riyadh. May mensahe mula sa kumpanyang ginagamit mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Salamat sa cash-in mong P45,000. Available na ang bagong balance mo sa app.",
        "question": "May mensahe mula sa kumpanyang ginagamit mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Totoo ito. Galing sa opisyal na sender at hindi humihingi ng ipapadala.",
            "correct": true,
            "feedback": "Tama. Sinasabi sa iyo ng totoong OTP text na itago ito; ang scam ay ang sinumang NAGTATANONG na ipadala ito."
          },
          {
            "id": "b",
            "text": "I-block at i-report.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          },
          {
            "id": "c",
            "text": "Scam ito dahil binanggit nito ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          }
        ],
        "tip": "Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "Lola sa probinsya. Parang totoong mensahe ito. Scam ba?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GCash",
        "message": "GCash: Ang verification code mo ay 4126. Huwag ibahagi ang code na ito kanino man. Hindi ito hihingiin ng GCash.",
        "question": "Parang totoong mensahe ito. Scam ba?",
        "options": [
          {
            "id": "a",
            "text": "Totoo ito. Galing sa opisyal na sender at hindi humihingi ng ipapadala.",
            "correct": true,
            "feedback": "Tama. Sinasabi sa iyo ng totoong OTP text na itago ito; ang scam ay ang sinumang NAGTATANONG na ipadala ito."
          },
          {
            "id": "b",
            "text": "Scam ito dahil binanggit nito ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          },
          {
            "id": "c",
            "text": "Mag-reply para i-confirm ang identity ko.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          }
        ],
        "tip": "Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "kolehiyala sa Maynila. May mensahe mula sa kumpanyang ginagamit mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Na-ship na ang order mo. I-track sa app.",
        "question": "May mensahe mula sa kumpanyang ginagamit mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Totoo ito. Galing sa opisyal na sender at hindi humihingi ng ipapadala.",
            "correct": true,
            "feedback": "Tama. Sinasabi sa iyo ng totoong OTP text na itago ito; ang scam ay ang sinumang NAGTATANONG na ipadala ito."
          },
          {
            "id": "b",
            "text": "I-block at i-report.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          },
          {
            "id": "c",
            "text": "Scam ito dahil binanggit nito ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          }
        ],
        "tip": "Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "maliit na online seller. Parang totoong mensahe ito. Scam ba?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Maya",
        "message": "Maya: Ang verification code mo ay 4126. Huwag ibahagi ang code na ito kanino man. Hindi ito hihingiin ng Maya.",
        "question": "Parang totoong mensahe ito. Scam ba?",
        "options": [
          {
            "id": "a",
            "text": "Totoo ito. Galing sa opisyal na sender at hindi humihingi ng ipapadala.",
            "correct": true,
            "feedback": "Tama. Sinasabi sa iyo ng totoong OTP text na itago ito; ang scam ay ang sinumang NAGTATANONG na ipadala ito."
          },
          {
            "id": "b",
            "text": "Scam ito dahil binanggit nito ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          },
          {
            "id": "c",
            "text": "I-block at i-report.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          }
        ],
        "tip": "Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. Parang totoong mensahe ito. Scam ba?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "Shopee",
        "message": "Shopee: Ang verification code mo ay 4126. Huwag ibahagi ang code na ito kanino man. Hindi ito hihingiin ng Shopee.",
        "question": "Parang totoong mensahe ito. Scam ba?",
        "options": [
          {
            "id": "a",
            "text": "Totoo ito. Galing sa opisyal na sender at hindi humihingi ng ipapadala.",
            "correct": true,
            "feedback": "Tama. Sinasabi sa iyo ng totoong OTP text na itago ito; ang scam ay ang sinumang NAGTATANONG na ipadala ito."
          },
          {
            "id": "b",
            "text": "Mag-reply para i-confirm ang identity ko.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          },
          {
            "id": "c",
            "text": "I-block at i-report.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          }
        ],
        "tip": "Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
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
    "setup": "senior pensioner. May mensahe mula sa kumpanyang ginagamit mo. Ano ang gagawin mo?",
    "steps": [
      {
        "id": "s1",
        "channel": "email",
        "senderLabel": "GCash",
        "message": "GCash: Salamat sa cash-in mong P100,000. Available na ang bagong balance mo sa app.",
        "question": "May mensahe mula sa kumpanyang ginagamit mo. Ano ang gagawin mo?",
        "options": [
          {
            "id": "a",
            "text": "Totoo ito. Galing sa opisyal na sender at hindi humihingi ng ipapadala.",
            "correct": true,
            "feedback": "Tama. Sinasabi sa iyo ng totoong OTP text na itago ito; ang scam ay ang sinumang NAGTATANONG na ipadala ito."
          },
          {
            "id": "b",
            "text": "Mag-reply para i-confirm ang identity ko.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          },
          {
            "id": "c",
            "text": "Scam ito dahil binanggit nito ang code.",
            "correct": false,
            "feedback": "Ang pag-flag sa bawat totoong mensahe ay magtitiwala ka sa wala. Ang test ay kung may NAGTATANONG sa iyo na kumilos."
          }
        ],
        "tip": "Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code."
      }
    ],
    "debrief": "Na-practice mo ang patakaran: Umiiral ang totoong OTP text. Ang scam ay ang sinumang nagtatanong sa iyo na IPADALA ang code.. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
    "source": "generated"
  }
];
