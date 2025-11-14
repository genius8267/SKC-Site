# Intune Labs Template Blueprints

This directory hosts golden templates referenced in `.github/profile/README.md` and AGENTS.md. Each template is a starting point for new repositories in the poly-repo strategy while aligning with the central pnpm/Turbo monorepo development guidelines.

## Available Templates
- `service-template/` – Node/TypeScript microservice with Makefile, Dockerfile, Infra & Deploy stubs, reusable CI/release callers, and CODEOWNERS.
- `sdk-python-template/` – Python SDK skeleton with strict typing, Ruff/Mypy/pytest setup, reusable CI/release callers, and client example.
- `research-template/` – Research workflow with notebooks, experiments, docs, and push-protected CI.

## Usage
1. Create a new repository from the corresponding template.
2. Replace `your-org` placeholders in Scorecard badges and reusable workflow references.
3. Configure secrets listed in each README before enabling release workflows.
4. Apply org rulesets via `.github/governance/apply-ruleset.sh` to enforce security baselines.

Keep templates up to date alongside reusable workflows so that new repos inherit the latest secure defaults.
