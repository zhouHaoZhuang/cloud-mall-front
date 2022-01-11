export default axios => ({
  // 查询新闻类别列表
  getAllNewsList (params) {
    return axios({
      url: '/ccNewsType',
      params: {
        ...params
      }
    })
  },
  // 查询一系列资源对象，也就是列表
  getNews (params) {
    return axios({
      url: '/ccNews',
      params: {
        ...params
      }
    })
  },
  // 查询一个资源对象
  getOneNews (id) {
    return axios({
      url: `/ccNews/${id}`
    })
  }
})
