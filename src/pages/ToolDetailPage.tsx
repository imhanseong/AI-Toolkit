import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOOLS } from '../data/tools';
import styles from './ToolDetailPage.module.css';

// 가격 정책에 따른 한국어 라벨 매핑
const PRICING_LABEL = {
  free: '무료',
  freemium: '일부무료',
  paid: '유료',
} as const;

export default function ToolDetailPage() {
  const { id } = useParams<{ id: string }>();

  // 페이지 진입 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 주어진 ID로 도구 검색
  const tool = TOOLS.find(t => t.id === id);

  if (!tool) {
    return (
      <div className={styles.notFound}>
        <h2>도구를 찾을 수 없습니다.</h2>
        <Link to="/" className={styles.backButton}>홈으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>← 목록으로 돌아가기</Link>
      
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.categoryBadge}>{tool.category}</span>
            <span className={`${styles.pricingBadge} ${styles[tool.pricing]}`}>
              {PRICING_LABEL[tool.pricing]}
            </span>
          </div>
          <h1 className={styles.title}>{tool.name}</h1>
          <p className={styles.shortDesc}>{tool.description}</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>상세 설명</h2>
            <p className={styles.detailDesc}>
              {tool.detailedDescription || `${tool.name}에 대한 설명이 준비 중입니다.`}
            </p>
          </section>

          {tool.features && tool.features.length > 0 && (
            <section className={styles.section}>
              <h2>주요 기능</h2>
              <ul className={styles.featureList}>
                {tool.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className={styles.section}>
            <h2>관련 태그</h2>
            <div className={styles.tags}>
              {tool.tags.map(tag => (
                <span key={tag} className={styles.tag}>#{tag}</span>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.footer}>
          <a
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            className={styles.visitLink}
            aria-label={`${tool.name} 사이트로 이동`}
          >
            공식 사이트 방문하기 →
          </a>
        </div>
      </div>
    </div>
  );
}
