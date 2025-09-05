<template>
  <HubOverview v-if="hub" :hub="hub" />
</template>

<script setup>
import { useAsyncData, useHead, useRuntimeConfig } from 'nuxt/app'
import { useRoute } from 'nuxt/app'
import { useHubsStore } from '~/stores/hubs'

definePageMeta({
  layout: 'hub',
})

const route = useRoute()
const store = useHubsStore()
const config = useRuntimeConfig()

// Helpers
const stripTags = (text) => (text ? text.replace(/(<([^>]+)>)/gi, '') : '')

const splitTags = (tags) =>
  Array.isArray(tags) ? tags.map((t) => t.title).join(', ') : ''

// --- Fetch hub ---
const { data: hub } = await useAsyncData('hub', async () => {
  // check local store first
  let hub = store.getHubBySlug(route.params.hub)
  if (!hub) {
    hub = await store.getHub({
      slug: route.params.hub,
      populate: {
        image: true,
        chapters: {
          populate: { posts: true },
        },
      },
    })
  }
  console.log(hub)
  return hub
})

// --- SEO ---
useHead(() => {
  if (!hub.value) return {}

  const BASE_URL = config.public.BASE_URL || 'https://masteringbackend.com'

  return {
    title: hub.value.title,
    meta: [
      { name: 'keywords', content: splitTags(hub.value.tags) },
      { name: 'description', content: stripTags(hub.value.description) },

      { property: 'og:title', content: hub.value.title },
      { property: 'og:description', content: stripTags(hub.value.description) },
      { property: 'og:image', content: hub.value.image?.url },
      { property: 'og:url', content: `${BASE_URL}/${hub.value.slug}` },
      { property: 'og:image:width', content: '800' },
      { property: 'og:image:height', content: '800' },
      { property: 'og:type', content: 'article' },

      { property: 'article:published_time', content: hub.value.createdAt },
      { property: 'article:modified_time', content: hub.value.updatedAt },

      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }
})
</script>

<style scoped>
</style>
