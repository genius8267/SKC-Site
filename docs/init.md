# Quick Visual Summary

## System Architecture

```
┌────────────────────────────────────────────────────────────┐
│                   YOUR DEVELOPMENT ENVIRONMENT             │
└────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────┐
│  Intune Labs Monorepo (pnpm/Turbo)  │
├─────────────────────────────────────┤
│ - Service templates                 │
│ - SDK templates                     │
│ - Security (CodeQL, Scorecard)      │
│ - Governance (.github/)             │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│    SuperClaude v4.0 Command System   │
├─────────────────────────────────────┤
│ 20 Core Commands + 5 ACE Commands   │
│ 40+ Built-in Aliases                │
│ 27 Shared Pattern Files             │
│ MCP-Powered (Context7, Seq, Magic)  │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  Claude Agent SDK v4.0 (Rebranded)  │
├─────────────────────────────────────┤
│ - TypeScript/JavaScript              │
│ - Python                             │
│ - Breaking changes: 3 (read guide!)  │
└─────────────────────────────────────┘
```

## Configuration Hierarchy

```
PRIORITY (High → Low)

1. PLATFORM SAFETY
   ↓ (System prompt from Anthropic)

2. PROJECT CLAUDE.md
   ↓ (./CLAUDE.md - Monorepo rules)

3. GLOBAL CLAUDE.md
   ↓ (~/.claude/CLAUDE.md - Universal rules + ACE)

4. SESSION CONTEXT
   ↓ (Current conversation)
```

## Command Organization

```
.claude/commands/
├── CORE WORKFLOW (2)
│   ├── /start-task        🎯 Task implementation (THINK→EXPLORE→PLAN→APPROVE→CODE)
│   └── /workflow          🔗 Command composition (sequential, parallel, conditional)
│
├── ANALYSIS (1)
│   └── /analyze           🔍 Unified (--code, --security, --perf, --arch)
│
├── OPERATIONS (8)
│   ├── /build             🏗️ Project building
│   ├── /test              ✅ Testing
│   ├── /deploy            🚀 Deployment
│   ├── /migrate           🔄 Database migrations
│   ├── /cleanup           🧹 Code cleanup
│   ├── /troubleshoot      🔧 Debugging
│   ├── /improve           ✨ Code enhancement
│   └── /git               📝 Git operations
│
├── PLANNING (3)
│   ├── /design            📐 System design
│   ├── /document          📖 Documentation
│   └── /explain           💡 Code explanation
│
├── UTILITIES (4)
│   ├── /load              📂 Context loading
│   ├── /task              ✓ Task management
│   ├── /estimate          📊 Effort estimation
│   └── /dev-setup         🛠️ Environment setup
│
├── ADVANCED (2)
│   └── /spawn             🚀 Multi-agent
│
├── ACE (5)
│   ├── /ace:research      🧠 Structured research
│   ├── /ace:plan          📋 Detailed planning
│   ├── /ace:compact       🗜️ Context optimization
│   ├── /ace:discard       🔄 Clean restart
│   └── /ace:dashboard     📊 Context monitoring
│
└── DOCUMENTATION
    ├── QUICKSTART.md           (5-minute guide)
    ├── CUSTOM_COMMANDS_GUIDE.md (How to create)
    ├── ALL_COMMANDS_SUMMARY.md  (Inventory)
    ├── IMPROVEMENTS_SUMMARY.md  (Changelog)
    └── index.md                 (Decision tree)
```

## Key Numbers

| Metric | Count |
|--------|-------|
| Core Commands | 20 |
| ACE Commands | 5 |
| Built-in Aliases | 40+ |
| Shared Pattern Files | 27 |
| Universal Flags | 20+ |
| MCP Servers | 4 (Context7, Sequential, Magic, Puppeteer) |
| Non-Negotiable Security Rules | 10 |
| Configuration Tiers | 3 |

## Thinking Modes

```
Complexity → Thinking Mode → Tokens → Duration
─────────────────────────────────────────────
Simple      --think        ~4K      5-15min
Medium      --think-hard   ~10K     30min-2h
Complex     --ultrathink   ~32K     2h+
```

## Universal Flags

```
THINKING:  --think, --think-hard, --ultrathink
MCP:       --c7, --seq, --magic, --pup, --no-mcp
OUTPUT:    --uc, --introspect, --plan, --dry-run
QUALITY:   --safe, --strict, --evidence
```

## Common Workflows at a Glance

```
┌──────────────┐
│  NEW FEATURE │
└──────────────┘
   /start-task "add authentication"

┌──────────────┐
│  BUG FIX     │
└──────────────┘
   /troubleshoot "login fails" → /test

┌──────────────┐
│  DEPLOY      │
└──────────────┘
   /ship-it
   (alias for: /workflow deploy-safe)

┌──────────────┐
│  SECURITY    │
└──────────────┘
   /security-audit
   (alias for: /analyze --security --deps --strict)

┌──────────────┐
│  CODE REVIEW │
└──────────────┘
   /deep-review src/
   (alias for: /analyze --code --security --perf --evidence)

┌──────────────┐
│  PERFORMANCE │
└──────────────┘
   /perf-check src/api/
   (alias for: /analyze --perf --profile --seq)
```

