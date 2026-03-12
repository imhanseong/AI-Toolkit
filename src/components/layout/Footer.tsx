import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'

// 사이트 공통 푸터
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          &copy; {year} AI Toolkit. All rights reserved.
        </p>
        <nav aria-label="푸터 네비게이션">
          <ul className={styles.links} role="list">
            <li><NavLink to="/writing" className={styles.link}>Writing</NavLink></li>
            <li><NavLink to="/design" className={styles.link}>Design</NavLink></li>
            <li><NavLink to="/coding" className={styles.link}>Coding</NavLink></li>
            <li><NavLink to="/video" className={styles.link}>Video</NavLink></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
