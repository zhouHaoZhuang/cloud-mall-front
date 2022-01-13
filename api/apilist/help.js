export default axios => ({
  // 获取帮助信息所有分支
  addressList (params) {
    return axios({
      url: `/ccHelpDocument?qp-helpTypeCode-eq=${params.helpTypeCode}`
    })
  },
  // 获取对应的实例和实例属性，属性值(全部)
  getRegionDetail (params) {
    return axios({
      url: '/ccHelpType/getChildByCode/',
      params
    })
  },
  // 获取搜索热门词
  getHot (params) {
    return axios({
      url: '/ccHelpDocument?qp-hot-eq=true',
      params
    })
  },
  getSearchList (params) {
    return axios({
      url: `/ccHelpDocument/query/${params.keyWords}`
    })
  }
})
