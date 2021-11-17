<template>
  <div class="banner-container">
    <!-- 占位div -->
    <div class="seize" />
    <!-- 轮播图 -->
    <div
      class="banner"
      :style="`background:url(${bannerData[type].bg}) no-repeat center`"
    >
      <div class="container">
        <p>{{ bannerData[type].title }}</p>
        <p>{{ bannerData[type].info }}</p>
        <div class="btn">
          立即咨询
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    type: {
      type: String,
      default: 'finance'
    }
  },
  data () {
    return {
      bannerData: {
        finance: {
          title: '金融云解决方案',
          info: '随时扩容以应对互联网流量变化',
          bg: require('~/static/img/programme/finance.jpg')
        },
        online: {
          title: '电商云解决方案',
          info: '适应庞大业务规模、满足业务快速增长',
          bg: require('~/static/img/programme/online.jpg')
        },
        move: {
          title: '移动云解决方案',
          info: '灵活应用虚拟化 保证用户安全访问',
          bg: require('~/static/img/programme/move.jpg')
        },
        game: {
          title: '游戏云解决方案',
          info: '打造虚拟化、高可用的游戏集群',
          bg: require('~/static/img/programme/game.jpg')
        },
        website: {
          title: '网站解决方案',
          info: '专业构架 轻松快捷解决互联网建站问题',
          bg: require('~/static/img/programme/website.jpg')
        }
      }
    }
  },
  methods: {
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  .seize {
    height: 80px;
    background: #192933;
  }
  .banner {
    height: 468px;
    .container {
      padding-top: 170px;
      padding-left: 10px;
      color: #fff;
      p:nth-child(1) {
        font-size: 44px;
        margin: 0;
      }
      p:nth-child(2) {
        margin-top: 30px;
        margin-bottom: 60px;
        font-size: 18px;
      }
      .btn {
        width: 160px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        border: 1px solid #fff;
        background-color: transparent;
      }
    }
  }
}
</style>
