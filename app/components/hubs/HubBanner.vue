<template>
  <div
    class="header py-2"
    :style="{ background: `${color}` }"
    :class="{ 'text-center py-4': isChapter }"
  >
    <div class="max-w-7xl mx-auto">
      <div
        class="py-4"
        :class="{
          'flex flex-row items-center justify-start': !isChapter,
        }"
      >
        <span>
          <svg
            v-if="!isChapter"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            fill="#fff"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
            />
          </svg>
        </span>
        <span class="text-white text-2xl px-2">
          {{ title }}
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    color: {
      type: String,
      default: '#1c168c',
    },

    isChapter: {
      type: Boolean,
      default: false,
    },

    chapter: { type: Object, default: () => {} },
  },

  computed: {
    title() {
      return this.chapter?.title ?? ''
    },
  },
}
</script>

<style>
</style>