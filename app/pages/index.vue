<template>
  <div>
    <HubsOverview :hubs="hubs" />
  </div>
</template>

<script setup>
import { useRoute } from 'nuxt/app'
import { useHubsStore } from '~/stores/hubs'

const route = useRoute()
const store = useHubsStore()

definePageMeta({
  layout: 'hub',
})

// --- SEO / Head ---
useHead({
  title: 'Hubs',
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

const { data: hubs } = await useAsyncData('hubs', async () => {
  let hubs = store.hubs
  if (!hubs.length) {
    hubs = await store.getHubs({
      page: route.query?.page ? Number(route.query?.page) : 1,
      count: 22,
    })
  }

  return hubs
})
</script>

<style scoped>
</style>
