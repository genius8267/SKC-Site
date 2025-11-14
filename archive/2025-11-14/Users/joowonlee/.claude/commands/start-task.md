---
allowed-tools:
  - Read
  - Write
  - Edit
  - MultiEdit
  - Bash
  - Glob
  - Grep
  - Task
  - TodoWrite
  - WebFetch
  - WebSearch
argument-hint: <task description>
description: Universal task workflow with deep thinking, exploration, and approval gates (🧠 THINK → 🔍 EXPLORE → 📋 PLAN → ✅ APPROVE → 💻 CODE)
model: default
---

# start-task

**Purpose**: Universal task workflow with deep thinking, exploration, and approval gates

Universal task workflow enforcing: 🧠 THINK → 🔍 EXPLORE → 📋 PLAN → ✅ APPROVE → 💻 CODE

## Usage
```bash
/start-task <task description>
```

@include shared/universal-constants.yml#Universal_Legend

@include shared/flag-inheritance.yml#Universal_Always

Examples:
- `/start-task "add user authentication"` - Simple feature
- `/start-task "implement real-time chat" --ultrathink` - Complex feature
- `/start-task "fix performance issues" --seq --profile` - Performance task
- `/start-task "refactor auth system" --safe` - Refactoring with safety

## Workflow Pattern

```
🧠 THINK DEEPLY
   ↓ (ultrathink + context analysis)
🔍 EXPLORE THOROUGHLY
   ↓ (MCP-powered + evidence-based)
📋 PLAN COMPLETELY
   ↓ (validated + risk-assessed)
✅ APPROVE EXPLICITLY
   ↓ (iterative + versioned)
💻 CODE SAFELY
   ↓ (incremental + validated)
✨ VERIFY & COMPLETE
```

## Phase 1: 🧠 THINK DEEPLY

**Objective:** Deep analysis with adaptive thinking mode

**Auto-Detection:**
```yaml
Task_Complexity_Analysis:
  Simple:
    Indicators: ["fix typo", "update text", "change color"]
    Thinking: "--think (4K tokens)"
    Duration: "5-15min"

  Medium:
    Indicators: ["add feature", "refactor", "optimize"]
    Thinking: "--think-hard (10K tokens)"
    Duration: "30min-2h"

  Complex:
    Indicators: ["implement", "design", "architecture", "migrate"]
    Thinking: "--ultrathink (32K tokens)"
    Duration: "2h+"

  Auto_Upgrade:
    Trigger: "Uncertainty detected during thinking"
    Action: "Escalate to next thinking level"
    Notify: "⚠ Upgrading to --ultrathink due to complexity"
```

**Execution:**
```
1. Initialize TodoWrite:
   - [ ] Think: Deep analysis with adaptive thinking
   - [ ] Explore: Complete codebase understanding
   - [ ] Plan: Validated comprehensive strategy
   - [ ] Approve: Explicit user approval with versioning
   - [ ] Code: Incremental implementation with validation
   - [ ] Verify: Testing and quality checks

2. Analyze task requirements:
   - What is being asked?
   - Why is this needed?
   - What are the constraints?
   - What could go wrong?

3. Detect required MCP servers:
   - External libraries? → --c7 REQUIRED
   - UI components? → --magic RECOMMENDED
   - Complex analysis? → --seq RECOMMENDED
   - Browser testing? → --pup if needed

4. Output thinking summary:
   "Let me think deeply about: <TASK>

   Complexity: <SIMPLE|MEDIUM|COMPLEX>
   Thinking Mode: <--think|--think-hard|--ultrathink>
   MCP Servers: <detected servers>
   Estimated Duration: <range>

   [Deep analysis output...]

   Key Insights:
   - <insight 1>
   - <insight 2>
   - <insight 3>

   Potential Risks:
   - <risk 1>
   - <risk 2>
   "

5. Mark "Think" todo as completed
```

## Phase 2: 🔍 EXPLORE THOROUGHLY

**Objective:** Complete codebase understanding with evidence-based findings

@include shared/research-patterns.yml#Mandatory_Research_Flows

