# Archive

Retired files and old versions per the archive policy defined in AGENTS.md.

## Policy

Files are archived rather than deleted to preserve history and enable recovery if needed.

## Structure

Archives are organized by date: `YYYY-MM-DD/`

Each archive preserves the original directory structure where possible.

## Contents

- `2025-11-14/` - Initial codebase reorganization
  - Duplicate files (AGENTS 2.md, CLAUDE 2.md, deploy-n8n-azure 2.sh)
  - Old backup (intune-labs-codebase-20251001/)
  - Misplaced directories (Users/, Codebase/)
  - AI_Champion-Intune-Care (embedded git repository)
  - Miscellaneous (gents.html)

## Recovery

To restore archived files:
```bash
git show HEAD:archive/YYYY-MM-DD/path/to/file
```
