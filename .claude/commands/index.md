---
description: SuperClaude Commands Reference
---

@include shared/universal-constants.yml#Universal_Legend

## 🎯 Which Command Should I Use?

**Choose based on what you want to accomplish:**

### 📝 I want to implement a feature or fix a bug
→ **`/start-task "description"`** - Complete development workflow with approval gates
- Use for: New features, complex bug fixes, refactoring
- Phases: THINK → EXPLORE → PLAN → APPROVE → CODE → VERIFY
- Duration: 30min - 8 hours

### 🔍 I want to analyze my code
→ **`/analyze`** - Universal analysis for quality, security, performance, architecture
- **`/analyze --code src/`** - Code quality & structure
- **`/analyze --security`** - Security vulnerabilities (OWASP, secrets)
- **`/analyze --perf src/api/`** - Performance bottlenecks & profiling
- **`/analyze --arch`** - Architecture & design patterns
- **Combine:** `/analyze --code --security --perf src/`

### 🧪 I want to test my code
→ **`/test`** - Run tests with various modes
- **`/test`** - Run unit tests
- **`/test --coverage`** - With coverage report
- **`/test --e2e`** - End-to-end tests
- **`/test --coverage --e2e`** - Full test suite

### 🚀 I want to deploy
→ **`/workflow deploy-safe`** - Production deployment with safety checks
- Workflow: test → scan → build → checkpoint → confirm → deploy → verify
- Use alias: **`/ship-it`** for quick access
- Duration: 30-90 minutes

### 🔧 I want to debug an issue
→ **`/troubleshoot "issue description"`** - Systematic debugging
- Root cause analysis
- Evidence-based solutions
- Fix recommendations

### ✨ I want to improve code quality
→ **`/improve`** - Code improvement & optimization
- **`/improve --quality`** - Code quality improvements
- **`/improve --perf`** - Performance optimizations
- **`/improve --arch`** - Architecture refactoring

### 🔗 I want to chain multiple commands
→ **`/workflow 'cmd1 → cmd2 → cmd3'`** - Command composition
- Sequential: `cmd1 → cmd2 → cmd3`
- Parallel: `cmd1 & cmd2 & cmd3`
- Conditional: `cmd1 && cmd2 || cmd3`
- Templates: `feature-dev`, `bug-fix`, `deploy-safe`, `quality-gate`

### ⚡ I want a quick shortcut
→ **Command Aliases** - Fast access to common patterns
- **`/ship-it`** - Safe production deployment
- **`/security-audit`** - Full security scan
- **`/deep-review`** - Comprehensive code review
- **`/perf-check`** - Performance analysis
- **`/quick-fix`** - Fast bug fixes
- **`/test-all`** - Complete test suite

---

## Command Categories

### Development Workflow (2 commands)
**`/start-task`** - Universal task implementation workflow
- Purpose: Implement features, fix bugs, refactor code
- Workflow: THINK → EXPLORE → PLAN → APPROVE → CODE → VERIFY
- Use when: Writing code, need approval gates, complex tasks

**`/workflow`** - Command composition and automation
- Purpose: Chain commands, automate operations, create pipelines
- Syntax: `cmd1 → cmd2 → cmd3` or use predefined templates
- Use when: Automating workflows, CI/CD, repetitive tasks

### Analysis (1 unified command)
**`/analyze`** - Universal analysis (replaces `/scan`, `/review`)
- **`--code`** - Code quality, structure, bugs, maintainability
- **`--security`** - Vulnerabilities, OWASP Top 10, secrets, dependencies
- **`--perf`** - Performance, bottlenecks, memory, algorithms
- **`--arch`** - Architecture, design patterns, coupling, scalability
- **Combine modes:** `/analyze --code --security --perf src/`

### Operations (8 commands)
**`/build`** - Project building with stack templates
- Modes: `--init` (new project), `--feature`, `--tdd`
- Templates: React, API, Fullstack, Mobile, CLI

**`/test`** - Comprehensive testing framework
- Modes: `--unit`, `--integration`, `--e2e`, `--coverage`, `--tdd`

**`/deploy`** - Safe deployment with rollback
- Environments: `--env dev|staging|prod`
- Safety: Automatic checkpointing, secrets detection

**`/migrate`** - Database migrations
- Modes: `--dry-run`, `--up`, `--down`, `--rollback`

**`/cleanup`** - Code and project cleanup
- Modes: `--code`, `--deps`, `--all`, `--dry-run`

