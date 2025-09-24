<template>
  <div class="text-center text-white my-4">
    <div
      class="relative p-20"
      :style="{ backgroundColor: bgColor }"
      :id="showClip ? 'notify' : ''"
    >
      <!-- Title -->
      <h3 class="text-2xl py-4">
        <slot name="title">{{ title }}</slot>
      </h3>

      <!-- Description -->
      <p class="text-lg">
        <slot name="description">{{ description }}</slot>
      </p>

      <!-- Buttons -->
      <slot name="btn">
        <div class="flex justify-center gap-4">
          <Button
            v-if="showRead"
            appearance="primary"
            size="large"
            type="link"
            target="_blank"
            :link="readLink"
            :custom-style="{
              backgroundColor: bgColor,
              color: '#fff',
            }"
          >
            Click here to Read Online
          </Button>

          <Button
            v-if="showDownload"
            appearance="primary"
            size="large"
            type="link"
            target="_blank"
            :link="link"
            :custom-style="{
              backgroundColor: bgColor,
              color: '#fff',
            }"
          >
            Click here to Download
          </Button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  link: { type: String, default: '#' },
  showRead: { type: Boolean, default: false },
  showDownload: { type: Boolean, default: false },
  readLink: { type: String, default: '#' },
  bgColor: { type: String, default: '#5227AD' },
  title: {
    type: String,
    default: 'In a hurry? Save this article as a PDF.',
  },
  description: {
    type: String,
    default:
      'Tired of scrolling? Download a PDF version for easier offline reading and sharing with coworkers.',
  },
  showClip: { type: Boolean, default: true },
  btnColor: { type: String, default: '#633db5' },
})

/**
 * Utility to lighten/darken a hex color by a given amount
 */
</script>

<style scoped>
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

@media (max-width: 991.98px) {
  .pad {
    padding: 2rem !important;
  }
}
</style>
