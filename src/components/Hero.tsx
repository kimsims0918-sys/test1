import { useRef, useState, type PointerEvent } from 'react'
import { site } from '../data/site'

export function Hero() {
  const artRef = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const hasColorImage = Boolean(site.heroColorImage)

  const moveReveal = (event: PointerEvent<HTMLElement>) => {
    if (!hasColorImage || !artRef.current) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    artRef.current.style.setProperty('--reveal-x', `${x}%`)
    artRef.current.style.setProperty('--reveal-y', `${y}%`)
  }

  return (
    <section
      className="hero-stage hero-stage--feature"
      aria-labelledby="hero-title"
      onPointerEnter={hasColorImage ? () => setIsRevealed(true) : undefined}
      onPointerMove={hasColorImage ? moveReveal : undefined}
      onPointerLeave={hasColorImage ? () => setIsRevealed(false) : undefined}
    >
      <div className={`hero-feature-art${isRevealed ? ' is-revealed' : ''}`} ref={artRef} aria-hidden="true">
        <img className="hero-feature-image" src={site.heroImage} alt="" fetchPriority="high" />
        {hasColorImage && <img className="hero-feature-color" src={site.heroColorImage} alt="" />}
      </div>

      <div className="hero-stage-inner page-shell">
        <div className="hero-stage-copy">
          <h1 id="hero-title"><img className="hero-stage-logo" src={site.headerLogo} alt="Revinci Studio" /></h1>
          <span className="hero-stage-overline">{site.discipline}</span>
        </div>
        <div className="hero-stage-description">
          {site.heroDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  )
}
