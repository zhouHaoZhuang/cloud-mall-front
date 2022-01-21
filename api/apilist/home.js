export default axios => ({
  // 获取轮播图列表
  getBannerList (params) {
    return axios({
      url: '/ccBanner',
      params: {
        ...params
      }
    })
  },
  // 获取友情链接
  getFriendLink (params) {
    return axios({
      url: '/ccLink',
      params: {
        ...params
      }
    })
  },
  // 获取公司信息
  getCompanyInfo (params) {
    return axios({
      url: '/ccCompanyInfo',
      params: {
        ...params
      }
    })
  },
  // 获取网站信息
  getWebInfo (params) {
    return axios({
      url: '/ccWebsiteInfo',
      params: {
        ...params
      }
    })
  },
  // 获取新闻公告信息
  getNewsTypeInfo (params) {
    return axios({
      url: '/ccNewsType/partNews',
      params: {
        ...params
      }
    })
  },
  // 根据地址获取经纬度
  getMapLonAndLat (params) {
    return axios({
      url: '/v3/geocode/geo',
      params: {
        ...params
      },
      map: true
    })
  }
})
