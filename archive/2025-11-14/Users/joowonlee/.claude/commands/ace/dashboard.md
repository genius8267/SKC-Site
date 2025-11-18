---
allowed-tools:
  - Read
  - TodoWrite
argument-hint: ""
description: ACE context monitoring dashboard - track context utilization and optimization opportunities
model: default
---

# ace:dashboard

**Purpose**: Monitor context utilization and ACE workflow health

Real-time visibility into context state, workflow phase, and optimization opportunities.

## Usage
```bash
/ace:dashboard
/ace:dashboard --detailed
/ace:dashboard --suggest
```

@include shared/ace-patterns.yml#Context_Window_Management.Monitoring

## Dashboard Overview

**Quick Status Display**:
```
═══════════════════════════════════════════════════════════
 ACE DASHBOARD
═══════════════════════════════════════════════════════════

 📊 CONTEXT STATUS
 ├─ Utilization: ████████░░░░░░░░░░░░ 42% (84,000 / 200,000 tokens)
 ├─ Status: ✅ OPTIMAL (40-60% target range)
 ├─ Growth Rate: +2,500 tokens/10 messages
 └─ Last Compaction: 15 minutes ago

 🎯 CURRENT TASK
 ├─ Task: Implement OAuth2 authentication
 ├─ Phase: Planning
 ├─ Status: Pending approval
 ├─ Progress: 2 of 6 phases complete
 └─ Estimated Completion: 60% done

 📁 ACTIVE ARTIFACTS
 ├─ Research: .claudedocs/tasks/20250101-oauth/research.md (800 tokens)
 ├─ Plan: .claudedocs/tasks/20250101-oauth/plan.md (2,000 tokens)
 ├─ Progress: Not started
 └─ Archive: 3 files archived (5,500 tokens saved)

 ⚡ OPTIMIZATION OPPORTUNITIES
 ├─ ✅ No action needed (context healthy)
 └─ Next compaction suggested at 60% (18,000 tokens from now)

 📈 ACE METRICS
 ├─ Research Quality: 95% confidence
 ├─ Plan Completeness: 100% (all sections present)
 ├─ Context Efficiency: 87% (below optimal, 4% improvement available)
 └─ Workflow Stage: On track

═══════════════════════════════════════════════════════════
```

## Context Metrics

### Current Utilization

**Token Breakdown**:
```yaml
Context_Composition:
  Conversation_History:
    Tokens: 8,000
    Percentage: 10%
    Status: "Last 15 messages"
    Action: "Healthy"

  Research_Artifacts:
    Tokens: 800
    Percentage: 1%
    Status: "Summarized"
    Action: "Optimal"

  Planning_Documents:
    Tokens: 2,000
    Percentage: 2%
    Status: "Full plan loaded"
    Action: "Keep (high-leverage)"

  File_Contents:
    Tokens: 12,000
    Percentage: 15%
    Status: "5 files in memory"
    Action: "Consider archiving after current step"

  Working_Memory:
    Tokens: 10,000
    Percentage: 12%
    Status: "Current step + validation"
    Action: "Healthy"

  Buffer:
    Tokens: 51,200
    Percentage: 60%
    Status: "Available"
    Action: "Good headroom"

Total_Used: 32,800 tokens (40%)
Total_Available: 167,200 tokens (60% headroom)
```

### Growth Tracking

**Historical Utilization**:
```
Context Growth Over Time:
10 messages ago: 25,000 tokens (30%)
5 messages ago:  28,500 tokens (35%)
Current:         32,800 tokens (40%)

Growth Rate: +2,500 tokens per 5 messages
Projected (10 messages): 37,300 tokens (46%)
Compaction Needed By: 25 messages (when reaching 60%)
```

## Workflow Status

### Current Phase Tracking

**Phase Progress**:
```yaml
ACE_Workflow_Progress:
  1_Think:
    Status: ✅ COMPLETED
    Duration: 15 minutes
    Output: "Identified OAuth2 implementation strategy"

  2_Research:
    Status: ✅ COMPLETED
    Duration: 45 minutes
    Output: "research.md with 95% confidence"
    Compaction: "Reduced 8,000 → 800 tokens (90%)"

  3_Plan:
    Status: ✅ COMPLETED
    Duration: 60 minutes
    Output: "plan.md with 10 detailed steps"
    Validation: "All quality gates passed"

  4_Approve:
    Status: ⏸️ PENDING
    Waiting_For: "Human approval of plan"
    Blocked_Since: "5 minutes ago"

  5_Implement:
    Status: ⏳ NOT STARTED
    Estimated_Duration: "3-5 hours"
    Estimated_Context_Peak: "60% (120,000 tokens)"

  6_Verify:
    Status: ⏳ NOT STARTED
    Estimated_Duration: "30 minutes"
```

