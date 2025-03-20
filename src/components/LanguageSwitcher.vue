<script setup lang="ts">
import { availableLocales, getLocaleName } from '@/i18n'
import { Globe } from 'lucide-vue-next'
import { computed, ref, onBeforeUnmount, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Menggunakan fungsi useI18n dari vue-i18n
 */
const { locale, t } = useI18n()

/**
 * State untuk menampilkan/menyembunyikan dropdown
 */
const isOpen = ref(false)

/**
 * Mendapatkan nama bahasa saat ini dengan flag
 */
const currentLocaleName = computed(() => {
  return getLocaleName(locale.value)
})

/**
 * Mengubah bahasa yang aktif
 * @param {string} newLocale - Kode bahasa baru
 */
const changeLocale = (newLocale: string) => {
  locale.value = newLocale
  // Menyimpan preferensi bahasa ke localStorage
  localStorage.setItem('locale', newLocale)
  isOpen.value = false
}

/**
 * Toggle dropdown menu
 */
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

/**
 * Menutup dropdown saat klik di luar
 */
const closeOnClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.language-switcher')) {
    isOpen.value = false
  }
}

// Menambahkan dan menghapus event listener untuk mencegah memory leak
onMounted(() => {
  document.addEventListener('click', closeOnClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeOnClickOutside)
})
</script>

<template>
  <div class="relative language-switcher">
    <!-- Tombol pemilih bahasa -->
    <button
      type="button"
      @click="toggleDropdown"
      class="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium shadow-sm"
    >
      <Globe class="h-4 w-4" />
      <span>{{ currentLocaleName }}</span>
    </button>

    <!-- Menu dropdown pilihan bahasa -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-1 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 border border-gray-200 dark:border-gray-700 p-1 z-50"
    >
      <div class="py-1">
        <p class="px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400">
          {{ t('components.languageSwitcher.label') }}
        </p>
        <!-- Daftar bahasa yang tersedia -->
        <button
          v-for="l in availableLocales"
          :key="l.code"
          @click="changeLocale(l.code)"
          class="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          :class="{ 'bg-gray-100 dark:bg-gray-700': locale === l.code }"
        >
          <span>{{ getLocaleName(l.code) }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