**`/troubleshoot`** - Professional debugging
- Modes: `--performance`, `--memory`, `--network`, `--interactive`

**`/improve`** - Code enhancement & optimization
- Modes: `--quality`, `--perf`, `--arch`, `--refactor`, `--iterate`

**`/git`** - Git operations
- Modes: `--commit`, `--sync`, `--checkpoint`, `--branch`

### Planning & Design (3 commands)
**`/design`** - System design & architecture
- Modes: `--api`, `--ddd`, `--microservices`, `--event-driven`

**`/document`** - Documentation generation
- Modes: `--api`, `--user`, `--architecture`, `--inline`

**`/explain`** - Code explanation & teaching
- Depth: `--simple`, `--detailed`, `--expert`

### Utilities (4 commands)
**`/load`** - Context loading for session
- Load project context, documentation, patterns

**`/task`** - Task management
- Commands: `:create`, `:status`, `:resume`, `:complete`

**`/estimate`** - Effort estimation
- Methodologies: story points, time-based, complexity-based

**`/dev-setup`** - Development environment setup
- Modes: `--install`, `--configure`, `--validate`, `--ci`

**`/spawn`** - Multi-agent task spawning
- Spawn specialized agents for complex tasks

---

## Command Aliases (Built-in Shortcuts)

**Quick Actions:**
- **`/quick-fix`** → `/troubleshoot --fix --quick` - Fast bug fixes
- **`/ship-it`** → `/workflow deploy-safe` - Safe production deployment
- **`/security-audit`** → `/analyze --security --deps --strict` - Full security scan
- **`/deep-review`** → `/analyze --code --security --perf --evidence` - Comprehensive review
- **`/perf-check`** → `/analyze --perf --profile --seq` - Performance analysis
- **`/test-all`** → `/test --coverage --e2e` - Complete test suite

**Workflow Templates:**
- **`/workflow feature-dev`** - Complete feature implementation (2-6h)
- **`/workflow bug-fix`** - Systematic bug resolution (1-4h)
- **`/workflow deploy-safe`** - Production deployment with safety (30-90min)
- **`/workflow quality-gate`** - Enforce quality standards (1-3h)
- **`/workflow research-implement`** - Research-driven development (3-8h)
- **`/workflow refactor-safe`** - Behavior-preserving refactoring (2-5h)

See `shared/command-aliases.yml` for the complete list of 40+ aliases.

---

## 📊 Command Summary

**Total Commands:** 20 core commands + unlimited workflows
- **Development:** 2 (start-task, workflow)
- **Analysis:** 1 (analyze - unified)
- **Operations:** 8 (build, test, deploy, migrate, cleanup, troubleshoot, improve, git)
- **Planning:** 3 (design, document, explain)
- **Utilities:** 4 (load, task, estimate, dev-setup)
- **Advanced:** 2 (spawn, workflow)

@include shared/flag-inheritance.yml#Universal_Always

---

## Common Workflow Patterns

### Setup New Project
```bash
/load → /dev-setup --install → /build --init → /test
```

### Feature Development
```bash
/start-task "add user authentication"
# OR using workflow:
/workflow feature-dev --magic
# Expands to: analyze → design → build → test → review
```

### Bug Fixing
```bash
/troubleshoot "login fails" → /test → /git --commit
# OR quick fix:
/quick-fix "login button not working"
```

### Quality Improvement
```bash
/analyze --code src/ --evidence → /improve --quality → /test
```

### Security Hardening
```bash
/analyze --security --deps → /improve --security → /analyze --security --validate
# OR shorthand:
/security-audit → /improve --security
```

### Pre-Deployment Validation
```bash
/test --coverage → /analyze --security --strict → /workflow deploy-safe
# OR just:
/ship-it
```

### Performance Optimization
```bash
/analyze --perf --profile src/api/ --seq → /improve --perf --iterate
# OR:
/perf-check src/api/ → /improve --perf
```

---

## Advanced Flag Combinations

