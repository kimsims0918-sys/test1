import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PortfolioCard } from '../components/PortfolioCard'
import { projects } from '../data/projects'
import { belongsToCategory, workCategories } from '../data/workCategories'

export function WorkCategory() {
  const { category: slug } = useParams()
  const current = workCategories.find((item) => item.slug === slug)
  const visible = current ? projects.filter((project) => belongsToCategory(project, current.category)) : []

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [slug])

  if (!current) return <main className="page-shell not-found"><p>PAGE NOT FOUND</p><h1>작품 분류를 찾을 수 없습니다.</h1><Link className="text-link" to="/work">VIEW WORK ↗</Link></main>

  return (
    <main className={`work-page page-shell${current.intro ? ' work-page--editorial' : ''}`}>
      {current.intro ? (
        <div className="work-editorial-intro">
          <h1>{current.intro.title}</h1>
          <div className="work-editorial-intro-korean" lang="ko">
            {current.intro.korean.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="work-editorial-intro-english" lang="en">
            {current.intro.english.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      ) : (
        <div className="work-page-heading">
          <div><h1>{current.label}</h1></div>
          <p>{current.description}</p>
        </div>
      )}
      {!current.intro && <nav className="filter-row" aria-label="작품 분류">
        {workCategories.map((item) => <Link key={item.slug} className={item.slug === slug ? 'filter is-active' : 'filter'} to={`/work/${item.slug}`} aria-current={item.slug === slug ? 'page' : undefined}>{item.label}</Link>)}
      </nav>}
      {visible.length > 0 ? <div className="project-grid">{visible.map((project, index) => <PortfolioCard key={project.id} project={project} index={index} overlay={Boolean(current.intro)} />)}</div> : <div className="portfolio-empty"><p>이 분야의 작품은 준비 중입니다.</p><Link to="/work">전체 작품 보기 ↗</Link></div>}
      <Link className="work-page-back" to="/work">← ALL WORK</Link>
    </main>
  )
}
