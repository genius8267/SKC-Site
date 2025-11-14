# n8n Azure Deployment Guide

Complete automation for deploying n8n to Azure Container Instances with PostgreSQL.

---

## 🚀 Quick Start

### Prerequisites
- Azure CLI installed ([install guide](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli))
- Azure subscription
- `openssl` installed (for key generation)

### Deploy n8n
```sh
./deploy-n8n-azure.sh
```

The script will:
1. ✅ Check prerequisites (Azure CLI, login status)
2. 🔧 Prompt for configuration (region, resource names)
3. 🔐 Generate secure encryption key
4. 🗄️ Create Azure PostgreSQL Flexible Server
5. 🐳 Deploy n8n container instance
6. 📄 Save credentials to file
7. 🌐 Provide access URL

**Deployment time**: ~10-15 minutes

---

## 📋 What Gets Deployed

### Infrastructure
| Resource | Type | Configuration |
|----------|------|---------------|
| **Container Instance** | Azure Container Instances | 2 vCPU, 4GB RAM, n8n:latest |
| **Database** | PostgreSQL Flexible Server | Standard_B2s (Burstable), 32GB storage |
| **Networking** | Public IP + DNS | HTTP on port 5678 |
| **Resource Group** | Logical container | All resources in single group |

### Architecture
```
Internet
   ↓
Azure Container Instance (n8n)
   ↓
Azure PostgreSQL Flexible Server
```

---

## 🔐 Security Configuration

### Generated Secrets
The script generates and stores:
- **Encryption Key**: 32-character hex (for n8n credential encryption)
- **Database Password**: Secure random password with special chars
- **Credentials File**: `n8n-azure-credentials-<timestamp>.txt`

⚠️ **CRITICAL**: Save the credentials file securely - encryption key cannot be recovered!

### Firewall Rules
- PostgreSQL: Open to Azure services (0.0.0.0/0 within Azure)
- Container: Public HTTP access (port 5678)

### Production Security Recommendations
```sh
# 1. Store secrets in Azure Key Vault
az keyvault create --name n8n-vault-$RANDOM --resource-group n8n-rg

az keyvault secret set --vault-name n8n-vault-<id> \
  --name N8N-ENCRYPTION-KEY --value "<your-key>"

# 2. Restrict PostgreSQL to container IP only
CONTAINER_IP=$(az container show --resource-group n8n-rg \
  --name n8n-instance --query ipAddress.ip -o tsv)

az postgres flexible-server firewall-rule create \
  --resource-group n8n-rg \
  --name n8n-postgres-<id> \
  --rule-name AllowContainer \
  --start-ip-address $CONTAINER_IP \
  --end-ip-address $CONTAINER_IP

# 3. Enable SSL/TLS with custom domain
# See "Custom Domain Setup" section below
```

---

## 🔧 Management Commands

### View Logs
```sh
# Real-time logs
az container logs --resource-group n8n-rg --name n8n-instance --follow

# Last 100 lines
az container logs --resource-group n8n-rg --name n8n-instance --tail 100
```

### Restart Container
```sh
az container restart --resource-group n8n-rg --name n8n-instance
```

### Check Status
```sh
az container show --resource-group n8n-rg --name n8n-instance \
  --query "{State:instanceView.state, FQDN:ipAddress.fqdn, IP:ipAddress.ip}"
```

### Update n8n Version
```sh
# Stop container
az container stop --resource-group n8n-rg --name n8n-instance

# Delete container (database persists)
az container delete --resource-group n8n-rg --name n8n-instance --yes

# Redeploy with latest image
./deploy-n8n-azure.sh
# (Use existing database credentials when prompted)
```

### Database Backup
```sh
# Manual backup
az postgres flexible-server backup create \
  --resource-group n8n-rg \
  --name n8n-postgres-<id> \
  --backup-name manual-backup-$(date +%Y%m%d)

# Enable automated backups (7-day retention)
az postgres flexible-server update \
  --resource-group n8n-rg \
  --name n8n-postgres-<id> \
  --backup-retention 7
```

---

## 🌐 Custom Domain Setup

### Option 1: Azure Application Gateway (Production)
```sh
# 1. Create Application Gateway with SSL certificate
az network application-gateway create \
  --name n8n-gateway \
  --resource-group n8n-rg \
  --location eastus \
  --capacity 2 \
  --sku Standard_v2 \
  --http-settings-cookie-based-affinity Disabled \
  --frontend-port 443 \
  --http-settings-port 5678 \
  --http-settings-protocol Http \
  --public-ip-address n8n-public-ip \
  --vnet-name n8n-vnet \
  --subnet gateway-subnet

# 2. Configure backend pool to container instance
# 3. Upload SSL certificate
# 4. Configure DNS CNAME: n8n.yourdomain.com -> gateway IP
```

### Option 2: Caddy Reverse Proxy (Simple)
```sh
# Deploy Caddy container as reverse proxy
az container create \
  --resource-group n8n-rg \
  --name n8n-caddy \
  --image caddy:latest \
  --dns-name-label n8n-caddy-$RANDOM \
  --ports 443 80 \
  --environment-variables \
    N8N_URL=http://<n8n-container-ip>:5678 \
  --command-line "caddy reverse-proxy --from https://n8n.yourdomain.com --to \$N8N_URL"
```