**Smart Exploration Strategy:**
```yaml
Parallel_Exploration:
  Use_Task_Agents_For:
    - Large codebase (>100 files)
    - Multiple related systems
    - Complex dependencies
    - Unknown patterns

  Direct_Tools_For:
    - Small focused area (<10 files)
    - Known file locations
    - Simple searches

  MCP_Integration:
    Context7_Triggers:
      - import/require statements detected
      - External library mentions
      - Framework-specific code
      Action: "Research official documentation"

    Magic_Triggers:
      - UI component keywords detected
      - Frontend file types (*.tsx, *.jsx)
      Action: "Search existing components + patterns"

    Sequential_Triggers:
      - Complex architecture
      - Multiple interconnected systems
      - Performance bottlenecks
      Action: "Step-by-step analysis"
```

**Exploration Checklist:**
```yaml
Must_Explore:
  Existing_Code:
    - [ ] Find all related files
    - [ ] Understand current architecture
    - [ ] Identify existing patterns
    - [ ] Document dependencies

  External_Dependencies:
    - [ ] Research required libraries (via Context7)
    - [ ] Check version compatibility
    - [ ] Review documentation
    - [ ] Verify examples work

  Integration_Points:
    - [ ] Database schema (if applicable)
    - [ ] API contracts (if applicable)
    - [ ] Auth/permissions (if applicable)
    - [ ] Testing infrastructure

  Quality_Standards:
    - [ ] Code style conventions
    - [ ] Testing requirements
    - [ ] Documentation patterns
    - [ ] Performance baselines

Confidence_Scoring:
  Each_Finding:
    - Source: "Where information came from"
    - Confidence: "0-100% score"
    - Evidence: "What supports this"

  Minimum_Threshold:
    Implementation: ">= 90% confidence"
    Warning: "80-89% confidence"
    Block: "< 80% confidence"
```

**Execution:**
```
1. Mark "Explore" todo as in_progress

2. Say: "Now exploring the codebase to gain complete understanding..."

3. Execute exploration (NO CODE WRITING):

   Phase 2a: File Discovery
   - Use Glob to find relevant files
   - Grep for patterns and keywords
   - Build file inventory

   Phase 2b: Code Understanding
   - Read all relevant files
   - Identify patterns and conventions
   - Document architecture
   - Note integration points

   Phase 2c: External Research (if needed)
   - Context7 for library documentation
   - Magic for UI component patterns
   - Sequential for complex analysis
   - WebSearch as fallback

   Phase 2d: Evidence Collection
   - Document all sources
   - Score confidence levels
   - Flag uncertainties
   - Identify gaps

4. Output exploration summary:
   "Exploration Complete ✅

   Files Analyzed: <count>
   External Libraries: <list with confidence scores>
   Architecture Pattern: <pattern name>
   Integration Points: <list>

   Key Findings:
   - <finding 1> [Confidence: 95%] [Source: <file/docs>]
   - <finding 2> [Confidence: 92%] [Source: <file/docs>]
   - <finding 3> [Confidence: 88%] [Source: <file/docs>]

   Uncertainties:
   - <uncertainty 1> [Confidence: 75%] [NEED-INFO: <question>]

   Overall Confidence: <average>%
   "

5. If confidence < 80%:
   Say: "⚠ Low confidence detected. I need clarification on:"
   - List uncertainties
   - Wait for user input
   - Re-explore with new information

6. Mark "Explore" todo as completed
```

**Checkpoint:** Auto-save exploration context to `.claudedocs/tasks/{task-id}/exploration.json`

## Phase 3: 📋 PLAN COMPLETELY

**Objective:** Validated comprehensive strategy with risk assessment

@include shared/quality-patterns.yml#Validation_Sequence

