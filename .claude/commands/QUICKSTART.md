---
disable-model-invocation: true
---

# SuperClaude Commands - Quick Start Guide

> **Get productive in 5 minutes** | 19 commands | MCP-powered | Evidence-based

---

## The 5-Minute Quick Start

### 1. Your First Command (30 seconds)

```bash
# Analyze code quality
/analyze --code src/auth.ts

# Build a React component
/build --react --magic "user profile card"

# Run tests
/test --coverage
```

### 2. Use Pre-built Workflows (1 minute)

```bash
# Complete feature development
/workflow feature-dev --magic

# Fix a bug systematically
/workflow bug-fix

# Safe production deployment
/workflow deploy-safe
```

### 3. Power User Combo (2 minutes)

```bash
# Research → Design → Build → Test
/explain --c7 "React Server Components" →
/design --api --seq →
/build --react --magic →
/test --e2e --pup

# Or use the shorthand:
/workflow research-implement "React Server Components"
```

### 4. Common Workflows (1.5 minutes)

| Task | Command | Duration |
|------|---------|----------|
| Fix bug | `/troubleshoot → /improve → /test` | 1-2h |
| Add feature | `/workflow feature-dev` | 2-6h |
| Deploy safely | `/workflow deploy-safe` | 30-90min |
| Improve quality | `/workflow quality-gate` | 1-3h |
| Research topic | `/explain --c7 --seq "topic"` | 10-30min |

---

## Command Categories (The Big Picture)

### 🔍 **Analysis** (Understand)
```bash
/analyze --code         # Code quality review
/scan --security        # Security vulnerabilities
/explain --depth expert # Deep topic explanation
/review --files --evidence  # AI-powered code review
```

### 🏗️ **Build** (Create)
```bash
/build --react --magic  # React app with UI generation
/design --api --ddd     # API design with DDD
/dev-setup --type node  # Project environment setup
```

### ✅ **Quality** (Validate)
```bash
/test --tdd --coverage  # Test-driven development
/improve --quality      # Code quality improvements
/cleanup --all          # Project maintenance
```

### 🚀 **Deploy** (Ship)
```bash
/deploy --env prod      # Production deployment
/migrate --validate     # Database migrations
/git --commit "message" # Git workflow
```

### 🔧 **Manage** (Organize)
```bash
/task:create "feature"  # Complex task management
/load --scope full      # Project context loading
/workflow 'cmd1 → cmd2' # Command chains
```

---

## Power Features (Level Up)

### MCP Servers (Superpowers)

**Context7** (`--c7`): Library documentation
```bash
/build --c7 "OAuth implementation"
# → Fetches official docs, best practices, examples
```

**Sequential** (`--seq`): Complex analysis
```bash
/troubleshoot --seq "performance degradation"
# → Step-by-step root cause analysis
```

**Magic** (`--magic`): UI component generation
```bash
/build --magic "responsive dashboard"
# → Generates accessible React components
```

**Puppeteer** (`--pup`): Browser automation
```bash
/test --pup --e2e
# → Automated browser testing
```

**Playwright MCP** (structured DOM automation)
```bash
codex mcp list        # Verify the server is registered
npx @playwright/mcp@latest --caps=vision
# → Launches accessibility-tree driven browser tooling for agents
```

### Thinking Modes (Complexity Levels)

| Flag | Tokens | Use When |
|------|--------|----------|
| `--think` | ~4K | Multi-file analysis |
| `--think-hard` | ~10K | Architecture design |
| `--ultrathink` | ~32K | System redesign |

```bash
# Simple: single file
/analyze src/auth.ts

# Medium: related files
/analyze --think src/auth/

# Deep: full architecture
/analyze --think-hard --arch
```

### Personas (Expert Modes)

```bash
/review --persona-security      # Security audit
/build --persona-frontend       # UI focus
/analyze --persona-performance  # Performance optimization
/troubleshoot --persona-architect # System design
```

---

## Common Patterns (Copy & Paste)

### Feature Development
```bash
# Full cycle
/workflow feature-dev --magic

# Or manual steps:
/analyze --code src/ →
/design --api $REQUIREMENTS →
/build --feature --magic →
/test --tdd --coverage →
/review --quality --evidence →
/git --commit "feat: add user authentication"
```

### Bug Fixing
```bash
# Quick fix
/troubleshoot "login fails" →
/improve --fix →
/test

# Deep investigation
/troubleshoot --seq --ultrathink "memory leak" →
/analyze --profile →
/improve --perf →
/test --watch
```

### Quality Improvement
```bash
# One-shot
/workflow quality-gate

# Manual control
/analyze --code & /review --quality & /scan --security →
/improve --quality --iterate --threshold 95% →
/test --coverage →
/scan --validate
```

### Safe Deployment
```bash
# Full automation
/workflow deploy-safe

# With manual checkpoints
/test --coverage →
/scan --security →
/build --production →
@checkpoint →
@confirm("Deploy to production?") →
/deploy --env prod →
/test --e2e --env prod
```

