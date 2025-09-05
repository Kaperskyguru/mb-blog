<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <HubContentOverview v-if="post" :post="post" :chapter="chapter" />
    <ChapterContentOverview v-else :post="post" :chapter="chapter" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead, useAsyncData, useRuntimeConfig } from '#imports'
import { useHubsStore } from '~/stores/hubs'

// Route params
const route = useRoute()
const store = useHubsStore()
const config = useRuntimeConfig()

// ---- Fetch Post ----
const { data: post } = await useAsyncData(
  `post-${route.params.slug}`,
  async () => {
    try {
      let post = store.post

      if (!post) {
        post = await store.getPost({
          slug: route.params.slug,
          populate: '*',
        })
      }

      return post
    } catch (err) {
      console.error(err)
      return null
    }
  }
)

const { data: chapter } = await useAsyncData(
  `chapter-${post.value?.chapter?.slug}`,
  async () => {
    try {
      const slug = post.value?.chapter?.slug ?? route.params.slug

      let chapter = store.chapter

      if (!chapter) {
        chapter = await store.getChapter({
          slug: slug,
          populate: '*',
        })
      }
      return chapter
    } catch (err) {
      console.error(err)
      return null
    }
  }
)

// ---- Computed values ----
const BASE_URL = config.public.baseUrl || 'https://masteringbackend.com'

const getBaseURL = computed(() => `${BASE_URL}/`)

const image = computed(() =>
  post.value
    ? post.value.image ??
      post.value.featured_image?.url ??
      '/img/backend-2023.jpg'
    : '/img/backend-2023.jpg'
)

const stripTags = (text) => text?.replace(/(<([^>]+)>)/gi, '') || ''

const splitTags = (tags) =>
  Array.isArray(tags) ? tags.map((tag) => tag.title).join(', ') : ''

// ---- Head Meta ----
const seoTarget = computed(() => post.value || chapter.value)

useHead(() => {
  if (!seoTarget.value) return {}

  return {
    title: seoTarget.value.title,
    meta: [
      {
        name: 'keywords',
        content: splitTags(seoTarget.value.tags) ?? '',
      },
      {
        name: 'description',
        content: stripTags(
          seoTarget.value.description || seoTarget.value.excerpt
        ),
      },
      { property: 'og:title', content: seoTarget.value.title },
      {
        property: 'og:description',
        content: stripTags(
          seoTarget.value.description || seoTarget.value.excerpt
        ),
      },
      { property: 'og:image', content: image.value },
      {
        property: 'og:url',
        content: `${getBaseURL.value}${route.params.hub}/${route.params.slug}`,
      },
      { property: 'og:image:width', content: '800' },
      { property: 'og:image:height', content: '800' },
      { property: 'og:type', content: 'article' },
      {
        property: 'article:published_time',
        content: seoTarget.value.createdAt,
      },
      { property: 'article:modified_time', content: seoTarget.value.updatedAt },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }
})
</script>
