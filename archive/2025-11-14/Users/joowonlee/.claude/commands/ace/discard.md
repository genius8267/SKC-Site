---
allowed-tools:
  - Write
  - TodoWrite
  - Bash
argument-hint: "[reason]"
description: Clean slate restart - discard current approach while preserving lessons learned
model: default
---

# ace:discard

**Purpose**: Discard current approach and restart with clean context

When the current approach is fundamentally wrong, start fresh while preserving valuable lessons.

## Usage
```bash
/ace:discard
/ace:discard "architecture too complex"
/ace:discard --save-lessons
```

@include shared/ace-patterns.yml#Discard_And_Restart_Pattern

## When to Discard

**Valid Reasons**:
```yaml
Fundamental_Flaws:
  - Initial approach is architecturally wrong
  - Research revealed much better alternative
  - Plan complexity spiraling out of control
  - Implementation proving much harder than expected
  - Core assumption was invalid

Context_Issues:
  - Context polluted with failed attempts
  - Lost track of original goal
  - Too many false starts
  - Circular reasoning / confusion

Better_Path_Discovered:
  - Found existing solution that does what we need
  - Discovered framework feature that simplifies approach
  - Realized simpler pattern exists
```

**Invalid Reasons** (don't discard for these):
```yaml
Not_Reasons_To_Discard:
  - Minor implementation bug (just fix it)
  - One failed test (debug and fix)
  - Small complexity increase (refactor)
  - Temporarily stuck (take break, ask questions)
```

## Discard Workflow

### Phase 1: Capture Lessons Learned

**Critical**: Extract valuable insights before discarding

**Lessons Template**:
```markdown
# Lessons Learned: {discarded-approach-name}

**Date**: {timestamp}
**Original Goal**: {what we were trying to accomplish}
**Approach Tried**: {what we attempted}

## Why It Failed

### Technical Reasons
1. {specific technical issue}
2. {architectural problem}
3. {performance/security/complexity issue}

### Assumption Failures
1. **Assumed**: {what we thought was true}
   **Reality**: {what is actually true}
   **Impact**: {why this mattered}

### Missed Information
- {information we didn't have during research}
- {better alternative we discovered late}

## What We Learned

### Positive Insights
1. {useful pattern discovered}
2. {helpful technique learned}
3. {better understanding of system}

### Negative Insights (avoid these)
1. {anti-pattern identified}
2. {complexity trap}
3. {performance pitfall}

## Better Approach

### New Strategy
{one paragraph on improved approach}

### Why This Will Work
1. {reason 1}
2. {reason 2}

### What to Do Differently
1. {change 1}
2. {change 2}

## Salvageable Work

**Keep**:
- {tests that are still valid}
- {documentation that applies}
- {patterns that work}

**Discard**:
- {failed implementation}
- {wrong assumptions}
- {overly complex design}
```

### Phase 2: Archive Failed Attempt

**Archive Structure**:
```yaml
Archive_Location:
  Path: .claudedocs/tasks/{task-id}/discarded/{timestamp}-{reason-slug}/

Contents:
  - lessons-learned.md (most important!)
  - research-original.md (what we knew)
  - plan-attempted.md (what we tried)
  - code-attempted/ (partial implementation)
  - context-snapshot.md (conversation state)

Purpose:
  - Preserve lessons for future
  - Avoid repeating same mistakes
  - Reference if needed
  - Show work (not wasted effort)
```

### Phase 3: Clean Context

**Context Reset**:
```yaml
Discard_From_Active_Context:
  - All conversation about failed approach
  - Research that led to wrong conclusion
  - Failed plan and implementation
  - Debugging attempts and false starts

Preserve_In_Context:
  - Lessons learned document (keep active)
  - Original task goal
  - Valid requirements and success criteria
  - Known constraints and dependencies

Result:
  - Clean slate for new approach
  - Lessons learned front and center
  - No context pollution
  - Fresh perspective possible
```

### Phase 4: Quick Re-Research (Optional)

**Focused Re-Research**:
```yaml
Research_Strategy:
  Scope: "Only areas where we lacked information"
  Approach: "Apply lessons learned immediately"
  Skip: "Areas we already understand well"

Questions_To_Answer:
  - What did we miss in original research?
  - What new information changes our approach?
  - What simpler patterns exist?
  - What existing solutions can we leverage?

Output:
  - Brief research addendum
  - Focused on gaps only
  - References original research
```

### Phase 5: Create New Plan

**Improved Planning**:
```yaml
Apply_Lessons:
  - Start with "What we learned from failed approach"
  - Explicitly avoid identified pitfalls
  - Use simpler patterns discovered
  - Validate assumptions early

New_Plan_Structure:
  Introduction:
    - Reference discarded approach
    - Explain why new approach is better
    - Highlight lessons applied

  Risk_Assessment:
    - Call out risks from previous attempt
    - Explain how we're mitigating them now
    - Be more conservative in estimates

  Validation:
    - Earlier validation checkpoints
    - Prototype/spike before full implementation
    - Can bail out if same issues appear
```

## Discard Modes

### Mode 1: Full Discard (default)
```bash
/ace:discard "approach too complex"
```
- Archive everything
- Clean context completely
- Start from scratch
- Keep only lessons learned

### Mode 2: Partial Discard
```bash
/ace:discard --keep-research
```
- Keep research (was valid)
- Discard plan and implementation
- Useful when research good but plan bad

### Mode 3: Pivot
```bash
/ace:discard --pivot "use library X instead of building"
```
- Keep relevant parts
- Discard incompatible work
- Shift direction significantly

## Example Scenarios

### Scenario 1: Architecture Realization

```markdown
**Situation**: 2 hours into implementing custom OAuth system, realized Passport.js does everything we need

**Discard Reason**: "Building custom OAuth when library exists"

**Lessons Learned**:
- Should have researched libraries more thoroughly
- Passport.js handles: strategies, callbacks, session management
- Our custom approach was reinventing wheel
- 2 hours spent, but would be 20+ hours to finish + maintain

**New Approach**:
- Use Passport.js with Google/GitHub strategies
- Implement only custom business logic
- Leverage battle-tested library

**Salvage**:
- Keep: Database schema (compatible with Passport)
- Keep: Test cases (adapt to Passport API)
- Discard: Custom OAuth implementation (200+ lines)
```

### Scenario 2: Complexity Spiral

```markdown
**Situation**: Plan started simple (3 steps), grew to 15 steps with complex state management

**Discard Reason**: "Plan complexity spiraling, losing sight of goal"

**Lessons Learned**:
- Started implementing before fully understanding problem
- Each new issue added complexity
- Should have researched edge cases upfront
- Simpler pattern exists (event-driven)

**New Approach**:
- More thorough research phase
- Event-driven architecture (simpler)
- Handle edge cases explicitly in design
- Validate with prototype first

**Salvage**:
- Keep: Research findings
- Keep: Identified edge cases (now handled)
- Discard: Complex 15-step plan
- Discard: Partial implementation
```

### Scenario 3: Invalid Assumption

```markdown
**Situation**: Built entire plan assuming database supports JSON columns, but it's SQLite (no JSON)

**Discard Reason**: "Core assumption invalid - database doesn't support JSON"

**Lessons Learned**:
- Verify database capabilities before planning
- Don't assume features exist
- Quick spike would have caught this

**New Approach**:
- Use separate tables for structured data
- Or: Migrate to PostgreSQL (supports JSON)
- Validate database compatibility first

**Salvage**:
- Keep: Business logic (database-agnostic)
- Keep: API design (unchanged)
- Discard: Database schema using JSON
- Discard: Query logic assuming JSON support
```

## Psychological Aspects

**It's OK to Discard**:
```yaml
Reframing:
  Old_Mindset: "I wasted 2 hours on this failed approach"
  New_Mindset: "I invested 2 hours to learn this won't work, saving 20 hours of continuing down wrong path"

Sunk_Cost_Fallacy:
  Problem: "I've already done so much work, I should finish"
  Reality: "Continuing bad approach wastes more time than restarting"
  Solution: "Discard early when problems identified"

Learning_Value:
  - Failed approach taught valuable lessons
  - Now we know what doesn't work
  - New approach will be better informed
  - This is part of the process

Professional_Approach:
  - Great engineers restart when needed
  - Admitting mistake is strength
  - Clean slate allows better work
  - Lessons learned are valuable output
```

## Integration with ACE Workflow

**Explicit Discard**:
```bash
# During research
/ace:research "feature X"
# Realize existing solution exists
/ace:discard --reason "found existing library that does this"

# During planning
/ace:plan "complex feature"
# Plan getting too complex
/ace:discard --reason "complexity spiraling" --keep-research

# During implementation
/start-task --ace "feature"
# Major blocker discovered
/ace:discard --reason "core assumption invalid"
```

**Discard and Restart Workflow**:
```bash
/workflow 'ace:discard → ace:research --focused → ace:plan → @confirm'
```

## Best Practices

**WHEN to discard**:
- ✅ Fundamental flaw in approach
- ✅ Much simpler alternative discovered
- ✅ Core assumption proven wrong
- ✅ Complexity spiraling out of control
- ✅ Context polluted beyond recovery

**HOW to discard**:
- ✅ Capture detailed lessons learned first
- ✅ Archive all work (don't delete)
- ✅ Clean context completely
- ✅ Apply lessons to new approach
- ✅ Be honest about what went wrong

**WHAT to preserve**:
- ✅ Lessons learned (most valuable)
- ✅ Valid research findings
- ✅ Identified edge cases
- ✅ Useful patterns discovered
- ✅ Tests that remain relevant

**WHAT NOT to do**:
- ❌ Discard without capturing lessons
- ❌ Delete work permanently
- ❌ Carry forward flawed assumptions
- ❌ Repeat same approach
- ❌ Feel bad about discarding

## Output

**Discard Report**:
```markdown
# Discard Report

**Date**: {timestamp}
**Task**: {original task}
**Reason**: {why discarded}

## Archived
- Location: .claudedocs/tasks/{id}/discarded/{timestamp}/
- Research: {X} pages
- Plan: {Y} steps
- Code: {Z} files, {N} lines
- Conversation: {M} messages

## Lessons Learned
[Full lessons learned document]

## Next Steps
1. {what to do next}
2. {how to restart better}
3. {what to avoid}

## Context Status
- Before discard: {X}% utilization ({Y} tokens)
- After discard: {Z}% utilization ({W} tokens)
- Reduction: {X-Z}%

Ready for clean restart ✅
```

## Flags

```yaml
Discard_Options:
  --reason <text>: "Why we're discarding"
  --keep-research: "Preserve research, discard plan/code"
  --keep-plan: "Preserve plan, discard implementation"
  --pivot: "Shift direction, not full restart"

Safety:
  --dry-run: "Show what would be discarded"
  --archive-path <path>: "Custom archive location"
  --no-delete: "Archive only, keep in context"

Restart:
  --restart-now: "Immediately start new research phase"
  --lessons-only: "Just capture lessons, no restart"
```

---

*ace:discard v1.0.0 - Clean slate restart with lessons preservation*
