import { useMemo, useState } from 'react'
import {
  MOCK_PLAN,
  STAGES,
  type LaneStatus,
  type MockPlan,
  type StageId,
} from './data/mockPlan'
import { StageRail } from './components/StageRail'
import { BriefDropzone } from './components/BriefDropzone'
import { PlanPanel } from './components/PlanPanel'
import { LaneGrid } from './components/LaneGrid'
import { GreenPanel } from './components/GreenPanel'
import { MetricsStrip } from './components/MetricsStrip'

function advanceLanes(plan: MockPlan, tick: number): MockPlan {
  const order: LaneStatus[] = ['pending', 'running', 'done']
  return {
    ...plan,
    lanes: plan.lanes.map((lane, i) => {
      const step = Math.min(tick - i, 2)
      const status = step < 0 ? 'pending' : order[step]
      return { ...lane, status }
    }),
  }
}

export default function App() {
  const [briefName, setBriefName] = useState<string | null>(null)
  const [stage, setStage] = useState<StageId>('brief')
  const [tick, setTick] = useState(0)
  const [simRunning, setSimRunning] = useState(false)

  const plan = useMemo(() => advanceLanes(MOCK_PLAN, tick), [tick])
  const allDone = plan.lanes.every((l) => l.status === 'done')
  const showMetrics = stage === 'green' && allDone

  function onBriefSelected(name: string) {
    setBriefName(name)
    setStage('plan')
    setTick(0)
  }

  function runParallelDemo() {
    if (simRunning) return
    setStage('parallel')
    setSimRunning(true)
    setTick(0)
    let n = 0
    const id = window.setInterval(() => {
      n += 1
      setTick(n)
      if (n >= 5) {
        window.clearInterval(id)
        setSimRunning(false)
        setStage('green')
      }
    }, 700)
  }

  return (
    <div className="shell">
      <header className="hero">
        <div>
          <p className="eyebrow">IBM Bob 2.0 Hackathon · KAMEVETRICS</p>
          <h1>
            Brief<span className="accent">→</span>Green
          </h1>
          <p className="lede">
            Spec to working software: Bob <strong>Plan</strong> scopes the brief,
            <strong> Agent + subagents</strong> ship in parallel, dashboard shows
            green — with session screenshots for judges.
          </p>
        </div>
        <div className="hero-meta">
          <a
            className="pill"
            href="https://github.com/KAMEVETRICS/brief-to-green"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="pill"
            href="https://bob.ibm.com/"
            target="_blank"
            rel="noreferrer"
          >
            IBM Bob
          </a>
          <span className="pill muted">Mock plan until Bob live</span>
        </div>
      </header>

      <StageRail stages={STAGES} active={stage} onSelect={setStage} />

      <MetricsStrip metrics={plan.metrics} visible={showMetrics} />

      <div className="panels">
        {(stage === 'brief' || !briefName) && (
          <BriefDropzone selectedName={briefName} onSelected={onBriefSelected} />
        )}

        {(stage === 'plan' || stage === 'parallel' || stage === 'green') &&
          briefName && <PlanPanel plan={plan} briefName={briefName} />}

        {(stage === 'parallel' || stage === 'green') && (
          <LaneGrid lanes={plan.lanes} running={simRunning} onRun={runParallelDemo} />
        )}

        {stage === 'green' && allDone && <GreenPanel />}
      </div>

      <footer className="foot">
        <span>Ask → Plan → Agent / subagents → evidence in docs/bob-sessions/</span>
        <span>
          <a href="https://lablab.ai/ai-hackathons/ibm-bob-2-hackathon" target="_blank" rel="noreferrer">
            Hackathon
          </a>
          {' · '}
          MIT · Sep 25–27 2026
        </span>
      </footer>
    </div>
  )
}
