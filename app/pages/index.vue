<template>
  <main>
    <PostOverview :posts="posts" @search="searchPosts" />

    <!-- Infinite Scroll Sentinel -->
    <div
      ref="infiniteSentinel"
      class="h-10 flex justify-center items-center my-4"
    >
      <span v-if="loading">Loading more posts...</span>
      <span v-else-if="allLoaded">No more posts</span>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { usePostStore } from '~/stores/post'

const postStore = usePostStore()
const posts = ref([])
const page = ref(2)
const loading = ref(false)
const allLoaded = ref(false)
const infiniteSentinel = ref(null)

// Fetch initial posts
const { data: initialPosts } = await useAsyncData('posts', async () => {
  let fetchedPosts = postStore.getAllPosts
  if (!fetchedPosts.length) {
    fetchedPosts = await postStore.getPosts({
      page: 1,
      count: 22,
      populate: 'author,categories,featured_image',
    })
  }
  return fetchedPosts
})
posts.value = initialPosts.value || []

// -------------------- Methods --------------------
const searchPosts = async (search) => {
  const filteredPosts = await postStore.filterPosts({
    search,
    populate: 'author,categories,featured_image',
  })
  posts.value = filteredPosts
  page.value = 2
  allLoaded.value = false
}

const loadMorePosts = async () => {
  if (loading.value || allLoaded.value) return
  loading.value = true

  const newPosts = await postStore.getPosts({
    page: page.value,
    count: 22,
    populate: 'author,categories,featured_image',
  })

  if (newPosts.length > 0) {
    posts.value.push(...newPosts)
    page.value++
  } else {
    allLoaded.value = true
  }

  loading.value = false
}

// -------------------- Intersection Observer --------------------
let observer = null
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadMorePosts()
      }
    },
    { root: null, rootMargin: '0px', threshold: 1.0 }
  )
  if (infiniteSentinel.value) observer.observe(infiniteSentinel.value)
})

onUnmounted(() => {
  if (observer && infiniteSentinel.value)
    observer.unobserve(infiniteSentinel.value)
})

// -------------------- SEO --------------------
useHead({
  title: 'Posts',
  meta: [
    {
      name: 'description',
      content:
        'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
    },
    {
      property: 'og:title',
      content:
        'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
    },
    {
      property: 'og:description',
      content:
        'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
})
</script>

<style scoped>
.h-10 {
  height: 2.5rem;
}
</style>
