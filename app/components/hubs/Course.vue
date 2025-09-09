<template>
  <div
    class="col-span-12 md:col-span-2 p-0 border rounded bg-white min-w-[300px] max-w-[388px] overflow-hidden"
  >
    <!-- Banner Image -->
    <div class="relative flex w-full items-center justify-center">
      <div class="w-full h-full">
        <img class="w-full h-auto" :src="banner" :alt="title" />
      </div>
    </div>

    <!-- Course Info -->
    <div class="p-3 min-h-[148px] mt-2">
      <div class="flex justify-between items-center mb-2">
        <h3
          class="uppercase bg-green-600 rounded py-1 px-2 text-white text-[1rem]"
        >
          {{ type }}
        </h3>
        <span class="border border-primary rounded px-2 text-primary text-sm">
          {{ isPremium ? `$${amount}` : 'Free' }}
        </span>
      </div>

      <div class="course-content">
        <h2 class="font-bold text-[1.5rem] leading-[2.5rem]">
          {{ title }}
        </h2>
        <p v-html="summarySnippet" class="text-gray-500"></p>
      </div>
    </div>

    <!-- Footer: Content Count + Button -->
    <div class="flex justify-between items-center px-3 pb-4">
      <div class="flex items-center gap-2">
        <img
          class="w-4 h-4"
          src="~/assets/icons/openbook-icon.png"
          alt="Content"
        />
        <span class="text-sm">{{ totalContent }}+ Contents</span>
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
