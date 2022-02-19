// 请求地址头
const urls = {
  local: 'http://site.ydidc.com/server',
  dev: 'http://i.ydidc.com/server',
  test: 'http://www.zjyundun.com/server',
  prod: 'http://www.zjyundun.com/server'
}
// 请求头携带domain参数
const domains = {
  local: 'localhost',
  dev: 'localhost'
}

export default {
  BASE_URL: urls[process.env.NODE_ENV],
  DOMAIN_URL: domains[process.env.NODE_ENV]
}
