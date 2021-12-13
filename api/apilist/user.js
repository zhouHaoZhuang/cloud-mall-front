export default axios => ({
  // 登录
  login (data) {
    return axios.post('/user/login', data)
  },
  // 注册
  register (data) {
    return axios.post('/user/register', data)
  },
  // 获取验证码
  getCode (data) {
    return axios.post('/sms/sendSms', data)
  }
})
