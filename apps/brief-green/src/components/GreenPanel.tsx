export function GreenPanel() {
  return (
    <section className="card panel green">
      <div className="panel-head">
        <h2>Green checklist</h2>
        <span className="tag ok">AFTER · checks passing</span>
      </div>
      <p className="green-lede">
        Sample Board should now expose <strong>Priority filter</strong> and{' '}
        <strong>Due-date badges</strong>. Compare against the BEFORE gap banner on
        port 5173.
      </p>
      <ul className="checks done">
        <li>Plan acceptance mapped to parallel lanes</li>
        <li>UI / logic / tests lanes completed</li>
        <li>Priority filter + due badges live on Sample Board</li>
        <li>
          Bob session summaries saved under <code>docs/bob-sessions/</code>
        </li>
      </ul>
      <div className="green-actions">
        <a className="btn primary" href="http://localhost:5173" target="_blank" rel="noreferrer">
          Open Sample Board (local)
        </a>
        <a
          className="btn"
          href="https://github.com/KAMEVETRICS/brief-to-green/tree/main/docs/bob-sessions"
          target="_blank"
          rel="noreferrer"
        >
          Session evidence folder
        </a>
      </div>
    </section>
  )
}
