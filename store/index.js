// import request from '../utils/request'
// 主模块
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
  nuxtServerInit (store, { app: { $cookies } }) {
    // 主模块初始化数据到store里 --token信息
    console.log('nuxtServerInit')
    const user = $cookies.get('user')
      ? $cookies.get('user')
      : { token: '', userInfo: {} }
    store.commit('user/saveUserInfo', user)
  },
  // 查询列表
  getList ({ commit, state }, params) {
    // return request({
    //   method: 'get',
    //   url: '/goods-center/admin/goods/board/spu/list',
    //   params: {
    //     ...params
    //   }
    // })
  }
}
