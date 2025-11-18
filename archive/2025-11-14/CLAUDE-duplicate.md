# CLAUDE.md — Intune Labs Monorepo Workflow

> **Project**: Intune Labs Engineering Toolkit (pnpm/Turbo monorepo)
> **Precedence**: Platform Safety → System Prompt → **This File** → Global ~/.claude/CLAUDE.md
> **Inherits**: All rules from global CLAUDE.md; this file adds project-specific overrides and workflow

---

## 0) Project Context

**Repo**: `intune-labs-monorepo` — governance, templates, shared tooling
**Package Manager**: `pnpm@8.15.4` (frozen; check `packageManager` field in root `package.json`)
**Build System**: Turbo (`turbo.json` defines pipeline: build → test → lint → typecheck)
**Layout**:
- `.github/` — org-level workflows, governance, security policies
- `templates/` — golden templates (service, SDK, research) aligned with `AGENTS.md`
- `apps/`, `services/`, `packages/`, `scripts/`, `assets/`, `tests/` — standard monorepo categories
- `archive/` — retired assets per archive policy

**Key Files**:
- `AGENTS.md` — operating model (planning, testing, security) — **read before making workflow changes**
- `README.md` — getting started, governance workflow, contribution expectations
- `pnpm-workspace.yaml` — workspace definitions
- `.github/SECURITY.md` — vulnerability disclosure, Scorecard compliance

---

## 1) Tech Stack & Conventions

### Languages & Runtimes
- **TypeScript**: strict mode, ESLint + Prettier, prefer `@typescript-eslint/recommended`
- **Node.js**: 20+ (check `.nvmrc` or `engines` in `package.json` before assuming)
- **Python**: 3.11+ for SDK/research templates; use `ruff`, `mypy`, `pytest`

### Monorepo Commands
```sh
# Root-level (use turbo for orchestration)
pnpm install          # sync all workspaces
turbo run build       # build all packages/apps with caching
turbo run test        # run all tests (respects dependsOn in turbo.json)
turbo run lint        # lint everything
turbo run typecheck   # TS type checking across workspace

# Workspace-specific (from root or inside workspace)
pnpm --filter <workspace> test
pnpm --filter <workspace> dev

# Service template (inside templates/service-template/)
make ci               # runs build, test, lint, typecheck
```

### Testing Conventions
- **Unit tests**: `tests/unit/*.test.ts` — fast, no I/O
- **Integration tests**: `tests/integration/*.test.ts` — may hit DB/APIs
- **Commands**: always use `turbo run test` at root or `pnpm test` in workspace

### Git Workflow
- **Conventional Commits**: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`, `ci:`
- **Branch protection**: apply via `.github/governance/apply-ruleset.sh`
- **CODEOWNERS**: defined in templates; respect ownership for reviews
- **ADRs**: document architectural decisions in `docs/adr/` when adding patterns

---

## 2) Project-Specific Rules

### File Creation
- **Use templates**: spin up new services/SDKs from `templates/` (service-template, sdk-python-template, research-template)
- **No ad-hoc file creation**: if creating a new service, copy `templates/service-template/` structure
- **Archive policy**: retired files go to `archive/<YYYY-MM-DD>/` (see `AGENTS.md`)

### Dependencies
- **Pinning**: `pnpm` lockfile (`pnpm-lock.yaml`) is source of truth; never `pnpm install --no-frozen-lockfile` in CI
- **Updates**: propose updates with `pnpm outdated` output + rationale (security, features, breaking changes)
- **Security audits**: run `pnpm audit` before merges; address HIGH/CRITICAL immediately

### Security & Compliance
- **CodeQL**: runs on `.github/workflows/codeql.yml` — fix alerts before merging
- **Scorecard**: `.github/workflows/scorecard.yml` — maintain >7.0 score
- **Secrets**: use GitHub Secrets for CI; `.env` files are `.gitignore`'d; never commit `.env.example` with real values
- **Provenance**: SLSA provenance via reusable workflows in `.github/workflows/`

---

## 3) Output Format Overrides

Use global CLAUDE.md output contracts (PATCH/FILE/SNIPPET/JSON/COMMAND) with these additions:

### PATCH (monorepo-specific)
```diff
# filename: packages/auth/src/handler.ts
--- a/packages/auth/src/handler.ts
+++ b/packages/auth/src/handler.ts
@@ -10,3 +10,5 @@
 context
-old
+new
 context
