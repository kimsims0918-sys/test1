import type { Category, Project } from './projects'

type WorkCategory = {
  slug: string
  label: string
  category: Category
  description: string
  intro?: { title: string; korean: string[]; english: string[] }
}

export const workCategories: WorkCategory[] = [
  {
    slug: 'illustration',
    label: 'Illustration',
    category: 'ILLUSTRATION',
    description: 'Stories and atmosphere, translated into images.',
    intro: {
      title: 'Revinci Illustration',
      korean: [
        '시간을 초월한 우아함, 늘 새로운 감각으로 다가갑니다.',
        "르빈치 스튜디오는 '클래식한 아름다움'을 기반으로 일러스트에 담아내고 있습니다.",
      ],
      english: [
        'Timeless elegance, reimagined with a fresh perspective.',
        "Revinci Studio, rooted in 'Classic Mood illust,' offers distinctive designs that enhance your brand with sophistication and emotion.",
        "We delicately express your brand's identity, delivering unique visual experiences that make your story shine the brightest.",
      ],
    },
  },
  { slug: 'vector-assets', label: 'Vector & Assets', category: 'VECTOR & ASSETS', description: 'Graphic assets shaped for use across different media.' },
  { slug: 'brand-projects', label: 'Brand Projects', category: 'BRAND PROJECTS', description: 'Visual identities, logos and packaging for brands.' },
]

export function belongsToCategory(project: Project, category: Category) {
  return project.category === category || project.alsoIn === category
}
