import Vue from 'vue'
import direc1 from '../assets/js/directives/directive1.js'

// 全局指令
Vue.directive('direc1', direc1)

// 混入methods
Vue.mixin({
  methods: {
    $seo (title, content, payload = []) {
      return {
        title,
        meta: [{
          hid: 'descript',
          name: 'keywords',
          content
        }].concat(payload)
      }
    }
  }
})
