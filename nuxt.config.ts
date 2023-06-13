// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // docs: https://tailwindcss.nuxtjs.org
    '@nuxtjs/tailwindcss',
    // docs: https://vueuse.org/guide/#nuxt
    '@vueuse/nuxt',
    // docs: https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
  ],
  css: ['@/assets/sass/app.scss'],
  plugins: ['@/plugins/directives.ts'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
})
