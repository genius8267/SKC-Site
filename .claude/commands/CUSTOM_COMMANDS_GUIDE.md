# Custom Slash Commands - Registration & Usage Guide

**SuperClaude Command System** - Official Claude Code Integration

---

## 📍 Current Location

Your custom commands are located at:
```
/Users/joowonlee/.claude/commands/
```

This is Claude Code's **user-level commands directory**, which means:
- ✅ Commands are available in ALL projects
- ✅ Commands persist across sessions
- ✅ Commands are automatically discovered by Claude Code
- ✅ No additional registration needed

---

## 🆕 New Custom Commands

### 1. `/start-task` - Universal Task Workflow
**Location:** `~/.claude/commands/start-task.md`

**Description:** Universal task workflow with deep thinking, exploration, and approval gates

**Usage:**
```bash
/start-task "add user authentication"
/start-task "implement real-time chat" --ultrathink
/start-task "fix performance issues" --seq --profile
```

**Workflow:** 🧠 THINK → 🔍 EXPLORE → 📋 PLAN → ✅ APPROVE → 💻 CODE

**Features:**
- Adaptive thinking mode (auto-detects complexity)
- MCP-powered exploration (Context7, Sequential, Magic, Puppeteer)
- Evidence-based findings (confidence scoring)
- Validated planning (6 mandatory sections)
- Multi-state approval (iterative refinement)
- Incremental implementation (with checkpoints)
- Comprehensive verification

**Frontmatter:**
```yaml
---
allowed-tools:
  - Read, Write, Edit, MultiEdit
  - Bash, Glob, Grep
  - Task, TodoWrite
  - WebFetch, WebSearch
argument-hint: <task description>
description: Universal task workflow (🧠→🔍→📋→✅→💻)
---
```

### 2. `/workflow` - Command Composition DSL
**Location:** `~/.claude/commands/workflow.md`

**Description:** Chain multiple commands with automatic context flow

**Usage:**
```bash
/workflow 'analyze → improve → test'
/workflow feature-dev --magic
/workflow 'test && deploy || rollback'
/workflow 'test & scan & build' --parallel
```

**Operators:**
- `→` Sequential execution
- `&` Parallel execution
- `&&` Conditional (success)
- `||` Fallback (failure)
- `@checkpoint` Save state
- `@confirm` Manual approval

**Templates:**
- `feature-dev` - Complete feature (2-6h)
- `bug-fix` - Bug resolution (1-4h)
- `deploy-safe` - Production deploy (30-90min)
- `quality-gate` - Quality enforcement (1-3h)
- `research-implement` - Research-driven (3-8h)
- `refactor-safe` - Safe refactoring (2-5h)

**Frontmatter:**
```yaml
---
allowed-tools:
  - Read, Write, Edit
  - Bash, Glob, Grep
  - Task, TodoWrite
  - WebFetch, WebSearch
argument-hint: <workflow-template-or-chain>
description: Chain commands with context flow (→ & && ||)
---
```

---

## 📂 Directory Structure

```
~/.claude/commands/
├── start-task.md                          # 🆕 Universal task workflow
├── workflow.md                            # 🆕 Command composition
├── QUICKSTART.md                          # 🆕 5-minute guide
├── IMPROVEMENTS_SUMMARY.md                # 🆕 Change log
├── CUSTOM_COMMANDS_GUIDE.md              # 🆕 This file
│
├── index.md                              # ✅ Enhanced: Troubleshooting added
├── analyze.md, build.md, test.md...     # ✅ All existing commands
├── deploy.md                             # ✅ Enhanced: Checkpoints + secrets
├── scan.md                               # ✅ Enhanced: Security hardening
├── task.md                               # ✅ Fixed: Broken reference
│
└── shared/                               # Pattern files
    ├── workflow-patterns.yml             # 🆕 Workflow DSL
    ├── command-aliases.yml               # 🆕 Aliases system
    ├── mcp-cache-patterns.yml            # ✅ Enhanced: Fallback chains
    ├── execution-patterns.yml            # ✅ Enhanced: Smart inference
    ├── research-patterns.yml             # ✅ Enhanced: Evidence system
    └── [15+ other pattern files]
```

---

## 🔍 Command Discovery

### How Claude Code Finds Commands

