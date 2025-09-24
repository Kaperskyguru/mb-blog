<template>
  <main>
    <AuthorsOverview :name="name" :posts="posts" />
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePostStore } from '../../stores/post'
import { useHead } from '#imports'

const route = useRoute()

// Replace with your Pinia store or composable
const postStore = usePostStore()

const { data: posts } = await useAsyncData('author-posts', async () => {
  let posts = postStore.getPostsByAuthor
  if (!posts?.length) {
    const data = {
      page: route.query.page ? route.query.page : 1,
      slug: route.params?.slug,
      count: 22,
      populate: 'author,featured_image',
    }
    posts = await postStore.getAuthorPosts(data)
  }

  return posts
})

const name = computed(() => {
  if (posts.value?.length) {
    return posts.value[0]?.author?.name ?? route.params?.slug
  }
  return route.params?.slug ?? 'backend'
})

useHead({
  title: name.value,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content:
        'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
})
</script>

<style>
</style>
