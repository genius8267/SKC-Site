#!/bin/bash
set -euo pipefail

#######################################################################
# n8n Azure Cleanup Script
# Safely removes all n8n Azure resources
#######################################################################

# Colors
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m'

log_info() { echo -e "[INFO] $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }

#######################################################################
# Check Azure CLI
#######################################################################

if ! command -v az &> /dev/null; then
    log_error "Azure CLI not found"
    exit 1
fi

if ! az account show &> /dev/null; then
    log_error "Not logged in to Azure. Run 'az login' first."
    exit 1
fi

#######################################################################
# List n8n Resource Groups
#######################################################################

log_info "Searching for n8n resource groups..."
RESOURCE_GROUPS=$(az group list --query "[?starts_with(name, 'n8n')].name" -o tsv)

if [ -z "$RESOURCE_GROUPS" ]; then
    log_warn "No n8n resource groups found"
    exit 0
fi

echo ""
echo "Found n8n resource groups:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "$RESOURCE_GROUPS" | nl
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

#######################################################################
# Confirm Deletion
#######################################################################

echo "${RED}WARNING: This will permanently delete all resources!${NC}"
echo "This includes:"
echo "  - Container Instances"
echo "  - PostgreSQL databases and all data"
echo "  - All associated resources"
echo ""
read -p "Type 'DELETE' to confirm deletion: " CONFIRM

if [ "$CONFIRM" != "DELETE" ]; then
    log_warn "Deletion cancelled"
    exit 0
fi

#######################################################################
# Delete Resource Groups
#######################################################################

echo ""
for RG in $RESOURCE_GROUPS; do
    log_info "Deleting resource group: $RG"

    # Show what will be deleted
    log_info "Resources in $RG:"
    az resource list --resource-group "$RG" --query "[].{Name:name, Type:type}" -o table

    echo ""
    read -p "Delete resource group '$RG'? (y/n): " CONFIRM_RG

    if [[ "$CONFIRM_RG" =~ ^[Yy]$ ]]; then
        log_info "Deleting $RG (this may take several minutes)..."
        az group delete --name "$RG" --yes --no-wait
        log_success "Deletion initiated for $RG"
    else
        log_warn "Skipped $RG"
    fi
done

#######################################################################
# Summary
#######################################################################

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
log_success "Cleanup Complete"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
log_info "Resource group deletions are running in the background"
log_info "Check status: az group list --query \"[?starts_with(name, 'n8n')].name\" -o table"
echo ""

exit 0
