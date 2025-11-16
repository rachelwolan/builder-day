'use client'

import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      padding: '0.25rem',
      borderRadius: '8px',
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    }}>
      <button
        onClick={() => setTheme('light')}
        style={{
          padding: '0.375rem 0.75rem',
          fontSize: '0.8125rem',
          fontWeight: theme === 'light' ? 600 : 400,
          color: theme === 'light' ? 'var(--text-primary)' : 'var(--text-secondary)',
          background: theme === 'light' ? 'var(--bg-tertiary)' : 'transparent',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'all 0.15s',
          fontFamily: 'inherit'
        }}
      >
        Light
      </button>
      <button
        onClick={() => setTheme('dark')}
        style={{
          padding: '0.375rem 0.75rem',
          fontSize: '0.8125rem',
          fontWeight: theme === 'dark' ? 600 : 400,
          color: theme === 'dark' ? 'var(--text-primary)' : 'var(--text-secondary)',
          background: theme === 'dark' ? 'var(--bg-tertiary)' : 'transparent',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'all 0.15s',
          fontFamily: 'inherit'
        }}
      >
        Dark
      </button>
      <button
        onClick={() => setTheme('auto')}
        style={{
          padding: '0.375rem 0.75rem',
          fontSize: '0.8125rem',
          fontWeight: theme === 'auto' ? 600 : 400,
          color: theme === 'auto' ? 'var(--text-primary)' : 'var(--text-secondary)',
          background: theme === 'auto' ? 'var(--bg-tertiary)' : 'transparent',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'all 0.15s',
          fontFamily: 'inherit'
        }}
      >
        Auto
      </button>
    </div>
  )
}

