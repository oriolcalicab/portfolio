import { createContext, useContext } from 'react'
import type { Language } from '../i18n'
import type { Translations } from '../i18n/en'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
