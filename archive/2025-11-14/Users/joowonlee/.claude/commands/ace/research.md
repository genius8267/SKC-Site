---
allowed-tools:
  - Read
  - Glob
  - Grep
  - Task
  - Write
  - TodoWrite
  - WebFetch
  - WebSearch
argument-hint: <what-to-research>
description: Structured research phase following ACE methodology - deep exploration with markdown output
model: default
---

# ace:research

**Purpose**: Conduct structured research following Advanced Context Engineering principles

Systematically explore codebase, gather evidence, document findings in structured markdown.

## Usage
```bash
/ace:research <topic-or-task>
/ace:research "authentication system"
/ace:research "how webhooks are processed" --deep
```

@include shared/ace-patterns.yml#ACE_Core_Principles

## Research Workflow

### Phase 1: Initialize Research

1. **Create Research Artifact**
   - Location: `.claudedocs/research/{timestamp}-{slug}/research.md`
   - Template: Use Research_Template from ace-patterns.yml
   - Purpose: Persistent, referenceable research document

2. **Set Research Scope**
   - What: Specific topic or system to understand
   - Why: Purpose of this research
   - Depth: Surface-level vs deep-dive
   - Constraints: Time, files, areas to focus

3. **Initialize TodoWrite**
   ```
   - [ ] Research Phase: Define scope
   - [ ] Research Phase: File discovery
   - [ ] Research Phase: Code understanding
   - [ ] Research Phase: External research (if needed)
   - [ ] Research Phase: Synthesize findings
   - [ ] Research Phase: Create summary
   ```

### Phase 2: File Discovery

**Objective**: Identify all relevant files WITHOUT reading full contents yet

**Techniques**:
- Use `Glob` to find files by pattern
- Use `Grep -l` (files_with_matches) to find files containing keywords
- Build initial file inventory with purpose annotations

**Output**: List of files with relevance scores

**Example**:
```bash
# Find authentication-related files
Glob: "**/*auth*"
Grep: "authentication|jwt|token" (files only)

Result:
- packages/auth/src/jwt.ts [Relevance: HIGH - JWT implementation]
- packages/auth/src/middleware.ts [Relevance: HIGH - Auth middleware]
- services/api/src/routes/auth.ts [Relevance: MEDIUM - Auth routes]
```

### Phase 3: Strategic Reading

**Objective**: Read files strategically to build understanding efficiently

@include shared/ace-patterns.yml#Context_Window_Management.Optimization_Techniques

**Reading Strategy**:

1. **Read core files first** (main entry points, index files)
2. **Skim large files** (read first 100 lines to understand structure)
3. **Deep-dive selectively** (read full content only when necessary)
4. **Use Grep context** (`-A` `-B` `-C`) to read around key lines

**Evidence Collection**:
- Every finding must cite source: `file.ts:123`
- Assign confidence score: 0-100%
- Note what supports the finding

### Phase 4: External Research (Optional)

**When to use**:
- External libraries need documentation
- Framework-specific patterns unclear
- API contracts need verification

**Tools**:
- `WebFetch` for official documentation
- `WebSearch` for examples and patterns
- Task agent for deep library research

**Integration**:
- Reference external sources in research.md
- Cite with URLs and access dates
- Note version compatibility

### Phase 5: Synthesize Findings

**Objective**: Transform raw exploration into structured knowledge

@include shared/ace-patterns.yml#Context_Compaction_Strategies.Structured_Summarization

**Synthesis Process**:

1. **Group findings by theme**
   - Architecture patterns
   - Integration points
   - Dependencies
   - Conventions

2. **Extract key insights**
   - Replace verbose logs with bullet points
   - Convert examples to patterns
   - Summarize long content

3. **Identify unknowns**
   - What questions remain?
   - What needs clarification?
   - What requires deeper research?

4. **Score confidence**
   - Overall confidence: weighted average
   - Flag low-confidence (<80%) items
   - Plan how to resolve uncertainties

