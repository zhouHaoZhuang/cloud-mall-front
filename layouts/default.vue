<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components: {
    Header
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
