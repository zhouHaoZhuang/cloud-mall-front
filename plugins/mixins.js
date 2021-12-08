import Vue from 'vue'
import * as Directives from '../assets/js/directives/directive1.js'

// 全局指令
Vue.use(Directives)

// 混入methods
Vue.mixin({
  methods: {
    $seo (title, content, payload = []) {
      return {
        title,
        meta: [
          {
            hid: 'descript',
            name: 'keywords',
            content
          }
        ].concat(payload)
      }
    }
  }
})
