# ACE (Advanced Context Engineering) Commands

> Implementing HumanLayer's ACE methodology for optimal AI-assisted coding

## Overview

The ACE command suite implements the Advanced Context Engineering methodology popularized by HumanLayer's CodeLayer IDE. ACE focuses on **context as the primary lever** for AI coding quality, emphasizing structured workflows, intentional context compaction, and high-leverage human review.

## Core Philosophy

**"The contents of your context window are the ONLY lever you have to affect the quality of your output"**

ACE provides tools to:
- Keep context utilization optimal (40-60%)
- Structure workflows into Research → Plan → Implement phases
- Compact context deliberately at key stages
- Create persistent markdown artifacts for reference
- Enable clean restarts when approaches fail

## Quick Start

### Basic ACE Workflow
```bash
# Full workflow with all ACE features
/start-task --ace "implement OAuth2 authentication"

# This automatically runs:
# 1. ace:research (deep exploration)
# 2. ace:compact (optimize context)
# 3. ace:plan (detailed planning)
# 4. Approval gate
# 5. Implementation with progress tracking
# 6. Verification
```

### Manual Control
```bash
# Research phase only
/ace:research "authentication system"

# Review findings and create plan
/ace:plan "add OAuth2 support"

# Monitor context health
/ace:dashboard

# Compact when needed
/ace:compact
```

## Available Commands

### `/ace:research <topic>`

**Purpose**: Structured research with markdown artifacts

**What it does**:
- Systematically explores codebase
- Documents findings with evidence (file:line citations)
- Scores confidence on all findings (0-100%)
- Creates `.claudedocs/research/{timestamp}-{slug}/research.md`
- Generates concise summary for planning phase

**Flags**:
- `--surface`: Quick overview
- `--moderate`: Standard depth (default)
- `--deep`: Exhaustive research
- `--no-external`: Skip external docs research

**Example**:
```bash
/ace:research "webhook processing system" --deep

# Creates research.md with:
# - Files analyzed
# - Key findings (with confidence scores)
# - Integration points
# - Patterns identified
# - Questions/unknowns
# - Summary (3-5 bullets for planning)
```

**Output**: `.claudedocs/research/20250101-webhook-processing/research.md`

---

### `/ace:plan <task>`

**Purpose**: Create detailed implementation plan with context optimization

**What it does**:
- Loads research summary (not full research)
- Defines clear success criteria
- Breaks down implementation into atomic steps
- Assesses risks with mitigations
- Plans context compaction points
- Creates rollback strategy

**Flags**:
- `--from-research <path>`: Load specific research
- `--detailed`: Extra detailed plan
- `--rapid`: Quick plan for simple tasks

**Example**:
```bash
/ace:plan "add retry logic to webhooks"

# Creates plan.md with:
# - Implementation steps (with file paths)
# - Files to create/modify
# - Dependencies needed
# - Risk assessment
# - Success criteria
# - Context management plan
```

**Output**: `.claudedocs/tasks/{task-id}/plan.md`

---

### `/ace:compact [scope]`

**Purpose**: Intentional context compaction

**What it does**:
- Analyzes current context utilization
- Selects optimal compaction strategy
- Archives verbose content to markdown
- Preserves high-leverage information
- Reports before/after metrics

**Scopes**:
- `conversation` (default): Compact conversation history
- `task`: Compact current task context
- `all --aggressive`: Maximum compaction

**Flags**:
- `--dry-run`: Preview without executing
- `--aggressive`: Maximum reduction
- `--report`: Detailed metrics

**Example**:
```bash
/ace:compact

# Before: 15,000 tokens (75% utilization)
# After: 4,000 tokens (20% utilization)
# Savings: 73% (11,000 tokens)

# Archives:
# - research-raw.md (7,500 tokens)
# - file-contents/ (3,000 tokens)
# - conversation-history.md (4,500 tokens)
```

---

### `/ace:discard [reason]`

**Purpose**: Clean slate restart with lessons learned

**What it does**:
- Captures detailed "Lessons Learned"
- Archives failed attempt
- Cleans context completely
- Enables fresh start
- Preserves valuable insights

**When to use**:
- Fundamental flaw in approach
- Much simpler alternative discovered
- Core assumption proven wrong
- Complexity spiraling out of control

