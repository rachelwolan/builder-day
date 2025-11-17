# Webflow Cloud Setup Guide

This guide will help you deploy this Builder Day application to Webflow Cloud at `rachelwolan.com/builder-day`.

## Prerequisites

- A Webflow account with access to your site (rachelwolan.com)
- A GitHub account
- Node.js 20.0.0 or higher and `npm` installed
- This repository pushed to GitHub

## Step 1: Install Webflow CLI

Install the Webflow CLI globally:

```bash
npm install -g @webflow/webflow-cli
```

Verify installation:

```bash
webflow --version
```

## Step 2: Initialize Webflow Cloud

Run the initialization command in your project directory:

```bash
cd /Users/rachelwolan/builder-day
webflow cloud init
```

When prompted:
1. **Select framework**: Choose "Next.js"
2. **Mount path**: Enter `/builder-day` (this will make your app available at `rachelwolan.com/builder-day`)
3. **Authenticate**: Log in with your Webflow account
4. **Select site**: Choose your rachelwolan.com site

## Step 3: Push to GitHub

Make sure your code is committed and pushed to GitHub:

```bash
git add .
git commit -m "Prepare for Webflow Cloud deployment"
git push origin master
```

## Step 4: Create Webflow Cloud Project

1. **Open Webflow Cloud Settings**:
   - In Webflow, navigate to your site settings
   - Select "Webflow Cloud" from the sidebar

2. **Connect GitHub**:
   - Click "Login to GitHub" to connect your GitHub account
   - Click "Install GitHub" and follow the prompts to grant Webflow Cloud access to your repositories

3. **Create New Project**:
   - Click "Create New Project"
   - **Name**: `builder-day` (or your preferred name)
   - **GitHub Repository**: Enter the URL of your GitHub repository
   - **Description**: Optional description
   - **Directory**: Leave empty (or specify if your app is in a subdirectory)
   - Click "Create project"

4. **Create Environment**:
   - Choose the branch to deploy from (e.g., `master` or `main`)
   - **Mount path**: `/builder-day`
   - Click "Create environment"

## Step 5: Publish Your Webflow Site

To make your Webflow Cloud app live, you need to publish your Webflow site:
- Click the "Publish" button in the top right corner of your Webflow Dashboard

## Step 6: Deploy Your App

Deploy using the Webflow CLI:

```bash
webflow cloud deploy
```

Or, Webflow Cloud will automatically deploy when you push changes to your configured branch.

## Step 7: View Your App

Once deployed, your app will be available at:
- **Production URL**: `https://rachelwolan.com/builder-day`

## Troubleshooting

### 404 Error After Deployment
- Make sure you've published your Webflow site (Step 5)
- Wait 2-3 minutes for the deployment to complete
- Check the deployment status in Webflow Cloud dashboard

### Assets Not Loading
- Ensure all assets in the `public/` folder are referenced correctly
- Assets will be served from the mount path (`/builder-day`)

### GitHub Integration Issues
- Verify the Webflow Cloud GitHub App has access to your repository
- Go to Webflow Cloud settings → "Install GitHub App" to check permissions

## Next Steps

- Monitor deployments in the Webflow Cloud dashboard
- Set up additional environments (staging, production) as needed
- Configure custom domains if needed

For more information, visit the [Webflow Cloud Documentation](https://developers.webflow.com/webflow-cloud/getting-started).

