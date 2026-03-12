import type { AiTool } from '@/types/tool'

// src/data/tools.ts
// 각 컴포넌트에서 활용할 수 있는 순수 정적 객체 데이터 배열입니다.

export interface Tool{
  id: number,
  name: string,
  desc: string,
  category: 'Writing' | 'Design' | 'Coding' | 'Video',
  url: string,
  isFeatured: boolean,
}

// 로컬 mock 데이터: 기능 테스트 및 UI 렌더링을 위해 카테고리별로 작성된 12개의 AI 툴 목록
export const TOOLS: AiTool[] = [
  // Writing
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: '범용 대화형 AI로 글쓰기, 요약, 번역을 모두 처리합니다.',
    category: 'writing',
    tags: ['글쓰기', '요약', '번역'],
    url: 'https://chat.openai.com',
    isFeatured: true,
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: '마케팅 특화 AI 카피라이팅 도구입니다.',
    category: 'writing',
    tags: ['카피라이팅', '마케팅'],
    url: 'https://www.jasper.ai',
    isFeatured: false,
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: '영문법 교정 및 문체 개선을 자동으로 지원합니다.',
    category: 'writing',
    tags: ['문법교정', '영어'],
    url: 'https://www.grammarly.com',
    isFeatured: false,
  },
  // Design
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: '텍스트 프롬프트로 고품질 이미지를 생성합니다.',
    category: 'design',
    tags: ['이미지생성', '아트'],
    url: 'https://www.midjourney.com',
    isFeatured: true,
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    description: '디자인 템플릿에 AI 기능을 결합한 올인원 도구입니다.',
    category: 'design',
    tags: ['디자인', '템플릿'],
    url: 'https://www.canva.com',
    isFeatured: false,
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: '어도비 생태계에 통합된 생성형 AI 이미지 도구입니다.',
    category: 'design',
    tags: ['이미지생성', 'Adobe'],
    url: 'https://firefly.adobe.com',
    isFeatured: false,
  },
  // Coding
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: '코드 자동완성과 함수 생성을 IDE에서 바로 지원합니다.',
    category: 'coding',
    tags: ['코드자동완성', 'IDE'],
    url: 'https://github.com/features/copilot',
    isFeatured: true,
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI 페어 프로그래밍에 최적화된 VS Code 기반 에디터입니다.',
    category: 'coding',
    tags: ['에디터', '페어프로그래밍'],
    url: 'https://cursor.sh',
    isFeatured: false,
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: '프라이버시 중심 AI 코드 자동완성 도구입니다.',
    category: 'coding',
    tags: ['코드자동완성', '프라이버시'],
    url: 'https://www.tabnine.com',
    isFeatured: false,
  },
  // Video
  {
    id: 'runway',
    name: 'Runway',
    description: '텍스트나 이미지로 고품질 영상을 생성하는 AI 도구입니다.',
    category: 'video',
    tags: ['영상생성', '편집'],
    url: 'https://runwayml.com',
    isFeatured: true,
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI 아바타를 활용해 스크립트를 영상으로 변환합니다.',
    category: 'video',
    tags: ['아바타', '교육영상'],
    url: 'https://www.synthesia.io',
    isFeatured: false,
  },
  {
    id: 'descript',
    name: 'Descript',
    description: '텍스트 편집 방식으로 영상을 편집하는 AI 영상 편집기입니다.',
    category: 'video',
    tags: ['영상편집', '팟캐스트'],
    url: 'https://www.descript.com',
    isFeatured: false,
  },
]
