<template>
  <main>
    <!-- Hero Section -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Left -->
          <div class="flex-1">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900">
              {{ title }}
            </h1>
            <p class="mt-4 text-base text-gray-600">{{ desc }}</p>

            <div class="mt-8">
              <div class="mb-2 text-[#0a083b]">
                Be notified when we publish new {{ route.name }}.
              </div>
              <iframe
                src="https://embeds.beehiiv.com/78d77170-5724-4176-ad4a-9b9c6447f3ec?slim=true"
                height="52"
                frameborder="0"
                scrolling="no"
                class="w-full bg-transparent rounded-none border-0"
              />
            </div>
          </div>

          <!-- Right -->
          <div class="flex-1">
            <img class="w-full h-auto" :src="image" :alt="title" />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Courses -->
    <section
      v-if="route.path.includes('/courses')"
      class="max-w-7xl mx-auto px-4"
    >
      <h2 class="text-center text-2xl md:text-3xl font-semibold py-10">
        Featured Single Courses
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Course v-for="(course, i) in cFeatured" :key="i" :course="course" />
      </div>

      <div class="flex justify-center py-10">
        <Button type="link" appearance="primary" link="/courses/single">
          View All Courses
        </Button>
      </div>
    </section>

    <!-- Content Section -->
    <section>
      <h2
        v-if="route.path.includes('/courses')"
        class="text-center text-2xl md:text-3xl font-semibold py-10"
      >
        Roadmap Courses
      </h2>

      <div class="max-w-7xl mx-auto p-4">
        <div
          v-for="(hub, i) in hubs"
          :key="i"
          class="mt-8 bg-white shadow rounded-lg overflow-hidden"
        >
          <div class="flex flex-col xl:flex-row">
            <!-- Left -->
            <div
              class="xl:w-1/4 w-full leading-loose text-center text-white flex flex-col items-center justify-center"
              :style="{ backgroundColor: color(hub) }"
            >
              <div class="px-4">
                <h3 class="-6 text-2xl font-semibold">
                  {{ hub.title }} {{ isPDF(hub) ? 'Resources' : '' }}
                </h3>
              </div>
              <img
                loading="lazy"
                class="w-full max-w-xs mx-auto mt-4"
                :src="getDesign(hub)"
                :alt="hub.title"
              />
            </div>

            <!-- Right -->
            <div class="xl:w-3/4 w-full">
              <div
                class="flex flex-col lg:flex-row justify-between gap-8 py-8 px-6"
              >
                <!-- Left column -->
                <div class="lg:w-1/2">
                  <h5 class="pb-4 font-medium" :style="{ color: color(hub) }">
                    What you will learn
                  </h5>
                  <p class="leading-loose text-gray-800">
                    {{ hub.description }}
                  </p>
                </div>

                <!-- Right column -->
                <div class="lg:w-1/2">
                  <h5
                    v-if="getChapterCount(hub)"
                    class="pb-4 font-medium"
                    :style="{ color: color(hub) }"
                  >
                    <span v-if="isPDF(hub)">
                      {{ getChapterCount(hub) }} Resource{{
                        getChapterCount(hub) > 1 ? 's' : ''
                      }}
                    </span>
                    <span v-else-if="isBook(hub)">
                      {{ getPostCount(hub) }} Chapter{{
                        getPostCount(hub) > 1 ? 's' : ''
                      }}
                    </span>
                    <span v-else-if="isCourse(hub)">
                      {{ getChapterCount(hub) }} Module{{
                        getChapterCount(hub) > 1 ? 's' : ''
                      }}
                    </span>
                    <span v-else>
                      {{ getChapterCount(hub) }} Chapter{{
                        getChapterCount(hub) > 1 ? 's' : ''
                      }}
                    </span>
                  </h5>

                  <div
                    class="flex flex-col overflow-y-auto h-96 pr-2 space-y-3"
                  >
                    <!-- For Books -->
                    <div v-if="isBook(hub)">
                      <p
                        v-for="(chapter, idx) in getBookPostsFromHubChapter(
                          hub
                        )"
                        :key="idx"
                        class="flex items-center text-gray-800 text-lg font-light gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          :fill="color(hub)"
                          class="w-6 h-6 shrink-0"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16 12l-6 6V6z" />
                        </svg>
                        <span class="flex-1">{{ chapter.title }}</span>
                      </p>
                    </div>

                    <!-- For Other Types -->
                    <div
                      v-for="(chapter, idx) in (!isBook(hub) && hub.chapters) ||
                      []"
                      :key="idx"
                    >
                      <a
                        v-if="isPDF(hub)"
                        :href="`${getURL(hub)}/${getLink(chapter)}`"
                        class="block"
                      >
                        <p
                          class="flex items-center text-gray-800 text-lg font-light gap-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            :fill="color(hub)"
                            class="w-6 h-6 shrink-0"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M16 12l-6 6V6z" />
                          </svg>
                          <span class="flex-1">{{ chapter.title }}</span>
                        </p>
                      </a>

                      <p
                        v-else
                        class="flex items-center text-gray-800 text-lg font-light gap-2 m-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          :fill="color(hub)"
                          class="w-6 h-6 shrink-0"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16 12l-6 6V6z" />
                        </svg>
                        <span class="flex-1">{{ chapter.title }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div class="flex gap-3 items-start px-6 pb-6">
                <Button
                  class="w-full md:w-auto"
                  size="large"
                  type="link"
                  :href="getURL(hub)"
                  :custom-style="{
                    backgroundColor: color(hub),
                    color: '#fff !important',
                  }"
                >
                  Start Now
                </Button>
                <div v-if="isPremium(hub)">
                  <span
                    class="inline-block px-3 py-1 text-white text-sm rounded"
                    style="background: #191489"
                  >
                    Premium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script setup>
