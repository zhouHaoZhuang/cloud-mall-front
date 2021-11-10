const urls = {
  dev: 'http://dev.com',
  test: 'http://test.com',
  preprod: 'http://preprod.com',
  prod: 'http://prod.com'
}

export default {
  BASE_URL: urls[process.env.NODE_ENV]
}
