import bodyParser from 'body-parser'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'biz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '윈윈 비즈 데모 버전' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"preconnect", href:"https://fonts.gstatic.com"},
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/assets.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  serverMiddleware: [
    bodyParser.urlencoded({extended:true}),
    { path: '/api', handler: '~/api/index.js' }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
