import { useState } from 'react'
import { projects, type Category } from '../data/projects'
import { PortfolioCard } from './PortfolioCard'

type Filter = 'ALL' | Category
const filters: Filter[] = ['ALL', 'ILLUSTRATION', 'BRAND', 'VECTOR & ASSET']

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('ALL')
  const visible = filter === 'ALL' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="portfolio section-space page-shell" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div><span className="section-kicker">01 / PORTFOLIO</span><h2 id="work-title">Selected Works<span className="heading-period">.</span></h2></div>
        <p>A selection of images, ideas<br />and visual stories.</p>
      </div>
      <div className="filter-row" role="group" aria-label="작품 카테고리 필터">
        {filters.map((item) => <button key={item} type="button" className={filter === item ? 'filter is-active' : 'filter'} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}<span className="filter-count">{item === 'ALL' ? projects.length : projects.filter((project) => project.category === item).length}</span></button>)}
      </div>
      <div className="project-grid">
        {visible.map((project) => <PortfolioCard key={project.id} project={project} index={projects.indexOf(project)} />)}
      </div>
    </section>
  )
}
