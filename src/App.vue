<script setup lang="ts">
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { Menu, X, PenSquare, Home, Info, Mail } from 'lucide-vue-next'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, RouterView, useRoute } from 'vue-router'

/**
 * Menggunakan fungsi useI18n untuk terjemahan
 */
const { t } = useI18n()

/**
 * Mendapatkan rute aktif untuk penentuan active state menu
 */
const route = useRoute()

/**
 * Computed untuk mengecek apakah rute saat ini adalah halaman beranda
 */
const isHomeActive = computed(() => {
  return route.name === 'home'
})

/**
 * Computed untuk mengecek apakah rute saat ini adalah halaman about
 */
const isAboutActive = computed(() => {
  return route.name === 'about'
})

/**
 * Computed untuk mengecek apakah rute saat ini adalah halaman kontak
 */
const isContactActive = computed(() => {
  return route.name === 'contact'
})

/**
 * Computed untuk mengecek apakah rute saat ini adalah halaman buat post
 */
const isCreatePostActive = computed(() => {
  return route.name === 'post-create'
})

/**
 * State untuk menampilkan menu mobile
 */
const mobileMenuOpen = ref(false)

/**
 * Toggle menu mobile (buka/tutup)
 */
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

/**
 * Menutup menu mobile
 */
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <!-- Header aplikasi, sticky pada bagian atas halaman -->
  <header
    class="sticky w-full top-0 left-0 z-50 shadow-sm bg-white dark:bg-gray-900 transition-colors duration-200 border-b border-gray-200 dark:border-gray-800"
  >
    <div class="max-w-7xl mx-auto px-4">
      <!-- Navigasi utama aplikasi -->
      <nav class="flex items-center justify-between h-16">
        <!-- Logo dan judul aplikasi -->
        <RouterLink to="/" class="flex items-center space-x-3 group" @click="closeMobileMenu">
          <div
            class="bg-indigo-600 group-hover:bg-indigo-700 text-white p-2 rounded-lg shadow-sm transition-colors"
          >
            <PenSquare class="h-5 w-5" />
          </div>
          <h1
            class="text-xl font-bold text-gray-800 dark:text-white hidden sm:block group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
          >
            Post.it
          </h1>
        </RouterLink>

        <!-- Menu navigasi desktop -->
        <div class="hidden md:flex items-center space-x-1">
          <!-- Link navigasi ke halaman beranda -->
          <RouterLink
            to="/"
            class="px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
            :class="{
              'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/20':
                isHomeActive,
            }"
            @click="closeMobileMenu"
          >
            <Home class="h-4 w-4" />
            <span>{{ t('navigation.home') }}</span>
          </RouterLink>

          <!-- Link navigasi ke halaman about -->
          <RouterLink
            to="/about"
            class="px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
            :class="{
              'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/20':
                isAboutActive,
            }"
            @click="closeMobileMenu"
          >
            <Info class="h-4 w-4" />
            <span>{{ t('navigation.about') }}</span>
          </RouterLink>

          <!-- Link navigasi ke halaman kontak -->
          <RouterLink
            to="/contact"
            class="px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
            :class="{
              'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/20':
                isContactActive,
            }"
            @click="closeMobileMenu"
          >
            <Mail class="h-4 w-4" />
            <span>{{ t('navigation.contact') }}</span>
          </RouterLink>

          <!-- Pemilih bahasa -->
          <div class="ml-2">
            <LanguageSwitcher />
          </div>

          <!-- Link navigasi ke halaman pembuatan post baru -->
          <RouterLink
            to="/post-create"
            class="px-4 py-2 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2"
            :class="
              isCreatePostActive
                ? 'bg-indigo-700 text-white'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            "
            @click="closeMobileMenu"
          >
            <PenSquare class="h-4 w-4" />
            <span>{{ t('navigation.newPost') }}</span>
          </RouterLink>
        </div>

        <!-- Tombol menu mobile -->
        <div class="md:hidden flex items-center gap-2">
          <!-- Pemilih bahasa di mobile -->
          <LanguageSwitcher />

          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Menu v-if="!mobileMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </nav>

      <!-- Menu mobile -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden py-3 border-t border-gray-200 dark:border-gray-800 space-y-2"
      >
        <RouterLink
          to="/"
          class="block px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :class="{
            'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/20':
              isHomeActive,
          }"
          @click="closeMobileMenu"
        >
          <div class="flex items-center gap-3">
            <Home class="h-5 w-5" />
            <span>{{ t('navigation.home') }}</span>
          </div>
        </RouterLink>

        <RouterLink
          to="/about"
          class="block px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :class="{
            'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/20':
              isAboutActive,
          }"
          @click="closeMobileMenu"
        >
          <div class="flex items-center gap-3">
            <Info class="h-5 w-5" />
            <span>{{ t('navigation.about') }}</span>
          </div>
        </RouterLink>

        <RouterLink
          to="/contact"
          class="block px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :class="{
            'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/20':
              isContactActive,
          }"
          @click="closeMobileMenu"
        >
          <div class="flex items-center gap-3">
            <Mail class="h-5 w-5" />
            <span>{{ t('navigation.contact') }}</span>
          </div>
        </RouterLink>

        <RouterLink
          to="/post-create"
          class="block px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-3"
          :class="
            isCreatePostActive
              ? 'text-indigo-700 dark:text-indigo-400 font-semibold'
              : 'text-indigo-600 dark:text-indigo-400'
          "
          @click="closeMobileMenu"
        >
          <PenSquare class="h-5 w-5" />
          <span>{{ t('navigation.newPost') }}</span>
        </RouterLink>
      </div>
    </div>
  </header>

  <!-- Overlay untuk menu mobile -->
  <div
    v-if="mobileMenuOpen"
    @click="closeMobileMenu"
    class="md:hidden fixed inset-0 bg-black/20 dark:bg-black/50 z-40"
  />

  <!-- Konten utama aplikasi, dimana komponen view ditampilkan -->
  <main class="px-4 py-6 max-w-7xl mx-auto min-h-[calc(100vh-8rem)]">
    <RouterView />
  </main>

  <!-- Footer aplikasi -->
  <footer
    class="py-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200"
  >
    <div class="max-w-7xl mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
      <p v-html="t('footer.copyright', { year: new Date().getFullYear() })"></p>
    </div>
  </footer>
</template>
