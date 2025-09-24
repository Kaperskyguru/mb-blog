<template>
  <main class="bg-[#f7f5fa] w-full">
    <!-- Sticky Promo Bar -->
    <div class="project30">
      <h2 class="promo-text flex items-center gap-2 font-bold text-black">
        Unlock Your Python Backend Career: Build 30 Projects in 30 Days.
        <a
          href="https://python30.masteringbackend.com?ref=masteringbackend"
          target="_blank"
          class="promo-btn ml-2 flex items-center gap-1 rounded bg-black px-3 py-2 text-xs font-medium uppercase tracking-wide text-white"
        >
          Join now for just $54
        </a>
      </h2>
    </div>

    <!-- Navigation -->
    <header>
      <Nav />
    </header>

    <!-- Page Content -->
    <slot class="pb-5" />

    <!-- Footer -->
    <Footer />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const baseURL = process.env.BASE_URL || 'https://masteringbackend.com'
const route = useRoute()

// Custom code highlighter
onMounted(() => {
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
})

// Nuxt 4 useHead
useHead({
  link: [
    {
      rel: 'canonical',
      href: `${baseURL}${route.path}`,
    },
  ],
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --primary-color: #0a083b;
  --danger: #ff6652;
  --para-color: #57586e;
  --skyblue: #3b43f2;
  --sea-blue: #18aacd;
  --pink: #f22452;
  --warning: #edac3d;
  --dark-blue: #011ed3;
  --purple: #8214fc;
  --card-radius: 15px;
  --gradient-warning: linear-gradient(180deg, #edac3d 8.09%, #f0c419 69.16%);
  --gradient-skyblue: linear-gradient(180deg, #3b43f2 8.09%, #2178ff 69.16%);
  --gradient-sea-blue: linear-gradient(180deg, #18aacd 8.09%, #19e3f0 69.16%);
  --gradient-pink: linear-gradient(180deg, #f22452 37.71%, #ff5364 60.98%);
  --gradient-purple: linear-gradient(180deg, #8214fc 8.09%, #9e6cff 69.16%);
  --gradient-dark-blue: linear-gradient(
    181.08deg,
    #001ed3 47.89%,
    #247bde 106.65%
  );
}

body {
  font-family: 'Avenir Next', 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #f1f1f1;
  overflow-x: hidden;
}

p > code {
  font-style: italic;
  font-size: 90%;
  color: #bd4147 !important;
  font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
  padding: 0.2rem 0.4rem !important;
  border-radius: 0.25rem;
  display: inline !important;
}

.link {
  text-decoration: none;
  color: var(--primary-color);
}

.link:hover {
  color: #15117a;
}

h1 {
  color: var(--primary-color);
}

p {
  font-size: 1.3rem;
  color: var(--para-color);
}

.project30 {
  position: sticky;
  top: 0;
  z-index: 90;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  background-color: #facc15;
}

.promo-text {
  font-size: 1rem;
}

.promo-btn {
  transition: background 0.3s ease;
}

.promo-btn:hover {
  background-color: #111111;
}
</style>
