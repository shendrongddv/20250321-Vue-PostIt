/**
 * Tipe data untuk Post
 * Mendefinisikan struktur data yang digunakan untuk setiap post
 */
export interface Post {
  id: number
  title: string
  body?: string
  author: string
  created_at: string
  is_saved: boolean
}

/**
 * Tipe data untuk input pembuatan post baru
 * Hanya memerlukan title dan body (opsional)
 */
export interface PostInput {
  title: string
  body?: string
}