**Example**:
```bash
/ace:discard "found existing library that does this"

# Captures lessons:
# - Why custom approach failed
# - What we learned
# - Better strategy
# - What to avoid

# Archives to:
# .claudedocs/tasks/{id}/discarded/{timestamp}/

# Result: Clean context, ready to restart
```

---

### `/ace:dashboard`

**Purpose**: Monitor context utilization and ACE workflow health

**What it does**:
- Shows current context utilization
- Tracks workflow phase and progress
- Lists active artifacts
- Suggests optimization opportunities
- Provides ACE quality metrics

**Flags**:
- `--detailed`: Expanded metrics
- `--suggest`: Actionable recommendations
- `--watch`: Continuous monitoring

**Example**:
```bash
/ace:dashboard

# Output:
# Context: 42% (84K/200K tokens) ✅ OPTIMAL
# Phase: Planning (pending approval)
# Artifacts: research.md (800), plan.md (2000)
# Optimization: No action needed
# Next compaction: At 60% (36K tokens away)
```

---

## Workflow Patterns

### Pattern 1: Full ACE Workflow
```bash
/workflow ace-full "implement feature X"

# Executes:
# ace:research → ace:compact → ace:plan → @confirm → start-task --ace-implement
```

### Pattern 2: Research-Driven Development
```bash
/workflow ace-research-only "explore auth system"
# Deep research without implementation

/ace:plan "add OAuth based on research"
/start-task --ace-implement
```

### Pattern 3: Recovery from Failed Attempt
```bash
/workflow ace-recover "simpler approach after complexity spiral"

# Executes:
# ace:discard → ace:research --focused → ace:plan → start-task --ace
```

### Pattern 4: Rapid Development
```bash
/workflow ace-rapid "simple bug fix"

# Quick workflow:
# ace:research --surface → ace:plan → start-task --ace
```

## Context Management Strategy

### Target Utilization

**Optimal**: 40-60% of context capacity
- Enough room for exploration and complexity
- Good performance and response quality
- Headroom for growth

**Warning**: 60-70%
- Consider compaction soon
- Monitor growth rate
- Plan next compaction point

**Critical**: >70%
- Compact immediately
- Archive verbose content
- Keep only essential info

### Compaction Points

**Automatic** (with `--ace` mode):
1. After research phase → archive verbose exploration
2. After plan approval → keep plan, archive research details
3. After major milestones → archive completed steps
4. When context >60% → suggest compaction

**Manual**:
- Before long implementation phases
- When switching between unrelated tasks
- When feeling "lost in context"
- After debugging sessions

### What to Keep vs Archive

**Keep in Active Context**:
- ✅ Current task plan
- ✅ Active file being edited
- ✅ Key insights and patterns
- ✅ File references (path:line)
- ✅ Success criteria
- ✅ Recent conversation (last 5-10 messages)

**Archive to Markdown**:
- ✅ Verbose exploration logs
- ✅ Full file contents (keep refs only)
- ✅ Completed task details
- ✅ Intermediate reasoning
- ✅ Example code (can regenerate)
- ✅ Older conversation

## Best Practices

### DO

✅ **Use structured artifacts**
- Create research.md, plan.md, progress.md
- Reference by path, not content duplication

✅ **Compact frequently**
- At phase transitions
- When context >60%
- Between unrelated tasks

✅ **Focus human review on planning**
- "Bad line of plan → hundreds of bad lines of code"
- Implementation is mechanical execution

✅ **Score confidence**
- Every finding gets 0-100% score
- Block on <80% for critical items
- Be honest about uncertainties

✅ **Discard when needed**
- Don't continue fundamentally flawed approaches
- Capture lessons learned
- Start fresh with clean context

### DON'T

❌ **Let context grow unbounded**
- Monitor with `/ace:dashboard`
- Compact proactively

❌ **Skip research phase**
- Thorough research prevents bad plans
- Bad plans waste implementation time

❌ **Approve plans you don't understand**
- Ask for clarification
- Request plan revision
- Better to iterate on plan than fix bad code

❌ **Keep verbose logs in context**
- Archive to markdown
- Reference by file:line

❌ **Discard without capturing lessons**
- Always create lessons-learned.md
- Document what failed and why

## Integration with Existing Commands

