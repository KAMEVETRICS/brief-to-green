# Feature brief: Priority filter + due-date badges

**Product:** Sample Board (kanban-style task board)
**Owner:** KAMEVETRICS hackathon demo
**Priority:** P0 for demo

## Problem
Users scanning the board cannot quickly see which tasks are urgent. Everything looks the same priority, and due dates are buried in detail views. This slows triage and causes missed deadlines.

## Goal
Let a user filter the board by priority and see due-date badges at a glance on each card.

## Requirements
1. Each task has `priority`: `low` | `medium` | `high` | `critical`.
2. Each task may have an optional `dueDate` (ISO date).
3. Board header includes a priority filter control (All + each level).
4. Cards show a colored priority chip and, if due, a due-date badge.
5. Overdue tasks use a distinct badge style.
6. Filter persists for the session (URL query or local state OK).
7. Unit or component tests cover filter behavior and overdue styling.

## Out of scope
- Notifications, calendar sync, multi-assignee, server auth.

## Acceptance checks
- [ ] Filtering to `high` hides non-high cards.
- [ ] Due badge visible when `dueDate` set; overdue style when date &lt; today.
- [ ] Tests pass for filter + badge helpers.
- [ ] Works in the local demo without backend changes beyond sample data.

## Success metric (demo)
Time from brief → green on this feature, with Bob Plan + parallel Agent/test lanes, vs a manual baseline called out in the video.