## Active Artifacts

**Artifact Inventory**:
```yaml
Current_Task_Artifacts:
  Research:
    Path: ".claudedocs/tasks/20250101-oauth/research.md"
    Size: 800 tokens
    Status: "Summarized and active"
    Confidence: "95%"
    Created: "2 hours ago"

  Plan:
    Path: ".claudedocs/tasks/20250101-oauth/plan.md"
    Size: 2,000 tokens
    Status: "Pending approval"
    Completeness: "100% (all sections present)"
    Created: "1 hour ago"

  Progress:
    Path: ".claudedocs/tasks/20250101-oauth/progress.md"
    Status: "Not started (waiting for approval)"

  Archive:
    research-raw.md: 7,500 tokens
    exploration-logs.md: 3,000 tokens
    conversation-backup.md: 5,000 tokens
    Total_Archived: 15,500 tokens
    Total_Saved: 13,500 tokens (after keeping summaries)
```

## Optimization Suggestions

**Smart Recommendations**:
```yaml
Immediate_Actions:
  None:
    Reason: "Context is healthy at 40%"
    Next_Check: "At 55% utilization"

Upcoming_Actions:
  At_55_Utilization:
    Suggestion: "Consider compacting conversation history"
    Estimated_Savings: "3,000 tokens"
    Priority: LOW

  At_60_Utilization:
    Suggestion: "Compact file contents (archive to disk)"
    Estimated_Savings: "8,000 tokens"
    Priority: MEDIUM

  At_70_Utilization:
    Suggestion: "URGENT: Run /ace:compact all"
    Estimated_Savings: "20,000+ tokens"
    Priority: HIGH

Proactive_Optimizations:
  1_Archive_Completed_Steps:
    When: "After each implementation milestone"
    How: "Keep step summary, archive details"
    Savings: "2,000-3,000 tokens per step"

  2_Replace_File_Contents_With_Refs:
    When: "After reviewing file"
    How: "Keep 'file.ts:123' instead of full content"
    Savings: "1,000-5,000 tokens per file"

  3_Conversation_Summarization:
    When: "Every 20 messages"
    How: "Keep last 10 messages + summary of earlier"
    Savings: "5,000-10,000 tokens"
```

## ACE Quality Metrics

**Workflow Health**:
```yaml
Research_Quality:
  Confidence_Score: 95%
  Status: ✅ EXCELLENT
  Criteria:
    - All findings have evidence: ✅
    - Integration points identified: ✅
    - Confidence >80% threshold: ✅
    - External deps researched: ✅

Planning_Quality:
  Completeness: 100%
  Status: ✅ EXCELLENT
  Criteria:
    - All steps specific: ✅
    - File paths included: ✅
    - Risks assessed: ✅
    - Success criteria defined: ✅
    - Rollback plan present: ✅

Context_Efficiency:
  Score: 87%
  Status: ⚠️ GOOD (room for improvement)
  Breakdown:
    - Research compaction: 90% (excellent)
    - File reference strategy: 75% (could improve)
    - Conversation management: 80% (good)
    - Artifact organization: 95% (excellent)

  Improvement_Opportunities:
    - Replace 2 full file contents with path refs: +4%
    - Archive older conversation: +3%
    - Potential Score: 94%

Workflow_Adherence:
  Score: 100%
  Status: ✅ PERFECT
  Criteria:
    - Followed Research → Plan → Approve sequence: ✅
    - Context compacted at phase transitions: ✅
    - Artifacts created properly: ✅
    - Quality gates validated: ✅
```

## Detailed Mode

**Expanded Dashboard** (`--detailed`):
```bash
/ace:dashboard --detailed
```

**Additional Information**:
- Full token breakdown by message
- Complete artifact listing with sizes
- Detailed growth projections
- Historical compaction log
- File-by-file context usage
- Phase-by-phase timing

## Suggestion Mode

**Actionable Recommendations** (`--suggest`):
```bash
/ace:dashboard --suggest
```

