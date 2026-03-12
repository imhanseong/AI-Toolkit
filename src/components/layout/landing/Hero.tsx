// src/components/layout/landing/Hero.tsx
// 랜딩 최상단 소개 섹션 컴포넌트
import styles from './Hero.module.css';

// 방문자에게 사이트의 목적을 알리고 탐색을 유도하는 히어로 배너
export default function Hero() {
  return (
    <section className={styles.hero}>
        <h1>AI 도구 모음</h1>
        <p>당신의 생산성을 극대화할 최고의 AI 도구를 만나보세요.</p>
        <button className={styles.ctaButton}>전체 도구 보기</button>
    </section>
  );
}