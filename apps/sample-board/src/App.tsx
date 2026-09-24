import { useState } from 'react'
import { SEED_TASKS } from './data'
import { COLUMNS, type Status, type Task } from './types'
import { BoardColumn } from './components/BoardColumn'
import { GapBanner } from './components/GapBanner'

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(SEED_TASKS)

  function moveTask(id: string, status: Status) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)))
  }

  return (
    <div className="app">
      <header className="top">
        <div>
          <p className="eyebrow">Brief→Green · sample app</p>
          <h1>Sample Board</h1>
          <p className="sub">
            Intentionally missing: <strong>Priority filter</strong> &amp;{' '}
            <strong>Due-date badges</strong> — see{' '}
            <code>briefs/sample-feature-brief.md</code>
          </p>
        </div>
        <div className="stats">
          <span>{tasks.length} tasks</span>
          <span>{tasks.filter((t) => t.status !== 'done').length} open</span>
        </div>
      </header>

      <GapBanner />

      {/*
        TODO (Bob Agent): Priority filter control goes here.
        e.g. <PriorityFilter value={filter} onChange={setFilter} />
      */}

      <main className="board">
        {COLUMNS.map((col) => (
          <BoardColumn
            key={col.id}
            column={col}
            tasks={tasks.filter((t) => t.status === col.id)}
            onMove={moveTask}
          />
        ))}
      </main>
    </div>
  )
}
