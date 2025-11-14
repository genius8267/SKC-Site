---
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
  - Task
  - TodoWrite
  - WebFetch
  - WebSearch
argument-hint: [--code|--security|--perf|--arch] <files or directories>
description: Universal analysis command for code quality, security, performance, and architecture
---

# analyze

**Purpose**: Universal analysis command for code quality, security, performance, and architecture

@include shared/universal-constants.yml#Universal_Legend

## Usage
```bash
/analyze <files or directories>
/analyze --code src/
/analyze --security --deps
/analyze --perf --profile src/api/
/analyze --arch --think-hard
```

@include shared/flag-inheritance.yml#Universal_Always

Examples:
- `/analyze --code src/` - Code quality analysis
- `/analyze --security` - Security vulnerability scan
- `/analyze --perf --profile src/api/` - Performance profiling
- `/analyze --arch --think-hard` - Architecture review
- `/analyze --code --security src/auth.ts` - Combined analysis

## Analysis Modes

**Select one or more modes to combine analyses:**

### --code: Code Quality & Structure
**What it analyzes:**
- Code quality → naming, structure, DRY principle, complexity
- Bugs → null checks, edge cases, type safety
- Maintainability → documentation, test coverage, technical debt
- Best practices → language idioms, design patterns

**Output:**
- Quality metrics (complexity, duplication, maintainability index)
- Bug detection with severity levels
- Refactoring recommendations
- Test coverage gaps

### --security: Security Vulnerabilities & Compliance
**What it analyzes:**
- OWASP Top 10 (2021) vulnerabilities
- Injection risks (SQL, NoSQL, Command, XSS)
- Authentication & authorization flaws
- Sensitive data exposure
- Hardcoded secrets detection (40+ patterns)
- Security misconfiguration
- Vulnerable & outdated dependencies

**Security Patterns Detected:**
```yaml
Secrets_Detection:
  API_Keys:
    - 'API[_-]?KEY\s*[=:]\s*[''"][\w-]{20,}[''"]'
    - 'REACT_APP_[A-Z_]+\s*=\s*[''"][^''"]+'
    - 'sk-[A-Za-z0-9]{48}'  # OpenAI keys
    - 'gh[pousr]_[A-Za-z0-9]{36,}'  # GitHub tokens

  Credentials:
    - '(password|passwd|pwd)\s*[=:]\s*[''"][^''"]+'
    - 'mysql://[^:]+:[^@]+@'  # Connection strings

  Private_Keys:
    - '-----BEGIN.*PRIVATE KEY-----'
    - '-----BEGIN RSA PRIVATE KEY-----'

  Cloud_Credentials:
    - 'AKIA[0-9A-Z]{16}'  # AWS Access Key
    - 'AIza[0-9A-Za-z\\-_]{35}'  # Google API Key

Action_On_Detection: "❌ CRITICAL: Hardcoded secrets found - blocks deployment"
```

**Output:**
- OWASP Top 10 coverage report
- Vulnerability list with CWE/CVE references
- Secrets detection results
- Fix recommendations with code examples
- Security compliance score

### --perf: Performance Analysis & Optimization
**What it analyzes:**
- Algorithm complexity (O(n²) detection)
- Database queries (N+1 problems, missing indexes)
- Memory usage (leaks, excessive allocations)
- Network latency (API calls, bundle size)
- Frontend metrics (FCP, LCP, TTI, CLS)
- Caching opportunities
- Resource utilization

**Output:**
- Performance bottleneck identification
- Before/after optimization metrics
- Algorithmic complexity analysis
- Query optimization recommendations
- Memory profiling results
- Core Web Vitals scores

### --arch: Architecture & Design Patterns
**What it analyzes:**
- System design & architecture patterns
- Layer coupling & separation of concerns
- Scalability bottlenecks
- Maintainability assessment
- Design pattern application
- SOLID principles adherence
- DDD building blocks validation

**Output:**
- Architecture diagram (if applicable)
- Pattern recognition results
- Coupling metrics
- Scalability analysis
- Refactoring opportunities
- Technical debt assessment

## Scope Flags

**Define what to analyze:**

### File/Directory Scope
```bash
/analyze --code src/                    # Analyze directory
/analyze --security src/auth.ts         # Analyze specific file
/analyze --perf src/**/*.ts             # Analyze pattern
```

### Git Scope
```bash
/analyze --commit HEAD                  # Analyze last commit
/analyze --commit abc123                # Analyze specific commit
/analyze --commit main..feature         # Analyze commit range
/analyze --pr 123                       # Analyze pull request
```