### Phase 6: Create Summary

**Objective**: Produce 3-5 bullet point summary suitable for next phase

@include shared/ace-patterns.yml#ACE_Quality_Gates.Research_Phase_Complete

**Summary Requirements**:
- Can you explain the system in <5 bullet points?
- Is summary sufficient for planning WITHOUT re-reading research?
- Are all critical integration points identified?

**Example Summary**:
```markdown
## Summary (for Planning Phase)

1. **Auth System**: JWT-based in `packages/auth`, using `jsonwebtoken@9.0.0`
   - Middleware: `packages/auth/src/middleware.ts:validateToken()`
   - Secret: `process.env.JWT_SECRET` (required)

2. **Database**: PostgreSQL via Prisma in `packages/database`
   - User model: `prisma/schema.prisma:User`
   - Auth fields: `email`, `passwordHash`, `refreshToken`

3. **API Structure**: Express in `services/api`
   - Auth routes: `src/routes/auth.ts` (login, register, refresh)
   - Protected routes use `authenticateMiddleware`

4. **Testing**: Vitest in `packages/auth/__tests__/`
   - Pattern: `*.test.ts` with fixtures in `__fixtures__/`
   - JWT mocks: `__mocks__/jsonwebtoken.ts`

5. **Integration Points**:
   - Frontend: calls `/api/auth/login` with `{email, password}`
   - Sessions: refresh tokens stored in DB, access tokens in memory
```

## Output Format

**Research Document** (`.claudedocs/research/{timestamp}-{slug}/research.md`):

