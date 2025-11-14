---
allowed-tools:
  - Read
  - Write
  - TodoWrite
argument-hint: <task-description>
description: ACE-aware planning phase - create detailed implementation plan with context optimization
---

# ace:plan

**Purpose**: Create detailed implementation plan following ACE methodology

Transform research findings into executable implementation plan with context awareness.

## Usage
```bash
/ace:plan <task-description>
/ace:plan "add OAuth2 authentication"
/ace:plan --from-research .claudedocs/research/20250101-auth/
```

@include shared/ace-patterns.yml#ACE_Core_Principles.High_Leverage_Human_Review

## Planning Philosophy

> **HumanLayer ACE Principle**: "A bad line of a plan could lead to hundreds of bad lines of code"
> Planning is the MOST CRITICAL phase. Focus human review here.

**Goal**: Create plan so detailed that implementation becomes mechanical execution
**Context**: Load research summary (not full research) to maintain optimal context
**Output**: Structured markdown plan ready for approval and implementation

## Planning Workflow

### Phase 1: Load Research Context

**Context-Aware Loading**:
```yaml
Load_Strategy:
  High_Priority:
    - Research summary (not full research)
    - Key findings with evidence
    - Integration points
    - Identified patterns

  Skip_Loading:
    - Verbose exploration logs
    - Full file contents (load on-demand)
    - Detailed examples (reference by path:line)

  On_Demand:
    - Specific files referenced in plan
    - Edge cases identified during planning
```

**If no research available**:
- Run quick research phase first
- Or proceed with assumptions (document them)
- Flag areas needing more research

### Phase 2: Define Success Criteria

**Clear, Measurable Criteria**:
```markdown
Success_Criteria_Template:
  Functional:
    - [ ] Feature X works as specified
    - [ ] User can complete flow Y
    - [ ] API endpoint Z returns correct data

  Performance:
    - [ ] Response time < N ms
    - [ ] Handles M concurrent requests
    - [ ] Database queries optimized

  Quality:
    - [ ] Tests passing (unit + integration)
    - [ ] No linting errors
    - [ ] Type checking passes
    - [ ] Code coverage >X%

  Security:
    - [ ] Input validation on all endpoints
    - [ ] No secrets in code
    - [ ] Auth/authz implemented correctly
    - [ ] No new security scan alerts
```

### Phase 3: Break Down Implementation

@include shared/ace-patterns.yml#ACE_Quality_Gates.Planning_Phase_Complete

**Decomposition Principles**:

1. **Steps must be sequential and atomic**
   - Each step has clear input/output
   - Steps can be executed independently
   - Order matters (dependencies explicit)

2. **Each step specifies exact locations**
   - File path with line numbers
   - Function/class to modify
   - What to add/change/remove

3. **Steps include validation**
   - How to verify step completed
   - What to test after step
   - Expected behavior

**Example Step**:
```markdown
## Step 3: Add OAuth Strategy Configuration

**File**: `packages/auth/src/oauth/strategy.ts` (create new)

**Action**: Create Passport OAuth2 strategy configuration

**Details**:
- Import: `passport`, `passport-google-oauth20`
- Export: `googleStrategy` function
- Configuration:
  - Client ID: `process.env.GOOGLE_CLIENT_ID`
  - Client secret: `process.env.GOOGLE_CLIENT_SECRET`
  - Callback URL: `/api/auth/google/callback`
- Callback function:
  - Find or create user by Google ID
  - Update user profile with Google data
  - Return user object

**Dependencies**:
- Step 1 must be complete (schema updated)
- Requires: `passport@0.6.0`, `passport-google-oauth20@2.0.0`

**Validation**:
- File compiles without errors
- Strategy can be imported in tests
- Mock OAuth flow passes unit test

**Estimated Time**: 20-30 minutes
```

### Phase 4: Identify Risks and Mitigations

