# Brief→Green

**IBM Bob 2.0 Hackathon** · lablab.ai · Sep 25–27, 2026 · Solo under **KAMEVETRICS** / [@kongclaves](https://x.com/kongclaves)

> Drop a product brief → Bob **Plan** → parallel **Agent / subagents** → a **green** working slice you can demo.

## Problem
Going from a written feature brief to a merge-ready, tested change is slow and error-prone: scope drifts, tests lag, and “done” is fuzzy. Teams burn hours translating docs into tickets and tickets into code.

## Solution
**Brief→Green** is a thin workflow product plus a sample app that shows the full loop:

1. **Ingest** a brief (Markdown now; DOCX/PDF via Bob document understanding during the hackathon).
2. **Plan** with IBM Bob 2.0 Plan mode — scoped steps, risks, acceptance checks.
3. **Execute** with Agent mode + **subagents** + **parallel tasks** (implement + tests together).
4. **Prove green** — live demo + Bob **task session summary** screenshots (required by judges).

## Why this wins for Bob 2.0
Official challenge asks for a developer-workflow improvement that uses **Agent, parallel tasks, subagents, and document understanding** across multiple steps — not autocomplete. Brief→Green is that story end-to-end.

| Bob 2.0 capability | Where it shows |
|---|---|
| Document understanding | Product brief (DOCX/PDF/MD) |
| Plan mode | Spec → implementation plan |
| Agent + subagents | Parallel implement / test / docs lanes |
| Parallel + background tasks | Fan-out workstreams |
| Session summaries | `docs/bob-sessions/` evidence for submission |

## Repo layout
```
apps/sample-board/     # sample product with an intentional feature gap
apps/brief-green/      # dashboard narrating brief → plan → green
briefs/                # sample PRD / feature brief
docs/48h-plan.md       # build schedule to Sunday 8:00 AM PT submit
docs/demo-script.md    # 2–4 min demo outline
docs/bob-sessions/     # drop Bob session screenshots here
```

## Quick start (after scaffold lands)
```bash
cd apps/sample-board && npm install && npm run dev
# separate terminal
cd apps/brief-green && npm install && npm run dev
```

## Hackathon links
- Event: https://lablab.ai/ai-hackathons/ibm-bob-2-hackathon
- Discord: https://discord.gg/lablabai
- Bob: https://bob.ibm.com/

## License
MIT — required for lablab prize eligibility.
