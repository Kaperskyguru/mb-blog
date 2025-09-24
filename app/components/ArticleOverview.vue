<template>
  <span v-if="post">
    <ArticleHeader :post="post" />

    <section class="pt-10 bg-white">
      <div class="max-w-5xl mx-auto">
        <div class="w-full">
          <!-- Series Notice -->
          <div v-if="isASeries" class="text-center mt-6">
            <div class="bg-gray-100 shadow-sm text-black">
              <p class="py-3">
                This post is part of the
                <NuxtLink :to="generateURL" class="underline"
                  >"{{ parentPostTitle }}"</NuxtLink
                >
                series
              </p>
            </div>
          </div>

          <!-- Article -->
          <div id="article" class="max-w-4xl mx-auto">
            <ReadArticle :post="post" />

            <!-- Course Card -->
            <div
              v-if="getRoadmapCategory"
              class="flex flex-col md:flex-row border border-purple-700 rounded-md overflow-hidden mb-6"
            >
              <div class="md:w-2/5">
                <img
                  class="w-full h-full object-cover"
                  src="https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/become-a-backend-engineer.png"
                  alt="Course image"
                />
              </div>
              <div class="p-4 flex flex-col justify-center">
                <h5 class="text-lg font-semibold mb-2">
                  Become a {{ getRoadmapCategory }} Backend Engineer today
                </h5>
                <p class="text-gray-700 mb-2">
                  All-in-one {{ getRoadmapCategory }} course for learning
                  backend engineering. Designed for
                  {{ getRoadmapCategory }} developers seeking proficiency.
                </p>
                <a
                  :href="roadmapURL"
                  class="inline-block bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
                >
                  Start Learning Now
                </a>
              </div>
            </div>

            <PlatformAd />

            <!-- Series CTA -->
            <div v-if="isASeries" class="text-center my-10">
              <div
                id="notify"
                class="relative bg-purple-800 text-white px-6 py-16 rounded-lg"
              >
                <h3 class="text-2xl font-bold mb-4">
                  Read Full "{{ parentPostTitle }}"
                </h3>
                <p class="text-lg mb-6" v-html="getPostExcerpt"></p>
                <Button
                  appearance="primary"
                  size="large"
                  type="link"
                  :link="generateURL"
                  :custom-style="{
                    backgroundColor: '#633db5',
                    color: '#fff',
                  }"
                >
                  Click here to read now
                </Button>
              </div>
            </div>

            <!-- Categories & Tags -->
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 my-10"
            >
              <!-- Categories -->
              <div class="flex items-center gap-2">
                <span class="font-medium">Topic:</span>
                <div class="flex flex-wrap gap-2">
                  <a
                    v-for="category in getCategories"
                    :key="category.id"
                    class="px-3 py-1 text-white rounded"
                    :style="{ backgroundColor: color }"
                    :href="`/categories/${category.slug}`"
                  >
                    {{ category.name }}
                  </a>
                </div>
              </div>

              <!-- Tags -->
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  :fill="color"
                  class="w-6 h-6"
                >
                  <path
                    d="M10.9042 2.1001L20.8037 3.51431L22.2179 13.4138L13.0255 22.6062C12.635 22.9967 12.0019 22.9967 11.6113 22.6062L1.71184 12.7067C1.32131 12.3162 1.32131 11.683 1.71184 11.2925L10.9042 2.1001ZM13.7327 10.5854C14.5137 11.3664 15.78 11.3664 16.5611 10.5854C17.3421 9.80433 17.3421 8.538 16.5611 7.75695C15.78 6.9759 14.5137 6.9759 13.7327 7.75695C12.9516 8.538 12.9516 9.80433 13.7327 10.5854Z"
                  ></path>
                </svg>
                <div class="flex flex-wrap gap-1">
                  <a
                    v-for="tag in getTags"
                    :key="tag.id"
                    class="font-semibold"
                    :style="{ color: color }"
                    :href="`/tags/${tag.slug}`"
                  >
                    {{ tag.name }}<span v-if="!isLastTag(tag)">,</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Newsletter & Sharing -->
          <div id="meta" class="max-w-4xl mx-auto">
            <div class="mb-4">
              <SideNewsletter :color="color" />
            </div>
            <div class="mb-4">
              <!-- Sharing buttons can go here -->
            </div>
            <div>
              <Comments v-if="post" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </span>
</template>


<script>
import utils from '../../helpers/utils'

export default {
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    getCategories() {
      return this.post?.categories ?? []
    },
    getTags() {
      return this.post?.tags ?? []
    },
    color() {
      return utils.color(this.post.color)
    },
    isHub() {
      return this.post.type === 'hub'
    },
    chapter() {
      return this.post?.chapter
    },
    isASeries() {
      return (this.post.type === 'definitive' || this.isHub) && this.chapter
    },
    getPostExcerpt() {
      return this.isHub
        ? this.chapter.hub.description
        : this.chapter?.post?.excerpt ?? ''
    },
    generateURL() {
      if (this.isHub)
        return `/hubs/${this.chapter?.hub?.slug ?? '#'}/${this.parentPostSlug}`
      return `/${this.parentPostSlug}#${this.chapter.slug}`
    },
    parentPostTitle() {
      return this.isHub
        ? this.chapter.hub.title
        : this.chapter?.post?.title ?? ''
    },
    parentPostSlug() {
      return this.isHub ? this.post.slug : this.chapter?.post?.slug ?? '#'
    },
    getRoadmapCategory() {
      const categories = [
        'Java',
        'Python',
        'Nodejs',
        'Ruby',
        'PHP',
        'Golang',
        'Rust',
      ]
      return (
        categories.find((cat) =>
          this.getCategories.some((c) => c.name.includes(cat))
        ) || false
      )
    },
    roadmapURL() {
      if (!this.getRoadmapCategory) return '#'
      const slug = this.$route.query?.ref ?? this.$route.params?.slug
      return `https://masteringbackend.com/courses/become-a-${this.getRoadmapCategory.toLowerCase()}-backend-engineer?ref=${slug}`
    },
  },

  methods: {
    isLastTag(tag) {
      return this.getTags.indexOf(tag) === this.getTags.length - 1
    },
  },
}
</script>

<style scoped>
@media screen and (min-width: 769px) {
  .share-box,
  .newletter-box {
    display: none;
  }
}

#notify::after {
  border-width: 0 0 100px 100px;
  border-color: transparent transparent #fff transparent;
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
}

#notify::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 100px 100px 0 0;
  border-color: #000 transparent transparent transparent;
}
</style>
