<template>
  <main>
    <!-- --------------------------------------- Header Section ------------------------------------------------ -->
    <HubBanner :chapter="chapter" :color="color" :is-chapter="true" />
    <!-- --------------------------------------- End Header Section --------------------------------------------- -->

    <!-- -------------------------------------------- Start Main Section ---------------------------------------- -->
    <section class="py-6">
      <Breadcrumb :hub="hub" :color="color" :chapter="chapter" :post="post" />

      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-6 mt-6">
          <!-- Sidebar Outline -->
          <div class="md:w-1/4 w-full py-4">
            <Outline :color="color" :outlines="outlines" />
          </div>

          <!-- Main Hub Content -->
          <div class="flex-1">
            <HubContent :post="chapter" is-chapter :color="color" />
          </div>
        </div>
      </div>
    </section>
    <!-- -------------------------------------------- End Main Section ------------------------------------------ -->

    <section>
      <!-- <RelatedHubs :color="color" /> -->
    </section>
    <!-- ---------------------------------- End Slides ------------------------------------- -->
  </main>
</template>


<script setup>
import { computed } from 'vue'

// ✅ Define props in Composition API
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

// ✅ Computed properties
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
/* add scoped styles here if needed */
</style>