**Plan Requirements:**
```yaml
Mandatory_Sections:
  Implementation_Steps:
    Format: "Numbered list with specific actions"
    Requirement: "Each step actionable and clear"
    Include: "Exact file paths and operations"

  Files_Changed:
    Create: "List of new files with purpose"
    Modify: "List of files to change with reason"
    Delete: "List of files to remove (if any)"

  Dependencies:
    External: "New packages/libraries needed"
    Internal: "Existing code dependencies"
    Version_Constraints: "Compatibility requirements"

  Risk_Assessment:
    Technical_Risks: "What could break?"
    Mitigation_Strategies: "How to prevent?"
    Rollback_Plan: "How to undo changes?"
    Testing_Strategy: "How to verify?"

  Success_Criteria:
    Functional: "Features work as expected"
    Performance: "Meets performance requirements"
    Quality: "Passes all quality gates"
    Security: "No new vulnerabilities"

  Estimated_Effort:
    Optimistic: "Best case scenario"
    Realistic: "Most likely timeline"
    Pessimistic: "Worst case scenario"
    Confidence: "Confidence in estimates"

Quality_Gates:
  Completeness_Check:
    - [ ] All sections present
    - [ ] No placeholder text
    - [ ] Specific file paths
    - [ ] Clear acceptance criteria

  Validation_Rules:
    - Implementation steps are sequential
    - Each step has clear outcome
    - Dependencies are resolvable
    - Risks have mitigations
    - Success criteria are measurable
    - Rollback plan exists
```

**Execution:**
```
1. Generate comprehensive plan following template

2. Validate plan against quality gates

3. Output formatted plan:
   "Based on my exploration, here's my comprehensive plan:

   ## Implementation Steps
   1. <step 1> → Modify: <file>
   2. <step 2> → Create: <file>
   3. <step 3> → Test: <scenario>
   ...

   ## Files Changed
   Create:
   - <file path> - <purpose>

   Modify:
   - <file path> - <changes>

   ## Dependencies
   - <package>@<version> - <reason>

   ## Risk Assessment
   **Technical Risks:**
   - <risk 1>
     - Mitigation: <strategy>
     - Likelihood: <LOW|MEDIUM|HIGH>

   **Rollback Plan:**
   1. <rollback step 1>
   2. <rollback step 2>

   ## Success Criteria
   - [ ] <criterion 1>
   - [ ] <criterion 2>

   ## Estimated Effort
   - Optimistic: <time>
   - Realistic: <time>
   - Pessimistic: <time>
   - Confidence: <percentage>
   "

4. Mark "Plan" todo as completed
```

**Checkpoint:** Auto-save plan to `.claudedocs/tasks/{task-id}/plan-v1.md`

## Phase 4: ✅ APPROVE EXPLICITLY

**Objective:** Iterative approval with versioning and modifications

**Smart Approval Flow:**
```yaml
Approval_States:
  PENDING:
    Action: "Present plan and wait"
    Message: "Do you have questions about this plan? I can clarify or revise."

  CLARIFYING:
    Action: "Answer questions iteratively"
    Message: "Let me clarify that point..."
    Loop: "Continue until no more questions"

  REVISING:
    Action: "Update plan based on feedback"
    Message: "Let me revise the plan with your suggestions..."
    Versioning: "Save as plan-v2.md, plan-v3.md, etc."

  APPROVED:
    Triggers: ["approved", "yes", "proceed", "go ahead", "lgtm", "sounds good"]
    Action: "Move to coding phase"
    Message: "Great! Plan approved. Now implementing..."

  REJECTED:
    Triggers: ["no", "reject", "different approach", "start over"]
    Action: "Return to exploration or thinking"
    Message: "Understood. Let me reconsider the approach..."

  PARTIAL:
    Triggers: ["approve phase 1", "start with X", "do Y first"]
    Action: "Implement approved subset"
    Message: "I'll implement <subset> and pause for approval on remaining phases."

Modification_Patterns:
  Add_Requirement:
    Pattern: "also add X"
    Action: "Extend plan with new requirement"

  Change_Approach:
    Pattern: "use Y instead of X"
    Action: "Revise strategy in plan"

  Split_Phases:
    Pattern: "do X first, then Y"
    Action: "Break into incremental phases"

  Remove_Scope:
    Pattern: "skip X for now"
    Action: "Remove from current plan"
```

**Execution:**
```
1. Mark "Approve" todo as in_progress

2. Present plan and enter approval loop:

   Loop:
     - Wait for user response
     - Detect approval state

     If CLARIFYING:
       - Answer questions with evidence
       - Provide additional context
       - Suggest alternatives if applicable
       - Continue loop

     If REVISING:
       - Update plan based on feedback
       - Increment version (plan-v2.md)
       - Re-validate against quality gates
       - Present revised plan
       - Continue loop

     If PARTIAL:
       - Extract approved subset
       - Create phased implementation plan
       - Get approval for first phase
       - Plan checkpoint after phase
       - Continue loop for remaining phases

     If APPROVED:
       - Break loop
       - Proceed to coding

     If REJECTED:
       - Identify what needs rethinking
       - Return to appropriate phase
       - Restart from there

   End Loop

3. If approved:
   Say: "Great! Plan approved. Now implementing..."
   Mark "Approve" todo as completed

4. If rejected:
   Say: "Understood. Let me <rethink|re-explore|revise>..."
   Reset appropriate todos to pending
```

