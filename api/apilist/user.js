export default axios => ({
  // 登录
  login (data) {
    return axios.post('/api/home/list', data)
  },
  // 注册
  register (data) {
    return axios.post('/api/home/list', data)
  },
  // 获取验证码
  getCode (data) {
    return axios.post('/sms/sendSms', data)
  }
})
