import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import { useLanguage } from '../../context/useLanguage'
import { projects } from '../../data/profile'
import styles from './Projects.module.scss'

function Projects() {
  const { t } = useLanguage()

  return (
    <section>
      <h1 className={styles.title}>{t.projects.title}</h1>
      <p className={styles.intro}>{t.projects.intro}</p>
      <ul className={styles.list}>
        {projects.map((project) => {
          const text = t.projects.items[project.id]
          return (
            <li key={project.id} className={styles.card}>
              <h2 className={styles.name}>{text.title}</h2>
              <p className={styles.description}>{text.description}</p>
              <ul className={styles.tech}>
                {project.tech.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              <div className={styles.links}>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" className={styles.primary}>
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                    {t.projects.visit}
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer" className={styles.secondary}>
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Projects
