#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/package-lock.json"
PARTS_DIR="$ROOT/scripts/lock-parts"
if compgen -G "$PARTS_DIR/package-lock.part*.b64" > /dev/null; then
  cat "$PARTS_DIR"/package-lock.part*.b64 | tr -d '\n' | base64 -d > "$OUT"
elif compgen -G "$PARTS_DIR/p*.b64" > /dev/null; then
  cat "$PARTS_DIR"/p*.b64 | tr -d '\n' | base64 -d > "$OUT"
else
  echo "No lock parts found under $PARTS_DIR" >&2
  exit 1
fi
echo "Assembled $OUT ($(wc -c < "$OUT") bytes)"
