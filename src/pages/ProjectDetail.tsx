import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { StoryProjectDetail } from '../components/StoryProjectDetail'

export function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [id])
  if (!project) return <main className="not-found page-shell"><p>PROJECT NOT FOUND</p><h1>We couldn't find this work.</h1><Link className="text-link" to="/work">BACK TO WORK ↗</Link></main>
  return <StoryProjectDetail project={project} />
}
