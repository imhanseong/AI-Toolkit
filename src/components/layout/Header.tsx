import { useState } from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/writing', label: 'Writing' },
  { to: '/design', label: 'Design' },
  { to: '/coding', label: 'Coding' },
  { to: '/video', label: 'Video' },
]

interface HeaderProps {
  /** 다크모드 여부 */
  isDark: boolean
  /** 다크모드 토글 핸들러 */
  onToggleDark: () => void
}

// 사이트 공통 헤더: 로고, 네비게이션, 다크모드 토글
// 4주차: 모바일 환경에서 햄버거 메뉴 토글 기능 추가
function Header({ isDark, onToggleDark }: HeaderProps) {
  // 모바일 메뉴 열림/닫힘 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 메뉴 항목 클릭 시 메뉴 닫기
  function handleNavClick() {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* 로고 */}
        <NavLink to="/" className={styles.logo} aria-label="AI Toolkit 홈으로 이동">
          <span className={styles.logoIcon}>AI</span>
          <span className={styles.logoText}>Toolkit</span>
        </NavLink>

        {/* 데스크톱 네비게이션 */}
        <nav aria-label="주요 네비게이션" className={styles.desktopNav}>
          <ul className={styles.navList} role="list">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* 우측 액션 버튼 그룹 */}
        <div className={styles.actions}>
          {/* 다크모드 토글 */}
          <button
            className={styles.themeToggle}
            onClick={onToggleDark}
            aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
            aria-pressed={isDark}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* 모바일 햄버거 버튼 */}
          <button
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.bar} ${isMenuOpen ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${isMenuOpen ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${isMenuOpen ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className={styles.mobileMenu}
          aria-label="모바일 네비게이션"
        >
          <ul className={styles.mobileNavList} role="list">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `${styles.mobileNavLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                  onClick={handleNavClick}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
