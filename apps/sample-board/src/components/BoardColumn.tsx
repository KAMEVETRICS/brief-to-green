import type { Status, Task } from '../types'
import { TaskCard } from './TaskCard'

interface Props {
  column: { id: Status; label: string }
  tasks: Task[]
  onMove: (id: string, status: Status) => void
}

export function BoardColumn({ column, tasks, onMove }: Props) {
  return (
    <section className="column">
      <header>
        <h2>{column.label}</h2>
        <span className="count">{tasks.length}</span>
      </header>
      <div className="cards">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onMove={onMove} />
        ))}
        {tasks.length === 0 && <p className="empty">No cards</p>}
      </div>
    </section>
  )
}
