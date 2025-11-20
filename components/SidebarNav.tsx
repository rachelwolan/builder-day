'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const learningsItems = [
  { href: '/', label: 'Builder Day in a Box' },
  { href: '/prototyping-personas', label: 'Builder Personas' },
  {
    href: '/ai-native-org',
    label: 'AI-native Org Evolution'
  },
  {
    href: '/webflows-learnings',
    label: 'Webflow\'s Builder Day'
  },
]

const prototypingItems = [
  {
    href: '/prototyping-101',
    label: 'Prototyping 101'
  },
  {
    href: '/cursor',
    label: 'Cursor'
  },
  {
    href: '/figma-make-training',
    label: 'Figma Make'
  },
  {
    href: '/webflow',
    label: 'Webflow'
  },
  {
    href: '/prototype-gallery',
    label: 'Prototype Gallery'
  },
]

export default function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href: string) => {
    return pathname === href || (href !== '/' && pathname?.startsWith(href))
  }

  const renderNavItem = (item: { href: string; label: string }) => {
    const active = isActive(item.href)
    return (
      <li key={item.href} className="sidebar-nav__item">
        <Link
          href={item.href}
          className={`sidebar-nav__link${active ? ' is-active' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <>
      {/* Mobile Header with Hamburger */}
      <div className="mobile-header">
        <Link href="/" className="mobile-header__logo">
          <span style={{fontSize: '1.25rem'}}>🛠️</span>
          <span>Builder Day</span>
        </Link>
        <button
          className="hamburger-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="nav-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <nav className={`sidebar-nav ${isOpen ? 'open' : ''}`}>
        <div style={{padding: '1.5rem 0'}}>
          <div className="sidebar-nav__header">
            <Link href="/" style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{fontSize: '1.25rem'}}>🛠️</span>
              Builder Day
            </Link>
          </div>
          <ul className="sidebar-nav__list">
            <li className="sidebar-nav__section">Learnings</li>
            {learningsItems.map(renderNavItem)}

            <li className="sidebar-nav__section">Prototyping</li>
            {prototypingItems.map(renderNavItem)}
          </ul>
          <div style={{
            padding: '1.5rem',
            paddingBottom: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <a
              href="https://rachelwolan.com"
              style={{
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.2s',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              <span>←</span>
              Back to rachelwolan.com
            </a>
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div style={{
          marginTop: 'auto',
          padding: '1.5rem',
          fontSize: '0.75rem',
          color: 'var(--text-tertiary)',
          textAlign: 'center'
        }}>
          <p style={{margin: 0, marginBottom: '0.5rem'}}>
            Brought to you by
          </p>
          <a
            href="https://webflow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="webflow-sidebar-link"
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'color 0.2s',
              display: 'inline-block'
            }}
          >
            Webflow
          </a>
        </div>
      </nav>
    </>
  )
}

