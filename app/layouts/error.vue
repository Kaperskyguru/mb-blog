<template>
  <div class="w-full bg-[#f7f5fa] my-[20rem]">
    <!-- 404 Page -->
    <div v-if="error.statusCode === 404">
      <div class="flex flex-row items-center">
        <div class="container mx-auto">
          <div class="flex justify-center">
            <div class="w-full text-center">
              <span class="block text-9xl font-bold">404</span>
              <div class="mb-4 text-lg text-gray-700">
                The page you are looking for was not found.
              </div>
              <NuxtLink
                to="/"
                class="text-blue-600 hover:underline font-medium"
              >
                Back to Home
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 500 / Other Errors -->
    <div v-else>
      <div class="flex flex-row items-center">
        <div class="container mx-auto">
          <div class="flex justify-center">
            <div class="w-full text-center">
              <span class="block text-9xl font-bold">500</span>
              <div class="mb-4 text-lg text-gray-700">
                An error occurred, please reload the page
              </div>
              <NuxtLink
                to="/"
                class="text-blue-600 hover:underline font-medium"
              >
                Back to Home
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  name: 'errorPage',
  layout: 'error',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },

  head() {
    return {
      title: `${this.error.statusCode} error occurred`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>