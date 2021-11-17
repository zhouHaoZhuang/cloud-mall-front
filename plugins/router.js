/* 插件全局守卫 */
import { getIsPcOrMobile } from '../utils/index'
export default ({ app, redirect, params, query, store, req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
  // 返回设备是pc还是移动端
  const isMobile = getIsPcOrMobile(userAgent)
  // token
  const token = store.state.user.token
  console.log(token)

  // 免登录白名单
  const whiteList = ['/login-pc', '/login-mb', '/register']

  // 移动端-pc端跳转适配
  const routerPush = (to, from, next, redirect) => {
    // 暂时注释移动端适配
    // if (isMobile === '/mb') {
    //   if (to.path.includes('pc')) {
    //     redirect(to.path.replace('pc', 'mb'))
    //   } else {
    //     next()
    //   }
    // } else {
    //   if (to.path.includes('mb')) {
    //     redirect(to.path.replace('mb', 'pc'))
    //   } else {
    //     next()
    //   }
    // }
    next()
  }
  // app == vue实例
  // redirect 跳转函数
  app.router.beforeEach((to, from, next) => {
    // 全局前置守卫 -- 插件
    // 检测跳转的路由是否在白名单内，存在就直接放行
    if (whiteList.includes(to.path)) {
      routerPush(to, from, next, redirect)
    } else {
      // 本地是否有token
      if (token) {
        // 已配置pc移动端适配
        if (to.path === '/') {
          redirect(isMobile)
        } else {
          routerPush(to, from, next, redirect)
        }
      } else {
        redirect(`login-${isMobile === '/pc' ? 'pc' : 'mb'}`)
      }
    }
  })

  app.router.afterEach((to, from) => {
    console.log('插件全局后置守卫')
  })
}
