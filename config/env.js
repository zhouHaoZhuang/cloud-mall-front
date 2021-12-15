// 请求地址头
const urls = {
  // dev: 'http://192.168.0.34:8082',
  dev: 'http://ims.dev.ydidc.com',
  test: 'http://ims.dev.ydidc.com',
  preprod: 'http://ims.dev.ydidc.com',
  prod: 'http://ims.dev.ydidc.com'
}
// 请求头携带domain参数
const domains = {
  dev: 'localhost'
  // test: 'http://test.com',
  // preprod: 'http://preprod.com',
  // prod: 'http://prod.com'
}
// 跳转控制台地址
const cloudAdminUrl = {
  dev: 'http://localhost:8000/#/dashboard'
  // test: 'http://test.com',
  // preprod: 'http://preprod.com',
  // prod: 'http://prod.com'
}

export default {
  BASE_URL: urls[process.env.NODE_ENV],
  DOMAIN_URL: domains[process.env.NODE_ENV],
  ADMIN_URL: cloudAdminUrl[process.env.NODE_ENV]
}
