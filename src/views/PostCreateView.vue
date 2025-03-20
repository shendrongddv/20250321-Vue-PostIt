<script setup lang="ts">
import { usePostsStore } from '@/stores/posts'
import { ArrowLeft, Loader2, Type, FileText, Send } from 'lucide-vue-next'
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

/**
 * Menggunakan fungsi useI18n untuk terjemahan
 */
const { t } = useI18n()

/**
 * Mendapatkan store posts untuk melakukan operasi penambahan post
 */
const postStore = usePostsStore()

/**
 * Mendapatkan router untuk navigasi setelah form berhasil disubmit
 */
const router = useRouter()

/**
 * State loading untuk menandakan proses penyimpanan sedang berlangsung
 */
const isSubmitting = ref(false)

/**
 * State reaktif untuk data post baru
 * Berisi judul (title) dan isi (body) post
 */
const post = reactive({
  title: '',
  body: '',
})

/**
 * Computed property untuk mengecek apakah form siap disubmit
 * @returns {boolean} - Bernilai true jika form belum lengkap
 */
const isFormInvalid = computed(() => {
  return post.title.trim() === '' || post.body.trim() === ''
})

/**
 * Kembali ke halaman utama
 */
const goBack = () => {
  router.push({ name: 'home' })
}

/**
 * Menangani submit form dan menyimpan post baru
 * Setelah post tersimpan, pengguna akan diarahkan ke halaman home
 */
const onSubmit = async () => {
  if (isFormInvalid.value || isSubmitting.value) return

  try {
    isSubmitting.value = true

    // Simulasi delay untuk menampilkan loading state
    await new Promise((resolve) => setTimeout(resolve, 800))

    postStore.addPost(post)
    router.push({ name: 'home' })
  } catch (error) {
    console.error('Error creating post:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <!-- Header form dengan tombol kembali -->
    <div class="mb-8 flex items-center gap-3">
      <button
        @click="goBack"
        class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        :title="t('post.form.goBack')"
      >
        <ArrowLeft class="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
        {{ t('post.create.title') }}
      </h1>
    </div>

    <!-- Card utama dengan form -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div class="p-6 space-y-6">
        <!-- Deskripsi form -->
        <div class="space-y-2">
          <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
            {{ t('post.create.heading') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            {{ t('post.create.description') }}
          </p>
        </div>

        <!-- Form pembuatan post baru -->
        <form @submit.prevent="onSubmit" class="space-y-5">
          <!-- Input judul post -->
          <div class="space-y-2">
            <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('post.form.titleLabel') }}
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Type class="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="title"
                type="text"
                v-model="post.title"
                required
                :placeholder="t('post.form.titlePlaceholder')"
                class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent transition-colors outline-none"
                :disabled="isSubmitting"
              />
            </div>
          </div>

          <!-- Input isi post -->
          <div class="space-y-2">
            <label for="body" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('post.form.contentLabel') }}
            </label>
            <div class="relative">
              <div class="absolute top-3 left-3 pointer-events-none">
                <FileText class="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="body"
                v-model="post.body"
                rows="8"
                required
                :placeholder="t('post.form.contentPlaceholder')"
                class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent transition-colors outline-none resize-y"
                :disabled="isSubmitting"
              ></textarea>
            </div>
          </div>

          <!-- Tombol aksi -->
          <div class="pt-2 flex justify-end gap-3">
            <!-- Tombol batal -->
            <button
              type="button"
              @click="goBack"
              class="px-5 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium text-sm transition-colors"
              :disabled="isSubmitting"
            >
              {{ t('post.form.cancel') }}
            </button>

            <!-- Tombol submit dengan loading state -->
            <button
              type="submit"
              :disabled="isFormInvalid || isSubmitting"
              :class="[
                'px-5 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center min-w-[140px] transition-colors text-white',
                isFormInvalid || isSubmitting
                  ? 'bg-indigo-400 dark:bg-indigo-700 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500',
              ]"
            >
              <Loader2 v-if="isSubmitting" class="h-4 w-4 mr-2 animate-spin" />
              <Send v-else class="h-4 w-4 mr-2" />
              {{ isSubmitting ? t('post.form.saving') : t('post.form.save') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
