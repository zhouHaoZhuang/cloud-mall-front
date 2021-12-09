// state
export const state = () => ({
  token: 'asdfghjkl',
  userInfo: {},
  windowHref: ''
})

// getters
export const getters = {
  getToken (state) {
    return state.token
  }
}

// mutations
export const mutations = {
  // 保存当前浏览器地址
  saveWindowsHref (state, href) {
    state.windowHref = href
  },
  // 保存用户信息
  saveUserInfo (state, payload) {
    state.userInfo = { ...payload }
  },
  // 保存token
  saveToken (state, payload) {
    state.token = payload.token
  }
}

// actions
export const actions = {
  // 保存浏览器地址
  setWindowsHref ({ commit, state }, payload) {
    commit('saveWindowsHref', payload)
  },
  getUserInfo ({ commit, state }, payload) {
    // commit('setUserInfo', payload)
    commit('saveToken', payload)
  },
  // vuex调用接口方式
  getList ({ commit, state }, payload) {
    this.$api.home.list({ pageNo: 99 }).then((res) => {})
  }
}
