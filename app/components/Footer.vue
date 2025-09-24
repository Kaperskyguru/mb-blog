<template>
  <div>
    <footer class="bg-[#0E1F33] text-white/70 text-[0.6rem] font-normal py-5">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <!-- Logo + Intro -->
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <div class="mb-3">
              <Logo is-white />
              <p class="text-white mt-2 text-[1.1rem] font-light">
                A great resource for backend engineers. Next-level Backend
                Engineering training and Exclusive resources.
              </p>
            </div>
          </div>

          <!-- Navigation Columns -->
          <div class="flex-1">
            <div class="flex flex-wrap justify-between">
              <!-- Learn -->
              <div class="w-1/2 md:w-1/4 text-white">
                <p class="mb-4">Learn</p>
                <ul class="space-y-3 text-[1.1rem] font-light">
                  <li><NuxtLink to="/">Blog</NuxtLink></li>
                  <li>
                    <a
                      href="https://masteringbackend.com/courses?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >Courses</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://hubs.masteringbackend.com/books?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >Books</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://hubs.masteringbackend.com/?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >Hubs</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://store.masteringbackend.com?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >Our Store</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Products -->
              <div class="w-1/2 md:w-1/4 text-white">
                <p class="mb-4">Products</p>
                <ul class="space-y-3 text-[1.1rem] font-light">
                  <li>
                    <a
                      target="_blank"
                      :href="`https://app.masteringbackend.com?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer`"
                      >MB Platform</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      :href="`https://playground.masteringbackend.com?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer`"
                      >Code Playground</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      :href="`https://getbackendjobs.com?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer`"
                      >Get Backend Jobs</a
                    >
                  </li>
                  <li>
                    <a target="_blank" href="#">Backend Interview Preps</a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://projects.masteringbackend.com?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >Access 200+ Backend Projects</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Join -->
              <div class="w-1/2 md:w-1/4 text-white mt-6 md:mt-0">
                <p class="mb-4">Join</p>
                <ul class="space-y-3 text-[1.1rem] font-light">
                  <li>
                    <a
                      target="_blank"
                      :href="`https://app.masteringbackend.com?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer`"
                      >Learn Backend Free</a
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="https://masteringbackend.com/newsletter?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >Join Our Newsletter</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="https://masteringbackend.com/community?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >Join Our Community</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="https://masteringbackend.com/academy?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >Join The Academy</NuxtLink
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://backendweekly.dev/podcasts?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >Listen to GBE Podcast</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://masteringbackend.featurebase.app/?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >Add or Vote for the next Course</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Company -->
              <div class="w-1/2 md:w-1/4 text-white mt-6 md:mt-0">
                <p class="mb-4">Company</p>
                <ul class="space-y-3 text-[1.1rem] font-light">
                  <li>
                    <a
                      href="https://masteringbackend.com/?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >Home</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://masteringbackend.com/about?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >About</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://masteringbackend.com/contact?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
                      >Contact</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr class="border-gray-600 my-6" />

        <!-- Bottom Section -->
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <!-- Social Links -->
          <div class="flex space-x-3 mb-3 md:mb-0">
            <a
              href="https://facebook.com/masteringbackend"
              aria-label="facebook"
            >
              <div class="border border-gray-300 rounded-full p-2">
                <img class="w-3 h-3" src="~/assets/img/facebook.png" alt="" />
              </div>
            </a>
            <a href="https://twitter.com/master_backend" aria-label="twitter">
              <div class="border border-gray-300 rounded-full p-2">
                <img class="w-3 h-3" src="~/assets/img/twitter.png" alt="" />
              </div>
            </a>
            <a href="https://instagram.com/kaperskyguru" aria-label="instagram">
              <div class="border border-gray-300 rounded-full p-2">
                <img class="w-3 h-3" src="~/assets/img/instagram.png" alt="" />
              </div>
            </a>
          </div>

          <!-- Copyright -->
          <div>
            <small class="text-white/70 text-sm"
              >© {{ new Date().getFullYear() }} Masteringbackend. All rights
              reserved.</small
            >
          </div>
        </div>

        <!-- Links -->
        <div class="mt-4 text-sm">
          <a
            href="https://masteringbackend.com/terms-and-conditions?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
            >Terms and Conditions</a
          >
          |&nbsp;
          <a
            href="https://masteringbackend.com/privacy-policy?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
            >Privacy</a
          >
          |&nbsp;
          <a
            href="https://masteringbackend.com/disclaimer?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
            >Disclaimer</a
          >
          |&nbsp;
          <a
            href="https://masteringbackend.com/return-policy?ref=blog&utm_source=blog&utm_medium=blog&utm_campaign=footer"
            >Return Policy</a
          >
        </div>

        <!-- Recaptcha -->
        <small class="block mt-4 text-white/70"
          >This site is protected by reCAPTCHA and the Google
          <a class="underline" href="https://policies.google.com/privacy"
            >Privacy Policy</a
          >
          and
          <a class="underline" href="https://policies.google.com/terms"
            >Terms of Service</a
          >
          apply.</small
        >
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',

  data: () => ({
    showLogin: false,
    showRegister: false,
  }),
}
</script>

<style scoped>
footer ul {
  list-style-type: none;
  padding-left: 0;
}
</style>