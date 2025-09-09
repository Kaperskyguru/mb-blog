<template>
  <nuxt-link to="/">
    <img
      v-if="isWhite"
      src="~/assets/White.png"
      alt="logo"
      width="200"
      height="auto"
      class="inline-block align-text-top w-1/2"
    />

    <img
      v-else
      src="~/assets/logo.png"
      alt="logo"
      width="200"
      height="auto"
      class="inline-block align-text-top w-1/2"
    />
  </nuxt-link>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Logo',

  props: {
    isWhite: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
</style>
