import Vue from 'vue'
import env from '@/config/env'
export const getIsPcOrMobile = (userAgent) => {
  // if (
  //   userAgent.match(
  //     /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  //   )
  // ) {
  //   return '/mb'
  // } else {
  //   return '/pc'
  // }
  // 暂时不需要适配移动端，直接返回 /pc
  return '/pc'
}
Vue.prototype.$getIsPcOrMobile = getIsPcOrMobile
// 处理浏览器地址栏地址，截取地址中段,不需要http:// or https://和com后地址
export const getWindowUrl = (url) => {
  const newUrl = url.includes('http://')
    ? url.replace('http://', '')
    : url.replace('https://', '')
  return newUrl.substring(0, newUrl.indexOf('/'))
}
// 处理cpu+内存数据  data:默认数组  company:单位
export const setCpuOrDiskData = (data, company) => {
  if (data && Array.isArray(data) && data.length > 0) {
    const newData = data.sort((a, b) => a - b)
    return newData.map((item) => {
      return {
        title: item.replace('.0', '') + company,
        value: item
      }
    })
  } else {
    return []
  }
}
// 跳转控制台-首页
export const jumpCloudAdmin = (token, type) => {
  window.open(
    env.ADMIN_URL + '/#/dashboard' + `?token=${token}`,
    type ? '_blank' : '_self'
  )
}
// 跳转控制台-详情页
export const jumpCloudAdminDetail = (id) => {
  window.open(
    env.ADMIN_URL + '/#/user/finance/orderdetails' + `?id=${id}`,
    '_self'
  )
}
// 因服务端渲染特殊性，无法直观查看页面刚进入时发送的请求，使用函数返回格式好看的数据帮助查看
export const getRequestParams = (config) => {
  const selectParams = {
    baseURL: config.baseURL + config.url,
    method: config.method,
    params: config.params,
    data: config.data,
    timeout: config.timeout,
    domain: config.headers.domain,
    token: config.headers.token
  }
  console.log('请求时参数', selectParams)
}
