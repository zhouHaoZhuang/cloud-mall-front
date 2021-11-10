export default axios => ({
  list (params) {
    return axios({
      url: '/common/Handler.ashx',
      params: {
        ...params
      }
    })
  }
})
