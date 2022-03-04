<template>
  <div>
    <!-- 头部 -->
    <Header />
    <!-- 主体-路由出口 -->
    <Nuxt />
    <!-- 底部 -->
    <Footer />
    <!-- 右侧咨询 -->
    <RightFixed />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './Header.vue'
import Footer from './Footer.vue'
import RightFixed from './RightFixed.vue'
export default {
  components: {
    Header,
    Footer,
    RightFixed
  },
  // middleware: 'auth', // 页面层级的中间件定义
  // middleware ({ store, route, redirect, params, query }) {
  //   // store状态树信息
  //   // route 一条目标路由信息
  //   // redirect 路由的强制跳转
  //   // params query 校验参数的合理性
  //   // console.log('layouts守卫前置守卫')
  //   // redirect('/reg')
  // },
  data () {
    return {}
  },
  async fetch () {
    // 获取友情链接
    const linksData = await this.$api.home.getFriendLink()
    this.$store.dispatch('home/setFriendLinks', linksData.data?.list || [])
    // 获取网站信息+公司信息
    const webInfoData = await this.$api.home.getWebInfo()
    const companyInfoData = await this.$api.home.getCompanyInfo()
    let resultData = {}
    const newArr = [
      ...(webInfoData.data?.list || []),
      ...(companyInfoData.data?.list || [])
    ]
    newArr.forEach((item) => {
      resultData = { ...resultData, ...item }
    })
    this.$store.dispatch('home/setWebCompanyInfo', resultData)
    // 获取全局配置
    const allConfigData = await this.$api.user.getAllConfig()
    this.$store.dispatch('user/saveAllConfig', allConfigData.data)
  },
  head () {
    return {
      title: this.webInfo.websiteName,
      link: [
        {
          rel: 'icon',
          href: this.webInfo.websitieIcon
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.webInfo.describe
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.webInfo.keyWords
        }
      ],
      script: [
        {
          type: 'text/javascript',
          src: this.baiduCode
        }
      ]
    }
  },
  computed: {
    ...mapState({
      webInfo: state => state.home.webInfo
    }),
    baiduCode () {
      let str = ''
      if (!this.webInfo.statisticalCode) {
        return str
      }
      const index = this.webInfo.statisticalCode.indexOf('http')
      if (index === -1) {
        return str
      }
      str = this.webInfo.statisticalCode.substring(index)
      const index1 = str.indexOf('"')
      str = str.substring(0, index1)
      return str
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {}
    }
  },
  mounted () {
    if (JSON.stringify(this.webInfo) === '{}') {
      this.getAllData()
    }
  },
  methods: {
    async getAllData () {
      // 获取友情链接
      const linksData = await this.$api.home.getFriendLink()
      this.$store.dispatch('home/setFriendLinks', linksData.data?.list || [])
      // 获取网站信息+公司信息
      const webInfoData = await this.$api.home.getWebInfo()
      const companyInfoData = await this.$api.home.getCompanyInfo()
      let resultData = {}
      const newArr = [
        ...(webInfoData.data?.list || []),
        ...(companyInfoData.data?.list || [])
      ]
      newArr.forEach((item) => {
        resultData = { ...resultData, ...item }
      })
      this.$store.dispatch('home/setWebCompanyInfo', resultData)
      // 获取全局配置
      const allConfigData = await this.$api.user.getAllConfig()
      this.$store.dispatch('user/saveAllConfig', allConfigData.data)
    }
  }
}
</script>

<style lang="scss" scoped></style>
