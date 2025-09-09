<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <!-- Free content -->
    <article
      ref="article"
      v-if="!ispremium"
      data-clarity-region="article"
      class="w-full leading-loose font-light"
      v-html="content"
    ></article>

    <!-- Premium overlay -->
    <span v-else class="w-full inline-block relative">
      <div class="overlay p-3 flex items-center justify-center">
        <div class="text-center text-white mt-4">
          <div
            id="notify"
            class="relative"
            :style="{ backgroundColor: '#5227AD', padding: '5rem' }"
          >
            <h3 class="text-2xl py-4">Don't Stop Learning</h3>
            <h6 class="text-lg text-white">
              Continue reading the {{ title }} for ${{ price }} only or Get
              instant access to all current and upcoming courses and content
              through subscription.
            </h6>
            <Button
              appearance="primary"
              size="large"
              type="button"
              @click="openPremium"
              :custom-style="{ backgroundColor: '#633db5', color: '#fff' }"
            >
              Unlock Now
            </Button>
          </div>
        </div>
      </div>

      <div class="grid gap-3">
        <article
          ref="article"
          data-clarity-region="article"
          class="w-full"
          v-html="content"
        ></article>
      </div>
    </span>

    <!-- Dialog -->
    <Dialog v-model="isPremiumDialogOpen" contentClass="">
      <template #left>
        <h3>Don't Stop Learning</h3>

        <div class="py-3">
          <!-- Continue Reading Option -->
          <div
            class="w-full p-2 my-4 flex justify-center items-center hover:cursor-pointer"
            :class="{ 'bg-gray-100': showPremiumContent }"
            @click="openPremiumContent"
          >
            <div class="pl-2">
              <h4>Continue reading</h4>
              <p class="text-sm">
                Continue reading the "{{ title }}" for ${{ price }} only
              </p>
            </div>
          </div>

          <!-- Subscription Option -->
          <div
            class="w-full p-2 my-4 flex justify-center items-center hover:cursor-pointer"
            :class="{ 'bg-gray-100': showSubscription }"
            @click="openSubscription"
          >
            <div class="pl-2">
              <h4>Monthly Subscription</h4>
              <p class="text-sm">
                Get instant access to all current and upcoming courses and
                content through subscription.
              </p>
            </div>
          </div>
        </div>

        <div class="w-full">
          <!-- <LearnerIcon class="max-w-full" /> -->
        </div>
      </template>

      <template #right>
        <!-- Unlock Premium Content -->
        <span v-if="showPremiumContent">
          <div class="flex justify-center items-center">
            <div class="w-full px-2 max-w-fit">
              <h4>Unlock Advanced Chapters</h4>
              <p class="text-sm my-4" v-html="chapterContent"></p>
            </div>
          </div>

          <div class="text-center mt-2">
            <Button
              appearance="purple"
              type="button"
              class="w-full py-3 my-2 font-bold"
              @click.prevent="unlock"
            >
              Unlock now for ${{ price }}
            </Button>
          </div>
        </span>

        <!-- Subscription Content -->
        <span v-if="showSubscription">
          <div class="flex justify-center items-center">
            <div class="w-full px-2 max-w-fit">
              <h4>Own your backend journey</h4>
              <p class="text-sm my-4">
                Get instant access to all current and upcoming courses and
                content through subscription.
              </p>
              <ul class="list-disc pl-5 text-left space-y-1">
                <li>Personal Backend Portfolio to showcase your skills</li>
                <li>Learn to build from Thousands Real-world Projects</li>
                <li>Track your learnings and set schedules</li>
                <li>
                  Follow Expert Vetted roadmaps to learn backend engineering.
                </li>
                <li>
                  Map courses to Backend Projects to help you master your skills
                </li>
                <li>
                  Online coding challenges by experts to improve your skills
                </li>
                <li>
                  Pick projects from different business domains to practice.
                </li>
              </ul>
            </div>
          </div>

          <div class="text-center mt-2">
            <Button
              appearance="purple"
              type="button"
              class="w-full py-3 my-2 font-bold"
              @click.prevent="subscribe"
            >
              Subscribe Now
            </Button>
          </div>
        </span>
      </template>
    </Dialog>
  </div>
</template>


<script setup>
import hljs from 'highlight.js'
import 'highlight.js/styles/night-owl.css'
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter, useRuntimeConfig } from '#imports'
import Segment from '../helpers/segment'
import {
  OPEN_PREMIUM,
  OPEN_PREMIUM_UNLOCK,
  OPEN_PREMIUM_SUBSCRIPTION,
  PREMIUM_UNLOCK,
  PREMIUM_UNLOCK_PAID,
  PREMIUM_UNLOCK_FAILED,
  PREMIUM_SUBSCRIPTION,
} from '../helpers/enum'

const article = ref('')

