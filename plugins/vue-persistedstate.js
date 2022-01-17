import createPersistedState from 'vuex-persistedstate'
import { getWindowUrl } from '@/utils/index'

export default ({ store, $cookies }) => {
  // 保存domain地址
  $cookies.set('domain', getWindowUrl(window.location.href))
  store.dispatch('user/setWindowsHref', getWindowUrl(window.location.href))
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'store' // 读取本地存储的数据到store
    })(store)
  })
}
