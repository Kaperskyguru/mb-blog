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
                isActive('/posts'),
            }"
          >
            <a
              :href="`/posts?ref=${$route.query?.ref ?? 'homepage'}`"
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
              :href="`/courses?ref=${$route.query?.ref ?? 'homepage'}`"
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
              :href="`/books?ref=${$route.query?.ref ?? 'homepage'}`"
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
              :href="`/?ref=${$route.query?.ref ?? 'homepage'}`"
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
              :href="`/community?ref=${$route.query?.ref ?? 'homepage'}`"
              class="text-gray-600 text-sm font-medium hover:text-[#0a083b] transition-colors"
              >Community</a
            >
          </li>
        </ul>

        <div class="flex pb-3">
          <a
            target="_blank"
            :href="`https://app.masteringbackend.com?ref=${
              $route.query?.ref ?? 'homepage'
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

<style scoped>
/* .navbar .navbar-nav .nav-item a {
  font-size: 1rem;
  font-weight: 500;
}

.navbar .nav-item::after {
  content: '';
  width: 0;
  height: 4px;
  display: block;
  background-color: var(--primary-color);
  transition: all 0.3s ease;
}

.navbar .nav-item:hover::after {
  width: 100%;
}

.navbar .nav-item {
  padding-right: 30px;
}

.navbar .navbar-nav .active a {
  background-color: #0a083b;
  -webkit-background-clip: text;
  background-clip: text;
  background: text;
  font-weight: bold;
}

.navbar .navbar-nav .nav-item a:hover {
  color: #0a083b;
}

.nav-link {
  color: #57586e;
  font-size: 0.8rem;
}

.start-btn {
  background: #191489;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.start-btn:hover {
  background-color: #2119ad;
} */
</style>