### Dependency Scope
```bash
/analyze --deps                         # Dependency vulnerabilities
/analyze --deps --fix                   # Auto-fix vulnerable deps
```

## Command-Specific Flags

### Analysis Depth
- `--quick`: Fast scan, critical issues only (5-10 min)
- `--standard`: Standard analysis (default) (15-30 min)
- `--deep`: Comprehensive deep analysis (30-60 min)

### Output Control
- `--evidence`: Include authoritative sources for all findings
- `--fix`: Suggest specific fixes with code examples
- `--summary`: Executive summary only
- `--report`: Generate detailed markdown report in `.claudedocs/reports/`
- `--json`: Machine-readable JSON output
- `--ci`: CI-friendly output format

### Quality Control
- `--strict`: Zero-tolerance mode (fail on any issue)
- `--threshold <score>`: Minimum quality score (0-100)
- `--baseline <file>`: Compare against baseline metrics

### Execution Modes
- `--watch`: Continuous monitoring with real-time updates
- `--interactive`: Guided analysis with step-by-step exploration
- `--parallel`: Parallel analysis across multiple cores

### Expert Perspectives (Multi-Persona)
- `--persona-security`: Security expert perspective
- `--persona-performance`: Performance expert perspective
- `--persona-architect`: Architecture expert perspective
- `--persona-qa`: QA expert perspective
- `--persona-refactorer`: Refactoring expert perspective

**Note:** Personas enhance analysis with specialized expertise. Use with `--evidence` for authoritative sources.

## Combined Analysis Examples

### Full Stack Analysis
```bash
/analyze --code --security --perf src/
# → Comprehensive analysis covering quality, security, and performance
```

### Pre-Merge Review
```bash
/analyze --code --security --pr 123 --evidence --fix
# → Complete PR review with sources and fix suggestions
```

### Production Safety Check
```bash
/analyze --security --deps --strict
# → Security audit blocking deployment if issues found
```

### Performance Investigation
```bash
/analyze --perf --profile --seq src/api/
# → Deep performance analysis with Sequential thinking
```

### Architecture Review
```bash
/analyze --arch --code --think-hard --evidence
# → Comprehensive architecture and quality review
```

## Analysis Process

**1. Context Gathering:**
- Understanding codebase patterns
- Identifying architectural style
- Recognizing team conventions
- Establishing analysis scope

**2. Multi-Dimensional Scan:**
- Execute selected analysis modes
- Cross-reference findings across dimensions
- Collect evidence from authoritative sources
- Apply persona-specific expertise

**3. Evidence Collection (with --evidence):**
- Research best practices via Context7
- Cite official documentation
- Reference industry standards
- Provide measurable metrics

**4. Prioritized Findings:**
- Critical issues first (security, bugs)
- High-impact performance bottlenecks
- Quality improvements ranked by value
- Quick wins vs. long-term refactoring

**5. Actionable Recommendations:**
- Specific fix suggestions with code
- Alternative approaches explained
- Refactoring opportunities detailed
- Prevention strategies documented

@include shared/research-patterns.yml#Mandatory_Research_Flows

@include shared/quality-patterns.yml#Code_Quality_Metrics

@include shared/security-patterns.yml#OWASP_Top_10

@include shared/compression-performance-patterns.yml#Performance_Baselines

@include shared/architecture-patterns.yml#DDD_Building_Blocks

## Output Formats

### Console Output (Default)
```markdown
## Analysis Results: src/

### 🚨 CRITICAL Issues (2)
1. SQL Injection in auth.ts:45
   - Severity: CRITICAL
   - CWE: CWE-89
   - OWASP: A03:2021 - Injection
   - Fix: Use parameterized queries
   - Evidence: https://owasp.org/...

2. Hardcoded API Key in config.ts:12
   - Severity: CRITICAL
   - Pattern: API_KEY = "sk-..."
   - Fix: Move to environment variables
   - ❌ BLOCKS DEPLOYMENT

### ⚠️ HIGH Issues (5)
[Details...]

### 📊 Quality Metrics
- Complexity: 15 (threshold: 10) ⚠️
- Duplication: 8% (threshold: 5%) ⚠️
- Test Coverage: 65% (target: 80%) ❌
- Maintainability Index: 72/100 ⚠️

### ⚡ Performance Analysis
- Algorithm Complexity: O(n²) detected in 3 functions
- N+1 Queries: 2 occurrences
- Memory Leaks: None detected ✅
- Bundle Size: 450KB (target: <300KB) ⚠️

### 🏛️ Architecture Score: 78/100
- SOLID Principles: 80% adherence
- Layer Separation: Good
- Coupling: Medium (12 dependencies)
- Scalability: Moderate

## Summary
- Total Issues: 24
  - Critical: 2 ❌
  - High: 5 ⚠️
  - Medium: 12 📝
  - Low: 5 ℹ️
- Quality Score: 72/100
- Status: ⚠️ NEEDS IMPROVEMENT
```

