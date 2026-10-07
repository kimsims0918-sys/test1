import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { workCategories } from '../data/workCategories'
import '../storyProject.css'

export function StoryProjectDetail({ project }: { project: Project }) {
  const category = workCategories.find((item) => item.category === project.category)
  const backTo = category ? `/work/${category.slug}` : '/work'

  return (
    <main className={`story-detail${project.storySubtitle ? ' story-detail--subtitled' : ''}${project.storyIntroEnglish ? ' story-detail--bilingual' : ''}`}>
      <section className="story-detail-intro" aria-labelledby="story-title">
        <h1 id="story-title">{project.storyTitle ?? project.title}</h1>
        {project.storySubtitle && <div className="story-detail-subtitle" lang="en">{project.storySubtitle}</div>}
        <p lang="ko">{project.storyIntro}</p>
        {project.storyIntroEnglish && <p className="story-detail-intro-english" lang="en">{project.storyIntroEnglish}</p>}
      </section>

      <img className="story-detail-art" src={project.image} alt={`${project.title} 전체 작품 이미지`} />

      {(project.storyKorean || project.storyEnglish) && (
        <section className="story-detail-context" aria-label="작품 이야기">
          {project.storyKorean && <p lang="ko">{project.storyKorean}</p>}
          {project.storyEnglish && <p lang="en">{project.storyEnglish}</p>}
        </section>
      )}

      {project.additionalImages.length > 0 && (
        <div className="story-detail-gallery" aria-label="작품 상세 이미지">
          {project.additionalImages.map((image, index) => (
            <img key={image} src={image} alt={`${project.title} 작품 확대 이미지 ${index + 1}`} loading="lazy" />
          ))}
        </div>
      )}

      {project.galleryCaption && <p className="story-detail-caption">{project.galleryCaption}</p>}
      <div className="story-detail-navigation">
        <Link to={backTo}>← {category?.label ?? 'ALL WORK'}</Link>
      </div>
    </main>
  )
}
