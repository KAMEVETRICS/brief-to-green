interface Props {
  selectedName: string | null
  onSelected: (name: string) => void
}

export function BriefDropzone({ selectedName, onSelected }: Props) {
  return (
    <section className="card panel">
      <h2>1 · Load a product brief</h2>
      <p className="hint">
        Markdown now. At kickoff, Bob <strong>document understanding</strong> can
        ingest <code>briefs/sample-feature-brief.docx</code> (or PDF).
      </p>
      <label className="drop">
        <input
          type="file"
          accept=".md,.markdown,.txt,.pdf,.docx"
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) onSelected(f.name)
          }}
        />
        <span className="drop-title">Choose brief file</span>
        <span className="drop-sub">.md · .docx · .pdf</span>
      </label>
      <div className="drop-actions">
        <button
          type="button"
          className="btn primary"
          onClick={() => onSelected('sample-feature-brief.md')}
        >
          Use sample-feature-brief.md
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => onSelected('sample-feature-brief.docx')}
        >
          Use sample .docx
        </button>
      </div>
      {selectedName && (
        <p className="selected">
          Loaded: <code>{selectedName}</code> → advancing to Bob Plan…
        </p>
      )}
    </section>
  )
}
