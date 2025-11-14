#!/bin/bash
set -euo pipefail

#######################################################################
# n8n Azure Container Instances Deployment Script
# Deploys n8n with Azure PostgreSQL database
#######################################################################

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Error handler
error_exit() {
    log_error "$1"
    exit 1
}

#######################################################################
# 1. Prerequisites Check
#######################################################################

log_info "Checking prerequisites..."

# Check Azure CLI
if ! command -v az &> /dev/null; then
    error_exit "Azure CLI not found. Install from: https://learn.microsoft.com/en-us/cli/azure/install-azure-cli"
fi

# Check openssl for key generation
if ! command -v openssl &> /dev/null; then
    error_exit "openssl not found. Please install openssl."
fi

# Check Azure login status
if ! az account show &> /dev/null; then
    log_warn "Not logged in to Azure. Running 'az login'..."
    az login || error_exit "Azure login failed"
fi

log_success "Prerequisites check passed"

#######################################################################
# 2. Configuration
#######################################################################

log_info "Configuring deployment parameters..."

# Prompt for configuration or use defaults
read -p "Enter Azure region (default: eastus): " LOCATION
LOCATION=${LOCATION:-eastus}

read -p "Enter resource group name (default: n8n-rg): " RESOURCE_GROUP
RESOURCE_GROUP=${RESOURCE_GROUP:-n8n-rg}

# Generate unique suffix for global resources
UNIQUE_SUFFIX=$(date +%s | tail -c 6)

POSTGRES_SERVER="n8n-postgres-${UNIQUE_SUFFIX}"
CONTAINER_NAME="n8n-instance"
DNS_LABEL="n8n-${UNIQUE_SUFFIX}"

read -p "Enter PostgreSQL admin username (default: n8nadmin): " DB_USER
DB_USER=${DB_USER:-n8nadmin}

# Generate secure password
DB_PASSWORD="N8n$(openssl rand -base64 12 | tr -d '=+/')!9"

# Generate encryption key (32 chars hex)
ENCRYPTION_KEY=$(openssl rand -hex 16)

read -p "Enter timezone (default: America/New_York): " TIMEZONE
TIMEZONE=${TIMEZONE:-America/New_York}

# Display configuration
echo ""
log_info "Deployment Configuration:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Location:           $LOCATION"
echo "  Resource Group:     $RESOURCE_GROUP"
echo "  PostgreSQL Server:  $POSTGRES_SERVER"
echo "  Container Name:     $CONTAINER_NAME"
echo "  DNS Label:          $DNS_LABEL"
echo "  DB Username:        $DB_USER"
echo "  Timezone:           $TIMEZONE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

read -p "Proceed with deployment? (y/n): " CONFIRM
if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
    log_warn "Deployment cancelled by user"
    exit 0
fi

#######################################################################
# 3. Create Resource Group
#######################################################################

log_info "Creating resource group: $RESOURCE_GROUP..."
if az group show --name "$RESOURCE_GROUP" &> /dev/null; then
    log_warn "Resource group already exists, using existing"
else
    az group create \
        --name "$RESOURCE_GROUP" \
        --location "$LOCATION" \
        --output none
    log_success "Resource group created"
fi

#######################################################################
# 4. Deploy PostgreSQL Database
#######################################################################

log_info "Creating PostgreSQL Flexible Server (this may take 5-10 minutes)..."
az postgres flexible-server create \
    --resource-group "$RESOURCE_GROUP" \
    --name "$POSTGRES_SERVER" \
    --location "$LOCATION" \
    --admin-user "$DB_USER" \
    --admin-password "$DB_PASSWORD" \
    --sku-name Standard_B2s \
    --tier Burstable \
    --storage-size 32 \
    --version 14 \
    --public-access 0.0.0.0 \
    --yes \
    --output none || error_exit "PostgreSQL server creation failed"

log_success "PostgreSQL server created"

# Create database
log_info "Creating n8n database..."
az postgres flexible-server db create \
    --resource-group "$RESOURCE_GROUP" \
    --server-name "$POSTGRES_SERVER" \
    --database-name n8n \
    --output none || error_exit "Database creation failed"

log_success "Database 'n8n' created"

# Configure firewall to allow Azure services
log_info "Configuring PostgreSQL firewall rules..."
az postgres flexible-server firewall-rule create \
    --resource-group "$RESOURCE_GROUP" \
    --name "$POSTGRES_SERVER" \
    --rule-name AllowAllAzureIPs \
    --start-ip-address 0.0.0.0 \
    --end-ip-address 0.0.0.0 \
    --output none

log_success "Firewall rules configured"

#######################################################################
# 5. Deploy n8n Container Instance
#######################################################################

log_info "Deploying n8n container (this may take 3-5 minutes)..."

POSTGRES_HOST="${POSTGRES_SERVER}.postgres.database.azure.com"
WEBHOOK_URL="http://${DNS_LABEL}.${LOCATION}.azurecontainer.io/"

