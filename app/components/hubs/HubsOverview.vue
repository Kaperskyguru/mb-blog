<template>
  <main class="main">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 hero__title">
            <h1 class="title__text">{{ title }}</h1>
            <p class="title__subtext fs-6">{{ desc }}</p>

            <div class="mt-5">
              <div class="mb-1" style="color: #0a083b">
                Be notified when we publish new {{ route.name }}.
              </div>
              <iframe
                src="https://embeds.beehiiv.com/78d77170-5724-4176-ad4a-9b9c6447f3ec?slim=true"
                height="52"
                frameborder="0"
                scrolling="no"
                style="
                  margin: 0;
                  border-radius: 0;
                  background: transparent;
                  width: 100%;
                "
              />
            </div>
          </div>
          <div class="col-md-6 hero__image">
            <img class="img-fluid" :src="image" :alt="title" />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Courses -->
    <section class="container" v-if="route.path.includes('/courses')">
      <h2 class="text-center py-5">Featured Single Courses</h2>
      <div class="row gap-3 p-2">
        <Course v-for="(course, i) in cFeatured" :key="i" :course="course" />
      </div>

      <div class="d-flex justify-content-center py-5">
        <Button type="link" appearance="primary" link="/courses/single">
          View All Courses
        </Button>
      </div>
    </section>

    <!-- Content Section -->
    <section class="Content">
      <h2 class="text-center py-5" v-if="route.path.includes('/courses')">
        Roadmap Courses
      </h2>
      <div class="container">
        <div v-for="(hub, i) in hubs" :key="i" class="row mt-5 bg-white">
          <div
            class="col-xl-3 lh-lg col-lg-12 text-center text-white"
            :style="{ backgroundColor: color(hub) }"
          >
            <h3 class="py-5 font-weight-normal fs-4">
              {{ hub.title }} {{ isPDF(hub) ? 'Resources' : '' }}
            </h3>
            <img
              loading="lazy"
              class="img-fluid hub mt-3"
              :src="getDesign(hub)"
              :alt="hub.title"
            />
          </div>

          <div class="col-xl-9 col-lg-12">
            <div class="row justify-content-between py-5 px-4">
              <!-- Left column -->
              <div class="col-lg-6">
                <h5 class="pb-4" :style="{ color: color(hub) }">
                  What you will learn
                </h5>
                <p class="lh-lg">{{ hub.description }}</p>
              </div>

              <!-- Right column -->
              <div class="col-lg-6">
                <h5
                  class="pb-4"
                  :style="{ color: color(hub) }"
                  v-if="getChapterCount(hub)"
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
                  class="d-flex flex-column overflow-auto"
                  style="height: 300px"
                >
                  <div v-if="isBook(hub)">
                    <p
                      v-for="(chapter, idx) in getBookPostsFromHubChapter(hub)"
                      :key="idx"
                      class="pe-2 font-weight-light d-flex flex-row fs-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        :fill="color(hub)"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M16 12l-6 6V6z" />
                      </svg>
                      <span class="flex-fill">{{ chapter.title }}</span>
                    </p>
                  </div>

                  <div
                    v-for="(chapter, idx) in (!isBook(hub) && hub.chapters) ||
                    []"
                    :key="idx"
                  >
                    <a
                      v-if="isPDF(hub)"
                      :href="`${getURL(hub)}/${getLink(chapter)}`"
                    >
                      <p class="pe-2 font-weight-light d-flex flex-row fs-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          :fill="color(hub)"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16 12l-6 6V6z" />
                        </svg>
                        <span class="flex-fill">{{ chapter.title }}</span>
                      </p>
                    </a>

                    <p
                      v-else
                      class="pe-2 font-weight-light d-flex flex-row fs-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        :fill="color(hub)"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M16 12l-6 6V6z" />
                      </svg>
                      <span class="flex-fill">{{ chapter.title }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="col-12 d-flex gap-2 align-self-end">
              <Button
                class="btn-block"
                size="large"
                type="link"
                :href="getURL(hub)"
                :custom-style="{ backgroundColor: color(hub), color: '#fff' }"
              >
                Start Now
              </Button>
              <div v-if="isPremium(hub)">
                <span class="badge text-light" style="background: #191489"
                  >Premium</span
                >
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
