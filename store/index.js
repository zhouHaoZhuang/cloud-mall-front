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
    const token = $cookies.get('token') ? $cookies.get('token') : ''
    // console.log('nuxtServerInit', token)
    store.commit('user/saveToken', token)
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
