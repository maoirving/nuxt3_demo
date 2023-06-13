// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // docs: https://tailwindcss.nuxtjs.org
    '@nuxtjs/tailwindcss',
  ],
  css: ['@/assets/sass/app.scss'],
})
