<script setup lang="ts">
import { useI18n } from 'vue-i18n'

/**
 * Menggunakan fungsi useI18n untuk terjemahan
 */
const { t } = useI18n()

/**
 * Props untuk komponen EmptyState
 * message: string - Pesan yang akan ditampilkan
 * action: string - Teks untuk tombol aksi (opsional)
 */
defineProps<{
  message: string
  action?: string
}>()

/**
 * Emit event untuk action click
 */
const emit = defineEmits<{
  (e: 'action'): void
}>()

/**
 * Menangani klik tombol aksi
 */
const handleActionClick = () => {
  emit('action')
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center py-12 px-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
  >
    <!-- Ikon ilustrasi -->
    <div class="text-gray-300 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    </div>

    <!-- Pesan -->
    <p class="text-gray-600 dark:text-gray-300 text-center mb-4">{{ message }}</p>

    <!-- Tombol aksi jika action prop tersedia -->
    <button
      v-if="action"
      @click="handleActionClick"
      class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors text-sm"
    >
      {{ action }}
    </button>
  </div>
</template>
