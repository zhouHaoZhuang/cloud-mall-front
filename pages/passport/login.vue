<template>
  <div>
    <div>登录-pc端</div>
    <div v-for="(item, index) in result" :key="index">
      {{ item.ColTitle }}
      {{ item.ColInfo }}
    </div>
  </div>
</template>

<script>
import env from '~/config/env'
export default {
  // nuxt推荐请求方式
  // async asyncData ({ app }) {
  //   const dataa = await app.$api.home.list({ action: 'apphome' })
  //   // console.log('请求之后', dataa)
  //   return {
  //     result: dataa
  //   }
  // },
  data () {
    return {
      result: []
    }
  },
  // 读数据 返回vuex
  fetch ({ store }) {
    // 异步业务逻辑 读取服务端的数据提交给vuex
    console.log('fetch')
  },
  mounted () {
    // 生命周期调用接口-不推荐
    this.getList()
    console.log('环境变量', process.env, process.env.NODE_ENV, env.BASE_URL)
  },
  methods: {
    getList () {
      this.$api.home.list({ action: 'apphome' }).then((res) => {
        console.log(res)
        this.result = [...res.data.category]
      })
    }
  }
}
</script>
