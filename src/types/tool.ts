// 공통 AI 툴 데이터 타입 정의
export type Category = 'writing' | 'design' | 'coding' | 'video'

// 가격 정책 종류
export type Pricing = 'free' | 'freemium' | 'paid'

export interface AiTool {
  id: string
  name: string
  description: string    // 한 줄 설명
  category: Category
  additionalCategories?: Category[] // 다른 카테고리에도 노출되게 하려면 추가
  tags: string[]
  url: string
  pricing: Pricing       // 4주차 추가: 가격 정책 (free / freemium / paid)
  isFeatured?: boolean   // 추천 섹션 표시 여부
  detailedDescription?: string // 5주차 추가: 상세 페이지용 설명
  features?: string[]          // 5주차 추가: 주요 기능 리스트 완성
}
