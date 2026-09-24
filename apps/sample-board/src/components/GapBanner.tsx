export function GapBanner() {
  return (
    <aside className="gap-banner" role="status" aria-label="Feature gap for demo">
      <div className="gap-badge">BEFORE · GAP</div>
      <div className="gap-body">
        <strong>Missing for the Bob demo</strong>
        <ul>
          <li>
            <span className="gap-missing">Priority filter</span> — seed data has
            high/medium/low, but no All / High / Medium / Low control above the board
          </li>
          <li>
            <span className="gap-missing">Due-date badges</span> — cards carry due
            dates, but overdue / soon / upcoming chips are not rendered
          </li>
        </ul>
        <p className="gap-cta">
          Drop <code>briefs/sample-feature-brief.md</code> (or <code>.docx</code>) into
          Bob <em>Plan</em>, then fan out with Agent / subagents → see AFTER on the
          Brief→Green dashboard.
        </p>
      </div>
    </aside>
  )
}
