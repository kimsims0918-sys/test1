import { site } from '../data/site'
import { Link } from 'react-router-dom'

export function About() {
  return (
    <section className="about section-space page-shell" id="about" aria-labelledby="about-title">
      <div className="about-image"><img src={site.aboutImage} alt="REVINCI 스튜디오 모노그램" loading="lazy" /><span>THE STUDIO BEHIND THE WORK</span></div>
      <div className="about-copy"><span className="section-kicker">03 / ABOUT</span><h1 id="about-title">A visual language<br />for every story<span className="heading-period">.</span></h1><div className="about-text">{site.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><Link className="text-link" to="/contact">START A PROJECT <span aria-hidden="true">↗</span></Link></div>
    </section>
  )
}