---

## 📊 Monitoring & Alerts

### Enable Azure Monitor
```sh
# Create Log Analytics workspace
az monitor log-analytics workspace create \
  --resource-group n8n-rg \
  --workspace-name n8n-logs

# Enable container insights
az container update \
  --resource-group n8n-rg \
  --name n8n-instance \
  --log-analytics-workspace n8n-logs
```

### Set Up Alerts
```sh
# Alert on container restart
az monitor metrics alert create \
  --name n8n-restart-alert \
  --resource-group n8n-rg \
  --scopes /subscriptions/<sub-id>/resourceGroups/n8n-rg/providers/Microsoft.ContainerInstance/containerGroups/n8n-instance \
  --condition "RestartCount > 3" \
  --description "n8n container restarted more than 3 times"
```

---

## 💰 Cost Management

### View Current Costs
```sh
# Current month costs
az consumption usage list \
  --start-date $(date -u -d "1 month ago" +%Y-%m-%d) \
  --end-date $(date -u +%Y-%m-%d) \
  --query "[?contains(instanceName, 'n8n')]" \
  --output table

# Set budget alert
az consumption budget create \
  --budget-name n8n-monthly-budget \
  --amount 150 \
  --category Cost \
  --time-grain Monthly \
  --resource-group n8n-rg
```

### Estimated Monthly Costs (USD)
| Service | Configuration | Cost |
|---------|---------------|------|
| Container Instances | 2 vCPU, 4GB, 730h | $60-90 |
| PostgreSQL Flexible | B2s, 32GB | $30-50 |
| Networking | ~100GB egress | $5-20 |
| **Total** | | **$95-160** |

### Cost Optimization
```sh
# 1. Use smaller PostgreSQL tier for dev/test
az postgres flexible-server update \
  --resource-group n8n-rg \
  --name n8n-postgres-<id> \
  --sku-name Standard_B1s

# 2. Reduce container resources (dev/test)
# Edit deploy script: --cpu 1 --memory 2

# 3. Stop during off-hours (dev/test)
az container stop --resource-group n8n-rg --name n8n-instance
az container start --resource-group n8n-rg --name n8n-instance
```

---

## 🧹 Cleanup

### Remove All Resources
```sh
./cleanup-n8n-azure.sh
```

Or manually:
```sh
az group delete --name n8n-rg --yes --no-wait
```

⚠️ **WARNING**: This permanently deletes all data, including workflows and credentials!

---

## 🔍 Troubleshooting

### Container Won't Start
```sh
# Check logs
az container logs --resource-group n8n-rg --name n8n-instance

# Common issues:
# 1. Database connection failed -> verify DB_POSTGRESDB_HOST
# 2. Port already in use -> check port 5678 availability
# 3. Out of memory -> increase --memory to 8GB
```

### Database Connection Errors
```sh
# Test connection from local machine
psql "host=n8n-postgres-<id>.postgres.database.azure.com port=5432 dbname=n8n user=n8nadmin password=<password> sslmode=require"

# Check firewall rules
az postgres flexible-server firewall-rule list \
  --resource-group n8n-rg \
  --name n8n-postgres-<id> \
  --output table
```

### Cannot Access n8n UI
```sh
# 1. Verify container is running
az container show --resource-group n8n-rg --name n8n-instance \
  --query instanceView.state

# 2. Get public URL
az container show --resource-group n8n-rg --name n8n-instance \
  --query ipAddress.fqdn -o tsv

# 3. Check NSG rules (if using VNet)
az network nsg rule list --resource-group n8n-rg --nsg-name n8n-nsg
```

### Encryption Key Lost
⚠️ **Cannot be recovered!** All encrypted credentials are permanently inaccessible.

**Prevention**:
```sh
# Store in Azure Key Vault during deployment
az keyvault secret set --vault-name <vault> \
  --name N8N-ENCRYPTION-KEY --value "<key>"

# Retrieve later
az keyvault secret show --vault-name <vault> \
  --name N8N-ENCRYPTION-KEY --query value -o tsv
```

---

## 🎯 Production Checklist

- [ ] Custom domain configured
- [ ] SSL/TLS certificate installed
- [ ] Encryption key stored in Azure Key Vault
- [ ] Database firewall restricted to container IP
- [ ] Automated backups enabled (7+ day retention)
- [ ] Azure Monitor + Log Analytics configured
- [ ] Cost alerts set up
- [ ] Network Security Groups configured
- [ ] Azure AD authentication enabled (if using user management)
- [ ] Disaster recovery plan documented
- [ ] Monitoring dashboards created

---

## 📚 References

- [n8n Documentation](https://docs.n8n.io/)
- [Azure Container Instances](https://learn.microsoft.com/en-us/azure/container-instances/)
- [Azure PostgreSQL Flexible Server](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/)
- [Azure CLI Reference](https://learn.microsoft.com/en-us/cli/azure/)

---

## 🆘 Support

**n8n Issues**: https://github.com/n8n-io/n8n/issues
**Azure Support**: https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade

---

*Generated: 2025-10-01*
*n8n Version: 1.113.3*
