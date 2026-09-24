import type { Task } from './types'

/** Seed data — no priority / dueDate fields yet (the brief feature gap). */
export const SEED_TASKS: Task[] = [
  { id: 't1', title: 'Draft release notes', assignee: 'Alex', status: 'todo' },
  { id: 't2', title: 'Fix flaky board smoke test', assignee: 'Sam', status: 'doing' },
  { id: 't3', title: 'Tighten README demo section', assignee: 'Jordan', status: 'todo' },
  { id: 't4', title: 'Ship kickoff checklist', assignee: 'Alex', status: 'done' },
  { id: 't5', title: 'Review parallel-agent lanes', assignee: 'Sam', status: 'doing' },
]
