import type { MockPlan } from '../data/mockPlan'

interface Props {
  plan: MockPlan
  briefName: string
}

export function PlanPanel({ plan, briefName }: Props) {
  return (
    <section className="card panel">
      <div className="panel-head">
        <h2>Bob Plan</h2>
        <span className="tag">mock JSON · replace at kickoff</span>
      </div>
      <p className="hint">
        Source: <code>{briefName}</code> → <code>{plan.sourceBrief}</code>
      </p>
      <h3 className="plan-title">{plan.title}</h3>
      <p>{plan.summary}</p>
      <h4>Acceptance</h4>
      <ul className="checks">
        {plan.acceptance.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </section>
  )
}
