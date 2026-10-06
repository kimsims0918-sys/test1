export type Category = 'ILLUSTRATION' | 'BRAND' | 'VECTOR & ASSET'

export interface Project {
  id: string
  title: string
  category: Category
  image: string
  year: string
  description: string
  additionalImages: string[]
}

// Replace sample titles, descriptions and image paths with real portfolio content here.
export const projects: Project[] = [
  {
    id: 'quiet-morning', title: 'Quiet Morning', category: 'ILLUSTRATION',
    image: '/images/work-01.svg', year: '2025',
    description: '조용한 아침의 공기와 작은 일상의 장면을 따뜻한 형태와 색으로 그린 일러스트레이션 시리즈입니다.',
    additionalImages: ['/images/work-01.svg', '/images/work-04.svg'],
  },
  {
    id: 'common-ground', title: 'Common Ground', category: 'BRAND',
    image: '/images/work-02.svg', year: '2025',
    description: '사람과 공간이 만나는 순간을 시각 언어로 풀어낸 브랜드 일러스트레이션 작업입니다.',
    additionalImages: ['/images/work-02.svg', '/images/work-05.svg'],
  },
  {
    id: 'shape-study', title: 'Shape Study', category: 'VECTOR & ASSET',
    image: '/images/work-03.svg', year: '2024',
    description: '다양한 화면과 인쇄물에 유연하게 적용할 수 있는 그래픽 형태와 벡터 에셋 연구입니다.',
    additionalImages: ['/images/work-03.svg', '/images/work-06.svg'],
  },
  {
    id: 'soft-season', title: 'Soft Season', category: 'ILLUSTRATION',
    image: '/images/work-04.svg', year: '2024',
    description: '계절의 질감과 움직임을 간결한 색면으로 표현한 에디토리얼 일러스트레이션입니다.',
    additionalImages: ['/images/work-04.svg', '/images/work-01.svg'],
  },
  {
    id: 'little-rituals', title: 'Little Rituals', category: 'BRAND',
    image: '/images/work-05.svg', year: '2024',
    description: '일상의 작은 의식을 브랜드의 이미지로 확장한 패키지 비주얼 콘셉트입니다.',
    additionalImages: ['/images/work-05.svg', '/images/work-02.svg'],
  },
  {
    id: 'objects-and-forms', title: 'Objects & Forms', category: 'VECTOR & ASSET',
    image: '/images/work-06.svg', year: '2023',
    description: '제품, 디지털 콘텐츠, 공간 그래픽에서 활용할 수 있는 모듈형 벡터 에셋입니다.',
    additionalImages: ['/images/work-06.svg', '/images/work-03.svg'],
  },
]
