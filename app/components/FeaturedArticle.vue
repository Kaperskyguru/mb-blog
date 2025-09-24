<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="py-12">
    <div class="max-w-5xl mx-auto px-4">
      <!-- Pattern + Head -->
      <div class="grid grid-cols-12 gap-6 items-start">
        <div class="hidden md:block col-span-1 pt-3">
          <img
            class="w-8 h-8"
            src="~/assets/img/combined-shape.png"
            alt="pattern"
          />
        </div>
        <div class="col-span-12 md:col-span-11">
          <ArticleHead :post="post" />
        </div>
      </div>

      <!-- First Paragraph -->
      <div class="mt-6">
        <p class="text-lg leading-relaxed" v-html="getFirstParagraph()"></p>
      </div>

      <!-- Two-Column Section -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8 items-center">
        <div class="md:col-span-5">
          <p class="text-lg leading-relaxed" v-html="get2Paragraphs()"></p>
        </div>
        <div class="md:col-span-7">
          <img
            class="w-full h-auto rounded-lg"
            :src="image"
            :alt="post.title"
          />
        </div>
      </div>

      <!-- Last Paragraph -->
      <div class="mt-6">
        <p class="text-lg leading-relaxed" v-html="getLastParagraph()"></p>
      </div>

      <!-- Continue Reading -->
      <div class="mt-8 text-center w-full">
        <NuxtLink
          :to="`/${post.slug}`"
          class="inline-block px-6 py-3 w-full text-lg font-semibold text-white bg-[#0E1F33] rounded-lg hover:bg-blue-700 transition"
        >
          Continue Reading →
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    image() {
      return (
        this.post &&
        (this.post?.image ??
          this.post?.featured_image?.url ??
          '/img/backend-2023.jpg')
      )
    },
  },

  methods: {
    getPostExcerpt(str, start = 0, limit = 150) {
      if (str.length > 0) {
        return str.substring(start, limit) + '...'
      }
    },

    getFirstParagraph() {
      const arr = this.paragraphs()
      if (!arr.length) return
      return arr[0][0]
    },

    get2Paragraphs() {
      const arr = this.paragraphs()
      if (!arr.length) return

      if (arr[1] && !arr[2]) return arr[1][0]

      if (arr[1] && arr[2]) return arr[1][0] + arr[2][0]
    },

    getLastParagraph() {
      const arr = this.paragraphs()
      if (!arr.length) return

      if (!arr[3]) return
      return arr[3][0]
    },

    paragraphs() {
      if (!this.post) return
      const firstPara =
        this.post?.content?.matchAll('<p>(.*?)</p>') ??
        this.post?.excerpt?.matchAll('<p>(.*?)</p>')
      return [...(firstPara ?? [])]
    },

    // paragraphs() {
    //   if (!this.post) return

    //   const content = this.post?.content || this.post?.excerpt || ''

    //   // Match everything up to the first period (non-greedy), including the period
    //   const sentences = content.match(/[^.]+\.?/g) || []
    //   console.log(sentences.map((s) => s.trim()).filter(Boolean))
    //   return sentences.map((s) => s.trim()).filter(Boolean)
    // },

    stripTags(text) {
      if (text) {
        return text.replace(/(<([^>]+)>)/gi, '')
      }
    },
  },
}
</script>

<style scoped>
.pattern {
  width: 70px;
}

.btn-primaryy {
  background-color: #1c168c;
  color: #fff;
  transition: all 0.3s ease;
}

.btn-primaryy:hover {
  background-color: #100c5cda;
  color: #fff;
}

.car-img {
  width: 400px;
}

@media screen and (max-width: 576px) {
  .pattern {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .pattern {
    display: none;
  }
}
</style>