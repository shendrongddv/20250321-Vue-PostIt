# Vue 3 Post CRUD Application

Aplikasi CRUD post sederhana yang dibangun dengan Vue 3, TypeScript, Pinia, Vue Router, dan Tailwind CSS.

## Fitur Utama

- ✅ Daftar post dengan layout responsif
- ✅ Filter tampilan post (semua atau tersimpan)
- ✅ Menambahkan post baru
- ✅ Mengedit post yang sudah ada
- ✅ Menghapus post
- ✅ Menyimpan/membatalkan simpan post
- ✅ Validasi form sederhana

## Teknologi yang Digunakan

- **Vue 3** - Framework JavaScript progresif untuk membangun antarmuka pengguna
- **TypeScript** - Superset JavaScript dengan tipe data statis
- **Pinia** - State management library yang didesain untuk Vue 3
- **Vue Router** - Router resmi untuk Vue.js
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Bundler dan development server yang cepat

## Struktur Proyek

Proyek ini mengikuti arsitektur yang direkomendasikan untuk Vue 3 dengan TypeScript:

```
src/
├── assets/           # Aset statis (gambar, font, dll)
├── components/       # Komponen Vue yang dapat digunakan kembali
├── lib/              # Fungsi utilitas dan konstanta
├── router/           # Konfigurasi dan definisi rute Vue Router
├── services/         # Layanan untuk komunikasi dengan API
├── stores/           # Store Pinia untuk state management
├── types/            # Definisi tipe TypeScript
├── views/            # Komponen halaman/tampilan
├── App.vue           # Komponen root
└── main.ts           # Entry point aplikasi
```

## Panduan Memulai

### Prasyarat

- Node.js (versi 16 atau lebih baru)
- pnpm (bukan npm atau yarn)

### Instalasi

1. Clone repositori

   ```bash
   git clone <url-repository>
   cd <nama-folder-proyek>
   ```

2. Instal dependensi

   ```bash
   pnpm install
   ```

3. Jalankan server pengembangan

   ```bash
   pnpm dev
   ```

4. Buka browser di http://localhost:5173

### Membangun untuk Produksi

```bash
pnpm build
```

### Menjalankan JSON Server (untuk Pengembangan)

Untuk mengembangkan dengan data dummy dan API lokal:

```bash
pnpm json-server
```

## Aturan Kode dan Praktik Terbaik

1. **Penamaan Komponen:**

   - Komponen menggunakan format PascalCase (misalnya `PostItem.vue`)
   - Halaman/tampilan diakhiri dengan "View" (misalnya `HomeView.vue`)

2. **Tipe Data:**

   - Selalu mendefinisikan tipe untuk props, state, dan fungsi
   - Ekstrak tipe yang digunakan di beberapa tempat ke dalam file terpisah di direktori `/types`

3. **Pengelolaan State:**

   - Gunakan Pinia untuk state global
   - Gunakan composition API dengan `<script setup>` untuk state lokal komponen

4. **Struktur Komponen:**

   - Gunakan struktur standard: `<script setup>`, lalu `<template>`
   - Tambahkan komentar untuk menjelaskan bagian-bagian dalam template

5. **CSS:**
   - Gunakan Tailwind CSS untuk styling
   - Hindari penggunaan scoped CSS kecuali diperlukan

## Lisensi

[MIT](LICENSE)
