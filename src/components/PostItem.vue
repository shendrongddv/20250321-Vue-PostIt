<script setup lang="ts">
import { usePostsStore } from '@/stores/posts'
import type { Post } from '@/types/post'
import { Bookmark, BookmarkCheck, Pencil, Trash } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

/**
 * Menggunakan fungsi useI18n untuk terjemahan
 */
const { t } = useI18n()

/**
 * Mendapatkan router untuk navigasi ke halaman edit
 */
const router = useRouter()

/**
 * Mendapatkan store posts untuk operasi CRUD post
 */
const postStore = usePostsStore()

/**
 * Mendefinisikan prop yang diterima oleh komponen
 * post: Post - Data post yang akan ditampilkan
 */
defineProps<{ post: Post }>()

/**
 * Menavigasi ke halaman edit post
 * @param {number} id - ID post yang akan diedit
 */
const handleEdit = (id: number) => {
  router.push({ name: 'post-edit', params: { id } })
}
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 h-full flex flex-col"
  >
    <!-- Konten post -->
    <div class="p-5 flex-grow">
      <!-- Judul post -->
      <h2 class="font-bold text-xl text-gray-800 dark:text-white mb-2 line-clamp-2">
        {{ post.title }}
      </h2>

      <!-- Isi post dengan batasan tampilan (line clamp) -->
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
        {{ post.body }}
      </p>

      <!-- Info post -->
      <div class="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-auto">
        <span class="flex items-center">
          <span
            class="w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-500 dark:text-indigo-300 font-bold mr-2"
          >
            {{ post.author.charAt(0) }}
          </span>
          {{ post.author }}
        </span>
        <span class="mx-2">•</span>
        <time>{{ post.created_at }}</time>
      </div>
    </div>

    <!-- Footer dengan tombol aksi -->
    <div
      class="border-t border-gray-100 dark:border-gray-700 px-5 py-3 flex justify-between items-center bg-white dark:bg-gray-800/80"
    >
      <!-- Indikator saved -->
      <div
        v-if="post.is_saved"
        class="text-xs font-medium text-indigo-600 dark:text-indigo-400 flex items-center"
      >
        <BookmarkCheck class="h-3.5 w-3.5 mr-1" />
        {{ t('post.actions.saved') }}
      </div>
      <div v-else class="w-3.5 h-3.5"></div>

      <!-- Tombol aksi -->
      <div class="flex items-center gap-1">
        <!-- Tombol hapus post -->
        <button
          @click="postStore.deletePost(post.id)"
          class="p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-red-900/20 hover:text-red-500 dark:hover:text-red-400 transition-colors"
          :title="t('post.actions.delete')"
        >
          <Trash class="h-4 w-4" />
        </button>

        <!-- Tombol edit post -->
        <button
          @click="handleEdit(post.id)"
          class="p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-amber-100 dark:hover:bg-amber-900/20 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          :title="t('post.actions.edit')"
        >
          <Pencil class="h-4 w-4" />
        </button>

        <!-- Tombol simpan/batal simpan post -->
        <button
          @click="postStore.savePost(post.id)"
          class="p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          :title="post.is_saved ? t('post.actions.unsave') : t('post.actions.save')"
        >
          <component :is="post.is_saved ? BookmarkCheck : Bookmark" class="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</template>
