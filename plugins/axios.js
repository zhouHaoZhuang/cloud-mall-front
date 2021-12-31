// import { message } from 'ant-design-vue'
import env from '~/config/env'
import { getRequestParams } from '~/utils/index'
// 根据环境返回domain地址--后端需要请求头携带浏览器地址，字段：domain
function getDomainUrl (cookie, store) {
  if (process.env.NODE_ENV === 'dev') {
    return env.DOMAIN_URL
  }
  if (cookie !== undefined) {
    const index = cookie.lastIndexOf('domain')
    if (index !== -1) {
      return cookie.substring(index + 7)
    }
  }
  if (store.state.user.windowHref) {
    return store.state.user.windowHref
  }
  return ''
}
// 拦截器
export default ({ $axios, redirect, route, store }) => {
  // 基本配置
  $axios.defaults.baseURL = env.BASE_URL
  $axios.defaults.timeout = 5000

  // 请求时拦截
  $axios.onRequest((config) => {
    const cookieToken = config.headers.common.cookie
    const token = store.state.user.token
      ? store.state.user.token
      : cookieToken === undefined
        ? ''
        : config.headers.common.cookie.includes('token')
          ? config.headers.common.cookie.substring(6)
          : ''
    if (token) {
      config.headers.token = token
    }
    config.headers.domain = getDomainUrl(cookieToken, store)
    // // 查看请求参数
    getRequestParams(config)
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