### Report Output (--report)
Generates detailed markdown report in `.claudedocs/reports/analysis-{timestamp}.md` with:
- Executive summary
- Detailed findings by category
- Evidence and references
- Code examples for fixes
- Metrics and trends
- Recommended action items

### JSON Output (--json)
Machine-readable format for CI/CD integration:
```json
{
  "timestamp": "2025-10-01T12:00:00Z",
  "scope": "src/",
  "modes": ["code", "security"],
  "summary": {
    "total_issues": 24,
    "critical": 2,
    "high": 5,
    "medium": 12,
    "low": 5
  },
  "quality_score": 72,
  "status": "needs_improvement",
  "issues": [...],
  "metrics": {...},
  "recommendations": [...]
}
```

## Integration Patterns

### With Other Commands
```bash
# Analysis → Improvement → Verification
/analyze --code src/ → /improve --quality → /analyze --code src/ --baseline

# Analysis → Fix → Deploy
/analyze --security --strict && /improve --security && /deploy || exit 1

# Workflow Integration
/workflow 'analyze --code --security → improve → test → deploy'
```

### CI/CD Integration
```yaml
# GitHub Actions
- name: Code Analysis
  run: /analyze --code --security --json > analysis.json

- name: Check Quality Gate
  run: |
    quality_score=$(jq '.quality_score' analysis.json)
    if [ $quality_score -lt 80 ]; then
      echo "Quality score $quality_score below threshold"
      exit 1
    fi
```

## Migration from Old Commands

**Previously separate commands are now unified:**

```bash
# OLD COMMANDS (deprecated)
/scan --security        → /analyze --security
/scan --deps            → /analyze --security --deps
/review --files src/    → /analyze --code src/ --evidence
/review --pr 123        → /analyze --code --pr 123
/scan --validate        → /analyze --code --security --strict

# ALIASES STILL WORK
/security-audit         → /analyze --security --deps --strict
/deep-review            → /analyze --code --security --perf --evidence
/perf-check             → /analyze --perf --profile --seq
```

**Why consolidate?**
- Single entry point for all analysis needs
- Combine multiple analysis types in one command
- Clearer intent through explicit flags
- Reduced command confusion
- Easier to remember

## Best Practices

**Quick Checks:**
```bash
/analyze --code src/auth.ts                    # Fast file check
/analyze --security --quick                    # Quick security scan
/analyze --perf --profile slowFunction()       # Targeted profiling
```

**Comprehensive Analysis:**
```bash
/analyze --code --security --perf src/ --evidence --fix
# → Full analysis with sources and fixes
```

**Pre-Commit Hooks:**
```bash
/analyze --code --security --quick --strict
# → Fast, strict check before commit
```

**Pre-Deployment:**
```bash
/analyze --security --deps --strict
# → Security gate for production
```

**Performance Debugging:**
```bash
/analyze --perf --profile --seq --interactive
# → Guided performance investigation
```

**Architecture Reviews:**
```bash
/analyze --arch --code --think-hard --evidence --report
# → Comprehensive architecture review with detailed report
```

## Troubleshooting

**Analysis Too Slow:**
```bash
/analyze --quick src/              # Fast scan only
/analyze --code --no-mcp src/      # Disable MCP servers
/analyze --parallel src/           # Parallel execution
```

**Too Many False Positives:**
```bash
/analyze --code --threshold 80     # Raise quality threshold
/analyze --security --baseline security-baseline.json  # Compare to baseline
```

**Want More Detail:**
```bash
/analyze --code --deep --evidence --report  # Deep analysis with report
/analyze --perf --profile --seq --interactive  # Guided deep dive
```

**CI/CD Integration Issues:**
```bash
/analyze --code --security --json > analysis.json  # Machine-readable
/analyze --ci --strict                              # CI-friendly output
```

@include shared/docs-patterns.yml#Standard_Notifications

@include shared/universal-constants.yml#Standard_Messages_Templates