# Security Policy

## Reporting a Vulnerability
Email security@intunelabs.example with a detailed description, proof-of-concept, and affected repositories. Expect an initial response within 48 hours.

## Coordinated Disclosure
We follow coordinated disclosure. Please give us time to investigate and release patches before public disclosure.

## Scope
All repositories under the Intune Labs organization are in scope, including templates. GitHub secret scanning push protection is enabled by default—treat any bypass as a security incident.

## Security Baseline
- CodeQL analysis on main and pull requests
- OpenSSF Scorecard (scheduled weekly and on PRs)
- Artifact attestations for release builds
- Branch protection with required reviews and signed commits
