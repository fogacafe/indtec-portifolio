import { useEffect, useState, type CSSProperties } from 'react'
import { ArrowDown, ArrowUpRight, Code2, Menu, X } from 'lucide-react'
import { copy, portfolioData, type Language } from './i18n'
import TechIcon from './TechIcon'
import './language.css'
import './visual-polish.css'
import './section-accents.css'

function SectionLabel({ index, children }: { index: string; children: string }) {
  return <div className="section-label"><span>{index}</span><span>{children}</span></div>
}

function getInitialLanguage(): Language {
  const saved = localStorage.getItem('indtec-language')
  return saved === 'en' ? 'en' : 'pt'
}

const technologyAccents: Record<string, string> = {
  'C#': '154, 91, 225',
  '.NET': '81, 43, 212',
  'ASP.NET Core': '120, 76, 220',
  REST: '76, 201, 240',
  SQS: '255, 153, 0',
  SNS: '220, 74, 154',
  RabbitMQ: '255, 102, 0',
  Redis: '220, 56, 45',
  'AWS Lambda': '255, 153, 0',
  Docker: '36, 150, 237',
  EKS: '50, 108, 229',
  CloudFormation: '139, 184, 46',
  'SQL Server': '204, 41, 39',
  PostgreSQL: '51, 103, 145',
  DynamoDB: '64, 126, 201',
  Datadog: '99, 44, 166',
  FIX: '93, 225, 190',
  WCF: '132, 99, 222',
  SignalR: '116, 72, 187',
  SAP: '0, 157, 224',
  Architecture: '93, 225, 190',
  'Code Review': '86, 157, 255',
  Mentoring: '177, 111, 255',
  'Incident Response': '255, 102, 92',
}

function technologyStyle(technology: string) {
  const accent = technologyAccents[technology] ?? '140, 150, 160'
  return { '--tech-accent': accent } as CSSProperties
}

function AccentTitle({ children, accent }: { children: string; accent: string }) {
  const position = children.toLowerCase().indexOf(accent.toLowerCase())
  if (position < 0) return <>{children}</>

  return <>{children.slice(0, position)}<span className="text-accent">{children.slice(position, position + accent.length)}</span>{children.slice(position + accent.length)}</>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const t = copy[language]
  const data = portfolioData[language]

  useEffect(() => {
    localStorage.setItem('indtec-language', language)
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  const changeLanguage = (next: Language) => {
    setLanguage(next)
    setMenuOpen(false)
  }

  const heroAccent = language === 'pt' ? 'confiável' : 'reliable'
  const systemsAccent = language === 'pt' ? 'problema real' : 'real problem'

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Indtec home"><span className="brand-mark">I</span><span>INDTEC</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">{t.nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Language selector"><button className={language === 'pt' ? 'is-active' : ''} onClick={() => changeLanguage('pt')}>PT</button><span>/</span><button className={language === 'en' ? 'is-active' : ''} onClick={() => changeLanguage('en')}>EN</button></div>
          <div className="header-meta"><span className="status-dot" /><span>{t.status}</span></div>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
      </header>

      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><div className="mobile-language"><button className={language === 'pt' ? 'is-active' : ''} onClick={() => changeLanguage('pt')}>PT</button><span>/</span><button className={language === 'en' ? 'is-active' : ''} onClick={() => changeLanguage('en')}>EN</button></div>{t.nav.map(([label, href], index) => <a href={href} key={href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</a>)}</nav>}

      <main id="top">
        <section className="hero" id="profile"><div className="hero-grid" aria-hidden="true" /><div className="hero-kicker"><span>{t.heroKicker}</span><span>BR / 2026</span></div><div className="hero-copy"><p className="mono eyebrow">{t.heroEyebrow}</p><h1><AccentTitle accent={heroAccent}>{t.heroTitle}</AccentTitle><span>{t.heroTitleMuted}</span></h1><p className="hero-description">{t.heroDescription}</p></div><div className="hero-footer"><div className="hero-stack mono"><span>.NET</span><i /><span>AWS</span><i /><span>DISTRIBUTED SYSTEMS</span></div><a className="explore-link" href="#experience">{t.explore} <ArrowDown size={16} /></a></div></section>

        <section className="section about-section"><SectionLabel index="00 / PROFILE">{t.profileLabel}</SectionLabel><div className="statement-grid"><p className="statement-lead">{t.profileLead}</p><div className="statement-copy"><p>{t.profileP1}</p><p>{t.profileP2}</p></div></div></section>

        <section className="section experience-section" id="experience"><SectionLabel index="01 / EXPERIENCE">{t.experienceLabel}</SectionLabel><div className="experience-list">{data.experience.map((item) => <article className="experience-row" key={item.index}><div className="experience-index mono">{item.index}</div><div className="experience-body"><p className="mono eyebrow">{item.eyebrow}</p><h2>{item.title}</h2><p>{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

        <section className="section systems-section" id="systems"><SectionLabel index="02 / SYSTEMS">{t.systemsLabel}</SectionLabel><div className="systems-intro"><h2><AccentTitle accent={systemsAccent}>{t.systemsTitle}</AccentTitle></h2><p>{t.systemsDescription}</p></div><div className="capability-grid">{data.capabilities.map((capability, index) => <article className={`capability-card capability-card--${index + 1}`} key={capability.id}><div className="card-top mono"><span>{capability.id}</span><span>{t.active}</span></div><TechIcon id={capability.id} /><h3>{capability.title}</h3><p>{capability.description}</p><div className="technology-list mono">{capability.technologies.map((technology) => <span className="technology-pill" style={technologyStyle(technology)} key={technology}>{technology}</span>)}</div></article>)}</div></section>

        <section className="section projects-section" id="projects"><SectionLabel index="03 / MISSIONS">{t.projectsLabel}</SectionLabel><div className="projects-heading"><h2>{t.projectsTitle.split('\n').map((line, index) => <span className={`title-line ${index === 1 ? 'text-accent' : ''}`} key={line}>{line}{index === 0 && <br />}</span>)}</h2><p>{t.projectsDescription}</p></div><div className="project-list">{data.projects.map((project) => <article className="project-row" key={project.mission}><div className="project-mission mono"><span>{project.mission}</span><span className="project-status">{project.status}</span></div><div className="project-main"><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div><div className="project-action" aria-hidden="true"><ArrowUpRight size={22} /></div></article>)}</div></section>

        <section className="section principles-section"><SectionLabel index="04 / PRINCIPLES">{t.principlesLabel}</SectionLabel><div className="principles-grid">{data.principles.map(([index, title, text]) => <article className="principle" key={index}><span className="mono">{index}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="contact-section" id="contact"><p className="mono eyebrow">{t.contactEyebrow}</p><h2>{t.contactTitle}</h2><p>{t.contactDescription}</p><a className="primary-link" href="https://github.com/fogacafe" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub / fogacafe <ArrowUpRight size={17} /></a></section>
      </main>

      <footer className="site-footer mono"><span>{t.footer}</span><span>SYS.STATUS / NOMINAL</span><span>© 2026</span></footer>
    </div>
  )
}
