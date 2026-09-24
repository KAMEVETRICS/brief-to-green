interface Props {
  selectedName: string | null
  onSelected: (name: string) => void
}

export function BriefDropzone({ selectedName, onSelected }: Props) {
  return (
    <section className="card panel">
      <h2>Drop a product brief</h2>
      <p className="hint">
        Markdown now. At kickoff, Bob document understanding can ingest DOCX/PDF.
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
        <span className="drop-sub">or load the sample PRD</span>
      </label>
      <button
        type="button"
        className="btn primary"
        onClick={() => onSelected('sample-feature-brief.md')}
      >
        Use sample-feature-brief.md
      </button>
      {selectedName && (
        <p className="selected">
          Loaded: <code>{selectedName}</code> → advancing to Bob Plan…
        </p>
      )}
    </section>
  )
}