## Decision Tree (Ultra-Simplified)

```
What do you want to do?

├─ Implement feature/fix bug?
│  └─ /start-task "description"
│
├─ Analyze code?
│  ├─ Quality → /analyze --code
│  ├─ Security → /analyze --security
│  ├─ Performance → /analyze --perf
│  └─ Architecture → /analyze --arch
│
├─ Run tests?
│  └─ /test (or /test --coverage, /test --e2e)
│
├─ Deploy code?
│  └─ /ship-it
│
├─ Debug issue?
│  └─ /troubleshoot "description"
│
├─ Chain commands?
│  └─ /workflow 'cmd1 → cmd2 → cmd3'
│
└─ Need help?
   └─ /help (or /help [command])
```

## Security First (10 Rules)

```
1. ✓ All inputs untrusted
2. ✓ Never log/commit secrets
3. ✓ Parameterized queries only
4. ✓ Safe APIs (not string concat)
5. ✓ Pin all dependencies
6. ✓ Modern crypto (AES-256-GCM)
7. ✓ Input validation (allowlists)
8. ✓ Web defenses (XSS, CSRF, CORS)
9. ✓ Supply chain verification
10. ✓ Prompt-injection defense

→ EVERY CODE CHANGE MUST FOLLOW ALL 10 RULES
```

## ACE Context Management

```
CONTEXT UTILIZATION

0% ◄──┬──────────────────────────────────────────► 100%
      │
   <40%        40-60%        60-85%        >85%
   Underusing  🟢 OPTIMAL    Acceptable    🔴 URGENT
                             but getting   COMPACTION
                             tight         NEEDED

Strategy: Compact early and often
→ Keep active code in window
→ Archive research to disk
→ Reference by path, not copy-paste
```

## Claude Agent SDK Migration (3 Breaking Changes)

```
BEFORE                          AFTER
─────────────────────          ─────────────────────
@anthropic-ai/claude-code       @anthropic-ai/claude-agent-sdk
claude-code-sdk (Python)        claude-agent-sdk (Python)

Automatic system prompt         Explicit system prompt required
No config needed                Must specify settings sources

Change all three items above!
```

## MCP Fallback Chain (Example: Context7)

```
PRIMARY: Context7 library docs
   ↓ (fails?)
FALLBACK 1: WebSearch official docs
   ↓ (fails?)
FALLBACK 2: Grep project patterns
   ↓ (fails?)
FALLBACK 3: WebSearch GitHub examples
   ↓ (fails?)
FALLBACK 4: Manual guidance

CIRCUIT BREAKER:
• 3 consecutive failures → 5min cooldown
• Auto-recovery after 2 successes
• User always sees fallback method + confidence score
```

## File Locations Quick Ref

```
Monorepo:
  ./CLAUDE.md                    (project rules)
  ./.claude/commands/            (project slash commands)
  ./.claude/commands/shared/     (27 pattern files)

Personal:
  ~/.claude/CLAUDE.md            (global rules)
  ~/.claude/commands/            (personal slash commands)

Priority: Project > Personal > Global
```

## Testing Requirements

```
Every code change needs 2 minimum tests:

❌ WRONG:
  test('login works', () => {
    expect(login('user', 'pass')).toBeTruthy()
  })

✅ RIGHT:
  test('login succeeds with valid creds', () => {
    expect(login('user', 'pass')).toBe(true)
  })

  test('login fails gracefully with invalid creds', () => {
    const result = login('user', 'wrong')
    expect(result.error).toMatch(/Invalid/)
  })
```

## Getting Started

```
1. TYPE THIS:
   /help

2. TRY THIS:
   /start-task "implement user profile"

3. OR USE TEMPLATE:
   /workflow feature-dev --magic

4. OR QUICK FIX:
   /quick-fix "button not clickable"

5. LEARN MORE:
   .claude/commands/index.md (decision tree)
   .claude/commands/QUICKSTART.md (5min guide)
```

## Emergency Commands

```
WHEN STUCK:
/help                   → General help
/help analyze          → Help with analyze command
/ace:dashboard         → Check context utilization
/workflow resume       → Resume interrupted workflow

WHEN DEBUGGING:
/troubleshoot "issue description"
→ Root cause analysis + recommendations

WHEN SECURITY CONCERNED:
/analyze --security
→ OWASP Top 10 + secrets + CVE checks
```

---

**Print this as a 1-pager and keep on your desk!**

Key insight: Commands are auto-discovered. Type `/` and pick one. That's it.
