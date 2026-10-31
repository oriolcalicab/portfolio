import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { useLanguage } from '../../context/useLanguage'
import { profile } from '../../data/profile'
import styles from './Contact.module.scss'

function Contact() {
  const { t } = useLanguage()

  return (
    <section>
      <h1 className={styles.title}>{t.contact.title}</h1>
      <p className={styles.intro}>{t.contact.intro}</p>
      <ul className={styles.list}>
        <li>
          <span className={styles.label}>
            <FaEnvelope aria-hidden="true" className={styles.icon} />
            {t.contact.email}
          </span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <span className={styles.label}>
            <FaLinkedin aria-hidden="true" className={styles.icon} />
            LinkedIn
          </span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {profile.linkedin.replace('https://www.', '')}
          </a>
        </li>
        <li>
          <span className={styles.label}>
            <FaGithub aria-hidden="true" className={styles.icon} />
            GitHub
          </span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            {profile.github.replace('https://', '')}
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact
