// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Space Tourism',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      ]
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  css: [
    '@/assets/styles/main.scss'
  ],

  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Bellefair': true,
      'Barlow Condensed': true,
      'Barlow': true
    }
  }
})