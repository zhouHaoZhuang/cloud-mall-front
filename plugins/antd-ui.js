import Vue from 'vue'
import Antd from 'ant-design-vue/lib'
import VueClipboard from 'vue-clipboard2'
import VueScrollTo from 'vue-scrollto'

const options = {
  container: 'body', // 滚动的容器
  duration: 500, // 滚动时间
  easing: 'ease', // 缓动类型
  offset: 0, // 滚动时应应用的偏移量。此选项接受回调函数
  force: true, // 是否应执行滚动
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: true,
  y: true
}

Vue.use(Antd)
Vue.use(VueClipboard)
Vue.use(VueScrollTo, options)
