// import { message } from 'ant-design-vue'
import env from '~/config/env'
import { getRequestParams } from '~/utils/index'
// 删除字符串首尾空格
function trim (str) {
  return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
}
// 将cookie里边的domain和token处理成数组
function getCookieObj (cookie) {
  const obj = {
    domain: '',
    token: '',
    tenantId: '',
    baseUrl: ''
  }
  if (cookie === undefined) {
    return obj
  }
  const cookieArr = cookie.split(';')
  cookieArr.forEach((ele) => {
    const domainIndex = ele.search('domain')
    const tokenIndex = ele.search('token')
    const tenantIdIndex = ele.search('tenantId')
    const baseUrlIndex = ele.search('baseUrl')
    const str = trim(ele)
    if (domainIndex !== -1) {
      obj.domain = str.substring(7)
    }
    if (tokenIndex !== -1) {
      obj.token = str.substring(6)
    }
    if (tenantIdIndex !== -1) {
      obj.tenantId = str.substring(9)
    }
    if (baseUrlIndex !== -1) {
      obj.baseUrl = str.substring(8)
    }
  })
  return obj
}
// 处理token
function getToken (cookie, store) {
  if (store.state.user.token) {
    return store.state.user.token
  }
  return getCookieObj(cookie).token
}
// 根据环境返回domain地址--后端需要请求头携带浏览器地址，字段：domain
function getDomainUrl (cookie, store) {
  if (process.env.NODE_ENV === 'local') {
    return env.DOMAIN_URL
  }
  if (store.state.user.windowHref) {
    return store.state.user.windowHref
  }
  return getCookieObj(cookie).domain
}
// 获取租户id
function getTenantId (cookie, store) {
  if (store.state.user.userInfo.tenantId) {
    return store.state.user.userInfo.tenantId
  }
  return getCookieObj(cookie).tenantId
}
// 如果不是本地开发环境，需要处理请求地址
function getBaseUrl (cookie, store) {
  if (process.env.NODE_ENV === 'local') {
    return env.BASE_URL
  }
  if (store.state.user.baseUrl) {
    return `${store.state.user.baseUrl}${env.BASE_URL}`
  }
  return `${getCookieObj(cookie).baseUrl}${env.BASE_URL}`
}

// 拦截器
export default ({ $axios, redirect, route, store }) => {
  // 基本配置
  $axios.defaults.baseURL = env.BASE_URL
  $axios.defaults.timeout = 10000
  // 请求时拦截
  $axios.onRequest((config) => {
    const cookieToken = config.headers.common.cookie
    // 如果不是本地开发环境，需要处理请求地址
    // config.baseURL = getBaseUrl(cookieToken, store)
    // 地图请求地址
    if (config.map) {
      config.baseURL = '/map'
    }
    config.headers.token = getToken(cookieToken, store)
    config.headers.domain = getDomainUrl(cookieToken, store)
    config.headers.tenantId = getTenantId(cookieToken, store)
    // 携带system区分不同项目
    config.headers.system = 'idc'
    // console.log(
    //   '查看domain',
    //   process.env.NODE_ENV,
    //   cookieToken,
    //   getCookieObj(cookieToken),
    //   getCookieObj(cookieToken).baseUrl + env.BASE_URL,
    //   config.headers.domain
    // )
    // 查看请求参数
    getRequestParams(config)
    return config
  })

  // 响应拦截
  $axios.onResponse((res) => {
    const data = res.data
    const status = res.code
    console.log('请求响应', data, status)
    if (status !== '000000') {
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
