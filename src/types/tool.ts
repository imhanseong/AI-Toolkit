// 공통 AI 툴 데이터 타입 정의
export type Category = 'writing' | 'design' | 'coding' | 'video'

export interface AiTool {
  id: string
  name: string
  description: string    // 한 줄 설명
  category: Category
  tags: string[]
  url: string
  isFeatured?: boolean   // 추천 섹션 표시 여부
}
