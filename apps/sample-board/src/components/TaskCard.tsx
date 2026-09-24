import type { Status, Task } from '../types'
import { COLUMNS } from '../types'

interface Props {
  task: Task
  onMove: (id: string, status: Status) => void
}

export function TaskCard({ task, onMove }: Props) {
  return (
    <article className="card">
      <div className="card-top">
        <h3>{task.title}</h3>
        {/*
          INTENTIONAL GAP: priority + dueDate exist on the model but are not shown.
          Bob Agent should add a priority chip and a due-date badge here.
          Raw values kept in data-* for demo inspectors / Bob Ask.
        */}
        <span
          className="gap-hint"
          title="Gap: priority & due badge not rendered"
          data-priority={task.priority}
          data-due={task.dueDate ?? ''}
        >
          data ready · UI gap
        </span>
      </div>
      <p className="assignee">@{task.assignee}</p>

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
