// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
   sourcemap: false,
  css : ['@/assets/styles/reset.scss'],
  modules: ['@pinia/nuxt'],

  typescript: { 
    strict: true
  }

})
