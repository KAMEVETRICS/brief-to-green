import type { Status, Task } from '../types'
import { COLUMNS } from '../types'

interface Props {
  task: Task
  onMove: (id: string, status: Status) => void
}

export function TaskCard({ task, onMove }: Props) {
  return (
    <article className="card">
      <h3>{task.title}</h3>
      <p className="assignee">@{task.assignee}</p>

      {/*
        TODO (Bob Agent): Render due-date badge when task.dueDate exists.
        TODO (Bob Agent): Priority selector / chip when task.priority exists.
      */}

      <label className="move">
        Move to
        <select
          value={task.status}
          onChange={(e) => onMove(task.id, e.target.value as Status)}
          aria-label={`Move ${task.title}`}
        >
          {COLUMNS.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
    </article>
  )
}
