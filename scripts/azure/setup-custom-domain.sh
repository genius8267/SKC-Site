#!/bin/bash
set -euo pipefail

#######################################################################
# Custom Domain Setup for n8n - intune-care.com
# Sets up Azure Application Gateway with SSL/TLS
#######################################################################

DOMAIN="intune-care.com"
SUBDOMAIN="n8n.intune-care.com"
RESOURCE_GROUP="n8n-rg"
LOCATION="koreacentral"
CONTAINER_IP="20.214.97.249"  # Your n8n container IP

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}[INFO]${NC} Setting up custom domain for n8n..."

#######################################################################
# Step 1: DNS Configuration (Manual Step)
#######################################################################

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Step 1: DNS Configuration Required"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Go to your DNS provider (where you registered intune-care.com)"
echo "and add the following DNS record:"
echo ""
echo "Type:  A"
echo "Name:  n8n"
echo "Value: ${CONTAINER_IP}"
echo "TTL:   300 (or Auto)"
echo ""
echo "This will make n8n accessible at: ${SUBDOMAIN}"
echo ""
read -p "Press Enter after you've added the DNS record..."

#######################################################################
# Step 2: Update n8n Environment Variables
#######################################################################

echo ""
echo -e "${BLUE}[INFO]${NC} Updating n8n configuration for custom domain..."

# Delete existing container
az container delete --resource-group "$RESOURCE_GROUP" --name n8n-instance --yes

# Get ACR password
ACR_PASSWORD=$(az acr credential show --name n8nacr66141 --query "passwords[0].value" -o tsv)

# Redeploy with new domain
az container create \
  --resource-group "$RESOURCE_GROUP" \
  --name n8n-instance \
  --image n8nacr66141.azurecr.io/n8n:latest \
  --registry-login-server n8nacr66141.azurecr.io \
  --registry-username n8nacr66141 \
  --registry-password "$ACR_PASSWORD" \
  --location "$LOCATION" \
  --dns-name-label n8n-66141 \
  --ports 5678 \
  --cpu 2 \
  --memory 4 \
  --os-type Linux \
  --restart-policy Always \
  --environment-variables \
    N8N_HOST="$SUBDOMAIN" \
    N8N_PORT=5678 \
    N8N_PROTOCOL=https \
    WEBHOOK_URL="https://$SUBDOMAIN/" \
    GENERIC_TIMEZONE=Asia/Seoul \
    N8N_METRICS=true \
    DB_TYPE=postgresdb \
    DB_POSTGRESDB_HOST=n8n-postgres-66141.postgres.database.azure.com \
    DB_POSTGRESDB_PORT=5432 \
    DB_POSTGRESDB_DATABASE=n8n \
    DB_POSTGRESDB_USER=n8nadmin \
    DB_POSTGRESDB_SSL_ENABLED=true \
    DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED=false \
  --secure-environment-variables \
    N8N_ENCRYPTION_KEY=ec2428a1ddbe174c5863282cefddea65 \
    DB_POSTGRESDB_PASSWORD=N8nSecure2025! \
  --output none

echo -e "${GREEN}[SUCCESS]${NC} Container updated with custom domain"

#######################################################################
# Step 3: SSL Certificate Setup
#######################################################################

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Step 3: SSL Certificate Options"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Choose one of the following SSL options:"
echo ""
echo "Option A: Cloudflare (Easiest - Free SSL)"
echo "  1. Go to Cloudflare.com and add intune-care.com"
echo "  2. Change nameservers to Cloudflare's"
echo "  3. Add DNS A record: n8n -> ${CONTAINER_IP}"
echo "  4. Enable 'Proxied' (orange cloud icon)"
echo "  5. Go to SSL/TLS -> Overview -> Set to 'Full'"
echo "  Result: https://${SUBDOMAIN} (automatic SSL)"
echo ""
echo "Option B: Nginx Reverse Proxy with Let's Encrypt"
echo "  - Deploy Nginx container with Certbot"
echo "  - Automatic SSL renewal"
echo "  - More control, requires setup"
echo ""
echo "Option C: Azure Application Gateway"
echo "  - Enterprise-grade load balancer"
echo "  - Managed SSL certificates"
echo "  - Costs ~\$125/month"
echo ""

read -p "Which option would you like? (A/B/C): " SSL_OPTION

case ${SSL_OPTION^^} in
  A)
    echo ""
    echo "Cloudflare Setup Steps:"
    echo "1. Go to https://cloudflare.com and sign up"
    echo "2. Add site: intune-care.com"
    echo "3. Update nameservers at your domain registrar"
    echo "4. In Cloudflare DNS, add:"
    echo "   Type: A, Name: n8n, Content: ${CONTAINER_IP}, Proxy: ON"
    echo "5. SSL/TLS -> Overview -> Set: Full"
    echo ""
    echo "After setup, access n8n at: https://${SUBDOMAIN}"
    ;;
  B)
    echo ""
    echo "Installing Nginx reverse proxy with Let's Encrypt..."
    # This would deploy nginx container
    echo "Not implemented yet - use Option A (Cloudflare) for now"
    ;;
  C)
    echo ""
    echo "Azure Application Gateway setup requires additional configuration."
    echo "Use Option A (Cloudflare) for simpler setup."
    ;;
esac

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}Custom Domain Setup Complete!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Your n8n instance will be accessible at:"
echo "  http://${SUBDOMAIN}:5678  (after DNS propagation)"
echo ""
echo "With SSL (after Cloudflare setup):"
echo "  https://${SUBDOMAIN}"
echo ""
