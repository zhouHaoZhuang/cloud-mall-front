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
  middleware ({ store, route, redirect, params, query }) {
    console.log('middleware layouts inside')
    // store状态树信息
    // route 一条目标路由信息
    // redirect 路由的强制跳转
    // params query 校验参数的合理性
    // console.log('layouts守卫前置守卫')
    // redirect('/reg')
  },
  data () {
    return {}
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
