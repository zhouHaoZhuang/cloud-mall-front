export default axios => ({
  list (data) {
    return axios.post('/api/home/list', data)
  }
})
