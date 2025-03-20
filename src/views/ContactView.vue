<script setup lang="ts">
import { Mail, User, MessageSquare, Send, Loader2 } from 'lucide-vue-next'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Menggunakan fungsi useI18n untuk terjemahan
 */
const { t } = useI18n()

/**
 * State untuk data form kontak
 */
const form = ref({
  name: '',
  email: '',
  message: '',
})

/**
 * State loading untuk menunjukkan proses pengiriman pesan
 */
const isSubmitting = ref(false)

/**
 * Computed property untuk validasi form
 * Form valid jika semua field terisi dan email formatnya benar
 */
const isFormValid = computed(() => {
  const { name, email, message } = form.value
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return name.trim() !== '' && emailRegex.test(email) && message.trim() !== ''
})

/**
 * Mengirim pesan ke WhatsApp dengan parameter yang sudah diformat
 */
const submitForm = async () => {
  if (!isFormValid.value) return

  isSubmitting.value = true

  try {
    // Simulasi loading
    await new Promise((resolve) => setTimeout(resolve, 800))

    const { name, email, message } = form.value

    // Format pesan untuk WhatsApp
    const whatsappMessage = `*${t('contact.whatsappMessage.header')}*%0A%0A*${t('contact.whatsappMessage.name')}:* ${encodeURIComponent(name)}%0A*${t('contact.whatsappMessage.email')}:* ${encodeURIComponent(email)}%0A%0A*${t('contact.whatsappMessage.message')}:*%0A${encodeURIComponent(message)}%0A%0A${t('contact.whatsappMessage.closing')}`

    // Buka link WhatsApp di tab baru
    window.open(`https://wa.me/6285713269167?text=${whatsappMessage}`, '_blank')

    // Reset form
    form.value = {
      name: '',
      email: '',
      message: '',
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div class="mb-8 flex items-center gap-3">
      <Mail class="h-6 w-6 text-indigo-600" />
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
        {{ t('contact.title') }}
      </h1>
    </div>

    <!-- Card utama dengan form kontak -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div class="p-6 space-y-6">
        <!-- Deskripsi kontak -->
        <div class="space-y-2">
          <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
            {{ t('contact.heading') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            {{ t('contact.description') }}
          </p>
        </div>

        <!-- Form kontak -->
        <form @submit.prevent="submitForm" class="space-y-5">
          <!-- Input nama -->
          <div class="space-y-2">
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('contact.form.nameLabel') }}
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User class="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="name"
                type="text"
                v-model="form.name"
                required
                :placeholder="t('contact.form.namePlaceholder')"
                class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent transition-colors outline-none"
                :disabled="isSubmitting"
              />
            </div>
          </div>

          <!-- Input email -->
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('contact.form.emailLabel') }}
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail class="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                v-model="form.email"
                required
                :placeholder="t('contact.form.emailPlaceholder')"
                class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent transition-colors outline-none"
                :disabled="isSubmitting"
              />
            </div>
          </div>

          <!-- Input pesan -->
          <div class="space-y-2">
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('contact.form.messageLabel') }}
            </label>
            <div class="relative">
              <div class="absolute top-3 left-3 pointer-events-none">
                <MessageSquare class="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                required
                :placeholder="t('contact.form.messagePlaceholder')"
                class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent transition-colors outline-none resize-y"
                :disabled="isSubmitting"
              ></textarea>
            </div>
          </div>

          <!-- Tombol kirim -->
          <div class="pt-2 flex justify-end">
            <button
              type="submit"
              :disabled="!isFormValid || isSubmitting"
              :class="[
                'px-5 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center min-w-[140px] transition-colors text-white',
                !isFormValid || isSubmitting
                  ? 'bg-indigo-400 dark:bg-indigo-700 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500',
              ]"
            >
              <Loader2 v-if="isSubmitting" class="h-4 w-4 mr-2 animate-spin" />
              <Send v-else class="h-4 w-4 mr-2" />
              {{ isSubmitting ? t('contact.form.sending') : t('contact.form.send') }}
            </button>
          </div>
        </form>

        <!-- Informasi kontak tambahan -->
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium text-gray-800 dark:text-white mb-3">
            {{ t('contact.info.title') }}
          </h3>
          <div class="space-y-2 text-gray-600 dark:text-gray-300">
            <p class="flex items-center gap-2">
              <Mail class="h-4 w-4 text-indigo-500" />
              <span>info@example.com</span>
            </p>
            <p>
              {{ t('contact.info.whatsapp') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
