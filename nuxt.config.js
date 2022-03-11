import path from 'path'
import router from './router/index'
export default {
  server: {
    prot: 3000,
    host: '0.0.0.0'
  },
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  head: {
    title: '云商城',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv': 'pragram', content: 'no-cache' },
      {
        'http-equiv': 'cache-control',
        content: 'no-cache, no-store, must-revalidate'
      },
      { 'http-equiv': 'expires', content: '0' }
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'https://webapi.amap.com/maps?v=1.4.15&key=d79adb5572920b840e8e4b559c812836&plugin=AMap.MouseTool,AMap.PolyEditor,AMap.LabelMarker,AMap.Autocomplete,AMap.ToolBar,AMap.PlaceSearch,AMap.Heatmap,AMap.Geocoder'
      }
    ]
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    // script: [{ src: 'js/isMobile.js' }]
    // link: [
    //   { rel: 'stylesheet', href: '/assets/css/base.css' }
    // ]
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
    'assets/css/transition.css'
    // 'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/router',
    '~/plugins/api-plugin',
    '~/plugins/mixins',
    {
      src: '~/plugins/axios',
      ssr: true
    },
    {
      src: '@/plugins/antd-ui',
      ssr: true
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
    scss: ['./assets/scss/global.scss', './assets/scss/theme.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // 跨域
  axios: {
    proxy: true // 开启跨域行为
    // prefix: '/api' // 所有请求前缀加上/api,无需配置axios请求地址(BASE_URL)
  },
  proxy: {
    // 代理
    '/api': {
      target: 'http://site.sailayun.com/ims', // 代理转发地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    },
    '/map': {
      target: 'https://restapi.amap.com', // 代理转发地址
      changeOrigin: true,
      pathRewrite: {
        '^/map': ''
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['ant-design-vue'],
    // 打包信息
    // analyze: true,
    extractCSS: { allChunks: true },
    // 按需引入ui组件
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: 'css'
          }
        ]
      ]
    },
    // 按需引入ui组件的icon
    extend (config) {
      config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(
        __dirname,
        './plugins/antd-icons.js'
      )
    },
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : '[contenthash].css'),
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    }
  }
}
