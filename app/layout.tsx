import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import SidebarNav from '@/components/SidebarNav'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Builder Day in a Box',
  description: 'A complete guide to transforming your team into an AI-native organization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'auto';
                const resolvedTheme = theme === 'auto' 
                  ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                  : theme;
                document.documentElement.setAttribute('data-theme', resolvedTheme);
                document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
              })();
            `,
          }}
        />
      </head>
      <body>
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f9fafb;
            --bg-tertiary: #f3f4f6;
            --text-primary: #0a0a0a;
            --text-secondary: #6b7280;
            --text-tertiary: #9ca3af;
            --border: #e5e7eb;
            --border-hover: #d1d5db;
            --accent: #4353ff;
            --accent-hover: #3643cc;
            --accent-light: #f0f4ff;
            --code-bg: #f9fafb;
            --code-border: #e5e7eb;
          }
          [data-theme="dark"] {
            --bg-primary: #0d0d0d;
            --bg-secondary: #161616;
            --bg-tertiary: #1f1f1f;
            --text-primary: #ffffff;
            --text-secondary: #a0a0a0;
            --text-tertiary: #707070;
            --border: #2a2a2a;
            --border-hover: #3a3a3a;
            --accent: #5e6ad2;
            --accent-hover: #4d59c0;
            --accent-light: #1a1f3a;
            --code-bg: #161616;
            --code-border: #2a2a2a;
          }
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
          html, body {
            max-width: 100vw;
            overflow-x: hidden;
            transition: background-color 0.2s, color 0.2s;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: var(--text-primary);
            background-color: var(--bg-primary);
            line-height: 1.6;
          }
          .app-layout {
            display: flex;
            min-height: 100vh;
          }
          .main-content {
            flex: 1;
            margin-left: 240px;
            min-height: 100vh;
            background: var(--bg-primary);
          }
          .content-wrapper {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 4rem;
          }
          .theme-toggle-container {
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 1000;
          }
          .hero {
            padding: 4rem 0 6rem;
            text-align: center;
          }
          .hero-tagline {
            font-size: clamp(1.25rem, 3vw, 1.75rem);
            color: var(--accent);
            font-weight: 500;
            margin-bottom: 1rem;
            letter-spacing: -0.01em;
          }
          .hero h1 {
            font-size: clamp(3rem, 8vw, 5rem);
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--text-primary);
            letter-spacing: -0.02em;
            line-height: 1.1;
          }
          .hero-subtitle {
            font-size: clamp(1rem, 2vw, 1.25rem);
            color: var(--text-secondary);
            max-width: 800px;
            margin: 0 auto 2rem;
            line-height: 1.7;
          }
          .section {
            padding: 4rem 0;
            position: relative;
            min-height: 100vh;
          }
          .guide-content {
            display: grid;
            grid-template-columns: 1fr 240px;
            gap: 4rem;
            max-width: 1400px;
            margin: 0 auto;
            align-items: start;
            position: relative;
          }
          .guide-body {
            max-width: 800px;
            min-width: 0;
          }
          .guide-section {
            margin-bottom: 4rem;
            scroll-margin-top: 2rem;
          }
          .guide-section h2 {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            margin-top: 3rem;
            color: var(--text-primary);
            letter-spacing: -0.02em;
            line-height: 1.2;
          }
          .guide-section h2:first-child {
            margin-top: 0;
          }
          .guide-section h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
          }
          .guide-section h4 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            color: var(--text-primary);
          }
          .guide-section p {
            font-size: 1rem;
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: 1.25rem;
          }
          .guide-section ul, .guide-section ol {
            margin-left: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .guide-section li {
            font-size: 1rem;
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: 0.75rem;
          }
          .table-of-contents {
            position: -webkit-sticky;
            position: sticky;
            top: 2rem;
            align-self: start;
            background: var(--bg-primary);
            padding: 1rem 0;
            border: none;
            max-height: calc(100vh - 4rem);
            overflow-y: auto;
            overflow-x: hidden;
            width: 240px;
            z-index: 10;
            height: fit-content;
          }
          .table-of-contents h3 {
            font-size: 0.75rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text-tertiary);
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          .toc-progress-container {
            position: absolute;
            left: 0;
            top: 2.5rem;
            bottom: 0.5rem;
            width: 2px;
            background: var(--border);
            border-radius: 1px;
          }
          .toc-progress-bar {
            position: absolute;
            left: 0;
            top: 0;
            width: 2px;
            background: var(--accent);
            transition: height 0.1s ease-out;
            min-height: 2px;
            border-radius: 1px;
          }
          .table-of-contents ul {
            list-style: none;
            padding: 0;
            margin: 0;
            position: relative;
            padding-left: 1rem;
          }
          .table-of-contents li {
            margin-bottom: 0.25rem;
            position: relative;
          }
          .table-of-contents a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.875rem;
            line-height: 1.6;
            transition: color 0.15s;
            display: block;
            padding: 0.375rem 0.5rem;
            border-radius: 4px;
          }
          .table-of-contents a:hover {
            color: var(--text-primary);
            background: var(--bg-secondary);
          }
          .table-of-contents a[href^="#"]:target,
          .table-of-contents a.active {
            color: var(--accent);
            font-weight: 500;
          }
          .table-of-contents a[data-past="true"] {
            color: var(--text-primary);
          }
          .goals-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
          }
          .goal-card {
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 1.5rem;
            transition: all 0.2s;
          }
          .goal-card:hover {
            border-color: var(--accent);
            background: var(--bg-tertiary);
          }
          .goal-card h3, .goal-card h4 {
            margin-top: 0;
            margin-bottom: 0.75rem;
            font-size: 1.125rem;
            color: var(--text-primary);
            font-weight: 600;
          }
          .goal-card p {
            margin-bottom: 0;
            color: var(--text-secondary);
            font-size: 0.9375rem;
            line-height: 1.6;
          }
          .track-card {
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 2rem;
            margin: 2rem 0;
            border-left: 3px solid var(--accent);
          }
          .track-card h3 {
            margin-top: 0;
            color: var(--text-primary);
            font-size: 1.5rem;
          }
          .track-card h4 {
            font-size: 1.125rem;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            color: var(--text-primary);
          }
          .prep-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
          }
          .prep-card {
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 1.5rem;
          }
          .prep-card h3, .prep-card h4 {
            margin-top: 0;
            margin-bottom: 1rem;
            color: var(--text-primary);
            font-size: 1.125rem;
            font-weight: 600;
          }
          .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
          }
          .category-card {
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 1.5rem;
            transition: all 0.2s;
          }
          .category-card:hover {
            border-color: var(--accent);
            transform: translateY(-2px);
            background: var(--bg-tertiary);
          }
          .category-card h4 {
            margin-top: 0;
            margin-bottom: 0.75rem;
            color: var(--text-primary);
            font-size: 1.125rem;
            font-weight: 600;
          }
          .category-card p {
            margin-bottom: 0;
            color: var(--text-secondary);
            font-size: 0.9375rem;
            line-height: 1.6;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: var(--bg-primary);
            border: 1px solid var(--border);
            border-radius: 8px;
            overflow: hidden;
            margin: 2rem 0;
          }
          thead {
            background: var(--bg-secondary);
          }
          th {
            padding: 0.75rem 1rem;
            text-align: left;
            font-weight: 600;
            color: var(--text-primary);
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          td {
            padding: 0.75rem 1rem;
            border-top: 1px solid var(--border);
            color: var(--text-secondary);
            font-size: 0.9375rem;
          }
          tr:hover {
            background: var(--bg-secondary);
          }
          .info-box {
            background: var(--accent-light);
            border: 1px solid var(--accent);
            border-radius: 8px;
            padding: 1.5rem;
            margin: 2rem 0;
          }
          .info-box h3, .info-box h4 {
            margin-top: 0;
            color: var(--accent);
            font-weight: 600;
          }
          .info-box p, .info-box ul {
            margin-bottom: 0.75rem;
            color: var(--text-primary);
          }
          .step-card {
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 2rem;
            margin: 2rem 0;
          }
          .step-card h3 {
            margin-top: 0;
            color: var(--text-primary);
          }
          .resource-item {
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1rem;
            border-left: 3px solid var(--accent);
          }
          .resource-item h4 {
            margin-top: 0;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
            font-size: 1.125rem;
            font-weight: 600;
          }
          .cta-box {
            background: linear-gradient(135deg, var(--accent) 0%, #6366f1 100%);
            color: #ffffff;
            border-radius: 8px;
            padding: 2.5rem;
            margin-top: 3rem;
            text-align: center;
          }
          .cta-box p {
            margin-bottom: 0.75rem;
            color: #ffffff;
          }
          a {
            color: var(--accent);
            text-decoration: none;
            transition: color 0.2s;
          }
          a:hover {
            color: var(--accent-hover);
          }
          @media (max-width: 1024px) {
            .main-content {
              margin-left: 0;
            }
            .content-wrapper {
              padding: 2rem;
            }
            .guide-content {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            .table-of-contents {
              position: relative;
              top: 0;
              max-height: none;
              width: 100%;
            }
          }
          @media (max-width: 768px) {
            .theme-toggle-container {
              top: 0.5rem;
              right: 0.5rem;
            }
            .content-wrapper {
              padding: 1.5rem;
            }
            .hero {
              padding: 2rem 0 4rem;
            }
            .section {
              padding: 3rem 0;
            }
            .guide-section h2 {
              font-size: 1.75rem;
            }
            .guide-section h3 {
              font-size: 1.25rem;
            }
          }
        `}} />
        <ThemeProvider>
          <div className="app-layout">
            <SidebarNav />
            <main className="main-content">
              <div className="content-wrapper">
                {children}
              </div>
            </main>
          </div>
          <div className="theme-toggle-container">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