**Output**:
```
═══════════════════════════════════════════════════════════
 ACE OPTIMIZATION SUGGESTIONS
═══════════════════════════════════════════════════════════

 💡 IMMEDIATE ACTIONS
 └─ None needed (context healthy at 40%)

 📌 UPCOMING RECOMMENDATIONS

 [PRIORITY: MEDIUM] At 60% context utilization:
 └─ Run: /ace:compact conversation
    Estimated savings: 5,000 tokens
    Reason: Conversation history growing rapidly

 [PRIORITY: HIGH] Before starting implementation:
 └─ Consider: Archive research-raw.md if not needed
    Potential savings: Reference only, save 7,500 tokens
    Reason: Full research not needed during implementation

 [PRIORITY: LOW] After implementation step 3:
 └─ Consider: Compact completed steps 1-3
    Estimated savings: 2,000 tokens per step
    Reason: Keep plan + progress summary only

 ⚡ EFFICIENCY IMPROVEMENTS

 [+4%] File Reference Optimization:
 - Replace full content of packages/auth/src/jwt.ts (2,000 tokens)
   With: "See jwt.ts:45-80 for validateToken implementation"
 - Replace full content of prisma/schema.prisma (1,500 tokens)
   With: "See schema.prisma:15-30 for User model"

 [+3%] Conversation Compaction:
 - Archive messages 1-10 to conversation-history.md
 - Keep summary: "Initial exploration of OAuth options"
 - Save: 3,000 tokens

 Total Potential Improvement: 7% (11,500 tokens)
 New Efficiency Score: 94%

═══════════════════════════════════════════════════════════
```

## Alert Thresholds

**Automatic Alerts**:
```yaml
Warning_Levels:
  60_Percent:
    Alert: "⚠️ Context approaching capacity"
    Suggestion: "Consider running /ace:compact"
    Severity: MEDIUM

  70_Percent:
    Alert: "⚠️⚠️ Context utilization high"
    Suggestion: "Run /ace:compact now"
    Severity: HIGH

  85_Percent:
    Alert: "🚨 CRITICAL: Context nearly full"
    Suggestion: "URGENT: Compact or discard work"
    Severity: CRITICAL

Context_Health_Alerts:
  Research_Confidence_Low:
    Trigger: "Overall confidence <80%"
    Alert: "⚠️ Low research confidence detected"
    Action: "Continue research or proceed with caution"

  Plan_Incomplete:
    Trigger: "Missing required plan sections"
    Alert: "⚠️ Plan quality gates not met"
    Action: "Complete plan before implementation"

  Rapid_Growth:
    Trigger: "Growth rate >5,000 tokens per 10 messages"
    Alert: "⚠️ Context growing rapidly"
    Action: "Check for verbose file reads or logs"
```

## Integration with ACE Commands

**Dashboard Updates Automatically**:
```bash
# After research
/ace:research "topic"
# Dashboard shows: Research phase complete, context +5K

# After compaction
/ace:compact
# Dashboard shows: Context reduced 15K → 5K, efficiency improved

# During implementation
/start-task --ace "feature"
# Dashboard shows: Real-time progress, context tracking
```

**Workflow Integration**:
```bash
# Check before each phase
/workflow 'dashboard → ace:research → dashboard → ace:plan → dashboard'

# Monitor during long tasks
/start-task --ace "complex feature"
# Dashboard updates shown periodically
```

## Flags

```yaml
Display_Options:
  --detailed: "Show expanded metrics and breakdown"
  --suggest: "Show actionable optimization recommendations"
  --compact: "Minimal dashboard (just key metrics)"

Focus:
  --context: "Focus on context metrics only"
  --workflow: "Focus on workflow progress only"
  --artifacts: "Focus on artifact inventory only"

Output:
  --json: "Machine-readable JSON output"
  --export <path>: "Save dashboard to file"
  --watch: "Continuous monitoring mode (updates every 30s)"
```

## Use Cases

### Use Case 1: Pre-Flight Check
```bash
# Before starting complex task
/ace:dashboard

Context: 20% (healthy)
Workflow: Ready
Action: Proceed with confidence
```

### Use Case 2: Mid-Implementation Check
```bash
# During long implementation
/ace:dashboard --suggest

Context: 65% (getting high)
Suggestion: Compact conversation history
Action: Run /ace:compact conversation now
```

### Use Case 3: Post-Compaction Verification
```bash
# After compaction
/ace:compact all
/ace:dashboard

Before: 75% (18K tokens)
After: 35% (7K tokens)
Savings: 53%
Status: ✅ Context optimized
```

---

*ace:dashboard v1.0.0 - Real-time ACE context monitoring and optimization*
