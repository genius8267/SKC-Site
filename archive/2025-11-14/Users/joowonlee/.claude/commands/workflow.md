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
argument-hint: <workflow-template-or-chain>
description: Chain multiple commands with automatic context flow, checkpointing, and error handling (Sequential → Parallel → Conditional flows)
model: default
---

# workflow

**Purpose**: Chain multiple commands with automatic context flow

Execute workflow chains with automatic context flow, checkpointing, and error handling.

## Usage
```bash
/workflow <workflow-template-or-chain>
/workflow 'cmd1 → cmd2 → cmd3'
/workflow feature-dev --magic
```

@include shared/universal-constants.yml#Universal_Legend

@include shared/flag-inheritance.yml#Universal_Always

Examples:
- `/workflow 'analyze → improve → test'` - Sequential workflow
- `/workflow feature-dev --magic` - Pre-defined template
- `/workflow 'test && deploy || rollback'` - Conditional flow
- `/workflow 'test & scan & build' --parallel` - Parallel execution

## Workflow Syntax

@include shared/workflow-patterns.yml#DSL_Syntax

## Predefined Templates

@include shared/workflow-patterns.yml#Workflow_Library

**Available Templates:**
- `feature-dev`: Complete feature implementation (analyze→design→build→test→review)
- `bug-fix`: Bug investigation and resolution (troubleshoot→improve→test→git-commit)
- `deploy-safe`: Production deployment with safety checks (test→scan→build→deploy→verify)
- `quality-gate`: Quality assurance enforcement (analyze&review&scan→improve→repeat)
- `research-implement`: Research-driven development (explain→design→build→test)
- `refactor-safe`: Behavior-preserving refactoring (test→improve→test→verify)

## Workflow Control

**Operators:**
- `→` : Sequential execution (pass context forward)
- `&` : Parallel execution (concurrent)
- `&&` : Conditional (execute if previous succeeds)
- `||` : Fallback (execute if previous fails)
- `@checkpoint` : Save rollback point
- `@confirm('msg')` : Manual approval gate
- `@timeout(duration)` : Set time limit

**Context Variables:**
- `$FILES` : Files being processed
- `$CONTEXT` : Output from previous command
- `$RESULT` : Results from previous step
- `$ERROR` : Error context from failed command

## Execution Modes

**--dry-run:** Show execution plan without running
- Step breakdown | Estimated duration | Required resources | Checkpoint locations

**--step:** Execute one step at a time with confirmation
- Useful for testing workflows | Manual control at each step

**--parallel:** Enable automatic parallelization
- Identify independent steps | Execute concurrently | Aggregate results

**--resume:** Resume interrupted workflow from last checkpoint
- Auto-detect incomplete workflows | Load saved context | Continue execution

## Examples

```bash
# Basic sequential workflow
/workflow 'analyze → improve → test' src/

# Pre-defined template with flags
/workflow feature-dev --think --magic

# Conditional deployment
/workflow 'test && deploy --env prod || rollback'

# Parallel quality checks
/workflow 'test & scan & analyze' --parallel

# Safe production deploy with checkpoints
/workflow 'test → scan → @checkpoint → @confirm("Deploy?") → deploy --env prod'

# Iterative quality improvement
/workflow 'while(coverage < 80%) { test → improve }'

# Custom workflow with all features
/workflow '
  analyze $FILES →
  if($issues > 0) {
    improve --iterate → test
  } →
  scan --security →
  @checkpoint →
  @confirm("Deploy to production?") →
  deploy --env prod → verify
' --think-hard --validate
```

## Context Flow

@include shared/workflow-patterns.yml#Context_Flow_Management

Each command receives context from previous step including:
- Files modified
- Results and findings
- Performance metrics
- Key decisions

Context automatically flows through workflow chain and is stored in `.claudedocs/workflows/context-{workflow-id}.json` for recovery.

## Safety Features

**Automatic Checkpointing:**
- Before high-risk commands (deploy, migrate, cleanup)
- Manual checkpoints with `@checkpoint`
- Rollback capability on failure

**Error Handling:**
- Automatic retry for transient errors
- Fallback paths with `||` operator
- Full state preservation on abort

**Resource Management:**
- Track CPU, memory, token usage
- Alert on resource constraints
- Timeout management per command

## Performance

**Monitoring:**
- Duration per step
- Cache hit rates
- Resource consumption
- Bottleneck identification

**Optimization:**
- Automatic parallelization
- MCP caching
- Context compression
- Smart retries

**Reporting:**
- Real-time progress: `📍 Step 3/7: Running /test (2m elapsed)`
- Completion report in `.claudedocs/workflows/reports/{workflow-id}.md`
- Historical analysis and trending

## Best Practices

**Design:**
- Keep workflows focused (single responsibility)
- Use templates for common patterns
- Add checkpoints before risky operations
- Include verification steps after changes

**Safety:**
- Always use `--dry-run` first for complex workflows
- Add `@confirm` gates before production operations
- Include rollback paths with `||` operator
- Test workflows on non-critical paths first

**Performance:**
- Identify parallelization opportunities with `&`
- Use `--parallel` flag for automatic optimization
- Monitor resource usage in reports
- Reuse workflow templates to benefit from optimizations

@include shared/workflow-patterns.yml#Workflow_Execution_Engine

@include shared/workflow-patterns.yml#Safety_and_Validation

@include shared/universal-constants.yml#Standard_Messages_Templates