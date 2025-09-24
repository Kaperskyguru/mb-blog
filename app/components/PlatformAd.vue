<template>
  <div class="my-5 leading">
    <div class="relative p-4 bg-white rounded">
      <!-- Header -->
      <div
        class="py-3 border-b-4"
        :style="{ borderBottom: `4px solid ${bgColor}` }"
      >
        <h3>Whenever you're ready</h3>
        <p>There are 4 ways we can help you become a great backend engineer:</p>
      </div>

      <!-- Options -->
      <div class="py-3">
        <!-- MB Platform -->
        <a
          target="_blank"
          :href="`https://app.masteringbackend.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=${campaign}`"
          class="flex flex-col md:flex-row items-center justify-center border-b"
        >
          <div class="md:w-1/5 w-full">
            <img class="w-full" src="~/assets/img/3.png" alt="MB Platform" />
          </div>
          <div class="w-full md:pl-6 text-lg">
            <h4 class="text-[rgb(187,74,3)]">The MB Platform</h4>
            <p class="text-lg">
              Join 1000+ backend engineers learning backend engineering. Build
              real-world backend projects, learn from expert-vetted courses and
              roadmaps, track your learnings and set schedules, and solve tasks,
              exercises, and challenges.
            </p>
          </div>
        </a>

        <!-- MB Academy -->
        <a
          target="_blank"
          :href="`https://masteringbackend.com/academy?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=${campaign}`"
          class="flex flex-col md:flex-row items-center justify-center border-b"
        >
          <div class="md:w-1/5 w-full">
            <img class="w-full" src="~/assets/img/2.png" alt="MB Academy" />
          </div>
          <div class="w-full md:pl-6">
            <h4 class="text-[rgb(187,74,3)]">The MB Academy</h4>
            <p class="text-lg">
              The “MB Academy” is a 6-month intensive Advanced Backend
              Engineering BootCamp to produce great backend engineers.
            </p>
          </div>
        </a>

        <!-- Backend Weekly -->
        <a
          target="_blank"
          :href="`https://newsletter.masteringbackend.com/?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=${campaign}`"
          class="flex flex-col md:flex-row items-center justify-center border-b"
        >
          <div class="md:w-1/5 w-full">
            <img class="w-full" src="~/assets/img/1.png" alt="Backend Weekly" />
          </div>
          <div class="w-full md:pl-6 pt-2">
            <h4 class="text-[rgb(187,74,3)]">Join Backend Weekly</h4>

            <p class="text-lg">
              If you like posts like this, you will absolutely enjoy our
              exclusive weekly newsletter, sharing backend engineering resources
              to help you become a great Backend Engineer.
            </p>
          </div>
        </a>

        <!-- Backend Jobs -->
        <a
          target="_blank"
          :href="`https://getbackendjobs.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=${campaign}`"
          class="flex flex-col md:flex-row items-center justify-center border-b"
        >
          <div class="md:w-1/5 w-full">
            <img class="w-full" src="~/assets/img/1.png" alt="Backend Jobs" />
          </div>
          <div class="w-full md:pl-6">
            <h4 class="text-[rgb(187,74,3)]">Get Backend Jobs</h4>

            <p class="text-lg">
              Find over 2,000+ tailored international remote backend jobs or
              reach 50,000+ backend engineers on the #1 Backend Engineering Job
              Board.
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

defineProps({
  bgColor: {
    type: String,
    default: '#5227AD',
  },
})

const campaign = computed(() => route.params?.slug ?? 'post_details')
</script>
