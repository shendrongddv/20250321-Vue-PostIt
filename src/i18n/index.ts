import en from './locales/en'
// Impor file terjemahan
import id from './locales/id'
import { createI18n } from 'vue-i18n'

/**
 * Konfigurasi i18n untuk multilingual
 * Mendukung Bahasa Indonesia (default) dan Bahasa Inggris
 */
export const i18n = createI18n({
  legacy: false, // Gunakan Composition API
  locale: 'id', // Bahasa default
  fallbackLocale: 'id', // Fallback jika bahasa tidak tersedia
  messages: {
    id, // Bahasa Indonesia
    en, // Bahasa Inggris
  },
})

/**
 * Daftar bahasa yang didukung
 */
export const availableLocales = [
  {
    code: 'id',
    name: 'Bahasa Indonesia',
    flag: '🇮🇩',
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧',
  },
]

/**
 * Mendapatkan nama bahasa berdasarkan kode bahasa
 * @param {string} locale - Kode bahasa (id, en)
 * @returns {string} - Nama bahasa lengkap
 */
export const getLocaleName = (locale: string) => {
  const localeObj = availableLocales.find((l) => l.code === locale)
  return localeObj ? `${localeObj.flag} ${localeObj.name}` : locale
}
