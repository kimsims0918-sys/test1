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
}

// Portfolio content from the supplied REVINCI Studio archive.
// Add a new object here to publish another work. Use '—' when its year is unknown.
export const projects: Project[] = [
  {
    id: 'abundance-cats', title: '풍요를 지키는 고양이', category: 'ILLUSTRATION',
    image: '/images/projects/abundance-cats.png', cardImage: '/images/projects/abundance-cats-card.png', year: '—',
    description: 'Protecting Cats of Abundance. 한국화의 장식적인 선과 색으로 풍요를 지키는 고양이를 그린 작품입니다.',
    additionalImages: [],
  },
  {
    id: 'cloud-dragon', title: '운룡도', category: 'ILLUSTRATION',
    image: '/images/projects/cloud-dragon.png', cardImage: '/images/projects/cloud-dragon-card.png', year: '—',
    description: 'Cloud and Dragon Painting. 구름과 용을 한국화의 선과 리듬으로 표현한 일러스트레이션입니다.',
    additionalImages: [],
  },
  {
    id: 'hwabyeongdo', title: '화병도(花甁圖)', category: 'ILLUSTRATION',
    image: '/images/projects/hwabyeongdo.png', cardImage: '/images/projects/hwabyeongdo-card.png', year: '—',
    description: 'Hwabyeongdo / Traditional Korean Flower Vase Painting. 화병과 꽃을 전통 회화의 감각으로 재해석한 작품입니다.',
    additionalImages: [],
  },
  {
    id: 'venom-last-dance', title: '베놈: 라스트 댄스', category: 'ILLUSTRATION',
    image: '/images/projects/venom-last-dance.jpg', cardImage: '/images/projects/venom-last-dance-card.jpg', year: '—',
    description: 'Venom: Last Dance Illustration in Korean Traditional Art Style. 영화의 이미지를 한국화 스타일로 풀어낸 일러스트레이션입니다.',
    additionalImages: [],
  },
  {
    id: 'inside-out-2', title: 'Inside Out 2 — Korean Folk Painting', category: 'ILLUSTRATION',
    image: '/images/projects/inside-out-2.jpg', cardImage: '/images/projects/inside-out-2-card.jpg', year: '2024',
    description: 'Inside Out 2 Korean Modern Folk Painting. 캐릭터와 감정의 이야기를 현대적인 민화 스타일로 표현한 일러스트레이션입니다.',
    additionalImages: [],
  },
  {
    id: 'moonlit-garden', title: '달빛이 머무는 정원', category: 'ILLUSTRATION',
    image: '/images/projects/moonlit-garden.png', cardImage: '/images/projects/moonlit-garden-card.png', year: '—',
    description: 'The Moonlit Garden. 달빛이 비추는 정원을 흑백 드로잉으로 담아낸 작품입니다.',
    additionalImages: [],
  },
  {
    id: 'christmas-cake', title: '2024년 크리스마스 케이크', category: 'ILLUSTRATION',
    image: '/images/projects/christmas-cake.jpg', cardImage: '/images/projects/christmas-cake-card.jpg', year: '2024',
    description: '2024 Christmas Cake. 겨울 무대와 케이크를 주제로 한 섬세한 흑백 일러스트레이션입니다.',
    additionalImages: [],
  },
  {
    id: 'moana-2', title: 'Moana 2 — Korean Folk Painting', category: 'ILLUSTRATION',
    image: '/images/projects/moana-2.jpg', cardImage: '/images/projects/moana-2-card.jpg', year: '2024',
    description: 'Moana 2 Korean Modern Folk Painting. 바다와 모험의 장면을 현대적인 민화 스타일로 그린 작품입니다.',
    additionalImages: [],
  },
  {
    id: 'fleurina-flower-studio', title: 'Fleurina Flower Studio', category: 'BRAND',
    image: '/images/brand/fleurina-flower-studio.jpg', cardImage: '/images/brand/fleurina-flower-studio-card.jpg', year: '—',
    description: '건물과 꽃 장식을 하나의 문장처럼 묶어낸 Fleurina Flower Studio 로고 일러스트레이션입니다.',
    additionalImages: [],
  },
  {
    id: 'we-fhaus', title: 'We fHaus', category: 'BRAND',
    image: '/images/brand/we-fhaus.jpg', cardImage: '/images/brand/we-fhaus-card.jpg', year: '—',
    description: '장식적인 프레임과 리본, 레터링을 결합한 We fHaus 로고 그래픽입니다.',
    additionalImages: [],
  },
  {
    id: 'floralis-damour', title: "Floralis d'Amour", category: 'BRAND',
    image: '/images/brand/floralis-damour.jpg', cardImage: '/images/brand/floralis-damour-card.jpg', year: '—',
    description: '꽃의 언어와 고전적인 장식 요소를 담은 Floralis d’Amour 브랜드 로고 그래픽입니다.',
    additionalImages: [],
  },
  {
    id: 'mirabell-music-studio', title: 'Mirabell Music Studio', category: 'VECTOR & ASSET',
    image: '/images/brand/mirabell-music-studio.jpg', cardImage: '/images/brand/mirabell-music-studio-card.jpg', year: '—',
    description: '건축적 선과 장식 프레임을 결합한 Mirabell Music Studio 엠블럼 그래픽입니다.',
    additionalImages: [],
  },
]
