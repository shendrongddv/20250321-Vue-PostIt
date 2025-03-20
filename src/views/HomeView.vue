<script setup lang="ts">
import EmptyState from '@/components/EmptyState.vue'
import PostItem from '@/components/PostItem.vue'
import { usePostsStore } from '@/stores/posts'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Menggunakan fungsi useI18n untuk terjemahan
 */
const { t } = useI18n()

/**
 * State untuk filter: semua post atau post yang disimpan
 */
const showSaved = ref(false)

/**
 * Mendapatkan data post dari store
 */
const postsStore = usePostsStore()

/**
 * Mengembalikan post berdasarkan filter yang aktif
 * Jika showSaved = true, tampilkan post yang disimpan
 * Jika showSaved = false, tampilkan semua post
 */
const posts = computed(() => {
  if (showSaved.value) {
    return postsStore.saved
  }
  return postsStore.sorted
})

/**
 * Computed untuk mengecek apakah ada post yang tersedia
 * berdasarkan filter yang aktif
 */
const noPostsAvailable = computed(() => {
  if (showSaved.value) {
    return postsStore.saved.length === 0
  }
  return postsStore.sorted.length === 0
})

/**
 * Mengubah status filter post
 */
const toggleShowSaved = (value: boolean) => {
  showSaved.value = value
}
</script>

<template>
  <section>
    <!-- Header halaman dengan judul dan filter -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          {{ showSaved ? t('home.savedPosts') : t('home.allPosts') }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">
          {{ showSaved ? t('home.savedPostsDescription') : t('home.allPostsDescription') }}
        </p>
      </div>

      <div class="flex items-center gap-3">
        <!-- Toggle untuk menampilkan semua post atau post yang disimpan -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-1 border border-gray-200 dark:border-gray-700"
        >
          <button
            @click="toggleShowSaved(false)"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-md transition-colors',
              !showSaved
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
            ]"
          >
            {{ t('home.all') }}
          </button>
          <button
            @click="toggleShowSaved(true)"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-md transition-colors',
              showSaved
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
            ]"
          >
            {{ t('home.saved') }}
          </button>
        </div>

        <!-- Tombol untuk membuat post baru -->
        <RouterLink
          to="/post-create"
          class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 sm:w-auto w-full flex justify-center items-center gap-2"
        >
          <span>{{ t('home.newPost') }}</span>
        </RouterLink>
      </div>
    </div>

    <!-- Tampilkan pesan jika tidak ada post -->
    <EmptyState v-if="noPostsAvailable" :message="t('home.noPostsAvailable')" />

    <!-- Grid untuk menampilkan daftar post -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <PostItem v-for="post in posts" :key="post.id" :post="post" class="h-full" />
    </div>
  </section>
</template>
