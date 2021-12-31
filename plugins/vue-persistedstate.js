import createPersistedState from 'vuex-persistedstate'
import { getWindowUrl } from '@/utils/index'

export default ({ store, $cookies }) => {
  // console.log(
  //   '执行保存domain',
  //   window.location.href,
  //   getWindowUrl(window.location.href)
  // )
  // console.log('进入时的执行', $cookies)
  // 保存domain地址
  $cookies.set('domain', getWindowUrl(window.location.href))
  store.dispatch('user/setWindowsHref', getWindowUrl(window.location.href))
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'store' // 读取本地存储的数据到store
    })(store)
  })
}
