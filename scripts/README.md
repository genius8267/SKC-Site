# Scripts

Automation scripts and deployment tools.

## Structure

- `azure/` - Azure deployment and management scripts
  - `deploy-n8n-azure.sh` - Deploy n8n to Azure
  - `deploy-website-azure.sh` - Deploy website to Azure
  - `cleanup-n8n-azure.sh` - Clean up Azure resources
  - `setup-custom-domain.sh` - Configure custom domain

## Usage

All scripts should be executable and include:
- Clear comments explaining purpose
- Error handling
- Usage instructions at the top
- No hardcoded secrets (use environment variables)

Run from repository root:
```bash
./scripts/azure/deploy-n8n-azure.sh
```
