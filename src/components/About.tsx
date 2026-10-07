import { site } from '../data/site'

export function About() {
  return (
    <section className="about section-space page-shell" id="about" aria-labelledby="about-title">
      <div className="about-intro">
        <h1 id="about-title">ABOUT</h1>
      </div>
      <div className="about-copy">
        <div className="about-text">
          <div className="about-language-block" lang="en">
            {site.aboutEnglish.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="about-language-block" lang="ko">
            {site.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}
