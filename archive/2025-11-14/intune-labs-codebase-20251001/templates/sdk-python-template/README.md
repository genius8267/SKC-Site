# Python SDK Template

[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/your-org/sdk-python-template/badge)](https://securityscorecards.dev/viewer/?uri=github.com/your-org/sdk-python-template)

Use this template to build typed, testable, and secure SDKs for Intune Labs services.

## Features
- Reusable CI pipeline with CodeQL, Scorecard, and provenance
- Strict typing via MyPy and Ruff linting
- Example client with async support hooks

## Quickstart
```bash
python -m venv .venv
source .venv/bin/activate
pip install -e .[dev]
pytest
```

> Replace `your-org` in the badge URL with the real repository path once pipelines run.

## Security Signals
- Scorecard badge above surfaces the latest security posture.
- Reference the org security policy at `.github/SECURITY.md` for disclosure process.

## Required GitHub Secrets
| Secret | Purpose |
| ------ | ------- |
| `GH_TOKEN` | Necessary for release workflow tagging and provenance |
| `PYPI_API_TOKEN` | Passed to reusable release workflow as `PACKAGE_REGISTRY_TOKEN` |

Set these secrets on the repository before enabling automated releases.

## Dev Container
The included `.devcontainer` config installs Python 3.11, Poetry tooling, and commonly used extensions, giving contributors a consistent environment across local dev, Codespaces, and CI debugging.

## Publishing
Releases are handled via the reusable release workflow. Ensure distribution artifacts (wheel, sdist) are generated under `dist/` before tagging.
