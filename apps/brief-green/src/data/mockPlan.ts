export type StageId = 'brief' | 'plan' | 'parallel' | 'green'
export type LaneStatus = 'pending' | 'running' | 'done'

export interface PlanLane {
  id: string
  title: string
  bobMode: string
  detail: string
  status: LaneStatus
}

export interface MockPlan {
  title: string
  sourceBrief: string
  summary: string
  acceptance: string[]
  lanes: PlanLane[]
}

/** Stand-in until Bob Plan exports real JSON at kickoff. */
export const MOCK_PLAN: MockPlan = {
  title: 'Priority filter & Due-date badges',
  sourceBrief: 'briefs/sample-feature-brief.md',
  summary:
    'Extend Sample Board Task model; add priority filter control; render due-date badges with overdue/soon/upcoming tones; cover with tests.',
  acceptance: [
    'Priority on every task + board filter (All/High/Medium/Low)',
    'Due-date badge states: overdue / soon (≤2 days) / upcoming',
    'Filter + badges compose correctly',
    'TypeScript build green; happy-path test or QA script',
  ],
  lanes: [
    {
      id: 'ui',
      title: 'UI lane',
      bobMode: 'Agent · subagent',
      detail: 'Due-date badge component + card chips',
      status: 'pending',
    },
    {
      id: 'logic',
      title: 'Logic lane',
      bobMode: 'Agent · subagent',
      detail: 'priority field, filter helper, seed data',
      status: 'pending',
    },
    {
      id: 'tests',
      title: 'Tests lane',
      bobMode: 'Agent · subagent',
      detail: 'Unit tests for dueTone + matchesPriority',
      status: 'pending',
    },
  ],
}

export const STAGES: { id: StageId; label: string; blurb: string }[] = [
  {
    id: 'brief',
    label: '1 · Brief',
    blurb: 'Drop Markdown now; DOCX/PDF via Bob document understanding at hackathon.',
  },
  {
    id: 'plan',
    label: '2 · Bob Plan',
    blurb: 'Scoped implementation plan + acceptance checks.',
  },
  {
    id: 'parallel',
    label: '3 · Parallel Agent',
    blurb: 'Subagents fan out UI / logic / tests.',
  },
  {
    id: 'green',
    label: '4 · Green',
    blurb: 'Board feature live + session evidence saved.',
  },
]
