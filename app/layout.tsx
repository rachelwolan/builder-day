import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import SidebarNav from '@/components/SidebarNav'

export const metadata: Metadata = {
  title: 'Builder Day in a Box',
  description: 'A complete guide to transforming your team into an AI-native organization',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛠️</text></svg>',
  },
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
          html {
            overflow-x: hidden;
          }
          body {
            max-width: 100vw;
            overflow-x: hidden;
            transition: background-color 0.2s, color 0.2s;
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
          .mobile-header {
            display: none;
          }
          .hamburger-button {
            display: none;
          }
          .nav-overlay {
            display: none;
          }
          .sidebar-nav {
            width: 240px;
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            background: var(--bg-primary);
            border-right: 1px solid var(--border);
            padding: 0;
            overflow-y: auto;
            z-index: 100;
            display: flex;
            flex-direction: column;
          }
          .sidebar-nav__header {
            margin-bottom: 1.5rem;
            padding: 0 1.5rem;
            border-bottom: 1px solid var(--border);
            padding-bottom: 1.5rem;
          }
          .sidebar-nav__list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .sidebar-nav__item {
            margin-bottom: 0.125rem;
            padding: 0 1rem;
          }
          .sidebar-nav__link {
            display: block;
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
            color: var(--text-secondary);
            text-decoration: none;
            border-radius: 6px;
            transition: all 0.15s;
          }
          .sidebar-nav__link:hover {
            background: var(--bg-secondary);
            color: var(--text-primary);
          }
          .sidebar-nav__link.is-active {
            background: var(--bg-tertiary);
            color: var(--text-primary);
            font-weight: 500;
          }
          .sidebar-nav__section {
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            padding: 0 1.5rem;
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-tertiary);
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          .sidebar-nav__section:first-of-type {
            margin-top: 0;
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
            display: none;
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
            min-height: 100vh;
          }
          .guide-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            display: flex;
            gap: 4rem;
          }
          .guide-body {
            flex: 1;
            max-width: 800px;
            min-width: 0;
          }
          .table-of-contents {
            width: 240px;
            flex-shrink: 0;
            align-self: flex-start;
            padding-bottom: 2rem;
          }
          .table-of-contents h3 {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-tertiary);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 1rem;
            margin-top: 0;
          }
          .table-of-contents ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .table-of-contents li {
            margin-bottom: 0;
          }
          .table-of-contents a {
            display: block;
            padding: 0.5rem 0;
            font-size: 0.875rem;
            color: var(--text-secondary);
            text-decoration: none;
            border-left: 2px solid transparent;
            padding-left: 1rem;
            margin-left: -1rem;
            transition: all 0.15s;
            line-height: 1.4;
          }
          .table-of-contents a:hover {
            color: var(--text-primary);
            border-left-color: var(--border-hover);
          }
          .table-of-contents a.active {
            color: var(--accent);
            border-left-color: var(--accent);
            font-weight: 500;
          }
          .toc-progress-container {
            position: absolute;
            left: -1rem;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--border);
          }
          .toc-progress-bar {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: var(--accent);
            transition: height 0.1s linear;
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
            .app-layout {
              flex-direction: column;
            }
            .main-content {
              margin-left: 0;
              padding-top: 60px;
            }
            .content-wrapper {
              padding: 2rem;
            }
            .guide-content {
              padding: 0 1rem;
              flex-direction: column;
            }
            .table-of-contents {
              display: none;
            }

            /* Mobile Header */
            .mobile-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              height: 60px;
              padding: 0 1rem;
              background: var(--bg-primary);
              border-bottom: 1px solid var(--border);
              z-index: 300;
            }
            .mobile-header__logo {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              font-size: 1rem;
              font-weight: 600;
              color: var(--text-primary);
              text-decoration: none;
              letter-spacing: -0.01em;
            }

            /* Hamburger Button */
            .hamburger-button {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 40px;
              height: 40px;
              background: transparent;
              border: none;
              cursor: pointer;
              padding: 8px;
              gap: 5px;
            }
            .hamburger-line {
              width: 24px;
              height: 2px;
              background: var(--text-primary);
              transition: all 0.3s ease;
              border-radius: 2px;
            }
            .hamburger-line.open:nth-child(1) {
              transform: translateY(7px) rotate(45deg);
            }
            .hamburger-line.open:nth-child(2) {
              opacity: 0;
            }
            .hamburger-line.open:nth-child(3) {
              transform: translateY(-7px) rotate(-45deg);
            }

            /* Overlay */
            .nav-overlay {
              display: block;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.5);
              z-index: 250;
              backdrop-filter: blur(4px);
            }

            /* Slide-out Sidebar */
            .sidebar-nav {
              position: fixed;
              top: 0;
              left: -280px;
              width: 280px;
              height: 100vh;
              border-right: 1px solid var(--border);
              padding: 0;
              overflow-y: auto;
              z-index: 300;
              background: var(--bg-primary);
              transition: left 0.3s ease;
            }
            .sidebar-nav.open {
              left: 0;
            }
            .sidebar-nav > div:first-child {
              padding: 1.5rem 0;
            }
            .sidebar-nav__header {
              border-bottom: 1px solid var(--border);
              padding: 0 1.5rem 1.5rem;
              margin-bottom: 0;
            }
            .sidebar-nav__list {
              display: block;
            }
            .sidebar-nav__item {
              padding: 0 1rem;
              margin-bottom: 0.125rem;
            }
            .sidebar-nav__link {
              padding: 0.5rem 0.75rem;
              font-size: 0.875rem;
            }
            .sidebar-nav__section {
              padding: 0 1.5rem;
              margin-top: 1.5rem;
              margin-bottom: 0.5rem;
              font-size: 0.75rem;
            }
            .sidebar-nav__section:first-of-type {
              margin-top: 0;
            }
            .sidebar-nav > div:last-child {
              display: block;
            }
          }
          .webflow-footer-link:hover {
            color: var(--accent) !important;
          }
          .webflow-sidebar-link:hover {
            color: var(--accent) !important;
          }
          @media (max-width: 768px) {
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
            .goals-grid, .prep-grid, .categories-grid {
              grid-template-columns: 1fr;
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
              <footer style={{
                marginTop: 'auto',
                padding: '1.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border)',
                textAlign: 'center',
                fontSize: '0.75rem',
                color: 'var(--text-tertiary)'
              }}>
                <p style={{margin: 0, marginBottom: '0.5rem'}}>
                  Built with ❤️ on
                </p>
                <a
                  href="https://developers.webflow.com/webflow-cloud/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="webflow-footer-link"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                    display: 'inline-block'
                  }}
                >
                  Webflow Cloud
                </a>
              </footer>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
