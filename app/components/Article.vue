<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="mt-8">
    <div class="max-w-5xl mx-auto lg:px-4 px-1">
      <div class="grid grid-cols-12 gap-6">
        <!-- Decorative Pattern -->
        <div class="hidden md:block w-full col-span-1 pt-3">
          <img
            class="w-full"
            src="~/assets/img/combined-shape.png"
            alt="Pattern"
          />
        </div>

        <div class="col-span-12 md:col-span-11">
          <!-- Article Head -->
          <ArticleHead class="mb-4" :post="post" />

          <!-- Cover Image -->
          <div class="my-6">
            <img class="w-full h-auto rounded" :src="image" :alt="post.title" />
          </div>

          <!-- Article Excerpt -->
          <div class="prose prose-lg max-w-none mt-4">
            <article v-html="post.excerpt"></article>
          </div>

          <!-- Continue Reading -->
          <div class="mt-8 text-center w-full">
            <NuxtLink
              :to="`/${post.slug}`"
              class="inline-block px-6 py-3 w-full text-lg font-semibold text-white bg-[#0E1F33] rounded hover:bg-[#0E1F33]/80 transition"
            >
              Continue Reading →
            </NuxtLink>
            <hr class="mt-6" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>



<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
})

// Compute image URL fallback
const image = computed(() => {
  console.log(props.post?.image, props.post?.featured_image?.url, props.post)
  return (
    props.post?.image ??
    props.post?.featured_image?.url ??
    '/img/backend-2023.jpg'
  )
})
</script>

<style scoped>
.pattern {
  width: 70px;
}

.btn-primary {
  background-color: #1c168c;
  color: #fff;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #100c5cda;
  color: #fff;
}

.cover {
  max-width: 871.5px;
  background-size: cover;
  background-position: center;
  background-clip: content-box;
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: 50% 50%;
}

footer small {
  color: #fff;
  opacity: 70%;
}

@media screen and (max-width: 768px) {
  .pattern {
    display: none;
  }
}
</style>
