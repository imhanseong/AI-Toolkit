import type { AiTool } from '@/types/tool'

// src/data/tools.ts
// 각 컴포넌트에서 활용할 수 있는 순수 정적 객체 데이터 배열입니다.
// 5주차: 상세 페이지 렌더링을 위한 detailedDescription, features 속성 추가

export const TOOLS: AiTool[] = [
  // ── Writing ─────────────────────────────────────────────
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: '범용 대화형 AI로 글쓰기, 요약, 번역을 모두 처리합니다.',
    category: 'writing',
    tags: ['글쓰기', '요약', '번역'],
    url: 'https://chat.openai.com',
    pricing: 'freemium',
    isFeatured: true,
    detailedDescription: 'ChatGPT는 OpenAI에서 개발한 강력한 대화형 인공지능입니다. 프롬프트를 통해 블로그 포스팅, 이메일 초안 작성 등 광범위한 텍스트 생성 작업을 순식간에 처리할 수 있으며, 코딩이나 복잡한 수학 문제 해결도 가능합니다. 전 세계적으로 가장 널리 사용되는 생성형 AI 서비스로, 다양한 확장 기능을 통해 그 활용도가 무궁무진합니다.',
    features: ['자연스러운 대화 기반 상호작용', '광범위한 주제의 텍스트 생성 및 요약', '코드 작성, 리뷰 및 디버깅', '이미지 분석 및 데이터 시각화 지원(프리미엄)']
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic이 만든 안전 중심의 AI 어시스턴트입니다. 장문 분석에 강점이 있습니다.',
    category: 'writing',
    additionalCategories: ['coding'],
    tags: ['글쓰기', '분석', '요약', '코딩'],
    url: 'https://claude.ai',
    pricing: 'freemium',
    isFeatured: false,
    detailedDescription: 'Claude는 Anthropic에서 개발한 차세대 AI 어시스턴트로, 무해성과 유용성에 초점을 맞춰 설계되었습니다. 특히 한 번에 입력할 수 있는 컨텍스트 창이 매우 커서 수백 페이지 분량의 PDF나 문서를 통째로 읽고 분석하는 데 압도적인 성능을 자랑합니다. 보다 자연스럽고 인간적인 어조를 구사합니다.',
    features: ['대용량 컨텍스트 처리(수만 단어 이상 동시 입력 가능)', '정교한 문서 분석 및 핵심 요약 추출', '안정성이 한층 강화된 안전한 답변 생성', '코딩 및 복잡한 논리 구조 추론 능력']
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: '마케팅 특화 AI 카피라이팅 도구입니다.',
    category: 'writing',
    tags: ['카피라이팅', '마케팅'],
    url: 'https://www.jasper.ai',
    pricing: 'paid',
    isFeatured: false,
    detailedDescription: 'Jasper는 비즈니스 마케터를 위해 특별히 제작된 AI 콘텐츠 생성기입니다. 브랜드의 고유한 목소리(브랜드 보이스)를 학습하여 블로그 포스트, 소셜 미디어 피드, 광고 문구, 이메일 캠페인 등을 신속하고 일관성 있게 작성해 줍니다. 템플릿 기반의 접근성으로 초보자도 쉽게 고품질 카피를 얻을 수 있습니다.',
    features: ['50개 이상의 마케팅 특화 템플릿 제공', '브랜드 보이스 설정을 통한 톤 앤 매너 통일', 'SEO 통합 최적화를 통한 검색 엔진 친화적 글쓰기', '팀 협업을 위한 다양한 워크스페이스 지원']
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: '영문법 교정 및 문체 개선을 자동으로 지원합니다.',
    category: 'writing',
    tags: ['문법교정', '영어'],
    url: 'https://www.grammarly.com',
    pricing: 'freemium',
    isFeatured: false,
    detailedDescription: 'Grammarly는 세계 최고의 영문법 및 톤 교정 AI 어시스턴트입니다. 오탈자 교정을 넘어, 문맥에 맞지 않는 단어 선택을 피하고 문장의 명확성과 흡입력을 극대화하도록 제안합니다. 브라우저 확장 프로그램, 데스크톱 앱 등 다양한 포맷으로 제공되어 어디서나 편리하게 글쓰기를 개선할 수 있습니다.',
    features: ['실시간 철자, 문법, 구두점 오류 교정', '문장의 명확성 및 전달력 개선 제안', '작성 목표에 따른 맞춤형 어조(단호함, 정중함 등) 조정', '표절 검사 기능 지원(프리미엄)']
  },

  // ── Design ──────────────────────────────────────────────
  {
    id: 'v0',
    name: 'v0',
    description: '텍스트 프롬프트로 UI 컴포넌트와 웹 디자인을 생성하는 AI 도구입니다.',
    category: 'design',
    additionalCategories: ['coding'],
    tags: ['UI생성', 'Vercel', 'React'],
    url: 'https://v0.dev',
    pricing: 'freemium',
    isFeatured: true,
    detailedDescription: 'v0는 Vercel에서 개발한 생성형 인공지능 기반의 UI 컴포넌트 생성 도구입니다. 원하는 웹 레이아웃, 스타일, 기능 등을 자연어 프롬프트로 묘사하기만 하면 즉석에서 시각적인 완성본과 그에 해당하는 React(Tailwind CSS) 소스 코드를 짜줍니다. 디자인 시안 작업뿐 아니라 실제 프로덕트 개발까지 연결되는 현존 최강의 프론트엔드/디자인 보조 도구로 평가받고 있습니다.',
    features: ['자연어 명령을 통한 UI 컴포넌트 및 페이지 즉시 생성', '복사해서 바로 쓸 수 있는 프론트엔드 코드(React, HTML, Tailwind) 제공', '채팅을 통해 특정 디자인 요소를 수정하고 점진적으로 다듬는 기능', '다른 사용자가 기여한 수많은 디자인 템플릿 탐색 기능']
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: '텍스트 프롬프트로 고품질 이미지를 생성합니다.',
    category: 'design',
    tags: ['이미지생성', '아트'],
    url: 'https://www.midjourney.com',
    pricing: 'paid',
    isFeatured: true,
    detailedDescription: 'Midjourney는 텍스트를 입력하면 경이로운 수준의 퀄리티를 지닌 디지털 아트로 변환해 주는 이미지 생성 AI입니다. Discord 환경에서 구동되며, 특유의 예술적이고 감각적인 화풍으로 디자이너와 크리에이터 사이에서 폭발적인 인기를 끌고 있습니다. 상상력을 시각화하는 데 한계를 뛰어넘는 도구입니다.',
    features: ['사실적인 사진부터 일러스트까지 폭넓은 화풍 제공', '초고해상도 이미지 업스케일링 기술', '다양한 매개변수를 이용한 정밀한 종횡비 및 스타일 제어', 'Discord 커뮤니티 기반의 실시간 프롬프트 공유']
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    description: '디자인 템플릿에 AI 기능을 결합한 올인원 도구입니다.',
    category: 'design',
    tags: ['디자인', '템플릿'],
    url: 'https://www.canva.com',
    pricing: 'freemium',
    isFeatured: false,
    detailedDescription: 'Canva AI(Magic Studio)는 누구나 디자이너가 될 수 있게 돕는 혁신적인 플랫폼 Canva에 적용된 AI 기능 모음입니다. 아이디어만 텍스트로 적으면 전체 프레젠테이션, 소셜 미디어 게시물, 전단지를 즉석에서 완성해 줍니다. 이미지 요소 자동 교체, 배경 제거 등 일상적인 디자인의 진입장벽을 허물었습니다.',
    features: ['텍스트 기반 맞춤형 템플릿 및 디자인 자동 생성 (Magic Design)', '복잡한 배경을 클릭 한 번으로 제거 및 대체', '스타일과 색상 톤을 전체 디자인에 한 번에 적용', '생성형 채우기를 통한 이미지 끊김 없는 확장']
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: '어도비 생태계에 통합된 생성형 AI 이미지 도구입니다.',
    category: 'design',
    tags: ['이미지생성', 'Adobe'],
    url: 'https://firefly.adobe.com',
    pricing: 'freemium',
    isFeatured: false,
    detailedDescription: 'Adobe Firefly는 Photoshop, Illustrator 등 세계 최고의 전문가용 디자인 도구와 완벽히 결합된 창의성 AI 모델입니다. 라이선스가 확보된 안전한 이미지만을 학습하여 상업적 목적의 사용에 있어서 저작권 문제가 없습니다. 윤리적이고 신뢰성 높은 결과물을 원하는 기업 고객에게 적합합니다.',
    features: ['저작권 문제로부터 안전한 상업용 이미지 생성', 'Photoshop 캔버스 내에서의 생성형 채우기(Generative Fill)', '텍스트 효과 및 다양한 폰트 스타일 자동 생성', '벡터 그래픽 리컬러링을 통한 쉬운 톤 앤 매너 수정']
  },
  {
    id: 'dall-e',
    name: 'DALL·E 3',
    description: 'OpenAI의 최신 이미지 생성 모델로 ChatGPT와 통합되어 있습니다.',
    category: 'design',
    tags: ['이미지생성', 'OpenAI'],
    url: 'https://openai.com/dall-e-3',
    pricing: 'freemium',
    isFeatured: false,
    detailedDescription: 'DALL·E 3는 인간의 지시를 섬세하게 파악해 상상 속 장면을 현실로 그려주는 OpenAI의 뛰어난 기술력의 결정체입니다. ChatGPT 안에 내장되어 있어 복잡한 프롬프트 엔지니어링 없이도 친숙한 자연어로 대화하며 이미지를 수정하고 발전시킬 수 있다는 점이 가장 큰 차별점입니다.',
    features: ['프롬프트의 미묘한 뉘앙스까지 충실하게 반영한 생성', '이미지 내에 정확한 철자의 텍스트 삽입 가능', 'ChatGPT와 연계된 반복 수정 및 프롬프트 최적화', '세부 요소와 물체 간의 물리적 관계의 정확한 묘사']
  },

  // ── Coding ──────────────────────────────────────────────
  {
    id: 'codex',
    name: 'OpenAI Codex',
    description: '자연어를 코드로 변환하는 강력한 AI 모델입니다.',
    category: 'coding',
    tags: ['코드생성', 'OpenAI'],
    url: 'https://openai.com/blog/openai-codex',
    pricing: 'paid',
    isFeatured: true,
    detailedDescription: 'OpenAI Codex는 자연어를 이해하고 수십 가지 프로그래밍 언어로 된 코드를 생성할 수 있는 뛰어난 능력을 지닌 AI 시스템입니다. GitHub Copilot의 기반 모델로 활용되고 있으며, 주석이나 설명적인 텍스트만으로 유효한 코드를 작성해 주고 다양한 리팩토링 제안까지 제공하여 개발자의 생산성을 한 차원 끌어올립니다.',
    features: ['자연어를 통한 자동 코드 생성', '수십 가지 프로그래밍 언어 지원', '복잡한 로직 이해 및 관련 주석 처리', '코드 리팩토링 및 오류 수정 제안']
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: '코드 자동완성과 함수 생성을 IDE에서 바로 지원합니다.',
    category: 'coding',
    tags: ['코드자동완성', 'IDE'],
    url: 'https://github.com/features/copilot',
    pricing: 'paid',
    isFeatured: true,
    detailedDescription: 'GitHub Copilot은 수십억 줄의 오픈소스 코드를 학습한 세계 최고의 AI 페어 프로그래머입니다. 사용자가 타이핑하는 코드의 흐름을 분석하여, 다음 줄 또는 전체 함수를 자동으로 제안합니다. 프로그래머의 생산성을 배가시키며 반복적인 보일러플레이트 코드를 작성하는 시간을 대폭 줄여 줍니다.',
    features: ['자연어 주석 입력만으로 기능이 완벽한 코드 제안', '다양한 프로그래밍 언어와 IDE(VS Code, IntelliJ 등) 완벽 지원', '프로젝트 컨텍스트를 이해한 안전한 오류 검출 및 수정', '정규식 작성 및 단위 테스트 자동 생성']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI 페어 프로그래밍에 최적화된 VS Code 기반 에디터입니다.',
    category: 'coding',
    tags: ['에디터', '페어프로그래밍'],
    url: 'https://cursor.sh',
    pricing: 'freemium',
    isFeatured: false,
    detailedDescription: 'Cursor는 단순한 플러그인을 넘어 편집기 자체가 AI와 협업하도록 개조된 차세대 코드 에디터입니다. VS Code를 포크(Fork)하여 제작되었기 때문에 기존 확장 프로그램을 모두 쓸 수 있으며, 코드 탐색, 터미널 오류 해결, 코드 베이스 전체를 대상으로 하는 질의응답 기능에 특화되어 있습니다.',
    features: ['IDE 내장형 채팅을 통한 코드 베이스에 대한 정확한 질문과 답변', '기존 파일을 손상시키지 않는 직관적인 인라인 코드 수정(Cmd+K)', '터미널 에러를 한 번의 클릭으로 디버깅하는 기능', '자동 문서 참조 기능을 이용한 최신 프레임워크 호환성 확보']
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: '프라이버시 중심 AI 코드 자동완성 도구입니다.',
    category: 'coding',
    tags: ['코드자동완성', '프라이버시'],
    url: 'https://www.tabnine.com',
    pricing: 'freemium',
    isFeatured: false,
    detailedDescription: 'Tabnine은 기업의 지식 재산권 보호를 최우선으로 생각하는 AI 코드 지원 도구입니다. 개발자의 코드는 결코 모델 학습에 사용되거나 외부로 유출되지 않으며 완벽하게 프라이빗한 로컬 환경이나 온프레미스에서도 구동될 수 있습니다. 안전하고 검증된 오픈소스 배포권(Permissive license) 기반으로 학습되었습니다.',
    features: ['강력한 보안 기준을 준수하는 엔터프라이즈 환경 특화', '허가된 라이선스의 코드만 학습하여 법적 리스크 원천 차단', '개발자의 코딩 패턴과 로컬 디렉터리를 학습한 초개인화', '로컬 머신 네트워크 차단 파편 지원 기능']
  },
  {
    id: 'codeium',
    name: 'Codeium',
    description: '완전 무료로 사용 가능한 AI 코드 자동완성 도구입니다.',
    category: 'coding',
    tags: ['코드자동완성', '무료'],
    url: 'https://codeium.com',
    pricing: 'free',
    isFeatured: false,
    detailedDescription: 'Codeium은 스타트업 개발자와 학생들을 위해 놀라울 정도로 빠르고 훌륭한 기능을 전면 무료로 제공하는 코드 어시스턴트입니다. 다른 상업용 도구에 뒤지지 않는 코드 자동 완성과 자체 챗 에디터 인터페이스를 지원합니다. 커뮤니티의 압도적인 지지를 받으며 빠르게 생태계를 확장하고 있습니다.',
    features: ['개인 개발자를 위한 영구적 무료 플랜', '70개 이상의 언어 및 40개 이상의 에디터 지원 파워', '초고속 레이턴시의 실시간 코드 자동완성 및 제안', '프로젝트 전반의 컨텍스트를 파악하는 지능형 검색']
  },

  // ── Video ───────────────────────────────────────────────
  {
    id: 'runway',
    name: 'Runway',
    description: '텍스트나 이미지로 고품질 영상을 생성하는 AI 도구입니다.',
    category: 'video',
    tags: ['영상생성', '편집'],
    url: 'https://runwayml.com',
    pricing: 'freemium',
    isFeatured: true,
    detailedDescription: 'Runway(Gen-2)는 텍스트 프롬프트, 한 장의 이미지, 또는 비디오를 기반으로 놀라운 시각적 디테일의 비디오 클립을 만들어냅니다. 할리우드의 VFX 팀과 인디 영화 제작자들이 혁신적인 샷을 설계하고 모션 그래픽의 초안을 다듬을 때 필수적인 웹 기반 스튜디오로 자리 잡았습니다.',
    features: ['텍스트 투 비디오(Text-to-Video) 기술 적용', '이미지의 특정 영역에만 움직임을 부여하는 모션 브러시 제어', '그린 스크린 효과 및 비디오에서 불필요한 객체 자연스럽게 삭제', '스타일 전이 필터를 사용한 영화적 미학 구현']
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI 아바타를 활용해 스크립트를 영상으로 변환합니다.',
    category: 'video',
    tags: ['아바타', '교육영상'],
    url: 'https://www.synthesia.io',
    pricing: 'paid',
    isFeatured: false,
    detailedDescription: 'Synthesia는 카메라 촬영이나 마이크 녹음 과정 없이 스크립트를 올리기만 하면, 너무나도 인간 같은 디지털 AI 아바타가 자연스러운 입모양과 제스처로 발표를 진행하는 고품질 영상을 만들어 줍니다. 사내 교육, 세일즈 프레젠테이션 등을 획기적으로 자동화했습니다.',
    features: ['120개 이상의 언어 억양과 다국어 텍스트-음성 변환(TTS)', '140명 이상의 다양한 직군 및 인종의 AI 아바타 제공', '파워포인트 템플릿과 연동 가능한 슬라이드 기반 비디오 에디터', '개인의 얼굴과 목소리를 복제하여 커스텀 아바타 생성 기능']
  },
  {
    id: 'descript',
    name: 'Descript',
    description: '텍스트 편집 방식으로 영상을 편집하는 AI 영상 편집기입니다.',
    category: 'video',
    tags: ['영상편집', '팟캐스트'],
    url: 'https://www.descript.com',
    pricing: 'freemium',
    isFeatured: false,
    detailedDescription: 'Descript는 워드 프로세서 문서를 편집하듯 영상이나 오디오를 자르고 붙이게 해주는 획기적인 편집기입니다. 업로드된 동영상을 즉시 텍스트로 자동 전사하며 문서의 잘못된 단어를 지우면 해당 부분 영상도 함께 편집됩니다. 유튜버와 팟캐스터들의 편집 시간을 기하급수적으로 줄였습니다.',
    features: ['대본을 기반으로 한 직관적 워드 프로세서 스타일 영상 편집', '"음 어", "그니까" 등 무의미한 추임새 클릭 한 번으로 제거', '녹음 스튜디오급 품질로 노이즈를 완전 제거해 주는 Studio Sound', '텍스트 수정만으로 새로운 합성 목소리(Overdub) 자동 추가']
  },
  {
    id: 'pika',
    name: 'Pika',
    description: '간단한 텍스트 프롬프트로 창의적인 단편 영상을 생성합니다.',
    category: 'video',
    tags: ['영상생성', '텍스트투비디오'],
    url: 'https://pika.art',
    pricing: 'freemium',
    isFeatured: false,
    detailedDescription: 'Pika Labs에서 론칭한 Pika는 3D 애니메이션, 시네마틱 스타일, 2D 일러스트까지 상상하는 거의 모든 스타일로 영상을 렌더링하는 AI 도구입니다. 프롬프트 창에 입력되는 애니메이션 요구사항에 정밀하게 반응하며 가장 역동적인 액션 장면을 창출하는 데 뛰어납니다.',
    features: ['화면 비와 카메라 줌/패닝 모션을 텍스트로 완벽히 정밀 제어', '입 모양 싱크 맞추기(Lip Sync) 기능 접목', '사용자 친화적인 디스코드 기반의 갤러리 및 웹 인터페이스', '기존 비디오 클립을 다른 스타일로 변형하여 재생성']
  }
]
