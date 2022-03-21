// 请求地址头
const baseUrl = {
  local: 'http://site.sailayun.com/ims',
  // local: '/api',
  dev: 'site.sailayun.com/ims',
  test: 'site.zjyundun.com/ims',
  prod: 'site.slayun.com/ims'
}
// 请求头携带domain参数
const domains = {
  local: 't946471742443573248.site.sailayun.com'
}

export default {
  BASE_URL: baseUrl[process.env.NODE_ENV],
  DOMAIN_URL: domains[process.env.NODE_ENV]
}
