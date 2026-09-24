# Brief→Green

**Drop a product brief → Bob Plan → parallel Agent/subagents → green checks.**

Built for the **[IBM Bob 2.0 Hackathon](https://lablab.ai/ai-hackathons/ibm-bob-2-hackathon)** (lablab.ai, **Sep 25–27, 2026**).  
Team: **KAMEVETRICS** · [@kongclaves](https://x.com/kongclaves)

> Judges see the loop — not a chatbot paste. Session summaries live in `docs/bob-sessions/`.

---

## Links

| | |
|--|--|
| **Hackathon** | https://lablab.ai/ai-hackathons/ibm-bob-2-hackathon |
| **Discord** | https://discord.gg/lablabai |
| **IBM Bob** | https://bob.ibm.com/ |
| **Repo** | https://github.com/KAMEVETRICS/brief-to-green |

---

## Problem

| Friction | Today |
|----------|--------|
| Spec ambiguity | Briefs sit in docs; engineers re-interpret under deadline pressure |
| Serial handoffs | Plan → code → tests → review one-at-a-time |
| Weak provenance | Hard to show *how* an AI coding agent drove the work |
| Rework | Missing acceptance criteria surface late as red CI |

**Brief→Green** treats the brief as source of truth, uses Bob to plan and parallelize on a real sample app, and proves impact with before/after metrics plus mandatory Bob session screenshots.

---

## Bob 2.0 capability map

| Bob capability | How Brief→Green uses it |
|----------------|-------------------------|
| **Ask** | Explain `apps/sample-board` architecture before changing it |
| **Plan** | Turn `briefs/sample-feature-brief.md` (or `.docx`) into a scoped plan |
| **Agent** | Execute the plan against the sample board |
| **Subagents + parallel tasks** | Fan out UI, filter logic, and tests as concurrent lanes |
| **Document understanding** | Ingest DOCX brief at kickoff (`briefs/sample-feature-brief.docx`) |
| **Session evidence** | Screenshot every Plan & Agent run into `docs/bob-sessions/` |

```
Brief (MD → DOCX)
        │
        ▼
   Bob Plan mode  ──►  scoped plan + acceptance
        │
        ▼
 Bob Agent + subagents (parallel)
   ┌─────────┬─────────┬─────────┐
   │ UI lane │ Logic   │ Tests   │
   └─────────┴─────────┴─────────┘
        │
        ▼
  sample-board green ✓  +  brief-green dashboard
```

---

## Repo layout

```
brief-to-green/
  apps/sample-board/     # Vite board — intentional BEFORE gap
  apps/brief-green/      # Dashboard: brief → plan → lanes → green + metrics
  briefs/                # sample-feature-brief.md (+ .docx)
  docs/
    demo-script.md       # 2–3 min shot list
    slides-outline.md    # 8–10 slide talk track
    bob-sessions/        # ★ mandatory judge evidence
    48h-plan.md
    submission-draft.md
  scripts/               # generate-brief-docx.py
```

---

## Run locally

Requires **Node 18+**.

```bash
npm install

# Sample board (port 5173) — BEFORE: gap banner, no filter/badges
npm run dev:board

# Brief→Green dashboard (port 5174) — mock Plan → parallel lanes → green
npm run dev:dashboard

# Production build (CI / sanity)
npm run build
```

No paid APIs. Dashboard uses mock plan JSON until Bob is live at kickoff — field names stay stable so a real Bob export can drop in.

### Regenerate DOCX brief

```bash
python3 -m venv .venv && .venv/bin/pip install python-docx
.venv/bin/python scripts/generate-brief-docx.py
```

---

## Evidence plan

1. After every Plan / Agent / subagent run, capture the Bob session summary UI.  
2. Drop PNGs into `docs/bob-sessions/` using names in that folder’s README (`00-ask-architecture.png` … `05-agent-green.png`).  
3. Keep the checklist ticked; flash the folder in the demo video.

---

## 48-hour window

| Milestone | Time (PT) |
|-----------|-----------|
| Kickoff · Bob access | **Fri Sep 25, 8:00 AM PT** |
| Submissions close | **Sun Sep 27, 8:00 AM PT** |

- Plan: [`docs/48h-plan.md`](docs/48h-plan.md)  
- Demo (2–3 min): [`docs/demo-script.md`](docs/demo-script.md)  
- Slides: [`docs/slides-outline.md`](docs/slides-outline.md)  
- Submission draft: [`docs/submission-draft.md`](docs/submission-draft.md)

---

## License

MIT — see [`LICENSE`](LICENSE). Submissions must be MIT-compliant for prize eligibility.
