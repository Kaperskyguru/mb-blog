<template>
  <div class="row bg-white mb-5 shadow">
    <!-- Left Section -->
    <div
      class="col-xl-3 col-lg-12 text-center text-white"
      :style="{ backgroundColor: color }"
    >
      <NuxtLink
        v-if="isPDF"
        :to="
          shouldActivateWaitingList || isPremium
            ? '#'
            : { path: `${getBaseURL}/${chapterSlug}/${firstPostSlug}` }
        "
      >
        <h3 class="py-5 font-weight-normal fs-4">{{ chapter.title }}</h3>
        <img class="img-fluid hub mt-3" :src="getDesign" :alt="chapter.title" />
      </NuxtLink>

      <NuxtLink
        v-else
        :to="
          shouldActivateWaitingList || isPremium
            ? '#'
            : { path: `${getBaseURL}/${chapterSlug}/${chapter.slug}` }
        "
      >
        <h3 class="py-5 font-weight-normal fs-4">{{ chapter.title }}</h3>
        <img class="img-fluid hub mt-3" :src="getDesign" :alt="chapter.title" />
      </NuxtLink>
    </div>

    <!-- Right Section -->
    <div class="col-xl-9 col-lg-12">
      <div class="row py-5 px-4">
        <div class="col-12 row">
          <!-- Description -->
          <div class="col-lg-6">
            <h5 class="font-weight-normal fs-4 pb-4" :style="{ color }">
              What you will learn
            </h5>
            <p
              class="lh-lg font-weight-light fs-5"
              v-html="chapter.description"
            ></p>
          </div>

          <!-- Resources / Outline -->
          <div class="col-lg-6">
            <h5 class="font-weight-normal fs-4 pb-4" :style="{ color }">
              <span v-if="isPDF">Outline</span>
              <span v-else>{{ postCount }} Resources</span>
            </h5>

            <!-- Outline (PDF) -->
            <span
              v-if="isPDF"
              class="overflow-auto d-flex flex-column justify-content-between"
              style="height: 300px"
            >
              <p v-for="(outline, i) in outlines" :key="i">
                <NuxtLink
                  class="font-weight-light d-flex flex-row justify-content-start fs-5"
                  :to="
                    shouldActivateWaitingList || isPDF || isPremium
                      ? '#'
                      : {
                          path: `${getBaseURL}/${chapterSlug}/${firstPostSlug}`,
                        }
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    :fill="color"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 12l-6 6V6z" />
                  </svg>
                  <span class="flex-fill" v-html="outline"></span>
                </NuxtLink>
              </p>
            </span>

            <!-- Normal Resources -->
            <span v-else>
              <p v-for="(post, i) in chapter.posts" :key="i">
                <NuxtLink
                  class="font-weight-light d-flex flex-row justify-content-start fs-5"
                  :to="
                    shouldActivateWaitingList || isPremium
                      ? '#'
                      : { path: `${getBaseURL}/${chapterSlug}/${post.slug}` }
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    :fill="color"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 12l-6 6V6z" />
                  </svg>
                  <span class="flex-fill">{{ post.title }}</span>
                </NuxtLink>
              </p>
            </span>
          </div>
        </div>

        <!-- CTA -->
        <div class="col-12 align-self-end" v-if="isPDF">
          <Button
            class="btn-block"
            size="large"
            type="link"
            :link="`${getBaseURL}/${chapterSlug}/${firstPostSlug}`"
            :custom-style="{ backgroundColor: color, color: '#fff' }"
          >
            Get PDF Now
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  chapter: {
    type: Object,
    default: () => ({}),
  },
})

const isPDF = computed(() => props.chapter?.hub?.type === 'pdf')

const shouldActivateWaitingList = computed(
  () => props.chapter?.hub?.activate_waiting ?? false
)

const isPremium = computed(() => props.chapter?.hub?.is_premium ?? false)

const getBaseURL = computed(() => (isPDF.value ? '/resources' : ''))

const outlines = computed(() => {
  const outline = props.chapter?.content
  const out = outline
    ?.split(/<[a-zA-Z0-9]*>([^<.*>;]*)<\/[a-zA-Z0-9]*>/gim)
    .filter((x) => x.trim() !== '')
  return Array.isArray(out) ? out : []
})

const firstPostSlug = computed(() => props.chapter?.posts?.[0]?.slug ?? '#')

const getDesign = computed(
  () =>
    props.chapter?.design_url ??
    'https://api.backlinko.com/app/uploads/2020/05/seo-fundamentals.svg'
)

const chapterSlug = computed(() => props.chapter?.hub?.slug ?? '')

const color = computed(() => {
  const mixedColor = props.chapter?.color ?? ''
  if (mixedColor.includes('gradient')) {
    const first = mixedColor.split('#')[1]
    const clr = first.split(' ')[0]
    if (clr) return `#${clr.replace(/[^a-zA-Z0-9 ]/g, '')}`
  }
  return mixedColor
})

const postCount = computed(() => props.chapter?.posts?.length ?? 0)
</script>

<style scoped>
.hub {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  margin-right: 1rem;
  padding: 1.25rem 1.5rem;
  background-repeat: no-repeat;
  background-position: 50% 80%;
  background-size: 50%;
}
</style>
