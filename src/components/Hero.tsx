import type { PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { site } from '../data/site'

const featured = projects.filter((project) => project.category === 'ILLUSTRATION').slice(0, 2)
const heroProject = projects.find((project) => project.cardImage === site.heroImage || project.image === site.heroImage)

export function Hero() {
  function moveArtwork(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === 'touch') return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--hero-shift-x', `${x * 34}px`)
    event.currentTarget.style.setProperty('--hero-shift-y', `${y * 28}px`)
    event.currentTarget.style.setProperty('--hero-shift-x-reverse', `${x * -26}px`)
    event.currentTarget.style.setProperty('--hero-shift-y-reverse', `${y * -20}px`)
  }

  function resetArtwork(event: PointerEvent<HTMLElement>) {
    for (const variable of ['--hero-shift-x', '--hero-shift-y', '--hero-shift-x-reverse', '--hero-shift-y-reverse']) {
      event.currentTarget.style.setProperty(variable, '0px')
    }
  }

  return (
    <section className="hero-stage" aria-labelledby="hero-title" onPointerMove={moveArtwork} onPointerLeave={resetArtwork}>
      <div className="hero-stage-inner page-shell">
        <p className="hero-stage-kicker">REVINCI <span aria-hidden="true">/</span> {site.discipline.toUpperCase()}</p>

        <div className="hero-artwork" aria-label="대표 작품 미리보기">
          <div className="hero-artwork-glow" style={{ backgroundImage: `url(${site.heroImage})` }} aria-hidden="true" />
          <Link className="hero-tile hero-tile-primary" to={heroProject ? `/project/${heroProject.id}` : '/#work'} aria-label={heroProject ? `${heroProject.title} 작품 보기` : '작품 목록 보기'}>
            <img src={site.heroImage} alt="REVINCI 대표 작품" />
            <span>SELECTED WORK <span aria-hidden="true">↗</span></span>
          </Link>
          {featured.map((project, index) => (
            <Link key={project.id} className={`hero-tile hero-tile-${index + 2}`} to={`/project/${project.id}`} aria-label={`${project.title} 작품 보기`}>
              <img src={project.cardImage ?? project.image} alt={project.title} />
              <span>{project.title} <span aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </div>

        <div className="hero-stage-copy">
          <h1 id="hero-title"><span>ILLUSTRATION</span><span>VISUAL DESIGN</span><span>REVINCI<span className="hero-stage-dot">.</span></span></h1>
        </div>

        <div className="hero-stage-bottom">
          <p>{site.heroLine}</p>
          <a href="#work">VIEW WORK <span aria-hidden="true">↓</span></a>
          <span className="hero-stage-hint">MOVE TO EXPLORE / SCROLL TO DISCOVER</span>
        </div>
      </div>
    </section>
  )
}
