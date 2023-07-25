// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global/variables.scss"; @import "@/assets/scss/global/mixins.scss"; ',
        }
      }
    }
  },

  typescript: {
    strict: true,
  },

  components: [
      {
          path: '~/components',
          pathPrefix: false,
      },
  ],
})
