# TrainerTwin onboarding prototype

Static HTML/JS/CSS prototype (no build step). `v3` is the Twin-enabled prototype, `v4` an alternative; both read shared assets from `media/`.

Run locally from this folder:

    python3 -m http.server 8765

Then open http://localhost:8765/v3/index.html (add `?onboarding=1` to start at Build my twin).

Live copy: https://trainertwin-beta.vercel.app/ (opens at onboarding; `?app=1` opens the signed-in app).
