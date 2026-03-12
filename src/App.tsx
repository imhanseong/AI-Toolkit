import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import LandingPage from '@/pages/LandingPage'
import WritingPage from '@/pages/WritingPage'
import DesignPage from '@/pages/DesignPage'
import CodingPage from '@/pages/CodingPage'
import VideoPage from '@/pages/VideoPage'

/**
 * React Router 기반의 전역 라우팅을 담당하는 최상위 컴포넌트입니다.
 * 공통 Layout 내부에 각각의 서브 페이지(Landing, Writing 등)를 렌더링하도록 라우트를 중첩 구성했습니다.
 * 잘못된 경로 접근 시 Landing 페이지로 자동 리다이렉트합니다.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="writing" element={<WritingPage />} />
          <Route path="design" element={<DesignPage />} />
          <Route path="coding" element={<CodingPage />} />
          <Route path="video" element={<VideoPage />} />
          {/* 잘못된 경로는 Landing으로 리다이렉트 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
