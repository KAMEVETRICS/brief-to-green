export function GreenPanel() {
  return (
    <section className="card panel green">
      <div className="panel-head">
        <h2>Green</h2>
        <span className="tag ok">checks passing (demo)</span>
      </div>
      <p>
        Sample Board should now expose <strong>Priority filter</strong> and{' '}
        <strong>Due-date badges</strong>. Locally run <code>npm run dev:board</code>.
      </p>
      <ul className="checks done">
        <li>Plan acceptance mapped to tasks</li>
        <li>UI / logic / tests lanes completed in parallel</li>
        <li>
          Drop Bob session-summary screenshots into <code>docs/bob-sessions/</code>
        </li>
      </ul>
      <a className="btn" href="http://localhost:5173" target="_blank" rel="noreferrer">
        Open Sample Board (local)
      </a>
    </section>
  )
}
