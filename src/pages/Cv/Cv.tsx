import { useLanguage } from '../../context/useLanguage'
import { profile, skillGroups } from '../../data/profile'
import styles from './Cv.module.scss'

type CvItem = { title: string; place: string; period: string }

function CvList({ title, items }: { title: string; items: CvItem[] }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={`${item.title}-${item.period}`}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemMeta}>
              {item.place}
              {item.period && ` · ${item.period}`}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Cv() {
  const { language, t } = useLanguage()

  return (
    <>
      <div className={styles.top}>
        <h1 className={styles.title}>{t.cv.title}</h1>
        <a href={profile.cvPdf[language]} download={`CV-Oriol-Cali-${language.toUpperCase()}.pdf`}>
          {t.cv.download}
        </a>
      </div>
      <p className={styles.summary}>{t.cv.summary}</p>
      <CvList title={t.cv.experienceTitle} items={t.cv.experience} />
      <CvList title={t.cv.educationTitle} items={t.cv.education} />
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.cv.skillsTitle}</h2>
        {skillGroups.map((group) => (
          <div key={group.id} className={styles.skillGroup}>
            <h3 className={styles.itemTitle}>{t.cv.skillGroups[group.id]}</h3>
            <ul className={styles.skills}>
              {group.items.map((skill) => (
                <li key={skill} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.cv.otherTitle}</h2>
        <ul className={styles.list}>
          {t.cv.other.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Cv
