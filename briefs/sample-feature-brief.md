# Product brief: Priority filter & Due-date badges

| Field | Value |
|-------|-------|
| **Product** | Sample Board (`apps/sample-board`) |
| **Author** | KAMEVETRICS (hackathon sample PRD) |
| **Status** | Ready for Bob Plan → Agent |
| **Priority** | P0 for Brief→Green demo |
| **Also available** | `briefs/sample-feature-brief.docx` (document understanding) |

---

## Context

Sample Board is a Kanban-style task board used as the **real sample project** for Brief→Green. Cards have title, status, assignee. **Seed data already includes `priority` and `dueDate`** so Agent work focuses on UI: a priority filter and due-date badges. Those controls are intentionally missing (see the BEFORE gap banner).

---

## Problem

Without a **priority filter** and **due-date badges**:

- Users cannot focus the board on High work.  
- Overdue / soon deadlines are invisible on cards.  
- Triage stays slower than standup needs.

---

## Goals

1. Keep `priority: 'low' | 'medium' | 'high'` on every task (already seeded).  
2. Keep optional `dueDate` (`YYYY-MM-DD`) on tasks (already seeded).  
3. Add a **Priority filter** above the board: All / High / Medium / Low.  
4. Show a **due-date badge** on each card: upcoming · soon (≤2 days) · overdue.  
5. Cover with lightweight tests or a Bob-run QA checklist.

### Non-goals

- Calendar picker redesign · recurring tasks · backend persistence · auth / multiplayer

---

## User stories

1. **As a** board user, **I want** to filter to High priority, **so that** I clear blockers first.  
2. **As a** board user, **I want** due badges on cards, **so that** overdue work is obvious.  
3. **As a** reviewer, **I want** acceptance checks, **so that** “green” is objective.

---

## Acceptance criteria

- [ ] Priority filter control above the board; All shows everything; levels hide non-matches.  
- [ ] Cards with `dueDate` show a badge (e.g. `Sep 26`) with tone: **overdue** / **soon** / **upcoming**.  
- [ ] Cards without due date: no badge (or muted “No due”).  
- [ ] Filter + badges compose correctly.  
- [ ] `npm run build` green for sample-board.  
- [ ] ≥1 automated test **or** Bob-run manual QA script for the happy path.

---

## UX notes

- Keep columns: To do / In progress / Done.  
- Filter: segmented control or `select` labeled **Priority** (replace the dashed “filter slot”).  
- Badge colors: CSS-only.

---

## Technical hints (for Bob Plan)

- Stack: Vite + React + TypeScript.  
- Extend UI only — `Task` already has `priority` / `dueDate` in `src/types.ts` + `src/data.ts`.  
- Suggested: `PriorityFilter`, `DueBadge`, helpers `dueTone(date)`, `matchesPriority(task, filter)`.  
- Files: `src/App.tsx`, `src/components/*`.

---

## Success metric

Wall-clock from “brief → Bob Plan” to “filter + badges + green checks”, with session summaries in `docs/bob-sessions/`.

---

## Defaults Bob may lock in Plan

- New-task default priority: **medium**  
- “Today” for overdue: **local browser date**
