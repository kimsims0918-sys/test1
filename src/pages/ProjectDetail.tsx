import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [id])
  if (!project) return <main className="not-found page-shell"><p>PROJECT NOT FOUND</p><h1>We couldn't find this work.</h1><Link className="text-link" to="/#work">BACK TO WORK ↗</Link></main>
  return <main className="project-detail page-shell"><Link className="detail-back" to="/#work">← BACK TO WORK</Link><div className="detail-title"><span className="section-kicker">PROJECT / {project.year}</span><h1>{project.title}<span className="heading-period">.</span></h1><div><span>{project.category}</span><span>{project.year}</span></div></div><img className="detail-main-image" src={project.image} alt={`${project.title} 메인 이미지`} /><div className="detail-description"><span>ABOUT THE PROJECT</span><p>{project.description}</p></div>{project.additionalImages.length > 0 && <div className="detail-gallery">{project.additionalImages.map((image, index) => <img key={`${image}-${index}`} src={image} alt={`${project.title} 추가 이미지 ${index + 1}`} loading="lazy" />)}</div>}<div className="detail-end"><Link to="/#work">← ALL WORK</Link><Link to="/#contact">START A PROJECT ↗</Link></div></main>
}