```

**Required sections**:
- **Assumptions**: pnpm version, node version, affected workspaces
- **Tests**: exact turbo command (`turbo run test --filter=auth`) + expected pass count
- **Turbo cache**: note if change invalidates cache (new deps, env vars, build script changes)
- **Commit**: Conventional Commit format (`feat(auth): add OAuth2 support`)

### FILE (template-based)
When creating new services/packages, reference template:
```ts filename: services/new-service/src/index.ts
// Based on templates/service-template/src/index.ts
// Changes: added webhook handler, removed ping endpoint
```

---

## 4) Workflow Checklists

### Before Coding
- [ ] Read `AGENTS.md` if touching governance/workflows
- [ ] Check `turbo.json` pipeline for affected tasks
- [ ] Note which workspaces are affected (use `pnpm list --depth=0` to see all)
- [ ] Verify node version (`node -v` should be 20+)

### During Coding
- [ ] Follow template structure if creating new service/package
- [ ] Update `pnpm-workspace.yaml` if adding new workspace
- [ ] Add/update tests in `tests/unit/` and `tests/integration/`
- [ ] Respect existing naming (e.g., handlers use `handler.ts`, tests use `*.test.ts`)

### After Coding
- [ ] Run `turbo run lint typecheck test` locally before committing
- [ ] Update relevant README if changing templates or workflows
- [ ] Add ADR in `docs/adr/` if introducing new pattern
- [ ] Verify CodeQL/Scorecard pass in PR (check Actions tab)

---

## 5) Anti-Patterns (Project-Specific)

❌ **Creating services without using templates** (always start from `templates/service-template/`)
❌ **Bypassing turbo** (don't run `npm` or `yarn`; use `pnpm` + `turbo`)
❌ **Ignoring `AGENTS.md`** (it defines the operating model; read it before workflow changes)
❌ **Unfrozen installs in CI** (always `pnpm install --frozen-lockfile`)
❌ **Skipping tests** (turbo pipeline enforces `test` before `build`)
❌ **Committing to main directly** (use PRs; branch protection is enforced)
❌ **Deleting files without archiving** (move to `archive/<date>/` first)
❌ **Ignoring Scorecard/CodeQL alerts** (fix before merging)
❌ **Using `latest` tags** (pin versions in templates)
❌ **Creating orphan packages** (must be in `pnpm-workspace.yaml`)

---

## 6) Common Tasks

### Add a New Service
```sh
# 1. Copy template
cp -r templates/service-template services/new-service

# 2. Update package.json (name, version, description)
# 3. Add to pnpm-workspace.yaml
echo "  - 'services/new-service'" >> pnpm-workspace.yaml

# 4. Install deps
pnpm install

# 5. Verify turbo sees it
turbo run build --filter=new-service

# 6. Create ADR
echo "# ADR: Add new-service" > docs/adr/$(date +%Y%m%d)-new-service.md
```

### Update Dependencies
```sh
# 1. Check outdated
pnpm outdated

# 2. Update specific package
pnpm --filter <workspace> add <package>@<version>

# 3. Run tests
turbo run test --filter=<workspace>

# 4. Audit
pnpm audit

# 5. Commit with rationale
git commit -m "chore(deps): update <package> to <version> for <reason>"
```

### Run Security Checks
```sh
# Audit deps
pnpm audit --audit-level=high

# Run CodeQL locally (requires CodeQL CLI)
codeql database create --language=javascript --source-root=. ./codeql-db
codeql database analyze ./codeql-db --format=sarif-latest --output=results.sarif

# Check Scorecard (requires scorecard CLI)
scorecard --repo=github.com/intune-labs/monorepo --format=json
```

---

## 7) Debugging & Troubleshooting

### Turbo Cache Issues
```sh
# Clear turbo cache
turbo run build --force

# Bypass cache for debugging
turbo run test --cache-dir=.turbo-tmp
```

### pnpm Workspace Issues
```sh
# List all workspaces
pnpm list --depth=0

# Check workspace dependencies
pnpm why <package>

# Verify workspace structure
cat pnpm-workspace.yaml
```

### Test Failures
```sh
# Run specific test file
pnpm --filter <workspace> test -- tests/unit/handler.test.ts

# Verbose output
pnpm --filter <workspace> test -- --verbose

# Watch mode (for TDD)
pnpm --filter <workspace> test -- --watch
```

---

## 8) References

- **AGENTS.md**: Operating model, planning, testing, security policies
- **README.md**: Getting started, governance, contribution guide
- **.github/SECURITY.md**: Vulnerability disclosure, compliance
- **templates/*/README.md**: Template-specific usage guides
- **Global ~/.claude/CLAUDE.md**: Universal coding principles (security, testing, anti-patterns)

---

*Intune Labs CLAUDE.md v1.0 — Monorepo workflow — pnpm/Turbo — Template-driven — Governance-aligned*