```markdown
# Research: {topic}

**Started**: {timestamp}
**Completed**: {timestamp}
**Context Tokens Used**: ~{estimate}

## Scope
- **What**: {specific topic}
- **Why**: {research purpose}
- **Depth**: {surface | moderate | deep}

## Files Analyzed

### High Relevance
- path/to/file1.ts [Lines read: 1-100, 250-300]
  - Purpose: Main authentication logic
  - Key exports: `validateToken`, `generateToken`
  - Dependencies: jsonwebtoken, bcrypt

### Medium Relevance
- path/to/file2.ts
  - Purpose: Auth middleware
  - Integrates with: Express app

## Key Findings

### 1. Authentication Architecture [Confidence: 95%]
**Evidence**: packages/auth/src/jwt.ts:45-80
**Finding**: System uses JWT with 15min access tokens + 7-day refresh tokens
**Implications**: Short-lived access tokens minimize security risk

### 2. Database Schema [Confidence: 100%]
**Evidence**: packages/database/prisma/schema.prisma:10-25
**Finding**: User table has email, passwordHash, refreshToken columns
**Implications**: Standard auth schema, supports refresh token rotation

[... more findings ...]

## Integration Points
- **Database**: PostgreSQL via Prisma (`packages/database`)
- **API Gateway**: Express routes in `services/api/src/routes/`
- **Frontend**: React app calls `/api/auth/*` endpoints
- **Environment**: Requires `JWT_SECRET`, `DATABASE_URL`

## Patterns Identified
- All handlers follow: `validate input → business logic → response`
- Error handling: try/catch with structured error responses
- Testing: Vitest with request/response mocks

## Questions / Unknowns
- [ ] How are refresh tokens rotated? (Need to read `refreshToken.ts`)
- [ ] What happens on password reset? (No reset logic found)
- [ ] Rate limiting on auth endpoints? (Not found)

## External Dependencies
- `jsonwebtoken@9.0.0` - JWT creation/validation
- `bcrypt@5.1.0` - Password hashing
- `zod@3.22.0` - Input validation schemas

## Summary (for Planning Phase)

1. JWT-based auth in `packages/auth` with 15min/7day token strategy
2. PostgreSQL user table via Prisma with standard auth columns
3. Express API routes in `services/api/src/routes/auth.ts`
4. Vitest testing with mocks in `__tests__/` directories
5. Missing: password reset, rate limiting, refresh token rotation

## Context Compaction

**Original exploration**: ~8,000 tokens (file reads, logs, experiments)
**After summarization**: ~1,200 tokens (this document)
**Savings**: 85% reduction while preserving all critical information
```

## Context Management

@include shared/ace-patterns.yml#Context_Compaction_Strategies.Progressive_Archival

**During Research**:
- Keep: Current file being analyzed + running notes
- Archive: Previously analyzed files (reference by path:line)

**After Research**:
- Keep: research.md summary (1-2K tokens)
- Archive: Detailed exploration logs to `research-raw.md`
- Reference: Use file paths, not content

## Integration with ACE Workflow

**Standalone Usage**:
```bash
/ace:research "webhook processing system"
# Creates: .claudedocs/research/{timestamp}-webhook-processing/research.md
```

**Within /start-task --ace**:
```bash
/start-task --ace "implement webhook retry logic"
# Automatically runs ace:research as first phase
# Research output feeds into planning phase
```

**Chained with Planning**:
```bash
/workflow 'ace:research "auth" → ace:plan "add OAuth2"'
# Research findings available to planning phase
# Automatic context compaction between phases
```

## Best Practices

**DO**:
- ✅ Start with file discovery before deep reading
- ✅ Cite every finding with file:line evidence
- ✅ Score confidence on all findings
- ✅ Create structured markdown artifact
- ✅ Summarize for next phase
- ✅ Archive verbose logs

**DON'T**:
- ❌ Read entire large files unnecessarily
- ❌ Keep verbose exploration in active context
- ❌ Make claims without evidence
- ❌ Skip confidence scoring
- ❌ Proceed with <80% confidence on critical items

## Flags

```yaml
Research_Modes:
  --surface: "Quick overview, minimal file reading"
  --moderate: "Standard depth (default)"
  --deep: "Exhaustive research, read all related files"

  --no-external: "Skip external documentation research"
  --files-only: "List files without reading contents"
  --fast: "Optimize for speed over completeness"

Output_Control:
  --output <path>: "Custom output location for research.md"
  --append: "Append to existing research doc"
  --format <json|md>: "Output format (default: md)"
```

## Examples

### Example 1: Quick Research
```bash
User: /ace:research "how are errors handled" --surface

Claude:
Initializing research: error handling patterns

Phase 1: File Discovery
Found 15 files matching pattern:
- packages/*/src/errors.ts
- services/*/src/middleware/errorHandler.ts

Phase 2: Strategic Reading
Reading core files only (surface mode)...

Key Findings:
1. Centralized error handler in packages/errors/src/ErrorHandler.ts
2. Express middleware in services/api/src/middleware/errorHandler.ts
3. Custom error classes extend base Error
4. All errors include: code, message, statusCode

Research complete ✅
Saved to: .claudedocs/research/20250101-error-handling/research.md

Summary:
- Custom error classes with structured format
- Express middleware catches and formats errors
- HTTP status codes mapped from error codes
- Logging includes stack traces in development only
```

### Example 2: Deep Research
```bash
User: /ace:research "authentication flow end-to-end" --deep

Claude:
Initializing deep research: authentication flow

Phase 1: File Discovery (comprehensive)
Found 42 files across:
- packages/auth/src/**
- services/api/src/routes/auth.ts
- apps/web/src/hooks/useAuth.ts
- packages/database/prisma/schema.prisma

Phase 2: Deep Reading
[Reads all auth-related files with full content]
[Traces request flow from frontend → API → database]

Phase 3: External Research
[Fetches JWT documentation for token validation best practices]

Phase 4: Synthesis
[Creates comprehensive flow diagram in markdown]
[Documents every integration point]

Phase 5: Summary
[Produces detailed summary suitable for complex planning]

Research complete ✅
Tokens used: ~12,000 (exploration)
Compacted to: ~2,000 (research.md)
Savings: 83%

Summary available for planning phase.
```

---

*ace:research v1.0.0 - Structured research following HumanLayer ACE methodology*
