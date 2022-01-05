import router from './router/index'
export default {
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  head: {
    title: 'ydidc-mall',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    // script: [{ src: 'js/isMobile.js' }]
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    //   { rel: 'stylesheet', href: '外部链接' }
    // ],
  },

  // middleware
  router: {
    middleware: 'auth',
    ...router
  },

  // 全局loading状态
  loading: '~/components/Loading/loading.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/base.css',
    'assets/css/transition.css',
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/router',
    '~/plugins/mixins',
    '~/plugins/api-plugin',
    {
      src: '~/plugins/axios',
      ssr: true // 开启服务端渲染
    },
    {
      src: '@/plugins/antd-ui',
      ssr: true // 开启服务端渲染
    },
    { src: '~/plugins/vue-persistedstate', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt', // 数据持久化
    '@nuxtjs/style-resources' // 全局css配置
  ],

  // 全局css配置
  styleResources: {
    // 需要添加这个 用来配置全局
    scss: ['./assets/scss/global.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // 跨域
  axios: {
    // proxy: true // 开启跨域行为
    // prefix: '/api', //baseUrl
  },
  // proxy: {
  //   // 代理
  //   '/api': {
  //     target: '', // 代理转发地址
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': ''
  //     }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: [/^antd-ui/]
  }
}
