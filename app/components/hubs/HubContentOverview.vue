<!-- eslint-disable vue/no-v-html -->
<template>
  <main>
    <!-- Header Banner -->
    <HubBanner :chapter="chapter" :color="color" />

    <!-- Main Section -->
    <section class="main" style="background-color: #fff">
      <Breadcrumb :hub="hub" :color="color" :chapter="chapter" :post="post" />

      <div class="container">
        <div class="row Resources pt-4 p-0 m-0">
          <div class="py-4 col-md-3 w100">
            <Outline :color="color" :outlines="outlines" />
          </div>

          <HubContent
            :color="color"
            style="background-color: white"
            :post="post"
          />
        </div>
      </div>
    </section>

    <!-- Pagination Section -->
    <section v-if="postSize">
      <div class="slides" :style="{ background: color }">
        <div class="container">
          <HubPagination :chapter="chapter" :outlines="outlines" />
        </div>
      </div>
    </section>

    <section>
      <!-- <RelatedHubs :color="color" /> -->
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  chapter: {
    type: Object,
    default: () => ({}),
  },
  post: {
    type: Object,
    default: () => ({}),
  },
})

// ✅ derived values
const postSize = computed(() => props.chapter?.posts?.length > 1)

const color = computed(() => {
  const mixedColor = props.chapter?.color ?? ''
  if (mixedColor.includes('gradient')) {
    const first = mixedColor.split('#')[1]
    const c = first.split(' ')[0]
    return `#${c.replace(/[^a-zA-Z0-9 ]/g, '')}`
  }
  return mixedColor
})

const hub = computed(() => props.chapter?.hub ?? {})

const outlines = computed(
  () =>
    props.chapter?.posts?.map((post) => ({
      title: post.title,
      slug: post.slug,
    })) ?? []
)
</script>

<style>
</style>
