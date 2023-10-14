export const host = 'http://localhost:3000/';
export const environment = {
  category: {
    get: host + 'category'
  },

  privacyPolicy: {
    get: host + 'privacy-policy'
  },

  author: {
    get: host + 'author'
  },

  logos: {
    get: host + 'logos'
  },

  featuredPostLists: {
    get: host + 'featuredPostLists'
  },

  categoryPosts: {
    get: host + 'category-posts'
  },

  posts: {
    get: host + 'posts'
  },

  authorPosts: {
    get: host + 'author-posts'
  }
}
