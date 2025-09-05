export const useStrapi = () => {
  const config = useRuntimeConfig()
  return $fetch.create({
    baseURL: config.public.BASE_ENDPOINT_URL,
    headers: {
      Authorization: `bearer ${config.public.STRAPI_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
}
