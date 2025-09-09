<template>
  <main>
    <!-- Hero Section -->
    <section class="py-12 my-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Left -->
          <div class="flex-1">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900">
              {{ title }} {{ isPDF ? 'Resources' : '' }}
            </h1>
            <p class="mt-4 text-base text-gray-800 font-normal leading-relaxed">
              {{ description }}
            </p>

            <div class="py-4">
              <Button
                v-if="!isPDF"
                :custom-style="{
                  backgroundColor: color,
                  color: '#fff !important',
                }"
                size="large"
                type="link"
                :link="link"
              >
                {{ isPremium ? 'Grab Your Copy Now' : 'Start Now' }}
              </Button>
            </div>
          </div>

          <!-- Right -->
          <div class="flex-1">
            <!-- Waiting List Form -->
            <div
              v-if="shouldActivateWaitingList"
              class="shadow border p-6 my-6 bg-white rounded-lg"
            >
              <form
                id="form-bacf371b-b382-4024-9adb-99ea3c829eae"
                action="https://api.encharge.io/v1/forms/bacf371b-b382-4024-9adb-99ea3c829eae/submission/plain"
                method="POST"
              >
                <!-- Full Name -->
                <div class="py-3">
                  <label
                    class="text-gray-800 block mb-2 font-medium"
                    for="1bf52140-11b8-46e9-8115-8fa21b589cfb"
                  >
                    Full Name
                  </label>
                  <input
                    id="1bf52140-11b8-46e9-8115-8fa21b589cfb"
                    name="name"
                    class="w-full border rounded px-4 py-2 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <!-- Email -->
                <div class="py-3">
                  <label
                    class="text-gray-800 block mb-2 font-medium"
                    for="7dbc4ccf-238b-4128-9250-634cccb01176"
                  >
                    E-mail
                  </label>
                  <input
                    id="7dbc4ccf-238b-4128-9250-634cccb01176"
                    name="email"
                    class="w-full border rounded px-4 py-2 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <!-- Hidden Tag -->
                <input
                  type="hidden"
                  id="31b47661-eae6-42bd-bc02-df3c004a01f9"
                  name="HiddenTag"
                  :value="enchargeTag"
                />

                <!-- Submit -->
                <div class="text-center mt-6">
                  <button
                    class="w-full py-3 text-lg font-bold rounded"
                    type="submit"
                    :style="{ backgroundColor: color, color: '#fff' }"
                  >
                    Get Notified
                  </button>
                </div>
              </form>
            </div>

            <!-- Fallback Image -->
            <img v-else class="w-full h-auto" :src="image" :alt="title" />
          </div>
        </div>
      </div>
    </section>

    <!-- Backend Section -->
    <section v-if="isBackend" class="m-12">
      <div class="max-w-2xl mx-auto flex flex-col items-center text-center">
        <h2 class="text-2xl md:text-3xl font-semibold">
          Backend as a Journey (BaaJ)
        </h2>
        <p class="mt-4 text-gray-600">
          Backend engineering is a Journey of no return. If you're ready to jump
          on this rewarding journey. Start below:
        </p>
      </div>
    </section>

    <!-- Chapters Section -->
    <section
      :class="{ 'py-12 my-12': shouldActivateWaitingList || isPremium }"
      class="Content"
    >
      <div class="max-w-7xl mx-auto px-4">
        <Chapter
          v-for="(chapter, i) in chapters"
          :key="i"
          :chapter="{ hub, ...chapter }"
        />
      </div>
    </section>
  </main>
</template>


<script setup>
import { computed } from 'vue'
import { useRoute } from 'nuxt/app'

const props = defineProps({
  hub: {
    type: Object,
    default: () => ({}),
  },
})

const route = useRoute()

// --- Computed Values ---
const isPDF = computed(() => props.hub?.type === 'pdf')

const slug = computed(() => props.hub?.slug ?? '')

const firstLink = computed(() => {
  if (props.hub?.chapters?.length) {
    return props.hub.chapters[0]?.posts?.[0]?.slug || '#'
  }
  return '#'
})

const getURL = computed(() =>
  isPDF.value
    ? `/resources/${slug.value}/${firstLink.value}`
    : `/${slug.value}/${firstLink.value}`
)

const linkToPay = computed(() => props.hub?.link ?? '#')

const isPremium = computed(() => props.hub?.is_premium)

const shouldActivateWaitingList = computed(
  () => props.hub?.activate_waiting ?? null
)

const link = computed(() => {
  if (isPremium.value) return linkToPay.value
  return shouldActivateWaitingList.value ? '#' : getURL.value
})

const isBackend = computed(() => route.params?.hub === 'backend-engineering')

const image = computed(
  () =>
    props.hub?.design_url ??
    'https://res.cloudinary.com/kaperskydisk/image/upload/v1685032766/masteringbackend/posts/vectors/laravel-design-color.png'
)

const title = computed(() => props.hub?.title ?? '')

const color = computed(() => {
  const mixedColor = props.hub?.color ?? ''
  if (mixedColor.includes('gradient')) {
    const first = mixedColor.split('#')[1]
    const color = first?.split(' ')[0]
    if (color) return `#${color.replace(/[^a-zA-Z0-9]/g, '')}`
  }
  return mixedColor
})

const enchargeTag = computed(() => props.hub?.encharge_tag ?? '')

const description = computed(() => props.hub?.description ?? '')

const chapters = computed(() => props.hub?.chapters ?? [])
</script>

<style scoped>
h2 {
  color: #0a083b;
}
</style>