```yaml
Power_User_Patterns:
  Deep_Analysis: /analyze --code --security --perf --arch --seq --think-hard --evidence
  UI_Development: /build --react --magic --pup --watch --tdd
  Production_Deploy: /analyze --security --strict → /deploy --env prod --think-hard
  Emergency_Debug: /troubleshoot --prod --ultrathink --seq --interactive

Research_&_Learning:
  Library_Study: /explain --c7 --seq --depth expert "React hooks lifecycle"
  Architecture_Design: /design --ddd --seq --think-hard → /document --api
  Performance_Deep_Dive: /analyze --perf --profile --seq → /improve --iterate --threshold 95%

Token_Optimization:
  Compressed_Docs: /document --uc → /explain --uc --c7
  Efficient_Analysis: /analyze --code --uc --no-mcp → /improve --uc
  Rapid_Workflow: /build --uc → /test --uc → /deploy --uc

Introspection_&_Learning:
  Transparent_Workflow: /analyze --code --introspect
  Learning_Development: /build --react --introspect --magic
  Debug_Understanding: /troubleshoot --introspect --seq
  Process_Visibility: /design --api --introspect --think-hard
```

---

## Safety & Best Practices

### Pre-Deployment Safety
```yaml
Full_Gate: /test --coverage → /analyze --security → /deploy
Staged: /deploy --env staging → /test --e2e → /deploy --env prod --plan
Rollback_Ready: /git --checkpoint → /deploy → (if issues) /deploy --rollback
```

### Development Safety
```yaml
Clean_First: /cleanup --code → /build → /test → /git --commit
Quality_Gate: /analyze --code → /improve --quality → /test → /git --commit
Secure: /analyze --security → fix issues → /analyze --security --validate
```

### Planning for Complex Operations
```yaml
Architecture: /design --api --ddd --plan --think-hard
Migration: /migrate --dry-run → /migrate --plan → verify
Cleanup: /cleanup --all --dry-run → review → /cleanup --all
```

---

## Migration Guide (What Changed)

### 🔄 Commands Consolidated

**Before (old commands):**
```bash
/scan --security              # Security scanning
/scan --deps                  # Dependency audit
/review --files src/          # Code review
/review --pr 123              # PR review
```

**After (new unified command):**
```bash
/analyze --security           # Security scanning
/analyze --security --deps    # Security + dependencies
/analyze --code src/          # Code review
/analyze --code --pr 123      # PR review
```

**Why consolidate?**
- Single entry point for all analysis
- Combine multiple analysis types: `/analyze --code --security --perf src/`
- Clearer intent through explicit flags
- Reduced command confusion

### ✅ Aliases Still Work

All command aliases continue to work as before:
```bash
/security-audit   # Still works → /analyze --security --deps --strict
/deep-review      # Still works → /analyze --code --security --perf --evidence
/perf-check       # Still works → /analyze --perf --profile --seq
/quick-fix        # Still works → /troubleshoot --fix --quick
/ship-it          # Still works → /workflow deploy-safe
/test-all         # Still works → /test --coverage --e2e
```

### 📝 Backward Compatibility

Old syntax is deprecated but still supported for 3 months:
- `/scan` → Use `/analyze --security` instead
- `/review` → Use `/analyze --code` instead

---

## Troubleshooting Common Issues

### MCP Server Problems

**Issue:** "Context7 unavailable" or "Sequential timeout"
```bash
# Check MCP server status
/help mcp

# Use fallback (automatic):
# SuperClaude automatically falls back to WebSearch → Local patterns

# Or disable MCP temporarily:
/analyze --no-mcp src/

# Disable specific server:
/build --no-magic --c7  # Disable Magic, keep Context7
```

**Issue:** "MCP server not responding"
```yaml
Auto_Recovery:
  - Circuit breaker after 3 failures
  - 5-minute cooldown period
  - Automatic fallback to native tools
  - User notification: "⚠ {SERVER} unavailable, using fallback"

Manual_Recovery:
  - Wait 5 minutes for auto-recovery
  - Or use --no-mcp flag
  - Check ~/.claude/logs/mcp-health.log
```

### Command Failures

**Issue:** Command hangs or times out
```bash
# Use timeout control:
/test → @timeout(5min) → /deploy

# Or use lighter thinking mode:
/analyze --think  # instead of --ultrathink

# Or simplify workflow:
/workflow feature-dev --uc  # Ultra-compressed mode
```

**Issue:** "Out of context" errors
```bash
# Solution 1: Use ultra-compressed mode
/workflow --uc

# Solution 2: Disable MCP servers
/workflow --no-mcp

# Solution 3: Simplify workflow
# Break into smaller steps instead of large chains
```

