import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  store.dispatch('user/setWindowsHref', window.location.href)
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'store' // 读取本地存储的数据到store
    })(store)
  })
}
