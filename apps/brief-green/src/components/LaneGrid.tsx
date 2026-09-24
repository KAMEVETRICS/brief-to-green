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
        <h2>Parallel Agent / subagent lanes</h2>
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
            <p>{lane.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
