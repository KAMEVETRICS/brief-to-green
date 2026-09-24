#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/package-lock.json"
PARTS_DIR="$ROOT/scripts/lock-parts"
if compgen -G "$PARTS_DIR/a*.txt" > /dev/null && compgen -G "$PARTS_DIR/b*.txt" > /dev/null; then
  cat "$PARTS_DIR"/a*.txt "$PARTS_DIR"/b*.txt > "$OUT"
elif compgen -G "$PARTS_DIR/j*.txt" > /dev/null; then
  cat "$PARTS_DIR"/j*.txt > "$OUT"
elif [[ -f "$PARTS_DIR/half1.json.txt" && -f "$PARTS_DIR/half2.json.txt" ]]; then
  cat "$PARTS_DIR/half1.json.txt" "$PARTS_DIR/half2.json.txt" > "$OUT"
elif compgen -G "$PARTS_DIR/package-lock.part*.b64" > /dev/null; then
  cat "$PARTS_DIR"/package-lock.part*.b64 | tr -d '\n' | base64 -d > "$OUT"
elif compgen -G "$PARTS_DIR/p*.b64" > /dev/null; then
  cat "$PARTS_DIR"/p*.b64 | tr -d '\n' | base64 -d > "$OUT"
else
  echo "No lock parts found under $PARTS_DIR" >&2
  echo "Fallback: run npm install to regenerate package-lock.json" >&2
  exit 1
fi
echo "Assembled $OUT ($(wc -c < "$OUT") bytes)"
