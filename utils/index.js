import Vue from 'vue'
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
// 处理浏览器地址栏地址，截取地址中段,不需要http:// or https://和com/cn后地址
export const getWindowUrl = (url) => {
  const newUrl = url.includes('http://')
    ? url.replace('http://', '')
    : url.replace('https://', '')
  const str = newUrl.substring(0, newUrl.indexOf('/'))
  const index1 = str.lastIndexOf('.')
  const index2 = str.lastIndexOf('.', index1 - 1)
  const result = str.substring(index2 + 1)
  return result
}
// 处理cpu+内存数据  data:默认数组  company:单位
export const setCpuOrDiskData = (data, company) => {
  if (data && Array.isArray(data) && data.length > 0) {
    const newData = data.sort((a, b) => a - b)
    return newData.map((item) => {
      return {
        title: String(item).replace('.0', '') + company,
        value: item
      }
    })
  } else {
    return []
  }
}
// 跳转控制台地址
const cloudAdminUrl = {
  dev: 'http://localhost:8000'
  // dev: 'http://192.168.12.30:8000'
}
// 获取控制台地址
function getCloudAdminUrl () {
  return process.env.NODE_ENV === 'dev'
    ? cloudAdminUrl[process.env.NODE_ENV]
    : localStorage.getItem('idcUrl')
}
// 跳转控制台-首页
export const jumpCloudAdmin = (token, type) => {
  const url = getCloudAdminUrl()
  window.open(
    url + '/#/dashboard' + `?token=${token}`,
    type ? '_blank' : '_self'
  )
}
// 跳转控制台-详情页
export const jumpCloudAdminDetail = (id, token) => {
  const url = getCloudAdminUrl()
  window.open(
    url + '/#/user/finance/orderDetail' + `?id=${id}` + `&token=${token}`,
    '_self'
  )
}
// 跳转控制台-实名认证
export const jumpCloudAdminRealName = (token, type) => {
  const url = getCloudAdminUrl()
  window.open(
    url + '/#/user/setting/realname' + `?token=${token}`,
    type ? '_blank' : '_self'
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

// 跳转控制台的url地址生成
export const getIdcAdminUrl = (url) => {
  const newUrl = url.includes('http://')
    ? url.replace('http://', '')
    : url.replace('https://', '')
  const str = newUrl.substring(0, newUrl.indexOf('/')).replace('www.', '')
  const newResult = `${
    url.includes('http://') ? 'http://' : 'https://'
  }console.${str}`
  return newResult
}
