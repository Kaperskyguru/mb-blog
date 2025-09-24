<template>
  <section class="bg-white">
    <!-- Chapter Header -->
    <section class="mb-10 text-white" :style="{ backgroundColor: color }">
      <div class="container mx-auto max-w-5xl text-center py-12">
        <h1 class="text-4xl font-bold">
          <span class="block mb-2 text-2xl">{{ splitTitle.title }}:</span>
          {{ splitTitle.subtitle }}
        </h1>
        <div class="mt-3 border-b w-24 mx-auto"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <article v-html="content" class="text-left" />
          <img :src="image" class="w-full h-auto rounded" :alt="post.title" />
        </div>
      </div>
    </section>

    <!-- Chapter Contents -->
    <section class="container mx-auto max-w-5xl mb-12">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold">Contents</h2>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="(chapter, i) in mapChapters"
          :key="i"
          class="flex flex-col items-center text-center"
        >
          <NuxtLink :to="`/${post.slug}#${chapter.slug}`">
            <div
              class="rounded-full border overflow-hidden flex items-center justify-center"
              style="height: 140px; width: 140px"
            >
              <img
                class="object-cover"
                :src="chapter.design_url"
                :alt="chapter.title"
              />
            </div>
            <h6 class="mt-3 font-semibold">
              {{ splitChapterTitle(chapter).title }}
            </h6>
            <p class="text-gray-600">
              {{ splitChapterTitle(chapter).subtitle }}
            </p>
          </NuxtLink>
        </div>

        <div v-if="hasPDF" class="col-span-full">
          <CustomAlert :showDownload="hasPDF" :link="generatePdfURL" />
        </div>
      </div>
    </section>

    <!-- Definitive Chapters -->
    <DefinitiveChapter
      v-for="(chapter, index) in chapters"
      :key="index"
      :chapter="chapter"
    />

    <!-- Ads -->
    <div id="meta" class="container mx-auto max-w-3xl py-6">
      <PlatformAd />
    </div>

    <!-- Tags & Newsletter -->
    <div class="container mx-auto max-w-5xl py-6">
      <div class="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2"
          viewBox="0 0 24 24"
          :fill="color"
          width="24"
          height="24"
        >
          <path
            d="M10.9042 2.1001L20.8037 3.51431L22.2179 13.4138L13.0255 22.6062C12.635 22.9967 12.0019 22.9967 11.6113 22.6062L1.71184 12.7067C1.32131 12.3162 1.32131 11.683 1.71184 11.2925L10.9042 2.1001ZM13.7327 10.5854C14.5137 11.3664 15.78 11.3664 16.5611 10.5854C17.3421 9.80433 17.3421 8.538 16.5611 7.75695C15.78 6.9759 14.5137 6.9759 13.7327 7.75695C12.9516 8.538 12.9516 9.80433 13.7327 10.5854Z"
          />
        </svg>
        <div>
          <NuxtLink
            v-for="tag in post.tags"
            :key="tag.id"
            :to="`/tags/${tag.slug}`"
          >
            {{ tag.name }}<span v-if="!isLastTag(tag)">, </span>
          </NuxtLink>
        </div>
      </div>

      <div v-if="post" class="mb-6">
        <SideNewsletter :color="color" />
      </div>

      <div class="py-4">
        <Comments v-if="post" />
      </div>
    </div>
  </section>
</template>


<script setup>
import { computed } from 'vue'
import { useRoute } from '#imports'

const props = defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
})

const route = useRoute()

const hasPDF = computed(() => {
  const resource = props.post.resource
  const chapters = props.post.chapters ?? []
  return chapters.length && resource?.id && resource?.hub?.type === 'pdf'
})

const generatePdfURL = computed(() => {
  return props.post?.resource
    ? `/resources/${props.post.resource.hub.slug}/${props.post.resource.slug}`
    : '#'
})

const color = computed(() => {
  const mixedColor = props.post?.color ?? ''
  if (mixedColor.includes('gradient')) {
    const first = mixedColor.split('#')[1]
    const c = first.split(' ')[0]
    return `#${c.replace(/[^a-zA-Z0-9 ]/g, '')}`
  }
  return mixedColor
})

const image = computed(() => {
  return (
    props.post?.image ??
    props.post?.featured_image?.url ??
    '~/assets/img/image7.png'
  )
})

const content = computed(() => props.post?.excerpt ?? props.post?.content ?? '')
const chapters = computed(() => props.post?.chapters ?? [])
const mapChapters = computed(() =>
  (props.post?.chapters ?? []).filter((ch) => !ch.title.includes('Conclusion'))
)

const splitTitle = computed(() => {
  if (!props.post?.title) return { title: '', subtitle: '' }
  const [title, subtitle] = props.post.title.split(':')
  return { title, subtitle }
})

function splitChapterTitle(chapter) {
  if (!chapter?.title) return { title: '', subtitle: '' }
  const [title, subtitle] = chapter.title.split(':')
  return { title, subtitle }
}

function isLastTag(tag) {
  return props.post.tags.indexOf(tag) === props.post.tags.length - 1
}
</script>

<style scoped>
.chapter img {
  max-width: 100%;
}

.chapter .img {
  display: block;
  height: auto;
  margin: 1rem auto 0;
  object-fit: cover;
  object-position: center;
}

.chapter-title {
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  margin: 15px 0 6px;
  font-weight: 800;
}

.cover {
  max-width: 425.5px;
  height: auto;
  width: 100%;
}

.chapter-subtitle {
  font-size: 17px;
}

@media (max-width: 991.98px) {
  #chapter,
  .Content #chapters,
  .Content {
    width: 100% !important;
  }
}

@media screen and (min-width: 769px) {
  .share-box,
  .newletter-box {
    display: none;
  }
}
</style>