**Checkpoint:** Save approved plan as `.claudedocs/tasks/{task-id}/plan-approved.md`

## Phase 5: 💻 CODE SAFELY

**Objective:** Incremental implementation with continuous validation

**Incremental Implementation Strategy:**
```yaml
Implementation_Phases:
  Phase_By_Phase:
    For each implementation step:
      1. Announce: "Implementing: <step description>"
      2. Execute: Write/modify code
      3. Validate: Check syntax, types, logic
      4. Checkpoint: Save state
      5. Progress: Update TodoWrite sub-task

  Continuous_Validation:
    After_Each_File:
      - Syntax check (if applicable)
      - Type check (if TypeScript)
      - Lint check (if configured)
      - Import verification

    After_Each_Phase:
      - Run affected tests (if available)
      - Check for breaking changes
      - Verify integration points
      - Update progress

  Quality_Gates_During_Coding:
    Security:
      - No hardcoded secrets
      - Input validation present
      - Error handling included

    Performance:
      - No obvious anti-patterns
      - Efficient algorithms chosen
      - Resource cleanup included

    Maintainability:
      - Clear variable names
      - Adequate comments
      - Follows project patterns

Smart_Tool_Selection:
  Write: "For new files"
  Edit: "For surgical changes to existing files"
  MultiEdit: "For changes across multiple files"
  Bash: "For file operations, testing commands"
```

**Execution:**
```
1. Mark "Code" todo as in_progress

2. Create sub-tasks for each implementation step:
   TodoWrite sub-tasks:
   - [ ] Implement step 1: <description>
   - [ ] Implement step 2: <description>
   - [ ] Implement step 3: <description>
   ...

3. For each step:

   a. Announce:
      "Implementing step <N>: <description>"

   b. Execute code changes:
      - Use appropriate tool (Write/Edit/MultiEdit)
      - Follow approved plan exactly
      - Apply quality standards
      - Include error handling
      - Add comments where needed

   c. Validate:
      - Check syntax/types if possible
      - Verify imports resolve
      - Test locally if commands available

   d. Update progress:
      - Mark sub-task as completed
      - Report any deviations from plan
      - Flag any discovered issues

   e. Checkpoint:
      - Save state after each major step
      - Enable rollback if needed

4. After all steps:
   Mark "Code" todo as completed
   Proceed to verification phase
```

## Phase 6: ✨ VERIFY & COMPLETE

**Objective:** Comprehensive validation before completion

**Verification Checklist:**
```yaml
Automated_Checks:
  - [ ] Run tests: npm test / pytest / cargo test
  - [ ] Type check: tsc --noEmit / mypy
  - [ ] Lint: eslint / ruff / clippy
  - [ ] Security scan: /scan --security --quick
  - [ ] Build: Ensure no errors

Manual_Verification:
  - [ ] Review all changed files
  - [ ] Verify success criteria met
  - [ ] Check no unintended changes
  - [ ] Confirm no secrets committed
  - [ ] Validate error handling

Quality_Report:
  Format: |
    ## Implementation Complete ✅

    Changes Made:
    - <file 1> - <changes>
    - <file 2> - <changes>

    Tests: <PASS|FAIL> (<count> tests)
    Type Check: <PASS|FAIL>
    Lint: <PASS|FAIL>
    Security: <PASS|FAIL>

    Success Criteria:
    - [x] <criterion 1>
    - [x] <criterion 2>

    Next Steps:
    - <recommendation 1>
    - <recommendation 2>
```

**Execution:**
```
1. Mark "Verify" todo as in_progress

2. Run automated checks:
   - Execute tests if available
   - Run type checking if applicable
   - Run linting if configured
   - Quick security scan
   - Attempt build if applicable

3. Generate verification report

4. If all checks pass:
   Say: "Implementation complete ✅"
   Output quality report
   Mark "Verify" todo as completed

5. If checks fail:
   Say: "⚠ Verification found issues:"
   List issues
   Ask: "Should I fix these issues?"
   If yes: Fix and re-verify
   If no: Complete with warnings
```

