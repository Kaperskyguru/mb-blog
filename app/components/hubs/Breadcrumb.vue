<template>
  <nav class="shadow-sm" aria-label="breadcrumb">
    <div
      class="container d-flex align-items-center flex-row py-3 flex-wrap"
      :style="{ color }"
    >
      <!-- Hub link -->
      <a :href="`${getBaseURL}/${route.params.hub}`" class="breadcrumb-link">
        {{ hub.title }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          :fill="color"
          width="20"
          height="20"
          aria-hidden="true"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M16 12l-6 6V6z" />
        </svg>
      </a>

      <!-- Chapter link -->
      <a
        v-if="postTitle"
        :href="`${getBaseURL}/${route.params.hub}/${chapter.slug}`"
        class="breadcrumb-link"
        :style="{ color }"
      >
        {{ title }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          :fill="color"
          width="20"
          height="20"
          aria-hidden="true"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M16 12l-6 6V6z" />
        </svg>
      </a>

      <!-- Fallback title -->
      <span v-else class="breadcrumb-text">{{ title }}</span>

      <!-- Post title -->
      <span v-if="postTitle" class="breadcrumb-text text-muted">
        {{ postTitle }}
      </span>
    </div>
  </nav>
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
.breadcrumb-link {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
}

.breadcrumb-text {
  font-size: 1.1rem;
  margin-left: 0.5rem;
}
</style>