**Risk Assessment Template**:
```yaml
Technical_Risks:
  Risk_1:
    Description: "What could go wrong"
    Impact: LOW | MEDIUM | HIGH | CRITICAL
    Likelihood: LOW | MEDIUM | HIGH
    Mitigation: "How to prevent or handle"
    Contingency: "Backup plan if it happens"

  Example:
    Description: "OAuth callback fails due to redirect URI mismatch"
    Impact: HIGH (blocks entire flow)
    Likelihood: MEDIUM (common configuration issue)
    Mitigation: "Validate redirect URIs in Google Console match code"
    Contingency: "Add logging to capture actual vs expected URIs"
```

### Phase 5: Plan Context Management

**Context Growth Prediction**:
```yaml
Context_Planning:
  Current_Context: X tokens (research summary + conversation)

  Estimated_Growth:
    Step_1_to_3: +2000 tokens (file reads + edits)
    Step_4_to_6: +3000 tokens (more complex logic)
    Step_7_to_10: +2000 tokens (testing)

  Compaction_Points:
    - After Step 3: Archive research, keep plan only
    - After Step 6: Archive steps 1-3 details, keep summary
    - After Step 10: Archive all intermediate, keep final state

  Target_Utilization:
    - Start: 30% (research summary + plan)
    - Peak: 60% (mid-implementation)
    - End: 40% (final code + tests)
```

### Phase 6: Create Rollback Plan

**Rollback Strategy**:
```markdown
Rollback_Plan:
  Git_Strategy:
    - Tag before starting: `pre-oauth-implementation`
    - Commit after each major step
    - Can revert individual commits if needed

  Database:
    - Migration rollback script: `down.sql`
    - Backup before schema changes
    - Data migration reversible

  Configuration:
    - Keep old env vars during transition
    - Feature flag to disable new code
    - Gradual rollout plan

  Dependencies:
    - Document added packages
    - Removal script if rollback needed
    - Version lockfile committed
```

## Plan Output Format

**Comprehensive Plan Document** (`.claudedocs/tasks/{task-id}/plan.md`):

```markdown
# Plan: {task-name}

**Based on**: .claudedocs/research/{timestamp}-{slug}/research.md
**Created**: {timestamp}
**Status**: PENDING APPROVAL
**Estimated Context**: 2000 tokens (plan) + 8000 tokens (implementation) = 10000 total

## Executive Summary

{One paragraph describing what will be implemented and why}

## Success Criteria

### Functional Requirements
- [ ] Criterion 1
- [ ] Criterion 2

### Non-Functional Requirements
- [ ] Performance: ...
- [ ] Security: ...
- [ ] Quality: ...

## Implementation Steps

### Phase 1: Database Schema (Steps 1-2)

#### Step 1: Add OAuth Fields to User Model
**File**: `packages/database/prisma/schema.prisma:15`

**Current**:
```prisma
model User {
  id           String   @id @default(cuid())
  email        String   @unique
  passwordHash String?
}
```

**Change to**:
```prisma
model User {
  id           String   @id @default(cuid())
  email        String   @unique
  passwordHash String?  // Optional now (OAuth users may not have password)

  // OAuth fields
  oauthProvider String?  // "google" | "github" | null
  oauthId       String?  // Provider's user ID
  oauthProfile  Json?    // Full profile data from provider

  @@unique([oauthProvider, oauthId])
}
```

**Validation**:
- Run: `pnpm --filter @repo/database prisma format`
- Run: `pnpm --filter @repo/database prisma validate`
- Generate migration: `pnpm db:migrate dev --name add-oauth-fields`

**Estimated Time**: 10 minutes

---

#### Step 2: Run Migration

**Command**: `pnpm db:migrate deploy`

**Validation**:
- Check database schema updated
- Verify unique constraint exists
- Test query: `SELECT * FROM "User" LIMIT 1;`

**Rollback**: `pnpm db:migrate down`

**Estimated Time**: 5 minutes

---

### Phase 2: OAuth Strategy (Steps 3-4)

[... detailed steps continue ...]

## Files Changed

### Create
- `packages/auth/src/oauth/strategy.ts` - Passport OAuth strategies
- `packages/auth/src/oauth/google.ts` - Google-specific logic
- `packages/auth/src/oauth/github.ts` - GitHub-specific logic
- `packages/auth/src/oauth/types.ts` - OAuth type definitions
- `services/api/src/routes/oauth.ts` - OAuth callback routes
- `packages/auth/__tests__/oauth.test.ts` - OAuth tests

### Modify
- `packages/database/prisma/schema.prisma:15` - Add OAuth fields
- `packages/auth/src/index.ts:1` - Export OAuth functions
- `services/api/src/index.ts:25` - Register OAuth routes
- `.env.example:10` - Add OAuth env var documentation

### Delete
- None

## Dependencies

### New Packages
```json
{
  "passport": "^0.6.0",
  "passport-google-oauth20": "^2.0.0",
  "passport-github2": "^0.1.12"
}
```

**Installation**:
```bash
pnpm --filter @repo/auth add passport@^0.6.0 passport-google-oauth20@^2.0.0 passport-github2@^0.1.12
```

### Environment Variables Required
```bash
# Google OAuth
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx

