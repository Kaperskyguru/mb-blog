<template>
  <div class="hidden w-full">
    <!-- Card -->
    <div class="bg-white rounded-lg shadow p-4 mb-3">
      <p class="text-base font-medium">Backend Tips, Every week</p>

      <!-- Email Input -->
      <div class="my-3">
        <input
          type="email"
          v-model="email"
          class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Email address"
        />
      </div>

      <!-- Submit Button -->
      <button
        :style="{ backgroundColor: color }"
        class="w-full text-white py-2 px-4 rounded-md text-sm font-medium hover:opacity-90 transition"
        type="button"
        @click.prevent="subscribe"
      >
        Join Now
      </button>
    </div>

    <!-- Alert -->
    <div
      v-if="res.message || show"
      class="flex items-center justify-between text-sm mt-2 p-3 rounded-md transition-opacity duration-300"
      :class="[
        show ? 'opacity-100' : 'opacity-0',
        res.type === 'success'
          ? 'bg-green-100 text-green-800'
          : res.type === 'error'
          ? 'bg-red-100 text-red-800'
          : 'bg-gray-100 text-gray-800',
      ]"
      role="alert"
    >
      <p class="flex-1">{{ res.message }}</p>
      <button
        v-if="res.message"
        type="button"
        aria-label="Close"
        class="ml-2 text-lg leading-none font-bold focus:outline-none"
        @click="reset"
      >
        &times;
      </button>
    </div>
  </div>
</template>


<script>
import { submit } from '../helpers/mailchimp'
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
  },

  data: () => ({ email: '', res: {}, show: false }),

  methods: {
    reset() {
      show = false
      res = {}
    },
    async subscribe() {
      const res = await submit({
        email: this.email,
        tags: ['backend'],
      })
      this.show = true
      this.res = res
    },
  },
}
</script>

<style>
</style>