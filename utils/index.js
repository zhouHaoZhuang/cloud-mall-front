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

// 处理浏览器地址栏地址，获取请求头domain参数
export const getWindowUrl = (url, isSaveHeader) => {
  const newUrl = url.includes('http://')
    ? url.replace('http://', '')
    : url.replace('https://', '')
  const str = newUrl.substring(0, newUrl.indexOf('/'))
  const result = `${str}`
  const newResult = `${url.includes('http://') ? 'http://' : 'https://'}${str}`
  // 下方注释为截取.com
  // const index1 = str.lastIndexOf(".");
  // const index2 = str.lastIndexOf(".", index1 - 1);
  // const result = str.substring(index2 + 1);
  return isSaveHeader ? newResult : result
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
  local: 'http://localhost:8000/console'
}
// 获取控制台地址
function getCloudAdminUrl () {
  if (process.env.NODE_ENV === 'local') {
    return cloudAdminUrl[process.env.NODE_ENV]
  }
  if (!localStorage.getItem('idcUrl')) {
    localStorage.setItem('idcUrl', getIdcAdminUrl(window.location.href))
  }
  return localStorage.getItem('idcUrl')
}
// 跳转到CDN云加速页面
export const jumpCloudAdminDash = (token) => {
  const url = getCloudAdminUrl()
  window.open(url + '/control/cdn/dashboard' + `?token=${token}`, '_self')
}
// 跳转控制台-首页
export const jumpCloudAdmin = (token, type) => {
  const url = getCloudAdminUrl()
  window.open(url + '/dashboard' + `?token=${token}`, type ? '_blank' : '_self')
}
// 跳转控制台-详情页
export const jumpCloudAdminDetail = (id, token) => {
  const url = getCloudAdminUrl()
  window.open(
    url + '/user/finance/orderDetail' + `?id=${id}` + `&token=${token}`,
    '_self'
  )
}
// 跳转到工单页面
export const jumpCloudAdminWork = (token, type) => {
  const url = getCloudAdminUrl()
  window.open(
    url + '/user/setting/realname' + `?token=${token}`,
    type ? '_blank' : '_self'
  )
}
// 跳转控制台-实名认证
export const jumpCloudAdminRealName = (token, type) => {
  const url = getCloudAdminUrl()
  window.open(
    url + '/user/workOrder/submit' + `?token=${token}`,
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
    system: config.headers.system,
    tenantId: config.headers.tenantId,
    token: config.headers.token
  }
  console.log('请求时参数', selectParams)
}

// 跳转控制台的url地址生成
export const getIdcAdminUrl = (url) => {
  const newUrl = url.includes('http://')
    ? url.replace('http://', '')
    : url.replace('https://', '')
  const str = newUrl.substring(0, newUrl.indexOf('/'))
  const newResult = `${
    url.includes('http://') ? 'http://' : 'https://'
  }${str}/console`
  return newResult
}

// 判断密码是否是三种字符组合 默认长度限制为8-30
export const judgePwdFormat = (value, minLength = 8, maxLength = 30) => {
  if (value.length < minLength || value.length > maxLength) {
    return 0
  }
  const regArr = [
    /^(?=.*?[a-z]).*$/,
    /^(?=.*?[A-Z]).*$/,
    /^(?=.*?\d).*$/,
    /^(?=.*[()`~!@#$%^&*-_+=|{}:;'><,.?/]).*$/ // 用作占位，无用
  ]
  let count = 0
  regArr.forEach((ele, index) => {
    if (index !== 3) {
      if (ele.test(value)) {
        count = count + 1
      }
    } else {
      const oldStr = value
      const newStr = value.replace(/[^u4e00-u9fa5w]/g, '')
      if (oldStr !== newStr) {
        count = count + 1
      }
    }
  })
  return count
}

const identifyCodes = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'A',
  'B',
  'C',
  'D'
] // 根据实际需求加入自己想要的字符
// 生成随机数
export const randomNum = (min, max) => {
  max = max + 1
  return Math.floor(Math.random() * (max - min) + min)
}
// 随机生成验证码字符串
export const getRandomCode = (len = 4) => {
  let identifyCode = ''
  for (let i = 0; i < len; i++) {
    identifyCode += identifyCodes[randomNum(0, identifyCodes.length - 1)]
  }
  return identifyCode
}
