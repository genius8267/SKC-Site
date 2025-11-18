---
allowed-tools:
  - Read
  - Write
  - TodoWrite
argument-hint: "[scope]"
description: Intentional context compaction - reduce context while preserving critical information
---

# ace:compact

**Purpose**: Perform intentional context compaction following ACE methodology

Deliberately reduce context window utilization while preserving all high-leverage information.

## Usage
```bash
/ace:compact
/ace:compact conversation
/ace:compact task
/ace:compact --aggressive
```

@include shared/ace-patterns.yml#ACE_Core_Principles.Frequent_Intentional_Compaction

## Compaction Philosophy

> **HumanLayer ACE Principle**: "Frequent Intentional Compaction"
> Context should be deliberately structured and compacted at key stages to maintain optimal performance.

**Target**: Keep context utilization between 40-60%
**Trigger**: Run when context >60% or between workflow phases
**Method**: Structured summarization, pattern extraction, progressive archival

## Compaction Workflow

### Phase 1: Analyze Current Context

**Assess Context State**:
```yaml
Metrics_To_Check:
  - Current token count (estimate)
  - Percentage of capacity used
  - Rate of growth over last N turns
  - Time since last compaction
  - Phase of current task

Context_Categories:
  High_Value:
    - Current task plan
    - Active file being edited
    - Key insights and patterns
    - Success criteria

  Medium_Value:
    - Recent conversation history
    - Supporting evidence
    - Intermediate findings
    - Progress tracking

  Low_Value:
    - Verbose exploration logs
    - Completed task details
    - Example code (can regenerate)
    - Repeated information
```

### Phase 2: Select Compaction Strategy

@include shared/ace-patterns.yml#Context_Compaction_Strategies

**Strategies by Scope**:

1. **Conversation Compaction** (default)
   - Summarize last 10+ messages into key points
   - Keep: current task, recent decisions, active work
   - Archive: verbose explanations, completed work

2. **Task Compaction**
   - Research phase: Detailed findings → structured summary
   - Planning phase: Keep plan, archive research
   - Implementation: Keep plan + progress, archive completed steps

3. **File Content Compaction**
   - Large file reads → extract only relevant sections
   - Code examples → patterns and templates
   - Documentation → key points and references

### Phase 3: Execute Compaction

**Structured Summarization**:
```markdown
## Before Compaction (Example)

[Long conversation with detailed exploration]
[Multiple file reads with full contents]
[Verbose explanations of each step]
[Repeated information across messages]

Total: ~15,000 tokens

## After Compaction

### Context Summary

**Current Task**: Implement OAuth2 authentication
**Phase**: Planning (approved plan ready for implementation)

**Key Decisions Made**:
- Using passport.js for OAuth2 strategy
- Google + GitHub providers initially
- Storing tokens encrypted in database

**Active Plan** (plan.md):
[Full plan kept - this is high-leverage]

**Research Summary** (from research.md):
- Auth system in packages/auth uses JWT
- Database has user table in Prisma
- Frontend uses React hooks for auth state
[Detailed research archived to research-raw.md]

**Files Identified**:
- packages/auth/src/oauth.ts (to create)
- packages/database/prisma/schema.prisma:45 (add oauthProvider field)
- services/api/src/routes/auth.ts (add /auth/oauth routes)

**Next Steps**:
1. Create OAuth strategy file
2. Update database schema
3. Add OAuth routes
4. Test with Google provider

Total: ~3,000 tokens (80% reduction)
```

### Phase 4: Archive Discarded Content

**Progressive Archival**:
```yaml
Archive_Structure:
  .claudedocs/tasks/{task-id}/archive/
    - research-raw.md (verbose research before summarization)
    - exploration-logs.md (detailed file reads and experiments)
    - conversation-history.md (full conversation before compaction)
    - discarded-attempts/ (failed approaches with lessons learned)

Retention_Policy:
  - Keep archives for entire task duration
  - Clean up after task verification complete
  - Preserve "lessons learned" permanently
```

### Phase 5: Verify Compaction Quality

**Quality Checklist**:
```yaml
Verification:
  - [ ] Can you continue task without re-reading archived content?
  - [ ] Are all critical decisions preserved?
  - [ ] Is active plan/code still complete?
  - [ ] Are file references (path:line) preserved?
  - [ ] Is context utilization now 40-60%?

Rollback_Available:
  - All archived content preserved
  - Can restore from archive if needed
  - Compaction is non-destructive
```

## Compaction Strategies by Context Type

### Strategy 1: Structured Summarization

**Use when**: Verbose research or exploration needs condensing

**Technique**: Replace detailed logs with structured findings

