export default axios => ({
  // 登录
  login (data) {
    return axios.post('/user/login', data)
  },
  // 获取用户信息
  getUserInfo () {
    return axios({
      url: '/ccCorporation/getByToken'
    })
  },
  // 注册
  register (data) {
    return axios.post('/user/register', data)
  },
  // 获取验证码
  getCode (data) {
    return axios.post('/sms/sendSms', data)
  },
  // 忘记密码-修改密码
  forgetPwd (data) {
    return axios.post('/user/findPassword', data)
  }
})
