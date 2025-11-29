<template>
  <span v-if="post" class="position-relative">
    <DefinitiveArticleOverview v-if="isDefinitiveGuide" :post="post" />
    <ArticleOverview v-else :post="post" />

    <!-- Share Box -->
    <div class="sharebox shadow rounded border">
      <div class="content p-3">
        <div class="d-flex flex-column justify-content-start">
          <!-- <vue-goodshare-facebook has_counter has_icon />
          <vue-goodshare-twitter
            :page_title="post.title + ' @master_backend'"
            has_icon
          />
          <vue-goodshare-linkedin has_counter has_icon /> -->
        </div>
      </div>
    </div>

    <!-- Newsletter Box -->
    <div class="newletter-box">
      <div class="content1 p-4">
        <SideNewsletter :color="color" />
      </div>
    </div>
  </span>

  <p v-else class="text-center">
    We are currently experiencing server issues after migration and upgrading.
    We are working on it. Please refresh the page or check again later. Thanks
  </p>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePostStore } from '@/stores/post'
import utils from '../helpers/utils'
import InlineNewsletter from '@/components/InlineNewsletter.vue'

// -------------------- Store & Route --------------------
const postStore = usePostStore()
const route = useRoute()
const post = ref(null)
const BASE_URL = ref(process.env.BASE_URL || 'https://masteringbackend.com')

// -------------------- Fetch Post --------------------
const fetchPost = async () => {
  try {
    let fetchedPost = postStore.getPostBySlug(route.params.slug)
    if (!fetchedPost) {
      fetchedPost = await postStore.getPost({
        slug: route.params.slug,
        populate: {
          categories: true,
          author: true,
          tags: true,
          resource: {
            populate: {
              hub: { fields: ['slug', 'type', 'title', 'description'] },
            },
          },
          chapter: {
            populate: {
              hub: { fields: ['slug', 'type', 'title', 'description'] },
              post: { fields: ['slug', 'title', 'excerpt'] },
            },
          },
          featured_image: true,
          chapters: { populate: ['posts'] },
        },
      })
    }
    post.value = fetchedPost
  } catch (err) {
    post.value = null
  }
}

await fetchPost()

// -------------------- Computed --------------------
const color = computed(() => utils.color(post.value?.color))
const isDefinitiveGuide = computed(
  () => post.value?.type === 'definitive' && post.value?.chapters?.length > 0
)
const image = computed(
  () =>
    post.value?.image ??
    post.value?.featured_image?.url ??
    '/img/backend-2023.jpg'
)

// -------------------- Newsletter --------------------
const data = ref({})

const createNewsletter = (newsletterEl, propsData = {}) => {
  if (!newsletterEl) return
  const mountNode = document.createElement('div')
  newsletterEl.appendChild(mountNode)
  const comp = defineComponent({
    extends: InlineNewsletter,
    props: ['title', 'subtitle', 'tags'],
  })
  const app = createApp(comp, propsData)
  app.mount(mountNode)
}

const displayNewsletter = () => {
  const backendNewsletters = document.querySelectorAll('.article-newsletter')
  backendNewsletters.forEach((el) => createNewsletter(el))

  const newsletterLaravel = document.querySelectorAll('.newsletter-laravel')
  const newsletterNode = document.querySelectorAll('.newsletter-node')

  if (newsletterNode.length) {
    data.value.title = 'Get free NODEJS tips straight to your inbox!'
    data.value.subtitle =
      'Get my free 10 NODEJS tips that make you more productive.'
    data.value.tags = ['Node Tips']
    newsletterNode.forEach((el) => createNewsletter(el, data.value))
  }

  if (newsletterLaravel.length) {
    data.value.title = 'Get free LARAVEL tips straight to your inbox!'
    data.value.subtitle =
      'Get my free 10 LARAVEL tips that make you more productive.'
    data.value.tags = ['Laravel Tips']
    newsletterLaravel.forEach((el) => createNewsletter(el, data.value))
  }
}

onMounted(() => {
  // displayNewsletter()
})

// -------------------- Utilities --------------------
const stripTags = (text) => text?.replace(/(<([^>]+)>)/gi, '')
const splitTags = (tags) =>
  Array.isArray(tags) ? tags.map((t) => t.title).join(', ') : ''

useHead(() => {
  if (!post.value) return {}
  return {
    title: post.value.title,
    meta: [
      { name: 'keywords', content: splitTags(post.value.tags) },
      { name: 'description', content: stripTags(post.value.excerpt) },
      { property: 'og:title', content: post.value.title },
      { property: 'og:description', content: stripTags(post.value.excerpt) },
      { property: 'og:image', content: image.value },
      {
        property: 'og:url',
        content: `${BASE_URL.value}/${post.value.slug}`,
      },
      { property: 'og:image:width', content: '800' },
      { property: 'og:image:height', content: '800' },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: post.value?.createdAt },
      { property: 'article:modified_time', content: post.value?.updatedAt },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }
})
</script>


<style scoped>
.sharebox {
  position: absolute;
  top: 10rem;
  left: 2rem;
}
.sharebox .content {
  position: fixed;
  background-color: white;
  border-radius: 10px;
}

.newletter-box .content1 {
  position: fixed;
}
.newletter-box {
  position: absolute;
  top: 10rem;
  right: 15rem;
}

@media screen and (max-width: 768px) {
  .sharebox,
  .newletter-box {
    display: none;
  }
  .sharebox .content,
  .newletter-box .content1 {
    position: relative;
  }
}
</style>
