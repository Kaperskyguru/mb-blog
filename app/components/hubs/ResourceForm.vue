<template>
  <!-- Beehiiv Embed -->
  <iframe
    v-if="slug.includes('design-patterns')"
    src="https://embeds.beehiiv.com/638ed077-b961-4a71-80a7-cefc821c28d4"
    data-test-id="beehiiv-embed"
    width="100%"
    height="320"
    frameborder="0"
    scrolling="no"
    class="rounded border-2 border-gray-200 bg-transparent"
  ></iframe>

  <!-- Encharge Form -->
  <form
    v-else
    @submit.prevent="onSubmit"
    ref="form"
    id="form-bacf371b-b382-4024-9adb-99ea3c829eae"
    action="https://api.encharge.io/v1/forms/bacf371b-b382-4024-9adb-99ea3c829eae/submission/plain"
    method="POST"
    class="space-y-6"
  >
    <!-- Full Name -->
    <div class="flex flex-col space-y-2">
      <label
        for="1bf52140-11b8-46e9-8115-8fa21b589cfb"
        class="text-gray-900 font-semibold"
      >
        Full Name
      </label>
      <input
        id="1bf52140-11b8-46e9-8115-8fa21b589cfb"
        name="name"
        type="text"
        placeholder="Enter your full name"
        required
        class="w-full max-w-lg rounded-md border border-gray-300 px-4 py-2 text-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>

    <!-- Email -->
    <div class="flex flex-col space-y-2">
      <label
        for="7dbc4ccf-238b-4128-9250-634cccb01176"
        class="text-gray-900 font-semibold"
      >
        E-mail
      </label>
      <input
        id="7dbc4ccf-238b-4128-9250-634cccb01176"
        name="email"
        type="email"
        required
        placeholder="Enter your email address"
        class="w-full max-w-lg rounded-md border border-gray-300 px-4 py-2 text-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>

    <!-- Hidden Field -->
    <input
      type="hidden"
      id="31b47661-eae6-42bd-bc02-df3c004a01f9"
      name="HiddenTag"
      :value="tag"
    />

    <!-- Submit Section -->
    <div class="mt-4 text-center">
      <small class="italic font-bold block mb-2"
        >If you only want the resource, please peacefully unsubscribe when you
        receive it</small
      >

      <button
        type="submit"
        class="w-full rounded-md px-6 py-3 text-xl font-bold transition duration-200"
        :style="{ backgroundColor: color, color: '#fff' }"
      >
        {{ isWaiting ? 'Get Notified' : 'Get The Book' }}
      </button>
    </div>

    <!-- Consent Checkbox -->
    <div class="flex items-start space-x-2 mt-4">
      <input
        type="checkbox"
        id="193ff0f2-d701-4df3-a0bf-e9d1e1f30aa4"
        name="nativeFormMarketingConsent"
        required
        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label
        for="193ff0f2-d701-4df3-a0bf-e9d1e1f30aa4"
        class="text-sm text-gray-700"
      >
        I agree to receive emails from you (unsubscribe anytime).
      </label>
    </div>
  </form>
</template>


<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: '',
    },
    isWaiting: {
      type: Boolean,
      default: true,
    },

    slug: {
      type: String,
      default: '',
    },
  },

  methods: {
    // async onSubmit() {
    //   try {
    //     const token = await this.$recaptcha.execute('login')
    //     const data = await recaptcha({ token })
    //     if (!data?.success) return
    //     this.$refs.form?.submit()
    //   } catch (error) {
    //     console.log('Login error:', error)
    //   }
    // },
  },
}
</script>

<style>
</style>