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
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const sections = items.map((item) => {
      const id = item.href.replace('#', '')
      return { id, element: document.getElementById(id) }
    }).filter((item) => item.element !== null) as Array<{ id: string; element: HTMLElement }>

    if (sections.length === 0) return

    // Calculate progress based on scroll position through all sections
    const calculateProgress = () => {
      const scrollPosition = window.scrollY + 120
      const firstSection = sections[0].element
      const lastSection = sections[sections.length - 1].element
      
      if (firstSection && lastSection) {
        const startPosition = firstSection.getBoundingClientRect().top + window.scrollY
        const endPosition = lastSection.getBoundingClientRect().top + window.scrollY + lastSection.offsetHeight
        const totalDistance = endPosition - startPosition
        const scrolledDistance = Math.max(0, scrollPosition - startPosition)
        
        const calculatedProgress = totalDistance > 0 
          ? Math.min(100, (scrolledDistance / totalDistance) * 100)
          : 0
        
        setProgress(calculatedProgress)
      }
    }

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
      
      // Always update progress
      calculateProgress()
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all section elements
    sections.forEach(({ element }) => {
      observer.observe(element)
    })

    // Throttled scroll handler for active section and progress updates
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          findActiveSection()
          calculateProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial updates with a small delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      findActiveSection()
      calculateProgress()
    }, 100)

    return () => {
      clearTimeout(initTimeout)
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items])

  // Calculate progress bar position based on scroll progress through sections
  const getProgressBarHeight = () => {
    return progress
  }

  const progressBarHeight = getProgressBarHeight()

  return (
    <nav
      className="table-of-contents"
      style={{
        position: 'sticky',
        top: '2rem',
        maxHeight: 'calc(100vh - 4rem)',
        overflowY: 'auto',
        alignSelf: 'flex-start'
      }}
    >
      <h3>On this page</h3>
      <div className="toc-progress-container">
        <div
          className="toc-progress-bar"
          style={{ height: `${progressBarHeight}%` }}
        />
      </div>
      <ul>
        {items.map((item) => {
          const id = item.href.replace('#', '')
          const isActive = activeId === id

          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={isActive ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  console.log('Clicking TOC link:', id)
                  const element = document.getElementById(id)
                  console.log('Found element:', element)
                  if (element) {
                    const offset = 100
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY
                    const offsetPosition = elementPosition - offset
                    console.log('Scrolling to:', offsetPosition)

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    })
                    setActiveId(id)
                  } else {
                    console.error('Element not found with ID:', id)
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
