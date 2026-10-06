import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export function PortfolioCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link className="project-card" to={`/project/${project.id}`} aria-label={`${project.title} 프로젝트 상세 보기`}>
      <div className="project-image"><img src={project.image} alt={`${project.title} 프로젝트 작품 이미지`} loading="lazy" /></div>
      <div className="project-meta">
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        <h3>{project.title}</h3>
        <span className="project-category">{project.category}</span>
        <span className="project-year">{project.year}</span>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </div>
    </Link>
  )
}
