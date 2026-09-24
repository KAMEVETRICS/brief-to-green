#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/package-lock.json"
cat "$ROOT"/scripts/lock-parts/package-lock.part*.b64 | tr -d '\n' | base64 -d > "$OUT"
echo "Assembled $OUT ($(wc -c < "$OUT") bytes)"
