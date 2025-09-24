import { defineStore } from 'pinia'
import qs from 'qs'
import { resolvePosts } from '../../helpers/utils'

export const usePostStore = defineStore('post', {
  state: () => ({
    postState: 1, // ENUM.INIT,
    posts: [],
    worldPosts: [],
    post: [],
    total_post_pages: 0,
    recent_posts: [],
    definitiveGuides: [],
    category_posts: [],
    tag_posts: [],
    author_posts: [],
    sticky_posts: [],
    related_posts: [],
  }),

  getters: {
    getPostBySlug: (state) => (slug) =>
      state.posts?.find((post) => post.slug === slug),
    getDefinitiveGuides: (state) => state.definitiveGuides,
    getAllPosts: (state) => state.posts,
    getPostsByTag: (state) => state.tag_posts,
    getRecentPosts: (state) => state.recent_posts,
    getPostsByCategory: (state) => state.category_posts,
    getRelatedPosts: (state) => state.related_posts,
    getPostsByAuthor: (state) => state.author_posts,
    getStickyPosts: (state) => state.sticky_posts,
  },

  actions: {
    setPosts(data) {
      this.posts = data.posts
      this.total_post_pages = data.pages
      this.postState = 'loaded'
    },

    setRecentPosts(data) {
      this.recent_posts = data.posts
      this.total_post_pages = data.pages
      this.postState = 'loaded'
    },

    setStickyPosts(data) {
      this.sticky_posts = data.posts
      this.postState = 'loaded'
    },

    setPost(post) {
      this.post = post
    },

    setCategoryPosts(data) {
      this.category_posts = data.posts
      this.total_post_pages = data.pages
      this.postState = 'loaded'
    },

    setTagPosts(data) {
      this.tag_posts = data.posts
      this.total_post_pages = data.pages
      this.postState = 'loaded'
    },

    setDefinitiveGuides(data) {
      this.definitiveGuides = data.hubs
      this.total_hub_pages = data.pages
      this.hubState = 'loaded'
    },

    setAuthorPosts(data) {
      this.author_posts = data.posts
      this.total_post_pages = data.pages
      this.postState = 'loaded'
    },

    setRelatedPosts(data) {
      this.related_posts = data.posts
      this.total_post_pages = data.pages
      this.postState = 'loaded'
    },

    setWorldPost(posts) {
      const postData = Object.values(posts).map((post) => {
        return {
          title: post.title,
          content: post.description,
          url: post.url,
          date: post.published_at || post.created,
          image: post.social_image || post.image,
          from: new URL(post.url).host,
        }
      })
      this.worldPosts = postData
    },

    setPostState(postState) {
      this.postState = postState
    },

    // ---------- API Calls ----------
    async getPosts({ page, count = 22, populate = '*' }) {
      try {
        const api = useStrapi()
        const res = await api(
          `/posts?filters[is_public][$eq]=true&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc&populate=${populate}`
        )
        if (res?.data && page < 2) {
          this.setPosts(mapPosts(res.data))
        }
        return mapPosts(res.data)
      } catch (error) {
        this.setPostState('error')
        throw error
      }
    },

    async getDefinitiveGuides({ page, count = 22 }) {
      try {
        const api = useStrapi()
        const res = await api(
          `/posts?filters[type][$eq]=definitive&populate[chapters][populate]=posts&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
        )
        if (res?.data) {
          this.setDefinitiveGuides(mapPosts(res.data))
        }
        return mapPosts(res.data)
      } catch (error) {
        this.setPostState('error')
        throw error
      }
    },

    async getRecentPosts() {
      try {
        const api = useStrapi()
        const res = await api(`/get_posts?count=6`)
        if (res.posts) {
          this.setRecentPosts(res)
        }
        return res.posts
      } catch (error) {
        this.setPostState('error')
      }
    },

    async getStickyPosts() {
      try {
        const api = useStrapi()
        const res = await api(`/get_sticky_posts`)
        if (res.posts) {
          this.setStickyPosts(res)
        }
        return res.posts
      } catch (error) {
        this.setPostState('error')
      }
    },

    async filterPosts({ search, populate = '' }) {
      try {
        const api = useStrapi()
        const res = await api(
          `/posts?filters[title][$containsi]=${search}&filters[excerpt][$containsi]=${search}&filters[content][$containsi]=${search}&populate=${populate}`
        )
        if (res?.data.length) {
          const posts = mapPosts(res.data)
          this.setAuthorPosts(posts)
          return posts
        }
      } catch (error) {
        this.setPostState('error')
      }
    },

    async getCategoryPosts({ count, page = 1, slug, populate = '' }) {
      try {
        const api = useStrapi()
        const res = await api(
          `/posts?filters[is_public][$eq]=true&filters[categories][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${count}&populate=${populate}`
        )
        if (res?.data.length) {
          const posts = mapPosts(res.data)
          this.setCategoryPosts(posts)
          return posts
        }
      } catch (error) {
        this.setPostState('error')
      }
    },

    async getTagPosts({ count, page = 1, slug, populate = '' }) {
      try {
        const api = useStrapi()
        const res = await api(
          `/posts?filters[is_public][$eq]=true&filters[tags][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${count}&populate=${populate}`
        )
        if (res?.data.length) {
          const posts = mapPosts(res.data)
          this.setTagPosts(posts)
          return posts
        }
      } catch (error) {
        this.setPostState('error')
      }
    },

    async getAuthorPosts({ count, page = 1, slug, populate = '' }) {
      try {
        const api = useStrapi()
        const res = await api(
          `/posts?filters[is_public][$eq]=true&filters[author][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${count}&populate=${populate}`
        )
        if (res?.data.length) {
          const posts = mapPosts(res.data)
          this.setAuthorPosts(posts)
          return posts
        }
      } catch (error) {
        this.setPostState('error')
      }
    },

    async getPost({ slug, populate = '*' }) {
      const query = qs.stringify({ populate }, { encodeValuesOnly: true })
      try {
        const api = useStrapi()
        const res = await api(`/posts/?filters[slug][$eq]=${slug}&${query}`)
        if (res?.data?.length) {
          this.setPost(mapPosts(res.data)[0])
          return mapPosts(res.data)[0]
        }
      } catch (error) {
        this.setPostState('error')
      }
    },

    async getChapter({ slug, populate = '*' }) {
      const query = qs.stringify({ populate }, { encodeValuesOnly: true })
      try {
        const api = useStrapi()
        const res = await api(`/chapters/?filters[slug][$eq]=${slug}&${query}`)
        if (res?.data?.length) {
          return res.data
        }
      } catch (error) {
        this.setPostState('error')
      }
    },
  },
})

function mapPosts(posts) {
  return resolvePosts(posts)
}
