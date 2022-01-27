export default axios => ({
  // 查询公司简介
  getCompanyPage () {
    return axios({
      url: '/ccPage'
    })
  }
})
