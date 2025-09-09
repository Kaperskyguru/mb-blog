<template>
  <div class="max-w-7xl mx-auto px-4">
    <!-- Section Title -->
    <div class="my-12 text-center">
      <h5 class="text-lg font-semibold" :style="{ color }">More Topics</h5>
    </div>

    <!-- Topics Grid -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="hub in hubs"
        :key="hub.id"
        :to="`/${hub.slug}`"
        class="no-underline"
      >
        <div
          class="h-full rounded-2xl shadow-md pt-6 transition hover:shadow-lg"
          :style="{ backgroundColor: getColor(hub.color) }"
        >
          <!-- Text Content -->
          <div class="px-6">
            <h6 class="text-white font-bold text-[0.84rem]">
              {{ getChapterCount(hub) }} Resource
              <span v-if="getChapterCount(hub) > 1">s</span>
            </h6>

            <h2 class="pt-4 text-white font-light text-[1.68rem] leading-snug">
              {{ hub.title }}
            </h2>
          </div>

          <!-- Image -->
          <div class="flex justify-center py-8">
            <div class="w-3/4">
              <img
                class="w-full h-auto"
                :src="getDesign(hub)"
                :alt="`${hub.title} illustration`"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    color: { type: String, default: '#1c168c' },
  },

  data: () => ({ hubs: [] }),

  computed: {},

  created() {
    this.getHubs()
  },

  methods: {
    getDesign(hub) {
      return (
        hub?.design_url ??
        hub?.image ??
        'https://res.cloudinary.com/kaperskydisk/image/upload/v1684533784/masteringbackend/posts/vectors/2842680.pngg'
      )
    },
    getChapterCount(hub) {
      return hub?.chapters?.length ?? 0
    },
    getColor(color) {
      const mixedColor = color ?? ''
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },
    async getHubs() {
      try {
        const getHubs = this.$store.getters['hubs/getHubs']
        let hubs = await getHubs()
        if (!hubs?.length) {
          const data = {}
          data.page = this.$route.query.page ? this.$route.query.page : 1
          data.count = 22
          hubs = await this.$store.dispatch('hubs/getHubs', data)
        }
        if (hubs.length < 0) return []
        this.hubs = hubs.splice(Math.floor(Math.random() * hubs.length), 3)
      } catch (error) {
        // console.log(error)
      }
    },
  },
}
</script>

<style>
</style>