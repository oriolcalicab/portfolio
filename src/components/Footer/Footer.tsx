import { useLanguage } from '../../context/useLanguage'
import { profile } from '../../data/profile'
import styles from './Footer.module.scss'

const year = new Date().getFullYear()

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className={styles.footer}>
      <p>
        &copy; {year} {profile.name} &middot; {t.footer.madeWith}
      </p>
    </footer>
  )
}

export default Footer
