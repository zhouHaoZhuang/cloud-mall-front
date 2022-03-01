<template>
  <div class="fixed-top-nav" :style="`opacity:${navShow ? 1 : 0}`">
    <div class="container">
      <div class="left">
        <div class="nav-server-name">
          {{ linkTitle }}
        </div>
        <ul class="nav-other-list">
          <li
            v-for="(item, index) in linksList"
            :key="index"
            :style="`display:${item.title === linkTitle ? 'none' : 'block'}`"
          >
            <a :href="item.path">{{ item.title }}</a>
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
import VueScrollTo from 'vue-scrollto'
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
      oldScrollTop: 0, // 记录上一次滚动结束后的滚动距离
      navShow: true,
      linksList: [
        {
          title: '弹性云服务器',
          info: '高速稳定高弹性的计算服务',
          path: '/cloud-choose',
          hot: true,
          new: false
        },
        {
          title: '服务器托管',
          info: '安全贴心高品质的托管服务',
          path: '',
          hot: false,
          new: false
        },
        {
          title: '裸金属服务器',
          info: '高性能安全隔离物理集群服务',
          path: '',
          hot: false,
          new: true
        },
        {
          title: '云虚拟主机',
          info: '基于云计算的虚拟主机服务',
          path: '',
          hot: true,
          new: false
        },
        {
          title: '负载均衡',
          info: '高性能流量分发的负载均衡服务',
          path: '/balancing-ba',
          hot: false,
          new: false
        },
        {
          title: 'SSL证书',
          info: '提供一站式的证书部署服务',
          path: '',
          hot: false,
          new: false
        },
        {
          title: '域名注册',
          info: '提供五星级的域名注册服务',
          path: '/Domain-name',
          hot: true,
          new: false
        },
        {
          title: '云监控',
          info: '精准灵活超便捷的资源预警服务',
          path: '',
          hot: false,
          new: false
        },
        {
          title: '对象存储',
          info: '高可用、易扩展、低成本、一站式',
          path: '/object-based-use',
          hot: false,
          new: false
        },
        {
          title: 'CDN加速',
          info: '智能调度的内容分发服务',
          path: '',
          hot: false,
          new: false
        },
        {
          title: '云数据库 MySQL',
          info: '稳定可靠、可弹性伸缩的数据方案',
          path: '/mysql',
          hot: false,
          new: false
        },
        {
          title: '云数据库 SQL Server',
          info: '安全运行、轻松管理的数据方案',
          path: '/sqlserver',
          hot: false,
          new: false
        },
        {
          title: '浙江云盾分销系统',
          info: '一键部署、低成本、快速运营',
          path: '',
          hot: false,
          new: true
        },
        {
          title: '百度智能建站',
          info: '智能化构建网站和小程序',
          path: '',
          hot: false,
          new: true
        },
        {
          title: '代理招募',
          info: '',
          path: '/about/recruit',
          hot: false,
          new: true
        }
      ],
      linkTitle: ''
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        const result = this.linksList.find(ele => ele.path === route.path)
        this.linkTitle = result.title
      }
    },
    scrollTop: {
      handler (newVal, oldVal) {
        setTimeout(() => {
          if (newVal === this.scrollTop) {
            this.setNavSelectIndex(this.scrollTop)
          }
        }, 20)
      }
    }
  },
  created () {
    this.navShow = false
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
    this.scrollToTop()
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
    this.navShow = false
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
        onDone: (ele) => {
          // 滚动结束
          this.navSelectIndex = this.navData.findIndex(j => j.id === ele.id)
        },
        x: false,
        y: true
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
        this.navShow = false
        this.navSelectIndex = 0
      }
    },
    // 获取最小差值
    limit (arr, num) {
      const newArr = []
      arr.map((x) => {
        // 对数组各个数值求差值
        return newArr.push(Math.abs(x - num))
      })
      // 求最小值的索引
      const index = newArr.indexOf(Math.min.apply(null, newArr))
      // 返回最小值
      // return arr[index]
      // 返回最小值索引
      return index
    },
    // 获取所有需要锚点跳转元素
    getElementDetail () {
      const result = []
      this.navData.forEach((ele) => {
        result.push(document.querySelector(`#${ele.id}`))
      })
      return result.map((ele) => {
        return ele.offsetTop
      })
    },
    // 页面滚动时设置导航的下划线值
    setNavSelectIndex (top) {
      const allNode = this.getElementDetail()
      const result = this.limit(allNode, top)
      this.navSelectIndex = result
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
  z-index: 99;
  border-top: 1px solid rgba(247, 249, 250, 0.36);
  background: url('~/static/img/common/banner_nav_bg.png') repeat-x;
  display: flex;
  opacity: 0;
  transition: opacity 0.3s;
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
