import createPersistedState from 'vuex-persistedstate'
import { getWindowUrl, getIdcAdminUrl } from '@/utils/index'

export default ({ store, $cookies }) => {
  // 保存domain地址
  $cookies.set('domain', getWindowUrl(window.location.href))
  $cookies.set('baseUrl', getWindowUrl(window.location.href, true))
  localStorage.setItem('idcUrl', getIdcAdminUrl(window.location.href))
  // 保存带有网络协议的浏览器地址
  store.dispatch('user/setBaseUrl', getWindowUrl(window.location.href, true))
  // 配置需要持久化的模块
  // const PERSIST_PATHS = [
  //   'home',
  //   'user.isLogin',
  //   'user.token',
  //   'user.userInfo',
  //   'user.windowHref',
  //   'user.loginForm',
  //   'user.redirectPath'
  // ]
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'store' // 读取本地存储的数据到store
      // paths: PERSIST_PATHS
    })(store)
  })
}
