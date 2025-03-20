<script setup lang="ts">
import { Info, Heart, Github, Mail } from 'lucide-vue-next'
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div class="mb-8 flex items-center gap-3">
      <Info class="h-6 w-6 text-indigo-600" />
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Tentang Aplikasi</h1>
    </div>

    <!-- Card utama dengan informasi tentang aplikasi -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div class="p-6 space-y-6">
        <!-- Deskripsi aplikasi -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
            Post.it - Aplikasi CRUD Post
          </h2>

          <p class="text-gray-600 dark:text-gray-300">
            Post.it adalah aplikasi manajemen post sederhana yang dibangun dengan Vue 3, TypeScript,
            dan Tailwind CSS. Aplikasi ini memungkinkan pengguna untuk membuat, membaca, mengedit,
            dan menghapus post, serta menyimpan post favorit.
          </p>

          <div class="space-y-2">
            <h3 class="text-lg font-medium text-gray-800 dark:text-white">Fitur Utama:</h3>
            <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Melihat semua post dengan tata letak responsif</li>
              <li>Filter tampilan post (semua atau yang disimpan)</li>
              <li>Menambahkan post baru dengan formulir validasi</li>
              <li>Mengedit post yang sudah ada</li>
              <li>Menghapus post yang tidak diperlukan</li>
              <li>Menyimpan post favorit untuk akses mudah</li>
              <li>Tampilan responsif untuk desktop dan mobile</li>
              <li>Dukungan mode tema gelap (dark mode)</li>
            </ul>
          </div>
        </div>

        <!-- Teknologi yang digunakan -->
        <div class="space-y-2">
          <h3 class="text-lg font-medium text-gray-800 dark:text-white">Teknologi:</h3>
          <div class="flex flex-wrap gap-2">
            <span
              class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm"
              >Vue 3</span
            >
            <span
              class="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
              >TypeScript</span
            >
            <span
              class="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm"
              >Pinia</span
            >
            <span
              class="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm"
              >Vue Router</span
            >
            <span
              class="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full text-sm"
              >Tailwind CSS</span
            >
            <span
              class="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm"
              >Vite</span
            >
          </div>
        </div>

        <!-- Kredit dan kontak -->
        <div
          class="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div class="flex items-center text-gray-600 dark:text-gray-400">
            <Heart class="h-4 w-4 text-red-500 mr-2" />
            <p>Dibuat dengan cinta untuk demonstrasi Vue.js dan TypeScript</p>
          </div>

          <div class="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Github class="h-4 w-4" />
              <span>Github</span>
            </a>
            <a
              href="mailto:info@example.com"
              class="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Mail class="h-4 w-4" />
              <span>Kontak</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
