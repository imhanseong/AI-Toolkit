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
function Header({ isDark, onToggleDark }: HeaderProps) {
  return (
    <header className={styles.header} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* 로고 */}
        <NavLink to="/" className={styles.logo} aria-label="AI Toolkit 홈으로 이동">
          <span className={styles.logoIcon}>AI</span>
          <span className={styles.logoText}>Toolkit</span>
        </NavLink>

        {/* 네비게이션 */}
        <nav aria-label="주요 네비게이션">
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

        {/* 다크모드 토글 */}
        <button
          className={styles.themeToggle}
          onClick={onToggleDark}
          aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
          aria-pressed={isDark}
        >
          {isDark ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  )
}

export default Header
