// state
export const state = () => ({})

// getters
export const getters = {
  get (state) {
    return 'test'
  }
}

// mutations
export const mutations = {
  test (state, payload) {}
}

// actions
export const actions = {
  test ({ commit, state }, payload) {
    // 异步处理
    commit('test', {})
  }
}
