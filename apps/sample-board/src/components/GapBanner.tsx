export function GapBanner() {
  return (
    \u003caside className="gap-banner" role="status" aria-label="Feature gap for demo">
      \u003cdiv className="gap-badge">BEFORE \u00b7 GAP\u003c/div>
      \u003cdiv className="gap-body">
        \u003cstrong>Missing for the Bob demo\u003c/strong>
        \u003cul>
          \u003cli>
            \u003cspan className="gap-missing">Priority filter\u003c/span> \u2014 seed data has
            high/medium/low, but no All / High / Medium / Low control above the board
          \u003c/li>
          \u003cli>
            \u003cspan className="gap-missing">Due-date badges\u003c/span> \u2014 cards carry due
            dates, but overdue / soon / upcoming chips are not rendered
          \u003c/li>
        \u003c/ul>
        \u003cp className="gap-cta">
          Drop \u003ccode>briefs/sample-feature-brief.md\u003c/code> (or \u003ccode>.docx\u003c/code>) into
          Bob \u003cem>Plan\u003c/em>, then fan out with Agent / subagents \u2192 see AFTER on the
          Brief\u2192Green dashboard.
        \u003c/p>
      \u003c/div>
    \u003c/aside>
  )
}
