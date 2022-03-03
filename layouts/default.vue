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
    const webInfoData = await this.$api.home.getWebInfo()
    const companyInfoData = await this.$api.home.getCompanyInfo()
    let data = {}
    let webInfoDataList = {}
    let companyInfoDataList = {}
    if (webInfoData.data) {
      webInfoDataList = webInfoData.data.list ? webInfoData.data.list[0] : {}
    }
    if (companyInfoData.data) {
      companyInfoDataList = companyInfoData.data.list
        ? companyInfoData.data.list[0]
        : {}
    }
    data = {
      ...webInfoDataList,
      ...companyInfoDataList
    }
    this.$store.dispatch('home/setWebCompanyInfo', data)
    this.$store.dispatch('user/getAllConfig')
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
          src: this.webInfo.statisticalCode
        }
      ]
    }
  },
  computed: {
    ...mapState({
      webInfo: state => state.home.webInfo
    })
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