**Example**:
```markdown
BEFORE (2000 tokens):
I read packages/auth/src/jwt.ts and found that it imports jsonwebtoken library.
The validateToken function is on line 45. It takes a token string as parameter.
First it tries to verify the token using jwt.verify(). If verification fails,
it catches the error and returns null. If successful, it extracts the payload.
The payload contains userId, email, and exp fields. The function then checks
if the token is expired by comparing exp with current time...
[continues verbosely for many paragraphs]

AFTER (200 tokens):
## JWT Validation (packages/auth/src/jwt.ts:45)
- Function: `validateToken(token: string): Payload | null`
- Library: jsonwebtoken@9.0.0
- Process: verify signature → extract payload → check expiry
- Returns: `{userId, email, exp}` or `null` on failure
- Error handling: Catches and returns null (no throws)
```

### Strategy 2: Pattern Extraction

**Use when**: Multiple similar examples can be replaced with pattern

**Technique**: Extract common pattern, discard specific instances

**Example**:
```markdown
BEFORE (3000 tokens):
[Shows 5 different API route handlers with full code]
[Each follows same structure but with different logic]

AFTER (400 tokens):
## API Route Pattern Identified
**Template**: services/api/src/routes/*.ts
**Structure**:
1. Zod schema validation
2. Try/catch business logic
3. Structured response {success, data/error}

**Example**: see auth.ts:login() for reference implementation
**All routes follow this pattern**: auth, users, webhooks, payments
```

### Strategy 3: Progressive Archival

**Use when**: Moving from one phase to next

**Technique**: Keep current phase active, archive previous phases

**Example**:
```markdown
TRANSITION: Research → Planning

KEEP IN ACTIVE CONTEXT:
- research.md summary (500 tokens)
- plan.md (full detail - 1500 tokens)
- current conversation (last 3 messages)

ARCHIVE TO DISK:
- research-raw.md (5000 tokens of detailed exploration)
- file-contents/ (all files read during research)
- exploration-logs.md (step-by-step research process)

REFERENCE BY PATH:
- "See research-raw.md for detailed JWT flow analysis"
- "Full auth middleware code in archive/file-contents/middleware.ts"
```

### Strategy 4: Selective History

**Use when**: Long conversation needs trimming

**Technique**: Keep recent + critical, archive older messages

**Example**:
```markdown
CONVERSATION: 50 messages over 2 hours

KEEP (10 messages, 2000 tokens):
- Last 5 messages (current context)
- Message 23 (critical decision: chose OAuth2 over SAML)
- Message 35 (plan approval)
- Message 40 (started implementation)
- Message 45 (completed step 1)

ARCHIVE (40 messages, 8000 tokens):
- .claudedocs/tasks/{task-id}/archive/conversation-full.md
- Include timestamps and decision points
- Searchable if needed

SUMMARIZE ARCHIVED:
"Earlier conversation: researched auth options, evaluated OAuth2 vs SAML vs JWT-only,
decided on OAuth2 with Google/GitHub providers, created detailed plan, got approval."
```

## Compaction Metrics

**Before/After Report**:
```yaml
Compaction_Report:
  Before:
    Tokens: 15000
    Utilization: 75%
    Categories:
      - Research: 8000 tokens
      - Planning: 3000 tokens
      - Conversation: 4000 tokens

  After:
    Tokens: 4000
    Utilization: 20%
    Categories:
      - Research summary: 500 tokens
      - Planning (full): 1500 tokens
      - Conversation: 2000 tokens

  Reduction:
    Total: 73% (11000 tokens saved)
    Research: 94% (preserved as summary)
    Planning: 0% (kept full - high leverage)
    Conversation: 50% (archived older messages)

  Quality:
    - All critical decisions preserved: ✓
    - Can continue without re-read: ✓
    - File references intact: ✓
    - Rollback available: ✓
```

## Integration with ACE Workflow

**Automatic Triggers** (when using `/start-task --ace`):
```yaml
Auto_Compaction_Points:
  - After research phase: Compact exploration → summary
  - After plan approval: Archive verbose research
  - After each major implementation step: Archive completed work
  - When context >60%: Suggest compaction

Manual_Override:
  - Run `/ace:compact` anytime to force compaction
  - Useful before long implementation phases
  - Good practice before switching tasks
```

**Workflow Integration**:
```bash
# Explicit compaction in workflow
/workflow 'ace:research → ace:compact → ace:plan → ace:compact → start-task'

# Automatic compaction (built into ace mode)
/start-task --ace "implement feature"
# Compacts automatically at phase transitions
```

## Compaction Scopes

