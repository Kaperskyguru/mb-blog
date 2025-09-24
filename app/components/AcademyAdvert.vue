<template>
  <div>
    <!-- Academy Card -->
    <div v-if="!isArticle" class="relative container">
      <img
        class="absolute right-0 w-[500px] rounded-lg"
        src="~/assets/img/Ellipse_170.png"
        alt="Background ellipse"
      />

      <div
        class="relative mt-20 pt-20 px-2 flex flex-col md:flex-row items-center justify-between bg-[#ede9f2] rounded-2xl z-0"
      >
        <!-- Left -->
        <div class="text-left px-4 md:px-10 flex-1">
          <h2 class="text-[#0a083b] font-bold text-2xl md:text-3xl mb-4">
            {{ title }}
          </h2>
          <p class="text-[#5d5a6f] text-base md:text-lg mb-4">
            {{ desc }}
          </p>
          <Button
            type="link"
            to="/academy"
            class="bg-[#0a033c] text-white rounded-md px-6 py-2 mb-4"
          >
            {{ btnText }}
          </Button>
        </div>

        <!-- Right -->
        <div class="relative flex-1 flex justify-center mt-6 md:mt-0">
          <img
            class="hidden md:block absolute top-[7%] right-[19%] w-[130px] z-10"
            src="~/assets/img/Pattern.png"
            alt="Pattern"
          />
          <img
            src="~/assets/img/Image.png"
            class="relative z-20 max-w-full"
            alt="Illustration"
          />
        </div>
      </div>
    </div>

    <!-- Article Hero Section -->
    <section v-else class="relative my-10">
      <img
        class="absolute right-12 bottom-1 w-[500px] rounded-lg"
        src="~/assets/img/Ellipse_170.png"
        alt="Background ellipse"
      />

      <div class="container mx-auto relative">
        <div
          class="bg-[#ede9f2] rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8 z-0"
        >
          <!-- Left -->
          <div class="flex-1 mt-5">
            <h2 class="text-[#0a083b] font-bold text-3xl lg:text-4xl mb-4">
              {{ title }}
            </h2>
            <p class="text-[#5d5a6f] text-lg mb-4">{{ desc }}</p>
            <a
              href="https://masteringbackend.com/academy?ref=blog"
              class="inline-block bg-[#0a033c] text-white rounded-md px-6 py-3 mb-4"
            >
              {{ btnText }}
            </a>
          </div>

          <!-- Right -->
          <div class="flex-1">
            <img
              src="~/assets/img/Image.png"
              class="max-w-full"
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isArticle: { type: Boolean, default: false },
  btnText: { type: String, default: 'Join The Academy' },
  title: {
    type: String,
    default: "Don't waste time roaming around, start learning Backend now",
  },
  desc: {
    type: String,
    default:
      'Starting Backend Engineering is a journey into a career that can open many great opportunities from working on complex projects to landing your dream job and the best way to get the most out of it is to start now.',
  },
})
</script>
