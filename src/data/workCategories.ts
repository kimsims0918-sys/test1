import type { Category, Project } from './projects'

export const workCategories: { slug: string; label: string; category: Category; description: string }[] = [
  { slug: 'illustration', label: 'Illustration', category: 'ILLUSTRATION', description: 'Stories and atmosphere, translated into images.' },
  { slug: 'vector-assets', label: 'Vector & Assets', category: 'VECTOR & ASSETS', description: 'Graphic assets shaped for use across different media.' },
  { slug: 'brand-projects', label: 'Brand Projects', category: 'BRAND PROJECTS', description: 'Visual identities, logos and packaging for brands.' },
]

export function belongsToCategory(project: Project, category: Category) {
  return project.category === category || project.alsoIn === category
}