# GitHub OAuth
GITHUB_CLIENT_ID=xxx
GITHUB_CLIENT_SECRET=xxx

# OAuth callback base URL
OAUTH_CALLBACK_BASE=http://localhost:3000
```

## Risk Assessment

### Technical Risks

#### 1. OAuth Callback Redirect URI Mismatch
- **Impact**: HIGH (blocks entire OAuth flow)
- **Likelihood**: MEDIUM
- **Mitigation**: Validate URIs in provider console match code exactly
- **Contingency**: Add detailed logging of expected vs actual redirect URI

#### 2. User Account Linking Conflicts
- **Impact**: MEDIUM (user confusion if email conflicts)
- **Likelihood**: MEDIUM
- **Mitigation**: Check if email already exists before creating OAuth user
- **Contingency**: Provide "link accounts" UI flow

[... more risks ...]

## Testing Strategy

### Unit Tests
- OAuth strategy configuration
- User lookup/creation logic
- Token generation for OAuth users

**Command**: `pnpm --filter @repo/auth test`

### Integration Tests
- Full OAuth flow with mock provider
- Callback handling
- Error cases (invalid state, expired token)

**Command**: `pnpm test:integration`

### Manual Testing
1. Register OAuth app with Google
2. Test login flow in browser
3. Verify user created in database
4. Test subsequent logins (returning user)
5. Test error handling (cancel flow, invalid credentials)

## Rollback Plan

### If Critical Issues Found

**Step 1**: Feature flag disable
```typescript
if (!process.env.ENABLE_OAUTH) {
  // Skip OAuth routes
}
```

**Step 2**: Database rollback
```bash
pnpm db:migrate down
```

**Step 3**: Git revert
```bash
git revert {commit-range}
# Or: git reset --hard pre-oauth-implementation
```

**Step 4**: Remove dependencies
```bash
pnpm --filter @repo/auth remove passport passport-google-oauth20 passport-github2
```

## Context Management Plan

### Initial Context (Planning Phase)
- Research summary: 800 tokens
- This plan: 2000 tokens
- Conversation: 1000 tokens
- **Total**: 3800 tokens (19% utilization)

### Implementation Context (Steps 1-5)
- This plan: 2000 tokens (reference)
- Current step details: 1000 tokens
- Files being edited: 2000 tokens
- Progress tracking: 500 tokens
- **Total**: 5500 tokens (28% utilization)

### Mid-Implementation Compaction (After Step 5)
- Archive: Completed steps 1-5 details
- Keep: Plan overview + steps 6-10 + progress summary
- **Savings**: ~2000 tokens

### Final Context (Verification)
- Plan summary: 500 tokens
- Completed code: 2000 tokens
- Test results: 1000 tokens
- **Total**: 3500 tokens (18% utilization)

## Estimated Effort

- **Optimistic**: 3 hours (if no blockers)
- **Realistic**: 5 hours (with testing and debugging)
- **Pessimistic**: 8 hours (if OAuth provider issues)
- **Confidence**: 75%

**Breakdown**:
- Database: 30 min
- OAuth strategies: 90 min
- Routes & integration: 90 min
- Testing: 60 min
- Documentation: 30 min
- Buffer: 90 min

## Approval Checklist

Before proceeding to implementation, verify:

- [ ] All steps are specific and actionable
- [ ] File paths and line numbers provided
- [ ] Dependencies identified and installable
- [ ] Risks assessed with mitigations
- [ ] Success criteria clear and measurable
- [ ] Rollback plan complete
- [ ] Context management planned
- [ ] Effort estimate reasonable

## Human Review Points

**Critical decisions needing approval**:
1. OAuth providers: Google + GitHub (not Facebook/Twitter)
2. Account linking: email-based (not separate accounts)
3. Password optional: OAuth users may not have password
4. Token storage: refresh tokens in database (not cookies)

**Questions for human**:
- Should we support account linking UI flow?
- What happens if OAuth user email changes?
- Do we need admin panel for OAuth management?

---

**Plan Status**: ⏸️ PENDING APPROVAL

Run `/ace:implement` to start implementation after approval.
```

