// src/pages/LandingPage.tsx
// 랜딩페이지 뷰 조립 및 추천/전체 도구 목록 렌더링
// 4주차: 검색어 및 카테고리/가격정책 필터 기능 추가
import { useState, useMemo } from 'react'
import Hero from '../components/layout/landing/Hero'
import ToolCard from '../components/common/ToolCard'
import { TOOLS } from '../data/tools'
import type { Category, Pricing } from '../types/tool'
import styles from './LandingPage.module.css'

// 필터 UI에 표시할 카테고리 옵션 ('' = 전체)
const CATEGORY_OPTIONS: { value: '' | Category; label: string }[] = [
  { value: '', label: '전체' },
  { value: 'writing', label: '글쓰기' },
  { value: 'design', label: '디자인' },
  { value: 'coding', label: '코딩' },
  { value: 'video', label: '영상' },
]

// 필터 UI에 표시할 가격 옵션 ('' = 전체)
const PRICING_OPTIONS: { value: '' | Pricing; label: string }[] = [
  { value: '', label: '전체' },
  { value: 'free', label: '무료' },
  { value: 'freemium', label: '일부무료' },
  { value: 'paid', label: '유료' },
]

export default function LandingPage() {
  // 검색어 상태 관리
  const [query, setQuery] = useState('')
  // 카테고리 필터 상태 ('' = 전체)
  const [selectedCategory, setSelectedCategory] = useState<'' | Category>('')
  // 가격 필터 상태 ('' = 전체)
  const [selectedPricing, setSelectedPricing] = useState<'' | Pricing>('')

  // 추천 도구: isFeatured 가 true인 항목만 표시
  const recommendedTools = TOOLS.filter(tool => tool.isFeatured)

  // 검색 및 필터 결과: 검색어·카테고리·가격정책 조건을 모두 만족하는 도구를 반환
  const filteredTools = useMemo(() => {
    const lowerQuery = query.toLowerCase()
    return TOOLS.filter(tool => {
      // 검색어 조건: 이름·설명·태그 중 하나라도 포함되면 통과
      const matchesQuery =
        !query ||
        tool.name.toLowerCase().includes(lowerQuery) ||
        tool.description.toLowerCase().includes(lowerQuery) ||
        tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))

      // 카테고리 필터 조건
      const matchesCategory = !selectedCategory || tool.category === selectedCategory

      // 가격정책 필터 조건
      const matchesPricing = !selectedPricing || tool.pricing === selectedPricing

      return matchesQuery && matchesCategory && matchesPricing
    })
  }, [query, selectedCategory, selectedPricing])

  // 활성 필터가 하나라도 있는지 여부 (초기화 버튼 표시 여부 결정)
  const hasActiveFilter = !!query || !!selectedCategory || !!selectedPricing

  // 모든 필터 초기화
  function resetFilters() {
    setQuery('')
    setSelectedCategory('')
    setSelectedPricing('')
  }

  return (
    <main className={styles.container}>
      <Hero />

      {/* 추천 AI 도구 섹션 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🌟 추천 AI 도구</h2>
        <div className={styles.grid}>
          {recommendedTools.map(tool => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </section>

      {/* 전체 AI 도구 — 검색·필터 영역 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🔍 전체 AI 도구 탐색</h2>

        {/* 검색 및 필터 컨트롤 영역 */}
        <div className={styles.controls} role="search" aria-label="AI 도구 검색 및 필터">
          {/* 검색 입력창 */}
          <input
            id="tool-search"
            type="search"
            className={styles.searchInput}
            placeholder="도구 이름, 설명, 태그로 검색..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="도구 검색"
          />

          {/* 카테고리 필터 선택 */}
          <select
            id="category-filter"
            className={styles.select}
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value as '' | Category)}
            aria-label="카테고리 필터"
          >
            {CATEGORY_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          {/* 가격정책 필터 선택 */}
          <select
            id="pricing-filter"
            className={styles.select}
            value={selectedPricing}
            onChange={e => setSelectedPricing(e.target.value as '' | Pricing)}
            aria-label="가격 정책 필터"
          >
            {PRICING_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          {/* 필터 초기화 버튼 */}
          {hasActiveFilter && (
            <button
              className={styles.resetButton}
              onClick={resetFilters}
              aria-label="검색 및 필터 초기화"
            >
              초기화
            </button>
          )}
        </div>

        {/* 검색 결과 수 표시 */}
        <p className={styles.resultCount} aria-live="polite">
          {filteredTools.length}개의 도구를 찾았습니다.
        </p>

        {/* 필터링된 도구 그리드 렌더링 */}
        <div className={styles.grid}>
          {filteredTools.length > 0 ? (
            filteredTools.map(tool => (
              <ToolCard key={tool.id} {...tool} />
            ))
          ) : (
            <p className={styles.noResult}>
              검색 결과가 없습니다. 다른 키워드나 필터를 시도해 보세요.
            </p>
          )}
        </div>
      </section>
    </main>
  )
}