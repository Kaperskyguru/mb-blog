<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="col-md-8">
    <!-- Title -->
    <span v-if="isChapter" class="fw-light">
      <p :style="{ color }" class="pb-1">{{ title }}</p>
    </span>

    <h1 v-else class="fw-light fs-3 fw-bold pb-4">
      {{ title }}
    </h1>

    <!-- Article -->
    <ReadArticle :post="{ ...post, content }" />

    <!-- Custom Alert -->
    <div v-if="showReadMore" :class="{ 'pb-5': !isChapter }">
      <CustomAlert
        :bgColor="color"
        :showRead="true"
        :showDownload="hasPDF"
        :readLink="generateReadLink"
        :link="generatePdfURL"
      >
        <template #title>Access the {{ title }}</template>
        <template #description>{{ description }}</template>
      </CustomAlert>
    </div>

    <!-- Chapter Outline -->
    <div v-if="isChapter" class="w-100 pt-5">
      <ChapterOutline
        v-for="(chapterPost, i) in post?.posts"
        :key="i"
        :color="color"
        :post="{ ...chapterPost, hub: hubSlug }"
      />
    </div>

    <PlatformAd />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  post: { type: Object, default: () => ({}) },
  color: { type: String, default: '' },
  isChapter: { type: Boolean, default: false },
})

const route = useRoute()

const hasPDF = computed(() => {
  const chapter = props.post.chapter
  const chapters = props.post.chapters
  return (
    Array.isArray(chapters) &&
    chapters.length > 0 &&
    !!chapter?.id &&
    chapter?.hub?.type === 'pdf'
  )
})

const showReadMore = computed(() => {
  return props.post?.chapters?.length > 0 && route.path.startsWith('/')
})

const generateReadLink = computed(() => {
  if (isBook.value) {
    const chapter = props.post.chapters[0]
    return '/books/' + chapter?.hub?.slug
  }
  return `/posts/${props.post.slug}`
})

const generatePdfURL = computed(() => {
  if (isBook.value) {
    const chapter = props.post.chapters[0]
    return '/books/' + chapter?.hub?.slug
  }
  return `/resources/${props.post?.chapter?.hub?.slug}/${props.post?.slug}`
})

const hubSlug = computed(() => props.post?.hub?.slug ?? '')

const content = computed(
  () => props.post?.content ?? props.post?.description ?? ''
)

const isBook = computed(() => props.post?.type === 'book')

const description = computed(() => {
  return `Click on the button${hasPDF.value ? 's' : ''} below to ${
    hasPDF.value ? 'download for offline or' : ''
  } read the ${title.value} online`
})

const title = computed(() => {
  if (props.isChapter) return 'Overview'
  return props.post?.title ?? ''
})
</script>

<style scoped>
figure iframe {
  width: 100%;
  height: 400px !important;
}

@media (max-width: 991.98px) {
  #article,
  #meta {
    width: 100% !important;
  }
}

article img {
  height: auto;
  width: 100%;
  background-size: cover;
}

article > * {
  font-family: 'Georgia', serif !important;
}

article p {
  font-size: 1.125rem;
  margin-bottom: 1.3rem;
  font-weight: 400;
  line-height: 1.8;
}

article h1,
article h2,
article h3,
article h4,
article h5,
article h6 {
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
}

article h3,
article h4 {
  font-weight: normal;
}

article h5,
article h6 {
  font-weight: lighter;
}

article h1,
article h2 {
  font-weight: bold;
}

article ul {
  list-style: disc;
  margin-bottom: 1.3rem;
}

article ul li {
  line-height: 32px;
  font-size: 1.125rem;
  font-weight: 400;
}

article figure figcaption {
  line-height: 32px;
  text-align: center;
  font-style: italic;
  font-weight: 400;
}

article figure img,
img {
  outline: none !important;
  margin: 0 auto !important;
  display: inline-block;
  width: 10%;
  height: auto;
  border-radius: 0 !important;
}

#article a,
#article a:hover {
  color: rgb(187, 74, 3);
  transition: all 0.2s ease-in-out 0s;
  background-color: transparent;
}

@media screen and (min-width: 769px) {
  .share-box,
  .newletter-box {
    display: none;
  }
}
</style>
