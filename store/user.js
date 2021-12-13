// state
export const state = () => ({
  isLogin: false,
  token: '',
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
  },
  // 设置是否登录状态
  saveIsLogin (state, status) {
    state.isLogin = status
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
  },
  // 退出登录
  logOut ({ commit, state }) {
    commit('saveIsLogin', false)
    commit('saveToken', { token: '' })
    commit('setUserInfo', {})
  }
}
