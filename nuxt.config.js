
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  components: true,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  loading: {
    height: '5px',
    color: '#ffda1a'
  },
  head: {
    title: 'Ekambia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://ekambia-landing.herokuapp.com/'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Ekambia'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Cambia tu dinero como nunca antes'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://ekambia-landing.herokuapp.com/og/1.png'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://ekambia-landing.herokuapp.com/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Ekambia'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Cambia tu dinero como nunca antes'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://ekambia-landing.herokuapp.com/og/1.png'
      },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js'
      },
      {
        src: 'matrix.js'
      }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swa' },
      { rel: 'icon', type: 'image/png', href: 'favicon.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'boxicons/css/boxicons.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: '@/plugins/chart.client.js', ssr: false},
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/device',
    'cookie-universal-nuxt',
    // '@nuxtjs/tailwindcss'
  ],

  styleResources: {
    sass: ['~/style/mixins.sass']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  env: {
    API: 'https://ekambia.lusaxweb.pro/api/'
  }
}
