<template>
  <section>
    <!-- ------------------------------------------Hero Section----------------------------------------------------------- -->
    <section class="bg-[#f7f5fa]">
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <!-- Left side -->
          <div id="chapter" class="relative w-full lg:w-1/2">
            <h1 class="py-4 text-[52px] font-extrabold leading-[62px]">
              {{ title }}
            </h1>

            <p class="text-xl">
              {{ description }}
            </p>
            <div class="gradient"></div>

            <!-- Laravel Breeze Button -->
            <div class="py-3" v-if="isLaravelBreeze">
              <Button
                v-if="!isPDF"
                :custom-style="{ backgroundColor: color, color: '#fff' }"
                size="large"
                type="link"
                link="https://store.masteringbackend.com/l/laravel-breeze"
              >
                Grab Your Copy Now
              </Button>
            </div>

            <!-- Docker Button -->
            <div class="py-3" v-if="isDocker">
              <Button
                v-if="!isPDF"
                :custom-style="{ backgroundColor: color, color: '#fff' }"
                size="large"
                type="link"
                link="https://store.masteringbackend.com/l/docker-ultimate-guide"
              >
                Grab Your Copy Now
              </Button>
            </div>
          </div>

          <!-- Right side -->
          <div class="w-full lg:w-1/2 p-2">
            <div id="chapter" class="container mx-auto w-3/4">
              <div class="shadow border p-4 my-4 bg-white">
                <ResourceForm
                  v-if="!isLaravelBreeze && !isDocker"
                  :tag="enchargeTag"
                  :color="color"
                  :isWaiting="false"
                />

                <img
                  v-else-if="isDocker"
                  class="w-full h-auto"
                  src="https://public-files.gumroad.com/4b4q5j1x03zq6t19w7wnxizu5048"
                  alt="Docker PDF"
                />

                <img
                  v-else
                  class="w-full h-auto"
                  src="https://strapi-images-aws-s3.s3.us-west-2.amazonaws.com/1694963417_e55e6533b9.png?updated_at=2023-09-17T16:31:10.286Z"
                  alt="Laravel breeze PDF"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ------------------------------------------About Section----------------------------------------------------------- -->
    <section class="w-full bg-[#f3f6fa]">
      <div class="container mx-auto py-5">
        <div id="hero_text" class="container mx-auto">
          <div class="my-5">
            <h2 class="text-[50px] font-extrabold leading-[65px]">
              What is the Ebook about?
            </h2>
          </div>
        </div>

        <div class="container mx-auto" id="hero_text">
          <div class="flex flex-col lg:flex-row py-1 gap-6">
            <!-- Left image -->
            <div class="w-full lg:w-1/2">
              <div class="shadow p-4 border my-4 max-w-[500px]">
                <img class="w-full h-auto cover" :src="image" :alt="title" />
              </div>
            </div>

            <!-- Right content -->
            <div class="w-full lg:w-1/2">
              <div>
                <h3
                  class="py-4 text-[40px] leading-[58.5px] font-bold text-[#121127]"
                >
                  {{ title }}
                </h3>

                <p class="text-[#121127]">
                  {{ description }}
                </p>
                <hr class="my-4" />

                <h3 class="my-3 text-xl font-semibold">What to expect?</h3>

                <ul class="list-none space-y-3">
                  <li
                    v-for="(outline, i) in outlines"
                    :key="i"
                    class="text-[20px] leading-7 text-[#121127] font-normal flex items-center gap-2"
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
                    <span>{{ outline }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  post: { type: Object, default: () => ({}) },
  chapter: { type: Object, default: () => ({}) },
})

// --- Computed values ---
const color = computed(() => {
  const mixedColor = props.chapter?.color ?? ''
  if (mixedColor.includes('gradient')) {
    const first = mixedColor.split('#')[1]
    const color = first.split(' ')[0]
    return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
  }
  return mixedColor
})

const outlines = computed(() => {
  const outline = props.chapter?.content
  const out = outline
    ?.split(/<[a-zA-Z0-9]*>([^<.*>;]*)<\/[a-zA-Z0-9]*>/gim)
    .filter((x) => x.trim() !== '')
  return Array.isArray(out) ? out : []
})

const enchargeTag = computed(() => props.chapter?.encharge_tag ?? '')
const title = computed(() => props.chapter?.title ?? '')
const description = computed(() => props.chapter?.description ?? '')
const isLaravelBreeze = computed(() => props.chapter?.slug === 'laravel-breeze')
const isDocker = computed(() => props.chapter?.slug === 'docker-guide')
const image = computed(
  () =>
    props.chapter?.design_url ??
    'https://res.cloudinary.com/kaperskydisk/image/upload/v1685032766/masteringbackend/posts/vectors/laravel-design-color.png'
)

// Optional PDF flag
const isPDF = false
</script>

<style scoped>
@media (max-width: 991.98px) {
  #chapter {
    width: 100% !important;
  }
}
</style>
