# Governance Playbook

This directory houses policy-as-code artifacts for the Intune Labs org.

## Rulesets
- `ruleset-protected-main.json` defines branch protection for `main` with required reviews, signatures, and status checks.
- Clone this repo, adjust JSON as needed, and apply via GitHub CLI.

### Apply or Update
```bash
export ORG=intunelabs
.github/governance/apply-ruleset.sh ruleset-protected-main.json
```

The script returns a ruleset ID. Store that in your change log (e.g., commit message or PR description). To update, modify the JSON and rerun—GitHub creates a new version automatically.

### Rollback
1. Visit **Settings → Code security and analysis → Rulesets** in the GitHub UI.
2. Choose the previous ruleset version and activate it, or delete the new one.

## Change Management
- Track governance updates via PRs referencing ADRs or security reviews.
- Include reviewers from security and platform teams for sign-off.
- Document rationale in the PR body and link to this directory.

## Future Artifacts
Add JSON/YAML for additional rulesets, policy templates, or scripts here to keep governance auditable alongside code.
