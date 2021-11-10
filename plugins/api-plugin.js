import apis from '../api/index'
export default (context, inject) => {
  const apiObject = {}
  for (const i in apis) {
    apiObject[i] = apis[i](context.$axios)
  }
  // 注入全局
  inject('api', apiObject)
}