## Recovery & Interruption Handling

@include shared/recovery-state-patterns.yml#Recovery_Framework

**Auto-Recovery:**
```yaml
Interruption_Detection:
  Incomplete_Task_Check:
    Location: ".claudedocs/tasks/{task-id}/"
    Files_Present:
      - exploration.json
      - plan-v*.md
      - implementation-progress.json

  Recovery_Prompt:
    Message: "I found an incomplete task: '<task description>'. Resume from <phase>?"
    Options:
      - "Resume from <phase>"
      - "Restart from beginning"
      - "Cancel and start new task"

Context_Preservation:
  Save_Points:
    - After thinking phase
    - After exploration phase
    - After each plan version
    - After each code step
    - Before each checkpoint

  Recovery_Data:
    - Task description
    - Current phase
    - Completed steps
    - Exploration findings
    - Plan versions
    - Code changes so far
    - TodoWrite state
```

## Integration with SuperClaude Ecosystem

**Workflow DSL Integration:**
```bash
# start-task can be used in workflows
/workflow 'start-task "add auth" → test → deploy'

# Or as part of larger chains
/analyze → /start-task "refactor based on findings"
```

**Command Aliases:**
```bash
/task "description"           # Shorthand for /start-task
/quick-task "description"     # start-task with --think (faster)
/complex-task "description"   # start-task with --ultrathink (thorough)
```

**MCP Server Synergy:**
```yaml
Auto_MCP_Usage:
  Context7: "Library research during exploration"
  Sequential: "Complex problem decomposition in thinking"
  Magic: "UI component exploration"
  Puppeteer: "Browser testing in verification"

Fallback_Chains:
  Context7_Fails: "→ WebSearch → Local patterns → Manual guidance"
  Sequential_Fails: "→ Native analysis → Structured approach"
  Magic_Fails: "→ Local components → WebSearch patterns"
```

## Escape Hatches & Error Handling

**Escape Patterns:**
```yaml
NEED-INFO:
  Usage: "NEED-INFO│<specific question>"
  Action: "Block progress until answered"
  Example: "NEED-INFO│What authentication method: OAuth2 or JWT?"

CLARIFY:
  Usage: "CLARIFY│<ambiguity>"
  Action: "Request clarification, continue with assumption"
  Example: "CLARIFY│Should this support mobile? Assuming yes."

BLOCKED:
  Usage: "BLOCKED│<blocker>"
  Action: "Cannot proceed, suggest alternatives"
  Example: "BLOCKED│API credentials needed. Suggest: mock implementation?"

REVISE:
  Usage: "REVISE│<what needs revision>"
  Action: "Update plan based on new information"
  Example: "REVISE│Found existing auth system, adapting plan..."

RISK:
  Usage: "RISK│<risk description>"
  Action: "Highlight risk, request approval"
  Example: "RISK│This will break backward compatibility. Proceed?"
```

**Error Recovery:**
```yaml
Common_Failures:
  Exploration_Incomplete:
    Detect: "Confidence score < 80%"
    Action: "Request more information or adjust scope"

  Plan_Rejected_Multiple_Times:
    Detect: "3+ revisions without approval"
    Action: "Offer to restart with different approach"

  Implementation_Fails:
    Detect: "Tests fail or build breaks"
    Action: "Rollback to checkpoint, revise plan"

  Verification_Fails:
    Detect: "Quality gates not met"
    Action: "Fix issues or document known issues"
```

## Examples & Use Cases

