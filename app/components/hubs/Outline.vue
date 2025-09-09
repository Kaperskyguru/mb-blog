<template>
  <aside class="left-col">
    <p class="fs-6 py-1 text-uppercase" :style="{ color }">
      {{ outlines.length }} Resources
    </p>

    <ul class="list-unstyled">
      <li
        v-for="(outline, i) in outlines"
        :key="i"
        class="lh-lg"
        :class="{ 'active-resource': isActive(outline) }"
      >
        <a
          class="d-flex flex-row align-items-center gap-2 text-decoration-none"
          :href="`${getBaseURL}/${route.params.hub}/${outline.slug}`"
        >
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

          <span>{{ outline.title }}</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  color: {
    type: String,
    default: '#1c168c',
  },
  outlines: {
    type: Array,
    default: () => [],
  },
})

const route = useRoute()

// ✅ Computed replacement
const getBaseURL = computed(() =>
  route.name?.toString().includes('resources-hub-slug') ? '/resources' : ''
)

// ✅ Method replacement
const isActive = (outline) => outline.slug === route.params.slug
</script>

<style scoped>
.list-unstyled {
  padding-left: 0;
  margin: 0;
}

.lh-lg {
  line-height: 1.6;
  color: #57586e;
}

.active-resource {
  color: #000000;
  font-weight: 600;
}
</style>
