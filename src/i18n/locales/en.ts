/**
 * Translation file for English
 */
export default {
  // Navigation
  navigation: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    newPost: 'New Post',
  },
  // Home Page
  home: {
    allPosts: 'All Posts',
    savedPosts: 'Saved Posts',
    all: 'All',
    saved: 'Saved',
    noPostsAvailable: 'No posts available',
    allPostsDescription: 'View all available posts',
    savedPostsDescription: 'View your collection of saved posts',
    newPost: 'New Post',
  },
  // Add and Edit Post Page
  post: {
    create: {
      title: 'Create New Post',
      heading: 'Add New Post',
      description:
        'Share your thoughts with our readers. Write an interesting title and informative content.',
    },
    edit: {
      title: 'Edit Post',
      heading: 'Edit Post',
      description:
        'Update your post with better title and content. Your changes will be published immediately.',
    },
    form: {
      titleLabel: 'Post Title',
      titlePlaceholder: 'Enter an interesting post title...',
      contentLabel: 'Post Content',
      contentPlaceholder: 'Write your post content here...',
      cancel: 'Cancel',
      save: 'Save Post',
      update: 'Save Changes',
      saving: 'Saving...',
      error: 'An error occurred while updating the post',
      loading: 'Loading post data...',
      goBack: 'Back to home page',
    },
    actions: {
      delete: 'Delete post',
      edit: 'Edit post',
      save: 'Save post',
      unsave: 'Unsave post',
      saved: 'Saved',
    },
  },
  // Contact Page
  contact: {
    title: 'Contact Us',
    heading: 'Send Us a Message',
    description:
      'Please fill out the form below to send a message or inquiry. We will get back to you as soon as possible.',
    form: {
      nameLabel: 'Full Name',
      namePlaceholder: 'Enter your full name',
      emailLabel: 'Email',
      emailPlaceholder: 'Enter your email address',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message here...',
      send: 'Send Message',
      sending: 'Sending...',
    },
    info: {
      title: 'Other Contact Information',
      whatsapp: "Your message will be sent directly to our admin's WhatsApp for faster handling.",
    },
    whatsappMessage: {
      header: 'Message from Post.it Website',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      closing: 'Thank You.',
    },
  },
  // About Page
  about: {
    title: 'About the Application',
    appName: 'Post.it - Post CRUD App',
    description:
      'Post.it is a simple post management application built with Vue 3, TypeScript, and Tailwind CSS. This app allows users to create, read, update, and delete posts, as well as save favorite posts.',
    features: {
      title: 'Key Features:',
      list: {
        responsiveLayout: 'View all posts with responsive layout',
        filter: 'Filter posts (all or saved)',
        addPost: 'Add new posts with form validation',
        editPost: 'Edit existing posts',
        deletePost: 'Delete unnecessary posts',
        savePost: 'Save favorite posts for easy access',
        responsiveDisplay: 'Responsive display for desktop and mobile',
        darkMode: 'Dark mode support',
      },
    },
    tech: {
      title: 'Technology:',
    },
    credits: {
      madeWith: 'Made with love for Vue.js and TypeScript demonstration',
      github: 'Github',
      contact: 'Contact',
    },
  },
  // Components
  components: {
    languageSwitcher: {
      label: 'Select Language',
    },
  },
  // Footer
  footer: {
    copyright:
      '© {year} Post.it - Built with Vue 3, TypeScript, Pinia, Vue Router, and Tailwind CSS',
  },
}