import { useRoute } from 'vue-router'

const props = defineProps({
  desc: {
    type: String,
    default:
      "Whether you're new to backend engineering, or want to scale up, this is your home for in-depth backend engineering knowledge.",
  },
  title: {
    type: String,
    default: 'Welcome To Our Content Hub',
  },
  hubs: {
    type: Array,
    default: () => [],
  },
  featured: {
    type: Array,
    default: () => [],
  },
})

const route = useRoute()

// computed replacement
const image =
  'https://res.cloudinary.com/kaperskydisk/image/upload/v1684533784/masteringbackend/posts/vectors/2842680.png'
const cFeatured = computed(() => props.featured.slice(0, 4))
// methods -> functions
const getURL = (hub) => {
  if (isBook(hub)) return `/books/${hub.slug}`
  if (isCourse(hub)) return `/courses/${hub.slug}`
  if (isPDF(hub)) return `/resources/${hub.slug}`
  return `/${hub.slug}`
}
const isPDF = (hub) => hub.type === 'pdf'
const getLink = (chapter) => chapter?.posts[0]?.slug
const isBook = (hub) => hub.type === 'book'
const isCourse = (hub) => hub.type === 'course'
const isPremium = (hub) => hub.is_premium
const getBookPostsFromHubChapter = (hub) => {
  if (!isBook(hub)) return []
  const chapters = hub?.chapters
  if (chapters && chapters.length > 1) return chapters
  if (chapters?.[0]) return chapters[0].posts
  return []
}
const color = (hub) => {
  const mixedColor = hub?.color ?? ''
  if (mixedColor.includes('gradient')) {
    const first = mixedColor.split('#')[1]
    const c = first.split(' ')[0]
    return `#${c.replace(/[^a-zA-Z0-9]/g, '')}`
  }
  return mixedColor
}
const getDesign = (hub) =>
  hub?.design_url ??
  'https://res.cloudinary.com/kaperskydisk/image/upload/v1684533784/masteringbackend/posts/vectors/2842680.pngg'
const getPostCount = (hub) => getBookPostsFromHubChapter(hub)?.length ?? 0
const getChapterCount = (hub) => hub?.chapters?.length ?? 0
</script>

<style scoped>
</style>