### Example 1: Simple Bug Fix
```bash
User: /start-task "fix login button not working"

Claude: Let me think about this task...

Complexity: SIMPLE
Thinking Mode: --think
MCP Servers: None required
Estimated Duration: 15-30min

Analysis: Login button issue could be:
- Event listener not attached
- CSS hiding button
- JavaScript error preventing handler
- Network request failing

Now exploring the codebase...
[Reads login component, checks console errors, examines event handlers]

Exploration Complete ✅
Files Analyzed: 3
- components/Login.tsx [Confidence: 100%]
- styles/login.css [Confidence: 100%]
- utils/auth.ts [Confidence: 95%]

Key Findings:
- Event listener using wrong selector [Confidence: 98%] [Source: Login.tsx:45]
- Button class changed but handler not updated [Confidence: 100%] [Source: git diff]

Overall Confidence: 98%

Here's my plan:

## Implementation Steps
1. Update event listener selector in Login.tsx line 45
2. Change '.login-btn' to '.login-button'
3. Test login flow manually

## Files Changed
Modify:
- components/Login.tsx - Update selector

## Risk Assessment
Technical Risks:
- Other code might use old selector - LOW (grepped codebase, no matches)

Rollback Plan:
1. Git revert if issues found
2. Old selector in git history

## Success Criteria
- [ ] Login button clickable
- [ ] Auth flow completes
- [ ] No console errors

## Estimated Effort
- Optimistic: 5min
- Realistic: 15min
- Pessimistic: 30min
- Confidence: 95%

Do you have questions about this plan?

User: Looks good, go ahead

Claude: Great! Plan approved. Now implementing...

Implementing step 1: Update event listener selector

[Edits Login.tsx line 45]

Implementation Complete ✅

Changes Made:
- components/Login.tsx - Updated selector .login-btn → .login-button

Tests: PASS (manual verification recommended)
Type Check: PASS
Lint: PASS
Security: PASS

Success Criteria:
- [x] Login button clickable
- [x] Auth flow completes
- [x] No console errors

Next Steps:
- Test in staging environment
- Monitor for any related issues
```

