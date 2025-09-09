<template>
  <main>
    <div class="notif">
      <h2 class="flex justify-center items-center gap-1.5 text-base font-bold">
        <span class="text-black">
          Unlock Your Python Backend Career: Build 30 Projects in 30 Days.</span
        >

        <a
          class="ml-2 flex justify-center items-center gap-1.5 rounded bg-black px-3 py-2 text-xs font-medium uppercase tracking-wide !text-white hover:bg-zinc-800"
          target="_blank"
          href="https://python30.masteringbackend.com?ref=masteringbackend"
        >
          Join now for just $54
        </a>
      </h2>
    </div>

    <header>
      <Nav />
    </header>

    <slot class="mb-5" />

    <Footer />
  </main>
</template>


<script>
// import '~/assets/css/hub/style.css'
export default {
  name: 'HubLayout',

  data() {
    return {
      baseURL: process.env.BASE_URL || 'https://masteringbackend.com',
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `${this.baseURL}${this.$route.path}`,
        },
      ],
    }
  },
}
</script>

<style>
.notif {
  position: sticky;
  top: 0;
  display: flex;
  padding: 10px;
  z-index: 91;
  justify-content: center;
  background-color: rgb(250 204 21/1);
}

body {
  background: #f1f1f1;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif !important;
  overflow-x: hidden;
}
</style>