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

export default {
  BASE_URL: urls[process.env.NODE_ENV],
  DOMAIN_URL: domains[process.env.NODE_ENV]
}
