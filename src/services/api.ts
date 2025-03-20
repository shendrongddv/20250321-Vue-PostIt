import type { Post, PostInput } from '@/types/post'

/**
 * URL dasar untuk API
 * Untuk pengembangan lokal, kita menggunakan URL json-server
 */
const API_BASE_URL = 'http://localhost:3000'

/**
 * Layanan API untuk operasi CRUD post
 * Menyediakan metode untuk mengambil, menambah, mengedit, dan menghapus post
 */
export const apiService = {
  /**
   * Mengambil semua post dari API
   * @returns {Promise<Post[]>} - Promise yang menghasilkan array post
   */
  async getPosts(): Promise<Post[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/posts`)

      if (!response.ok) {
        throw new Error('Terjadi kesalahan saat mengambil data post')
      }

      return (await response.json()) as Post[]
    } catch (error) {
      console.error('Error fetching posts:', error)
      // Untuk sekarang kita kembalikan array kosong jika terjadi error
      return []
    }
  },

  /**
   * Mengambil post berdasarkan ID
   * @param {number} id - ID post yang akan diambil
   * @returns {Promise<Post|null>} - Promise yang menghasilkan post atau null jika tidak ditemukan
   */
  async getPostById(id: number): Promise<Post | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${id}`)

      if (!response.ok) {
        if (response.status === 404) {
          return null
        }
        throw new Error(`Terjadi kesalahan saat mengambil post dengan ID ${id}`)
      }

      return (await response.json()) as Post
    } catch (error) {
      console.error(`Error fetching post with ID ${id}:`, error)
      return null
    }
  },

  /**
   * Menambahkan post baru
   * @param {PostInput} post - Data post yang akan ditambahkan
   * @returns {Promise<Post>} - Promise yang menghasilkan post yang berhasil ditambahkan
   */
  async createPost(post: PostInput): Promise<Post> {
    try {
      const response = await fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...post,
          author: 'John Doe', // Nilai default untuk author
          created_at: new Date().toLocaleDateString(),
          is_saved: false,
        }),
      })

      if (!response.ok) {
        throw new Error('Terjadi kesalahan saat menambahkan post baru')
      }

      return (await response.json()) as Post
    } catch (error) {
      console.error('Error creating post:', error)
      throw error
    }
  },

  /**
   * Mengedit post berdasarkan ID
   * @param {number} id - ID post yang akan diedit
   * @param {PostInput} updatedPost - Data post yang akan diperbarui
   * @returns {Promise<Post|null>} - Promise yang menghasilkan post yang diupdate atau null jika gagal
   */
  async updatePost(id: number, updatedPost: PostInput): Promise<Post | null> {
    try {
      // Dapatkan post yang ada terlebih dahulu
      const existingPost = await this.getPostById(id)

      if (!existingPost) {
        return null
      }

      // Lakukan PATCH request untuk mengupdate post
      const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: updatedPost.title,
          body: updatedPost.body,
          // Perhatikan bahwa kita tidak mengubah author dan created_at
        }),
      })

      if (!response.ok) {
        throw new Error(`Terjadi kesalahan saat mengupdate post dengan ID ${id}`)
      }

      return (await response.json()) as Post
    } catch (error) {
      console.error(`Error updating post with ID ${id}:`, error)
      return null
    }
  },

  /**
   * Menghapus post berdasarkan ID
   * @param {number} id - ID post yang akan dihapus
   * @returns {Promise<boolean>} - Promise yang menghasilkan true jika berhasil
   */
  async deletePost(id: number): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error(`Terjadi kesalahan saat menghapus post dengan ID ${id}`)
      }

      return true
    } catch (error) {
      console.error(`Error deleting post with ID ${id}:`, error)
      return false
    }
  },

  /**
   * Mengubah status tersimpan post
   * @param {number} id - ID post yang akan diubah
   * @param {boolean} isSaved - Status tersimpan baru
   * @returns {Promise<Post|null>} - Promise yang menghasilkan post yang diupdate atau null jika gagal
   */
  async toggleSavePost(id: number, isSaved: boolean): Promise<Post | null> {
    try {
      // Pertama, kita perlu mendapatkan post asli
      const post = await this.getPostById(id)

      if (!post) {
        return null
      }

      // Ubah status tersimpan
      const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          is_saved: isSaved,
        }),
      })

      if (!response.ok) {
        throw new Error(`Terjadi kesalahan saat mengubah status tersimpan post dengan ID ${id}`)
      }

      return (await response.json()) as Post
    } catch (error) {
      console.error(`Error toggling save status for post with ID ${id}:`, error)
      return null
    }
  },
}
