export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    const router = useRouter()

    router.beforeEach((to, from, next) => {
      if (from.query.ref && !to.query.ref) {
        next({
          ...to,
          query: { ...to.query, ref: from.query.ref },
        })
      } else {
        next()
      }
    })
  })
})
