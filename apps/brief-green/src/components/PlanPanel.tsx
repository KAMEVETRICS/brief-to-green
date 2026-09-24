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
        <span className="tag">mock JSON · swap real Bob export at kickoff</span>
      </div>
      <p className="hint">
        Source: <code>{briefName}</code> → <code>{plan.sourceBrief}</code>
      </p>
      <h3 className="plan-title">{plan.title}</h3>
      <p className="plan-summary">{plan.summary}</p>

      <h4 className="section-label">Plan steps</h4>
      <ol className="plan-steps">
        {plan.steps.map((s, i) => (
          <li key={s.id}>
            <span className="step-num">{i + 1}</span>
            <div>
              <strong>{s.title}</strong>
              <span className="step-detail">{s.detail}</span>
            </div>
          </li>
        ))}
      </ol>

      <h4 className="section-label">Acceptance</h4>
      <ul className="checks">
        {plan.acceptance.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </section>
  )
}
