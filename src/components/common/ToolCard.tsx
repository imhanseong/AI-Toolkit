// src/components/common/ToolCard.tsx
// 캡슐화된 뷰어용 컴포넌트 및 CSS Module 적용
// 4주차: tags 표시, pricing 배지 기능 추가
import styles from './ToolCard.module.css';
import { AiTool } from '../../types/tool';

// 가격 정책에 따른 한국어 라벨 매핑
const PRICING_LABEL: Record<AiTool['pricing'], string> = {
  free: '무료',
  freemium: '일부무료',
  paid: '유료',
}

// 단일 AI 도구 데이터를 화면에 렌더링하는 Card 컴포넌트
// name, description, category, tags, pricing, url 정보를 시각적으로 표현합니다.
export default function ToolCard({ name, description, category, tags, pricing, url }: AiTool) {
    return (
        <div className={styles.card}>
            {/* 카드 상단: 카테고리 + 가격 배지 */}
            <div className={styles.meta}>
                <span className={styles.categoryBadge}>{category}</span>
                <span className={`${styles.pricingBadge} ${styles[pricing]}`}>
                    {PRICING_LABEL[pricing]}
                </span>
            </div>

            {/* 도구 이름 및 설명 */}
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.desc}>{description}</p>

            {/* 태그 목록: 도구의 주요 기능 키워드를 태그로 표시 */}
            <div className={styles.tags} aria-label="관련 태그">
                {tags.map(tag => (
                    <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
            </div>

            {/* 외부 링크 버튼 */}
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={styles.linkButton}
                aria-label={`${name} 사이트로 이동`}
            >
                방문하기 →
            </a>
        </div>
    )
}