# Service Template: service-template

[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/your-org/service-template/badge)](https://securityscorecards.dev/viewer/?uri=github.com/your-org/service-template)

Bootstrap microservices with enforced org guardrails, reusable CI, and secure defaults.

## Getting Started
1. Install dependencies: `npm install`
2. Run the service locally: `npm run dev`
3. Execute full pipeline locally: `make ci`

## CI/CD
- CI workflow calls `your-org/.github` reusable pipeline.
- Release workflow uses semantic-release with provenance attestations.
- Dependabot updates npm and GitHub Actions weekly.

> Update `your-org` with the real organization slug after cloning.

## Security Signals
- Add the Scorecard badge above by replacing `your-org` with the repo path once the action has run at least once.
- Link to org security policy: see `.github/SECURITY.md` in the meta repo.

## Required GitHub Secrets
| Secret | Purpose |
| ------ | ------- |
| `GH_TOKEN` | Required for release workflow to create tags/releases |
| `NPM_TOKEN` | Provided to the reusable release workflow as `PACKAGE_REGISTRY_TOKEN` |
| Cloud provider OIDC role | Configure in the cloud console; release workflow expects OIDC permissions |

Set these as repository-level secrets before enabling the release pipeline.

## Dev Container
A `.devcontainer` folder is included to standardize local tooling (`Node 20`, ESLint, Jest). Open in GitHub Codespaces or VS Code with the Dev Containers extension for a ready-to-run environment.

## Docs & ADRs
Document architecture decisions under `docs/adr`. Start with `adr/0001-record-architecture-decisions.md` to track key choices.
