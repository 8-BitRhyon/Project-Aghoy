# scripts/generate-vishing-audio.py - generate the Dojo's vishing drill audio
# once, offline, with a free zero-model TTS (gTTS, Google's unofficial endpoint).
#
# Why: the Dojo's vishing drills need a spoken scammer voice for immersion, but
# there is no lightweight on-device Taglish TTS (verified: MMS-TTS is CC-BY-NC,
# Piper has no PH voice, Kokoro has no Tagalog). Pre-generating ~10 MP3s with
# gTTS (lang='tl') and bundling them under public/audio/ gives the immersion
# with: no runtime model, no network at play time, no license risk, and it
# works on the weakest 2GB phone with zero WiFi.
#
# The scripts are the vishing message templates from
# src/dojo/dojo-templates-tagalog.ts, filled with real brand names + amounts
# and adapted from written to spoken Taglish (contractions, no punctuation).
#
# Run (from repo root, in .venv-train):
#   .venv-train/bin/pip install gtts
#   .venv-train/bin/python scripts/generate-vishing-audio.py

import json
import os
import re
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent

# Spoken scripts: each is a complete vishing call line, keyed by the archetype
# it trains. These mirror the Dojo's vishing message templates (the text the
# learner reads while hearing this audio). All {slots} are filled with real,
# PH-plausible values. Written form -> spoken Taglish: full sentences, no
# "ng" abbreviations that TTS would misread, commas for natural pauses.
VISHING_SCRIPTS = {
    "fraud-card": (
        "Ito po ang BDO fraud department. Nagkaroon po ng hindi awtorisadong "
        "transaksyon sa inyong card, aabot sa dalawampung libong piso. Upang "
        "mapigilan ito, pakibasa po ang numero ng inyong card at ang tatlong "
        "digit code sa likod nito."
    ),
    "otp-readback": (
        "Kailangan po nating i-secure agad ang inyong account. Nagpadala po "
        "ako ng verification code sa inyong telepono. Pakibasa po ito pabalik "
        "sa akin ngayon."
    ),
    "tech-support": (
        "Ito po ang GCash tech support. Na-hack po ang inyong account. "
        "Upang ma-secure ito, pakibigay po ang code na ipinadala sa inyong "
        "telepono ngayon."
    ),
    "account-access": (
        "Tumatawag po ako mula sa inyong bangko. May nagtangkang mag-login "
        "sa inyong account. Pakikumpirma po ang inyong mga detalye upang "
        "maprotektahan ang inyong pera."
    ),
    "fraud-reverse": (
        "Ako po ay agent ng BPI. Upang maibalik ang fraudulent transfer, "
        "kinakailangan ko po ang inyong one-time password. Pakibigay ito sa "
        "akin ngayon."
    ),
    "family-emergency": (
        "Nay o Tay, ako po ito. Nasira po ang aking telepono. Nasa ospital "
        "po ako at kailangan ko ng dalawampung libong piso. Pakiusap po, "
        "huwag munang tumawag, ipadala na lamang po sa numero na ito."
    ),
    "parcel-customs": (
        "Ito po ay tawag mula sa customs. Ang inyong parcel ay naka-hold "
        "para sa clearance fee na limang daang piso. Bayaran po ito ngayon "
        "upang ma-release ang inyong package."
    ),
    "refund-error": (
        "Ito po ay tungkol sa inyong double refund. Nagkaroon po ng error "
        "at kailangan naming i-verify ang inyong account upang maibalik "
        "ang inyong pera."
    ),
}

OUT_DIR = REPO / "public" / "audio"
MANIFEST = OUT_DIR / "vishing-manifest.json"


def slug(name: str) -> str:
    return name.replace("_", "-")


def main() -> None:
    from gtts import gTTS

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest = {"generated_at": None, "engine": "gTTS(lang=tl)", "scripts": {}}
    for name, text in VISHING_SCRIPTS.items():
        fname = f"vishing-{slug(name)}.mp3"
        path = OUT_DIR / fname
        tts = gTTS(text=text, lang="tl")
        tts.save(str(path))
        size_kb = path.stat().st_size / 1024
        manifest["scripts"][name] = {"file": fname, "size_kb": round(size_kb, 1)}
        print(f"  {fname}: {size_kb:.0f} KB")

    import datetime

    manifest["generated_at"] = (
        datetime.datetime.now(datetime.timezone.utc).isoformat().replace("+00:00", "Z")
    )
    MANIFEST.write_text(json.dumps(manifest, indent=2))
    total = sum(s["size_kb"] for s in manifest["scripts"].values())
    print(f"\nGenerated {len(VISHING_SCRIPTS)} scripts -> {OUT_DIR}")
    print(f"Total: {total:.0f} KB - offline-bundled, zero runtime model.")


if __name__ == "__main__":
    main()
