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
  async nuxtServerInit (store, { app: { $cookies }, req }) {
    // 主模块初始化数据到store里 --token信息
    const token = $cookies.get('token') ? $cookies.get('token') : ''
    store.commit('user/saveToken', token)
    // 获取网站+公司+配置的数据
    // 保存浏览器地址
    store.dispatch('user/setWindowsHref', req.headers.host)
    // 获取友情链接
    const linksData = await this.$api.home.getFriendLink()
    store.dispatch('home/setFriendLinks', linksData.data?.list || [])
    // 获取网站信息+公司信息
    const webInfoData = await this.$api.home.getWebInfo()
    const companyInfoData = await this.$api.home.getCompanyInfo()
    let resultData = {}
    const newArr = [
      ...(webInfoData.data?.list || []),
      ...(companyInfoData.data?.list || [])
    ]
    newArr.forEach((item) => {
      resultData = { ...resultData, ...item }
    })
    // 重置本地数据
    store.dispatch('home/setWebCompanyInfo', {})
    store.dispatch('home/setWebCompanyInfo', resultData)
    // 获取全局配置
    const allConfigData = await this.$api.user.getAllConfig()
    store.dispatch('user/saveAllConfig', allConfigData.data)
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
