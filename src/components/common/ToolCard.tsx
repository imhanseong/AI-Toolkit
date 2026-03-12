// src/components/common/ToolCard.tsx
// 캡슐화된 뷰어용 컴포넌트 및 CSS Module 적용
import styles from './ToolCard.module.css';
import { AiTool } from '../../types/tool';

// 단일 AI 도구 데이터를 화면에 렌더링하는 Card 컴포넌트
export default function ToolCard({ name, description, category, url }: AiTool) {
    return (
        <div className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <span className={styles.categoryBadge}>{category}</span>
            <a href={url} target="_blank" rel="noreferrer" className={styles.linkButton}>방문하기</a>
        </div>
    )
}