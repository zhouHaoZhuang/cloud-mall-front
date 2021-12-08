import Vue from 'vue'
export const getIsPcOrMobile = (userAgent) => {
  if (
    userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return '/mb'
  } else {
    return '/pc'
  }
}
Vue.prototype.$getIsPcOrMobile = getIsPcOrMobile
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
