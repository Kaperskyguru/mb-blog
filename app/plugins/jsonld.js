import NuxtJsonld from 'nuxt-jsonld'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(NuxtJsonld)
})
