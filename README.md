# ⚖️ UK Law Life Quest

A free, web-based game for learning the law of the United Kingdom by living a whole life: from birth, through school, the teenage years, study, work and family, to retirement and death.

Written in plain English so teenagers can follow it, with enough detail for adults to learn something too.

## What's inside

| | |
|---|---|
| **13 life stages** | Birth · School · Teen rights · Police & courts · Turning 18 & democracy · Uni & training · Work · Transport · Health & the NHS · Money, shopping & home · Love & family · Retirement · Death & inheritance |
| **78 animated scenes** | Every stage opens with a 6-scene animated explainer, with optional read-aloud voice |
| **201 law cards** | Each one names the Act it comes from, shows where in the UK it applies, and links to the official source |
| **131 quiz questions** | With an explanation after every answer, and a revision deck that collects the ones you miss |
| **28 true law stories** | Real cases (the snail in the bottle, the Post Office scandal, Uber drivers…) where *you* give the verdict before seeing what the court decided |
| **6 arcade games** | Age Ladder · Myth Buster · Sort the Court · Bill Builder · Revision Deck · The Final Bar Exam |
| **Progress** | XP, 8 ranks from *Curious Citizen* to *Supreme Court Justice*, passport stamps, a day streak and a printable certificate |
| **References** | GOV.UK, legislation.gov.uk, NHS, Parliament, Acas, Citizens Advice, plus video links for every stage |

## Play it

No install and no build step. It is plain HTML, CSS and JavaScript.

- **Locally:** download the repository and open `index.html` in any modern browser.
- **Online with GitHub Pages:** in the repository go to **Settings → Pages**, choose **Deploy from a branch**, pick the branch that contains these files and the `/ (root)` folder, then save. The game appears at `https://<your-username>.github.io/UK-Laws/` a minute or so later.

Progress is saved only in your own browser (`localStorage`). Nothing is sent anywhere.

## Project layout

```
index.html                         page shell
css/style.css                      all styling, light and dark themes, animations
js/app.js                          game engine: routing, theatre, quiz player, arcade, passport
js/data/00-core.js                 ranks, glossary, link helpers
js/data/01-birth-school-teen.js    life stages 1–3
js/data/02-justice-adult-study.js  life stages 4–6
js/data/03-work-road-health.js     life stages 7–9
js/data/04-money-family-retire-death.js  life stages 10–13
js/data/05-stories.js              the 28 law stories
js/data/06-arcade.js               data for the arcade games
```

### Adding or updating content

All content lives in `js/data/`. You never need to touch the engine.

- **A law card** is one line in a stage's `facts` list: `[title, explanation, name of the Act, where it applies, source link]`. The "where" codes are `UK`, `GB`, `EW`, `ENG`, `SCO`, `WAL`, `NI` and `MIX`.
- **A quiz question** is `{ q, o: [options], a: index of the right option, why }`.
- **An animated scene** is `{ bg, cap, actors }`, where each actor is `[emoji, x%, y%, size, animation, optional speech bubble]`. Backgrounds: `sky`, `room`, `office`, `hospital`, `court`, `road`, `night`. Animations: `pop`, `bounce`, `float`, `sway`, `shake`, `pulse`, `drop`, `walk-r`, `walk-l`, `zoom`, `spin-slow`, `slide-across`, `pingpong`.
- **A story** is one `S(...)` call in `05-stories.js`.

## Accuracy and limits

- Content was checked against public sources in **November 2026**. Figures that change every year (minimum wage, State Pension, tuition fees, prescription charges) and laws that are still being phased in (Employment Rights Act 2025, Renters' Rights Act 2025, Tobacco and Vapes Act 2026, votes at 16) will go out of date. Each card links to the official page so players can check.
- The UK has three legal systems: England & Wales, Scotland, and Northern Ireland. Cards are labelled with where they apply, but the game covers England in the most depth.
- Video references are YouTube *search* links and official channels rather than individual videos, so that they do not break when a video is removed.
- **This is a learning game, not legal advice.** For a real problem, contact [Citizens Advice](https://www.citizensadvice.org.uk/) or a solicitor. Young people can call [Childline](https://www.childline.org.uk/) free on 0800 1111.
