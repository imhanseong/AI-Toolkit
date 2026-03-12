import CategoryPage from '@/components/CategoryPage'

/**
 * Coding 카테고리에 속하는 AI 도구들을 모아 보여주는 서브 페이지입니다.
 * 공통 CategoryPage 컴포넌트에 디자인 관련 메타데이터를 Props로 전달해 렌더링합니다.
 */
function CodingPage() {
  return (
    <CategoryPage
      category="coding"
      title="Coding AI 도구"
      description="코드 자동완성, 리뷰, 디버깅을 도와주는 개발자를 위한 AI 도구 모음입니다."
    />
  )
}

export default CodingPage
