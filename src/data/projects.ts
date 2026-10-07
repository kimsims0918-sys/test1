export type Category = 'ILLUSTRATION' | 'VECTOR & ASSETS' | 'BRAND PROJECTS'

export interface Project {
  id: string
  title: string
  category: Category
  alsoIn?: Category
  image: string
  cardImage?: string
  year: string
  description: string
  additionalImages: string[]
  storyIntro?: string
  storySubtitle?: string
  storyTitle?: string
  storyIntroEnglish?: string
  galleryCaption?: string
  storyKorean?: string
  storyEnglish?: string
  order: number
}

// Pages CMS edits the JSON files; the UI reads them here at build time.
const projectFiles = import.meta.glob<Project>('../content/projects/*.json', {
  eager: true,
  import: 'default',
})

export const projects: Project[] = Object.values(projectFiles)
  .map((project) => ({ ...project, additionalImages: project.additionalImages ?? [] }))
  .sort((first, second) => first.order - second.order)
