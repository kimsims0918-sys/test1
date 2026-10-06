export type Category = 'ILLUSTRATION' | 'BRAND' | 'VECTOR & ASSET'

export interface Project {
  id: string
  title: string
  category: Category
  image: string
  cardImage?: string
  year: string
  description: string
  additionalImages: string[]
  order: number
}

// Pages CMS edits the JSON files; the UI reads them here at build time.
const projectFiles = import.meta.glob<Project>('../content/projects/*.json', {
  eager: true,
  import: 'default',
})

export const projects: Project[] = Object.values(projectFiles).sort(
  (first, second) => first.order - second.order,
)
