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
import CustomAlert from './CustomAlert'
import { ref, computed, onMounted, createApp } from 'vue'
import { useRoute, useRouter, useRuntimeConfig } from '#imports'

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
}

function openPremiumContent() {
  showPremiumContent.value = true
  showSubscription.value = false
}

function openSubscription() {
  showSubscription.value = true
  showPremiumContent.value = false
}

function isDev() {
  return ['dev', 'development', 'staging'].includes(process.env.NODE_ENV)
}

function createComponent(element, props = {}) {
  if (!element) return

  const mountNode = document.createElement('div')
  mountNode.style.color = 'red'
  element.replaceWith(mountNode)
  const comp = defineComponent({
    extends: CustomAlert,
    props: ['title', 'subtitle', 'tags'],
  })

  const app = createApp(comp, props)
  app.mount(mountNode)
}

function createCustomAlert(element, data = {}) {
  const props = {
    title: data?.title,
    description: data?.description,
    tags: data?.tags,
    readLink: data?.url,
    showRead: true,
  }

  createComponent(element, props)
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
}

function checkoutComplete(data) {
  if (!data?.checkout?.completed) return
  if (data?.checkout?.redirect_url) {
    router.push(data?.checkout?.redirect_url)
  }
}

// Lifecycle
onMounted(() => {
  displayCustomReadMoreAlert()
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
// function displayCustomCodeHighlighter() {
//   // if (props.chapter) return
//   document.querySelectorAll('article pre').forEach((element) => {
//     console.log('h')
//     const wrapper = document.createElement('div')
//     const header = document.createElement('div')
//     const red = document.createElement('div')
//     const yellow = document.createElement('div')
//     const green = document.createElement('div')
//     const footer = document.createElement('div')
//     const lang = 'javascript'
//     const text = document.createElement('span')
//     text.innerHTML = `Use our <a href="https://playground.masteringbackend.com/${lang}?ref=masteringbackend&utm_source=masteringbackend&utm_medium=custom_code_editor&utm_campaign=${route.params.slug}" target="_blank">Online Code Editor</a>`

//     wrapper.classList.add('custom-highlighter-wrapper')
//     header.classList.add('custom-highlighter-header')
//     green.classList.add('custom-highlighter-green')
//     red.classList.add('custom-highlighter-red')
//     yellow.classList.add('custom-highlighter-yellow')
//     footer.classList.add('custom-highlighter-footer')

//     element.insertAdjacentElement('beforebegin', wrapper)
//     header.appendChild(red)
//     header.appendChild(yellow)
//     header.appendChild(green)
//     footer.appendChild(text)
//     wrapper.appendChild(header)
//     wrapper.appendChild(element)
//     wrapper.appendChild(footer)
//   })
// }

function displayCustomReadMoreAlert() {
  const tables = document.querySelectorAll('table')

  const customTables = []

  tables.forEach((item) => {
    const table = item.querySelector('tbody tr td:nth-child(2) p')

    if (table.textContent.includes('custom')) {
      customTables.push(item)
    }
  })

  customTables.forEach((table) => {
    const data = {}
    const item = table.querySelectorAll('tbody tr')

    item.forEach((i) => {
      const key = i.querySelectorAll('td').item(0).textContent.toLowerCase()
      const value = i.querySelectorAll('td').item(1).textContent

      if (value === 'custom') return

      data[key] = value
    })

    createCustomAlert(table, data)
  })
}
</script>
