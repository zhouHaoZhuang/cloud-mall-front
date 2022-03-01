import Vue from 'vue'
import moment from 'moment'

// 默认格式化为 年-月-日 时:分:秒
export const formatDate = Vue.filter('formatDate', function (date, formatStr) {
  return moment(date).format(formatStr || 'YYYY-MM-DD HH:mm:ss')
})
