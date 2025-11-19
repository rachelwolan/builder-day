'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
    href: '/figma-make-training',
    label: 'Figma Make'
  },
  {
    href: '/cursor',
    label: 'Cursor'
  },
  {
    href: '/webflow-app-gen',
    label: 'Webflow'
  },
]

export default function SidebarNav() {
  const pathname = usePathname()

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
        >
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <nav className="sidebar-nav">
      <div style={{padding: '1.5rem 0'}}>
        <div className="sidebar-nav__header">
          <Link href="/" style={{
            fontSize: '1rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            textDecoration: 'none',
            letterSpacing: '-0.01em'
          }}>
            Builder Day
          </Link>
        </div>
        <ul className="sidebar-nav__list">
        <li className="sidebar-nav__section">Learnings</li>
        {learningsItems.map(renderNavItem)}

        <li className="sidebar-nav__section">Prototyping</li>
        {prototypingItems.map(renderNavItem)}
        </ul>
      </div>
      <div style={{
        marginTop: 'auto',
        padding: '1.5rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border)',
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
  )
}

