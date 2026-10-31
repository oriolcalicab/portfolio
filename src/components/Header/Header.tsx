import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../../context/useLanguage'
import { profile } from '../../data/profile'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import styles from './Header.module.scss'

function Header() {
  const { t } = useLanguage()

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/projects', label: t.nav.projects },
    { to: '/cv', label: t.nav.cv },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          {profile.name}
        </Link>
        <nav className={styles.nav}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <LanguageSelector />
      </div>
    </header>
  )
}

export default Header
