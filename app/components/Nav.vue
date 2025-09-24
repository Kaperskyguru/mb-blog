<template>
  <nav class="pt-3">
    <div class="container mx-auto flex items-center justify-between">
      <Logo />

      <button
        @click="show = !show"
        class="xl:hidden p-2 border rounded-md"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>
        <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>
        <span class="block w-6 h-0.5 bg-gray-600"></span>
      </button>

      <div
        id="nav-menu"
        class="hidden xl:flex xl:items-center xl:space-x-6"
        :class="{ 'flex flex-col mt-4 xl:mt-0': show }"
      >
        <ul class="flex flex-col xl:flex-row xl:items-center">
          <li
            class="relative pr-7"
            :class="{
              'font-bold text-transparent bg-clip-text bg-[#0a083b]':
                isActive('/'),
            }"
          >
            <a
              :href="`/?ref=${$route.query?.ref ?? 'homepage'}`"
              class="text-gray-600 text-sm font-medium hover:text-[#0a083b] transition-colors"
              >Blog</a
            >
          </li>
          <li
            class="relative pr-7"
            :class="{
              'font-bold text-transparent bg-clip-text bg-[#0a083b]':
                isActive('/courses'),
            }"
          >
            <a
              :href="`https://masteringbackend.com/courses?ref=${
                $route.query?.ref ?? 'blog'
              }`"
              class="text-gray-600 text-sm font-medium hover:text-[#0a083b] transition-colors"
              >Courses</a
            >
          </li>
          <li
            class="relative pr-7"
            :class="{
              'font-bold text-transparent bg-clip-text bg-[#0a083b]':
                isActive('/books'),
            }"
          >
            <a
              :href="`https://hubs.masteringbackend.com/books?ref=${
                $route.query?.ref ?? 'blog'
              }`"
              class="text-gray-600 text-sm font-medium hover:text-[#0a083b] transition-colors"
              >Books</a
            >
          </li>
          <li
            class="relative pr-7"
            :class="{
              'font-bold text-transparent bg-clip-text bg-[#0a083b]':
                isActive('/'),
            }"
          >
            <a
              :href="`https://hubs.masteringbackend.com/?ref=${
                $route.query?.ref ?? 'blog'
              }`"
              class="text-gray-600 text-sm font-medium hover:text-[#0a083b] transition-colors"
              >Hubs</a
            >
          </li>
          <li
            class="relative pr-7"
            :class="{
              'font-bold text-transparent bg-clip-text bg-[#0a083b]':
                isActive('/podcasts'),
            }"
          >
            <a
              class="text-gray-600 text-sm font-medium hover:text-[#0a083b] transition-colors"
              target="_blank"
              href="https://backendweekly.dev/podcasts?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer"
              >Podcasts</a
            >
          </li>
          <li class="relative pr-7">
            <a
              class="text-gray-600 text-sm font-medium hover:text-[#0a083b] transition-colors"
              target="_blank"
              href="https://store.masteringbackend.com"
              >Our Store</a
            >
          </li>
          <li
            class="relative pr-7"
            :class="{
              'font-bold text-transparent bg-clip-text bg-[#0a083b]':
                isActive('/community'),
            }"
          >
            <a
              :href="`https://masteringbackend.com/community?ref=${
                $route.query?.ref ?? 'blog'
              }`"
              class="text-gray-600 text-sm font-medium hover:text-[#0a083b] transition-colors"
              >Community</a
            >
          </li>
        </ul>

        <div class="flex pb-3">
          <a
            target="_blank"
            :href="`https://app.masteringbackend.com?ref=${
              $route.query?.ref ?? 'blog'
            }`"
            class="bg-[#0e1f33] !text-white rounded-lg px-3 py-3 transition-colors"
          >
            Learn Backend Free
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nav',

  data: () => ({ show: false }),

  methods: {
    isActive(slug = '/') {
      return this.$route.path === slug
    },
  },
}
</script>
