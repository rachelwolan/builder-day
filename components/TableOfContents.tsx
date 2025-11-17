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
      const scrollPosition = window.scrollY + 100
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

    // Use Intersection Observer for more accurate detection
    const observerOptions = {
      rootMargin: '-100px 0px -60% 0px',
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

      // If we have a highly visible section, use it
      if (activeId && maxRatio > 0.1) {
        setActiveId(activeId)
      } else {
        // Fallback: find section closest to scroll position
        const scrollPosition = window.scrollY + 100
        let currentSection = sections[0]?.id || ''
        
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
      
      // Always update progress
      calculateProgress()
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all section elements
    sections.forEach(({ element }) => {
      observer.observe(element)
    })

    // Throttled scroll handler for progress updates
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial updates
    calculateProgress()
    
    // Set initial active section
    const scrollPosition = window.scrollY + 100
    let currentSection = sections[0]?.id || ''
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const { id, element } = sections[i]
      const elementTop = element.getBoundingClientRect().top + window.scrollY
      
      if (elementTop <= scrollPosition) {
        currentSection = id
        break
      }
    }
    
    setActiveId(currentSection)

    return () => {
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
    <aside className="toc-container">
      <nav className="table-of-contents">
        <h3>Table of Contents</h3>
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
                    const element = document.getElementById(id)
                    if (element) {
                      const offset = 100
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
    </aside>
  )
}
