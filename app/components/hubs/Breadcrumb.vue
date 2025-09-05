<template>
  <div class="shadow-sm">
    <div class="container d-flex align-items-center flex-row py-3 flex-wrap">
      <!-- Hub link -->
      <a :href="`${getBaseURL}/${route.params.hub}`">
        <p :style="{ color }" class="fs-5">
          {{ hub.title }}
          <span>
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
          </span>
        </p>
      </a>

      <!-- Chapter link -->
      <a
        v-if="postTitle"
        class="fs-5"
        :href="`${getBaseURL}/${route.params.hub}/${chapter.slug}`"
      >
        <p :style="{ color }" class="fs-5">
          {{ title }}
          <span>
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
          </span>
        </p>
      </a>

      <!-- Fallback title -->
      <p v-else class="fs-5">
        {{ title }}
        <span class="mx-4"></span>
      </p>

      <!-- Post title -->
      <p v-if="postTitle" class="fs-5" style="color: #57586e">
        {{ postTitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  color: {
    type: String,
    default: '#1c168c',
  },
  hub: {
    type: Object,
    default: () => ({}),
  },
  chapter: {
    type: Object,
    default: () => ({}),
  },
  post: {
    type: Object,
    default: () => ({}),
  },
})

const route = useRoute()

// ✅ Computed replacements
const getBaseURL = computed(() =>
  route.name?.toString().includes('resources-hub-slug') ? '/resources' : ''
)

const title = computed(() => props.chapter?.title ?? '')
const postTitle = computed(() => props.post?.title ?? '')
</script>

<style>
/* optional custom styles */
</style>
