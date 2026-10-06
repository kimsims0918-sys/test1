import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { workCategories } from '../data/workCategories'
import { PortfolioCard } from './PortfolioCard'

export function Portfolio() {
  return (
    <section className="portfolio section-space page-shell" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div><span className="section-kicker">01 / PORTFOLIO</span><h2 id="work-title">Selected Works<span className="heading-period">.</span></h2></div>
        <p>A selection of images, ideas<br />and visual stories.</p>
      </div>
      <div className="filter-row" aria-label="작품 카테고리">
        {workCategories.map((item) => <Link key={item.slug} className="filter" to={`/work/${item.slug}`}>{item.label}<span aria-hidden="true"> ↗</span></Link>)}
      </div>
      <div className="project-grid">
        {projects.map((project, index) => <PortfolioCard key={project.id} project={project} index={index} />)}
      </div>
    </section>
  )
}
