<template>
  <section>
    <!-- Hero Section -->
    <section class="flex items-center justify-center mb-10">
      <div class="container mx-auto px-4">
        <div class="mt-10 text-center">
          <h1 class="text-3xl font-bold mb-6">Get Full-Time Backend Tips</h1>

          <div class="flex flex-col items-center space-y-6">
            <div class="flex items-center space-x-4">
              <img
                class="w-16 h-16 rounded-full object-cover"
                src="~/assets/img/solomon-eseme.jpg"
                alt="Solomon Eseme"
              />
              <p class="text-lg text-gray-700 text-left">
                Receive the same tips I used to land <br />
                my dream job in
                <span class="font-bold text-black">backend engineering!</span>
              </p>
            </div>

            <!-- Newsletter Signup -->
            <iframe
              src="https://embeds.beehiiv.com/b9028f46-6399-4a63-8d5c-837fe76a2bee?slim=true"
              class="w-full max-w-md"
              height="52"
              frameborder="0"
              scrolling="no"
              style="background: transparent"
            ></iframe>
          </div>
        </div>

        <!-- Tabs & Search -->
        <div
          class="flex flex-col lg:flex-row items-center justify-center mt-10 border-b pb-4"
        >
          <ul class="flex flex-wrap justify-center space-x-6">
            <li
              v-for="item in tabs"
              :key="item.key"
              class="text-sm font-semibold"
              :class="{ 'text-blue-600': tab === item.key }"
            >
              <a
                v-if="item.key"
                href="#"
                class="hover:text-blue-500"
                @click.prevent="getPosts(item.key)"
              >
                {{ item.label }}
              </a>
              <NuxtLink v-else to="/posts" class="hover:text-blue-500">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>

          <div class="relative mt-6 lg:mt-0 lg:ml-6">
            <button
              @click="toggleSearch"
              class="text-gray-600 hover:text-black"
            >
              <svg
                width="24"
                height="22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
              >
                <path
                  d="M23.7871 20.7106L17.9547 15.4071C19.5193 13.7716 20.4665 11.6376 20.4665 9.30524C20.4665 4.17115 15.874 0 10.2332 0C4.58713 0 0 4.17599 0 9.30524C0 14.4345 4.59245 18.6105 10.2332 18.6105C12.7982 18.6105 15.145 17.7491 16.9436 16.3265L22.776 21.63C22.9144 21.7558 23.1006 21.8235 23.2815 21.8235C23.4625 21.8235 23.6487 21.7606 23.7871 21.63C24.0638 21.3783 24.0638 20.9622 23.7871 20.7106ZM1.43148 9.30524C1.43148 4.89215 5.38003 1.30651 10.2279 1.30651C15.0811 1.30651 19.0244 4.89698 19.0244 9.30524C19.0244 13.7135 15.0811 17.3088 10.2279 17.3088C5.38003 17.3088 1.43148 13.7183 1.43148 9.30524Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <input
              v-if="showSearch"
              v-model="searchText"
              type="text"
              placeholder="Enter text and press enter"
              class="absolute right-0 mt-2 px-3 py-2 border rounded shadow w-64 text-sm"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Articles -->
    <section class="container mx-auto px-4">
      <FeaturedArticle
        v-if="featuredPost && !removeFeatured"
        :post="featuredPost"
      />
      <AcademyAdvert v-if="!removeFeatured || !allPosts.length" is-article />

      <div v-for="post in allPosts" :key="post.slug">
        <LockArticle v-if="post.is_sticky" :post="post" />
        <Article v-else :post="post" />
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  posts: { type: Array, default: () => [] },
})

const allPosts = ref([...props.posts])
const tab = ref('')
const searchText = ref('')
const showSearch = ref(false)
const removeFeatured = ref(false)

// Tabs
const tabs = [
  { key: '', label: 'All' },
  { key: 'ultimate', label: 'Ultimate Guides' },
  { key: 'definitive', label: 'Definitive Guides' },
  { key: 'sponsored', label: 'Sponsored' },
  // { key: 'hub', label: 'Backend Content Hubs' }, // optional
]

// Watch search input
watch(searchText, (value) => {
  emit('search', value)
})

// Featured & filtered posts
const removeSponsored = computed(() =>
  props.posts.filter(
    (post) => !post?.categories?.find((c) => c.slug === 'sponsored')
  )
)

const featuredPost = computed(() => removeSponsored.value[0])
const getAllArticles = computed(() =>
  removeSponsored.value.filter((post) => post.slug !== featuredPost.value?.slug)
)

const getUltimate = computed(() =>
  props.posts.filter((post) => post.type?.includes('ultimate'))
)
const getDefinitive = computed(() =>
  props.posts.filter((post) => post.type?.includes('definitive'))
)
const getSponsored = computed(() =>
  props.posts.filter((post) =>
    post.categories?.some((cat) => cat.slug === 'sponsored')
  )
)
const getHub = computed(() =>
  props.posts.filter((post) => post.type?.includes('hub'))
)

// Methods
const toggleSearch = () => {
  showSearch.value = !showSearch.value
}

const getPosts = (slug = '') => {
  if (slug) removeFeatured.value = true

  if (slug.includes('ultimate')) {
    allPosts.value = getUltimate.value
    tab.value = 'ultimate'
    return
  }

  if (slug.includes('definitive')) {
    allPosts.value = getDefinitive.value
    tab.value = 'definitive'
    return
  }

  if (slug.includes('sponsored')) {
    allPosts.value = getSponsored.value
    tab.value = 'sponsored'
    return
  }

  if (slug.includes('hub')) {
    allPosts.value = getHub.value
    tab.value = 'hub'
    return
  }

  allPosts.value = getAllArticles.value
  tab.value = ''
}
</script>

<style scoped>
.hero-text {
  font-weight: 800;
  color: #0a083b;
  font-size: 40px;
}

.lead {
  color: #000;
}

.hero-img {
  width: 50px;
  height: 50px;
}

.bor-btm {
  border-bottom: 1px solid #c8c8c8;
  margin-top: 5px;
}

ul.bor-btm span::after {
  content: '';
  display: block;
  width: 0;
  height: 4px;
  background-color: #1c168c;
  transition: 0.5s ease;
}

.active {
  border-bottom: 3px solid #1c168c;
}
</style>
