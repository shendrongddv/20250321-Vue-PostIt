<script setup lang="ts">
import EmptyState from '@/components/EmptyState.vue'
import PostItem from '@/components/PostItem.vue'
import { POST_FILTER_MODES } from '@/lib/constants'
import { usePostsStore } from '@/stores/posts'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

/**
 * Mendapatkan router untuk navigasi
 */
const router = useRouter()

/**
 * Mendapatkan store posts untuk mengakses daftar post
 */
const postsStore = usePostsStore()

/**
 * State untuk filter tampilan post (semua atau yang disimpan)
 * Nilai default: 'all' untuk menampilkan semua post
 */
const postFilter = ref(POST_FILTER_MODES.ALL)

/**
 * Computed untuk mengecek apakah tidak ada post yang tersedia untuk ditampilkan
 */
const noPostsAvailable = computed(() => {
  return postFilter.value === POST_FILTER_MODES.ALL
    ? postsStore.sorted.length === 0
    : postsStore.saved.length === 0
})

/**
 * Navigasi ke halaman pembuatan post
 */
const navigateToCreate = () => {
  router.push({ name: 'post-create' })
}
</script>

<template>
  <div>
    <!-- Header dengan judul dan filter -->
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
      <!-- Judul halaman yang dinamis sesuai filter -->
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
        {{ postFilter === POST_FILTER_MODES.ALL ? 'Semua Post' : 'Post Tersimpan' }}
      </h1>

      <!-- Filter dan tombol -->
      <div class="flex gap-2">
        <!-- Tombol tab filter -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-1 border border-gray-200 dark:border-gray-700"
        >
          <button
            @click="postFilter = POST_FILTER_MODES.ALL"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-md transition-colors',
              postFilter === POST_FILTER_MODES.ALL
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
            ]"
          >
            Semua
          </button>
          <button
            @click="postFilter = POST_FILTER_MODES.SAVED"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-md transition-colors',
              postFilter === POST_FILTER_MODES.SAVED
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
            ]"
          >
            Tersimpan
          </button>
        </div>

        <!-- Tombol buat post baru (tampilan mobile) -->
        <button
          @click="navigateToCreate"
          class="sm:hidden bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 rounded-lg py-2 transition-colors shadow-sm"
        >
          + Post
        </button>
      </div>
    </div>

    <!-- Menampilkan pesan kosong jika tidak ada post -->
    <div v-if="noPostsAvailable" class="my-16">
      <EmptyState
        :message="
          postFilter === POST_FILTER_MODES.ALL
            ? 'Belum ada post yang dibuat'
            : 'Belum ada post yang disimpan'
        "
        action="Buat Post Baru"
        @action="navigateToCreate"
      />
    </div>

    <!-- Menampilkan semua post jika filter = 'all' -->
    <div
      v-else-if="postFilter === POST_FILTER_MODES.ALL"
      class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div v-for="post in postsStore.sorted" :key="post.id" class="h-full">
        <PostItem :post="post" />
      </div>
    </div>

    <!-- Menampilkan post yang disimpan jika filter = 'saved' -->
    <div v-else class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="post in postsStore.saved" :key="post.id" class="h-full">
        <PostItem :post="post" />
      </div>
    </div>
  </div>
</template>
