// import { message } from 'ant-design-vue'
import env from '~/config/env'
// 根据环境返回domain地址--后端需要请求头携带浏览器地址，字段：domain
function getDomainUrl (store) {
  return process.env.NODE_ENV === 'dev'
    ? env.DOMAIN_URL
    : store.state.user.windowHref
}
// 拦截器
export default ({ $axios, redirect, route, store }) => {
  // 基本配置
  $axios.defaults.baseURL = env.BASE_URL
  $axios.defaults.timeout = 5000

  // 请求时拦截
  $axios.onRequest((config) => {
    // config.headers.token = store.state.user.token
    config.headers.domain = getDomainUrl(store)
    return config
  })

  // 响应拦截
  $axios.onResponse((res) => {
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
