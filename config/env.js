import { getIdcAdminUrl } from '../utils/index'
// 请求地址头
const urls = {
  // dev: 'http://9v46031703.eicp.vip:8082',
  dev: 'http://ims.dev.ydidc.com',
  test: 'http://ims.test.ydidc.com',
  prod: 'http://ims.prod.ydidc.com'
}
// 请求头携带domain参数
const domains = {
  dev: 'localhost'
}
// 跳转控制台地址
// const cloudAdminUrl = {
//   dev: 'http://localhost:8000'
//   // dev: 'http://192.168.12.30:8000'
//   // test: 'http://console.test.ydidc.com',
//   // prod: 'http://console.prod.ydidc.com'
// }
// 获取控制台地址
function getCloudAdminUrl () {
  // return process.env.NODE_ENV === 'dev'
  //   ? cloudAdminUrl[process.env.NODE_ENV]
  //   : getIdcAdminUrl()
  return getIdcAdminUrl()
}

export default {
  BASE_URL: urls[process.env.NODE_ENV],
  DOMAIN_URL: domains[process.env.NODE_ENV],
  ADMIN_URL: getCloudAdminUrl()
}
