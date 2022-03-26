export default axios => ({
  // 立即开通
  isAccountSetup () {
    return axios.post('/tcOrder/checkOpenCdnProductServer')
  },
  // 立即开通
  instantAccountSetup () {
    return axios.post('/tcOrder/openCdnProductServer')
  },
  // 获取产品列表
  productList (params) {
    return axios({
      url: '/icProduct',
      params
    })
  },
  // 获取地域信息
  addressList () {
    return axios({
      url: '/index/query/region'
    })
  },
  // 获取分类列表
  typeList () {
    return axios({
      url: '/index/getSpecFamily'
    })
  },
  // 获取对应的实例和实例属性，属性值
  getRegionDetail (params) {
    return axios({
      url: '/index/instance',
      params
    })
  },
  // 获取单个地域对应的cpu信息
  getAddressCpu (params) {
    return axios({
      url: '/index/query/property/cpu',
      params
    })
  },
  // 获取单个地域对应的内存信息
  getAddressDisk (params) {
    return axios({
      url: '/index/query/property/memory',
      params
    })
  },
  // 查询云服务器ECS支持的镜像
  systemList (params) {
    return axios({
      url: '/index/query/images',
      params
    })
  },
  // 查询服务器价格
  getCloudPrice (data) {
    return axios.post('/index/query/price', data)
  },
  // 创建服务器订单
  createCloudOrder (data) {
    return axios.post('/tcOrder', data)
  }
})
