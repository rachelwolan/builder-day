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
  const [scrollProgress, setScrollProgress] = useState<number>(0)

  useEffect(() => {
    // Calculate scroll progress
    const calculateScrollProgress = () => {
      const sections = items.map((item) => {
        const id = item.href.replace('#', '')
        return { id, element: document.getElementById(id) }
      }).filter((item) => item.element !== null) as Array<{ id: string; element: HTMLElement }>

      if (sections.length === 0) return

      const firstSection = sections[0].element
      const lastSection = sections[sections.length - 1].element
      
      const documentHeight = lastSection.offsetTop + lastSection.offsetHeight - firstSection.offsetTop
      const scrollPosition = window.scrollY + window.innerHeight / 2 - firstSection.offsetTop
      const progress = Math.max(0, Math.min(100, (scrollPosition / documentHeight) * 100))
      
      setScrollProgress(progress)
    }

    const handleScroll = () => {
      calculateScrollProgress()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    calculateScrollProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items])

  useEffect(() => {
    const sections = items.map((item) => {
      const id = item.href.replace('#', '')
      return { id, element: document.getElementById(id) }
    }).filter((item) => item.element !== null) as Array<{ id: string; element: HTMLElement }>

    if (sections.length === 0) return

    // Use Intersection Observer to track which section is in view
    const observerOptions = {
      rootMargin: '-120px 0px -60% 0px', // Trigger when section is near top of viewport
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
    }

    const visibleSections = new Map<string, number>()

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.intersectionRatio)
        } else {
          visibleSections.delete(entry.target.id)
        }
      })

      // Find the section with the highest intersection ratio
      let maxRatio = 0
      let activeId = ''

      visibleSections.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio
          activeId = id
        }
      })

      // If no section is highly visible, find the one closest to the top
      if (!activeId || maxRatio < 0.1) {
        const scrollPosition = window.scrollY + 150
        let closestSection = sections[0]?.id || ''
        let closestDistance = Infinity

        sections.forEach(({ id, element }) => {
          const distance = Math.abs(element.offsetTop - scrollPosition)
          if (distance < closestDistance && element.offsetTop <= scrollPosition + 200) {
            closestDistance = distance
            closestSection = id
          }
        })

        activeId = closestSection
      }

      if (activeId) {
        setActiveId(activeId)
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all section elements
    sections.forEach(({ element }) => {
      observer.observe(element)
    })

    // Set initial active section
    const handleInitialScroll = () => {
      const scrollPosition = window.scrollY + 150
      let currentSection = sections[0]?.id || ''

      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, element } = sections[i]
        if (element.offsetTop <= scrollPosition) {
          currentSection = id
          break
        }
      }

      setActiveId(currentSection)
    }

    // Set initial state after a short delay to ensure DOM is ready
    setTimeout(handleInitialScroll, 100)

    return () => {
      observer.disconnect()
    }
  }, [items])

  return (
    <nav className="table-of-contents">
      <h3>Table of Contents</h3>
      <div className="toc-progress-container">
        <div 
          className="toc-progress-bar" 
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
      <ul>
        {items.map((item, index) => {
          const id = item.href.replace('#', '')
          const isActive = activeId === id
          const itemProgress = items.length > 0 ? (index / (items.length - 1)) * 100 : 0
          const isPast = scrollProgress >= itemProgress
          
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={isActive ? 'active' : ''}
                data-past={isPast}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(id)
                  if (element) {
                    const offset = 100 // Account for sticky header
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                    const offsetPosition = elementPosition - offset

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    })
                    setActiveId(id)
                  }
                }}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

