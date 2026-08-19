import { useEffect } from 'react'

export default function RevealController() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '.section-label, .statement-grid, .experience-row, .systems-intro, .capability-card, .projects-heading, .project-row, .principle, .contact-section > *',
    )

    targets.forEach((target) => target.classList.add('reveal-target'))

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px' },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return null
}
