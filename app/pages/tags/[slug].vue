<template>
  <main>
    <TagsOverview :name="name" :posts="posts" />
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useHead } from '#imports'
import { usePostStore } from '../../stores/post'
import { computed } from 'vue'
import { useAsyncData } from 'nuxt/app'

const route = useRoute()
const postStore = usePostStore()

// Get the slug from route or fallback
const name = computed(() => route.params?.slug ?? 'backend')

// Fetch posts
const { data: posts } = await useAsyncData('tag_posts', async () => {
  // Try getting posts from the store getter
  let posts = postStore.getPostsByTag

  if (!posts?.length) {
    const data = {
      page: route.query.page ? Number(route.query.page) : 1,
      slug: name.value,
      count: 22,
      populate: 'author,featured_image',
    }
    posts = await postStore.getTagPosts(data)
  }

  return posts
})

// Head meta
useHead(() => ({
  title: `${name.value} - Tags`,
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
/* Add your styles if needed */
</style>