### Scope: `conversation` (default)
```bash
/ace:compact
/ace:compact conversation
```
- Summarize recent conversation history
- Keep last 5 messages + critical decisions
- Archive older messages to markdown

### Scope: `task`
```bash
/ace:compact task
```
- Compact current task context
- Research → summary
- Keep plan, archive details
- Progress → milestone summary

### Scope: `all`
```bash
/ace:compact all --aggressive
```
- Comprehensive compaction
- Conversation + Task + Files
- Maximum context reduction
- Use between major phases

## Flags

```yaml
Compaction_Modes:
  --aggressive: "Maximum compaction (aim for 30% utilization)"
  --moderate: "Standard compaction (40-60% utilization)" [default]
  --gentle: "Light compaction (preserve more context)"

Safety:
  --dry-run: "Show what would be compacted without doing it"
  --preview: "Show before/after comparison"
  --keep-all: "Archive without removing from context (for analysis)"

Output:
  --report: "Generate detailed compaction metrics report"
  --archive-path <path>: "Custom archive location"
```

## Best Practices

**WHEN to compact**:
- ✅ Between workflow phases (research → planning → implementation)
- ✅ When context utilization >60%
- ✅ After completing major milestone
- ✅ Before switching to unrelated task
- ✅ When feeling "lost in context"

**WHAT to keep**:
- ✅ Current active task plan (high-leverage)
- ✅ File paths and line references (not content)
- ✅ Key decisions and rationale
- ✅ Success criteria and progress
- ✅ Critical patterns and insights

**WHAT to archive**:
- ✅ Verbose exploration logs
- ✅ Full file contents (keep path:line refs)
- ✅ Completed task details
- ✅ Intermediate reasoning steps
- ✅ Example code (can regenerate)

**HOW to verify**:
- ✅ Can you continue task after compaction?
- ✅ Are all decisions still accessible?
- ✅ Is context utilization optimal?
- ✅ Can you explain task in <5 bullets?

## Examples

### Example 1: After Research Phase
```bash
User: /ace:compact task

Claude:
Analyzing current context...

Current state:
- Tokens: 12,000
- Utilization: 60%
- Phase: Research complete, starting planning

Compaction strategy: Research → Summary

Actions:
1. Creating research summary (key findings only)
2. Archiving verbose exploration to research-raw.md
3. Archiving file contents to archive/files/
4. Keeping file path references

Before: 12,000 tokens (8000 research + 4000 other)
After: 4,500 tokens (500 summary + 4000 other)
Reduction: 62%

Compaction complete ✅

Archived to: .claudedocs/tasks/20250101-auth/archive/
- research-raw.md (7500 tokens)
- files/ (Full contents of 15 files)

Research summary available in context (500 tokens)
Ready to proceed with planning phase.
```

### Example 2: Mid-Implementation
```bash
User: I feel lost in all this context. Help me compact.

Claude:
Running context analysis...

Current state:
- Tokens: 18,000
- Utilization: 90% ⚠️ (CRITICAL)
- Phase: Implementation (step 3 of 7)
- Issue: Context pollution from failed attempts

Recommended: Aggressive compaction

Actions:
1. Archive completed steps 1-2 (keep summary only)
2. Archive failed attempt from earlier (with lessons learned)
3. Keep active plan + current step 3 + remaining steps
4. Compact conversation history

Before: 18,000 tokens
After: 5,000 tokens
Reduction: 72%

Compaction complete ✅

Context now optimized:
- Plan: steps 1-7 (full detail)
- Progress: "Steps 1-2 complete" (summary)
- Current: Step 3 in progress (full context)
- Lessons: "Approach X failed because Y" (preserved)

You can continue with clear, focused context.
```

### Example 3: Before Major Phase Transition
```bash
User: /ace:compact all --preview

Claude:
Compaction preview (dry-run):

CONVERSATION (8000 tokens → 2000 tokens):
- Keep: Last 5 messages
- Archive: Messages 1-45 with summary
- Critical decisions preserved: Yes

RESEARCH (6000 tokens → 800 tokens):
- Keep: Structured summary
- Archive: Detailed exploration logs
- Evidence citations preserved: Yes

PLANNING (2000 tokens → 2000 tokens):
- Keep: Full plan (high-leverage, don't compact)
- Archive: None (plan is already concise)

FILES (4000 tokens → 0 tokens):
- Keep: Path references only
- Archive: All file contents to disk
- Can re-read if needed: Yes

Total: 20000 → 4800 tokens (76% reduction)

Run without --preview to execute.
```

---

*ace:compact v1.0.0 - Intentional context compaction following HumanLayer ACE methodology*
