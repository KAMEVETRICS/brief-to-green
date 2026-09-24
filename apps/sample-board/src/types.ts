export type Status = 'todo' | 'doing' | 'done'

/**
 * Priority + dueDate live on the model so Bob Agent can wire UI immediately.
 * INTENTIONAL GAP: Priority *filter control* and due-date *badges* are not
 * rendered yet — see GapBanner and briefs/sample-feature-brief.md.
 */
export type Priority = 'low' | 'medium' | 'high'

export interface Task {
  id: string
  title: string
  assignee: string
  status: Status
  /** Ready for Bob — filter UI not built yet */
  priority: Priority
  /** YYYY-MM-DD; ready for Bob — badge UI not built yet */
  dueDate?: string
}

export const COLUMNS: { id: Status; label: string }[] = [
  { id: 'todo', label: 'To do' },
  { id: 'doing', label: 'In progress' },
  { id: 'done', label: 'Done' },
]
