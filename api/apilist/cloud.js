export default axios => ({
  // 获取地域信息
  addressList () {
    return axios({
      url: '/index/query/region'
    })
  },
  // 获取对应的实例和实例属性，属性值
  getRegionDetail (params) {
    return axios({
      url: '/index/instance',
      params
    })
  },
  // 获取单个地域对应的内存和cpu信息
  getAddressCpuAndDisk (params) {
    return axios({
      url: `/index/query/property/value/${params.regionId}`
    })
  },
  // 查询云服务器ECS支持的镜像
  systemList (params) {
    return axios({
      url: `/index/query/images/${params.regionId}`
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
