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

  const open = tasks.filter((t) => t.status !== 'done').length
  const highOpen = tasks.filter((t) => t.status !== 'done' && t.priority === 'high').length

  return (
    <div className="app">
      <header className="top">
        <div>
          <p className="eyebrow">Brief→Green · sample app · BEFORE</p>
          <h1>Sample Board</h1>
          <p className="sub">
            Kanban demo target for IBM Bob 2.0. Seed tasks already carry{' '}
            <strong>priority</strong> and <strong>due dates</strong> — the{' '}
            <strong>filter</strong> and <strong>badges</strong> are the intentional gap.
          </p>
        </div>
        <div className="stats">
          <span>{tasks.length} tasks</span>
          <span>{open} open</span>
          <span className="stat-warn">{highOpen} high open</span>
        </div>
      </header>

      <GapBanner />

      {/*
        TODO (Bob Agent): Priority filter control goes here.
        e.g. <PriorityFilter value={filter} onChange={setFilter} />
        Filter options: All | High | Medium | Low
      */}
      <div className="filter-slot" aria-hidden="true">
        <span className="filter-placeholder">
          Priority filter slot — <em>not implemented</em>
        </span>
      </div>

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
