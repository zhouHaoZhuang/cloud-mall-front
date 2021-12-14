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
// 跳转控制台
export const jumpCloudAdmin = (type) => {
  const token = document.cookie
  window.open(env.ADMIN_URL + `?${token}`, type ? '_blank' : '_self')
}
