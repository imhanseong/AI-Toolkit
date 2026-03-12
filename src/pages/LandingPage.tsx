// src/pages/LandingPage.tsx
// 랜딩페이지 뷰 조립 및 추천/전체 도구 목록 렌더링
import Hero from "../components/layout/landing/Hero";
import ToolCard from "../components/common/ToolCard";
import { TOOLS } from "../data/tools";
import styles from './LandingPage.module.css';

export default function LandingPage() {
    const recommendedTools = TOOLS.filter(tool => tool.isFeatured);

    return (
      <main className={styles.container}>
        <Hero/>

        {/* 추천 섹션 데이터 매핑 */}
        <section className={styles.section}>
          <h2>추천 AI 도구</h2>
          <div className={styles.grid}>
            {recommendedTools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </section>

        {/* 전체 리뷰 리스트 데이터 매핑 */}
        <section className={styles.section}>
          <h2>전체 AI 도구</h2>
          <div className={styles.grid}>
            {TOOLS.map(tool => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </section>
      </main>
    )
}