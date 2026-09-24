export type StageId = 'brief' | 'plan' | 'parallel' | 'green'
export type LaneStatus = 'pending' | 'running' | 'done'

export interface PlanStep {
  id: string
  title: string
  detail: string
}

export interface PlanLane {
  id: string
  title: string
  bobMode: string
  detail: string
  status: LaneStatus
  /** Steps this lane owns — mirrors Bob Plan task breakdown */
  steps: string[]
}

/**
 * Mock plan shaped so real Bob Plan text / JSON can drop in later.
 * Keep field names stable: title, sourceBrief, summary, steps, acceptance, lanes, metrics.
 */
export interface MockPlan {
  title: string
  sourceBrief: string
  summary: string
  /** Ordered implementation steps from Plan */
  steps: PlanStep[]
  acceptance: string[]
  lanes: PlanLane[]
  metrics: {
    timeToGreenLabel: string
    timeToGreenValue: string
    stepsAutomated: number
    sessions: number
  }
}

/** Stand-in until Bob Plan exports real JSON at kickoff. */
export const MOCK_PLAN: MockPlan = {
  title: 'Priority filter & Due-date badges',
  sourceBrief: 'briefs/sample-feature-brief.md',
  summary:
    'Extend Sample Board Task model (already seeded); add priority filter control; render due-date badges with overdue/soon/upcoming tones; cover with tests.',
  steps: [
    {
      id: 's1',
      title: 'Confirm model fields',
      detail: 'priority + dueDate already on Task — wire UI only',
    },
    {
      id: 's2',
      title: 'Priority filter',
      detail: 'All / High / Medium / Low control above the board',
    },
    {
      id: 's3',
      title: 'Due-date badges',
      detail: 'overdue / soon (≤2 days) / upcoming chip on cards',
    },
    {
      id: 's4',
      title: 'Compose & verify',
      detail: 'Filter + badges together; TypeScript build green',
    },
    {
      id: 's5',
      title: 'Evidence',
      detail: 'Session summaries → docs/bob-sessions/',
    },
  ],
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
      steps: ['Badge component', 'Card layout chips', 'Tone CSS'],
    },
    {
      id: 'logic',
      title: 'Logic lane',
      bobMode: 'Agent · subagent',
      detail: 'Filter helper, PriorityFilter control, seed wiring',
      status: 'pending',
      steps: ['matchesPriority()', 'PriorityFilter', 'App filter state'],
    },
    {
      id: 'tests',
      title: 'Tests lane',
      bobMode: 'Agent · subagent',
      detail: 'Unit tests for dueTone + matchesPriority',
      status: 'pending',
      steps: ['dueTone cases', 'filter cases', 'build check'],
    },
  ],
  metrics: {
    timeToGreenLabel: 'Time-to-green (demo)',
    timeToGreenValue: '~12 min',
    stepsAutomated: 5,
    sessions: 6,
  },
}

export const STAGES: { id: StageId; label: string; blurb: string }[] = [
  {
    id: 'brief',
    label: '1 · Brief',
    blurb: 'Load MD now; DOCX via Bob document understanding at kickoff.',
  },
  {
    id: 'plan',
    label: '2 · Bob Plan',
    blurb: 'Scoped steps + acceptance checks.',
  },
  {
    id: 'parallel',
    label: '3 · Parallel Agent',
    blurb: 'Subagents fan out UI / logic / tests.',
  },
  {
    id: 'green',
    label: '4 · Green',
    blurb: 'Board feature live + session evidence.',
  },
]
