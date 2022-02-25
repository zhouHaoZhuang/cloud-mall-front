// 请求地址头
const baseUrl = {
  local: '/server',
  dev: '/server',
  test: '/server',
  prod: '/server'
}
// 请求头携带domain参数
const domains = {
  local: 't946471742443573248.site.ydidc.com'
}

export default {
  BASE_URL: baseUrl[process.env.NODE_ENV],
  DOMAIN_URL: domains[process.env.NODE_ENV]
}
