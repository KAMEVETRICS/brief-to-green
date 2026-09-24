# Regenerating package-lock.json

If `package-lock.json` is missing at the repo root (MCP text push size limits),
assemble it from the committed parts:

```bash
bash scripts/assemble-package-lock.sh
# or
npm install   # regenerates lock from package.json workspaces
```

Preferred parts (plain JSON slices):
- `j*.txt` — concatenated byte-exact lock (8KB chunks)

Fallbacks:
- `half1.json.txt` + `half2.json.txt`
- `package-lock.part*.b64` / `p*.b64`
