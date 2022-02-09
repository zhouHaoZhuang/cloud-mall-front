/* 插件全局守卫 */
import { getIsPcOrMobile } from '../utils/index'
export default ({ app, redirect, params, query, store, req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
  // cookies对象
  const cookies = app.$cookies
  // 返回设备是pc还是移动端
  const isMobile = getIsPcOrMobile(userAgent)
  // token
  const token = cookies.get('token') ? cookies.get('token') : ''

  // 需要登录黑名单
  const blackList = []

  // 移动端-pc端跳转适配
  const routerPush = (to, from, next, redirect) => {
    // 移动端适配
    if (isMobile === '/mb') {
      if (to.path.includes('pc')) {
        redirect(to.path.replace('pc', 'mb'))
      } else {
        next()
      }
    } else {
      if (to.path.includes('mb')) {
        redirect(to.path.replace('mb', 'pc'))
      } else {
        next()
      }
    }
  }
  // app == vue实例
  // redirect 跳转函数
  app.router.beforeEach((to, from, next) => {
    // console.log('路由跳转时', to, isMobile, process.env.NODE_ENV)
    // 全局前置守卫 -- 插件
    if (to.path === '/') {
      redirect(`/${isMobile === '/pc' ? 'pc' : 'mb'}`)
    } else if (blackList.findIndex(ele => ele === to.path) !== -1) {
      // 本地是否有token
      if (token) {
        // console.log('本地有token嘛', token, to)
        // 已配置pc移动端适配
        routerPush(to, from, next, redirect)
      } else {
        // 没有token,跳转登录
        redirect(`login-${isMobile === '/pc' ? 'pc' : 'mb'}`)
      }
    } else {
      // 不需要校验登录，直接跳转
      // 适配移动端
      routerPush(to, from, next, redirect)
    }
  })
  // 插件全局后置守卫
  app.router.afterEach((to, from) => {
    try {
      window._hmt = window._hmt || []
      window._hmt.push(['_trackPageview', to.fullPath])
    } catch (e) {}
  })
}