### With `/start-task`
```bash
# Enable ACE mode
/start-task --ace "implement feature"

# ACE features active:
# - Structured artifacts
# - Auto compaction
# - Context monitoring
# - Markdown tracking
```

### With `/workflow`
```bash
# Use ACE workflow templates
/workflow ace-full "complex task"
/workflow ace-rapid "simple task"
/workflow ace-recover "restart after failure"
```

### With Analysis/Testing
```bash
# Before ACE workflow
/analyze --code src/ → /ace:research "findings"

# After ACE implementation
/start-task --ace "feature" → /test --coverage
```

## Directory Structure

ACE commands create organized artifacts:

```
.claudedocs/
├── research/
│   └── {timestamp}-{slug}/
│       ├── research.md          # Structured findings
│       └── archive/
│           └── research-raw.md  # Verbose logs
│
└── tasks/
    └── {task-id}/
        ├── research.md          # Research summary
        ├── plan.md              # Implementation plan
        ├── progress.md          # Progress tracking
        ├── archive/             # Archived content
        │   ├── research-raw.md
        │   ├── conversation.md
        │   └── files/
        └── discarded/           # Failed attempts
            └── {timestamp}-{reason}/
                └── lessons-learned.md
```

## Metrics and Monitoring

### Key Metrics

**Context Utilization**: Percentage of context capacity used
- Target: 40-60%
- Warning: >60%
- Critical: >85%

**Research Confidence**: Average confidence score of findings
- Excellent: >90%
- Good: 80-90%
- Warning: <80%

**Context Efficiency**: How well context is organized
- Score: 0-100%
- Factors: Compaction frequency, artifact usage, reference strategy

**Workflow Adherence**: Following ACE phases correctly
- Research → Plan → Implement sequence
- Context compaction at transitions
- Quality gates validated

### Viewing Metrics

```bash
# Quick check
/ace:dashboard

# Detailed metrics
/ace:dashboard --detailed

# Optimization suggestions
/ace:dashboard --suggest
```

## Troubleshooting

### "Context utilization too high"
```bash
# Check current state
/ace:dashboard

# Compact based on suggestions
/ace:compact conversation  # or: task, all
```

### "Research confidence low"
```bash
# Continue research on uncertain areas
/ace:research "specific topic" --deep

# Or proceed with documented assumptions
# (note in plan.md)
```

### "Plan complexity spiraling"
```bash
# Consider discarding and restarting
/ace:discard "complexity too high"
/ace:research --focused "simpler approach"
/ace:plan "simplified implementation"
```

### "Lost track of task"
```bash
# Review current state
/ace:dashboard

# Read artifacts
# - .claudedocs/tasks/{id}/plan.md
# - .claudedocs/tasks/{id}/progress.md

# If too confused, consider restart
/ace:discard "lost context"
```

## Examples

### Example 1: Feature Implementation
```bash
# Start with ACE workflow
/start-task --ace "add password reset functionality"

# Monitor progress
/ace:dashboard

# Implementation proceeds through phases:
# ✅ Research (30 min) → 95% confidence
# ✅ Plan (45 min) → 10 steps, approved
# 🔄 Implement (step 3 of 10) → 60% context
# ⏳ Verify → pending

# Compact if needed
/ace:compact task

# Complete verification
# ✅ All tests pass
# ✅ Success criteria met
```

### Example 2: Research Deep Dive
```bash
# Deep research without implementation
/ace:research "authentication architecture" --deep

# Takes 1 hour, generates comprehensive research.md

# Compact findings
/ace:compact research

# Later: use research for planning
/ace:plan "migrate to OAuth2"
```

### Example 3: Failed Attempt Recovery
```bash
# Realize approach is wrong
/ace:discard "custom OAuth too complex, use library"

# Lessons captured automatically

# Quick focused research
/ace:research "passport.js OAuth strategies" --focused

# New plan with lessons applied
/ace:plan "use passport.js for OAuth"

# Implement with clean context
/start-task --ace-implement
```

## Further Reading

- `ace-patterns.yml` - Complete ACE patterns library
- `start-task.md` - Main task workflow with ACE integration
- `workflow.md` - Workflow chaining with ACE templates
- HumanLayer ACE methodology: https://github.com/humanlayer/advanced-context-engineering-for-coding-agents

---

*ACE Commands v1.0.0 - Implementing HumanLayer's Advanced Context Engineering methodology*
