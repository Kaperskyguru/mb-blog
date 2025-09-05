<template>
  <div
    class="col-md-2 col-12 p-0 border rounded bg-white"
    style="min-width: 300px; max-width: 388px; overflow: hidden"
  >
    <!-- Banner Image -->
    <div
      class="position-relative d-flex w-full align-items-center justify-content-center"
    >
      <div class="w-100 h-100">
        <img class="img-fluid w-100" :src="banner" :alt="title" />
      </div>
    </div>

    <!-- Course Info -->
    <div class="p-3" style="min-height: 148px; margin-top: 0.5rem">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h3
          class="text-uppercase bg-success rounded py-1 px-2 text-white"
          style="font-size: 1rem"
        >
          {{ type }}
        </h3>
        <span class="border-primary border rounded px-2 text-primary">
          {{ isPremium ? `$${amount}` : 'Free' }}
        </span>
      </div>

      <div class="course-content">
        <h2
          class="font-weight-bold"
          style="font-size: 1.5rem; line-height: 2.5rem"
        >
          {{ title }}
        </h2>
        <p v-html="summarySnippet" class="text-muted"></p>
      </div>
    </div>

    <!-- Footer: Content Count + Button -->
    <div class="d-flex justify-content-between align-items-center px-3 pb-4">
      <div class="d-flex align-items-center gap-2">
        <img
          class="star-img"
          src="~/assets/icons/openbook-icon.png"
          alt="Content"
        />
        <span style="font-size: 0.875rem">{{ totalContent }}+ Contents</span>
      </div>
      <Button
        type="link"
        appearance="primary"
        target="_blank"
        :href="`https://app.masteringbackend.com/courses/${slug}`"
      >
        Start Learning
      </Button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  course: {
    type: Object,
    default: () => ({}),
  },
})

// Computed properties
const title = computed(() => props.course?.title ?? '')
const type = computed(() => props.course?.type ?? '')
const slug = computed(() => props.course?.slug ?? '')
const summary = computed(() => props.course?.summary ?? '')
const isPremium = computed(() => props.course?.isPremium ?? false)
const amount = computed(() => props.course?.amount ?? 'Paid')

const totalContent = computed(() => {
  const chapters = props.course?.chapters ?? []
  return chapters.reduce((acc, chapter) => {
    const videos = chapter.videos?.length ?? 0
    const articles = chapter.articles?.length ?? 0
    return acc + videos + articles
  }, 0)
})

const banner = computed(() => {
  return (
    props.course?.banner ??
    'https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/nodejs%20essential.png'
  )
})

// Method replacement for substring
const summarySnippet = computed(() => {
  if (!summary.value) return ''
  return summary.value.length <= 160
    ? summary.value
    : summary.value.substring(0, 160) + '...'
})
</script>

<style scoped>
.course-content p {
  font-size: 0.874rem !important;
}
</style>
