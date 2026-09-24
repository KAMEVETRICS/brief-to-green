# Regenerating package-lock.json

`package-lock.json` (~57KB) exceeds reliable MCP text-push limits, so it may be
absent at the repo root. Rebuild it with either:

```bash
bash scripts/assemble-package-lock.sh   # if c*/a*/j*/b64 parts are present
npm install                             # always works from package.json workspaces
```

Part layouts (first match wins in assemble):
1. `c*.txt` — plain JSON slices
2. `a*.txt` + `b*.txt` — half-file slices
3. `j*.txt` — larger JSON slices
4. `half1.json.txt` + `half2.json.txt`
5. `package-lock.part*.b64` / `p*.b64`

Note: incomplete part sets will not assemble; use `npm install` instead.
