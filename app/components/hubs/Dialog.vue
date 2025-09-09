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
              <CloseIcon class="w-5 h-5 text-white" />
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

          <!-- Default Slot -->
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, watch, onBeforeUnmount, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import CloseIcon from '~/assets/icons/close.svg?component'

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
