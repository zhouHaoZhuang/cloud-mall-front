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
