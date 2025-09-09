<template>
  <section class="bg-[#f7f5fa]">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <!-- Left Text -->
        <div id="chapter" class="w-full md:w-7/12 relative">
          <h1 class="text-[52px] font-extrabold leading-[62px] py-4">
            {{ title }} for Backend Engineers
          </h1>

          <p class="text-xl">{{ description }}</p>
          <div class="gradient"></div>

          <div class="py-3" v-if="!slug.includes('design-patterns')">
            <Button
              v-if="!activateDownload"
              :custom-style="{ backgroundColor: color, color: '#fff' }"
              size="large"
              class="py-2 my-2 text-xl font-bold"
              type="link"
              :link="link"
            >
              {{ isPremium ? 'Grab Your Copy Now' : 'Read Online' }}
            </Button>

            <Button
              v-if="linkToPay && !isWaiting && !isPremium"
              :custom-style="{
                border: `1px solid ${color}`,
                color: `${color} !important`,
              }"
              size="large"
              type="link"
              class="py-2 my-2 text-xl font-bold"
              :link="linkToPay"
            >
              Download Now
            </Button>
          </div>
        </div>

        <!-- Right Image / Form -->
        <div class="w-full md:w-5/12 hero__image">
          <img
            v-if="!isWaiting"
            class="w-full h-auto"
            :src="bookCover"
            :alt="title"
          />

          <div v-else class="shadow border p-4 my-4 bg-white">
            <ResourceForm
              :tag="enchargeTag"
              :color="color"
              :isWaiting="activateDownload"
              :slug="slug"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  hub: { type: Object, default: () => ({}) },
})

// Computed
const color = computed(() => {
  const mixedColor = props.hub?.color ?? '#FF715D'
  if (mixedColor.includes('gradient')) {
    const first = mixedColor.split('#')[1]
    const color = first.split(' ')[0]
    return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
  }
  return mixedColor
})

const isPremium = computed(() => props.hub?.is_premium)
const linkToPay = computed(() => props.hub?.link ?? '')
const slug = computed(() => props.hub?.slug ?? '#')
const activateDownload = computed(() => props.hub?.activate_waiting ?? false)
const enchargeTag = computed(() => props.hub?.encharge_tag ?? '')
const title = computed(() => props.hub?.title ?? '')
const description = computed(() => props.hub?.description ?? '')
const content = computed(() => props.hub?.content ?? props.hub?.description)
const chapters = computed(() => {
  const chapters = props.hub?.chapters
  if (!chapters || chapters.length === 0) return []
  if (chapters.length === 1 && chapters[0].posts) return chapters[0].posts
  return chapters
})

const bookCover = computed(
  () =>
    props.hub?.design_url ??
    'https://files.selar.co/product-images/2023/products/masteringbackend/technical-writing-the-com-selar.co-64999ea31aafb.png'
)
const animatedBookCover = computed(
  () =>
    props.hub?.image?.url ??
    'https://res.cloudinary.com/kaperskydisk/image/upload/v1685032766/masteringbackend/posts/vectors/laravel-design-color.png'
)

const link = computed(() =>
  isPremium.value ? linkToPay.value : `/${slug.value}`
)
</script>

<style scoped>
.hero__image img {
  width: 100%;
  height: auto;
}
</style>
