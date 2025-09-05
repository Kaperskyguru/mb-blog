<template>
  <main class="main">
    <!-- Hero Section -->
    <section class="py-5 my-5">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 hero__title">
            <h1 class="title__text">
              {{ title }} {{ isPDF ? 'Resources' : '' }}
            </h1>
            <p class="title__subtext fs-6">
              {{ description }}
            </p>

            <div class="input-group py-3">
              <Button
                v-if="!isPDF"
                :custom-style="{
                  backgroundColor: color,
                  color: '#fff',
                }"
                size="large"
                type="link"
                :link="link"
              >
                {{ isPremium ? 'Grab Your Copy Now' : 'Start Now' }}
              </Button>
            </div>
          </div>
          <div class="col-md-6 hero__image">
            <!-- Waiting List Form -->
            <div
              v-if="shouldActivateWaitingList"
              class="shadow border p-4 my-4"
              style="background-color: white"
            >
              <form
                id="form-bacf371b-b382-4024-9adb-99ea3c829eae"
                action="https://api.encharge.io/v1/forms/bacf371b-b382-4024-9adb-99ea3c829eae/submission/plain"
                method="POST"
              >
                <div class="form-group py-3">
                  <label
                    class="text-dark"
                    for="1bf52140-11b8-46e9-8115-8fa21b589cfb"
                  >
                    <b>Full Name</b>
                  </label>
                  <input
                    id="1bf52140-11b8-46e9-8115-8fa21b589cfb"
                    name="name"
                    class="form-control shadow-none fs-5"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div class="form-group py-3">
                  <label
                    class="text-dark"
                    for="7dbc4ccf-238b-4128-9250-634cccb01176"
                  >
                    <b>E-mail</b>
                  </label>
                  <input
                    id="7dbc4ccf-238b-4128-9250-634cccb01176"
                    name="email"
                    class="form-control shadow-none fs-5"
                    type="email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <input
                  type="hidden"
                  id="31b47661-eae6-42bd-bc02-df3c004a01f9"
                  name="HiddenTag"
                  :value="enchargeTag"
                />

                <div class="text-center mt-4">
                  <button
                    class="col-12 start-btn py-2 my-2 fs-4 fw-bold"
                    type="submit"
                    :style="{ backgroundColor: color, color: '#fff' }"
                  >
                    Get Notified
                  </button>
                </div>
              </form>
            </div>

            <img v-else class="img-fluid" :src="image" :alt="title" />
          </div>
        </div>
      </div>
    </section>

    <!-- Backend Section -->
    <section class="m-5" v-if="isBackend">
      <div class="container w-50 d-flex flex-1">
        <div class="d-flex justify-content-center text-center flex-column">
          <h2 class="hero__title title__text">Backend as a Journey (BaaJ)</h2>
          <p>
            Backend engineering is a Journey of no return. If you're ready to
            jump on this rewarding journey. Start below:
          </p>
        </div>
      </div>
    </section>

    <!-- Chapters Section -->
    <section
      :class="{ 'py-5 my-5': shouldActivateWaitingList || isPremium }"
      class="Conent"
    >
      <div class="container">
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
