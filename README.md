# Intune Labs Engineering Toolkit

This workspace follows the pnpm/Turbo monorepo conventions defined in `AGENTS.md` while housing the shared governance assets and template repositories used across the organization.

## Layout
- `.github/` – Org-level governance, reusable workflows, profile docs, and security policies.
- `templates/` – Golden repo templates (`service`, `sdk`, `research`) aligned with the org guardrails.
- `archive/` – (Create as needed) holds retired assets per the archive policy in `AGENTS.md`.

Additional monorepo categories (`apps/`, `services/`, `packages/`, `scripts/`, `assets/`, `tests/`) can be added alongside these directories as the platform evolves.

## Getting Started
1. Install pnpm (`npm install -g pnpm`) and Turbo (`pnpm dlx turbo` as needed).
2. Run `pnpm install` at the repo root to sync workspaces (add `pnpm-workspace.yaml` when apps/packages are introduced).
3. Use the templates under `templates/` to spin up new poly-repos or workspaces; keep them updated with the latest workflows.

## Governance Workflow
- Apply branch-protection rules via `.github/governance/apply-ruleset.sh` (`ORG=<slug>`).
- Reusable workflows in `.github/workflows/` back every repo with CodeQL, Scorecard, provenance, and Docs automation.
- Follow the security policy in `.github/SECURITY.md` and CODEOWNERS expectations in each template.

## Contribution Expectations
- use Conventional Commits and keep changes documented through ADRs or notes in template docs.
- Run relevant checks: `make ci` (service template), `pytest` + `ruff`/`mypy` (sdk template), and ensure Scorecard + CodeQL pass prior to merges.
- For deletions, move files into `archive/<YYYY-MM-DD>/` per the archive policy.

Refer to `AGENTS.md` for the full operating model (planning, testing, security) that applies to all work in this repository.
