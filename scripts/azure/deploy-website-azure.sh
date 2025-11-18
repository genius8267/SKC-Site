#!/bin/bash

# Azure Static Web App Deployment Script for intunelabs.ai
# This script deploys gents.html to Azure Static Web Apps

set -e

echo "=== Azure Static Web App Deployment for intunelabs.ai ==="
echo ""

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI not found. Installing..."
    brew install azure-cli
fi

# Login to Azure
echo "🔐 Logging into Azure..."
az login

# Set variables
RESOURCE_GROUP="intunelabs-rg"
LOCATION="koreacentral"
STATIC_APP_NAME="intunelabs-ai"
SKU="Free"

# Prompt for confirmation
echo ""
echo "Configuration:"
echo "  Resource Group: $RESOURCE_GROUP"
echo "  Location: $LOCATION"
echo "  Static Web App Name: $STATIC_APP_NAME"
echo "  SKU: $SKU"
echo ""
read -p "Continue with deployment? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled."
    exit 1
fi

# Create resource group if it doesn't exist
echo "📦 Creating resource group..."
az group create \
    --name "$RESOURCE_GROUP" \
    --location "$LOCATION"

# Create static web app
echo "🌐 Creating Static Web App..."
az staticwebapp create \
    --name "$STATIC_APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --location "$LOCATION" \
    --sku "$SKU"

# Get deployment token
echo "🔑 Getting deployment token..."
DEPLOYMENT_TOKEN=$(az staticwebapp secrets list \
    --name "$STATIC_APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --query "properties.apiKey" -o tsv)

# Create a simple deployment directory
echo "📁 Preparing deployment files..."
mkdir -p ./deploy-temp
cp gents.html ./deploy-temp/index.html
cp -r Logo ./deploy-temp/ 2>/dev/null || true
cp intune_labs_logo.png ./deploy-temp/ 2>/dev/null || true

# Install Static Web Apps CLI if not present
if ! command -v swa &> /dev/null; then
    echo "📥 Installing Azure Static Web Apps CLI..."
    npm install -g @azure/static-web-apps-cli
fi

# Deploy using SWA CLI
echo "🚀 Deploying website..."
cd ./deploy-temp
swa deploy \
    --deployment-token "$DEPLOYMENT_TOKEN" \
    --app-location "." \
    --no-use-keychain

cd ..

# Get the URL
APP_URL=$(az staticwebapp show \
    --name "$STATIC_APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --query "defaultHostname" -o tsv)

echo ""
echo "✅ Deployment Complete!"
echo ""
echo "📍 Your website is live at: https://$APP_URL"
echo ""
echo "🔗 Next Steps - Configure Custom Domain (intunelabs.ai):"
echo "1. Get the validation TXT record:"
echo "   az staticwebapp hostname set --name $STATIC_APP_NAME --resource-group $RESOURCE_GROUP --hostname intunelabs.ai"
echo ""
echo "2. Add the following DNS records in GoDaddy:"
echo "   - Type: TXT, Name: @, Value: [provided validation code]"
echo "   - Type: CNAME, Name: www, Value: $APP_URL"
echo "   - Type: CNAME, Name: @, Value: $APP_URL"
echo ""
echo "3. Wait for DNS propagation (5-15 minutes)"
echo "4. Verify: az staticwebapp hostname show --name $STATIC_APP_NAME --resource-group $RESOURCE_GROUP"
echo ""
echo "🗑️  Cleanup deployment temp files..."
rm -rf ./deploy-temp

echo ""
echo "💡 To update your website in the future, run this script again."
echo "💡 To delete everything: az group delete --name $RESOURCE_GROUP"
