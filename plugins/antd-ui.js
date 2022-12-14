import Vue from 'vue'
import {
  Icon,
  Button,
  FormModel,
  Input,
  Tooltip,
  Select,
  Spin,
  Carousel,
  Checkbox,
  Pagination,
  Table,
  Radio,
  message,
  Alert,
  Dropdown,
  Modal,
  Menu,
  Tabs
} from 'ant-design-vue'

import VueClipboard from 'vue-clipboard2'
import VueScrollTo from 'vue-scrollto'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 自定义字体图标
const iconfont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3120193_7d687va3nk3.js' // 在 iconfont.cn 上生成
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
Vue.use(ElementUI)
Vue.use(Button)
Vue.use(FormModel)
Vue.use(Input)
Vue.use(Tooltip)
Vue.use(Select)
Vue.use(Spin)
Vue.use(Carousel)
Vue.use(Checkbox)
Vue.use(Pagination)
Vue.use(Icon)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(Radio)
Vue.use(Alert)
Vue.use(Dropdown)
Vue.use(Modal)
Vue.use(Menu)
Vue.use(Tabs)
Vue.component('Iconfont', iconfont) // 注册组件
Vue.use(VueClipboard)
Vue.use(VueScrollTo, options)
// 全局挂在message组件
Vue.prototype.$message = message
// Vue.prototype.$confirm = confirm