### Example 2: Complex Feature
```bash
User: /start-task "implement real-time chat with WebSockets"

Claude: Let me think deeply about this task using ultrathink...

Complexity: COMPLEX
Thinking Mode: --ultrathink
MCP Servers: --c7 (for WebSocket libraries), --seq (for architecture)
Estimated Duration: 4-8 hours

[Deep ultrathink analysis about WebSocket architecture, scalability, libraries, security...]

Key Insights:
- Need both server and client WebSocket implementation
- Consider Socket.IO vs native WebSockets
- Room/channel system for group chats
- Message persistence required
- Authentication over WebSocket connection
- Reconnection handling critical

Potential Risks:
- Scalability at high concurrent users
- Message ordering guarantees
- Connection state management
- Security (XSS, injection via messages)

Now exploring the codebase...
[Uses Context7 to research Socket.IO documentation]
[Uses Sequential to analyze current architecture]
[Reads existing real-time code, database schema, auth system]

Exploration Complete ✅
Files Analyzed: 15
External Libraries:
- socket.io@4.5.4 [Confidence: 100%] [Source: Context7]
- express@4.18.2 (already present)

Key Findings:
- No existing WebSocket infrastructure [Confidence: 100%]
- Express server in server.js [Confidence: 100%]
- User auth uses JWT [Confidence: 100%]
- Messages should persist to MongoDB [Confidence: 95%]
- Frontend uses React with hooks [Confidence: 100%]

Overall Confidence: 98%

Here's my comprehensive plan:

## Implementation Steps
1. Server Setup:
   - Install socket.io (server)
   - Create WebSocket server in server/websocket.js
   - Integrate with existing Express server
   - Add JWT authentication middleware for sockets

2. Database Schema:
   - Create Message model (sender, content, room, timestamp)
   - Create Room model (name, participants, created_at)
   - Add indexes for performance

3. Server Handlers:
   - connection: authenticate & join personal room
   - join_room: join chat room
   - send_message: validate & broadcast message
   - disconnect: cleanup

4. Client Implementation:
   - Install socket.io-client
   - Create SocketContext (React Context)
   - Create useSocket hook
   - Create ChatComponent
   - Handle reconnection & offline messages

5. Features:
   - Real-time message delivery
   - Typing indicators
   - Online/offline status
   - Message persistence
   - Room management

## Files Changed
Create:
- server/websocket.js - WebSocket server setup
- server/models/Message.js - Message schema
- server/models/Room.js - Room schema
- server/middleware/socketAuth.js - Socket authentication
- client/contexts/SocketContext.jsx - Socket React context
- client/hooks/useSocket.js - Socket hook
- client/components/Chat.jsx - Chat UI component

Modify:
- server/server.js - Integrate WebSocket server
- server/routes/api.js - Add REST endpoints for room management
- client/App.jsx - Add SocketProvider

## Dependencies
- socket.io@^4.5.4 - WebSocket server
- socket.io-client@^4.5.4 - WebSocket client

## Risk Assessment
Technical Risks:
1. Scalability at >1000 concurrent connections
   - Mitigation: Implement Redis adapter for horizontal scaling
   - Likelihood: MEDIUM

2. Message ordering in high-traffic rooms
   - Mitigation: Add sequence numbers to messages
   - Likelihood: LOW

3. Security: XSS via malicious messages
   - Mitigation: Sanitize all message content before display
   - Likelihood: HIGH

4. Reconnection storms during network issues
   - Mitigation: Exponential backoff on reconnection
   - Likelihood: MEDIUM

Rollback Plan:
1. Feature flag to disable WebSocket
2. Fall back to polling if WebSocket fails
3. Git revert with tag: pre-websocket
4. Database migration rollback script

## Success Criteria
- [ ] Users can send/receive messages in real-time (<100ms latency)
- [ ] Messages persist to database
- [ ] Reconnection works seamlessly
- [ ] No XSS vulnerabilities
- [ ] Handles 100 concurrent connections
- [ ] Typing indicators work
- [ ] Online status accurate

## Estimated Effort
- Optimistic: 4 hours (if no issues)
- Realistic: 6 hours
- Pessimistic: 10 hours (if unforeseen issues)
- Confidence: 75%

Do you have questions about this plan? I can clarify any aspect.

User: What about scaling? We might have 10k users.

Claude: Excellent question! Let me revise the plan to address scaling to 10k concurrent users:

[REVISED PLAN - v2]

## Additional Implementation Steps (for Scaling)
6. Horizontal Scaling Setup:
   - Add Redis adapter for Socket.IO
   - Configure Redis pub/sub for cross-server messaging
   - Add load balancer support (sticky sessions)

7. Performance Optimizations:
   - Implement message batching (send multiple messages together)
   - Add connection pooling for database
   - Use Redis for presence tracking instead of in-memory
   - Implement message compression

8. Monitoring:
   - Add metrics for connection count, message throughput
   - Alert on connection failures
   - Track message latency

## Updated Dependencies
- socket.io@^4.5.4
- socket.io-client@^4.5.4
- socket.io-redis@^6.1.1 - For horizontal scaling
- ioredis@^5.3.0 - Redis client

## Updated Files
Create:
- server/config/redis.js - Redis connection setup
- server/monitoring/metrics.js - Performance metrics

Modify:
- server/websocket.js - Add Redis adapter

## Updated Risk Assessment
Scalability:
- 10k concurrent connections supported via Redis clustering
- Load balancer with sticky sessions (nginx/AWS ALB)
- Estimated cost: Redis instance ~$50/month at 10k users

Performance:
- <100ms latency target maintained
- Message batching reduces bandwidth by ~30%
- Redis presence reduces DB queries by 90%

## Updated Estimated Effort
- Optimistic: 6 hours
- Realistic: 8 hours
- Pessimistic: 12 hours
- Confidence: 80%

Is this plan approved?

User: Yes, looks great!

Claude: Great! Plan approved. Now implementing...

[Proceeds to implement step by step with continuous progress updates...]

Implementing step 1: Server Setup - Install socket.io
[Runs: npm install socket.io@^4.5.4]

Implementing step 1: Server Setup - Create WebSocket server
[Creates server/websocket.js with full implementation]

[... continues through all steps ...]

Implementation Complete ✅

Changes Made:
- Created 8 new files
- Modified 3 existing files
- Installed 4 new dependencies

Tests: PASS (unit tests for message validation)
Type Check: PASS
Lint: PASS
Security: PASS (XSS sanitization verified)

Success Criteria:
- [x] Users can send/receive messages in real-time
- [x] Messages persist to database
- [x] Reconnection works seamlessly
- [x] No XSS vulnerabilities
- [x] Handles 100 concurrent connections (tested)
- [x] Typing indicators work
- [x] Online status accurate

Next Steps:
- Deploy to staging for load testing with 10k simulated users
- Monitor Redis performance
- Set up alerts for connection failures
- Document WebSocket API for other developers
```

## Command-Specific Flags

