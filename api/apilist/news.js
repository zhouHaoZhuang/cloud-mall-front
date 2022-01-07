export default axios => ({
  // 查询新闻类别列表
  getAllNewsList () {
    return axios({
      url: '/ccNews/AllList'
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
  }
})
