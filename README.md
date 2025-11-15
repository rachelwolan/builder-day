# Builder Day Showcase

A Next.js application showcasing Builder Day projects, designed to be deployed on Webflow Cloud.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Webflow Cloud

1. Install the Webflow CLI globally:
```bash
npm install -g @webflow/webflow-cli
```

2. Initialize Webflow Cloud in your project:
```bash
webflow cloud init
```

3. Follow the Webflow Cloud deployment guide:
   - Connect your GitHub repository
   - Configure your deployment settings
   - Deploy your application

For more information, visit the [Webflow Cloud Documentation](https://developers.webflow.com/webflow-cloud/intro).

## Project Structure

```
builder-day/
├── app/              # Next.js App Router pages
├── components/       # React components
├── public/          # Static assets
├── styles/          # Global styles
└── lib/             # Utility functions
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **React 18** - UI library

