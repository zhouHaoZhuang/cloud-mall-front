// state
export const state = () => ({
  // 友情链接
  friendLinks: [],
  // 网站信息
  webInfo: {}
})

// getters
export const getters = {
  get (state) {
    return 'test'
  }
}

// mutations
export const mutations = {
  // 保存友情链接
  saveFriendLinks (state, payload) {
    state.friendLinks = [...payload]
  },
  // 保存网站设置信息
  saveWebInfo (state, payload) {
    state.webInfo = { ...payload }
  }
}

// actions
export const actions = {
  // 保存友情链接数据
  setFriendLinks ({ commit, state }, payload) {
    commit('saveFriendLinks', payload)
  },
  // 保存网站全局设置信息
  setWebCompanyInfo ({ commit, state }, payload) {
    commit('saveWebInfo', payload)
  }
}
