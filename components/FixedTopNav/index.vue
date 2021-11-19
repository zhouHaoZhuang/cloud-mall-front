<template>
  <div v-if="navShow" class="fixed-top-nav">
    <div class="container">
      <div class="left">
        <div class="nav-server-name">
          代理招募
        </div>
        <ul class="nav-other-list">
          <li>
            <a href="#">代理招募</a>
          </li>
        </ul>
      </div>
      <div class="nav-list">
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
      <div class="right-btn">
        立即加入
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      navSelectIndex: 0,
      scrollTop: 0,
      navShow: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
    this.getElementDetail()
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    // 锚点导航点击
    handleNavJump (item) {
      const nodeEle = document.querySelector(`#${item.id}`)
      nodeEle.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
      document.documentElement.scrollTop = 80
    },
    // 锚点导航跳转后将页面滚动条回滚锚点吸顶导航的高度-因为scrollIntoView方法只能回到顶部，会造成遮挡
    scrollBackHeight () {
      const timer = setInterval(() => {
        const ispeed = Math.floor(-this.scrollTop / 13)
        document.documentElement.scrollTop = document.body.scrollTop =
          this.scrollTop + ispeed
        if (this.scrollTop === 80) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 获取所有需要锚点跳转元素
    getElementDetail () {
      const result = []
      this.navData.forEach((ele) => {
        result.push(document.querySelector(`#${ele.id}`))
      })
      console.log('最终获取的元素是', result)
      console.log('当前滚动条的位置', document.documentElement.scrollTop)
      result.forEach((ele) => {
        console.log('获取的元素的位置信息', ele.offsetTop)
      })
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      // 页面滚动条的位置
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.scrollTop = scrollTop
      // 页面内锚点导航距离页面顶部的位置
      const navTop = document.querySelector('#anchor-nav').offsetTop
      if (this.scrollTop > navTop) {
        this.navShow = true
      } else {
        // this.navShow = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed-top-nav {
  width: 100%;
  height: 68px;
  position: fixed;
  top: -1px;
  z-index: 9999;
  border-top: 1px solid rgba(247, 249, 250, 0.36);
  background: url('~/static/img/common/banner_nav_bg.png') repeat-x;
  display: flex;
  .container {
    position: relative;
    .left {
      position: absolute;
      font-size: 16px;
      color: #4c4c4c;
      padding-left: 61px;
      height: 68px;
      line-height: 68px;
      width: auto;
      padding-right: 25px;
      min-width: 185px;
      &::before {
        position: absolute;
        left: 20px;
        top: 2px;
        width: 16px;
        height: 14px;
        content: url('~/static/img/common/nav_server_ico.png');
      }
      & > ul {
        display: none;
        position: absolute;
        left: 0;
        right: 0;
        top: 60px;
        background-color: #fafafa;
        width: 100%;
        padding: 10px 0;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        li {
          height: 50px;
          line-height: 50px;
          a {
            display: block;
            height: 100%;
            color: #4c4c4c;
            font-size: 14px;
            padding: 0 23px;
            transition: 0s;
            &:hover {
              background-color: #059fff;
              color: #fff;
            }
          }
        }
      }
      &:hover {
        background-color: #fafafa;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        margin-left: -1px;
        ul {
          display: block;
          border: 1px solid #eee;
          border-top: none;
        }
      }
    }
    .nav-list {
      .list {
        display: flex;
        height: 68px;
        justify-content: space-around;
        transition: all ease 0.8s;
        position: absolute;
        right: 100px;
        top: 0;
        li {
          height: 66px;
          margin-right: 5px;
          cursor: pointer;
          span {
            display: block;
            height: 68px;
            line-height: 68px;
            padding: 0 10px;
            font-size: 14px;
            color: #4c4c4c;
            &.active {
              height: 64px;
              border-bottom: 2px solid #059fff;
            }
          }
          span:hover {
            height: 64px;
            border-bottom: 2px solid #059fff;
          }
        }
      }
    }
    .right-btn {
      position: absolute;
      right: 0px;
      top: 20px;
      width: 100px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      background: #ff6600;
      cursor: pointer;
      &:hover {
        color: #059fff;
      }
    }
  }
}
</style>
