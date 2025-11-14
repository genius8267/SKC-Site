# intunelabs.ai Website Deployment Guide

## Overview
Deploy your presentation website (`gents.html`) to Azure Static Web Apps and configure the custom domain `intunelabs.ai` from GoDaddy.

## Prerequisites
- Azure account (create at https://azure.microsoft.com/free/)
- GoDaddy domain `intunelabs.ai` (you already have this)
- Terminal/Command Line access

## Step 1: Deploy to Azure

Run the deployment script:

```sh
./deploy-website-azure.sh
```

This will:
1. Install Azure CLI (if needed)
2. Log you into Azure
3. Create a resource group `intunelabs-rg`
4. Create Azure Static Web App
5. Deploy your website
6. Provide you with a temporary URL like `https://intunelabs-ai-xxxxx.azurestaticapps.net`

**Cost**: FREE (using Azure Static Web Apps Free tier)

## Step 2: Configure Custom Domain in GoDaddy

### A. Get Azure Validation Details

After deployment, run:

```sh
az staticwebapp hostname set \
    --name intunelabs-ai \
    --resource-group intunelabs-rg \
    --hostname intunelabs.ai
```

This will output a **validation TXT record** that looks like:
```
Name: _dnsauth.intunelabs.ai
Type: TXT
Value: 1234567890abcdef...
```

### B. Configure DNS in GoDaddy

1. **Log into GoDaddy**: https://dcc.godaddy.com/control/portfolio/intunelabs.ai/settings
2. **Go to DNS Settings**
3. **Add the following records**:

| Type  | Name         | Value (Target)                           | TTL  |
|-------|--------------|------------------------------------------|------|
| TXT   | _dnsauth     | [value from Azure command above]         | 600  |
| CNAME | www          | intunelabs-ai-xxxxx.azurestaticapps.net  | 600  |
| ALIAS/CNAME | @    | intunelabs-ai-xxxxx.azurestaticapps.net  | 600  |

> **Note**: Replace `intunelabs-ai-xxxxx.azurestaticapps.net` with your actual Azure URL from Step 1.

> **Note**: GoDaddy may require using "Forwarding" or "@" instead of ALIAS for the apex domain. If CNAME doesn't work for "@", use domain forwarding.

### C. Verify DNS Propagation

Wait 5-15 minutes, then check:

```sh
# Check TXT record
dig _dnsauth.intunelabs.ai TXT

# Check CNAME records
dig www.intunelabs.ai
dig intunelabs.ai
```

### D. Complete Custom Domain Setup

```sh
# Verify the custom domain
az staticwebapp hostname show \
    --name intunelabs-ai \
    --resource-group intunelabs-rg
```

Azure will automatically provision a free SSL/TLS certificate via Let's Encrypt.

## Step 3: Verify Your Website

Visit:
- https://intunelabs.ai
- https://www.intunelabs.ai

Both should show your presentation website with HTTPS (secure).

## Updating Your Website

To update the website content:

1. Edit `gents.html`
2. Run `./deploy-website-azure.sh` again
3. Changes will be live in ~1 minute

## Alternative: Using Azure Portal (GUI Method)

If you prefer a graphical interface:

1. Go to https://portal.azure.com
2. Search for "Static Web Apps"
3. Click "Create"
4. Fill in:
   - Resource Group: Create new `intunelabs-rg`
   - Name: `intunelabs-ai`
   - Region: Korea Central
   - Source: Other (manual upload)
5. After creation, use the deployment token to upload files via SWA CLI

## Troubleshooting

### Issue: Azure CLI not installed
```sh
brew install azure-cli
```

### Issue: SWA CLI not installed
```sh
npm install -g @azure/static-web-apps-cli
```

### Issue: Custom domain not working
- Check DNS propagation: https://dnschecker.org
- Verify TXT record is present
- Ensure CNAME points to correct Azure URL
- Wait up to 24 hours for full DNS propagation

### Issue: SSL certificate not provisioning
- Ensure DNS records are correct
- Wait 24-48 hours for automatic certificate issuance
- Check Azure Portal > Static Web App > Custom domains for status

## Cost Estimation

| Service | Tier | Monthly Cost |
|---------|------|--------------|
| Azure Static Web Apps | Free | $0 |
| Bandwidth (first 100GB) | Free | $0 |
| Custom domain & SSL | Free | $0 |
| **Total** | | **$0** |

> **Note**: If you exceed 100GB bandwidth/month or need custom authentication, upgrade to Standard tier (~$9/month).

## Cleanup

To delete all Azure resources:

```sh
az group delete --name intunelabs-rg --yes
```

## Resources

- Azure Static Web Apps Docs: https://docs.microsoft.com/azure/static-web-apps/
- GoDaddy DNS Help: https://www.godaddy.com/help/manage-dns-680
- DNS Checker: https://dnschecker.org