### Research & Learn
```bash
# Quick lookup
/explain --c7 "React hooks"

# Deep dive
/explain --c7 --seq --depth expert "distributed transactions" →
/design --ddd →
/build --c7 --evidence
```

---

## Flags Cheat Sheet

### Universal Flags (Work Everywhere)

**Planning:**
- `--plan` : Show execution plan first
- `--dry-run` : Preview without executing

**MCP Control:**
- `--c7` : Enable Context7 (library docs)
- `--seq` : Enable Sequential (complex analysis)
- `--magic` : Enable Magic (UI generation)
- `--pup` : Enable Puppeteer (browser automation)
- `--all-mcp` : Enable all MCP servers
- `--no-mcp` : Disable all MCP (offline mode)

**Output:**
- `--uc` : Ultra-compressed output (save tokens)
- `--introspect` : Show decision-making process

**Quality:**
- `--think` : Multi-file context
- `--think-hard` : Deep analysis
- `--ultrathink` : Maximum depth

### Command-Specific Flags

**analyze:**
- `--code` : Quality review
- `--arch` : Architecture analysis
- `--perf` : Performance profiling

**build:**
- `--react` : React/frontend
- `--api` : API/backend
- `--tdd` : Test-driven development

**test:**
- `--coverage` : Generate coverage report
- `--e2e` : End-to-end tests
- `--watch` : Continuous testing

**deploy:**
- `--env <env>` : Target environment (dev|staging|prod)
- `--rollback` : Revert deployment

---

## Troubleshooting (When Things Go Wrong)

### MCP Server Issues

**Problem:** "Context7 unavailable"
```bash
# Solution 1: Check MCP servers are running
/help mcp

# Solution 2: Use fallback (automatic)
# SuperClaude automatically falls back to WebSearch

# Solution 3: Disable MCP temporarily
/analyze --no-mcp src/
```

**Problem:** "Sequential timeout"
```bash
# Solution: Simplify or use native analysis
/analyze --no-seq --think src/
```

### Command Failures

**Problem:** Command hangs
```bash
# Solution: Use timeout
/test → @timeout(5min) → /deploy

# Or shorter thinking mode
/analyze --think  # instead of --ultrathink
```

**Problem:** Out of context
```bash
# Solution: Use ultra-compressed mode
/workflow feature-dev --uc

# Or disable MCP
/workflow feature-dev --no-mcp
```

### Workflow Issues

**Problem:** Workflow interrupted
```bash
# Solution: Resume from checkpoint
/workflow resume

# Or check status
/workflow status
```

**Problem:** Don't know which command to use
```bash
# Solution: Describe what you want
"I want to add authentication to my React app"
# SuperClaude will suggest: /workflow feature-dev --magic

"My app is slow"
# SuperClaude will suggest: /analyze --perf --seq
```

---

## Next Steps (Learn More)

### Essential Commands (Master These First)
1. `/analyze` - Understand code
2. `/build` - Create features
3. `/test` - Ensure quality
4. `/workflow` - Chain commands

### Power User Commands (Level Up)
5. `/review` - AI code review
6. `/scan` - Security audits
7. `/troubleshoot` - Debug issues
8. `/improve` - Optimize code

### Pro Commands (Advanced)
9. `/design` - Architecture
10. `/spawn` - Parallel agents
11. `/task` - Complex projects
12. `/deploy` - Ship code

### Read More
- `index.md` - Complete reference
- `ADVANCED.md` - Advanced patterns
- `workflow-patterns.yml` - Workflow DSL
- Individual command docs: `{command}.md`

---

## Pro Tips (Insider Secrets)

### Speed
```bash
# Use workflows instead of manual chains
/workflow feature-dev  # vs /analyze → /design → /build → /test

# Enable caching
# (automatic - MCP responses cached for session)

# Parallel execution
/test & /scan & /analyze --parallel
```

### Quality
```bash
# Always use --evidence for reviews
/review --files src/ --evidence

# Combine personas for thorough analysis
/analyze --persona-security & /analyze --persona-performance

# Iterate until threshold met
/improve --iterate --threshold 95%
```

### Safety
```bash
# Dry-run complex operations
/deploy --env prod --dry-run

# Checkpoint before risky operations
/build → @checkpoint → /deploy

# Use quality gates
/workflow quality-gate → /deploy
```

### Learning
```bash
# Use introspection to learn
/build --introspect --magic "navbar"
# → Shows decision-making process

# Start with high depth
/explain --depth expert --seq "React Server Components"

# Always use --c7 for library questions
/explain --c7 "useState vs useReducer"
```

---

## Getting Help

### In-Tool Help
```bash
/help                  # General help
/help {command}        # Command-specific help
/help mcp              # MCP server status
/help workflows        # Available workflow templates
```

### Quick Reference
```bash
# Show command list
/help commands

# Show flag reference
/help flags

# Show workflow templates
/help workflows
```

### Community & Support
- GitHub Issues: Report bugs, request features
- Documentation: Complete command reference in `index.md`
- Examples: See individual `{command}.md` files

---

**You're ready! Start with `/workflow feature-dev --magic` or `/analyze --code src/` 🚀**
