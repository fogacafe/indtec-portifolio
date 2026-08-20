import type { ReactElement } from 'react'

type TechIconProps = {
  id: string
}

const iconPaths: Record<string, ReactElement> = {
  'SYS.01': <><path d="M8 8 4 12l4 4"/><path d="m16 8 4 4-4 4"/><path d="m14 5-4 14"/></>,
  'SYS.02': <><circle cx="6" cy="7" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><path d="m7.7 8.1 2.8 6.1M16.3 8.1l-2.8 6.1M8 7h8"/></>,
  'SYS.03': <><path d="M7 17h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.6 1.5A3.5 3.5 0 0 0 7 17Z"/><path d="m10 13 2-2 2 2M12 11v7"/></>,
  'SYS.04': <><ellipse cx="12" cy="6" rx="6" ry="3"/><path d="M6 6v6c0 1.7 2.7 3 6 3s6-1.3 6-3V6M6 12v6c0 1.7 2.7 3 6 3s6-1.3 6-3v-6"/></>,
  'SYS.05': <><path d="M7 7h7a3 3 0 0 1 3 3v1"/><path d="m14 8 3 3 3-3"/><path d="M17 17h-7a3 3 0 0 1-3-3v-1"/><path d="m10 16-3-3-3 3"/></>,
  'SYS.06': <><circle cx="12" cy="8" r="3"/><circle cx="5" cy="11" r="2"/><circle cx="19" cy="11" r="2"/><path d="M7 20c.4-3.5 2.1-5 5-5s4.6 1.5 5 5M2 19c.2-2.5 1.2-3.7 3-3.7M22 19c-.2-2.5-1.2-3.7-3-3.7"/></>,
}

export default function TechIcon({ id }: TechIconProps) {
  return (
    <span className="tech-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        {iconPaths[id] ?? iconPaths['SYS.01']}
      </svg>
    </span>
  )
}
