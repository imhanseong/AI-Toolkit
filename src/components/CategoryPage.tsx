import { useEffect } from 'react'
import type { Category } from '@/types/tool'
import styles from './CategoryPage.module.css'

interface CategoryPageProps {
  category: Category
  title: string
  description: string
}

// 카테고리 상세 페이지 공통 레이아웃 (Writing/Design/Coding/Video 재사용)
function CategoryPage({ category, title, description }: CategoryPageProps) {
  useEffect(() => {
    document.title = `${title} AI 도구 - AI Toolkit`
  }, [title])

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

      {/* 툴 목록 (2주차에서 구현) */}
      <section className={styles.toolList} aria-label="AI 도구 목록">
        <div className="container">
          <p className={styles.placeholder}>도구 카드 목록은 2주차에서 구현됩니다.</p>
        </div>
      </section>

      {/* FAQ (3주차에서 정적 데이터로 추가) */}
      <section className={styles.faq} aria-label="자주 묻는 질문">
        <div className="container">
          <h2 className={styles.faqTitle}>자주 묻는 질문</h2>
          <p className={styles.placeholder}>FAQ는 3주차에서 추가됩니다.</p>
        </div>
      </section>
    </div>
  )
}

export default CategoryPage
