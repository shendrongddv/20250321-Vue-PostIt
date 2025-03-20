import App from './App.vue'
import './assets/main.css'
import { i18n, availableLocales } from './i18n'
import router from './router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

// Memeriksa preferensi bahasa yang disimpan di localStorage
const savedLocale = localStorage.getItem('locale')
if (savedLocale && availableLocales.some((locale) => locale.code === savedLocale)) {
  i18n.global.locale.value = savedLocale as 'id' | 'en'
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