## Context Optimization During Planning

@include shared/ace-patterns.yml#Context_Window_Management

**Smart Planning Techniques**:

1. **Load research summary, not full research**
   - Read `.claudedocs/research/{id}/research.md` (summary section only)
   - Skip verbose exploration logs
   - Load specific files on-demand if needed

2. **Plan incrementally with checkpoints**
   - Write plan section by section
   - Save to disk frequently
   - Refer to saved plan, not keep in memory

3. **Reference by path:line, not content**
   - "See packages/auth/src/jwt.ts:45 for current implementation"
   - Don't paste entire file contents into plan

4. **Use templates and patterns**
   - Reference existing patterns: "Follow same structure as auth.ts"
   - Template code: "Use template in templates/handler-template.ts"

## Integration with ACE Workflow

**Standalone Usage**:
```bash
/ace:plan "implement webhook retry logic"
# Creates: .claudedocs/tasks/{id}/plan.md
# Prompts for approval before proceeding
```

**After Research**:
```bash
/ace:research "webhook system" → /ace:plan "add retry logic"
# Plan has access to research summary
# Research automatically compacted
```

**Within /start-task --ace**:
```bash
/start-task --ace "implement webhooks"
# Research phase → auto compact → Planning phase → approval gate
```

## Flags

```yaml
Planning_Options:
  --from-research <path>: "Load research from specific path"
  --detailed: "Extra detailed plan (more steps, more validation)"
  --rapid: "Quick plan for simple tasks (fewer steps)"

Approval_Control:
  --auto-approve: "Skip approval, proceed to implementation"
  --iterative: "Approve section by section, not all at once"

Output:
  --output <path>: "Custom output location"
  --format <md|json>: "Output format"
  --preview: "Show plan without saving"
```

## Best Practices

**DO**:
- ✅ Make plan detailed enough to implement mechanically
- ✅ Include exact file paths and line numbers
- ✅ Specify validation for each step
- ✅ Plan context compaction points
- ✅ Get human approval before implementation
- ✅ Reference research, don't duplicate it

**DON'T**:
- ❌ Vague steps like "implement authentication"
- ❌ Skip risk assessment
- ❌ Forget rollback plan
- ❌ Load full research into planning context
- ❌ Start implementation without approval
- ❌ Underestimate context growth

---

*ace:plan v1.0.0 - ACE-aware planning with context optimization*
