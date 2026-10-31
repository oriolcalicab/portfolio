import { useLanguage } from '../../context/useLanguage'
import { languages } from '../../i18n'
import styles from './LanguageSelector.module.scss'

function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className={styles.selector} role="group" aria-label={t.language.label}>
      {languages.map((code) => (
        <button
          key={code}
          type="button"
          className={code === language ? `${styles.button} ${styles.active}` : styles.button}
          aria-pressed={code === language}
          onClick={() => setLanguage(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSelector
