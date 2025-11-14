#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${ORG:-}" ]]; then
  echo "ORG environment variable required" >&2
  exit 1
fi

RULESET_FILE=${1:-ruleset-protected-main.json}

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is required" >&2
  exit 1
fi

RULESET_ID=$(gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  "/orgs/${ORG}/rulesets" \
  --input ".github/governance/${RULESET_FILE}" \
  --jq '.id')

echo "Ruleset applied with id ${RULESET_ID}"
