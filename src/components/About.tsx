import { site } from '../data/site'

export function About() {
  return (
    <section className="about section-space page-shell" id="about" aria-labelledby="about-title">
      <div className="about-image"><img src={site.aboutImage} alt="REVINCI 작가 소개 이미지 자리" loading="lazy" /><span>THE PERSON BEHIND THE WORK</span></div>
      <div className="about-copy"><span className="section-kicker">03 / ABOUT</span><h2 id="about-title">A visual language<br />for every story<span className="heading-period">.</span></h2><div className="about-text">{site.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><a className="text-link" href="#contact">START A PROJECT <span aria-hidden="true">↗</span></a></div>
    </section>
  )
}
