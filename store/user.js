// state
export const state = () => ({
  isLogin: false,
  token: '',
  userInfo: {},
  windowHref: '',
  loginForm: {
    phone: '',
    password: '',
    autoLogin: false
  }
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
  },
  // 保存自动登录用户信息
  saveAutoLogin (state, payload) {
    state.loginForm = { ...payload }
  }
}

// actions
export const actions = {
  // vuex调用接口方式
  getList ({ commit, state }, payload) {
    this.$api.home.list({ pageNo: 99 }).then((res) => {})
  },
  // 保存浏览器地址
  setWindowsHref ({ commit, state }, payload) {
    commit('saveWindowsHref', payload)
  },
  // 登录时设置下次是否自动登录
  setAutoLogin ({ commit, state }, data) {
    commit('saveAutoLogin', data)
  },
  // 登录
  login ({ commit, state }, payload) {
    commit('saveUserInfo', payload)
    commit('saveToken', payload)
    commit('saveIsLogin', true)
  },
  // 退出登录
  logOut ({ commit, state }) {
    commit('saveIsLogin', false)
    commit('saveToken', { token: '' })
    commit('saveUserInfo', {})
  }
}
