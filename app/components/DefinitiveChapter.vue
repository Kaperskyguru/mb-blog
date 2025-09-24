<template>
  <section>
    <!-- Chapter Header -->
    <section
      :id="chapter.slug"
      class="mb-10 text-white"
      :style="{ backgroundColor: color }"
    >
      <div class="mx-auto w-3/4 md:w-full">
        <!-- Title -->
        <div class="my-12 text-center pt-10">
          <h2 class="text-white text-4xl font-bold">
            <span class="block mb-3 text-2xl font-extrabold">
              {{ splitTitle.title }}:
            </span>
            {{ splitTitle.subtitle }}
          </h2>
          <div class="border-b mt-3 w-full"></div>
        </div>

        <!-- Content + Image -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10">
          <div>
            <article class="w-full prose prose-invert" v-html="content" />
          </div>
          <div class="flex justify-center items-start">
            <img
              :src="designURL"
              class="w-full h-auto rounded-lg shadow-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Posts under this chapter -->
    <div id="article" class="mx-auto w-3/4 md:w-full">
      <DefinitiveArticle
        v-for="(post, index) in getPosts"
        :key="index"
        :post="post"
        :chapter="chapter"
        :isPremium="isPremium"
      />
    </div>
  </section>
</template>


<script setup>
import { useRoute } from 'nuxt/app'
import { computed } from 'vue'

const props = defineProps({
  chapter: {
    type: Object,
    default: () => ({}),
  },
})

const color = computed(() => {
  const mixedColor = props.chapter?.color ?? ''
  if (mixedColor.includes('gradient')) {
    const first = mixedColor.split('#')[1]
    const c = first.split(' ')[0]
    return `#${c.replace(/[^a-zA-Z0-9 ]/g, '')}`
  }
  return mixedColor
})

const content = computed(
  () => props.chapter?.excerpt ?? props.chapter?.content ?? ''
)

const designURL = computed(() => props.chapter?.design_url ?? '')

const splitTitle = computed(() => {
  if (!props.chapter?.title) return { title: '', subtitle: '' }
  const [title, subtitle] = props.chapter.title.split(':')
  return { title, subtitle }
})

const isPremium = computed(() => !!props.chapter?.is_premium)

const getPosts = computed(() => {
  if (isPremium.value) return [props.chapter?.posts?.[0] ?? {}]
  return props.chapter?.posts ?? []
})
</script>

<style scoped>
figure iframe {
  width: 100%;
  height: 400px !important;
}

.cover {
  max-width: 425.5px;
  height: auto;
  width: 100%;
}

@media (max-width: 991.98px) {
  #chapter {
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
  padding: 0.8rem 0;
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

article figure img {
  outline: none !important;
  margin: 0 auto !important;
  border: 5px solid #cccccc;
  display: inline-block;
  width: 100%;
  height: auto;
  border-radius: 0 !important;
}

#article a,
#article a:hover {
  color: rgb(187, 74, 3);
  transition: all 0.2s ease-in-out 0s;
  background-color: transparent;
}
</style>
