import type { Task } from './types'

/**
 * Seed data with mixed priorities + due dates so the feature gap is obvious:
 * data is ready; Priority filter + Due-date badges are not rendered yet.
 * Dates relative to hackathon window (Sep 25–27, 2026).
 */
export const SEED_TASKS: Task[] = [
  {
    id: 't1',
    title: 'Draft release notes',
    assignee: 'Alex',
    status: 'todo',
    priority: 'high',
    dueDate: '2026-09-25',
  },
  {
    id: 't2',
    title: 'Fix flaky board smoke test',
    assignee: 'Sam',
    status: 'doing',
    priority: 'high',
    dueDate: '2026-09-24',
  },
  {
    id: 't3',
    title: 'Tighten README demo section',
    assignee: 'Jordan',
    status: 'todo',
    priority: 'medium',
    dueDate: '2026-09-27',
  },
  {
    id: 't4',
    title: 'Ship kickoff checklist',
    assignee: 'Alex',
    status: 'done',
    priority: 'medium',
    dueDate: '2026-09-23',
  },
  {
    id: 't5',
    title: 'Review parallel-agent lanes',
    assignee: 'Sam',
    status: 'doing',
    priority: 'low',
    dueDate: '2026-09-30',
  },
  {
    id: 't6',
    title: 'Capture Bob session screenshots',
    assignee: 'Jordan',
    status: 'todo',
    priority: 'high',
    dueDate: '2026-09-26',
  },
  {
    id: 't7',
    title: 'Polish demo voiceover notes',
    assignee: 'Alex',
    status: 'todo',
    priority: 'low',
  },
]
