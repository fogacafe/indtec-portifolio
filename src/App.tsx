import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Github, Menu, X } from 'lucide-react'
import { capabilities, experience, principles, projects } from './portfolioData'

const navItems = [
  ['Profile', '#profile'],
  ['Experience', '#experience'],
  ['Systems', '#systems'],
  ['Projects', '#projects'],
]

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span>{children}</span>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Indtec home">
          <span className="brand-mark">I</span>
          <span>INDTEC</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>

        <div className="header-meta">
          <span className="status-dot" />
          <span>SYSTEM NOMINAL</span>
        </div>

        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href], index) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
        </nav>
      )}

      <main id="top">
        <section className="hero" id="profile">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-kicker">
            <span>SOFTWARE ENGINEERING</span>
            <span>BR / 2026</span>
          </div>

          <div className="hero-copy">
            <p className="mono eyebrow">INDTEC / ENGINEERING PROFILE</p>
            <h1>
              Building reliable software
              <span>for complex systems.</span>
            </h1>
            <p className="hero-description">
              Backend-focused software engineer working across .NET, cloud and distributed systems — with a preference for simple decisions, observable software and architecture that earns its complexity.
            </p>
          </div>

          <div className="hero-footer">
            <div className="hero-stack mono">
              <span>.NET</span><i />
              <span>AWS</span><i />
              <span>DISTRIBUTED SYSTEMS</span>
            </div>
            <a className="explore-link" href="#experience">
              Explore profile <ArrowDown size={16} />
            </a>
          </div>
        </section>

        <section className="section about-section">
          <SectionLabel index="00 / PROFILE">CURRENT VECTOR</SectionLabel>
          <div className="statement-grid">
            <p className="statement-lead">I like software that has a reason behind every moving part.</p>
            <div className="statement-copy">
              <p>
                My work has been shaped by production systems where performance, reliability and operational clarity are real constraints — not architecture exercises.
              </p>
              <p>
                This portfolio connects the tools I use to the engineering challenges behind them, and to public projects where those ideas can be inspected in code.
              </p>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionLabel index="01 / EXPERIENCE">ENGINEERING CHALLENGES</SectionLabel>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.index}>
                <div className="experience-index mono">{item.index}</div>
                <div className="experience-body">
                  <p className="mono eyebrow">{item.eyebrow}</p>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section systems-section" id="systems">
          <SectionLabel index="02 / SYSTEMS">TECHNOLOGY IN CONTEXT</SectionLabel>
          <div className="systems-intro">
            <h2>Tools are more useful when attached to a problem.</h2>
            <p>Technologies listed here represent practical experience and will evolve alongside the public projects in this portfolio.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.id}>
                <div className="card-top mono">
                  <span>{capability.id}</span>
                  <span>ACTIVE</span>
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="technology-list mono">
                  {capability.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionLabel index="03 / MISSIONS">SELECTED PROJECTS</SectionLabel>
          <div className="projects-heading">
            <h2>Public systems.<br />Inspectable decisions.</h2>
            <p>The project layer is intentionally starting small. Each mission will prove a different part of the engineering profile above.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.mission}>
                <div className="project-mission mono">
                  <span>{project.mission}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <div className="project-main">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <div className="project-action" aria-hidden="true">
                  <ArrowUpRight size={22} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section principles-section">
          <SectionLabel index="04 / PRINCIPLES">OPERATING PARAMETERS</SectionLabel>
          <div className="principles-grid">
            {principles.map(([index, title, text]) => (
              <article className="principle" key={index}>
                <span className="mono">{index}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="mono eyebrow">05 / COMMUNICATION CHANNEL</p>
          <h2>Want to inspect the work?</h2>
          <p>Start with the code. The story behind it is here when you need it.</p>
          <a className="primary-link" href="https://github.com/fogacafe" target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub / fogacafe <ArrowUpRight size={17} />
          </a>
        </section>
      </main>

      <footer className="site-footer mono">
        <span>INDTEC / SOFTWARE ENGINEERING</span>
        <span>SYS.STATUS / NOMINAL</span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}
