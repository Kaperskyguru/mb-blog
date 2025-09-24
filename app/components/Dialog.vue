<template>
  <section
    v-if="visible"
    class="fixed inset-0 z-[1000] flex bg-[#05041b]/60 backdrop-blur-md"
  >
    <div
      class="flex w-full max-w-full justify-center items-center"
      tabindex="-1"
      role="dialog"
      ref="dialog"
    >
      <div class="relative w-full max-w-[1000px] mx-2 my-7" role="document">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <!-- Header -->
          <div
            class="flex justify-between rounded-t p-4 border-b"
            :style="{ backgroundColor: color }"
          >
            <div v-if="title" class="text-white">
              <h2 class="mb-1 font-bold">{{ title }}</h2>
              <p v-if="description" class="text-gray-100">
                {{ description }}
              </p>
            </div>
            <div
              class="absolute top-0 right-0 p-3 cursor-pointer text-white"
              @click.prevent="close"
            >
              <svg
                class="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                ></path>
              </svg>
            </div>
          </div>

          <!-- Content -->
          <div class="w-full">
            <div class="grid grid-cols-1 lg:grid-cols-2" :class="contentClass">
              <!-- Left -->
              <div v-if="$slots.left" class="p-4">
                <slot name="left" />
              </div>
              <!-- Right -->
              <div
                v-if="$slots.right"
                class="border-l lg:border-l lg:border-gray-200 p-4"
              >
                <slot name="right" />
              </div>
            </div>
          </div>

          <slot />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, watch, onBeforeUnmount, nextTick } from 'vue'
import { useRoute } from 'vue-router'

// Props
const props = defineProps({
  contentClass: { type: String, default: '' },
  color: { type: String, default: '#000' },
  visible: { type: Boolean, default: false },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
})

// Emits
const emit = defineEmits(['answer', 'update:visible'])

const route = useRoute()
const dialog = ref(null)

// --- Methods ---
function close(event) {
  if (!event?.keyCode || event.keyCode === 27) {
    c(false)
  }
}

function closeByBackdrop() {
  c(false)
}

function c(value) {
  emit('answer', value)
  emit('update:visible', false)
}

function closeByKey(event) {
  if (event.keyCode === 13) {
    c(true)
  } else if (event.keyCode === 27) {
    c(false)
  }
}

function closeByChangeRoute() {
  emit('update:visible', false)
}

// --- Watchers ---
watch(
  () => props.visible,
  async (value) => {
    await nextTick()
    if (value) {
      document.addEventListener('keyup', closeByKey)
      if (dialog.value?.focus) dialog.value.focus()
    } else {
      document.removeEventListener('keyup', closeByKey)
    }
  }
)

// Close modal on route change
watch(() => route.fullPath, closeByChangeRoute)

// Cleanup
onBeforeUnmount(() => {
  document.removeEventListener('keyup', closeByKey)
})
</script>

<style scoped>
/* @media screen and (max-width: 768px) {
  #border {
    border-bottom: 1px solid #dee2e6 !important;
    border-right: 0px solid #dee2e6 !important;
  }
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  display: block;
}

.modal-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgb(5 4 27/0.6);
  backdrop-filter: blur(8px);
  display: flex;
} */
</style>
