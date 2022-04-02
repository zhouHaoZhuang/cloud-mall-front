<template>
  <div class="banner-container">
    <!-- 轮播图 -->
    <div
      class="banner"
      :style="`background:url(${bannerData[type].bg}) no-repeat center`"
    >
      <div class="container">
        <p>{{ bannerData[type].title }}</p>
        <p>{{ bannerData[type].info }}</p>
        <div class="btn">
          <a
            class="ceshi"
            target="_blank"
            :href="`tencent://Message/?Uin=${
              webInfo.qqNumber || ''
            }&websiteName=local.edu.com:8888=&Menu=yes`"
          >方案应讯</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
          bg: require('~/static/img/programme/financebanner.png')
        },
        online: {
          title: '电商云解决方案',
          info: '适应庞大业务规模、满足业务快速增长',
          bg: require('~/static/img/programme/onlinebanner.png')
        },
        move: {
          title: '移动云解决方案',
          info: '灵活应用虚拟化 保证用户安全访问',
          bg: require('~/static/img/programme/movebanner.png')
        },
        game: {
          title: '游戏云解决方案',
          info: '打造虚拟化、高可用的游戏集群',
          bg: require('~/static/img/programme/gamebanner.png')
        },
        website: {
          title: '网站解决方案',
          info: '专业构架 轻松快捷解决互联网建站问题',
          bg: require('~/static/img/programme/websitebanner.png')
        }
      }
    }
  },
  computed: {
    ...mapState({
      webInfo: state => state.home.webInfo
    })
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
    background-image: url('~/static/img/assurance/bgcolor.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .banner {
    height: 700px;
    max-width: 1920px;
    margin: 0 auto;
    background-size: cover !important;
    .container {
      padding-left: 10px;
      padding-top: 116px;
      color: #fff;
      p:nth-child(1) {
        font-size: 70px;
        font-weight: 800;
        text-align: center;
        color: #fff;
      }
      p:nth-child(2) {
        margin-top: 37px;
        margin-bottom: 115px;
        text-align: center;
        font-size: 20px;
        color: #fff;
      }
      .btn {
        width: 220px;
        height: 60px;
        background: url('~/static/img/programme/btnbanner.png') center no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        font-size: 20px;
        background-color: transparent;
        .ceshi {
          color: #fff;
        }
      }
    }
  }
}
</style>