az container create \
    --resource-group "$RESOURCE_GROUP" \
    --name "$CONTAINER_NAME" \
    --image n8nio/n8n:latest \
    --dns-name-label "$DNS_LABEL" \
    --ports 5678 \
    --cpu 2 \
    --memory 4 \
    --os-type Linux \
    --restart-policy Always \
    --environment-variables \
        N8N_HOST="${DNS_LABEL}.${LOCATION}.azurecontainer.io" \
        N8N_PORT=5678 \
        N8N_PROTOCOL=http \
        WEBHOOK_URL="$WEBHOOK_URL" \
        GENERIC_TIMEZONE="$TIMEZONE" \
        N8N_METRICS=true \
        DB_TYPE=postgresdb \
        DB_POSTGRESDB_HOST="$POSTGRES_HOST" \
        DB_POSTGRESDB_PORT=5432 \
        DB_POSTGRESDB_DATABASE=n8n \
        DB_POSTGRESDB_USER="$DB_USER" \
    --secure-environment-variables \
        N8N_ENCRYPTION_KEY="$ENCRYPTION_KEY" \
        DB_POSTGRESDB_PASSWORD="$DB_PASSWORD" \
    --output none || error_exit "Container deployment failed"

log_success "Container deployed"

#######################################################################
# 6. Wait for Container to Start
#######################################################################

log_info "Waiting for container to start..."
sleep 10

# Get container state
CONTAINER_STATE=$(az container show \
    --resource-group "$RESOURCE_GROUP" \
    --name "$CONTAINER_NAME" \
    --query instanceView.state \
    --output tsv)

log_info "Container state: $CONTAINER_STATE"

# Get public FQDN
FQDN=$(az container show \
    --resource-group "$RESOURCE_GROUP" \
    --name "$CONTAINER_NAME" \
    --query ipAddress.fqdn \
    --output tsv)

#######################################################################
# 7. Save Credentials
#######################################################################

CREDENTIALS_FILE="n8n-azure-credentials-${UNIQUE_SUFFIX}.txt"

cat > "$CREDENTIALS_FILE" << EOF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
n8n Azure Deployment - Credentials
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated: $(date)

🌐 n8n Access URL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
http://${FQDN}:5678

🔐 Critical Security Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SAVE THIS FILE SECURELY - Cannot be retrieved later!

Encryption Key (N8N_ENCRYPTION_KEY):
${ENCRYPTION_KEY}

🗄️ Database Credentials
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Host:     ${POSTGRES_HOST}
Port:     5432
Database: n8n
User:     ${DB_USER}
Password: ${DB_PASSWORD}

📦 Azure Resources
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Resource Group:     ${RESOURCE_GROUP}
PostgreSQL Server:  ${POSTGRES_SERVER}
Container Name:     ${CONTAINER_NAME}
Location:           ${LOCATION}

🔧 Management Commands
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

View container logs:
  az container logs --resource-group ${RESOURCE_GROUP} --name ${CONTAINER_NAME} --follow

Restart container:
  az container restart --resource-group ${RESOURCE_GROUP} --name ${CONTAINER_NAME}

Stop container:
  az container stop --resource-group ${RESOURCE_GROUP} --name ${CONTAINER_NAME}

Start container:
  az container start --resource-group ${RESOURCE_GROUP} --name ${CONTAINER_NAME}

Delete deployment:
  az group delete --name ${RESOURCE_GROUP} --yes --no-wait

View resource costs:
  az consumption usage list --output table

Connect to PostgreSQL:
  psql "host=${POSTGRES_HOST} port=5432 dbname=n8n user=${DB_USER} password=${DB_PASSWORD} sslmode=require"

⚠️ Next Steps
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Access n8n at: http://${FQDN}:5678
2. Complete first-time setup (create owner account)
3. Configure custom domain + SSL (recommended for production)
4. Set up Azure Monitor for logs and alerts
5. Enable Azure Backup for PostgreSQL database
6. Review Azure costs in Cost Management

🔒 Security Recommendations
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Store credentials in Azure Key Vault
- Configure custom domain with SSL/TLS
- Restrict PostgreSQL firewall to container IP only
- Enable Azure AD authentication for n8n
- Set up Network Security Groups (NSGs)
- Enable diagnostic logging
- Configure Azure Backup for disaster recovery

📊 Estimated Monthly Cost
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Container Instances (2 vCPU, 4GB): ~$50-80
- PostgreSQL Flexible (B2s, 32GB):    ~$30-50
- Networking (egress):                 ~$5-20
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total:                                 ~$85-150/month

EOF

log_success "Credentials saved to: $CREDENTIALS_FILE"

#######################################################################
# 8. Display Summary
#######################################################################

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
log_success "n8n Deployment Complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🌐 Access n8n at:"
echo "   ${GREEN}http://${FQDN}:5678${NC}"
echo ""
echo "📄 Credentials saved to:"
echo "   ${YELLOW}$CREDENTIALS_FILE${NC}"
echo ""
echo "🔍 View logs:"
echo "   az container logs --resource-group $RESOURCE_GROUP --name $CONTAINER_NAME --follow"
echo ""
echo "⚠️  IMPORTANT:"
echo "   - Save $CREDENTIALS_FILE securely (contains encryption key)"
echo "   - Complete n8n setup by creating owner account"
echo "   - For production: configure custom domain + SSL"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Open browser (optional)
read -p "Open n8n in browser? (y/n): " OPEN_BROWSER
if [[ "$OPEN_BROWSER" =~ ^[Yy]$ ]]; then
    if command -v open &> /dev/null; then
        open "http://${FQDN}:5678"
    elif command -v xdg-open &> /dev/null; then
        xdg-open "http://${FQDN}:5678"
    else
        log_warn "Could not detect browser opener. Please open manually: http://${FQDN}:5678"
    fi
fi

exit 0
