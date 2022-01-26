import Vue from 'vue'
import Antd, { Icon } from 'ant-design-vue/lib'
import VueClipboard from 'vue-clipboard2'
import VueScrollTo from 'vue-scrollto'
// 自定义字体图标
const iconfont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3120193_6d566engjll.js' // 在 iconfont.cn 上生成
})
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
Vue.component('Iconfont', iconfont) // 注册组件
Vue.use(VueClipboard)
Vue.use(VueScrollTo, options)
