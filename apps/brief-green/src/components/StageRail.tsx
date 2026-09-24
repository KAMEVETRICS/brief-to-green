import type { StageId } from '../data/mockPlan'

interface Stage {
  id: StageId
  label: string
  blurb: string
}

interface Props {
  stages: Stage[]
  active: StageId
  onSelect: (id: StageId) => void
}

export function StageRail({ stages, active, onSelect }: Props) {
  return (
    <nav className="rail" aria-label="Workflow stages">
      {stages.map((s) => (
        <button
          key={s.id}
          type="button"
          className={s.id === active ? 'step active' : 'step'}
          onClick={() => onSelect(s.id)}
        >
          <span className="step-label">{s.label}</span>
          <span className="step-blurb">{s.blurb}</span>
        </button>
      ))}
    </nav>
  )
}
