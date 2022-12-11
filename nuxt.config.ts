// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@pinia/nuxt', '@l4dybird/nuxt3-quasar-module', 'nuxt-windicss'],
  windicss: {
    analyze: true,
  },
});
