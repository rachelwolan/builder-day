'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Builder Day in a Box' },
  { 
    href: '/builder-day-in-a-box/builder-culture-and-prototyping', 
    label: 'Builder Culture & Prototyping' 
  },
]

const prototypingItems = [
  { 
    href: '/builder-day-in-a-box/prototyping-101', 
    label: 'Prototyping 101' 
  },
  { 
    href: '/builder-day-in-a-box/figma-make-training', 
    label: 'Figma Make' 
  },
  { 
    href: '/builder-day-in-a-box/cursor-training', 
    label: 'Become 10x with Cursor' 
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
      <li key={item.href} style={{ marginBottom: '0.125rem', padding: '0 1rem' }}>
        <Link
          href={item.href}
          style={{
            display: 'block',
            padding: '0.5rem 0.75rem',
            fontSize: '0.875rem',
            color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
            textDecoration: 'none',
            borderRadius: '6px',
            background: active ? 'var(--bg-tertiary)' : 'transparent',
            fontWeight: active ? 500 : 400,
            transition: 'all 0.15s'
          }}
          onMouseEnter={(e) => {
            if (!active) {
              e.currentTarget.style.background = 'var(--bg-secondary)'
              e.currentTarget.style.color = 'var(--text-primary)'
            }
          }}
          onMouseLeave={(e) => {
            if (!active) {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--text-secondary)'
            }
          }}
        >
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <nav style={{
      width: '240px',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      background: 'var(--bg-primary)',
      borderRight: '1px solid var(--border)',
      padding: '1.5rem 0',
      overflowY: 'auto',
      zIndex: 100
    }}>
      <div style={{ 
        marginBottom: '1.5rem', 
        padding: '0 1.5rem',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '1.5rem'
      }}>
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
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {navItems.map(renderNavItem)}
        
        <li style={{ marginTop: '1.5rem', marginBottom: '0.5rem', padding: '0 1.5rem' }}>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--text-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Prototyping
          </div>
        </li>
        {prototypingItems.map(renderNavItem)}
      </ul>
    </nav>
  )
}

