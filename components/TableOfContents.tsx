'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  href: string
  label: string
}

interface TableOfContentsProps {
  items: TOCItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const sections = items.map((item) => {
      const id = item.href.replace('#', '')
      return { id, element: document.getElementById(id) }
    }).filter((item) => item.element !== null) as Array<{ id: string; element: HTMLElement }>

    if (sections.length === 0) return

    // Find the active section based on scroll position
    const findActiveSection = () => {
      const scrollPosition = window.scrollY + 120 // Offset for header
      let currentSection = sections[0]?.id || ''
      
      // Find the section that's currently in view or just passed
      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, element } = sections[i]
        const elementTop = element.getBoundingClientRect().top + window.scrollY
        
        if (elementTop <= scrollPosition) {
          currentSection = id
          break
        }
      }
      
      setActiveId(currentSection)
    }

    // Use Intersection Observer for more accurate detection
    const observerOptions = {
      rootMargin: '-120px 0px -50% 0px', // Trigger when section is near top of viewport
      threshold: [0, 0.25, 0.5, 0.75, 1]
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the section with the highest visibility ratio
      let maxRatio = 0
      let activeId = ''

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          activeId = entry.target.id
        }
      })

      // If we found a visible section, use it
      if (activeId && maxRatio > 0.1) {
        setActiveId(activeId)
      } else {
        // Fallback to scroll-based detection
        findActiveSection()
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all section elements
    sections.forEach(({ element }) => {
      observer.observe(element)
    })

    // Throttled scroll handler for active section updates
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          findActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial updates with a small delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      findActiveSection()
    }, 100)

    return () => {
      clearTimeout(initTimeout)
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items])

  return (
    <nav
      className="table-of-contents-horizontal"
      style={{
        width: '100%',
        padding: '1.5rem 0',
        borderTop: '1px solid var(--border-color, #e5e7eb)',
        borderBottom: '1px solid var(--border-color, #e5e7eb)',
        backgroundColor: 'var(--bg-primary, #ffffff)',
        marginBottom: '2rem'
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem'
        }}
      >
        <div
          style={{
            fontSize: '0.75rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--text-tertiary, #6b7280)',
            marginBottom: '0.75rem'
          }}
        >
          On this page
        </div>
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            scrollbarWidth: 'thin',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '0.25rem'
          }}
        >
          {items.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = activeId === id

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(id)
                  if (element) {
                    const offset = 100
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY
                    const offsetPosition = elementPosition - offset

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    })
                    setActiveId(id)
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                  borderRadius: '9999px',
                  border: isActive ? '2px solid var(--accent, #3b82f6)' : '1px solid var(--border-color, #e5e7eb)',
                  backgroundColor: isActive ? 'var(--accent-bg, #eff6ff)' : 'transparent',
                  color: isActive ? 'var(--accent, #3b82f6)' : 'var(--text-secondary, #4b5563)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--accent, #3b82f6)'
                    e.currentTarget.style.backgroundColor = 'var(--accent-bg-hover, #dbeafe)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--border-color, #e5e7eb)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
