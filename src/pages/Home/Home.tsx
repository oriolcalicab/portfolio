import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/useLanguage'
import { profile } from '../../data/profile'
import styles from './Home.module.scss'

function Home() {
  const { t } = useLanguage()

  return (
    <section className={styles.hero}>
      <p className={styles.greeting}>{t.home.greeting}</p>
      <h1 className={styles.name}>{profile.name}</h1>
      <h2 className={styles.role}>{t.home.role}</h2>
      <p className={styles.about}>{t.home.about}</p>
      <Link to="/projects" className={styles.cta}>
        {t.home.cta}
      </Link>
    </section>
  )
}

export default Home
