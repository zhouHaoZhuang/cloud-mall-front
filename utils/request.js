import axios from 'axios'
import { message } from 'ant-design-vue'
import env from '@/config/env'
// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: env.VUE_APP_BASE_URL,
  timeout: 5000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
  console.log('error', error.response)
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use((config) => {
  // const token = store.user.token
  // if (token) {
  //   // 让每个请求携带token-- ['ADMINTOKEN']为自定义key 请根据实际情况自行修改
  //   config.headers.ADMINTOKEN = token
  // }
  config.headers.ADMINTOKEN = 'dsadsdadasdas'
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  const data = response.data
  const errno = data.errno
  const errmsg = data.errmsg
  // 从 localstorage 获取 token
  if (errno !== 200) {
    message.warning(errmsg)
    if (errno === 10001 || errno === 10006 || errno === 3) {
      // store.dispatch('user/logout').then(() => {
      //   location.reload()
      // })
    }
    return Promise.reject(data)
  }
  return data
}, errorHandler)

export default request
