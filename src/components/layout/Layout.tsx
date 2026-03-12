import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

/**
 * 전역 UI 레이아웃을 관리하는 컴포넌트입니다.
 * 다크모드 토글 상태를 브라우저 환경 설정과 localStorage 기준으로 초기화하고 관리하며, 
 * Header와 Footer 사이에 Outlet을 두어 자식 라우트 페이지들을 표시합니다.
 */
function Layout() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // 테마 변경 시 data-theme 속성 및 localStorage 동기화
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className={styles.root}>
      <Header isDark={isDark} onToggleDark={() => setIsDark(prev => !prev)} />
      <main className={styles.main} id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
