# Regenerating package-lock.json

If `package-lock.json` is missing at the repo root (MCP text push size limits),
assemble it from the committed base64 parts:

```bash
bash scripts/assemble-package-lock.sh
# or
npm install   # regenerates lock from package.json workspaces
```

The part files under `scripts/lock-parts/` are a byte-exact encoding of the
lock produced by `npm install` on Node 18+ for this repo.
