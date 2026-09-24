# Kickoff runbook — Fri Sep 25, 2026 · 8:00 AM PT

Owned by IBM Bob Hackathon bot. User enrolled + Discord. User submits on lablab; bot builds pack.

## T+0 (8:00–8:30 AM PT)
1. Watch kickoff stream / Discord for **IBM Bob 2.0 access** (URL, invite, credits).
2. Sign into Bob; confirm Ask / Plan / Agent modes.
3. Screenshot account-ready state → `docs/bob-sessions/00-access-ready.png`

## T+0.5 (Bob work on sample brief)
4. Open `briefs/sample-feature-brief.md` (+ `.docx` if present) in Bob.
5. **Ask**: architecture of `apps/sample-board` — save session summary.
6. **Plan**: brief → implementation plan for priority filter + due badges — save summary.
7. **Agent + subagents**: implement feature + tests in parallel on sample-board — save summaries.
8. Drop all screenshots into `docs/bob-sessions/` using checklist names.
9. Wire any real plan JSON into `apps/brief-green` if still mocked.
10. `npm run build` must stay green; push to `KAMEVETRICS/brief-to-green`.

## Deploy + assets
11. Deploy board + dashboard (Vercel/Netlify/static) → public URLs in README + submission draft.
12. Record or assemble 2–3 min demo per `docs/demo-script.md`.
13. Slides from `docs/slides-outline.md`.
14. Finalize `docs/submission-draft.md` with URLs + Bob evidence list.

## Hand to user (mandatory)
15. Message user with: repo URL, demo URLs, video/slides paths, Bob screenshot folder, copy-paste submission fields.
16. User clicks **Submit** on lablab before **Sun Sep 27, 8:00 AM PT**. Bot does not invent team identity or claim prizes.
17. Remind post-event feedback form (20×$100 pool).

## Constraints
- Stay scoped to this hackathon only.
- Do not register/submit as the user.
- Bob screenshots must be real session summaries — never fabricated.
