import { useEffect } from 'react'
import type { Category } from '@/types/tool'
import { TOOLS } from '@/data/tools'
import ToolCard from '@/components/common/ToolCard'
import styles from './CategoryPage.module.css'

interface CategoryPageProps {
  category: Category
  title: string
  description: string
}

// 카테고리별 정적 FAQ 데이터
const FAQ_DATA: Record<Category, {q: string, a: string}[]> = {
  writing: [
    { q: "AI 글쓰기 도구는 한국어를 지원하나요?", a: "대부분의 주요 AI 도구(ChatGPT, Claude 등)는 한국어를 지원합니다. 다만 일부 도구는 영어에 최적화되어 있을 수 있습니다." },
    { q: "무료로 사용할 수 있는 도구가 있나요?", a: "네, 많은 AI 서비스가 제한적인 무료 플랜이나 크레딧을 제공합니다." },
    { q: "글의 저작권은 누구에게 있나요?", a: "서비스마다 약관이 다르지만 일반적으로 생성된 콘텐츠의 상업적 사용을 허용합니다." }
  ],
  design: [
    { q: "상업적 이용이 가능한가요?", a: "유료 플랜을 사용할 경우 대부분 상업적 이용이 가능합니다. 무료 플랜은 제한이 있을 수 있습니다." },
    { q: "어떤 프롬프트를 입력해야 하나요?", a: "원하는 피사체, 스타일, 조명, 구도 등을 구체적으로 묘사할수록 좋은 결과를 얻을 수 있습니다." },
    { q: "이미지 해상도는 어느 정도인가요?", a: "도구에 따라 다르지만 보통 업스케일링 기능을 통해 고해상도(4K 이상) 다운로드를 지원합니다." }
  ],
  coding: [
    { q: "초보자도 사용할 수 있나요?", a: "네, 코드 문맥을 이해하고 자동 완성해주기 때문에 초보자도 쉽게 학습하며 사용할 수 있습니다." },
    { q: "내 코드가 학습 데이터로 사용되나요?", a: "프라이버시 설정을 통해 코드 수집을 거부할 수 있는 옵션을 제공하는 서비스가 많습니다." },
    { q: "지원하는 프로그래밍 언어는 무엇인가요?", a: "Python, JavaScript, Java, C++ 등 거의 모든 주요 프로그래밍 언어를 지원합니다." }
  ],
  video: [
    { q: "영상 길이에 제한이 있나요?", a: "네, AI 영상 생성은 연산량이 많아 보통 몇 초에서 몇 분 내외로 길이에 제한이 있습니다." },
    { q: "나만의 이미지나 캐릭터를 활용할 수 있나요?", a: "일부 서비스에서 커스텀 아바타 또는 이미지 투 비디오(Image-to-Video) 기능을 지원합니다." },
    { q: "결과물 퀄리티는 어떤가요?", a: "최신 모델일수록 사실적이고 높은 화질을 보여줍니다." }
  ]
}

// 카테고리 상세 페이지 공통 레이아웃 (Writing/Design/Coding/Video 재사용)
function CategoryPage({ category, title, description }: CategoryPageProps) {
  useEffect(() => {
    document.title = `${title} AI 도구 - AI Toolkit`
  }, [title])

  const filteredTools = TOOLS.filter(tool => 
    tool.category === category || tool.additionalCategories?.includes(category)
  )
  const faqs = FAQ_DATA[category] || []

  return (
    <div className={styles.page}>
      {/* 카테고리 소개 */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.badge}>{category}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </section>

      {/* 툴 목록 */}
      <section className={styles.toolList} aria-label="AI 도구 목록">
        <div className="container">
          <div className={styles.grid}>
            {filteredTools.length > 0 ? (
              filteredTools.map(tool => (
                <ToolCard key={tool.id} {...tool} />
              ))
            ) : (
              <p className={styles.empty}>해당 카테고리에 등록된 도구가 없습니다.</p>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} aria-label="자주 묻는 질문">
        <div className="container">
          <h2 className={styles.faqTitle}>자주 묻는 질문</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <details key={idx} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{faq.q}</summary>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CategoryPage
