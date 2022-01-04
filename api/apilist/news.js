export default axios => ({
  // 查询新闻类别列表
  getAllNewsList () {
    return axios({
      url: '/ccNews/AllList'
    })
  }
})
