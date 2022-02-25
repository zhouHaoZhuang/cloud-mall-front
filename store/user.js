// state
export const state = () => ({
  isLogin: false,
  token: '',
  userInfo: {},
  windowHref: '',
  baseUrl: '',
  loginForm: {
    phone: '',
    password: '',
    autoLogin: false
  },
  redirectPath: '',
  allConfig: ''
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
  // 保存请求地址
  saveBaseUrl (state, href) {
    state.baseUrl = href
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
  },
  // 保存重定向跳转地址
  saveRedirectPath (state, redirectPath) {
    state.redirectPath = redirectPath
  },
  // 保存所有全局配置信息（除基本设置）
  saveAllConfig (state, payload) {
    state.allConfig = payload
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
  // 保存请求地址
  setBaseUrl ({ commit, state }, payload) {
    commit('saveBaseUrl', payload)
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
  // 获取用户信息
  getUserInfo ({ commit, state }) {
    this.$api.user.getUserInfo().then((user) => {
      commit('saveUserInfo', user)
    })
  },
  // 获取全局配置
  getAllConfig ({ commit, state }) {
    this.$api.user.getAllConfig().then((config) => {
      commit('saveAllConfig', config.data)
    })
  },
  // 退出登录
  logOut ({ commit, state }) {
    commit('saveIsLogin', false)
    commit('saveToken', { token: '' })
    commit('saveUserInfo', {})
    commit('saveAutoLogin', { phone: '', password: '', autoLogin: false })
  }
}
