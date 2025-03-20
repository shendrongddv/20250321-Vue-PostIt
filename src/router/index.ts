import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import PostCreateView from '@/views/PostCreateView.vue'
import PostEditView from '@/views/PostEditView.vue'
import { createRouter, createWebHistory } from 'vue-router'

/**
 * Konfigurasi router Vue untuk navigasi antar halaman
 * Menggunakan web history API untuk URL yang lebih bersih (tanpa '#')
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /**
     * Rute halaman utama / homepage
     * Menampilkan daftar semua post
     */
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Beranda - Post CRUD App',
      },
    },
    /**
     * Rute halaman pembuatan post baru
     * Berisi form untuk menambahkan post baru
     */
    {
      path: '/post-create',
      name: 'post-create',
      component: PostCreateView,
      meta: {
        title: 'Buat Post Baru - Post CRUD App',
      },
    },
    /**
     * Rute halaman edit post
     * Berisi form untuk mengedit post yang sudah ada
     * Menerima parameter ID post yang akan diedit
     */
    {
      path: '/post-edit/:id',
      name: 'post-edit',
      component: PostEditView,
      meta: {
        title: 'Edit Post - Post CRUD App',
      },
    },
    /**
     * Rute halaman About
     * Berisi informasi tentang aplikasi
     */
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'Tentang Aplikasi - Post CRUD App',
      },
    },
    /**
     * Rute halaman Kontak
     * Berisi form untuk mengirim pesan ke WhatsApp
     */
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Hubungi Kami - Post CRUD App',
      },
    },
  ],
})

/**
 * Konfigurasi hook sebelum navigasi untuk mengatur judul halaman
 * sesuai dengan meta.title dari masing-masing rute
 */
router.beforeEach((to, from, next) => {
  // Mengatur judul dokumen sesuai meta.title dari rute, atau gunakan default
  document.title = (to.meta.title as string) || 'Post CRUD App'
  next()
})

export default router