1. **Automatic Discovery**
   - Claude Code scans `~/.claude/commands/` on startup
   - Any `.md` file becomes a slash command
   - Command name = filename (without `.md`)

2. **Naming Convention**
   ```
   start-task.md   → /start-task
   workflow.md     → /workflow
   analyze.md      → /analyze
   ```

3. **Namespacing (Optional)**
   ```
   project/deploy.md   → /project/deploy
   team/review.md      → /team/review
   ```

### List All Commands
```bash
/help                  # Show all available commands
/help start-task      # Show specific command help
/help workflow        # Show workflow command help
```

---

## 📝 Frontmatter Format

All custom commands use YAML frontmatter for configuration:

```yaml
---
allowed-tools:        # Tools this command can use
  - Read
  - Write
  - Edit
  - Bash
  - TodoWrite

argument-hint: <description>    # Help text for arguments

description: Brief description  # Shows in /help

model: default                  # Model to use (optional)

disable-model-invocation: false # Prevent auto-invocation (optional)
---
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `allowed-tools` | Recommended | List of permitted tools |
| `argument-hint` | Recommended | Expected arguments (shows in help) |
| `description` | Recommended | Brief description (shows in /help) |
| `model` | Optional | Specific model (default: current model) |
| `disable-model-invocation` | Optional | Prevent auto-execution (default: false) |

### Example Frontmatter
```yaml
---
allowed-tools:
  - Read
  - Write
  - Bash(git:*)           # Git commands only
  - Bash(npm:*)           # npm commands only
argument-hint: <commit message>
description: Create a git commit with validation
---
```

---

## 🛠️ Creating Your Own Commands

### Step 1: Create Command File
```bash
# Navigate to commands directory
cd ~/.claude/commands/

# Create new command file
touch my-command.md
```

### Step 2: Add Frontmatter
```markdown
---
allowed-tools:
  - Read
  - Write
  - Bash
argument-hint: <your arguments>
description: What your command does
---

# my-command

Your command implementation here...

Use $ARGUMENTS to access command arguments.
Use $1, $2, etc. for positional arguments.
```

### Step 3: Test Command
```bash
# Command is immediately available
/my-command test arguments
```

### Step 4: Iterate
- Modify the `.md` file
- Claude Code reloads automatically
- Test again

---

## 💡 Command Templates

### Simple Task Command
```markdown
---
allowed-tools:
  - Read
  - Bash
argument-hint: <file>
description: Run tests for a file
---

# test-file

Run tests for file: $ARGUMENTS

1. Detect test framework
2. Find test file
3. Run tests
4. Report results
```

### Complex Workflow Command
```markdown
---
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - Task
  - TodoWrite
argument-hint: <feature description>
description: Implement feature with TDD
---

# tdd-feature

Implement feature using TDD: $ARGUMENTS

Workflow:
1. Write failing test
2. Implement minimal code
3. Make test pass
4. Refactor
5. Repeat
```

### Integration Command
```markdown
---
allowed-tools:
  - Bash(git:*)
  - Bash(npm:*)
  - Read
  - Write
argument-hint: <PR number>
description: Review and merge PR
---

# review-pr

Review PR #$1 and merge if approved:

1. Fetch PR
2. Run tests
3. Code review
4. Merge if all pass
```

---

## 🔧 Advanced Features

### 1. Tool Restrictions
```yaml
allowed-tools:
  - Read                    # Allow all Read operations
  - Write                   # Allow all Write operations
  - Bash(git:*)            # Only git commands
  - Bash(npm:*)            # Only npm commands
  - Bash(docker:*)         # Only docker commands
```

### 2. Argument Handling
```markdown
# Access all arguments
$ARGUMENTS

# Access positional arguments
$1    # First argument
$2    # Second argument
$3    # Third argument

# Example:
/my-command file1.ts file2.ts --flag
# $ARGUMENTS = "file1.ts file2.ts --flag"
# $1 = "file1.ts"
# $2 = "file2.ts"
# $3 = "--flag"
```

### 3. File References
```markdown
# Reference files with @
/my-command @src/file.ts

# Claude Code automatically includes file context
```

### 4. Bash Integration
```markdown
# Execute bash commands with !
!/bin/bash -c "npm test"

