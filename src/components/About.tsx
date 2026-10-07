import { Link } from 'react-router-dom'
import { site } from '../data/site'

export function About() {
  return (
    <section className="about section-space page-shell" id="about" aria-labelledby="about-title">
      <div className="about-intro">
        <h1 id="about-title">ABOUT</h1>
        <img className="about-monogram" src={site.aboutImage} alt="르빈치 스튜디오 모노그램" />
      </div>
      <div className="about-copy">
        <h2>{site.aboutHeading}</h2>
        <div className="about-text">
          {site.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Link className="text-link" to="/contact">START A PROJECT <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  )
}
