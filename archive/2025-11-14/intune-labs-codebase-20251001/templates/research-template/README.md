# Research Template: research-template

[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/your-org/research-template/badge)](https://securityscorecards.dev/viewer/?uri=github.com/your-org/research-template)

Template for reproducible, secure research projects with notebooks, experiments, and automated checks.

## Layout
- `notebooks/`: Exploratory analysis notebooks
- `src/`: Reusable experiment code and utilities
- `experiments/`: Configs and tracked runs
- `data/`: Storage pointer to datasets (gitignored)
- `results/`: Generated artifacts (avoid committing large files)

## Practices
- Track experiments via config files under `experiments/configs`
- Use DVC or similar to manage large datasets
- Document findings in `docs/paper.md` and `docs/model-card.md`

> Once the first Scorecard run completes, replace `your-org` in the badge URL with the actual repo path.

## Security Signals
- Scorecard + CodeQL results should be required checks per org rulesets.
- Refer to `.github/SECURITY.md` for vulnerability reporting.

## Required GitHub Secrets
| Secret | Purpose |
| ------ | ------- |
| `GH_TOKEN` | Enables release workflow to publish artifacts and attestations |

## Dev Container
A Python-focused `.devcontainer` is provided with common ML tooling (Python 3.11, Jupyter, Ruff, mypy). Launch in Dev Containers or Codespaces to keep notebooks and scripts reproducible.

CI enforces Scorecard, CodeQL (for scripts), and provenance for released artifacts.
