// Mengimpor fungsi defineStore dari pinia
import type { Post, PostInput } from '@/types/post'
import { defineStore } from 'pinia'

/**
 * Store Pinia untuk manajemen post
 * Mengelola state, getters, dan actions untuk operasi CRUD post
 */
export const usePostsStore = defineStore('posts-store', {
  // Data - Menyimpan state dari aplikasi
  state: () => ({
    posts: [
      {
        id: 1,
        title: 'The Future of Artificial Intelligence in Daily Life',
        body: 'Artificial intelligence is transforming the way we live, work, and interact. From automation to decision-making, AI continues to shape the future of technology worldwide. Machine learning algorithms are becoming more sophisticated, enabling computers to perform tasks that once required human intelligence. This revolution is impacting various sectors such as healthcare, finance, transportation, and education.',
        author: 'John Doe',
        created_at: '3/18/2025',
        is_saved: true,
      },
      {
        id: 2,
        title: 'Sustainable Energy: The Key to a Greener Planet',
        body: 'Renewable energy sources such as solar, wind, and hydro are crucial for reducing carbon emissions. The future depends on sustainable choices to protect our environment globally. As climate change concerns grow, governments and businesses worldwide are investing heavily in green technologies. The transition to renewable energy is not just an environmental necessity but also a significant economic opportunity.',
        author: 'Jane Smith',
        created_at: '3/20/2025',
        is_saved: false,
      },
      {
        id: 3,
        title: 'The Rise of Remote Work and Digital Nomads',
        body: 'With technology advancing, more companies embrace remote work. Digital nomads are growing, enjoying flexible schedules while maintaining productivity through virtual collaboration tools worldwide. The COVID-19 pandemic accelerated this trend, proving that many jobs can be performed effectively from anywhere with an internet connection. This shift is causing businesses to reconsider their office space needs and work policies.',
        author: 'Michael Johnson',
        created_at: '3/18/2025',
        is_saved: true,
      },
      {
        id: 4,
        title: 'Cybersecurity Challenges in an Increasingly Digital World',
        body: "As cyber threats grow, companies must enhance security measures. Protecting sensitive data and personal information remains critical in today's interconnected digital landscape globally. Hackers are developing more sophisticated techniques, making cybersecurity a top priority for organizations of all sizes. The rise of ransomware attacks has particularly highlighted vulnerabilities in critical infrastructure and data protection systems.",
        author: 'Emily Davis',
        created_at: '3/15/2025',
        is_saved: false,
      },
      {
        id: 5,
        title: 'Blockchain Technology Beyond Cryptocurrency',
        body: 'While blockchain is known for powering Bitcoin, its applications extend far beyond digital currencies. From supply chain management to voting systems, blockchain offers transparent and secure solutions across industries. The decentralized nature of blockchain makes it resistant to fraud and tampering, opening possibilities for innovative applications in finance, healthcare, real estate, and government services.',
        author: 'Alex Wong',
        created_at: '3/12/2025',
        is_saved: true,
      },
      {
        id: 6,
        title: 'The Evolution of Mobile Technology',
        body: 'Smartphones have revolutionized communication, but the future holds even more innovation. From foldable screens to augmented reality integration, mobile devices continue to evolve in exciting ways. The advent of 5G networks is dramatically increasing connection speeds and enabling new applications. As wearable technology improves, were seeing closer integration between our digital and physical lives.',
        author: 'Sarah Johnson',
        created_at: '3/10/2025',
        is_saved: false,
      },
      {
        id: 7,
        title: 'Advances in Medical Research and Technology',
        body: 'Recent breakthroughs in gene editing, personalized medicine, and AI diagnostics are transforming healthcare. These innovations promise more effective treatments, early disease detection, and improved patient outcomes. CRISPR technology in particular has opened new frontiers in treating genetic diseases. Meanwhile, telemedicine is expanding access to healthcare for underserved populations around the world.',
        author: 'Dr. Robert Chen',
        created_at: '3/08/2025',
        is_saved: true,
      },
      {
        id: 8,
        title: 'The Importance of Digital Literacy in Education',
        body: 'As technology becomes integral to most careers, educational systems must adapt to prepare students for a digital future. Teaching computational thinking and critical digital skills is essential at all education levels. Schools are incorporating coding, data analysis, and digital collaboration into curriculums. The challenge remains ensuring equal access to technology and digital education for all students regardless of socioeconomic background.',
        author: 'Prof. Maria Garcia',
        created_at: '3/07/2025',
        is_saved: false,
      },
      {
        id: 9,
        title: 'Sustainable Urban Development',
        body: 'Smart cities are implementing eco-friendly infrastructure, efficient public transportation, and green spaces to combat pollution and improve quality of life. Urban planners are rethinking city design with sustainability at the core. Initiatives like vertical gardens, renewable energy integration, and water conservation systems are becoming standard in progressive urban development projects. These changes aim to make cities more livable while reducing their environmental impact.',
        author: 'Thomas Lee',
        created_at: '3/05/2025',
        is_saved: true,
      },
      {
        id: 10,
        title: 'The Global Food Crisis: Challenges and Solutions',
        body: 'Climate change, population growth, and resource depletion are threatening global food security. Sustainable agriculture practices, reduced food waste, and innovative farming technologies offer potential solutions. Vertical farming and lab-grown proteins may help feed the growing population. Additionally, changing consumption patterns and addressing inequalities in food distribution could alleviate hunger in vulnerable regions.',
        author: 'Amara Okafor',
        created_at: '3/03/2025',
        is_saved: false,
      },
      {
        id: 11,
        title: 'The Psychology of Social Media Addiction',
        body: 'Research reveals how social platforms are designed to maximize engagement through dopamine-triggering features. Understanding these mechanisms can help individuals develop healthier digital habits. The constant validation through likes and comments creates reward loops similar to gambling addiction. Mental health professionals are increasingly treating social media addiction as a serious condition affecting well-being, productivity, and real-world relationships.',
        author: 'Dr. Jennifer Kim',
        created_at: '3/01/2025',
        is_saved: true,
      },
      {
        id: 12,
        title: 'Electric Vehicles: Transforming Transportation',
        body: 'With improving battery technology and charging infrastructure, electric vehicles are poised to replace traditional combustion engines. This shift promises reduced emissions and more sustainable transportation systems. Major automakers are committing to all-electric futures, with some countries setting deadlines to phase out gasoline-powered vehicles. The transition presents challenges in resource extraction for batteries and electricity grid capacity.',
        author: 'Carlos Rodriguez',
        created_at: '2/28/2025',
        is_saved: false,
      },
      {
        id: 13,
        title: 'The Future of Space Exploration',
        body: 'Private companies are joining government agencies in pushing the boundaries of space travel. Mars missions, space tourism, and satellite internet are just some of the exciting developments in this new space age. The decreasing cost of launching payloads into orbit has democratized access to space. Long-term goals include establishing permanent lunar bases and eventually human settlements on Mars within the coming decades.',
        author: 'Sophia Patel',
        created_at: '2/25/2025',
        is_saved: true,
      },
      {
        id: 14,
        title: 'The Growing Importance of Data Privacy',
        body: 'As data collection becomes ubiquitous, protecting personal information is increasingly vital. New regulations, privacy-focused technologies, and consumer awareness are shaping how organizations handle data. The European GDPR has influenced privacy laws worldwide, giving individuals more control over their personal information. Companies are finding that strong privacy practices can be a competitive advantage rather than just a compliance requirement.',
        author: 'David Wilson',
        created_at: '2/22/2025',
        is_saved: false,
      },
      {
        id: 15,
        title: 'Mindfulness and Mental Health in the Digital Age',
        body: 'The constant connectivity of modern life can contribute to stress and anxiety. Mindfulness practices offer ways to maintain mental wellbeing despite digital distractions. Many workplaces are incorporating wellness programs to combat burnout. Digital detox retreats and meditation apps are gaining popularity as people seek balance between technology use and mental health. Research indicates that even short mindfulness practices can significantly reduce stress levels.',
        author: 'Emma Bennett',
        created_at: '2/20/2025',
        is_saved: true,
      },
    ] as Post[],
  }),

  // Computed - Mendapatkan nilai yang dikomputasi dari state
  getters: {
    /**
     * Mendapatkan post yang diurutkan berdasarkan tanggal pembuatan (terbaru dulu)
     * @returns {Post[]} Array post yang sudah diurutkan
     */
    sorted: (state): Post[] => {
      return [...state.posts].sort((a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      })
    },

    /**
     * Mendapatkan post yang disimpan (saved) dan diurutkan berdasarkan tanggal
     * @returns {Post[]} Array post yang disimpan dan diurutkan
     */
    saved: (state): Post[] => {
      return state.posts
        .filter((post) => post.is_saved)
        .sort((a, b) => {
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        })
    },

    /**
     * Mendapatkan post berdasarkan ID
     * @param {number} id - ID post yang dicari
     * @returns {Post|undefined} Post yang ditemukan atau undefined jika tidak ada
     */
    getPostById: (state) => {
      return (id: number): Post | undefined => {
        return state.posts.find((post) => post.id === id)
      }
    },
  },

  // Methods - Metode untuk melakukan perubahan pada state
  actions: {
    /**
     * Menambahkan post baru ke dalam koleksi
     * @param {PostInput} post - Data post yang akan ditambahkan
     */
    addPost(post: PostInput) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'John Doe',
        created_at: new Date().toLocaleDateString(),
        is_saved: false,
      })
    },

    /**
     * Menghapus post berdasarkan ID
     * @param {number} id - ID post yang akan dihapus
     */
    deletePost(id: number) {
      this.posts = this.posts.filter((post) => post.id !== id)
    },

    /**
     * Mengubah status saved dari post
     * @param {number} id - ID post yang akan diubah statusnya
     */
    savePost(id: number) {
      const post = this.posts.find((post) => post.id === id)
      if (post) {
        post.is_saved = !post.is_saved
      }
    },

    /**
     * Mengedit post yang sudah ada
     * @param {number} id - ID post yang akan diedit
     * @param {PostInput} updatedPost - Data post yang telah diperbarui
     * @returns {boolean} - Berhasil atau tidak proses edit
     */
    updatePost(id: number, updatedPost: PostInput): boolean {
      const postIndex = this.posts.findIndex((post) => post.id === id)

      if (postIndex === -1) {
        return false
      }

      // Update post dengan mempertahankan data lain yang tidak diubah
      this.posts[postIndex] = {
        ...this.posts[postIndex],
        title: updatedPost.title,
        body: updatedPost.body,
      }

      return true
    },
  },
})
