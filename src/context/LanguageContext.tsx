import { useEffect, useState, type ReactNode } from 'react'
import { languages, translations, type Language } from '../i18n'
import { LanguageContext } from './useLanguage'

const STORAGE_KEY = 'language'

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null
    if (saved && languages.includes(saved)) return saved
  } catch {

  }
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
   
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}
