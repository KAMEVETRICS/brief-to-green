import type { PlanLane } from '../data/mockPlan'

interface Props {
  lanes: PlanLane[]
  running: boolean
  onRun: () => void
}

export function LaneGrid({ lanes, running, onRun }: Props) {
  return (
    <section className="card panel">
      <div className="panel-head">
        <div>
          <h2>Parallel Agent / subagent lanes</h2>
          <p className="hint tight">
            Same wall-clock — UI, logic, and tests fan out instead of serial handoffs.
          </p>
        </div>
        <button type="button" className="btn primary" onClick={onRun} disabled={running}>
          {running ? 'Running…' : 'Simulate parallel run'}
        </button>
      </div>
      <div className="lanes">
        {lanes.map((lane) => (
          <article key={lane.id} className={`lane status-${lane.status}`}>
            <header>
              <h3>{lane.title}</h3>
              <span className={`badge ${lane.status}`}>{lane.status}</span>
            </header>
            <p className="mode">{lane.bobMode}</p>
            <p className="lane-detail">{lane.detail}</p>
            <ul className="lane-steps">
              {lane.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
