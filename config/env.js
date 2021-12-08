const urls = {
  dev: 'http://192.168.0.34:8082',
  test: 'http://test.com',
  preprod: 'http://preprod.com',
  prod: 'http://prod.com'
}
const domains = {
  dev: 'localhost',
  test: 'http://test.com',
  preprod: 'http://preprod.com',
  prod: 'http://prod.com'
}

export default {
  BASE_URL: urls[process.env.NODE_ENV],
  DOMAIN_URL: domains[process.env.NODE_ENV]
}