// Props
const props = defineProps({
  ispremium: { type: Boolean, default: false },
  post: { type: Object, default: () => ({}) },
  chapter: { type: Object, default: () => ({}) },
})

// State
const isPremiumDialogOpen = ref(false)
const showPremiumContent = ref(true)
const showSubscription = ref(false)

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

// Computed
const content = computed(() => props.post?.content || '')
const price = computed(() => props.chapter?.price ?? '14.99')
const title = computed(() => props.post?.title || '')
const chapterContent = computed(
  () => props.chapter?.excerpt ?? props.chapter?.content ?? ''
)

// Methods
function openPremium() {
  isPremiumDialogOpen.value = !isPremiumDialogOpen.value
  sendSegment(OPEN_PREMIUM, {})
}

function openPremiumContent() {
  showPremiumContent.value = true
  showSubscription.value = false
  sendSegment(OPEN_PREMIUM_UNLOCK, {})
}

function openSubscription() {
  showSubscription.value = true
  showPremiumContent.value = false
  sendSegment(OPEN_PREMIUM_SUBSCRIPTION, {})
}

function isDev() {
  return ['dev', 'development', 'staging'].includes(process.env.NODE_ENV)
}

async function sendSegment(name, data) {
  if (isDev()) return
  const slug = route?.params?.slug
  await Segment.identify(slug, { slug, ...(data?.user ?? {}) })
  await Segment.track(name, data)
}

async function unlock() {
  let plan = props.chapter?.plan_id
  if (isDev()) plan = '63184'

  // eslint-disable-next-line no-undef
  await Paddle.Checkout.open({
    product: plan,
    allowQuantity: false,
    disableLogout: true,
    frameInitialHeight: 416,
    successCallback: (data) => checkoutComplete(data),
    closeCallback: (data) => checkoutClosed(data),
  })

  sendSegment(PREMIUM_UNLOCK, {})
}

function checkoutComplete(data) {
  if (!data?.checkout?.completed) return
  sendSegment(PREMIUM_UNLOCK_PAID, {
    product: data?.product ?? {},
    user: data?.user ?? {},
  })
  if (data?.checkout?.redirect_url) {
    router.push(data?.checkout?.redirect_url)
  }
}

function checkoutClosed(data) {
  sendSegment(PREMIUM_UNLOCK_FAILED, {
    product: data?.product ?? {},
    user: data?.user ?? {},
  })
}

function subscribe() {
  sendSegment(PREMIUM_SUBSCRIPTION, {})
}

// Lifecycle
onMounted(() => {
  displayCustomReadMoreAlert()
  displayCustomCodeHighlighter()
  if (isDev()) {
    // eslint-disable-next-line no-undef
    Paddle.Environment.set('sandbox')
  }
  // eslint-disable-next-line no-undef
  Paddle.Setup({ vendor: Number(config.public.PADDLE_VENDOR) })

  const blocks = article.value?.querySelectorAll('pre code')
  blocks.forEach((block) => hljs.highlightElement(block))
})

// Helpers (rewritten without Vue.extend)
function displayCustomCodeHighlighter() {
  document.querySelectorAll('article pre').forEach((element) => {
    const wrapper = document.createElement('div')
    const header = document.createElement('div')
    const red = document.createElement('div')
    const yellow = document.createElement('div')
    const green = document.createElement('div')
    const footer = document.createElement('div')
    const lang = 'javascript'
    const text = document.createElement('span')
    text.innerHTML = `Use our <a href="https://playground.masteringbackend.com/${lang}?ref=masteringbackend&utm_source=masteringbackend&utm_medium=custom_code_editor&utm_campaign=${route.params.slug}" target="_blank">Online Code Editor</a>`

    wrapper.classList.add('custom-highlighter-wrapper')
    header.classList.add('custom-highlighter-header')
    green.classList.add('custom-highlighter-green')
    red.classList.add('custom-highlighter-red')
    yellow.classList.add('custom-highlighter-yellow')
    footer.classList.add('custom-highlighter-footer')

    element.insertAdjacentElement('beforebegin', wrapper)
    header.appendChild(red)
    header.appendChild(yellow)
    header.appendChild(green)
    footer.appendChild(text)
    wrapper.appendChild(header)
    wrapper.appendChild(element)
    wrapper.appendChild(footer)
  })
}

function displayCustomReadMoreAlert() {
  const tables = document.querySelectorAll('table')
  const customTables = []
  tables.forEach((item) => {
    const table = item.querySelector('tbody tr td:nth-child(2) p')
    if (table?.textContent.includes('custom')) {
      customTables.push(item)
    }
  })
  customTables.forEach((table) => {
    // here you would mount your CustomAlert as a Vue component programmatically
    console.log('Custom alert should be mounted for table:', table)
  })
}
</script>
