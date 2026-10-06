import { site } from '../data/site'

export function Hero() {
  return (
    <section className="hero page-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> Independent illustrator / visual designer</div>
        <h1 id="hero-title">REVINCI<span className="hero-period">.</span></h1>
        <div className="hero-bottom">
          <div>
            <p className="hero-discipline">{site.discipline}</p>
            <p className="hero-description">{site.heroLine}</p>
          </div>
          <a className="text-link hero-link" href="#work">VIEW WORK <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero-art">
        <img src={site.heroImage} alt="REVINCI 작품 화병도" />
        <span className="image-caption">SELECTED VISUAL / 화병도</span>
      </div>
    </section>
  )
}
