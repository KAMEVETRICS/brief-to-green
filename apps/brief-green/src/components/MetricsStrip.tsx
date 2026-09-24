import type { MockPlan } from '../data/mockPlan'

interface Props {
  metrics: MockPlan['metrics']
  visible: boolean
}

export function MetricsStrip({ metrics, visible }: Props) {
  if (!visible) return null
  return (
    <section className="metrics" aria-label="Impact metrics">
      <div className="metric">
        <span className="metric-label">{metrics.timeToGreenLabel}</span>
        <span className="metric-value">{metrics.timeToGreenValue}</span>
        <span className="metric-note">vs serial ~45 min est.</span>
      </div>
      <div className="metric">
        <span className="metric-label">Steps automated</span>
        <span className="metric-value">{metrics.stepsAutomated}</span>
        <span className="metric-note">Plan → lanes → green</span>
      </div>
      <div className="metric">
        <span className="metric-label">Bob sessions</span>
        <span className="metric-value">{metrics.sessions}</span>
        <span className="metric-note">docs/bob-sessions/</span>
      </div>
      <div className="metric">
        <span className="metric-label">Parallel lanes</span>
        <span className="metric-value">3</span>
        <span className="metric-note">UI · logic · tests</span>
      </div>
    </section>
  )
}
