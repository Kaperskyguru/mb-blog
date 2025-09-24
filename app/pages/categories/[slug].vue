<template>
  <main>
    <CategoriesOverview :name="name" :posts="posts" />
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useHead } from '#imports'
import { usePostStore } from '../../stores/post'

const route = useRoute()
const postStore = usePostStore()

// Slug from route or fallback
const name = computed(() => route.params?.slug ?? 'backend')

// Fetch posts
const { data: posts } = await useAsyncData('category-posts', async () => {
  let posts = postStore.getPostsByCategory

  if (!posts?.length) {
    const data = {
      page: route.query.page ? Number(route.query.page) : 1,
      slug: name.value,
      count: 22,
      populate: 'author,featured_image',
    }
    posts = await postStore.getCategoryPosts(data)
  }

  return posts
})

// Head/meta
useHead(() => ({
  title: name.value,
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
}))
</script>

<style scoped>
/* Add custom styles if needed */
</style>
