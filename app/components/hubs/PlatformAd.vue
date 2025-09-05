<template>
  <div class="text-white my-5">
    <div class="position-relative pad bg-white">
      <!-- Header -->
      <div class="py-3" :style="{ borderBottom: `4px solid ${bgColor}` }">
        <h3>Whenever you're ready</h3>
        <p>There are 4 ways we can help you become a great backend engineer:</p>
      </div>

      <!-- Options -->
      <div class="py-3 space-y-4">
        <!-- MB Platform -->
        <div
          class="d-flex flex-md-row flex-column align-items-center justify-content-center py-2 border-bottom"
        >
          <div class="w-lg-25">
            <img class="w-100" src="~/assets/img/3.png" alt="MB Platform" />
          </div>
          <div class="w-100">
            <a
              target="_blank"
              :href="`https://app.masteringbackend.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=${campaign}`"
            >
              <h4 class="text-[rgb(187,74,3)]">The MB Platform</h4>
            </a>
            <p>
              Join 1000+ backend engineers learning backend engineering. Build
              real-world backend projects, learn from expert-vetted courses and
              roadmaps, track your learnings and set schedules, and solve tasks,
              exercises, and challenges.
            </p>
          </div>
        </div>

        <!-- MB Academy -->
        <div
          class="d-flex flex-md-row flex-column align-items-center justify-content-center py-2 border-bottom"
        >
          <div class="w-lg-25">
            <img class="w-100" src="~/assets/img/2.png" alt="MB Academy" />
          </div>
          <div class="w-100">
            <a
              target="_blank"
              :href="`https://masteringbackend.com/academy?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=${campaign}`"
            >
              <h4 class="text-[rgb(187,74,3)]">The MB Academy</h4>
            </a>
            <p>
              The “MB Academy” is a 6-month intensive Advanced Backend
              Engineering BootCamp to produce great backend engineers.
            </p>
          </div>
        </div>

        <!-- Backend Weekly -->
        <div
          class="d-flex flex-md-row flex-column align-items-center justify-content-center py-2 border-bottom"
        >
          <div class="w-lg-25">
            <img class="w-100" src="~/assets/img/1.png" alt="Backend Weekly" />
          </div>
          <div class="w-100">
            <a
              target="_blank"
              :href="`https://newsletter.masteringbackend.com/?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=${campaign}`"
            >
              <h4 class="text-[rgb(187,74,3)]">Join Backend Weekly</h4>
            </a>
            <p>
              If you like posts like this, you will absolutely enjoy our
              exclusive weekly newsletter, sharing backend engineering resources
              to help you become a great Backend Engineer.
            </p>
          </div>
        </div>

        <!-- Backend Jobs -->
        <div
          class="d-flex flex-md-row flex-column align-items-center justify-content-center py-2 border-bottom"
        >
          <div class="w-lg-25">
            <img class="w-100" src="~/assets/img/1.png" alt="Backend Jobs" />
          </div>
          <div class="w-100">
            <a
              target="_blank"
              :href="`https://getbackendjobs.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=${campaign}`"
            >
              <h4 class="text-[rgb(187,74,3)]">Get Backend Jobs</h4>
            </a>
            <p>
              Find over 2,000+ tailored international remote backend jobs or
              reach 50,000+ backend engineers on the #1 Backend Engineering Job
              Board.
            </p>
          </div>
        </div>
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
