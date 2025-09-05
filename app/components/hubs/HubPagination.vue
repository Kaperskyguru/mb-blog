<template>
  <div class="row p-4">
    <div class="col-md-6">
      <NuxtLink v-if="prev" :to="linkTo(prev.slug)">
        <p class="fw-normal" style="color: #f7f5fa">Prev</p>
        <h4 class="text-white">{{ prev.title }}</h4>
      </NuxtLink>
    </div>

    <div class="col-md-6 text-md-end">
      <NuxtLink v-if="next" :to="linkTo(next.slug)">
        <p class="fw-normal" style="color: #f7f5fa">Next</p>
        <h4 class="text-white">{{ next.title }}</h4>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHubsStore } from '~/stores/hubs' // ✅ Adjust path to your store

// Props
const props = defineProps({
  chapter: { type: Object, default: () => ({}) },
  outlines: { type: Array, default: () => [] },
})

const route = useRoute()
const hubStore = useHubsStore()

const hubs = ref([])

// ✅ Base URL detection
const getBaseURL = computed(() =>
  route.name?.includes('resources-hub-slug') ? '/resources' : ''
)

const chapterSlug = computed(() => props.chapter?.slug ?? '')

// ✅ Next outline
const next = computed(() => {
  const size = props.chapter?.posts?.length
  const currentSlug = route.params.slug

  let currentIndex = props.outlines.findIndex(
    (item) => item.slug === currentSlug
  )

  if (props.outlines[size - 1]?.slug === currentSlug) {
    const chapter = nextChapter()
    if (!chapter?.posts?.length) return null
    return { title: chapter.title, slug: chapter.slug }
  }

  return props.outlines[currentIndex + 1] || null
})

// ✅ Prev outline
const prev = computed(() => {
  const currentSlug = route.params.slug
  let currentIndex = props.outlines.findIndex(
    (item) => item.slug === currentSlug
  )

  if (props.outlines[0]?.slug === currentSlug) {
    const chapter = prevChapter()
    if (!chapter?.posts?.length) return null
    return { title: chapter.title, slug: chapter.slug }
  }

  return props.outlines[currentIndex - 1] || null
})

// ✅ Router-safe link builder
function linkTo(slug) {
  return {
    name: route.name,
    params: { hub: route.params.hub, slug },
  }
}

// ✅ Load hub
async function getHub() {
  const slug = route.params.hub
  let hub = await hubStore.getHubBySlug(slug)

  if (!hub?.length) {
    hub = await hubStore.getHub({
      slug,
      populate: {
        image: true,
        chapters: { populate: { posts: true } },
      },
    })
  }

  hubs.value = hub
  return hub
}

// ✅ Prev/Next chapter helpers
function prevChapter() {
  const chapters = hubs.value?.chapters || []
  if (!chapters.length || chapters[0].slug === chapterSlug.value) return null

  const currentIndex = chapters.findIndex(
    (item) => item.slug === chapterSlug.value
  )

  return chapters[currentIndex - 1] || null
}

function nextChapter() {
  const chapters = hubs.value?.chapters || []
  if (
    !chapters.length ||
    chapters[chapters.length - 1].slug === chapterSlug.value
  )
    return null

  const currentIndex = chapters.findIndex(
    (item) => item.slug === chapterSlug.value
  )

  return chapters[currentIndex + 1] || null
}

// ✅ Lifecycle
onMounted(async () => {
  await getHub()
})
</script>
