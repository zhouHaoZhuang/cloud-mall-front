// import { message } from 'ant-design-vue'
// import env from '~/config/env'
// 拦截器
export default ({ $axios, redirect, route, store }) => {
  // 基本配置
  // $axios.defaults.baseURL = env.BASE_URL
  $axios.defaults.baseURL = 'https://api.chadian.com'
  $axios.defaults.timeout = 5000

  // 请求时拦截
  $axios.onRequest((config) => {
    console.log('发送请求时的拦截')
    // config.headers.token = store.state.user.token
    return config
  })

  // 响应拦截
  $axios.onResponse((res) => {
    // console.log('响应时的拦截', res)
    const data = res.data
    const status = data.status
    // const errmsg = data.errmsg
    // 从 localstorage 获取 token
    if (status !== 200) {
      // message.warning(errmsg)
      if (status === 10001 || status === 10006 || status === 3) {
        store.dispatch('user/logout')
      }
      return Promise.reject(data)
    }
    return data
  })

  // 错误处理
  $axios.onError((error) => {
    // 处理
    return error
  })
}
