# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application showcasing "Builder Day in a Box" - a comprehensive guide for transforming teams into AI-native organizations. The application is designed to be deployed on Webflow Cloud at the `/builder-day` base path.

## Development Commands

### Local Development
```bash
npm install              # Install dependencies
npm run dev             # Start development server (http://localhost:3000)
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
```

### Webflow Cloud Deployment
```bash
npm run opennextjs-cloudflare  # Build for Cloudflare/Webflow Cloud deployment
```

The project uses `@opennextjs/cloudflare` for Cloudflare/Webflow Cloud compatibility.

## Architecture

### Deployment Configuration

The application is configured for Webflow Cloud deployment with specific overrides:

- **Base Path**: `/builder-day` - All routes are prefixed with this path
- **Asset Prefix**: Points to Webflow's CDN for static assets
- **Next.js Configuration**: Split between `next.config.ts` (Webflow-specific) and `clouduser.next.config` (user config)
- **Image Loader**: Uses a custom Webflow image loader (`webflow-loader.ts`)

### App Router Structure

The application uses Next.js App Router with the following key patterns:

- **Route Structure**: Content pages live under `/app/builder-day-in-a-box/[topic]/page.tsx`
- **Shared Layout**: `app/layout.tsx` provides the root layout with sidebar navigation, theme support, and global styles
- **Page Pattern**: Each guide page follows a consistent structure with hero section and guide content sections

### Component Architecture

**Navigation System**:
- `SidebarNav.tsx` - Fixed sidebar navigation with categorized links (Prototyping, Frameworks)
- Navigation items are hardcoded in the component and include active state detection
- Responsive: Converts to horizontal scrolling on mobile (<1024px)

**Theme System**:
- `ThemeProvider.tsx` - Client-side theme management (light/dark/auto modes)
- `ThemeToggle.tsx` - Theme switcher UI component
- Theme state stored in localStorage and synced with HTML data attributes
- Inline critical CSS in `layout.tsx` prevents flash of unstyled content

**Table of Contents**:
- `TableOfContents.tsx` - Sticky TOC with scroll tracking and progress indicator
- Uses IntersectionObserver for active section detection
- Smooth scroll behavior with offset for fixed headers

### Styling Approach

- **CSS-in-JS**: Extensive use of inline styles and `dangerouslySetInnerHTML` for CSS in `layout.tsx`
- **CSS Variables**: Theme-aware custom properties (e.g., `--bg-primary`, `--text-primary`, `--accent`)
- **No External Stylesheets**: All styles are embedded in the root layout for deployment compatibility
- Dark mode uses `[data-theme="dark"]` selector with separate variable values

### Key Patterns

**Page Structure**:
```tsx
export default function PageName() {
  return (
    <>
      <section className="hero">
        {/* Hero content */}
      </section>
      <section className="section">
        <div className="guide-content">
          <div className="guide-body">
            <section id="section-name" className="guide-section">
              {/* Content */}
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
```

**Client Components**: Pages that use interactivity (onClick handlers, etc.) must use `"use client"` directive

**Path Aliases**: Uses `@/*` to reference project root (configured in `tsconfig.json`)

## Content Guidelines

### Adding New Pages

1. Create page under `app/builder-day-in-a-box/[slug]/page.tsx`
2. Update `SidebarNav.tsx` to add navigation link
3. Follow existing hero + guide-content structure
4. Use CSS classes from global styles (defined in `layout.tsx`)

### Common CSS Classes

- `.hero` - Hero section with tagline, title, subtitle
- `.guide-section` - Content sections with consistent spacing
- `.goal-card`, `.track-card`, `.prep-card` - Card layouts for different content types
- `.info-box` - Highlighted information boxes
- `.goals-grid`, `.categories-grid`, `.prep-grid` - Responsive grid layouts

### TypeScript Configuration

- Strict mode enabled
- Path alias: `@/*` maps to project root
- Target: ES2017 for broad compatibility
- Module resolution: bundler (for Next.js 15)

## Webflow Cloud Specifics

When making changes that affect deployment:

- The `next.config.ts` includes Webflow-specific overrides (basePath, assetPrefix, image loader)
- Changes to routing may need to account for the `/builder-day` base path
- Image handling uses a custom loader - avoid Next.js built-in image optimization options
- The `open-next.config.ts` file configures OpenNext for Cloudflare deployment

## Important Notes

- **Inline Styles**: The project intentionally uses inline styles and embedded CSS for Webflow Cloud compatibility. Avoid creating separate CSS/SCSS files.
- **Theme Initialization**: Critical theme initialization script in `layout.tsx` prevents flash - don't remove or move it.
- **Client vs Server Components**: Most pages can be server components, but use `"use client"` for any interactivity.
- **Navigation Updates**: When adding/removing pages, remember to update both the file structure AND `SidebarNav.tsx`.
