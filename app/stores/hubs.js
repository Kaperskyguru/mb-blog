// ~/stores/hubs.js
import { defineStore } from 'pinia'
import qs from 'qs'
import { resolveChapters, resolvePosts } from '../helpers/utils'

export const useHubsStore = defineStore('hubs', {
  state: () => ({
    hubState: 'init', // 'init' | 'loaded' | 'error'
    hubs: [],
    pdfs: [],
    books: [],
    courses: [],
    worldHubs: [],
    hub: null,
    definitiveGuides: [],
    chapters: [],
    chapter: null,
    post: null,
    total_hub_pages: 0,
    recent_hubs: [],
    category_hubs: [],
    sticky_hubs: [],
    related_hubs: [],
  }),

  getters: {
    getHubBySlug: (state) => (slug) =>
      state.hubs?.find((hub) => hub.slug === slug),
    // getHubs: (state) => () => state.hubs,
    getPDFs: (state) => () => state.pdfs,
    getBooks: (state) => () => state.books,
    getCourses: (state) => () => state.courses,
    getRecentHubs: (state) => () => state.recent_hubs,
    getCategoryHubs: (state) => () => state.category_hubs,
    getChapterBySlug: (state) => (slug) =>
      state.chapters?.find((chapter) => chapter.slug === slug),
    getRelatedHubs: (state) => () => state.related_hubs,
    getHubsByAuthor: (state) => (author) =>
      state.hubs.filter((hub) => hub.author?.slug === author),
    getStickyHubs: (state) => () => state.sticky_hubs,
  },

  actions: {
    setHubState(hubState) {
      this.hubState = hubState
    },

    async getHubs({ page = 1, count = 22 }) {
      try {
        const api = useStrapi()

        const res = await api(
          `/hubs?filters[type][$eq]=hub&populate=*&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
        )

        if (!res?.data) return []

        const hubs = mapHubs(res.data)
        this.hubs = hubs
        this.total_hub_pages = res.meta?.pagination?.pageCount || 0
        this.hubState = 'loaded'

        return hubs
      } catch (error) {
        console.error(error)
        this.hubState = 'error'
        throw error
      }
    },

    async getPDFs({ page = 1, count = 22, populate }) {
      try {
        const api = useStrapi()
        const query = qs.stringify({ populate }, { encodeValuesOnly: true })
        const res = await api(
          `/hubs?filters[type][$eq]=pdf&${query}&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
        )
        if (res?.data) {
          const hubs = mapHubs(res.data)
          this.pdfs = hubs
          this.total_hub_pages = res.meta?.pagination?.pageCount || 0
          this.hubState = 'loaded'
          return hubs
        }
      } catch (error) {
        this.hubState = 'error'
        throw error
      }
    },

    async fetchCourseContent(slug) {
      try {
        const api = useStrapi()
        const config = useRuntimeConfig()
        return await api(`${config.public.MB_API_URL}/roadmap/${slug}`)
      } catch (error) {
        console.error(error)
      }
    },

    async fetchAllCourses() {
      try {
        const api = useStrapi()
        const config = useRuntimeConfig()
        const url =
          config.public.MB_API_URL ?? 'https://api.masteringbackend.com'
        return await api(url + '/courses')
      } catch (error) {
        console.error(error)
      }
    },

    async getBooks({ page = 1, count = 22, populate }) {
      try {
        const api = useStrapi()
        const query = qs.stringify({ populate }, { encodeValuesOnly: true })
        const res = await api(
          `/hubs?filters[type][$eq]=book&${query}&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
        )
        if (res?.data) {
          const hubs = mapHubs(res.data)
          this.books = hubs
          this.total_hub_pages = res.meta?.pagination?.pageCount || 0
          this.hubState = 'loaded'
          return hubs
        }
      } catch (error) {
        this.hubState = 'error'
        throw error
      }
    },

    async getCourses({ page = 1, count = 22, populate }) {
      try {
        const api = useStrapi()
        const query = qs.stringify({ populate }, { encodeValuesOnly: true })
        const res = await api(
          `/hubs?filters[type][$eq]=course&${query}&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
        )
        if (res?.data) {
          const hubs = mapHubs(res.data)
          this.courses = hubs
          this.total_hub_pages = res.meta?.pagination?.pageCount || 0
          this.hubState = 'loaded'
          return hubs
        }
      } catch (error) {
        this.hubState = 'error'
        throw error
      }
    },

    async getRecentHubs() {
      try {
        const api = useStrapi()
        const res = await api(`/get_hubs?count=6`)
        if (res?.hubs) {
          this.recent_hubs = res.hubs
          this.hubState = 'loaded'
          return res.hubs
        }
      } catch (error) {
        this.hubState = 'error'
      }
    },

    async getStickyHubs() {
      try {
        const api = useStrapi()
        const res = await api(`/get_sticky_hubs`)
        if (res?.hubs) {
          this.sticky_hubs = res.hubs
          this.hubState = 'loaded'
          return res.hubs
        }
      } catch {
        this.hubState = 'error'
      }
    },

    async getRelatedHubs(hubId) {
      try {
        const api = useStrapi()
        const res = await api(`/get_related_hubs?hub_id=${hubId}&count=3`)
        if (res?.hubs) {
          this.related_hubs = res.hubs
          this.hubState = 'loaded'
          return res.hubs
        }
      } catch {
        this.hubState = 'error'
      }
    },

    async getCategoryHubs({ count = 22, page = 1, slug }) {
      try {
        const api = useStrapi()
        const res = await api(
          `/hubs?filters[type][$eq]=0&filters[categories][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${count}`
        )
        if (res?.data?.length) {
          const hubs = mapHubs(res.data)
          this.category_hubs = hubs
          this.total_hub_pages = res.meta?.pagination?.pageCount || 0
          this.hubState = 'loaded'
          return hubs
        }
      } catch {
        this.hubState = 'error'
      }
    },

    async getHub({ slug, populate = '*' }) {
      try {
        const api = useStrapi()
        const query = qs.stringify({ populate }, { encodeValuesOnly: true })
        const res = await api(`/hubs/?${query}&filters[slug][$eq]=${slug}`)
        if (res?.data?.length) {
          const hub = mapHubs(res.data)[0]
          this.hub = hub
          this.hubState = 'loaded'
          return hub
        }
      } catch {
        this.hubState = 'error'
      }
    },

    async getChapter({ slug, populate = '*' }) {
      try {
        const api = useStrapi()
        const res = await api(
          `/chapters/?populate=${populate}&filters[slug][$eq]=${slug}`
        )

        if (!res?.data?.length) return null

        const chapter = mapChapters(res.data)[0]
        this.chapters.push(chapter)
        this.hubState = 'loaded'

        return chapter
      } catch {
        this.hubState = 'error'
      }
    },

    async getPost({ slug, populate = '*' }) {
      const api = useStrapi()

      const query = qs.stringify({ populate }, { encodeValuesOnly: true })
      this.postState = 'loading'

      try {
        const res = await api(`/posts?filters[slug][$eq]=${slug}&${query}`)

        if (!res?.data.length) return null
        const mapped = mapPosts(res.data)[0]
        this.post = mapped
        this.postState = 'success'

        return mapped
      } catch (error) {
        this.postState = 'error'
        console.error(error)
      }
    },
  },
})

// === helpers ===
function mapHubs(hubs) {
  return hubs?.map((hub) => ({
    id: hub.id,
    ...hub.attributes,
    image: {
      id: hub.attributes?.image?.data?.id,
      ...hub.attributes?.image?.data?.attributes,
    },
    topics: hub.attributes?.topics?.data?.map((topic) => ({
      id: topic.id,
      ...topic.attributes,
    })),
    author: {
      id: hub.attributes?.author?.data?.id,
      ...hub.attributes?.author?.data?.attributes,
    },
    chapters: hub.attributes?.chapters?.data?.map((chapter) => ({
      id: chapter.id,
      ...chapter.attributes,
      posts: resolvePosts(chapter?.attributes?.posts?.data ?? []),
    })),
  }))
}

function mapChapters(chapters) {
  return resolveChapters(chapters)
}

function mapPosts(posts) {
  return resolvePosts(posts)
}
