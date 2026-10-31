import { ca } from './ca'
import { en } from './en'
import { es } from './es'

export const translations = { en, ca, es }

export type Language = keyof typeof translations

export const languages = Object.keys(translations) as Language[]