**Issue:** "Secrets detected - deployment blocked"
```bash
# This is a FEATURE, not a bug!
# Security scan found hardcoded secrets

Steps:
  1. Review flagged files
  2. Move secrets to environment variables
  3. Add to .gitignore if needed
  4. Use secret manager (AWS Secrets Manager, 1Password)
  5. Re-run deployment

Example:
  ❌ const API_KEY = "sk-1234..."
  ✅ const API_KEY = process.env.API_KEY
```

### Workflow Issues

**Issue:** Workflow interrupted
```bash
# Resume from last checkpoint:
/workflow resume

# Check workflow status:
/workflow status

# View saved context:
cat .claudedocs/workflows/context-{id}.json
```

**Issue:** Don't know which command to use
→ See "Which Command Should I Use?" section at the top of this file

### Performance Issues

**Issue:** Commands are slow
```bash
# Check MCP cache hit rate:
cat .claudedocs/mcp-health/cache-stats.json

# Enable parallel execution:
/workflow 'test & scan & analyze' --parallel

# Use cached results:
# (automatic - no action needed)

# Reduce thinking depth:
/analyze --think  # instead of --think-hard
```

**Issue:** High token usage
```bash
# Use ultra-compressed mode:
/analyze --uc

# Disable MCP for simple tasks:
/test --no-mcp

# Use specific MCP servers only:
/build --c7 --no-seq --no-magic
```

### Quality & Safety Issues

**Issue:** Tests failing after refactor
```bash
# Use safe refactoring workflow:
/workflow refactor-safe

# Or manual safe refactor:
/test →
@checkpoint →
/improve --refactor --safe →
/test →
@diff-check  # Compares test results

# Rollback if needed:
/deploy --rollback <checkpoint-id>
```

**Issue:** Security vulnerabilities found
```bash
# Use unified analyze command:
/analyze --security --deps --fix

# Or detailed workflow:
/security-audit →
/improve --security →
/analyze --security --validate
```

---

## Recovery & Checkpoints

**Automatic Checkpointing:**
- Before production deployments
- Before database migrations
- Before major refactoring
- On `@checkpoint` in workflows

**Manual Checkpoint:**
```bash
/git --checkpoint  # Save current state
```

**Rollback:**
```bash
/deploy --rollback <checkpoint-id>
/git reset --hard <checkpoint-id>
```

**Recovery Files:**
```
.claudedocs/
  checkpoints/        # Saved states
  workflows/          # Workflow contexts
  mcp-health/         # Server health logs
  reports/            # Execution reports
```

---

## Getting Help

```bash
/help                        # General help
/help {command}              # Command-specific help
/help aliases                # List all aliases
/help workflows              # Workflow templates
/help mcp                    # MCP server status
/help flags                  # Universal flags reference
```

---

## Shared Resources (27 pattern files)

**Pattern Files:**
- `architecture-patterns.yml`: DDD/microservices/event patterns
- `command-architecture-patterns.yml`: Command design & architecture patterns
- `compression-performance-patterns.yml`: Token optimization & performance monitoring
- `docs-patterns.yml`: Documentation system & formatting
- `execution-patterns.yml`: Unified workflow, MCP orchestration & lifecycle
- `feature-template.yml`: Task template for feature development
- `quality-patterns.yml`: Validation, error handling & quality control
- `research-patterns.yml`: Research flow & evidence validation
- `security-patterns.yml`: Security patterns & threat controls
- `task-management-patterns.yml`: Task & todo management patterns
- `recovery-state-patterns.yml`: Recovery & state management patterns
- `mcp-cache-patterns.yml`: MCP caching, fallback chains & circuit breakers
- `workflow-patterns.yml`: Workflow composition DSL & templates
- `command-aliases.yml`: Shortcuts for common workflow patterns (40+ aliases)

**Core System:**
- `flag-inheritance.yml`: Consolidated flag system with inheritance
- `reference-patterns.yml`: Optimized reference system with shortcuts
- `universal-constants.yml`: Universal constants, symbols & shared values

**Tools:**
- `validate-references.sh`: Reference validation & integrity checking

---

## Quick Start Guide

**🚀 New User?** Start here: `QUICKSTART.md` - Get productive in 5 minutes

**📚 Documentation:**
- `QUICKSTART.md` - 5-minute getting started guide
- `IMPROVEMENTS_SUMMARY.md` - Complete change log
- `CUSTOM_COMMANDS_GUIDE.md` - Create your own commands
- `ALL_COMMANDS_SUMMARY.md` - Detailed command inventory

---

*SuperClaude Command System v4.0 - 20 core commands, unlimited workflows, 40+ aliases*