# Or in command body
Execute: `npm test`
```

### 5. Extended Thinking
```markdown
# Use thinking modes
Let me think deeply about $ARGUMENTS...
[Uses current thinking mode from flags]
```

---

## 🎯 Integration with SuperClaude

### Use with Flags
```bash
# Universal flags work with custom commands
/start-task "add auth" --ultrathink --c7 --seq

# Thinking modes
/start-task "complex task" --think-hard

# MCP servers
/workflow feature-dev --magic --c7

# Personas
/start-task "optimize query" --persona-performance
```

### Use with Workflow DSL
```bash
# Chain custom commands
/workflow 'start-task "feature" → test → deploy'

# Conditional flows
/workflow 'start-task "fix" → test && deploy || rollback'

# Parallel execution
/workflow 'start-task "A" & start-task "B"'
```

### Use with Aliases
```bash
# Define aliases for custom commands
# In ~/.claude/aliases.yml:
quick-start:
  expands_to: "/start-task --think"
  description: "Quick task start"

# Usage:
/quick-start "simple task"
```

---

## 📊 Verification

### Check Command Registration
```bash
# List all commands (should include custom ones)
/help

# Check specific command
/help start-task
/help workflow

# Verify location
ls -la ~/.claude/commands/*.md
```

### Test Commands
```bash
# Test start-task
/start-task "test task description"

# Test workflow
/workflow feature-dev

# Test with flags
/start-task "complex" --ultrathink --seq
```

### Debug Issues
```bash
# Check file format
cat ~/.claude/commands/start-task.md | head -20

# Verify frontmatter syntax
# (YAML must be valid)

# Check logs
cat ~/.claude/logs/*.log | grep -i "command"
```

---

## 🚨 Troubleshooting

### Command Not Found
**Problem:** `/start-task` says "command not found"

**Solutions:**
1. Check file exists: `ls ~/.claude/commands/start-task.md`
2. Verify frontmatter is valid YAML
3. Restart Claude Code
4. Check for typos in filename

### Command Runs But Fails
**Problem:** Command executes but errors out

**Solutions:**
1. Check `allowed-tools` includes all needed tools
2. Verify tool syntax (e.g., `Bash(git:*)` not `Bash(git)`)
3. Test tools individually
4. Check command logic

### Frontmatter Invalid
**Problem:** "Invalid frontmatter" error

**Solutions:**
1. Verify YAML syntax (use YAML validator)
2. Check indentation (use spaces, not tabs)
3. Quote strings with special characters
4. Ensure `---` delimiters are on their own lines

### Tool Not Allowed
**Problem:** "Tool X not allowed" error

**Solutions:**
1. Add tool to `allowed-tools` in frontmatter
2. Use wildcard for bash: `Bash(git:*)`
3. Check tool name spelling

---

## 📚 Resources

### Documentation
- **QUICKSTART.md** - 5-minute getting started guide
- **index.md** - Complete command reference
- **IMPROVEMENTS_SUMMARY.md** - Full change log
- **Individual command .md files** - Detailed docs

### Shared Patterns
- **workflow-patterns.yml** - Workflow DSL specification
- **command-aliases.yml** - Aliases system
- **mcp-cache-patterns.yml** - MCP fallback chains
- **execution-patterns.yml** - Smart flag inference
- **research-patterns.yml** - Evidence-based exploration

### Official Docs
- Claude Code Slash Commands: https://docs.claude.com/en/docs/claude-code/slash-commands

---

## 🎉 Quick Start Checklist

✅ **Custom commands installed:**
- [x] `/start-task` - Universal task workflow
- [x] `/workflow` - Command composition

✅ **Location verified:**
- [x] `~/.claude/commands/start-task.md`
- [x] `~/.claude/commands/workflow.md`

✅ **Frontmatter added:**
- [x] allowed-tools configured
- [x] argument-hint specified
- [x] description provided

✅ **Commands available:**
```bash
/help                    # Lists all commands
/help start-task        # Shows start-task help
/help workflow          # Shows workflow help
```

✅ **Ready to use:**
```bash
/start-task "your task here"
/workflow feature-dev
```

---

**Status: ✅ All custom commands registered and ready to use!**

Your custom commands are now part of Claude Code and will be available in all projects automatically.