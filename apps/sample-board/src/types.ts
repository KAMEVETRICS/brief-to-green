export type Status = 'todo' | 'doing' | 'done'

export interface Task {
  id: string
  title: string
  assignee: string
  status: Status
  /**
   * INTENTIONAL GAP (see briefs/sample-feature-brief.md):
   * Priority filter + due-date badges are NOT implemented yet.
   * Bob Plan/Agent should add:
   *   priority: 'low' | 'medium' | 'high'
   *   dueDate?: string  // YYYY-MM-DD
   */
}

export const COLUMNS: { id: Status; label: string }[] = [
  { id: 'todo', label: 'To do' },
  { id: 'doing', label: 'In progress' },
  { id: 'done', label: 'Done' },
]
