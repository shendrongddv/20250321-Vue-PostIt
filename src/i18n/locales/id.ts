/**
 * File terjemahan untuk Bahasa Indonesia
 */
export default {
  // Navigasi
  navigation: {
    home: 'Beranda',
    about: 'Tentang',
    contact: 'Kontak',
    newPost: 'Post Baru',
  },
  // Halaman Beranda
  home: {
    allPosts: 'Semua Post',
    savedPosts: 'Post Tersimpan',
    all: 'Semua',
    saved: 'Tersimpan',
    noPostsAvailable: 'Tidak ada post yang tersedia',
    allPostsDescription: 'Lihat semua post yang tersedia',
    savedPostsDescription: 'Lihat koleksi post yang telah Anda simpan',
    newPost: 'Post Baru',
  },
  // Halaman Tambah dan Edit Post
  post: {
    create: {
      title: 'Buat Post Baru',
      heading: 'Tambahkan Post Baru',
      description:
        'Bagikan pemikiran Anda dengan pembaca kami. Tuliskan judul yang menarik dan konten yang informatif.',
    },
    edit: {
      title: 'Edit Post',
      heading: 'Edit Post',
      description:
        'Perbarui post Anda dengan judul dan konten yang lebih baik. Perubahan Anda akan segera dipublikasikan.',
    },
    form: {
      titleLabel: 'Judul Post',
      titlePlaceholder: 'Masukkan judul post yang menarik...',
      contentLabel: 'Isi Post',
      contentPlaceholder: 'Tulis isi post disini...',
      cancel: 'Batal',
      save: 'Simpan Post',
      update: 'Simpan Perubahan',
      saving: 'Menyimpan...',
      error: 'Terjadi kesalahan saat mengupdate post',
      loading: 'Memuat data post...',
      goBack: 'Kembali ke halaman utama',
    },
    actions: {
      delete: 'Hapus post',
      edit: 'Edit post',
      save: 'Simpan post',
      unsave: 'Batal simpan post',
      saved: 'Disimpan',
    },
  },
  // Halaman Kontak
  contact: {
    title: 'Hubungi Kami',
    heading: 'Kirim Pesan Kepada Kami',
    description:
      'Silakan isi form berikut untuk mengirim pesan atau pertanyaan. Kami akan menghubungi Anda kembali secepatnya.',
    form: {
      nameLabel: 'Nama Lengkap',
      namePlaceholder: 'Masukkan nama lengkap Anda',
      emailLabel: 'Email',
      emailPlaceholder: 'Masukkan alamat email Anda',
      messageLabel: 'Pesan',
      messagePlaceholder: 'Tulis pesan Anda disini...',
      send: 'Kirim Pesan',
      sending: 'Mengirim...',
    },
    info: {
      title: 'Informasi Kontak Lainnya',
      whatsapp:
        'Pesan Anda akan dikirim langsung ke WhatsApp admin kami untuk penanganan yang lebih cepat.',
    },
    whatsappMessage: {
      header: 'Pesan dari Website Post.it',
      name: 'Nama',
      email: 'Email',
      message: 'Pesan',
      closing: 'Terima Kasih.',
    },
  },
  // Halaman About
  about: {
    title: 'Tentang Aplikasi',
    appName: 'Post.it - Aplikasi CRUD Post',
    description:
      'Post.it adalah aplikasi manajemen post sederhana yang dibangun dengan Vue 3, TypeScript, dan Tailwind CSS. Aplikasi ini memungkinkan pengguna untuk membuat, membaca, mengedit, dan menghapus post, serta menyimpan post favorit.',
    features: {
      title: 'Fitur Utama:',
      list: {
        responsiveLayout: 'Melihat semua post dengan tata letak responsif',
        filter: 'Filter tampilan post (semua atau yang disimpan)',
        addPost: 'Menambahkan post baru dengan formulir validasi',
        editPost: 'Mengedit post yang sudah ada',
        deletePost: 'Menghapus post yang tidak diperlukan',
        savePost: 'Menyimpan post favorit untuk akses mudah',
        responsiveDisplay: 'Tampilan responsif untuk desktop dan mobile',
        darkMode: 'Dukungan mode tema gelap (dark mode)',
      },
    },
    tech: {
      title: 'Teknologi:',
    },
    credits: {
      madeWith: 'Dibuat dengan cinta untuk demonstrasi Vue.js dan TypeScript',
      github: 'Github',
      contact: 'Kontak',
    },
  },
  // Komponen
  components: {
    languageSwitcher: {
      label: 'Pilih Bahasa',
    },
  },
  // Footer
  footer: {
    copyright:
      '© {year} Post.it - Dibuat dengan Vue 3, TypeScript, Pinia, Vue Router, dan Tailwind CSS',
  },
}
