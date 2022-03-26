<template>
  <!-- 锚点导航 -->
  <div id="anchor-nav" class="nav-wrap">
    <div class="container">
      <ul class="list">
        <li
          v-for="(item, index) in navData"
          :key="index"
          @click="handleNavJump(item)"
        >
          <span :class="navSelectIndex === index ? 'active' : ''">{{
            item.title
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'
export default {
  components: {},
  props: {
    navData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      navSelectIndex: 0
    }
  },
  methods: {
    // 锚点导航点击
    handleNavJump (item) {
      VueScrollTo.scrollTo(`#${item.id}`, 'body', {
        container: 'body',
        easing: 'ease-in',
        force: true,
        offset: -80,
        cancelable: true,
        x: false,
        y: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-wrap {
  height: 68px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #eee;
  background: #fff;
  .container {
    .list {
      display: flex;
      height: 68px;
      justify-content: space-around;
      transition: all ease 0.8s;
      li {
        height: 66px;
        margin-right: 5px;
        cursor: pointer;
        span {
          display: block;
          height: 68px;
          line-height: 68px;
          padding: 0 10px;
          font-size: 20px;
          color: #333333;
          &.active::after {
            content: '';
            display: block;
            height: 6px;
            background: #3b77e3;
            border-radius: 100px 100px 0px 0px;
            margin-top: -6px;
            // border-bottom: 2px solid #059fff;
          }
        }
        span:hover::after {
          content: '';
          display: block;
          height: 6px;
          background: #3b77e3;
          border-radius: 100px 100px 0px 0px;
          margin-top: -6px;
          // border-bottom: 2px solid #059fff;
        }
      }
    }
  }
}
</style>
