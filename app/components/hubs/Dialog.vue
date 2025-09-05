<template>
  <section v-if="visible" class="modal-container modal">
    <div
      class="d-flex mw-100 w-100 justify-items-center justify-content-center"
      tabindex="-1"
      role="dialog"
      ref="dialog"
    >
      <div
        class="position-relative w-100"
        style="max-width: 1000px; margin: 29px 10px"
        role="document"
      >
        <div class="modal-content">
          <!-- Header -->
          <div
            class="d-flex justify-content-between pb-2 border-b rounded-top"
            :style="{ backgroundColor: color }"
            style="padding: 1rem"
          >
            <div v-if="title" class="text-white p-8">
              <h2 class="mb-1 font-bold">{{ title }}</h2>
              <p v-if="description" class="text-gray-100">
                {{ description }}
              </p>
            </div>
            <div class="close p-3 text-white" @click.prevent="close">
              <CloseIcon style="width: 20px; height: 20px; color: #fff" />
            </div>
          </div>

          <!-- Content -->
          <div class="col-12 w-100">
            <div class="row" :class="contentClass">
              <div class="col-lg-6 col-12" v-if="$slots.left">
                <slot name="left" />
              </div>
              <div
                class="col-lg-6 col-12 border-start ps-4 pe-4"
                v-if="$slots.right"
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
@media screen and (max-width: 768px) {
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
}
</style>
