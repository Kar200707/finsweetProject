export const host = 'http://localhost:3000/';
export const environment = {
  category: {
    get: host + 'category'
  },

  host: {
    get: host
  },

  author: {
    get: host + 'users'
  },

  logos: {
    get: host + 'logos'
  },

  categoryPosts: {
    get: host + 'category-posts'
  },

  privacyPolicy: {
    get: host + 'privacy-policy'
  },

  contactUs: {
    get: host + 'contact-us'
  },

  posts: {
    get: host + 'posts'
  },
}