```yaml
Task_Type_Flags:
  --simple: "Override detection, use --think mode"
  --complex: "Override detection, use --ultrathink mode"
  --safe: "Extra safety checks, more checkpoints"
  --quick: "Skip some exploration for speed (not recommended)"

ACE_Mode:
  --ace: "Enable Advanced Context Engineering mode (HumanLayer methodology)"
    Features:
      - Structured markdown artifacts (research.md, plan.md, progress.md)
      - Automatic context compaction at phase transitions
      - Context utilization monitoring (40-60% target)
      - Enhanced approval gates with context summary
      - Lessons learned capture on discard
    Usage: "/start-task --ace 'implement feature'"
    Integrates: ace:research, ace:compact, ace:plan, ace:dashboard

Approval_Control:
  --auto-approve: "Skip approval gate (dangerous, not recommended)"
  --incremental: "Approve phase-by-phase instead of all at once"
  --strict: "Require approval for each code file"

Recovery_Flags:
  --resume <task-id>: "Resume interrupted task"
  --checkpoint: "Extra checkpoint after each phase"
  --rollback <checkpoint-id>: "Rollback to previous state"
```

## Integration Patterns

**With Other Commands:**
```bash
# After analysis
/analyze --code src/ → /start-task "refactor based on findings"

# Before deployment
/start-task "add feature" → /test --coverage → /deploy --env staging

# As part of workflow
/workflow 'start-task "auth" → scan --security → deploy'
```

**With ACE Commands:**
```bash
# Full ACE workflow
/start-task --ace "implement OAuth2"
# Automatically: ace:research → ace:compact → ace:plan → approve → implement

# Manual ACE workflow
/ace:research "auth system" → /ace:plan "add OAuth2" → /start-task --ace-implement

# Monitor context during task
/start-task --ace "complex feature"
# Periodically: /ace:dashboard to check context health

# Discard and restart if needed
/ace:discard "architecture too complex"
/start-task --ace "simplified approach"
```

**With Task Management:**
```bash
# Create tracked task
/task:create "Implement chat" → /start-task $TASK_DESCRIPTION

# Resume tracked task
/task:resume chat-task-123 → /start-task --resume chat-task-123
```

## Best Practices

**DO:**
- ✅ Use for any task requiring code changes
- ✅ Let complexity detection choose thinking mode
- ✅ Explore thoroughly before planning
- ✅ Iterate on plan until perfect
- ✅ Implement incrementally with checkpoints
- ✅ Verify all quality gates

**DON'T:**
- ❌ Skip exploration phase
- ❌ Approve plans you don't understand
- ❌ Use --auto-approve except for trivial tasks
- ❌ Write code before approval
- ❌ Skip verification phase
- ❌ Ignore low confidence warnings

## Performance Considerations

**Token Usage:**
```yaml
Typical_Consumption:
  Simple_Task:
    Thinking: "~2K tokens"
    Exploration: "~3K tokens"
    Planning: "~2K tokens"
    Coding: "~5K tokens"
    Total: "~12K tokens"

  Complex_Task:
    Thinking: "~15K tokens (ultrathink)"
    Exploration: "~20K tokens (deep + MCP)"
    Planning: "~10K tokens (comprehensive)"
    Coding: "~30K tokens (incremental)"
    Verification: "~5K tokens"
    Total: "~80K tokens"

Optimization_Tips:
  - Use --simple flag if task truly simple
  - Focused exploration reduces token usage
  - Approve plans quickly to avoid re-planning
  - Use --uc for ultra-compressed output if needed
```

## Troubleshooting

@include shared/universal-constants.yml#Standard_Messages_Templates

**Common Issues:**
```yaml
"Low confidence after exploration":
  Cause: "Insufficient information available"
  Solution: "Use NEED-INFO escape hatch, ask user questions"

"Plan rejected multiple times":
  Cause: "Misunderstanding requirements"
  Solution: "Return to thinking phase, use --ultrathink"

"Verification fails":
  Cause: "Tests break or quality gates fail"
  Solution: "Rollback to checkpoint, revise plan, re-implement"

"Task interrupted":
  Cause: "Session ended before completion"
  Solution: "/start-task --resume <task-id>"
```

---

*start-task v4.0.0 - Production-ready with MCP integration, evidence-based exploration, and comprehensive safety gates*